# Cultuurstelsel Deep-Dive Dossier Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Mengintegrasikan seluruh materi riset komprehensif sejarah Tanam Paksa (korupsi Van den Bosch, alokasi 690 juta gulden Batig Slot di Belanda, analisis finansial komoditas 1840-1860, ekologi sawah vs pegunungan, studi kasus 3 karesidenan, kritik arsip Jan Breman, potret humanis bivak kopi, 6 bentuk resistensi, politik parlemen Belanda 1848-1870, dan sintesis 3 lensa sejarawan) ke dalam antarmuka tabbed dossier yang interaktif dan responsif.

**Architecture:** Model Tabbed Deep-Dive (Opsi 3) yang menyematkan tab switcher modular pada 3 section utama (`ExploitationSection`, `ImplementationSection`, `ImpactSection`) dan kartu sorotan kritis & narasi humanis di `BackgroundSection`. Seluruh data didefinisikan secara typed di `historyContent.ts`.

**Tech Stack:** React 19, TypeScript, Lucide React, Vanilla CSS design tokens, Vite.

---

### Task 1: Update Dataset & Interfaces di `src/data/historyContent.ts`

**Files:**
- Modify: `src/data/historyContent.ts`

**Step 1: Definisikan Interfaces Baru**
Tambahkan types untuk `VanDenBoschControversy`, `BatigSlotAllocation`, `CommodityAnalysis1840_1860`, `EcologicalZone`, `ResidencyCaseStudy`, `MacroStatisticReport`, `BremanCritique`, `EverydayFarmerLife`, `PeasantResistanceItem`, `ParliamentaryPolitics`, dan `HistoriographyLens`.

**Step 2: Susun Dataset Lengkap**
Kompilasikan seluruh data yang telah divalidasi ke dalam objek-objek terstruktur:
- `vanDenBoschControversyData`
- `everydayFarmerLifeData`
- `commodityAnalysisData` (Kopi, Gula, Nila, Teh/Tembakau)
- `ecologicalZoningData` (Perennials vs Annuals vs Tegalan; Jawa vs Luar Jawa)
- `batigSlotAllocationData` (6 pos alokasi di Belanda)
- `macroStatisticData` (Kultuurverslagen 1840-1860 + Kamus Kolonial)
- `bremanCritiqueData` (5 dekonstruksi statistik)
- `residencyComparisonData` (Priangan vs Cirebon vs Pasuruan)
- `peasantResistanceData` (6 bentuk perlawanan, Aksi Pekalongan 1847, sabotase Sukapura, dll.)
- `parliamentaryPoliticsData` (Pra-1848 vs Konstitusi 1848, Mosi Wintgens 1860, Fransen van de Putte & UU Agraria 1870)
- `historiographicalSynthesisData` (Geertz vs Fasseur vs Breman)

**Step 3: Verifikasi Kompilasi TypeScript**
Run: `npm run build`
Expected: Berhasil tanpa type error di `historyContent.ts`.

---

### Task 2: Integrasi Sisi Gelap Van den Bosch & Narasi Humanis Bivak di `BackgroundSection`

**Files:**
- Modify: `src/components/BackgroundSection.tsx`
- Modify: `src/components/BackgroundSection.css`

**Step 1: Tambahkan Komponen UI Kartu Kontroversi Van den Bosch**
Tambahkan kartu sorotan investigasi sejarah: *Nepotisme Kontrak Pabrik Gula Anak Kandung*, *Cultuurprocenten sebagai Ladang Korupsi*, *Pengalihan Dana Rahasia Tanpa Izin Parlemen*, dan *Gelar Graaf 1839*.

**Step 2: Tambahkan Narasi Humanis "Sehari-hari di Bivak Rimba Kopi"**
Tambahkan accordion / kartu narasi dokumenter mikro yang menggambarkan kehidupan petani di gubuk bambu pegunungan, musim petik *kikir*, ancaman binatang buas, pemanggulan karung kopi, dan pasungan balok kayu (*blok*).

