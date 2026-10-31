import React, { useState, useEffect } from 'react';
import {
  Scroll,
  Menu,
  X,
  BookOpen,
  History,
  Coins,
  Flame,
  Compass,
  Gamepad2
} from 'lucide-react';
import './Navbar.css';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'latar-belakang', label: 'Latar Belakang' },
  { id: 'eksploitasi', label: 'Eksploitasi' },
  { id: 'timeline-section', label: 'Garis Waktu' },
  { id: 'pelaksanaan', label: 'Staatsblad 1834' },
  { id: 'dampak', label: 'Dampak' },
  { id: 'interactive-lab', label: 'Lab Sejarah' },
  { id: 'permainan-sejarah', label: 'TTS & Kuis' },
  { id: 'pustaka', label: 'Pustaka' },
];

const quickDockItems = [
  { id: 'latar-belakang', shortLabel: 'Latar', icon: History },
  { id: 'eksploitasi', shortLabel: 'Fiskal', icon: Coins },
  { id: 'dampak', shortLabel: 'Dampak', icon: Flame },
  { id: 'interactive-lab', shortLabel: 'Lab', icon: Compass },
  { id: 'permainan-sejarah', shortLabel: 'TTS/Kuis', icon: Gamepad2 },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setIsScrolled(winScroll > 30);

      const scrollPosition = winScroll + 220;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = window.innerWidth <= 1160 ? 64 : 72;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    navigateToSection(id);
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        {/* Reading Progress Bar */}
        <div className="reading-progress-track" aria-hidden="true">
          <div className="reading-progress-bar" style={{ width: `${scrollProgress}%` }} />
        </div>

        <nav className="container navbar-container" aria-label="Navigasi Utama">
          <a
            href="#beranda"
            className="navbar-brand"
            onClick={(e) => scrollToSection(e, 'beranda')}
            id="nav-brand-logo"
          >
            <div className="brand-seal">
              <Scroll size={18} />
            </div>
            <div className="brand-text">
              <span className="brand-title">CULTUURSTELSEL</span>
              <span className="brand-subtitle">1830 – 1870</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="desktop-nav-menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                id={`nav-link-${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
                {activeSection === item.id && <span className="active-pip" />}
              </a>
            ))}
            <a
              href="#pustaka"
              className="nav-cta-btn"
              onClick={(e) => scrollToSection(e, 'pustaka')}
              id="nav-btn-referensi"
            >
              <BookOpen size={14} />
              <span>Referensi</span>
            </a>
          </div>

          {/* Mobile/Tablet Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isMobileMenuOpen ? 'Tutup Daftar Bab' : 'Buka Daftar Bab'}
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="mobile-menu-label">Daftar Bab</span>
          </button>
        </nav>

        {/* Mobile/Tablet Drawer Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-drawer" id="mobile-navigation-drawer">
            <div className="container mobile-drawer-content">
              {navItems.map((item, idx) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  id={`mobile-nav-${item.id}`}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                >
                  <span className="mobile-nav-index">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile & Tablet Thumb-Friendly Bottom Quick-Jump Dock */}
      <nav className="mobile-bottom-dock" aria-label="Pintasan Cepat Bab">
        {quickDockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`dock-item-btn ${isActive ? 'active' : ''}`}
              onClick={() => navigateToSection(item.id)}
              aria-current={isActive ? 'true' : undefined}
            >
              <Icon size={18} className="dock-icon" />
              <span className="dock-label">{item.shortLabel}</span>
            </button>
          );
        })}
        <button
          type="button"
          className={`dock-item-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Semua Bab"
        >
          {isMobileMenuOpen ? <X size={18} className="dock-icon" /> : <Menu size={18} className="dock-icon" />}
          <span className="dock-label">Semua</span>
        </button>
      </nav>
    </>
  );
};
