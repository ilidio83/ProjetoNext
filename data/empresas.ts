
export type Empresa = {
  // é o que vai na URL: /empresas/aurora-tech
  slug: string;
  nome: string;
  // o texto da aba "Sobre" — escreva um parágrafo de verdade
  sobre: string;
  site: string;
};

export const empresas: Empresa[] = [
  {
    slug: "aurora-tech",
    nome: "Aurora Tech",
    sobre:
      "Produto próprio na área de logística, 60 pessoas, sede no Recife e " +
      "time distribuído pelo Nordeste inteiro. Contrata pessoas em início " +
      "de carreira desde 2021 e mantém um programa de mentoria interna.",
    site: "https://aurora.exemplo.br",
  },
  {
    slug: "nuvem-rosa",
    nome: "Nuvem Rosa",
    sobre:
      "Estúdio de aplicativos com escritório em Olinda. Trabalha por " +
      "projeto para clientes de saúde e educação, com times pequenos de " +
      "três a cinco pessoas e entrega quinzenal.",
    site: "https://nuvemrosa.exemplo.br",
  },
  // ↑ faltam 3. O mínimo são 5 empresas, e cada slug daqui tem que
  //   bater EXATAMENTE com o empresaSlug usado em data/vagas.ts.
]