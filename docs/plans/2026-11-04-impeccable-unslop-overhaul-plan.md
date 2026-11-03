# Impeccable × Unslop Monograph Overhaul Implementation Plan

> **For Antigravity:** REQUIRED SUB-SKILL: Use `executing-plans` to implement this plan task-by-task in single-flow mode.

**Goal:** Merombak antarmuka website monograf sejarah *Cultuurstelsel (1830–1870)* menjadi publikasi kuratorial setara Rijksmuseum/KITLV yang bebas dari jejak desain AI (`0 anti-patterns` pada `impeccable detect` kode & live DOM) sambil mempertahankan 100% materi sejarah dan fitur interaktif.

**Architecture:** Pembaruan berurutan dari lapisan fondasi token global (`index.html`, `src/index.css`, `src/App.css`), ke komposisi permukaan utama (`Navbar`, `Hero` Curatorial Split `7:5`, `Footer`), lalu Bab I–IV (`Background`, `Exploitation`, `Timeline`, `Implementation`), Bab V–VII & modul interaktif (`Impact`, `InteractiveLab`, `HistoricalGames`, `Bibliography`, `ImageLightboxModal`), dan ditutup dengan audit live DOM `impeccable detect` serta pembukuan sistem desain (`DESIGN.md` + `.impeccable/design.json`).

**Tech Stack:** React 19, TypeScript 5.9, Vite 7, Vanilla CSS Custom Properties, Lucide React (`strokeWidth={1.5}`), Impeccable CLI v4.8.0 (`v0.1.18` engine).

---

### Task 1 (`TASK-87`): Fondasi Token Global, Tipografi, & Primitif Monograf

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`
- Modify: `src/App.css`

**Steps:**
1. Ganti tautan Google Fonts di `index.html` dari `Playfair Display + Plus Jakarta Sans` menjadi `Spectral (ital,wght 400, 500, 600)`, `Source Sans 3 (wght 400, 500, 600)`, dan `JetBrains Mono (wght 400, 500)`; perbarui `theme-color` ke `#f4f4f2`.
2. Tulis ulang `src/index.css` dengan sistem token Kertas Kapas Mineral (`#f4f4f2`, `#ffffff`, `#eae9e5`, `#181816`), tinta kontras tinggi WCAG AA+ (`#171715`, `#3f3e3a`, `#5c5a54`, `#8f1d14`, `#6e4b0c`, `#1c3f5e`, `#1e4d38`), skala spasi 4px, kurva transisi `cubic-bezier(0.22, 1, 0.36, 1)`, kustomisasi browser (`::selection`, `:focus-visible`, scrollbar tipis), `text-wrap: pretty`, pembuka bab `.section-header` 2-kolom bergaris atas `1px` tanpa eyebrow/ornamen, tab `.dossier-tab-btn` datar bergaris indikator tanpa benturan `border-radius`, dan `.adaptive-table` tanpa `border-left: 4px`.
3. Rapikan `src/App.css` agar transisi antar-bab menggunakan ritme ruang dan garis `1px` halus tanpa pola titik/radial palsu.
4. Verifikasi cepat dengan `npx tsc -b`.

---

### Task 2 (`TASK-88`): Masthead Monograf, Hero *Rijksmuseum Curatorial Split*, & Kolofon Footer

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Navbar.css`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/Hero.css`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/Footer.css`

**Steps:**
1. Rombak `Navbar.tsx/.css` menjadi masthead monograf satu baris yang tenang, berlatar `#f4f4f2/92%`, garis bawah `1px solid var(--border-subtle)`, penanda judul singkat dan navigasi bab tanpa kapsul berkilau atau bobot `800`.
2. Rombak `Hero.tsx/.css` menjadi komposisi asimetris `7:5` (*Curatorial Split*):
   - Kolom kiri (`7fr`): atribusi akademik kalimat biasa (tanpa kapsul *eyebrow*), judul `Cultuurstelsel (1830–1870)` dalam `Spectral`, narasi pembuka `≤ 62ch`, grup tindakan (`Mulai Penelusuran` primer merah lak `#8f1d14` + `Garis Waktu (1830–1870)` sekunder berbingkai `1px`), serta pita Buku Besar 4 metrik fiskal-sosial dengan `tabular-nums` bersekat garis vertikal `1px` (tanpa lingkaran ikon).
   - Kolom kanan (`5fr`): Bingkai Pelat Lukisan Kuratorial dengan pemilih 3 pelat arsip utama (*Potret Johannes van den Bosch 1836* karya Raden Saleh, *Penangkapan Pangeran Diponegoro 1857*, dan *Perkebunan Kopi Priangan*), keterangan koleksi museum lengkap dengan provenans dan pemicu Lightbox.
   - Bawah lipatan: Pita terbuka 4 kolom *Intisari Empat Babak* yang dipisahkan oleh garis `1px` tanpa kotak-dalam-kotak dan tanpa duplikasi 8 pil pintasan `<Sparkles />`.
3. Rombak `Footer.tsx/.css` menjadi kolofon akademik bergaris atas `1px` tanpa ornamen berlian dan tanpa baris kata terpisah (*straggler*).
4. Jalankan `npx tsc -b` untuk memastikan kompilasi bersih.

---

