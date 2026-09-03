export type Vaga = {
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

export const vagas: Vaga[] = [
  {
    id: "1",
    titulo: "Pessoa Desenvolvedora Front-end Júnior",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "Front-end",
    senioridade: "Júnior",
    local: "Remoto",
    aceitaIniciante: true,
    descricao:
      "Você vai trabalhar com React e Next.js num time de produto que já " +
      "está no ar, pareando com gente mais experiente nas primeiras semanas " +
      "e assumindo telas inteiras depois. O dia a dia é ler o código dos " +
      "outros, abrir pull request pequeno e conversar com quem desenha. Não " +
      "exigimos experiência anterior em empresa: exigimos vontade de " +
      "aprender em público e de pedir ajuda antes de travar dois dias.",
  },
  {
    id: "2",
    titulo: "Analista de Dados Júnior",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "Dados",
    senioridade: "Júnior",
    local: "Híbrido · Recife",
    aceitaIniciante: true,
    descricao:
      "O time de dados cuida dos painéis que a diretoria abre toda segunda " +
      "de manhã. Você vai escrever SQL, limpar planilha que chegou torta e " +
      "montar visualização que responde uma pergunta de negócio por vez. " +
      "Metade do trabalho é técnico; a outra metade é descobrir o que a " +
      "pessoa que pediu o relatório realmente queria saber. Python é " +
      "bem-vindo e não é obrigatório para se candidatar.",
  },
  {
    id: "3",
    titulo: "Pessoa Desenvolvedora Mobile Pleno",
    empresa: "Nuvem Rosa",
    empresaSlug: "nuvem-rosa",
    area: "Mobile",
    senioridade: "Pleno",
    local: "Presencial · Olinda",
    aceitaIniciante: false,
    descricao:
      "O aplicativo da Nuvem Rosa está nas duas lojas e tem gente usando " +
      "todo dia, então a vaga é para quem já publicou app e sabe o que " +
      "acontece quando uma atualização quebra na mão de quem usa. A stack " +
      "é React Native com Expo, testes em Detox e uma esteira de release " +
      "que você vai ajudar a arrumar. Pedimos dois anos de experiência com " +
      "mobile porque hoje não há ninguém sênior no time para revisar.",
  },
  {
    id: "4",
    titulo: "Estágio em Desenvolvimento Back-end",
    empresa: "CodeCrafters",
    empresaSlug: "codecrafters",
    area: "Back-end",
    senioridade: "Estágio",
    local: "Remoto",
    aceitaIniciante: true,
    descricao:
      "Estamos buscando alguém no início da jornada para nos ajudar a construir a fundação " +
      "das nossas APIs. Você vai mergulhar na lógica de programação utilizando Python e nos auxiliar " +
      "na criação de scripts e automações internas. Também faz parte do escopo aprender a gerenciar " +
      "bancos de dados e escrever as suas primeiras queries em SQL em um ambiente real de produção. " +
      "O time valoriza muito quem sabe desenhar e interpretar diagramas UML antes de sair codando.",
  },
  {
    id: "5",
    titulo: "Desenvolvedor Back-end Pleno",
    empresa: "FinTech Solutions",
    empresaSlug: "fintech-solutions",
    area: "Back-end",
    senioridade: "Pleno",
    local: "Híbrido · São Paulo",
    aceitaIniciante: false,
    descricao:
      "A posição exige experiência prática com desenvolvimento de sistemas robustos, principalmente " +
      "com implementações em Java, e forte conhecimento em administração de banco de dados. Nosso dia a " +
      "dia envolve muita otimização de consultas, criação de views e manutenção de triggers complexas " +
      "para garantir a integridade de todas as transações financeiras. Procuramos alguém maduro que " +
      "não tenha medo de investigar projetos legados e propor melhorias de arquitetura sustentáveis.",
  },
  {
    id: "6",
    titulo: "Analista de Qualidade (QA) Júnior",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "QA",
    senioridade: "Júnior",
    local: "Remoto",
    aceitaIniciante: true,
    descricao:
      "No nosso time, a pessoa de QA não apenas clica em botões, mas entende profundamente a " +
      "lógica do sistema como um todo. Você ajudará a criar planos de teste detalhados a partir dos " +
      "requisitos do projeto. O foco inicial será nos testes manuais exploratórios das novas interfaces " +
      "e validação das respostas das nossas APIs. Com o tempo, você terá espaço para aprender automação " +
      "de testes utilizando ferramentas específicas para validar nossas regras de negócio a cada versão.",
  },
  {
    id: "7",
    titulo: "Product Designer Pleno",
    empresa: "Nuvem Rosa",
    empresaSlug: "nuvem-rosa",
    area: "Design",
    senioridade: "Pleno",
    local: "Remoto",
    aceitaIniciante: false,
    descricao:
      "Procuramos alguém que consiga transformar problemas complexos em jornadas simples e " +
      "intuitivas para nossos usuários do aplicativo mobile. Você será responsável por prototipar " +
      "soluções de ponta a ponta no Figma e conduzir pesquisas de usabilidade com a nossa base ativa. " +
      "Trabalhamos de forma muito próxima aos desenvolvedores Front-end, então ter facilidade de " +
      "comunicação e entender as limitações técnicas é essencial para manter a nossa esteira ágil.",
  },
  {
    id: "8",
    titulo: "Pessoa Desenvolvedora Back-end Júnior",
    empresa: "CodeCrafters",
    empresaSlug: "codecrafters",
    area: "Back-end",
    senioridade: "Júnior",
    local: "Remoto",
    aceitaIniciante: true,
    descricao:
      "A sua missão principal será atuar diretamente no coração dos nossos serviços na nuvem. " +
      "Grande parte do trabalho diário envolve ler muita documentação técnica, debugar scripts " +
      "em Python já existentes e resolver desafios de lógica que impactam a performance da plataforma. " +
      "Você vai trabalhar lado a lado com os administradores de banco de dados, ajudando a integrar " +
      "nossas aplicações modernas. Precisamos de gente organizada e com muita sede de conhecimento.",
  },
  {
    id: "9",
    titulo: "Estágio em Desenvolvimento Front-end",
    empresa: "FinTech Solutions",
    empresaSlug: "fintech-solutions",
    area: "Front-end",
    senioridade: "Estágio",
    local: "Presencial · São Paulo",
    aceitaIniciante: true,
    descricao:
      "Buscamos estudantes apaixonados por tecnologia web para compor o nosso time de inovação. " +
      "Você começará dando manutenção em páginas menores e ajustando o visual de componentes " +
      "reutilizáveis utilizando HTML e CSS. Aos poucos, será introduzido ao ecossistema moderno " +
      "com Next.js, recebendo mentorias diretas dos nossos desenvolvedores mais experientes. Não " +
      "esperamos que você chegue sabendo tudo, mas esperamos proatividade e muita curiosidade.",
  },
  {
    id: "10",
    titulo: "Engenheiro de Dados Pleno",
    empresa: "Aurora Tech",
    empresaSlug: "aurora-tech",
    area: "Dados",
    senioridade: "Pleno",
    local: "Remoto",
    aceitaIniciante: false,
    descricao:
      "O grande desafio aqui é construir e dar manutenção diária em pipelines de dados " +
      "resilientes e escaláveis que alimentam os nossos painéis de análise tática. Você vai modelar " +
      "novos dados, otimizar tarefas pesadas de extração e escrever códigos eficientes. Precisamos de " +
      "alguém que entenda bem a estrutura relacional, que tenha uma excelente capacidade de depurar " +
      "problemas de performance e que garanta que a informação base chegue sempre íntegra e sem atrasos.",
  },
  {
    id: "11",
    titulo: "Estagiário em Qualidade de Software",
    empresa: "CodeCrafters",
    empresaSlug: "codecrafters",
    area: "QA",
    senioridade: "Estágio",
    local: "Híbrido · Curitiba",
    aceitaIniciante: true,
    descricao:
      "Se você tem o perfil focado em detalhes e adora procurar as falhas nas engrenagens de " +
      "um sistema, queremos você no time. A vaga oferece a oportunidade de aprender os fundamentos " +
      "sólidos de testes, começando por planos manuais documentados. Você vai conviver diariamente com " +
      "as equipes que constroem a estrutura de negócio, lendo as especificações técnicas e garantindo " +
      "a cobertura de cenários reais. É uma ótima chance para construir uma base analítica na carreira.",
  },
  {
    id: "12",
    titulo: "Desenvolvedor Mobile Júnior",
    empresa: "Nuvem Rosa",
    empresaSlug: "nuvem-rosa",
    area: "Mobile",
    senioridade: "Júnior",
    local: "Remoto",
    aceitaIniciante: true,
    descricao:
      "Venha ajudar a construir e melhorar o aplicativo que já impacta a vida de milhares de " +
      "pessoas. Sua rotina inicial vai consistir em aplicar correções visuais na interface e " +
      "desenvolver novas funcionalidades de baixa complexidade. Você precisará investigar pequenos " +
      "bugs nos fluxos atuais, consumir dados de APIs REST e colaborar ativamente nos code reviews. " +
      "É um ambiente super seguro para testes, e você terá todo o suporte de profissionais mais maduros.",
  }
];