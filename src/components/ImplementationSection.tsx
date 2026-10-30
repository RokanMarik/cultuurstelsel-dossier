import React, { useState } from 'react';
import {
  implementationData,
  residencyComparisonData,
  exploitationData,
  bupatiRolesData,
  preangerBlueprintData,
  vocExpansionData,
  prianganMonetizationData
} from '../data/historyContent';
import {
  FileText,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Layers,
  DollarSign,
  Compass,
  Coffee,
  Scale,
  Sparkles,
  TrendingDown,
  TrendingUp,
  MapPin,
  Crown,
  GitBranch,
  ArrowRight
} from 'lucide-react';
import './ImplementationSection.css';

export const ImplementationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'staatsblad' | 'three-residencies' | 'outer-java' | 'bupati'>('three-residencies');

  return (
    <section id="pelaksanaan" className="section implementation-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Bagian IV: Regulasi, Wilayah, & Studi Kasus</span>
          <h2 className="section-title">Pelaksanaan Lapangan & Realitas Penindasan</h2>
          <p className="section-subtitle">
            Dari dalih hukum Staatsblad 1834 hingga kontras ekstrem nasib antar-karesidenan dan pulau luar Jawa
          </p>
          <div className="ornament-divider">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="dossier-tabs-nav-wrapper">
          <div className="dossier-tabs-nav" role="tablist" aria-label="Sub-bagian Pelaksanaan">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'three-residencies'}
              className={`dossier-tab-btn ${activeTab === 'three-residencies' ? 'active' : ''}`}
              onClick={() => setActiveTab('three-residencies')}
            >
              <Scale size={18} />
              <span>Tiga Wajah Cultuurstelsel: Priangan vs Cirebon vs Pasuruan</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'staatsblad'}
              className={`dossier-tab-btn ${activeTab === 'staatsblad' ? 'active' : ''}`}
              onClick={() => setActiveTab('staatsblad')}
            >
              <FileText size={18} />
              <span>7 Aturan Staatsblad 1834 vs Realitas</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'outer-java'}
              className={`dossier-tab-btn ${activeTab === 'outer-java' ? 'active' : ''}`}
              onClick={() => setActiveTab('outer-java')}
            >
              <Compass size={18} />
              <span>Dinamika Wilayah Luar Pulau Jawa (Outer Islands)</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'bupati'}
              className={`dossier-tab-btn ${activeTab === 'bupati' ? 'active' : ''}`}
              onClick={() => setActiveTab('bupati')}
            >
              <Crown size={18} />
              <span>Bupati & Sistem Indirect Rule</span>
            </button>
          </div>
        </div>

        {/* TAB 1: TIGA WAJAH CULTUURSTELSEL */}
        {activeTab === 'three-residencies' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="residency-lead-card parchment-card">
              <div className="residency-lead-header">
                <span className="badge badge-gold">Studi Kasus Forensik Karesidenan</span>
                <h3 className="residency-lead-title">Tiga Wajah Tanam Paksa: Mengapa Nasib Petani Sangat Berbeda?</h3>
                <p className="residency-lead-desc">
                  Priangan, Cirebon, dan Pasuruan menampilkan tiga lintasan sejarah yang bertolak belakang. Memahami disparitas ketiga karesidenan ini adalah kunci membedah mengapa sejarawan <strong>Cornelis Fasseur</strong> mengklaim adanya kemakmuran semu (karena meneliti Pasuruan), sementara <strong>Jan Breman</strong> membuktikan perbudakan dan kelaparan (karena membongkar arsip Priangan dan Cirebon).
                </p>
              </div>
            </div>

            {/* Comprehensive Comparison Table */}
            <div className="comparison-table-wrapper residency-table-wrap parchment-card">
              <table className="residency-data-table adaptive-table">
                <thead>
                  <tr>
                    <th>Indikator Statistik</th>
                    <th>Priangan (Kopi Pegunungan)</th>
                    <th>Cirebon (Nila & Tebu Sawah)</th>
                    <th>Pasuruan (Tebu & Kopi Subur)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Indikator Statistik"><strong>Keterlibatan Populasi</strong></td>
                    <td data-label="Priangan (Kopi Pegunungan)">{residencyComparisonData[0].populationInvolvement}</td>
                    <td data-label="Cirebon (Nila & Tebu Sawah)">{residencyComparisonData[1].populationInvolvement}</td>
                    <td data-label="Pasuruan (Tebu & Kopi Subur)">{residencyComparisonData[2].populationInvolvement}</td>
                  </tr>
                  <tr>
                    <td data-label="Indikator Statistik"><strong>Penyitaan Sawah Desa</strong></td>
                    <td data-label="Priangan (Kopi Pegunungan)">{residencyComparisonData[0].sawahConfiscated}</td>
                    <td data-label="Cirebon (Nila & Tebu Sawah)">
                      <span className="badge badge-crimson">{residencyComparisonData[1].sawahConfiscated}</span>
                    </td>
                    <td data-label="Pasuruan (Tebu & Kopi Subur)">{residencyComparisonData[2].sawahConfiscated}</td>
                  </tr>
                  <tr>
                    <td data-label="Indikator Statistik"><strong>Sistem Pajak Tanah (Landrent)</strong></td>
                    <td data-label="Priangan (Kopi Pegunungan)">
                      <span className="badge badge-gold">{residencyComparisonData[0].landrentSystem}</span>
                    </td>
                    <td data-label="Cirebon (Nila & Tebu Sawah)">
                      <span className="table-val-accent">{residencyComparisonData[1].landrentSystem}</span>
                    </td>
                    <td data-label="Pasuruan (Tebu & Kopi Subur)">{residencyComparisonData[2].landrentSystem}</td>
                  </tr>
                  <tr>
                    <td data-label="Indikator Statistik"><strong>Upah (Plantloon) per Keluarga</strong></td>
                    <td data-label="Priangan (Kopi Pegunungan)">
                      <strong className="table-val-accent">{residencyComparisonData[0].plantloonPerFamily}</strong>
                    </td>
                    <td data-label="Cirebon (Nila & Tebu Sawah)">{residencyComparisonData[1].plantloonPerFamily}</td>
                    <td data-label="Pasuruan (Tebu & Kopi Subur)">
                      <strong className="table-upah-highlight">{residencyComparisonData[2].plantloonPerFamily}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Indikator Statistik"><strong>Bonus Pejabat (Cultuurprocenten)</strong></td>
                    <td data-label="Priangan (Kopi Pegunungan)">
                      <span className="badge badge-crimson">{residencyComparisonData[0].cultuurprocenten}</span>
                    </td>
                    <td data-label="Cirebon (Nila & Tebu Sawah)">{residencyComparisonData[1].cultuurprocenten}</td>
                    <td data-label="Pasuruan (Tebu & Kopi Subur)">{residencyComparisonData[2].cultuurprocenten}</td>
                  </tr>
                  <tr>
                    <td data-label="Indikator Statistik"><strong>Status Kesejahteraan Riil</strong></td>
                    <td data-label="Priangan (Kopi Pegunungan)">
                      <span className="status-pill status-feodal">Feodalisme & Kemiskinan</span>
                    </td>
                    <td data-label="Cirebon (Nila & Tebu Sawah)">
                      <span className="status-pill status-defisit">Defisit Nombok Pajak</span>
                    </td>
                    <td data-label="Pasuruan (Tebu & Kopi Subur)">
                      <span className="status-pill status-surplus">Surplus Uang (Booming)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 3 Detailed Cards */}
            <div className="residency-cards-grid">
              {residencyComparisonData.map((item, idx) => (
                <div key={idx} className={`parchment-card res-card res-card-${item.residency.toLowerCase()}`}>
                  <div className="res-card-top">
                    <div>
                      <span className="res-island-tag">{item.islandArea}</span>
                      <h4 className="res-name">{item.residency}</h4>
                    </div>
                    <span
                      className={`status-pill ${
                        item.farmerWelfareStatus === 'Surplus Uang'
                          ? 'status-surplus'
                          : item.farmerWelfareStatus === 'Nombok Pajak'
                          ? 'status-defisit'
                          : 'status-feodal'
                      }`}
                    >
                      {item.farmerWelfareStatus === 'Surplus Uang' && <TrendingUp size={12} />}
                      {item.farmerWelfareStatus === 'Nombok Pajak' && <TrendingDown size={12} />}
                      {item.farmerWelfareStatus === 'Feodalisme & Kemiskinan' && <Sparkles size={12} />}
                      {item.farmerWelfareStatus}
                    </span>
                  </div>

                  <div className="res-crops-highlight">
                    <Coffee size={15} />
                    <span>Komoditas: <strong>{item.dominantCrops}</strong></span>
                  </div>

                  <div className="res-mechanism-box">
                    <span className="res-box-label">Mekanisme Penindasan / Sirkulasi:</span>
                    <p className="res-box-desc">{item.keyMechanism}</p>
                  </div>

                  <div className="res-historiography-box">
                    <span className="res-box-label">Relevansi Debat Historiografi:</span>
                    <p className="res-box-desc">{item.historiographicalRelevance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: 7 ATURAN STAATSBLAD 1834 */}
        {activeTab === 'staatsblad' && (
          <div className="dossier-tab-content tab-fade-in">
            {/* Staatsblad 1834 No. 22 Intro */}
            <div className="parchment-card law-intro-card">
              <div className="law-intro-badge">
                <FileText size={18} />
                <span>Dokumen Hukum: Staatsblad 1834 No. 22</span>
              </div>
              <p className="law-intro-text">{implementationData.intro}</p>
            </div>

            {/* Workload Summary Grid */}
            <div className="workload-summary-grid">
              <div className="workload-stat-card parchment-card">
                <div className="workload-icon-wrap red">
                  <Layers size={22} />
                </div>
                <div className="workload-stat-content">
                  <span className="workload-label">Beban Penguasaan Lahan</span>
                  <div className="workload-values">
                    <span className="val-rule">Aturan: <strong>1/5 (20%)</strong></span>
                    <span className="val-divider">vs</span>
                    <span className="val-reality">Realita: <strong>1/3 s.d. 100%</strong></span>
                  </div>
                  <p className="workload-note">Sawah padi terbaik dan beririgasi teknis disita untuk komoditas tebu & nila.</p>
                </div>
              </div>

              <div className="workload-stat-card parchment-card">
                <div className="workload-icon-wrap amber">
                  <Clock size={22} />
                </div>
                <div className="workload-stat-content">
                  <span className="workload-label">Alokasi Waktu Kerja Petani</span>
                  <div className="workload-values">
                    <span className="val-rule">Aturan: <strong>≤ 66 Hari/Thn</strong></span>
                    <span className="val-divider">vs</span>
                    <span className="val-reality">Realita: <strong>100 – 220+ Hari</strong></span>
                  </div>
                  <p className="workload-note">Petani kehabisan waktu untuk menanam padi pangan keluarga sendiri.</p>
                </div>
              </div>

              <div className="workload-stat-card parchment-card">
                <div className="workload-icon-wrap crimson">
                  <DollarSign size={22} />
                </div>
                <div className="workload-stat-content">
                  <span className="workload-label">Beban Pajak Ganda</span>
                  <div className="workload-values">
                    <span className="val-rule">Aturan: <strong>Bebas Pajak Tanah</strong></span>
                    <span className="val-divider">vs</span>
                    <span className="val-reality">Realita: <strong>Tetap Kena Pajak Penuh</strong></span>
                  </div>
                  <p className="workload-note">Ditambah berbagai pungutan liar dari para bekel dan kepala desa lokal.</p>
                </div>
              </div>
            </div>

            {/* 7 Law Rules Grid */}
            <div className="law-rules-grid">
              {implementationData.laws.map((law, index) => (
                <div key={index} className="parchment-card law-card" id={`law-card-${index}`}>
                  <div className="law-card-top">
                    <div className="law-header-left">
                      <span className="law-number-badge">Aturan 0{law.ruleNumber}</span>
                      <span className="law-article-name">{law.article}</span>
                    </div>
                    <span className={`badge ${law.severity === 'Kritis' ? 'badge-crimson' : 'badge-gold'}`}>
                      <AlertTriangle size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      Penyimpangan {law.severity}
                    </span>
                  </div>

                  <div className="law-duo-box">
                    <div className="law-side official-side">
                      <div className="side-title">
                        <CheckCircle size={14} className="side-icon green" />
                        <span>Ketentuan Staatsblad (Di Atas Kertas):</span>
                      </div>
                      <p>{law.officialRule}</p>
                    </div>

                    <div className="law-side reality-side">
                      <div className="side-title">
                        <XCircle size={14} className="side-icon red" />
                        <span>Realita Penindasan Lapangan:</span>
                      </div>
                      <p>{law.fieldReality}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: DINAMIKA WILAYAH LUAR PULAU JAWA */}
        {activeTab === 'outer-java' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="outer-java-hero-banner parchment-card">
              <div className="outer-java-hero-header">
                <span className="badge badge-gold">Monopoli & Penyerahan Wajib di Luar Jawa</span>
                <h3 className="outer-java-hero-title">
                  Perluasan Sistem Monopoli ke Wilayah Luar Pulau Jawa (<em>Outer Islands</em>)
                </h3>
                <p className="outer-java-hero-desc">
                  Meskipun Tanam Paksa dipusatkan secara masif di 18 Karesidenan Jawa, pemerintah kolonial memberlakukan sistem penyerahan wajib serupa di wilayah strategis luar Jawa dengan memanfaatkan pemimpin tradisional (seperti para penghulu di Minangkabau) dan membebani kerja fisik infrastruktur jalan.
                </p>
              </div>
            </div>

            <div className="outer-java-grid">
              {exploitationData.outerJavaExpansion.regions.map((reg) => (
                <div key={reg.id} className="parchment-card outer-region-card" id={`region-card-${reg.id}`}>
                  <div className="region-card-top">
                    <span className="badge badge-gold">{reg.island}</span>
                    <div className="region-target-badge">{reg.targetMarket}</div>
                  </div>
                  <h4 className="region-name">{reg.region}</h4>
                  <div className="region-commodity-highlight">
                    <Coffee size={16} />
                    <span>Komoditas Utama: <strong>{reg.primaryCommodity}</strong></span>
                  </div>
                  <p className="region-desc">{reg.description}</p>
                </div>
              ))}
            </div>

            {/* Extra Structural Contrast Box */}
            <div className="parchment-card outer-contrast-card">
              <div className="outer-contrast-header">
                <MapPin size={22} className="outer-contrast-icon" />
                <h4>Diferensiasi Ekologis & Karakter Petani: Sawah Jawa vs Ladang Luar Jawa</h4>
              </div>
              <div className="outer-contrast-grid">
                <div className="contrast-box">
                  <span className="contrast-label">Jawa (Involusi Sawah):</span>
                  <p>Tanam Paksa menancap ke ekosistem sawah padi, menyita tanah komunal, membagi-bagi kemiskinan (shared poverty), dan melahirkan ketergantungan buruh upahan murah.</p>
                </div>
                <div className="contrast-box">
                  <span className="contrast-label">Luar Jawa (Ladang Berpindah & Petani Mandiri):</span>
                  <p>Didominasi sistem ladang dan tanaman keras di lereng bukit. Pasca-1870 berkembang menjadi pusat perkebunan swasta modern (seperti tembakau Deli) dan tumbuhnya petani swadaya (smallholders) yang jauh lebih individualis dan berjiwa komersial.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: BUPATI & SISTEM INDIRECT RULE */}
        {activeTab === 'bupati' && (
          <div className="dossier-tab-content tab-fade-in">
            {/* Intro Card */}
            <div className="residency-lead-card parchment-card">
              <div className="residency-lead-header">
                <span className="badge badge-gold">Mesin Eksploitasi Kolonial</span>
                <h3 className="residency-lead-title">Bupati: Kontraktor Kerja Paksa & Ujung Tombak Indirect Rule</h3>
                <p className="residency-lead-desc">
                  Dalam Cultuurstelsel maupun Preangerstelsel, <strong>bupati</strong> menduduki posisi kunci sebagai eksekutor utama di lapangan.
                  Pemerintah kolonial menyalahgunakan struktur feodal dan pengaruh tradisional bupati agar rakyat patuh
                  tanpa perlu birokrasi Eropa di tingkat bawah—sebuah sistem <em>indirect rule</em> yang menghemat biaya
                  kolonial sambil mengeksternalisasi beban eksploitasi kepada elit feodal pribumi.
                </p>
              </div>
            </div>

            {/* 5 Peran Bupati */}
            <h4 className="subsection-heading">Lima Peran Utama Bupati dalam Sistem Kerja Paksa</h4>
            <div className="staatsblad-cards-grid">
              {bupatiRolesData.map((role) => (
                <div key={role.id} className="staatsblad-card parchment-card">
                  <div className="staatsblad-card-header">
                    <div className="rule-number-badge">Peran {String(role.roleNumber).padStart(2, '0')}</div>
                    <span
                      className={`badge ${
                        role.roleNumber <= 2
                          ? 'badge-red'
                          : role.roleNumber === 3
                          ? 'badge-amber'
                          : role.roleNumber === 4
                          ? 'badge-red'
                          : 'badge-amber'
                      }`}
                    >
                      {role.badge}
                    </span>
                  </div>
                  <h4 className="staatsblad-rule-title">{role.title}</h4>
                  <p className="staatsblad-official-text">{role.summary}</p>
                  <div className="staatsblad-reality-block">
                    <ul className="staatsblad-reality-list">
                      {role.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="source-citation-box">
                    <span className="source-label">Sumber:</span> {role.historicalSource}
                  </div>
                </div>
              ))}
            </div>

            {/* Preangerstelsel Blueprint */}
            <div className="parchment-card preanger-blueprint-card">
              <div className="preanger-blueprint-header">
                <GitBranch size={22} className="preanger-blueprint-icon" />
                <h4>Preangerstelsel sebagai Cetak Biru Cultuurstelsel</h4>
              </div>
              <p className="preanger-blueprint-lead">
                Sistem Priangan (Preangerstelsel) yang dikembangkan VOC di dataran tinggi Jawa Barat sejak abad ke-18
                dijadikan <strong>cetak biru</strong> oleh Van den Bosch saat merancang Cultuurstelsel pada 1830.
                Berikut adalah 4 elemen kunci yang diadopsi:
              </p>
              <div className="comparison-table-wrapper">
                <table className="residency-data-table adaptive-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Elemen</th>
                      <th>Asal Preangerstelsel (VOC)</th>
                      <th>Adopsi dalam Cultuurstelsel</th>
                      <th>Signifikansi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {preangerBlueprintData.map((el) => (
                      <tr key={el.id}>
                        <td data-label="No. Elemen"><strong>0{el.elementNumber}</strong></td>
                        <td data-label="Elemen Kebijakan"><strong>{el.title}</strong></td>
                        <td data-label="Asal Preangerstelsel (VOC)">{el.preangerstelselOrigin}</td>
                        <td data-label="Adopsi Cultuurstelsel">{el.cultuurstelselAdoption}</td>
                        <td data-label="Signifikansi Sejarah"><em>{el.significance}</em></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* VOC Expansion Mechanisms */}
            <h4 className="subsection-heading bupati-sub-top">Lima Mekanisme Ekspansi VOC ke Pedalaman Priangan</h4>
            <div className="outer-regions-grid">
              {vocExpansionData.map((mech) => (
                <div key={mech.id} className="region-card parchment-card">
                  <div className="region-card-top">
                    <span className="badge badge-amber">{mech.badge}</span>
                    <div className="region-target-badge">Mekanisme {mech.mechanismNumber}</div>
                  </div>
                  <h4 className="region-name">{mech.title}</h4>
                  <p className="region-desc">{mech.description}</p>
                  <div className="staatsblad-reality-block voc-impact-callout">
                    <div className="voc-impact-row">
                      <ArrowRight size={14} className="voc-impact-arrow" />
                      <span><strong>Dampak Jangka Panjang:</strong> {mech.longTermImpact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Monetisasi Priangan Timeline */}
            <div className="parchment-card monetization-card">
              <h4 className="monetization-card-title">
                <DollarSign size={20} className="preanger-blueprint-icon" />
                <span>Proses Monetisasi di Pedesaan Priangan (Abad ke-18 – Pasca-1870)</span>
              </h4>
              <div className="monetization-phases-grid">
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
                      className="monetization-phase-item"
                      style={{
                        borderColor: `${levelColor}38`,
                        backgroundColor: `${levelColor}08`
                      }}
                    >
                      <div className="monetization-phase-top">
                        <span className="monetization-phase-name">{phase.phase}</span>
                        <span
                          className="monetization-level-pill"
                          style={{ backgroundColor: levelColor }}
                        >
                          {phase.monetizationLevel}
                        </span>
                      </div>
                      <div className="monetization-period-label">{phase.periodLabel}</div>
                      <strong className="monetization-phase-heading">{phase.title}</strong>
                      <ul className="monetization-char-list">
                        {phase.characteristics.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                      <div
                        className="monetization-fact-note"
                        style={{ backgroundColor: `${levelColor}16`, color: levelColor }}
                      >
                        {phase.keyFact}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
