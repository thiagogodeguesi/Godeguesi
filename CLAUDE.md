# CLAUDE.md

## 1. Objetivo deste arquivo

Este arquivo define como o Claude deve atuar no repositório `Godeguesi`.

O objetivo é garantir entregas pequenas, rastreáveis, revisáveis e retomáveis, reduzindo conflitos, retrabalho e risco de interrupção por limite de uso.

O Claude deve trabalhar **um card por vez**.

## 2. Objetivo do projeto

O Godeguesi é o portfólio profissional de Thiago Godeguesi.

O site deve apresentar:

- evolução profissional;
- experiência prática em Engenharia de Dados;
- projetos e estudos de caso;
- decisões técnicas;
- resultados alcançados;
- competências em dados, automação, arquitetura e software;
- formas de contato profissional.

O projeto não deve ser tratado como um site genérico de desenvolvedor. A identidade precisa transmitir maturidade, tecnologia, evolução e capacidade de execução.

## 3. Posicionamento profissional

Posicionamento principal:

> Engenheiro de Dados com atuação em modernização de ambientes, automação, qualidade de dados, otimização de custos e evolução de processos.

Mensagem central:

> Transformando problemas complexos em soluções de dados, automação e software que evoluem junto com o negócio.

O conteúdo deve evidenciar trajetória e evolução, evitando limitar a apresentação a uma lista de tecnologias.

## 4. Stack obrigatória

A fundação técnica recomendada para o MVP é:

- Next.js com App Router;
- TypeScript;
- Tailwind CSS;
- ESLint;
- Prettier;
- Vitest;
- Testing Library;
- Playwright para fluxos navegáveis;
- npm;
- Node.js LTS;
- renderização estática sempre que possível.

Mudanças na stack exigem justificativa técnica e aprovação antes da implementação.

## 5. Princípios de arquitetura

- Preferir soluções simples e adequadas ao MVP.
- Evitar backend, banco de dados ou CMS sem necessidade comprovada.
- Manter o conteúdo desacoplado dos componentes sempre que possível.
- Estruturar estudos de caso para futura migração a MDX ou CMS.
- Criar componentes reutilizáveis sem antecipar abstrações desnecessárias.
- Manter responsabilidade clara entre layout, componentes, conteúdo e utilitários.
- Priorizar acessibilidade, desempenho e manutenção.
- Evitar dependências que não tragam benefício concreto.

## 6. Direção visual

A identidade deve ser:

- clean;
- moderna;
- avançada;
- futurista;
- profissional;
- tecnológica;
- minimalista.

Direção inicial:

- base escura ou grafite;
- alto contraste;
- grandes áreas de respiro;
- tipografia moderna e legível;
- linhas finas e elementos geométricos;
- gradientes discretos;
- destaques em azul, ciano, violeta ou verde tecnológico;
- cards com bordas sutis;
- glassmorphism apenas com moderação;
- animações suaves;
- referências a dados, nós, pipelines, camadas e evolução.

Evitar aparência de template genérico, excesso de efeitos, poluição visual e animações que prejudiquem desempenho ou acessibilidade.

## 7. Projetos iniciais do portfólio

Os primeiros estudos de caso serão:

1. Modernização de ambiente de Engenharia de Dados em uma empresa do ramo de seguros.
2. Plataforma SaaS Olimpo.
3. Projeto de gerenciamento de e-commerce.

O conteúdo detalhado será refinado em cards próprios.

## 8. Política obrigatória de anonimização

Nunca expor:

- nomes de empresas, clientes, gestores ou funcionários;
- sistemas internos;
- URLs internas;
- endereços IP;
- credenciais, tokens, chaves ou segredos;
- dados pessoais;
- dados de clientes;
- consultas completas de ambientes corporativos;
- screenshots identificáveis;
- documentos internos;
- valores contratuais;
- informações capazes de prejudicar empresas atuais ou encerradas.

Formas permitidas de referência:

- empresa do ramo de seguros;
- empresa do segmento de e-commerce;
- empresa do setor financeiro;
- cliente do segmento de saúde;
- ambiente corporativo de grande porte;
- plataforma com centenas de objetos de dados.

Problemas devem ser descritos de forma técnica, neutra e sem julgamento de pessoas ou organizações.

Antes de adicionar qualquer conteúdo profissional, revisar se ele permite identificar empresa, cliente, sistema ou pessoa.

## 9. Escopo do MVP

O MVP deve conter:

