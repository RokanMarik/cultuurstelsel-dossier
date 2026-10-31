export interface HistoricalImage {
  src: string;
  alt: string;
  caption: string;
  archiveSource: string;
  thumbSrc?: string;
}

export interface QuoteItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  work?: string;
}

export interface WarCrisis {
  id: string;
  name: string;
  years: string;
  impact: string;
  cost: string;
  image?: HistoricalImage;
}

export interface VocComparison {
  aspect: string;
  voc: string;
  cultuurstelsel: string;
}

export interface Commodity {
  id: string;
  name: string;
  latinName: string;
  category: string;
  regions: string[];
  description: string;
  burdenLevel: 'Kritis' | 'Sangat Berat' | 'Berat' | 'Sedang';
  fact: string;
  image?: HistoricalImage;
}

export interface HistorianInterpretation {
  id: string;
  scholar: string;
  interpretation: string;
}

export interface SecondaryCommodity {
  name: string;
  region: string;
}

export interface LawRule {
  ruleNumber: number;
  article: string;
  officialRule: string;
  fieldReality: string;
  severity: 'Tinggi' | 'Kritis' | 'Sedang';
}

export interface OuterJavaRegion {
  id: string;
  region: string;
  island: string;
  primaryCommodity: string;
  description: string;
  targetMarket: string;
}

export interface LaborStatisticItem {
  id: string;
  period: string;
  value: string;
  label: string;
  context: string;
  citation: string;
}

export interface HistoricalCritic {
  id: string;
  name: string;
  role: string;
  period: string;
  category: 'Sastrawan & Moral' | 'Parlemen & Politik' | 'Investigasi Lapangan' | 'Pakar Ekonomi & Agraria' | 'Perintis Awal';
  keyContribution: string;
  workOrCitation: string;
  impactNote: string;
  image?: HistoricalImage;
}

export interface TimelineEvent {
  id: string;
  year: number | string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string[];
  impactPoints: string[];
  historicalFigures: string[];
  image?: HistoricalImage;
}

export interface FamineCase {
  region: string;
  years: string;
  cause: string;
  victimCount: string;
  description: string;
}

export interface BibliographyItem {
  id: string;
  authors: string;
  year: string;
  title: string;
  publisher: string;
  type: 'Buku' | 'Jurnal' | 'Arsip Kolonial';
  doiUrl?: string;
  fullCitation?: string;
}

export interface VanDenBoschControversyPoint {
  id: string;
  title: string;
  badge: string;
  description: string;
  historicalDetail: string;
}

export interface EverydayFarmerLife {
  title: string;
  subtitle: string;
  aspects: {
    title: string;
    description: string;
    tag: string;
  }[];
  quote: {
    text: string;
    source: string;
  };
}

export interface CommodityFinancialItem {
  commodity: string;
  latinName?: string;
  profit1840_1849: string;
  status1850_1860: string;
  totalSurplusShare: string;
  keyDetails: string[];
}

export interface EcologicalZoneItem {
  type: string;
  cropCategory: string;
  crops: string[];
  landCharacteristics: string;
  ecologicalRationale: string;
  regions: string[];
}

export interface BatigSlotAllocationItem {
  id: string;
  title: string;
  amountOrScale: string;
  destination: string;
  description: string;
  historicalSignificance: string;
}

export interface MacroPopulationStat {
  year: string;
  totalPopulationPct: string;
  nonCoffeePct: string;
  landAllocationPct: string;
  highestResidencies: string;
  landAreaNote: string;
}

export interface CropMacroProductionRow {
  year: string;
  households: string;
  production: string;
  totalPlantloon: string;
  plantloonPerUnitOrHousehold: string;
  cultuurprocenten: string;
  extraMeta?: string;
}

export interface ColonialGlossaryTerm {
  term: string;
  definition: string;
  modernEquivalent: string;
  contextNote: string;
}

export interface BremanCritiquePoint {
  id: string;
  title: string;
  mythVsFact: {
    officialClaim: string;
    groundReality: string;
  };
  evidence: string;
  historianCitation: string;
}

export interface ResidencyComparisonItem {
  residency: string;
  islandArea: string;
  dominantCrops: string;
  populationInvolvement: string;
  sawahConfiscated: string;
  landrentSystem: string;
  plantloonPerFamily: string;
  cultuurprocenten: string;
  farmerWelfareStatus: 'Surplus Uang' | 'Nombok Pajak' | 'Feodalisme & Kemiskinan';
  keyMechanism: string;
  historiographicalRelevance: string;
}

export interface PeasantResistancePoint {
  id: string;
  category: 'Aksi Terbuka' | 'Perlawanan Bersenjata' | 'Sabotase Fisik' | 'Pelarian Massal' | 'Penyelundupan' | 'Pelumpuhan dari Dalam';
  title: string;
  locationOrYear: string;
  description: string;
  historicalImpact: string;
}

export interface ParliamentaryDebateItem {
  id: string;
  periodOrEvent: string;
  title: string;
  factions: string;
  coreDebate: string;
  outcomeAndImpact: string;
}

export interface HistoriographyLensItem {
  historian: string;
  schoolName: string;
  framework: string;
  primaryPerspective: string;
  primarySources: string;
  economicAssessment: string;
  collapseExplanation: string;
  keyWork: string;
}

// ==========================================
// NEW INTERFACES: PILLAR 6 – BUPATI, VAN REES, PRIANGAN
// ==========================================

export interface BupatiRoleItem {
  id: string;
  roleNumber: number;
  title: string;
  badge: string;
  summary: string;
  details: string[];
  historicalSource: string;
}

export interface VanReesReportSection {
  id: string;
  sectionNumber: number;
  title: string;
  badge: string;
  findings: string[];
  significance: string;
}

export interface PrianganMonetizationPhase {
  id: string;
  phase: string;
  periodLabel: string;
  title: string;
  characteristics: string[];
  monetizationLevel: 'Sangat Rendah' | 'Rendah' | 'Terbatas' | 'Berkembang Pesat';
  keyFact: string;
}

export interface PreangerBlueprintElement {
  id: string;
  elementNumber: number;
  title: string;
  preangerstelselOrigin: string;
  cultuurstelselAdoption: string;
  significance: string;
}

export interface BatigSlotUsageItem {
  id: string;
  category: string;
  period: string;
  amountGulden: string;
  beneficiary: string;
  description: string;
  javaContrast: string;
}

export interface VocExpansionMechanism {
  id: string;
  mechanismNumber: number;
  title: string;
  badge: string;
  description: string;
  longTermImpact: string;
}

export const heroData = {
  title: "CULTUURSTELSEL",
  subtitle: "Sistem Tanam Paksa di Hindia Belanda (1830–1870)",
  tagline: "Eksploitasi Agraris Kolonial, Kebijakan Fiskal Batig Slot, dan Transformasi Sosio-Ekonomi Masyarakat Pedesaan Jawa",
  authors: [
    { name: "Rokan", role: "Penyusun & Peneliti" },
    { name: "Fiqrul", role: "Penyusun & Peneliti" },
  ],
  course: "Mata Kuliah Sejarah Sosial Perekonomian",
  overview:
    "Cultuurstelsel (1830–1870) merupakan instrumen fiskal radikal pemerintah kolonial Belanda di bawah Gubernur Jenderal Johannes van den Bosch. Kebijakan ini memanfaatkan struktur birokrasi feodal tradisional Jawa untuk memobilisasi tanah dan tenaga kerja petani demi memproduksi komoditas ekspor bernilai tinggi di pasar dunia.",
  highlights: [
    { label: "Periode Berlangsung", value: "1830 – 1870", note: "4 Dekade Eksploitasi" },
    { label: "Pencetus Kebijakan", value: "Johannes van den Bosch", note: "Gubernur Jenderal Hindia Belanda" },
    { label: "Dasar Hukum", value: "Staatsblad 1834 No. 22", note: "Regulasi Resmi Pelaksanaan" },
    { label: "Surplus Kas (Batig Slot)", value: "> 800 Juta Gulden", note: "Keuntungan Mengalir ke Den Haag" },
  ],
  image: {
    src: "/images/van-den-bosch.webp",
    thumbSrc: "/images/van-den-bosch-thumb.webp",
    alt: "Potret Gubernur Jenderal Johannes van den Bosch oleh Raden Saleh",
    caption: "Johannes Graaf van den Bosch (1780–1844), Gubernur Jenderal Hindia Belanda (1830–1833) dan pencetus Sistem Tanam Paksa. Lukisan potret resmi karya Raden Saleh.",
    archiveSource: "Rijksmuseum Amsterdam / Raden Saleh (1836)"
  },
  quickSummary: {
    badge: "Ringkasan 1 Menit",
    readTime: "60 Detik Baca",
    title: "Intisari Kilat: Memahami Cultuurstelsel",
    points: [
      {
        step: "01",
        label: "Latar Belakang",
        text: "Pemerintah Belanda di ambang kebangkrutan akibat Perang Jawa (1825–1830) dan Perang Belgia. Kas negara membutuhkan dana segar secara kilat.",
      },
      {
        step: "02",
        label: "Praktek Eksploitasi",
        text: "Petani dipaksa menanam komoditas ekspor (kopi, gula, nila) di 1/5 bahkan seluruh tanah sawahnya, melebihi batas waktu 66 hari tanpa upah layak.",
      },
      {
        step: "03",
        label: "Mesin Fiskal Kolonial",
        text: "Sistem persenan (Cultuurprocenten) memotivasi bupati & lurah menindas rakyat sendiri. Belanda meraup untung bersih (Batig Slot) >800 juta gulden.",
      },
      {
        step: "04",
        label: "Dampak & Kehancuran",
        text: "Terjadi bencana kelaparan massal di Cirebon dan Grobogan, hingga skandal ini dibongkar oleh novel Max Havelaar dan resmi dihapus pada 1870.",
      },
    ],
  },
  quickShortcuts: [
    { label: "Latar Belakang", targetId: "latar-belakang", icon: "book" },
    { label: "5 Komoditas Ekspor", targetId: "eksploitasi", icon: "leaf" },
    { label: "Aturan Staatsblad", targetId: "pelaksanaan", icon: "scale" },
    { label: "Garis Waktu (Timeline)", targetId: "timeline-section", icon: "clock" },
    { label: "Dampak & Kelaparan", targetId: "dampak", icon: "alert" },
    { label: "Lab Sejarah Interaktif", targetId: "interactive-lab", icon: "compass" },
    { label: "TTS & Kuis Satir", targetId: "permainan-sejarah", icon: "gamepad" },
    { label: "Daftar Pustaka", targetId: "pustaka", icon: "bookmark" },
  ],
};

export interface FeaturedQuoteItem {
  id: string;
  badge: string;
  quote: string;
  author: string;
  role: string;
  work: string;
  historicalContext: string;
}

export const featuredHistoricalQuotes: FeaturedQuoteItem[] = [
  {
    id: "quote-multatuli",
    badge: "Kritik Sastra & Moral",
    quote: "Bila orang bertanya apakah hasil bumi itu dibayar dengan pantas kepada kaum pribumi, jawabannya adalah tidak! Kemakmuran negeri Belanda dibangun di atas tulang-belulang dan air mata para petani yang diperas tenaganya di tanah Jawa.",
    author: "Eduard Douwes Dekker (Multatuli)",
    role: "Mantan Asisten Residen Lebak & Sastrawan",
    work: "Max Havelaar: of de koffiveilingen der Nederlandsche Handel-Maatschappij (1860)",
    historicalContext: "Guncangan nurani terbesar abad ke-19 yang membongkar kemunafikan birokrasi bupati dan pejabat kolonial di Lebak langsung ke hadapan parlemen Belanda.",
  },
  {
    id: "quote-hoevell",
    badge: "Suara Parlemen Den Haag",
    quote: "Kekayaan jutaan gulden yang mengalir ke perbendaharaan Belanda bukanlah buah keajaiban ekonomi, melainkan hasil tetesan keringat petani Jawa yang sawahnya disita dan hidupnya dirundung kelaparan.",
    author: "Dr. W. R. Baron van Hoëvell",
    role: "Pendeta, Pembela Hak Pribumi & Anggota Parlemen Belanda",
    work: "Debat Parlemen Tweede Kamer (1849)",
    historicalContext: "Pidato berani pertama di hadapan parlemen Belanda yang membuka skandal kemanusiaan bencana kelaparan di Karesidenan Semarang dan Demak.",
  },
];

export const backgroundData = {
  sectionTitle: "Latar Belakang Historis",
  sectionSubtitle: "Krisis Keuangan Negeri Belanda dan Lahirnya Ide Van den Bosch",
  narrative:
    "Sistem Tanam Paksa dilakukan oleh pemerintah Hindia Belanda karena keuangan mereka mengalami pengeluaran yang berlebih (Defisit Keuangan), terutama ketika berperang melawan Pangeran Diponegoro sekitar tahun 1825 sampai 1830. Perang Diponegoro ini mengeluarkan biaya yang sangat tinggi terutama untuk kebutuhan militer dan membuat utang negara menumpuk. Akhirnya Johannes van den Bosch yang sedang menjabat sebagai Gubernur Jenderal membuat rencana agar uang kas negara bisa kembali pulih dengan cara memanfaatkan tanah dan tenaga kerja penduduk secara langsung. Sistem inilah yang mulai berlaku secara menyeluruh sekitar tahun 1830 serta landasan hukumnya dipertegas melalui Staatsblad 1834 Nomor 22 (Breman, 2014).",
  crises: [
    {
      id: "diponegoro",
      name: "Perang Jawa (Perang Diponegoro)",
      years: "1825 – 1830",
      impact: "Perlawanan terhebat yang dipimpin Pangeran Diponegoro melumpuhkan kontrol Belanda di Jawa Tengah dan memakan korban jiwa ratusan ribu jiwa. Menjadi penyebab utama kosongnya kas kolonial Hindia Belanda (Hermawati, 2013).",
      cost: "± 20 – 25 Juta Gulden (menguras kas kolonial)",
      image: {
        src: "/images/perang-diponegoro.webp",
        alt: "Lukisan Penangkapan Pangeran Diponegoro oleh Raden Saleh",
        caption: "Lukisan 'Penangkapan Pangeran Diponegoro' (1857) karya Raden Saleh. Menggambarkan penangkapan di Magelang yang menandai akhir Perang Jawa (1825–1830), perlawanan paling mahal yang menguras kas Belanda dan memicu diberlakukannya Cultuurstelsel.",
        archiveSource: "Koleksi Istana Kepresidenan Republik Indonesia / Karya Raden Saleh (1857)"
      }
    },
    {
      id: "padri",
      name: "Perang Padri di Minangkabau",
      years: "1821 – 1837",
      impact: "Konflik berkepanjangan melawan kaum Padri di pedalaman Sumatera Barat semakin memperparah kekosongan kas yang sudah kritis. Menuntut konsentrasi militer dan logistik yang sangat mahal (Hermawati, 2013; Sondarika, 2019).",
      cost: "Jutaan Gulden & Ribuan Pasukan Kolonial",
      image: {
        src: "/images/perang-padri.webp",
        alt: "Ilustrasi Kolonel Raaff dalam Perang Padri oleh J.P. de Veer",
        caption: "Kolonel Antoine Theodore Raaff memimpin pasukan kolonial Belanda dalam Perang Padri (1821–1837) di Sumatera Barat, perang panjang berbiaya besar yang turut menguras kas Hindia Belanda.",
        archiveSource: "Arsip Sejarah / Litografi J.P. de Veer (Raaff tijdens de Padri-Oorlogen)"
      }
    },
    {
      id: "belgia",
      name: "Perang Kemerdekaan Belgia",
      years: "1830 – 1831",
      impact: "Pemisahan Belgia dari Kerajaan Bersatu Belanda memutus wilayah industri utama dan melipatgandakan utang negara induk. Ketiga perang ini terjadi hampir bersamaan, membawa pemerintah kolonial ke titik kritis (Sondarika, 2019).",
      cost: "Defisit Anggaran Nasional Belanda Berlipat Ganda",
      image: {
        src: "/images/perang-belgia.webp",
        alt: "Lukisan Revolusi Belgia 1830 oleh Gustave Wappers",
        caption: "Lukisan 'Episodes from September Days 1830 on the Place de l’Hôtel de Ville in Brussels' (1835) karya Gustave Wappers. Menggambarkan berkobarnya Revolusi Belgia yang memisahkan diri dari Kerajaan Belanda, merontokkan sektor industri penting dan memperdalam krisis keuangan Willem I.",
        archiveSource: "Royal Museums of Fine Arts of Belgium / Gustave Wappers (1835)"
      }
    },
  ] as WarCrisis[],
  vanDenBoschConcept: {
    title: "Gagasan & Argumen Johannes van den Bosch",
    summary:
      "Raja Willem I mengutus Johannes van den Bosch ke Hindia Belanda dengan tugas mengembangkan Jawa sebagai wingewest (wilayah jajahan yang menghasilkan surplus ekspor). Van den Bosch percaya bahwa pembentukan perkebunan swasta terlalu padat modal dan terlalu lambat; ia menilai para petani pribumi Jawa tidak mampu bekerja tanpa kendali dari pemerintah. Oleh karena itu, ia mengusulkan memanfaatkan tatanan feodal dari atas ke bawah (Kurniawan, 2015):",
    points: [
      "Menghidupkan kembali verplichte leveranties (penyerahan wajib) — mengganti pajak tanah tunai dengan pembayaran dalam bentuk hasil bumi komoditas ekspor, terinspirasi keberhasilan Preanger Stelsel di Jawa Barat.",
      "Memanfaatkan tatanan feodal yang sudah ada (heerendiensten/kerja wajib feodal) serta kewajiban pengabdian tradisional (ngawula) tanpa perlu mendirikan lembaga baru sama sekali.",
      "Mengikutsertakan para bupati, patih, wedana, dan kepala desa dengan imbalan cultuurprocenten (persentase bonus panen) sehingga elit lokal termotivasi menegakkan sistem.",
    ],
  },
  historianInterpretations: [
    {
      id: "interp-kartodirdjo",
      scholar: "Kartodirdjo & Suryo (1991)",
      interpretation: "Cultuurstelsel merupakan kombinasi antara penyerahan wajib dan pajak tanah melalui penggunaan hasil pertanian — adaptasi dari tradisi verplichte leveranties VOC di masa lalu.",
    },
    {
      id: "interp-breman",
      scholar: "Jan Breman (2014)",
      interpretation: "Cultivatie adalah variasi dari mode produksi tributari (tributary mode of production), yang menggunakan kekuasaan politik dan struktur feodal untuk memobilisasi sumber daya (lahan dan manusia).",
    },
    {
      id: "interp-vanniel",
      scholar: "Van Niel (1988)",
      interpretation: "Cultivatie adalah bentuk eksploitasi kolonial yang memanfaatkan birokrasi tradisional untuk memobilisasi lahan dan tenaga kerja secara paksa di kepulauan Indonesia.",
    },
    {
      id: "interp-geertz",
      scholar: "Clifford Geertz",
      interpretation: "Melalui konsep 'involusi pertanian', Geertz mencatat bahwa Cultuurstelsel menciptakan 'kemiskinan bersama' (shared poverty) yang menyamaratakan kekayaan dan status sosial seluruh lapisan masyarakat di Jawa, mengarah pada stagnasi ekonomi jangka panjang (Kurniawan, 2015).",
    },
    {
      id: "interp-furnivall",
      scholar: "J. S. Furnivall",
      interpretation: "Cultivatie adalah metode memproduksi komoditas ekspor tropis: pemerintah kolonial memaksakan keharusan menanam tanaman komersial kepada para petani, yang tidak memilih apa yang ditanam dan tidak punya hak kepemilikan atas hasil panen (Sondarika, 2019).",
    },
  ] as HistorianInterpretation[],
  quotes: [
    {
      id: "quote-fasseur",
      quote: "Cultuurstelsel bukan sekadar sistem ekonomi, melainkan perkawinan politik antara despotisme birokrasi kolonial dan tradisi feodal pribumi untuk mengeruk kekayaan tanah Jawa demi menyelamatkan negeri Belanda dari jurang kebangkrutan.",
      author: "Prof. Dr. C. Fasseur",
      role: "Sejarawan Belanda",
      work: "The Politics of Colonial Exploitation (1992)",
    },
    {
      id: "quote-sartono",
      quote: "Bagi petani Jawa, Tanam Paksa menandai penetrasi ekonomi uang dan kapitalisme global yang dipaksakan melalui instrumen pemaksaan politik kekuasaan tradisional, menciptakan 'involusi agraris' dan penderitaan struktural yang panjang.",
      author: "Prof. Dr. Sartono Kartodirdjo",
      role: "Guru Besar Sejarah Indonesia",
      work: "Pengantar Sejarah Indonesia Baru: Sejarah Pergerakan Nasional",
    },
    {
      id: "quote-ong",
      quote: "Pemerintah kolonial bertindak bagaikan pedagang raksasa bersenjatakan birokrasi militer dan hukum, di mana bupati dan kepala desa difungsikan sebagai mandor pemaksa terhadap warganya sendiri.",
      author: "Dr. Ong Hok Ham",
      role: "Sejarawan Sosial",
      work: "Dari Soal Priyayi sampai Candu (2002)",
    },
  ] as QuoteItem[],
};

