import React, { useState } from 'react';
import { bibliographyData, featuredHistoricalQuotes } from '../data/historyContent';
import type { BibliographyItem } from '../data/historyContent';
import { BookOpen, FileText, Bookmark, Check, Quote, Sparkles, ScrollText, ExternalLink } from 'lucide-react';
import './BibliographySection.css';

export const BibliographySection: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('Semua');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredItems = filterType === 'Semua' 
    ? bibliographyData 
    : bibliographyData.filter((b) => b.type === filterType);

  const getCountByType = (type: string) =>
    type === 'Semua'
      ? bibliographyData.length
      : bibliographyData.filter((b) => b.type === type).length;

  const copyCitation = (item: BibliographyItem) => {
    const citation = item.fullCitation ?? `${item.authors} (${item.year}). ${item.title}. ${item.publisher}.`;
    navigator.clipboard.writeText(citation);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="pustaka" className="section bibliography-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Bagian VII: Rujukan & Dokumen</span>
          <h2 className="section-title">Kutipan Kunci & Daftar Pustaka</h2>
          <p className="section-subtitle">
            Katalog literatur primer, telaah sejarah kritis, dan karya sastra monumental era Tanam Paksa
          </p>
          <div className="ornament-divider">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
        </div>

        {/* SUB-FITUR PRD FASE 3: Sorotan Quote Penting (Multatuli & Baron van Hoëvell) */}
        <div className="featured-quotes-container">
          <div className="featured-quotes-header">
            <div className="quotes-badge-pill">
              <Sparkles size={15} />
              <span>Sorotan Dokumen Moral & Sastra</span>
            </div>
            <h3 className="featured-quotes-title">Kutipan Bersejarah yang Mengguncang Kerajaan Belanda</h3>
            <p className="featured-quotes-subtitle">
              Dari buku <em>Max Havelaar</em> hingga mimbar parlemen Tweede Kamer di Den Haag
            </p>
          </div>

          <div className="featured-quotes-grid">
            {featuredHistoricalQuotes.map((q) => (
              <div key={q.id} className="parchment-card featured-quote-card" id={q.id}>
                <div className="quote-seal-tag">
                  <Quote size={20} className="quote-seal-icon" />
                  <span className="quote-seal-badge">{q.badge}</span>
                </div>
                
                <blockquote className="featured-quote-body">
                  "{q.quote}"
                </blockquote>

                <div className="featured-quote-footer">
                  <div className="author-identity">
                    <strong className="author-name">{q.author}</strong>
                    <span className="author-role">{q.role}</span>
                    <span className="author-work">Sumber: <em>{q.work}</em></span>
                  </div>
                  <div className="quote-context-box">
                    <p className="quote-context-note">{q.historicalContext}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUB-FITUR PRD FASE 3: Daftar Pustaka & Arsip Kolonial */}
        <div className="bibliography-catalog-wrap">
          <div className="catalog-header">
            <h3 className="catalog-title">Katalog Daftar Pustaka Akademik</h3>
            <p className="catalog-subtitle">Standar sitasi sejarah sosial perekonomian lengkap dengan opsi salin cepat (APA Style)</p>
          </div>

          {/* Filter Pills */}
          <div className="pustaka-filter-bar">
            {['Semua', 'Buku', 'Jurnal', 'Arsip Kolonial'].map((type) => (
              <button
                key={type}
                type="button"
                className={`pustaka-filter-btn ${filterType === type ? 'active' : ''}`}
                onClick={() => setFilterType(type)}
              >
                {type === 'Semua' && <BookOpen size={14} />}
                {type === 'Buku' && <Bookmark size={14} />}
                {type === 'Jurnal' && <ScrollText size={14} />}
                {type === 'Arsip Kolonial' && <FileText size={14} />}
                <span>{type}</span>
                <span className="pustaka-filter-count">{getCountByType(type)}</span>
              </button>
            ))}
          </div>

          {/* Bibliography List */}
          <div className="bibliography-list">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="parchment-card biblio-card">
                <div className="biblio-number">[{index + 1}]</div>
                <div className="biblio-content">
                  <div className="biblio-header-row">
                    <span className="biblio-authors">{item.authors}</span>
                    <span className="badge badge-gold">{item.year}</span>
                    <span className="badge badge-verdigris">{item.type}</span>
                  </div>
                  <h4 className="biblio-title">{item.title}</h4>
                  <p className="biblio-publisher">{item.publisher}</p>
                  {item.doiUrl && (
                    <a
                      href={item.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="biblio-doi-link"
                    >
                      <ExternalLink size={13} />
                      <span>{item.doiUrl}</span>
                    </a>
                  )}
                </div>
                <button
                  type="button"
                  className="biblio-copy-btn"
                  onClick={() => copyCitation(item)}
                  title="Salin Sitasi Lengkap"
                  aria-label="Salin Sitasi"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check size={14} className="copied-icon" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Bookmark size={14} />
                      <span>Salin Sitasi</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
