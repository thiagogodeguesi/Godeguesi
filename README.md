# Godeguesi

Portfólio profissional de Thiago Godeguesi, com foco em Engenharia de Dados, automação, arquitetura e software.

## Tecnologias

- Next.js (App Router) e TypeScript estrito;
- Tailwind CSS;
- Vitest e Testing Library;
- exportação estática para hospedagem na Vercel.

## Execução local

Requer Node.js LTS (`>=22`) e npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Scripts

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Estrutura e conteúdo

- `src/app`: rotas públicas, metadados, sitemap e robots;
- `src/components`: design system, navegação e componentes de estudos de caso;
- `src/content/site.ts`: posicionamento, navegação e configuração pública;
- `src/content/case-studies.ts`: fonte editorial dos estudos;
- `src/lib/editorial.ts`: regras centralizadas de publicação editorial.

As rotas públicas são `/`, `/sobre`, `/estudos-de-caso`, `/estudos-de-caso/[slug]` e `/contato`.

## Conteúdo e confidencialidade

O conteúdo dos estudos de caso tem status editorial. Campos `confirmed` e `draft` seguros podem ser exibidos; `pending` e `toBeValidated` são omitidos. Não inclua nomes de empresas ou clientes, URLs e infraestrutura interna, credenciais, dados pessoais, consultas, métricas não aprovadas ou qualquer informação capaz de identificar ambientes corporativos.

Os canais de contato permanecem centralizados em `src/content/site.ts` e só devem ser publicados depois de confirmados.

## Variáveis de ambiente

`NEXT_PUBLIC_SITE_URL` define a URL pública para metadata, canonical e sitemap. Em produção, defina-a como `https://godeguesi.com.br`.

## Publicação

O projeto usa `output: "export"`. Depois de validar os quality gates, publique pela integração da Vercel com a branch `main` ou execute o fluxo de deploy configurado no provedor. Não há credenciais ou configuração de deploy local versionadas neste repositório.
