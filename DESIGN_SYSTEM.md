# Cermin Design System

Design system ini diturunkan dari landing page Cermin. Tujuannya menjaga pengalaman produk tetap tenang, reflektif, dan mudah dipercaya ketika halaman baru seperti login, register, jurnal, dan dashboard mulai ditambahkan.

## Brand Direction

Cermin adalah ruang menulis pribadi yang memantulkan kembali perasaan pengguna dengan lembut. Visual harus terasa:

- Tenang, bukan kosong.
- Hangat, bukan dekoratif berlebihan.
- Personal, bukan klinis.
- Rapi dan dewasa, bukan playful secara berlebihan.

Gunakan metafora kertas, surat, pantulan, arsip, dan cahaya lembut. Hindari tampilan yang terlalu teknikal, neon, atau terlalu gelap untuk halaman publik.

## Color Tokens

Token utama sudah berada di `src/app/globals.css`.

| Token | Value | Usage |
| --- | --- | --- |
| `warm-bg` | `#fbfaf8` | Background halaman utama, area luas. |
| `warm-paper` | `#f5f5f0` | Surface lembut, card, form panel, paper preview. |
| `warm-ink` | `#3a3a2e` | Teks utama, tombol utama, aksen solid. |
| `warm-accent` | `#5a5a40` | Link, eyebrow, hover, secondary accent. |
| `warm-border` | `#e2e2da` | Border halus, divider, input border. |
| `teal` | `#0f6e56` | State refleksi, trust, insight, emotional tags. |
| `sage` | `#e1f5ee` | Background panel refleksi. |
| `amber` | `#fac775` | Highlight kecil di section gelap. |

Dark mode token tersedia, tetapi halaman publik saat ini dirancang light-first. Jika dark mode diaktifkan, pastikan kontras panel, input, dan tombol dicek lagi.

## Typography

Font yang dipakai:

- `Inter`: body, nav, form label, CTA.
- `Cormorant Garamond`: brand, headline besar, quote/reflection copy.
- `Lora`: long-form writing atau teks jurnal.
- `Caveat`: hanya untuk aksen handwritten jika benar-benar perlu.

Skala umum:

| Role | Class Pattern | Notes |
| --- | --- | --- |
| Hero brand | `font-serif text-6xl md:text-8xl italic` | Hanya untuk first viewport. |
| Section heading | `font-serif text-4xl md:text-6xl italic` | Gunakan line-height ketat tapi tetap terbaca. |
| CTA heading | `font-serif text-5xl md:text-7xl italic` | Untuk closing moment. |
| Body | `text-base md:text-lg leading-8` | Jaga napas copy. |
| Label/eyebrow | `text-xs font-bold uppercase tracking-[0.24em]` | Gunakan hemat. |
| Form label | `text-sm font-semibold` | Jelas, tidak terlalu kecil. |

Jangan memakai font-size berbasis viewport. Letter spacing normal untuk body dan heading; tracking lebar hanya untuk eyebrow kecil.

## Layout & Spacing

Landing page memakai rhythm yang lega:

- Page horizontal padding: `px-5 sm:px-6 md:px-8`.
- Section vertical padding: `py-24 md:py-32 lg:py-36`.
- Hero top padding: `pt-32 md:pt-40`.
- Max content width: `max-w-6xl`.
- Text column comfortable width: `max-w-2xl` sampai `max-w-3xl`.
- Card gap: `gap-5 lg:gap-6`.
- Section anchor offset: `scroll-mt-28` karena header fixed.

Auth pages should use:

- Full viewport minimum height.
- Two-column layout on desktop: brand/context panel + form panel.
- Single-column stacked layout on mobile.
- Form panel max width around `max-w-md`.
- Card padding `p-7 md:p-9`.

## Surfaces

Core surface styles:

- Page: `bg-warm-bg text-warm-ink`.
- Paper/card: `bg-warm-paper border border-warm-border`.
- Soft card: `bg-warm-bg/70 border border-warm-border`.
- Reflection panel: `bg-sage/70 border border-teal/15`.
- Dark band: `bg-warm-ink text-warm-bg`.

Border radius:

- Utility cards/forms: `rounded-3xl`.
- Pills/buttons: `rounded-full`.
- Large paper preview: `rounded-[2rem]`.

Use shadows sparingly:

- Header: subtle floating shadow.
- Paper preview/form card: stronger soft shadow.
- Avoid stacked cards inside cards unless the inner card represents a different state, such as reflection output inside paper.

## Buttons

Primary CTA:

- Background `warm-ink`, text `warm-bg`.
- Hover `warm-accent`.
- Minimum height `min-h-12`.
- Rounded full.
- Focus ring using `warm-accent`.

Secondary CTA:

- Border `warm-border`.
- Background `warm-bg/70` or transparent.
- Text `warm-ink`.
- Hover `warm-paper`.

OAuth button:

- Full width.
- Border `warm-border`.
- White/warm paper surface.
- Icon mark in small circular or fixed-width area.
- Text should be literal: `Lanjutkan dengan Google`, `Lanjutkan dengan Apple`.

## Forms

Auth forms should feel quiet and safe:

- Labels above inputs.
- Inputs use `min-h-12`, `rounded-2xl`, `border-warm-border`, `bg-warm-bg`.
- Focus ring `warm-accent`.
- Helper copy in `text-warm-ink/55`.
- Error state later should use a warm red, not bright red, and preserve accessibility.

Form order:

1. Eyebrow.
2. Heading.
3. Short reassurance copy.
4. Form fields.
5. Primary action.
6. Divider.
7. OAuth actions.
8. Cross-link login/register.

## Motion

Current motion tokens:

- `.hero-reveal`: first viewport entrance.
- `.scroll-reveal`: section reveal using `animation-timeline: view()` when supported.
- Reduced motion is handled globally.

Motion guidelines:

- Use small translate + opacity.
- Do not animate form fields individually on auth pages.
- Avoid looping decorative motion.
- Keep auth pages calmer than landing page.

## Accessibility

- Maintain visible focus rings on links, buttons, and inputs.
- Do not rely on hover-only information.
- Keep tap targets at least 44px high.
- Ensure mobile has no horizontal overflow.
- OAuth buttons must be actual buttons for future logic.
- Forms can remain static for now, but structure should already use `label`, `input`, and semantic grouping.

## Page Patterns

### Landing

Landing page is assembled from screen modules:

```txt
src/app/page.tsx
  -> src/screens/home/view/HomeView.tsx
    -> modules/HeroSection
    -> modules/FeatureSection
    -> modules/HowItWorksSection
    -> modules/SupportSection
    -> modules/FinalCtaSection
```

### Auth

Auth pages should follow the same architecture:

```txt
src/app/login/page.tsx
src/app/register/page.tsx
  -> src/screens/auth/view
    -> modules/AuthShell
    -> modules/LoginForm
    -> modules/RegisterForm
    -> constants.ts
```

Auth should reuse the brand tone from landing page, but be more focused and compact.
