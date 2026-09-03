import Link from "next/link";
import { notFound } from "next/navigation";
import { vagas } from "@/data/vagas";

export default async function PaginaDaEmpresa({
  params,
}: {
  // "slug", porque a pasta se chama [slug]
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // filter devolve TODAS as que batem (find devolve só a primeira)
  const daEmpresa = vagas.filter((v) => v.empresaSlug === slug);

  if (daEmpresa.length === 0) {
    notFound();
  }

  return (
    <section>
      <h1>{daEmpresa[0].empresa}</h1>
      <p>{daEmpresa.length} vaga(s) aberta(s)</p>

      <ul>
        {daEmpresa.map((vaga) => (
          <li key={vaga.id}>
            <Link href={`/vagas/${vaga.id}`}>{vaga.titulo}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}