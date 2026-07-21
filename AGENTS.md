# AGENTS.md

## 1. Finalidade

Este arquivo define como o Codex deve atuar no repositório `Godeguesi`.

O objetivo é garantir entregas pequenas, rastreáveis, revisáveis e seguras. O Codex deve trabalhar em **um card por vez**, usando uma branch exclusiva e um pull request independente.

## 2. Objetivo do projeto

O Godeguesi é o portfólio profissional de Thiago Godeguesi.

O site deve apresentar:

- evolução profissional;
- experiência prática em Engenharia de Dados;
- projetos e estudos de caso;
- decisões técnicas e resultados alcançados;
- competências em dados, automação, arquitetura e software;
- formas de contato profissional.

O projeto não deve parecer um template genérico de desenvolvedor. A identidade deve transmitir maturidade, tecnologia, evolução e capacidade de execução.

## 3. Posicionamento profissional

> Engenheiro de Dados com atuação em modernização de ambientes, automação, qualidade de dados, otimização de custos e evolução de processos.

Mensagem central:

> Transformando problemas complexos em soluções de dados, automação e software que evoluem junto com o negócio.

O conteúdo deve evidenciar trajetória e evolução, evitando limitar a apresentação a uma lista de tecnologias.

## 4. Stack do MVP

- Next.js com App Router;
- TypeScript em modo estrito;
- Tailwind CSS;
- ESLint;
- Prettier;
- Vitest;
- Testing Library;
- Playwright para fluxos navegáveis;
- npm;
- Node.js LTS;
- renderização estática sempre que possível.

Mudanças na stack exigem justificativa técnica e aprovação no card ou no pull request.

## 5. Princípios de arquitetura

- Preferir soluções simples e adequadas ao MVP.
- Evitar backend, banco de dados, autenticação ou CMS sem card explícito.
- Manter conteúdo desacoplado dos componentes quando possível.
- Estruturar estudos de caso para futura migração a MDX ou CMS.
- Criar componentes reutilizáveis sem antecipar abstrações desnecessárias.
- Separar claramente layout, componentes, conteúdo, tipos e utilitários.
- Priorizar acessibilidade, desempenho e manutenção.
- Evitar dependências sem benefício concreto.
- Preferir Server Components; usar Client Components apenas quando necessário.

## 6. Direção visual

A identidade deve ser clean, moderna, avançada, futurista, profissional, tecnológica e minimalista.

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
- referências a dados, nós, pipelines, camadas e evolução.

Evitar excesso de efeitos, poluição visual e animações que prejudiquem desempenho ou acessibilidade.

## 7. Projetos iniciais

1. Modernização de ambiente de Engenharia de Dados em uma empresa do ramo de seguros.
2. Plataforma SaaS Olimpo.
3. Projeto de gerenciamento de e-commerce.

O conteúdo detalhado será desenvolvido em cards próprios.

## 8. Política de anonimização

Nunca expor:

- nomes de empresas, clientes, gestores ou funcionários;
- sistemas, URLs ou IPs internos;
- credenciais, tokens, chaves ou segredos;
- dados pessoais ou de clientes;
- consultas completas de ambientes corporativos;
- screenshots ou documentos identificáveis;
- valores contratuais;
- informações capazes de prejudicar empresas atuais ou encerradas.

Referências permitidas incluem “empresa do ramo de seguros”, “empresa do segmento de e-commerce”, “ambiente corporativo de grande porte” e equivalentes neutros.

Problemas devem ser descritos tecnicamente, sem julgamento de pessoas ou organizações.

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
- publicação em `godeguesi.com.br`.

Fora do MVP, salvo card explícito:

- blog;
- conteúdo bilíngue;
- CMS;
- autenticação;
- banco de dados;
- área administrativa;
- formulário com persistência;
- API de visitantes;
- coleta de dados pessoais;
- analytics invasivo.

## 10. Atuação por card

Antes de alterar arquivos:

1. Ler integralmente o card ou a issue informada.
2. Identificar objetivo, escopo, dependências, restrições e critérios de aceite.
3. Ler `README.md`, `AGENTS.md` e arquivos relacionados.
4. Inspecionar o estado atual do repositório.
5. Confirmar que a `main` está atualizada.
6. Criar ou utilizar uma branch exclusiva para o card.

Durante o desenvolvimento:

1. Permanecer dentro do escopo.
2. Fazer mudanças pequenas e coerentes.
3. Não reescrever partes não relacionadas.
4. Não alterar decisões estratégicas sem autorização.
5. Não adicionar dependências sem justificativa.
6. Atualizar testes junto com o código.
7. Atualizar documentação quando necessário.
8. Registrar descobertas fora do escopo como sugestão de novo card.

Ao finalizar:

