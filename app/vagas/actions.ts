"use server";

import { revalidatePath } from "next/cache";
import { empresas as empresasPublicadas } from "@/data/empresas";
import { vagas as vagasPublicadas } from "@/dados/vagas";
import { EsquemaDaCandidatura, EsquemaDeArquivar } from "@/lib/esquemas";
import { valoresDe, porCampo } from "@/lib/formulario";
import { prisma } from "@/lib/prisma";
import type { Estado } from "@/lib/tipos";

export async function arquivarVaga(dados: FormData): Promise<void> {
  const validacao = EsquemaDeArquivar.safeParse({ id: dados.get("id") });
  if (!validacao.success) return;

  const resultado = await prisma.vaga.updateMany({
    where: { id: validacao.data.id, arquivada: false },
    data: { arquivada: true },
  });

  if (resultado.count > 0) revalidatePath("/vagas");
}

export async function enviarCandidatura(_estadoAnterior: Estado, dados: FormData): Promise<Estado> {
  const valores = valoresDe(dados);
  const validacao = EsquemaDaCandidatura.safeParse({
    vagaId: dados.get("vagaId"),
    nome: dados.get("nome"),
    email: dados.get("email"),
  });

  if (!validacao.success) {
    return { ok: false, erros: porCampo(validacao.error), valores };
  }

  const { vagaId, nome, email } = validacao.data;
  const [vagaNoBanco, vagaPublicada] = await Promise.all([
    prisma.vaga.findUnique({ where: { id: vagaId } }),
    Promise.resolve(vagasPublicadas.find((vaga) => vaga.id === vagaId)),
  ]);

  if (!vagaNoBanco && !vagaPublicada) {
    return {
      ok: false,
      erros: {},
      valores,
      mensagem: "Esta vaga não existe mais. A candidatura não foi registrada.",
    };
  }

  try {
    if (vagaNoBanco) {
      await prisma.candidatura.create({
        data: { nome, email, vaga: { connect: { id: vagaId } } },
      });
    } else {
      const empresaPublicada = empresasPublicadas.find(
        (empresa) => empresa.slug === vagaPublicada?.empresaSlug,
      );

      if (!vagaPublicada || !empresaPublicada) {
        return {
          ok: false,
          erros: {},
          valores,
          mensagem: "Esta vaga não está disponível para candidatura.",
        };
      }

      await prisma.candidatura.create({
        data: {
          nome,
          email,
          vaga: {
            connectOrCreate: {
              where: { id: vagaId },
              create: {
                id: vagaPublicada.id,
                titulo: vagaPublicada.titulo,
                area: vagaPublicada.area,
                senioridade: vagaPublicada.senioridade,
                local: vagaPublicada.local,
                aceitaIniciante: vagaPublicada.aceitaIniciante,
                descricao: vagaPublicada.descricao,
                empresa: {
                  connectOrCreate: {
                    where: { slug: empresaPublicada.slug },
                    create: empresaPublicada,
                  },
                },
              },
            },
          },
        },
      });
    }
  } catch {
    return {
      ok: false,
      erros: {},
      valores,
      mensagem: "Não foi possível registrar a candidatura. Confira se a vaga ainda existe e tente novamente.",
    };
  }

  revalidatePath(`/vagas/${validacao.data.vagaId}`);
  return { ok: true, erros: {}, valores: {}, mensagem: "Candidatura registrada com sucesso." };
}