export const exploitationData = {
  sectionTitle: "Bentuk Eksploitasi Kolonial",
  sectionSubtitle: "Lebih Eksploitatif dari VOC: Cakupan Kendali Langsung Birokrasi Negara atas Lahan, Tenaga Kerja, dan Hidup Petani",
  vocComparison: [
    {
      aspect: "Sistem Penguasaan",
      voc: "Perusahaan swasta (Kongsi Dagang VOC) dengan monopoli perdagangan dan pemungutan paksa verplichte leveranties melalui elit pribumi — tanpa campur tangan dalam proses produksi di tingkat desa (Kurniawan, 2015).",
      cultuurstelsel: "Direstrukturisasi oleh birokrasi negara langsung: merestrukturisasi sistem agraris dengan mobilisasi lahan dan tenaga kerja secara masif di bawah pengawasan resmi aparat kolonial.",
    },
    {
      aspect: "Target & Kuota Fiskal",
      voc: "Tidak ada kuota penerimaan anggaran formal; tujuan utama adalah profit dagang sepihak perusahaan.",
      cultuurstelsel: "Kuota batig slot yang jelas — surplus kas wajib mengalir ke Den Haag, ditegakkan dengan tekanan berat melalui sistem cultuurprocenten (persentase hasil tanam) atas kepala pejabat pribumi.",
    },
    {
      aspect: "Lahan yang Dieksploitasi",
      voc: "Kopi wajib ditanam di pekarangan rumah atau lahan sebelumnya tidak terpakai (seperti dalam Preangerstelsel terbatas di Priangan).",
      cultuurstelsel: "Sawah-sawah paling subur dan beririgasi terbaik dikuasai oleh tebu, nila, dan tanaman ekspor — merampas langsung mata pencaharian pangan utama para petani (Breman, 2014, hlm. 207).",
    },
    {
      aspect: "Cakupan Wilayah",
      voc: "Terpusat pada pos dagang pesisir dan rempah-rempah Maluku; tidak menembus sistem pedesaan secara mendalam.",
      cultuurstelsel: "Menembus pedalaman seluruh pelosok desa di pulau Jawa — mengintegrasikan jutaan petani, sawah subur, dan seluruh tenaga kerja keluarga secara paksa.",
    },
  ] as VocComparison[],
  commodities: [
    {
      id: "kopi",
      name: "Kopi (Koffie)",
      latinName: "Coffea arabica / canephora",
      category: "Komoditas Pegunungan Tahunan",
      regions: ["Priangan (Jawa Barat)", "Kedu", "Pasuruan", "Besuki", "Sumatera Barat", "Minahasa"],
      description: "Komoditas paling menguntungkan — menyumbang 80% keuntungan Cultuurstelsel. Ditanam di pegunungan dan 'lahan terlantar' (woeste gronden). Setiap keluarga wajib merawat 1.000 pohon kopi; jarak ladang dari pemukiman bisa mencapai 6–30 pal, memaksa seluruh anggota keluarga tinggal di barak berbulan-bulan (Breman, 2014, hlm. 215).",
      burdenLevel: "Sangat Berat",
      fact: "Peraturan mewajibkan 66 hari kerja/tahun, namun kenyataannya mencapai 225 hari — hampir tiga kali lipat batas resmi (Breman, 2014, hlm. 259).",
      image: {
        src: "/images/komoditas-kopi.webp",
        alt: "Petani dan Pengolahan Kopi di Jawa",
        caption: "Pengolahan buah kopi di perkebunan Jawa. Komoditas kopi menyumbang lebih dari 80% surplus keuntungan kas kolonial (Batig Slot).",
        archiveSource: "Tropenmuseum / Wereldmuseum Amsterdam"
      }
    },
    {
      id: "tebu",
      name: "Tebu & Gula (Suiker)",
      latinName: "Saccharum officinarum",
      category: "Komoditas Dataran Rendah Musiman",
      regions: ["Surabaya", "Pasuruan", "Pesisir Utara Jawa", "Jawa Timur", "Cirebon", "Pekalongan"],
      description: "Membutuhkan lahan sawah subur yang dirotasi dengan padi — petani harus bekerja di ladang sekaligus di pabrik gula kolonial. Menyita sawah pangan terbaik sehingga secara langsung memicu krisis beras dan kelaparan.",
      burdenLevel: "Kritis",
      fact: "Penyerobotan sawah padi terbaik untuk rotasi tebu kolonial menjadi pemicu utama bencana kelaparan massal di Cirebon (1844) dan Demak-Grobogan (1848–1850).",
      image: {
        src: "/images/komoditas-tebu.webp",
        alt: "Tanaman Tebu dan Industri Gula Kolonial",
        caption: "Tanaman tebu (Saccharum officinarum) yang menyita sawah beririgasi subur di pesisir utara Jawa, memicu kelangkaan beras dan krisis pangan.",
        archiveSource: "Köhler’s Medizinal-Pflanzen (1887)"
      }
    },
    {
      id: "nila",
      name: "Nila / Tarum (Indigo)",
      latinName: "Indigofera tinctoria",
      category: "Bahan Pewarna Tekstil Musiman",
      regions: ["Bagelen", "Banyumas", "Cirebon", "Pekalongan", "Priangan", "Semarang"],
      description: "Tanaman yang paling menyengsarakan — proses pengolahannya berupa perendaman daun berjam-jam di bak pengolahan berbau busuk dengan risiko penyakit pernapasan serius. Dirotasi dengan padi tetapi merusak tanah dan menghabiskan air irigasi.",
      burdenLevel: "Sangat Berat",
      fact: "Monopoli nila atas lahan dan air irigasi di Karesidenan Cirebon memicu bencana kelaparan 1843–1844 yang menewaskan puluhan ribu jiwa (Kurniawan, 2015; Sondarika, 2019).",
      image: {
        src: "/images/komoditas-nila.webp",
        alt: "Tanaman Nila / Tarum (Indigofera tinctoria)",
        caption: "Tanaman nila penghasil pewarna biru tekstil. Fermentasi daun di bak pabrik menghasilkan uap busuk beracun dan memicu tragedi kelaparan Cirebon.",
        archiveSource: "Koleksi Botani / Wikimedia Commons"
      }
    },
    {
      id: "teh",
      name: "Teh (Thee)",
      latinName: "Camellia sinensis",
      category: "Komoditas Perkebunan Tahunan",
      regions: ["Priangan (Jawa Barat)", "Bogor", "Dataran Tinggi Batavia"],
      description: "Ditanam di dataran tinggi Jawa Barat; menuntut pemetikan pucuk daun secara cermat dan terjadwal. Banyak menyerap tenaga kerja perempuan dan anak-anak petani.",
      burdenLevel: "Sedang",
      fact: "Menjadi cikal bakal berdirinya perkebunan teh swasta raksasa di era liberal pasca-1870 di Jawa Barat.",
    },
    {
      id: "tembakau",
      name: "Tembakau (Tabak)",
      latinName: "Nicotiana tabacum",
      category: "Komoditas Daun Kering Musiman",
      regions: ["Rembang", "Pacitan", "Madura", "Bojonegoro", "Besuki"],
      description: "Diwajibkan utamanya di Rembang, Pacitan, dan Madura. Ditanam secara rotasi di lahan sawah pasca panen. Menuntut keahlian khusus dalam perawatan daun, pengeringan (curing), dan pengepakan berstandar pasar Eropa.",
      burdenLevel: "Berat",
      fact: "Daerah Besuki dan Bojonegoro berkembang menjadi pusat tembakau cerutu terkemuka di pasar dunia.",
      image: {
        src: "/images/komoditas-tembakau.webp",
        alt: "Tanaman Tembakau (Nicotiana tabacum)",
        caption: "Budidaya daun tembakau cerutu kualitas ekspor di sentra perkebunan Besuki, Rembang, dan Bojonegoro.",
        archiveSource: "Koleksi Botani / Wikimedia Commons"
      }
    },
  ] as Commodity[],
  secondaryCommodities: [
    { name: "Lada (Pepper)", region: "Bangka & Lampung" },
    { name: "Kayu Manis (Cinnamon)", region: "Jawa Tengah & Sumatera" },
    { name: "Kapas (Cotton)", region: "Jawa Tengah" },
    { name: "Kina (Cinchona)", region: "Priangan (untuk quinine/anti-malaria)" },
  ] as SecondaryCommodity[],
  mechanisms: {
    batigSlot: {
      term: "Batig Slot (Surplus Kas Fiskal)",
      summary: "Kebijakan surplus anggaran di mana seluruh kelebihan pendapatan Hindia Belanda setelah dikurangi biaya administrasi wajib dikirim ke kas kerajaan di Den Haag.",
      detail: "Jumlah total keuntungan dari Jawa yang mengalir ke negara induk selama tahun 1831–1866 mencapai ratusan juta gulden. Dana tersebut tidak hanya melunasi utang-utang Kerajaan Belanda akibat Perang Diponegoro dan Revolusi Belgia, tetapi juga memungkinkan pemerintah berinvestasi signifikan dalam pembangunan infrastruktur Belanda — jaringan kereta api, kanal air, dan pertahanan militer (Breman, 2014, hlm. 341).",
    },
    cultuurprocenten: {
      term: "Cultuurprocenten (Persentase Bonus Panen)",
      summary: "Insentif finansial berupa persentase bonus yang diberikan kepada pejabat Belanda (Residen, Asisten Residen, Kontrolir) dan penguasa pribumi apabila produksi tanaman ekspor melebihi target.",
      detail: "Persentase-persentase ini sering sangat tinggi sehingga mendorong para pengawas untuk menekan para petani, mengambil lebih dari 20% lahan desa, dan memperpanjang jangka waktu kerja. Sistem ini menciptakan rantai hierarki — dari bupati hingga kepala desa dan mandor — untuk mengerahkan lebih banyak tenaga kerja. Selain bonus, pejabat pribumi juga mengeksploitasi petani tanpa tanah untuk menggarap sawah pribadi mereka (Hermawati, 2013; Kurniawan, 2015).",
    },
    indigenousElites: {
      term: "Pemerintahan Tidak Langsung (Indirect Rule) via Priyayi",
      summary: "Otoritas Belanda tidak pernah berurusan langsung dengan para petani — pemerintah mengandalkan birokrasi feodal tradisional (bupati, patih, wedana, kepala desa) sebagai mekanisme indirect rule.",
      detail: "Para pejabat pribumi memanfaatkan reputasi bangsawan dan kewajiban pengabdian tradisional (ngawula, herendiensten) untuk mempertahankan kendali atas desa serta mobilisasi sumber daya. Sistem cultuurprocenten memotivasi mereka untuk saling bersaing dalam menindas para petani demi memaksimalkan bonus pribadi — menciptakan spiral eksploitasi dari bupati hingga mandor tingkat desa (Kurniawan, 2015; Breman, 2014, hlm. 42).",
    },
  },
  outerJavaExpansion: {
    title: "Ekspansi Sistem ke Luar Pulau Jawa",
    subtitle: "Penyebaran Tanam Paksa Pasca-Sukses Monopoli Kas Jawa (Breman, 2014)",
    overview:
      "Pada awalnya sistem ini cuma diterapkan untuk di wilayah Jawa saja. Akan tetapi, karena sistem ini memberikan keuntungan yang sangat besar bagi kas kolonial, pemerintah memperluasnya ke wilayah lain hingga ke luar pulau Jawa. Di Sumatera bagian selatan dan Minahasa di Sulawesi, komoditas kopi menjadi tanaman utama yang dikembangkan secara luas. Daerah-daerah lain ditetapkan untuk memproduksi komoditas tertentu yang hanya berlaku dan bernilai tinggi di pasar Eropa (Breman, 2014).",
    regions: [
      {
        id: "sumatera-selatan",
        region: "Sumatera Bagian Selatan & Dataran Tinggi Barat",
        island: "Sumatera",
        primaryCommodity: "Kopi (Koffie)",
        description: "Sentra kopi utama luar Jawa di dataran tinggi pegunungan. Hasil panen diangkut ke pelabuhan pesisir untuk memenuhi lelang pasar dunia di Eropa.",
        targetMarket: "Bursa Komoditas Amsterdam & Rotterdam",
      },
      {
        id: "minahasa",
        region: "Karesidenan Minahasa",
        island: "Sulawesi",
        primaryCommodity: "Kopi Minahasa & Rempah",
        description: "Pemerintah memanfaatkan struktur kemasyarakatan dan hukum adat setempat untuk memaksakan wajib tanam kopi bagi petani pegunungan Minahasa.",
        targetMarket: "Pasar Konsumsi Kopi Premium Eropa",
      },
      {
        id: "komoditas-khusus",
        region: "Lampung, Bangka, dan Kepulauan Maluku",
        island: "Kepulauan Luar Jawa",
        primaryCommodity: "Lada, Kayu Manis, & Rempah Khusus",
        description: "Daerah lain ditetapkan untuk memproduksi komoditas spesifik yang memiliki permintaan eksklusif dan margin laba tinggi di bursa Eropa.",
        targetMarket: "Industri Pangan & Rempah Eropa",
      },
    ] as OuterJavaRegion[],
  },
  laborStatistics: {
    title: "Statistik Pengerahan Tenaga Kerja & Krisis Demografi (Breman, 2014)",
    subtitle: "Eskalasi Mobilisasi Paksa, Ketimpangan Upah, dan Tekanan Pertumbuhan Penduduk",
    items: [
      {
        id: "stat-1840",
        period: "Tahun 1840",
        value: "75,5%",
        label: "Pengerahan Penduduk Jawa",
        context: "Puncak mobilisasi awal di mana lebih dari tiga perempat total penduduk Jawa dikerahkan secara paksa ke dalam skema Tanam Paksa.",
        citation: "Breman (2014)",
      },
      {
        id: "stat-1850",
        period: "Tahun 1850",
        value: "46,0%",
        label: "Penurunan Pasca-Bencana",
        context: "Angka pengerahan sempat turun akibat meluasnya wabah kelaparan dan kematian massal di Cirebon serta Demak-Grobogan.",
        citation: "Breman (2014)",
      },
      {
        id: "stat-1860",
        period: "Tahun 1860",
        value: "54,5%",
        label: "Peningkatan Kembali",
        context: "Mobilisasi dinaikkan kembali untuk memeras sisa surplus kas sebelum gelombang kritik politik parlemen Belanda memuncak.",
        citation: "Breman (2014)",
      },
      {
        id: "stat-priangan-keluarga",
        period: "Priangan 1830–1860",
        value: "14.119 → 89.900",
        label: "Lonjakan Keluarga Wajib Kopi",
        context: "Jumlah keluarga yang terikat wajib tanam kopi melonjak drastis, mencakup lebih dari 80 persen dari total keluarga petani di Priangan.",
        citation: "Breman (2014)",
      },
      {
        id: "stat-upah",
        period: "Rata-rata Upah Tahunan",
        value: "f. 2,11",
        label: "Imbalan per Keluarga/Tahun",
        context: "Petani kopi Priangan hanya menerima rata-rata 2,11 gulden setahun, kontras ekstrem dengan miliaran gulden surplus yang mengalir ke Belanda.",
        citation: "Breman (2014)",
      },
      {
        id: "stat-hari-kerja",
        period: "Waktu Kerja Riil",
        value: "118 – 225 Hari",
        label: "Kerja Wajib per Tahun",
        context: "Meskipun aturan tertulis membatasi 66–75 hari, praktiknya membengkak hingga 225 hari, merampas waktu petani mengurus ladang padi sendiri.",
        citation: "Breman (2014)",
      },
      {
        id: "stat-ono-van-rees",
        period: "28 Tahun (1837–1865)",
        value: "24%",
        label: "Pertumbuhan Populasi Priangan",
        context: "Laporan Komisaris Ono van Rees mencatat populasi Priangan hanya tumbuh 24%, dan itu pun diduga karena perbaikan pencatatan administrasi ketimbang pertambahan demografis nyata.",
        citation: "Ono van Rees; Breman (2014)",
      },
    ] as LaborStatisticItem[],
  },
};

