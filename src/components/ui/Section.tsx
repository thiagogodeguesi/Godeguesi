import React from "react";
import type { HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "none" | "default";
}

export function Section({
  className = "",
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={`${spacing === "default" ? "py-section" : ""} ${className}`}
      {...props}
    />
  );
}
