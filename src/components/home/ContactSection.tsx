import React from "react";
import { siteConfig } from "@/content/site";
import { ActionLink, Container, Heading, Text } from "@/components/ui";

export function ContactSection() {
  return (
    <section
      aria-labelledby="contato-titulo"
      className="tech-grid border-t border-border py-section"
    >
      <Container className="max-w-reading space-y-6">
        <p className="rule-label">Próximo passo</p>
        <Heading id="contato-titulo">
          Tem um problema complexo em dados, automação ou produto?
        </Heading>
        <Text size="lg">
          Se faz sentido trocar uma ideia sobre arquitetura, modernização,
          automação ou direção de carreira em tecnologia, é só chamar. Respondo
          direto, sem intermediários.
        </Text>
        <div className="flex flex-wrap gap-3">
          <ActionLink href="/contato">Conversar com Thiago</ActionLink>
          <ActionLink
            external
            href={siteConfig.contacts.linkedin}
            variant="secondary"
          >
            LinkedIn
          </ActionLink>
        </div>
      </Container>
    </section>
  );
}
