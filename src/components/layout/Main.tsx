import React from "react";
import type { HTMLAttributes } from "react";

export type MainProps = HTMLAttributes<HTMLElement>;

export function Main({ className = "", ...props }: MainProps) {
  return <main className={`min-h-screen ${className}`} {...props} />;
}
