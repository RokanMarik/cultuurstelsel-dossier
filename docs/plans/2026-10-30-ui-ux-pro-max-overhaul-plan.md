# UI/UX Pro Max Cross-Device Overhaul Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Merombak secara menyeluruh UI dan UX Cultuurstelsel Dossier agar memiliki keterbacaan editorial kelas dunia, navigasi satu tangan yang ergonomis, tabel adaptif (kartu di HP, tabel di Laptop/Tablet), serta peta interaktif berfitur zoom & quick-select yang responsif sempurna di HP, Tablet, Laptop, dan Desktop.

**Architecture:** Menggunakan pendekatan *Unified Fluid Design System + Adaptive Component Primitives* berlandaskan pedoman `@ui-ux-pro-max`. Fondasi token CSS di `src/index.css` dilengkapi (termasuk alias variabel yang sebelumnya belum terdefinisi, skala tipografi `clamp()`, ukuran sentuh minimum `44px`, dan gaya global `.adaptive-table` untuk layar `< 768px`), diikuti peningkatan komponen navigasi (`Navbar.tsx`), 4 komponen tabel data (`ExploitationSection.tsx`, `ImplementationSection.tsx`, `ImpactSection.tsx`), navigasi kronik (`TimelineSection.tsx`), serta kontrol peta (`InteractiveLabSection.tsx`).

**Tech Stack:** React 19, TypeScript, CSS3 Custom Properties & Fluid `clamp()`, Lucide React Icons, Vite.

---

### Task 1: Fondasi Global Design System, Token Lengkap, & Utilitas Tabel Adaptif (`src/index.css` & `src/App.css`)

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.css`

**Step 1: Perbarui `src/index.css` dengan token `:root` lengkap, tipografi fluid, `.adaptive-table`, dan styling kartu `.staatsblad-card` global**

Tambahkan pada `:root` di `src/index.css`:
```css
  /* Extended Archival Surface & Alias Tokens */
  --bg-parchment-card: #fdfbf7;
  --border-medium: #cbbba0;
  --shadow-card-hover: 0 12px 28px rgba(34, 28, 23, 0.14);
  --font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;

  /* Compatibility aliases for inline styles */
  --color-gold: #b38228;
  --color-amber: #c88a22;
  --color-parchment-dark: #221c17;
  --color-ink-dark: #221c17;
  --color-ink-medium: #4a3e35;
  --color-ink-light: #75685d;

  /* Fluid Spacing & Ergonomics */
  --touch-target-min: 44px;
  --reading-measure: 68ch;
  --space-card: clamp(1.15rem, 3.5vw, 2.25rem);
  --space-section: clamp(3rem, 7vw, 5.5rem);
```

Serta tambahkan aturan global untuk:
- Skala fluid `.section-title` (`clamp(1.6rem, 3.5vw, 2.35rem)`), `.sub-module-title` (`clamp(1.3rem, 2.5vw, 1.75rem)`), dan `.parchment-card` (`padding: var(--space-card)`).
- Kelas `.badge-red` dan `.badge-amber` serta `.staatsblad-cards-grid`, `.staatsblad-card`, `.subsection-heading`, `.outer-regions-grid` yang digunakan lintas seksi.
- Sistem `.adaptive-table` yang pada `@media (max-width: 768px)` mengubah baris `<tr>` menjadi kartu vertikal dengan label `td::before { content: attr(data-label); }`.
- Sistem `.dossier-tabs-nav` horizontal swipeable (`overflow-x: auto; scroll-snap-type: x mandatory`) agar tab tidak menumpuk vertikal di HP.

**Step 2: Jalankan verifikasi build & typecheck**

Run: `npx tsc --noEmit`
Expected: Exit code 0 tanpa error.

---

### Task 2: Navigasi Ganda (Mobile Bottom Quick-Jump Dock) & Hero Responsif (`Navbar.tsx`, `Navbar.css`, `Hero.css`, `Footer.css`)

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Navbar.css`
- Modify: `src/components/Hero.css`
- Modify: `src/components/Footer.css`

