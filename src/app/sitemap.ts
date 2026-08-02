import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { siteUrl } from "@/lib/metadata";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/sobre",
    "/estudos-de-caso",
    "/contato",
    ...caseStudies.map((study) => `/estudos-de-caso/${study.slug}`),
  ];
  return paths.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
