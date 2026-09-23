import { Suspense } from "react";
import { listarVagas } from "@/lib/api";
import MuralDeVagas from "@/components/MuralDeVagas";
import NumerosDoCatalogo from "@/components/NumerosDoCatalogo";
import NumerosEsqueleto from "@/components/NumerosEsqueleto";
import ListaEsqueleto from "@/components/ListaEsqueleto";

// Combinem isto: se a página inteira for async, ela espera antes de mandar
// qualquer coisa, e aí nem o <h1> chega cedo. Duas formas de resolver:
//   a) a página NÃO é async, e CADA bloco que busca vira um filho async;
//   b) a página busca o essencial e só o bloco lento vai para o Suspense.
// Abaixo, a (a) — que é a que ensina melhor o que o Suspense faz.
export default function PaginaDeVagas() {
  return (
    <>
      <h1>Vagas</h1>                          {/* chega em ~0 ms */}

      <Suspense fallback={<NumerosEsqueleto />}>
        <NumerosDoCatalogo />                {/* chega quando ficar pronto */}
      </Suspense>

      <Suspense fallback={<ListaEsqueleto />}>
        <ListagemDeVagas />                  {/* async, busca sozinho */}
      </Suspense>
    </>
  );
}

// O componente que embrulha o mural da aula 03. Ele busca, o mural filtra.
async function ListagemDeVagas() {
  const vagas = await listarVagas();
  return <MuralDeVagas vagas={vagas} />;
}