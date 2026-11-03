# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Mahasiswa dan dosen mata kuliah *Sejarah Sosial Perekonomian* di perguruan tinggi Indonesia, serta pembaca sejarah umum yang menelusuri kebijakan agraria kolonial abad ke-19. Mereka menggunakan situs ini saat presentasi akademik di kelas, sesi diskusi/tanya-jawab dengan dosen, telaah mandiri sumber primer-sekunder, serta eksplorasi interaktif melalui laptop maupun ponsel.

## Product Purpose

Monograf dan media edukasi digital interaktif karya **Rokan** dan **Fiqrul** yang membedah **Cultuurstelsel (Sistem Tanam Paksa di Hindia Belanda, 1830–1870)** secara menyeluruh sebagai pengganti poster/infografis statis kelompok. Keberhasilan diukur dari kejelasan argumentasi historiografis, ketajaman data fiskal (*Batig Slot*, *Cultuurprocenten*, *Kultuurverslagen*), kemudahan navigasi antar-bab saat presentasi, serta wibawa visual setara publikasi kuratorial museum/arsip tanpa kesan template buatan AI.

## Positioning

Menggabungkan ketelitian monograf sejarah sosial-ekonomi berbasis literatur akademik (Jan Breman, C. Fasseur, Robert Van Niel, Sartono Kartodirdjo & Djoko Suryo, Multatuli, *Staatsblad* 1834 No. 22, Laporan Otto van Rees 1867) dengan perangkat laboratorium interaktif langsung di dalam naskah: peta geospasial vektor akurat Nusantara & Jawa-Madura (Natural Earth 1:10m), kalkulator konversi satuan/kurs kolonial & neraca beban kerja petani, simulasi dilema sejarah tiga peran, serta suplemen Teka-Teki Silang (11×12) dan Kuis Satir Komisi Hindia.

## Operating Context

Dibuka di ruang kuliah (proyektor/layar lebar desktop) maupun layar ponsel mahasiswa melalui tautan web. Pembaca berpindah cepat antar 9 bagian utama: Beranda, Latar Belakang Krisis Pra-1830, Mesin Eksploitasi & Finansial (4 tab), Kronik Garis Waktu (1830–1915), Pelaksanaan *Staatsblad* 1834 vs Realita (3 tab), Dampak Kelaparan, Perlawanan, Parlemen & Historiografi (5 tab), Laboratorium Sejarah Interaktif (3 tab), Permainan Sejarah TTS & Kuis (2 tab), serta Katalog Kutipan & Daftar Pustaka APA.

## Capabilities and Constraints

- Stack: React 19 + TypeScript + Vite 8 dengan CSS modular per komponen dan lazy-loading (`InteractiveLabSection`, `HistoricalGamesSection`).
- Seluruh substansi akademik, angka historis, kutipan sumber primer, struktur 9 bagian, dan fitur interaktif yang sudah terverifikasi wajib dipertahankan utuh tanpa mengarang klaim historis baru.
- Seluruh antarmuka menggunakan Bahasa Indonesia akademik yang lugas dan akurat secara terminologi kolonial (*Batig Slot*, *Cultuurprocenten*, *Landrente*, *Heerendiensten*, *Sikep*, *Bouw*, *Pikul*).
- Peta geospasial mempertahankan geometri vektor asli Indonesia (`indonesiaGeoPaths.ts`) beserta koordinat GPS historis tervalidasi.

## Brand Commitments

- Identitas karya akademik kelompok: **CULTUURSTELSEL — Sistem Tanam Paksa di Hindia Belanda (1830–1870)** oleh **Rokan** & **Fiqrul** (*Mata Kuliah Sejarah Sosial Perekonomian*).
- Komitmen arah visual yang dipilih pengguna: **Total Exhibition Monograph Overhaul** — publikasi kuratorial berkarakter arsip museum (kertas batu hangat bersaturasi rendah, tipografi editorial non-pasaran, komposisi Hero split berlukisan arsip asli, dan penghapusan total penanda *AI-generated UI*).

## Evidence on Hand

- Dataset akademik terstruktur di `src/data/historyContent.ts` (33+ dataset sejarah sosial-ekonomi) dan `src/data/gamesContent.ts` (10 kata TTS tervalidasi & 8 soal kuis).
- 15 aset gambar arsip bersejarah domain publik berformat WebP HD di `public/images/` (lukisan Raden Saleh *Potret Johannes van den Bosch* 1836 & *Penangkapan Pangeran Diponegoro*, litografi Perang Padri, Revolusi Belgia karya Gustave Wappers, arsip komoditas kopi/tebu/nila/tembakau, serta potret Multatuli, Baron van Hoëvell, Fransen van de Putte, Otto van Rees, K.W. van Gorkom, Dirk van Hogendorp).
- Geometri peta vektor geospasial Indonesia 1:10m di `src/data/indonesiaGeoPaths.ts`.

## Product Principles

1. **Kebenaran Arsip di Atas Dekorasi:** Setiap elemen visual harus melayani pembacaan bukti sejarah, angka buku kas, dan kesaksian petani—bukan menghias halaman dengan ornamen palsu.
2. **Hierarki Monograf Kuratorial:** Memisahkan teks naratif, tabel komparatif, angka statistik, dan pelat gambar arsip melalui proporsi tipografi dan garis tipis buku besar, bukan tumpukan kartu di dalam kartu.
3. **Interaktivitas yang Bermakna Historis:** Setiap kontrol interaktif (peta, kalkulator, garis waktu, kuis) harus langsung memperlihatkan mekanisme sebab-akibat sejarah kolonial tanpa gesekan kognitif di desktop maupun ponsel.
4. **Keterbacaan & Kontras Ketat:** Seluruh teks, angka tabel, dan penanda status memenuhi kontras WCAG AA (≥4.5:1) dengan panjang baris baca ideal (65–75 karakter).

## Accessibility & Inclusion

Memenuhi kontras teks minimal WCAG AA (4.5:1 untuk teks isi/label dan 3:1 untuk teks ukuran besar), dukungan navigasi papan ketik penuh (`:focus-visible`, `skip-to-content`, penutupan modal dengan `Escape`), target sentuh minimal `44×44px`, serta penghormatan terhadap `prefers-reduced-motion`.

