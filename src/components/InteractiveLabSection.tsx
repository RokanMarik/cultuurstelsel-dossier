import React, { useState, useMemo } from 'react';
import {
  spatialMarkersData,
  railwayLinesData,
  currencyConversionBenchmarks,
  unitConversionData,
  historicalDilemmasData,
  type SpatialMarker,
  type DilemmaChoice
} from '../data/historyContent';
import {
  Compass,
  Calculator,
  ShieldAlert,
  MapPin,
  Train,
  Flame,
  AlertTriangle,
  Layers,
  Coins,
  Scale,
  UserCheck,
  RotateCcw,
  BookOpen,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  FileText,
  ZoomIn
} from 'lucide-react';
import './InteractiveLabSection.css';

type LabTab = 'map' | 'calculator' | 'dilemma';
type MapFilter = 'all' | 'commodity' | 'famine' | 'resistance' | 'railway-hub';
type MapZoom = 1 | 1.5 | 2;

export const InteractiveLabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LabTab>('map');

  // --- State Tab 1: Peta Spasial ---
  const [mapFilter, setMapFilter] = useState<MapFilter>('all');
  const [selectedMarkerId, setSelectedMarkerId] = useState<string>('marker-priangan');
  const [mapZoom, setMapZoom] = useState<MapZoom>(1);

  // --- State Tab 2: Kalkulator Kolonial ---
  // Sub-alat A: Kurs Gulden
  const [guldenInput, setGuldenInput] = useState<number>(2.11);
  // Sub-alat B: Konversi Satuan
  const [unitType, setUnitType] = useState<string>('unit-bouw');
  const [unitInputVal, setUnitInputVal] = useState<number>(1);
  // Sub-alat C: Simulator Petani Jan Breman
  const [farmerLandBouw, setFarmerLandBouw] = useState<number>(0.5);
  const [selectedCrop, setSelectedCrop] = useState<'kopi' | 'tebu' | 'nila'>('nila');

  // --- State Tab 3: Skenario Dilema Sejarah ---
  const [activeScenarioId, setActiveScenarioId] = useState<string>('scenario-cirebon-1845');
  const [chosenOption, setChosenOption] = useState<Record<string, DilemmaChoice | null>>({
    'scenario-cirebon-1845': null,
    'scenario-priangan-1840': null,
    'scenario-parliament-1860': null
  });

  const selectedMarker: SpatialMarker = useMemo(() => {
    return spatialMarkersData.find((m) => m.id === selectedMarkerId) || spatialMarkersData[0];
  }, [selectedMarkerId]);

  const filteredMarkers = useMemo(() => {
    if (mapFilter === 'all') return spatialMarkersData;
    return spatialMarkersData.filter((m) => m.category === mapFilter);
  }, [mapFilter]);

  const handleFilterChange = (nextFilter: MapFilter) => {
    setMapFilter(nextFilter);
    if (nextFilter !== 'all' && selectedMarker.category !== nextFilter) {
      const firstMatch = spatialMarkersData.find((m) => m.category === nextFilter);
      if (firstMatch) setSelectedMarkerId(firstMatch.id);
    }
  };

  const getMarkerColor = (category: SpatialMarker['category']) => {
    switch (category) {
      case 'commodity':
        return '#2e7d32';
      case 'famine':
        return '#c62828';
      case 'resistance':
        return '#e65100';
      default:
        return '#1565c0';
    }
  };

  const activeScenario = useMemo(() => {
    return historicalDilemmasData.find((s) => s.id === activeScenarioId) || historicalDilemmasData[0];
  }, [activeScenarioId]);

  // Kalkulasi Kurs Gulden ke IDR Modern (Base: 1 Gulden 1850 ≈ Rp 175.000 daya beli beras)
  const guldenToIdrRate = 175000;
  const calculatedModernIdr = useMemo(() => {
    return Math.round(guldenInput * guldenToIdrRate);
  }, [guldenInput]);

  // Kalkulasi Satuan Kolonial
  const selectedUnit = useMemo(() => {
    return unitConversionData.find((u) => u.id === unitType) || unitConversionData[0];
  }, [unitType]);

  const convertedMetricValue = useMemo(() => {
    return (unitInputVal * selectedUnit.baseMultiplier).toLocaleString('id-ID');
  }, [unitInputVal, selectedUnit]);

  const simResult = useMemo(() => {
    const statutoryDays = 66; // Staatsblad 1834: max 66 hari per tahun
    let actualDays = 0;
    let plantloonPerBouw = 0;
    let landrentTax = 0;
    let cropYieldStr = '';
    let cropBurdenDesc = '';

    if (selectedCrop === 'kopi') {
      actualDays = Math.round(farmerLandBouw * 180 + 30);
      plantloonPerBouw = 14;
      landrentTax = 10;
      cropYieldStr = `${Math.round(farmerLandBouw * 14)} Pikul Kopi Mentah`;
      cropBurdenDesc = 'Wajib tinggal di bivak rimba pegunungan selama 6–8 bulan dan memikul hasil panen ke gudang distrik.';
    } else if (selectedCrop === 'tebu') {
      actualDays = Math.round(farmerLandBouw * 150 + 40);
      plantloonPerBouw = 32;
      landrentTax = 22;
      cropYieldStr = `${Math.round(farmerLandBouw * 350)} Pikul Batang Tebu`;
      cropBurdenDesc = 'Menuntut giliran kerja malam hari di pabrik gula dan penyitaan sawah padi terbaik.';
    } else {
      actualDays = Math.round(farmerLandBouw * 210);
      plantloonPerBouw = 12;
      landrentTax = 15;
      cropYieldStr = `${Math.round(farmerLandBouw * 80)} Pon Pasta Nila Kering`;
      cropBurdenDesc = 'Pekerjaan merendam daun nila di bak fermentasi memicu penyakit kulit dan air limbah meracuni irigasi padi.';
    }

    const grossEarning = Math.round(farmerLandBouw * plantloonPerBouw * 100) / 100;
    const taxDeduction = Math.round(farmerLandBouw * landrentTax * 100) / 100;
    const netBalance = Math.round((grossEarning - taxDeduction) * 100) / 100;
    const isDeficit = netBalance < 0;

    return {
      actualDays,
      statutoryDays,
      excessDays: Math.max(0, actualDays - statutoryDays),
      grossEarning,
      taxDeduction,
      netBalance,
      isDeficit,
      cropYieldStr,
      cropBurdenDesc
    };
  }, [farmerLandBouw, selectedCrop]);

  return (
    <section id="interactive-lab" className="interactive-lab-section">
      <div className="interactive-lab-container">
        {/* Section Header */}
        <div className="lab-header">
          <div className="lab-badge">
            <Compass size={14} className="lab-badge-icon" />
            <span>ARSIP EKSPLORATIF & SIMULASI</span>
          </div>
          <h2 className="lab-title">Laboratorium Sejarah Interaktif</h2>
          <p className="lab-subtitle">
            Instrumen investigasi spasial, kalkulator komparasi sosio-ekonomi, dan simulasi pengambilan
            keputusan dilema moral para aktor sejarah Sistem Tanam Paksa (1830–1870).
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="lab-tab-nav-wrapper">
          <div className="lab-tab-nav" role="tablist" aria-label="Modul Laboratorium Sejarah">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'map'}
              className={`lab-tab-btn ${activeTab === 'map' ? 'active' : ''}`}
              onClick={() => setActiveTab('map')}
            >
              <Compass size={18} />
              <span>1. Peta Kartografi Spasial</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'calculator'}
              className={`lab-tab-btn ${activeTab === 'calculator' ? 'active' : ''}`}
              onClick={() => setActiveTab('calculator')}
            >
              <Calculator size={18} />
              <span>2. Kalkulator & Komparator Kolonial</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'dilemma'}
              className={`lab-tab-btn ${activeTab === 'dilemma' ? 'active' : ''}`}
              onClick={() => setActiveTab('dilemma')}
            >
              <ShieldAlert size={18} />
              <span>3. Simulasi Dilema Sejarah</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PETA KARTOGRAFI SPASIAL */}
        {activeTab === 'map' && (
          <div className="lab-panel lab-map-panel">
            {/* Filter Bar */}
            <div className="map-filter-bar">
              <div className="filter-label">
                <Layers size={16} />
                <span>Lapisan Peta (<em>Layer Filter</em>):</span>
              </div>
              <div className="filter-buttons" role="group" aria-label="Filter lapisan peta">
                <button
                  type="button"
                  className={`map-filter-btn ${mapFilter === 'all' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('all')}
                >
                  Semua Simpul ({spatialMarkersData.length})
                </button>
                <button
                  type="button"
                  className={`map-filter-btn ${mapFilter === 'commodity' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('commodity')}
                >
                  <MapPin size={14} /> Sentra Komoditas
                </button>
                <button
                  type="button"
                  className={`map-filter-btn ${mapFilter === 'famine' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('famine')}
                >
                  <AlertTriangle size={14} /> Titik Kelaparan
                </button>
                <button
                  type="button"
                  className={`map-filter-btn ${mapFilter === 'resistance' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('resistance')}
                >
                  <Flame size={14} /> Aksi Resistensi
                </button>
                <button
                  type="button"
                  className={`map-filter-btn ${mapFilter === 'railway-hub' ? 'active' : ''}`}
                  onClick={() => handleFilterChange('railway-hub')}
                >
                  <Train size={14} /> Rel Kereta & Hub
                </button>
              </div>
            </div>

            {/* Map Grid: SVG + Detail Panel */}
            <div className="map-layout-grid">
              {/* SVG Canvas Container */}
              <div className="map-canvas-wrapper">
                <div className="map-canvas-header">
                  <div className="map-header-titles">
                    <span className="map-meta-title">KAART VAN JAVA EN ONDERHOORIGHEDEN (1830–1870)</span>
                    <span className="map-meta-scale">Skala Kartografis Historis • Geser saat diperbesar</span>
                  </div>

                  {/* Zoom Controls (1x / 1.5x / 2x) */}
                  <div className="map-zoom-controls" role="group" aria-label="Perbesaran Peta">
                    <span className="zoom-label">
                      <ZoomIn size={13} /> Zoom:
                    </span>
                    {([1, 1.5, 2] as MapZoom[]).map((z) => (
                      <button
                        key={z}
                        type="button"
                        className={`map-zoom-btn ${mapZoom === z ? 'active' : ''}`}
                        onClick={() => setMapZoom(z)}
                        aria-pressed={mapZoom === z}
                      >
                        {z}x
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scrollable & Pannable SVG Viewport */}
                <div className="map-viewport-scroll">
                  <svg
                    viewBox="0 0 1000 450"
                    className={`vintage-svg-map zoom-${String(mapZoom).replace('.', '-')}`}
                    style={{
                      width: `${mapZoom * 100}%`,
                      minWidth: mapZoom === 1 ? '540px' : `${Math.round(mapZoom * 620)}px`
                    }}
                    aria-label="Peta Interaktif Sebaran Cultuurstelsel di Pulau Jawa dan Kepulauan"
                  >
                    {/* Background Parchment Tint */}
                    <rect width="1000" height="450" fill="transparent" />

                    {/* Grid Lines Kartografi Antik */}
                    <g className="map-grid-lines" stroke="#c8963e" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.35">
                      <line x1="50" y1="50" x2="950" y2="50" />
                      <line x1="50" y1="150" x2="950" y2="150" />
                      <line x1="50" y1="250" x2="950" y2="250" />
                      <line x1="50" y1="350" x2="950" y2="350" />
                      <line x1="150" y1="30" x2="150" y2="420" />
                      <line x1="300" y1="30" x2="300" y2="420" />
                      <line x1="450" y1="30" x2="450" y2="420" />
                      <line x1="600" y1="30" x2="600" y2="420" />
                      <line x1="750" y1="30" x2="750" y2="420" />
                      <line x1="900" y1="30" x2="900" y2="420" />
                    </g>

                    {/* Label Lintang & Bujur */}
                    <text x="55" y="45" fill="#d19847" fontSize="10" fontFamily="Cinzel" opacity="0.72">6° Z.B. (Zuid)</text>
                    <text x="55" y="245" fill="#d19847" fontSize="10" fontFamily="Cinzel" opacity="0.72">7° Z.B.</text>
                    <text x="55" y="345" fill="#d19847" fontSize="10" fontFamily="Cinzel" opacity="0.72">8° Z.B.</text>
                    <text x="145" y="435" fill="#d19847" fontSize="10" fontFamily="Cinzel" opacity="0.72">106° O.L.</text>
                    <text x="445" y="435" fill="#d19847" fontSize="10" fontFamily="Cinzel" opacity="0.72">110° O.L.</text>
                    <text x="745" y="435" fill="#d19847" fontSize="10" fontFamily="Cinzel" opacity="0.72">113° O.L.</text>

                    {/* Siluet Kepulauan Luar Jawa (Sumatera & Sulawesi/Maluku) */}
                    <path
                      d="M 40 40 Q 70 80 95 130 Q 80 160 50 200 Q 30 150 20 90 Z"
                      className="map-island-outer"
                    />
                    <text x="45" y="105" className="map-outer-label">Sumatra (Minangkabau)</text>

                    {/* Sulawesi & Maluku Siluet */}
                    <path
                      d="M 870 50 Q 890 85 910 110 Q 880 130 870 160"
                      className="map-island-outer"
                      fill="none"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    <text x="850" y="45" className="map-outer-label">Minahasa & Maluku</text>

                    {/* Garis Pesisir Pulau Jawa */}
                    <path
                      d="M 130 185
                         C 150 170, 180 180, 210 185
                         C 240 180, 270 190, 310 195
                         C 340 190, 380 180, 430 185
                         C 480 180, 520 175, 560 180
                         C 590 170, 620 165, 660 175
                         C 690 185, 730 185, 760 195
                         C 790 205, 830 215, 870 230
                         C 885 245, 875 270, 850 280
                         C 810 275, 770 280, 730 270
                         C 690 260, 650 275, 600 280
                         C 560 270, 510 285, 470 290
                         C 420 280, 380 285, 330 285
                         C 290 280, 250 290, 210 290
                         C 170 280, 140 270, 120 250
                         C 105 230, 115 200, 130 185 Z"
                      className="map-java-landmass"
                    />

                    {/* Garis Pegunungan Pedalaman Jawa */}
                    <path
                      d="M 190 255 Q 240 235 280 250 Q 350 240 420 255 Q 490 245 560 260 Q 640 245 720 255 Q 780 245 830 260"
                      fill="none"
                      stroke="#c8963e"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="2 8"
                      opacity="0.6"
                    />

                    {/* Jalur Kereta Api Kolonial (Staatsspoorwegen / NIS) */}
                    <g className="railway-group">
                      {railwayLinesData.map((rail) => (
                        <path
                          key={rail.id}
                          d={rail.pathD}
                          className="map-railway-track"
                        />
                      ))}
                    </g>

                    {/* Mawar Kompas Antik (Compass Rose) */}
                    <g transform="translate(100, 340)" className="map-compass-rose">
                      <circle r="30" fill="none" stroke="#c8963e" strokeWidth="1" opacity="0.6" />
                      <line x1="0" y1="-38" x2="0" y2="38" stroke="#842323" strokeWidth="1.5" />
                      <line x1="-38" y1="0" x2="38" y2="0" stroke="#842323" strokeWidth="1.5" />
                      <polygon points="0,-35 5,-10 0,0 -5,-10" fill="#842323" />
                      <polygon points="0,35 5,10 0,0 -5,10" fill="#c8963e" />
                      <polygon points="35,0 10,5 0,0 10,-5" fill="#c8963e" />
                      <polygon points="-35,0 -10,5 0,0 -10,-5" fill="#c8963e" />
                      <text x="-4" y="-42" fill="#e5a93c" fontSize="11" fontWeight="bold" fontFamily="Cinzel">N</text>
                    </g>

                    {/* Marker Titik Geografis */}
                    {filteredMarkers.map((marker) => {
                      const isSelected = marker.id === selectedMarkerId;
                      const markerColor = getMarkerColor(marker.category);

                      return (
                        <g
                          key={marker.id}
                          transform={`translate(${marker.cx}, ${marker.cy})`}
                          className={`map-node ${isSelected ? 'selected' : ''}`}
                          onClick={() => setSelectedMarkerId(marker.id)}
                          role="button"
                          tabIndex={0}
                          aria-label={`Pilih lokasi ${marker.name}`}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setSelectedMarkerId(marker.id);
                            }
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          {/* Expanded transparent touch target (r="18") for finger accuracy */}
                          <circle r="18" fill="transparent" />

                          {/* Pulse effect saat terpilih */}
                          {isSelected && (
                            <circle
                              r="18"
                              fill="none"
                              stroke={markerColor}
                              strokeWidth="2"
                              className="marker-pulse-ring"
                            />
                          )}
                          <circle
                            r={isSelected ? '9.5' : '6.5'}
                            fill={markerColor}
                            stroke="#ffffff"
                            strokeWidth="2"
                            className="marker-dot"
                          />
                          {/* Label Kota / Karesidenan */}
                          <text
                            y={isSelected ? '-14' : '-10'}
                            textAnchor="middle"
                            className={`marker-label ${isSelected ? 'active-label' : ''}`}
                          >
                            {marker.name}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Quick-Select Location Chips for effortless Mobile/Tablet selection */}
                <div className="map-quick-chips-wrap">
                  <span className="quick-chips-title">Pilih Cepat Lokasi:</span>
                  <div className="map-quick-chips" role="tablist" aria-label="Pilih Cepat Titik Lokasi Peta">
                    {filteredMarkers.map((marker) => {
                      const isSelected = marker.id === selectedMarkerId;
                      return (
                        <button
                          key={marker.id}
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          className={`map-chip-btn ${isSelected ? 'active' : ''}`}
                          onClick={() => setSelectedMarkerId(marker.id)}
                        >
                          <span
                            className="chip-color-dot"
                            style={{ backgroundColor: getMarkerColor(marker.category) }}
                          />
                          <span>{marker.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Legend Bar */}
                <div className="map-legend-bar">
                  <div className="legend-item">
                    <span className="legend-dot dot-commodity" />
                    <span>Sentra Komoditas Wajib</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot dot-famine" />
                    <span>Tragedi Kelaparan / Krisis</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot dot-resistance" />
                    <span>Aksi Resistensi Petani</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot dot-railway" />
                    <span>Hub Pelabuhan & Rel Kereta Api</span>
                  </div>
                </div>
              </div>

              {/* Panel Detail Samping */}
              <div className="map-detail-panel" aria-live="polite">
                <div className="detail-panel-header">
                  <span className="detail-badge">{selectedMarker.badge}</span>
                  <span className="detail-period">{selectedMarker.period}</span>
                </div>

                <h3 className="detail-title">{selectedMarker.title}</h3>
                <h4 className="detail-residency">{selectedMarker.residency}</h4>

                <p className="detail-summary">{selectedMarker.summary}</p>

                {/* Komoditas Terkait */}
                {selectedMarker.historicalDetails.commodities && (
                  <div className="detail-commodities-tags">
                    <span className="tags-label">Komoditas Utama:</span>
                    <div className="tags-list">
                      {selectedMarker.historicalDetails.commodities.map((c, i) => (
                        <span key={i} className="commodity-tag">{c}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Statistik Kunci */}
                {selectedMarker.historicalDetails.statistics && (
                  <div className="detail-stat-card">
                    <div className="stat-card-title">
                      <TrendingUp size={15} />
                      <span>Data Arsip Kuantitatif:</span>
                    </div>
                    <p className="stat-card-text">{selectedMarker.historicalDetails.statistics}</p>
                  </div>
                )}

                {/* Catatan Kebijakan Van den Bosch */}
                <div className="detail-note-card">
                  <div className="note-card-title">
                    <FileText size={15} />
                    <span>Lensa Kebijakan Kolonial:</span>
                  </div>
                  <p className="note-card-text">{selectedMarker.historicalDetails.vanDenBoschPolicyNote}</p>
                </div>

                {/* Rujukan Arsip */}
                <div className="detail-archive-footer">
                  <BookOpen size={13} />
                  <span>Sumber: {selectedMarker.historicalDetails.archivalReference}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: KALKULATOR & KOMPARATOR KOLONIAL */}
        {activeTab === 'calculator' && (
          <div className="lab-panel lab-calc-panel">
            <div className="calc-submodules-grid">
              {/* Sub-Alat A: Kurs Gulden ke IDR Modern */}
              <div className="calc-card">
                <div className="calc-card-header">
                  <Coins className="calc-card-icon" size={20} />
                  <div>
                    <h3 className="calc-card-title">Konverter Kurs Gulden (1850) ⇄ IDR (2026)</h3>
                    <p className="calc-card-desc">Berdasarkan daya beli beras komparatif (ƒ 1 ≈ Rp 175.000,- nilai sekarang)</p>
                  </div>
                </div>

                <div className="calc-input-group">
                  <label htmlFor="gulden-input" className="calc-input-label">Nominal Uang Kolonial (Gulden / ƒ):</label>
                  <div className="input-with-symbol">
                    <span className="input-currency-symbol">ƒ</span>
                    <input
                      id="gulden-input"
                      type="number"
                      step="0.01"
                      min="0"
                      value={guldenInput}
                      onChange={(e) => setGuldenInput(parseFloat(e.target.value) || 0)}
                      className="calc-number-input"
                    />
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="calc-presets">
                  <span className="presets-label">Pintasan Kasus Sejarah:</span>
                  <div className="preset-buttons">
                    {currencyConversionBenchmarks.map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        className={`preset-btn ${guldenInput === b.guldenAmount ? 'active' : ''}`}
                        onClick={() => setGuldenInput(b.guldenAmount)}
                      >
                        {b.label} (ƒ {b.guldenAmount.toLocaleString('id-ID')})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hasil Konversi */}
                <div className="calc-result-box">
                  <span className="result-label">Estimasi Nilai Rupiah Hari Ini:</span>
                  <div className="result-value">Rp {calculatedModernIdr.toLocaleString('id-ID')}</div>
                  <p className="result-explanation">
                    {currencyConversionBenchmarks.find((b) => b.guldenAmount === guldenInput)
                      ?.disparityDescription ||
                      `Dengan kurs daya beli pangan historis, uang sejumlah ƒ ${guldenInput} bernilai setara dengan barang kebutuhan pokok senilai Rp ${calculatedModernIdr.toLocaleString('id-ID')} pada tahun 2026.`}
                  </p>
                </div>
              </div>

              {/* Sub-Alat B: Konverter Satuan Kolonial */}
              <div className="calc-card">
                <div className="calc-card-header">
                  <Scale className="calc-card-icon" size={20} />
                  <div>
                    <h3 className="calc-card-title">Konverter Satuan Ukuran Hindia Belanda</h3>
                    <p className="calc-card-desc">Konversi resmi ukuran tanah, bobot, dan sensus cacah era Tanam Paksa</p>
                  </div>
                </div>

                <div className="calc-input-group">
                  <label htmlFor="unit-type-select" className="calc-input-label">Pilih Satuan Kolonial:</label>
                  <select
                    id="unit-type-select"
                    value={unitType}
                    onChange={(e) => setUnitType(e.target.value)}
                    className="calc-select-input"
                  >
                    {unitConversionData.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.unitName} ({u.dutchNotation})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="calc-input-group">
                  <label htmlFor="unit-input-val" className="calc-input-label">Jumlah Satuan:</label>
                  <input
                    id="unit-input-val"
                    type="number"
                    step="0.1"
                    min="0"
                    value={unitInputVal}
                    onChange={(e) => setUnitInputVal(parseFloat(e.target.value) || 0)}
                    className="calc-number-input"
                  />
                </div>

                <div className="calc-result-box">
                  <span className="result-label">Ekuivalen Metrik Standar:</span>
                  <div className="result-value">
                    {unitInputVal} {selectedUnit.unitName.split(' ')[0]} = {convertedMetricValue}{' '}
                    {selectedUnit.unitCategory === 'luas'
                      ? 'Meter Persegi'
                      : selectedUnit.unitCategory === 'bobot'
                      ? 'Kilogram'
                      : 'Kepala Keluarga (Cacah)'}
                  </div>
                  <p className="result-explanation">{selectedUnit.historicalUsage}</p>
                </div>
              </div>
            </div>

            {/* Sub-Alat C: Simulator Beban Kerja Petani (Jan Breman Metric) */}
            <div className="farmer-simulator-section">
              <div className="sim-header">
                <UserCheck className="sim-icon" size={22} />
                <div>
                  <h3 className="sim-title">Simulator Beban Petani & Neraca Pajak (Jan Breman Metric)</h3>
                  <p className="sim-desc">
                    Hitung hari kerja riil yang dirampas kolonial dan apakah petani Anda untung atau justru
                    mengalami skandal "Nombok Pajak" (<em>deficit</em>).
                  </p>
                </div>
              </div>

              <div className="sim-controls-grid">
                {/* Luas Lahan Slider */}
                <div className="sim-control-box">
                  <div className="control-header">
                    <label htmlFor="land-size-slider">Luas Tanah Sawah Garapan Petani:</label>
                    <span className="control-val">{farmerLandBouw} Bouw ({(farmerLandBouw * 0.7096).toFixed(2)} Hektar)</span>
                  </div>
                  <input
                    id="land-size-slider"
                    type="range"
                    min="0.2"
                    max="2.0"
                    step="0.1"
                    value={farmerLandBouw}
                    onChange={(e) => setFarmerLandBouw(parseFloat(e.target.value))}
                    className="sim-slider"
                  />
                  <div className="slider-ticks">
                    <span>0.2 Bouw (Sempit)</span>
                    <span>1.0 Bouw (Sedang)</span>
                    <span>2.0 Bouw (Luas)</span>
                  </div>
                </div>

                {/* Jenis Tanaman Selector */}
                <div className="sim-control-box">
                  <span className="control-label-text">Komoditas Wajib yang Diperintahkan:</span>
                  <div className="crop-selector-btns">
                    <button
                      type="button"
                      className={`crop-btn ${selectedCrop === 'nila' ? 'active' : ''}`}
                      onClick={() => setSelectedCrop('nila')}
                    >
                      🌿 Nila / Indigo (Cirebon)
                    </button>
                    <button
                      type="button"
                      className={`crop-btn ${selectedCrop === 'tebu' ? 'active' : ''}`}
                      onClick={() => setSelectedCrop('tebu')}
                    >
                      🌾 Tebu / Gula (Pasuruan)
                    </button>
                    <button
                      type="button"
                      className={`crop-btn ${selectedCrop === 'kopi' ? 'active' : ''}`}
                      onClick={() => setSelectedCrop('kopi')}
                    >
                      ☕ Kopi Bivak (Priangan)
                    </button>
                  </div>
                </div>
              </div>

              {/* Output Metrik Simulator */}
              <div className="sim-metrics-results">
                <div className="metric-card">
                  <span className="metric-label">Hari Kerja Riil / Tahun</span>
                  <div className="metric-val highlight-amber">{simResult.actualDays} Hari</div>
                  <span className="metric-sub">
                    Batas Staatsblad: <strong>{simResult.statutoryDays} hari</strong> (Kelebihan {simResult.excessDays} hari rodi!)
                  </span>
                </div>

                <div className="metric-card">
                  <span className="metric-label">Taksiran Hasil Panen Wajib</span>
                  <div className="metric-val">{simResult.cropYieldStr}</div>
                  <span className="metric-sub">{simResult.cropBurdenDesc}</span>
                </div>

                <div className="metric-card">
                  <span className="metric-label">Upah Tebasan Panen (<em>Plantloon</em>)</span>
                  <div className="metric-val">ƒ {simResult.grossEarning.toFixed(2)}</div>
                  <span className="metric-sub">Harga beli sepihak pemerintah kolonial</span>
                </div>

                <div className="metric-card">
                  <span className="metric-label">Kewajiban Pajak Tanah (<em>Landrent</em>)</span>
                  <div className="metric-val">ƒ {simResult.taxDeduction.toFixed(2)}</div>
                  <span className="metric-sub">Pajak tetap ditagih tunai meski panen gagal</span>
                </div>

                <div className={`metric-card balance-card ${simResult.isDeficit ? 'card-deficit' : 'card-surplus'}`}>
                  <span className="metric-label">Neraca Bersih Petani</span>
                  <div className="metric-val">
                    {simResult.isDeficit ? `- ƒ ${Math.abs(simResult.netBalance).toFixed(2)}` : `+ ƒ ${simResult.netBalance.toFixed(2)}`}
                  </div>
                  <span className="metric-badge-status">
                    {simResult.isDeficit ? '⚠️ SKANDAL NOMBOK PAJAK' : '✓ SURPLUS MINIMAL'}
                  </span>
                  <p className="balance-note">
                    {simResult.isDeficit
                      ? 'Petani tidak menerima uang sepeser pun, justru harus berutang kepada lintah darat atau menggadaikan ternak untuk membayar sisa pajak tanah.'
                      : 'Petani menerima sisa upah tunai, namun waktu bercocok tanam padi tersita sehingga ancaman rawan pangan tetap membayangi.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SIMULASI SKENARIO DILEMA SEJARAH */}
        {activeTab === 'dilemma' && (
          <div className="lab-panel lab-dilemma-panel">
            {/* Scenario Switcher Header */}
            <div className="dilemma-selector-bar">
              <span className="dilemma-bar-label">Pilih Skenario Peran Sejarah:</span>
              <div className="dilemma-pills" role="tablist" aria-label="Pilih skenario peran sejarah">
                {historicalDilemmasData.map((scenario) => (
                  <button
                    key={scenario.id}
                    type="button"
                    role="tab"
                    aria-selected={activeScenarioId === scenario.id}
                    className={`dilemma-pill ${activeScenarioId === scenario.id ? 'active' : ''}`}
                    onClick={() => setActiveScenarioId(scenario.id)}
                  >
                    <span className="pill-year">{scenario.year}</span>
                    <span className="pill-role">{scenario.role} ({scenario.location})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scenario Content Card */}
            <div className="scenario-stage-card">
              <div className="stage-header">
                <div className="stage-meta">
                  <span className="stage-role-badge">{activeScenario.role}</span>
                  <span className="stage-location">{activeScenario.location} • Tahun {activeScenario.year}</span>
                </div>
                <h3 className="stage-title">{activeScenario.title}</h3>
              </div>

              <div className="stage-narrative-box">
                <p className="narrative-text">{activeScenario.situation}</p>
                <div className="narrative-context">
                  <AlertTriangle size={15} className="context-icon" />
                  <span><strong>Konteks Sejarah:</strong> {activeScenario.historicalContext}</span>
                </div>
              </div>

              {/* Pilihan Keputusan */}
              <div className="stage-choices-section">
                <h4 className="choices-heading">Ambil Keputusan Anda:</h4>
                <div className="choices-grid">
                  {activeScenario.choices.map((choice) => {
                    const isSelected = chosenOption[activeScenario.id]?.id === choice.id;
                    return (
                      <div
                        key={choice.id}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isSelected}
                        className={`choice-card ${isSelected ? 'selected' : ''}`}
                        onClick={() =>
                          setChosenOption((prev) => ({ ...prev, [activeScenario.id]: choice }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setChosenOption((prev) => ({ ...prev, [activeScenario.id]: choice }));
                          }
                        }}
                      >
                        <div className="choice-header">
                          <span className="choice-badge">{choice.choiceLabel}</span>
                          {isSelected && <CheckCircle2 size={18} className="choice-check-icon" />}
                        </div>
                        <p className="choice-text">{choice.actionText}</p>
                        <div className="choice-impact-indicators">
                          <span className={`impact-badge ${choice.consequences.peasantWelfare >= 0 ? 'pos' : 'neg'}`}>
                            Kesejahteraan Rakyat: {choice.consequences.peasantWelfare > 0 ? `+${choice.consequences.peasantWelfare}` : choice.consequences.peasantWelfare}
                          </span>
                          <span className={`impact-badge ${choice.consequences.colonialPressure >= 0 ? 'pos' : 'neg'}`}>
                            Hubungan Kolonial: {choice.consequences.colonialPressure > 0 ? `+${choice.consequences.colonialPressure}` : choice.consequences.colonialPressure}
                          </span>
                          <span className={`impact-badge ${choice.consequences.localStability >= 0 ? 'pos' : 'neg'}`}>
                            Stabilitas Wilayah: {choice.consequences.localStability > 0 ? `+${choice.consequences.localStability}` : choice.consequences.localStability}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Umpan Balik Keputusan & Epilog Arsip */}
              {chosenOption[activeScenario.id] && (
                <div className="decision-feedback-wrapper">
                  <div className="feedback-card">
                    <div className="feedback-header">
                      <ArrowRight size={18} />
                      <h4>Konsekuensi Langsung dari Tindakan Anda:</h4>
                    </div>
                    <p className="feedback-text">{chosenOption[activeScenario.id]?.immediateFeedback}</p>
                  </div>

                  <div className="epilogue-archive-card">
                    <div className="epilogue-header">
                      <BookOpen size={18} />
                      <h4>Fakta Sejarah Otentik (<em>What Actually Happened in History</em>):</h4>
                    </div>
                    <p className="epilogue-main">{activeScenario.historicalEpilogue.whatActuallyHappened}</p>
                    <p className="epilogue-outcome">
                      <strong>Hasil Jangka Panjang:</strong> {activeScenario.historicalEpilogue.historicalOutcome}
                    </p>
                    <div className="epilogue-source">
                      Rujukan Dokumen: <em>{activeScenario.historicalEpilogue.archivalSource}</em>
                    </div>
                  </div>

                  <div className="reset-choice-row">
                    <button
                      type="button"
                      className="reset-choice-btn"
                      onClick={() =>
                        setChosenOption((prev) => ({ ...prev, [activeScenario.id]: null }))
                      }
                    >
                      <RotateCcw size={14} /> Coba Opsi Keputusan Lain
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
