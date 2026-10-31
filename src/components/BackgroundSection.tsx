import React from 'react';
import { backgroundData, heroData, vanDenBoschControversyData, everydayFarmerLifeData } from '../data/historyContent';
import type { HistoricalImage } from '../data/historyContent';
import { Lightbulb, Quote, Landmark, Coins, BookOpen, ZoomIn, ShieldAlert, AlertTriangle, Coffee } from 'lucide-react';
import './BackgroundSection.css';

interface BackgroundSectionProps {
  onOpenImage?: (image: HistoricalImage, title: string) => void;
}

export const BackgroundSection: React.FC<BackgroundSectionProps> = ({ onOpenImage }) => {
  return (
    <section id="latar-belakang" className="section background-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Bagian I: Latar Belakang</span>
          <h2 className="section-title">{backgroundData.sectionTitle}</h2>
          <p className="section-subtitle">{backgroundData.sectionSubtitle}</p>
          <div className="ornament-divider">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
        </div>

        {/* Narrative Box */}
        <div className="parchment-card narrative-intro-card">
          <p className="narrative-lead">{backgroundData.narrative}</p>
        </div>

        {/* Three Crises Cards */}
        <div className="crisis-cards-grid">
          {backgroundData.crises.map((crisis, index) => (
            <div key={crisis.id} className="parchment-card crisis-card" id={`crisis-card-${crisis.id}`}>
              <div className="crisis-card-header">
                <span className="crisis-number">0{index + 1}</span>
                <span className="badge badge-crimson">{crisis.years}</span>
              </div>

              {crisis.image && (
                <div
                  className="crisis-image-container"
                  onClick={() => onOpenImage?.(crisis.image!, crisis.name)}
                  role="button"
                  tabIndex={0}
                  title="Klik untuk memperbesar lukisan sejarah"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onOpenImage?.(crisis.image!, crisis.name);
                    }
                  }}
                >
                  <img
                    src={crisis.image.src}
                    alt={crisis.image.alt}
                    className="crisis-image-media"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement;
                      if (parent) parent.style.display = 'none';
                    }}
                  />
                  <div className="crisis-image-zoom-tag">
                    <ZoomIn size={12} />
                    <span>
                      {crisis.image.alt.includes('Raden Saleh')
                        ? 'Lukisan Raden Saleh'
                        : crisis.image.alt.includes('Wappers')
                        ? 'Lukisan Gustave Wappers'
                        : 'Litografi Sejarah'}
                    </span>
                  </div>
                </div>
              )}

              <h3 className="crisis-name">{crisis.name}</h3>
              <p className="crisis-impact">{crisis.impact}</p>
              <div className="crisis-cost-box">
                <Coins size={16} className="crisis-cost-icon" />
                <div className="crisis-cost-text">
                  <span className="cost-label">Biaya Militer & Defisit:</span>
                  <strong className="cost-value">{crisis.cost}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Johannes van den Bosch Concept */}
        <div className="vandenbosch-container parchment-card">
          <div className="vandenbosch-badge-pill">
            <Lightbulb size={16} />
            <span>Doktrin Fiskal 1830 (Kurniawan, 2015)</span>
          </div>

          <div className="vandenbosch-content">
            <div className="vandenbosch-info">
              <h3 className="vandenbosch-title">{backgroundData.vanDenBoschConcept.title}</h3>
              <p className="vandenbosch-summary">{backgroundData.vanDenBoschConcept.summary}</p>
              
              <ul className="vandenbosch-points-list">
                {backgroundData.vanDenBoschConcept.points.map((pt, idx) => (
                  <li key={idx} className="vandenbosch-point-item">
                    <div className="point-bullet">{idx + 1}</div>
                    <p className="point-text">{pt}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="vandenbosch-aside-box">
              <div className="aside-icon-circle">
                <Landmark size={26} />
              </div>
              <h4>Penolakan Sistem Landrente Raffles</h4>
              <p>
                Sistem sewa tanah (<em>Landrente</em>) era Raffles dipandang Van den Bosch tidak efektif karena
                masyarakat desa belum terbiasa dengan ekonomi moneter dan kekurangan uang tunai. Jawa harus menjadi
                <em> wingewest</em> yang dieksploitasi untuk memperkaya negara induk.
              </p>
              <div className="aside-quote">
                "Ubah tenaga kerja dan tanah desa menjadi komoditas pasar dunia."
              </div>

              {heroData.image && (
                <div
                  className="vandenbosch-portrait-banner"
                  onClick={() => onOpenImage?.(heroData.image, 'Johannes van den Bosch')}
                  role="button"
                  tabIndex={0}
                  title="Klik untuk memperbesar potret resmi Van den Bosch"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onOpenImage?.(heroData.image, 'Johannes van den Bosch');
                    }
                  }}
                >
                  <img
                    src={heroData.image.src}
                    alt={heroData.image.alt}
                    className="vandenbosch-portrait-media"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement;
                      if (parent) parent.style.display = 'none';
                    }}
                  />
                  <div className="vandenbosch-portrait-zoom-hint">
                    <ZoomIn size={12} />
                    <span>Potret Raden Saleh (1836)</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sisi Gelap & Kontroversi Johannes van den Bosch */}
        <div className="controversy-block">
          <div className="controversy-header">
            <div className="controversy-badge-pill">
              <ShieldAlert size={15} />
              <span>Sisi Gelap Birokrasi Kolonial</span>
            </div>
            <h3 className="controversy-title">Johannes van den Bosch: Arsitek Fiskal vs Catatan Nepotisme & Dana Rahasia</h3>
            <p className="controversy-subtitle">
              Di balik puja-puji penyelamat kas monarki Belanda, tersimpan rekam jejak legalisasi korupsi massal dan favoritisme kontrak keluarga
            </p>
          </div>

          <div className="controversy-grid">
            {vanDenBoschControversyData.map((item) => (
              <div key={item.id} className="parchment-card controversy-card" id={item.id}>
                <div className="controversy-card-header">
                  <span className="badge badge-crimson">{item.badge}</span>
                  <AlertTriangle size={16} className="controversy-alert-icon" />
                </div>
                <h4 className="controversy-item-title">{item.title}</h4>
                <p className="controversy-item-desc">{item.description}</p>
                <div className="controversy-detail-box">
                  <span className="detail-tag">Catatan Arsip:</span>
                  <p className="detail-text">{item.historicalDetail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Potret Humanis: Sehari-hari di Bivak Rimba Kopi */}
        <div className="farmer-life-container parchment-card">
          <div className="farmer-life-header">
            <div className="farmer-badge-pill">
              <Coffee size={15} />
              <span>Mikro-Sejarah: Catatan Lapangan</span>
            </div>
            <h3 className="farmer-life-title">{everydayFarmerLifeData.title}</h3>
            <p className="farmer-life-subtitle">{everydayFarmerLifeData.subtitle}</p>
          </div>

          <div className="farmer-aspects-grid">
            {everydayFarmerLifeData.aspects.map((aspect, idx) => (
              <div key={idx} className="farmer-aspect-card">
                <div className="aspect-card-top">
                  <span className="aspect-number">0{idx + 1}</span>
                  <span className="badge badge-gold">{aspect.tag}</span>
                </div>
                <h4 className="aspect-title">{aspect.title}</h4>
                <p className="aspect-desc">{aspect.description}</p>
              </div>
            ))}
          </div>

          <div className="farmer-quote-box">
            <Quote size={20} className="farmer-quote-icon" />
            <blockquote className="farmer-quote-text">
              "{everydayFarmerLifeData.quote.text}"
            </blockquote>
            <span className="farmer-quote-source">{everydayFarmerLifeData.quote.source}</span>
          </div>
        </div>

        {/* Interpretations of Historians — PRD: Definisi Para Ahli */}
        <div className="interpretations-block">
          <div className="interp-header">
            <div className="interp-badge-pill">
              <BookOpen size={15} />
              <span>Ragam Interpretasi Akademik (1.1)</span>
            </div>
            <h3 className="interp-title">Perspektif Para Sejarawan & Ekonom terhadap Cultuurstelsel</h3>
            <p className="interp-subtitle">
              Tidak ada konsensus tunggal — setiap ahli menekankan aspek berbeda dari sistem yang kompleks ini
            </p>
          </div>
          <div className="interp-grid">
            {backgroundData.historianInterpretations.map((item) => (
              <div key={item.id} className="parchment-card interp-card" id={item.id}>
                <div className="interp-scholar-label">{item.scholar}</div>
                <p className="interp-text">{item.interpretation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Historians Quotes Section */}
        <div className="quotes-block">
          <div className="quotes-header">
            <Quote size={24} className="quotes-heading-icon" />
            <h3 className="quotes-title">Kutipan Definitif Para Sejarawan</h3>
            <p className="quotes-subtitle">Refleksi kritis ahli sejarah terhadap hakikat sistem Cultuurstelsel</p>
          </div>

          <div className="quotes-grid">
            {backgroundData.quotes.map((item) => (
              <div key={item.id} className="quote-card" id={item.id}>
                <div className="quote-icon-decor">"</div>
                <blockquote className="quote-text">
                  "{item.quote}"
                </blockquote>
                <div className="quote-author">
                  <span className="quote-name">{item.author}</span>
                  <span className="quote-role">{item.role}</span>
                  {item.work && <span className="quote-work">Karya: <em>{item.work}</em></span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
