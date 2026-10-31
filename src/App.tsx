import React, { useState, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundSection } from './components/BackgroundSection';
import { ExploitationSection } from './components/ExploitationSection';
import { TimelineSection } from './components/TimelineSection';
import { ImplementationSection } from './components/ImplementationSection';
import { ImpactSection } from './components/ImpactSection';
import { BibliographySection } from './components/BibliographySection';
import { Footer } from './components/Footer';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import type { HistoricalImage } from './data/historyContent';
import './App.css';

const InteractiveLabSection = React.lazy(() =>
  import('./components/InteractiveLabSection').then((m) => ({
    default: m.InteractiveLabSection,
  }))
);

const HistoricalGamesSection = React.lazy(() =>
  import('./components/HistoricalGamesSection').then((m) => ({
    default: m.HistoricalGamesSection,
  }))
);

export const App: React.FC = () => {
  const [lightboxState, setLightboxState] = useState<{
    image: HistoricalImage;
    title?: string;
  } | null>(null);

  const handleOpenImage = (image: HistoricalImage, title?: string) => {
    setLightboxState({ image, title });
  };

  return (
    <div className="app-root">
      {/* Skip to Main Content — Aksesibilitas Keyboard */}
      <a href="#main-content" className="skip-to-content">Langsung ke Konten Utama</a>
      <Navbar />
      <main id="main-content">
        <Hero onOpenImage={handleOpenImage} />
        <BackgroundSection onOpenImage={handleOpenImage} />
        <ExploitationSection onOpenImage={handleOpenImage} />
        <TimelineSection />
        <ImplementationSection />
        <ImpactSection onOpenImage={handleOpenImage} />

        <Suspense
          fallback={
            <section
              id="interactive-lab"
              className="section lazy-section-placeholder"
              aria-busy="true"
            >
              <div className="container">
                <div className="parchment-card lazy-skeleton-card">
                  <span>Memuat Laboratorium Sejarah Interaktif...</span>
                </div>
              </div>
            </section>
          }
        >
          <InteractiveLabSection />
        </Suspense>

        <Suspense
          fallback={
            <section
              id="permainan-sejarah"
              className="section lazy-section-placeholder"
              aria-busy="true"
            >
              <div className="container">
                <div className="parchment-card lazy-skeleton-card">
                  <span>Memuat Suplemen TTS & Kuis Komisi Hindia...</span>
                </div>
              </div>
            </section>
          }
        >
          <HistoricalGamesSection />
        </Suspense>

        <BibliographySection />
      </main>
      <Footer />

      {/* Global Historical Image Lightbox Modal */}
      <ImageLightboxModal
        image={lightboxState ? lightboxState.image : null}
        title={lightboxState?.title}
        onClose={() => setLightboxState(null)}
      />
    </div>
  );
};

export default App;
