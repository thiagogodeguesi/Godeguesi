import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Home from "./page";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("Home", () => {
  it("renders the primary contact CTA before the secondary case-study CTA", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Thiago Godeguesi" }),
    ).toBeInTheDocument();
    const links = screen.getAllByRole("link");
    const primaryIndex = links.findIndex(
      (link) => link.textContent === "Falar com Thiago",
    );
    const secondaryIndex = links.findIndex(
      (link) => link.textContent === "Ver estudos de caso",
    );
    expect(links[primaryIndex]).toHaveAttribute("href", "/contato");
    expect(links[secondaryIndex]).toHaveAttribute("href", "/estudos-de-caso");
    expect(primaryIndex).toBeLessThan(secondaryIndex);
    expect(
      screen.getByRole("heading", { name: "Plataforma SaaS de Gestão" }),
    ).toBeInTheDocument();
  });

  it("explains specialties and groups confirmed technologies by domain", () => {
    render(<Home />);
    expect(screen.getByText(/Organiza dados e fluxos/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Dados, Analytics e Cloud" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Backend e Aplicações" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "DevOps, Qualidade e Governança" }),
    ).toBeInTheDocument();
  });
});
