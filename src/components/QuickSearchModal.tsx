import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  QUICK_SEARCH_PRESETS,
  MONOGRAPH_SEARCH_INDEX,
  searchMonographCatalog,
  type MonographSearchEntry,
} from '../data/searchIndex';
import { navigateToMonographTarget } from '../utils/monographNavigator';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import './QuickSearchModal.css';

export interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  const results = useMemo(() => searchMonographCatalog(query, 20), [query]);
  const safeSelectedIndex = results.length > 0 ? Math.min(selectedIndex, results.length - 1) : 0;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSelectEntry = (entry: MonographSearchEntry) => {
    onClose();
    navigateToMonographTarget(entry.target);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }

    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (safeSelectedIndex + 1) % results.length;
      setSelectedIndex(next);
      const itemEl = document.getElementById(`quick-search-option-${next}`);
      itemEl?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (safeSelectedIndex - 1 + results.length) % results.length;
      setSelectedIndex(prev);
      const itemEl = document.getElementById(`quick-search-option-${prev}`);
      itemEl?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const activeEntry = results[safeSelectedIndex] ?? results[0];
      if (activeEntry) {
        handleSelectEntry(activeEntry);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay quick-search-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-search-dialog-title"
      id="quick-search-modal-overlay"
    >
      <div
        className="quick-search-dialog"
        onClick={(e) => e.stopPropagation()}
        id="quick-search-dialog-box"
      >
        {/* Header & Input Row */}
        <div className="quick-search-header">
          <div className="quick-search-title-row">
            <h3 id="quick-search-dialog-title" className="quick-search-heading">
              Indeks Pencarian Cepat Monograf
            </h3>
            <span className="quick-search-count tabular-nums">
              {MONOGRAPH_SEARCH_INDEX.length} Entri Arsip Lintas-Bab &amp; Tab
            </span>
          </div>

          <div className="quick-search-input-wrap">
            <Search size={18} strokeWidth={1.5} className="quick-search-input-icon" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Ketik kata kunci, tokoh, tahun, pasal, atau karesidenan (mis. Van Rees, Pasal 4, Cirebon, Bouw)..."
              className="quick-search-input"
              aria-label="Cari materi di seluruh bab dan tab"
              id="quick-search-input-field"
              autoComplete="off"
            />
            {query && (
              <button
                type="button"
                className="quick-search-clear-btn"
                onClick={() => {
                  setQuery('');
                  setSelectedIndex(0);
                  inputRef.current?.focus();
                }}
                aria-label="Bersihkan kata kunci"
              >
                Bersihkan
              </button>
            )}
            <button
              type="button"
              className="modal-close-btn quick-search-close-btn"
              onClick={onClose}
              aria-label="Tutup Pencarian"
              id="quick-search-close-button"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Preset Quick Topics for Q&A */}
          <div className="quick-search-presets" role="group" aria-label="Kata kunci populer">
            <span className="preset-group-label">Topik Cepat:</span>
            {QUICK_SEARCH_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                className={`quick-preset-chip ${
                  query.toLowerCase() === preset.query.toLowerCase() ? 'active' : ''
                }`}
                onClick={() => {
                  setQuery(preset.query);
                  setSelectedIndex(0);
                  inputRef.current?.focus();
                }}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Ledger List (Flat Hairline Rows — Zero Nested Cards) */}
        <div className="quick-search-body">
          {results.length === 0 ? (
            <div className="quick-search-empty">
              <p className="empty-primary">
                Tidak ditemukan arsip untuk kata kunci <strong>“{query}”</strong>.
              </p>
              <p className="empty-secondary">
                Coba gunakan istilah seperti <em>Batig Slot</em>, <em>Staatsblad</em>, <em>Breman</em>,{' '}
                <em>Priangan</em>, <em>Cirebon</em>, <em>Nila</em>, atau <em>Van Rees</em>.
              </p>
            </div>
          ) : (
            <ul
              ref={listRef}
              className="quick-search-results-list"
              role="listbox"
              aria-label="Hasil pencarian arsip"
            >
              {results.map((item, idx) => {
                const isSelected = idx === safeSelectedIndex;
                return (
                  <li
                    key={item.id}
                    id={`quick-search-option-${idx}`}
                    role="option"
                    aria-selected={isSelected}
                    className={`quick-search-result-row ${isSelected ? 'selected' : ''}`}
                  >
                    <button
                      type="button"
                      className="quick-search-result-btn"
                      onClick={() => handleSelectEntry(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                    >
                      <div className="result-main-col">
                        <div className="result-meta-line">
                          <span className="result-section-path">{item.sectionLabel}</span>
                          <span className="result-meta-dot" aria-hidden="true">·</span>
                          <span className="result-category-tag">{item.category}</span>
                          {item.badge && (
                            <span className="badge badge-gold tabular-nums">{item.badge}</span>
                          )}
                        </div>
                        <h4 className="result-title">{item.title}</h4>
                        <p className="result-snippet">{item.snippet}</p>
                      </div>
                      <span className="result-action-indicator" aria-hidden="true">
                        <span>Buka</span>
                        <ArrowRight size={15} strokeWidth={1.5} />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer Keyboard Hints */}
        <div className="quick-search-footer">
          <div className="kb-hint-group">
            <span className="kb-hint-item">
              <kbd className="kb-key tabular-nums">↑</kbd>
              <kbd className="kb-key tabular-nums">↓</kbd>
              <span>Pilih Arsip</span>
            </span>
            <span className="kb-hint-item">
              <kbd className="kb-key">
                <CornerDownLeft size={12} strokeWidth={1.5} />
              </kbd>
              <span>Buka Bab &amp; Tab</span>
            </span>
            <span className="kb-hint-item">
              <kbd className="kb-key">Esc</kbd>
              <span>Tutup</span>
            </span>
          </div>
          <span className="quick-search-footer-note tabular-nums">
            Menampilkan {results.length} hasil teratas
          </span>
        </div>
      </div>
    </div>
  );
};