- Home;
- página Sobre;
- catálogo de projetos;
- pelo menos um estudo de caso completo;
- canais de contato;
- layout responsivo;
- SEO básico;
- acessibilidade essencial;
- publicação no domínio oficial.

Fora do MVP, salvo card explícito:

- blog;
- conteúdo bilíngue;
- CMS;
- autenticação;
- banco de dados;
- área administrativa;
- formulário com persistência;
- analytics invasivo;
- API de visitantes;
- coleta de dados pessoais.

## 10. Forma de atuação por card

O Claude deve executar apenas o card informado pelo usuário.

Antes de alterar arquivos:

1. Ler integralmente o card.
2. Identificar objetivo, escopo, dependências e critérios de aceite.
3. Ler `README.md`, `CLAUDE.md` e arquivos relacionados.
4. Verificar o estado atual da branch e da `main`.
5. Confirmar que não existe outro trabalho concorrente na mesma área.
6. Criar ou utilizar uma branch exclusiva para o card.

Durante o desenvolvimento:

1. Permanecer dentro do escopo.
2. Fazer mudanças pequenas e coerentes.
3. Não reescrever partes não relacionadas do projeto.
4. Não alterar decisões estratégicas sem autorização.
5. Não adicionar dependências sem justificativa.
6. Atualizar testes junto com o código.
7. Atualizar documentação quando a entrega mudar comportamento ou convenções.
8. Registrar descobertas fora do escopo como sugestão de novo card.

Ao finalizar:

1. Executar os quality gates.
2. Revisar o diff completo.
3. Confirmar os critérios de aceite.
4. Criar commits claros.
5. Abrir pull request relacionado ao card.
6. Informar o que foi feito, testes executados, riscos e pendências.
7. Não fazer merge sem aprovação, salvo instrução explícita.

## 11. Trabalho resiliente a limite de uso

Como o Claude pode ser interrompido por limite de uso, cada card deve ser tratado como uma unidade independente e retomável.

Regras:

- Não iniciar dois cards na mesma sessão.
- Não misturar múltiplos objetivos em uma branch.
- Fazer commits intermediários apenas quando deixarem o repositório em estado coerente.
- Manter a branch publicável no remoto ao encerrar uma etapa relevante.
- Atualizar a descrição do PR com o estado real da entrega.
- Caso não consiga terminar, deixar um resumo objetivo com:
  - o que já foi concluído;
  - arquivos alterados;
  - comandos executados;
  - testes que passaram ou falharam;
  - próximo passo exato;
  - riscos conhecidos.
- Nunca afirmar que um card foi concluído sem validar os critérios de aceite.

## 12. Branches

Padrão recomendado:

```text
feat/<numero>-<descricao-curta>
fix/<numero>-<descricao-curta>
docs/<numero>-<descricao-curta>
refactor/<numero>-<descricao-curta>
test/<numero>-<descricao-curta>
chore/<numero>-<descricao-curta>
```

Exemplos:

```text
feat/3-nextjs-foundation
feat/4-design-system
docs/19-project-foundation
fix/21-mobile-navigation
```

Regras:

- Uma branch por card.
- Criar a branch a partir da `main` atualizada.
- Não reutilizar branch de card encerrado.
- Não fazer commit direto na `main` para mudanças relevantes.
- Após merge, remover a branch quando possível.

## 13. Commits

Usar mensagens claras e objetivas, preferencialmente no padrão Conventional Commits.

Exemplos:

```text
feat: initialize Next.js application foundation
feat: add portfolio design tokens
fix: correct mobile navigation behavior
test: cover project card interactions
docs: document portfolio content rules
chore: configure lint and formatting
```

Evitar commits genéricos como:

```text
update
changes
fix stuff
final
```

## 14. Pull requests

Todo pull request deve conter:

- referência ao card;
- resumo da solução;
- principais arquivos alterados;
- decisões técnicas;
- testes executados;
- evidências quando aplicável;
- riscos ou limitações;
- pendências fora do escopo;
- checklist dos critérios de aceite.

Título recomendado:

```text
[#3] Inicializar aplicação Next.js com TypeScript
```

O PR não deve incluir alterações de outros cards.

## 15. Quality gates

Quando os scripts existirem, executar obrigatoriamente:

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

Quando houver testes E2E configurados e o card alterar um fluxo navegável:

```bash
npm run test:e2e
```

Se algum comando não existir ainda, registrar isso claramente. Não considerar a validação aprovada sem explicar a ausência.

