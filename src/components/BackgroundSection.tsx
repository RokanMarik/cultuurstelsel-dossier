import React from 'react';
import {
  backgroundData,
  heroData,
  vanDenBoschControversyData,
  everydayFarmerLifeData
} from '../data/historyContent';
import type { HistoricalImage } from '../data/historyContent';
import { Coins, ZoomIn } from 'lucide-react';
import './BackgroundSection.css';

interface BackgroundSectionProps {
  onOpenImage?: (image: HistoricalImage, title: string) => void;
}

export const BackgroundSection: React.FC<BackgroundSectionProps> = ({ onOpenImage }) => {
  return (
    <section id="latar-belakang" className="section background-section">
      <div className="container">
        {/* Monograph 2-Column Chapter Header (Zero Eyebrow Kicker) */}
        <div className="section-header">
          <h2 className="section-title">{backgroundData.sectionTitle}</h2>
          <p className="section-subtitle">{backgroundData.sectionSubtitle}</p>
        </div>

        {/* Opening Historical Narrative */}
        <div className="narrative-intro-sheet">
          <p className="narrative-lead">{backgroundData.narrative}</p>
        </div>

        {/* Three Fiscal & Military Crises */}
        <div className="crisis-cards-grid">
          {backgroundData.crises.map((crisis, index) => (
            <article key={crisis.id} className="parchment-card crisis-card" id={`crisis-card-${crisis.id}`}>
              <div className="crisis-card-header">
                <h3 className="crisis-name">
                  <span className="crisis-number tabular-nums">{index + 1}.</span> {crisis.name}
                </h3>
                <span className="badge badge-crimson tabular-nums">{crisis.years}</span>
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
                    <ZoomIn size={13} strokeWidth={1.5} />
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

              <p className="crisis-impact">{crisis.impact}</p>

              <div className="crisis-cost-footer">
                <Coins size={16} strokeWidth={1.5} className="crisis-cost-icon" />
                <div className="crisis-cost-text">
                  <span className="cost-label">Beban militer &amp; defisit</span>
                  <strong className="cost-value tabular-nums">{crisis.cost}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Johannes van den Bosch Concept — Open 2-Column Monograph Layout (Zero Nested Cards) */}
        <div className="vandenbosch-open-section" id="vandenbosch-concept-section">
          <div className="vandenbosch-content">
            <div className="vandenbosch-info">
              <h3 className="vandenbosch-title">{backgroundData.vanDenBoschConcept.title}</h3>
              <p className="vandenbosch-summary">{backgroundData.vanDenBoschConcept.summary}</p>

              <ol className="vandenbosch-points-list">
                {backgroundData.vanDenBoschConcept.points.map((pt, idx) => (
                  <li key={idx} className="vandenbosch-point-item">
                    <span className="point-bullet tabular-nums">{idx + 1}.</span>
                    <p className="point-text">{pt}</p>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="parchment-card vandenbosch-aside-box">
              <h4 className="aside-heading">Penolakan Sistem Landrente Raffles</h4>
              <p className="aside-body">
                Sistem sewa tanah (<em>Landrente</em>) era Raffles dipandang Van den Bosch tidak efektif karena
                masyarakat desa belum terbiasa dengan ekonomi moneter dan kekurangan uang tunai. Jawa harus menjadi
                <em> wingewest</em> yang dieksploitasi untuk memperkaya negara induk.
              </p>
              <blockquote className="aside-quote">
                “Ubah tenaga kerja dan tanah desa menjadi komoditas pasar dunia.”
              </blockquote>

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
                    <ZoomIn size={13} strokeWidth={1.5} />
                    <span>Potret Raden Saleh (1836)</span>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>

        {/* Sisi Gelap & Kontroversi Johannes van den Bosch */}
        <div className="controversy-block">
          <div className="monograph-sub-opener">
            <h3 className="controversy-title">
              Johannes van den Bosch: Arsitek Fiskal vs Catatan Nepotisme &amp; Dana Rahasia
            </h3>
            <p className="controversy-subtitle">
              Di balik klaim penyelamat kas monarki Belanda, tersimpan rekam jejak legalisasi korupsi struktural dan favoritisme kontrak keluarga
            </p>
          </div>

          <div className="controversy-grid">
            {vanDenBoschControversyData.map((item) => (
              <article key={item.id} className="parchment-card controversy-card" id={item.id}>
                <div className="controversy-card-header">
                  <h4 className="controversy-item-title">{item.title}</h4>
                  <span className="badge badge-crimson">{item.badge}</span>
                </div>
                <p className="controversy-item-desc">{item.description}</p>
                <div className="controversy-detail-footer">
                  <span className="detail-tag">Catatan arsip</span>
                  <p className="detail-text">{item.historicalDetail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Potret Humanis: Sehari-hari di Bivak Rimba Kopi (Open Section — Zero Nested Cards) */}
        <div className="farmer-life-open-section" id="farmer-bivak-section">
          <div className="monograph-sub-opener">
            <h3 className="farmer-life-title">{everydayFarmerLifeData.title}</h3>
            <p className="farmer-life-subtitle">{everydayFarmerLifeData.subtitle}</p>
          </div>

          <div className="farmer-aspects-grid">
            {everydayFarmerLifeData.aspects.map((aspect, idx) => (
              <article key={idx} className="parchment-card farmer-aspect-card">
                <div className="aspect-card-top">
                  <h4 className="aspect-title">
                    <span className="aspect-number tabular-nums">{idx + 1}.</span> {aspect.title}
                  </h4>
                  <span className="badge badge-gold">{aspect.tag}</span>
                </div>
                <p className="aspect-desc">{aspect.description}</p>
              </article>
            ))}
          </div>

          <figure className="quote-card farmer-quote-extract">
            <blockquote className="quote-text">
              “{everydayFarmerLifeData.quote.text}”
            </blockquote>
            <figcaption className="quote-author">
              <span className="quote-role">{everydayFarmerLifeData.quote.source}</span>
            </figcaption>
          </figure>
        </div>

        {/* Interpretations of Historians */}
        <div className="interpretations-block">
          <div className="monograph-sub-opener">
            <h3 className="interp-title">Perspektif Para Sejarawan &amp; Ekonom terhadap Cultuurstelsel</h3>
            <p className="interp-subtitle">
              Tidak ada konsensus tunggal — setiap ahli menekankan dimensi struktural yang berbeda dari rezim tanam wajib
            </p>
          </div>

          <div className="interp-grid">
            {backgroundData.historianInterpretations.map((item) => (
              <article key={item.id} className="parchment-card interp-card" id={item.id}>
                <h4 className="interp-scholar-heading">{item.scholar}</h4>
                <p className="interp-text">{item.interpretation}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Historians Quotes Section */}
        <div className="quotes-block">
          <div className="monograph-sub-opener">
            <h3 className="quotes-title">Kutipan Definitif Para Sejarawan</h3>
            <p className="quotes-subtitle">Refleksi kritis ahli sejarah terhadap hakikat sistem Cultuurstelsel</p>
          </div>

          <div className="quotes-grid">
            {backgroundData.quotes.map((item) => (
              <figure key={item.id} className="quote-card" id={item.id}>
                <blockquote className="quote-text">
                  “{item.quote}”
                </blockquote>
                <figcaption className="quote-author">
                  <span className="quote-name">{item.author}</span>
                  <span className="quote-role">{item.role}</span>
                  {item.work && (
                    <span className="quote-work">
                      Karya: <em>{item.work}</em>
                    </span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
