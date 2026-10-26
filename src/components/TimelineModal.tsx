import React, { useEffect } from 'react';
import type { TimelineEvent } from '../data/historyContent';
import { X, Calendar, Users, AlertCircle, CheckCircle2 } from 'lucide-react';

interface TimelineModalProps {
  event: TimelineEvent | null;
  onClose: () => void;
}

export const TimelineModal: React.FC<TimelineModalProps> = ({ event, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (event) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose} id="timeline-modal-overlay">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        id="timeline-modal-box"
      >
        <div className="modal-header">
          <div>
            <div className="badge badge-crimson" style={{ marginBottom: '0.4rem' }}>
              <Calendar size={13} />
              <span>Tahun {event.year}</span>
            </div>
            <h3 style={{ fontSize: '1.45rem', color: 'var(--ink-primary)' }}>{event.title}</h3>
            <span style={{ fontSize: '0.825rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {event.badge}
            </span>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose} 
            aria-label="Tutup Dialog"
            id="modal-close-button"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Main Description Paragraphs */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Ulasan Historis Lengkap:
            </h4>
            {event.fullDesc.map((par, idx) => (
              <p key={idx} style={{ fontSize: '0.975rem', lineHeight: '1.75', marginBottom: '0.75rem', color: 'var(--ink-secondary)' }}>
                {par}
              </p>
            ))}
          </div>

          {/* Impact Points */}
          <div style={{ marginBottom: '1.5rem', backgroundColor: 'var(--bg-parchment-accent)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-crimson)', fontWeight: 700, marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <AlertCircle size={16} />
              Implikasi Signifikan:
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {event.impactPoints.map((pt, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--ink-secondary)' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--accent-gold)', marginTop: '0.2rem', flexShrink: 0 }} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Historical Figures */}
          {event.historicalFigures && event.historicalFigures.length > 0 && (
            <div>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Users size={15} />
                Tokoh Berpengaruh:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {event.historicalFigures.map((fig, idx) => (
                  <span key={idx} className="badge badge-verdigris">
                    {fig}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
