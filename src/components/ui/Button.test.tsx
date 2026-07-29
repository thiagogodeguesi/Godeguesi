import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("uses button semantics and a safe default type", () => {
    render(<Button>Executar</Button>);
    expect(screen.getByRole("button", { name: "Executar" })).toHaveAttribute(
      "type",
      "button",
    );
  });

  it("forwards accessible native attributes", () => {
    render(<Button disabled aria-label="Ação indisponível" />);
    expect(
      screen.getByRole("button", { name: "Ação indisponível" }),
    ).toBeDisabled();
  });
});
