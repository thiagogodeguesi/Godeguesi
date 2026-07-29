import React from "react";
import type { HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "content" | "reading";
}

export function Container({
  className = "",
  size = "content",
  ...props
}: ContainerProps) {
  const width = size === "reading" ? "max-w-reading" : "max-w-content";
  return (
    <div
      className={`mx-auto w-full ${width} px-gutter ${className}`}
      {...props}
    />
  );
}
