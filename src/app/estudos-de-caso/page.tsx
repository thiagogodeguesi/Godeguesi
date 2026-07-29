import type { Metadata } from "next";
import React from "react";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { caseStudies } from "@/content/case-studies";
import { Container, Heading, Text } from "@/components/ui";
export const metadata: Metadata = { title: "Estudos de caso", description: "Estudos de caso sobre dados, automação, software e arquitetura." };
export default function CaseStudiesPage() { return <SiteLayout><Container className="py-section"><header className="max-w-reading space-y-4"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Portfólio</p><Heading level={1}>Estudos de caso</Heading><Text size="lg">Projetos e experiências apresentados a partir de decisões, responsabilidades, validações e aprendizados que podem ser publicados.</Text></header><div className="mt-10 grid gap-5 lg:grid-cols-3">{caseStudies.map((study) => <CaseStudyCard caseStudy={study} key={study.slug} />)}</div></Container></SiteLayout>; }
