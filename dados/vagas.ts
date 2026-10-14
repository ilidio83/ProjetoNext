export type VagaPublicada = {
  id: string;
  titulo: string;
  empresa: string;
  empresaSlug: string;
  area: string;
  senioridade: string;
  local: string;
  aceitaIniciante: boolean;
  descricao: string;
};

export const vagas: VagaPublicada[] = [
  {
    id: "1",
    titulo: "Pessoa Desenvolvedora Front-end Júnior",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "Front-end",
    senioridade: "Júnior",
    local: "Remoto",
    aceitaIniciante: true,
    descricao: "...",
  },
];
