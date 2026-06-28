# Architecture

Dokumen ini menjadi acuan struktur folder dan cara menulis kode di project `cermin-web-app`. Project memakai Next.js App Router, tetapi folder `src/app` dijaga tetap tipis: hanya untuk routing, layout, metadata, dan route state file seperti `loading.tsx`, `error.tsx`, atau `not-found.tsx`.

## Prinsip Utama

- `src/app` hanya menentukan URL dan memanggil screen.
- UI halaman berada di `src/screens`.
- Component kecil dan reusable berada di `src/components`.
- Module adalah susunan beberapa component yang membentuk bagian besar dari sebuah view.
- Hook feature-specific berada di dalam screen terkait.
- Helper murni berada di `src/helpers`.
- Konfigurasi API dan API helper berada di `src/services`.
- Type untuk response/request API disimpan di folder feature masing-masing di `src/services`.

## Struktur Folder

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    (public)/
      page.tsx
    dashboard/
      page.tsx
      loading.tsx
      error.tsx

  screens/
    home/
      view/
        HomeView.tsx
      modules/
        HeroSection.tsx
        FeatureSection.tsx
        HowItWorksSection.tsx
      hooks/
        useHomeSomething.ts
      constants.ts
      index.ts

    journal/
      view/
        JournalView.tsx
      modules/
        JournalEditor.tsx
        ReflectionPanel.tsx
        JournalHistory.tsx
      hooks/
        useJournalDraft.ts
      constants.ts
      index.ts

  components/
    ui/
      Button.tsx
      Input.tsx
      Textarea.tsx
      Modal.tsx
    layout/
      LandingHeader.tsx
      AppShell.tsx
    feedback/
      EmptyState.tsx
      LoadingState.tsx
      ErrorState.tsx

  services/
    api/
      client.ts
      endpoint.ts
      error.ts
      type.ts
    journal/
      journal.service.ts
      type.ts
    auth/
      auth.service.ts
      type.ts
    reflection/
      reflection.service.ts
      type.ts

  helpers/
    formatDate.ts
    cn.ts
    storage.ts

  constants/
    route.ts
    env.ts

  types/
    common.ts
```

Catatan penamaan: folder container memakai bentuk plural karena berisi banyak file (`screens`, `components`, `services`, `helpers`). Nama konsepnya tetap sama dengan kebutuhan: screen, component, service, helper.

## Aturan `src/app`

`src/app` adalah boundary routing Next.js. File di sini sebaiknya pendek dan hanya menghubungkan route ke screen.

Contoh:

```tsx
import { HomeView } from "@/screens/home";

export default function Page() {
  return <HomeView />;
}
```

Yang boleh ada di `src/app`:

- `layout.tsx` untuk root layout, font, metadata, provider global.
- `page.tsx` untuk route entry.
- `loading.tsx`, `error.tsx`, `not-found.tsx` untuk state route.
- route group seperti `(public)` atau `(protected)` jika butuh membagi layout tanpa mengubah URL.
- `route.ts` hanya jika perlu API route dari Next.js.

Yang tidak boleh jadi kebiasaan di `src/app`:

- JSX halaman yang panjang.
- Business logic.
- API helper.
- Component kecil yang reusable.
- Custom hook feature.

## Aturan `src/screens`

Setiap feature atau halaman besar punya folder sendiri di `src/screens/<feature>`.

Struktur minimal:

```txt
screens/
  feature-name/
    view/
      FeatureNameView.tsx
    modules/
      FeatureHeader.tsx
      FeatureContent.tsx
    hooks/
      useFeatureName.ts
    constants.ts
    index.ts
```

`view/` berisi root UI untuk route. View bertugas menyusun module, mengambil data yang dibutuhkan, dan menjadi entry utama yang dipanggil oleh `src/app`.

`modules/` berisi bagian halaman yang lebih besar dari component kecil, misalnya `HeroSection`, `JournalEditor`, `PricingTable`, atau `ReflectionPanel`. Module boleh memanggil component kecil dari `src/components`.

`hooks/` berisi custom hook yang hanya relevan untuk screen tersebut. Jika hook dipakai lintas screen, pindahkan ke `src/hooks` atau `src/helpers` sesuai sifatnya.

`constants.ts` berisi data statis milik screen, seperti menu lokal, copy section, atau pilihan filter.

`index.ts` menjadi public export screen agar import tetap bersih:

```ts
export { HomeView } from "./view/HomeView";
```

## Aturan `src/components`

`src/components` berisi component kecil, reusable, dan tidak tahu konteks bisnis terlalu dalam.

Contoh component yang cocok:

- `Button`
- `Input`
- `Textarea`
- `Modal`
- `EmptyState`
- `LoadingState`
- `LandingHeader`
- `AppShell`

Component di folder ini menerima data lewat props. Hindari memanggil service API langsung dari component kecil. Jika component perlu interaksi client-side, tambahkan `"use client"` hanya di file component yang memang butuh state, event handler, effect, browser API, atau custom hook.

## Aturan `src/services`

`src/services` bertugas mengelola komunikasi API.

`services/api` adalah fondasi umum:

- `client.ts` untuk wrapper `fetch`, base URL, header default, dan handling JSON.
- `endpoint.ts` untuk daftar endpoint global atau helper builder URL.
- `error.ts` untuk normalisasi error API.
- `type.ts` untuk type umum API seperti `ApiResponse`, `ApiError`, atau pagination.

Setiap feature API punya folder sendiri:

```txt
services/
  journal/
    journal.service.ts
    type.ts
