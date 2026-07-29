import React from "react";
import type { HTMLAttributes } from "react";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: "p" | "span";
  size?: "sm" | "md" | "lg";
}

const sizes = { sm: "text-sm", md: "text-base", lg: "text-lg" } as const;

export function Text({
  as: Element = "p",
  className = "",
  size = "md",
  ...props
}: TextProps) {
  return (
    <Element
      className={`leading-relaxed text-muted ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
