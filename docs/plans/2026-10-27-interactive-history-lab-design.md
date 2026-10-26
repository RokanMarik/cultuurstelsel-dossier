# Interactive History Laboratory Design Document

> **Platform:** Cultuurstelsel Dossier (1830–1870)  
> **Topic:** Laboratorium Sejarah Interaktif (*Interactive History Laboratory*)  
> **Date:** 2026-10-27  
> **Status:** Approved by User (Pendekatan 1)

---

## 1. Executive Summary & Goal

Platform *Cultuurstelsel Dossier* telah memiliki arsip mendalam, data tabbed, dan galeri visual resolusi tinggi. Untuk meningkatkan daya tarik edukasi, keterlibatan aktif (*user engagement*), serta pemahaman intuitif bagi siswa, akademisi, dan publik, platform ini akan diperkaya dengan **Laboratorium Sejarah Interaktif (*Interactive History Laboratory*)**.

Modul ini menyajikan tiga instrumen eksploratif dalam satu seksi terpadu:
1. **Peta Kartografi Antik Interaktif (SVG Cartography)**: Menvisualisasikan geospasial sebaran komoditas wajib, jaringan transportasi kereta api kolonial (*Staatsspoorwegen*), krisis kelaparan, dan episentrum resistensi rakyat.
2. **Kalkulator & Simulator Kolonial**: Mengonversi daya beli mata uang Gulden masa kolonial ke Rupiah modern, konversi satuan ukuran tradisional Hindia Belanda (*Bouw, Pikul, Pon, Cacah*), dan simulator neraca beban kerja petani.
3. **Simulasi Skenario Dilema Sejarah (*Role-Play Historical Dilemma*)**: Mengajak pengguna mengambil keputusan penting sebagai aktor sejarah nyata (Kepala Desa, Bupati Pribumi, dan Anggota Parlemen Liberal Belanda) dengan konsekuensi bercabang serta refleksi historiografis.

---

## 2. Architecture & File Structure

```
src/
├── components/
│   ├── InteractiveLabSection.tsx      # Komponen utama lab dengan tab switcher
│   ├── InteractiveLabSection.css      # Styling vintage parchment & brass metallic tokens
│   ├── Navbar.tsx                      # Tambahan item navigasi: "Lab Interaktif"
│   └── Hero.tsx                        # Tambahan quick shortcut: "🔬 Laboratorium Sejarah"
├── data/
│   └── historyContent.ts               # Dataset spasial peta, formula konversi, dan skenario dilema
docs/
└── plans/
    ├── 2026-10-27-interactive-history-lab-design.md # (Dokumen ini)
    └── 2026-10-27-interactive-history-lab-plan.md   # Implementation plan lanjutan
```

---

## 3. Data Schema & Types

### 3.1 Peta Kartografi Spasial
```typescript
export interface SpatialMarker {
  id: string;
  name: string;
  category: 'commodity' | 'famine' | 'resistance' | 'railway-hub';
  cx: number; // Persentase koordinat SVG (0 - 1000)
  cy: number; // Persentase koordinat SVG (0 - 450)
  yearSpan: string;
  residency: string;
  summary: string;
  historicalDetails: {
    productionOrVictims?: string;
    vanDenBoschPolicyNote?: string;
    keyFigure?: string;
  };
}

export interface RailwayLine {
  id: string;
  name: string;
  pathD: string; // SVG path string
  yearBuilt: string;
  purpose: string;
}
```

### 3.2 Kalkulator & Simulator
```typescript
export interface CurrencyBenchmark {
  historicalYear: number;
  guldenValue: number;
  modernIdrEquivalent: number; // Berdasarkan daya beli beras (1 Gulden ~ 15-20 kg beras ~ Rp 175.000)
  historicalContext: string;
}

export interface UnitConversion {
  unit: string;
  dutchName: string;
  modernMetric: string;
  metricMultiplier: number;
  explanation: string;
}

export interface FarmerSimulationResult {
  landSizeBouw: number;
  cropType: 'kopi' | 'tebu' | 'nila';
  requiredWorkDays: number;
  statutoryMaxDays: number; // 66 hari menurut Staatsblad 1834
  excessWorkDays: number;
  estimatedCropYieldKg: number;
  grossRemunerationGulden: number; // Plantloon
  landRentTaxGulden: number;       // Pajak tanah
  netBalanceGulden: number;
  isDeficit: boolean; // "Nombok Pajak" jika netBalance < 0
  socioEconomicImpact: string;
}
```

### 3.3 Skenario Dilema Sejarah
```typescript
export interface DilemmaChoice {
  id: string;
  text: string;
  consequences: {
    peasantWelfare: number;   // -3 s/d +3
    colonialPressure: number; // -3 s/d +3
    localStability: number;   // -3 s/d +3
  };
  feedback: string;
}

export interface HistoricalDilemmaScenario {
  id: string;
  role: string;
  location: string;
  year: number;
  title: string;
  context: string;
  choices: DilemmaChoice[];
  historicalEpilogue: {
    whatActuallyHappened: string;
    archivalSource: string;
  };
}
```

---

## 4. Sub-Tab Breakdown & UX Specifications

