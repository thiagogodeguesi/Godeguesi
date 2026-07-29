import React from "react";
import type { HTMLAttributes } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
}

const styles: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl lg:text-6xl",
  2: "text-3xl sm:text-4xl",
  3: "text-2xl sm:text-3xl",
  4: "text-xl sm:text-2xl",
  5: "text-lg sm:text-xl",
  6: "text-base sm:text-lg",
};

export function Heading({ className = "", level = 2, ...props }: HeadingProps) {
  const Element = `h${level}` as const;
  return (
    <Element
      className={`text-balance font-semibold leading-tight tracking-tight text-foreground ${styles[level]} ${className}`}
      {...props}
    />
  );
}
