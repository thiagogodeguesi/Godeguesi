import React from "react";
import type { HTMLAttributes } from "react";
import { Container } from "@/components/ui";

export type FooterProps = HTMLAttributes<HTMLElement>;

export function Footer({ children, className = "", ...props }: FooterProps) {
  return (
    <footer className={`border-t border-border py-8 ${className}`} {...props}>
      <Container>{children}</Container>
    </footer>
  );
}
