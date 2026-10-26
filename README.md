# 📜 Cultuurstelsel (1830–1870): Deep-Dive Archival Dossier

> **Platform Edukasi & Arsip Interaktif Sejarah Sistem Tanam Paksa di Hindia Belanda**  
> Menggabungkan estetika *vintage academic archival* dengan historiografi kritis dan riset sosiologis-historis mendalam.

---

## 🏛️ Tentang Proyek

Website ini dirancang sebagai platform eksplorasi sejarah interaktif berbasis web untuk mendalami **Sistem Tanam Paksa (*Cultuurstelsel*)** yang diberlakukan oleh Gubernur Jenderal **Johannes van den Bosch** di Hindia Belanda pada kurun waktu **1830 hingga 1870**.

Menggunakan pendekatan historiografi kritis dan komparatif, platform ini tidak hanya memaparkan linimasa peristiwa, melainkan juga membedah:
- **Sisi gelap & kontroversi birokrasi**: Nepotisme kontrak pabrik gula keluarga Van den Bosch, penyalahgunaan sistem *cultuurprocenten*, dan pengalihan dana kas kolonial tanpa izin parlemen.
- **Dua realitas**: Komparasi pasal-pasal resmi *Staatsblad 1834 No. 22* dengan kenyataan penindasan dan eksploitasi di lapangan.
- **Tiga Wajah Cultuurstelsel**: Komparasi mikrososiologi antara karesidenan **Priangan** (feodalisme murni & tanam paksa kopi), **Cirebon** (tragedi eksploitasi nila & skandal nombok pajak), dan **Pasuruan** (sentra industri gula & sirkulasi upah).
- **Alokasi 690 Juta Gulden *Batig Slot***: Menelusuri ke mana mengalirnya surplus keuntungan Hindia Belanda dalam membiayai modernisasi infrastruktur domestik Kerajaan Belanda (kereta api *Staatsspoorwegen*, Terusan Noordzee, kompensasi pembebasan budak Surinam 1863, dan pengayaan konsorsium dagang NHM).
- **Resistensi Petani Pribumi**: Dari aksi unjuk rasa 700 petani Pekalongan (1847) hingga sabotase bibit Sukapura dan pemogokan kerja.
- **Sintesis 3 Lensa Sejarawan**: Perbandingan paradigma analisis antara **Clifford Geertz** (*Involusi Pertanian & Shared Poverty*), **Cornelis Fasseur** (*Perspektif Makro Birokrasi & Fiskal*), dan **Jan Breman** (*Kritik Arsip, Penindasan Kelas Bawah, & Resistensi Tersembunyi*).

---

## ✨ Fitur Utama

1. **🏛️ Hero & Ringkasan 1 Menit (*Executive Summary*)**
   - Ringkasan cepat angka kunci (*Key Figures*) dan pintasan navigasi instan antar-bab sejarah.
   - Peta visual dan kutipan monumental Multatuli (*Max Havelaar*) serta Baron van Hoëvell.

2. **⚖️ Tabbed Dossier: Implementasi & Staatsblad 1834**
   - **Tab 1: Regulasi vs Realitas**: Analisis 7 pasal hukum *Staatsblad 1834 No. 22* yang dikonfrontasikan langsung dengan fakta eksploitasi lapangan.
   - **Tab 2: Tiga Wajah Cultuurstelsel**: Kartu komparasi mendalam indikator statistik Priangan, Cirebon, dan Pasuruan.
   - **Tab 3: Dinamika Luar Jawa**: Dokumentasi ekspansi tanam paksa ke Minangkabau (Sistem Tanam Kopi Rodi), Minahasa, Maluku, Bangka, dan Madura.

3. **📊 Tabbed Dossier: Eksploitasi & Finansial Kolonial**
   - **Tab 1: Analisis Komoditas (1840–1860)**: Data neraca laba-rugi kopi, tebu/gula, nila (indigo), tembakau, dan teh.
   - **Tab 2: Ekologi Lahan**: Pembeda dampak tanaman tahunan (*Perennials*) vs tanaman semusim sawah (*Annuals*).
   - **Tab 3: Alokasi 690 Juta Gulden *Batig Slot***: Rincian pos pemanfaatan dana surplus kolonial di Negeri Belanda.
   - **Tab 4: Data Makro & Kamus Kolonial**: Rekapitulasi *Kultuurverslagen*, glosarium ukuran kolonial (*Bouw, Pikul, Pon, Cacah*), dan 5 dekonstruksi statistik arsip oleh Jan Breman.

