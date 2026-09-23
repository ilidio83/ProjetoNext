import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { listarVagas, buscarVaga } from "@/lib/api";
import DescricaoDaVaga from "@/components/DescricaoDaVaga";

// Desde o Next 15, params é uma Promise. É por isso que ele leva await.
type Props = { params: Promise<{ id: string }> };

// ─── A LISTA DO QUE PRÉ-GERAR ──────────────────────────────────────────
// O Next não tem como adivinhar QUAIS ids existem — a pasta [id] atende
// infinitos endereços. Esta função conta. Ela roda UMA vez, no build.
export async function generateStaticParams() {
  const vagas = await listarVagas();

  // A CHAVE tem que se chamar `id`, igual ao nome da pasta [id]. Nome
  // errado não dá erro: simplesmente não gera nada, em silêncio.
  // E o valor tem que ser TEXTO — endereço é texto.
  return vagas.map((vaga) => ({ id: String(vaga.id) }));
}

// ─── O TÍTULO DA ABA ───────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const vaga = await buscarVaga(id);

  // Aqui NÃO se chama notFound(): quem decide isso é a página. Esta função
  // só precisa devolver um título que não minta.
  if (!vaga) return { title: "Vaga não encontrada · Leque de Vagas" };

  return {
    title: `${vaga.titulo} · ${vaga.empresa}`,
    description: vaga.descricao.slice(0, 150),
  };
}

// ─── A PÁGINA ──────────────────────────────────────────────────────────
export default async function PaginaDaVaga({ params }: Props) {
  const { id } = await params;
  const vaga = await buscarVaga(id);

  // FRENTE 3: o id que não existe. notFound() não devolve nada — ele
  // interrompe a renderização e entrega o not-found.tsx da aula 02.
  if (!vaga) notFound();

  return (
    <article>
      <h1>{vaga.titulo}</h1>
      <DescricaoDaVaga texto={vaga.descricao} />   {/* o "ver mais" da aula 03 */}
    </article>
  );
}