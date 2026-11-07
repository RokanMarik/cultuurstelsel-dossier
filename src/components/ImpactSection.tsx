import React, { useState, useEffect } from 'react';
import {
  impactData,
  peasantResistanceData,
  parliamentaryPoliticsData,
  historiographicalSynthesisData,
  vanReesReportData,
  prianganMonetizationData
} from '../data/historyContent';
import type { HistoricalImage } from '../data/historyContent';
import {
  MONOGRAPH_NAVIGATE_EVENT,
  type MonographNavigationTarget,
} from '../utils/monographNavigator';
import {
  AlertOctagon,
  TrendingUp,
  Skull,
  BookOpen,
  CheckCircle,
  XCircle,
  ZoomIn,
  User,
  Flame,
  Landmark,
  Scale,
  FileText,
  Search,
  ArrowUpRight
} from 'lucide-react';
import './ImpactSection.css';

interface ImpactSectionProps {
  onOpenImage?: (image: HistoricalImage, title: string) => void;
}

const getMonetizationBadgeClass = (level: string) => {
  switch (level) {
    case 'Sangat Rendah':
    case 'Rendah':
      return 'badge-crimson';
    case 'Terbatas':
      return 'badge-gold';
    default:
      return 'badge-verdigris';
  }
};

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onOpenImage }) => {
  const [activeMainTab, setActiveMainTab] = useState<'famines-impact' | 'resistance' | 'politics' | 'historiography' | 'van-rees'>('famines-impact');
  const [activeImpactPolarity, setActiveImpactPolarity] = useState<'negative' | 'positive'>('negative');

  useEffect(() => {
    const handleNavigate = (e: Event) => {
      const detail = (e as CustomEvent<MonographNavigationTarget>).detail;
      if (detail?.sectionId !== 'dampak') return;
      if (
        detail.tabId === 'famines-impact' ||
        detail.tabId === 'resistance' ||
        detail.tabId === 'politics' ||
        detail.tabId === 'historiography' ||
        detail.tabId === 'van-rees'
      ) {
        setActiveMainTab(detail.tabId);
      }
      if (detail.subTabId === 'negative' || detail.subTabId === 'positive') {
        setActiveImpactPolarity(detail.subTabId);
      }
    };
    window.addEventListener(MONOGRAPH_NAVIGATE_EVENT, handleNavigate);
    return () => window.removeEventListener(MONOGRAPH_NAVIGATE_EVENT, handleNavigate);
  }, []);

  return (
    <section id="dampak" className="section impact-section">
      <div className="container">
        {/* Monograph 2-Column Section Header */}
        <div className="section-header">
          <h2 className="section-title">Dampak Sosio-Ekonomi &amp; Transformasi Zaman</h2>
          <p className="section-subtitle">
            Dari kelaparan petani dan resistensi pedesaan hingga pertarungan di Parlemen Den Haag dan debat sejarawan modern
          </p>
        </div>

        {/* 5 MAIN TABS NAVIGATION */}
        <div className="dossier-tabs-nav-wrapper">
          <div className="dossier-tabs-nav" role="tablist" aria-label="Sub-bagian Dampak">
            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'famines-impact'}
              className={`dossier-tab-btn ${activeMainTab === 'famines-impact' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('famines-impact')}
            >
              <Skull size={16} strokeWidth={1.5} />
              <span>Kelaparan &amp; Dampak Sosio-Ekonomi</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'resistance'}
              className={`dossier-tab-btn ${activeMainTab === 'resistance' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('resistance')}
            >
              <Flame size={16} strokeWidth={1.5} />
              <span>Resistensi &amp; Perlawanan Rakyat</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'politics'}
              className={`dossier-tab-btn ${activeMainTab === 'politics' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('politics')}
            >
              <Landmark size={16} strokeWidth={1.5} />
              <span>Parlemen Belanda (1848–1870)</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'historiography'}
              className={`dossier-tab-btn ${activeMainTab === 'historiography' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('historiography')}
            >
              <Scale size={16} strokeWidth={1.5} />
              <span>Sintesis Tiga Lensa Sejarawan</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'van-rees'}
              className={`dossier-tab-btn ${activeMainTab === 'van-rees' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('van-rees')}
            >
              <Search size={16} strokeWidth={1.5} />
              <span>Laporan Van Rees 1867</span>
            </button>
          </div>
        </div>

        {/* TAB 1: KELAPARAN & DAMPAK SOSIO-EKONOMI */}
        {activeMainTab === 'famines-impact' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="famine-cases-block">
              <div className="impact-sub-opener">
                <h3 className="famine-title">Kasus Bencana Kelaparan Hebat di Pedesaan Jawa</h3>
                <p className="famine-subtitle">
                  Ketika pemaksaan komoditas ekspor mengorbankan ketahanan pangan dan merenggut ratusan ribu jiwa petani
                </p>
              </div>

              <div className="famine-cards-grid">
                {impactData.famineCases.map((famine, index) => (
                  <article key={index} className="parchment-card famine-card" id={`famine-case-${index}`}>
                    <div className="famine-card-top">
                      <h4 className="famine-region-name">{famine.region}</h4>
                      <span className="badge badge-crimson tabular-nums">{famine.years}</span>
                    </div>

                    <div className="famine-meta-item">
                      <span className="famine-meta-label">Pemicu utama</span>
                      <p className="famine-meta-val">{famine.cause}</p>
                    </div>

                    <div className="famine-meta-item victim-row">
                      <span className="famine-meta-label">Korban &amp; dampak demografi</span>
                      <strong className="famine-victim-text tabular-nums">{famine.victimCount}</strong>
                    </div>

                    <p className="famine-detail-text">{famine.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="impact-polarity-section">
              <div className="impact-sub-opener">
                <h3 className="famine-title">Dampak Struktural terhadap Masyarakat Pedesaan Jawa</h3>
                <p className="famine-subtitle">
                  Pilih perspektif untuk menimbang distorsi destruktif dan modernisasi parsial secara berdampingan
                </p>
              </div>

              <div className="impact-tab-switcher" role="tablist" aria-label="Perspektif dampak">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeImpactPolarity === 'negative'}
                  id="tab-impact-negative"
                  className={`impact-switch-btn ${activeImpactPolarity === 'negative' ? 'active-negative' : ''}`}
                  onClick={() => setActiveImpactPolarity('negative')}
                >
                  <XCircle size={16} strokeWidth={1.5} />
                  <span>Dampak Negatif &amp; Penderitaan Petani</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeImpactPolarity === 'positive'}
                  id="tab-impact-positive"
                  className={`impact-switch-btn ${activeImpactPolarity === 'positive' ? 'active-positive' : ''}`}
                  onClick={() => setActiveImpactPolarity('positive')}
                >
                  <CheckCircle size={16} strokeWidth={1.5} />
                  <span>Dampak Ikutan &amp; Modernisasi Parsial</span>
                </button>
              </div>

              <div className="impact-cards-grid">
                {(activeImpactPolarity === 'negative' ? impactData.negativeImpacts : impactData.positiveImpacts).map(
                  (item, idx) => (
                    <article key={idx} className={`parchment-card impact-card ${activeImpactPolarity}`}>
                      <h4 className="impact-item-title">
                        {activeImpactPolarity === 'negative' ? (
                          <AlertOctagon size={17} strokeWidth={1.5} className="impact-inline-icon red" />
                        ) : (
                          <TrendingUp size={17} strokeWidth={1.5} className="impact-inline-icon green" />
                        )}
                        <span>{item.title}</span>
                      </h4>
                      <p className="impact-item-desc">{item.description}</p>
                    </article>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: RESISTENSI & PERLAWANAN RAKYAT PRIBUMI */}
        {activeMainTab === 'resistance' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="impact-tab-lead">
              <div className="impact-lead-title-row">
                <h3 className="impact-lead-title">
                  Ragam Perlawanan Rakyat Pribumi: Terbuka, Bersenjata, &amp; Sabotase
                </h3>
                <span className="badge badge-crimson">Senjata kaum lemah</span>
              </div>
              <p className="impact-lead-desc">
                Rakyat Jawa tidak pernah pasrah menjadi korban bisu eksploitasi kolonial. Ketika konfrontasi bersenjata dihadapi kekerasan militer, petani melancarkan sabotase, protes terbuka, pelarian massal, hingga pelumpuhan dari dalam (<em>paralysis from within</em>).
              </p>
            </div>

            <div className="resistance-cards-grid">
              {peasantResistanceData.map((res) => (
                <article key={res.id} className="parchment-card resistance-card" id={res.id}>
                  <div className="resistance-card-header">
                    <span className="badge badge-crimson">{res.category}</span>
                    <span className="resistance-loc-tag tabular-nums">{res.locationOrYear}</span>
                  </div>

                  <h4 className="resistance-card-title">{res.title}</h4>
                  <p className="resistance-card-desc">{res.description}</p>

                  <div className="resistance-impact-footer">
                    <span className="res-impact-label">Dampak historis</span>
                    <p className="res-impact-text">{res.historicalImpact}</p>
                  </div>
                </article>
              ))}
            </div>

            <figure className="quote-card breman-resistance-extract">
              <figcaption className="breman-extract-heading">
                <span className="badge badge-gold">Tesis Jan Breman (2014)</span>
                <h4>Sistem Runtuh Bukan Karena Kemurahan Hati Liberal, Melainkan Kemacetan dari Bawah</h4>
              </figcaption>
              <blockquote className="quote-text">
                “Sistem Tanam Paksa pada akhirnya runtuh bukan semata karena kemenangan ideologi kelompok liberal di Den Haag, melainkan karena kebun-kebun kopi telah ditelantarkan, mesin administrasi kolonial macet di tingkat tapak, dan petani Jawa berhasil melumpuhkan efisiensi produksi dari dalam melalui ketidakpatuhan abadi.”
              </blockquote>
            </figure>
          </div>
        )}

        {/* TAB 3: PERTARUNGAN POLITIK PARLEMEN BELANDA (1848–1870) */}
        {activeMainTab === 'politics' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="impact-tab-lead">
              <div className="impact-lead-title-row">
                <h3 className="impact-lead-title">
                  Pertarungan Parlemen Belanda: Dari Kerahasiaan Menuju UU Agraria 1870
                </h3>
                <span className="badge badge-gold">Tweede Kamer &amp; UU Agraria 1870</span>
              </div>
              <p className="impact-lead-desc">
                Revisi Konstitusi 1848 oleh Prof. J.R. Thorbecke mengakhiri hak prerogatif mutlak raja atas tanah jajahan. Parlemen Belanda mulai menggunakan hak anggaran (<em>power of the purse</em>) untuk membongkar skandal kontrak gula hingga melahirkan UU Agraria 1870.
              </p>
            </div>

            <div className="parliamentary-timeline-grid">
              {parliamentaryPoliticsData.map((pol) => (
                <article key={pol.id} className="parchment-card pol-card" id={pol.id}>
                  <div className="pol-card-header">
                    <span className="pol-period tabular-nums">{pol.periodOrEvent}</span>
                    <span className="pol-factions-tag">{pol.factions}</span>
                  </div>

                  <h4 className="pol-title">{pol.title}</h4>

                  <div className="pol-debate-box">
                    <span className="pol-box-label">Pokok perdebatan &amp; regulasi</span>
                    <p className="pol-box-text">{pol.coreDebate}</p>
                  </div>

                  <div className="pol-outcome-footer">
                    <span className="pol-box-label outcome">Dampak &amp; hasil politik</span>
                    <p className="pol-box-text">{pol.outcomeAndImpact}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="parchment-card agrarische-wet-card">
              <div className="agrarische-header">
                <FileText size={19} strokeWidth={1.5} className="agrarische-icon" />
                <h4>Dua Pilar Hukum Undang-Undang Agraria 1870 (Agrarische Wet)</h4>
              </div>
              <div className="agrarische-ledger">
                <div className="agrarische-pilar">
                  <h5>1. Asas Domeinverklaring (pernyataan domain negara)</h5>
                  <p>
                    Semua tanah yang tidak dapat dibuktikan kepemilikannya menurut hukum Barat dinyatakan sebagai <strong>milik negara</strong>. Atas dasar ini, pemerintah menyewakan lahan hutan dan tanah tidur kepada pengusaha perkebunan swasta melalui hak <em>erfpacht</em> hingga <strong>75 tahun</strong>.
                  </p>
                </div>
                <div className="agrarische-pilar">
                  <h5>2. Perlindungan tanah adat &amp; kerja bebas</h5>
                  <p>
                    Melarang penjualan tanah milik petani pribumi kepada pihak asing untuk mencegah hilangnya kepemilikan tanah rakyat. Namun, penutupan akses hutan memaksa petani miskin menjadi <strong>buruh upahan murah (proletarisasi)</strong> bagi korporasi perkebunan swasta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SINTESIS 3 LENSA SEJARAWAN (HISTORIOGRAFI) */}
        {activeMainTab === 'historiography' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="impact-tab-lead">
              <div className="impact-lead-title-row">
                <h3 className="impact-lead-title">Sintesis Tiga Lensa Sejarawan: Menimbang Cultuurstelsel</h3>
                <span className="badge badge-gold">Metodologi &amp; debat akademis</span>
              </div>
              <p className="impact-lead-desc">
                Sejarah Tanam Paksa tidak monolitik. Perbedaan kesimpulan antara <strong>Clifford Geertz</strong>, <strong>Cornelis Fasseur</strong>, dan <strong>Jan Breman</strong> berakar pada perbedaan metodologi: ekologi budaya, arsip makro birokrasi, dan penelitian mikro pedesaan.
              </p>
            </div>

            <div className="comparison-table-wrapper hist-table-wrap">
              <table className="hist-data-table adaptive-table">
                <thead>
                  <tr>
                    <th>Dimensi Analisis</th>
                    <th>Clifford Geertz (1963)</th>
                    <th>Cornelis Fasseur (1992)</th>
                    <th>Jan Breman (2014)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Dimensi Analisis"><strong>Mazhab &amp; Landasan</strong></td>
                    <td data-label="Clifford Geertz (1963)">{historiographicalSynthesisData[0].schoolName}</td>
                    <td data-label="Cornelis Fasseur (1992)">{historiographicalSynthesisData[1].schoolName}</td>
                    <td data-label="Jan Breman (2014)">{historiographicalSynthesisData[2].schoolName}</td>
                  </tr>
                  <tr>
                    <td data-label="Dimensi Analisis"><strong>Fokus &amp; Sudut Pandang</strong></td>
                    <td data-label="Clifford Geertz (1963)">{historiographicalSynthesisData[0].primaryPerspective}</td>
                    <td data-label="Cornelis Fasseur (1992)">{historiographicalSynthesisData[1].primaryPerspective}</td>
                    <td data-label="Jan Breman (2014)">{historiographicalSynthesisData[2].primaryPerspective}</td>
                  </tr>
                  <tr>
                    <td data-label="Dimensi Analisis"><strong>Sumber Data Primer</strong></td>
                    <td data-label="Clifford Geertz (1963)">{historiographicalSynthesisData[0].primarySources}</td>
                    <td data-label="Cornelis Fasseur (1992)">{historiographicalSynthesisData[1].primarySources}</td>
                    <td data-label="Jan Breman (2014)">{historiographicalSynthesisData[2].primarySources}</td>
                  </tr>
                  <tr>
                    <td data-label="Dimensi Analisis"><strong>Penilaian Dampak Ekonomi</strong></td>
                    <td data-label="Clifford Geertz (1963)">{historiographicalSynthesisData[0].economicAssessment}</td>
                    <td data-label="Cornelis Fasseur (1992)">{historiographicalSynthesisData[1].economicAssessment}</td>
                    <td data-label="Jan Breman (2014)">{historiographicalSynthesisData[2].economicAssessment}</td>
                  </tr>
                  <tr>
                    <td data-label="Dimensi Analisis"><strong>Penjelasan Sebab Keruntuhan</strong></td>
                    <td data-label="Clifford Geertz (1963)">{historiographicalSynthesisData[0].collapseExplanation}</td>
                    <td data-label="Cornelis Fasseur (1992)">{historiographicalSynthesisData[1].collapseExplanation}</td>
                    <td data-label="Jan Breman (2014)">{historiographicalSynthesisData[2].collapseExplanation}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="hist-cards-grid">
              {historiographicalSynthesisData.map((hist, idx) => (
                <article key={idx} className="parchment-card hist-lens-card" id={`hist-lens-card-${idx}`}>
                  <div className="hist-lens-top">
                    <h4 className="hist-scholar-name">{hist.historian}</h4>
                    <span className="badge badge-gold">{hist.schoolName}</span>
                  </div>

                  <div className="hist-framework-row">
                    <span className="hist-box-label">Kerangka teori inti</span>
                    <strong className="hist-framework-text">{hist.framework}</strong>
                  </div>

                  <div className="hist-work-meta">
                    <BookOpen size={15} strokeWidth={1.5} className="hist-book-icon" />
                    <span>Karya kunci: <em>{hist.keyWork}</em></span>
                  </div>

                  <div className="hist-points-list">
                    <div className="hist-point">
                      <span className="point-sublabel">Analisis dampak</span>
                      <p>{hist.economicAssessment}</p>
                    </div>
                    <div className="hist-point">
                      <span className="point-sublabel">Sebab berakhirnya sistem</span>
                      <p>{hist.collapseExplanation}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: LAPORAN VAN REES 1867 & REFORMASI PRIANGAN */}
        {activeMainTab === 'van-rees' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="impact-tab-lead">
              <div className="impact-lead-title-row">
                <h3 className="impact-lead-title">
                  Laporan Rahasia Ono van Rees (Oktober 1867): Membongkar Kebobrokan Preangerstelsel
                </h3>
                <span className="badge badge-gold">Dokumen investigasi kolonial</span>
              </div>
              <p className="impact-lead-desc">
                Setelah penyelidikan langsung selama enam bulan di dataran tinggi Priangan (1866–1867), Komisaris Pemerintah Ono van Rees menyusun laporan yang membongkar kebobrokan Sistem Priangan dan menjadi dasar pembubarannya. Bagian kedua laporan ini <strong>sengaja dirahasiakan</strong> dari Parlemen Belanda.
              </p>
            </div>

            <h4 className="subsection-heading">Empat Temuan &amp; Rekomendasi Utama Laporan Van Rees</h4>
            <div className="staatsblad-cards-grid">
              {vanReesReportData.map((section) => (
                <article key={section.id} className="staatsblad-card parchment-card" id={section.id}>
                  <div className="staatsblad-card-header">
                    <span className="rule-number-badge">Temuan {String(section.sectionNumber).padStart(2, '0')}</span>
                    <span className={`badge ${section.sectionNumber === 4 ? 'badge-amber' : 'badge-red'}`}>
                      {section.badge}
                    </span>
                  </div>
                  <h4 className="staatsblad-rule-title">{section.title}</h4>
                  <div className="staatsblad-reality-block">
                    <ul className="staatsblad-reality-list">
                      {section.findings.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="source-citation-box">
                    <span className="source-label">Signifikansi:</span> {section.significance}
                  </div>
                </article>
              ))}
            </div>

            {/* Monetization Phases — Open Section (Zero Nested Cards, WCAG-Safe Badges) */}
            <div className="van-rees-monetization-open" id="van-rees-monetization-section">
              <div className="van-rees-monetization-header">
                <ArrowUpRight size={19} strokeWidth={1.5} className="van-rees-gold-icon" />
                <h4>Empat Fase Monetisasi Priangan: Dari Garam sebagai Alat Tukar hingga Ekonomi Uang</h4>
              </div>
              <div className="van-rees-phases-grid">
                {prianganMonetizationData.map((phase) => (
                  <article key={phase.id} className="parchment-card van-rees-phase-item" id={phase.id}>
                    <div className="van-rees-phase-top">
                      <strong className="van-rees-phase-title">{phase.title}</strong>
                      <span className={`badge ${getMonetizationBadgeClass(phase.monetizationLevel)}`}>
                        {phase.monetizationLevel}
                      </span>
                    </div>
                    <span className="van-rees-phase-label tabular-nums">
                      {phase.phase} · {phase.periodLabel}
                    </span>
                    <ul className="van-rees-phase-list">
                      {phase.characteristics.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                    <div className="van-rees-phase-fact">{phase.keyFact}</div>
                  </article>
                ))}
              </div>
            </div>

            <div className="van-rees-aftermath-open">
              <h4 className="van-rees-aftermath-top">
                <CheckCircle size={17} strokeWidth={1.5} className="van-rees-green-icon" />
                <span>Hasil Akhir: Ordonansi Staatsblad 1870</span>
              </h4>
              <p>
                Rekomendasi Van Rees menjadi cetak biru bagi <strong>Ordonansi Staatsblad 1870</strong>, yang secara resmi <strong>menghapuskan Sistem Priangan dan tradisi ngawula per 1 Januari 1871</strong>. Meskipun ditentang Gubernur Jenderal Mijer dan sebagian laporan dirahasiakan, dokumen ini membuka babak baru: masuknya perkebunan swasta (teh K.F. Holle), terbentuknya kelas buruh upahan, dan monetisasi pedesaan Priangan.
              </p>
            </div>
          </div>
        )}

        {/* PERSISTENT SECTION: GALERI TOKOH PENGKRITIK SEJARAH */}
        <div className="critics-block">
          <div className="impact-sub-opener">
            <h3 className="critics-section-heading">Tokoh-Tokoh Pengkritik Cultuurstelsel</h3>
            <p className="famine-subtitle">
              Dari mantan pejabat kolonial, sastrawan, anggota parlemen, hingga pakar pertanian yang membongkar eksploitasi
            </p>
          </div>

          <div className="critics-grid">
            {impactData.historicalCritics.map((critic) => (
              <article key={critic.id} className="parchment-card critic-card" id={critic.id}>
                <div className="critic-profile-header">
                  {critic.image ? (
                    <div
                      className="critic-avatar-box"
                      onClick={() => onOpenImage?.(critic.image!, critic.name)}
                      role="button"
                      tabIndex={0}
                      title="Klik untuk memperbesar arsip potret"
                      aria-label={`Perbesar potret ${critic.name}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          onOpenImage?.(critic.image!, critic.name);
                        }
                      }}
                    >
                      <img
                        src={critic.image.src}
                        alt={critic.image.alt}
                        className="critic-avatar-img"
                        width={72}
                        height={72}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          const parent = e.currentTarget.parentElement;
                          if (parent) parent.classList.add('avatar-error');
                        }}
                      />
                      <div className="critic-avatar-zoom-overlay">
                        <ZoomIn size={14} strokeWidth={1.5} />
                      </div>
                    </div>
                  ) : (
                    <div className="critic-avatar-fallback">
                      <User size={22} strokeWidth={1.5} />
                    </div>
                  )}

                  <div className="critic-header-text">
                    <h4 className="critic-name">{critic.name}</h4>
                    <div className="critic-role-title">{critic.role}</div>
                    <div className="critic-card-meta">
                      <span className="badge badge-gold">{critic.category}</span>
                      <span className="critic-period-text tabular-nums">{critic.period}</span>
                    </div>
                  </div>
                </div>

                <div className="critic-work-row">
                  <span className="critic-work-label">Karya &amp; dokumen</span>
                  <p className="critic-work-val">{critic.workOrCitation}</p>
                </div>

                <p className="critic-contribution-text">{critic.keyContribution}</p>

                <div className="critic-impact-footer">
                  <strong>Pengaruh:</strong> {critic.impactNote}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Reform Context: Multatuli & End of Era — Open Closing Section */}
        <div className="reform-open-section">
          <h3 className="reform-title">
            <BookOpen size={20} strokeWidth={1.5} className="reform-icon" />
            <span>{impactData.reformContext.title}</span>
          </h3>
          <p className="reform-narrative">{impactData.reformContext.narrative}</p>
        </div>
      </div>
    </section>
  );
};
