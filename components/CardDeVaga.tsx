import Link from "next/link";
import { arquivarVaga } from "@/app/vagas/actions";
import type { VagaPublicada } from "@/dados/vagas";

export default function CardDeVaga({ vaga }: { vaga: VagaPublicada }) {
  return (
    <li>
      <Link href={`/vagas/${vaga.id}`}>
        {vaga.titulo}
        <span>
          {vaga.empresa} · {vaga.area} · {vaga.senioridade} · {vaga.local}
        </span>
      </Link>
      {vaga.aceitaIniciante && <span className="selo">aceita iniciante</span>}
      <form action={arquivarVaga}>
        <input type="hidden" name="id" value={vaga.id} />
        <button type="submit">Arquivar vaga</button>
      </form>
    </li>
  );
}