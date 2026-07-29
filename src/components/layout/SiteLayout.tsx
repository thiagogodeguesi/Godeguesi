import type { ReactNode } from "react";
import React from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <><a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-overlay rounded-control bg-surface px-4 py-2 text-foreground" href="#conteudo">Pular para o conteúdo</a><SiteHeader /><main id="conteudo">{children}</main><SiteFooter /></>;
}
