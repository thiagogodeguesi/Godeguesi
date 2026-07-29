import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Home from "./page";

vi.mock("next/link", () => ({ default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a> }));

describe("Home", () => {
  it("renders the main navigation and case-study listing", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1, name: "Thiago Godeguesi" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Estudos de caso" })[0]).toHaveAttribute("href", "/estudos-de-caso");
    expect(screen.getByRole("heading", { name: "Plataforma SaaS de Gestão" })).toBeInTheDocument();
  });
});
