import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand-block">
            <h3 className="footer-title">Cultuurstelsel (1830–1870)</h3>
            <span className="footer-subtitle">
              Monograf Digital Sejarah Sosial Perekonomian Hindia Belanda
            </span>
            <p className="footer-about">
              Publikasi akademik digital pengganti infografis kelompok yang membedah krisis fiskal kolonial,
              regulasi Staatsblad 1834, surplus Batig Slot, bencana kelaparan Jawa, dan kritik parlemen abad ke-19.
            </p>
          </div>

          <div className="footer-authors-block">
            <h4 className="footer-col-title">Kolofon Penyusun</h4>
            <ul className="footer-authors-list">
              <li>
                <strong>Rokan</strong> — Penyusun &amp; Peneliti Sejarah
              </li>
              <li>
                <strong>Fiqrul</strong> — Penyusun &amp; Peneliti Sejarah
              </li>
              <li className="footer-course-item">
                Mata Kuliah Sejarah Sosial Perekonomian
              </li>
            </ul>
          </div>

          <div className="footer-back-to-top">
            <button
              type="button"
              className="btn back-to-top-btn"
              onClick={scrollToTop}
              id="footer-btn-top"
              aria-label="Kembali ke Atas"
            >
              <ArrowUp size={16} strokeWidth={1.5} />
              <span>Kembali ke Atas</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            © 2026 Proyek Kelompok Sejarah Sosial Perekonomian oleh Rokan &amp; Fiqrul · Disusun untuk rujukan akademik dan pembelajaran sejarah.
          </p>
        </div>
      </div>
    </footer>
  );
};
