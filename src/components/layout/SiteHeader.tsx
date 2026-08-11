"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { siteConfig } from "@/content/site";
import { Button, Container } from "@/components/ui";

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-header border-b border-border bg-background/85 backdrop-blur-md">
      <Container className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 sm:flex sm:justify-between">
        <Link
          className="flex min-w-0 items-center gap-3 text-foreground"
          href="/"
        >
          <Image
            alt=""
            aria-hidden="true"
            className="shrink-0"
            height={34}
            priority
            src="/brand/tg-mark.svg"
            width={34}
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-semibold tracking-tight">
              {siteConfig.professionalName}
            </span>
            <span className="block truncate text-xs text-muted">
              {siteConfig.role}
            </span>
          </span>
        </Link>
        <Button
          aria-controls="primary-navigation"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="shrink-0 sm:hidden"
          onClick={() => setOpen((value) => !value)}
          variant="secondary"
        >
          Menu
        </Button>
        <nav
          aria-label="Principal"
          className={`${open ? "flex" : "hidden"} col-span-2 w-full flex-col gap-1 pb-2 sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-1 sm:pb-0`}
          id="primary-navigation"
        >
          {siteConfig.navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`rounded-control px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-surface-subtle text-foreground"
                    : "text-muted hover:bg-surface-subtle hover:text-foreground"
                }`}
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
