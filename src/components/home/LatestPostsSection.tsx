import React from "react";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { blogPosts } from "@/content/blog";
import { ActionLink, Container, Heading, Text } from "@/components/ui";

export function LatestPostsSection() {
  const posts = [...blogPosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="blog-titulo"
      className="border-y border-border bg-surface-subtle py-section"
    >
      <Container className="space-y-10">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="min-w-0 max-w-2xl space-y-4">
            <p className="rule-label">Registro público</p>
            <Heading id="blog-titulo">Do blog</Heading>
            <Text>
              Aprendizados, decisões e experimentos documentados enquanto
              acontecem — dados, IA aplicada, produto e construção.
            </Text>
          </div>
          <ActionLink href="/blog" variant="quiet">
            Ver todos os textos
          </ActionLink>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
