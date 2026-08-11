import React from "react";
import { pillars } from "@/content/home";
import { Container, Heading, Text } from "@/components/ui";

export function PillarsSection() {
  return (
    <section aria-labelledby="conexoes-titulo" className="py-section">
      <Container className="space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="rule-label">O que eu conecto</p>
          <Heading id="conexoes-titulo">
            Quatro frentes, um só ecossistema
          </Heading>
          <Text>
            Dados, produto, automação e pessoas não são projetos separados: são
            partes da mesma forma de resolver problemas. Cada frente alimenta a
            outra.
          </Text>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2">
          {pillars.map((pillar) => (
            <li
              className="flex flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-subtle sm:p-8"
              key={pillar.title}
            >
              <Heading level={3} className="text-xl">
                {pillar.title}
              </Heading>
              <Text size="sm">{pillar.description}</Text>
              <ul className="mt-auto space-y-2 text-sm text-muted">
                {pillar.practices.map((practice) => (
                  <li className="flex gap-3" key={practice}>
                    <span aria-hidden="true" className="text-highlight">
                      —
                    </span>
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
