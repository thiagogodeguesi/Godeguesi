import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { MinimalHome } from "./MinimalHome";

describe("MinimalHome", () => {
  it("renders the initial portfolio foundation message", () => {
    render(<MinimalHome />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Godeguesi" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Transformando problemas complexos/i),
    ).toBeInTheDocument();
  });
});
