import Link from "next/link";
import React from "react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="space-y-5 text-sm text-muted">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.professionalName}.
            Portfólio profissional.
          </p>
          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-4 gap-y-2">
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
        </div>
        <nav
          aria-label="Canais profissionais"
          className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-5"
        >
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
      </Container>
    </footer>
  );
}
