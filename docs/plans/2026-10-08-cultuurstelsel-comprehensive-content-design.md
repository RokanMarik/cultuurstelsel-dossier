# Desain Arsitektur Konten Lengkap & Interaktif: Cultuurstelsel (1830–1870)

## 1. Ringkasan & Tujuan
Mengintegrasikan seluruh materi akademik komprehensif yang disediakan pengguna ke dalam platform web Cultuurstelsel, dengan memprioritaskan keterbacaan yang tinggi (*high readability*), modularitas visual, dan kelengkapan 100% fakta sejarah & sitasi ilmiah (Breman, 2014; Vitalis; Van Rees; Van Gorkom; Multatuli; Van Hoëvell; Van Hogendorp; Fransen van de Putte).

---

## 2. Struktur Modul & Pemetaan Konten

### A. Bagian Latar Belakang & Doktrin Fiskal (`BackgroundSection.tsx` & `historyContent.ts`)
1. **Defisit Keuangan Akibat Perang Diponegoro (1825–1830)**:
   - Pengeluaran militer membengkak hebat, utang menumpuk.
   - Johannes van den Bosch diangkat sebagai Gubernur Jenderal untuk memulihkan kas negara dengan memanfaatkan tanah dan tenaga kerja rakyat secara langsung.
   - Berlaku menyeluruh mulai 1830 dan dipertegas secara yuridis dalam **Staatsblad 1834 Nomor 22** (Breman, 2014).

### B. Bagian Eksploitasi & Ekspansi Wilayah (`ExploitationSection.tsx` & `historyContent.ts`)
1. **Ekspansi Sistem ke Luar Jawa**:
   - Karena keuntungan di Jawa sangat melimpah, sistem diperluas ke luar pulau Jawa.
   - **Sumatera Bagian Selatan & Minahasa (Sulawesi)**: Komoditas Kopi sebagai tanaman utama.
   - Daerah-daerah lain diarahkan memproduksi komoditas khusus pasar Eropa.
2. **Statistik Pengerahan Tenaga Kerja & Eksploitasi Priangan (Breman, 2014)**:
   - Proporsi pengerahan penduduk Jawa: **1840: 75,5%**, **1850: 46%**, **1860: 54,5%**.
   - Priangan: Jumlah keluarga wajib kopi melonjak dari **14.119 (1830)** menjadi **89.900 (1860)** (>80% keluarga petani).
   - Ketimpangan upah: Petani kopi Priangan hanya menerima rata-rata **f. 2,11 per keluarga per tahun**.
   - Beban kerja nyata: Semestinya ≤66 hari, kenyataannya membengkak menjadi **118 s.d. 225 hari/tahun**.
   - Tekanan demografis: Laporan Ono van Rees mencatat populasi Priangan hanya tumbuh **24% dalam 28 tahun (1837–1865)**, sebagian besar karena perbaikan pencatatan administratif bukan kelahiran alami.

### C. Bagian Pelaksanaan: 7 Aturan Staatsblad 1834 No. 22 vs Realita Lapangan (`ImplementationSection.tsx`)
7 Kartu Komparasi Berpasangan (Aturan Resmi Tertulis vs Realitas Lapangan menurut Breman, 2014):
1. **Ketentuan 1 (Luas Lahan)**: Aturan 1/5 (20%) tanah desa untuk ekspor vs Realita diambil >20%, separuh, bahkan seluruh lahan padi.
2. **Ketentuan 2 (Warga Tanpa Lahan)**: Kerja 66–75 hari/tahun ganti pajak vs Realita kerja berbulan-bulan, mandor memeras beban kerja demi kejar target cepat.
3. **Ketentuan 3 (Hak Milik Hasil Panen)**: Seluruh hasil panen milik pemerintah; rakyat dilarang menjual atau memanfaatkannya sendiri.
4. **Ketentuan 4 (Logistik & Pengangkutan)**: Kewajiban mengangkut dari kebun ke gudang dan pelabuhan tanpa upah sedikit pun.
5. **Ketentuan 5 (Perlindungan Waktu Padi)**: Tidak boleh mengganggu sawah pangan sendiri vs Realita ladang pangan terbengkalai, rakyat kelaparan.
6. **Ketentuan 6 (Pajak Tanah)**: Tanah yang diserahkan dibebaskan dari pajak vs Realita tetap dipungut pajak dan pungutan liar bekel/desa.
7. **Ketentuan 7 (Kompensasi Biaya)**: Janji ganti biaya tanam/rawat setelah hasil panen laku vs Realita sering tidak dibayar, nilai sangat kecil, atau ditahan kepala desa; kegagalan panen akibat cuaca/hama ditanggung petani.

