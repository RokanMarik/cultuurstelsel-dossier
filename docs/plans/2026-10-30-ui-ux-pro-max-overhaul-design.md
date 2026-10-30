# Desain Perombakan UI/UX Lintas Perangkat (UI/UX Pro Max Overhaul) — Cultuurstelsel Dossier

**Tanggal:** 2026-10-30  
**Pendekatan Terpilih:** Pendekatan 1 — Unified Fluid Design System + Adaptive Component Primitives  
**Gaya Visual:** Editorial Archival Modern (Warm Colonial Parchment + Fluid Magazine Readability)

---

## 1. Tujuan & Kriteria Keberhasilan
1. **Kenyamanan Membaca di Semua Perangkat**: Nyaman dibaca berlama-lama di HP (360px–430px), Tablet (768px–1024px), Laptop (1280px–1440px), hingga Monitor Lebar (2K/4K) dengan skala tipografi `clamp()` dan batas panjang baris optimal (`65ch–70ch`).
2. **Nol Horizontal Overflow Liar**: Seluruh grid menggunakan `minmax(min(100%, ...), 1fr)` dan padding dalam kartu menggunakan `clamp()` agar tidak ada elemen yang terpotong di layar sempit.
3. **Ergonomi Sentuh & Navigasi Satu Tangan (`>= 44x44px`)**: Menghadirkan *Mobile Bottom Quick-Jump Dock* dan *Swipeable Horizontal Pill Tabs* agar pengguna HP tidak perlu menggulir deretan tombol vertikal yang panjang.
4. **Penyajian Data & Peta Adaptif**: Keempat tabel perbandingan besar otomatis berubah menjadi kartu perbandingan terstruktur (*Responsive Adaptive Cards*) di layar HP (`< 768px`), serta peta SVG dilengkapi *Quick-Select Location Chips* dan kontrol *Zoom (`1x`, `1.5x`, `2x`)*.

---

## 2. Arsitektur Design System (`src/index.css`)

### 2.1 Kelengkapan Variabel Token `:root`
Menambahkan variabel yang sebelumnya belum terdefinisi di `:root`:
- `--bg-parchment-card: #fdfbf7`
- `--border-medium: #cbbba0`
- `--shadow-card-hover: 0 12px 28px rgba(34, 28, 23, 0.14)`
- `--font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace`
- `--touch-target-min: 44px`
- `--reading-measure: 68ch`
- `--space-card: clamp(1.15rem, 3.5vw, 2.25rem)`
- `--space-section: clamp(3rem, 7vw, 5.5rem)`

### 2.2 Skala Tipografi Fluid & Editorial Readability
- **Judul Hero (`h1`)**: `clamp(2.15rem, 5.5vw, 4.25rem)`
- **Judul Bagian (`.section-title`)**: `clamp(1.6rem, 3.5vw, 2.35rem)`
- **Sub-Modul (`.sub-module-title`)**: `clamp(1.3rem, 2.5vw, 1.75rem)`
- **Teks Narasi (`.narrative-lead`, paragraf artikel)**: `font-size: clamp(0.95rem, 1.08vw, 1.0625rem)`, `line-height: 1.75`, `max-width: var(--reading-measure)`.
- **Editorial Drop-Cap**: Huruf pertama pada pengantar utama di `BackgroundSection` menggunakan `::first-letter` bergaya *Cinzel* emas/merah tua untuk memperkuat kesan naskah arsip.

---

## 3. Spesifikasi Komponen & Pola Interaksi

### 3.1 Navigasi Ganda & Sub-Tab (`Navbar.tsx`, Semua Bagian Bertab)
- **Header Atas**: Tinggi adaptif (`64px` di HP, `72px` di Desktop) dengan *Reading Progress Bar* di tepi atas.
- **Mobile Bottom Quick-Jump Dock (`< 900px`)**: Bar melayang di bagian bawah layar (`height: 60px + env(safe-area-inset-bottom)`) dengan 5 pintasan utama (*Latar*, *Eksploitasi*, *Kronik*, *Dampak*, *Lab*) + tombol *Pustaka/Menu* untuk navigasi satu jempol.
- **Swipeable Horizontal Pill Tabs**: Seluruh navigasi tab (`.dossier-tabs-nav`, `.commodity-tabs-nav`, `.impact-tab-switcher`, `.lab-tab-nav`) menggunakan `overflow-x: auto; scroll-snap-type: x mandatory; white-space: nowrap` di layar HP dengan tinggi minimal `44px`, menggantikan tumpukan tombol 100% lebar yang memakan ruang vertikal.

