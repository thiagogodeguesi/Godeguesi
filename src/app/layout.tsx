import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity";
import { siteConfig } from "@/content/site";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display-family",
});

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
  icons: {
    icon: "/icon.svg",
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
    <html className={`${bodyFont.variable} ${displayFont.variable}`} lang="pt-BR">
      <body>
        {children}
        <MicrosoftClarity />
        <GoogleAnalytics gaId="G-RR6SM5ZP4T" />
      </body>
    </html>
  );
}
