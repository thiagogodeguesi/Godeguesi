import type { Metadata } from "next";
import React from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container, Heading, Text } from "@/components/ui";
export const metadata: Metadata = { title: "Contato", description: "Canais públicos de contato profissional do Godeguesi." };
export default function ContactPage() { return <SiteLayout><Container className="max-w-reading py-section"><article className="space-y-6"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Contato</p><Heading level={1}>Canais de contato em preparação</Heading><Text size="lg">Os canais profissionais públicos serão disponibilizados aqui após validação. Esta versão não apresenta dados de contato fictícios.</Text><section className="rounded-card border border-border bg-surface-subtle p-6"><Heading level={2} className="text-2xl">Disponibilidade</Heading><Text className="mt-3">Para preservar a precisão das informações públicas, os links de contato permanecem centralizados na configuração do site e aguardam confirmação antes da publicação.</Text></section></article></Container></SiteLayout>; }
