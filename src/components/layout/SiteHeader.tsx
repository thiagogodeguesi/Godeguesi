"use client";

import Link from "next/link";
import React, { useState } from "react";
import { siteConfig } from "@/content/site";
import { Button, Container } from "@/components/ui";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-header border-b border-border bg-background/95 py-3 backdrop-blur-sm">
      <Container className="flex flex-wrap items-center justify-between gap-3">
        <Link className="text-lg font-semibold tracking-tight text-foreground" href="/">
          {siteConfig.name}
        </Link>
        <Button aria-controls="primary-navigation" aria-expanded={open} className="sm:hidden" onClick={() => setOpen((value) => !value)} variant="secondary">
          Menu
        </Button>
        <nav aria-label="Principal" className={`${open ? "flex" : "hidden"} w-full flex-col gap-1 sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-5`} id="primary-navigation">
          {siteConfig.navigation.map((item) => (
            <Link className="rounded-control px-3 py-2 text-sm font-medium text-muted hover:bg-surface-subtle hover:text-foreground" href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
