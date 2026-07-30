import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteConfig } from "@/content/site";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://godeguesi.com.br";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
        {googleAnalyticsId ? (
          <GoogleAnalytics gaId={googleAnalyticsId} />
        ) : null}
      </body>
    </html>
  );
}