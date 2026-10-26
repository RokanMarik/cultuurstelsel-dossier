# Cultuurstelsel Comprehensive Content Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Mengintegrasikan seluruh materi akademik komprehensif ke dalam web Cultuurstelsel (7 Aturan Staatsblad 1834 No. 22, Ekspansi Luar Jawa, Statistik Beban Tenaga Kerja Breman 2014, Garis Waktu Penghapusan 1862–1915, dan Galeri Tokoh Pengkritik) dengan tata letak modular yang enak dibaca.

**Architecture:** Pembaruan terstruktur pada `src/data/historyContent.ts` sebagai *single source of truth*, diikuti penyesuaian komponen UI (`ImplementationSection`, `ExploitationSection`, `TimelineSection`, `TimelineModal`, `ImpactSection`, `BibliographySection`) menggunakan sistem kartu komparasi, badge status, dan grid responsif.

**Tech Stack:** React 19, TypeScript, CSS3 Modern, Lucide-react, Vite.

---

### Task 1: Pembaruan Data Komprehensif di `src/data/historyContent.ts`
**Files:**
- Modify: `src/data/historyContent.ts`

**Steps:**
1. Tambahkan antarmuka (interface) data baru jika diperlukan (`CriticFigure`, `OuterJavaRegion`, `LaborStatistic`).
2. Perbarui `backgroundData` dengan rincian defisit Perang Diponegoro (1825–1830) dan penetapan Van den Bosch.
3. Perbarui `implementationData.laws` memuat 7 butir aturan Staatsblad 1834 No. 22 vs fakta lapangan Breman (2014).
4. Tambahkan data ekspansi ke luar Jawa (`outerJavaExpansion`) dan statistik tenaga kerja (`laborStatistics`).
5. Perkaya `implementationData.timeline` dengan peristiwa Priangan (1833–1835), Demak-Grobogan kerbau pembajak, 1862 lada, 1865 nila/teh/kayu manis, 1866 tembakau, 1870 Agrarische Wet & Suiker Wet & Priangerstelsel, serta 1915 kopi pemerintah.
6. Tambahkan data galeri pengkritik komprehensif (`historicalCritics`): Van Hogendorp, Multatuli, Van Hoëvell, Vitalis, Van Rees, Van Gorkom, Fransen van de Putte.
7. Simpan dan pastikan validasi tipe TypeScript valid.

---

### Task 2: Modul 7 Aturan Staatsblad 1834 No. 22 di `ImplementationSection.tsx`
**Files:**
- Modify: `src/components/ImplementationSection.tsx`
- Modify: `src/components/ImplementationSection.css`

**Steps:**
1. Render 7 butir aturan berpasangan lengkap dengan nomor pasal dan badge status pelanggaran.
2. Tambahkan sorotan kutipan Breman (2014) mengenai pelanggaran sepihak di tingkat operasional.
3. Rapikan styling kartu komparasi (hijau untuk ketentuan resmi, merah tua untuk penindasan lapangan).

---

### Task 3: Modul Ekspansi Luar Jawa & Statistik Tenaga Kerja di `ExploitationSection.tsx`
**Files:**
- Modify: `src/components/ExploitationSection.tsx`
- Modify: `src/components/ExploitationSection.css`

**Steps:**
1. Tambahkan sub-bagian "Ekspansi ke Luar Pulau Jawa" (Sumatera Bagian Selatan & Minahasa di Sulawesi).
2. Tambahkan sub-bagian "Statistik Pengerahan Tenaga Kerja & Krisis Priangan" (75,5% -> 46% -> 54,5%, upah f. 2,11, kerja 118–225 hari, laporan Ono van Rees).
3. Buat komponen visual kartu statistik beraksen emas-kolonial.

---

### Task 4: Kronik Garis Waktu Lengkap (1830–1915) di `TimelineSection.tsx` & `TimelineModal.tsx`
**Files:**
- Modify: `src/components/TimelineSection.tsx`
- Modify: `src/components/TimelineModal.tsx`
- Modify: `src/components/TimelineSection.css`

**Steps:**
1. Hubungkan timeline stepper dengan daftar peristiwa baru (termasuk 1833 Priangan, 1862, 1865, 1866, 1870, 1915).
2. Perbarui modal agar menampilkan rincian undang-undang (*Agrarische Wet*, *Suiker Wet*, *Staatsblad 1870 No. 121*).

---

### Task 5: Galeri Tokoh Pengkritik & Dampak Positif di `ImpactSection.tsx` / `BibliographySection.tsx`
**Files:**
- Modify: `src/components/ImpactSection.tsx`
- Modify: `src/components/ImpactSection.css`
- Modify: `src/components/BibliographySection.tsx`

**Steps:**
1. Tambahkan galeri visual "Tokoh Pengkritik & Gerakan Nurani Parlemen" (Van Hogendorp, Multatuli, Van Hoëvell, Vitalis, Van Rees, Van Gorkom, Fransen van de Putte).
2. Perkaya kartu dampak positif (pengenalan tanaman komersial, jalan raya, jembatan, pabrik, serta monetisasi uang).

---

### Task 6: Verifikasi Kode, Oxlint, Build, & Live Browser
**Files:**
- Run test: `npm run build`
- Run lint: `npx oxlint`
- Browser Subagent: Verifikasi tampilan halaman, keterbacaan teks, dan interaktivitas modal.
