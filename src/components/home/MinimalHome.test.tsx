import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("Home", () => {
  it("renders the professional portfolio message", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Thiago Godeguesi" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Projeto arquiteturas de dados/i),
    ).toBeInTheDocument();
  });
});
