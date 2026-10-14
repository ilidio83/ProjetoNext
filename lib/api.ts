import type { Prisma } from "@/generated/prisma/client";
import type { Empresa } from "@/lib/tipos";
import { empresas as empresasPublicadas } from "@/data/empresas";
import { vagas as vagasPublicadas, type VagaPublicada } from "@/dados/vagas";
import { prisma } from "@/lib/prisma";

type VagaComEmpresa = Prisma.VagaGetPayload<{
  include: { empresa: { select: { nome: true } } };
}>;

function paraVagaPublicada(vaga: VagaComEmpresa): VagaPublicada {
  return {
    id: vaga.id,
    titulo: vaga.titulo,
    empresa: vaga.empresa.nome,
    empresaSlug: vaga.empresaSlug,
    area: vaga.area,
    senioridade: vaga.senioridade,
    local: vaga.local,
    aceitaIniciante: vaga.aceitaIniciante,
    descricao: vaga.descricao,
  };
}

export async function listarVagas(): Promise<VagaPublicada[]> {
  const vagas = await prisma.vaga.findMany({
    where: { arquivada: false },
    include: { empresa: { select: { nome: true } } },
  });

  return vagas.map(paraVagaPublicada);
}

// A vaga persistida vence; a publicação continua servindo de fallback para
// fichas conhecidas que ainda não foram criadas no banco.
export async function buscarVaga(id: string): Promise<VagaPublicada | undefined> {
  const vaga = await prisma.vaga.findUnique({
    where: { id },
    include: { empresa: { select: { nome: true } } },
  });

  return vaga ? paraVagaPublicada(vaga) : vagasPublicadas.find((item) => item.id === id);
}

export async function listarEmpresas(): Promise<Empresa[]> {
  const porSlug = new Map(
    empresasPublicadas.map((empresa) => [empresa.slug, empresa]),
  );

  for (const empresa of await prisma.empresa.findMany()) {
    porSlug.set(empresa.slug, empresa);
  }

  return [...porSlug.values()];
}

export async function buscarEmpresa(slug: string): Promise<Empresa | undefined> {
  const empresaDoBanco = await prisma.empresa.findUnique({ where: { slug } });
  return empresaDoBanco ?? empresasPublicadas.find((empresa) => empresa.slug === slug);
}