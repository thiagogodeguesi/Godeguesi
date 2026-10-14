import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TesteFitPage, { metadata } from "./page";

describe("Godeguesi Fit /testefit", () => {
  it("apresenta landing page com cinco programas de fitness", () => {
    render(<TesteFitPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /seu ritmo.*suas regras.*sua evolução/i }),
    ).toBeInTheDocument();
    for (const name of [
      "Treino em casa",
      "Força & definição",
      "Nutrição & rotina",
      "Mobilidade & equilíbrio",
      "Cardio & resistência",
    ]) {
      expect(screen.getByRole("heading", { level: 3, name: new RegExp(name, "i") })).toBeInTheDocument();
    }
    expect(screen.getAllByText("LINK EM BREVE")).toHaveLength(5);
  });

  it("não exibe ofertas com href fictício", () => {
    render(<TesteFitPage />);
    expect(screen.queryByRole("link", { name: /link em breve/i })).not.toBeInTheDocument();
    expect(screen.getByText(/alguns links poderão ser de afiliado/i)).toBeInTheDocument();
  });

  it("impede indexação de rota experimental", () => {
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });
});
