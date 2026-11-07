# Desain Katalog Pencarian Cepat Lintas-Tab (`Ctrl+K`) & Perbaikan Audit Teknis

**Tanggal:** 2026-11-08  
**Penyusun:** Rokan & Fiqrul  
**Status:** Disetujui

---

## 1. Tujuan & Masalah yang Diselesaikan

1. **Pencarian Lintas-Tab (`Ctrl+K` / Quick Search) & Deep-Linking URL:**
   - Konten di dalam 18+ tab (`ExploitationSection`, `ImplementationSection`, `ImpactSection`, `InteractiveLabSection`, `HistoricalGamesSection`) dirender secara kondisional sehingga `Ctrl+F` bawaan browser gagal menemukan materi yang berada di tab tidak aktif saat sesi tanya-jawab dosen.
   - Dibutuhkan modal katalog pencarian kuratorial (`Ctrl+K`) dan event bus navigasi lintas-tab (`CustomEvent('monograph:navigate')`) yang secara otomatis membuka tab/sub-tab tujuan, memperbarui URL hash, dan menggulir tepat ke kartu sasaran.

2. **Pemulihan Data Tercecer, Penghapusan Duplikasi, & Penyempurnaan Teknis:**
   - Merender kembali dataset `exploitationData.laborStatistics` (7 kartu statistik tenaga kerja & demografi Jan Breman 2014 / Ono van Rees) serta `.detail` pada 3 mekanisme (`Batig Slot`, `Cultuurprocenten`, `Indirect Rule`) di `ExploitationSection.tsx`, dan `outerJavaExpansion.overview` di `ImplementationSection.tsx`.
   - Menghapus duplikasi identik 4 kartu `prianganMonetizationData` di Tab 4 `ImplementationSection.tsx` dan menghubungkannya lewat tombol rujukan silang ke Tab 5 (Laporan Van Rees 1867) di `ImpactSection.tsx`.
   - Mengganti sisa `fontFamily="Cinzel, serif"` pada SVG peta `InteractiveLabSection.tsx` ke `JetBrains Mono` dan `Spectral`.
   - Memindahkan seluruh inline style `TimelineModal.tsx` ke `TimelineSection.css`, menambahkan `fetchPriority="high"` di `Hero.tsx`, serta melengkapi metadata OpenGraph di `index.html` dan aturan cetak `@media print` di `src/index.css`.

---

## 2. Arsitektur Komponen & Aliran Data

### 2.1 Event Bus Navigasi & URL Hash (`src/utils/monographNavigator.ts`)
- Interface `MonographNavigationTarget`:
  - `sectionId: string`
  - `tabId?: string`
  - `subTabId?: string`
  - `elementId?: string`
- Fungsi `navigateToMonographTarget(target)`:
  - Menyusun hash URL terstruktur (`#${sectionId}?tab=${tabId}&sub=${subTabId}&el=${elementId}`) melalui `window.history.replaceState`.
  - Mengirimkan `new CustomEvent('monograph:navigate', { detail: target })`.
  - Menggulir halaman ke `elementId` atau `sectionId` setelah tab aktif dirender (`setTimeout` 80ms–160ms untuk mengakomodasi komponen `React.lazy`), lalu memberi class highlight `.monograph-target-highlight` selama `1800ms`.

### 2.2 Indeks Pencarian Statis (`src/data/searchIndex.ts`)
- Membangun katalog pencarian otomatis dari seluruh dataset di `src/data/historyContent.ts` (~95 entri):
  - Latar Belakang (3 krisis militer/fiskal, konsep & kontroversi Van den Bosch, bivak petani kopi, sejarawan).
  - Eksploitasi (perbandingan VOC, 5 komoditas utama, 4 analisis finansial 1840–1860, 2 zona ekologi, 6 alokasi Batig Slot, 3 mekanisme kolonial, 7 statistik tenaga kerja Breman, kamus kolonial).
  - Garis Waktu (11 peristiwa 1830–1915).
  - Pelaksanaan (3 studi kasus karesidenan, 7 aturan Staatsblad 1834 No. 22, 3 wilayah luar Jawa, 5 peran bupati, 4 elemen Preangerstelsel, 5 mekanisme ekspansi VOC).
  - Dampak (3 kasus kelaparan, dampak negatif & positif, 6 aksi resistensi, 5 babak parlemen Belanda, 3 lensa historiografi, 4 temuan Laporan Van Rees, 4 fase monetisasi Priangan, 7 tokoh pengkritik).
  - Lab Sejarah (12 simpul peta geospasial, kalkulator kurs/satuan/neraca Breman, 3 skenario dilema).
  - Permainan Sejarah (TTS Batavia 11×12 & Kuis Komisi Hindia) serta Daftar Pustaka APA (12 sumber + 2 kutipan monumental).

### 2.3 Komponen Modal Pencarian (`src/components/QuickSearchModal.tsx` & `.css`)
- Mengikuti spesifikasi `DESIGN.md` (Curatorial Monograph, kertas mineral `#f4f4f2`, permukaan kartu `#ffffff`, rasio kontras WCAG AA+, 0 nested cards, 0 side-tab >1px, 0 emoji).
- Pintasan keyboard `Ctrl+K` / `Cmd+K`, navigasi `ArrowUp`/`ArrowDown`, `Enter`, `Escape`, dan chip topik cepat.

