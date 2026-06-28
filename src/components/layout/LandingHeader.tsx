import Link from "next/link";

type LandingHeaderNavItem = {
  href: string;
  label: string;
};

type LandingHeaderProps = {
  ctaHref?: string;
  ctaLabel?: string;
  navItems: LandingHeaderNavItem[];
};

export function LandingHeader({
  ctaHref = "#mulai",
  ctaLabel = "Mulai menulis",
  navItems,
}: LandingHeaderProps) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 md:px-8 md:pt-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-warm-border bg-warm-bg/85 px-3 py-3 shadow-[0_18px_60px_rgba(58,58,46,0.08)] backdrop-blur-xl sm:px-4 md:px-5">
        <Link
          href="#beranda"
          className="flex items-center gap-3 text-warm-ink transition-colors hover:text-warm-accent"
          aria-label="Cermin beranda"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-warm-ink font-serif text-xl font-semibold italic text-warm-bg">
            C
          </span>
          <span className="font-serif text-2xl font-semibold italic leading-none">
            Cermin
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-warm-border bg-warm-paper/70 p-1 text-sm font-medium text-warm-ink/65 md:flex"
          aria-label="Navigasi landing page"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition-colors hover:bg-warm-bg hover:text-warm-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={ctaHref}
          className="shrink-0 rounded-full bg-warm-ink px-4 py-3 text-sm font-semibold text-warm-bg transition-transform hover:-translate-y-0.5 hover:bg-warm-accent focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2 focus:ring-offset-warm-bg sm:px-5"
        >
          {ctaLabel}
        </Link>
      </div>
    </header>
  );
}
