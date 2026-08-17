import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BlogPostCard } from "./BlogPostCard";
import { blogPosts } from "@/content/blog";

describe("BlogPostCard", () => {
  it("links to the article route and shows category and date", () => {
    render(<BlogPostCard post={blogPosts[0]} />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/blog/documentacao-infraestrutura-de-continuidade",
    );
    expect(screen.getByText("Dados e Processos")).toBeInTheDocument();
    expect(screen.getByText("17/08/2026")).toBeInTheDocument();
  });
});
