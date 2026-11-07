import {
  backgroundData,
  vanDenBoschControversyData,
  everydayFarmerLifeData,
  exploitationData,
  commodityFinancialData,
  ecologicalZoningData,
  batigSlotAllocationData,
  colonialGlossaryData,
  bremanCritiqueData,
  implementationData,
  residencyComparisonData,
  bupatiRolesData,
  preangerBlueprintData,
  vocExpansionData,
  impactData,
  peasantResistanceData,
  parliamentaryPoliticsData,
  historiographicalSynthesisData,
  vanReesReportData,
  prianganMonetizationData,
  spatialMarkersData,
  historicalDilemmasData,
  featuredHistoricalQuotes,
  bibliographyData,
} from './historyContent';
import type { MonographNavigationTarget } from '../utils/monographNavigator';

export interface MonographSearchEntry {
  id: string;
  title: string;
  category: string;
  sectionLabel: string;
  badge?: string;
  snippet: string;
  keywords: string;
  target: MonographNavigationTarget;
}

export interface QuickTopicPreset {
  label: string;
  query: string;
}

export const QUICK_SEARCH_PRESETS: QuickTopicPreset[] = [
  { label: 'Batig Slot', query: 'Batig Slot' },
  { label: 'Staatsblad 1834', query: 'Staatsblad' },
  { label: 'Cultuurprocenten', query: 'Cultuurprocenten' },
  { label: 'Cirebon & Grobogan', query: 'Kelaparan' },
  { label: 'Ono van Rees 1867', query: 'Van Rees' },
  { label: 'Jan Breman', query: 'Breman' },
  { label: 'Multatuli', query: 'Multatuli' },
  { label: 'Bupati & Priangan', query: 'Bupati' },
];