export const implementationData = {
  sectionTitle: "Pelaksanaan & Timeline Regulasi",
  sectionSubtitle: "Aturan Staatsblad 1834 No. 22 vs Realitas Penindasan Lapangan",
  intro:
    "Di atas kertas, aturan Cultuurstelsel dirancang seolah-olah tidak memberatkan rakyat desa dan menjamin perlindungan petani. Namun di lapangan, ketiadaan pengawasan independen dan dorongan sistem Cultuurprocenten mengubah ketentuan tersebut menjadi eksploitasi tanpa batas.",
  laws: [
    {
      ruleNumber: 1,
      article: "Penyisihan 1/5 (20%) Tanah Desa",
      officialRule: "Masyarakat wajib menyisihkan seperlima atau 20 persen dari tanah milik desa untuk ditanami tanaman yang mau diekspor yang ditentukan pemerintah.",
      fieldReality: "Tanah yang diambil sering kali melebihi batas dari 20 persen, bahkan hingga separuhnya ataupun lebih dari luas tanah yang dimiliki masyarakat. Akibatnya, lahan untuk menanam pangan sendiri menjadi sangat berkurang dan terbatas (Breman, 2014).",
      severity: "Kritis",
    },
    {
      ruleNumber: 2,
      article: "Wajib Kerja 66–75 Hari bagi Warga Tanpa Lahan",
      officialRule: "Bagi masyarakat yang tidak memiliki lahan atau tanah kosong, mereka wajib bekerja di lahan milik pemerintah selama 66 hingga 75 hari dalam satu tahun; pekerjaan ini dianggap sebagai pengganti bayar pajak.",
      fieldReality: "Aturan waktu kerja 66–75 hari dilanggar secara sewenang-wenang. Para pekerja dipaksa bekerja berbulan-bulan (mencapai 118 hingga 225 hari). Para mandor pengawas terus menambah beban kerja agar target tercapai cepat, membuat pekerja tidak sempat mengurus ladang pangan sendiri (Breman, 2014).",
      severity: "Kritis",
    },
    {
      ruleNumber: 3,
      article: "Monopoli Hak Milik Seluruh Hasil Panen",
      officialRule: "Dari seluruh hasil panen yang ada dari lahan tanam paksa menjadi hak milik pemerintah. Penduduk tidak berhak menjual atau memanfaatkannya sendiri.",
      fieldReality: "Pemerintah memonopoli 100% komoditas ekspor. Petani diperlakukan semata sebagai tenaga kerja tanpa hak atas nilai tambah produk di pasar lelang Eropa.",
      severity: "Tinggi",
    },
    {
      ruleNumber: 4,
      article: "Kewajiban Pengangkutan Logistik Tanpa Upah",
      officialRule: "Hasil panen diangkut dari kebun ke gudang dan ke pelabuhan; hal ini sudah menjadi kewajiban para penduduk setempat tanpa bisa mendapatkan upah.",
      fieldReality: "Beban logistik pengangkutan jarak jauh tanpa upah menguras fisik rakyat dan ternak. Kerbau dan sapi dipaksa mengangkut hingga mati kelelahan di jalan, melenyapkan hewan pembajak sawah milik petani (Breman, 2014).",
      severity: "Kritis",
    },
    {
      ruleNumber: 5,
      article: "Perlindungan Waktu Pengolahan Ladang Pangan",
      officialRule: "Penggarapan lahan tanam paksa tidak boleh mengganggu waktu pengolahan sawah ataupun ladang pangan sendiri agar ketersediaan pangan tidak terganggu.",
      fieldReality: "Di lapangan, jadwal tanam padi diabaikan total. Seluruh air irigasi dan tenaga kerja tersedot untuk tebu dan nila, mengakibatkan penanaman padi terbengkalai dan memicu wabah kelaparan dahsyat di Sumedang, Cirebon, Demak, dan Grobogan (Breman, 2014).",
      severity: "Kritis",
    },
    {
      ruleNumber: 6,
      article: "Pembebasan Pajak Tanah (Landrente)",
      officialRule: "Tanah yang diserahkan untuk tanam paksa dibebaskan dari pembayaran pajak tanah.",
      fieldReality: "Petani tetap ditarik pajak tanah penuh atas seluruh sawahnya, ditambah berbagai pungutan liar serta kerja wajib ekstra (ngawula) oleh para kepala desa dan bupati.",
      severity: "Tinggi",
    },
    {
      ruleNumber: 7,
      article: "Kompensasi Biaya Tanam & Tanggungan Gagal Panen",
      officialRule: "Pemerintah berjanji akan memberikan pengganti untuk biaya penanaman dan pemeliharaan kepada penduduk setelah hasil panen dijual.",
      fieldReality: "Pengganti biaya yang dijanjikan sering kali tidak dibayarkan, jumlah uang yang didapat sangat kecil, atau diserahkan kepada kepala desa sehingga tidak pernah sampai ke petani. Apabila terjadi kegagalan panen karena cuaca, hama, atau tanah kurang subur, seluruh kerugian ditanggung oleh penduduk sementara pemerintah tetap menuntut hasil sesuai target (Breman, 2014).",
      severity: "Kritis",
    },
  ] as LawRule[],
  timeline: [
    {
      id: "1830",
      year: 1830,
      title: "Pencanangan Cultuurstelsel oleh Johannes van den Bosch",
      badge: "Awal Mula",
      shortDesc: "Gubernur Jenderal Van den Bosch memberlakukan Tanam Paksa untuk memulihkan kas negara yang defisit parah akibat Perang Diponegoro (1825–1830).",
      fullDesc: [
        "Setelah Perang Diponegoro menguras anggaran militer hingga puluhan juta gulden dan menumpuk utang negara, Johannes van den Bosch tiba di Batavia dengan mandat langsung dari Raja Willem I.",
        "Ia merancang sistem pemulihan kas dengan memanfaatkan tanah dan tenaga kerja penduduk secara langsung. Sistem inilah yang mulai berlaku secara menyeluruh sekitar tahun 1830 dan dipertegas melalui Staatsblad 1834 No. 22 (Breman, 2014).",
      ],
      impactPoints: [
        "Mobilisasi lahan sawah dan tenaga kerja petani skala pulau",
        "Penetapan komoditas utama (kopi, tebu, nila)",
        "Pengaktifan ikatan feodal bupati dan kepala desa via Cultuurprocenten",
      ],
      historicalFigures: ["Johannes van den Bosch", "Raja Willem I"],
    },
    {
      id: "1833",
      year: "1833 – 1835",
      title: "Tragedi Kelaparan Priangan (Sumedang & Sukapura)",
      badge: "Bencana Awal",
      shortDesc: "Pemaksaan tanam nila menyita waktu dan sawah petani Sumedang dan Sukapura, memicu kelaparan di mana penduduk bertahan hidup memakan dedaunan hutan.",
      fullDesc: [
        "Kelaparan hebat tidak cuma terjadi di Cirebon dan Demak; Priangan, khususnya Sumedang dan Sukapura, mengalami bencana serupa pada 1833–1835 akibat pemaksaan tanam nila yang menyita waktu dan lahan petani, membuat penanaman padi lokal terbengkalai.",
        "Sebagian besar penduduk bertahan hidup dengan memakan umbi-umbian dan dedaunan hutan. Inspektur Tanaman L. Vitalis, yang menginspeksi langsung wilayah itu, mencatat kematian akibat kelaparan di tiga pabrik nila saja mencapai beberapa ribu jiwa; banyak korban sudah tidak mampu mencerna makanan sekalipun diberi sedikit asupan (Breman, 2014).",
      ],
      impactPoints: [
        "Kematian ribuan jiwa di sekitar sentra pabrik nila Priangan",
        "Catatan inspeksi resmi pertama dari L. Vitalis yang mengungkap fakta krisis",
        "Padi lokal terbengkalai demi komoditas pewarna ekspor",
      ],
      historicalFigures: ["Inspektur Tanaman L. Vitalis", "Bupati Sumedang & Sukapura"],
    },
    {
      id: "1834",
      year: 1834,
      title: "Kodifikasi Hukum: Staatsblad 1834 No. 22",
      badge: "Regulasi Resmi",
      shortDesc: "Pemerintah kolonial mengundangkan Staatsblad 1834 No. 22 yang memuat 7 aturan resmi pelaksanaan Tanam Paksa di Hindia Belanda.",
      fullDesc: [
        "Staatsblad 1834 Nomor 22 memuat tujuh aturan resmi: pembatasan lahan 20%, kerja wajib 66–75 hari bagi warga tanpa lahan, penyerahan seluruh hasil panen, angkutan tanpa upah, perlindungan ladang padi, pembebasan pajak tanah, dan janji ganti biaya tanam.",
        "Namun pada kenyataannya di lapangan, aturan tertulis ini dilanggar secara masif oleh birokrasi kolonial dan para mandor pengawas demi mengejar bonus Cultuurprocenten (Breman, 2014).",
      ],
      impactPoints: [
        "Kodifikasi 7 aturan resmi pelaksanaan Tanam Paksa",
        "Formalisasi insentif bonus Cultuurprocenten bagi elit lokal",
        "Kesenjangan permanen antara teks hukum dan kebrutalan lapangan",
      ],
      historicalFigures: ["Jean Chrétien Baud", "Gubernur Jenderal J. van den Bosch"],
    },
    {
      id: "1844",
      year: "1843 – 1844",
      title: "Tragedi Kelaparan Karesidenan Cirebon",
      badge: "Bencana Kemanusiaan",
      shortDesc: "Kewajiban penanaman nila (indigo) yang memonopoli air dan tanah subur memicu gagal panen padi massal dan kelaparan hebat di Cirebon.",
      fullDesc: [
        "Di Cirebon, ambisi para pejabat mengejar cultuurprocenten membuat lahan sawah dialihkan ke tanaman nila tanpa menyisakan ruang dan air untuk padi.",
        "Rakyat yang kelaparan terpaksa memakan rumput dan bonggol pisang; ribuan orang melarikan diri ke hutan atau tewas di pinggir jalan, memicu gelombang kematian massal puluhan ribu jiwa.",
      ],
      impactPoints: [
        "Kematian massal akibat kelaparan dan wabah penyakit",
        "Eksodus ribuan penduduk desa meninggalkan tanah kelahiran",
        "Pemberontakan dan keputusasaan massal petani Cirebon",
      ],
      historicalFigures: ["Residen Cirebon", "Petani Nila Cirebon"],
    },
    {
      id: "1848",
      year: "1848 – 1850",
      title: "Bencana Kelaparan Demak & Grobogan (Krisis Ternak Kerbau)",
      badge: "Puncak Krisis",
      shortDesc: "Kelaparan di Demak menular ke Grobogan; populasi anjlok drastis dan ribuan kerbau mati kelelahan diangkut paksa (Breman, 2014).",
      fullDesc: [
        "Kelaparan di Demak pada 1849 menular ke Grobogan pada 1850, memicu kemerosotan populasi drastis lewat kematian dan gelombang migrasi penduduk yang kabur dari kejaran wajib tanam.",
        "Pengerahan kerbau secara masif untuk mengangkut komoditas ekspor memperparah krisis ini: ternak mati kelelahan, dan petani kehilangan hewan pembajak sawah sehingga pengolahan padi benar-benar lumpuh (Breman, 2014).",
      ],
      impactPoints: [
        "Populasi Grobogan merosot dari 89.500 menjadi 9.000 jiwa",
        "Kelangkaan kerbau pembajak akibat kematian massal di jalur angkut ekspor",
        "Memicu perdebatan moral pertama di Parlemen Belanda oleh Baron van Hoëvell",
      ],
      historicalFigures: ["Dr. W.R. Baron van Hoëvell", "Residen Semarang"],
    },
    {
      id: "1860",
      year: 1860,
      title: "Penerbitan Novel Max Havelaar oleh Eduard Douwes Dekker (Multatuli)",
      badge: "Kritik Terbuka",
      shortDesc: "Multatuli menerbitkan novel 'Max Havelaar', membongkar persekongkolan birokrasi kolonial dan bupati pribumi dalam memeras rakyat Lebak.",
      fullDesc: [
        "Eduard Douwes Dekker, mantan Asisten Residen Lebak, mundur dari dinas kolonial setelah laporannya soal pemerasan rakyat oleh Bupati Lebak diabaikan atasannya.",
        "Lewat nama samaran Multatuli, ia menerbitkan Max Havelaar pada 1860, membongkar persekongkolan birokrasi kolonial dan penguasa pribumi dalam memeras rakyat, serta menggoncang nurani publik Belanda.",
      ],
      impactPoints: [
        "Guncangan opini publik terbesar di Den Haag dan Amsterdam",
        "Memperkuat posisi faksi politik Liberal Belanda",
        "Membuka jalan bagi deregulasi komoditas dan lahirnya Politik Etis",
      ],
      historicalFigures: ["Eduard Douwes Dekker (Multatuli)", "Bupati Lebak Raden Adipati Karta Natanagara"],
    },
    {
      id: "1862",
      year: 1862,
      title: "Pembatalan Kewajiban Tanam Paksa Lada",
      badge: "Penghapusan Bertahap",
      shortDesc: "Pemerintah kolonial membatalkan kewajiban tanam paksa untuk komoditas lada di Sumatera dan kepulauan luar Jawa (Breman, 2014).",
      fullDesc: [
        "Proses penghapusan Sistem Tanam Paksa berlangsung bertahap sejak pertengahan abad ke-19 akibat stagnasi produksi, maraknya penyimpangan, dan gelombang kritik dari kalangan liberal dan humanis di negeri Belanda.",
        "Pemerintah kolonial membatalkan kewajiban tanam paksa untuk sejumlah komoditas satu per satu, diawali dengan komoditas lada pada tahun 1862 (Breman, 2014).",
      ],
      impactPoints: [
        "Langkah pembatalan komoditas pertama oleh pemerintah kolonial",
        "Penurunan beban kerja wajib di sentra lada Lampung dan Bangka",
      ],
      historicalFigures: ["Menteri Urusan Tanah Jajahan", "Fraksi Liberal Belanda"],
    },
    {
      id: "1865",
      year: 1865,
      title: "Pembatalan Kewajiban Nila, Teh, dan Kayu Manis",
      badge: "Penghapusan Bertahap",
      shortDesc: "Pemerintah kolonial menghapus wajib tanam nila, teh, dan kayu manis, membebaskan petani dari kerja rendam nila yang mematikan (Breman, 2014).",
      fullDesc: [
        "Menyusul lada, pemerintah kolonial membatalkan kewajiban tanam paksa untuk nila, teh, dan kayu manis pada tahun 1865 (Breman, 2014).",
        "Penghapusan nila secara khusus mengakhiri salah satu komoditas paling menyengsarakan yang telah merenggut ribuan nyawa petani di bak pengolahan pabrik.",
      ],
      impactPoints: [
        "Penghentian kerja paksa di sentra industri nila dan teh",
        "Kembalinya sebagian saluran irigasi ke pengolahan sawah padi",
      ],
      historicalFigures: ["I.D. Fransen van de Putte", "Pakar Pertanian K.W. van Gorkom"],
    },
    {
      id: "1866",
      year: 1866,
      title: "Pembatalan Kewajiban Tanam Paksa Tembakau",
      badge: "Penghapusan Bertahap",
      shortDesc: "Kewajiban tanam paksa untuk komoditas tembakau resmi dibatalkan, membuka jalan bagi perkebunan swasta di Jawa Timur (Breman, 2014).",
      fullDesc: [
        "Pada tahun 1866, giliran komoditas tembakau yang dibebaskan dari monopoli tanam paksa pemerintah kolonial (Breman, 2014).",
        "Pembatalan ini dipimpin oleh Menteri Urusan Tanah Jajahan Isaac Dignus Fransen van de Putte yang secara konsisten mendorong liberalisasi ekonomi perkebunan.",
      ],
      impactPoints: [
        "Transisi produksi tembakau ke sektor pengusaha swasta",
        "Semakin mendekati akhir sistem monopoli negara Van den Bosch",
      ],
      historicalFigures: ["Isaac Dignus Fransen van de Putte"],
    },
    {
      id: "1870",
      year: 1870,
      title: "Akhir Monopoli Negara: Agrarische Wet, Suiker Wet, & Staatsblad 1870 No. 121",
      badge: "Titik Balik 1870",
      shortDesc: "Tahun 1870 menjadi titik akhir monopoli negara dan awal era kapitalisme liberal melalui UU Agraria, UU Gula, dan penghapusan Priangerstelsel (Breman, 2014).",
      fullDesc: [
        "Tahun 1870 jadi titik akhir monopoli negara ini dan awal era kapitalisme liberal di Hindia Belanda. Dua undang-undang menandainya: Undang-Undang Agraria (Agrarische Wet) menetapkan tanah yang tidak dapat dibuktikan kepemilikannya oleh rakyat sebagai tanah negara (domeinverklaring), yang kemudian bisa disewakan jangka panjang (erfpacht) kepada pengusaha perkebunan swasta Barat (Breman, 2014).",
        "Undang-Undang Gula (Suiker Wet) mengatur penghapusan bertahap kewajiban menanam tebu, menyerahkannya penuh ke industri perkebunan swasta.",
        "Sistem Priangan (Priangerstelsel), yang mengatur wajib tanam kopi dan kerja pengabdian (ngawula) di Jawa Barat, ikut dihapus lewat ordonansi Staatsblad 1870 No. 121 yang berlaku efektif 1871, mengakhiri hak pemungutan pajak dan kerja pengabdian yang selama ini dinikmati para bupati dan pejabat pribumi (Breman, 2014).",
      ],
      impactPoints: [
        "Berlakunya asas Domeinverklaring dan hak sewa Erfpacht hingga 75 tahun ke swasta",
        "Penghapusan bertahap tanam tebu diserahkan penuh ke swasta",
        "Penghapusan kerja pengabdian ngawula dan hak bupati di Priangan via Staatsblad 1870 No. 121",
      ],
      historicalFigures: ["Engelbertus de Waal", "I.D. Fransen van de Putte", "Baron van Hoëvell"],
    },
    {
      id: "1915",
      year: 1915,
      title: "Penghapusan Total Budidaya Kopi Pemerintah (Gouvernements-koffiecultuur)",
      badge: "Penutup Mutlak",
      shortDesc: "Penghapusan tidak tuntas di 1870: budidaya kopi pemerintah di beberapa daerah baru dihapus total lewat undang-undang pada 1915 (Breman, 2014).",
      fullDesc: [
        "Penghapusan Sistem Tanam Paksa tidak tuntas sepenuhnya pada tahun 1870: budidaya kopi yang dikelola langsung pemerintah (gouvernements-koffiecultuur) tetap berlanjut di beberapa daerah pegunungan.",
        "Sistem ini terus bertahan hingga akhirnya dihapus total secara menyeluruh lewat undang-undang pada tahun 1915, menutup riwayat seluruh bentuk wajib tanam komoditas negara di Hindia Belanda (Breman, 2014).",
      ],
      impactPoints: [
        "Berakhirnya secara mutlak sisa-sisa terakhir Cultuurstelsel kopi pemerintah",
        "Transisi penuh ke hubungan perburuhan upahan perkebunan abad ke-20",
      ],
      historicalFigures: ["Pemerintah Hindia Belanda Abad ke-20", "Parlemen Belanda"],
    },
  ] as TimelineEvent[],
};

export const impactData = {
  sectionTitle: "Dampak Sosio-Ekonomi",
  sectionSubtitle: "Analisis Dampak Struktural terhadap Petani dan Masyarakat Pedesaan Jawa",
  negativeImpacts: [
    {
      title: "Kemerosotan Kesejahteraan & Kelaparan Massal",
      description: "Pengalihan lahan sawah padi beririgasi terbaik untuk tebu dan nila menyebabkan kelangkaan bahan pangan parah, memicu krisis gizi, dan bencana kelaparan hebat di Cirebon (1844) dan Demak-Grobogan (1848–1850).",
    },
    {
      title: "Beban Kerja Ganda & Hilangnya Kedaulatan Waktu",
      description: "Petani tidak lagi memiliki waktu mencukupi untuk menggarap sawah pangan keluarga karena dipaksa menghabiskan ratusan hari per tahun di kebun kolonial, pabrik pengolahan, dan proyek jalan logistik.",
    },
    {
      title: "Homogenisasi Desa & Involusi Agraris",
      description: "Seperti dianalisis Clifford Geertz, sistem ini menghambat diferensiasi ekonomi desa; kepemilikan tanah pribadi terpecah-pecah menjadi tanah komunal agar beban pajak kerja wajib dapat dibagi rata antarpenduduk.",
    },
    {
      title: "Penguatan Feodalisme & Otoritarianisme Lokal",
      description: "Para bupati, wedana, dan bekel menjelma menjadi kaki tangan pemeras yang kebal hukum bagi warganya sendiri, demi memburu insentif bonus Cultuurprocenten.",
    },
  ],
  positiveImpacts: [
    {
      title: "Pengenalan Jenis Tanaman Berharga di Pasar Dunia & Edukasi Tani",
      description: "Penduduk mulai bisa mengenali jenis tanaman yang bernilai tinggi di pasar dunia (kopi kualitas unggul, tebu, teh, nila) sekaligus mempelajari tata cara bertani dan budidaya tanaman komersial yang lebih terstruktur dan baik.",
    },
    {
      title: "Pembangunan Infrastruktur Jalan Raya, Jembatan, & Pabrik Pengolahan",
      description: "Untuk menunjang pengangkutan hasil bumi, pemerintah kolonial membangun jalan raya penghubung antardesa, jembatan permanen, jalur rel pedalaman, serta pabrik-pabrik pengolahan uap modern yang bermanfaat luas bagi kegiatan mobilitas dan perhubungan masyarakat.",
    },
    {
      title: "Monetisasi & Pergeseran ke Sistem Pembayaran Uang Tunai",
      description: "Sistem pembayaran yang dulunya bertumpu pada barter atau penyerahan hasil alam mulai bergeser ke penggunaan uang kartal (monetisasi). Kehidupan ekonomi di pedesaan menjadi lebih terbuka dan terhubung secara langsung dengan pasar luar.",
    },
    {
      title: "Fondasi Awal Sektor Manufaktur Pengolahan Agrikultur",
      description: "Pembangunan puluhan pabrik gula uap dan sentra pengolahan kopi meletakkan fondasi awal industri manufaktur agraris modern pertama di kepulauan Hindia Belanda.",
    },
  ],
  famineCases: [
    {
      region: "Priangan (Sumedang & Sukapura)",
      years: "1833 – 1835",
      cause: "Pemaksaan tanaman nila (indigo) menyita waktu dan lahan sawah petani sehingga penanaman padi lokal terbengkalai total.",
      victimCount: "Ribuan jiwa meninggal di 3 pabrik nila saja (Catatan Inspektur Tanaman L. Vitalis; Breman, 2014)",
      description: "Sebagian besar penduduk bertahan hidup dengan memakan umbi-umbian dan dedaunan hutan. Inspektur Tanaman L. Vitalis mencatat banyak korban yang kelaparan parah sudah tidak mampu lagi mencerna makanan sekalipun diberi sedikit asupan.",
    },
    {
      region: "Karesidenan Cirebon",
      years: "1843 – 1844",
      cause: "Monopoli tanaman Nila (Indigo) yang rakus air dan menyita lahan sawah terbaik petani demi mengejar persentase bonus.",
      victimCount: "Puluhan ribu jiwa tewas & eksodus pengungsi massal ke karesidenan tetangga",
      description: "Petani dipaksa berendam seharian memeras daun nila tanpa sempat menanam padi. Ketika gagal panen melanda, lumbung desa kosong melompong dan penduduk memakan dedaunan hutan.",
    },
    {
      region: "Demak & Grobogan (Jawa Tengah)",
      years: "1848 – 1850",
      cause: "Kombinasi eksploitasi tebu, kekeringan panjang, serta pengerahan kerbau pengangkut secara masif hingga ternak mati kelelahan (Breman, 2014).",
      victimCount: "Populasi Grobogan merosot dari 89.500 menjadi 9.000 jiwa; Demak turun dari 336.000 ke 120.000 jiwa",
      description: "Kelaparan di Demak menular ke Grobogan pada 1850, memicu kemerosotan populasi drastis lewat kematian dan pelarian. Pengerahan kerbau secara masif untuk mengangkut komoditas ekspor membuat ternak mati kelelahan di jalan, melenyapkan hewan pembajak sawah milik petani dan melumpuhkan produksi pangan.",
    },
  ] as FamineCase[],
  historicalCritics: [
    {
      id: "critic-hogendorp",
      name: "Dirk van Hogendorp",
      role: "Mantan Pejabat Kolonial & Pemikir Awal",
      period: "1799 (Sebelum Cultuurstelsel)",
      category: "Perintis Awal",
      workOrCitation: "Risalah 'Berigt van den tegenwoordigen toestand der Bataafsche bezittingen' (1799)",
      keyContribution: "Menyuarakannya paling awal bahkan sebelum Cultuurstelsel resmi berlaku: mengusulkan pengakuan hak milik tanah bagi petani, penghapusan kerja paksa, dan penarikan pajak tanah moderat sebagai gantinya.",
      impactNote: "Meletakkan gagasan awal mengenai hak kebebasan ekonomi kaum pribumi.",
      image: {
        src: "/images/van-hogendorp.webp",
        alt: "Potret Dirk van Hogendorp",
        caption: "Dirk van Hogendorp (1761–1822), pemikir awal yang menentang kerja paksa feodal dan mengusulkan hak milik tanah petani sejak 1799.",
        archiveSource: "Collectie Nederland / Wikimedia Commons"
      }
    },
    {
      id: "critic-multatuli",
      name: "Eduard Douwes Dekker (Multatuli)",
      role: "Mantan Asisten Residen Lebak & Sastrawan",
      period: "1860",
      category: "Sastrawan & Moral",
      workOrCitation: "Novel monumental 'Max Havelaar' (1860)",
      keyContribution: "Mundur dari dinas kolonial setelah laporannya soal pemerasan rakyat oleh Bupati Lebak diabaikan atasannya. Lewat Max Havelaar, ia membongkar persekongkolan birokrasi kolonial dan bupati pribumi dalam memeras rakyat, menggoncang nurani publik Belanda.",
      impactNote: "Menjadi karya sastra politis paling berpengaruh yang mengguncang parlemen Den Haag.",
      image: {
        src: "/images/multatuli.webp",
        alt: "Potret Eduard Douwes Dekker (Multatuli)",
        caption: "Eduard Douwes Dekker / Multatuli (1820–1887), sastrawan dan mantan birokrat kolonial pengarang mahakarya Max Havelaar.",
        archiveSource: "Nationaal Archief Belanda / Wikimedia Commons"
      }
    },
    {
      id: "critic-hoevell",
      name: "Dr. W.R. Baron van Hoëvell",
      role: "Pendeta & Anggota Parlemen Liberal Belanda",
      period: "1847 – 1849",
      category: "Parlemen & Politik",
      workOrCitation: "Pidato Debat Parlemen Tweede Kamer (1849) & Risalah Perjalanan Jawa (1847)",
      keyContribution: "Menyaksikan sendiri kesengsaraan rakyat Jawa dalam perjalanannya tahun 1847. Memperkuat gerakan oposisi di parlemen dengan membongkar skandal kemanusiaan bencana kelaparan di Jawa Tengah ke publik Belanda.",
      impactNote: "Memimpin perlawanan fraksi liberal di parlemen melawan fraksi konservatif pembela Batig Slot.",
      image: {
        src: "/images/baron-van-hoevell.webp",
        alt: "Potret Dr. Wolter Robert Baron van Hoëvell",
        caption: "Dr. W.R. Baron van Hoëvell (1812–1879), tokoh gereja dan parlemen liberal Belanda pembela gigih hak-hak petani pribumi Jawa.",
        archiveSource: "Rijksmuseum / Wikimedia Commons"
      }
    },
    {
      id: "critic-vitalis",
      name: "L. Vitalis",
      role: "Inspektur Tanaman Kolonial",
      period: "1835",
      category: "Investigasi Lapangan",
      workOrCitation: "Laporan Inspeksi Resmi Skandal Pabrik Nila Priangan (1835)",
      keyContribution: "Menyusun laporan investigasi lapangan resmi pertama yang mencatat ribuan korban kematian akibat kerja paksa di pabrik pengolahan tanaman nila di Priangan.",
      impactNote: "Dokumentasi internal birokrasi kolonial pertama yang membongkar kekejaman dan angka kematian penanaman nila.",
    },
    {
      id: "critic-rees",
      name: "Otto (Ono) van Rees",
      role: "Komisaris Pemerintah Kolonial & Penyelidik Demografi",
      period: "1850-an – 1865",
      category: "Investigasi Lapangan",
      workOrCitation: "Laporan Demografi Priangan 1865 & Risalah Agraria (Breman, 2014)",
      keyContribution: "Membuktikan melalui penyelidikan data statistik resmi bahwa populasi Karesidenan Priangan tertahan (hanya tumbuh 24% dalam kurun 28 tahun) akibat penderitaan dan pemerasan kerja paksa yang ekstrem.",
      impactNote: "Menyediakan data forensik demografis tak terbantahkan yang mematahkan propaganda kemakmuran Batavia.",
      image: {
        src: "/images/ono-van-rees.webp",
        alt: "Potret Otto (Ono) van Rees",
        caption: "Otto (Ono) van Rees (1823–1892), komisaris kolonial dan penyelidik kondisi petani Priangan yang menguak dampak demografis Tanam Paksa.",
        archiveSource: "Collectie Nationaal Archief Belanda / Rijksmuseum"
      }
    },
    {
      id: "critic-gorkom",
      name: "Dr. K.W. van Gorkom",
      role: "Pakar Pertanian & Agrikultur Kolonial",
      period: "1860-an",
      category: "Pakar Ekonomi & Agraria",
      workOrCitation: "Analisis Ekonomi Agrikultur Hindia Belanda",
      keyContribution: "Mengkritik Tanam Paksa lewat hitungan ekonomi teknis: menyimpulkan sistem ini pada dasarnya tidak masuk akal karena terus memeras rakyat demi kas negara, merusak daya beli masyarakat, dan mematikan inisiatif produktif desa.",
      impactNote: "Memberi legitimasi ilmiah ekonomi bagi pembatalan bertahap komoditas Tanam Paksa.",
      image: {
        src: "/images/van-gorkom.webp",
        alt: "Potret Dr. K.W. van Gorkom",
        caption: "Dr. Karel Wessel van Gorkom (1835–1910), ahli kimia dan pertanian kolonial yang memaparkan inefisiensi ekonomi Cultuurstelsel.",
        archiveSource: "Nationaal Archief / Arsip Sejarah Kolonial"
      }
    },
    {
      id: "critic-putte",
      name: "Isaac Dignus Fransen van de Putte",
      role: "Menteri Urusan Tanah Jajahan (1863–1866) & Tokoh Liberal",
      period: "1863 – 1870",
      category: "Parlemen & Politik",
      workOrCitation: "Legislasi Pembatalan Komoditas & RUU Agraria 1870",
      keyContribution: "Memimpin perjuangan politik di kabinet: mendorong penghapusan bertahap komoditas lada (1862), nila, teh, kayu manis (1865), dan tembakau (1866), serta merintis rancangan undang-undang yang jadi dasar disahkannya Undang-Undang Agraria 1870.",
      impactNote: "Arsitek kunci penghapusan monopoli negara dan transisi ke era baru yang mengilhami Politik Etis.",
      image: {
        src: "/images/fransen-van-de-putte.webp",
        alt: "Potret Isaac Dignus Fransen van de Putte",
        caption: "I.D. Fransen van de Putte (1822–1902), Menteri Urusan Tanah Jajahan yang memimpin deregulasi dan penghapusan monopoli Cultuurstelsel.",
        archiveSource: "Nationaal Archief / Wikimedia Commons"
      }
    },
  ] as HistoricalCritic[],
  reformContext: {
    title: "Guncangan Nurani, Gelombang Kritik, & Menuju Politik Etis",
    narrative:
      "Tekanan moral, politik, teknis, dan ekonomi dari Dirk van Hogendorp, Multatuli, Baron van Hoëvell, Inspektur Vitalis, Ono van Rees, K.W. van Gorkom, hingga Menteri Fransen van de Putte mempercepat berakhirnya Tanam Paksa pada tahun 1870. Gerakan nurani ini tidak hanya mengakhiri monopoli feodal negara, melainkan juga mengilhami lahirnya Politik Etis (Edukatif, Irigasi, Emigrasi) di awal abad ke-20.",
  },
};

