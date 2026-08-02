import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity";
import { siteConfig } from "@/content/site";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Thiago Godeguesi | Engenharia de Dados, Automação e Software",
    template: "%s | Godeguesi",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    title: "Thiago Godeguesi | Engenharia de Dados, Automação e Software",
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Thiago Godeguesi | Engenharia de Dados, Automação e Software",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <MicrosoftClarity />
        <GoogleAnalytics gaId="G-RR6SM5ZP4T" />
      </body>
    </html>
  );
}
