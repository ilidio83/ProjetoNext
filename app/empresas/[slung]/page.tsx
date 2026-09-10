import { notFound } from "next/navigation";
import { vagas } from "@/data/vagas";
import { empresas } from "@/data/empresas";
import AbasDaEmpresa from "@/components/AbasDaEmpresa";

export default async function PaginaDaEmpresa({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // await params: igualzinho à aula 02. A fronteira não mudou isso.
  const { slug } = await params;
  const empresa = empresas.find((e) => e.slug === slug);
  if (!empresa) notFound();

  // O cruzamento acontece AQUI, no servidor, antes de a tela existir.
  const vagasDaEmpresa = vagas.filter((v) => v.empresaSlug === slug);

  return (
    <article>
      <h1>{empresa.nome}</h1>
      {/* Um texto e uma lista de objetos atravessam a fronteira sem susto. */}
      <AbasDaEmpresa sobre={empresa.sobre} vagas={vagasDaEmpresa} />
    </article>
  );
}