```

Contoh pola service:

```ts
import { apiClient } from "@/services/api/client";
import type { JournalEntry, CreateJournalPayload } from "./type";

export async function createJournal(payload: CreateJournalPayload) {
  return apiClient<JournalEntry>("/journals", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
```

Aturan service:

- File service tidak berisi JSX.
- Semua request/response type feature berada di `type.ts` dalam folder feature tersebut.
- Service feature memakai `services/api/client.ts`, bukan memanggil `fetch` mentah berulang-ulang.
- Jangan taruh state UI di service.

## Aturan `src/helpers`

`src/helpers` berisi function murni atau utilitas kecil yang bisa dipakai lintas feature.

Contoh:

- format tanggal.
- normalisasi string.
- class name helper.
- parsing sederhana.
- local storage wrapper.

Helper tidak boleh bergantung pada UI. Jika helper hanya relevan untuk satu screen, simpan dekat screen tersebut lebih dulu.

## Folder Tambahan

`src/constants` dipakai untuk konstanta global seperti route path, env key, atau konfigurasi aplikasi yang tidak spesifik ke satu screen.

`src/types` dipakai untuk type global yang tidak melekat pada satu service feature, misalnya `Nullable<T>`, `OptionItem`, atau type domain yang dipakai lintas banyak layer. Type request/response API tetap tinggal di `src/services/<feature>/type.ts`.

`src/hooks` boleh ditambahkan nanti hanya untuk hook yang benar-benar global. Hook milik halaman tetap di `src/screens/<feature>/hooks`.

## Alur Data

```txt
src/app route
  -> screens/<feature>/view
    -> screens/<feature>/modules
      -> components
    -> screens/<feature>/hooks
    -> services/<feature>
      -> services/api/client
    -> helpers
```

Dengan alur ini, route tetap tipis, view mudah dibaca, module bisa dipisah per bagian halaman, dan API logic tidak tercampur dengan JSX.

## Server dan Client Component

Default Next.js App Router adalah Server Component. Gunakan Server Component untuk render data dan mengurangi JavaScript di browser.

Gunakan `"use client"` hanya ketika file membutuhkan:

- `useState`, `useEffect`, atau hook React client lainnya.
- event handler seperti `onClick` dan `onChange`.
- browser API seperti `window`, `localStorage`, atau `navigator`.
- custom hook yang bergantung pada client behavior.

Jika hanya satu module yang interaktif, jadikan module itu Client Component. Jangan menjadikan seluruh view client component kecuali memang seluruh view membutuhkan state/browser API.

## Naming Convention

- View: `HomeView.tsx`, `JournalView.tsx`.
- Module: `HeroSection.tsx`, `JournalEditor.tsx`.
- Component: `Button.tsx`, `LandingHeader.tsx`.
- Hook: `useJournalDraft.ts`.
- Service: `journal.service.ts`, `auth.service.ts`.
- API type per feature: `type.ts`.
- Helper: `formatDate.ts`, `cn.ts`.

## Contoh Implementasi Route Home

```txt
src/app/page.tsx
src/screens/home/index.ts
src/screens/home/view/HomeView.tsx
src/screens/home/modules/HeroSection.tsx
src/screens/home/modules/FeatureSection.tsx
src/components/layout/LandingHeader.tsx
```

`src/app/page.tsx`:

```tsx
import { HomeView } from "@/screens/home";

export default function Page() {
  return <HomeView />;
}
```

`src/screens/home/view/HomeView.tsx`:

```tsx
import { LandingHeader } from "@/components/layout/LandingHeader";
import { FeatureSection } from "../modules/FeatureSection";
import { HeroSection } from "../modules/HeroSection";

export function HomeView() {
  return (
    <main>
      <LandingHeader />
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
```

## Migrasi Dari Struktur Saat Ini

Struktur awal project masih sederhana. Saat mulai merapikan:

1. Pindahkan isi panjang `src/app/page.tsx` ke `src/screens/home/view/HomeView.tsx`.
2. Pecah section besar dari home ke `src/screens/home/modules`.
3. Pindahkan `src/components/LandingHeader.tsx` ke `src/components/layout/LandingHeader.tsx`.
4. Ubah `src/app/page.tsx` agar hanya return `<HomeView />`.
5. Tambahkan service feature hanya ketika API benar-benar mulai dipakai.

## Checklist Saat Menambah Feature Baru

- Buat `src/screens/<feature>/view/<Feature>View.tsx`.
- Buat module di `src/screens/<feature>/modules` jika view mulai panjang.
- Buat hook di `src/screens/<feature>/hooks` hanya jika logic client-side cukup kompleks.
- Buat `src/services/<feature>/<feature>.service.ts` jika feature memanggil API.
- Buat `src/services/<feature>/type.ts` untuk request/response type API.
- Import screen dari `src/app/.../page.tsx`, bukan menulis UI langsung di route.
