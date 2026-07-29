import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
export const dynamic = "force-static";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
export default function sitemap(): MetadataRoute.Sitemap { if (!baseUrl) return []; const paths = ["", "/sobre", "/estudos-de-caso", "/contato", ...caseStudies.map((study) => `/estudos-de-caso/${study.slug}`)]; return paths.map((path) => ({ url: new URL(path, baseUrl).toString() })); }
