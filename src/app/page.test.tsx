import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";
import { siteConfig } from "@/content/site";

describe("Home", () => {
  it("apresenta a identidade e a mensagem central no topo", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: siteConfig.professionalName }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(siteConfig.tagline).length).toBeGreaterThan(0);
  });

  it("prioriza o CTA de projetos e mantém o CTA de conversa", () => {
    render(<Home />);
    const projetos = screen.getAllByRole("link", {
      name: /Ver projetos e estudos de caso/i,
    })[0];
    const conversa = screen.getAllByRole("link", {
      name: /Conversar com Thiago/i,
    })[0];
    expect(projetos).toHaveAttribute("href", "/estudos-de-caso");
    expect(conversa).toHaveAttribute("href", "/contato");
  });

  it("conecta as quatro frentes de atuação", () => {
    render(<Home />);
    for (const pillar of [
      "Dados & Cloud",
      "Software & Produtos",
      "Automação & IA",
      "Direção & Mentoria",
    ]) {
      expect(screen.getByRole("heading", { name: pillar })).toBeInTheDocument();
    }
  });

  it("destaca projetos reais, trajetória, blog e tecnologias por finalidade", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "Olimpo" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Revive" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Mentoria" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Uma trajetória em construção/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Do blog" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Tecnologia organizada por finalidade/i,
      }),
    ).toBeInTheDocument();
  });
});
