import React, { useState } from 'react';
import { heroData } from '../data/historyContent';
import type { HistoricalImage } from '../data/historyContent';
import { 
  ChevronRight, 
  Calendar, 
  Users, 
  Landmark, 
  FileSpreadsheet, 
  Clock, 
  Sparkles, 
  BookOpen, 
  Leaf, 
  Scale, 
  AlertTriangle, 
  Bookmark,
  ChevronDown,
  ChevronUp,
  Compass
} from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onOpenImage?: (image: HistoricalImage, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenImage }) => {
  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(true);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const getShortcutIcon = (iconName: string) => {
    switch (iconName) {
      case 'book': return <BookOpen size={14} />;
      case 'leaf': return <Leaf size={14} />;
      case 'scale': return <Scale size={14} />;
      case 'clock': return <Calendar size={14} />;
      case 'alert': return <AlertTriangle size={14} />;
      case 'compass': return <Compass size={14} />;
      case 'bookmark': return <Bookmark size={14} />;
      default: return <BookOpen size={14} />;
    }
  };

  return (
    <section id="beranda" className="hero-section">
      {/* Decorative Archival Corner Borders */}
      <div className="corner-ornament corner-top-left" />
      <div className="corner-ornament corner-top-right" />
      <div className="corner-ornament corner-bottom-left" />
      <div className="corner-ornament corner-bottom-right" />

      <div className="container hero-container">
        {/* Authors & Academic Header */}
        <div className="academic-badge-wrap">
          <div className="academic-badge">
            <span className="course-name">{heroData.course}</span>
            <span className="badge-separator">•</span>
            <span className="authors-names">
              Oleh: <strong>{heroData.authors[0].name}</strong> & <strong>{heroData.authors[1].name}</strong>
            </span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="hero-main-title">
          <span className="hero-prefix">ARSIP SEJARAH SOSIAL & FISKAL KOLONIAL</span>
          <h1 className="hero-title">{heroData.title}</h1>
          <h2 className="hero-subtitle">{heroData.subtitle}</h2>
          
          <div className="ornament-divider">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-diamond" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>

          <p className="hero-tagline">{heroData.tagline}</p>
        </div>

        {/* Overview Excerpt */}
        <div className="hero-overview-card">
          <p className="hero-overview-text">{heroData.overview}</p>
          <div className="hero-cta-group">
            <button 
              className="btn btn-primary"
              onClick={() => scrollTo('latar-belakang')}
              id="hero-btn-explore"
            >
              <span>Mulai Penelusuran</span>
              <ChevronRight size={16} />
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => scrollTo('timeline-section')}
              id="hero-btn-timeline"
            >
              <span>Garis Waktu (1830–1870)</span>
            </button>
          </div>
        </div>

        {/* SUB-FITUR PRD FASE 1: Ringkasan 1 Menit */}
        <div className="quick-summary-box parchment-card">
          <button
            className="quick-summary-header"
            onClick={() => setIsSummaryOpen(!isSummaryOpen)}
            aria-expanded={isSummaryOpen}
            id="toggle-1-min-summary"
          >
            <div className="summary-title-group">
              <div className="summary-badge-pill">
                <Clock size={15} />
                <span>{heroData.quickSummary.badge}</span>
                <span className="read-time-dot">•</span>
                <span className="read-time-text">{heroData.quickSummary.readTime}</span>
              </div>
              <h3 className="summary-title">{heroData.quickSummary.title}</h3>
            </div>
            <span
              className="summary-toggle-btn"
              aria-label={isSummaryOpen ? 'Sembunyikan Ringkasan' : 'Buka Ringkasan'}
            >
              {isSummaryOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>


          {isSummaryOpen && (
            <div className="summary-grid">
              {heroData.quickSummary.points.map((pt) => (
                <div key={pt.step} className="summary-point-card">
                  <div className="summary-point-step">
                    <span>{pt.step}</span>
                  </div>
                  <div className="summary-point-body">
                    <h4 className="summary-point-label">{pt.label}</h4>
                    <p className="summary-point-text">{pt.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SUB-FITUR PRD FASE 1: Poin Kunci Cepat (Highlights Grid) */}
        <div className="hero-highlights-grid">
          {heroData.highlights.map((item, index) => {
            const icons = [Calendar, Users, FileSpreadsheet, Landmark];
            const Icon = icons[index % icons.length];

            return (
              <div key={item.label} className="highlight-card">
                {item.label === 'Pencetus Kebijakan' && heroData.image ? (
                  <div
                    className="highlight-icon-wrapper highlight-portrait-wrapper"
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
                      className="highlight-portrait-img"
                    />
                  </div>
                ) : (
                  <div className="highlight-icon-wrapper">
                    <Icon size={20} />
                  </div>
                )}
                <div className="highlight-content">
                  <span className="highlight-label">{item.label}</span>
                  <strong className="highlight-value">{item.value}</strong>
                  <span className="highlight-note">{item.note}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* SUB-FITUR PRD FASE 1: Pintasan ke Bagian */}
        <div className="quick-shortcuts-container">
          <span className="shortcuts-label">
            <Sparkles size={14} className="shortcuts-sparkle" />
            <span>Pintasan Cepat ke Bagian:</span>
          </span>
          <div className="shortcuts-pills-wrap">
            {heroData.quickShortcuts.map((sc) => (
              <button
                key={sc.targetId}
                className="shortcut-pill-btn"
                onClick={() => scrollTo(sc.targetId)}
                id={`shortcut-${sc.targetId}`}
              >
                <span className="shortcut-icon">{getShortcutIcon(sc.icon)}</span>
                <span>{sc.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
