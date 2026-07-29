import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/case-studies/CaseStudyDetail";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { caseStudies, caseStudyBySlug } from "@/content/case-studies";
import { publicText } from "@/lib/editorial";
import { Container } from "@/components/ui";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: Props): Promise<Metadata> { return params.then(({ slug }) => { const study = caseStudyBySlug[slug as keyof typeof caseStudyBySlug]; return study ? { title: study.title, description: publicText(study.summary) } : {}; }); }
export default async function CaseStudyPage({ params }: Props) { const { slug } = await params; const study = caseStudyBySlug[slug as keyof typeof caseStudyBySlug]; if (!study) notFound(); return <SiteLayout><Container className="max-w-reading py-section"><Link className="mb-8 inline-flex text-sm font-semibold text-accent hover:text-accent-strong" href="/estudos-de-caso">← Todos os estudos</Link><CaseStudyDetail caseStudy={study} /></Container></SiteLayout>; }
