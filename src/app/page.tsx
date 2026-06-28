import { LandingHeader } from "@/components/LandingHeader";

const featureCards = [
  {
    title: "Menulis tanpa dihakimi",
    body: "Ruang yang tenang untuk menuangkan isi kepala, dari hal kecil yang mengganggu sampai perasaan yang sulit diberi nama.",
  },
  {
    title: "Pantulan yang lembut",
    body: "Setiap tulisan dibalas dengan validasi, ringkasan emosi, dan pertanyaan kecil yang membantu kamu melihat pola diri.",
  },
  {
    title: "Jejak minggu ke minggu",
    body: "Cermin menyusun arsip perasaan, lanskap emosi, dan cerita mingguan agar pertumbuhanmu tidak hilang begitu saja.",
  },
];

const steps = [
  "Tulis apa adanya selama beberapa menit.",
  "Terima refleksi yang merangkum perasaan utama.",
  "Simpan dan baca kembali saat kamu butuh memahami pola diri.",
];

export default function Home() {
  return (
    <main
      id="beranda"
      className="min-h-screen overflow-hidden bg-warm-bg text-warm-ink"
    >
      <LandingHeader />

      <section className="relative px-4 pt-32 md:px-8 md:pt-40">
        <div className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_20%_12%,rgba(15,110,86,0.18),transparent_34%),radial-gradient(circle_at_78%_4%,rgba(250,199,117,0.32),transparent_30%),linear-gradient(180deg,var(--color-warm-bg),var(--color-warm-paper))]" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-[1fr_0.86fr]">
          <div className="max-w-3xl">
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
              Cermin membantu kamu bercerita, mengenali emosi, dan menemukan
              satu langkah kecil untuk memahami diri sendiri tanpa merasa
              sedang dinilai.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#mulai"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-warm-ink px-7 py-3 font-semibold text-warm-bg transition-transform hover:-translate-y-0.5 hover:bg-warm-accent focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2 focus:ring-offset-warm-bg"
              >
                Mulai menulis
              </a>
              <a
                href="#refleksi"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-warm-border bg-warm-bg/70 px-7 py-3 font-semibold text-warm-ink transition-colors hover:bg-warm-paper focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2 focus:ring-offset-warm-bg"
              >
                Lihat pantulan
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center sm:text-left">
              <div>
                <p className="font-serif text-3xl font-semibold italic">3</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-ink/45">
                  Mode menulis
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold italic">7</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-ink/45">
                  Hari pola
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold italic">1</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-ink/45">
                  Ruang aman
                </p>
              </div>
            </div>
          </div>

          <div className="relative pb-10 lg:pb-0">
            <div className="letter-paper mx-auto w-full max-w-md rounded-[2rem] p-6 shadow-[0_30px_90px_rgba(58,58,46,0.14)] md:p-8">
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
                  {["Lelah", "Butuh jeda", "Ingin dipahami"].map((emotion) => (
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

      <section
        id="fitur"
        className="border-y border-warm-border bg-warm-paper px-4 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-warm-accent/70">
              Kenapa Cermin
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold italic leading-tight md:text-6xl">
              Bukan sekadar jurnal. Ini tempat melihat dirimu dengan lebih
              jernih.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {featureCards.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-warm-border bg-warm-bg p-7"
              >
                <h3 className="font-serif text-3xl font-semibold italic">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-warm-ink/65">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cara-kerja" className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.82fr_1fr] md:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-warm-accent/70">
              Cara kerja
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold italic leading-tight md:text-6xl">
              Tiga langkah sederhana saat kepala terasa penuh.
            </h2>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="grid grid-cols-[3.5rem_1fr] gap-5 rounded-3xl border border-warm-border bg-warm-paper p-6"
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

      <section className="bg-warm-ink px-4 py-20 text-warm-bg md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber">
              Untuk hari yang berat
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold italic leading-tight md:text-6xl">
              Ketika kata-kata terasa berantakan, Cermin membantu menemukan
              bentuknya.
            </h2>
          </div>
          <p className="text-lg leading-8 text-warm-bg/70">
            Nada halaman ini sengaja pelan: cukup jelas untuk dipakai, cukup
            hangat untuk membuat orang berani mulai, dan cukup rapi untuk
            menjadi fondasi aplikasi refleksi yang lebih besar.
          </p>
        </div>
      </section>

      <section id="mulai" className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
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
          <a
            href="#beranda"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-warm-ink px-8 py-3 font-semibold text-warm-bg transition-transform hover:-translate-y-0.5 hover:bg-warm-accent focus:outline-none focus:ring-2 focus:ring-warm-accent focus:ring-offset-2 focus:ring-offset-warm-bg"
          >
            Kembali ke awal
          </a>
        </div>
      </section>

      <footer className="border-t border-warm-border px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-warm-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-2xl italic text-warm-ink">Cermin</p>
          <p>Tempatmu bercerita dan didengar oleh dirimu sendiri.</p>
        </div>
      </footer>
    </main>
  );
}
