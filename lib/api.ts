import type { Vaga, Empresa } from "@/lib/tipos";

// A URL mora aqui, e só aqui. Quando a fonte trocar — a API do Spring Boot,
// um banco, o que for — é ESTA linha que muda, e nenhuma página fica sabendo.
const FONTE = "https://raw.githubusercontent.com/SUA-EQUIPE/leque-de-vagas/main/dados";

// 60 segundos: uma vaga nova demora no máximo um minuto para aparecer, e o
// site não bate no GitHub a cada visita. Escolha o SEU número e explique.
const CACHE = { next: { revalidate: 60, tags: ["vagas"] } };

export async function listarVagas(): Promise<Vaga[]> {
  const resposta = await fetch(`${FONTE}/vagas.json`, CACHE);

  // A LINHA QUE POUPA UMA HORA. Sem ela, um 404 do GitHub vira uma página
  // de erro em HTML, e o .json() abaixo quebra com "Unexpected token '<'"
  // — uma mensagem que não fala nem da URL, nem do arquivo.
  if (!resposta.ok) {
    throw new Error(`vagas.json respondeu ${resposta.status}`);
  }

  return resposta.json();
}

// Buscar UMA vaga é buscar todas e achar. Parece desperdício e não é: as
// duas chamadas são o MESMO fetch, com a mesma URL e as mesmas opções —
// o Next junta as duas num pedido só dentro do mesmo request.
export async function buscarVaga(id: string): Promise<Vaga | undefined> {
  const vagas = await listarVagas();
  return vagas.find((vaga) => vaga.id === id);
}

export async function listarEmpresas(): Promise<Empresa[]> {
  const resposta = await fetch(`${FONTE}/empresas.json`, {
    next: { revalidate: 3600, tags: ["empresas"] },   // empresa muda muito menos que vaga
  });
  if (!resposta.ok) throw new Error(`empresas.json respondeu ${resposta.status}`);
  return resposta.json();
}

export async function buscarEmpresa(slug: string): Promise<Empresa | undefined> {
  const empresas = await listarEmpresas();
  return empresas.find((empresa) => empresa.slug === slug);
}