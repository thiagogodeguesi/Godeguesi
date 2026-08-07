
hoje 8:39
image(20260807-113818).png
ME ajuda a escreever o Agente GPT com a instruçaõ que temos de Socrates. 

O que preciso fazer e configurar ?

image(20260807-114334).png
Ao colar as instruções. 
Cmo podemos contornar isso ?

image(20260807-120654).png
e conseguimos criar diretamente aqui no GPT Acctions ?


image(20260807-121715).png
Como configuro aqui pra der acesso ?

image(20260807-121907).png

image(20260807-122541).png

image(20260807-123036).png
image(20260807-123139).png

image(20260807-123653).png

Pensou por 3m 59s
Preparei os arquivos seguindo exatamente a estrutura e o design atual do repositório Godeguesi.

Download
Baixar pacote completo

Arquivos individuais:

page.tsx

SiteFooter.tsx

Onde colocar
Godeguesi/
└── src/
    ├── app/
    │   └── privacidade/
    │       └── socrates/
    │           └── page.tsx
    └── components/
        └── layout/
            └── SiteFooter.tsx
O page.tsx é novo. O SiteFooter.tsx deve substituir o atual; a única mudança funcional é o acréscimo do link Privacidade — SOCRATES no rodapé.

Depois:

git add src/app/privacidade/socrates/page.tsx
git add src/components/layout/SiteFooter.tsx
git commit -m "feat: adiciona politica de privacidade do SOCRATES"
git push origin main
Após o deploy, a URL será:

https://godeguesi.com.br/privacidade/socrates
Essa é a URL que você deve inserir no campo Política de privacidade da GPT Action.


page.tsx
Código


SiteFooter.tsx
Código


Eu preciso adicionar o link dentro do site, não pode apenas existir na estrutura ?

Para a GPT Action funcionar, a página pode apenas existir e estar publicamente acessível pela URL:

https://godeguesi.com.br/privacidade/socrates
Não é obrigatório aparecer no menu principal do site.

Porém, é recomendável deixar um link no rodapé por transparência e para a página não ficar completamente isolada. Por isso enviei dois arquivos:

page.tsx: obrigatório, cria a página;

SiteFooter.tsx: opcional, adiciona o link no rodapé.

Se você não quiser mostrar o link no site, crie somente:

src/app/privacidade/socrates/page.tsx
E não substitua o SiteFooter.tsx.

O ChatGPT apenas precisa conseguir acessar uma página pública válida em HTTPS. Depois do deploy, abra a URL em uma janela anônima. Se carregar sem login e sem erro, pode colocá-la no campo Política de privacidade da Action.


Perfeito, então tire o link do site. 
Deixe a pagina apenas publica. 

Aproveite, já que voce esta com acesso faça a alteração nescessaria e me mande o link da PR. 

Pensou por 25s
Não consegui publicar a PR porque o ambiente atual não possui o GitHub CLI (gh), requisito do fluxo seguro de branch, validação, commit e push. Nenhuma alteração foi feita no repositório.

O arquivo continua pronto aqui:

page.tsx

Ele deve ser criado em:

src/app/privacidade/socrates/page.tsx
Sem alterar o SiteFooter.tsx, a página ficará pública pela URL, mas não aparecerá no menu ou rodapé.


page.tsx
Código


page.tsx


import type { Metadata } from "next";
import type { ReactNode } from "react";
import React from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container, Heading, Text } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Política de Privacidade do SOCRATES",
  description:
    "Política de Privacidade da Entrevista SOCRATES para orientação profissional em tecnologia.",
  path: "/privacidade/socrates",
});

