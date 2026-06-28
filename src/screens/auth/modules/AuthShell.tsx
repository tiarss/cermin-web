import Link from "next/link";
import type { ReactNode } from "react";
import { authHighlights } from "../constants";

type AuthShellProps = {
  children: ReactNode;
  footer: ReactNode;
  intro: string;
  title: string;
};

export function AuthShell({ children, footer, intro, title }: AuthShellProps) {
  return (
    <main className="min-h-screen bg-warm-bg px-5 py-6 text-warm-ink sm:px-6 md:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <aside className="scroll-reveal hidden p-6 lg:block">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-warm-ink transition-colors hover:text-warm-accent"
            aria-label="Kembali ke Cermin"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-warm-ink font-serif text-xl font-semibold italic text-warm-bg">
              C
            </span>
            <span className="font-serif text-3xl font-semibold italic">
              Cermin
            </span>
          </Link>

          <div className="mt-16 max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-warm-accent/70">
              Ruang refleksi pribadi
            </p>
            <h2 className="mt-5 font-serif text-6xl font-semibold italic leading-[0.95]">
              Masuk pelan-pelan ke ruang yang mendengarkan.
            </h2>
            <p className="mt-6 text-lg leading-8 text-warm-ink/65">
              Cermin membantu kamu menulis, menamai perasaan, dan melihat pola
              diri tanpa harus terburu-buru menjelaskan semuanya.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {authHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-3xl border border-warm-border bg-warm-bg/70 p-5"
              >
                <p className="leading-7 text-warm-ink/70">{highlight}</p>
              </div>
            ))}
          </div>
        </aside>

        <section className="flex min-h-[calc(100vh-3rem)] items-center justify-center py-20 lg:min-h-0 lg:py-0">
          <div className="hero-reveal w-full max-w-md">
            <div className="mb-8 flex items-center justify-between lg:hidden">
              <Link
                href="/"
                className="flex items-center gap-3 text-warm-ink"
                aria-label="Kembali ke Cermin"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-warm-ink font-serif text-xl font-semibold italic text-warm-bg">
                  C
                </span>
                <span className="font-serif text-2xl font-semibold italic">
                  Cermin
                </span>
              </Link>
            </div>

            <div className="rounded-[2rem] border border-warm-border bg-warm-paper p-7 shadow-[0_26px_80px_rgba(58,58,46,0.12)] md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-warm-accent/70">
                {intro}
              </p>
              <h1 className="mt-4 font-serif text-5xl font-semibold italic leading-tight">
                {title}
              </h1>
              {children}
            </div>

            <div className="mt-6 text-center text-sm leading-6 text-warm-ink/60">
              {footer}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