export const bibliographyData: BibliographyItem[] = [
  {
    id: "fasseur-1992",
    authors: "Fasseur, Cornelis",
    year: "1992",
    title: "The Politics of Colonial Exploitation: Java, the Dutch, and the Cultivation System",
    publisher: "Cornell University Southeast Asia Program Publications, Ithaca, New York",
    type: "Buku",
  },
  {
    id: "sartono-1992",
    authors: "Kartodirdjo, Sartono",
    year: "1992",
    title: "Pengantar Sejarah Indonesia Baru: Sejarah Pergerakan Nasional (Dari Kolonialisme Sampai Nasionalisme)",
    publisher: "PT Gramedia Pustaka Utama, Jakarta",
    type: "Buku",
  },
  {
    id: "ricklefs-2008",
    authors: "Ricklefs, M. C.",
    year: "2008",
    title: "A History of Modern Indonesia since c. 1200 (Fourth Edition)",
    publisher: "Palgrave Macmillan / Stanford University Press",
    type: "Buku",
  },
  {
    id: "van-niel-1992",
    authors: "Van Niel, Robert",
    year: "1992",
    title: "Java under the Cultivation System: Collected Writings",
    publisher: "KITLV Press, Leiden",
    type: "Buku",
  },
  {
    id: "geertz-1963",
    authors: "Geertz, Clifford",
    year: "1963",
    title: "Agricultural Involution: The Processes of Ecological Change in Indonesia",
    publisher: "University of California Press, Berkeley",
    type: "Buku",
  },
  {
    id: "ong-2002",
    authors: "Ong Hok Ham",
    year: "2002",
    title: "Dari Soal Priyayi sampai Candu: Bungai Rampai Sejarah Sosial Indonesia",
    publisher: "Yayasan Obor Indonesia, Jakarta",
    type: "Buku",
  },
  {
    id: "multatuli-1860",
    authors: "Multatuli (Eduard Douwes Dekker)",
    year: "1860",
    title: "Max Havelaar: of de koffiveilingen der Nederlandsche Handel-Maatschappij",
    publisher: "J. de Ruyter, Amsterdam",
    type: "Buku",
  },
  {
    id: "staatsblad-1834",
    authors: "Gouvernement van Nederlandsch-Indië",
    year: "1834",
    title: "Staatsblad van Nederlandsch-Indië No. 22: Bepalingen nopens de invoering van het stelsel van kultures op Java",
    publisher: "Landsdrukkerij, Batavia",
    type: "Arsip Kolonial",
  },
  {
    id: "elson-1994",
    authors: "Elson, R. E.",
    year: "1994",
    title: "Village Java under the Cultivation System 1830–1870",
    publisher: "Allen & Unwin, Sydney",
    type: "Buku",
  },
  {
    id: "breman-2014",
    authors: "Breman, Jan",
    year: "2014",
    title: "Mobilizing Labour for the Global Coffee Market: The Java Sugar and Coffee Plantations, 1830–1870 (Keuntungan Kolonial dari Kerja Paksa)",
    publisher: "Amsterdam University Press / Yayasan Pustaka Obor Indonesia",
    type: "Buku",
  },
  {
    id: "hermawati-2013",
    authors: "Hermawati, M.",
    year: "2013",
    title: "Tanam Paksa Sebagai Tindakan Eksploitasi",
    publisher: "AVATARA E-Journal Pendidikan Sejarah, 1(1), 64–70",
    type: "Jurnal",
    fullCitation: "Hermawati, M. (2013). TANAM PAKSA SEBAGAI TINDAKAN EKSPLOITASI. AVATARA E-Journal Pendidikan Sejarah, 1(1), 64–70.",
  },
  {
    id: "kartodirdjo-suryo-1991",
    authors: "Kartodirdjo, S., & Suryo, D.",
    year: "1991",
    title: "Sejarah Perkebunan di Indonesia: Kajian Sosial Ekonomi",
    publisher: "Aditya Media",
    type: "Buku",
    fullCitation: "Kartodirdjo, S., & Suryo, D. (1991). Sejarah perkebunan di indonesia: Kajian sosial ekonomi. Aditya Media.",
  },
  {
    id: "kurniawan-2015",
    authors: "Kurniawan, H.",
    year: "2015",
    title: "Dampak Sistem Tanam Paksa terhadap Dinamika Perekonomian Petani Jawa 1830-1870",
    publisher: "SOCIA: Jurnal Ilmu-Ilmu Sosial, 11(2)",
    type: "Jurnal",
    doiUrl: "https://doi.org/10.21831/socia.v11i2.5301",
    fullCitation: "Kurniawan, H. (2015). Dampak Sistem Tanam Paksa terhadap Dinamika Perekonomian Petani Jawa 1830-1870. SOCIA: Jurnal Ilmu-Ilmu Sosial, 11(2). https://doi.org/10.21831/socia.v11i2.5301",
  },
  {
    id: "sondarika-2019",
    authors: "Sondarika, W.",
    year: "2019",
    title: "Dampak Culturstelsel (Tanam Paksa) bagi Masyarakat Indonesia dari Tahun 1830-1870",
    publisher: "Jurnal Artefak, 3(1), 59–66",
    type: "Jurnal",
    doiUrl: "https://doi.org/10.25157/ja.v3i1.337",
    fullCitation: "Sondarika, W. (2019). DAMPAK CULTURSTELSEL (TANAM PAKSA) BAGI MASYARAKAT INDONESIA DARI TAHUN 1830-1870. Jurnal Artefak, 3(1), 59–66. https://doi.org/10.25157/ja.v3i1.337",
  },
  {
    id: "van-niel-1988",
    authors: "Van Niel, R.",
    year: "1988",
    title: "Warisan Sistem Tanam Paksa bagi Perkembangan Ekonomi Berikutnya",
    publisher: "Dalam A. Booth & others (Ed.), Sejarah Ekonomi Indonesia (hlm. 99–135). LP3ES",
    type: "Buku",
    fullCitation: "Van Niel, R. (1988). Warisan sistem tanam paksa bagi perkembangan ekonomi berikutnya. Dalam A. Booth & others (Ed.), Sejarah ekonomi indonesia (hlm. 99–135). LP3ES.",
  },
];

// ==========================================
// PILLAR 1: SISI GELAP & KONTROVERSI VAN DEN BOSCH
// ==========================================
export const vanDenBoschControversyData: VanDenBoschControversyPoint[] = [
  {
    id: "cultuurprocenten-legalized-corruption",
    title: "Menciptakan Sistem 'Ladang Korupsi' (Cultuurprocenten)",
    badge: "Korupsi Sistemik",
    description: "Insentif persentase bonus panen bagi pejabat Eropa dan bupati pribumi melegalkan pemerasan dan manipulasi data di seluruh birokrasi kolonial.",
    historicalDetail: "Para pejabat terdorong memalsukan data statistik perkebunan, memeras tenaga kerja rakyat tanpa batas waktu, dan mengantongi keuntungan tidak resmi ratusan ribu gulden di luar gaji pokok mereka."
  },
  {
    id: "nepotism-sugar-contracts",
    title: "Praktik Nepotisme & Favoritisme Kontrak Pabrik Gula",
    badge: "Nepotisme Keluarga",
    description: "Van den Bosch membagikan konsesi kontrak pabrik gula dan kucuran uang muka pemerintah (advances) tanpa bunga kepada lingkaran keluarga terdekatnya.",
    historicalDetail: "Salah satu penerima kontrak gula generasi awal yang memperoleh suntikan modal uang muka langsung dari kas pemerintah adalah anak kandung Van den Bosch sendiri (a son of Van den Bosch)."
  },
  {
    id: "secret-budget-diversion",
    title: "Pengalihan Dana Rahasia Tanpa Pengawasan Parlemen",
    badge: "Penyelundupan Fiskal",
    description: "Menjelang akhir masa dinasnya, Van den Bosch mengalihkan jutaan gulden keuntungan kolonial untuk pos pengeluaran rahasia.",
    historicalDetail: "Antara tahun 1836 hingga 1840, beberapa juta gulden laba Tanam Paksa dialihkan secara sembunyi-sembunyi dari pengawasan dan hak persetujuan anggaran Parlemen Belanda (Tweede Kamer)."
  },
  {
    id: "nobility-title-reward",
    title: "Ganjaran Gelar Kebangsawanan: Menjadi Graaf van den Bosch",
    badge: "Pahlawan Keuangan Mahkota",
    description: "Di mata Kerajaan Belanda, ia dipuja sebagai penyelamat monarki dari kebangkrutan keuangan perang.",
    historicalDetail: "Atas jasa mendatangkan surplus finansial fantastis (batig slot) bagi negeri induk, Raja Willem I menganugerahkan gelar kebangsawanan tertinggi 'Graaf' (Kount) kepadanya pada 25 Desember 1839."
  }
];

// ==========================================
// POTRET HUMANIS: SEHARI-HARI DI BIVAK RIMBA KOPI
// ==========================================
export const everydayFarmerLifeData: EverydayFarmerLife = {
  title: "Kehidupan Sehari-hari Petani di Bivak Rimba Kopi (Boskoffie)",
  subtitle: "Potret Mikro Kehidupan Nyata di Balik Statistik Megah Ekspor Kopi Jawa",
  aspects: [
    {
      title: "Tinggal Berbulan-bulan di Gubuk Rimba Pegunungan",
      description: "Pohon kopi dipindahkan jauh ke hutan pegunungan terjal (500–1.500 mdpl), belasan kilometer dari desa. Petani memboyong perbekalan seadanya dan tidur di gubuk bambu darurat berselimut kabut dingin, lembap, serta di bawah ancaman harimau loreng dan badak liar.",
      tag: "Bivak Terpencil"
    },
    {
      title: "Desa yang Mendadak Kosong saat Musim Petik (Kikir)",
      description: "Beban wajib pikul somahan (keluarga) memaksa perempuan mengikat sarung di antara kedua kakinya dan menggiring anak-anak ke pegunungan. Desa-desa praktis lumpuh dan hanya menyisakan orang tua renta serta balita.",
      tag: "Pengerahan Keluarga"
    },
    {
      title: "Dilarang Tanam Padi: Bertahan Hidup Memakan Umbi Hutan",
      description: "Pemerintah melarang keras petani menanam padi di sela-sela pohon kopi muda. Ketika bekal habis dan waktu terikat 100–200 hari kerja, para petani terpaksa mengonsumsi umbi-umbian liar, akar hutan, dan batang pisang untuk mengganjal lapar.",
      tag: "Krisis Pangan Hutan"
    },
    {
      title: "Memanggul Karung Puluhan Kilogram Melintasi Lumpur & Jurang",
      description: "Pengeringan dilakukan dengan bara api siang-malam di gubuk. Karung-karung kopi berbobot puluhan kilogram harus dipanggul sendiri melintasi jalan setapak berlumpur menuju gudang penyimpanan (depot) di Cikao atau Karangsambung.",
      tag: "Pikul Logistik Tanpa Upah"
    },
    {
      title: "Disiplin Cambuk Rotan dan Hukuman Pasungan Balok Kayu (Blok)",
      description: "Keterlambatan atau biji kopi yang dinilai kurang kering diganjar pukulan rotan mandor atau pemasungan kedua kaki pada balok kayu berat (blok). Untuk penderitaan berbulan-bulan ini, upah harian riil petani Priangan hanya berkisar 1 hingga 3,5 sen sehari.",
      tag: "Kekerasan Disiplin"
    }
  ],
  quote: {
    text: "Pohon-pohon kopi itu ditanam di atas kuburan ribuan rakyat jelata yang mati kedinginan dan kelaparan di pegunungan, sementara pejabat di Batavia dan Den Haag bersulang merayakan surplus kas.",
    source: "Kutipan Catatan Investigasi Lapangan / Jan Breman (2014)"
  }
};

// ==========================================
// PILLAR 2: ANALISIS KOMODITAS & BATIG SLOT (1840–1860)
// ==========================================
export const commodityFinancialData: CommodityFinancialItem[] = [
  {
    commodity: "Kopi (Koffie)",
    latinName: "Coffea arabica",
    profit1840_1849: "~f. 65 Juta Gulden (Sangat Tinggi)",
    status1850_1860: "Puncak Kejayaan: Harga lelang Amsterdam melonjak hingga f. 64/pikul",
    totalSurplusShare: "~80% dari seluruh keuntungan bersih kolonial",
    keyDetails: [
      "Tambang emas utama kas Kerajaan Belanda (The Great Cash Cow).",
      "Eksploitasi margin ekstrem: Petani Priangan hanya dibayar upah f. 3,15 – f. 6 per pikul, sementara harga lelang di Amsterdam tembus f. 64/pikul.",
      "Menyerap jumlah keluarga tani 2,5 hingga 3 kali lipat lebih banyak dibandingkan tebu (mencapai 470.000 keluarga)."
    ]
  },
  {
    commodity: "Tebu (Suiker / Gula)",
    latinName: "Saccharum officinarum",
    profit1840_1849: "Rendah / Rugi Awal (Defisit modal awal hingga f. 12,5 juta)",
    status1850_1860: "Sangat Tinggi: Booming harga gula dunia 1855–1857 (f. 52,64/100kg)",
    totalSurplusShare: "Penopang kedua terbesar (Kopi + Gula = 96% laba kolonial 1850–1859)",
    keyDetails: [
      "Di awal 1830-an hingga 1844 sempat merugi karena pemerintah mengucurkan kredit uang muka tanpa bunga (advances) besar-besaran untuk mengimpor mesin uap.",
      "Titik balik laba bersih sejak 1845 (f. 1,83 juta) dan melonjak menjadi pabrik kekayaan miliarder para suikercontractanten (pengusaha gula swasta).",
      "Menyita sawah-sawah padi terbaik beririgasi teknis di Pasuruan, Surabaya, dan pesisir utara Jawa."
    ]
  },
  {
    commodity: "Nila (Indigo / Tarum)",
    latinName: "Indigofera tinctoria",
    profit1840_1849: "~f. 15 Juta Gulden (Laba labil)",
    status1850_1860: "Menurun Drastis: Pengurangan skala secara darurat",
    totalSurplusShare: "Menyumbang sebagian kecil sebelum akhirnya dipangkas pemerintah",
    keyDetails: [
      "Paling merusak rantai pangan: Membutuhkan sawah irigasi terbaik dan menyerap tenaga petani berendam seharian di bak fermentasi busuk.",
      "Memicu bencana kelaparan hebat di Priangan (1833), Cirebon (1843), dan Kedu.",
      "Pemerintah kolonial terpaksa memangkas luas penanaman nila sejak 1841 untuk mencegah kekosongan total produksi beras."
    ]
  },
  {
    commodity: "Teh & Tembakau",
    latinName: "Camellia sinensis & Nicotiana tabacum",
    profit1840_1849: "Rugi Bersih Operasional (Net Loss)",
    status1850_1860: "Dihentikan oleh Pemerintah (Dilepas ke swasta per 1851)",
    totalSurplusShare: "0% / Negatif terhadap kas negara",
    keyDetails: [
      "Biaya produksi teh pemerintah mencapai f. 0,78 per pon, sementara harga jual bersih di lelang Belanda hanya f. 0,44 per pon.",
      "Pemerintah kolonial menarik diri dari budidaya negara untuk teh dan tembakau pada 1851 dan melimpahkannya ke perkebunan kontrak swasta."
    ]
  }
];

export const ecologicalZoningData: EcologicalZoneItem[] = [
  {
    type: "Tanaman Keras / Tahunan (Perennials)",
    cropCategory: "Tanaman Pegunungan & Lereng Hutan",
    crops: ["Kopi (Koffie)", "Teh", "Kayu Manis"],
    landCharacteristics: "Lahan lereng pegunungan miring (500–1.500 mdpl), tanah vulkanik berpori dengan drainase lancar, serta lahan hutan/tidur (woeste gronden / kalekeran).",
    ecologicalRationale: "Akar tanaman keras memerlukan drainase cepat agar tidak membusuk. Pembukaan lahan hutan pegunungan dilakukan agar tidak langsung merebut persawahan padi di dataran rendah.",
    regions: ["Priangan (Jawa Barat)", "Kedu (Jawa Tengah)", "Pasuruan & Besuki (Jawa Timur)", "Pegunungan Minangkabau ('kopi hutan')", "Dataran Tinggi Minahasa"]
  },
  {
    type: "Tanaman Semusim (Annuals) - Sawah Irigasi",
    cropCategory: "Tanaman Dataran Rendah & Aluvial Sawah",
    crops: ["Tebu (Gula)", "Nila (Indigo)"],
    landCharacteristics: "Dataran rendah aluvial yang datar, beriklim hangat, tanah lempung/berpasir subur, dan memiliki saluran irigasi teknis teratur.",
    ecologicalRationale: "Memerlukan air melimpah selama vegetasi dan pengeringan cepat saat panen. Tanahnya sama persis dengan sawah padi terbaik, sehingga diintegrasikan dalam pola rotasi tanam bergantian dengan padi desa.",
    regions: ["Pesisir Utara Jawa (Cirebon, Tegal, Pekalongan, Semarang, Jepara)", "Lembah Aluvial Jawa Timur (Surabaya, Pasuruan, Besuki)", "Bagelen & Banyumas (Sentra Nila)"]
  },
  {
    type: "Tanaman Semusim (Annuals) - Tegalan Kering",
    cropCategory: "Tanaman Tanah Kering & Palawija",
    crops: ["Tembakau", "Jagung", "Palawija"],
    landCharacteristics: "Lahan tegalan (tanpa irigasi) atau sawah bera saat musim kemarau (east-monsoon).",
    ecologicalRationale: "Tembakau tidak tahan terhadap genangan air berlebih dan membutuhkan tanah kering cepat serap. Ditanam sebagai tanaman sela setelah panen padi.",
    regions: ["Karesidenan Rembang", "Semarang", "Kawasan Pacitan", "Madura"]
  },
  {
    type: "Perbandingan Makro: Jawa vs Luar Jawa",
    cropCategory: "Struktur Geologis Regional",
    crops: ["Sawah Intensif (Jawa)", "Ladang Hutan / Swidden (Luar Jawa)"],
    landCharacteristics: "Jawa (Inner Indonesia) memiliki gunung api aktif berendapan abu vulkanik mineral basa dan aluvial sungai subur. Luar Jawa (Outer Indonesia) didominasi tanah laterit tropis tercuci hara di bawah hutan hujan lebat.",
    ecologicalRationale: "Jawa sangat adaptif untuk sawah intensif dan rotasi tebu-padi. Luar Jawa lebih adaptif untuk perkebunan tanaman keras (kopi, karet, lada) yang menirukan tajuk kanopi hutan alam tanpa merusak cadangan pangan lokal.",
    regions: ["Jawa (Inner Indonesia)", "Sumatera, Sulawesi, Maluku, Bangka (Outer Indonesia)"]
  }
];