function PolicySection({
  children,
  title,
}: Readonly<{ children: ReactNode; title: string }>) {
  return (
    <section className="space-y-4">
      <Heading level={2} className="text-2xl sm:text-3xl">
        {title}
      </Heading>
      <div className="space-y-4 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

const listClassName = "list-disc space-y-2 pl-6";
const linkClassName =
  "font-semibold text-accent underline-offset-4 hover:text-accent-strong hover:underline";

export default function SocratesPrivacyPage() {
  return (
    <SiteLayout>
      <Container className="max-w-reading py-section">
        <article className="space-y-10">
          <header className="space-y-5 border-b border-border pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              SOCRATES
            </p>
            <Heading level={1}>Política de Privacidade</Heading>
            <Text size="lg">
              Esta Política explica como os dados pessoais são tratados durante
              o uso do SOCRATES — Entrevista de Aderência Profissional em
              Tecnologia.
            </Text>
            <p className="text-sm text-muted">
              <strong>Última atualização:</strong> 7 de agosto de 2026 ·{" "}
              <strong>Versão:</strong> 1.0
            </p>
          </header>

          <div className="rounded-card border border-border bg-surface-subtle p-6">
            <p className="leading-relaxed text-muted">
              O SOCRATES é uma ferramenta de apoio à orientação profissional.
              Ele conduz uma entrevista, organiza evidências, formula hipóteses
              de aderência a áreas de tecnologia e produz um diagnóstico
              preliminar sujeito à revisão humana. Ao iniciar a entrevista, o
              participante declara estar ciente do tratamento descrito nesta
              Política.
            </p>
          </div>

          <PolicySection title="1. Responsável pelo tratamento">
            <p>
              O responsável pelos dados relacionados ao SOCRATES é{" "}
              <strong>{siteConfig.professionalName}</strong>.
            </p>
            <ul className={listClassName}>
              <li>
                Site:{" "}
                <a className={linkClassName} href={siteConfig.url}>
                  {siteConfig.url}
                </a>
              </li>
              <li>
                Privacidade e proteção de dados:{" "}
                <a
                  className={linkClassName}
                  href={`mailto:${siteConfig.contacts.email}`}
                >
                  {siteConfig.contacts.email}
                </a>
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="2. Dados que podem ser coletados">
            <p>Durante a entrevista, podem ser coletados:</p>
            <ul className={listClassName}>
              <li>nome, idade, cidade ou região;</li>
              <li>formação e momento acadêmico ou profissional;</li>
              <li>experiências anteriores e contato com tecnologia;</li>
              <li>interesses, preferências e rejeições profissionais;</li>
              <li>disponibilidade para estudo e prática;</li>
              <li>respostas a perguntas e situações hipotéticas;</li>
              <li>
                exemplos de aprendizagem, colaboração, organização e resolução
                de problemas;
              </li>
              <li>
                hipóteses profissionais, pontuações metodológicas e
                recomendações geradas;
              </li>
              <li>
                data, horário e registros técnicos necessários à execução e à
                gravação dos documentos.
              </li>
            </ul>
            <p>
              O participante não deve informar senhas, documentos, dados
              bancários, informações médicas ou outros dados sensíveis que não
              sejam necessários à orientação.
            </p>
          </PolicySection>

          <PolicySection title="3. Finalidades do tratamento">
            <p>Os dados poderão ser utilizados para:</p>
            <ul className={listClassName}>
              <li>conduzir a Entrevista SOCRATES;</li>
              <li>
                identificar competências, interesses, padrões e pontos a
                validar;
              </li>
              <li>elaborar o Diagnóstico SOCRATES;</li>
              <li>
                propor experimentos profissionais e planos de 30, 60 e 90 dias;
              </li>
              <li>permitir revisão por um mentor humano;</li>
              <li>acompanhar a evolução do participante na mentoria;</li>
              <li>corrigir e melhorar a metodologia;</li>
              <li>proteger a integridade e a segurança do processo;</li>
              <li>atender solicitações e obrigações legais aplicáveis.</li>
            </ul>
            <p>
              Os dados não serão vendidos nem utilizados para publicidade
              direcionada ou decisão automática de contratação.
            </p>
          </PolicySection>

          <PolicySection title="4. Participação e bases do tratamento">
            <p>
              A participação é voluntária. O tratamento será realizado de acordo
              com a finalidade informada, a solicitação do participante, o
              consentimento quando aplicável e outras bases previstas na Lei
              Geral de Proteção de Dados Pessoais — LGPD adequadas ao contexto.
            </p>
            <p>
              O participante pode interromper a entrevista antes da geração e do
              armazenamento do relatório. Quando os dados já estiverem
              armazenados, poderá solicitar correção ou exclusão, observadas
              eventuais obrigações legais de conservação.
            </p>
          </PolicySection>

          <PolicySection title="5. Uso de inteligência artificial">
            <p>
              As respostas são processadas por um GPT personalizado no ChatGPT
              para selecionar perguntas, organizar evidências, comparar
              hipóteses, identificar contradições e gerar um diagnóstico
              preliminar.
            </p>
            <p>
              O resultado é orientativo e pode conter erros ou interpretações
              incompletas. O SOCRATES não realiza diagnóstico psicológico e não
              determina uma profissão definitiva.
            </p>
            <p>
              Nenhuma decisão relevante sobre contratação, exclusão, capacidade
              ou futuro profissional deve ser tomada exclusivamente pelo
              resultado automatizado. O plano deve permanecer pendente até
              revisão de um mentor humano.
            </p>
          </PolicySection>

          <PolicySection title="6. Armazenamento no GitHub">
            <p>
              Quando autorizado, o resultado poderá ser armazenado em um
              repositório privado no GitHub destinado à mentoria. Os registros
              poderão incluir cadastro, perfil inicial, diagnóstico, plano de
              30, 60 e 90 dias, trilha de estudos e histórico de revisões.
            </p>
            <p>
              O armazenamento será realizado em área restrita e separada por
              participante. A gravação poderá ocorrer inicialmente em uma branch
              de trabalho, sujeita à revisão antes de sua integração ao
              histórico principal.
            </p>
          </PolicySection>

          <PolicySection title="7. Fornecedores e compartilhamento">
            <p>
              Dados estritamente necessários poderão ser processados pela
              OpenAI/ChatGPT, pelo GitHub e por provedores de hospedagem ou
              infraestrutura utilizados nas integrações. Cada fornecedor também
              possui seus próprios termos e políticas.
            </p>
            <p>
              Os dados não serão compartilhados publicamente. O acesso poderá
              ser concedido ao participante, ao mentor e a colaboradores
              autorizados que necessitem das informações para a mentoria. Dados
              poderão ser divulgados por obrigação legal ou ordem de autoridade
              competente.
            </p>
          </PolicySection>

          <PolicySection title="8. Crianças e adolescentes">
            <p>
              O SOCRATES pode ser utilizado na orientação de adolescentes. O
              tratamento deve sempre observar seu melhor interesse.
            </p>
            <p>Para participantes menores de 18 anos:</p>
            <ul className={listClassName}>
              <li>a linguagem deve ser apropriada à idade;</li>
              <li>somente dados necessários devem ser coletados;</li>
              <li>o diagnóstico não deve ser usado como rótulo definitivo;</li>
              <li>
                o responsável legal deverá estar ciente e autorizar o
                armazenamento do relatório, conforme o contexto e a legislação
                aplicável;
              </li>
              <li>
                um mentor deverá revisar as recomendações antes do plano
                definitivo.
              </li>
            </ul>
            <p>
              O serviço não deve coletar dados de crianças sem participação e
              autorização adequada de responsável legal.
            </p>
          </PolicySection>

          <PolicySection title="9. Prazo de retenção">
            <p>
              Os registros individualizados poderão ser mantidos durante a
              mentoria e por até{" "}
              <strong>24 meses após a última interação</strong>. Depois disso,
              deverão ser excluídos ou anonimizados, salvo obrigação legal,
              exercício regular de direitos ou outro prazo informado de forma
              transparente.
            </p>
            <p>
              Materiais efetivamente anonimizados poderão ser mantidos para
              avaliação e melhoria da metodologia.
            </p>
          </PolicySection>

          <PolicySection title="10. Segurança">
            <p>São adotadas medidas razoáveis, incluindo:</p>
            <ul className={listClassName}>
              <li>repositório privado e controle de acesso;</li>
              <li>credenciais com privilégio mínimo;</li>
              <li>separação dos registros por participante;</li>
              <li>versionamento e revisão humana;</li>
              <li>restrição das integrações aos arquivos necessários;</li>
              <li>
                revogação de credenciais quando não forem mais necessárias.
              </li>
            </ul>
            <p>
              Nenhum ambiente é totalmente livre de riscos. Em caso de incidente
              relevante, serão adotadas as providências técnicas e legais
              cabíveis.
            </p>
          </PolicySection>

          <PolicySection title="11. Direitos do titular">
            <p>
              Nos termos da LGPD, o participante ou seu responsável legal poderá
              solicitar, conforme aplicável:
            </p>
            <ul className={listClassName}>
              <li>confirmação da existência de tratamento e acesso;</li>
              <li>correção de informações;</li>
              <li>
                anonimização, bloqueio ou exclusão de dados desnecessários ou
                tratados inadequadamente;
              </li>
              <li>informações sobre compartilhamento;</li>
              <li>revisão e esclarecimento sobre resultados automatizados;</li>
              <li>revogação do consentimento, quando aplicável;</li>
              <li>oposição e portabilidade, quando cabíveis.</li>
            </ul>
            <p>
              Para proteger o participante, uma solicitação poderá exigir
              confirmação de identidade.
            </p>
          </PolicySection>

          <PolicySection title="12. Transferência internacional">
            <p>
              Os fornecedores tecnológicos poderão processar ou armazenar dados
              em outros países. Quando isso ocorrer, serão observados os
              requisitos legais e as medidas de segurança aplicáveis.
            </p>
          </PolicySection>

          <PolicySection title="13. Alterações desta Política">
            <p>
              Esta Política poderá ser atualizada em razão de mudanças na
              metodologia, nas integrações ou na legislação. A versão e a data
              da atualização serão indicadas no início da página. Alterações
              relevantes deverão ser comunicadas aos participantes afetados.
            </p>
          </PolicySection>

          <PolicySection title="14. Contato">
            <p>
              Para dúvidas ou solicitações relacionadas a privacidade e proteção
              de dados, entre em contato com {siteConfig.professionalName}:{" "}
              <a
                className={linkClassName}
                href={`mailto:${siteConfig.contacts.email}`}
              >
                {siteConfig.contacts.email}
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="15. Referências">
            <ul className={listClassName}>
              <li>
                <a
                  className={linkClassName}
                  href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lei nº 13.709/2018 — LGPD
                </a>
              </li>
              <li>
                <a
                  className={linkClassName}
                  href="https://www.gov.br/anpd/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Autoridade Nacional de Proteção de Dados
                </a>
              </li>
            </ul>
          </PolicySection>
        </article>
      </Container>
    </SiteLayout>
  );
}
page.tsx


import type { Metadata } from "next";
import type { ReactNode } from "react";
import React from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container, Heading, Text } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Política de Privacidade do SOCRATES",
  description:
    "Política de Privacidade da Entrevista SOCRATES para orientação profissional em tecnologia.",
  path: "/privacidade/socrates",
});

