import React from "react";
import { technologyPurposes } from "@/content/home";
import { Badge, Container, Heading, Text } from "@/components/ui";

export function TechnologiesSection() {
  return (
    <section aria-labelledby="tecnologias-titulo" className="py-section">
      <Container className="space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="rule-label">Ferramentas com propósito</p>
          <Heading id="tecnologias-titulo">
            Tecnologia organizada por finalidade
          </Heading>
          <Text>
            Não uma parede de logos: o que cada ferramenta resolve dentro das
            soluções que construo.
          </Text>
        </div>
        <dl className="grid gap-8 sm:grid-cols-2">
          {technologyPurposes.map((group) => (
            <div
              className="min-w-0 space-y-3 border-t border-border pt-6"
              key={group.purpose}
            >
              <dt className="space-y-1">
                <Heading level={3} className="text-lg">
                  {group.purpose}
                </Heading>
                <Text size="sm">{group.note}</Text>
              </dt>
              <dd className="flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
