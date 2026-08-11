import Link from "next/link";
import React from "react";
import { siteConfig } from "@/content/site";
import { Container, Heading, Text } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-subtle py-12">
      <Container className="space-y-10 text-sm text-muted">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_auto_auto]">
          <div className="min-w-0 max-w-md space-y-3">
            <Heading level={2} className="text-lg">
              {siteConfig.professionalName}
            </Heading>
            <Text size="sm">{siteConfig.tagline}</Text>
          </div>
          <nav aria-label="Rodapé" className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-highlight">
              Navegação
            </p>
            {siteConfig.navigation.map((item) => (
              <Link
                className="hover:text-foreground"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Canais profissionais" className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-highlight">
              Contato
            </p>
            <a
              aria-label={`Enviar e-mail para ${siteConfig.professionalName}`}
              className="hover:text-foreground"
              href={`mailto:${siteConfig.contacts.email}`}
            >
              E-mail
            </a>
            <a
              aria-label={`Abrir LinkedIn de ${siteConfig.professionalName} em nova aba`}
              className="hover:text-foreground"
              href={siteConfig.contacts.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              aria-label={`Abrir GitHub de ${siteConfig.professionalName} em nova aba`}
              className="hover:text-foreground"
              href={siteConfig.contacts.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </nav>
        </div>
        <p className="border-t border-border pt-6">
          © {new Date().getFullYear()} {siteConfig.professionalName}. Portfólio
          profissional.
        </p>
      </Container>
    </footer>
  );
}
