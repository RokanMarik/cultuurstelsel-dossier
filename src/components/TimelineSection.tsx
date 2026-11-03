import React, { useState, useRef } from 'react';
import { implementationData } from '../data/historyContent';
import type { TimelineEvent } from '../data/historyContent';
import { TimelineModal } from './TimelineModal';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
        {/* Monograph 2-Column Section Header */}
        <div className="section-header">
          <h2 className="section-title">Kronik Sejarah Cultuurstelsel (1830–1915)</h2>
          <p className="section-subtitle">
            Deretan peristiwa kunci, titik balik kebijakan kolonial, hingga penghapusan sistem tanam wajib di Jawa dan Nusantara
          </p>
        </div>

        {/* Open Horizontal Timeline Track + Single Active Sheet (Zero Nested Cards) */}
        <div className="timeline-open-workspace">
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
                <span className="step-year-box tabular-nums">{item.year}</span>
                <span className="step-badge">{item.badge}</span>
              </button>
            ))}
          </div>

          <article className="parchment-card featured-timeline-card">
            <div className="timeline-quick-nav-bar">
              <button
                type="button"
                className="timeline-nav-step-btn"
                onClick={() => selectTimelineByIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Peristiwa sebelumnya"
              >
                <ChevronLeft size={17} strokeWidth={1.5} />
                <span>Sebelumnya</span>
              </button>

              <span className="timeline-step-counter tabular-nums" aria-live="polite">
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
                <ChevronRight size={17} strokeWidth={1.5} />
              </button>
            </div>

            <div className="featured-card-header">
              <div className="featured-year-box">
                <span className="featured-year-number tabular-nums">{currentTimelineEvent.year}</span>
                <span className="featured-year-label">Tahun arsip</span>
              </div>
              <div className="featured-title-wrap">
                <h3 className="featured-event-title">{currentTimelineEvent.title}</h3>
                <span className="badge badge-gold">{currentTimelineEvent.badge}</span>
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
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
              <span className="action-hint">
                Memuat uraian kronologis, tokoh terlibat, dan implikasi struktural
              </span>
            </div>
          </article>
        </div>

        <TimelineModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      </div>
    </section>
  );
};