**Step 3: Styling CSS & Responsivitas**
Tambahkan styling elegan di `BackgroundSection.css` dengan aksen peringatan arsip (*archive amber/burgundy border*, badge kolonial).

**Step 4: Verifikasi Build & Lint**
Run: `npm run build && npm run lint`
Expected: Exit code 0, 0 errors.

---

### Task 3: Refaktor `ExploitationSection` dengan 4 Tab Interaktif

**Files:**
- Modify: `src/components/ExploitationSection.tsx`
- Modify: `src/components/ExploitationSection.css`

**Step 1: Implementasi State Tab Switcher di `ExploitationSection.tsx`**
State `activeTab: 'commodities' | 'ecology' | 'batig-slot' | 'macro-stats'`

**Step 2: Render Konten Tab 1 - Analisis Komoditas 1840–1860**
Kartu & tabel performa: Kopi (~80% laba), Tebu (rugi awal ke booming 1857), Nila (f. 15jt dipangkas karena kelaparan), Teh & Tembakau (rugi operasional dilepas ke swasta 1851).

**Step 3: Render Konten Tab 2 - Karakteristik Ekologi & Topografi Lahan**
Visualisasi interaktif: *Perennials* (kopi & teh di lereng bukit/hutan) vs *Annuals* (tebu & nila di sawah alluvial/rotasi padi) vs Tegalan; Komparasi *Inner Indonesia* vs *Outer Indonesia*.

**Step 4: Render Konten Tab 3 - Ke Mana Mengalirnya 690 Juta Gulden? (Alokasi Batig Slot)**
Grid 6 kartu alokasi di Belanda: Pelunasan utang, Staatsspoorwegen UU 1860, Terusan Noordzee & Rotterdam, Kompensasi budak Surinam 1863, Subsidi koloni minus, Pemotongan pajak domestik & pengayaan NHM.

**Step 5: Render Konten Tab 4 - Data Makro Kultuurverslagen, Kamus Kolonial, & Kritik Breman**
Tabel data resmi 1840–1860 + Widget Kamus Istilah (Bouw, Pikul, Pon, Cacah) + 5 dekonstruksi statistik Breman (Kebun fiktif 100rb vs 10rb, pekerja perempuan & anak, beban kerja 118-225 hari).

**Step 6: Styling CSS Tab & Kartu**
Perbarui `ExploitationSection.css` untuk tab navigation buttons, tabel data historis, badge status, dan kartu alokasi.

**Step 7: Verifikasi Build & Lint**
Run: `npm run build && npm run lint`
Expected: Exit code 0, 0 errors.

---

### Task 4: Perkaya `ImplementationSection` dengan 3 Tab Interaktif & Studi Kasus 3 Karesidenan

**Files:**
- Modify: `src/components/ImplementationSection.tsx`
- Modify: `src/components/ImplementationSection.css`

**Step 1: Implementasi State Tab Switcher di `ImplementationSection.tsx`**
State `activeTab: 'laws' | 'three-residencies' | 'outer-java'`

**Step 2: Render Konten Tab 1 - 7 Regulasi Staatsblad 1834 No. 22 vs Realitas**
Kartu perbandingan teks hukum resmi vs fakta penindasan lapangan.

**Step 3: Render Konten Tab 2 - "Tiga Wajah Cultuurstelsel": Priangan vs Cirebon vs Pasuruan**
Tabel perbandingan indikator statistik & kartu analisis mendalam:
- Priangan: Feodalisme murni, bebas Landrent tapi upah f. 2,11 vs bonus Bupati > f. 90.000.
- Cirebon: Tragedi Nila & Skandal Nombok Pajak (1840 sisa f. 7,34; 1845 nombok f. 1,06; 1848 nombok f. 4,60!) memicu kelaparan & eksodus.
- Pasuruan: Juara Kemakmuran Kolonial & Sirkulasi Uang (upah f. 54,91/thn, 140 pohon per pikul).

