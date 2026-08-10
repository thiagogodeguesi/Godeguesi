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

type ArticleMetadata = PageMetadata & {
  publishedTime: string;
  authors: readonly string[];
  image: { url: string; alt: string };
};

export function createArticleMetadata({
  title,
  description,
  path,
  publishedTime,
  authors,
  image,
}: ArticleMetadata): Metadata {
  const images = [{ url: image.url, alt: image.alt }];
  return {
    title,
    description,
    authors: authors.map((name) => ({ name })),
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      siteName: siteConfig.name,
      title,
      description,
      url: path,
      publishedTime,
      authors: [...authors],
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
