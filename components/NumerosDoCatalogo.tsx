import { listarVagas } from "@/lib/api";

// A REGRA QUE ECONOMIZA UMA HORA: quem espera é este componente, e o await
// mora AQUI DENTRO. Se a página fizer o await e passar o número por prop,
// ela já esperou — e o Suspense em volta não tem mais nada para fazer.
export default async function NumerosDoCatalogo() {
  const vagas = await listarVagas();
  const iniciantes = vagas.filter((vaga) => vaga.aceitaIniciante).length;

  return (
    <p className="numeros">
      <strong>{vagas.length}</strong> vagas ·{" "}
      <strong>{iniciantes}</strong> aceitam quem está começando
    </p>
  );
}