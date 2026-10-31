# Pojok Asah Otak Sejarah (TTS & Kuis Satir) Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Membangun section mandiri interaktif **"Suplemen Akhir Pekan Batavia (TTS & Kuis Satir)"** (`#permainan-sejarah`) yang menyajikan Teka-Teki Silang 10 kata sejarah dan Kuis Satir 8 soal dengan UI/UX ergonomis di HP, Tablet, dan Laptop.

**Architecture:** Menggunakan pola *Dual-Tab Vintage Gazette Arcade* dengan dataset terpisah yang *strongly-typed* di `src/data/gamesContent.ts` dan komponen mandiri `src/components/HistoricalGamesSection.tsx` beserta stylesheet `HistoricalGamesSection.css`. Papan TTS `11 × 12` memakai manajemen fokus sel terkelola yang mendukung ketikan keyboard fisik di Laptop sekaligus *Active Clue Banner* + *Keyboard Mesin Ketik Antik Mini* berbasis `<button>` di HP agar keyboard bawaan OS tidak menutupi layar, dilengkapi penyimpanan progres aman di `localStorage`.

**Tech Stack:** React 19, TypeScript, Vite 8, Vanilla CSS Design Tokens (`src/index.css` & `src/App.css`), Lucide React Icons, Oxlint.

---

### Task 1: Dataset & Matriks Tervalidasi TTS + Kuis Satir (`src/data/gamesContent.ts`)

**Files:**
- Create: `src/data/gamesContent.ts`

**Step 1: Buat file `src/data/gamesContent.ts` berisi tipe data, 10 kata TTS tervalidasi (`11 × 12`), 8 soal Kuis Satir, dan 4 jenjang Piagam Pangkat**

Pastikan koordinat kesepuluh kata pada grid `11 baris × 12 kolom` persis mengikuti matriks bebas konflik berikut:
- `1 Mendatar` `(0, 4)`: `BREMAN` (6)
- `2 Menurun` `(0, 7)`: `MULTATULI` (9)
- `3 Mendatar` `(2, 1)`: `BATIGSLOT` (9)
- `3 Menurun` `(2, 1)`: `BOSCH` (5)
- `4 Menurun` `(4, 4)`: `PAJAK` (5)
- `5 Menurun` `(4, 10)`: `NILA` (4)
- `6 Mendatar` `(5, 1)`: `CACAH` (5)
- `7 Mendatar` `(7, 7)`: `LEBAK` (5)
- `8 Menurun` `(7, 11)`: `KOPI` (4)
- `9 Mendatar` `(8, 0)`: `DEMAK` (5)

Sertakan pada setiap entri `CrosswordWord`:
- `id`, `number`, `direction` (`'across' | 'down'`), `row`, `col`, `answer`, `clue` (petunjuk cerdas & menggelitik), `wittyNote` (celetukan satir saat kata berhasil dipecahkan).

Sertakan 8 entri `QuizQuestion`:
- 5 soal `multiple-choice` (4 opsi) dan 3 soal `stamp-verdict` (`"Janji Manis Staatsblad"` vs `"Realita Pahit Lapangan"`).
- Masing-masing memiliki `question`, `contextTag`, `options`, `correctIndex`, `funnyRightReaction`, `funnyWrongReaction`, `historicalFact`, dan `sourceRef`.

Sertakan 4 jenjang `QuizRankTier` (`minPct`: `85`, `65`, `40`, `0`) beserta gelar kocak, deskripsi satir, dan lencana teks.

**Step 2: Verifikasi kompilasi TypeScript dan integritas silang huruf**

Run: `npx tsc --noEmit`  
Expected: Exit code `0` tanpa error tipe.

**Step 3: Commit Task 1**

```bash
git add src/data/gamesContent.ts
git commit -m "feat(games): add validated 11x12 crossword and satirical quiz dataset"
```

---

### Task 2: Komponen Utama & Tab 1 Teka-Teki Silang (`src/components/HistoricalGamesSection.tsx`)

**Files:**
- Create: `src/components/HistoricalGamesSection.tsx`

**Step 1: Bangun kerangka section `#permainan-sejarah`, switcher tab, dan mesin interaktif TTS**

Implementasikan fitur-fitur berikut di `HistoricalGamesSection.tsx` (menggunakan referensi `@ui-ux-pro-max` untuk aksesibilitas fokus dan ergonomi sentuh):
- Header bergaya tajuk koran kolonial (`Bagian VI: Rubrik Hiburan & Asah Otak` — *"Suplemen Akhir Pekan Javasche Courant"*).
- Navigasi 2 tab menggunakan kelas global `.dossier-tabs-nav` & `.dossier-tab-btn`:
  1. `Teka-Teki Silang Batavia (10 Kata)`
  2. `Kuis Sidang Komisi Hindia (8 Soal)`
