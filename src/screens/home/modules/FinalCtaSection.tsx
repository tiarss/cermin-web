import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section
      id="mulai"
      className="scroll-mt-28 px-5 py-24 sm:px-6 md:px-8 md:py-32 lg:py-36"
    >
      <div className="scroll-reveal mx-auto max-w-4xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-warm-accent/70">
          Mulai dari satu kalimat
        </p>
        <h2 className="mt-4 font-serif text-5xl font-semibold italic leading-tight md:text-7xl">
          Apa yang sebenarnya ingin kamu dengar dari dirimu hari ini?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-warm-ink/65">
          Tulis perlahan. Cermin akan menjadi ruang pertama untuk memantulkan
          kembali apa yang mungkin selama ini hanya lewat begitu saja.
        </p>
        <Link
          href="/register"
          className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-warm-ink px-8 py-3 font-semibold text-warm-bg transition-transform hover:-translate-y-0.5 hover:bg-warm-accent focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2 focus:ring-offset-warm-bg"
        >
          Mulai mencoba
        </Link>
      </div>
    </section>
  );
}