Nenhum erro de lint, TypeScript, teste ou build deve ser ignorado silenciosamente.

## 16. Qualidade de código

- TypeScript em modo estrito.
- Evitar `any` sem justificativa.
- Componentes pequenos e com responsabilidade clara.
- Nomes descritivos.
- Remover código morto.
- Evitar comentários que apenas repetem o código.
- Tratar estados de loading, erro e vazio quando aplicável.
- Preservar semântica HTML.
- Não duplicar conteúdo ou lógica sem necessidade.
- Não fazer otimização prematura.

## 17. Acessibilidade

- Navegação completa por teclado.
- Foco visível.
- Hierarquia correta de headings.
- Contraste adequado.
- Labels acessíveis.
- Texto alternativo para imagens relevantes.
- Respeito a `prefers-reduced-motion`.
- Elementos interativos devem utilizar elementos HTML apropriados.
- Não depender apenas de cor para transmitir informação.

## 18. Desempenho

- Preferir Server Components quando adequado.
- Usar Client Components apenas quando necessário.
- Otimizar imagens.
- Evitar JavaScript desnecessário no cliente.
- Evitar bibliotecas pesadas para efeitos simples.
- Manter animações discretas e eficientes.
- Preservar boa experiência em dispositivos móveis e conexões lentas.

## 19. SEO

Quando aplicável ao card:

- metadata por página;
- título e descrição coerentes;
- Open Graph;
- sitemap;
- robots;
- URL canônica;
- dados estruturados apropriados;
- headings semanticamente corretos.

Domínio de produção:

```text
https://godeguesi.com.br
```

## 20. Conteúdo e contatos

Os contatos previstos são:

- WhatsApp pessoal;
- e-mail pessoal;
- LinkedIn;
- GitHub.

Enquanto os valores definitivos não forem informados, utilizar configuração centralizada e placeholders explícitos. Nunca inventar número, e-mail, URL de perfil ou dado pessoal.

O WhatsApp deve ser preferencialmente apresentado como botão com mensagem inicial.

## 21. Infraestrutura e deploy

Estratégia inicial:

- hospedagem na Vercel;
- DNS e proteção pela Cloudflare;
- domínio `godeguesi.com.br`;
- HTTPS obrigatório;
- deploy de produção a partir da `main`;
- previews de pull request quando disponíveis.

Não configurar recursos pagos ou alterar DNS sem autorização explícita.

## 22. Segurança

Antes de cada PR:

- revisar se existem segredos;
- validar `.gitignore`;
- não versionar `.env` real;
- manter apenas `.env.example` sem valores sensíveis;
- revisar logs, screenshots e arquivos públicos;
- conferir links e dados pessoais;
- evitar dependências desnecessárias ou sem manutenção.

## 23. Decisões que o Claude não pode tomar sozinho

Exigem aprovação:

- mudança de stack;
- alteração do posicionamento profissional;
- mudança dos projetos iniciais;
- publicação de métricas profissionais;
- uso de nomes reais de empresas ou clientes;
- alteração da política de anonimização;
- escolha final de logo e identidade da marca;
- contratação de serviços;
- configuração de domínio ou DNS;
- inclusão de coleta de dados;
- ampliação do escopo do MVP;
- merge na `main`, salvo instrução explícita.

## 24. Ordem recomendada de execução

1. Posicionamento e inventário de conteúdo.
2. Fundação Next.js.
3. Identidade visual e design system.
4. Conteúdo dos estudos de caso.
5. Home, Sobre, Projetos e Contato.
6. Testes, SEO, acessibilidade e desempenho.
7. CI/CD e publicação.
8. Revisão de segurança.
9. Release do MVP.

## 25. Formato de encerramento de cada card

Ao final, responder com uma síntese neste formato:

```markdown
## Card executado
- Card: #<número> — <título>
- Branch: `<branch>`
- Status: concluído | parcial | bloqueado

## Entregas
- ...

## Arquivos principais
- ...

## Validações
- `npm run lint`: passou | falhou | não disponível
- `npm run typecheck`: passou | falhou | não disponível
- `npm run test`: passou | falhou | não disponível
- `npm run build`: passou | falhou | não disponível
- `npm run test:e2e`: passou | falhou | não aplicável

## Riscos ou pendências
- ...

## Próximo passo exato
- ...
```

Esse resumo deve refletir o estado real do repositório e permitir que outra sessão retome o trabalho sem depender do contexto anterior.
