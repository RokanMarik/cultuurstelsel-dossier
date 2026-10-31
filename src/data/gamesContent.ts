export type CrosswordDirection = 'across' | 'down';

export interface CrosswordWord {
  id: string;
  number: number;
  direction: CrosswordDirection;
  row: number;
  col: number;
  answer: string;
  clue: string;
  wittyNote: string;
}

export interface CrosswordCellMeta {
  key: string;
  row: number;
  col: number;
  solution: string;
  clueNumber?: number;
  acrossWordId?: string;
  downWordId?: string;
}

export type QuizQuestionType = 'multiple-choice' | 'stamp-verdict';

export interface QuizQuestion {
  id: string;
  number: number;
  type: QuizQuestionType;
  contextTag: string;
  question: string;
  options: string[];
  correctIndex: number;
  funnyRightReaction: string;
  funnyWrongReaction: string;
  historicalFact: string;
  sourceRef: string;
}

export interface QuizRankTier {
  id: string;
  minPct: number;
  badgeLabel: string;
  rankTitle: string;
  colonialSubtitle: string;
  satiricalNote: string;
}

export const CROSSWORD_ROWS = 11;
export const CROSSWORD_COLS = 12;

export const KEYBOARD_ROWS: readonly (readonly string[])[] = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

export const crosswordWordsData: CrosswordWord[] = [
  {
    id: '1-across',
    number: 1,
    direction: 'across',
    row: 0,
    col: 4,
    answer: 'BREMAN',
    clue: 'Sejarawan Belanda kritis (nama belakang) yang membongkar mitos "lunak" Tanam Paksa lewat buku Keuntungan Kolonial dari Kerja Paksa.',
    wittyNote: 'Tepat! Profesor Jan Breman tersenyum bangga melihat kamu tidak tertipu laporan manis pejabat Batavia.',
  },
  {
    id: '2-down',
    number: 2,
    direction: 'down',
    row: 0,
    col: 7,
    answer: 'MULTATULI',
    clue: 'Nama pena mantan Asisten Residen Lebak ("Aku Telah Banyak Menderita") yang novelnya bikin kuping Raja Belanda panas.',
    wittyNote: 'Sah! Eduard Douwes Dekker langsung mengangkat topi; lelang kopi Amsterdam mendadak hening!',
  },
  {
    id: '3-across',
    number: 3,
    direction: 'across',
    row: 2,
    col: 1,
    answer: 'BATIGSLOT',
    clue: 'Istilah Belanda untuk "saldo untung bersih" ratusan juta gulden yang melunasi utang Den Haag sekaligus membangun rel kereta mereka.',
    wittyNote: 'Cring! Kas Kerajaan Belanda langsung senyum lebar, sementara kas desa di Jawa tinggal debu.',
  },
  {
    id: '3-down',
    number: 3,
    direction: 'down',
    row: 2,
    col: 1,
    answer: 'BOSCH',
    clue: 'Nama belakang Gubernur Jenderal pencetus Cultuurstelsel yang doyan bagi-bagi kontrak pabrik gula ke lingkaran dekatnya.',
    wittyNote: 'Betul! Graaf van den Bosch langsung menyembunyikan berkas konsesi pabrik gula anaknya di laci meja.',
  },
  {
    id: '4-down',
    number: 4,
    direction: 'down',
    row: 4,
    col: 4,
    answer: 'PAJAK',
    clue: 'Pungutan sewa tanah (landrente) yang di atas kertas katanya "dihapus" kalau ikut Tanam Paksa, eh di lapangan tetap ditagih dobel!',
    wittyNote: 'Jitu! Di Staatsblad tertulis bebas pungutan, di sawah penagihnya malah datang dua kali.',
  },
  {
    id: '5-down',
    number: 5,
    direction: 'down',
    row: 4,
    col: 10,
    answer: 'NILA',
    clue: 'Tanaman pewarna biru seragam militer Eropa (Indigofera) yang air rendaman fermentasinya bikin gatal-gatal dan sawah kurus kering.',
    wittyNote: 'Mantap! Seragam tentara Eropa makin biru kinclong, tangan petani Cirebon ikut membiru kecapekan.',
  },
  {
    id: '6-across',
    number: 6,
    direction: 'across',
    row: 5,
    col: 1,
    answer: 'CACAH',
    clue: 'Satuan hitung tradisional Jawa berbasis keluarga/rumah tangga penggarap yang dipakai kolonial untuk mematok target kerja paksa.',
    wittyNote: 'Luar biasa! Satu keluarga dihitung satu unit tenaga kerja, tapi kerjanya rombongan seisi rumah.',
  },
  {
    id: '7-across',
    number: 7,
    direction: 'across',
    row: 7,
    col: 7,
    answer: 'LEBAK',
    clue: 'Wilayah di Banten latar kisah pilu Saidjah & Adinda tempat kerbau petani dirampas demi jamuan pejabat daerah.',
    wittyNote: 'Tepat sasaran! Kerbau Bapak Saidjah akhirnya masuk catatan sejarah dunia berkat ingatanmu.',
  },
  {
    id: '8-down',
    number: 8,
    direction: 'down',
    row: 7,
    col: 11,
    answer: 'KOPI',
    clue: 'Biji komoditas primadona Priangan yang memaksa petani menginap berbulan-bulan di bivak hutan pegunungan.',
    wittyNote: 'Harum di kafe Eropa, dingin menggigil di bivak hutan Priangan! Jawabanmu 100% akurat.',
  },
  {
    id: '9-across',
    number: 9,
    direction: 'across',
    row: 8,
    col: 0,
    answer: 'DEMAK',
    clue: 'Wilayah di Jawa Tengah yang bersama Grobogan dilanda bencana kelaparan dahsyat pada 1848–1850 akibat ekspansi tanaman ekspor & pajak.',
    wittyNote: 'Benar! Tragedi yang mengguncang parlemen Den Haag melalui pidato lantang Baron van Hoëvell.',
  },
];

