import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundSection } from './components/BackgroundSection';
import { ExploitationSection } from './components/ExploitationSection';
import { TimelineSection } from './components/TimelineSection';
import { ImplementationSection } from './components/ImplementationSection';
import { ImpactSection } from './components/ImpactSection';
import { InteractiveLabSection } from './components/InteractiveLabSection';
import { BibliographySection } from './components/BibliographySection';
import { Footer } from './components/Footer';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import type { HistoricalImage } from './data/historyContent';

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
        <InteractiveLabSection />
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

