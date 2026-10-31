# Optimasi Kecepatan & Kuota HP (Zero-CLS Smart Split + WebP) Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Memangkas beban gambar awal dari ~10,2 MB menjadi < 850 KB melalui konversi WebP HD + thumbnail khusus Hero, menerapkan *lazy-loading* gambar, dan memecah *bundle* JS agar bebas dari peringatan `> 500 kB` tanpa merusak akurasi gulir menu.

**Architecture:** Mengonversi seluruh 12 aset gambar arsip ke `.webp` menggunakan Python `Pillow`, memperbarui referensi gambar di `src/data/historyContent.ts` (termasuk `thumbSrc` untuk potret Hero), menambahkan atribut pemuatan asinkron/malas pada komponen gambar di bawah lipatan layar, serta mengombinasikan `React.lazy` berjangkar tetap di `src/App.tsx` dengan pemisahan *vendor chunk* Rolldown di `vite.config.ts`.

**Tech Stack:** React 19, TypeScript, Vite 8 (Rolldown), Python 3 (`Pillow` WebP encoder), Oxlint.

---

### Task 1: Konversi Aset ke WebP HD + Thumbnail Hero & Pembaruan Path Data

**Files:**
- Modify: `public/images/*` (konversi 12 `.jpg`/`.png` -> `.webp` + `van-den-bosch-thumb.webp`, hapus file `.jpg`/`.png` lama)
- Modify: `src/data/historyContent.ts`
- Modify: `public/images/PANDUAN_NAMA_GAMBAR.txt`

**Step 1: Konversi 12 gambar ke `.webp` HD (`max 1400px`, `q=82`) dan buat `van-den-bosch-thumb.webp` (`160×160px`)**

Jalankan skrip Python `Pillow` dengan `ImageOps.exif_transpose`, simpan versi `.webp`, buat `van-den-bosch-thumb.webp` menggunakan `ImageOps.fit((160, 160))`, verifikasi seluruh file `.webp` terbentuk dan ukurannya valid (`> 1 KB`), lalu hapus file `.jpg`/`.png` lama di `public/images/`.

**Step 2: Perbarui `HistoricalImage` dan seluruh referensi `src: "/images/..."` di `src/data/historyContent.ts`**

1. Tambahkan `thumbSrc?: string;` pada interface `HistoricalImage`.
2. Tambahkan `thumbSrc: "/images/van-den-bosch-thumb.webp"` pada `heroData.image`.
3. Ubah seluruh referensi `.jpg`/`.png` di `src/data/historyContent.ts` dan `public/images/PANDUAN_NAMA_GAMBAR.txt` menjadi `.webp`.

**Step 3: Verifikasi keberadaan seluruh file gambar yang direferensikan oleh `historyContent.ts`**

Run: skrip verifikasi path gambar + `npx tsc --noEmit`  
Expected: 100% path di `historyContent.ts` cocok dengan file fisik di `public/images/`, total ukuran folder `< 850 KB`, dan `tsc` exit code `0`.

**Step 4: Commit Task 1**

```bash
git add public/images src/data/historyContent.ts
git commit -m "perf(assets): convert historical images to WebP HD and add Hero portrait thumbnail"
```

---

### Task 2: Optimasi `<img>` (`thumbSrc`, `loading="lazy"`, `decoding="async"`, & Dimensi)

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/BackgroundSection.tsx`
- Modify: `src/components/ExploitationSection.tsx`
- Modify: `src/components/ImpactSection.tsx`
- Modify: `src/components/ImageLightboxModal.tsx`

**Step 1: Perbarui elemen `<img>` di kelima komponen**

1. `src/components/Hero.tsx`: Gunakan `src={heroData.image.thumbSrc ?? heroData.image.src}`, `width={46}`, `height={46}`, `decoding="async"`.
2. `src/components/BackgroundSection.tsx`: Tambahkan `loading="lazy" decoding="async"` pada gambar krisis dan potret Van den Bosch.
3. `src/components/ExploitationSection.tsx`: Tambahkan `loading="lazy" decoding="async"` pada gambar komoditas ekspor.
4. `src/components/ImpactSection.tsx`: Tambahkan `loading="lazy" decoding="async" width={72} height={72}` pada avatar tokoh pengkritik.
5. `src/components/ImageLightboxModal.tsx`: Tambahkan `decoding="async"` pada gambar modal pembesaran.

**Step 2: Verifikasi TypeScript & Linter**

Run: `npx tsc --noEmit && npm run lint`  
Expected: `Found 0 warnings and 0 errors.`

**Step 3: Commit Task 2**

```bash
git add src/components/Hero.tsx src/components/BackgroundSection.tsx src/components/ExploitationSection.tsx src/components/ImpactSection.tsx src/components/ImageLightboxModal.tsx
git commit -m "perf(ui): add hero thumbnail rendering and native lazy-loading across archival images"
```

---

### Task 3: Code-Splitting Anti-CLS (`App.tsx` & `vite.config.ts`) & Verifikasi Produksi

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/App.css`
- Modify: `vite.config.ts`

**Step 1: Terapkan `React.lazy` berjangkar tetap di `src/App.tsx` + gaya placeholder di `src/App.css`**

1. Muat `InteractiveLabSection` dan `HistoricalGamesSection` dengan `React.lazy`.
2. Bungkus masing-masing dalam `<Suspense>` dengan *fallback section* yang mempertahankan `id="interactive-lab"` dan `id="permainan-sejarah"` serta `min-height: 480px` agar klik menu `Navbar` tidak pernah kehilangan target elemen.

**Step 2: Konfigurasi pemisahan *vendor chunk* di `vite.config.ts`**

Gunakan `build.rolldownOptions.output.codeSplitting` (atau `manualChunks` yang kompatibel dengan Vite 8 Rolldown) untuk memisahkan `react`/`react-dom` dan `lucide-react` dari *chunk* utama aplikasi.

**Step 3: Verifikasi produksi penuh (`tsc`, `oxlint`, `vite build`)**

Run: `npx tsc --noEmit && npm run lint && npm run build`  
Expected:
- `oxlint`: `Found 0 warnings and 0 errors.`
- `vite build`: Exit code `0`, setiap *chunk* JS `< 500 kB` (**0** peringatan ukuran *chunk*).

**Step 4: Commit Task 3**

```bash
git add src/App.tsx src/App.css vite.config.ts docs/plans/task.md
git commit -m "perf(bundle): code-split interactive lab, games, and vendor chunks"
```
