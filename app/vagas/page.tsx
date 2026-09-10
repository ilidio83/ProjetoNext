import { vagas } from "@/data/vagas";
import MuralDeVagas from "@/components/MuralDeVagas";

export default function Vagas() {
  // Continua saindo no TERMINAL: a página não virou de cliente.
  // É a prova mais rápida de que a fronteira ficou onde você deixou.
  console.log("[servidor] montando a listagem");

  return (
    <>
      <h1>Vagas</h1>
      {/* A página busca o dado e entrega pronto. Quem cuida do
          que muda é o mural — e só ele desce para o navegador. */}
      <MuralDeVagas vagas={vagas} />
    </>
  );
}