import type { Metadata } from "next";
import React from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { professionalProfile, siteConfig } from "@/content/site";
import { Card, Container, Heading, Text } from "@/components/ui";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre Thiago Godeguesi",
  description: `Conheça a atuação e a abordagem profissional de ${siteConfig.professionalName} em dados, automação e software.`,
  path: "/sobre",
});
export default function AboutPage() {
  return (
    <SiteLayout>
      <Container className="max-w-reading py-section">
        <article className="space-y-10">
          <header className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Sobre
            </p>
            <Heading level={1}>
              Dados, automação e produto como partes da mesma evolução.
            </Heading>
            <Text size="lg">{professionalProfile.introduction}</Text>
          </header>
          <section className="space-y-4">
            <Heading>Trajetória e perfil técnico</Heading>
            <Text>
              Minha trajetória é construída pela resolução de problemas,
              modernização de processos, experimentação e desenvolvimento de
              soluções. A prática reúne engenharia de dados, software e
              infraestrutura para criar caminhos que possam ser entendidos,
              validados e mantidos.
            </Text>
          </section>
          <section className="space-y-4">
            <Heading>Forma de pensar soluções</Heading>
            <ul className="space-y-3">
              {professionalProfile.approach.map((item) => (
                <li
                  className="rounded-card border border-border bg-surface p-5 text-muted"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="space-y-4">
            <Heading>Áreas de atuação</Heading>
            <div className="grid gap-4 sm:grid-cols-2">
              {professionalProfile.specialties.map((item) => (
                <Card key={item.title} className="space-y-2">
                  <Heading level={3} className="text-xl">
                    {item.title}
                  </Heading>
                  <Text size="sm">{item.description}</Text>
                </Card>
              ))}
            </div>
          </section>
          <section className="space-y-4">
            <Heading>Valores profissionais</Heading>
            <Text>
              Clareza sobre limites, responsabilidade sobre dados, documentação
              de decisões e colaboração entre produto e tecnologia orientam a
              forma como desenvolvo e evoluo soluções.
            </Text>
          </section>
        </article>
      </Container>
    </SiteLayout>
  );
}
