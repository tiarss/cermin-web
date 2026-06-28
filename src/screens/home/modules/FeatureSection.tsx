import { featureCards } from "../constants";

export function FeatureSection() {
  return (
    <section
      id="fitur"
      className="scroll-mt-28 border-y border-warm-border bg-warm-paper px-5 py-24 sm:px-6 md:px-8 md:py-32 lg:py-36"
    >
      <div className="scroll-reveal mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-warm-accent/70">
            Kenapa Cermin
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold italic leading-tight md:text-6xl">
            Bukan sekadar jurnal. Ini tempat melihat dirimu dengan lebih
            jernih.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-6">
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className="h-full rounded-3xl border border-warm-border bg-warm-bg p-8 md:p-9"
            >
              <h3 className="font-serif text-3xl font-semibold italic">
                {feature.title}
              </h3>
              <p className="mt-4 leading-7 text-warm-ink/65">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
