import React, { useState, useRef } from 'react';
import { implementationData } from '../data/historyContent';
import type { TimelineEvent } from '../data/historyContent';
import { TimelineModal } from './TimelineModal';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import './TimelineSection.css';

export const TimelineSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [activeTimelineTab, setActiveTimelineTab] = useState<string>(implementationData.timeline[0].id);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const timelineItems = implementationData.timeline;
  const activeIndex = Math.max(
    0,
    timelineItems.findIndex((t) => t.id === activeTimelineTab)
  );
  const currentTimelineEvent = timelineItems[activeIndex] || timelineItems[0];

  const selectTimelineByIndex = (nextIndex: number) => {
    const bounded = Math.max(0, Math.min(timelineItems.length - 1, nextIndex));
    const targetItem = timelineItems[bounded];
    if (!targetItem) return;
    setActiveTimelineTab(targetItem.id);

    const track = trackRef.current;
    const node = document.getElementById(`timeline-node-${targetItem.id}`);
    if (track && node) {
      const targetLeft = node.offsetLeft - track.clientWidth / 2 + node.clientWidth / 2;
      track.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
    }
  };

  return (
    <section id="timeline-section" className="section timeline-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Bagian III: Kronik Sejarah</span>
          <h2 className="section-title">Timeline Interaktif Cultuurstelsel</h2>
          <p className="section-subtitle">
            Deretan peristiwa kunci, titik balik kebijakan kolonial, hingga penghapusan sistem (1830–1915)
          </p>
          <div className="ornament-divider">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
        </div>

        {/* Interactive Timeline Container */}
        <div className="timeline-interactive-container">
          <div className="timeline-section-header">
            <div className="timeline-badge-pill">
              <Calendar size={16} />
              <span>Garis Waktu Peristiwa Kunci</span>
            </div>
            <h3 className="timeline-main-title">Evolusi Sejarah Tanam Paksa di Jawa & Nusantara</h3>
            <p className="timeline-main-subtitle">
              Geser atau ketuk simpul tahun di bawah untuk melihat ringkasan, atau gunakan tombol Sebelumnya/Berikutnya.
            </p>
          </div>

          {/* Interactive Timeline Horizontal Stepper / Nodes */}
          <div
            className="timeline-stepper-track"
            ref={trackRef}
            role="tablist"
            aria-label="Pilih Tahun Peristiwa"
          >
            {timelineItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeTimelineTab === item.id}
                id={`timeline-node-${item.id}`}
                className={`timeline-step-node ${activeTimelineTab === item.id ? 'active' : ''}`}
                onClick={() => selectTimelineByIndex(idx)}
              >
                <div className="step-circle">
                  <span className="step-year">{item.year}</span>
                </div>
                <span className="step-badge">{item.badge}</span>
              </button>
            ))}
          </div>

          {/* Featured Active Timeline Card */}
          <div className="parchment-card featured-timeline-card">
            {/* Quick Stepper Bar for Mobile & Desktop Ergonomics */}
            <div className="timeline-quick-nav-bar">
              <button
                type="button"
                className="timeline-nav-step-btn"
                onClick={() => selectTimelineByIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Peristiwa sebelumnya"
              >
                <ChevronLeft size={18} />
                <span>Sebelumnya</span>
              </button>

              <span className="timeline-step-counter" aria-live="polite">
                Peristiwa <strong>{activeIndex + 1}</strong> dari <strong>{timelineItems.length}</strong>
              </span>

              <button
                type="button"
                className="timeline-nav-step-btn"
                onClick={() => selectTimelineByIndex(activeIndex + 1)}
                disabled={activeIndex === timelineItems.length - 1}
                aria-label="Peristiwa berikutnya"
              >
                <span>Berikutnya</span>
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="featured-card-header">
              <div className="featured-year-box">
                <span className="featured-year-label">Tahun</span>
                <span className="featured-year-number">{currentTimelineEvent.year}</span>
              </div>
              <div className="featured-title-wrap">
                <span className="badge badge-gold">{currentTimelineEvent.badge}</span>
                <h4 className="featured-event-title">{currentTimelineEvent.title}</h4>
              </div>
            </div>

            <p className="featured-event-short-desc">{currentTimelineEvent.shortDesc}</p>

            <div className="featured-card-action">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setSelectedEvent(currentTimelineEvent)}
                id={`btn-detail-timeline-${currentTimelineEvent.id}`}
              >
                <span>Buka Dokumen Detail Peristiwa</span>
                <ArrowRight size={16} />
              </button>
              <span className="action-hint">*Termasuk telaah kronologis, tokoh terlibat, dan implikasi sistemik</span>
            </div>
          </div>
        </div>

        {/* Modal Dialog for Deep Dive Detail */}
        <TimelineModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      </div>
    </section>
  );
};
