import type { Metadata } from "next";
import React from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container, Heading, Text } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
export const metadata: Metadata = createPageMetadata({
  title: "Contato",
  description: `Fale com ${siteConfig.professionalName} por e-mail, LinkedIn ou GitHub.`,
  path: "/contato",
});
export default function ContactPage() {
  return (
    <SiteLayout>
      <Container className="max-w-reading py-section">
        <article className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Contato
          </p>
          <Heading level={1}>Falar com Thiago</Heading>
          <Text size="lg">
            Escolha o canal mais adequado para oportunidades, parcerias ou
            conversas sobre dados, automação e software.
          </Text>
          <section
            aria-label="Canais de contato"
            className="rounded-card border border-border bg-surface-subtle p-6"
          >
            <ul className="space-y-3">
              <li>
                <a
                  aria-label={`Enviar e-mail para ${siteConfig.professionalName}`}
                  className="font-semibold text-accent hover:text-accent-strong"
                  href={`mailto:${siteConfig.contacts.email}`}
                >
                  {siteConfig.contacts.email}
                </a>
              </li>
              <li>
                <a
                  aria-label={`Abrir LinkedIn de ${siteConfig.professionalName} em nova aba`}
                  className="font-semibold text-accent hover:text-accent-strong"
                  href={siteConfig.contacts.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  aria-label={`Abrir GitHub de ${siteConfig.professionalName} em nova aba`}
                  className="font-semibold text-accent hover:text-accent-strong"
                  href={siteConfig.contacts.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </article>
      </Container>
    </SiteLayout>
  );
}
