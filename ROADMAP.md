# Roadmap — Portfólio Godeguesi

## Visão

O projeto **Godeguesi** será o site público central do portfólio profissional de Thiago Godeguesi. Ele deverá conectar trajetória, competências, projetos e estudos de caso, oferecendo evidências reais de experiência técnica sem expor informações confidenciais, código proprietário ou dados de clientes e empregadores.

O portfólio será complementar ao LinkedIn e ao GitHub:

- **LinkedIn:** trajetória profissional, formação, certificações e networking.
- **Godeguesi:** narrativa, projetos, decisões técnicas, resultados e aprendizados.
- **GitHub:** código público, documentação, testes e histórico de evolução.
- **Repositórios privados:** produtos, estratégia, propriedade intelectual e infraestrutura sensível.

## Princípios

1. **Mostrar trabalho real:** estudos de caso devem explicar contexto, problema, restrições, decisões, resultados e aprendizados.
2. **Segurança por padrão:** nenhum segredo, dado de cliente, informação de empregador ou detalhe sensível deve ser publicado.
3. **Conteúdo antes da aparência:** posicionamento e inventário devem ser definidos antes da implementação completa das páginas.
4. **MVP estático:** não haverá banco de dados, autenticação ou backend sem necessidade validada.
5. **Qualidade verificável:** lint, typecheck, testes e build devem fazer parte do fluxo normal.
6. **Evolução por cards:** toda mudança relevante deve possuir issue, branch, pull request e critérios de aceite.

## Escopo do MVP

- Home.
- Sobre e trajetória profissional.
- Competências e tecnologias.
- Catálogo de projetos.
- Template reutilizável de estudo de caso.
- Pelo menos três estudos de caso publicados.
- Contato e links profissionais.
- SEO técnico.
- Acessibilidade e responsividade.
- Testes e quality gates.
- CI/CD, domínio e publicação com HTTPS.

## Fora do MVP

- CMS administrativo.
- Blog completo.
- Autenticação.
- Banco de dados.
- Newsletter.
- Formulário com backend.
- Integrações avançadas.
- Conteúdo bilíngue.

## Fases

### Fase 1 — Descoberta, segurança e governança

Objetivo: definir o que será comunicado e estabelecer os limites da exposição pública.

