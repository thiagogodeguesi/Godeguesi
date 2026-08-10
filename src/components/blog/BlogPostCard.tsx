import Link from "next/link";
import React from "react";
import { formatBlogDate, type BlogPost } from "@/content/blog";
import { Badge, Card, Heading, Text } from "@/components/ui";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{post.category}</Badge>
        <Text as="span" size="sm">
          <time dateTime={post.publishedAt}>
            {formatBlogDate(post.publishedAt)}
          </time>
        </Text>
      </div>
      <div className="space-y-3">
        <Heading level={3}>{post.title}</Heading>
        <Text>{post.description}</Text>
      </div>
      <Link
        className="mt-auto inline-flex w-fit rounded-control border border-accent px-4 py-2 text-sm font-semibold text-accent hover:bg-accent hover:text-background"
        href={`/blog/${post.slug}`}
      >
        Ler artigo<span className="sr-only">: {post.title}</span>
      </Link>
    </Card>
  );
}
