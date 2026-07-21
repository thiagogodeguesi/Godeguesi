# Godeguesi

Portfólio profissional de **Thiago Godeguesi**, criado para apresentar evolução técnica, experiência prática e capacidade de transformar problemas complexos em soluções de dados, automação e software.

## Fundação técnica

A aplicação foi inicializada com Next.js App Router, TypeScript em modo estrito, Tailwind CSS, ESLint, Prettier, Vitest e Testing Library. A renderização deve permanecer estática sempre que possível.

### Requisitos

- Node.js LTS compatível com o projeto (`>=22.0.0`);
- npm.

### Execução local

1. Instale as dependências:

   ```bash
   npm ci
   ```

2. Copie as variáveis de ambiente de exemplo quando precisar configurar valores locais:

   ```bash
   cp .env.example .env.local
   ```

3. Inicie a aplicação em modo desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:3000`.

### Scripts disponíveis

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Visão

O Godeguesi será o ponto central da presença profissional de Thiago, reunindo trajetória, competências, projetos e estudos de caso com foco principal em Engenharia de Dados.

A proposta não é apenas listar tecnologias, mas demonstrar:

- evolução profissional;
- problemas reais enfrentados;
- decisões técnicas adotadas;
- resultados alcançados;
- capacidade de aprendizado, adaptação e execução;
- experiência com ambientes legados e modernos;
- desenvolvimento de soluções próprias com qualidade, testes e arquitetura.

## Posicionamento profissional

**Engenheiro de Dados com atuação em modernização de ambientes, automação, qualidade de dados, otimização de custos e evolução de processos.**

### Competências em destaque

- Engenharia e arquitetura de dados;
- BigQuery;
- Dataform;
- Databricks;
- Azure Data Factory;
- Python;
- APIs e FastAPI;
- PostgreSQL;
- automação de processos;
- qualidade, governança e rastreabilidade;
- testes de integração e E2E;
- CI/CD e práticas de desenvolvimento;
- arquitetura de produtos SaaS.

## Mensagem central

> **Transformando problemas complexos em soluções de dados, automação e software que evoluem junto com o negócio.**

Minha trajetória profissional foi construída resolvendo problemas reais, modernizando processos, estruturando ambientes de dados e desenvolvendo soluções que conectam engenharia, automação e produto.

## Projetos iniciais

### 1. Modernização de ambiente de Engenharia de Dados

Estudo de caso baseado em uma **empresa do ramo de seguros**, sem identificação da organização, pessoas, clientes ou sistemas internos.

Temas previstos:

- modernização de pipelines;
- BigQuery, Dataform, Databricks e Azure Data Factory;
- padronização de datasets, tabelas e campos;
- cargas incrementais;
- qualidade, governança e rastreabilidade;
- otimização de custos e desempenho;
- dependências e referências circulares;
- evolução de um ambiente com centenas de objetos.

### 2. Plataforma SaaS Olimpo

Apresentação do Olimpo como projeto completo, incluindo arquitetura, FastAPI, PostgreSQL, JWT, isolamento multi-tenant, testes, infraestrutura, CI/CD, frontend em Next.js e gestão por cards, esteiras e versões.

### 3. Gerenciamento de e-commerce

Estudo de caso sobre uma solução de gerenciamento de e-commerce, cobrindo contexto, processos, arquitetura, integrações, automações, tecnologias, resultados e possibilidades de evolução.

## Política de anonimização

Projetos profissionais e trabalhos relacionados a terceiros deverão ser apresentados de forma anonimizada.

Não podem ser publicados:

- nomes de empresas, clientes, gestores ou funcionários;
- sistemas, URLs ou IPs internos;
- credenciais, tokens, chaves ou segredos;
- dados pessoais ou de clientes;
- consultas completas de ambientes corporativos;
- screenshots ou documentos identificáveis;
- valores contratuais;
- informações capazes de prejudicar empresas atuais ou encerradas.

Problemas devem ser descritos de forma técnica, neutra e sem julgamento de pessoas ou organizações.

## Direção visual

A identidade será clean, moderna, avançada, futurista, profissional, tecnológica e minimalista.

Direção inicial:

- base escura ou grafite;
- alto contraste e áreas de respiro;
- tipografia moderna e legível;
- linhas finas e elementos geométricos;
- gradientes discretos;
- destaques em azul, ciano, violeta ou verde tecnológico;
- cards com bordas sutis;
- glassmorphism com moderação;
- animações suaves;
- referências visuais a dados, nós, pipelines, camadas e evolução.

A identidade não deverá parecer um template genérico de desenvolvedor.

## Stack técnica

- Next.js com App Router;
- TypeScript;
- Tailwind CSS;
- ESLint;
- Prettier;
- Vitest;
- Testing Library;
- Playwright;
- npm;
- Node.js LTS;
- deploy estático sempre que possível.

## Domínio e hospedagem

- domínio: `godeguesi.com.br`;
- hospedagem prevista na Vercel;
- DNS e proteção de borda pela Cloudflare;
- deploy automático a partir da `main`;
- preview automático para pull requests;
- HTTPS obrigatório.

## Canais de contato

O portfólio poderá apresentar WhatsApp pessoal, e-mail pessoal, LinkedIn e GitHub. Os dados definitivos serão centralizados em configuração própria e nunca deverão ser inventados.

## Escopo do MVP

- Home;
- página Sobre;
- catálogo de projetos;
- pelo menos um estudo de caso completo;
- canais de contato;
- layout responsivo;
- SEO básico;
- acessibilidade essencial;
- publicação no domínio oficial.

## Evoluções pós-MVP

- três estudos de caso completos;
- blog ou artigos técnicos;
- conteúdo em português e inglês;
- currículo para visualização e download;
- CMS;
- formulário protegido contra spam;
- métricas de uso respeitando privacidade.

## Fluxo de desenvolvimento com Codex

O projeto será executado por card ou issue.

1. Cada card deve possuir objetivo, escopo e critérios de aceite claros.
2. O Codex deve trabalhar em apenas um card por tarefa.
3. Cada card deve usar uma branch própria criada a partir da `main` atualizada.
4. Não são permitidos commits diretos na `main` para mudanças relevantes.
5. Cada entrega deve gerar um pull request independente.
6. Antes do PR, devem ser executados lint, typecheck, testes e build.
7. O Codex não deve realizar o merge sem instrução explícita.
8. O próximo card começa somente após a sincronização com a `main` atualizada.
9. Mudanças fora do escopo devem ser registradas em outro card.

As regras operacionais completas estão em [`AGENTS.md`](./AGENTS.md), arquivo reconhecido pelo Codex para instruções do repositório.

O Godeguesi poderá ser desenvolvido pelo Codex Web conectado ao GitHub, enquanto o Olimpo permanece em desenvolvimento no Codex Desktop. Os dois fluxos não devem compartilhar branches ou diretórios locais.

## Status atual

O projeto está na fase de fundação e preparação para a implementação do MVP. As decisões estratégicas estão registradas nas issues do repositório.

## Licença

A licença do projeto ainda será definida.
