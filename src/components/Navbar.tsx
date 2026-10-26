import React, { useState, useEffect } from 'react';
import { Scroll, Menu, X, BookOpen } from 'lucide-react';
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
  { id: 'pustaka', label: 'Pustaka' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setIsScrolled(winScroll > 30);

      // Determine active section
      const scrollPosition = winScroll + 200;
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Reading Progress Bar */}
      <div className="reading-progress-track">
        <div className="reading-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      <nav className="container navbar-container">
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

        {/* Mobile Toggle Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-content">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                id={`mobile-nav-${item.id}`}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
