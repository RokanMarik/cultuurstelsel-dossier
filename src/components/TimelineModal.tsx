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
        role="dialog"
        aria-modal="true"
        aria-labelledby="timeline-modal-title"
      >
        <div className="modal-header">
          <div>
            <h3 id="timeline-modal-title" style={{ fontSize: '1.375rem', color: 'var(--ink-primary)', marginBottom: '0.5rem' }}>
              {event.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge badge-crimson tabular-nums">
                <Calendar size={13} strokeWidth={1.5} />
                <span>Tahun {event.year}</span>
              </span>
              <span className="badge badge-gold">{event.badge}</span>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Tutup Dialog"
            id="modal-close-button"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--ink-primary)', marginBottom: '0.625rem' }}>
              Uraian Historis Lengkap
            </h4>
            {event.fullDesc.map((par, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.72',
                  marginBottom: '0.75rem',
                  color: 'var(--ink-secondary)',
                }}
              >
                {par}
              </p>
            ))}
          </div>

          <div
            style={{
              marginBottom: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <h4
              style={{
                fontSize: '1rem',
                color: 'var(--accent-crimson)',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <AlertCircle size={16} strokeWidth={1.5} />
              <span>Implikasi Struktural</span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
              {event.impactPoints.map((pt, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--ink-secondary)',
                  }}
                >
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.5}
                    style={{ color: 'var(--accent-gold)', marginTop: '0.2rem', flexShrink: 0 }}
                  />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {event.historicalFigures && event.historicalFigures.length > 0 && (
            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              <h4
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--ink-primary)',
                  marginBottom: '0.625rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Users size={15} strokeWidth={1.5} />
                <span>Tokoh Terkait</span>
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
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
