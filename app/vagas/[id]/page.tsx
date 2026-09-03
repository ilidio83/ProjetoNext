import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { vagas } from "@/data/vagas";

// EXTRA: faz o título da aba virar o nome da vaga.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const vaga = vagas.find((v) => v.id === id);
  return { title: vaga ? `${vaga.titulo} · Leque de Vagas` : "Vaga não encontrada" };
}

export default async function PaginaDaVaga({
  // 1. a caixinha com os pedaços da URL chega aqui
  params,
}: {
  // Promise = ela chega como um "vale", não pronta
  params: Promise<{ id: string }>;
}) {
  // 2. await troca o vale pelo valor
  const { id } = await params;

  // 3. procura a vaga com esse id
  const vaga = vagas.find((v) => v.id === id);

  // 4. não achou? para tudo e mostra o not-found.tsx desta pasta
  if (!vaga) {
    notFound();
  }

  return (
    <article className="vaga">
      <h1>{vaga.titulo}</h1>

      <p>
        <Link href={`/empresas/${vaga.empresaSlug}`}>{vaga.empresa}</Link>
        {" · "}{vaga.area} · {vaga.senioridade} · {vaga.local}
      </p>

      {vaga.aceitaIniciante && <p className="selo">Aceita quem está começando</p>}

      <p>{vaga.descricao}</p>

      <Link href="/vagas">← todas as vagas</Link>
    </article>
  );
}