- **State & Logika Papan TTS (`11 × 12`)**:
  - Membangun peta sel aktif dari `crosswordWordsData` (menyimpan huruf jawaban, nomor pojok sel jika awal kata, daftar `wordIds` yang melintasi sel).
  - *Auto-save* isian pengguna & sisa *hint* (`max 3`) ke `localStorage` (`cultuurstelsel_tts_v1`) dengan `try/catch`.
  - Klik sel: memilih sel; jika diklik ulang pada sel persilangan, membalik arah `across ⇄ down`.
  - Input keyboard fisik (`onKeyDown` pada papan): huruf `A–Z` mengisi sel & maju otomatis ke sel berikutnya dalam kata aktif; `Backspace` menghapus isi sel (atau mundur 1 sel jika kosong); tombol `ArrowUp/Down/Left/Right` menggeser fokus sel aktif; `Space` membalik arah `across ⇄ down`.
  - **Active Clue Banner** di atas papan: menampilkan nomor + arah + teks petunjuk kata aktif, lengkap dengan tombol `<` (soal sebelumnya) dan `>` (soal berikutnya).
  - **Keyboard Mesin Ketik Antik Mini (`QWERTY` 3 baris + tombol `⇄ Arah` & `⌫ Hapus`)**: menggunakan `<button type="button">` sehingga di HP/Tablet pengguna dapat mengetik nyaman tanpa memicu keyboard virtual OS yang menutupi papan.
  - **Validasi & Reaksi Lucu**:
    - Kata yang seluruh hurufnya sudah tepat otomatis ditandai *solved* (hijau zamrud) dan memunculkan balon celetukan `wittyNote`.
    - Tombol **Bisikan Residen (`Hint`, maks 3x)**: mengisi 1 huruf benar pada sel aktif dan mengurangi kuota bantuan.
    - Tombol **Cek Huruf**: menandai sel berhuruf salah dengan aksen merah lembut hingga pengguna mengubahnya.
    - Tombol **Ulangi Papan**: mengosongkan isian untuk bermain dari awal.
    - Kartu selebrasi saat `10/10` kata selesai terpecahkan + tombol lanjut ke Tab Kuis.

**Step 2: Verifikasi TypeScript & Linter sementara**

Run: `npx tsc --noEmit && npm run lint`  
Expected: `0 warnings and 0 errors`.

---

### Task 3: Tab 2 Kuis Satir "Sidang Komisi Hindia" & Piagam Pangkat (`src/components/HistoricalGamesSection.tsx`)

**Files:**
- Modify: `src/components/HistoricalGamesSection.tsx`

**Step 1: Lengkapi Tab 2 dengan alur permainan Kuis Satir 8 soal, Streak Combo, dan Kartu Piagam Skor**

Tambahkan pada `HistoricalGamesSection.tsx`:
- Bar progres soal (`Soal X dari 8`), indikator **Skor**, **Streak Api 🔥**, dan **Rekor Terbaik** (`localStorage` key `cultuurstelsel_quiz_best_v1`).
- Tampilan kartu soal adaptif:
  - Untuk tipe `stamp-verdict`: 2 tombol cap stempel besar (*"📜 Janji Manis Staatsblad"* vs *"⛏️ Realita Pahit Lapangan"*).
  - Untuk tipe `multiple-choice`: 4 tombol opsi berlabel `A`, `B`, `C`, `D`.
- Panel umpan balik instan setelah memilih opsi:
  - Balon reaksi kocak (`funnyRightReaction` atau `funnyWrongReaction`) dengan `aria-live="polite"`.
  - Kotak **Catatan Arsip Sejarah** (`historicalFact` + `sourceRef`).
  - Tombol **Soal Berikutnya →** (atau **Lihat Piagam Pangkat →** pada soal ke-8).
- **Layar Akhir — Piagam Pangkat Kolonial**:
  - Menampilkan lencana gelar lucu sesuai persentase jawaban benar, total poin, akurasi (`X/8`), dan *streak* tertinggi.
  - Tombol **Salin Piagam Skor** (`navigator.clipboard.writeText` dengan umpan balik `"Piagam Tersalin!"`) dan tombol **Sidang Ulang (Main Lagi)**.

**Step 2: Verifikasi TypeScript & Oxlint**

Run: `npx tsc --noEmit && npm run lint`  
Expected: `0 warnings and 0 errors`.

**Step 3: Commit komponen `HistoricalGamesSection.tsx`**