export const batigSlotAllocationData: BatigSlotAllocationItem[] = [
  {
    id: "national-debt-amortization",
    title: "Pelunasan Utang Nasional Belanda & Konsolidasi Utang Hindia",
    amountOrScale: "f. 135 Juta + f. 236 Juta Gulden",
    destination: "Kas Perbendaharaan Kerajaan Belanda (Den Haag)",
    description: "Menyelamatkan Kerajaan Belanda dari ancaman kebangkrutan pasca-Perang Diponegoro dan Perang Belgia, di mana bunga utang sebelumnya menguras 47% anggaran belanja negara.",
    historicalSignificance: "Menghapuskan utang fiktif Hindia Belanda sebesar 236 juta gulden (1844) dan memotong beban utang publik domestik sebesar 135 juta gulden sepanjang 1850–1860."
  },
  {
    id: "national-railway-network",
    title: "Pembangunan Jaringan Kereta Api Negara (Staatsspoorwegen)",
    amountOrScale: "Setidaknya f. 10 Juta Gulden per tahun (1860–1870)",
    destination: "Infrastruktur Transportasi Kerajaan Belanda",
    description: "Pendanaan pembangunan jalur rel kereta api nasional yang menghubungkan kota-kota industri dan pelabuhan utama di seluruh Negeri Belanda pasca-pengesahan UU Kereta Api 1860 (Spoorwegwet).",
    historicalSignificance: "Modernisasi transportasi darat Belanda sepenuhnya dibiayai oleh penderitaan petani tanaman ekspor di Jawa."
  },
  {
    id: "canals-maritime-channels",
    title: "Pembangunan Terusan Laut Utama (Noordzeekanaal & Nieuwe Waterweg)",
    amountOrScale: "Puluhan Juta Gulden",
    destination: "Akses Maritim Amsterdam & Rotterdam ke Laut Utara",
    description: "Penggalian dua mega-proyek kanal maritim modern: Terusan Laut Utara (Noordzeekanaal) untuk pelabuhan Amsterdam dan Terusan Saluran Air Baru (Nieuwe Waterweg) yang menghubungkan Rotterdam ke laut lepas.",
    historicalSignificance: "Menjadikan Rotterdam dan Amsterdam sebagai gerbang pelabuhan dagang internasional terkemuka di Eropa."
  },
  {
    id: "suriname-slavery-emancipation",
    title: "Kompensasi Emansipasi Pembebasan Budak di Surinam (1863)",
    amountOrScale: "Jutaan Gulden Ganti Rugi Finansial",
    destination: "Para Pemilik Budak di Surinam & Hindia Barat (Karibia)",
    description: "Ketika Kerajaan Belanda menghapuskan perbudakan secara resmi pada tahun 1863, pemerintah wajib membayar uang kompensasi ganti rugi kepada para pemilik budak kulit putih.",
    historicalSignificance: "Biaya ganti rugi pembebasan budak di benua Amerika sepenuhnya ditalangi dari hasil pemerasan keringat petani Tanam Paksa Jawa."
  },
  {
    id: "deficit-subsidy-secret-funds",
    title: "Subsidi Wilayah Koloni Minus & Pengalihan Dana Rahasia",
    amountOrScale: "Jutaan Gulden",
    destination: "Pos Koloni Curaçao, Pantai Emas Afrika (Ghana), & Pos Rahasia Mahkota",
    description: "Menutup defisit finansial koloni-koloni Belanda lain yang merugi di Karibia dan Afrika Barat, serta pembentukan pos cadangan rahasia yang disembunyikan Van den Bosch dari parlemen.",
    historicalSignificance: "Menjadikan Hindia Belanda sebagai 'de kurk waarop Nederland drijft' (gabus yang membuat seluruh kekaisaran kolonial Belanda tetap mengapung)."
  },
  {
    id: "domestic-tax-cut-bourgeoisie",
    title: "Pemotongan Pajak Domestik Belanda & Pengayaan Konglomerat NHM",
    amountOrScale: "Mencakup 19% hingga 31,5% Total Pendapatan Negara Belanda",
    destination: "Warga Negara Belanda, Raja Willem I, & Industri Tekstil Twente",
    description: "Surplus kolonial memungkinkan pemerintah Belanda menghapus berbagai pajak cukai kebutuhan pokok domestik, mendanai deviden pemegang saham maskapai dagang NHM, serta memicu revolusi industri tekstil Twente.",
    historicalSignificance: "Meningkatkan taraf hidup dan kesejahteraan borjuasi Belanda di Eropa di atas penderitaan jutaan petani Jawa."
  }
];

// ==========================================
// DATA STATISTIK MAKRO KULTUURVERSLAGEN & KAMUS
// ==========================================
export const macroPopulationStatsData: MacroPopulationStat[] = [
  {
    year: "1840",
    totalPopulationPct: "57%",
    nonCoffeePct: "25%",
    landAllocationPct: "6%",
    highestResidencies: "Banten (92%), Kedu (79%), Bagelen (81%), Pacitan (72%), Priangan (65%), Cirebon (69%), Pekalongan (59%), Pasuruan (59%)",
    landAreaNote: "Puncak awal mobilisasi massal; sawah padi mulai tersita hebat untuk nila dan tebu."
  },
  {
    year: "1845",
    totalPopulationPct: "52%",
    nonCoffeePct: "25%",
    landAllocationPct: "6%",
    highestResidencies: "Priangan, Bagelen, Kedu, Cirebon, Pasuruan",
    landAreaNote: "Beban kerja harian memuncak hingga terjadi gagal panen padi lokal di Jawa Tengah."
  },
  {
    year: "1850",
    totalPopulationPct: "46%",
    nonCoffeePct: "19%",
    landAllocationPct: "4%",
    highestResidencies: "Penurunan akibat krisis kemanusiaan di Grobogan, Demak, dan Cirebon",
    landAreaNote: "Menyita 68.754 bouw sawah irigasi (41.151 bouw untuk tebu dan 26.037 bouw untuk nila)."
  },
  {
    year: "1860",
    totalPopulationPct: "54,5%",
    nonCoffeePct: "Data terpisah per komoditas",
    landAllocationPct: "~4%",
    highestResidencies: "Pasuruan, Besuki, Surabaya, Priangan",
    landAreaNote: "Mobilisasi kembali dinaikkan untuk kopi dan tebu menjelang era liberalisasi."
  }
];

export const coffeeMacroStatsData: CropMacroProductionRow[] = [
  {
    year: "1840",
    households: "470.673 keluarga",
    production: "702.634 pikul",
    totalPlantloon: "f. 5.746.872",
    plantloonPerUnitOrHousehold: "f. 10,90 / pikul",
    cultuurprocenten: "f. 395.811",
    extraMeta: "Menyerap 56% panen dari Priangan, Kedu, Pasuruan"
  },
  {
    year: "1843",
    households: "447.691 keluarga",
    production: "1.040.444 pikul (Rekor)",
    totalPlantloon: "f. 8.337.025",
    plantloonPerUnitOrHousehold: "f. 10,47 / pikul",
    cultuurprocenten: "f. 580.105",
    extraMeta: "Rekor produksi kopi tertinggi dekade 1840-an"
  },
  {
    year: "1850",
    households: "407.009 keluarga",
    production: "968.879 pikul",
    totalPlantloon: "f. 6.929.579",
    plantloonPerUnitOrHousehold: "f. 9,46 / pikul",
    cultuurprocenten: "f. 436.284",
    extraMeta: "Penurunan biaya per pikul menekan pendapatan riil petani"
  },
  {
    year: "1860",
    households: "466.207 keluarga",
    production: "982.134 pikul",
    totalPlantloon: "f. 9.278.231",
    plantloonPerUnitOrHousehold: "f. 11,38 / pikul",
    cultuurprocenten: "f. 563.914",
    extraMeta: "Harga lelang Amsterdam tembus rekor f. 64/pikul"
  }
];

export const sugarMacroStatsData: CropMacroProductionRow[] = [
  {
    year: "1840",
    households: "148.247 keluarga",
    production: "752.657 pikul",
    totalPlantloon: "f. 1.990.455",
    plantloonPerUnitOrHousehold: "f. 13,51 / keluarga",
    cultuurprocenten: "f. 288.595",
    extraMeta: "99 pabrik uap kontrak; menyita 31.989 bouw sawah"
  },
  {
    year: "1850",
    households: "151.846 keluarga",
    production: "1.406.464 pikul",
    totalPlantloon: "f. 3.343.703",
    plantloonPerUnitOrHousehold: "f. 22,02 / keluarga",
    cultuurprocenten: "f. 372.982",
    extraMeta: "99 pabrik kontrak; 41.151 bouw sawah beririgasi"
  },
  {
    year: "1860",
    households: "189.325 keluarga",
    production: "1.764.305 pikul",
    totalPlantloon: "f. 4.317.237",
    plantloonPerUnitOrHousehold: "f. 22,86 / keluarga",
    cultuurprocenten: "f. 435.656",
    extraMeta: "96 pabrik kontrak; 38.346 bouw; era kejayaan gula swasta"
  }
];

export const indigoMacroStatsData: CropMacroProductionRow[] = [
  {
    year: "1840",
    households: "207.118 keluarga",
    production: "2.121.226 pon Amst.",
    totalPlantloon: "f. 2.604.780",
    plantloonPerUnitOrHousehold: "f. 12,69 / keluarga",
    cultuurprocenten: "f. 441.920",
    extraMeta: "749 pabrik nila; menyita 42.833 bouw sawah terbaik"
  },
  {
    year: "1850",
    households: "108.577 keluarga",
    production: "614.767 pon Amst.",
    totalPlantloon: "f. 731.524",
    plantloonPerUnitOrHousehold: "f. 6,88 / keluarga",
    cultuurprocenten: "f. 106.185",
    extraMeta: "482 pabrik; produksi anjlok drastis akibat kelaparan sawah"
  },
  {
    year: "1860",
    households: "103.214 keluarga",
    production: "467.672 pon Amst.",
    totalPlantloon: "f. 933.838",
    plantloonPerUnitOrHousehold: "f. 9,04 / keluarga",
    cultuurprocenten: "f. 97.277",
    extraMeta: "273 pabrik; pengurangan drastis sebelum dihapus resmi 1865"
  }
];

export const colonialGlossaryData: ColonialGlossaryTerm[] = [
  {
    term: "Bouw",
    definition: "Satuan luas tanah pertanian resmi Hindia Belanda.",
    modernEquivalent: "1 Bouw ≈ 0,71 Hektar (7.096,5 m²)",
    contextNote: "Pada tebu dan nila, angka bouw menunjukkan seberapa luas sawah padi beririgasi desa yang disita untuk komoditas ekspor."
  },
  {
    term: "Pikul",
    definition: "Satuan berat komoditas ekspor tradisional untuk kopi dan gula.",
    modernEquivalent: "1 Pikul ≈ 61,76 Kilogram",
    contextNote: "Beban pikul petani kopi di Priangan sering kali harus dipanggul sendiri melintasi jalur pegunungan tanpa bantuan ternak."
  },
  {
    term: "Pon Amsterdam",
    definition: "Satuan berat standar pelelangan nila (indigo) dan teh di Belanda.",
    modernEquivalent: "1 Pon Amsterdam ≈ 0,494 Kilogram (~0,5 kg)",
    contextNote: "Digunakan untuk menimbang ekstrak lempengan nila kering hasil perasan di bak pabrik."
  },
  {
    term: "Cacah / Somahan",
    definition: "Unit sensus keluarga tani wajib pajak atau pemilik tanah garapan.",
    modernEquivalent: "1 Kepala Rumah Tangga Inti",
    contextNote: "Catatan resmi hanya menghitung 1 kepala keluarga laki-laki, padahal di lapangan istri dan anak-anak ikut dipaksa bekerja tanpa tercatat."
  },
  {
    term: "Plantloon",
    definition: "Upah tanaman resmi yang dibayarkan pemerintah atas komoditas yang diserahkan.",
    modernEquivalent: "Uang Tebusan Panen Wajib",
    contextNote: "Sering kali dipotong langsung oleh kepala desa untuk membayar Pajak Tanah (Landrent) sehingga tidak pernah dinikmati petani."
  },
  {
    term: "Cultuurprocenten",
    definition: "Insentif bonus uang tunai bagi pejabat Eropa dan bupati pribumi berdasarkan persentase panen.",
    modernEquivalent: "Bonus Target Produksi Kolonial",
    contextNote: "Menjadi pemicu utama eksploitasi dan manipulasi data di lapangan karena pejabat memburu bonus ratusan ribu gulden."
  }
];

export const bremanCritiqueData: BremanCritiquePoint[] = [
  {
    id: "breman-fake-coffee-gardens",
    title: "Laporan Asal Senang & Kebun Kopi Fiktif 100.000 vs 10.000",
    mythVsFact: {
      officialClaim: "Statistik resmi mencatat lonjakan puluhan juta pohon kopi baru yang terawat subur.",
      groundReality: "Statistik diakui Menteri Uhlenbeck (1862) sebagai 'rekayasa belaka' (mere fabrications) demi menyenangkan atasan."
    },
    evidence: "Temuan kontrolir di Priangan membuktikan kebun yang dilaporkan resmi berisi 100.000 pohon, setelah dihitung fisik nyata hanya ada 10.000 pohon. Residen menolak mengoreksi data sekaligus karena takut teguran keras dari Batavia.",
    historianCitation: "Jan Breman (2014) & Dr. K.W. van Gorkom"
  },
  {
    id: "breman-invisible-women-children",
    title: "Pekerja Tak Terlihat: Pengerahan Paksa Perempuan & Anak-anak",
    mythVsFact: {
      officialClaim: "Hanya kepala keluarga pemilik tanah (cacah) yang dikerahkan secara teratur.",
      groundReality: "Desa dikosongkan pada musim petik (kikir); perempuan dan anak-anak digiring paksa ke kebun."
    },
    evidence: "Ribuan jam kerja perempuan 'dengan sarung terikat di antara kakinya' dan anak-anak yang memetik biji kopi sengaja dihilangkan dari pencatatan statistik agar desa tidak dianggap memiliki kelebihan tenaga kerja.",
    historianCitation: "Jan Breman (2014) & Catatan Karesidenan Priangan"
  },
  {
    id: "breman-tree-illusion-productivity",
    title: "Ilusi Pertambahan Pohon: Butuh 562 Pohon untuk 1 Pikul Kopi",
    mythVsFact: {
      officialClaim: "Penambahan pohon kopi dari 45 juta menjadi 70 juta pohon di Priangan membuktikan keberhasilan intensifikasi.",
      groundReality: "Kebun dipenuhi alang-alang liar karena petani menolak diperas, sehingga produktivitas anjlok drastis."
    },
    evidence: "Akibat kebun terbengkalai dan pohon tua tidak dirawat, dibutuhkan hingga 562 pohon berbuah hanya untuk menghasilkan 1 pikul kopi di Priangan, berbanding terbalik dengan Pasuruan yang hanya butuh 140 pohon.",
    historianCitation: "Jan Breman (2014)"
  },
  {
    id: "breman-unpaid-corvee-labor",
    title: "Pengabaian Beban Kerja Paksa Tanpa Upah (Herendiensten)",
    mythVsFact: {
      officialClaim: "Beban kerja Tanam Paksa dibatasi hanya 52 hingga 66 hari dalam satu tahun.",
      groundReality: "Waktu kerja riil menyita 118 hingga 225 hari dalam setahun (lebih dari setengah tahun kerja)."
    },
    evidence: "Statistik resmi sama sekali tidak mencatat ribuan jam kerja tanpa bayaran untuk membuka jalan, mendirikan jembatan, merawat kediaman bupati, hingga memanggul karung kopi puluhan kilometer menembus lumpur jurang.",
    historianCitation: "Jan Breman (2014)"
  },
  {
    id: "breman-myth-cash-circulation",
    title: "Mitos Sirkulasi Uang & Kesejahteraan Petani di Tingkat Desa",
    mythVsFact: {
      officialClaim: "Aliran uang plantloon meningkatkan daya beli dan monetisasi desa secara merata (klaim Fasseur).",
      groundReality: "Uang tidak pernah sampai ke tangan petani jelata; habis disita untuk Pajak Tanah dan upeti."
    },
    evidence: "Arsip investigasi karesidenan membuktikan uang upah panen sering ditahan oleh bupati dan kepala desa, atau langsung ditarik kembali di hari yang sama untuk melunasi tunggakan Landrent desa.",
    historianCitation: "Jan Breman (2014) & Laporan Investigasi Ono van Rees (1867)"
  }
];

// ==========================================
// PILLAR 3: STUDI KASUS TIGA KARESIDENAN (TIGA WAJAH)
// ==========================================
export const residencyComparisonData: ResidencyComparisonItem[] = [
  {
    residency: "Priangan",
    islandArea: "Jawa Barat (Pegunungan)",
    dominantCrops: "Kopi Pegunungan (Boskoffie)",
    populationInvolvement: "65% (1840) → 71% (1850)",
    sawahConfiscated: "0% – 2% (Kopi di lereng gunung / tegalan)",
    landrentSystem: "f. 0 (Bebas Pajak Tanah / Preangerstelsel)",
    plantloonPerFamily: "f. 2,11 – f. 6,70 / tahun (Sangat Murah)",
    cultuurprocenten: "Bupati: > f. 90.000 | Residen: f. 5.994",
    farmerWelfareStatus: "Feodalisme & Kemiskinan",
    keyMechanism: "Bebas Landrent dijadikan dalih klaim 'kesejahteraan' oleh Fasseur, padahal petani wajib menyerahkan 20% beras ke bupati dan diperas kerja hutan berbulan-bulan. Butuh 464 pohon hanya untuk 1 pikul kopi.",
    historiographicalRelevance: "Basis riset utama Jan Breman (2014) yang membuktikan eksploitasi feodal ekstrem dan pembongkaran arsip Laporan Ono van Rees 1867."
  },
  {
    residency: "Cirebon",
    islandArea: "Jawa Barat / Jawa Tengah (Pesisir & Lembah)",
    dominantCrops: "Nila (Indigo) & Tebu Sawah",
    populationInvolvement: "69% (1840) → 51% (1850)",
    sawahConfiscated: "8% – 15% (Sawah padi terbaik disita)",
    landrentSystem: "Sangat Tinggi & Terus Naik Sepihak",
    plantloonPerFamily: "f. 11,00 – f. 15,63 / tahun (Tergerus)",
    cultuurprocenten: "Bupati: Sedang | Residen: f. 7.543",
    farmerWelfareStatus: "Nombok Pajak",
    keyMechanism: "Skandal Defisit Pajak: 1840 sisa +f. 7,34; 1845 nombok -f. 1,06; 1848 nombok parah -f. 4,60! Karena upah lebih kecil dari tagihan pajak, petani terpaksa menjual ternak, lumbung kosong, hingga terjadi wabah kelaparan dan desersi massal (1843–1850).",
    historiographicalRelevance: "Bukti tak terbantahkan mengenai anomali fiskal kolonial yang memicu bencana kelaparan dan perlawanan rakyat di Jawa Tengah."
  },
  {
    residency: "Pasuruan",
    islandArea: "Jawa Timur (Lembah Vulkanik Subur)",
    dominantCrops: "Tebu (Gula) & Kopi Subur",
    populationInvolvement: "59% (1840) → 61% (1850)",
    sawahConfiscated: "10% – 11% (Disita untuk tebu beririgasi)",
    landrentSystem: "Sedang & Terbayar Lancar dari Hasil Panen",
    plantloonPerFamily: "f. 22,00 – f. 54,91 / tahun (Sangat Tinggi)",
    cultuurprocenten: "Bupati: f. 38.000 | Residen: f. 25.064",
    farmerWelfareStatus: "Surplus Uang",
    keyMechanism: "Kondisi ekologi tanah vulkanik subur dan pabrik modern. Rata-rata pendapatan keluarga mencapai f. 54,91/tahun (8x lipat Priangan). Hanya butuh 140 pohon per pikul kopi, menyuntikkan sirkulasi uang tunai dan daya beli lokal.",
    historiographicalRelevance: "Rujukan utama mazhab revisionis Cornelis Fasseur dan R.E. Elson untuk membantah generalisasi kemiskinan seragam di seluruh Jawa."
  }
];

