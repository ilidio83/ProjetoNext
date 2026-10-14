import { prisma } from "@/lib/prisma";

// A REGRA QUE ECONOMIZA UMA HORA: quem espera é este componente, e o await
// mora AQUI DENTRO. Se a página fizer o await e passar o número por prop,
// ela já esperou — e o Suspense em volta não tem mais nada para fazer.
export default async function NumerosDoCatalogo() {
  const [total, iniciantes] = await Promise.all([
    prisma.vaga.count({ where: { arquivada: false } }),
    prisma.vaga.count({ where: { arquivada: false, aceitaIniciante: true } }),
  ]);

  return (
    <p className="numeros">
      <strong>{total}</strong> vagas ·{" "}
      <strong>{iniciantes}</strong> aceitam quem está começando
    </p>
  );
}