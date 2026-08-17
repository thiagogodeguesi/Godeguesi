export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "link"; text: string; href: string };

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
    title: "Documentação não é burocracia: é infraestrutura de continuidade",
    slug: "documentacao-infraestrutura-de-continuidade",
    description:
      "O que anos de vivência em Dados e TI me ensinaram sobre documentação, continuidade, rastreabilidade e conhecimento compartilhado.",
    publishedAt: "2026-08-17",
    author: "Thiago Godeguesi",
    category: "Dados e Processos",
    cover: {
      src: "/blog/documentacao-conhecimento-compartilhado.webp",
      alt: "Ilustração da transformação de informações dispersas em um mapa de conhecimento compartilhado por uma equipe.",
      width: 1672,
      height: 941,
    },
    body: [
      {
        type: "paragraph",
        text: "Em diferentes frentes de trabalho, ficou evidente que a falta de documentação não é um problema isolado. Ela reaparece quando alguém precisa entender um fluxo, investigar uma dependência, assumir uma rotina, corrigir um incidente ou explicar por que determinada decisão foi tomada.",
      },
      {
        type: "paragraph",
        text: "Nesses longos anos de vivência em Dados e TI, encontrei essa mesma situação repetidas vezes, em contextos diferentes. O padrão era semelhante: o processo funcionava, mas o conhecimento necessário para compreendê-lo estava disperso entre pessoas, códigos, conversas e arquivos sem uma visão consolidada.",
      },
      {
        type: "paragraph",
        text: "A partir dessa constatação, o trabalho deixou de tratar documentação apenas como registro textual e passou a encará-la como parte da engenharia: um mecanismo para reduzir dependência de memória individual, preservar contexto e permitir continuidade.",
      },
      { type: "heading", text: "Quando documentar passa a fazer parte do trabalho" },
      { type: "heading", text: "O ciclo do cliente" },
      {
        type: "paragraph",
        text: "Em uma das experiências, foi estruturada uma visão do ciclo do cliente, contemplando etapas como entrada, relacionamento, novas ofertas e reconquista. O objetivo foi mostrar não apenas o resultado final, mas como cada etapa nasce, quais dados utiliza, que transformações realiza e quais consumidores dependem dela.",
      },
      {
        type: "paragraph",
        text: "Esse tipo de visão ajuda a conectar áreas técnicas e de negócio. Um fluxo deixa de ser apenas uma tabela ou uma rotina agendada e passa a ser compreendido dentro da jornada que sustenta.",
      },
      { type: "heading", text: "O tombamento de um processo legado" },
      {
        type: "paragraph",
        text: "Em outro contexto, o tombamento de um processo legado exigiu a análise de 26 arquivos relacionados a 55 tabelas. O trabalho envolveu inventariar objetos e atributos, identificar responsáveis e consumidores, mapear dependências e reconhecer lacunas de descrição.",
      },
      {
        type: "paragraph",
        text: "A análise também considerou sinais objetivos de qualidade, como tabelas sem descrição, campos não documentados, dependências não mapeadas e objetos possivelmente órfãos. Dessa forma, a documentação passou a produzir indicadores para priorização, e não somente páginas para consulta.",
      },
      { type: "heading", text: "Dependências e revisão dos fluxos" },
      {
        type: "paragraph",
        text: "Foram analisadas arquitetura, origens, destinos, processos de carga, encadeamentos e pontos de reprocessamento. Esse levantamento permitiu questionar duplicidades e avaliar o consumo direto de dados disponibilizados pela companhia, reduzindo cópias, processamento desnecessário e custos.",
      },
      {
        type: "paragraph",
        text: "Também foram consideradas oportunidades de padronização, processamento incremental, verificações automatizadas de qualidade e melhoria de desempenho. Nesse cenário, documentar serviu como instrumento de diagnóstico e de decisão técnica.",
      },
      { type: "heading", text: "Documentação como entrega contínua" },
      {
        type: "paragraph",
        text: "O aprendizado central foi que a documentação precisa acompanhar o projeto em três momentos: início, execução e encerramento. No início, registra contexto, objetivos, responsáveis e critérios. Durante a execução, preserva decisões, mudanças, riscos e dependências. No encerramento ou passagem, consolida operação, suporte, lições aprendidas e próximos passos.",
      },
      { type: "heading", text: "O que uma boa documentação fortalece" },
      {
        type: "list",
        items: [
          "Continuidade: permite que uma atividade sobreviva a férias, desligamentos, mudanças de equipe e troca de fornecedor.",
          "Rastreabilidade: registra origem dos dados, transformações, decisões e impactos.",
          "Redução de retrabalho: evita que diferentes pessoas refaçam o mesmo levantamento.",
          "Velocidade em incidentes: um mapa de dependências reduz o tempo gasto descobrindo a origem e o impacto de um problema.",
          "Alinhamento: traduz ativos técnicos para o contexto do processo e aproxima negócio e tecnologia.",
          "Qualidade e governança: torna visíveis lacunas, objetos órfãos e responsabilidades indefinidas.",
          "Base para automação e IA: processos bem descritos oferecem contexto mais confiável para buscas, agentes e automações.",
        ],
      },
      { type: "heading", text: "Onde a documentação costuma falhar" },
      {
        type: "list",
        items: [
          "Criada somente no final: nasce atrasada e baseada em memória.",
          "Desatualização: quando atualizar não faz parte do fluxo, o documento perde credibilidade.",
          "Excesso de volume e pouco contexto: muitas páginas não garantem utilidade.",
          "Conhecimento concentrado: a pessoa que “sabe tudo” mascara a ausência de uma fonte compartilhada.",
          "Fragmentação: informações espalhadas em e-mails, chats, planilhas, tickets e repositórios impedem uma visão única.",
          "Falta de responsável: sem dono, periodicidade e critério de atualização, a manutenção fica para depois.",
          "Padronização rígida demais: templates extensos podem criar burocracia sem melhorar a compreensão.",
          "Documentação sem validação: um documento pode parecer completo e ainda estar incorreto.",
        ],
      },
      { type: "heading", text: "O paradoxo da documentação" },
      {
        type: "paragraph",
        text: "O principal ponto fraco da documentação não está na documentação em si, mas na forma como ela costuma ser tratada. Quando vira obrigação apartada do trabalho, é percebida como custo. Quando é produzida junto com a análise, a decisão e a entrega, passa a reduzir risco e economizar tempo.",
      },
      {
        type: "paragraph",
        text: "Também existe um equilíbrio necessário. Documentar pouco mantém o conhecimento invisível; documentar tudo sem critério cria um acervo difícil de manter. A documentação útil registra o que alguém precisará saber para compreender, operar, modificar ou assumir o processo com segurança.",
      },
      { type: "heading", text: "Princípios que levo dessa experiência" },
      {
        type: "list",
        items: [
          "Começar pelo contexto e pelo problema, não pela ferramenta.",
          "Registrar responsáveis, consumidores, dependências e impactos.",
          "Documentar decisões e mudanças enquanto elas acontecem.",
          "Manter o conteúdo próximo do fluxo de trabalho e de quem o utiliza.",
          "Usar inventários e indicadores para revelar lacunas e orientar prioridades.",
          "Validar a documentação contra a realidade: código, dados, agenda de execução e operação.",
          "Definir um nível suficiente de detalhe, protegendo informações sensíveis.",
          "Tratar a passagem de conhecimento como uma entrega, não como uma conversa informal.",
        ],
      },
      { type: "heading", text: "Documentar é reduzir incerteza" },
      {
        type: "paragraph",
        text: "A documentação não deve ser medida pelo número de páginas, mas pela quantidade de incerteza que ela remove. Seu valor aparece quando outra pessoa consegue entender uma decisão, localizar uma dependência, operar um processo ou dar continuidade a um projeto sem depender exclusivamente de quem o criou.",
      },
      {
        type: "paragraph",
        text: "O mapeamento do ciclo do cliente, o tombamento legado e a análise de dependências mostraram que documentar também revela duplicidades, riscos, desperdícios e oportunidades de simplificação. É assim que conhecimento individual se transforma em capacidade coletiva.",
      },
    ],
  },
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
  {
    title: "Julho: transformar trabalho acumulado em base para evoluir",
    slug: "julho-2026-transformar-trabalho-em-base",
    description:
      "Resumo de julho: estabilidade no Olimpo, método em Engenharia de Dados, evolução do site e o início do mapeamento de sistemas legados.",
    publishedAt: "2026-08-10",
    author: "Thiago Godeguesi",
    category: "Resumo mensal",
    cover: {
      src: "/blog/resumo-julho-2026.png",
      alt: "Ilustração de fluxos de dados conectando documentação legada a uma arquitetura digital moderna.",
      width: 1672,
      height: 941,
    },
    body: [
      { type: "paragraph", text: "Julho foi menos sobre anunciar novidades e mais sobre construir estrutura." },
      { type: "paragraph", text: "Foi um mês de organizar projetos, reduzir incertezas e transformar coisas que estavam dispersas em bases mais claras: código, processos, infraestrutura, documentação e decisões." },
      { type: "paragraph", text: "Nem tudo ficou pronto. Mas muita coisa deixou de ser apenas intenção." },
      { type: "heading", text: "Olimpo: estabilizar antes de acelerar" },
      { type: "paragraph", text: "No Olimpo, o foco foi fortalecer o MVP antes de ampliar escopo." },
      { type: "paragraph", text: "A versão 0.1.0 ganhou uma base mais consistente, com regras de acesso por perfil, controle de assinatura e bloqueio de clínicas, migrações organizadas e validação de isolamento entre clientes. A esteira de testes end-to-end chegou a 17 testes aprovados, cobrindo fluxos importantes da aplicação." },
      { type: "paragraph", text: "Esse tipo de avanço nem sempre aparece para quem usa o produto. Mas é o que torna possível evoluir sem perder confiança a cada mudança." },
      { type: "paragraph", text: "Também consolidamos a estrutura dos repositórios e a organização dos projetos. Parece detalhe, mas é uma forma de reduzir o custo das próximas decisões: saber onde cada parte vive, o que está em andamento e qual é a prioridade real." },
      { type: "link", text: "Venha conhecer o sistema e acompanhar a evolução do Olimpo.", href: "https://olimposistema.com.br" },
      { type: "heading", text: "Engenharia de Dados: sair da intenção e entrar em método" },
      { type: "paragraph", text: "Julho também marcou uma retomada mais consciente dos meus estudos em Engenharia de Dados." },
      { type: "paragraph", text: "A conversa deixou de ser apenas ‘preciso voltar a estudar’ e passou a ter direção: um plano compatível com a rotina, foco na certificação Associate da Databricks e acompanhamento de tecnologias que aparecem cada vez mais nos problemas que quero resolver." },
      { type: "paragraph", text: "BigQuery, Dataform, Databricks, Azure Data Factory e práticas de CI/CD entraram como trilhas conectadas, não como uma lista aleatória de ferramentas. O objetivo é entender como desenhar fluxos de dados confiáveis, observáveis e sustentáveis - equilibrando custo, desempenho, manutenção e risco." },
      { type: "paragraph", text: "Um exercício importante desse período foi estruturar o inventário de centenas de objetos de dados de um ambiente de CRM. Em vez de tratar tabelas e campos apenas como itens soltos, a discussão passou por origem, frequência, volume, qualidade, acessos, políticas e dependências." },
      { type: "paragraph", text: "A arquitetura definida separa inventário, qualidade, catálogo de campos e relações entre objetos. Isso cria uma base para responder perguntas que normalmente aparecem tarde demais: o que alimenta este dado? Quem depende dele? Qual é sua frequência? Onde existe risco de qualidade? Qual automação realmente vale a pena?" },
      { type: "paragraph", text: "Foi um lembrete importante: qualidade, rastreabilidade e governança não são etapas finais. Elas precisam entrar no desenho desde o início." },
      { type: "heading", text: "Um site que começa a representar melhor o trabalho" },
      { type: "paragraph", text: "O site pessoal Godeguesi também ganhou uma fundação mais madura." },
      { type: "paragraph", text: "A construção passou por design system, componentes reutilizáveis, organização de páginas públicas e uma definição mais clara de posicionamento: Engenharia de Dados, modernização de ambientes, automação, qualidade, governança e software confiável." },
      { type: "paragraph", text: "Os estudos de caso começaram a transformar experiências em conteúdo estruturado. Não como vitrine vazia, mas como registro de contexto, decisões, aprendizados e resultados que podem ser comunicados com responsabilidade." },
      { type: "paragraph", text: "O objetivo não é apenas ter um site bonito. É ter um espaço que acompanhe o trabalho real e permita construir presença de forma consistente ao longo do tempo." },
      { type: "heading", text: "Revive: antes de modernizar, entender" },
      { type: "paragraph", text: "Outro movimento importante foi no Revive, o projeto de análise de sistemas legados em Oracle Forms e Reports." },
      { type: "paragraph", text: "Antes de falar em conversão, era necessário entender o tamanho e a natureza do acervo. O catálogo técnico começou a organizar milhares de arquivos, fontes, relatórios, bibliotecas e dependências que estavam espalhados em backups antigos." },
      { type: "paragraph", text: "Esse levantamento revelou repetições, lacunas entre arquivos compilados e fontes disponíveis, além de caminhos possíveis para análise e futura migração." },
      { type: "paragraph", text: "Modernizar um sistema legado não começa reescrevendo código. Começa entendendo o que existe, o que é essencial e onde está o risco." },
      { type: "heading", text: "Menos improviso, mais contexto" },
      { type: "paragraph", text: "Ao longo do mês, uma ideia apareceu em projetos diferentes: contexto reduz improviso." },
      { type: "paragraph", text: "Seja em um produto SaaS, em uma estrutura de dados, em um sistema legado ou em um site, a qualidade das próximas etapas depende da clareza construída antes. Clareza sobre o problema, sobre o público, sobre regras de negócio, dependências e o que precisa continuar funcionando." },
      { type: "paragraph", text: "É também por isso que a Inteligência Artificial vem ganhando espaço na forma como penso processos. Não como substituta de decisão, mas como apoio para organizar informação, documentar conhecimento, testar caminhos e reduzir tarefas repetitivas." },
      { type: "heading", text: "O que julho deixou" },
      { type: "paragraph", text: "Julho deixou menos promessas abstratas e mais pontos de apoio." },
      { type: "list", items: ["O Olimpo ficou mais estável.", "A direção em Engenharia de Dados ganhou método.", "O site ganhou estrutura e posicionamento.", "O legado começou a ser mapeado.", "Os projetos passaram a ter mais contexto, organização e critério."] },
      { type: "paragraph", text: "O próximo passo não é fazer tudo ao mesmo tempo. É continuar evoluindo o que já começou a se provar importante." },
      { type: "paragraph", text: "Essa é a parte menos barulhenta da construção. E, quase sempre, é a que sustenta todo o resto." },
    ],
  }
];

export const blogPostBySlug = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
) as Record<string, BlogPost | undefined>;

export function formatBlogDate(publishedAt: string): string {
  const [year, month, day] = publishedAt.split("-");
  return `${day}/${month}/${year}`;
}
