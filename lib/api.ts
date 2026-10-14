import type { Vaga, Empresa } from "@/lib/tipos";
import { empresas as empresasPublicadas } from "@/data/empresas";
import { vagas } from "@/dados/vagas";
import { prisma } from "@/lib/prisma";

export async function listarVagas(): Promise<Vaga[]> {
  return vagas;
}

// Buscar UMA vaga é buscar todas e achar. Parece desperdício e não é: as
// duas chamadas são o MESMO fetch, com a mesma URL e as mesmas opções —
// o Next junta as duas num pedido só dentro do mesmo request.
export async function buscarVaga(id: string): Promise<Vaga | undefined> {
  const vagas = await listarVagas();
  return vagas.find((vaga) => vaga.id === id);
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