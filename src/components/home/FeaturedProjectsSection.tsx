import React from "react";
import { featuredProjects } from "@/content/home";
import { ActionLink, Badge, Container, Heading, Text } from "@/components/ui";

export function FeaturedProjectsSection() {
  return (
    <section
      aria-labelledby="projetos-titulo"
      className="border-y border-border bg-surface-subtle py-section"
    >
      <Container className="space-y-10">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="min-w-0 max-w-2xl space-y-4">
            <p className="rule-label">Construção real</p>
            <Heading id="projetos-titulo">Projetos em destaque</Heading>
            <Text>
              O que já está construído ou em construção, descrito pelo problema
              e pelas decisões — sem métricas ou resultados que não possam ser
              comprovados.
            </Text>
          </div>
          <ActionLink href="/estudos-de-caso" variant="quiet">
            Ver todos os estudos de caso
          </ActionLink>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              className="flex h-full flex-col gap-5 rounded-card border border-border bg-surface p-6 shadow-card sm:p-8"
              key={project.name}
            >
              <div className="space-y-2">
                <Heading level={3} className="text-2xl">
                  {project.name}
                </Heading>
                <p className="text-sm font-semibold text-highlight">
                  {project.role}
                </p>
              </div>
              <Text size="sm">{project.description}</Text>
              <ul className="space-y-2 text-sm text-muted">
                {project.highlights.map((highlight) => (
                  <li className="flex gap-3" key={highlight}>
                    <span aria-hidden="true" className="text-accent">
                      ·
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                {project.caseStudySlug ? (
                  <ActionLink
                    href={`/estudos-de-caso/${project.caseStudySlug}`}
                    variant="secondary"
                  >
                    Estudo de caso
                    <span className="sr-only">: {project.name}</span>
                  </ActionLink>
                ) : null}
                {project.href ? (
                  <ActionLink external href={project.href} variant="quiet">
                    {project.hrefLabel ?? "Abrir projeto"}
                  </ActionLink>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