export function buildCrosswordGridMeta(): (CrosswordCellMeta | null)[][] {
  const grid: (CrosswordCellMeta | null)[][] = Array.from({ length: CROSSWORD_ROWS }, () =>
    Array.from({ length: CROSSWORD_COLS }, () => null)
  );

  for (const word of crosswordWordsData) {
    const dr = word.direction === 'down' ? 1 : 0;
    const dc = word.direction === 'across' ? 1 : 0;

    for (let i = 0; i < word.answer.length; i++) {
      const r = word.row + dr * i;
      const c = word.col + dc * i;
      const ch = word.answer[i];
      const existing = grid[r][c];

      if (!existing) {
        grid[r][c] = {
          key: `${r}-${c}`,
          row: r,
          col: c,
          solution: ch,
          clueNumber: i === 0 ? word.number : undefined,
          acrossWordId: word.direction === 'across' ? word.id : undefined,
          downWordId: word.direction === 'down' ? word.id : undefined,
        };
      } else {
        if (i === 0 && existing.clueNumber === undefined) {
          existing.clueNumber = word.number;
        }
        if (word.direction === 'across') {
          existing.acrossWordId = word.id;
        } else {
          existing.downWordId = word.id;
        }
      }
    }
  }

  return grid;
}

export const quizQuestionsData: QuizQuestion[] = [
  {
    id: 'quiz-1',
    number: 1,
    type: 'stamp-verdict',
    contextTag: 'Uji Stempel Pasal Staatsblad 1834',
    question:
      '"Kegagalan panen tanaman ekspor yang bukan disebabkan kesalahan atau kemalasan petani sepenuhnya menjadi tanggungan pemerintah kolonial."',
    options: ['Janji Manis Staatsblad', 'Realita Pahit Lapangan'],
    correctIndex: 0,
    funnyRightReaction:
      'Tepat! Di atas kertas Staatsblad 1834 No. 22 bunyinya mulia sekali, padahal pas gagal panen tetap petani desa yang disuruh menomboki!',
    funnyWrongReaction:
      'Kena gocek brosur Batavia! Kalimat indah begitu cuma hidup di lembaran Staatsblad 1834, di lapangan risiko gagal panen tetap dibebankan ke bahu petani.',
    historicalFact:
      'Dalam Staatsblad 1834 No. 22 ditetapkan bahwa gagal panen akibat bencana alam ditanggung pemerintah, namun praktiknya pejabat lokal tetap menuntut ganti rugi demi menjaga target panen.',
    sourceRef: 'Staatsblad van Nederlandsch-Indië 1834 No. 22; Hermawati (2013)',
  },
  {
    id: 'quiz-2',
    number: 2,
    type: 'multiple-choice',
    contextTag: 'Insentif Birokrasi Kolonial',
    question:
      'Apa nama "uang pelicin resmi" berupa komisi persentase hasil panen yang bikin Residen, Kontroleur, sampai Bupati berlomba-lomba memeras keringat desa melebihi kuota?',
    options: [
      'Cultuurprocenten',
      'Landrente Bonus',
      'Koffie Tunjangan',
      'Heeren-dividen',
    ],
    correctIndex: 0,
    funnyRightReaction:
      'Jitu sekali! Begitu dengar kata Cultuurprocenten, mata para pejabat kolonial langsung berbinar-binar seperti melihat peti gulden!',
    funnyWrongReaction:
      'Bukan yang itu! Namanya Cultuurprocenten — bonus persentase panen yang mengubah birokrat lokal menjadi mesin pemeras kuota ekspor.',
    historicalFact:
      'Sistem Cultuurprocenten memberikan bonus persentase langsung dari volume setoran komoditas ekspor karesidenan, memicu penyitaan sawah melampaui batas 1/5 bagian.',
    sourceRef: 'Fasseur (1992); Kurniawan (2015)',
  },
  {
    id: 'quiz-3',
    number: 3,
    type: 'stamp-verdict',
    contextTag: 'Audit Jam Kerja Perkebunan',
    question:
      '"Petani Jawa dipaksa bekerja mengurus kebun kopi dan tebu hingga 180–220 hari setahun sehingga sawah padinya sendiri terbengkalai."',
    options: ['Janji Manis Staatsblad', 'Realita Pahit Lapangan'],
    correctIndex: 1,
    funnyRightReaction:
      'Tajam! Aturan kertasnya maksimal 66 hari (3 bulan), tapi di lapangan petani disuruh kerja hampir sepanjang tahun tanpa libur akhir pekan!',
    funnyWrongReaction:
      'Wah, mana berani Van den Bosch menulis 220 hari di dokumen resmi! Di kertas tertulis maksimal 66 hari, sementara 180–220 hari adalah realita pahit di lapangan.',
    historicalFact:
      'Riset arsip Jan Breman (2014) membuktikan mobilisasi kerja wajib kopi Priangan dan tebu pesisir Jawa menyita hingga lebih dari 200 hari kerja per tahun.',
    sourceRef: 'Breman (2014); Sondarika (2019)',
  },
  {
    id: 'quiz-4',
    number: 4,
    type: 'multiple-choice',
    contextTag: 'Mesin Kas Kerajaan Belanda',
    question:
      'Ke mana perginya sebagian besar dana surplus "Batig Slot" (>800 juta gulden) yang diperas dari kebun-kebun Jawa sepanjang 1831–1877?',
    options: [
      'Membangun universitas & irigasi modern gratis di seluruh desa Jawa',
      'Melunasi utang negara Belanda, membiayai perang, & membangun jaringan kereta api di negeri Belanda',
      'Dibagikan rata sebagai tabungan pensiun hari tua para petani penggarap',
      'Disimpan utuh di brankas Kabupaten Lebak sebagai dana darurat paceklik',
    ],
    correctIndex: 1,
    funnyRightReaction:
      '100 poin! Negeri Belanda bebas bangkrut dan punya jalur kereta api mulus, sedangkan jembatan bambu di desa Jawa disuruh perbaiki pakai kerja rodi!',
    funnyWrongReaction:
      'Andai saja semanis itu! Kenyataannya Batig Slot mengalir ke perbendaharaan Den Haag untuk membayar utang Vereenigde Oostindische Compagnie/kerajaan dan infrastruktur Belanda.',
    historicalFact:
      'Antara 1831–1877, transfer bersih Hindia Belanda menyumbang rata-rata 19% hingga >30% total pendapatan APBN Kerajaan Belanda di Eropa.',
    sourceRef: 'Van Niel (1988); Ricklefs (2008)',
  },
  {
    id: 'quiz-5',
    number: 5,
    type: 'multiple-choice',
    contextTag: 'Gejolak Kemanusiaan 1843–1850',
    question:
      'Apa pemicu utama meledaknya tragedi kelaparan hebat dan eksodus besar-besaran penduduk di Karesidenan Cirebon (1843) serta Demak–Grobogan (1848–1850)?',
    options: [
      'Petani mendadak bosan makan nasi dan beralih diet roti Eropa',
      'Kombinasi penyitaan sawah irigasi terbaik untuk tebu/nila, kerja wajib berlebih, serta pungutan pajak tambahan yang mencekik',
      'Harga kopi di pasar Amsterdam turun menjadi nol gulden semalam',
      'Seluruh lahan Jawa diubah menjadi lapangan parade kavaleri Belanda',
    ],
    correctIndex: 1,
    funnyRightReaction:
      'Analisis sejarawan sejati! Ketika sawah padi terbaik direbut tanaman ekspor plus pajak tetap dicekik, lumbung pangan rakyat langsung runtuh.',
    funnyWrongReaction:
      'Kurang tepat! Bencana kelaparan dipicu penyempitan lahan pangan akibat ekspansi nila/tebu dan pemerasan pajak/komisi pejabat di tengah cuaca buruk.',
    historicalFact:
      'Di Cirebon (1843) dan Demak-Grobogan (1848–1850), ratusan ribu jiwa meninggal atau mengungsi akibat runtuhnya ketahanan pangan lokal.',
    sourceRef: 'Elson (1994); Kartodirdjo & Suryo (1991)',
  },
  {
    id: 'quiz-6',
    number: 6,
    type: 'stamp-verdict',
    contextTag: 'Bedah Klaim Sawah Pedesaan',
    question:
      '"Penggunaan tanah desa untuk tanaman ekspor dibatasi maksimal hanya 1/5 (20%) dari luas sawah pertanian agar produksi padi rakyat tetap aman."',
    options: ['Janji Manis Staatsblad', 'Realita Pahit Lapangan'],
    correctIndex: 0,
    funnyRightReaction:
      'Betul! Angka 1/5 itu cuma pajangan cantik di dokumen Staatsblad. Di daerah subur, 1/3 sampai hampir seluruh sawah beririgasi bagus disikat untuk tebu!',
    funnyWrongReaction:
      'Terbalik! Pembatasan maksimal 1/5 lahan adalah bunyi indah di atas kertas Staatsblad 1834; praktiknya meluas hingga 1/3 atau lebih dari sawah terbaik desa.',
    historicalFact:
      'Kewajiban 1/5 lahan sering dilanggar secara sistematis, terutama pada kultur tebu dan nila yang mengincar petak sawah dengan irigasi teknis terbaik.',
    sourceRef: 'Staatsblad 1834 No. 22; Kurniawan (2015)',
  },
  {
    id: 'quiz-7',
    number: 7,
    type: 'multiple-choice',
    contextTag: 'Monopoli Niaga & Pengapalan',
    question:
      'Perusahaan dagang bentukan Raja Willem I yang memegang hak monopoli mengangkut dan melelang kopi-gula Tanam Paksa di pasar Eropa adalah...',
    options: [
      'Nederlandsche Handel-Maatschappij (NHM)',
      'Javasche Spoorweg Kompanie (JSK)',
      'Bataviasche Koffie Syndicaat (BKS)',
      'Oost-Indische Suiker Bank (OISB)',
    ],
    correctIndex: 0,
    funnyRightReaction:
      'Tepat sekali! NHM alias "Kompeni Kecil" kesayangan Raja Willem I ini panen komisi pengapalan dan lelang tanpa takut rugi!',
    funnyWrongReaction:
      'Hampir! Jawabannya adalah Nederlandsche Handel-Maatschappij (NHM) yang didirikan tahun 1824 oleh Raja Willem I sebagai mesin pengapalan dan lelang.',
    historicalFact:
      'NHM bertindak sebagai agen tunggal konsinyasi hasil bumi pemerintah kolonial menuju gudang lelang Amsterdam dan Rotterdam (cikal bakal ABN AMRO).',
    sourceRef: 'Fasseur (1992); Multatuli (1860)',
  },
  {
    id: 'quiz-8',
    number: 8,
    type: 'multiple-choice',
    contextTag: 'Akhir Era & Transisi 1870',
    question:
      'Undang-undang tahun 1870 apa yang menandai berakhirnya monopoli Tanam Paksa negara sekaligus membuka pintu lebar-lebar bagi modal perkebunan swasta asing?',
    options: [
      'Agrarische Wet (Undang-Undang Agraria 1870) & Suikerwet',
      'Traktat London Kedua 1870',
      'Maklumat Bebas Kopi Priangan 1870',
      'Piagam Kemerdekaan Desa Jawa 1870',
    ],
    correctIndex: 0,
    funnyRightReaction:
      'Sempurna! Kaum Liberal menang di parlemen: negara mundur pelan-pelan, giliran pemodal swasta Eropa masuk menyewa tanah hingga 75 tahun!',
    funnyWrongReaction:
      'Keliru! Tonggak tahun 1870 adalah lahirnya Agrarische Wet (Menteri de Waal) & Suikerwet yang menggeser eksploitasi negara ke kapitalisme perkebunan swasta.',
    historicalFact:
      'Agrarische Wet 1870 mengizinkan perusahaan swasta menyewa tanah negara (erfpacht) hingga 75 tahun, sedangkan tanaman kopi wajib di Priangan baru benar-benar dihapus awal abad ke-20.',
    sourceRef: 'Kartodirdjo & Suryo (1991); Van Niel (1988)',
  },
];

