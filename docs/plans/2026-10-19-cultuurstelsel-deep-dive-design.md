# Design Document: Cultuurstelsel Deep-Dive Dossier Architecture

**Date:** 2026-10-19  
**Status:** Approved  
**Topic:** Integrasi Komprehensif Data Sejarah, Dekonstruksi Statistik, Studi Kasus Regional, & Sintesis Historiografi Tanam Paksa (1830–1870)

---

## 1. Executive Summary

Proyek ini memperluas web pembelajaran sejarah sosial perekonomian *Cultuurstelsel (1830–1870)* dengan mengintegrasikan data riset komprehensif tanpa menghilangkan struktur alur narasi yang sudah terbangun. Berdasarkan hasil perancangan bersama, sistem antarmuka menggunakan **Opsi 3: Model Tabbed Deep-Dive / Interactive Dossier**, di mana setiap section utama diperkaya dengan tab switcher interaktif, widget kalkulator/kamus kolonial, matriks komparatif, dan kartu naratif humanis.

---

## 2. Arsitektur Data & Pemetaan Konten (`src/data/historyContent.ts`)

Materi baru disusun ke dalam struktur data TypeScript dengan tipe-tipe (*interfaces*) yang ketat:

### 2.1. Tipe Data Baru
1. `VanDenBoschControversy`: Catatan nepotisme kontrak anak kandung, penciptaan sistem *cultuurprocenten* sebagai ladang korupsi massal, pengalihan dana rahasia jutaan gulden tanpa persetujuan *Tweede Kamer*, serta gelar kebangsawanan *Graaf* (1839).
2. `BatigSlotItem`: Pos-pos alokasi keuntungan kolonial di Belanda (Pelunasan utang f. 135 juta & f. 236 juta; *Staatsspoorwegen* f. 10 juta/thn via UU Kereta Api 1860; Terusan *Noordzeekanaal* & *Nieuwe Waterweg*; Kompensasi emansipasi budak Surinam 1863; Subsidi koloni minus; Pemotongan pajak domestik Belanda & NHM).
3. `CommodityFinancial1840_1860`: Analisis laba-rugi dekade 1840–1860 untuk Kopi (~80% laba), Tebu (rugi modal awal ke booming 1857), Nila (f. 15 juta lalu dipangkas karena pangan), serta Teh & Tembakau (rugi lalu dilepas ke swasta 1851).
4. `EcologicalZone`: Karakteristik lahan tanaman *Perennials* (kopi & teh di pegunungan 500–1.500 mdpl non-sawah) vs *Annuals* (tebu & nila di sawah alluvial beririgasi teknis/rotasi padi) vs Tegalan, serta perbandingan *Inner Indonesia* (Jawa vulkanik intensif) vs *Outer Indonesia* (Luar Jawa ladang berpindah/hutan).
5. `ResidencyCaseStudy`: Studi kasus mendalam perbandingan tiga karesidenan:
   - **Priangan**: *Preangerstelsel*, bebas *Landrent*, tetapi upah riil hanya f. 2,11–6,70/thn, wajib upeti 20% padi, bonus Bupati > f. 90.000, butuh 464 pohon/pikul.
   - **Cirebon**: Skandal "nombok" pajak (1840 untung +f. 7,34; 1845 defisit -f. 1,06; 1848 defisit parah -f. 4,60!), penyitaan sawah padi terbaik, memicu kelaparan massal & pelarian (*desersi*).
   - **Pasuruan**: "Juara Kemakmuran Kolonial" & sirkulasi uang (upah f. 54,91/thn, hanya 140 pohon/pikul, modal swasta).
6. `MacroStatisticReport`: Data rekapitulasi *Kultuurverslagen* 1840–1860 (populasi, luas lahan *bouw*, pikul/pon, total *plantloon*, rata-rata upah per keluarga, dan *cultuurprocenten* pejabat) beserta widget Kamus Istilah Kolonial (*bouw*, *pikul*, *pon amsterdam*, *cacah*, *somahan*).
7. `BremanCritique`: 5 dekonstruksi statistik kolonial oleh Jan Breman (*Fabricated Statistics* kebun kopi fiktif 100.000 vs 10.000 pohon; pengerahan perempuan dan anak-anak tak terdaftar; ilusi kenaikan pohon vs produktivitas 562 pohon/pikul; kerja paksa tanpa upah *herendiensten* 118–225 hari; mitos sirkulasi uang).
8. `EverydayFarmerLife`: Catatan mikro humanis kehidupan bivak pegunungan terpencil (*boskoffie*), musim petik *kikir*, perbekalan habis makan umbi & batang pisang, memanggul karung kopi puluhan kilometer di jalan lumpur, serta hukuman pasung balok kayu (*blok*).
9. `PeasantResistanceItem`: 6 ragam perlawanan rakyat (Aksi unjuk rasa 700-800 petani nila Pekalongan 1847 berkemah hadapi Rochussen, demo Kedu 1843, Perang Diponegoro & Haji Prawatasari, sabotase siram air mendidih ke bibit di Sukapura & bakar gudang, pelarian massal ke hutan huma, penyelundupan pasar gelap, serta *Pelumpuhan dari Dalam*).
10. `ParliamentaryPolitics`: Dinamika Parlemen *Tweede Kamer* (Pra-1848 monarki mutlak vs Konstitusi 1848 Thorbecke Pasal 59-60 & *Koloniaal Verslag*; Debat Konservatif vs Oposisi Liberal Van Hoëvell; *Regeringsreglement* 1854 Pasal 56; Mosi Wintgens 1860 & jatuhnya Rochussen; I.D. Fransen van de Putte & UU Agraria / Suikerwet 1870 dengan *Domeinverklaring* dan Hak *Erfpacht* 75 tahun).
11. `HistoriographyLens`: Matriks komparatif 3 Lensa Sejarawan: **Clifford Geertz** (*Agricultural Involution & Shared Poverty*) vs **Cornelis Fasseur** (*Makro-Birokrasi & Monetisasi Regional*) vs **Jan Breman** (*Mikro-Sosiologi, Penindasan Kelas Bawah, & Resistensi*).

