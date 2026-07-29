import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://godeguesi.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Godeguesi | Engenharia de Dados, Automação e Software", template: "%s | Godeguesi" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", siteName: siteConfig.name, title: "Godeguesi | Engenharia de Dados, Automação e Software", description: siteConfig.description },
  twitter: { card: "summary", title: "Godeguesi | Engenharia de Dados, Automação e Software", description: siteConfig.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
