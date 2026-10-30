import React, { useState } from 'react';
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

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onOpenImage }) => {
  const [activeMainTab, setActiveMainTab] = useState<'famines-impact' | 'resistance' | 'politics' | 'historiography' | 'van-rees'>('famines-impact');
  const [activeImpactPolarity, setActiveImpactPolarity] = useState<'negative' | 'positive'>('negative');

  return (
    <section id="dampak" className="section impact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Bagian V: Dampak, Perlawanan, Politik, & Historiografi</span>
          <h2 className="section-title">Dampak Sosio-Ekonomi & Transformasi Zaman</h2>
          <p className="section-subtitle">
            Dari jerit kelaparan petani dan resistensi tapak pedesaan, hingga pertarungan sengit di Parlemen Den Haag dan debat sejarawan modern
          </p>
          <div className="ornament-divider">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
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
              <Skull size={18} />
              <span>Kelaparan & Dampak Sosio-Ekonomi</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'resistance'}
              className={`dossier-tab-btn ${activeMainTab === 'resistance' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('resistance')}
            >
              <Flame size={18} />
              <span>Resistensi & Perlawanan Rakyat</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'politics'}
              className={`dossier-tab-btn ${activeMainTab === 'politics' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('politics')}
            >
              <Landmark size={18} />
              <span>Pertarungan Parlemen Belanda (1848–1870)</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'historiography'}
              className={`dossier-tab-btn ${activeMainTab === 'historiography' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('historiography')}
            >
              <Scale size={18} />
              <span>Sintesis 3 Lensa Sejarawan (Historiografi)</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeMainTab === 'van-rees'}
              className={`dossier-tab-btn ${activeMainTab === 'van-rees' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('van-rees')}
            >
              <Search size={18} />
              <span>Laporan Van Rees 1867 & Reformasi Priangan</span>
            </button>
          </div>
        </div>

        {/* TAB 1: KELAPARAN & DAMPAK SOSIO-EKONOMI */}
        {activeMainTab === 'famines-impact' && (
          <div className="dossier-tab-content tab-fade-in">
            {/* Famine Cases Spotlight */}
            <div className="famine-cases-block">
              <div className="famine-header">
                <div className="famine-badge">
                  <Skull size={16} />
                  <span>Tragedi Kemanusiaan Nyata</span>
                </div>
                <h3 className="famine-title">Kasus Bencana Kelaparan Hebat di Pedesaan Jawa</h3>
                <p className="famine-subtitle">
                  Ketika pemaksaan komoditas ekspor mengorbankan ketahanan pangan dan merenggut ratusan ribu jiwa petani
                </p>
              </div>

              <div className="famine-cards-grid">
                {impactData.famineCases.map((famine, index) => (
                  <div key={index} className="parchment-card famine-card" id={`famine-case-${index}`}>
                    <div className="famine-card-top">
                      <h4 className="famine-region-name">{famine.region}</h4>
                      <span className="badge badge-crimson">{famine.years}</span>
                    </div>

                    <div className="famine-meta-item">
                      <span className="famine-meta-label">Pemicu Utama:</span>
                      <p className="famine-meta-val">{famine.cause}</p>
                    </div>

                    <div className="famine-meta-item victim-item">
                      <span className="famine-meta-label">Dampak Korban & Demografi:</span>
                      <strong className="famine-victim-text">{famine.victimCount}</strong>
                    </div>

                    <p className="famine-detail-text">{famine.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Switch: Polarity Impacts (Negative vs Positive) */}
            <div className="impact-polarity-section">
              <div className="sub-module-header">
                <span className="section-tag">Evaluasi Komparatif</span>
                <h3 className="sub-module-title">Dampak Struktural terhadap Masyarakat Pedesaan Jawa</h3>
                <p className="sub-module-subtitle">Pilih perspektif untuk melihat distorsi destruktif dan modernisasi parsial</p>
              </div>

              <div className="impact-tab-switcher">
                <button
                  type="button"
                  id="tab-impact-negative"
                  className={`impact-switch-btn ${activeImpactPolarity === 'negative' ? 'active-negative' : ''}`}
                  onClick={() => setActiveImpactPolarity('negative')}
                >
                  <XCircle size={18} />
                  <span>Dampak Negatif & Penderitaan Petani</span>
                </button>
                <button
                  type="button"
                  id="tab-impact-positive"
                  className={`impact-switch-btn ${activeImpactPolarity === 'positive' ? 'active-positive' : ''}`}
                  onClick={() => setActiveImpactPolarity('positive')}
                >
                  <CheckCircle size={18} />
                  <span>Dampak Ikutan & Modernisasi Parsial</span>
                </button>
              </div>

              <div className="impact-cards-grid">
                {activeImpactPolarity === 'negative'
                  ? impactData.negativeImpacts.map((item, idx) => (
                      <div key={idx} className="parchment-card impact-card negative">
                        <div className="impact-card-indicator red">
                          <AlertOctagon size={20} />
                        </div>
                        <h4 className="impact-item-title">{item.title}</h4>
                        <p className="impact-item-desc">{item.description}</p>
                      </div>
                    ))
                  : impactData.positiveImpacts.map((item, idx) => (
                      <div key={idx} className="parchment-card impact-card positive">
                        <div className="impact-card-indicator green">
                          <TrendingUp size={20} />
                        </div>
                        <h4 className="impact-item-title">{item.title}</h4>
                        <p className="impact-item-desc">{item.description}</p>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: RESISTENSI & PERLAWANAN RAKYAT PRIBUMI */}
        {activeMainTab === 'resistance' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="resistance-hero-banner parchment-card">
              <div className="resistance-hero-icon">
                <Flame size={28} />
              </div>
              <div>
                <span className="badge badge-crimson">Resistensi & 'Senjata Kaum Lemah'</span>
                <h3 className="resistance-hero-title">Ragam Perlawanan Rakyat Pribumi: Terbuka, Bersenjata, & Sabotase</h3>
                <p className="resistance-hero-lead">
                  Rakyat Jawa tidak pernah pasrah menjadi korban bisu eksploitasi kolonial. Ketika jalur konfrontasi bersenjata dihadapi kekerasan militer Belanda, petani melancarkan sabotase fisik, demonstrasi berani, pelarian massal, hingga pelumpuhan dari dalam (<em>paralysis from within</em>).
                </p>
              </div>
            </div>

            <div className="resistance-cards-grid">
              {peasantResistanceData.map((res) => (
                <div key={res.id} className="parchment-card resistance-card" id={res.id}>
                  <div className="resistance-card-header">
                    <span className="badge badge-crimson">{res.category}</span>
                    <span className="resistance-loc-tag">{res.locationOrYear}</span>
                  </div>

                  <h4 className="resistance-card-title">{res.title}</h4>
                  <p className="resistance-card-desc">{res.description}</p>

                  <div className="resistance-impact-box">
                    <span className="res-impact-label">Dampak Historis:</span>
                    <p className="res-impact-text">{res.historicalImpact}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Breman Synthesis on Resistance */}
            <div className="parchment-card breman-resistance-quote-card">
              <div className="breman-quote-inner">
                <span className="badge badge-gold">Tesis Jan Breman (2014)</span>
                <h4>Sistem Runtuh Bukan Karena Kemurahan Hati Liberal, Melainkan Kemacetan Dari Bawah</h4>
                <p>
                  "Sistem Tanam Paksa pada akhirnya runtuh bukan semata karena kemenangan ideologi kelompok liberal di Den Haag, melainkan karena kebun-kebun kopi telah ditelantarkan, mesin administrasi kolonial macet di tingkat tapak, dan petani Jawa berhasil melumpuhkan efisiensi produksi dari dalam melalui ketidakpatuhan abadi."
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PERTARUNGAN POLITIK PARLEMEN BELANDA (1848–1870) */}
        {activeMainTab === 'politics' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="politics-hero-banner parchment-card">
              <div className="politics-hero-header">
                <span className="badge badge-gold">Dinamika Tweede Kamer & UU Agraria 1870</span>
                <h3 className="politics-hero-title">Pertarungan Politik Parlemen Belanda: Dari Kerahasiaan Menuju UU Agraria 1870</h3>
                <p className="politics-hero-desc">
                  Revisi Konstitusi 1848 oleh Prof. J.R. Thorbecke menghancurkan hak prerogatif mutlak raja atas tanah jajahan. Parlemen Belanda mulai menggunakan hak anggaran (power of the purse) untuk membongkar skandal korupsi gula hingga melahirkan UU Agraria 1870.
                </p>
              </div>
            </div>

            <div className="parliamentary-timeline-grid">
              {parliamentaryPoliticsData.map((pol) => (
                <div key={pol.id} className="parchment-card pol-card" id={pol.id}>
                  <div className="pol-card-header">
                    <span className="table-year-badge">{pol.periodOrEvent}</span>
                    <span className="pol-factions-tag">{pol.factions}</span>
                  </div>

                  <h4 className="pol-title">{pol.title}</h4>

                  <div className="pol-debate-box">
                    <span className="pol-box-label">Pokok Perdebatan / Regulasi:</span>
                    <p className="pol-box-text">{pol.coreDebate}</p>
                  </div>

                  <div className="pol-outcome-box">
                    <span className="pol-box-label outcome">Dampak & Hasil Politik:</span>
                    <p className="pol-box-text">{pol.outcomeAndImpact}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* UU Agraria 1870 Deep-Dive Box */}
            <div className="parchment-card agrarische-wet-card">
              <div className="agrarische-header">
                <FileText size={22} className="agrarische-icon" />
                <h4>Dua Pilar Hukum Undang-Undang Agraria 1870 (Agrarische Wet)</h4>
              </div>
              <div className="agrarische-grid">
                <div className="agrarische-pilar pilar-1">
                  <h5>1. Asas Domeinverklaring (Pernyataan Domain Negara)</h5>
                  <p>
                    Semua tanah yang tidak dapat dibuktikan kepemilikannya oleh rakyat secara hukum Barat dinyatakan sebagai <strong>milik negara</strong>. Berdasarkan pilar ini, pemerintah menyewakan lahan hutan/tidur kepada pengusaha perkebunan swasta Barat melalui hak guna usaha (<em>erfpacht</em>) hingga <strong>75 tahun</strong>.
                  </p>
                </div>
                <div className="agrarische-pilar pilar-2">
                  <h5>2. Perlindungan Tanah Adat Rakyat & Kerja Bebas</h5>
                  <p>
                    Melarang keras penjualan tanah milik petani pribumi langsung kepada pihak asing demi mencegah kepunahan kepemilikan tanah rakyat. Namun, penutupan akses hutan memaksa kelompok petani miskin menjadi <strong>buruh upahan murah (proletarisasi)</strong> bagi korporasi perkebunan swasta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SINTESIS 3 LENSA SEJARAWAN (HISTORIOGRAFI) */}
        {activeMainTab === 'historiography' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="historiography-hero-banner parchment-card">
              <div className="hist-hero-content">
                <span className="badge badge-gold">Metodologi & Debat Akademis</span>
                <h3 className="hist-hero-title">Sintesis Tiga Lensa Sejarawan: Menimbang Cultuurstelsel</h3>
                <p className="hist-hero-lead">
                  Sejarah Tanam Paksa tidak monolitik. Perbedaan kesimpulan antara <strong>Clifford Geertz</strong>, <strong>Cornelis Fasseur</strong>, dan <strong>Jan Breman</strong> berakar pada perbedaan metodologi: pendekatan ekologi budaya, arsip makro birokrasi, dan penelitian mikro tapak pedesaan.
                </p>
              </div>
            </div>

            {/* Historiographical Comparison Table */}
            <div className="comparison-table-wrapper hist-table-wrap parchment-card">
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
                    <td data-label="Dimensi Analisis"><strong>Mazhab & Landasan</strong></td>
                    <td data-label="Clifford Geertz (1963)">{historiographicalSynthesisData[0].schoolName}</td>
                    <td data-label="Cornelis Fasseur (1992)">{historiographicalSynthesisData[1].schoolName}</td>
                    <td data-label="Jan Breman (2014)">{historiographicalSynthesisData[2].schoolName}</td>
                  </tr>
                  <tr>
                    <td data-label="Dimensi Analisis"><strong>Fokus & Sudut Pandang</strong></td>
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

            {/* 3 Historian Detailed Cards */}
            <div className="hist-cards-grid">
              {historiographicalSynthesisData.map((hist, idx) => (
                <div key={idx} className="parchment-card hist-lens-card">
                  <div className="hist-lens-top">
                    <span className="badge badge-gold">{hist.schoolName}</span>
                    <h4 className="hist-scholar-name">{hist.historian}</h4>
                  </div>

                  <div className="hist-framework-box">
                    <span className="hist-box-label">Kerangka Teori Inti:</span>
                    <strong className="hist-framework-text">{hist.framework}</strong>
                  </div>

                  <div className="hist-work-meta">
                    <BookOpen size={14} className="hist-book-icon" />
                    <span>Karya Kunci: <em>{hist.keyWork}</em></span>
                  </div>

                  <div className="hist-points-list">
                    <div className="hist-point">
                      <span className="point-sublabel">Analisis Dampak:</span>
                      <p>{hist.economicAssessment}</p>
                    </div>
                    <div className="hist-point">
                      <span className="point-sublabel">Sebab Berakhirnya Sistem:</span>
                      <p>{hist.collapseExplanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: LAPORAN VAN REES 1867 & REFORMASI PRIANGAN */}
        {activeMainTab === 'van-rees' && (
          <div className="dossier-tab-content tab-fade-in">
            {/* Hero Card */}
            <div className="parchment-card van-rees-hero-card">
              <span className="badge badge-gold">Dokumen Investigasi Kolonial Terpenting</span>
              <h3 className="van-rees-hero-title">
                Laporan Rahasia Ono van Rees (Oktober 1867): Membongkar Kebobrokan Preangerstelsel
              </h3>
              <p className="van-rees-hero-lead">
                Setelah melakukan penyelidikan langsung selama enam bulan di dataran tinggi Priangan (1866–1867),
                Komisaris Pemerintah Ono van Rees menyusun laporan tebal yang secara menyeluruh membongkar kebobrokan
                Sistem Priangan dan menjadi dasar utama bagi pembubaran sistem tersebut oleh pemerintah kolonial Belanda.
                Bagian kedua laporan ini <strong>sengaja dirahasiakan</strong> dari Parlemen Belanda.
              </p>
            </div>

            {/* 4 Temuan Utama */}
            <h4 className="subsection-heading">Empat Temuan & Rekomendasi Utama Laporan Van Rees</h4>
            <div className="staatsblad-cards-grid">
              {vanReesReportData.map((section) => (
                <div key={section.id} className="staatsblad-card parchment-card">
                  <div className="staatsblad-card-header">
                    <div className="rule-number-badge">Temuan {String(section.sectionNumber).padStart(2, '0')}</div>
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
                </div>
              ))}
            </div>

            {/* Monetisasi Timeline */}
            <div className="parchment-card van-rees-monetization-card">
              <div className="van-rees-monetization-header">
                <ArrowUpRight size={22} className="van-rees-gold-icon" />
                <h4>Empat Fase Monetisasi Priangan: Dari Garam sebagai Alat Tukar hingga Ekonomi Uang Modern</h4>
              </div>
              <div className="van-rees-phases-grid">
                {prianganMonetizationData.map((phase) => {
                  const levelColor = {
                    'Sangat Rendah': '#c0392b',
                    'Rendah': '#d35400',
                    'Terbatas': '#c88a22',
                    'Berkembang Pesat': '#27ae60'
                  }[phase.monetizationLevel];
                  return (
                    <div
                      key={phase.id}
                      className="van-rees-phase-item"
                      style={{
                        borderColor: `${levelColor}40`,
                        backgroundColor: `${levelColor}08`
                      }}
                    >
                      <div className="van-rees-phase-top">
                        <span className="van-rees-phase-label">
                          {phase.phase}: {phase.periodLabel}
                        </span>
                        <span className="van-rees-phase-pill" style={{ backgroundColor: levelColor }}>
                          {phase.monetizationLevel}
                        </span>
                      </div>
                      <strong className="van-rees-phase-title">{phase.title}</strong>
                      <ul className="van-rees-phase-list">
                        {phase.characteristics.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                      <div
                        className="van-rees-phase-fact"
                        style={{ backgroundColor: `${levelColor}16`, color: levelColor }}
                      >
                        {phase.keyFact}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Aftermath summary */}
            <div className="parchment-card van-rees-aftermath-card">
              <div className="van-rees-aftermath-top">
                <CheckCircle size={18} className="van-rees-green-icon" />
                <strong>Hasil Akhir: Ordonansi Staatsblad 1870</strong>
              </div>
              <p>
                Rekomendasi Van Rees menjadi cetak biru bagi pengesahan <strong>Ordonansi Staatsblad 1870</strong>,
                yang secara resmi <strong>menghapuskan Sistem Priangan dan tradisi ngawula per 1 Januari 1871</strong>.
                Meskipun sempat ditentang Gubernur Jenderal Mijer dan sebagian laporan dirahasiakan,
                dokumen ini akhirnya berhasil membuka babak baru: masuknya perkebunan swasta (teh K.F. Holle),
                pembentukan kelas buruh upahan, dan dimulainya monetisasi sejati di pedesaan Priangan.
              </p>
            </div>
          </div>
        )}

        {/* PERSISTENT SECTION: GALERI TOKOH PENGKRITIK SEJARAH */}
        <div className="critics-block">
          <div className="section-header">
            <span className="section-tag">Gelombang Oposisi & Nurani Moral</span>
            <h3 className="critics-section-heading">Tokoh-Tokoh Pengkritik Cultuurstelsel</h3>
            <p className="section-subtitle">
              Dari mantan pejabat kolonial, sastrawan, anggota parlemen, hingga pakar pertanian yang membongkar eksploitasi
            </p>
          </div>

          <div className="critics-grid">
            {impactData.historicalCritics.map((critic) => (
              <div key={critic.id} className="parchment-card critic-card" id={critic.id}>
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
                        onError={(e) => {
                          const parent = e.currentTarget.parentElement;
                          if (parent) parent.classList.add('avatar-error');
                        }}
                      />
                      <div className="critic-avatar-zoom-overlay">
                        <ZoomIn size={13} />
                      </div>
                    </div>
                  ) : (
                    <div className="critic-avatar-fallback">
                      <User size={24} />
                    </div>
                  )}

                  <div className="critic-header-text">
                    <div className="critic-card-meta">
                      <span className="badge badge-gold">{critic.category}</span>
                      <span className="critic-period-text">{critic.period}</span>
                    </div>
                    <h4 className="critic-name">{critic.name}</h4>
                    <div className="critic-role-title">{critic.role}</div>
                  </div>
                </div>

                <div className="critic-work-box">
                  <span className="critic-work-label">Karya / Dokumen:</span>
                  <p className="critic-work-val">{critic.workOrCitation}</p>
                </div>

                <p className="critic-contribution-text">{critic.keyContribution}</p>

                <div className="critic-impact-footer">
                  <strong>Pengaruh:</strong> {critic.impactNote}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reform Context: Multatuli & End of Era */}
        <div className="parchment-card reform-card">
          <div className="reform-card-content">
            <div className="reform-badge-wrap">
              <BookOpen size={20} className="reform-icon" />
              <span className="reform-badge-text">Goncangan Nurani Publik (1860–1870)</span>
            </div>
            <h3 className="reform-title">{impactData.reformContext.title}</h3>
            <p className="reform-narrative">{impactData.reformContext.narrative}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
