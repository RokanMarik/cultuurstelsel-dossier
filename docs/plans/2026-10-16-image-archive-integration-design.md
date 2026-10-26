# Desain Arsitektur & Integrasi Aset Gambar Sejarah Cultuurstelsel (1830–1870)

## 1. Ringkasan & Tujuan
Mengintegrasikan aset visual arsip sejarah otentik (*Public Domain*) ke dalam platform web Cultuurstelsel, dengan standardisasi tata letak yang bersih (*clean & minimal*), rasio aspek seragam (*uniform aspect ratio*), penanganan *fallback* yang aman, serta fitur interaktif modal pembesar (*Image Lightbox*) untuk mengkaji arsip dalam resolusi penuh beserta sumber sitasinya.

---

## 2. Struktur Data & Pengadaan Aset

### A. Lokasi Penyimpanan Aset Lokal
Semua aset gambar diunduh dari arsip publik resmi (*Wikimedia Commons, Nationaal Museum van Wereldculturen / Tropenmuseum, KITLV*) dan disimpan dalam folder:
`public/images/`

Daftar file utama:
1. **Tokoh Sejarah**:
   - `van-den-bosch.jpg`: Potret resmi Gubernur Jenderal Johannes van den Bosch
   - `multatuli.jpg`: Potret Eduard Douwes Dekker / sampul Max Havelaar
   - `baron-van-hoevell.jpg`: Potret Dr. Wolter Robert van Hoëvell
   - `fransen-van-de-putte.jpg`: Potret I.D. Fransen van de Putte
   - `van-hogendorp.jpg`: Potret Dirk van Hogendorp
2. **Komoditas & Industri**:
   - `komoditas-nila.jpg`: Litografi pabrik pengolahan pewarna tarum/nila abad ke-19
   - `komoditas-tebu.jpg`: Arsip pabrik gula tradisional dan angkutan tebu
   - `komoditas-kopi.jpg`: Petani dan perkebunan kopi Priangan
   - `komoditas-tembakau.jpg`: Pemrosesan dan penyortiran daun tembakau
3. **Konteks Sejarah & Dokumen**:
   - `perang-diponegoro.jpg`: Lukisan Perang Jawa (1825–1830) pemicu defisit fiskal
   - `staatsblad-1834.jpg`: Arsip naskah yuridis Staatsblad 1834 No. 22

### B. Skema Data Terpusat (`src/data/historyContent.ts`)
Antarmuka data gambar standar:
```typescript
export interface HistoricalImage {
  src: string;          // Path relatif aset, misal: '/images/multatuli.jpg'
  alt: string;          // Aksesibilitas dan deskripsi singkat
  caption: string;      // Keterangan konteks narasi gambar
  archiveSource: string;// Sitasi institusi arsip resmi (KITLV / Tropenmuseum / dsb)
}
```
Field `image?: HistoricalImage` ditambahkan secara opsional ke:
- `Commodity`
- `HistoricalCritic`
- `WarCrisis` / `Hero`
- `TimelineEvent`

---

## 3. Standardisasi Desain Visual & CSS (Clean & Uniform)

### A. Penyeragaman Ukuran (*Aspect-Ratio Locking*)
Untuk mengatasi perbedaan dimensi foto asli (vertikal, horizontal, persegi) agar tidak merusak keselarasan kartu (*grid alignment*):
1. **Kartu Komoditas (`ExploitationSection`)**:
   - Rasio aspek dikunci: `aspect-ratio: 16 / 9` (atau tinggi tetap 180px–200px).
   - Menempati bagian atas kartu dengan sudut lengkung membulat yang menyatu dengan bingkai kartu (*border-top-left-radius* & *border-top-right-radius*).
2. **Kartu Tokoh Oposisi (`ImpactSection`)**:
   - Rasio potret dikunci: `aspect-ratio: 1 / 1` (avatar bulat/persegi halus) atau rasio potret 4:5 terintegrasi di samping nama tokoh.
   - Menggunakan garis tepi minimalis (*subtle border*) senada dengan tema perkamen vintage modern.

### B. Pencegahan Distorsi (*No Stretching*)
Semua tag `<img>` dikonfigurasi dengan:
```css
object-fit: cover;
object-position: center 20%; /* Memastikan wajah atau titik fokus utama tetap tampak */
width: 100%;
height: 100%;
display: block;
```

### C. Fallback Handling
Jika gambar gagal dimuat atau belum tersedia, penanganan `onError` akan mengembalikan tampilan ke lencana ikon Lucide yang sudah ada tanpa menimbulkan celah kosong (*broken image icon*).

---

## 4. Komponen Interaktif: `ImageLightboxModal.tsx`

### A. Alur Interaksi
1. Pengunjung mengarahkan kursor ke gambar (muncul indikator visual *hover* kaca pembesar halus).
2. Pengunjung mengklik gambar.
3. State global/lokal `activeImage` diaktifkan dan `ImageLightboxModal` dirender.

### B. Spesifikasi Modal
- **Latar Belakang (*Backdrop*)**: Transparan gelap hangat dengan *backdrop-filter: blur(8px)*.
- **Tampilan Arsip Lengkap**: Menampilkan gambar asli dengan `object-fit: contain`, `max-height: 80vh`, dan `max-width: 90vw` sehingga arsip utuh dapat ditelaah tanpa terpotong.
- **Panel Metadata Keterangan**:
  - Judul / Nama tokoh / komoditas.
  - Narasi sejarah / peristiwa.
  - Atribusi sumber arsip ilmiah (*public domain*).
- **Kontrol Penutup**:
  - Tombol silang (X) di pojok kanan atas.
  - Tombol keyboard `Escape (ESC)`.
  - Klik di luar area gambar (*backdrop click*).

---

## 5. Verifikasi & Pengujian
- **Tampilan Grid & Keselarasan**: Memastikan semua kartu dalam baris yang sama memiliki tinggi identik.
- **Responsivitas**: Pengujian pada viewport *Mobile* (375px), *Tablet* (768px), dan *Desktop* (1280px).
- **Linter & Build**: Memastikan `oxlint` bebas dari *warning/error* dan `npm run build` berhasil 100%.
