import Link from "next/link";
import React from "react";
import type { CaseStudy } from "@/content/case-studies";
import { publicItems, publicText } from "@/lib/editorial";
import { Badge, Card, Heading, Text } from "@/components/ui";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const technologies = publicItems(caseStudy.technologies);
  const stage = publicText(caseStudy.stage);
  return <Card className="flex h-full flex-col gap-5"><div className="space-y-3"><Heading level={3}>{caseStudy.title}</Heading><Text>{publicText(caseStudy.summary)}</Text></div>{technologies.length > 0 && <div className="flex flex-wrap gap-2">{technologies.map((technology) => <Badge key={technology}>{technology}</Badge>)}</div>}{stage && <Text size="sm">{stage}</Text>}<Link className="mt-auto inline-flex w-fit rounded-control border border-accent px-4 py-2 text-sm font-semibold text-accent hover:bg-accent hover:text-background" href={`/estudos-de-caso/${caseStudy.slug}`}>Ver estudo de caso<span className="sr-only">: {caseStudy.title}</span></Link></Card>;
}
