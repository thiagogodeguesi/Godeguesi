import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { caseStudies } from "@/content/case-studies";
import { professionalProfile, siteConfig } from "@/content/site";
import { Badge, Card, Container, Heading, Text } from "@/components/ui";

const technologyGroups = [
  {
    title: "Dados, Analytics e Cloud",
    technologies: [
      "BigQuery",
      "Dataform",
      "Databricks",
      "Azure Data Factory",
      "PostgreSQL",
    ],
  },
  {
    title: "Backend e Aplicações",
    technologies: ["FastAPI", "Next.js", "OpenAPI"],
  },
  {
    title: "DevOps, Qualidade e Governança",
    technologies: ["Docker", "CI/CD"],
  },
] as const;

export default function Home() {
  const confirmedTechnologies = new Set(
    caseStudies.flatMap((study) =>
      study.technologies.status === "confirmed" ? study.technologies.items : [],
    ),
  );

  return (
    <SiteLayout>
      <section className="border-b border-border bg-surface-subtle py-section">
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {siteConfig.role}
            </p>
            <Heading level={1}>{siteConfig.professionalName}</Heading>
            <Text size="lg" className="max-w-2xl">
              {professionalProfile.statement}
            </Text>
            <div className="flex flex-wrap gap-3">
              <Link
                className="rounded-control bg-accent px-5 py-3 font-semibold text-background hover:bg-accent-strong"
                href="/contato"
              >
                Falar com Thiago
              </Link>
              <Link
                className="rounded-control border border-border-strong px-5 py-3 font-semibold hover:bg-surface"
                href="/estudos-de-caso"
              >
                Ver estudos de caso
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-card border border-border bg-[#071321] shadow-card">
            <Image
              alt="Ilustração abstrata de fluxos de dados conectando serviços em uma arquitetura modular."
              className="h-auto w-full"
              height={941}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              src="/visual/data-engineering-hero.jpg"
              width={1672}
            />
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <Heading>Especialidades</Heading>
            <Text>
              Atuação orientada por problemas reais, qualidade e evolução
              contínua.
            </Text>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {professionalProfile.specialties.map((specialty) => (
              <Card className="space-y-2" key={specialty.title}>
                <Heading level={3} className="text-xl">
                  {specialty.title}
                </Heading>
                <Text size="sm">{specialty.description}</Text>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface-subtle py-section">
        <Container className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-3">
              <Heading>Estudos de caso</Heading>
              <Text>
                Contextos, decisões e aprendizados apresentados com
                responsabilidade sobre confidencialidade.
              </Text>
            </div>
            <Link
              className="font-semibold text-accent hover:text-accent-strong"
              href="/estudos-de-caso"
            >
              Ver todos os estudos →
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard caseStudy={study} key={study.slug} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="space-y-3">
              <Heading>Tecnologias em contexto</Heading>
              <Text>
                Ferramentas presentes nos estudos publicáveis, organizadas
                conforme seu papel nas soluções.
              </Text>
            </div>
            {technologyGroups.map((group) => {
              const technologies = group.technologies.filter((technology) =>
                confirmedTechnologies.has(technology),
              );
              return technologies.length > 0 ? (
                <section className="space-y-2" key={group.title}>
                  <Heading level={3} className="text-lg">
                    {group.title}
                  </Heading>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                </section>
              ) : null;
            })}
          </div>
          <div className="space-y-4">
            <Heading>Forma de trabalho</Heading>
            <ul className="grid gap-3 text-muted sm:grid-cols-2">
              {professionalProfile.workPrinciples.map((item) => (
                <li
                  className="rounded-card border border-border bg-surface p-4"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-section">
        <Container className="max-w-reading space-y-5 text-center">
          <Heading>Vamos conversar?</Heading>
          <Text>
            Para oportunidades, parcerias ou uma troca técnica sobre dados,
            automação e software.
          </Text>
          <Link
            className="inline-flex rounded-control bg-accent px-5 py-3 font-semibold text-background hover:bg-accent-strong"
            href="/contato"
          >
            Falar com Thiago
          </Link>
        </Container>
      </section>
    </SiteLayout>
  );
}
