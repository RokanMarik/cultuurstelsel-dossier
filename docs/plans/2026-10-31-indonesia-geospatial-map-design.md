# Perombakan Peta Kartografi Geospasial Indonesia (Sabang–Merauke & Fokus Jawa–Madura) — Dokumen Desain

**Tanggal:** 31 Oktober 2026
**Status:** Disetujui User (`Brainstorming` selesai)
**Komponen Target:** `src/data/indonesiaGeoPaths.ts` (baru), `src/data/historyContent.ts`, `src/components/InteractiveLabSection.tsx`, `src/components/InteractiveLabSection.css`

---

## 1. Masalah yang Diselesaikan

Peta interaktif pada Tab 1 *Laboratorium Sejarah* (`InteractiveLabSection.tsx`) sebelumnya digambar menggunakan kurva Bezier karangan manual yang:
1. Tidak mencerminkan bentuk geografis Kepulauan Indonesia yang sebenarnya (Jawa lonjong lurus tanpa Teluk Banten, Semenanjung Muria, maupun Madura; Sumatera hanya tetesan kecil; Sulawesi hanya satu garis lengkung tanpa siluet huruf "K").
2. Menghilangkan pulau-pulau utama Nusantara (Kalimantan, Bangka-Belitung, Bali, Nusa Tenggara, Halmahera, Seram, dan Papua).
3. Merusak proporsi skala geografis antara Pulau Jawa dan pulau-pulau Indonesia lainnya.

## 2. Arsitektur Solusi (Pendekatan Terpilih: Modul Vektor GeoJSON Presisi + Kamera Ganda)

Tanpa menambah dependensi eksternal (`0 KB` paket baru di `package.json`), sistem peta dirombak menjadi modul kartografi berbasis koordinat bumi asli (**WGS84 Equirectangular Khatulistiwa**):

### A. Proyeksi Matematis Khatulistiwa (`src/data/indonesiaGeoPaths.ts`)
- **Domain Kanvas Penuh (`Seluruh Nusantara`)**:
  - Bujur (*Longitude*): `94.5° BT` s/d `141.5° BT` (rentang `47.0°`)
  - Lintang (*Latitude*): `6.5° LU` s/d `11.5° LS` (rentang `18.0°`)
  - Ukuran `viewBox` dasar: `1000 × 385` unit SVG (`rasio ~2.597:1`, distorsi khatulistiwa `cos(2.5°) = 0.999` atau `< 0.1%`).
  - Fungsi proyeksi murni:
    - `projectLon(lon) = ((lon - 94.5) / 47.0) * 1000`
    - `projectLat(lat) = ((6.5 - lat) / 18.0) * 385`
- **Jendela Kamera Fokus Jawa & Madura (`Fokus Jawa & Madura`)**:
  - Bujur: `104.8° BT` s/d `115.2° BT` (rentang `10.4°`, mencakup Selat Sunda/Lampung Selatan, seluruh Jawa, Selat Madura & Pulau Madura, hingga Selat Bali/Bali Barat).
  - Lintang: `4.95° LS` s/d `8.95° LS` (rentang `4.0°`, menjaga rasio proporsional `10.4 : 4.0 = 2.6 : 1` identik dengan kanvas utama sehingga transisi `viewBox` presisi tanpa distorsi aspek!).

### B. Tiga Lapisan Geometri Garis Pantai (*Natural Earth 1:10m High-Resolution*)
1. **Lapisan Utama Kepulauan Nusantara (`INDONESIA_ISLAND_PATHS`)**:
   - Mencakup poligon garis pantai asli Sumatera (+ Weh, Simeulue, Nias, Mentawai, Enggano, Batam/Bintan, Bangka, Belitung), Jawa & Madura (+ Kepulauan Seribu, Karimunjawa), Kalimantan (wilayah Indonesia), Sulawesi (+ Sangihe, Banggai, Buton, Muna, Selayar), Bali & Nusa Tenggara (Bali, Lombok, Sumbawa, Komodo, Flores, Solor-Alor, Sumba, Rote, Timor Barat), Kepulauan Maluku (Morotai, Halmahera, Ternate-Tidore, Bacan, Obi, Buru, Seram, Ambon-Lease, Banda, Kei, Aru, Tanimbar), serta Papua (+ Waigeo, Salawati, Misool, Biak, Yapen, Dolak).
