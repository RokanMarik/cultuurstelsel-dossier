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
            <h3 id="timeline-modal-title" className="timeline-modal-heading">
              {event.title}
            </h3>
            <div className="timeline-modal-badges">
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
          <div className="timeline-modal-section">
            <h4 className="timeline-modal-subheading">
              Uraian Historis Lengkap
            </h4>
            {event.fullDesc.map((par, idx) => (
              <p key={idx} className="timeline-modal-paragraph">
                {par}
              </p>
            ))}
          </div>

          <div className="timeline-modal-impact-block">
            <h4 className="timeline-modal-impact-heading">
              <AlertCircle size={16} strokeWidth={1.5} />
              <span>Implikasi Struktural</span>
            </h4>
            <ul className="timeline-modal-impact-list">
              {event.impactPoints.map((pt, idx) => (
                <li key={idx} className="timeline-modal-impact-item">
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.5}
                    className="timeline-modal-check-icon"
                  />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {event.historicalFigures && event.historicalFigures.length > 0 && (
            <div className="timeline-modal-figures-block">
              <h4 className="timeline-modal-figures-heading">
                <Users size={15} strokeWidth={1.5} />
                <span>Tokoh Terkait</span>
              </h4>
              <div className="timeline-modal-figures-list">
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
