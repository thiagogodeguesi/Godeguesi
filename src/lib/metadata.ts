import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url,
);

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: siteConfig.name,
      title,
      description,
      url: path,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
