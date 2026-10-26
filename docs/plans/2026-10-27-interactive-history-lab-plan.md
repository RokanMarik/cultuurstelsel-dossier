# Interactive History Laboratory Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Membangun modul *Interactive History Laboratory* (Laboratorium Sejarah Interaktif) yang berisi Peta Kartografi Antik SVG dengan filter layer, Kalkulator Kurs Gulden & Simulator Beban Petani, serta Simulasi Dilema Sejarah berbasis peran.

**Architecture:** Modul terpadu `InteractiveLabSection.tsx` berbasis tab switcher internal (`map` | `calculator` | `dilemma`). Seluruh dataset spasial, rasio konversi historis, dan skenario dilema didefinisikan secara terstruktur dan type-safe di `historyContent.ts`. Desain bergaya *vintage archival* dengan palet perkamen, emas kuningan, dan stempel kolonial.

**Tech Stack:** React 19, TypeScript, Lucide React, Pure Vanilla CSS tokens, Vite 8.

---

### Task 1: Susun Schema, Type Definitions, & Dataset di `src/data/historyContent.ts`

**Files:**
- Modify: `src/data/historyContent.ts`

**Step 1: Definisikan Types Baru**
Tambahkan types untuk `SpatialMarker`, `RailwayLine`, `CurrencyBenchmark`, `UnitConversion`, `FarmerSimulationResult`, `DilemmaChoice`, dan `HistoricalDilemmaScenario`.

**Step 2: Susun Dataset Lengkap**
Kompilasikan data valid:
- `spatialMarkersData`: 10+ titik (Priangan, Cirebon, Pekalongan, Demak, Grobogan, Pasuruan, Kedu, Padang/Minangkabau, Minahasa, Ambon).
- `railwayLinesData`: Jalur Batavia–Buitenzorg (1873), Semarang–Vorstenlanden (1867–1872), Surabaya–Pasuruan (1878).
- `currencyConversionBenchmarks`: Benchmark daya beli beras & komparasi nominal penting (f. 2,11 vs f. 90.000 vs f. 690jt).
- `unitConversionData`: Bouw, Pikul, Pon, Cacah.
- `historicalDilemmasData`: 3 skenario peran (Kepala Desa Cirebon 1845, Bupati Priangan 1840, Anggota Parlemen Liberal 1860).

**Step 3: Verifikasi Kompilasi TypeScript**
Run: `npm run build`
Expected: Exit code 0 tanpa type error.

---

### Task 2: Implementasi Tab 1 - Peta Kartografi Antik SVG Interaktif

**Files:**
- Modify: `src/components/InteractiveLabSection.tsx`
- Modify: `src/components/InteractiveLabSection.css`

**Step 1: Buat Visualisasi Vektor SVG Peta Jawa & Nusantara**
Susun elemen `<svg viewBox="0 0 1000 450">` dengan kontur pulau Jawa, garis grid koordinat kartografi vintage, elemen kompas angin, dan marker koordinat proporsional.

**Step 2: Implementasi Filter Lapisan (Layer Toggles)**
State `mapFilter: 'all' | 'commodity' | 'railway' | 'famine' | 'resistance'`.
Marker disaring dinamis sesuai filter yang dipilih.

**Step 3: Implementasi Panel Inspeksi Samping**
Saat marker diklik, panel di samping peta merender informasi rinci: Nama karesidenan, tahun, komoditas/peristiwa, kutipan arsip, dan catatan kebijakan Van den Bosch.

**Step 4: Verifikasi Build & Lint**
Run: `npm run lint && npm run build`
Expected: Exit code 0.

---

### Task 3: Implementasi Tab 2 - Kalkulator & Simulator Kolonial

**Files:**
- Modify: `src/components/InteractiveLabSection.tsx`
- Modify: `src/components/InteractiveLabSection.css`

**Step 1: Sub-Alat 1 - Konverter Kurs Gulden $\leftrightarrow$ IDR 2026**
Input interaktif dengan tombol preset cepat (*Upah Petani f. 2,11*, *Bonus Bupati f. 90.000*, *Batig Slot f. 690jt*). Menghitung nominal rupiah modern dan narasi daya beli beras/emas.

**Step 2: Sub-Alat 2 - Konverter Satuan Tradisional**
Kalkulator dua arah: Bouw ke Hektar/$m^2$, Pikul ke Kg, Pon ke Gram, Cacah ke Jiwa.

**Step 3: Sub-Alat 3 - Simulator Beban Petani (Jan Breman Metric)**
Slider luas lahan (0,2 - 2,0 Bouw) dan radio selector komoditas (Kopi, Tebu, Nila). Menghitung estimasi hari kerja riil vs 66 hari legal, nilai hasil panen wajib, pajak tanah *landrent*, dan peringatan defisit "Nombok Pajak".

**Step 4: Verifikasi Build & Lint**
Run: `npm run lint && npm run build`
Expected: Exit code 0.

---

### Task 4: Implementasi Tab 3 - Simulasi Skenario Dilema Sejarah

**Files:**
- Modify: `src/components/InteractiveLabSection.tsx`
- Modify: `src/components/InteractiveLabSection.css`

**Step 1: Komponen Pemilihan Skenario**
Kartu pratinjau 3 peran: Kepala Desa Cirebon 1845, Bupati Priangan 1840, dan Anggota Parlemen 1860.

**Step 2: Alur Keputusan & Meteran Indikator**
Menampilkan narasi situasi sejarah dan 3 opsi tindakan. Saat opsi dipilih, visualisasi meteran bar (*Kesejahteraan Rakyat, Tekanan Kolonial, Stabilitas*) bergerak dinamis disertai penjelasan dampak langsung.

**Step 3: Epilog Arsip Sejarah Asli (*Historical Epilogue*)**
Menampilkan catatan sejarah otentik mengenai apa yang sebenarnya terjadi di masa itu dan sumber arsip rujukannya.

**Step 4: Verifikasi Build & Lint**
Run: `npm run lint && npm run build`
Expected: Exit code 0.

---

### Task 5: Integrasi Komponen ke `App.tsx`, `Navbar.tsx`, `Hero.tsx` & Styling Sempurna

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/InteractiveLabSection.css`

**Step 1: Pasang `InteractiveLabSection` di `App.tsx`**
Letakkan section sebelum `BibliographySection` dengan `id="interactive-lab"`.

**Step 2: Update Navigasi di `Navbar.tsx` & `Hero.tsx`**
Tambahkan tautan navigasi dan tombol pintas cepat menuju `#interactive-lab`.

**Step 3: Finishing Desain CSS Tokens & Responsivitas Ponsel**
Atur responsive breakpoint untuk tampilan peta SVG dan panel kalkulator pada layar mobile (<768px).

**Step 4: Verifikasi Build & Lint**
Run: `npm run lint && npm run build`
Expected: Exit code 0.

---

### Task 6: Verifikasi Akhir, Live Browser Testing & Push ke GitHub

**Files:**
- Modify: `docs/plans/task.md`

**Step 1: Verifikasi Kode & Build**
Run: `npm run lint && npm run build`
Expected: 0 lint errors, exit code 0.

**Step 2: Uji Interaktivitas Live Browser**
Buka browser untuk mencoba pergantian 3 tab, klik marker peta, pengetikan nilai kalkulator, dan eksekusi skenario dilema.

**Step 3: Update `docs/plans/task.md` & Git Commit + Push**
Perbarui checklist di `docs/plans/task.md`, lakukan commit dan `git push origin main`.
