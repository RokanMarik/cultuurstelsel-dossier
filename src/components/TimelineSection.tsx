import React, { useState } from 'react';
import { implementationData } from '../data/historyContent';
import type { TimelineEvent } from '../data/historyContent';
import { TimelineModal } from './TimelineModal';
import { Calendar, ArrowRight } from 'lucide-react';
import './TimelineSection.css';

export const TimelineSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [activeTimelineTab, setActiveTimelineTab] = useState<string>(implementationData.timeline[0].id);

  const currentTimelineEvent = implementationData.timeline.find((t) => t.id === activeTimelineTab) || implementationData.timeline[0];

  return (
    <section id="timeline-section" className="section timeline-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Kronik Sejarah</span>
          <h2 className="section-title">Timeline Interaktif Cultuurstelsel</h2>
          <p className="section-subtitle">
            Deretan peristiwa kunci, titik balik kebijakan kolonial, hingga penghapusan sistem (1830–1870)
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
            <h3 className="timeline-main-title">Evolusi 4 Dekade Tanam Paksa di Jawa</h3>
            <p className="timeline-main-subtitle">
              Klik pada simpul tahun di bawah untuk melihat ringkasan, lalu klik "Buka Dokumen Detail" untuk telaah mendalam.
            </p>
          </div>

          {/* Interactive Timeline Horizontal Stepper / Nodes */}
          <div className="timeline-stepper-track">
            {implementationData.timeline.map((item) => (
              <button
                key={item.id}
                id={`timeline-node-${item.id}`}
                className={`timeline-step-node ${activeTimelineTab === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTimelineTab(item.id);
                  setSelectedEvent(item);
                }}
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
