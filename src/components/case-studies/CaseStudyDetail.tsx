import type { CaseStudy, ContentField, ContentList } from "@/content/case-studies";
import React from "react";
import { publicItems, publicText } from "@/lib/editorial";
import { Badge, Heading, Text } from "@/components/ui";

function TextBlock({ title, field }: { title: string; field: ContentField }) { const text = publicText(field); return text ? <section className="space-y-3"><Heading level={2}>{title}</Heading><Text>{text}</Text></section> : null; }
function ListBlock({ title, field }: { title: string; field: ContentList }) { const items = publicItems(field); return items.length ? <section className="space-y-3"><Heading level={2}>{title}</Heading><ul className="list-disc space-y-2 pl-5 text-muted">{items.map((item) => <li key={item}>{item}</li>)}</ul></section> : null; }

export function CaseStudyDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  const technologies = publicItems(caseStudy.technologies);
  return <article className="space-y-10"><header className="space-y-4 border-b border-border pb-10"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Estudo de caso</p><Heading level={1}>{caseStudy.title}</Heading><Text size="lg">{publicText(caseStudy.summary)}</Text>{technologies.length > 0 && <div className="flex flex-wrap gap-2">{technologies.map((item) => <Badge key={item}>{item}</Badge>)}</div>}</header><TextBlock title="Contexto" field={caseStudy.context} /><TextBlock title="Problema" field={caseStudy.problem} /><ListBlock title="Responsabilidades" field={caseStudy.responsibilities} /><TextBlock title="Solução" field={caseStudy.solution} /><TextBlock title="Arquitetura técnica" field={caseStudy.technicalArchitecture} /><ListBlock title="Decisões principais" field={caseStudy.keyDecisions} /><ListBlock title="Desafios" field={caseStudy.challenges} /><ListBlock title="Qualidade e validação" field={caseStudy.qualityValidation} /><ListBlock title="Resultados publicáveis" field={caseStudy.publishableResults} /><ListBlock title="Aprendizados" field={caseStudy.learnings} /><ListBlock title="Próximos passos" field={caseStudy.nextSteps} />{caseStudy.confidentialityNotes && <aside className="rounded-card border border-border bg-surface-subtle p-5"><Heading level={2} className="text-xl">Confidencialidade</Heading><Text className="mt-2">{publicText(caseStudy.confidentialityNotes)}</Text></aside>}</article>;
}
