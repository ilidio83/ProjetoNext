"use server";

import { revalidatePath } from "next/cache";
import { buscarEmpresa } from "@/lib/api";
import { porCampo, valoresDe } from "@/lib/formulario";
import { prisma } from "@/lib/prisma";
import { EsquemaDaEmpresa } from "@/lib/esquemas";
import type { Estado } from "@/lib/tipos";

export async function salvarPerfilEmpresa(
  slug: string,
  _estadoAnterior: Estado,
  formData: FormData,
): Promise<Estado> {
  const valores = valoresDe(formData);
  const resultado = EsquemaDaEmpresa.safeParse({
    nome: formData.get("nome"),
    sobre: formData.get("sobre"),
    site: formData.get("site"),
  });

  if (!resultado.success) {
    return {
      ok: false,
      erros: porCampo(resultado.error),
      valores,
    };
  }

  if (!(await buscarEmpresa(slug))) {
    return {
      ok: false,
      erros: {},
      valores,
      mensagem: "Empresa não encontrada.",
    };
  }

  await prisma.empresa.upsert({
    where: { slug },
    create: { slug, ...resultado.data },
    update: resultado.data,
  });

  revalidatePath(`/empresas/${slug}`);
  revalidatePath(`/empresas/${slug}/editar`);
  revalidatePath(`/api/empresas/${slug}`);

  return {
    ok: true,
    erros: {},
    valores,
    mensagem: "Perfil atualizado com sucesso.",
  };
}