function PolicySection({
  children,
  title,
}: Readonly<{ children: ReactNode; title: string }>) {
  return (
    <section className="space-y-4">
      <Heading level={2} className="text-2xl sm:text-3xl">
        {title}
      </Heading>
      <div className="space-y-4 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

const listClassName = "list-disc space-y-2 pl-6";
const linkClassName =
  "font-semibold text-accent underline-offset-4 hover:text-accent-strong hover:underline";

export default function SocratesPrivacyPage() {
  return (
    <SiteLayout>
      <Container className="max-w-reading py-section">
        <article className="space-y-10">
          <header className="space-y-5 border-b border-border pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              SOCRATES
            </p>
            <Heading level={1}>Política de Privacidade</Heading>
            <Text size="lg">
              Esta Política explica como os dados pessoais são tratados durante
              o uso do SOCRATES — Entrevista de Aderência Profissional em
              Tecnologia.
            </Text>
            <p className="text-sm text-muted">
              <strong>Última atualização:</strong> 7 de agosto de 2026 ·{" "}
              <strong>Versão:</strong> 1.0
            </p>
          </header>

          <div className="rounded-card border border-border bg-surface-subtle p-6">
            <p className="leading-relaxed text-muted">
              O SOCRATES é uma ferramenta de apoio à orientação profissional.
              Ele conduz uma entrevista, organiza evidências, formula hipóteses
              de aderência a áreas de tecnologia e produz um diagnóstico
              preliminar sujeito à revisão humana. Ao iniciar a entrevista, o
              participante declara estar ciente do tratamento descrito nesta
              Política.
            </p>
          </div>

          <PolicySection title="1. Responsável pelo tratamento">
            <p>
              O responsável pelos dados relacionados ao SOCRATES é{" "}
              <strong>{siteConfig.professionalName}</strong>.
            </p>
            <ul className={listClassName}>
              <li>
                Site:{" "}
                <a className={linkClassName} href={siteConfig.url}>
                  {siteConfig.url}
                </a>
              </li>
              <li>
                Privacidade e proteção de dados:{" "}
                <a
                  className={linkClassName}
                  href={`mailto:${siteConfig.contacts.email}`}
                >
                  {siteConfig.contacts.email}
                </a>
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="2. Dados que podem ser coletados">
            <p>Durante a entrevista, podem ser coletados:</p>
            <ul className={listClassName}>
              <li>nome, idade, cidade ou região;</li>
              <li>formação e momento acadêmico ou profissional;</li>
              <li>experiências anteriores e contato com tecnologia;</li>
              <li>interesses, preferências e rejeições profissionais;</li>
              <li>disponibilidade para estudo e prática;</li>
              <li>respostas a perguntas e situações hipotéticas;</li>
              <li>
                exemplos de aprendizagem, colaboração, organização e resolução
                de problemas;
              </li>
              <li>
                hipóteses profissionais, pontuações metodológicas e
                recomendações geradas;
              </li>
              <li>
                data, horário e registros técnicos necessários à execução e à
                gravação dos documentos.
              </li>
            </ul>
            <p>
              O participante não deve informar senhas, documentos, dados
              bancários, informações médicas ou outros dados sensíveis que não
              sejam necessários à orientação.
            </p>
          </PolicySection>

          <PolicySection title="3. Finalidades do tratamento">
            <p>Os dados poderão ser utilizados para:</p>
            <ul className={listClassName}>
              <li>conduzir a Entrevista SOCRATES;</li>
              <li>
                identificar competências, interesses, padrões e pontos a
                validar;
              </li>
              <li>elaborar o Diagnóstico SOCRATES;</li>
              <li>
                propor experimentos profissionais e planos de 30, 60 e 90 dias;
              </li>
              <li>permitir revisão por um mentor humano;</li>
              <li>acompanhar a evolução do participante na mentoria;</li>
              <li>corrigir e melhorar a metodologia;</li>
              <li>proteger a integridade e a segurança do processo;</li>
              <li>atender solicitações e obrigações legais aplicáveis.</li>
            </ul>
            <p>
              Os dados não serão vendidos nem utilizados para publicidade
              direcionada ou decisão automática de contratação.
            </p>
          </PolicySection>

          <PolicySection title="4. Participação e bases do tratamento">
            <p>
              A participação é voluntária. O tratamento será realizado de acordo
              com a finalidade informada, a solicitação do participante, o
              consentimento quando aplicável e outras bases previstas na Lei
              Geral de Proteção de Dados Pessoais — LGPD adequadas ao contexto.
            </p>
            <p>
              O participante pode interromper a entrevista antes da geração e do
              armazenamento do relatório. Quando os dados já estiverem
              armazenados, poderá solicitar correção ou exclusão, observadas
              eventuais obrigações legais de conservação.
            </p>
          </PolicySection>

          <PolicySection title="5. Uso de inteligência artificial">
            <p>
              As respostas são processadas por um GPT personalizado no ChatGPT
              para selecionar perguntas, organizar evidências, comparar
              hipóteses, identificar contradições e gerar um diagnóstico
              preliminar.
            </p>
            <p>
              O resultado é orientativo e pode conter erros ou interpretações
              incompletas. O SOCRATES não realiza diagnóstico psicológico e não
              determina uma profissão definitiva.
            </p>
            <p>
              Nenhuma decisão relevante sobre contratação, exclusão, capacidade
              ou futuro profissional deve ser tomada exclusivamente pelo
              resultado automatizado. O plano deve permanecer pendente até
              revisão de um mentor humano.
            </p>
          </PolicySection>

          <PolicySection title="6. Armazenamento no GitHub">
            <p>
              Quando autorizado, o resultado poderá ser armazenado em um
              repositório privado no GitHub destinado à mentoria. Os registros
              poderão incluir cadastro, perfil inicial, diagnóstico, plano de
              30, 60 e 90 dias, trilha de estudos e histórico de revisões.
            </p>
            <p>
              O armazenamento será realizado em área restrita e separada por
              participante. A gravação poderá ocorrer inicialmente em uma branch
              de trabalho, sujeita à revisão antes de sua integração ao
              histórico principal.
            </p>
          </PolicySection>

          <PolicySection title="7. Fornecedores e compartilhamento">
            <p>
              Dados estritamente necessários poderão ser processados pela
              OpenAI/ChatGPT, pelo GitHub e por provedores de hospedagem ou
              infraestrutura utilizados nas integrações. Cada fornecedor também
              possui seus próprios termos e políticas.
            </p>
            <p>
              Os dados não serão compartilhados publicamente. O acesso poderá
              ser concedido ao participante, ao mentor e a colaboradores
              autorizados que necessitem das informações para a mentoria. Dados
              poderão ser divulgados por obrigação legal ou ordem de autoridade
              competente.
            </p>
          </PolicySection>

          <PolicySection title="8. Crianças e adolescentes">
            <p>
              O SOCRATES pode ser utilizado na orientação de adolescentes. O
              tratamento deve sempre observar seu melhor interesse.
            </p>
            <p>Para participantes menores de 18 anos:</p>
            <ul className={listClassName}>
              <li>a linguagem deve ser apropriada à idade;</li>
              <li>somente dados necessários devem ser coletados;</li>
              <li>o diagnóstico não deve ser usado como rótulo definitivo;</li>
              <li>
                o responsável legal deverá estar ciente e autorizar o
                armazenamento do relatório, conforme o contexto e a legislação
                aplicável;
              </li>
              <li>
                um mentor deverá revisar as recomendações antes do plano
                definitivo.
              </li>
            </ul>
            <p>
              O serviço não deve coletar dados de crianças sem participação e
              autorização adequada de responsável legal.
            </p>
          </PolicySection>

          <PolicySection title="9. Prazo de retenção">
            <p>
              Os registros individualizados poderão ser mantidos durante a
              mentoria e por até{" "}
              <strong>24 meses após a última interação</strong>. Depois disso,
              deverão ser excluídos ou anonimizados, salvo obrigação legal,
              exercício regular de direitos ou outro prazo informado de forma
              transparente.
            </p>
            <p>
              Materiais efetivamente anonimizados poderão ser mantidos para
              avaliação e melhoria da metodologia.
            </p>
          </PolicySection>

          <PolicySection title="10. Segurança">
            <p>São adotadas medidas razoáveis, incluindo:</p>
            <ul className={listClassName}>
              <li>repositório privado e controle de acesso;</li>
              <li>credenciais com privilégio mínimo;</li>
              <li>separação dos registros por participante;</li>
              <li>versionamento e revisão humana;</li>
              <li>restrição das integrações aos arquivos necessários;</li>
              <li>
                revogação de credenciais quando não forem mais necessárias.
              </li>
            </ul>
            <p>
              Nenhum ambiente é totalmente livre de riscos. Em caso de incidente
              relevante, serão adotadas as providências técnicas e legais
              cabíveis.
            </p>
          </PolicySection>

          <PolicySection title="11. Direitos do titular">
            <p>
              Nos termos da LGPD, o participante ou seu responsável legal poderá
              solicitar, conforme aplicável:
            </p>
            <ul className={listClassName}>
              <li>confirmação da existência de tratamento e acesso;</li>
              <li>correção de informações;</li>
              <li>
                anonimização, bloqueio ou exclusão de dados desnecessários ou
                tratados inadequadamente;
              </li>
              <li>informações sobre compartilhamento;</li>
              <li>revisão e esclarecimento sobre resultados automatizados;</li>
              <li>revogação do consentimento, quando aplicável;</li>
              <li>oposição e portabilidade, quando cabíveis.</li>
            </ul>
            <p>
              Para proteger o participante, uma solicitação poderá exigir
              confirmação de identidade.
            </p>
          </PolicySection>

          <PolicySection title="12. Transferência internacional">
            <p>
              Os fornecedores tecnológicos poderão processar ou armazenar dados
              em outros países. Quando isso ocorrer, serão observados os
              requisitos legais e as medidas de segurança aplicáveis.
            </p>
          </PolicySection>

          <PolicySection title="13. Alterações desta Política">
            <p>
              Esta Política poderá ser atualizada em razão de mudanças na
              metodologia, nas integrações ou na legislação. A versão e a data
              da atualização serão indicadas no início da página. Alterações
              relevantes deverão ser comunicadas aos participantes afetados.
            </p>
          </PolicySection>

          <PolicySection title="14. Contato">
            <p>
              Para dúvidas ou solicitações relacionadas a privacidade e proteção
              de dados, entre em contato com {siteConfig.professionalName}:{" "}
              <a
                className={linkClassName}
                href={`mailto:${siteConfig.contacts.email}`}
              >
                {siteConfig.contacts.email}
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="15. Referências">
            <ul className={listClassName}>
              <li>
                <a
                  className={linkClassName}
                  href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lei nº 13.709/2018 — LGPD
                </a>
              </li>
              <li>
                <a
                  className={linkClassName}
                  href="https://www.gov.br/anpd/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Autoridade Nacional de Proteção de Dados
                </a>
              </li>
            </ul>
          </PolicySection>
        </article>
      </Container>
    </SiteLayout>
  );
}