**Step 1: Tambahkan Mobile Bottom Quick-Jump Dock di `src/components/Navbar.tsx` & `Navbar.css`**

Tambahkan `<nav className="mobile-bottom-dock" aria-label="Navigasi Cepat Bab">` di bagian bawah `Navbar.tsx` yang menampilkan 5 pintasan utama (*Latar*, *Eksploitasi*, *Kronik*, *Dampak*, *Lab*) plus tombol *Menu* dengan tinggi target sentuh `>= 48px` dan dukungan `env(safe-area-inset-bottom)`.

**Step 2: Optimalkan `Hero.css` & `Footer.css` untuk layar HP, Tablet, dan Laptop**

- Di `Hero.css`: Gunakan fluid padding `var(--space-card)` pada `.hero-overview-card` dan `.quick-summary-box`, pastikan `.shortcut-pill-btn` dan `.btn` memiliki `min-height: 44px`, dan atur `.hero-highlights-grid` menjadi 2 kolom ringkas di layar HP (`480px–768px`) dan 1 kolom di `< 380px`.
- Di `Footer.css`: Tambahkan `padding-bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px))` pada `@media (max-width: 900px)` agar footer tidak tertutup oleh *Mobile Bottom Quick-Jump Dock*.

**Step 3: Verifikasi dengan linter & typecheck**

Run: `npm run lint`
Expected: `Found 0 warnings and 0 errors`.

---

### Task 3: Perombakan Editorial `BackgroundSection` & Tabel Adaptif `ExploitationSection`

**Files:**
- Modify: `src/components/BackgroundSection.css`
- Modify: `src/components/ExploitationSection.tsx`
- Modify: `src/components/ExploitationSection.css`

**Step 1: Sempurnakan `BackgroundSection.css` dengan Editorial Drop-Cap & Fluid Card Padding**

- Tambahkan efek *archival drop-cap* (`::first-letter`) pada `.narrative-lead`.
- Ganti padding statis `2.5rem` pada `.vandenbosch-container` dan `.farmer-life-container` dengan `var(--space-card)` agar ruang baca lega di layar HP.
- Pastikan `.farmer-aspects-grid` menggunakan `minmax(min(100%, 260px), 1fr)`.

**Step 2: Tambahkan atribut `data-label` dan kelas `adaptive-table` pada 4 tabel di `ExploitationSection.tsx` serta perbarui `ExploitationSection.css`**

- Pada tabel VOC vs Cultuurstelsel, tabel rincian Batig Slot, tabel Populasi Makro, dan tabel Produksi Komoditas (Kopi/Tebu/Nila), tambahkan kelas `adaptive-table` dan atribut `data-label` pada setiap `<td>`.
- Di `ExploitationSection.css`: Ubah `.dossier-tabs-nav` dan `.commodity-tabs-nav` serta `.crop-table-selector-nav` menjadi *horizontal swipeable pills* di HP (`flex-wrap: nowrap; overflow-x: auto`), dan ubah `.breman-critique-grid` menjadi `grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr))`.

**Step 3: Verifikasi dengan linter & typecheck**

Run: `npx tsc --noEmit && npm run lint`
Expected: 0 warnings, 0 errors.

---

### Task 4: Perombakan `TimelineSection`, `ImplementationSection`, `ImpactSection`, `BibliographySection`, & `ImageLightboxModal`

**Files:**
- Modify: `src/components/TimelineSection.tsx`
- Modify: `src/components/TimelineSection.css`
- Modify: `src/components/ImplementationSection.tsx`
- Modify: `src/components/ImplementationSection.css`
- Modify: `src/components/ImpactSection.tsx`
- Modify: `src/components/ImpactSection.css`
- Modify: `src/components/BibliographySection.css`
- Modify: `src/components/ImageLightboxModal.css`