```bash
git add src/components/HistoricalGamesSection.tsx
git commit -m "feat(games): implement interactive crossword puzzle and satirical quiz component"
```

---

### Task 4: Styling Koran Kolonial Antik & Responsivitas Multi-Viewport (`src/components/HistoricalGamesSection.css`)

**Files:**
- Create: `src/components/HistoricalGamesSection.css`

**Step 1: Buat stylesheet `HistoricalGamesSection.css` berbasis variabel desain global**

Pastikan seluruh aturan mengikuti token di `src/index.css` dan pedoman `@ui-ux-pro-max`:
- **Layout Papan TTS**:
  - Desktop (`> 960px`): Grid 2 kolom (`minmax(320px, 470px) 1fr`) — papan + kontrol + keyboard mini di kiri, daftar petunjuk *Mendatar* & *Menurun* di kanan.
  - Tablet & Mobile (`<= 960px`): 1 kolom terpusat; papan menggunakan `grid-template-columns: repeat(12, minmax(0, 1fr))` dengan `aspect-ratio: 1` per sel sehingga muat penuh di layar 375px (`~26px–28px` per sel) tanpa *horizontal scroll*.
  - Sel kosong/hitam diberi tekstur blok tinta arsip lembut; sel huruf aktif diberi cincin emas/merah tua tegas (`outline`/`box-shadow`), kata aktif diberi sorotan krem hangat, dan kata yang sudah benar diberi latar hijau verdigris lembut.
- **Keyboard Mesin Ketik Antik Mini**:
  - 3 baris tombol `QWERTY` bergaya tuts mesin ketik antik (`min-height: 42px`, border tegas, bayangan tekan taktil `transform: translateY(1px)`).
- **Kartu Kuis & Piagam Pangkat**:
  - Tombol opsi memiliki `min-height: 48px`, kontras tinggi, status benar (hijau verdigris) & salah (merah crimson) dilengkapi ikon, tidak hanya mengandalkan warna.
  - Desain Kartu Piagam berbingkai ornamen ganda khas sertifikat Hindia Belanda dengan tombol aksi ramah jempol di layar sempit.
- **Reduced Motion**:
  - Tambahkan blok `@media (prefers-reduced-motion: reduce)` untuk mematikan animasi membal bagi pengguna sensitif gerak.

**Step 2: Cek tidak ada variabel CSS yang belum terdefinisi & jalankan build awal**

Run: `npx tsc --noEmit && npm run lint`  
Expected: `0 warnings and 0 errors`.

**Step 3: Commit stylesheet `HistoricalGamesSection.css`**

```bash
git add src/components/HistoricalGamesSection.css
git commit -m "style(games): add responsive vintage gazette styling for crossword and quiz"
```

---

### Task 5: Integrasi ke Halaman Utama, Navigasi, & Verifikasi Produksi Penuh

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/data/historyContent.ts`
- Modify: `src/components/BibliographySection.tsx`

**Step 1: Hubungkan `HistoricalGamesSection` ke aplikasi & navigasi**

1. `src/App.tsx`: Import `HistoricalGamesSection` dan render tepat di bawah `<InteractiveLabSection />` dan di atas `<BibliographySection />`.
2. `src/components/Navbar.tsx`: Tambahkan `{ id: 'permainan-sejarah', label: 'TTS & Kuis' }` pada `navItems` sebelum `'pustaka'`.
3. `src/data/historyContent.ts` & `src/components/Hero.tsx`: Tambahkan pintasan `{ label: "TTS & Kuis Satir", targetId: "permainan-sejarah", icon: "gamepad" }` pada `heroData.quickShortcuts` dan dukung ikon `Gamepad2` di `getShortcutIcon` pada `Hero.tsx`.
4. `src/components/BibliographySection.tsx`: Perbarui teks `section-tag` dari `Bagian VI: Rujukan & Dokumen` menjadi `Bagian VII: Rujukan & Dokumen` agar urutan penomoran Romawi selaras dengan masuknya section baru `Bagian VI`.

**Step 2: Jalankan verifikasi penuh (`tsc`, `oxlint`, `vite build`, dan audit CSS variabel)**

Run: `npx tsc --noEmit; npm run lint; npm run build`  
Expected:
- `oxlint`: `Found 0 warnings and 0 errors.`
- `vite build`: `✓ built` dengan exit code `0`.

**Step 3: Commit integrasi akhir**

```bash
git add src/App.tsx src/components/Navbar.tsx src/components/Hero.tsx src/data/historyContent.ts src/components/BibliographySection.tsx docs/plans/task.md
git commit -m "feat(app): integrate TTS and satirical quiz section into main navigation and layout"
```
