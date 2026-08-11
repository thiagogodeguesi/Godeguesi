/**
 * Fonte editorial da home. Todo o conteúdo aqui descreve trabalho real,
 * já público ou já documentado nos estudos de caso — sem métricas,
 * clientes ou certificações não comprovadas.
 */

export type Pillar = {
  title: string;
  description: string;
  practices: readonly string[];
};

export const pillars: readonly Pillar[] = [
  {
    title: "Dados & Cloud",
    description:
      "Modernização de ambientes, modelagem, qualidade e otimização de custo em plataformas de dados na nuvem.",
    practices: [
      "Inventário e catálogo de objetos",
      "Qualidade e rastreabilidade",
      "Custo e desempenho",
    ],
  },
  {
    title: "Software & Produtos",
    description:
      "Construção de aplicações e APIs do contrato ao deploy, com arquitetura que suporta evolução por etapas.",
    practices: ["APIs e contratos", "Frontend e produto", "Infra em containers"],
  },
  {
    title: "Automação & IA",
    description:
      "Automação de processos e uso de IA aplicada como apoio ao trabalho: organizar contexto, documentar e reduzir repetição.",
    practices: ["Fluxos automatizados", "IA aplicada ao legado", "Documentação viva"],
  },
  {
    title: "Direção & Mentoria",
    description:
      "Acompanhamento individual em ciclos para quem está entrando ou evoluindo em tecnologia. Direção prática, não curso.",
    practices: ["Ciclos individuais", "Prioridades e método", "Feedback técnico"],
  },
];

export type FeaturedProject = {
  name: string;
  role: string;
  description: string;
  highlights: readonly string[];
  stack: readonly string[];
  href?: string;
  hrefLabel?: string;
  caseStudySlug?: string;
};

export const featuredProjects: readonly FeaturedProject[] = [
  {
    name: "Olimpo",
    role: "SaaS em construção — produto e infraestrutura",
    description:
      "Plataforma SaaS de gestão construída de forma incremental, do produto à infraestrutura, com foco atual em clínicas.",
    highlights: [
      "Backend, frontend e banco em arquitetura multi-tenant",
      "Isolamento por organização tratado como requisito de arquitetura",
      "Quality gates de lint, typecheck, testes e build",
    ],
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "OpenAPI"],
    href: "https://olimposistema.com.br",
    hrefLabel: "Conhecer o Olimpo",
    caseStudySlug: "plataforma-saas-de-gestao",
  },
  {
    name: "Revive",
    role: "Análise de legado Oracle Forms e Reports",
    description:
      "Antes de modernizar, entender: catálogo técnico de milhares de arquivos, fontes, relatórios, bibliotecas e dependências espalhados em backups antigos.",
    highlights: [
      "Catalogação de artefatos e dependências do acervo",
      "Lacunas entre binários compilados e fontes disponíveis",
      "IA local como apoio à leitura e documentação do legado",
    ],
    stack: ["Oracle Forms", "Oracle Reports", "Python", "IA local"],
  },
  {
    name: "Mentoria",
    role: "Direção individual em ciclos",
    description:
      "Transformar experiência em direção prática para pessoas entrando ou evoluindo em tecnologia. Acompanhamento individual, com prioridades e revisão de decisões.",
    highlights: [
      "Ciclos com objetivo definido, não aulas gravadas",
      "Foco em método, prática e decisões técnicas",
      "Revisão do que já está sendo construído",
    ],
    stack: ["Dados", "Cloud", "Carreira técnica"],
  },
];

export type JourneyStage = {
  period: string;
  title: string;
  description: string;
};

export const journey: readonly JourneyStage[] = [
  {
    period: "Base",
    title: "Executor técnico",
    description:
      "Resolver problemas de dados e processos dentro do que já existia: entender ambientes, corrigir fluxos e entregar o que era pedido.",
  },
  {
    period: "Evolução",
    title: "Engenharia e arquitetura",
    description:
      "Passar a desenhar a solução: modelagem, qualidade, rastreabilidade, custo e automação como parte do trabalho, não como etapa final.",
  },
  {
    period: "Agora",
    title: "Construtor de produtos e infraestrutura",
    description:
      "Construir, testar, documentar, operar infraestrutura e levar produtos reais ao ar — do contrato da API ao container em execução.",
  },
  {
    period: "Em construção",
    title: "Direção, IA aplicada e pessoas",
    description:
      "Usar IA aplicada para estruturar conhecimento e apoiar modernização, e transformar a experiência em direção prática para outras pessoas.",
  },
];

export type TechnologyPurpose = {
  purpose: string;
  note: string;
  technologies: readonly string[];
};

export const technologyPurposes: readonly TechnologyPurpose[] = [
  {
    purpose: "Para organizar e transformar dados",
    note: "Modelagem, pipelines e catálogo em ambientes de nuvem.",
    technologies: [
      "BigQuery",
      "Databricks",
      "Dataform",
      "Azure Data Factory",
      "PostgreSQL",
    ],
  },
  {
    purpose: "Para construir produtos",
    note: "Contratos claros entre interface e regras de negócio.",
    technologies: ["Python", "FastAPI", "Next.js", "OpenAPI"],
  },
  {
    purpose: "Para operar e sustentar",
    note: "Ambientes reproduzíveis e entrega com verificação automática.",
    technologies: ["Docker", "CI/CD", "Testes automatizados"],
  },
  {
    purpose: "Para apoiar decisões e reduzir repetição",
    note: "IA aplicada como apoio ao contexto, à documentação e ao legado.",
    technologies: ["IA aplicada", "IA local", "Automação de processos"],
  },
];
