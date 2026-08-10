import type { Metadata } from "next";
import React from "react";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { blogPosts } from "@/content/blog";
import { Container, Heading, Text } from "@/components/ui";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description:
    "Registros sobre Inteligência Artificial, Marketing, Dados e Desenvolvimento, com foco em método, decisões e prática.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <SiteLayout>
      <Container className="py-section">
        <header className="max-w-reading space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Insights
          </p>
          <Heading level={1}>Blog</Heading>
          <Text size="lg">
            Uma série de registros sobre Inteligência Artificial, Marketing,
            Dados e Desenvolvimento: estudo transformado em prática.
          </Text>
        </header>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </SiteLayout>
  );
}
