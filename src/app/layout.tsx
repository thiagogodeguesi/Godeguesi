import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://godeguesi.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Godeguesi | Engenharia de Dados, Automação e Software",
  description:
    "Portfólio profissional de Thiago Godeguesi, com foco em Engenharia de Dados, automação, arquitetura e software.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