**Step 1: Tambahkan navigasi Sebelumnya/Berikutnya & auto-scroll simpul tahun di `TimelineSection.tsx` & `TimelineSection.css`**

- Tambahkan tombol **← Sebelumnya** dan **Berikutnya →** di bagian atas/bawah `.featured-timeline-card` agar pengguna HP dapat menelusuri kronik 1830–1915 secara berurutan dengan mudah.

**Step 2: Tambahkan `adaptive-table` & `data-label` di `ImplementationSection.tsx` dan `ImpactSection.tsx`**

- Tambahkan `adaptive-table` dan `data-label` pada tabel perbandingan 3 Karesidenan dan tabel Preangerstelsel di `ImplementationSection.tsx`.
- Tambahkan `adaptive-table` dan `data-label` pada tabel Sintesis 3 Sejarawan di `ImpactSection.tsx`.
- Perbaiki `.famine-cards-grid` dan `.critics-grid` di `ImpactSection.css` menggunakan `minmax(min(100%, 280px), 1fr)` dan padding adaptif `var(--space-card)` pada `.famine-cases-block`.
- Pastikan tombol tutup di `ImageLightboxModal.css` berukuran `44x44px` dan mendukung `max-height: 90dvh`.

**Step 3: Verifikasi dengan linter & typecheck**

Run: `npx tsc --noEmit && npm run lint`
Expected: 0 warnings, 0 errors.

---

### Task 5: Peningkatan Ergonomi Peta Kartografi SVG (Zoom + Quick-Select Chips) & Kalkulator di `InteractiveLabSection`

**Files:**
- Modify: `src/components/InteractiveLabSection.tsx`
- Modify: `src/components/InteractiveLabSection.css`

**Step 1: Tambahkan Kontrol Zoom (`1x`, `1.5x`, `2x`), Hit-Area Sentuh `r="18"`, dan Quick-Select Location Chips di `InteractiveLabSection.tsx`**

- Tambahkan state `mapZoom` (`1 | 1.5 | 2`) beserta kontrol tombol Zoom di header kanvas peta.
- Tambahkan baris `.map-quick-chips` yang berisi kapsul tombol untuk setiap `filteredMarkers` agar pengguna HP dapat memilih lokasi secara instan.
- Tambahkan `<circle r="18" fill="transparent" />` di dalam setiap `<g className="map-node">` agar titik lokasi di peta mudah disentuh jari di layar HP/Tablet.
- Ganti simbol LaTeX mentah `$\leftrightarrow$` pada judul kalkulator menjadi panah Unicode `⇄` agar tampil bersih di HTML.

**Step 2: Perbarui `InteractiveLabSection.css` untuk responsivitas peta, tab horizontal, dan simulator di HP & Tablet**

- Ubah `.lab-tab-nav` menjadi horizontal swipeable di layar sempit atau pill ergonomis `min-height: 44px`.
- Tambahkan styling `.map-viewport-scroll`, `.map-zoom-controls`, dan `.map-quick-chips`.

**Step 3: Verifikasi build & linter**

Run: `npx tsc --noEmit && npm run lint && npm run build`
Expected: Exit code 0.

---

### Task 6: Verifikasi Menyeluruh Multi-Viewport (Mobile, Tablet, Desktop) & Git Commit

**Files:**
- Modify: `docs/plans/task.md`

**Step 1: Jalankan pengujian kualitas kode penuh**

Run: `npm run lint && npm run build`
Expected: Oxlint 0 warnings/errors, Vite production build sukses.

**Step 2: Verifikasi visual & interaktif pada dev server**

Pastikan seluruh komponen (Navbar + Bottom Dock, Hero, Background, Exploitation, Timeline, Implementation, Impact, Interactive Lab, Bibliography, Lightbox) tampil rapi tanpa *horizontal overflow* di viewport Mobile, Tablet, dan Desktop.

**Step 3: Commit seluruh perubahan dan perbarui `docs/plans/task.md`**