### D. Bagian Garis Waktu & Dekonstruksi Sistem (`TimelineSection.tsx` & `TimelineModal.tsx`)
1. **Tragedi Kelaparan Lengkap**:
   - **Priangan (Sumedang & Sukapura, 1833–1835)**: Tanaman nila menyita waktu & sawah; rakyat makan umbi dan dedaunan hutan; Inspektur Tanaman L. Vitalis mencatat ribuan jiwa mati di 3 pabrik nila, korban tak bisa lagi mencerna makanan (Breman, 2014).
   - **Cirebon (1843–1844)**: Monopoli nila, kelaparan massal.
   - **Demak & Grobogan (1848–1850)**: Menular dari Demak ke Grobogan; eksodus dan penurunan drastis populasi; pengerahan kerbau angkut komoditas menyebabkan ternak mati kelelahan dan petani kehilangan hewan pembajak sawah.
2. **Garis Waktu Penghapusan Bertahap Komoditas**:
   - **1862**: Penghapusan kewajiban Lada.
   - **1865**: Penghapusan kewajiban Nila, Teh, dan Kayu Manis.
   - **1866**: Penghapusan kewajiban Tembakau (Breman, 2014).
   - **1870**: Titik akhir monopoli negara & awal era kapitalisme liberal:
     * *Agrarische Wet (UU Agraria 1870)*: Prinsip *Domeinverklaring* & hak sewa *Erfpacht* 75 tahun ke swasta Barat.
     * *Suiker Wet (UU Gula 1870)*: Penghapusan bertahap wajib tanam tebu diserahkan ke perkebunan swasta.
     * *Staatsblad 1870 No. 121 (Priangerstelsel)*: Menghapus wajib tanam kopi, kerja pengabdian (*ngawula*), dan hak bupati/pejabat pribumi di Priangan (efektif 1871).
   - **1915**: Penghapusan total budidaya kopi pemerintah (*gouvernements-koffiecultuur*).

### E. Bagian Dampak Sosio-Ekonomi & Gerakan Kritik (`ImpactSection.tsx` & `BibliographySection.tsx`)
1. **Dampak Positif yang Nyata**:
   - Pengenalan varietas komersial pasar dunia & pembelajaran metode pertanian modern.
   - Pembangunan infrastruktur jalan raya, jembatan, dan pabrik pengolahan untuk perhubungan dan masyarakat.
   - Pergeseran sistem pembayaran barter alam ke uang tunai (monetisasi pedesaan dan koneksi pasar luar).
2. **Galeri Tokoh Pengkritik Multi-Dimensi (Kritik Lintas Disiplin)**:
   - **Dirk van Hogendorp (1799)**: Perintis kritik awal, risalah *Berigt van den tegenwoordigen toestand der Bataafsche bezittingen*, usulkan hak milik tanah, hapus kerja paksa.
   - **Eduard Douwes Dekker / Multatuli (1860)**: Novel *Max Havelaar*, bongkar persekongkolan birokrasi bupati & kolonial di Lebak.
   - **Dr. W.R. van Hoëvell (1847/1849)**: Pendeta & parlemen liberal, pembelaan hak pribumi di Tweede Kamer.
   - **L. Vitalis & Ono van Rees**: Laporan investigasi resmi lapangan aparat kolonial membongkar kekerasan sistemik.
   - **K.W. van Gorkom**: Pakar pertanian, analisis matematis ekonomi bahwa pemerasan ini tidak masuk akal.
   - **Isaac Dignus Fransen van de Putte**: Menteri Koloni 1863–1866, pendorong legislasi penghapusan komoditas & perintis UU Agraria 1870.
   - **Muara Sejarah**: Pemicu lahirnya gagasan Politik Etis (awal abad ke-20).

---

## 3. Desain Komponen & Interaktivitas
- UI bergaya **Parchment Antik Modern** yang sudah ada, dengan kartu interaktif, badge status, stepper visual, dan tipografi elegan.
- Informasi disajikan dalam kartu terbagi (chunking), poin kunci tebal, dan kutipan bernas agar pembaca tidak lelah namun mendapatkan materi yang 100% lengkap dan berbobot akademis tinggi.
