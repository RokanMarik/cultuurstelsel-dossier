# Desain Fitur: Pojok Asah Otak Sejarah ("Javasche Courant — TTS & Kuis Satir")

**Tanggal:** 31 Oktober 2026  
**Proyek:** Cultuurstelsel Dossier (1830–1870)  
**Pendekatan Terpilih:** Pendekatan 1 — *Dual-Tab Vintage Gazette Arcade*  

---

## 1. Tujuan & Nuansa Pengalaman (UX Vision)

Menghadirkan ruang evaluasi interaktif yang menghibur, cerdas, dan jenaka (**Satir Sejarah & Koran Kolonial Jadul**) tepat sebelum bagian Daftar Pustaka agar mahasiswa/pembaca dapat menguji ingatan mereka terhadap materi Tanam Paksa tanpa terasa seperti ujian kaku. Antarmuka dirancang mengikuti pedoman **`ui-ux-pro-max`** agar sama-sama nyaman dimainkan menggunakan **jempol di HP (375px)**, **sentuhan di Tablet**, maupun **keyboard fisik di Laptop/Desktop**.

---

## 2. Arsitektur Komponen & Navigasi

- **Section Mandiri Baru (`#permainan-sejarah`)**:
  - File komponen: `src/components/HistoricalGamesSection.tsx` & `src/components/HistoricalGamesSection.css`.
  - File data terpisah: `src/data/gamesContent.ts` (berisi definisi tipe TypeScript, matriks tervalidasi TTS `11 × 12`, petunjuk & reaksi satir, 8 soal Kuis Komisi Hindia, serta daftar pangkat piagam skor).
  - Urutan di `src/App.tsx`: Ditempatkan sebagai **Bagian VII** setelah `InteractiveLabSection` (Bagian VI) dan sebelum `BibliographySection` (yang diperbarui labelnya menjadi **Bagian VIII**).
- **Integrasi Navigasi**:
  - `src/components/Navbar.tsx`: Menambahkan item menu `TTS & Kuis` (`#permainan-sejarah`) pada menu desktop dan *mobile drawer*.
  - `src/components/Hero.tsx` & `src/data/historyContent.ts`: Menambahkan *pill* pintasan cepat `"TTS & Kuis Satir"` dengan ikon `Gamepad2` / `Puzzle`.

---

## 3. Spesifikasi Tab 1: Teka-Teki Silang "Silang Kata Batavia"

### 3.1 Matriks Grid Tervalidasi (`11 Baris × 12 Kolom`, 10 Kata Bersilangan)
 Seluruh kata saling terhubung dalam satu jaringan tanpa tabrakan huruf berdampingan yang tidak sah:

| No. | Arah | Koordinat `(baris, kolom)` | Jawaban | Panjang | Persilangan Kunci |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **1** | Mendatar | `(0, 4)` | `BREMAN` | 6 | Bersilang dengan `MULTATULI` di `(0,7) = M` |
| **2** | Menurun | `(0, 7)` | `MULTATULI` | 9 | Bersilang dengan `BREMAN`, `BATIGSLOT`, `LEBAK` |
| **3** | Mendatar | `(2, 1)` | `BATIGSLOT` | 9 | Bersilang dengan `BOSCH` di `(2,1) = B` & `MULTATULI` di `(2,7) = L` |
| **3** | Menurun | `(2, 1)` | `BOSCH` | 5 | Berbagi nomor kotak `3` dengan `BATIGSLOT`, bersilang `CACAH` di `(5,1) = C` |
| **4** | Menurun | `(4, 4)` | `PAJAK` | 5 | Bersilang dengan `CACAH` di `(5,4) = A` & `DEMAK` di `(8,4) = K` |
| **5** | Menurun | `(4, 10)` | `NILA` | 4 | Bersilang dengan `LEBAK` di `(7,10) = A` |
| **6** | Mendatar | `(5, 1)` | `CACAH` | 5 | Bersilang dengan `BOSCH` & `PAJAK` |
| **7** | Mendatar | `(7, 7)` | `LEBAK` | 5 | Bersilang dengan `MULTATULI`, `NILA`, & `KOPI` |
| **8** | Menurun | `(7, 11)` | `KOPI` | 4 | Bersilang dengan `LEBAK` di `(7,11) = K` |
| **9** | Mendatar | `(8, 0)` | `DEMAK` | 5 | Bersilang dengan `PAJAK` di `(8,4) = K` |

### 3.2 Ergonomi Input Multi-Perangkat
- **Desktop / Laptop**:
  - Layout 2 kolom: Papan Grid di kiri, Daftar Petunjuk (*5 Mendatar* & *5 Menurun*) di kanan.
  - Ketik langsung keyboard fisik (`A–Z` otomatis melompat ke sel berikutnya pada kata aktif, `Backspace` menghapus & mundur, `ArrowUp/Down/Left/Right` berpindah sel, `Space` atau klik ulang sel yang sedang aktif membalik arah *Mendatar ⇄ Menurun*).
