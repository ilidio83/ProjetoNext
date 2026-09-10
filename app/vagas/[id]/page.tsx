import Link from "next/link";
import { notFound } from "next/navigation";
import { vagas } from "@/data/vagas";
import BotaoCopiarLink from "@/components/BotaoCopiarLink";
import DescricaoDaVaga from "@/components/DescricaoDaVaga";
import FormularioDeCandidatura from "@/components/FormularioDeCandidatura";

export default async function PaginaDaVaga({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vaga = vagas.find((v) => v.id === id);
  if (!vaga) notFound();

  return (
    <article>
      {/* Título e ficha: vêm prontos do servidor. Não mudam depois. */}
      <h1>{vaga.titulo}</h1>
      <p>
        {vaga.empresa} · {vaga.area} · {vaga.senioridade} · {vaga.local}
      </p>

      {/* Daqui pra baixo, três componentes de cliente lado a lado.
          Cada um tem a própria memória, e nenhum sabe do outro. */}
      <BotaoCopiarLink titulo={vaga.titulo} />
      <DescricaoDaVaga texto={vaga.descricao} />

      <Link href={`/empresas/${vaga.empresaSlug}`}>ver a empresa</Link>

      <h2>Candidatar-se</h2>
      <FormularioDeCandidatura tituloDaVaga={vaga.titulo} />
    </article>
  );
}