### 3.2 Tabel Data Adaptif (`ExploitationSection`, `ImplementationSection`, `ImpactSection`)
Pada layar `< 768px`, tabel dengan kelas `.adaptive-table` mengubah `thead` menjadi tersembunyi secara visual (`sr-only`) dan mengubah setiap `tr` menjadi kartu arsip mandiri (`.parchment-card`), di mana setiap `td` menampilkan label kolom dari atribut `data-label="..."` menggunakan `td::before`:
1. **Tabel VOC vs Cultuurstelsel**: Kartu per Aspek dengan komparasi berdampingan/bertumpuk antara Era VOC dan Cultuurstelsel.
2. **Tabel Statistik Makro & Komoditas Kultuurverslagen**: Kartu per Periode Tahun dengan rincian metrik yang jelas.
3. **Tabel 3 Karesidenan (Priangan, Cirebon, Pasuruan)**: Kartu per Dimensi dengan perbandingan ketiga karesidenan.
4. **Tabel Matriks 3 Lensa Sejarawan (Fasseur, Elson, Breman)**: Kartu per Dimensi Historiografi dengan rincian argumen ketiga sejarawan.

### 3.3 Peta Kartografi SVG & Laboratorium (`InteractiveLabSection.tsx`)
- **Quick-Select Location Chips**: Baris kapsul nama lokasi di atas kanvas peta yang dapat digeser dan ditekan untuk memilih titik karesidenan dengan mudah di layar HP.
- **Kontrol Zoom Peta (`1x`, `1.5x`, `2x` + Reset)**: Memungkinkan pengguna memperbesar peta SVG di layar HP/Tablet di dalam wadah yang dapat digeser (*scrollable viewport*).
- **Target Sentuh Pin SVG**: Menambahkan lingkaran area sentuh transparan (`r="18"`) pada setiap simpul lokasi di SVG agar mudah ditekan jari tanpa salah ketuk.

### 3.4 Timeline & Lightbox (`TimelineSection.tsx`, `ImageLightboxModal.tsx`)
- **Timeline**: Menambahkan tombol navigasi **← Peristiwa Sebelumnya** dan **Peristiwa Berikutnya →** pada kartu detail kronik serta *auto-scroll* simpul tahun aktif ke tengah lintasan horizontal.
- **Image Lightbox & Modal**: Menggunakan `max-height: 90dvh`, tombol tutup `44x44px` dengan kontras tinggi, dan tata letak keterangan gambar yang nyaman digulir di layar pendek.

---

## 4. Penanganan Error & Edge Cases
- **Layar Ekstra Sempit (`320px–360px`)**: Penggunaan `minmax(min(100%, 280px), 1fr)` mencegah grid meluber keluar wadah.
- **Safe Area & Ruang Bawah Mobile**: Penambahan `padding-bottom: 5rem` pada `Footer` di layar `< 900px` agar konten paling bawah tidak tertutup *Mobile Bottom Quick-Jump Dock*.
- **Aksesibilitas (`prefers-reduced-motion` & Keyboard)**: Seluruh transisi menghormati `prefers-reduced-motion: reduce`, dan perubahan tabel menjadi kartu tetap mempertahankan semantik tabel bagi *screen reader*.

---

## 5. Rencana Verifikasi & Pengujian
1. **Typecheck & Lint**: `npx tsc --noEmit` dan `npm run lint` (0 error, 0 warning).
2. **Production Build**: `npm run build` sukses dengan exit code 0.
3. **Uji Browser Multi-Viewport**: Pemeriksaan langsung di ukuran layar **Mobile (375×812)**, **Tablet (768×1024)**, dan **Desktop (1440×900)** untuk memastikan keterbacaan teks, fungsi tab, tabel adaptif, peta interaktif, dan ketiadaan *horizontal overflow*.
