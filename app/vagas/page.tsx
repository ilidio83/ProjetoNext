import Link from "next/link";
import { vagas } from "@/data/vagas";

export default function ListaDeVagas() {
  return (
    <ul className="lista">
      {vagas.map((vaga) => (
        // key: um identificador único por item da lista.
        // Sem ele o Next avisa no terminal.
        // E no href: crases + ${} = texto com um buraco
        // preenchido na hora com o id daquela vaga.
        <li key={vaga.id}>
          <Link href={`/vagas/${vaga.id}`}>
            <strong>{vaga.titulo}</strong>
            <span>{vaga.empresa} · {vaga.local}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}