---

## 3. Komponen Antarmuka & Penataan Tab Interaktif

### 3.1. `BackgroundSection.tsx`
- Menampilkan kartu analisis kritis **"Johannes van den Bosch: Arsitek Fiskal vs Catatan Nepotisme & Dana Rahasia"**.
- Menyisipkan potret mikro humanis **"Kehidupan Sehari-hari di Bivak Rimba Kopi (*Boskoffie*)"**.

### 3.2. `ExploitationSection.tsx` (Mesin Eksploitasi, Komoditas, & Aliran Batig Slot)
Dilengkapi dengan **Tab Switcher (4 Tab)**:
- **Tab 1: Komoditas & Analisis Finansial (1840–1860)** (Kopi, Gula, Nila, Teh/Tembakau).
- **Tab 2: Karakteristik Ekologi & Topografi Lahan** (Perennials vs Annuals vs Tegalan; Jawa Vulkanik vs Luar Jawa Laterit).
- **Tab 3: Ke Mana Mengalirnya 690 Juta Gulden?** (6 Pos Alokasi *Batig Slot* di Belanda).
- **Tab 4: Data Makro *Kultuurverslagen* & Kamus Istilah Kolonial** (Tabel interaktif Fasseur + Kamus *Bouw*, *Pikul*, *Pon*, *Cacah* + Kritik Kebun Fiktif Breman).

### 3.3. `ImplementationSection.tsx` (Pelaksanaan Lapangan, Regional, & Studi Kasus)
Dilengkapi dengan **Tab Switcher (3 Tab)**:
- **Tab 1: 7 Regulasi Staatsblad 1834 No. 22 vs Realitas Penindasan**.
- **Tab 2: Tiga Wajah Cultuurstelsel (Priangan vs Cirebon vs Pasuruan)** (Tabel & grafik defisit nombok pajak Cirebon vs kemakmuran semu Pasuruan vs feodalisme Priangan).
- **Tab 3: Dinamika Wilayah Luar Jawa (*Outer Islands*)** (Kopi Hutan Padang, Minahasa, Cengkeh Maluku, Timah Bangka, Tembakau Madura, dan transisi pasca-1870).

### 3.4. `ImpactSection.tsx` (Dampak, Perlawanan Petani, Parlemen Belanda, & Historiografi)
Dilengkapi dengan **Tab Switcher (4 Tab)**:
- **Tab 1: Bencana Kelaparan & Dampak Sosio-Ekonomi** (Priangan 1833 Vitalis, Cirebon 1843, Demak-Grobogan 1848 & krisis ternak kerbau).
- **Tab 2: Resistensi & Perlawanan Rakyat Pribumi** (6 bentuk perlawanan, Aksi Pekalongan 1847, sabotase Sukapura, tesis "Pelumpuhan dari Dalam" Jan Breman).
- **Tab 3: Pertarungan Politik Parlemen Belanda & UU Agraria 1870** (Konstitusi 1848 Thorbecke, Mosi Wintgens 1860, Fransen van de Putte, *Domeinverklaring*, dan Hak *Erfpacht* 75 tahun).
- **Tab 4: Sintesis 3 Lensa Sejarawan (Historiografi)** (Matriks interaktif Geertz vs Fasseur vs Breman).
- **Galeri Tokoh Pengkritik Sejarah** (Hogendorp, Multatuli, Van Hoëvell, Vitalis, Ono van Rees, Van Gorkom, Fransen van de Putte) di bagian bawah.

---

## 4. Rencana Implementasi

1. **Fase 1: Update Tipe & Konten Data (`historyContent.ts`)**:
   - Menambahkan interfaces baru dan mengompilasi dataset lengkap dari materi yang telah divalidasi.
2. **Fase 2: Perkaya BackgroundSection (`BackgroundSection.tsx` & `.css`)**:
   - Menyematkan kartu kontroversi Van den Bosch dan narasi bivak rimba kopi.
3. **Fase 3: Refaktor ExploitationSection (`ExploitationSection.tsx` & `.css`)**:
   - Menerapkan Tab Switcher 4 Tab (Analisis Finansial, Ekologi, Alokasi Batig Slot, Data Makro & Kamus Kolonial).
4. **Fase 4: Perkaya ImplementationSection (`ImplementationSection.tsx` & `.css`)**:
   - Menerapkan Tab Switcher 3 Tab (Staatsblad vs Realitas, Studi Kasus 3 Karesidenan, Luar Jawa).
5. **Fase 5: Perkaya ImpactSection (`ImpactSection.tsx` & `.css`)**:
   - Menerapkan Tab Switcher 4 Tab (Kelaparan & Dampak, Resistensi Rakyat, Politik Parlemen Belanda & UU Agraria, Sintesis Historiografi 3 Tokoh).
6. **Fase 6: Verifikasi & Polish UI**:
   - Uji build TypeScript (`npm run build`).
   - Uji responsivitas, navigasi tab, dan kelancaran interaksi.
