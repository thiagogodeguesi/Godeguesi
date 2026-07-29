import React from "react";
import type { SectionProps } from "@/components/ui";
import { Container, Section } from "@/components/ui";

export interface SectionWrapperProps extends SectionProps {
  containerSize?: "content" | "reading";
}

export function SectionWrapper({
  children,
  containerSize = "content",
  ...props
}: SectionWrapperProps) {
  return (
    <Section {...props}>
      <Container size={containerSize}>{children}</Container>
    </Section>
  );
}
