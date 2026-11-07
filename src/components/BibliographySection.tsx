import React, { useState, useEffect } from 'react';
import { bibliographyData, featuredHistoricalQuotes } from '../data/historyContent';
import type { BibliographyItem } from '../data/historyContent';
import {
  MONOGRAPH_NAVIGATE_EVENT,
  type MonographNavigationTarget,
} from '../utils/monographNavigator';
import { BookOpen, FileText, Bookmark, Check, Copy, ScrollText, ExternalLink } from 'lucide-react';
import './BibliographySection.css';

export const BibliographySection: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('Semua');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const handleNavigate = (e: Event) => {
      const detail = (e as CustomEvent<MonographNavigationTarget>).detail;
      if (detail?.sectionId === 'pustaka' && detail.subTabId) {
        setFilterType('Semua');
      }
    };
    window.addEventListener(MONOGRAPH_NAVIGATE_EVENT, handleNavigate);
    return () => window.removeEventListener(MONOGRAPH_NAVIGATE_EVENT, handleNavigate);
  }, []);

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
        {/* Monograph 2-Column Section Header */}
        <div className="section-header">
          <h2 className="section-title">Kutipan Kunci &amp; Daftar Pustaka</h2>
          <p className="section-subtitle">
            Katalog literatur primer, telaah sejarah kritis, dan karya sastra monumental era Tanam Paksa
          </p>
        </div>

        {/* Featured Primary Source Extracts (Multatuli & Baron van Hoëvell) */}
        <div className="featured-quotes-container">
          <div className="biblio-sub-opener">
            <h3 className="featured-quotes-title">Kutipan Bersejarah yang Mengguncang Kerajaan Belanda</h3>
            <p className="featured-quotes-subtitle">
              Dari halaman <em>Max Havelaar</em> hingga mimbar parlemen Tweede Kamer di Den Haag
            </p>
          </div>

          <div className="featured-quotes-grid">
            {featuredHistoricalQuotes.map((q) => (
              <figure key={q.id} className="featured-quote-extract" id={q.id}>
                <span className="badge badge-crimson">{q.badge}</span>

                <blockquote className="featured-quote-body">
                  “{q.quote}”
                </blockquote>

                <figcaption className="featured-quote-footer">
                  <strong className="author-name">{q.author}</strong>
                  <span className="author-role">{q.role}</span>
                  <span className="author-work">Sumber: <em>{q.work}</em></span>
                  <p className="quote-context-note">{q.historicalContext}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Bibliography Catalog */}
        <div className="bibliography-catalog-wrap">
          <div className="biblio-sub-opener">
            <h3 className="catalog-title">Katalog Daftar Pustaka Akademik</h3>
            <p className="catalog-subtitle">
              Standar sitasi sejarah sosial perekonomian lengkap dengan salin cepat format APA
            </p>
          </div>

          <div className="pustaka-filter-bar" role="tablist" aria-label="Saring jenis pustaka">
            {['Semua', 'Buku', 'Jurnal', 'Arsip Kolonial'].map((type) => (
              <button
                key={type}
                type="button"
                role="tab"
                aria-selected={filterType === type}
                className={`pustaka-filter-btn ${filterType === type ? 'active' : ''}`}
                onClick={() => setFilterType(type)}
              >
                {type === 'Semua' && <BookOpen size={15} strokeWidth={1.5} />}
                {type === 'Buku' && <Bookmark size={15} strokeWidth={1.5} />}
                {type === 'Jurnal' && <ScrollText size={15} strokeWidth={1.5} />}
                {type === 'Arsip Kolonial' && <FileText size={15} strokeWidth={1.5} />}
                <span>{type}</span>
                <span className="pustaka-filter-count tabular-nums">{getCountByType(type)}</span>
              </button>
            ))}
          </div>

          {/* Bibliography Ledger List (Hairline Rows) */}
          <ol className="bibliography-list">
            {filteredItems.map((item, index) => (
              <li key={item.id} className="biblio-row" id={`biblio-item-${item.id}`}>
                <span className="biblio-number tabular-nums">[{index + 1}]</span>
                <div className="biblio-content">
                  <div className="biblio-header-row">
                    <span className="biblio-authors">{item.authors}</span>
                    <span className="biblio-year tabular-nums">({item.year})</span>
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
                      <ExternalLink size={14} strokeWidth={1.5} />
                      <span>{item.doiUrl}</span>
                    </a>
                  )}
                </div>
                <button
                  type="button"
                  className={`biblio-copy-btn ${copiedId === item.id ? 'copied' : ''}`}
                  onClick={() => copyCitation(item)}
                  title="Salin sitasi lengkap"
                  aria-label={`Salin sitasi ${item.title}`}
                >
                  {copiedId === item.id ? (
                    <>
                      <Check size={15} strokeWidth={1.5} className="copied-icon" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} strokeWidth={1.5} />
                      <span>Salin Sitasi</span>
                    </>
                  )}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