1. Executar os quality gates aplicáveis.
2. Revisar o diff completo.
3. Confirmar todos os critérios de aceite.
4. Criar commits claros.
5. Fazer push da branch.
6. Abrir pull request relacionado ao card.
7. Informar alterações, testes, riscos e pendências.
8. Não realizar merge sem instrução explícita.

## 11. Trabalho retomável

Cada card deve permanecer retomável caso a execução seja interrompida.

- Não misturar dois cards na mesma branch.
- Não iniciar trabalho paralelo na mesma área do código.
- Fazer commits intermediários apenas em estados coerentes.
- Manter a descrição do PR de acordo com o estado real.
- Nunca afirmar que um card foi concluído sem validar os critérios de aceite.

Caso a execução seja parcial, registrar:

- branch atual;
- último commit;
- arquivos alterados;
- comandos executados;
- testes aprovados e falhos;
- pendências;
- próximo passo exato;
- riscos conhecidos.

## 12. Branches

Padrão:

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
docs/21-codex-governance
fix/22-mobile-navigation
```

Regras:

- uma branch por card;
- criar a partir da `main` atualizada;
- não reutilizar branch encerrada;
- não fazer commit direto na `main` para mudanças relevantes;
- remover a branch após o merge quando possível.

## 13. Commits

Preferir Conventional Commits:

```text
feat: initialize Next.js application foundation
fix: correct mobile navigation behavior
test: cover project card interactions
docs: document Codex workflow
chore: configure lint and formatting
```

Evitar mensagens genéricas como `update`, `changes`, `fix stuff` ou `final`.

## 14. Pull requests

Todo PR deve conter:

- referência ao card;
- resumo da solução;
- principais arquivos alterados;
- decisões técnicas;
- testes executados e seus resultados;
- riscos ou limitações;
- pendências fora do escopo;
- checklist dos critérios de aceite.

Usar `Closes #<numero>` quando o PR concluir uma issue.

O PR não deve incluir alterações de outros cards.

## 15. Quality gates

Quando os scripts existirem, executar:

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

Quando o card alterar fluxo navegável e houver Playwright:

```bash
npm run test:e2e
```

Nenhum erro de lint, TypeScript, teste ou build deve ser ignorado. Se algum comando não puder ser executado, registrar claramente o motivo e não declarar o card concluído.

## 16. Qualidade de código

- TypeScript estrito.
- Evitar `any` sem justificativa.
- Componentes pequenos e com responsabilidade clara.
- Nomes descritivos.
- Remover código morto.
- Evitar comentários que apenas repetem o código.
- Tratar loading, erro e vazio quando aplicável.
- Preservar semântica HTML.
- Evitar duplicação desnecessária.
- Não fazer otimização prematura.

## 17. Acessibilidade

- Navegação por teclado.
- Foco visível.
- Hierarquia correta de headings.
- Contraste adequado.
- Labels acessíveis.
- Texto alternativo para imagens relevantes.
- Respeito a `prefers-reduced-motion`.
- Elementos interativos com HTML apropriado.
- Não depender apenas de cor para transmitir informação.

## 18. Desempenho e SEO

- Evitar JavaScript desnecessário no cliente.
- Otimizar imagens e fontes.
- Evitar bibliotecas pesadas para efeitos simples.
- Preservar boa experiência móvel e em conexões lentas.
- Implementar metadata, Open Graph, sitemap, robots e URL canônica quando o card exigir.
- Domínio de produção: `https://godeguesi.com.br`.

## 19. Contatos

Os contatos previstos são WhatsApp pessoal, e-mail pessoal, LinkedIn e GitHub.

Enquanto os dados definitivos não forem informados, usar configuração centralizada e placeholders explícitos. Nunca inventar número, e-mail, URL ou dado pessoal.

## 20. Codex Web e Codex Desktop

- O Codex Web deve atuar sobre o repositório conectado ao GitHub e trabalhar por issue/card.
- O Codex Desktop pode atuar sobre uma cópia local do repositório.
- Não executar simultaneamente dois trabalhos que alterem a mesma branch ou a mesma área do código.
- Para separar projetos, manter o Godeguesi no ambiente Web e o Olimpo no ambiente Desktop é permitido e recomendado.
- Antes de iniciar novo card, confirmar que o PR anterior foi integrado e que a nova tarefa parte da `main` atualizada.

## 21. Resposta final esperada

Ao terminar uma tarefa, informar:

```text
Card:
Status: concluído | parcial | bloqueado
Branch:
Último commit:

Entregas realizadas:
-

Quality gates:
- npm ci:
- npm run lint:
- npm run typecheck:
- npm run test:
- npm run build:
- npm run test:e2e:

Pendências:
-

Riscos ou observações:
-

Pull request:
-

Próximo passo recomendado:
-
```
