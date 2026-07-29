import React from "react";
import type { HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <article
      className={`rounded-card border border-border bg-surface p-6 shadow-card sm:p-8 ${className}`}
      {...props}
    />
  );
}
