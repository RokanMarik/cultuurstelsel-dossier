import React from 'react';
import { Scroll, ArrowUp, BookOpen } from 'lucide-react';
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
            <div className="footer-brand-logo">
              <div className="footer-seal">
                <Scroll size={20} />
              </div>
              <div>
                <h3 className="footer-title">CULTUURSTELSEL</h3>
                <span className="footer-subtitle">Sistem Tanam Paksa Hindia Belanda (1830–1870)</span>
              </div>
            </div>
            <p className="footer-about">
              Media edukasi digital sejarah sosial perekonomian sebagai pengganti infografis/poster kelompok. 
              Mengulas secara komprehensif akar krisis, mekanisme fiskal, penderitaan petani, dan dinamika agraria kolonial abad ke-19.
            </p>
          </div>

          <div className="footer-authors-block">
            <h4 className="footer-col-title">Tim Penyusun & Peneliti</h4>
            <div className="footer-authors-card">
              <div className="author-pill">
                <div className="author-dot" />
                <span><strong>Rokan</strong> — Mahasiswa Sejarah</span>
              </div>
              <div className="author-pill">
                <div className="author-dot" />
                <span><strong>Fiqrul</strong> — Mahasiswa Sejarah</span>
              </div>
              <div className="course-tag">
                <BookOpen size={13} />
                <span>Mata Kuliah: Sejarah Sosial Perekonomian</span>
              </div>
            </div>
          </div>

          <div className="footer-back-to-top">
            <button 
              className="btn btn-outline back-to-top-btn"
              onClick={scrollToTop}
              id="footer-btn-top"
              aria-label="Kembali ke Atas"
            >
              <ArrowUp size={16} />
              <span>Kembali ke Atas</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="ornament-divider" style={{ margin: '1.5rem auto' }}>
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
          <p className="footer-copy">
            © 2026 Proyek Kelompok Sejarah Sosial Perekonomian • Rokan & Fiqrul. Disusun untuk tujuan presentasi akademis & pembelajaran.
          </p>
        </div>
      </div>
    </footer>
  );
};
