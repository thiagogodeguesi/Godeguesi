export type ContentStatus = "confirmed" | "draft" | "pending" | "toBeValidated";

export type ContentField = {
  status: ContentStatus;
  text: string;
};

export type ContentList = {
  status: ContentStatus;
  items: readonly string[];
};

export type PublicLink = {
  label: string;
  href?: string;
  status: ContentStatus;
  note: string;
};

export type CaseStudy = {
  title: string;
  slug: string;
  summary: ContentField;
  context: ContentField;
  problem: ContentField;
  constraints: ContentList;
  responsibilities: ContentList;
  solution: ContentField;
  technicalArchitecture: ContentField;
  keyDecisions: ContentList;
  challenges: ContentList;
  qualityValidation: ContentList;
  publishableResults: ContentList;
  learnings: ContentList;
  nextSteps: ContentList;
  technologies: ContentList;
  stage: ContentField;
  publicLinks: readonly PublicLink[];
  confidentialityNotes?: ContentField;
};

/**
 * Fonte editorial dos estudos de caso. O status de cada campo informa se ele
 * pode ser publicado, se ainda é um rascunho ou se depende de validação.
 */
export const caseStudies = [
  {
    title: "Plataforma SaaS de Gestão",
    slug: "plataforma-saas-de-gestao",
    summary: {
      status: "confirmed",
      text: "Plataforma SaaS de gestão em preparação para lançamento e validação com usuários, construída de forma incremental para evoluir decisões de produto, arquitetura e segurança.",
    },
    context: {
      status: "confirmed",
      text: "O projeto reúne backend, frontend e banco de dados em uma arquitetura voltada a múltiplas organizações, com foco em separar responsabilidades desde o MVP.",
    },
    problem: {
      status: "confirmed",
      text: "Estruturar uma base de produto capaz de atender usuários autenticados de organizações distintas sem misturar dados, regras de acesso ou contratos entre as camadas.",
    },
    constraints: {
      status: "confirmed",
      items: [
        "Não expor domínio de testes, endpoints, IPs, credenciais, detalhes da infraestrutura, nomes de clínicas ou dados de usuários.",
        "Manter o MVP simples o suficiente para evoluir por etapas.",
        "Tratar autenticação, autorização e isolamento multi-tenant como requisitos de arquitetura.",
      ],
    },
    responsibilities: {
      status: "confirmed",
      items: [
        "Definição da arquitetura técnica e das fronteiras entre as aplicações.",
        "Evolução do backend, do frontend e dos contratos de integração.",
        "Estratégia de testes, organização incremental do trabalho por cards, branches e pull requests, e decisões de segurança do produto.",
      ],
    },
    solution: {
      status: "confirmed",
      text: "A solução combina uma API em FastAPI, interface em Next.js, PostgreSQL para persistência e Docker para padronizar o ambiente de desenvolvimento e execução. A evolução é orientada por contratos, testes e entregas incrementais do MVP.",
    },
    technicalArchitecture: {
      status: "confirmed",
      text: "O frontend em Next.js consome uma API documentada por contratos OpenAPI. O backend em FastAPI concentra regras de negócio, autenticação e autorização; o PostgreSQL persiste os dados com escopo de organização; e os serviços são executados em containers Docker. O ambiente de testes usa infraestrutura própria com contêineres.",
    },
    keyDecisions: {
      status: "confirmed",
      items: [
        "Adotar contratos OpenAPI como referência compartilhada entre frontend e backend.",
        "Modelar o isolamento por organização como parte das regras de acesso, e não como convenção de interface.",
        "Usar autenticação baseada em token e autorização explícita para as operações protegidas.",
        "Usar infraestrutura própria com contêineres no ambiente de testes.",
      ],
    },
    challenges: {
      status: "confirmed",
      items: [
        "Equilibrar velocidade de entrega do MVP com decisões que preservem a evolução do produto.",
        "Manter isolamento multi-tenant consistente nos fluxos de leitura e escrita.",
        "Evitar acoplamento entre a interface e regras internas da API.",
      ],
    },
    qualityValidation: {
      status: "confirmed",
      items: [
        "Há testes automatizados no backend e no frontend.",
        "Foram executados com sucesso 17 testes E2E do backend, cobrindo onboarding, autenticação, cadastros e isolamento multi-tenant.",
        "O isolamento multi-tenant está implementado e validado.",
        "O frontend possui quality gates de lint, typecheck, testes e build.",
      ],
    },
    publishableResults: {
      status: "confirmed",
      items: [
        "A plataforma está em preparação para lançamento e validação com usuários.",
        "Não há demonstração, código ou resultado quantitativo aprovado para publicação nesta versão.",
      ],
    },
    learnings: {
      status: "confirmed",
      items: [
        "Isolamento entre organizações precisa ser verificado em toda a cadeia de acesso a dados.",
        "Contratos claros reduzem ambiguidade quando frontend e backend evoluem em ritmos diferentes.",
        "Testes de integração e E2E antecipam riscos que não aparecem apenas em testes unitários.",
      ],
    },
    nextSteps: {
      status: "confirmed",
      items: [
        "Preparar o lançamento e a validação com usuários sem caracterizar o produto como concluído ou em produção.",
        "Revisar, antes da publicação, eventuais resultados qualitativos que possam ser comprovados.",
      ],
    },
    technologies: {
      status: "confirmed",
      items: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "OpenAPI"],
    },
    stage: {
      status: "confirmed",
      text: "MVP 0.1.0 em preparação para lançamento e validação com usuários.",
    },
    publicLinks: [
      {
        label: "Código e demonstração pública",
        status: "pending",
        note: "Nenhum link foi aprovado para publicação nesta versão.",
      },
    ],
    confidentialityNotes: {
      status: "confirmed",
      text: "O nome interno do projeto, código-fonte, detalhes de infraestrutura, credenciais, dados de uso e informações de produto não fazem parte deste estudo público.",
    },
  },
  {
    title: "Plataforma de automação e integração",
    slug: "plataforma-automacao-integracao",
    summary: {
      status: "confirmed",
      text: "Iniciativa de automação e integração voltada a organizar fluxos e reduzir atividades manuais entre componentes ou sistemas.",
    },
    context: {
      status: "confirmed",
      text: "O projeto está em evolução; a descrição pública permanece limitada ao objetivo de organizar fluxos e reduzir atividades manuais.",
    },
    problem: {
      status: "confirmed",
      text: "Organizar fluxos e reduzir atividades manuais entre componentes ou sistemas, sem publicar funcionalidades, usuários, clientes, integrações externas ou resultados não autorizados.",
    },
    constraints: {
      status: "confirmed",
      items: [
        "Não divulgar integrações, clientes, credenciais, URLs ou regras operacionais específicas.",
        "Não atribuir métricas ou impacto operacional sem aprovação explícita.",
      ],
    },
    responsibilities: {
      status: "toBeValidated",
      items: [
        "Mapeamento do problema, do fluxo público e das fronteiras de integração.",
        "Definição das decisões técnicas e de rastreabilidade que podem ser compartilhadas.",
      ],
    },
    solution: {
      status: "toBeValidated",
      text: "A solução detalhada ainda não foi aprovada para publicação.",
    },
    technicalArchitecture: {
      status: "toBeValidated",
      text: "A arquitetura definitiva, as tecnologias e as integrações permanecem pendentes de validação pública.",
    },
    keyDecisions: {
      status: "toBeValidated",
      items: [
        "Decisões técnicas específicas ainda não foram aprovadas para publicação.",
      ],
    },
    challenges: {
      status: "toBeValidated",
      items: [
        "Desafios técnicos específicos ainda não foram aprovados para publicação.",
      ],
    },
    qualityValidation: {
      status: "toBeValidated",
      items: [
        "Critérios de validação de fluxo, falha e rastreabilidade serão confirmados antes da publicação.",
        "Não há evidências públicas aprovadas de testes, cobertura ou disponibilidade nesta versão.",
      ],
    },
    publishableResults: {
      status: "toBeValidated",
      items: ["Nenhum resultado, métrica, número de usuários ou ganho operacional foi aprovado para divulgação."],
    },
    learnings: {
      status: "toBeValidated",
      items: [
        "Aprendizados específicos ainda não foram aprovados para publicação.",
      ],
    },
    nextSteps: {
      status: "toBeValidated",
      items: [
        "Validar responsabilidades, arquitetura, tecnologias, integrações, estágio detalhado, resultados, links e evidências públicas.",
      ],
    },
    technologies: {
      status: "toBeValidated",
      items: ["Tecnologias ainda não aprovadas para publicação."],
    },
    stage: {
      status: "toBeValidated",
      text: "O projeto está em evolução; o estágio detalhado permanece pendente de validação pública.",
    },
    publicLinks: [
      {
        label: "Links públicos",
        status: "toBeValidated",
        note: "Nenhum link foi aprovado para publicação nesta versão.",
      },
    ],
    confidentialityNotes: {
      status: "confirmed",
      text: "O estudo não deve identificar plataformas integradas, dados processados, clientes, URLs, credenciais ou regras operacionais internas.",
    },
  },
  {
    title: "Engenharia de dados e eficiência operacional",
    slug: "engenharia-de-dados-eficiencia-operacional",
    summary: {
      status: "confirmed",
      text: "Estudo de caso sanitizado sobre modernização de práticas de engenharia de dados, com foco em automação, qualidade, governança e eficiência operacional.",
    },
    context: {
      status: "confirmed",
      text: "O caso se baseia em experiência profissional em ambiente corporativo de grande porte, descrita de forma genérica para preservar pessoas, organizações, sistemas e ativos de dados.",
    },
    problem: {
      status: "confirmed",
      text: "Modernizar e melhorar processos de engenharia de dados com automação, qualidade, governança, documentação, custo e desempenho, sem expor o ambiente de origem.",
    },
    constraints: {
      status: "confirmed",
      items: [
        "Não identificar empregador, cliente, produto, dataset, tabela, repositório, URL ou sistema interno.",
        "Não publicar consultas, topologia, logs, capturas de tela, dados pessoais ou métricas confidenciais.",
        "Usar somente métricas previamente aprovadas como públicas, anonimizadas ou aproximadas.",
      ],
    },
    responsibilities: {
      status: "confirmed",
      items: [
        "Análise de arquitetura e fluxos.",
        "Levantamento de dependências.",
        "Definição de padrões e revisão de processos de carga.",
        "Propostas de automação e qualidade.",
        "Análise de custo e desempenho e documentação técnica.",
      ],
    },
    solution: {
      status: "confirmed",
      text: "A abordagem reúne análise de dependências, inventário de objetos e atributos, identificação de oportunidades de padronização e redução de processamento desnecessário, além de verificações automatizadas de qualidade e avaliação de estratégias incrementais, reprocessamento e otimização de custos.",
    },
    technicalArchitecture: {
      status: "confirmed",
      text: "Fluxo sanitizado: o levantamento de dependências e o inventário de tabelas, campos, frequências, volumes e acessos apoiam a análise; verificações de qualidade e documentação dão rastreabilidade; e avaliações de processamento incremental, reprocessamento, custo e desempenho orientam a priorização. Nenhum ativo corporativo é identificado.",
    },
    keyDecisions: {
      status: "confirmed",
      items: [
        "Tratar qualidade e rastreabilidade como requisitos do processo de dados.",
        "Priorizar automações reutilizáveis para reduzir trabalho manual e inconsistências.",
        "Usar critérios técnicos para priorizar oportunidades de custo e desempenho.",
        "Manter documentação suficiente para explicar dependências sem expor ativos internos.",
      ],
    },
    challenges: {
      status: "confirmed",
      items: [
        "Evoluir processos existentes sem interromper rotinas operacionais.",
        "Conciliar padronização com a diversidade de fontes e dependências.",
        "Produzir uma narrativa pública útil sem permitir a reidentificação do ambiente corporativo.",
      ],
    },
    qualityValidation: {
      status: "confirmed",
      items: [
        "Verificações de qualidade, mapeamento de dependências e documentação são apresentados como práticas de validação.",
        "A evidência específica de ferramentas, indicadores e resultados depende de aprovação para publicação.",
      ],
    },
    publishableResults: {
      status: "pending",
      items: [
        "Resultados quantitativos permanecem indisponíveis até que métricas anonimizadas ou aproximadas sejam aprovadas.",
        "O resultado publicável atual é a consolidação de uma abordagem orientada a confiabilidade, rastreabilidade e melhoria contínua.",
      ],
    },
    learnings: {
      status: "draft",
      items: [
        "Automação sustentável depende de padrões, observabilidade e responsabilidade sobre a qualidade.",
        "A eficiência operacional deve considerar custo, desempenho, manutenção e risco de forma conjunta.",
        "Sanitização precisa orientar a produção do estudo desde o início, não apenas a revisão final.",
      ],
    },
    nextSteps: {
      status: "pending",
      items: [
        "Validar exemplos técnicos e métricas anonimizadas que possam se tornar públicos.",
        "Revisar o texto com o responsável pela confidencialidade antes de qualquer publicação.",
      ],
    },
    technologies: {
      status: "confirmed",
      items: ["BigQuery", "Dataform", "Databricks", "Azure Data Factory", "CI/CD"],
    },
    stage: {
      status: "toBeValidated",
      text: "Estudo sanitizado em rascunho editorial; conteúdo público sujeito a validação de confidencialidade.",
    },
    publicLinks: [
      {
        label: "Links públicos",
        status: "pending",
        note: "Não há links públicos permitidos para este caso.",
      },
    ],
    confidentialityNotes: {
      status: "confirmed",
      text: "Todos os nomes, ativos, estruturas, dados, métricas e detalhes que poderiam identificar o ambiente corporativo foram omitidos. A publicação depende de revisão de confidencialidade.",
    },
  },
] as const satisfies readonly CaseStudy[];

export const caseStudyBySlug = Object.fromEntries(
  caseStudies.map((caseStudy) => [caseStudy.slug, caseStudy]),
) as Readonly<Record<(typeof caseStudies)[number]["slug"], (typeof caseStudies)[number]>>;
