import React from "react";
import type { BlogBlock } from "@/content/blog";
import { Heading, Text } from "@/components/ui";

export function BlogPostBody({ blocks }: { blocks: readonly BlogBlock[] }) {
  return (
    <div className="mt-10 space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <Heading className="pt-4" key={`${block.type}-${index}`} level={2}>
              {block.text}
            </Heading>
          );
        }
        if (block.type === "list") {
          return (
            <ul
              className="ml-5 list-disc space-y-2"
              key={`${block.type}-${index}`}
            >
              {block.items.map((item) => (
                <li className="leading-relaxed text-muted" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "link") {
          return (
            <a
              className="inline-flex w-fit font-semibold text-accent underline-offset-4 hover:underline"
              href={block.href}
              key={`${block.type}-${index}`}
              rel="noreferrer"
              target="_blank"
            >
              {block.text}
            </a>
          );
        }
        return (
          <Text key={`${block.type}-${index}`} size="lg">
            {block.text}
          </Text>
        );
      })}
    </div>
  );
}