2. **Detail Ekstra Pesisir Jawa & Madura (`JAVA_HIGH_RES_PATHS` / resolusi ekstra rapat)**:
   - Poligon Pulau Jawa & Madura disederhanakan menggunakan toleransi sangat rapat (`~0.012°`) sehingga saat kamera masuk mode *Fokus Jawa & Madura*, fitur geografis ikonik (Ujung Kulon, Teluk Banten, Teluk Jakarta, Tanjung Indramayu, Semenanjung Muria, Selat Madura, Segara Anakan Cilacap, dan Semenanjung Blambangan) tampil tajam setara atlas cetak.
3. **Lapisan Siluet Wilayah Tetangga (`NEIGHBOR_CONTEXT_PATHS` + `LAND_BORDER_PATHS`)**:
   - Menampilkan siluet tipis redup Semenanjung Malaya & Singapura, Kalimantan Utara (Serawak, Brunei, Sabah), Timor Portugis (Timor Leste), dan Papua Timur (Papua Nugini) lengkap dengan garis perbatasan darat putus-putus (`stroke-dasharray`), agar pulau Kalimantan, Timor, dan Papua tampak **utuh secara geografis** tanpa terlihat terpotong buntung.

### C. Ornamen Standar Atlas Resmi Tema Emas-Perkamen
- **Garis Khatulistiwa (`0° Equator / Linie`)** tegas berwarna emas antik disertai jaring derajat lintang (`5° LU`, `0°`, `5° LS`, `10° LS`) dan bujur (`100° BT`, `110° BT`, `120° BT`, `130° BT`, `140° BT`).
- **Label Perairan & Pulau**: Nama laut miring klasik (*Samudra Hindia, Laut Jawa, Selat Sunda, Selat Malaka, Selat Makassar, Laut Sulawesi, Laut Banda, Laut Arafuru*) serta label pulau besar (*Sumatera, Kalimantan, Sulawesi, Sunda Kecil, Maluku, Papua*).
- **Efek Pesisir (*Coastal Shallow Glow*)**, **Sabuk Gunung Api Jawa**, **Mawar Kompas Antik**, dan **Skala Bar Kilometer Dinamis** (`0–500 km` di mode Nusantara; `0–100 km` di mode Jawa & Madura).

---

## 3. Koordinat GPS Asli (`lat`, `lon`) & Sistem Kamera Interaktif

### A. Pembaruan Schema `SpatialMarker` & `RailwayLine` (`src/data/historyContent.ts`)
- Mengganti koordinat piksel statis `cx/cy` dengan koordinat GPS historis asli `lat` dan `lon`, atribut wilayah `regionGroup: 'jawa' | 'luar-jawa'`, dan arah penempatan teks `labelPos?: 'top' | 'bottom' | 'left' | 'right'`:
  1. `Batavia (Sunda Kelapa)`: `-6.13°, 106.81°` (`jawa`)
  2. `Priangan (Preanger)`: `-6.92°, 107.61°` (`jawa`)
  3. `Cirebon`: `-6.71°, 108.56°` (`jawa`)
  4. `Pekalongan`: `-6.89°, 109.68°` (`jawa`)
  5. `Kedu`: `-7.48°, 110.22°` (`jawa`)
  6. `Demak & Grobogan`: `-6.98°, 110.65°` (`jawa`)
  7. `Pasuruan`: `-7.65°, 112.91°` (`jawa`)
  8. `Minangkabau (Sumatera Barat)`: `-0.30°, 100.37°` (`luar-jawa`)
  9. `Lampung & Palembang (Lada Wajib)`: `-5.43°, 105.26°` (`luar-jawa`)
  10. `Bangka (Timah Kolonial)`: `-2.13°, 106.11°` (`luar-jawa`)
  11. `Minahasa (Sulawesi Utara)`: `1.48°, 124.84°` (`luar-jawa`)
  12. `Maluku (Ambon & Banda)`: `-3.70°, 128.18°` (`luar-jawa`)
