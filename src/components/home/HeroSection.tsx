import Image from "next/image";
import React from "react";
import { siteConfig } from "@/content/site";
import { ActionLink, Container, Heading, Text } from "@/components/ui";

const signals = [
  { label: "Atuação", value: "Dados, cloud, software e IA aplicada" },
  { label: "Prática", value: "Constrói, testa, documenta e opera" },
  { label: "Foco atual", value: "Produtos e plataformas em evolução" },
] as const;

export function HeroSection() {
  return (
    <section className="tech-grid border-b border-border py-section">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="min-w-0 space-y-7">
          <p className="rule-label">{siteConfig.role}</p>
          <Heading level={1} className="max-w-3xl">
            {siteConfig.professionalName}
          </Heading>
          <Text size="lg" className="max-w-2xl text-foreground">
            {siteConfig.tagline}
          </Text>
          <Text className="max-w-2xl">
            Trabalho na fronteira entre engenharia de dados, cloud, automação e
            desenvolvimento: entendo o problema, desenho a solução e a levo até
            o ar — com qualidade, custo e manutenção como parte da decisão.
          </Text>
          <div className="flex flex-wrap gap-3">
            <ActionLink href="/estudos-de-caso">
              Ver projetos e estudos de caso
            </ActionLink>
            <ActionLink href="/contato" variant="secondary">
              Conversar com Thiago
            </ActionLink>
          </div>
          <dl className="grid gap-x-8 gap-y-4 border-t border-border pt-6 sm:grid-cols-3">
            {signals.map((signal) => (
              <div className="min-w-0 space-y-1" key={signal.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-highlight">
                  {signal.label}
                </dt>
                <dd className="text-sm leading-relaxed text-muted">
                  {signal.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-card border border-border bg-surface shadow-card">
            <Image
              alt="Retrato de Thiago Godeguesi."
              className="h-auto w-full object-cover"
              height={1536}
              priority
              sizes="(min-width: 1024px) 38vw, 100vw"
              src="/visual/thiago-godeguesi-portrait.jpg"
              width={1024}
            />
          </div>
          <p className="mt-4 border-l-2 border-highlight pl-4 text-sm leading-relaxed text-muted">
            Uma trajetória em construção: engenharia de dados como base,
            produto e infraestrutura como prática, IA aplicada como
            ferramenta.
          </p>
        </div>
      </Container>
    </section>
  );
}