### Task 3 (`TASK-89`): Overhaul Kuratorial Bab I–IV (`Background`, `Exploitation`, `Timeline`, `Implementation`)

**Files:**
- Modify: `src/components/BackgroundSection.tsx` & `src/components/BackgroundSection.css`
- Modify: `src/components/ExploitationSection.tsx` & `src/components/ExploitationSection.css`
- Modify: `src/components/TimelineSection.tsx`, `src/components/TimelineSection.css`, `src/components/TimelineModal.tsx`, & `src/components/TimelineModal.css`
- Modify: `src/components/ImplementationSection.tsx` & `src/components/ImplementationSection.css`

**Steps:**
1. Hapus seluruh `.section-tag`, `.ornament-divider`, *kicker* di atas heading (`.vandenbosch-badge-pill`, `.timeline-badge-pill`, dll.), dan ikon `<Sparkles />` (`ImplementationSection.tsx`); terapkan pola pembuka bab 2-kolom monograf.
2. Ratakan seluruh struktur `nested-cards` di `BackgroundSection`, `ExploitationSection`, dan `ImplementationSection` menjadi komposisi lembar tunggal dengan pemisah garis `1px` (`border-top`/`border-bottom`) dan latar tonal datar.
3. Hapus seluruh `border-left: 3px/4px/5px` (`side-tab`) dan `border-top/bottom` tebal pada elemen bersudut membulat (`border-accent-on-rounded`).
4. Perbaiki teks `"Tahun"` berukuran `10.4px` di `TimelineSection` menjadi `≥ 12px`, terapkan `tabular-nums` pada seluruh tahun, pasal *Staatsblad* 1834, gulden, pikul, dan persentase, serta pastikan seluruh teks emas/abu memenuhi kontras `≥ 4.5:1`.
5. Jalankan `npx tsc -b` untuk memastikan tipe dan JSX valid.

---

### Task 4 (`TASK-90`): Overhaul Kuratorial Bab V–VII & Modul Interaktif (`Impact`, `InteractiveLab`, `HistoricalGames`, `Bibliography`, `Lightbox`)

**Files:**
- Modify: `src/components/ImpactSection.tsx` & `src/components/ImpactSection.css`
- Modify: `src/components/InteractiveLabSection.tsx` & `src/components/InteractiveLabSection.css`
- Modify: `src/components/HistoricalGamesSection.tsx` & `src/components/HistoricalGamesSection.css`
- Modify: `src/components/BibliographySection.tsx` & `src/components/BibliographySection.css`
- Modify: `src/components/ImageLightboxModal.tsx` & `src/components/ImageLightboxModal.css`

**Steps:**
1. Hapus `.section-tag`, `.ornament-divider`, `.famine-badge`, `.quotes-badge-pill`, tumpukan ubin ikon `icon-tile-stack`, serta `<Sparkles />` di `HistoricalGamesSection.tsx` dan `BibliographySection.tsx`.
2. Ganti seluruh emoji mentah (`🌿`, `🌾`, `☕`, `⚠️`) di `InteractiveLabSection.tsx` dengan ikon `lucide-react` berskala `16px` (`strokeWidth={1.5}`).
3. Bersihkan seluruh `nested-cards`, `side-tab`, `border-accent-on-rounded`, `dark-glow` (bayangan berwarna di atas panel gelap), dan `repeating-stripes-gradient` di `ImpactSection.css`, `InteractiveLabSection.css`, `HistoricalGamesSection.css`, dan `BibliographySection.css` sambil menjaga Peta Vektor Geospasial Indonesia (`Nusantara <-> Jawa & Madura`), Kalkulator Kolonial, Simulator Dilema, TTS 11×12, Kuis Satir, dan Salin Sitasi APA berfungsi 100%.
4. Rapikan `ImageLightboxModal.tsx/.css` agar selaras dengan estetika ruang pamer arsip gelap tanpa efek glow neon.
5. Jalankan `npx tsc -b` dan `npm run lint`.

---

### Task 5 (`TASK-91`): Audit Detektor Live DOM, Pembukuan `DESIGN.md` + Sidecar, & Verifikasi Akhir

**Files:**
- Create: `DESIGN.md`
- Create: `.impeccable/design.json`
- Modify: `docs/plans/task.md`

**Steps:**
1. Jalankan `npm run lint` (`oxlint`), `npm run build` (`tsc -b && vite build`), dan `& ".agent/skills/impeccable/scripts/impeccable.cmd" detect src/`.
2. Nyalakan server pratinjau produksi (`npx vite preview --port 4177 --host 127.0.0.1`) dan jalankan `& ".agent/skills/impeccable/scripts/impeccable.cmd" detect http://127.0.0.1:4177` (termasuk pemeriksaan penuh anti-pattern dan advisory); perbaiki hingga **0 anti-patterns** tercapai pada kode maupun live DOM, lalu hentikan server pratinjau.
3. Dokumentasikan sistem desain ke `DESIGN.md` (frontmatter YAML token normatif + 8 bagian kanonis) dan `.impeccable/design.json` (`schemaVersion: 2` lengkap dengan komponen HTML/CSS mandiri dan narasi).
4. Jalankan ulang `npm run lint` dan `npm run build` sebagai gerbang verifikasi penutup, perbarui `docs/plans/task.md` dengan bukti konkret, dan laporkan hasilnya kepada pengguna.