// ==========================================
// PILLAR 4: RAGAM PERLAWANAN RAKYAT PRIBUMI
// ==========================================
export const peasantResistanceData: PeasantResistancePoint[] = [
  {
    id: "protest-pekalongan-1847",
    category: "Aksi Terbuka",
    title: "Aksi Unjuk Rasa 700–800 Petani Nila Pekalongan (1847)",
    locationOrYear: "Pekalongan, 1847",
    description: "Sebanyak 700 hingga 800 petani penanam nila yang membawa pisau pemotong rumput berkumpul dan berkemah di depan rumah kediaman Residen Pekalongan selama dua hari berturut-turut. Mereka menuntut berbicara langsung dengan Gubernur Jenderal Rochussen yang sedang berinspeksi untuk memprotes kerja paksa yang merusak sawah padi.",
    historicalImpact: "Aksi unjuk rasa massa petani terorganisir terbesar yang terekam dalam arsip kolonial abad ke-19, memaksa Gubernur Jenderal meninjau ulang regulasi nila."
  },
  {
    id: "protest-kedu-1843",
    category: "Aksi Terbuka",
    title: "Demonstrasi Penolakan Budidaya Nila di Kedu (1843)",
    locationOrYear: "Kedu, 1843",
    description: "Terjadi aksi protes massal petani menolak penanaman nila di sawah mereka. Sejumlah kepala desa yang berani berpihak pada rakyat menolak perintah tanam dan akhirnya ditangkap serta diasingkan birokrasi kolonial sebagai 'agitator politik'.",
    historicalImpact: "Memperlihatkan keberanian elit desa tingkat bawah untuk membangkang terhadap instruksi bupati dan kontrolir."
  },
  {
    id: "armed-rebellion-diponegoro-prawatasari",
    category: "Perlawanan Bersenjata",
    title: "Dukungan pada Perang Diponegoro & Gerakan Haji Prawatasari",
    locationOrYear: "Jawa Tengah & Priangan",
    description: "Kebencian mendalam petani terhadap pemaksaan penanaman kopi dan pajak tanah menjadi bahan bakar utama yang melipatgandakan simpati dan dukungan rakyat kepada barisan Pangeran Diponegoro (1825–1830). Di Priangan dan Cirebon, tokoh agama seperti Haji Prawatasari mengobarkan perang suci menentang perbudakan kopi kompeni.",
    historicalImpact: "Menghubungkan ketidakpuasan agraria pedesaan dengan perlawanan militer bersenjata melawan hegemoni Belanda."
  },
  {
    id: "sabotage-sukapura-boiling-water",
    category: "Sabotase Fisik",
    title: "Penyiraman Air Mendidih ke Bibit Kopi di Sukapura",
    locationOrYear: "Sukapura (Priangan)",
    description: "Para petani yang muak atas penindasan wajib kopi secara nekat menyiram bibit-bibit kopi muda dengan air mendidih pada malam hari agar akar membusuk dan pohon mati sebelum sempat dipanen. Petani juga membakar bangsal pengeringan tembakau serta memangkas pohon kopi tua.",
    historicalImpact: "Bentuk sabotase fisik radikal yang menggagalkan target kuota ekspor pemerintah tanpa ketahuan mandor pengawas."
  },
  {
    id: "mass-flight-desersi-huma",
    category: "Pelarian Massal",
    title: "Pelarian Massal (Desersi) & Beralih ke Ladang Huma Berpindah",
    locationOrYear: "Cirebon, Bagelen, & Priangan Selatan (Jampang)",
    description: "Ribuan keluarga meninggalkan desa leluhur mereka, mengosongkan rumah, dan melarikan diri ke kawasan pegunungan liar atau menyeberang ke wilayah Vorstenlanden (Kesultanan Yogyakarta & Surakarta). Mereka menolak mengolah sawah tetap dan beralih ke pola ladang berpindah di hutan (huma/swidden) agar luput dari sensus cacah wajib kerja.",
    historicalImpact: "Mengakibatkan depopulasi desa agraris dan kegagalan panen perkebunan negara di berbagai karesidenan."
  },
  {
    id: "smuggling-black-market",
    category: "Penyelundupan",
    title: "Penyelundupan Hasil Panen Kopi ke Pasar Gelap",
    locationOrYear: "Priangan, Banyumas, & Padang",
    description: "Karena upah resmi pemerintah (plantloon) ditekan sangat murah, para petani secara sembunyi-sembunyi menyelundupkan karung-karung biji kopi berkualitas terbaik ke tengkulak dan pedagang swasta (Tionghoa, Arab, dan Inggris) yang berani membeli dengan harga pasar bebas berlipat ganda.",
    historicalImpact: "Membocorkan sistem monopoli perdagangan negara NHM dan membuktikan kegagalan kontrol aparat kepolisian kolonial."
  },
  {
    id: "paralysis-from-within-breman",
    category: "Pelumpuhan dari Dalam",
    title: "Tesis Jan Breman: Pelumpuhan dari Dalam (Paralysis from Within)",
    locationOrYear: "Tingkat Tapak Pedesaan Jawa (1840–1870)",
    description: "Petani secara konsisten bekerja serampangan, acuh tak acuh, membiarkan kebun dipenuhi rumput liar, dan membuang karung kopi ke jurang daripada menanggung denda pengangkutan. Sejarawan Jan Breman menyimpulkan Tanam Paksa runtuh bukan semata karena politik liberal di Belanda, melainkan karena mesin produksi kolonial telah lumpuh dan macet dari dalam akibat ketidakpatuhan abadi petani Jawa.",
    historicalImpact: "Mengubah paradigma sejarah dari sudut pandang Eurosentris menjadi pengakuan atas agensi dan perlawanan rakyat pribumi."
  }
];

// ==========================================
// PILLAR 5: POLITIK PARLEMEN BELANDA & HISTORIOGRAFI
// ==========================================
export const parliamentaryPoliticsData: ParliamentaryDebateItem[] = [
  {
    id: "pre-1848-royal-absolutism",
    periodOrEvent: "1830 – 1848",
    title: "Era Kerahasiaan Otokratis Mahkota (Prerogatif Raja)",
    factions: "Raja Willem I & Willem II vs Parlemen Terpasung",
    coreDebate: "Berdasarkan Konstitusi 1815, urusan tanah jajahan berada eksklusif di tangan Raja. Laporan Kultuurverslagen dan rincian Batig Slot dijaga sebagai rahasia negara tertinggi (policy of secrecy) tanpa pengawasan parlemen.",
    outcomeAndImpact: "Surplus kolonial ratusan juta gulden diserap langsung oleh raja dan menteri konservatif tanpa pertanggungjawaban publik."
  },
  {
    id: "constitutional-revision-1848",
    periodOrEvent: "Revisi Konstitusi 1848",
    title: "Revisi Konstitusi 1848 (Prof. J.R. Thorbecke): Lahirnya Hak Pengawasan",
    factions: "Kaum Reformis Liberal (Thorbecke) vs Monarki Konservatif",
    coreDebate: "Menghapuskan kata 'eksklusif' atas kekuasaan raja di koloni. Menetapkan Pasal 59 (aturan Hindia wajib diatur UU parlemen) dan Pasal 60 (pemerintah wajib menyerahkan Laporan Kolonial tahunan / Koloniaal Verslag kepada Tweede Kamer).",
    outcomeAndImpact: "Menghancurkan dinding kerahasiaan birokrasi dan melahirkan Oposisi Kolonial di parlemen di bawah pimpinan Dr. W.R. Baron van Hoëvell."
  },
  {
    id: "regeringsreglement-1854",
    periodOrEvent: "Tahun 1854",
    title: "Regeringsreglement (RR) 1854 & Kompromi Ambigu Pasal 56",
    factions: "Kubu Konservatif (J.C. Baud) vs Kubu Liberal (Van Hoëvell & Thorbecke)",
    coreDebate: "Pasal 56 menetapkan Gubernur Jenderal wajib mempertahankan Tanam Paksa 'sejauh mungkin' (as much as possible), tetapi sekaligus menyatakannya sebagai sistem transisi menuju 'tenaga kerja bebas' (free labor).",
    outcomeAndImpact: "Menjadi medan pertempuran yuridis selama bertahun-tahun antara yang ingin mempertahankan monopoli negara vs pembela kapitalisme perkebunan bebas."
  },
  {
    id: "sugar-scandal-wintgens-motion-1860",
    periodOrEvent: "1856 – 1860",
    title: "Skandal Kontrak Gula, Mosi Wintgens 1860, & Kejatuhan Menteri Rochussen",
    factions: "Tweede Kamer vs Menteri Urusan Tanah Jajahan J.J. Rochussen",
    coreDebate: "Terbongkarnya korupsi dan favoritisme pembagian kontrak gula kepada keluarga pejabat kolonial (seperti skandal Kontrak Pangka). Anggota parlemen Wintgens mengajukan mosi bahwa syarat kontrak budidaya wajib diatur UU parlemen.",
    outcomeAndImpact: "Mosi disetujui mayoritas; anggaran belanja menteri ditolak parlemen pada Des 1860 dan Menteri Rochussen dipaksa mengundurkan diri secara memalukan."
  },
  {
    id: "fransen-van-de-putte-reforms",
    periodOrEvent: "1863 – 1866",
    title: "Gebarakan Menteri I.D. Fransen van de Putte & Pembatalan Bertahap Komoditas",
    factions: "Faksi 'New Indies' Liberal Baru vs Elit Konservatif Lama",
    coreDebate: "Mantan pengusaha pabrik gula di Pasuruan ini membongkar mitos konservatif dengan menerbitkan arsip sejarah S. van Deventer dan menginisiasi penghapusan komoditas: Lada (1862), Nila, Teh, Kayu Manis (1865), dan Tembakau (1866).",
    outcomeAndImpact: "Menyiapkan landasan deregulasi total monopoli negara menuju kepemilikan swasta."
  },
  {
    id: "agrarische-wet-suiker-wet-1870",
    periodOrEvent: "Tahun 1870",
    title: "Kemenangan Liberalisme: Pengesahan UU Agraria (Agrarische Wet) & UU Gula 1870",
    factions: "Menteri E. de Waal & Koalisi Liberal Parlemen Belanda",
    coreDebate: "Pemberlakuan Domeinverklaring (tanah tak bertuan milik negara) dan Hak Erfpacht (sewa lahan tidur hingga 75 tahun kepada swasta Barat), dengan pasal proteksi pelarangan penjualan tanah rakyat kepada pihak asing.",
    outcomeAndImpact: "Monopoli Tanam Paksa Negara resmi berakhir, berganti menjadi era kapitalisme perkebunan swasta besar (corporate plantation era) dan pembentukan kelas buruh perkebunan."
  }
];

export const historiographicalSynthesisData: HistoriographyLensItem[] = [
  {
    historian: "Clifford Geertz (1963)",
    schoolName: "Mazhab Sosiologis-Ekologis",
    framework: "Teori Involusi Pertanian (Agricultural Involution) & Kemiskinan Bersama (Shared Poverty)",
    primaryPerspective: "Ekologi budaya & sosiologi pedesaan Jawa (fokus sawah tebu)",
    primarySources: "Atlas Pertanian 1926 dan literatur kolonial lama (Boeke & Furnivall)",
    economicAssessment: "Tanam Paksa menajamkan Dual Economy: membawa komoditas Indonesia ke pasar dunia modern tetapi rakyatnya tetap subsisten. Sawah elastis membagi-bagi kerja dan kemiskinan secara merata.",
    collapseExplanation: "Sistem mengalami kejenuhan ekologis dan kelembagaan dalam menyerap ledakan populasi pedesaan Jawa.",
    keyWork: "Agricultural Involution: The Processes of Ecological Change in Indonesia (1963)"
  },
  {
    historian: "Cornelis Fasseur (1992)",
    schoolName: "Mazhab Revisionis / Makro",
    framework: "Pertanian Pemerintah (Government Agriculture) & Monetisasi Regional",
    primaryPerspective: "Makro-birokrasi kolonial, administrasi fiskal, & dinamika parlemen Den Haag (top-down)",
    primarySources: "Laporan Resmi Kultuurverslagen (1832–1866) di Algemeen Rijksarchief Den Haag",
    economicAssessment: "Menolak anggapan bahwa Tanam Paksa adalah bencana tanpa sisa. Kucuran uang plantloon menyuntikkan sirkulasi uang kartal dan menaikkan daya beli petani di beberapa wilayah subur (seperti Pasuruan).",
    collapseExplanation: "Kemenangan politik faksi Liberal di Parlemen Belanda pasca-skandal kontrak gula dan kebutuhan membuka ruang modal swasta.",
    keyWork: "The Politics of Colonial Exploitation: Java, the Dutch, and the Cultivation System (1992)"
  },
  {
    historian: "Jan Breman (2014)",
    schoolName: "Mazhab Kritis-Resistensial",
    framework: "Cara Produksi Berdasarkan Pungutan (Tributary Mode of Production) & Pelumpuhan dari Dalam",
    primaryPerspective: "Mikro-sosiologi kelas bawah agraris, buruh tani miskin (rahayat), & dinamika tapak pedesaan (bottom-up)",
    primarySources: "Arsip daerah/ANRI Jakarta, Laporan Rahasia Ono van Rees 1867, data forensik karesidenan, & studi lapangan DAS Cimanuk",
    economicAssessment: "Membantah ilusi 'sirkulasi uang' Fasseur. Tanam Paksa adalah perbudakan negara yang memicu polarisasi kelas, pemiskinan struktural, dan beban kerja tanpa upah (herendiensten) hingga 225 hari/tahun.",
    collapseExplanation: "Pelumpuhan dari Dalam dan Bawah (Paralysis from within and from below) akibat sabotase abadi, desersi, dan ketidakpatuhan petani Jawa.",
    keyWork: "Mobilizing Labour for the Global Coffee Market / Keuntungan Kolonial dari Kerja Paksa (2014)"
  }
];

// ==========================================
// PILLAR 6: BUPATI, VAN REES, PREANGERSTELSEL & MONETISASI
// ==========================================

export const bupatiRolesData: BupatiRoleItem[] = [
  {
    id: "labor-contractor",
    roleNumber: 1,
    title: "Kontraktor Tenaga Kerja (Labor Contractor)",
    badge: "Eksekutor Lapangan",
    summary: "Bupati diperlakukan sebagai kontraktor atau majikan besar yang bertanggung jawab memenuhi kuota hasil panen komoditas ekspor bagi pemerintah kolonial.",
    details: [
      "Manajer Produksi Utama: Pimpinan VOC maupun Pemerintah Hindia Belanda memperlakukan bupati sebagai kontraktor yang wajib memenuhi kuota ekspor.",
      "Penggerak Birokrasi Lokal: Bupati menyalurkan perintah melalui jaringan patih → wedana → mantri → kepala desa. Setiap desa diwajibkan menyetorkan kuota tenaga kerja dan lahan.",
      "Sistem Pemerintahan Tidak Langsung (Indirect Rule): Pemerintah menyalahgunakan struktur feodal dan pengaruh tradisional bupati agar rakyat patuh tanpa perlu birokrasi Eropa di tingkat bawah."
    ],
    historicalSource: "Fasseur, C. (1992). The Politics of Colonial Exploitation. Cornell University; Breman, J. (2014). Keuntungan Kolonial dari Kerja Paksa."
  },
  {
    id: "three-forms-forced-labor",
    roleNumber: 2,
    title: "Mengatur Tiga Bentuk Kerja Paksa",
    badge: "Tiga Jenis Wajib Kerja",
    summary: "Bupati mengontrol dan membagi pengerahan rakyat ke dalam tiga jenis pelayanan kerja wajib yang berbeda.",
    details: [
      "Cultuurdiensten (Kerja Wajib Tanam): Mengerahkan kelompok keluarga (cacah/somahan) untuk membuka hutan, menanam, merawat, memanen kopi, tebu, dan nila.",
      "Herendiensten (Kerja Wajib Umum): Mobilisasi ribuan rakyat tanpa upah untuk proyek infrastruktur kolonial—pembangunan jalan raya, benteng, irigasi, dan gudang.",
      "Pancendiensten (Kerja Wajib Pribadi): Memanfaatkan tenaga kerja rakyat untuk kepentingan pribadi bupati—menggarap sawah kaprabon, merawat dalem, menjadi pengawal dan pemelihara kuda."
    ],
    historicalSource: "Breman, J. (2014). Mobilizing Labour for the Global Coffee Market; Arsip ANRI Jakarta."
  },
  {
    id: "feudal-ngawula",
    roleNumber: 3,
    title: "Memanfaatkan Ikatan Feodal dan Sistem Ngawula",
    badge: "Kontrol Tradisional",
    summary: "Bupati mengontrol rakyat menggunakan hierarki kekuasaan tradisional Sunda/Jawa dan ikatan pengabdian ngawula, rahayat, dan boejang.",
    details: [
      "Kepatuhan Tradisional: Rakyat merasa wajib menunjukkan sikap tunduk (penghambaan) kepada bangsawan berdasarkan tatanan feodal Sunda/Jawa.",
      "Disiplin dan Hukuman: Bupati menegakkan kedisiplinan melalui ancaman sanksi fisik (pukulan rotan, kurungan, pemasungan kaki) dan denda bagi petani yang lalai atau desersi.",
      "Ngawula sebagai Alat Kontrol: Ribuan keluarga tani dipekerjakan tanpa upah melayani penghulu (elit agama) dan kerabat bupati atas nama 'pengabdian tradisional'."
    ],
    historicalSource: "Breman, J. (2014). Laporan Rahasia Ono van Rees (1867), ANRI Jakarta."
  },
  {
    id: "cultuurprocenten-bupati",
    roleNumber: 4,
    title: "Tergiur Bonus Finansial (Cultuurprocenten)",
    badge: "Insentif Persentase Panen",
    summary: "Pemerintah kolonial memberikan bonus persentase hasil panen kepada bupati jika wilayahnya berhasil menyetor komoditas melebihi target.",
    details: [
      "Insentif Kelimpahan: Bonus cultuurprocenten bagi bupati mendorong persaingan menyetor lebih dari target—dengan biaya ditanggung sepenuhnya oleh petani.",
      "Tindakan Pemerasan (Knevelarijen): Bupati di Priangan bisa menerima puluhan ribu gulden per tahun, mendorong mereka memaksakan pengerahan kerja melampaui kemampuan fisik petani.",
      "Hasil Perkiraan: Bupati Priangan menikmati pendapatan rata-rata ratusan ribu gulden antara 1862–1864 dari cultuurprocenten + pemotongan plantloon + pajak padi."
    ],
    historicalSource: "Laporan Investigasi Ono van Rees (Oktober 1867); Fasseur, C. (1992)."
  },
  {
    id: "double-exploitation",
    roleNumber: 5,
    title: "Eksploitasi Ganda dan Penyelewengan Sistematis",
    badge: "Korupsi Struktural",
    summary: "Selain eksploitasi resmi, bupati juga melakukan berbagai bentuk penyelewengan—dari manipulasi statistik hingga pemotongan upah petani.",
    details: [
      "Menyembunyikan Tenaga Kerja: Bupati memanipulasi catatan statistik penduduk untuk menyembunyikan keluarga tani agar dapat dialihkan ke sawah pribadi atau perdagangan beras lokal.",
      "Pemotongan Upah (Plantloon): Sebagian bupati dan pejabat bawahannya menahan atau memotong pembayaran plantloon yang seharusnya diterima petani.",
      "Privilese Kelompok Elit Agama: Ribuan keluarga tani dibebaskan dari wajib kerja negara hanya untuk dipekerjakan melayani para penghulu dan kerabat bupati."
    ],
    historicalSource: "Breman, J. (2014); Laporan Rahasia Ono van Rees (1867)."
  }
];

export const vanReesReportData: VanReesReportSection[] = [
  {
    id: "van-rees-poverty",
    sectionNumber: 1,
    title: "Pembongkaran Kemiskinan dan Ketimpangan Upah Petani",
    badge: "Temuan Utama",
    findings: [
      "Upah Kopi Amat Rendah: Petani kopi di Priangan menerima plantloon hanya sekitar setengah dari tarif standar Jawa—berkisar f. 2,11 hingga f. 6,70 per keluarga per tahun.",
      "Eksploitasi Tenaga Kerja: Petani dibebani pengerahan kerja paksa di kebun kopi pegunungan terpencil serta herendiensten tanpa kompensasi layak.",
      "Stagnasi Demografi: Produksi kopi Priangan melewati puncak kejayaan pada 1856 (70 juta pohon) dan terus merosot akibat kelelahan petani.",
      "Pertumbuhan Populasi Sangat Lambat: Priangan hanya tumbuh 24% dalam 28 tahun akibat penderitaan fisik dan pelarian massal (desersi)."
    ],
    significance: "Laporan ini membuktikan bahwa Sistem Priangan tidak hanya tidak berkelanjutan secara sosial, tetapi juga mulai gagal secara ekonomi."
  },
  {
    id: "van-rees-feudal-wealth",
    sectionNumber: 2,
    title: "Pembongkaran Kekayaan Fantastis Elit Feodal dan Sistem Ngawula",
    badge: "Skandal Korupsi Feodal",
    findings: [
      "Kekayaan Bupati: Van Rees menghitung bupati Priangan menikmati pendapatan rata-rata ratusan ribu gulden (1862–1864) dari pemotongan plantloon, pajak padi, dan penyalahgunaan tenaga kerja.",
      "Penyalahgunaan Ngawula: Tradisi ngawula (ikatan pengabdian feodal pribadi) dimanfaatkan bupati untuk memeras tenaga kerja tanpa batas.",
      "Privilese Elit Agama: Ribuan keluarga tani dibebaskan dari wajib kerja negara hanya untuk dipekerjakan melayani penghulu dan kerabat bupati."
    ],
    significance: "Menjadi bukti konkret bahwa sistem indirect rule menciptakan lapisan oligarki feodal yang turut mengeksploitasi rakyat di luar skema resmi kolonial."
  },
  {
    id: "van-rees-recommendations",
    sectionNumber: 3,
    title: "Rekomendasi Reorganisasi — Dasar Pembubaran Sistem Priangan 1870",
    badge: "Cetak Biru Reformasi",
    findings: [
      "Penghapusan Hak Pajak Bupati: Mencabut seluruh hak bupati memungut pajak berupa uang, hasil bumi, maupun tenaga kerja langsung.",
      "Penyamaan Harga Kopi: Menaikkan tarif plantloon Priangan agar setara dengan tarif di wilayah Jawa lainnya.",
      "Restrukturisasi Birokrasi (Sanering): Mengubah status bupati menjadi pegawai negeri bergaji tetap, memangkas hierarki pejabat perantara yang tidak efisien."
    ],
    significance: "Rekomendasi Van Rees menjadi cetak biru utama bagi pengesahan Ordonansi Staatsblad 1870, yang menghapuskan Sistem Priangan dan tradisi ngawula per 1 Januari 1871."
  },
  {
    id: "van-rees-secrecy",
    sectionNumber: 4,
    title: "Kerahasiaan dan Dampak Politik Laporan Van Rees",
    badge: "Ditutup dari Publik",
    findings: [
      "Bagian kedua Laporan Van Rees sengaja dirahasiakan oleh pemerintah kolonial dan ditutup dari Parlemen Belanda (Tweede Kamer).",
      "Laporan ini sempat ditentang oleh pejabat konservatif seperti Gubernur Jenderal Mijer.",
      "Meskipun sempat tersembunyi, laporan ini berhasil menjadi fondasi Ordonansi Staatsblad 1870 yang menghapus Preangerstelsel."
    ],
    significance: "Dokumen ini adalah salah satu bukti paling jelas bahwa pemerintah kolonial secara aktif menyembunyikan kebobrokan sistemnya dari pengawasan parlemen."
  }
];