- [ ] [#2 — Definir posicionamento e inventário de conteúdo](https://github.com/thiagogodeguesi/Godeguesi/issues/2)
- [ ] [#14 — Definir fluxo de contribuição e proteção da branch main](https://github.com/thiagogodeguesi/Godeguesi/issues/14)
- [ ] [#17 — Revisar exposição pública do repositório e do site](https://github.com/thiagogodeguesi/Godeguesi/issues/17)

**Saída da fase:** posicionamento aprovado, conteúdo priorizado, fluxo de trabalho definido e riscos de exposição mapeados.

### Fase 2 — Fundação técnica e visual

Objetivo: criar uma base simples, testável e reutilizável para todas as páginas.

- [ ] [#3 — Inicializar aplicação Next.js com TypeScript](https://github.com/thiagogodeguesi/Godeguesi/issues/3)
- [ ] [#4 — Criar identidade visual e design system](https://github.com/thiagogodeguesi/Godeguesi/issues/4)
- [ ] [#11 — Consolidar roadmap e regras de evolução](https://github.com/thiagogodeguesi/Godeguesi/issues/11)

**Saída da fase:** aplicação executando localmente, componentes básicos reutilizáveis, padrões documentados e quality gates iniciais funcionando.

### Fase 3 — Conteúdo e experiência

Objetivo: publicar uma narrativa profissional clara e estudos de caso relevantes.

- [ ] [#13 — Produzir os três primeiros estudos de caso](https://github.com/thiagogodeguesi/Godeguesi/issues/13)
- [ ] [#5 — Implementar Home](https://github.com/thiagogodeguesi/Godeguesi/issues/5)
- [ ] [#6 — Implementar página Sobre e trajetória profissional](https://github.com/thiagogodeguesi/Godeguesi/issues/6)
- [ ] [#7 — Criar catálogo de projetos e modelo de estudo de caso](https://github.com/thiagogodeguesi/Godeguesi/issues/7)
- [ ] [#8 — Implementar contato e presença profissional](https://github.com/thiagogodeguesi/Godeguesi/issues/8)

**Saída da fase:** Home, Sobre, Projetos e Contato navegáveis, com ao menos três casos sanitizados.

### Fase 4 — Qualidade, publicação e versão 1.0

Objetivo: validar, publicar e estabelecer uma primeira versão confiável.

- [ ] [#9 — Implementar testes, SEO, acessibilidade e desempenho](https://github.com/thiagogodeguesi/Godeguesi/issues/9)
- [ ] [#10 — Configurar CI/CD e publicar o MVP](https://github.com/thiagogodeguesi/Godeguesi/issues/10)
- [ ] [#15 — Definir critérios e conteúdo da versão 1.0](https://github.com/thiagogodeguesi/Godeguesi/issues/15)

**Saída da fase:** site publicado com HTTPS, quality gates aprovados, monitoramento básico e critérios da versão 1.0 atendidos.

### Acompanhamento e pós-MVP

- [ ] [#16 — Acompanhar dependências e ordem de execução](https://github.com/thiagogodeguesi/Godeguesi/issues/16)
- [ ] [#12 — Planejar evoluções pós-MVP](https://github.com/thiagogodeguesi/Godeguesi/issues/12)

## Caminho crítico

```text
#2 Posicionamento e conteúdo
        ↓
#3 Fundação Next.js
        ↓
#4 Design system
        ↓
#13 Estudos de caso
        ↓
#5 Home ─┬─ #6 Sobre ─┬─ #7 Projetos ─┬─ #8 Contato
         └─────────────┴───────────────┘
                         ↓
#9 Qualidade, SEO e acessibilidade
                         ↓
#10 CI/CD e publicação
                         ↓
#15 Versão 1.0
```

Os cards de governança, documentação e segurança devem acompanhar todo o fluxo, não apenas uma fase isolada.

## Estudos de caso iniciais

### Projeto Particular / Olimpo

Apresentar, de forma sanitizada:

- arquitetura SaaS;
- backend FastAPI;
- PostgreSQL;
- autenticação JWT;
- isolamento multi-tenant;
- testes de integração e E2E;
- infraestrutura própria;
- decisões de arquitetura e segurança.

### Hermes Hub ou automação equivalente

Apresentar:

- problema de negócio;
- fluxo da solução;
- separação entre frontend, backend e integrações;
- restrições de plataformas externas;
- decisões para controle e rastreabilidade.

### Engenharia de dados ou infraestrutura

Apresentar um caso sanitizado envolvendo:

- automação;
- qualidade de dados;
- monitoramento;
- custos e desempenho;
- migração ou padronização;
- decisões e resultados permitidos.

## Regras de confidencialidade

Não publicar:

- código proprietário de projetos privados;
- informações da Porto ou de qualquer cliente/empregador;
- nomes de pessoas sem autorização;
- credenciais, tokens ou variáveis de ambiente;
- endereços IP, endpoints internos ou topologia sensível;
- dumps, logs, screenshots ou documentos com dados pessoais;
- métricas confidenciais ou afirmações que não possam ser sustentadas.

Quando necessário, usar nomes genéricos, valores aproximados e avisos explícitos de anonimização.

## Quality gates

O projeto deverá possuir, no mínimo:

```text
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

Além disso:

- nenhum link quebrado conhecido;
- nenhum segredo versionado;
- páginas principais navegáveis por teclado;
- contraste adequado;
- metadata e sitemap configurados;
- layout validado em mobile e desktop;
- deploy somente após aprovação dos gates.

## Critério de conclusão do MVP

O MVP estará concluído quando:

- o site estiver publicado com domínio e HTTPS;
- Home, Sobre, Projetos e Contato estiverem disponíveis;
- existirem pelo menos três estudos de caso;
- LinkedIn e GitHub estiverem vinculados;
- o conteúdo tiver sido revisado quanto à confidencialidade;
- lint, typecheck, testes e build estiverem aprovados;
- o CI/CD estiver funcionando;
- não houver problema crítico conhecido de acessibilidade ou segurança.

## Referências de execução

- [Épico principal #1](https://github.com/thiagogodeguesi/Godeguesi/issues/1)
- [Ordem e dependências #16](https://github.com/thiagogodeguesi/Godeguesi/issues/16)
- [Backlog pós-MVP #12](https://github.com/thiagogodeguesi/Godeguesi/issues/12)
