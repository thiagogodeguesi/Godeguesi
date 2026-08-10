export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: readonly string[] };

export type BlogCover = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BlogPost = {
  title: string;
  slug: string;
  description: string;
  /** Data de publicação em formato ISO (YYYY-MM-DD). */
  publishedAt: string;
  author: string;
  category: string;
  cover: BlogCover;
  body: readonly BlogBlock[];
};

/**
 * Fonte editorial do blog. Cada artigo é tipado e o conteúdo é descrito em
 * blocos simples para manter a estrutura extensível para os próximos textos.
 */
export const blogPosts: readonly BlogPost[] = [
  {
    title:
      "IA, Marketing e ativos: o que levei de um fim de semana intenso de aprendizado",
    slug: "ia-marketing-ativos",
    description:
      "Registro de uma imersão sobre Marketing e Inteligência Artificial: como contexto, método e ferramentas transformam conhecimento e decisões em ativos publicados.",
    publishedAt: "2026-08-10",
    author: "Thiago Godeguesi",
    category: "IA e Marketing",
    cover: {
      src: "/blog/treinamento-marketing-ia-grupo.jpg",
      alt: "Participantes do treinamento Start Digital durante a imersão sobre Marketing e Inteligência Artificial.",
      width: 1600,
      height: 900,
    },
    body: [
      {
        type: "paragraph",
        text: "Passei este fim de semana em uma imersão sobre Marketing e Inteligência Artificial. Mais do que aprender ferramentas, saí com uma mudança importante de perspectiva: conhecimento, quando ganha estrutura e execução, pode se transformar em ativo.",
      },
      {
        type: "paragraph",
        text: "Muitas vezes temos experiência, repertório, processos, contatos, histórias e boas soluções. O problema é que isso fica preso na rotina, na cabeça de quem executa ou em conversas que nunca viram algo concreto. E tudo o que não vira ativo acaba virando mais trabalho.",
      },
      { type: "heading", text: "A IA não entrega respostas finais" },
      {
        type: "paragraph",
        text: "Quem cresce com IA não é quem sabe tudo. É quem continua perguntando.",
      },
      {
        type: "paragraph",
        text: "A primeira resposta da IA não é veredito: é matéria-prima. Em vez de perguntar apenas \u201Ccomo faço isso?\u201D, começamos pelo objetivo e abrimos espaço para descobrir o que está faltando: \u201CEu tenho este objetivo. O que você precisa saber para me ajudar a alcançá-lo pelo melhor caminho?\u201D",
      },
      {
        type: "paragraph",
        text: "O processo se torna: perguntar, analisar, questionar, ajustar e testar. A qualidade nasce da conversa, do contexto e da capacidade de tomar decisões.",
      },
      { type: "heading", text: "IA sem método só acelera o gargalo" },
      {
        type: "paragraph",
        text: "Um bom copiloto de IA combina três elementos:",
      },
      {
        type: "list",
        items: [
          "Contexto: o que a IA precisa saber sobre negócio, público e problema.",
          "Método: como uma tarefa deve ser pensada e executada.",
          "Ferramentas: onde buscar informações e onde agir.",
        ],
      },
      {
        type: "paragraph",
        text: "Sem contexto, a resposta é genérica. Sem método, a IA só acelera uma direção errada. Sem conectores, habilidades e ferramentas, ela fica limitada à conversa, sem alcançar documentos, sistemas, agenda, mensagens e dados da operação.",
      },
      { type: "heading", text: "Do problema ao ativo" },
      {
        type: "paragraph",
        text: "Uma ideia precisa ganhar clareza sobre o problema que resolve, para quem ela existe e qual transformação entrega. Depois, isso pode ser organizado em produto mínimo viável, uma oferta clara e, finalmente, uma página pública.",
      },
      {
        type: "paragraph",
        text: "Decisão \u2192 execução \u2192 ativo publicado.",
      },
      {
        type: "paragraph",
        text: "Marketing não é apenas divulgação ou estética. É clareza de mensagem: ajudar a pessoa certa a se reconhecer no problema, entender a transformação e saber qual é o próximo passo.",
      },
      {
        type: "paragraph",
        text: "Uma página de vendas não começa no design. Ela começa na mensagem. Ela precisa responder: isso é para mim? Qual problema resolve? Qual transformação é possível? O que está sendo oferecido? Qual é o próximo passo?",
      },
      { type: "heading", text: "Página funcional antes de página perfeita" },
      {
        type: "paragraph",
        text: "No segundo dia, o foco foi transformar decisões em algo que pudesse ser acessado e testado por outras pessoas.",
      },
      {
        type: "paragraph",
        text: "Antes de efeitos e microajustes vêm os fundamentos: mensagem completa, dados corretos, boa leitura no celular, botões funcionando, destino claro e um caminho de venda que a operação consegue cumprir.",
      },
      {
        type: "paragraph",
        text: "Uma página só existe de verdade quando alguém de fora consegue abrir, entender e executar o próximo passo.",
      },
      {
        type: "heading",
        text: "Agentes: primeiro o processo, depois a automação",
      },
      {
        type: "paragraph",
        text: "Agentes de IA não são mágica nem substituição de pessoas. Eles executam processos com mais consistência.",
      },
      {
        type: "paragraph",
        text: "Primeiro execute o processo. Depois transforme o processo em agente.",
      },
      {
        type: "paragraph",
        text: "Um agente não deve inventar estratégia. Deve receber decisões já construídas \u2014 público, problema, posicionamento, oferta, histórias e critérios \u2014 e ajudar a transformar isso em execução. Assim, a IA deixa de ser uma conversa isolada e passa a apoiar a operação: preparando informações, organizando tarefas, conectando ferramentas e reduzindo repetição.",
      },
      {
        type: "paragraph",
        text: "Essa é uma direção que enxergo no Olimpo, nos estudos de sistemas legados, na consultoria e na organização pessoal: não como atalho para fazer tudo sozinho, mas como forma de estruturar melhor o que já existe e criar espaço para evoluir.",
      },
      { type: "heading", text: "O que fica deste fim de semana" },
      {
        type: "paragraph",
        text: "O maior aprendizado não foi uma ferramenta específica. Foi uma forma de pensar.",
      },
      {
        type: "list",
        items: [
          "Conhecimento pode virar produto.",
          "Decisões podem virar páginas.",
          "Processos podem virar ativos.",
          "E ativos podem criar mais liberdade, escala e continuidade.",
        ],
      },
      {
        type: "paragraph",
        text: "A IA amplia possibilidades. Mas a responsabilidade de dar contexto, escolher um caminho e validar no mundo real continua sendo nossa.",
      },
      {
        type: "paragraph",
        text: "Este é o primeiro registro de uma série sobre Inteligência Artificial, Marketing, Dados e Desenvolvimento. Sem fórmulas prontas: com a intenção de transformar estudo em prática \u2014 e prática em algo útil para outras pessoas.",
      },
    ],
  },
];

export const blogPostBySlug = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
) as Record<string, BlogPost | undefined>;

export function formatBlogDate(publishedAt: string): string {
  const [year, month, day] = publishedAt.split("-");
  return `${day}/${month}/${year}`;
}
