export function SupportSection() {
  return (
    <section className="bg-warm-ink px-5 py-24 text-warm-bg sm:px-6 md:px-8 md:py-32 lg:py-36">
      <div className="scroll-reveal mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_0.8fr] md:items-end lg:gap-16">
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
          hangat untuk membuat orang berani mulai, dan cukup rapi untuk menjadi
          fondasi aplikasi refleksi yang lebih besar.
        </p>
      </div>
    </section>
  );
}
