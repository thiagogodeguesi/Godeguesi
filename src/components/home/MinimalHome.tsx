import React from "react";

export function MinimalHome() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 rounded-3xl border border-cyan-300/20 bg-slate-900/60 p-8 shadow-2xl shadow-cyan-950/30 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Fundação técnica
        </p>
        <div className="space-y-5">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Godeguesi
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Transformando problemas complexos em soluções de dados, automação e
            software que evoluem junto com o negócio.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
          <span className="rounded-2xl border border-slate-700/80 px-4 py-3">
            Next.js App Router
          </span>
          <span className="rounded-2xl border border-slate-700/80 px-4 py-3">
            TypeScript estrito
          </span>
          <span className="rounded-2xl border border-slate-700/80 px-4 py-3">
            Quality gates iniciais
          </span>
        </div>
      </section>
    </main>
  );
}
