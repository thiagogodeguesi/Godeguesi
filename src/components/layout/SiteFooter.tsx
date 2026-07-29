import Link from "next/link";
import React from "react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col gap-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Portfólio profissional.</p>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-4 gap-y-2">
          {siteConfig.navigation.map((item) => <Link className="hover:text-foreground" href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
      </Container>
    </footer>
  );
}
