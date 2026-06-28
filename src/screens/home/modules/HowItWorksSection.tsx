import { howItWorksSteps } from "../constants";

export function HowItWorksSection() {
  return (
    <section
      id="cara-kerja"
      className="scroll-mt-28 px-5 py-24 sm:px-6 md:px-8 md:py-32 lg:py-36"
    >
      <div className="scroll-reveal mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.82fr_1fr] md:items-start lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-warm-accent/70">
            Cara kerja
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold italic leading-tight md:text-6xl">
            Tiga langkah sederhana saat kepala terasa penuh.
          </h2>
        </div>

        <div className="space-y-5">
          {howItWorksSteps.map((step, index) => (
            <div
              key={step}
              className="grid grid-cols-[3.5rem_1fr] gap-5 rounded-3xl border border-warm-border bg-warm-paper p-7 md:p-8"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-warm-ink font-serif text-2xl italic text-warm-bg">
                {index + 1}
              </span>
              <p className="self-center text-xl leading-8 text-warm-ink/75">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