### Tab 1: Peta Kartografi Antik Pulau Jawa & Kepulauan
- **Komponen Visual**:
  - Peta vektor SVG custom Pulau Jawa dengan siluet pesisir, garis kontur perbukitan, mawar angin (*compass rose*), dan bingkai peta ornamen maritim abad ke-19.
  - **Filter Lapisan (Layer Toggles)**:
    - *Semua Layer*
    - ☕ *Perkebunan Kopi & Teh* (Priangan, Pasuruan, Kedu)
    - 🌾 *Sawah Tebu & Pabrik Gula* (Cirebon, Pekalongan, Jepara, Pasuruan)
    - 🌿 *Perkebunan Nila / Indigo* (Cirebon, Pekalongan)
    - 🚂 *Jalur Kereta Api Staatsspoorwegen* (Batavia–Buitenzorg, Semarang–Solo–Yogyakarta, Surabaya–Pasuruan)
    - ⚠️ *Krisis Kelaparan* (Cirebon 1843, Demak-Grobogan 1848, Priangan 1833)
    - ⚔️ *Aksi Resistensi Rakyat* (Pekalongan 1847, Sukapura, Kedu 1843)
- **Panel Samping Interaktif**:
  - Saat marker pada peta diklik, panel di samping peta langsung memuat dossier ringkas wilayah tersebut, termasuk data statistik dan kutipan dokumen arsip.

### Tab 2: Kalkulator & Komparator Kolonial
- **Alat 1: Kurs Gulden ke Rupiah Modern**:
  - Input field mata uang f. (*Gulden*).
  - Tiga tombol preset praktis:
    - *Upah Tahunan Petani Priangan (f. 2,11)*
    - *Bonus Tahunan Bupati Priangan (f. 90.000)*
    - *Total Keuntungan Batig Slot (f. 690.000.000)*
  - Menghasilkan nilai Rupiah masa kini, visualisasi perbandingan daya beli, dan konteks ketimpangan sosial.
- **Alat 2: Konverter Satuan Tradisional**:
  - Konversi dua arah untuk:
    - Bouw $\leftrightarrow$ Hektar / $m^2$
    - Pikul $\leftrightarrow$ Kilogram
    - Pon $\leftrightarrow$ Gram
    - Cacah $\leftrightarrow$ Jiwa / Keluarga
- **Alat 3: Simulator Beban Petani (Jan Breman Metric)**:
  - Input: Luas kepemilikan sawah (slider 0,2 s/d 2,0 Bouw), pilihan tanaman paksa (Kopi, Tebu, atau Nila).
  - Kalkulasi instan: Hari kerja riil yang dihabiskan (vs 66 hari batas hukum), beban tenaga pikul, serta status neraca pajak (*Nombok vs Surplus*).

### Tab 3: Simulasi Skenario Dilema Sejarah
- **3 Skenario Pilihan**:
  1. *Kepala Desa di Cirebon (1845)*: Menghadapi desakan kuota nila Residen Belanda di tengah musim bajak sawah padi.
  2. *Bupati di Priangan (1840)*: Godaan bonus *cultuurprocenten* f. 90.000 dari Van den Bosch dengan mengorbankan ribuan kuli pemikul kopi.
  3. *Anggota Parlemen Liberal di Den Haag (1860)*: Menyusun strategi politik pasca guncangan novel *Max Havelaar* karya Multatuli.
- **Mekanisme Pilihan & Meteran Skor**:
  - Tiga indikator dinamis: *Kesejahteraan Petani*, *Hubungan dengan Kolonial*, *Ketahanan Sosial*.
  - Menampilkan umpan balik seketika (*instant feedback*) dan catatan fakta arsip asli (*What Actually Happened in History*).

---

## 5. Visual Aesthetics & Design System Tokens

- **Warna & Latar**:
  - Latar perkamen tua: `--parchment-bg: #f5eedb;`, `--parchment-dark: #ebd9b8;`
  - Aksen emas kuningan: `--accent-gold: #c8963e;`
  - Aksen merah stempel kolonial: `--accent-crimson: #842323;`
  - Garis batas dan kaligrafi: `--ink-dark: #1f1a14;`, `--ink-faded: #4a4035;`
- **Tipografi**:
  - Judul: `Cinzel`, serif berwibawa
  - Subjudul & Kutipan: `Playfair Display`, klasik elegan
  - Teks Data & Nilai: `Plus Jakarta Sans`, keterbacaan tinggi

---

## 6. Verification & Quality Plan

1. **Type Safety & Lint**:
   - `npm run lint` (Oxlint) 0 warning, 0 error.
   - `npm run build` (tsc -b && vite build) exit code 0.
2. **Interactive Testing**:
   - Uji respon klik marker peta SVG di desktop dan resolusi mobile.
   - Uji akurasi kalkulasi formula kurs Gulden, satuan Bouw/Pikul, dan formula nombok pajak.
   - Uji alur skenario dilema dari pemilihan peran, pilihan keputusan, hingga epilog sejarah.
3. **Responsiveness**:
   - Grid fleksibel: Peta SVG mengecil proporsional dengan `viewBox="0 0 1000 450"`.
   - Layout panel samping berubah menjadi tumpukan vertikal (*stacked*) di viewport ponsel (<768px).
