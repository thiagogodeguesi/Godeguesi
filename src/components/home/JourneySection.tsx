import React from "react";
import { journey } from "@/content/home";
import { Container, Heading, Text } from "@/components/ui";

export function JourneySection() {
  return (
    <section aria-labelledby="trajetoria-titulo" className="py-section">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="min-w-0 space-y-4">
          <p className="rule-label">Construindo em público</p>
          <Heading id="trajetoria-titulo">Uma trajetória em construção</Heading>
          <Text>
            Não é um currículo fechado. É a evolução de executor técnico para
            alguém que constrói produtos, infraestrutura, processos e apoia
            pessoas — registrada publicamente no blog.
          </Text>
        </div>
        <ol className="relative space-y-8 border-l border-border pl-6">
          {journey.map((stage) => (
            <li className="relative space-y-2" key={stage.title}>
              <span
                aria-hidden="true"
                className="absolute -left-[1.9rem] top-2 size-2 rounded-pill bg-highlight"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {stage.period}
              </p>
              <Heading level={3} className="text-xl">
                {stage.title}
              </Heading>
              <Text size="sm">{stage.description}</Text>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
