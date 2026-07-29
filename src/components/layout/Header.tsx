import React from "react";
import type { HTMLAttributes } from "react";
import { Container } from "@/components/ui";

export type HeaderProps = HTMLAttributes<HTMLElement>;

export function Header({ children, className = "", ...props }: HeaderProps) {
  return (
    <header
      className={`sticky top-0 z-header border-b border-border bg-background/90 py-4 backdrop-blur-sm ${className}`}
      {...props}
    >
      <Container>{children}</Container>
    </header>
  );
}
