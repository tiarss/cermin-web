import Link from "next/link";
import { heroStats, reflectionEmotions } from "../constants";

export function HeroSection() {
  return (
    <section className="relative scroll-mt-28 px-5 pb-20 pt-32 sm:px-6 md:px-8 md:pb-28 md:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_20%_12%,rgba(15,110,86,0.18),transparent_34%),radial-gradient(circle_at_78%_4%,rgba(250,199,117,0.32),transparent_30%),linear-gradient(180deg,var(--color-warm-bg),var(--color-warm-paper))]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-[1fr_0.86fr] lg:gap-16">
        <div className="hero-reveal max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-warm-border bg-warm-bg/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-warm-accent">
            Jurnal reflektif pribadi
          </p>
          <h1 className="font-serif text-6xl font-semibold italic leading-[0.94] text-warm-ink md:text-8xl">
            Cermin
          </h1>
          <p className="mt-6 max-w-2xl text-2xl leading-9 text-warm-ink md:text-4xl md:leading-[1.12]">
            Tempat menulis yang memantulkan kembali perasaanmu dengan tenang.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-warm-ink/65 md:text-lg">
            Cermin membantu kamu bercerita, mengenali emosi, dan menemukan satu
            langkah kecil untuk memahami diri sendiri tanpa merasa sedang
            dinilai.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-warm-ink px-7 py-3 font-semibold text-warm-bg transition-transform hover:-translate-y-0.5 hover:bg-warm-accent focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2 focus:ring-offset-warm-bg"
            >
              Coba Cermin
            </Link>
            <Link
              href="/login"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-warm-border bg-warm-bg/70 px-7 py-3 font-semibold text-warm-ink transition-colors hover:bg-warm-paper focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2 focus:ring-offset-warm-bg"
            >
              Masuk
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-1 gap-3 text-left sm:grid-cols-3 sm:gap-5">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-warm-border/70 bg-warm-bg/50 p-4"
              >
                <p className="font-serif text-3xl font-semibold italic">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-ink/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-reveal hero-reveal-delay relative lg:pb-0">
          <div className="letter-paper mx-auto w-full max-w-md rounded-[2rem] p-7 shadow-[0_30px_90px_rgba(58,58,46,0.14)] md:p-9">
            <div className="mb-8 flex items-center justify-between border-b border-warm-border pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-warm-accent/70">
                  Surat hari ini
                </p>
                <p className="mt-1 font-serif text-2xl italic">Minggu sore</p>
              </div>
              <div className="wax-seal" aria-hidden="true" />
            </div>

            <div className="space-y-5 font-lora text-base leading-8 text-warm-ink/80">
              <p>
                Aku merasa pelan hari ini. Ada banyak hal yang belum selesai,
                tapi tubuhku seperti meminta diberi ruang.
              </p>
              <p>
                Mungkin aku tidak sedang malas. Mungkin aku hanya perlu
                berhenti sebentar dan mendengarkan apa yang ramai di dalam.
              </p>
            </div>

            <div
              id="refleksi"
              className="mt-8 rounded-3xl border border-teal/15 bg-sage/70 p-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal">
                Pantulan Cermin
              </p>
              <p className="mt-3 font-serif text-2xl italic leading-8 text-warm-ink">
                Kamu sedang mencoba tetap lembut pada diri sendiri di tengah
                tuntutan yang banyak.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {reflectionEmotions.map((emotion) => (
                  <span
                    key={emotion}
                    className="rounded-full bg-warm-bg px-3 py-2 text-xs font-semibold text-teal"
                  >
                    {emotion}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
