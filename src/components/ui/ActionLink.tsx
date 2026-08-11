import Link from "next/link";
import React from "react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ActionLinkVariant = "primary" | "secondary" | "quiet";

const variants: Record<ActionLinkVariant, string> = {
  primary:
    "border-accent bg-accent text-background hover:bg-accent-strong hover:border-accent-strong",
  secondary:
    "border-border-strong bg-transparent text-foreground hover:border-highlight hover:text-highlight",
  quiet:
    "border-transparent bg-transparent px-0 font-semibold text-accent hover:text-highlight",
};

export interface ActionLinkProps {
  href: string;
  children: ReactNode;
  variant?: ActionLinkVariant;
  className?: string;
  external?: boolean;
  "aria-label"?: string;
}

/**
 * CTA em formato de link, com a mesma linguagem visual do Button.
 * Centraliza os estilos usados na home, nos cards e nas listagens.
 */
export function ActionLink({
  children,
  className = "",
  external = false,
  href,
  variant = "primary",
  ...props
}: ActionLinkProps) {
  const classes = `inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-control border px-5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`;

  if (external) {
    const anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
      rel: "noopener noreferrer",
      target: "_blank",
    };
    return (
      <a className={classes} href={href} {...anchorProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