**Step 4: Render Konten Tab 3 - Dinamika di Luar Pulau Jawa (*Outer Islands*)**
Kopi Hutan Minangkabau & kerja rodi jalan ke Padang, monopoli kopi Minahasa, cengkeh Maluku, timah Bangka, tembakau Madura, serta karakter ekologis ladang/hutan vs sawah.

**Step 5: Styling CSS & Responsivitas**
Perbarui `ImplementationSection.css` untuk tampilan tabel komparasi 3 karesidenan dan tab switching yang rapi.

**Step 6: Verifikasi Build & Lint**
Run: `npm run build && npm run lint`
Expected: Exit code 0, 0 errors.

---

### Task 5: Perkaya `ImpactSection` dengan 4 Tab Interaktif (Kelaparan, Resistensi, Parlemen, & Historiografi)

**Files:**
- Modify: `src/components/ImpactSection.tsx`
- Modify: `src/components/ImpactSection.css`

**Step 1: Implementasi State Tab Switcher di `ImpactSection.tsx`**
State `activeTab: 'famines' | 'resistance' | 'politics' | 'historiography'`

**Step 2: Render Konten Tab 1 - Tragedi Kelaparan & Dampak Sosio-Ekonomi**
Priangan 1833 Vitalis, Cirebon 1843, Demak-Grobogan 1848 & krisis ternak kerbau, dampak positif dan negatif.

**Step 3: Render Konten Tab 2 - Resistensi & Perlawanan Rakyat Pribumi**
6 bentuk perlawanan: Aksi unjuk rasa 700-800 petani Pekalongan 1847 berkemah hadapi Rochussen, demo Kedu 1843, dukungan Perang Diponegoro & Haji Prawatasari, sabotase bibit Sukapura & bakar gudang, desersi ke hutan huma, penyelundupan, dan Tesis Jan Breman: Pelumpuhan dari Dalam (*Paralysis from Within*).

**Step 4: Render Konten Tab 3 - Pertarungan Politik Parlemen Belanda & UU Agraria 1870**
Monarki mutlak pra-1848 vs Konstitusi 1848 Thorbecke (Pasal 59-60 & Koloniaal Verslag); Debat Konservatif vs Oposisi Liberal Van Hoëvell; Regeringsreglement 1854 Pasal 56; Mosi Wintgens 1860; Peran Fransen van de Putte & UU Agraria 1870 (Domeinverklaring & Hak Erfpacht 75 thn vs proteksi tanah adat).

**Step 5: Render Konten Tab 4 - Sintesis 3 Lensa Sejarawan (Historiografi)**
Matriks komparasi mendalam: **Clifford Geertz** (*Involusi Pertanian & Shared Poverty*) vs **Cornelis Fasseur** (*Makro-Birokrasi & Monetisasi*) vs **Jan Breman** (*Mikro-Sosiologi, Penindasan Kelas Bawah, & Resistensi*).

**Step 6: Pertahankan Galeri Tokoh Pengkritik Sejarah**
Di bagian bawah tetap menampilkan galeri tokoh lengkap dengan Image Lightbox.

**Step 7: Styling CSS & Responsivitas**
Perbarui `ImpactSection.css` untuk tab switcher, matriks historiografi, dan kartu resistensi.

**Step 8: Verifikasi Build & Lint**
Run: `npm run build && npm run lint`
Expected: Exit code 0, 0 errors.

---

### Task 6: Verifikasi Akhir & Live Browser Review

**Files:**
- Verify: Seluruh halaman aplikasi melalui `npm run build`, `npm run lint`, dan live preview.

**Step 1: Linting & Build Verification**
Run: `npm run lint && npm run build`
Expected: 0 lint errors, 0 lint warnings, Vite build exit code 0.

**Step 2: Browser Subagent Verification**
Inspect dan buka browser untuk memverifikasi fungsionalitas tab switching, lightbox modal, scroll lancar, dan visual styling di semua section.

**Step 3: Update `docs/plans/task.md`**
Catat seluruh progress dan bukti verifikasi pada checklist task tracker.
