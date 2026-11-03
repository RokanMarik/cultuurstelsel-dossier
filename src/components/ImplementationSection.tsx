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
  Compass,
  Coffee,
  Scale,
  TrendingDown,
  TrendingUp,
  MapPin,
  Crown,
  GitBranch,
  ArrowRight,
  Coins
} from 'lucide-react';
import './ImplementationSection.css';

export const ImplementationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'staatsblad' | 'three-residencies' | 'outer-java' | 'bupati'>('three-residencies');

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

  return (
    <section id="pelaksanaan" className="section implementation-section">
      <div className="container">
        {/* Monograph 2-Column Section Header */}
        <div className="section-header">
          <h2 className="section-title">Pelaksanaan Lapangan &amp; Realitas Penindasan</h2>
          <p className="section-subtitle">
            Dari dalih hukum Staatsblad 1834 hingga kontras ekstrem nasib petani antar-karesidenan Jawa dan wilayah luar Jawa
          </p>
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
              <Scale size={16} strokeWidth={1.5} />
              <span>Tiga Wajah Cultuurstelsel: Priangan vs Cirebon vs Pasuruan</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'staatsblad'}
              className={`dossier-tab-btn ${activeTab === 'staatsblad' ? 'active' : ''}`}
              onClick={() => setActiveTab('staatsblad')}
            >
              <FileText size={16} strokeWidth={1.5} />
              <span>7 Aturan Staatsblad 1834 vs Realitas</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'outer-java'}
              className={`dossier-tab-btn ${activeTab === 'outer-java' ? 'active' : ''}`}
              onClick={() => setActiveTab('outer-java')}
            >
              <Compass size={16} strokeWidth={1.5} />
              <span>Dinamika Wilayah Luar Pulau Jawa</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'bupati'}
              className={`dossier-tab-btn ${activeTab === 'bupati' ? 'active' : ''}`}
              onClick={() => setActiveTab('bupati')}
            >
              <Crown size={16} strokeWidth={1.5} />
              <span>Bupati &amp; Sistem Indirect Rule</span>
            </button>
          </div>
        </div>

        {/* TAB 1: TIGA WAJAH CULTUURSTELSEL */}
        {activeTab === 'three-residencies' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="tab-lead-open">
              <div className="tab-lead-title-row">
                <h3 className="residency-lead-title">
                  Tiga Wajah Tanam Paksa: Mengapa Nasib Petani Sangat Berbeda?
                </h3>
                <span className="badge badge-gold">Studi kasus karesidenan</span>
              </div>
              <p className="residency-lead-desc">
                Priangan, Cirebon, dan Pasuruan menampilkan tiga lintasan sejarah yang bertolak belakang. Memahami disparitas ketiga karesidenan ini menjelaskan mengapa <strong>Cornelis Fasseur</strong> mencatat adanya monetisasi lokal (berbasis data Pasuruan), sementara <strong>Jan Breman</strong> membuktikan perbudakan agraris dan bencana kelaparan (berbasis arsip Priangan dan Cirebon).
              </p>
            </div>

            <div className="comparison-table-wrapper residency-table-wrap">
              <table className="residency-data-table adaptive-table">
                <thead>
                  <tr>
                    <th>Indikator Statistik</th>
                    <th>Priangan (Kopi Pegunungan)</th>
                    <th>Cirebon (Nila &amp; Tebu Sawah)</th>
                    <th>Pasuruan (Tebu &amp; Kopi Subur)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Indikator Statistik"><strong>Keterlibatan Populasi</strong></td>
                    <td data-label="Priangan (Kopi Pegunungan)" className="tabular-nums">{residencyComparisonData[0].populationInvolvement}</td>
                    <td data-label="Cirebon (Nila & Tebu Sawah)" className="tabular-nums">{residencyComparisonData[1].populationInvolvement}</td>
                    <td data-label="Pasuruan (Tebu & Kopi Subur)" className="tabular-nums">{residencyComparisonData[2].populationInvolvement}</td>
                  </tr>
                  <tr>
                    <td data-label="Indikator Statistik"><strong>Penyitaan Sawah Desa</strong></td>
                    <td data-label="Priangan (Kopi Pegunungan)" className="tabular-nums">{residencyComparisonData[0].sawahConfiscated}</td>
                    <td data-label="Cirebon (Nila & Tebu Sawah)">
                      <span className="badge badge-crimson tabular-nums">{residencyComparisonData[1].sawahConfiscated}</span>
                    </td>
                    <td data-label="Pasuruan (Tebu & Kopi Subur)" className="tabular-nums">{residencyComparisonData[2].sawahConfiscated}</td>
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
                      <strong className="table-val-accent tabular-nums">{residencyComparisonData[0].plantloonPerFamily}</strong>
                    </td>
                    <td data-label="Cirebon (Nila & Tebu Sawah)" className="tabular-nums">{residencyComparisonData[1].plantloonPerFamily}</td>
                    <td data-label="Pasuruan (Tebu & Kopi Subur)">
                      <strong className="table-upah-highlight tabular-nums">{residencyComparisonData[2].plantloonPerFamily}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Indikator Statistik"><strong>Bonus Pejabat (Cultuurprocenten)</strong></td>
                    <td data-label="Priangan (Kopi Pegunungan)">
                      <span className="badge badge-crimson tabular-nums">{residencyComparisonData[0].cultuurprocenten}</span>
                    </td>
                    <td data-label="Cirebon (Nila & Tebu Sawah)" className="tabular-nums">{residencyComparisonData[1].cultuurprocenten}</td>
                    <td data-label="Pasuruan (Tebu & Kopi Subur)" className="tabular-nums">{residencyComparisonData[2].cultuurprocenten}</td>
                  </tr>
                  <tr>
                    <td data-label="Indikator Statistik"><strong>Status Kesejahteraan Riil</strong></td>
                    <td data-label="Priangan (Kopi Pegunungan)">
                      <span className="status-tag status-feodal">Feodalisme &amp; Kemiskinan</span>
                    </td>
                    <td data-label="Cirebon (Nila & Tebu Sawah)">
                      <span className="status-tag status-defisit">Defisit Nombok Pajak</span>
                    </td>
                    <td data-label="Pasuruan (Tebu & Kopi Subur)">
                      <span className="status-tag status-surplus">Surplus Uang</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="residency-cards-grid">
              {residencyComparisonData.map((item, idx) => (
                <article key={idx} className="parchment-card res-card">
                  <div className="res-card-top">
                    <div>
                      <h4 className="res-name">{item.residency}</h4>
                      <span className="res-island-tag">{item.islandArea}</span>
                    </div>
                    <span
                      className={`status-tag ${
                        item.farmerWelfareStatus === 'Surplus Uang'
                          ? 'status-surplus'
                          : item.farmerWelfareStatus === 'Nombok Pajak'
                          ? 'status-defisit'
                          : 'status-feodal'
                      }`}
                    >
                      {item.farmerWelfareStatus === 'Surplus Uang' && <TrendingUp size={13} strokeWidth={1.5} />}
                      {item.farmerWelfareStatus === 'Nombok Pajak' && <TrendingDown size={13} strokeWidth={1.5} />}
                      {item.farmerWelfareStatus === 'Feodalisme & Kemiskinan' && <AlertTriangle size={13} strokeWidth={1.5} />}
                      <span>{item.farmerWelfareStatus}</span>
                    </span>
                  </div>

                  <div className="res-crops-row">
                    <Coffee size={15} strokeWidth={1.5} />
                    <span>Komoditas: <strong>{item.dominantCrops}</strong></span>
                  </div>

                  <div className="res-mechanism-box">
                    <span className="res-box-label">Mekanisme penindasan &amp; sirkulasi</span>
                    <p className="res-box-desc">{item.keyMechanism}</p>
                  </div>

                  <div className="res-historiography-box">
                    <span className="res-box-label">Relevansi debat historiografi</span>
                    <p className="res-box-desc">{item.historiographicalRelevance}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: 7 ATURAN STAATSBLAD 1834 */}
        {activeTab === 'staatsblad' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="tab-lead-open">
              <div className="tab-lead-title-row">
                <h3 className="residency-lead-title">Staatsblad 1834 Nomor 22 vs Realitas Eksploitasi</h3>
                <span className="badge badge-crimson">Lembaran Negara 1834</span>
              </div>
              <p className="residency-lead-desc">{implementationData.intro}</p>
            </div>

            {/* Workload Summary Ledger (Zero Icon Tile Circles) */}
            <div className="workload-summary-grid">
              <article className="workload-stat-card parchment-card">
                <h4 className="workload-label">Beban Penguasaan Lahan</h4>
                <div className="workload-values tabular-nums">
                  <span className="val-rule">Aturan: <strong>1/5 (20%)</strong></span>
                  <span className="val-divider">vs</span>
                  <span className="val-reality">Realitas: <strong>1/3–100%</strong></span>
                </div>
                <p className="workload-note">Sawah padi terbaik dan beririgasi teknis disita untuk rotasi tebu dan nila.</p>
              </article>

              <article className="workload-stat-card parchment-card">
                <h4 className="workload-label">Alokasi Waktu Kerja Petani</h4>
                <div className="workload-values tabular-nums">
                  <span className="val-rule">Aturan: <strong>≤ 66 hari/thn</strong></span>
                  <span className="val-divider">vs</span>
                  <span className="val-reality">Realitas: <strong>100–225 hari</strong></span>
                </div>
                <p className="workload-note">Petani kehabisan waktu tanam untuk menggarap padi pangan keluarga sendiri.</p>
              </article>

              <article className="workload-stat-card parchment-card">
                <h4 className="workload-label">Beban Pajak Tanah Ganda</h4>
                <div className="workload-values">
                  <span className="val-rule">Aturan: <strong>Bebas Landrent</strong></span>
                  <span className="val-divider">vs</span>
                  <span className="val-reality">Realitas: <strong>Tetap dipungut penuh</strong></span>
                </div>
                <p className="workload-note">Ditambah pungutan tambahan dari para bekel, mandor, dan kepala desa lokal.</p>
              </article>
            </div>

            {/* 7 Law Rules Grid — Flat 2-Column Ledger inside Each Sheet (Zero Nested Boxes) */}
            <div className="law-rules-grid">
              {implementationData.laws.map((law, index) => (
                <article key={index} className="parchment-card law-card" id={`law-card-${index}`}>
                  <div className="law-card-top">
                    <div className="law-header-left">
                      <h4 className="law-article-name">
                        <span className="law-number-inline tabular-nums">Pasal 0{law.ruleNumber} ·</span> {law.article}
                      </h4>
                    </div>
                    <span className={`badge ${law.severity === 'Kritis' ? 'badge-crimson' : 'badge-gold'}`}>
                      <AlertTriangle size={13} strokeWidth={1.5} />
                      <span>Penyimpangan {law.severity}</span>
                    </span>
                  </div>

                  <div className="law-duo-ledger">
                    <div className="law-col official-col">
                      <div className="side-title">
                        <CheckCircle size={15} strokeWidth={1.5} className="side-icon green" />
                        <span>Ketentuan resmi Staatsblad</span>
                      </div>
                      <p>{law.officialRule}</p>
                    </div>

                    <div className="law-col reality-col">
                      <div className="side-title">
                        <XCircle size={15} strokeWidth={1.5} className="side-icon red" />
                        <span>Realitas pelaksanaan lapangan</span>
                      </div>
                      <p>{law.fieldReality}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: DINAMIKA WILAYAH LUAR PULAU JAWA */}
        {activeTab === 'outer-java' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="tab-lead-open">
              <div className="tab-lead-title-row">
                <h3 className="residency-lead-title">
                  Perluasan Sistem Monopoli ke Wilayah Luar Pulau Jawa
                </h3>
                <span className="badge badge-gold">Penyerahan wajib luar Jawa</span>
              </div>
              <p className="residency-lead-desc">
                Meskipun Tanam Paksa dipusatkan di 18 karesidenan Jawa, pemerintah kolonial memberlakukan sistem penyerahan wajib serupa di wilayah strategis luar Jawa dengan memanfaatkan pemimpin adat (seperti para penghulu di Minangkabau) serta kerja paksa pembukaan jalan angkut.
              </p>
            </div>

            <div className="outer-java-grid">
              {exploitationData.outerJavaExpansion.regions.map((reg) => (
                <article key={reg.id} className="parchment-card outer-region-card" id={`region-card-${reg.id}`}>
                  <div className="region-card-top">
                    <h4 className="region-name">{reg.region}</h4>
                    <span className="badge badge-gold">{reg.island}</span>
                  </div>
                  <div className="region-commodity-row">
                    <Coffee size={15} strokeWidth={1.5} />
                    <span>Komoditas: <strong>{reg.primaryCommodity}</strong> · Pasar: {reg.targetMarket}</span>
                  </div>
                  <p className="region-desc">{reg.description}</p>
                </article>
              ))}
            </div>

            <div className="parchment-card outer-contrast-card">
              <div className="outer-contrast-header">
                <MapPin size={19} strokeWidth={1.5} className="outer-contrast-icon" />
                <h4>Diferensiasi Ekologis: Ekosistem Sawah Jawa vs Ladang Luar Jawa</h4>
              </div>
              <div className="outer-contrast-ledger">
                <div className="contrast-col">
                  <span className="contrast-label">Jawa (Involusi sawah)</span>
                  <p>
                    Tanam Paksa menancap ke ekosistem sawah beririgasi, menyita tanah komunal desa, meratakan kemiskinan (<em>shared poverty</em>), dan melahirkan ketergantungan buruh upahan murah.
                  </p>
                </div>
                <div className="contrast-col">
                  <span className="contrast-label alt">Luar Jawa (Ladang &amp; kebun rakyat)</span>
                  <p>
                    Didominasi ladang dan tanaman keras lereng bukit. Pasca-1870 berkembang menjadi pusat perkebunan swasta (seperti Deli) sekaligus tumbuhnya pekebun rakyat mandiri (<em>smallholders</em>) yang berorientasi pasar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: BUPATI & SISTEM INDIRECT RULE */}
        {activeTab === 'bupati' && (
          <div className="dossier-tab-content tab-fade-in">
            <div className="tab-lead-open">
              <div className="tab-lead-title-row">
                <h3 className="residency-lead-title">
                  Bupati: Kontraktor Kerja Paksa &amp; Ujung Tombak Indirect Rule
                </h3>
                <span className="badge badge-gold">Birokrasi feodal kolonial</span>
              </div>
              <p className="residency-lead-desc">
                Dalam Cultuurstelsel maupun Preangerstelsel, <strong>bupati</strong> menduduki posisi kunci sebagai eksekutor lapangan. Pemerintah kolonial memanfaatkan wibawa feodal bupati agar rakyat patuh tanpa biaya aparatur Eropa di tingkat desa—sebuah mekanisme <em>indirect rule</em> yang diperkuat insentif <em>cultuurprocenten</em>.
              </p>
            </div>

            <h4 className="subsection-heading">Lima Peran Utama Bupati dalam Sistem Kerja Paksa</h4>
            <div className="staatsblad-cards-grid">
              {bupatiRolesData.map((role) => (
                <article key={role.id} className="staatsblad-card parchment-card">
                  <div className="staatsblad-card-header">
                    <span className="rule-number-badge">Peran {String(role.roleNumber).padStart(2, '0')}</span>
                    <span className={`badge ${role.roleNumber <= 2 || role.roleNumber === 4 ? 'badge-red' : 'badge-amber'}`}>
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
                </article>
              ))}
            </div>

            {/* Preangerstelsel Blueprint — Open Section so Table is NOT Nested */}
            <div className="preanger-blueprint-open">
              <div className="preanger-blueprint-header">
                <GitBranch size={19} strokeWidth={1.5} className="preanger-blueprint-icon" />
                <h4>Preangerstelsel sebagai Cetak Biru Cultuurstelsel</h4>
              </div>
              <p className="preanger-blueprint-lead">
                Sistem Priangan (<em>Preangerstelsel</em>) yang dijalankan VOC di dataran tinggi Jawa Barat sejak abad ke-18 dijadikan cetak biru oleh Van den Bosch pada 1830 melalui empat elemen berikut:
              </p>
              <div className="comparison-table-wrapper">
                <table className="residency-data-table adaptive-table">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Elemen Kebijakan</th>
                      <th>Asal Preangerstelsel (VOC)</th>
                      <th>Adopsi dalam Cultuurstelsel</th>
                      <th>Signifikansi Sejarah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {preangerBlueprintData.map((el) => (
                      <tr key={el.id}>
                        <td data-label="No. Elemen" className="tabular-nums"><strong>0{el.elementNumber}</strong></td>
                        <td data-label="Elemen Kebijakan"><strong>{el.title}</strong></td>
                        <td data-label="Asal Preangerstelsel (VOC)">{el.preangerstelselOrigin}</td>
                        <td data-label="Adopsi Cultuurstelsel">{el.cultuurstelselAdoption}</td>
                        <td data-label="Signifikansi Sejarah">{el.significance}</td>
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
                <article key={mech.id} className="region-card parchment-card">
                  <div className="region-card-top">
                    <h4 className="region-name">{mech.title}</h4>
                    <span className="badge badge-amber">{mech.badge}</span>
                  </div>
                  <p className="region-desc">{mech.description}</p>
                  <div className="staatsblad-reality-block voc-impact-callout">
                    <div className="voc-impact-row">
                      <ArrowRight size={14} strokeWidth={1.5} className="voc-impact-arrow" />
                      <span><strong>Dampak jangka panjang:</strong> {mech.longTermImpact}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Monetisasi Priangan — Open Section with 4 WCAG-Safe Sheets (Zero Nested Cards) */}
            <div className="monetization-open-section">
              <div className="preanger-blueprint-header">
                <Coins size={19} strokeWidth={1.5} className="preanger-blueprint-icon" />
                <h4>Proses Monetisasi Pedesaan Priangan (Abad ke-18 – Pasca-1870)</h4>
              </div>
              <div className="monetization-phases-grid">
                {prianganMonetizationData.map((phase) => (
                  <article key={phase.id} className="parchment-card monetization-phase-item">
                    <div className="monetization-phase-top">
                      <h5 className="monetization-phase-heading">{phase.title}</h5>
                      <span className={`badge ${getMonetizationBadgeClass(phase.monetizationLevel)}`}>
                        {phase.monetizationLevel}
                      </span>
                    </div>
                    <div className="monetization-period-label tabular-nums">
                      {phase.phase} · {phase.periodLabel}
                    </div>
                    <ul className="monetization-char-list">
                      {phase.characteristics.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                    <div className="monetization-fact-footer">
                      {phase.keyFact}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
