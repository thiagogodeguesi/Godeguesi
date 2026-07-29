import React from "react";
import type { HTMLAttributes } from "react";

export type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill border border-border bg-surface-subtle px-3 py-1 text-xs font-semibold tracking-wide text-foreground ${className}`}
      {...props}
    />
  );
}
