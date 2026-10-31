# Desain Optimasi Kecepatan & Kuota HP (Zero-CLS Smart Split + Dual-Tier WebP)

**Tanggal:** 31 Oktober 2026  
**Proyek:** Cultuurstelsel Dossier (1830–1870)  
**Pendekatan Terpilih:** Pendekatan 1 — *Zero-CLS Smart Split + Dual-Tier WebP*  

---

## 1. Masalah yang Diselesaikan

1. **Beban Gambar Awal Ekstrem (~10,2 MB)**: File `public/images/van-den-bosch.jpg` berukuran `7,65 MB` dimuat langsung pada avatar kecil di `Hero.tsx`, sementara 11 gambar arsip lainnya dimuat tanpa `loading="lazy"`.
2. **Bundle JavaScript Tunggal (`523,40 kB`)**: Seluruh komponen (termasuk Peta Kartografi SVG, Kalkulator Kolonial, dan Papan TTS/Kuis) dibundel menjadi satu file JS yang melampaui ambang peringatan Vite `500 kB`.

---

## 2. Spesifikasi Solusi

### 2.1 Pipeline Gambar WebP Dua Lapis
- Mengonversi seluruh 12 gambar `.jpg`/`.png` di `public/images/` ke format **`.webp` HD** (`max dimension 1400px`, `quality=82`, `method=6`) menggunakan Python `Pillow` (`ImageOps.exif_transpose` aktif).
- Membuat thumbnail khusus **`public/images/van-den-bosch-thumb.webp`** (`160×160px`, `quality=80`, ~5–8 KB) untuk avatar kecil di `Hero.tsx`.
- Menambahkan properti opsional `thumbSrc?: string` pada interface `HistoricalImage` di `src/data/historyContent.ts` dan memperbarui seluruh path gambar dari `.jpg`/`.png` menjadi `.webp`, serta menghapus file `.jpg`/`.png` raksasa yang lama.

### 2.2 Lazy-Loading & Pencegahan Layout Shift pada `<img>`
- `Hero.tsx`: Memakai `heroData.image.thumbSrc ?? heroData.image.src` dengan `width={46} height={46}` dan `decoding="async"`, sedangkan klik pembesaran tetap mengirim `heroData.image` (`van-den-bosch.webp` HD) ke `ImageLightboxModal`.
- `BackgroundSection.tsx`, `ExploitationSection.tsx`, dan `ImpactSection.tsx`: Menambahkan `loading="lazy" decoding="async"` pada seluruh elemen `<img>` di bawah lipatan layar serta dimensi eksplisit pada avatar.

### 2.3 Code-Splitting Anti-CLS (`App.tsx` & `vite.config.ts`)
- `App.tsx`: Memuat `InteractiveLabSection` dan `HistoricalGamesSection` secara dinamis dengan `React.lazy` + `<Suspense>`, menggunakan *fallback skeleton* ber-`id="interactive-lab"` dan `id="permainan-sejarah"` sehingga navigasi menu `Navbar` dan *scroll-spy* tidak kehilangan target jangkar.
- `vite.config.ts`: Memisahkan pustaka `react`/`react-dom` dan `lucide-react` menjadi *vendor chunks* tersendiri sehingga setiap *chunk* berada jauh di bawah `500 kB`.
