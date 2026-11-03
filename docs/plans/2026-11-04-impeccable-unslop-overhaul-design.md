# Desain Overhaul Kuratorial: Impeccable v4.8.0 × Unslop (Monograf Sejarah *Cultuurstelsel* 1830–1870)

**Tanggal:** 4 November 2026  
**Arah Terpilih:** Pendekatan A — *Rijksmuseum Curatorial Split + Open Ledger Monograph*  
**Status:** Disetujui penuh oleh pengguna

---

## 1. Tujuan & Prinsip Utama

1. **Bebas Total dari Jejak AI (*0 Anti-Patterns*):** Menghapus seluruh 182 temuan audit live DOM (`47x nested-cards`, `35x side-tab`, `34x low-contrast`, `21x border-accent-on-rounded`, `10x kicker-above-heading`, `4x icon-tile-stack`, `2x dark-glow`, `1x hero-eyebrow-chip`, `1x cream-palette`, `1x overused-font`, `1x repeating-stripes-gradient`, `1x undersized-ui-text`, `1x wide-tracking`, dan `17x straggler`).
2. **Karakter Asli Produk (*Unslop Pass 0*):** Publikasi digital monograf sejarah kolonial setara katalog pameran kuratorial Rijksmuseum Amsterdam / KITLV Leiden — menggabungkan keheningan lembar kertas mineral netral, garis pembatas setipis rambut (`1px` *ledger hairlines*), angka kolom sejajar (`tabular-nums`), dan pelat lukisan arsip abad ke-19.
3. **Pelestarian 100% Konten & Fitur:** Seluruh 9 bagian, dataset `src/data/historyContent.ts`, `src/data/gamesContent.ts`, `src/data/indonesiaGeoPaths.ts`, 15 arsip gambar WebP, Dossier 3-Tab, Lightbox Kuratorial, Peta Vektor Geospasial Nusantara & Jawa, Kalkulator Eksploitasi, Simulator Dilema Petani, TTS 11×12, Kuis Satir, dan Salin Sitasi APA dipertahankan tanpa pemotongan fakta sejarah.

---

## 2. Sistem Token Visual (*Tokens First*)

### A. Palet Kertas Kapas Mineral & Tinta Arsip (Non-Cream, Rasio Kontras WCAG AA+)
- **Permukaan Dasar (`--bg-primary`):** `#f4f4f2` (*Mineral Cotton Rag* — netral dingin-hangat ekstra rendah kroma agar tidak memicu klise *warm cream* AI).
- **Lembar Baca & Panel Utama (`--bg-card` / `--bg-sheet`):** `#ffffff` (*Pure Archival Sheet*).
- **Permukaan Sekunder (`--bg-secondary` / `--bg-recessed`):** `#eae9e5` (*Pressed Stone Ledger*).
- **Permukaan Pelat Gelap Kuratorial (`--bg-plate`):** `#181816` (*Exhibition Charcoal Slate* — tanpa glow berwarna).
- **Tinta Teks Primer (`--text-primary`):** `#171715` (~`16.5:1` di atas `#f4f4f2`).
- **Tinta Teks Sekunder (`--text-secondary`):** `#3f3e3a` (~`9.6:1`).
- **Tinta Meta / Keterangan (`--text-muted`):** `#5c5a54` (~`6.2:1`, melampaui batas `4.5:1` WCAG AA).
- **Aksen Tunggal Primer (`--accent-crimson`):** `#8f1d14` (*Staatsblad Vermilion Seal* — hanya untuk tombol primer, indikator tab/navigasi aktif, dan penanda krisis primer).
- **Tinta Sekunder Fungsional:** Perunggu Arsip Pekat `#6e4b0c` (~`6.8:1` untuk angka penting), Biru Prusia `#1c3f5e` (~`9.4:1`), Hijau Agraria Tua `#1e4d38` (~`8.7:1`).
- **Garis Pembatas (`--border-subtle` / `--border-strong`):** `#dcdad3` (`1px` hairline) dan `#bdbab0` (`1px` struktural).

### B. Tipografi Non-Klise AI
- **Display, Judul Bab, & Kutipan Sumber Primer (`--font-serif`):** `Spectral` (`400`, `400i`, `500`, `600`) — serif editorial tajam untuk layar baca panjang.
- **Teks Naratif & Antarmuka (`--font-sans`):** `Source Sans 3` (`400`, `500`, `600`) — menggantikan `Plus Jakarta Sans` yang terdeteksi sebagai *overused AI font*.
- **Angka Fiskal, Pasal, Koordinat, & Tahun (`--font-mono`):** `JetBrains Mono` (`400`, `500`) dengan `font-variant-numeric: tabular-nums`.
- **Disiplin Bobot & Spasi Huruf:** Bobot maksimum `600` (menghapus seluruh `700`/`800`/`900` yang berteriak); ukuran teks UI minimum `12px` (`0.75rem`); `text-wrap: pretty` pada seluruh paragraf dan butir daftar; lebar baca naratif dibatasi `≤ 68ch`.

### C. Geometri, Tata Ruang, & Gerak
- **Grid 4px & Radius Bersarang:** Skala spasi berbasis kelipatan `4px`; radius terstruktur `2px` / `4px` / `8px` (`radius_inner = max(0, radius_outer - padding)`), menghapus kapsul `9999px` pada label teks.
- **Tanpa Kotak Bersarang & Tanpa *Side-Tab*:** Kartu tidak boleh membungkus kartu berbingkai lain (`0 nested-cards`); pembagian internal menggunakan garis tipis `1px` dan ruang kosong. Seluruh `border-left: 3px/4px/5px` dan `border-top/bottom` tebal pada sudut membulat dihapus total.
- **Pembuka Bab Monograf 2-Kolom:** Setiap bab dibuka oleh garis horisontal `1px` penuh dengan judul `<h2>` di kolom kiri dan pengantar kuratorial di kolom kanan — tanpa *eyebrow* kapsul, tanpa nomor bab kecil bertumpuk di atas judul, dan tanpa pembagi berlian dekoratif.
- **Gerak Tenang:** Kurva tunggal `cubic-bezier(0.22, 1, 0.36, 1)` berdurasi `180ms–240ms`, menghormati `prefers-reduced-motion: reduce`.