export const prianganMonetizationData: PrianganMonetizationPhase[] = [
  {
    id: "voc-phase",
    phase: "Fase 1",
    periodLabel: "Abad ke-18 (Era VOC)",
    title: "Dari Transaksi Tunai ke Penyerahan Wajib",
    monetizationLevel: "Terbatas",
    characteristics: [
      "VOC awalnya membeli kopi dari bupati Priangan secara tunai—mencapai 50 gulden per pikul di Cianjur.",
      "Ketika produksi membludak, VOC mengubah sistem menjadi penyerahan wajib (verplichte leveranties) dengan memangkas harga drastis.",
      "VOC membayar petani dengan mata uang tembaga (bonken) bernilai amat rendah—sering ditukar langsung dengan garam sebagai alat transaksi sehari-hari."
    ],
    keyFact: "Mata uang tembaga VOC bernilai begitu rendah sehingga petani Priangan lebih memilih garam sebagai alat tukar."
  },
  {
    id: "cultuurstelsel-phase",
    phase: "Fase 2",
    periodLabel: "1830–1860-an (Era Tanam Paksa)",
    title: "Monetisasi Terhambat: Isolasi & Upah Murah",
    monetizationLevel: "Sangat Rendah",
    characteristics: [
      "Bebas Pajak Tanah (Landrent): Rakyat Priangan dibebaskan dari Landrent, tetapi wajib menanam hingga 1.000 pohon kopi per keluarga.",
      "Upah Riil Amat Rendah: Plantloon hanya ~3,5 sen per hari (f. 2,11–f. 6,70/keluarga/tahun)—tidak cukup menciptakan daya beli.",
      "Pengisolasian Wilayah (Reservat): Pedagang luar dan pedagang Tionghoa dilarang masuk ke interior Priangan—pasar dan kedai hampir tidak tumbuh di pedesaan.",
      "Kontras dengan Jawa lainnya: Di Jawa Tengah/Timur, plantloon digunakan untuk membayar Landrent, menciptakan sirkulasi uang yang jauh lebih aktif."
    ],
    keyFact: "Beban kerja petani Priangan mencapai 225 hari/tahun (Jan Breman), tanpa sirkulasi uang yang berarti di tingkat desa."
  },
  {
    id: "depot-points-phase",
    phase: "Fase 3",
    periodLabel: "Pertengahan Abad ke-19",
    title: "Titik Temu Uang Tunai: Depot dan Jalur Pengangkutan",
    monetizationLevel: "Rendah",
    characteristics: [
      "Peredaran uang terbatas terjadi di titik depot perbatasan (Cikao, Karangsambung) di mana petani menjual tenaga angkut.",
      "Pedagang kecil menawarkan barang konsumsi sederhana (kain, garam, candu) di lokasi depot.",
      "Sebagian kecil uang yang diterima segera disedot kembali oleh bupati melalui pajak kepala (hoofdgeld) dan denda."
    ],
    keyFact: "Uang tunai hampir hanya beredar di titik-titik transportasi—bukan di desa-desa interior Priangan."
  },
  {
    id: "post-1870-phase",
    phase: "Fase 4",
    periodLabel: "Pasca-1870 (Reformasi Priangan Regeling)",
    title: "Masuknya Ekonomi Uang Penuh",
    monetizationLevel: "Berkembang Pesat",
    characteristics: [
      "Pajak Tanah Tunai (1871): Kewajiban penyerahan 1/5 hasil panen padi dihapus, diganti Landrent dalam bentuk uang tunai (3/20 perkiraan panen)—memaksa petani masuk pasar.",
      "Penyamaan Tarif Kopi: Tarif plantloon dinaikkan dari f. 6 menjadi f. 10–f. 13 per pikul, menyamai tarif Jawa lainnya.",
      "Perkebunan Swasta & Buruh Upahan: Perkebunan teh K.F. Holle menciptakan kelas buruh upahan (proletarisasi) yang menerima gaji harian tunai.",
      "Infrastruktur Baru: Jaringan kereta api dan perdagangan bebas membuka Priangan dari isolasi komersial."
    ],
    keyFact: "Ordonansi Staatsblad 1870 menghapus Preangerstelsel, membuka Priangan bagi kapitalisme perkebunan swasta."
  }
];

export const preangerBlueprintData: PreangerBlueprintElement[] = [
  {
    id: "indirect-rule-adoption",
    elementNumber: 1,
    title: "Pemanfaatan Birokrasi Feodal (Indirect Rule)",
    preangerstelselOrigin: "VOC tidak menempatkan pejabat Eropa hingga tingkat desa, melainkan menguasai Priangan melalui bupati dan pimpinan lokal sebagai kontraktor tenaga kerja.",
    cultuurstelselAdoption: "Van den Bosch mengadopsi pola ini untuk seluruh Jawa—mengembalikan wibawa feodal bupati dan kepala desa, menjadikan mereka ujung tombak pengumpulan komoditas Tanam Paksa.",
    significance: "Menghemat biaya administrasi kolonial secara masif sekaligus mengeksternalisasi tanggung jawab eksploitasi kepada elit feodal pribumi."
  },
  {
    id: "cultuurprocenten-adoption",
    elementNumber: 2,
    title: "Sistem Bonus Persentase Hasil (Cultuurprocenten)",
    preangerstelselOrigin: "Mekanisme bonus persentase panen untuk merangsang bupati Priangan menyerahkan kopi melampaui target sudah berlaku lama dalam Preangerstelsel.",
    cultuurstelselAdoption: "Van den Bosch melegalisasi dan memperluas skema cultuurprocenten ke seluruh korps birokrasi kolonial (Residen, Asisten Residen, Kontrolir) hingga pejabat pribumi.",
    significance: "Bukan inovasi Van den Bosch, melainkan warisan VOC yang diperluas secara sistematis—yang pada praktiknya memicu pemerasan masif terhadap petani."
  },
  {
    id: "penyerahan-wajib-synthesis",
    elementNumber: 3,
    title: "Sintesis Penyerahan Wajib dan Pajak Tanah",
    preangerstelselOrigin: "Preangerstelsel mengandalkan penyerahan wajib hasil bumi in natura (kopi) tanpa mekanisme Pajak Tanah.",
    cultuurstelselAdoption: "Cultuurstelsel adalah penggabungan Preangerstelsel (penyerahan in natura) dengan sistem Pajak Tanah Raffles. Asumsi: setiap desa berutang pajak, dilunasi dengan komoditas ekspor atau tenaga kerja.",
    significance: "Menciptakan mekanisme kontrol ganda—petani terlilit dua kewajiban sekaligus: pajak tanah DAN penyerahan hasil bumi."
  },
  {
    id: "cheap-labor-suppression",
    elementNumber: 4,
    title: "Penindasan Tenaga Kerja Berbiaya Murah",
    preangerstelselOrigin: "Preangerstelsel menekan biaya produksi kopi Priangan dengan menolak pasar kerja bebas dan menggantinya dengan pengerahan kerja paksa serta plantloon yang dipatok sangat murah.",
    cultuurstelselAdoption: "Van den Bosch meyakini bahwa komoditas Hindia hanya bisa bersaing di pasar Eropa jika biaya produksi ditekan serendah mungkin—diterapkan dengan prinsip stelsel van dwang (sistem paksaan) di seluruh Jawa.",
    significance: "Melahirkan paradoks kolonial: semakin sukses sistem mengekspor, semakin besar penderitaan petani yang upahnya terus ditekan."
  }
];

export const batigSlotDetailedData: BatigSlotUsageItem[] = [
  {
    id: "national-debt-payment",
    category: "Pelunasan Utang Nasional",
    period: "1850–1860",
    amountGulden: "f. 135 juta gulden",
    beneficiary: "Kas Kerajaan Belanda",
    description: "Digunakan untuk mengamortisasi dan melunasi utang obligasi Kerajaan Belanda akibat Perang Belgia 1830 dan Perang Jawa 1825–1830.",
    javaContrast: "Sementara utang Belanda lunas, petani Jawa tidak pernah menerima kompensasi atas tanah dan tenaga yang dirampas selama dekade-dekade eksploitasi."
  },
  {
    id: "railroad-construction",
    category: "Pembangunan Jaringan Kereta Api",
    period: "1860–1875 (Railroad Act 1860)",
    amountGulden: "f. 10 juta gulden/tahun",
    beneficiary: "Infrastruktur Kerajaan Belanda",
    description: "Melalui Spoorwegwet 1860, pemerintah Belanda mengalokasikan dana batig slot untuk membangun seluruh jaringan kereta api nasional di Belanda.",
    javaContrast: "Di Jawa sendiri, jalur kereta api baru mulai dibangun pada 1867—dan prioritasnya adalah mengangkut komoditas ekspor ke pelabuhan, bukan untuk kesejahteraan rakyat."
  },
  {
    id: "public-infrastructure",
    category: "Infrastruktur Publik Belanda",
    period: "1840–1870",
    amountGulden: "Ratusan juta gulden total",
    beneficiary: "Warga Belanda",
    description: "Pembuatan North Sea Canal, perbaikan pelabuhan Rotterdam dan Amsterdam, pengerukan sungai, serta pembangunan benteng pertahanan di Belanda.",
    javaContrast: "Anggaran infrastruktur di Jawa untuk pendidikan dan kesehatan rakyat pribumi hanya dialokasikan dalam jumlah amat minim sepanjang era Tanam Paksa."
  },
  {
    id: "tax-reduction-dutch",
    category: "Pemotongan Pajak Warga Belanda",
    period: "1840–1860",
    amountGulden: "Pengurangan signifikan pajak konsumen",
    beneficiary: "Masyarakat Belanda",
    description: "Kehadiran batig slot memungkinkan Parlemen Belanda menghapus berbagai pajak konsumen yang memberatkan warga Belanda (pajak pemotongan hewan ternak, dll) tanpa menaikkan pajak pendapatan baru.",
    javaContrast: "Di Jawa, Pajak Tanah (Landrent) justru terus ditingkatkan dan diperluas cakupannya—beban fiskal petani naik, bukan turun."
  },
  {
    id: "total-surplus-1831-1877",
    category: "Total Akumulasi Batig Slot",
    period: "1831–1877",
    amountGulden: "f. 823 juta gulden (estimasi total)",
    beneficiary: "Kas Negara Kerajaan Belanda",
    description: "Periode 1831–1850: f. 234–235 juta gulden. Periode 1851–1870: f. 491 juta gulden. Total 1831–1877: ~f. 823 juta gulden (sebagian estimasi f. 692–800+ juta).",
    javaContrast: "Pada puncaknya (1851–1860), batig slot menyumbang 31,5% dari total APBN Belanda—sehingga muncul ungkapan 'De Kurk: Jawa adalah gabus yang membuat Belanda tetap mengapung'."
  }
];

export const vocExpansionData: VocExpansionMechanism[] = [
  {
    id: "military-political",
    mechanismNumber: 1,
    title: "Intervensi Militer dan Perjanjian Politik",
    badge: "Strategi Militer",
    description: "VOC memperluas pengaruh dengan bantuan militer kepada penguasa lokal. Perjanjian 1677 dengan Mataram menghasilkan penyerahan hak kedaulatan Priangan kepada VOC. Perjanjian 1681 memaksa Kesultanan Cirebon menerima VOC sebagai 'pelindung'.",
    longTermImpact: "Memotong jalur hubungan Cirebon dan Banten ke pedalaman, mengakhiri klaim Mataram di Jawa Barat, dan membuka jalan bagi monopoli kopi Priangan."
  },
  {
    id: "indirect-rule-voc",
    mechanismNumber: 2,
    title: "Penerapan Pemerintahan Tidak Langsung",
    badge: "Indirect Rule",
    description: "VOC memakai bangsawan lokal sebagai pemungut pajak dan pengumpul hasil bumi. Bupati difungsikan sebagai kontraktor tenaga kerja. Sejak 1704, VOC mengeluarkan akte pengangkatan resmi—hak jabatan bupati bergantung penuh pada kesetiaan menyetor komoditas.",
    longTermImpact: "Menekan biaya administrasi secara masif sekaligus menciptakan kelas bupati yang sepenuhnya dependen pada VOC."
  },
  {
    id: "territorial-sedentarization",
    mechanismNumber: 3,
    title: "Penataan Territorial dan Sedentarisasi",
    badge: "Kontrol Populasi",
    description: "VOC membagi Priangan menjadi 5 kabupaten (Cianjur, Bandung, Sumedang, Sukapura, Limbangan). Petani dilarang bertani berpindah (huma/swidden)—dipaksa menetap melalui sawah dan kebun kopi wajib agar mudah disensus dan dipajak.",
    longTermImpact: "Mengubah pola pertanian tradisional Sunda yang berpindah menjadi pertanian menetap yang dapat dikontrol dan dikenai beban kerja."
  },
  {
    id: "commercial-to-forced",
    mechanismNumber: 4,
    title: "Dari Transaksi Komersial ke Penyerahan Wajib",
    badge: "Monopoli Kopi",
    description: "Kopi diperkenalkan VOC (1707–1711) dan awalnya dibeli tunai. Seiring lonjakan permintaan, VOC mengubahnya menjadi verplichte leveranties dengan harga sepihak. Wilayah pedalaman ditutup rapat dari pedagang swasta (Reservat).",
    longTermImpact: "Menciptakan Preangerstelsel—sistem penyerahan wajib yang menjadi cetak biru Cultuurstelsel 1830."
  },
  {
    id: "supervisor-institution",
    mechanismNumber: 5,
    title: "Pembentukan Lembaga Pengawas (Komitir)",
    badge: "Birokrasi Pengawas",
    description: "VOC merintis jabatan Pangeran Aria Cirebon (1706) dan mendirikan Gecommitteerde tot de Saecken der Inlanderen (Komitir Urusan Pribumi). Melalui komitir ini, VOC mengendalikan bupati, keuangan, dan instruksi tanam dari jarak jauh.",
    longTermImpact: "Menjadi prototipe jabatan Residen Eropa dalam Cultuurstelsel—pengawas jarak jauh yang memonitor output bupati tanpa hadir di tingkat desa."
  }
];

// ==========================================
// INTERACTIVE HISTORY LABORATORY DATASETS
// ==========================================

export interface SpatialMarker {
  id: string;
  name: string;
  category: 'commodity' | 'famine' | 'resistance' | 'railway-hub';
  cx: number; // Persentase koordinat SVG (0 - 1000)
  cy: number; // Persentase koordinat SVG (0 - 450)
  residency: string;
  period: string;
  badge: string;
  title: string;
  summary: string;
  historicalDetails: {
    commodities?: string[];
    statistics?: string;
    impactSummary: string;
    vanDenBoschPolicyNote: string;
    archivalReference: string;
  };
}

export interface RailwayLine {
  id: string;
  name: string;
  pathD: string;
  startPoint: string;
  endPoint: string;
  yearBuilt: string;
  purpose: string;
}

export interface CurrencyBenchmark {
  id: string;
  label: string;
  guldenAmount: number;
  modernIdrEstimate: number;
  historicalRole: string;
  disparityDescription: string;
}

export interface UnitConversion {
  id: string;
  unitName: string;
  dutchNotation: string;
  metricEquivalent: string;
  baseMultiplier: number; // multiplier ke unit standar (m2, kg, jiwa)
  unitCategory: 'luas' | 'bobot' | 'populasi';
  historicalUsage: string;
}

export interface DilemmaChoice {
  id: string;
  choiceLabel: string;
  actionText: string;
  consequences: {
    peasantWelfare: number;   // -3 s/d +3
    colonialPressure: number; // -3 s/d +3
    localStability: number;   // -3 s/d +3
  };
  immediateFeedback: string;
}

export interface HistoricalDilemmaScenario {
  id: string;
  role: string;
  location: string;
  year: number;
  title: string;
  situation: string;
  historicalContext: string;
  choices: DilemmaChoice[];
  historicalEpilogue: {
    whatActuallyHappened: string;
    historicalOutcome: string;
    archivalSource: string;
  };
}

export const spatialMarkersData: SpatialMarker[] = [
  {
    id: "marker-priangan",
    name: "Priangan (Preanger)",
    category: "commodity",
    cx: 215,
    cy: 265,
    residency: "Karesidenan Priangan",
    period: "1830–1870",
    badge: "Sentra Kopi Dunia",
    title: "Dataran Tinggi Kopi Priangan & Kerja Rodi",
    summary: "Episentrum penanaman kopi terbesar di Hindia Belanda, menyumbang lebih dari 60% pasokan kopi kolonial. Penduduk dibebaskan dari Landrent namun dibebani penyerahan kopi wajib dan pikul kuli ke pelabuhan.",
    historicalDetails: {
      commodities: ["Kopi Jawa", "Teh Pegunungan"],
      statistics: "Rata-rata 250–350 pohon kopi per keluarga; upah panen bersih hanya f. 2,11/tahun.",
      impactSummary: "Eksploitasi feodal terorganisir di mana para bupati pribumi menikmati cultuurprocenten di atas f. 90.000/tahun.",
      vanDenBoschPolicyNote: "Van den Bosch mempertahankan Preangerstelsel tanpa pajak tanah untuk mengejar kuota kopi setinggi mungkin bagi NHM.",
      archivalReference: "Jan Breman (2014), 'Keuntungan Kolonial dari Kerja Paksa: Sistem Priangan'."
    }
  },
  {
    id: "marker-cirebon",
    name: "Cirebon",
    category: "famine",
    cx: 345,
    cy: 220,
    residency: "Karesidenan Cirebon",
    period: "1843–1846",
    badge: "Tragedi Nila & Kelaparan",
    title: "Skandal Nombok Pajak & Krisis Pangan Cirebon",
    summary: "Sawah padi disita paksa hingga 1/3 lebih untuk menanam nila dan tebu. Petani tidak memiliki waktu menanam padi, sementara upah tebasan nila lebih kecil daripada pajak tanah (skandal nombok f. 1,06 s/d f. 4,60).",
    historicalDetails: {
      commodities: ["Nila (Indigo)", "Tebu / Gula"],
      statistics: "Lebih dari 30.000 jiwa mengungsi dan tewas akibat wabah kelaparan dan demam 1843–1844.",
      impactSummary: "Memicu kehancuran struktur agraris lokal dan gelombang protes keras dari pejabat kolonial terkejut (vitalis & de Seriere).",
      vanDenBoschPolicyNote: "Target pabrik nila modern bertenaga air memaksa rotasi sawah tanpa henti hingga tanah kehilangan unsur hara.",
      archivalReference: "Kultuurverslag 1844 & Surat Protes Residen Cirebon de Seriere."
    }
  },
  {
    id: "marker-pekalongan",
    name: "Pekalongan",
    category: "resistance",
    cx: 435,
    cy: 195,
    residency: "Karesidenan Pekalongan",
    period: "1847",
    badge: "Demonstrasi Akbar 1847",
    title: "Aksi Unjuk Rasa 700 Petani Pekalongan",
    summary: "Sebanyak 700–800 petani menolak bekerja di kebun nila dan pabrik gula. Mereka berjalan kaki puluhan kilometer dan berkemah di alun-alun kediaman Residen saat Gubernur Jenderal J.J. Rochussen berkunjung.",
    historicalDetails: {
      commodities: ["Tebu / Gula", "Nila"],
      statistics: "700–800 petani melakukan mogok massal dan audiensi terbuka tanpa kekerasan senjata.",
      impactSummary: "Aksi protes terbuka paling masif sepanjang era Tanam Paksa, memaksa Rochussen menurunkan sebagian target kuota nila.",
      vanDenBoschPolicyNote: "Membuktikan bahwa klaim awal 'petani dengan sukarela menanam' adalah fiksi birokrasi kolonial.",
      archivalReference: "C. Fasseur (1992), 'The Politics of Colonial Exploitation', Cornell SEAP."
    }
  },
  {
    id: "marker-demak",
    name: "Demak & Grobogan",
    category: "famine",
    cx: 550,
    cy: 195,
    residency: "Karesidenan Semarang (Demak-Grobogan)",
    period: "1848–1850",
    badge: "Krisis Kelaparan Terparah",
    title: "Bencana Kelaparan Demak-Grobogan & Kematian Kerbau",
    summary: "Puncak bencana kemanusiaan Tanam Paksa. Pemaksaan tanam tembakau dan tebu bersamaan dengan kerja rodi saluran air dan benteng menewaskan lebih dari 200.000 jiwa, meruntuhkan populasi wilayah dari 336.000 menjadi 120.000 jiwa.",
    historicalDetails: {
      commodities: ["Tembakau", "Tebu", "Kerja Rodi Benteng"],
      statistics: "Populasi Demak anjlok drastis; ribuan kerbau pembajak mati karena kekurangan pakan dan kerja paksa angkut.",
      impactSummary: "Menjadi lonceng kematian moral Cultuurstelsel dan memicu debat panas parlemen Belanda yang dipimpin Baron van Hoëvell.",
      vanDenBoschPolicyNote: "Kombinasi cultuurprocenten pegawai Eropa dan desakan kuota ekspor Batavia menutup mata birokrasi atas tanda-tanda gagal panen.",
      archivalReference: "Pidato Parlemen W.R. van Hoëvell (1850) & Arsip Kolonial Verslag 1849."
    }
  },
  {
    id: "marker-kedu",
    name: "Kedu",
    category: "resistance",
    cx: 485,
    cy: 260,
    residency: "Karesidenan Kedu",
    period: "1843",
    badge: "Protes Tembakau & Boikot",
    title: "Resistensi Tembakau dan Sabotase Bibit Kedu",
    summary: "Petani lereng Gunung Sindoro-Sumbing melakukan mogok siram, pencabutan bibit tembakau di malam hari, dan aksi protes ke rumah residen akibat penetapan harga beli daun tembakau yang dirasa sangat merugikan.",
    historicalDetails: {
      commodities: ["Tembakau Kedu", "Kopi"],
      statistics: "Ratusan hektar kebun tembakau mengalami kerusakan bibit misterius akibat sabotase terorganisir.",
      impactSummary: "Birokrasi kolonial terpaksa menghapus kewajiban tanam tembakau di Kedu dan menyerahkannya ke pedagang bebas.",
      vanDenBoschPolicyNote: "Kagagalan sistem tanam paksa tembakau di Jawa Tengah membuktikan bahwa tanaman daun rapuh tidak cocok di bawah sistem rodi.",
      archivalReference: "Jan Breman (1983), 'Control of Land and Labour in Colonial Java'."
    }
  },
  {
    id: "marker-pasuruan",
    name: "Pasuruan",
    category: "commodity",
    cx: 735,
    cy: 245,
    residency: "Karesidenan Pasuruan",
    period: "1835–1865",
    badge: "Ibukota Gula Hindia Belanda",
    title: "Sentra Gula Terkaya & Sirkulasi Uang Tertinggi",
    summary: "Karesidenan dengan produksi gula paling efisien dan produktif. Memiliki belasan pabrik gula uap modern. Tingkat upah panen tebu tertinggi di Jawa (f. 54,91/keluarga), menciptakan perputaran ekonomi pasar lokal yang dinamis.",
    historicalDetails: {
      commodities: ["Gula Tebu", "Kopi Pegunungan"],
      statistics: "Menyumbang hampir 25% dari total ekspor gula Hindia Belanda; rata-rata rasio rendemen gula tertinggi.",
      impactSummary: "Menjadi model ideal yang selalu dipamerkan Van den Bosch di Parlemen Belanda untuk menutupi tragedi Cirebon dan Demak.",
      vanDenBoschPolicyNote: "Kerjasama erat antara kontraktor pabrik gula swasta Eropa dan bupati yang digaji persentase sangat tinggi.",
      archivalReference: "Robert Van Niel (1992), 'Java under the Cultivation System'."
    }
  },
  {
    id: "marker-batavia",
    name: "Batavia (Sunda Kelapa)",
    category: "railway-hub",
    cx: 170,
    cy: 195,
    residency: "Batavia",
    period: "1830–1870",
    badge: "Pusat Kuasa & Markas NHM",
    title: "Kantor Gubernur Jenderal & Konsorsium NHM",
    summary: "Pusat birokrasi pemerintahan kolonial dan kantor pusat Nederlandsche Handel-Maatschappij (NHM) yang memegang hak monopoli pengapalan seluruh komoditas Tanam Paksa menuju pelabuhan Amsterdam dan Rotterdam.",
    historicalDetails: {
      commodities: ["Pusat Logistik & Finansial"],
      statistics: "Mengelola lebih dari 690 juta gulden aliran dana surplus Batig Slot.",
      impactSummary: "Pusat penerbitan Staatsblad dan pengawasan algemeene rekenkamer.",
      vanDenBoschPolicyNote: "Van den Bosch merancang jalur logistik terpusat dari Batavia langsung ke pasar lelang Belanda.",
      archivalReference: "C. Fasseur (1992), 'The Politics of Colonial Exploitation'."
    }
  },
  {
    id: "marker-minangkabau",
    name: "Minangkabau (Sumatera Barat)",
    category: "commodity",
    cx: 90,
    cy: 110,
    residency: "Sumatra's Westkust",
    period: "1847–1908",
    badge: "Tanam Paksa Kopi Luar Jawa",
    title: "Koffiestelsel Minangkabau & Kerja Rodi Jalan",
    summary: "Diberlakukan oleh Gubernur J.V. Michiels pasca Perang Padri. Setiap keluarga petani wajib menanam 150 batang kopi dan menyetorkannya ke gudang kolonial (Koffiepakhuis) dengan harga murah, serta rodi membuka jalan perbukitan.",
    historicalDetails: {
      commodities: ["Kopi Robusta & Arabika"],
      statistics: "Penyerahan kopi wajib berlaku hingga dihapuskan pada tahun 1908 akibat Perang Belasting.",
      impactSummary: "Merusak tatanan nagari tradisional dan memicu perlawanan rakyat terhadap pajak uang.",
      vanDenBoschPolicyNote: "Eksperimen pembuktian bahwa Tanam Paksa dapat direplikasi di luar Jawa.",
      archivalReference: "M.C. Ricklefs (2008), 'A History of Modern Indonesia'."
    }
  },
  {
    id: "marker-minahasa",
    name: "Minahasa (Sulawesi Utara)",
    category: "commodity",
    cx: 890,
    cy: 90,
    residency: "Karesidenan Manado",
    period: "1853–1899",
    badge: "Monopoli Kopi Timur",
    title: "Koffiestelsel Minahasa & Aliansi Walak",
    summary: "Pemerintah kolonial memonopoli komoditas kopi melalui para Hukum Tua (kepala walak). Petani dipaksa membuka lereng-lereng pegunungan dan menanam kopi dengan imbalan harga beli monopoli yang ditetapkan sepihak.",
    historicalDetails: {
      commodities: ["Kopi Minahasa"],
      statistics: "Menghasilkan ribuan pikul kopi kualitas premium untuk lelang NHM di Eropa.",
      impactSummary: "Mendorong monetisasi awal namun mengikis kemandirian pertanian subsisten masyarakat lokal.",
      vanDenBoschPolicyNote: "Penggunaan struktur adat Walak mirip dengan pemanfaatan bupati di Pulau Jawa.",
      archivalReference: "David Henley (2005), 'Fertility, Food and Fever: Population, economy and environment in North and Central Sulawesi'."
    }
  },
  {
    id: "marker-maluku",
    name: "Maluku (Ambon & Banda)",
    category: "commodity",
    cx: 940,
    cy: 155,
    residency: "Karesidenan Maluku",
    period: "1830–1864",
    badge: "Monopoli Rempah Klasik",
    title: "Penyerahan Rempah Wajib Cengkeh & Pala",
    summary: "Penerusan dari sistem monopoli rempah-rempah kuno VOC. Penduduk diwajibkan memelihara pohon cengkeh dan pala, melarang penjualan bebas ke pedagang Bugis atau Makassar dengan ancaman pidana berat.",
    historicalDetails: {
      commodities: ["Cengkeh", "Pala & Fuli"],
      statistics: "Dihapuskan secara bertahap pada tahun 1864 seiring jatuhnya harga rempah di pasar global.",
      impactSummary: "Mengakibatkan stagnasi ekonomi kepulauan Maluku dibandingkan sentra perkebunan gula/kopi di Jawa.",
      vanDenBoschPolicyNote: "Kewajiban rempah tetap dipertahankan sebagai benteng cadangan fiskal pemerintah kolonial.",
      archivalReference: "G.J. Resink (1968), 'Indonesia's History Between the Myths'."
    }
  }
];

