import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { caseStudies } from "@/content/case-studies";
import { CaseStudyDetail } from "./CaseStudyDetail";

describe("CaseStudyDetail", () => {
  it("renders publishable content and omits validation-required sections", () => {
    render(<CaseStudyDetail caseStudy={caseStudies[1]} />);
    expect(screen.getByRole("heading", { name: "Contexto" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Solução" })).not.toBeInTheDocument();
  });
});
