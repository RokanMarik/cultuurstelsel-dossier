import React, { useEffect } from 'react';
import type { HistoricalImage } from '../data/historyContent';
import { X, ZoomIn, Landmark } from 'lucide-react';
import './ImageLightboxModal.css';

export interface ImageLightboxModalProps {
  image: HistoricalImage | null;
  title?: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  image,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      id="image-lightbox-overlay"
    >
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        id="image-lightbox-box"
      >
        {/* Close Button */}
        <button
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Tutup Tampilan Gambar"
          id="lightbox-close-button"
        >
          <X size={22} />
        </button>

        {/* Image Frame Container */}
        <div className="lightbox-image-wrap">
          <img
            src={image.src}
            alt={image.alt}
            className="lightbox-image"
            decoding="async"
          />
        </div>

        {/* Archival Metadata Panel */}
        <div className="lightbox-caption-panel">
          <div className="lightbox-caption-header">
            <div className="lightbox-tag">
              <ZoomIn size={13} />
              <span>Arsip Sejarah Otentik</span>
            </div>
            {title && (
              <h3 className="lightbox-title" id="lightbox-title">
                {title}
              </h3>
            )}
          </div>

          <p className="lightbox-caption-text">{image.caption}</p>

          <div className="lightbox-source-badge">
            <Landmark size={14} className="source-icon" />
            <span className="source-label">Sumber Arsip Resmi:</span>
            <span className="source-value">{image.archiveSource}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
