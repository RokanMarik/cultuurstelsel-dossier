# Quick Search Lintas-Tab (`Ctrl+K`) & Perbaikan Audit Teknis Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Membangun fitur Pencarian Cepat Lintas-Tab (`Ctrl+K` / Katalog Indeks Arsip) & Deep-Linking URL, memulihkan dataset yang belum tampil (`laborStatistics`, `.detail` mekanisme, `outerJavaExpansion.overview`), menghapus duplikasi `prianganMonetizationData`, memperbaiki tipografi SVG peta (`Cinzel` -> `Spectral`/`JetBrains Mono`) & inline styles `TimelineModal`, serta menambahkan metadata OpenGraph dan stylesheet cetak `@media print`.

**Architecture:** Menggunakan Event Bus ringan berbasis `CustomEvent('monograph:navigate')` di `src/utils/monographNavigator.ts` dan indeks pencarian statis terstruktur di `src/data/searchIndex.ts` sehingga setiap bagian dan tab dapat dibuka otomatis tanpa *prop drilling* masif di `App.tsx`.

**Tech Stack:** React 19, TypeScript, Vite 8, Lucide React, Modular CSS (Curatorial Monograph Design System).

---

### Task 1: Event Bus Navigasi Lintas-Tab (`monographNavigator.ts`) & Indeks Pencarian (`searchIndex.ts`)

**Files:**
- Create: `src/utils/monographNavigator.ts`
- Create: `src/data/searchIndex.ts`

**Steps:**
1. Buat `src/utils/monographNavigator.ts` berisi `MonographNavigationTarget`, `navigateToMonographTarget()`, `parseHashNavigationTarget()`, dan konstanta event `MONOGRAPH_NAVIGATE_EVENT`.
2. Buat `src/data/searchIndex.ts` yang menghimpun ~95 entri pencarian langsung dari `src/data/historyContent.ts` beserta kata kunci populer untuk sesi tanya-jawab dosen.
3. Jalankan `npx tsc -b` untuk memastikan tipe data valid.

---

### Task 2: Komponen Modal Katalog Pencarian (`QuickSearchModal.tsx` & `.css`) & Integrasi `Navbar.tsx` / `App.tsx`

**Files:**
- Create: `src/components/QuickSearchModal.tsx`
- Create: `src/components/QuickSearchModal.css`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Navbar.css`
- Modify: `src/App.tsx`

**Steps:**
1. Buat `QuickSearchModal.tsx` dan `QuickSearchModal.css` sesuai spesifikasi `DESIGN.md` (0 nested cards, 0 side-tab >1px, 0 emoji, ≥12px font size, kontras WCAG AA+).
2. Tambahkan tombol **Cari (`Ctrl+K`)** di `Navbar.tsx` (desktop & mobile dock) serta pintasan global `Ctrl+K` / `Cmd+K` dan sinkronisasi URL hash awal di `App.tsx`.
3. Hubungkan listener `monograph:navigate` pada `ExploitationSection.tsx`, `TimelineSection.tsx`, `ImplementationSection.tsx`, `ImpactSection.tsx`, `InteractiveLabSection.tsx`, `HistoricalGamesSection.tsx`, dan `BibliographySection.tsx`.

---

### Task 3: Pemulihan Data Tercecer, Penghapusan Duplikasi, & Perbaikan Teknis Komponen

**Files:**
- Modify: `src/components/ExploitationSection.tsx`
- Modify: `src/components/ExploitationSection.css`
- Modify: `src/components/ImplementationSection.tsx`
- Modify: `src/components/ImplementationSection.css`
- Modify: `src/components/InteractiveLabSection.tsx`
- Modify: `src/components/TimelineModal.tsx`
- Modify: `src/components/TimelineSection.css`
- Modify: `src/components/Hero.tsx`

**Steps:**
1. Render 7 kartu `exploitationData.laborStatistics` di Tab 4 `ExploitationSection.tsx` dan tampilkan `.detail` pada 3 kartu mekanisme di Tab 3 `ExploitationSection.tsx`.
2. Tampilkan `exploitationData.outerJavaExpansion.overview` di Tab 3 `ImplementationSection.tsx`, serta hapus duplikasi 4 kartu `prianganMonetizationData` di Tab 4 `ImplementationSection.tsx` dan ganti dengan tautan rujukan silang interaktif ke Tab 5 (Laporan Van Rees 1867) di `ImpactSection.tsx`.
3. Ganti seluruh `fontFamily="Cinzel, serif"` di SVG peta `InteractiveLabSection.tsx` ke `JetBrains Mono, monospace` dan `Spectral, Georgia, serif`.
4. Pindahkan inline styles `TimelineModal.tsx` ke `TimelineSection.css` dan tambahkan `fetchPriority="high"` di `Hero.tsx`.

---

### Task 4: Metadata OpenGraph (`index.html`), Mode Cetak PDF (`src/index.css`), & Verifikasi Akhir (`impeccable detect`, `oxlint`, `vite build`)

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`
- Modify: `docs/plans/task.md`

**Steps:**
1. Tambahkan metadata OpenGraph (`og:title`, `og:description`, `og:type`, `og:image`, `twitter:card`) di `index.html`.
2. Tambahkan highlight class `.monograph-target-highlight` dan aturan `@media print` di `src/index.css`.
3. Jalankan `npx oxlint`, `npx tsc -b`, `npm run build`, dan `.agent/skills/impeccable/scripts/impeccable.cmd detect --json src` untuk memastikan 0 error dan 0 anti-pattern.

