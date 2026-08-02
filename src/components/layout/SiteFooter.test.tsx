import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SiteFooter } from "./SiteFooter";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("SiteFooter", () => {
  it("offers direct and safe professional contact links", () => {
    render(<SiteFooter />);
    expect(
      screen.getByRole("link", { name: /Enviar e-mail/i }),
    ).toHaveAttribute("href", "mailto:thiagogodeguesi@gmail.com");
    for (const name of [/LinkedIn de Thiago/i, /GitHub de Thiago/i]) {
      const link = screen.getByRole("link", { name });
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