4. **🌾 Tabbed Dossier: Dampak, Perlawanan, & Historiografi**
   - **Tab 1: Tragedi Kemanusiaan & Kelaparan**: Krisis kelaparan Cirebon (1843), Demak-Grobogan (1848), dan kepunahan ternak kerbau.
   - **Tab 2: Resistensi Rakyat**: Dokumentasi aksi protes terbuka, sabotase perkebunan, pelarian huma, dan pembakaran gudang tebu.
   - **Tab 3: Pertarungan Politik Parlemen Belanda & UU Agraria 1870**: Dinamika liberalisasi parlemen pasca-Konstitusi Thorbecke 1848 hingga disahkannya *Agrarische Wet 1870*.
   - **Tab 4: Matriks 3 Lensa Sejarawan**: Perbandingan komprehensif teori Geertz, Fasseur, dan Breman.

5. **🔍 Lightbox Arsip Resolusi Tinggi**
   - Modal zoom interaktif dengan metadata lengkap (sumber arsip, pelukis/fotografer, kurun waktu) untuk karya seni berlisensi domain publik (Raden Saleh, Gustave Wappers, potret tokoh arsip Tropenmuseum/Leiden).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/)
- **Linter**: [Oxlint](https://oxc.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Pure Modular Vanilla CSS dengan *CSS Custom Properties Design Tokens* bertema *Antique Parchment, Colonial Burgundy, & Wax Gold*.
- **Fonts**: Google Fonts (*Cinzel*, *Playfair Display*, *Plus Jakarta Sans*).

---

## 🚀 Panduan Menjalankan Proyek Secara Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) (versi 18 ke atas disarankan)
- Package manager: `npm` (atau `pnpm` / `yarn`)

### Langkah Instalasi

1. **Clone repository ini**:
   ```bash
   git clone https://github.com/RokanMarik/cultuurstelsel-dossier.git
   cd cultuurstelsel-dossier
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka peramban di `http://localhost:5173/`.

4. **Build untuk produksi**:
   ```bash
   npm run build
   ```
   Hasil build siap deploy akan tersimpan di folder `dist/`.

---

## 🌐 Panduan Deploy ke Vercel

Proyek ini telah dikonfigurasi dengan standar Vite modern dan siap di-deploy langsung ke Vercel:

1. Masuk ke dashboard [Vercel](https://vercel.com/) dan klik **"Add New" > "Project"**.
2. Hubungkan akun GitHub Anda dan pilih repository **`cultuurstelsel-dossier`**.
3. Vercel akan otomatis mendeteksi:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Klik **Deploy**. Website akan langsung online dalam hitungan detik!

---

## 📚 Referensi Akademik & Arsip

1. **Breman, Jan** (2014). *Keuntungan Kolonial dari Kerja Paksa: Sistem Priangan dari Tanam Paksa Hingga Kerja Rodi 1870–1915*. Yayasan Pustaka Obor Indonesia.
2. **Breman, Jan** (1983). *Control of Land and Labour in Colonial Java*. Foris Publications.
3. **Fasseur, Cornelis** (1992). *The Politics of Colonial Exploitation: Java, the Dutch, and the Cultivation System*. Cornell Southeast Asia Program.
4. **Geertz, Clifford** (1963). *Agricultural Involution: The Processes of Ecological Change in Indonesia*. University of California Press.
5. **Multatuli (Eduard Douwes Dekker)** (1860). *Max Havelaar: of de koffiveilingen der Nederlandsche Handel-Maatschappy*.
6. **Ricklefs, M.C.** (2008). *A History of Modern Indonesia since c. 1200*. Stanford University Press.
7. **Arsip Visual**: *Tropenmuseum*, *Nationaal Archief Belanda*, *Leiden University Libraries*, lukisan *Penangkapan Diponegoro* karya Raden Saleh (1857).

---

## 📄 Lisensi

Konten teks edukasi dan kode sumber dilisensikan di bawah [MIT License](LICENSE).  
Materi arsip foto dan lukisan sejarah merupakan **Public Domain** yang bersumber dari arsip museum terbuka.