- **HP & Tablet (`<= 900px`)**:
  - **Active Clue Banner** tepat di atas papan: menampilkan nomor, arah, teks petunjuk jenaka kata aktif, serta tombol `<` dan `>` untuk berpindah antar-soal dengan satu ketukan.
  - **Keyboard Mesin Ketik Antik Mini (`QWERTY` + `⌫ Hapus` + `⇄ Putar Arah`)** di bawah papan: menggunakan elemen `<button type="button">` (bukan `<input>` teks OS) agar keyboard virtual bawaan HP **tidak muncul menutupi papan** dan *viewport* tidak mengalami *auto-zoom* atau loncat.

### 3.3 Bantuan, Validasi, & Reaksi Satir
- **Auto-Lock Kata Benar**: Saat seluruh huruf pada suatu kata terisi tepat, sel kata tersebut berubah ke aksen hijau verdigris lembut (`--accent-verdigris`) dan memunculkan balon celetukan satir khas surat kabar kolonial.
- **Bisikan Residen (Hint)**: Maksimal 3 kali per sesi permainan untuk membuka 1 huruf yang belum benar pada sel aktif.
- **Cek Huruf & Ulangi Papan**: Tombol *Cek Huruf* memberi penanda merah tipis sementara pada huruf yang keliru; tombol *Ulangi* mengosongkan papan kembali.
- **Banner Tamat 100%**: Saat ke-10 kata terpecahkan, muncul ucapan selamat bergaya tajuk utama koran Batavia beserta tombol langsung menuju Tab Kuis.

---

## 4. Spesifikasi Tab 2: Kuis Cepat "Sidang Komisi Hindia"

### 4.1 Struktur 8 Soal Interaktif
- **5 Soal Pilihan Ganda Satir** (4 pilihan jawaban) & **3 Soal Stempel Cepat** (*"Janji Manis Staatsblad"* vs *"Realita Pahit Lapangan"*).
- Topik mencakup: aturan *Staatsblad 1834 No. 22*, bonus *cultuurprocenten*, beban kerja riset Jan Breman (2014), kelaparan Cirebon & Demak-Grobogan, *batig slot*, serta gugatan *Max Havelaar* & Baron van Hoëvell.

### 4.2 Sistem Skor, Streak Api 🔥, & Balon Reaksi
- Jawaban benar dasar bernilai `+100 poin` + bonus *streak* (`+25 × streak`).
- Setiap kali pengguna memilih opsi, tombol jawaban terkunci, jawaban benar ditandai hijau, dan langsung tampil:
  1. **Balon Celetukan Jenaka** (berbeda untuk kondisi benar vs salah).
  2. **Kotak Fakta Arsip** (ringkasan ilmiah singkat beserta sumber sejarahnya).
  3. Tombol lanjut ke soal berikutnya.

### 4.3 Kartu Piagam Pangkat Kolonial (Layar Akhir)
Menampilkan skor total, persentase akurasi, rekor *streak* tertinggi, dan **Gelar Pangkat Kocak**:
1. **85–100%**: *Sahabat Karib Multatuli & Pengguncang Tweede Kamer*
2. **65–84%**: *Juru Audit Rahasia Arsip Batavia*
3. **40–64%**: *Mandor Kebun Kopi Kurang Begadang*
4. **0–39%**: *Korban Gocekan Brosur Manis Van den Bosch*

Dilengkapi tombol **"Salin Piagam Skor"** (`navigator.clipboard.writeText`) dan **"Ulangi Sidang"**.

---

## 5. Persistensi Aman, Error Handling, & Standar Aksesibilitas

- **`localStorage` dengan Fallback Aman**: State papan TTS (`cultuurstelsel_tts_v1`) dan skor tertinggi kuis (`cultuurstelsel_quiz_best_v1`) dibungkus `try/catch` agar tetap berjalan normal meskipun mode *Incognito/Private* memblokir penyimpanan.
- **Aksesibilitas (`ui-ux-pro-max`)**:
  - Seluruh tombol interaktif di luar papan padat memenuhi target sentuh ramah jari, tombol keyboard mini memiliki tinggi minimal `42px–44px` dengan jarak aman antar-tombol.
  - Sel TTS menggunakan `role="gridcell"`, `tabIndex` terkelola (*roving tabindex*), dan label `aria-label` deskriptif (nomor soal, baris/kolom, huruf saat ini).
  - Pengumuman status benar/salah menggunakan `aria-live="polite"`.
  - Seluruh transisi menghormati `@media (prefers-reduced-motion: reduce)`.
