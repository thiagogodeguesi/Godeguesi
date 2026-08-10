import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { blogPosts, blogPostBySlug, formatBlogDate } from "@/content/blog";
import { Badge, Container, Heading, Text } from "@/components/ui";
import { createArticleMetadata, siteUrl } from "@/lib/metadata";
import { siteConfig } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: Props): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = blogPostBySlug[slug];
    return post
      ? createArticleMetadata({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          publishedTime: post.publishedAt,
          authors: [post.author],
          image: { url: post.cover.src, alt: post.cover.alt },
        })
      : {};
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPostBySlug[slug];
  if (!post) notFound();

  const canonical = new URL(`/blog/${post.slug}`, siteUrl).toString();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    inLanguage: "pt-BR",
    articleSection: post.category,
    image: new URL(post.cover.src, siteUrl).toString(),
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    url: canonical,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Person", name: siteConfig.professionalName },
  };

  return (
    <SiteLayout>
      <Container className="max-w-reading py-section">
        <Link
          className="mb-8 inline-flex text-sm font-semibold text-accent hover:text-accent-strong"
          href="/blog"
        >
          ← Todos os artigos
        </Link>
        <article>
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{post.category}</Badge>
              <Text as="span" size="sm">
                <time dateTime={post.publishedAt}>
                  {formatBlogDate(post.publishedAt)}
                </time>
              </Text>
              <Text as="span" size="sm">
                {post.author}
              </Text>
            </div>
            <Heading level={1}>{post.title}</Heading>
            <Text size="lg">{post.description}</Text>
          </header>
          <figure className="mt-8">
            <Image
              alt={post.cover.alt}
              className="h-auto w-full rounded-card border border-border"
              height={post.cover.height}
              priority
              sizes="(max-width: 768px) 100vw, 48rem"
              src={post.cover.src}
              width={post.cover.width}
            />
          </figure>
          <BlogPostBody blocks={post.body} />
        </article>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Container>
    </SiteLayout>
  );
}