export const railwayLinesData: RailwayLine[] = [
  {
    id: "rail-nis-central",
    name: "Jalur NIS Semarang–Solo–Yogyakarta",
    pathD: "M 550 195 Q 520 225 500 240 T 485 260",
    startPoint: "Semarang (Pelabuhan Ekspor)",
    endPoint: "Vorstenlanden (Solo & Yogyakarta)",
    yearBuilt: "1867–1872",
    purpose: "Mengangkut gula, tembakau, dan nila dari Vorstenlanden ke pelabuhan kapal uap Semarang dengan memangkas waktu tempuh dari 4 hari menjadi 4 jam."
  },
  {
    id: "rail-ss-west",
    name: "Jalur SS Batavia–Buitenzorg",
    pathD: "M 170 195 L 180 230",
    startPoint: "Batavia (Kota)",
    endPoint: "Buitenzorg (Bogor)",
    yearBuilt: "1873",
    purpose: "Jalur kereta api pertama di Jawa Barat untuk mempercepat arus pasokan kopi pegunungan Priangan menuju pelabuhan Sunda Kelapa."
  },
  {
    id: "rail-ss-east",
    name: "Jalur SS Surabaya–Pasuruan–Probolinggo",
    pathD: "M 710 215 Q 735 245 770 250",
    startPoint: "Surabaya (Pelabuhan Ujung)",
    endPoint: "Pasuruan & Probolinggo",
    yearBuilt: "1878",
    purpose: "Menghubungkan puluhan pabrik gula uap di Pasuruan langsung dengan dermaga kapal dagang internasional Surabaya."
  }
];

export const currencyConversionBenchmarks: CurrencyBenchmark[] = [
  {
    id: "peasant-wage",
    label: "Upah Tahunan Petani Priangan",
    guldenAmount: 2.11,
    modernIdrEstimate: 369250,
    historicalRole: "Hasil bersih rata-rata petani kopi Priangan setelah bekerja ratusan hari dalam setahun.",
    disparityDescription: "Setara hanya ~Rp 30.000-an per bulan. Tidak cukup bahkan untuk membeli 2 karung beras."
  },
  {
    id: "regent-bonus",
    label: "Bonus Tahunan Bupati Priangan",
    guldenAmount: 90000,
    modernIdrEstimate: 15750000000,
    historicalRole: "Bonus persentase panen (cultuurprocenten) seorang bupati elit berkat memeras ribuan petani.",
    disparityDescription: "Setara ~Rp 15,75 Miliar per tahun! Ketimpangan sosial mencapai lebih dari 40.000 kali lipat."
  },
  {
    id: "batig-slot-total",
    label: "Total Keuntungan Bersih (Batig Slot)",
    guldenAmount: 690000000,
    modernIdrEstimate: 120750000000000,
    historicalRole: "Total surplus fiskal yang disedot dari tanah Jawa dan ditransfer langsung ke kas Negeri Belanda (1831–1877).",
    disparityDescription: "Setara ~Rp 120,75 Triliun nilai sekarang. Cukup untuk melunasi seluruh utang nasional Belanda dan membangun seluruh jaringan kereta apinya."
  },
  {
    id: "indigo-export",
    label: "Puncak Nilai Ekspor Nila (1840)",
    guldenAmount: 15000000,
    modernIdrEstimate: 2625000000000,
    historicalRole: "Total nilai ekspor nila/indigo dari sawah-sawah Cirebon dan Pekalongan ke industri tekstil Eropa.",
    disparityDescription: "Setara ~Rp 2,62 Triliun, diraih dengan memicu kelaparan massal puluhan ribu petani di Cirebon."
  }
];

export const unitConversionData: UnitConversion[] = [
  {
    id: "unit-bouw",
    unitName: "Bouw (Bahu)",
    dutchNotation: "Bouw",
    metricEquivalent: "0,7096 Hektar (7.096,5 m²)",
    baseMultiplier: 7096.5,
    unitCategory: "luas",
    historicalUsage: "Satuan luas standar sawah dan perkebunan di Jawa. Staatsblad 1834 menyatakan maksimal 1/5 bouw per keluarga, namun fakta di lapangan sawah petani disita hingga 1/2 hingga 1 bouw penuh."
  },
  {
    id: "unit-pikul",
    unitName: "Pikul (Picul)",
    dutchNotation: "Pikul (100 Kati)",
    metricEquivalent: "61,76 Kilogram",
    baseMultiplier: 61.76,
    unitCategory: "bobot",
    historicalUsage: "Satuan bobot standar hasil bumi (kopi, gula, nila). Petani diwajibkan memikul karung kopi seberat 1 pikul mendaki lereng pegunungan hingga jarak puluhan kilometer ke pakhuis."
  },
  {
    id: "unit-pon",
    unitName: "Pon (Pond Kolonial)",
    dutchNotation: "Pond",
    metricEquivalent: "0,5 Kilogram (500 gram)",
    baseMultiplier: 0.5,
    unitCategory: "bobot",
    historicalUsage: "Digunakan khusus untuk mengukur ekstrak pasta nila (indigo) dan daun tembakau kering bermutu tinggi."
  },
  {
    id: "unit-cacah",
    unitName: "Cacah (Cacah Sawah)",
    dutchNotation: "Huisgezin / Belastingplichtige",
    metricEquivalent: "1 Kepala Keluarga Petani Pembayar Pajak",
    baseMultiplier: 1,
    unitCategory: "populasi",
    historicalUsage: "Satuan sensus kolonial. Satu cacah bertanggung jawab menyediakan 1 tenaga kerja rodi penuh sepanjang tahun."
  }
];

export const historicalDilemmasData: HistoricalDilemmaScenario[] = [
  {
    id: "scenario-cirebon-1845",
    role: "Kepala Desa (Kuwu)",
    location: "Karesidenan Cirebon",
    year: 1845,
    title: "Dilema Tanaman Nila vs Kelaparan Padi Desa",
    situation: "Musim tanam padi tiba. Residen Belanda dan Kontrolir memerintahkan desa Anda menyerahkan 40% sawah subur beririgasi untuk diperluas menjadi kebun Nila (indigo). Petani Anda sudah mulai kekurangan beras dan kelelahan setelah bekerja di pabrik nila.",
    historicalContext: "Pada tahun 1845 di Cirebon, penanaman nila secara berlebihan merusak siklus tanam padi dan menyebabkan kelaparan dahsyat hingga ribuan warga memakan daun liar atau mengungsi ke pedalaman.",
    choices: [
      {
        id: "cirebon-opt-comply",
        choiceLabel: "Opsi A: Patuhi Sepenuhnya Tuntutan Kolonial",
        actionText: "Serahkan 40% sawah terbaik untuk nila dan paksa warga bekerja lembur agar target kuota panen terpenuhi.",
        consequences: {
          peasantWelfare: -3,
          colonialPressure: 2,
          localStability: -2
        },
        immediateFeedback: "Residen Belanda memuji kepatuhan Anda dan memberi Anda bonus uang, namun gagal panen padi terjadi. Warga desa Anda mulai jatuh sakit karena kelaparan, dan sebagian melarikan diri ke hutan."
      },
      {
        id: "cirebon-opt-compromise",
        choiceLabel: "Opsi B: Taktik Pembagian Lahan Kompromistis",
        actionText: "Hanya serahkan 20% sawah tepi untuk nila, sisanya tetap ditanam padi secara sembunyi-sembunyi dengan alasan banjir lumpur.",
        consequences: {
          peasantWelfare: 1,
          colonialPressure: -1,
          localStability: 1
        },
        immediateFeedback: "Desa Anda masih memiliki cukup beras untuk bertahan hidup, namun Kontrolir Belanda mencurigai keterlambatan setor pasta nila dan mengancam memeriksa buku kas desa."
      },
      {
        id: "cirebon-opt-resist",
        choiceLabel: "Opsi C: Pimpin Delegasi Protes ke Alun-Alun",
        actionText: "Tolak perintah tanam nila secara terbuka, dan pimpin 100 perwakilan petani menemui Bupati untuk meminta pembatalan kuota.",
        consequences: {
          peasantWelfare: 2,
          colonialPressure: -3,
          localStability: -1
        },
        immediateFeedback: "Aksi protes Anda membangkitkan keberanian desa tetangga, tetapi Anda ditangkap oleh serdadu kolonial dan dicopot dari jabatan kuwu, diasingkan sebagai penghasut."
      }
    ],
    historicalEpilogue: {
      whatActuallyHappened: "Para kuwu dan bupati di Cirebon pada kenyataannya ditekan sangat keras untuk mematuhi kuota nila demi mengejar kultuurprocenten. Akibatnya, bencana kelaparan hebat 1844-1845 pecah hingga menewaskan puluhan ribu orang, memaksa pemerintah kolonial akhirnya memangkas budidaya nila di Cirebon.",
      historicalOutcome: "Peristiwa Cirebon ini menjadi skandal besar pertama yang membongkar kekejaman Tanam Paksa di mata publik Den Haag.",
      archivalSource: "Laporan Inspeksi Khusus L. Vitalis (1845) & Verslag Cirebon 1846."
    }
  },
  {
    id: "scenario-priangan-1840",
    role: "Bupati Pribumi (Regent)",
    location: "Karesidenan Priangan",
    year: 1840,
    title: "Godaan Bonus Cultuurprocenten vs Pikul Kopi Kuli",
    situation: "Gubernur Jenderal Johannes van den Bosch menjanjikan Anda kenaikan bonus panen kopi (cultuurprocenten) menjadi f. 90.000 per tahun jika Anda bisa membuka 500 hektar hutan pegunungan terjal dan mengerahkan 10.000 petani pikul untuk menyetor kopi ke dermaga.",
    historicalContext: "Bupati Priangan menerima bayaran bonus persentase yang menjadikannya kaum bangsawan terkaya di Asia Tenggara, sementara rakyatnya hidup di gubuk bivak pegunungan dengan upah hanya f. 2,11 per tahun.",
    choices: [
      {
        id: "priangan-opt-maximize",
        choiceLabel: "Opsi A: Kerahkan Seluruh Petani Tanpa Pengecualian",
        actionText: "Wajibkan seluruh laki-laki dewasa tinggal di bivak rimba kopi pegunungan selama 8 bulan berturut-turut untuk mengejar rekor setoran kopi.",
        consequences: {
          peasantWelfare: -3,
          colonialPressure: 3,
          localStability: -1
        },
        immediateFeedback: "Anda menerima bonus monumental f. 92.500 dan dipuji di Batavia sebagai 'Regent Teladan'. Namun puluhan kuli tewas diterkam harimau dan kelelahan memikul kopi di jalanan jurang."
      },
      {
        id: "priangan-opt-moderate",
        choiceLabel: "Opsi B: Sistem Gilir Kerja Rodi Berkala",
        actionText: "Terapkan rotasi giliran kerja tiap 2 bulan dan gunakan sebagian kas kabupaten untuk membiayai gerobak pedati di jalan utama.",
        consequences: {
          peasantWelfare: 1,
          colonialPressure: 0,
          localStability: 2
        },
        immediateFeedback: "Beban kerja petani berkurang signifikan. Target kopi tercapai 85%, bonus Anda tetap sangat besar (f. 65.000), dan kerusuhan sosial dapat dihindarkan."
      },
      {
        id: "priangan-opt-protect",
        choiceLabel: "Opsi C: Beri Keringanan Petani & Tolak Ekspansi Hutan",
        actionText: "Kirim surat resmi ke Residen bahwa lereng gunung rawan longsor dan tolak membuka hutan baru demi melindungi lahan padi huma rakyat.",
        consequences: {
          peasantWelfare: 3,
          colonialPressure: -3,
          localStability: 0
        },
        immediateFeedback: "Rakyat menganggap Anda pemimpin adil dan pelindung tanah Sunda. Namun Residen Eropa menganggap Anda tidak loyal dan merekomendasikan mutasi atau pemakzulan gelar bupati."
      }
    ],
    historicalEpilogue: {
      whatActuallyHappened: "Hampir seluruh bupati Priangan memilih Opsi A atau kompromi yang sangat condong ke kolonial, tergiur oleh kekayaan fantastis cultuurprocenten. Kemegahan pendopo kabupaten abad ke-19 dibangun di atas keringat ratusan ribu petani bivak kopi.",
      historicalOutcome: "Jan Breman mencatat inilah feodalisme birokratis paling brutal: aliansi penguasa feodal pribumi dan penjajah Belanda memeras rakyatnya sendiri.",
      archivalSource: "Jan Breman (2014), 'Keuntungan Kolonial dari Kerja Paksa: Sistem Priangan'."
    }
  },
  {
    id: "scenario-parliament-1860",
    role: "Anggota Parlemen Liberal Belanda (Tweede Kamer)",
    location: "Den Haag, Belanda",
    year: 1860,
    title: "Sidang Parlemen Pasca Penerbitan Novel Max Havelaar",
    situation: "Novel 'Max Havelaar' karya Multatuli baru saja beredar luas dan menimbulkan kehebohan moral di seluruh penjuru negeri Belanda. Menteri Jajahan dari kubu Konservatif berdalih bahwa keuntungan Batig Slot (f. 690 juta) telah menyelamatkan ekonomi Belanda dari kebangkrutan.",
    historicalContext: "Tahun 1860 adalah titik balik politik kolonial Belanda. Kubu Liberal menuntut penghapusan Tanam Paksa monopoli negara, namun menginginkan tanah Hindia dibuka untuk modal swasta perkebunan Eropa.",
    choices: [
      {
        id: "parl-opt-defend",
        choiceLabel: "Opsi A: Bela Tanam Paksa Demi Pembangunan Belanda",
        actionText: "Dukung menteri Konservatif: berargumen bahwa Batig Slot dibutuhkan untuk membangun jaringan rel kereta api nasional Staatsspoorwegen dan Terusan Noordzee.",
        consequences: {
          peasantWelfare: -2,
          colonialPressure: 2,
          localStability: 1
        },
        immediateFeedback: "Kubu Konservatif dan pemegang saham NHM bertepuk tangan. Kebijakan Tanam Paksa diperpanjang, namun kecaman moral pers Belanda semakin tajam."
      },
      {
        id: "parl-opt-liberal-privatize",
        choiceLabel: "Opsi B: Desak Liberalisasi & Buka Tanah untuk Modal Swasta",
        actionText: "Dukung Mosi Wintgens dan rancangan UU Agraria: hapus monopoli negara secara bertahap dan buka tanah Hindia Belanda untuk pengusaha perkebunan swasta Belanda.",
        consequences: {
          peasantWelfare: 0,
          colonialPressure: 0,
          localStability: 1
        },
        immediateFeedback: "Mosi Wintgens lolos di parlemen! Jalan menuju Agrarische Wet 1870 terbuka lebar. Negara berhenti memaksa tanam, namun era baru eksploitasi perkebunan swasta dimulai."
      },
      {
        id: "parl-opt-ethical-reparation",
        choiceLabel: "Opsi C: Tuntut Restitusi Moral & Pengembalian Dana ke Jawa",
        actionText: "Sampaikan pidato radikal seperti Baron van Hoëvell: tuntut agar 690 juta gulden Batig Slot dikembalikan untuk mendanai sekolah dan irigasi rakyat Jawa.",
        consequences: {
          peasantWelfare: 3,
          colonialPressure: -2,
          localStability: 0
        },
        immediateFeedback: "Pidato Anda mengguncang nurani parlemen, meski mayoritas anggota menganggap gagasan ganti rugi terlalu utopis pada tahun 1860. Benih Politik Etis (Ethische Politiek) resmi tertanam."
      }
    ],
    historicalEpilogue: {
      whatActuallyHappened: "Parlemen Belanda akhirnya memilih Opsi B (Jalur Liberal Fransen van de Putte). Melalui Suikerwet 1870 dan Agrarische Wet 1870, Tanam Paksa resmi diakhiri secara bertahap dan digantikan oleh era perkebunan modal swasta (Liberal Period 1870–1900). Tuntutan ganti rugi moral (Opsi C) baru diadopsi 40 tahun kemudian dalam Politik Etis 1901.",
      historicalOutcome: "Peralihan dari Tanam Paksa ke Era Swasta tidak serta-merta memakmurkan petani Jawa, tetapi mengalihkan eksploitasi dari birokrasi negara ke korporasi swasta.",
      archivalSource: "Handelingen van de Tweede Kamer 1860 & C. Fasseur (1992)."
    }
  }
];