- **Jalur Kereta Api Kolonial (`railwayLinesData`)** menggunakan array titik koordinat stasiun asli `coordinates: [number, number][]` (`[lon, lat]`):
  - *SS Batavia–Buitenzorg (1873)*: Batavia `(-6.13°, 106.81°)` → Depok `(-6.40°, 106.82°)` → Buitenzorg `(-6.60°, 106.80°)`
  - *NIS Semarang–Vorstenlanden (1867–1872)*: Semarang `(-6.96°, 110.42°)` → Kedungjati `(-7.17°, 110.63°)` → Solo `(-7.56°, 110.82°)` → Yogyakarta `(-7.79°, 110.37°)`
  - *SS Surabaya–Pasuruan–Probolinggo (1878)*: Surabaya `(-7.25°, 112.75°)` → Bangil `(-7.60°, 112.78°)` → Pasuruan `(-7.65°, 112.91°)` → Probolinggo `(-7.75°, 113.22°)`

### B. Interaksi Kamera Ganda & *Scale-Aware Rendering* (`InteractiveLabSection.tsx`)
1. **Sakelar Kamera Wilayah (`Seluruh Nusantara` vs `Fokus Jawa & Madura`)**:
   - Mode awal adalah **`Seluruh Nusantara`** sehingga pengunjung langsung disambut peta kepulauan Indonesia yang utuh dan akurat.
   - Di mode `Seluruh Nusantara`, daratan Pulau Jawa memiliki bingkai sorot tipis interaktif; mengeklik Pulau Jawa atau tombol **`Fokus Jawa & Madura`** memindahkan `viewBox` secara mulus ke jendela Pulau Jawa & Madura.
   - **Auto-Sync Cerdas**: Memilih *marker/chip* Luar Jawa saat berada di mode *Fokus Jawa* otomatis mengembalikan kamera ke *Seluruh Nusantara* agar titik yang dipilih langsung terlihat.
2. **Skala Pin & Teks Proporsional (`cameraScale`)**:
   - Faktor skala `k = 1.0` pada mode `Seluruh Nusantara` dan `k = 0.225` pada mode `Fokus Jawa & Madura`.
   - Radius pin, ring *pulse*, area sentuh jari (`hitRadius`), `strokeWidth` pesisir/rel, dan `fontSize` label dikalikan `k` sehingga ukuran visual di layar tetap tajam, proporsional, dan tidak membesar raksasa saat diperbesar ke Jawa.
   - Anti-tumpuk label: di mode `Seluruh Nusantara`, label padat di Jawa hanya muncul untuk titik aktif + kota jangkar utama; di mode `Fokus Jawa & Madura`, seluruh label karesidenan tampil dengan arah `labelPos` bebas tabrakan.

---

## 4. Pengujian & Kriteria Keberhasilan

1. **Validasi Geometri & Koordinat**: Skrip verifikasi memastikan poligon seluruh pulau utama Indonesia ada (`Sumatera, Jawa, Madura, Kalimantan, Sulawesi, Bali-NT, Maluku, Papua`), siluet tetangga terpisah, dan 100% koordinat `lat/lon` simpul berada dalam rentang geografis pulau masing-masing.
2. **Kualitas Kode & Aksesibilitas**:
   - `npx tsc --noEmit` lulus `0 error`.
   - `npm run lint` (`oxlint`) lulus `0 warnings and 0 errors`.
   - `npm run build` lulus `exit code 0` tanpa regresi performa bundle utama.
   - Seluruh kontrol kamera, filter layer, pin SVG, dan *Quick-Select Chips* dapat dioperasikan via *keyboard* dan layar sentuh HP (`min-height >= 40px`).