function buildSearchCatalog(): MonographSearchEntry[] {
  const entries: MonographSearchEntry[] = [];

  // 1. Latar Belakang: Krisis Pra-1830
  backgroundData.crises.forEach((crisis) => {
    entries.push({
      id: `search-crisis-${crisis.id}`,
      title: `${crisis.name} (${crisis.years})`,
      category: 'Krisis Fiskal & Militer',
      sectionLabel: 'Bab I · Latar Belakang',
      badge: crisis.years,
      snippet: `${crisis.impact} Beban biaya: ${crisis.cost}.`,
      keywords: `${crisis.name} ${crisis.years} ${crisis.impact} ${crisis.cost} defisit utang perang`,
      target: {
        sectionId: 'latar-belakang',
        elementId: `crisis-card-${crisis.id}`,
      },
    });
  });

  // Konsep & Kontroversi Van den Bosch
  entries.push({
    id: 'search-vandenbosch-concept',
    title: backgroundData.vanDenBoschConcept.title,
    category: 'Konsep Kebijakan',
    sectionLabel: 'Bab I · Latar Belakang',
    badge: '1830',
    snippet: backgroundData.vanDenBoschConcept.summary,
    keywords: `Johannes van den Bosch Landrente Raffles wingewest pajak in natura ${backgroundData.vanDenBoschConcept.points.join(' ')}`,
    target: {
      sectionId: 'latar-belakang',
      elementId: 'vandenbosch-concept-section',
    },
  });

  vanDenBoschControversyData.forEach((c) => {
    entries.push({
      id: `search-controversy-${c.id}`,
      title: c.title,
      category: 'Investigasi Birokrasi',
      sectionLabel: 'Bab I · Latar Belakang',
      badge: c.badge,
      snippet: `${c.description} ${c.historicalDetail}`,
      keywords: `${c.title} ${c.badge} ${c.description} ${c.historicalDetail} nepotisme korupsi dana rahasia`,
      target: {
        sectionId: 'latar-belakang',
        elementId: c.id,
      },
    });
  });

  entries.push({
    id: 'search-farmer-bivak',
    title: everydayFarmerLifeData.title,
    category: 'Sejarah Sosial Petani',
    sectionLabel: 'Bab I · Latar Belakang',
    badge: 'Bivak Kopi',
    snippet: everydayFarmerLifeData.subtitle,
    keywords: `${everydayFarmerLifeData.title} bivak rimba kopi harimau perempuan anak pikulan ${everydayFarmerLifeData.aspects.map((a) => a.title + ' ' + a.description).join(' ')}`,
    target: {
      sectionId: 'latar-belakang',
      elementId: 'farmer-bivak-section',
    },
  });

  backgroundData.historianInterpretations.forEach((h) => {
    entries.push({
      id: `search-interp-${h.id}`,
      title: `Tesis Sejarawan: ${h.scholar}`,
      category: 'Historiografi',
      sectionLabel: 'Bab I · Latar Belakang',
      snippet: h.interpretation,
      keywords: `${h.scholar} ${h.interpretation} sejarawan ekonom`,
      target: {
        sectionId: 'latar-belakang',
        elementId: h.id,
      },
    });
  });

  // 2. Eksploitasi: Perbandingan VOC vs Cultuurstelsel
  entries.push({
    id: 'search-voc-comparison',
    title: 'Perbedaan Fundamental: VOC vs Cultuurstelsel',
    category: 'Komparasi Kelembagaan',
    sectionLabel: 'Bab II · Eksploitasi',
    badge: 'Abad 17–19',
    snippet: 'Transformasi dari monopoli kongsi dagang VOC (Verplichte Leverantie & Contingenten) menuju birokrasi negara kolonial Hindia Belanda.',
    keywords: `VOC vs Cultuurstelsel kongsi dagang birokrasi negara ${exploitationData.vocComparison.map((v) => `${v.aspect} ${v.voc} ${v.cultuurstelsel}`).join(' ')}`,
    target: {
      sectionId: 'eksploitasi',
      elementId: 'voc-comparison-section',
    },
  });

  // Tab 1 Eksploitasi: 5 Komoditas Ekspor Utama
  exploitationData.commodities.forEach((c) => {
    entries.push({
      id: `search-commodity-${c.id}`,
      title: `${c.name} (${c.latinName})`,
      category: 'Komoditas Ekspor',
      sectionLabel: 'Bab II · Tab 1 Komoditas & Finansial',
      badge: `Beban ${c.burdenLevel}`,
      snippet: `${c.description} Sentra: ${c.regions.join(', ')}.`,
      keywords: `${c.name} ${c.latinName} ${c.category} ${c.regions.join(' ')} ${c.description} ${c.fact}`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'financial',
        subTabId: c.id,
        elementId: `commodity-tab-${c.id}`,
      },
    });
  });

  commodityFinancialData.forEach((fin, idx) => {
    entries.push({
      id: `search-fin-${idx}`,
      title: `Kinerja Laba-Rugi: ${fin.commodity}`,
      category: 'Finansial 1840–1860',
      sectionLabel: 'Bab II · Tab 1 Komoditas & Finansial',
      badge: fin.totalSurplusShare,
      snippet: `1840–1849: ${fin.profit1840_1849} · 1850–1860: ${fin.status1850_1860}.`,
      keywords: `${fin.commodity} laba rugi finansial surplus ${fin.keyDetails.join(' ')}`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'financial',
        elementId: `fin-card-${idx}`,
      },
    });
  });

  // Tab 2 Eksploitasi: Ekologi Lahan
  ecologicalZoningData.forEach((z, idx) => {
    entries.push({
      id: `search-eco-${idx}`,
      title: `${z.type} (${z.cropCategory})`,
      category: 'Ekologi & Topografi',
      sectionLabel: 'Bab II · Tab 2 Ekologi Lahan',
      badge: z.crops.join(', '),
      snippet: `${z.landCharacteristics} ${z.ecologicalRationale}`,
      keywords: `${z.type} ${z.cropCategory} ${z.crops.join(' ')} ${z.landCharacteristics} ${z.ecologicalRationale} ${z.regions.join(' ')} annuals perennials sawah pegunungan`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'ecology',
        elementId: `eco-zone-${idx}`,
      },
    });
  });

  // Tab 3 Eksploitasi: Alokasi Batig Slot & Mekanisme
  batigSlotAllocationData.forEach((b) => {
    entries.push({
      id: `search-batig-${b.id}`,
      title: `Alokasi Batig Slot: ${b.title}`,
      category: 'Fiskal Batig Slot',
      sectionLabel: 'Bab II · Tab 3 Alokasi 690 Juta Gulden',
      badge: b.amountOrScale,
      snippet: `${b.description} Penerima: ${b.destination}.`,
      keywords: `Batig Slot ${b.title} ${b.amountOrScale} ${b.destination} ${b.description} ${b.historicalSignificance} J.C. Baud gabus Belanda`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'batig-slot',
        elementId: b.id,
      },
    });
  });

  Object.entries(exploitationData.mechanisms).forEach(([key, mech]) => {
    entries.push({
      id: `search-mech-${key}`,
      title: mech.term,
      category: 'Mekanisme Kolonial',
      sectionLabel: 'Bab II · Tab 3 Alokasi Batig Slot',
      snippet: `${mech.summary} ${mech.detail}`,
      keywords: `${mech.term} ${mech.summary} ${mech.detail}`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'batig-slot',
        elementId: `mech-card-${key}`,
      },
    });
  });

  // Tab 4 Eksploitasi: Statistik Tenaga Kerja Breman, Kultuurverslagen, Kamus Kolonial, & Kritik Breman
  exploitationData.laborStatistics.items.forEach((stat) => {
    entries.push({
      id: `search-labor-${stat.id}`,
      title: `${stat.label}: ${stat.value} (${stat.period})`,
      category: 'Statistik Tenaga Kerja',
      sectionLabel: 'Bab II · Tab 4 Kultuurverslagen & Kamus',
      badge: stat.period,
      snippet: `${stat.context} (${stat.citation}).`,
      keywords: `${stat.label} ${stat.value} ${stat.period} ${stat.context} ${stat.citation} tenaga kerja demografi`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'macro-stats',
        elementId: stat.id,
      },
    });
  });

  colonialGlossaryData.forEach((g, idx) => {
    entries.push({
      id: `search-glossary-${idx}`,
      title: `Kamus Kolonial: ${g.term}`,
      category: 'Istilah & Satuan Arsip',
      sectionLabel: 'Bab II · Tab 4 Kultuurverslagen & Kamus',
      badge: g.modernEquivalent,
      snippet: `${g.definition} ${g.contextNote}`,
      keywords: `${g.term} ${g.modernEquivalent} ${g.definition} ${g.contextNote} kamus istilah satuan`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'macro-stats',
        elementId: `glossary-term-${idx}`,
      },
    });
  });

  bremanCritiqueData.forEach((bc) => {
    entries.push({
      id: `search-breman-${bc.id}`,
      title: `Kritik Statistik Breman: ${bc.title}`,
      category: 'Forensik Arsip Breman',
      sectionLabel: 'Bab II · Tab 4 Kultuurverslagen & Kamus',
      badge: 'Jan Breman (2014)',
      snippet: `Klaim: ${bc.mythVsFact.officialClaim} Realitas: ${bc.mythVsFact.groundReality}`,
      keywords: `${bc.title} ${bc.mythVsFact.officialClaim} ${bc.mythVsFact.groundReality} ${bc.evidence} Jan Breman Kultuurverslagen`,
      target: {
        sectionId: 'eksploitasi',
        tabId: 'macro-stats',
        elementId: bc.id,
      },
    });
  });

  // 3. Garis Waktu (1830-1915)
  implementationData.timeline.forEach((ev) => {
    entries.push({
      id: `search-timeline-${ev.id}`,
      title: `Kronik ${ev.year}: ${ev.title}`,
      category: 'Garis Waktu Sejarah',
      sectionLabel: 'Bab III · Garis Waktu (1830–1915)',
      badge: String(ev.year),
      snippet: ev.shortDesc,
      keywords: `${ev.year} ${ev.title} ${ev.badge} ${ev.shortDesc} ${ev.fullDesc.join(' ')} ${ev.historicalFigures.join(' ')}`,
      target: {
        sectionId: 'timeline-section',
        tabId: ev.id,
        elementId: 'timeline-featured-card',
      },
    });
  });

  // 4. Pelaksanaan: 3 Karesidenan, 7 Aturan Staatsblad 1834, Luar Jawa, & Bupati
  residencyComparisonData.forEach((res, idx) => {
    entries.push({
      id: `search-residency-${idx}`,
      title: `Studi Kasus Karesidenan ${res.residency}`,
      category: 'Komparasi Karesidenan',
      sectionLabel: 'Bab IV · Tab 1 Priangan vs Cirebon vs Pasuruan',
      badge: res.farmerWelfareStatus,
      snippet: `Komoditas: ${res.dominantCrops}. ${res.keyMechanism}`,
      keywords: `${res.residency} ${res.islandArea} ${res.dominantCrops} ${res.farmerWelfareStatus} ${res.keyMechanism} ${res.historiographicalRelevance}`,
      target: {
        sectionId: 'pelaksanaan',
        tabId: 'three-residencies',
        elementId: `residency-card-${idx}`,
      },
    });
  });

  implementationData.laws.forEach((law, idx) => {
    entries.push({
      id: `search-law-${law.ruleNumber}`,
      title: `Staatsblad 1834 Pasal 0${law.ruleNumber}: ${law.article}`,
      category: 'Staatsblad 1834 No. 22',
      sectionLabel: 'Bab IV · Tab 2 Aturan Staatsblad vs Realitas',
      badge: `Penyimpangan ${law.severity}`,
      snippet: `Aturan: ${law.officialRule} Realitas: ${law.fieldReality}`,
      keywords: `Staatsblad 1834 No 22 Pasal ${law.ruleNumber} Aturan ${law.ruleNumber} ${law.article} ${law.officialRule} ${law.fieldReality}`,
      target: {
        sectionId: 'pelaksanaan',
        tabId: 'staatsblad',
        elementId: `law-card-${idx}`,
      },
    });
  });

  exploitationData.outerJavaExpansion.regions.forEach((reg) => {
    entries.push({
      id: `search-outer-${reg.id}`,
      title: `Ekspansi Luar Jawa: ${reg.region}`,
      category: 'Wilayah Luar Jawa',
      sectionLabel: 'Bab IV · Tab 3 Dinamika Luar Jawa',
      badge: reg.island,
      snippet: `Komoditas: ${reg.primaryCommodity}. ${reg.description}`,
      keywords: `${reg.region} ${reg.island} ${reg.primaryCommodity} ${reg.description} ${reg.targetMarket} luar Jawa Sumatera Minahasa Lampung`,
      target: {
        sectionId: 'pelaksanaan',
        tabId: 'outer-java',
        elementId: `region-card-${reg.id}`,
      },
    });
  });

  bupatiRolesData.forEach((role) => {
    entries.push({
      id: `search-bupati-${role.id}`,
      title: `Peran Bupati 0${role.roleNumber}: ${role.title}`,
      category: 'Bupati & Indirect Rule',
      sectionLabel: 'Bab IV · Tab 4 Bupati & Indirect Rule',
      badge: role.badge,
      snippet: role.summary,
      keywords: `bupati priyayi indirect rule ngawula ${role.title} ${role.summary} ${role.details.join(' ')}`,
      target: {
        sectionId: 'pelaksanaan',
        tabId: 'bupati',
        elementId: role.id,
      },
    });
  });

  preangerBlueprintData.forEach((bp) => {
    entries.push({
      id: `search-blueprint-${bp.id}`,
      title: `Cetak Biru Preangerstelsel: ${bp.title}`,
      category: 'Preangerstelsel VOC',
      sectionLabel: 'Bab IV · Tab 4 Bupati & Indirect Rule',
      badge: `Elemen 0${bp.elementNumber}`,
      snippet: `${bp.preangerstelselOrigin} -> ${bp.cultuurstelselAdoption}`,
      keywords: `Preangerstelsel Priangan VOC ${bp.title} ${bp.preangerstelselOrigin} ${bp.cultuurstelselAdoption} ${bp.significance}`,
      target: {
        sectionId: 'pelaksanaan',
        tabId: 'bupati',
        elementId: 'preanger-blueprint-section',
      },
    });
  });

  vocExpansionData.forEach((ve) => {
    entries.push({
      id: `search-vocexp-${ve.id}`,
      title: `Ekspansi VOC Priangan: ${ve.title}`,
      category: 'Sejarah Pra-1830 Priangan',
      sectionLabel: 'Bab IV · Tab 4 Bupati & Indirect Rule',
      badge: ve.badge,
      snippet: `${ve.description} Dampak: ${ve.longTermImpact}`,
      keywords: `VOC Priangan ${ve.title} ${ve.badge} ${ve.description} ${ve.longTermImpact}`,
      target: {
        sectionId: 'pelaksanaan',
        tabId: 'bupati',
        elementId: ve.id,
      },
    });
  });

  // 5. Dampak: Kelaparan, Dampak Positif/Negatif, Resistensi, Parlemen, Historiografi, Laporan Van Rees, & Tokoh
  impactData.famineCases.forEach((fam, idx) => {
    entries.push({
      id: `search-famine-${idx}`,
      title: `Tragedi Kelaparan ${fam.region} (${fam.years})`,
      category: 'Bencana Kelaparan',
      sectionLabel: 'Bab V · Tab 1 Kelaparan & Dampak',
      badge: fam.years,
      snippet: `${fam.cause} Korban: ${fam.victimCount}.`,
      keywords: `kelaparan ${fam.region} ${fam.years} ${fam.cause} ${fam.victimCount} ${fam.description}`,
      target: {
        sectionId: 'dampak',
        tabId: 'famines-impact',
        elementId: `famine-case-${idx}`,
      },
    });
  });

  impactData.positiveImpacts.forEach((pos, idx) => {
    entries.push({
      id: `search-pos-impact-${idx}`,
      title: `Dampak Ikutan: ${pos.title}`,
      category: 'Modernisasi Parsial',
      sectionLabel: 'Bab V · Tab 1 Kelaparan & Dampak',
      badge: 'Dampak Positif',
      snippet: pos.description,
      keywords: `dampak positif modernisasi infrastruktur monetisasi ${pos.title} ${pos.description}`,
      target: {
        sectionId: 'dampak',
        tabId: 'famines-impact',
        subTabId: 'positive',
        elementId: 'tab-impact-positive',
      },
    });
  });

  peasantResistanceData.forEach((res) => {
    entries.push({
      id: `search-res-${res.id}`,
      title: `Resistensi Rakyat: ${res.title}`,
      category: res.category,
      sectionLabel: 'Bab V · Tab 2 Resistensi & Perlawanan',
      badge: res.locationOrYear,
      snippet: `${res.description} Dampak: ${res.historicalImpact}`,
      keywords: `perlawanan resistensi sabotase pelarian ${res.category} ${res.title} ${res.locationOrYear} ${res.description} ${res.historicalImpact}`,
      target: {
        sectionId: 'dampak',
        tabId: 'resistance',
        elementId: res.id,
      },
    });
  });

  parliamentaryPoliticsData.forEach((pol) => {
    entries.push({
      id: `search-pol-${pol.id}`,
      title: `Parlemen Belanda (${pol.periodOrEvent}): ${pol.title}`,
      category: 'Politik Tweede Kamer',
      sectionLabel: 'Bab V · Tab 3 Parlemen Belanda (1848–1870)',
      badge: pol.periodOrEvent,
      snippet: `${pol.coreDebate} Hasil: ${pol.outcomeAndImpact}`,
      keywords: `parlemen Tweede Kamer Den Haag liberal konservatif Thorbecke Agrarische Wet Suikerwet ${pol.periodOrEvent} ${pol.title} ${pol.factions} ${pol.coreDebate} ${pol.outcomeAndImpact}`,
      target: {
        sectionId: 'dampak',
        tabId: 'politics',
        elementId: pol.id,
      },
    });
  });

  historiographicalSynthesisData.forEach((hist, idx) => {
    entries.push({
      id: `search-hist-lens-${idx}`,
      title: `Lensa Historiografi: ${hist.historian}`,
      category: hist.schoolName,
      sectionLabel: 'Bab V · Tab 4 Sintesis Tiga Lensa Sejarawan',
      badge: hist.framework,
      snippet: `${hist.economicAssessment} Karya: ${hist.keyWork}.`,
      keywords: `${hist.historian} ${hist.schoolName} ${hist.framework} ${hist.primaryPerspective} ${hist.economicAssessment} ${hist.collapseExplanation} ${hist.keyWork}`,
      target: {
        sectionId: 'dampak',
        tabId: 'historiography',
        elementId: `hist-lens-card-${idx}`,
      },
    });
  });

  vanReesReportData.forEach((vr) => {
    entries.push({
      id: `search-vanrees-${vr.id}`,
      title: `Laporan Ono van Rees (1867): ${vr.title}`,
      category: 'Laporan Rahasia 1867',
      sectionLabel: 'Bab V · Tab 5 Laporan Van Rees 1867',
      badge: vr.badge,
      snippet: `${vr.findings.join(' ')} Signifikansi: ${vr.significance}`,
      keywords: `Ono van Rees Otto van Rees 1867 Priangan Preangerstelsel Staatsblad 1870 ${vr.title} ${vr.findings.join(' ')} ${vr.significance}`,
      target: {
        sectionId: 'dampak',
        tabId: 'van-rees',
        elementId: vr.id,
      },
    });
  });

  prianganMonetizationData.forEach((pm) => {
    entries.push({
      id: `search-monetization-${pm.id}`,
      title: `Monetisasi Priangan (${pm.phase}): ${pm.title}`,
      category: 'Monetisasi Pedesaan',
      sectionLabel: 'Bab V · Tab 5 Laporan Van Rees 1867',
      badge: pm.periodLabel,
      snippet: `${pm.characteristics.join(' ')} ${pm.keyFact}`,
      keywords: `monetisasi Priangan uang garam barter duit ${pm.phase} ${pm.periodLabel} ${pm.title} ${pm.characteristics.join(' ')} ${pm.keyFact}`,
      target: {
        sectionId: 'dampak',
        tabId: 'van-rees',
        elementId: pm.id,
      },
    });
  });

  impactData.historicalCritics.forEach((critic) => {
    entries.push({
      id: `search-critic-${critic.id}`,
      title: `${critic.name} — ${critic.role}`,
      category: `Tokoh Pengkritik (${critic.category})`,
      sectionLabel: 'Bab V · Galeri Tokoh Oposisi',
      badge: critic.period,
      snippet: `${critic.keyContribution} Karya: ${critic.workOrCitation}.`,
      keywords: `${critic.name} ${critic.role} ${critic.period} ${critic.category} ${critic.workOrCitation} ${critic.keyContribution} ${critic.impactNote}`,
      target: {
        sectionId: 'dampak',
        elementId: critic.id,
      },
    });
  });

  // 6. Laboratorium Sejarah: Peta Spasial, Kalkulator, & Simulasi Dilema
  spatialMarkersData.forEach((m) => {
    entries.push({
      id: `search-map-${m.id}`,
      title: `Peta Spasial: ${m.name} (${m.residency})`,
      category: 'Peta Geospasial Nusantara',
      sectionLabel: 'Bab VI · Lab Sejarah Tab 1 Peta',
      badge: `${Math.abs(m.lat).toFixed(1)}° ${m.lat >= 0 ? 'LU' : 'LS'}, ${m.lon.toFixed(1)}° BT`,
      snippet: `${m.summary} Sumber: ${m.historicalDetails.archivalReference}`,
      keywords: `peta geospasial lokasi koordinat ${m.name} ${m.residency} ${m.title} ${m.summary} ${m.historicalDetails.statistics} ${m.historicalDetails.archivalReference}`,
      target: {
        sectionId: 'interactive-lab',
        tabId: 'map',
        subTabId: m.id,
      },
    });
  });

  entries.push({
    id: 'search-lab-calculator',
    title: 'Kalkulator Kurs Gulden, Konversi Bouw/Pikul, & Simulator Petani Breman',
    category: 'Instrumen Kuantitatif',
    sectionLabel: 'Bab VI · Lab Sejarah Tab 2 Kalkulator',
    badge: 'Interaktif',
    snippet: 'Konversi daya beli Gulden 1850 ke Rupiah modern, konversi satuan Bouw/Pikul/Pon/Cacah, dan simulasi defisit Plantloon vs Landrent.',
    keywords: 'kalkulator kurs gulden rupiah bouw pikul pon cacah simulator beban kerja petani Jan Breman',
    target: {
      sectionId: 'interactive-lab',
      tabId: 'calculator',
    },
  });

  historicalDilemmasData.forEach((dil) => {
    entries.push({
      id: `search-dilemma-${dil.id}`,
      title: `Simulasi Dilema (${dil.year}): ${dil.title}`,
      category: 'Simulasi Peran Sejarah',
      sectionLabel: 'Bab VI · Lab Sejarah Tab 3 Dilema',
      badge: dil.role,
      snippet: `${dil.situation} Konteks: ${dil.historicalContext}`,
      keywords: `simulasi dilema sejarah ${dil.title} ${dil.role} ${dil.location} ${dil.year} ${dil.situation} ${dil.historicalContext}`,
      target: {
        sectionId: 'interactive-lab',
        tabId: 'dilemma',
        subTabId: dil.id,
      },
    });
  });

  // 7. Permainan Sejarah (TTS & Kuis)
  entries.push({
    id: 'search-game-tts',
    title: 'Teka-Teki Silang Batavia (11×12) — Suplemen Javasche Courant',
    category: 'Permainan Edukasi',
    sectionLabel: 'Bab VII · Tab 1 TTS Batavia',
    badge: '10 Kata',
    snippet: 'Asah ketajaman istilah sejarah Cultuurstelsel dengan papan TTS 11×12 lengkap dengan Bisikan Residen dan mesin ketik saku.',
    keywords: 'TTS teka-teki silang permainan game Javasche Courant Batavia',
    target: {
      sectionId: 'permainan-sejarah',
      tabId: 'tts',
    },
  });

  entries.push({
    id: 'search-game-quiz',
    title: 'Kuis Sidang Komisi Hindia 1860 & Piagam Pangkat',
    category: 'Evaluasi Interaktif',
    sectionLabel: 'Bab VII · Tab 2 Kuis Komisi Hindia',
    badge: '8 Soal',
    snippet: 'Uji pemahaman kritis dengan 8 soal pilihan ganda & stempel fakta/propaganda kolonial untuk meraih Piagam Pangkat Komisi Hindia.',
    keywords: 'kuis quiz evaluasi soal ujian sidang komisi hindia piagam skor',
    target: {
      sectionId: 'permainan-sejarah',
      tabId: 'quiz',
    },
  });

  // 8. Kutipan & Daftar Pustaka
  featuredHistoricalQuotes.forEach((fq) => {
    entries.push({
      id: `search-fquote-${fq.id}`,
      title: `Kutipan Monumental: ${fq.author}`,
      category: 'Kutipan Sumber Primer',
      sectionLabel: 'Bab VIII · Kutipan & Pustaka',
      badge: fq.badge,
      snippet: `“${fq.quote}” (${fq.work})`,
      keywords: `kutipan quote ${fq.author} ${fq.work} ${fq.quote} ${fq.historicalContext}`,
      target: {
        sectionId: 'pustaka',
        elementId: fq.id,
      },
    });
  });

  bibliographyData.forEach((bib) => {
    entries.push({
      id: `search-bib-${bib.id}`,
      title: `${bib.authors} (${bib.year}) — ${bib.title}`,
      category: `Pustaka (${bib.type})`,
      sectionLabel: 'Bab VIII · Katalog Daftar Pustaka',
      badge: bib.year,
      snippet: `${bib.publisher}${bib.doiUrl ? ` · ${bib.doiUrl}` : ''}`,
      keywords: `pustaka referensi sitasi APA ${bib.authors} ${bib.year} ${bib.title} ${bib.publisher} ${bib.type}`,
      target: {
        sectionId: 'pustaka',
        subTabId: bib.type,
        elementId: `biblio-item-${bib.id}`,
      },
    });
  });

  return entries;
}

export const MONOGRAPH_SEARCH_INDEX: MonographSearchEntry[] = buildSearchCatalog();

export function searchMonographCatalog(rawQuery: string, limit = 18): MonographSearchEntry[] {
  const query = rawQuery.trim().toLowerCase();
  if (!query) {
    return MONOGRAPH_SEARCH_INDEX.slice(0, 10);
  }

  const tokens = query.split(/\s+/).filter(Boolean);

  const scored: { entry: MonographSearchEntry; score: number }[] = [];

  for (const entry of MONOGRAPH_SEARCH_INDEX) {
    const titleLower = entry.title.toLowerCase();
    const catLower = entry.category.toLowerCase();
    const hayLower = `${titleLower} ${catLower} ${entry.sectionLabel.toLowerCase()} ${entry.keywords.toLowerCase()}`;

    const allMatched = tokens.every((t) => hayLower.includes(t));
    if (!allMatched) continue;

    let score = 0;
    if (titleLower.includes(query)) score += 50;
    for (const token of tokens) {
      if (titleLower.includes(token)) score += 20;
      if (catLower.includes(token)) score += 10;
      if (entry.badge?.toLowerCase().includes(token)) score += 12;
      score += 5;
    }

    scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.entry);
}