export const quizRankTiersData: QuizRankTier[] = [
  {
    id: 'tier-multatuli',
    minPct: 85,
    badgeLabel: 'PANGKAT TERTINGGI • KELAS UTAMA',
    rankTitle: 'Sahabat Karib Multatuli & Pengguncang Tweede Kamer',
    colonialSubtitle: 'Inspektur Utama Kebenaran Arsip Hindia',
    satiricalNote:
      'Luar biasa! Satu pun akal-akalan statistik pejabat kolonial tak sanggup mengelabui matamu. Kalau kamu hidup tahun 1860, Van den Bosch dan para bupati korup sudah keringat dingin tiap dengar langkah sepatumu!',
  },
  {
    id: 'tier-auditor',
    minPct: 65,
    badgeLabel: 'PANGKAT MENENGAH ATAS • KELAS I',
    rankTitle: 'Juru Audit Rahasia Arsip Batavia',
    colonialSubtitle: 'Pemeriksa Pembukuan Gudang Kopi & Gula',
    satiricalNote:
      'Tajam dan teliti! Kamu sudah paham seluk-beluk Batig Slot dan Cultuurprocenten, walau sesekali masih hampir terbuai kalimat manis Staatsblad 1834. Sedikit lagi setara Baron van Hoëvell!',
  },
  {
    id: 'tier-mandor',
    minPct: 40,
    badgeLabel: 'PANGKAT LAPANGAN • KELAS II',
    rankTitle: 'Mandor Kebun Kopi Kurang Begadang',
    colonialSubtitle: 'Penjaga Timbangan Pikulan Distrik',
    satiricalNote:
      'Lumayan! Kamu tahu kopi Priangan itu pahit di bivak hutan, tapi masih sering ketukar antara aturan kertas dan praktik lapangan. Seduh kopi dulu satu cangkir lalu baca ulang bagian Staatsblad ya!',
  },
  {
    id: 'tier-gocek',
    minPct: 0,
    badgeLabel: 'PANGKAT MAGANG • KELAS PEMULA',
    rankTitle: 'Korban Gocekan Brosur Manis Van den Bosch',
    colonialSubtitle: 'Calon Juru Tulis Baru Pelabuhan Sunda Kelapa',
    satiricalNote:
      'Waduh! Kamu terlalu polos mempercayai janji "cuma 1/5 tanah dan bebas pajak" ala brosur kolonial. Untung ini cuma kuis sejarah—yuk intip materi di atas lalu balas dendam di percobaan berikutnya!',
  },
];
