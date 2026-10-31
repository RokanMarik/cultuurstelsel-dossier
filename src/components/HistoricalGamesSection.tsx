import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  CROSSWORD_ROWS,
  CROSSWORD_COLS,
  KEYBOARD_ROWS,
  crosswordWordsData,
  buildCrosswordGridMeta,
  quizQuestionsData,
  quizRankTiersData,
  type CrosswordDirection,
  type CrosswordWord,
} from '../data/gamesContent';
import {
  Gamepad2,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ArrowLeftRight,
  Delete,
  Award,
  Newspaper,
  ScrollText,
  Flame,
  Trophy,
  BookOpen,
  Scale,
  FileCheck2,
  Copy,
  Check,
} from 'lucide-react';
import './HistoricalGamesSection.css';

type GameTab = 'tts' | 'quiz';

const TTS_STORAGE_KEY = 'cultuurstelsel_tts_v1';
const QUIZ_BEST_STORAGE_KEY = 'cultuurstelsel_quiz_best_v1';
const MAX_HINTS = 3;
const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

interface SavedTtsState {
  letters: Record<string, string>;
  hintsLeft: number;
}

function loadSavedTtsState(): SavedTtsState {
  try {
    const raw = window.localStorage.getItem(TTS_STORAGE_KEY);
    if (!raw) return { letters: {}, hintsLeft: MAX_HINTS };
    const parsed = JSON.parse(raw) as Partial<SavedTtsState>;
    const letters =
      parsed.letters && typeof parsed.letters === 'object' ? parsed.letters : {};
    const hintsLeft =
      typeof parsed.hintsLeft === 'number'
        ? Math.max(0, Math.min(MAX_HINTS, parsed.hintsLeft))
        : MAX_HINTS;
    return { letters, hintsLeft };
  } catch {
    return { letters: {}, hintsLeft: MAX_HINTS };
  }
}

function loadBestQuizScore(): number {
  try {
    const raw = window.localStorage.getItem(QUIZ_BEST_STORAGE_KEY);
    if (!raw) return 0;
    const val = Number(raw);
    return Number.isFinite(val) && val > 0 ? Math.floor(val) : 0;
  } catch {
    return 0;
  }
}

function getWordCellKeys(word: CrosswordWord): string[] {
  const dr = word.direction === 'down' ? 1 : 0;
  const dc = word.direction === 'across' ? 1 : 0;
  const keys: string[] = [];
  for (let i = 0; i < word.answer.length; i++) {
    keys.push(`${word.row + dr * i}-${word.col + dc * i}`);
  }
  return keys;
}

export const HistoricalGamesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GameTab>('tts');

  // ==========================================
  // STATE TAB 1: TEKA-TEKI SILANG (TTS)
  // ==========================================
  const gridMeta = useMemo(() => buildCrosswordGridMeta(), []);
  const cellMap = useMemo(() => {
    const map = new Map<string, NonNullable<(typeof gridMeta)[number][number]>>();
    for (const row of gridMeta) {
      for (const cell of row) {
        if (cell) map.set(cell.key, cell);
      }
    }
    return map;
  }, [gridMeta]);

  const initialTts = useMemo(() => loadSavedTtsState(), []);
  const [userLetters, setUserLetters] = useState<Record<string, string>>(initialTts.letters);
  const [hintsLeft, setHintsLeft] = useState<number>(initialTts.hintsLeft);
  const [activeCellKey, setActiveCellKey] = useState<string>('0-4');
  const [direction, setDirection] = useState<CrosswordDirection>('across');
  const [wrongCells, setWrongCells] = useState<Record<string, boolean>>({});
  const [ttsBanner, setTtsBanner] = useState<{
    title: string;
    text: string;
    tone: 'solved' | 'hint' | 'check';
  } | null>(null);

  const cellRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    try {
      const payload: SavedTtsState = { letters: userLetters, hintsLeft };
      window.localStorage.setItem(TTS_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Abaikan jika mode privat menolak localStorage
    }
  }, [userLetters, hintsLeft]);

  const computeSolvedIds = (lettersMap: Record<string, string>): Set<string> => {
    const set = new Set<string>();
    for (const word of crosswordWordsData) {
      const keys = getWordCellKeys(word);
      const isComplete = keys.every((k, idx) => lettersMap[k] === word.answer[idx]);
      if (isComplete) set.add(word.id);
    }
    return set;
  };

  const solvedWordIds = useMemo(() => computeSolvedIds(userLetters), [userLetters]);

  const solvedCellKeys = useMemo(() => {
    const set = new Set<string>();
    for (const word of crosswordWordsData) {
      if (solvedWordIds.has(word.id)) {
        for (const key of getWordCellKeys(word)) {
          set.add(key);
        }
      }
    }
    return set;
  }, [solvedWordIds]);

  const activeWord: CrosswordWord = useMemo(() => {
    const cell = cellMap.get(activeCellKey);
    if (cell) {
      const preferredId = direction === 'across' ? cell.acrossWordId : cell.downWordId;
      const fallbackId = cell.acrossWordId ?? cell.downWordId;
      const resolvedId = preferredId ?? fallbackId;
      const found = crosswordWordsData.find((w) => w.id === resolvedId);
      if (found) return found;
    }
    return crosswordWordsData[0];
  }, [activeCellKey, direction, cellMap]);

  const activeWordCellKeys = useMemo(() => new Set(getWordCellKeys(activeWord)), [activeWord]);

  const acrossWords = useMemo(
    () => crosswordWordsData.filter((w) => w.direction === 'across'),
    []
  );
  const downWords = useMemo(
    () => crosswordWordsData.filter((w) => w.direction === 'down'),
    []
  );

  const focusCellButton = (key: string) => {
    setActiveCellKey(key);
    requestAnimationFrame(() => {
      cellRefs.current[key]?.focus({ preventScroll: true });
    });
  };

  const selectWord = (word: CrosswordWord) => {
    setDirection(word.direction);
    const keys = getWordCellKeys(word);
    const firstUnsolvedKey =
      keys.find((k, idx) => userLetters[k] !== word.answer[idx]) ?? keys[0];
    focusCellButton(firstUnsolvedKey);
  };

  const stepActiveClue = (delta: -1 | 1) => {
    const currentIdx = crosswordWordsData.findIndex((w) => w.id === activeWord.id);
    const nextIdx =
      (currentIdx + delta + crosswordWordsData.length) % crosswordWordsData.length;
    selectWord(crosswordWordsData[nextIdx]);
  };

  const handleCellClick = (key: string) => {
    const cell = cellMap.get(key);
    if (!cell) return;

    if (key === activeCellKey) {
      if (cell.acrossWordId && cell.downWordId) {
        setDirection((prev) => (prev === 'across' ? 'down' : 'across'));
      }
      return;
    }

    if (direction === 'across' && !cell.acrossWordId && cell.downWordId) {
      setDirection('down');
    } else if (direction === 'down' && !cell.downWordId && cell.acrossWordId) {
      setDirection('across');
    }
    setActiveCellKey(key);
  };

  const handleToggleDirection = () => {
    const cell = cellMap.get(activeCellKey);
    if (!cell) return;
    if (cell.acrossWordId && cell.downWordId) {
      setDirection((prev) => (prev === 'across' ? 'down' : 'across'));
    } else {
      const targetDir: CrosswordDirection = activeWord.direction === 'across' ? 'down' : 'across';
      const candidate = crosswordWordsData.find((w) => w.direction === targetDir);
      if (candidate) selectWord(candidate);
    }
  };

  const applyLetterWithSolvedCheck = (targetKey: string, letter: string, isHint = false) => {
    const prevSolved = computeSolvedIds(userLetters);
    const nextLetters = { ...userLetters, [targetKey]: letter };
    const nextSolved = computeSolvedIds(nextLetters);

    setUserLetters(nextLetters);
    setWrongCells((prev) => {
      if (!prev[targetKey]) return prev;
      const copy = { ...prev };
      delete copy[targetKey];
      return copy;
    });

    const newlySolvedWord = crosswordWordsData.find(
      (w) => !prevSolved.has(w.id) && nextSolved.has(w.id)
    );

    if (newlySolvedWord) {
      const dirLabel = newlySolvedWord.direction === 'across' ? 'Mendatar' : 'Menurun';
      setTtsBanner({
        title: `SAH! ${newlySolvedWord.number} ${dirLabel} (${newlySolvedWord.answer})`,
        text: newlySolvedWord.wittyNote,
        tone: 'solved',
      });
    } else if (isHint) {
      setTtsBanner({
        title: 'Bisikan Residen Diterima!',
        text: `Sst... huruf "${letter}" sudah diselundupkan ke kotak itu. Jangan sampai ketahuan Gubernur Jenderal!`,
        tone: 'hint',
      });
    }

    const wordKeys = getWordCellKeys(activeWord);
    const pos = wordKeys.indexOf(targetKey);
    if (pos !== -1) {
      for (let i = pos + 1; i < wordKeys.length; i++) {
        const candidateKey = wordKeys[i];
        const candidateCell = cellMap.get(candidateKey);
        const alreadyRightAndSolved =
          candidateCell &&
          nextLetters[candidateKey] === candidateCell.solution &&
          ((candidateCell.acrossWordId && nextSolved.has(candidateCell.acrossWordId)) ||
            (candidateCell.downWordId && nextSolved.has(candidateCell.downWordId)));
        if (!alreadyRightAndSolved) {
          focusCellButton(candidateKey);
          return;
        }
      }
    }
  };

  const handleLetterInput = (rawChar: string) => {
    const letter = rawChar.toUpperCase();
    if (!/^[A-Z]$/.test(letter)) return;

    if (solvedCellKeys.has(activeCellKey)) {
      const wordKeys = getWordCellKeys(activeWord);
      const pos = wordKeys.indexOf(activeCellKey);
      const nextOpen = wordKeys
        .slice(pos + 1)
        .find((k) => !solvedCellKeys.has(k));
      if (nextOpen) {
        applyLetterWithSolvedCheck(nextOpen, letter);
      }
      return;
    }

    applyLetterWithSolvedCheck(activeCellKey, letter);
  };

  const handleBackspace = () => {
    const wordKeys = getWordCellKeys(activeWord);
    const pos = wordKeys.indexOf(activeCellKey);

    if (!solvedCellKeys.has(activeCellKey) && userLetters[activeCellKey]) {
      setUserLetters((prev) => {
        const copy = { ...prev };
        delete copy[activeCellKey];
        return copy;
      });
      setWrongCells((prev) => {
        if (!prev[activeCellKey]) return prev;
        const copy = { ...prev };
        delete copy[activeCellKey];
        return copy;
      });
      return;
    }

    if (pos > 0) {
      for (let i = pos - 1; i >= 0; i--) {
        const prevKey = wordKeys[i];
        if (!solvedCellKeys.has(prevKey)) {
          setUserLetters((prev) => {
            const copy = { ...prev };
            delete copy[prevKey];
            return copy;
          });
          focusCellButton(prevKey);
          return;
        }
      }
      focusCellButton(wordKeys[pos - 1]);
    }
  };

  const moveByArrow = (dr: number, dc: number) => {
    const current = cellMap.get(activeCellKey);
    if (!current) return;
    let nr = current.row + dr;
    let nc = current.col + dc;
    while (nr >= 0 && nr < CROSSWORD_ROWS && nc >= 0 && nc < CROSSWORD_COLS) {
      const targetKey = `${nr}-${nc}`;
      if (cellMap.has(targetKey)) {
        if (dr !== 0 && gridMeta[nr][nc]?.downWordId) setDirection('down');
        if (dc !== 0 && gridMeta[nr][nc]?.acrossWordId) setDirection('across');
        focusCellButton(targetKey);
        return;
      }
      nr += dr;
      nc += dc;
    }
  };

  const handleCellKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    if (/^[a-zA-Z]$/.test(e.key)) {
      e.preventDefault();
      handleLetterInput(e.key);
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault();
      handleBackspace();
    } else if (e.key === ' ') {
      e.preventDefault();
      handleToggleDirection();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      moveByArrow(0, 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      moveByArrow(0, -1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveByArrow(1, 0);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveByArrow(-1, 0);
    }
  };

  const handleUseHint = () => {
    if (hintsLeft <= 0) return;

    let targetKey: string | undefined;
    const activeCell = cellMap.get(activeCellKey);
    if (activeCell && userLetters[activeCellKey] !== activeCell.solution) {
      targetKey = activeCellKey;
    } else {
      targetKey = getWordCellKeys(activeWord).find((k) => {
        const meta = cellMap.get(k);
        return meta && userLetters[k] !== meta.solution;
      });
      if (!targetKey) {
        for (const [k, meta] of cellMap.entries()) {
          if (userLetters[k] !== meta.solution) {
            targetKey = k;
            break;
          }
        }
      }
    }

    if (!targetKey) return;
    const meta = cellMap.get(targetKey);
    if (!meta) return;

    setHintsLeft((prev) => Math.max(0, prev - 1));
    focusCellButton(targetKey);
    applyLetterWithSolvedCheck(targetKey, meta.solution, true);
  };

  const handleCheckBoard = () => {
    const mistakes: Record<string, boolean> = {};
    let filledCount = 0;
    let wrongCount = 0;

    for (const [key, meta] of cellMap.entries()) {
      const val = userLetters[key];
      if (val) {
        filledCount += 1;
        if (val !== meta.solution) {
          mistakes[key] = true;
          wrongCount += 1;
        }
      }
    }

    setWrongCells(mistakes);

    if (filledCount === 0) {
      setTtsBanner({
        title: 'Kertas Masih Kosong Melompong!',
        text: 'Ketuk salah satu kotak putih lalu mulai ketik hurufnya dulu ya, Tuan Juru Tulis!',
        tone: 'check',
      });
    } else if (wrongCount === 0) {
      setTtsBanner({
        title: 'Audit Bersih Tanpa Celah!',
        text: `Seluruh ${filledCount} huruf yang sudah kamu tulis 100% akurat. Lanjutkan sampai semua kata terpecahkan!`,
        tone: 'solved',
      });
    } else {
      setTtsBanner({
        title: `Ditemukan ${wrongCount} Huruf Meleset!`,
        text: 'Kotak bertanda merah tipis itu sepertinya kena selundupan juru tulis ngantuk. Yuk perbaiki!',
        tone: 'check',
      });
    }
  };

  const handleResetTts = () => {
    setUserLetters({});
    setHintsLeft(MAX_HINTS);
    setWrongCells({});
    setTtsBanner({
      title: 'Lembar Koran Baru Dibagikan!',
      text: 'Papan TTS telah dibersihkan kembali dan jatah 3 Bisikan Residen diisi ulang.',
      tone: 'hint',
    });
    setDirection('across');
    focusCellButton('0-4');
  };

  const isAllTtsSolved = solvedWordIds.size === crosswordWordsData.length;
  const ttsProgressPct = Math.round((solvedWordIds.size / crosswordWordsData.length) * 100);

  // ==========================================
  // STATE TAB 2: KUIS SIDANG KOMISI HINDIA
  // ==========================================
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [lastPointsEarned, setLastPointsEarned] = useState<number>(0);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
  const [bestQuizScore, setBestQuizScore] = useState<number>(() => loadBestQuizScore());
  const [copiedCertificate, setCopiedCertificate] = useState<boolean>(false);

  const currentQuestion = quizQuestionsData[currentQuestionIdx];
  const isAnswered = selectedOptionIdx !== null;
  const isSelectedCorrect =
    isAnswered && selectedOptionIdx === currentQuestion.correctIndex;

  const accuracyPct = Math.round((correctCount / quizQuestionsData.length) * 100);
  const earnedRank = useMemo(() => {
    return (
      quizRankTiersData.find((tier) => accuracyPct >= tier.minPct) ??
      quizRankTiersData[quizRankTiersData.length - 1]
    );
  }, [accuracyPct]);

  const handleSelectQuizOption = (optIdx: number) => {
    if (selectedOptionIdx !== null) return;
    setSelectedOptionIdx(optIdx);

    if (optIdx === currentQuestion.correctIndex) {
      const nextStreak = streak + 1;
      const gained = 100 + streak * 25;
      const updatedScore = quizScore + gained;

      setLastPointsEarned(gained);
      setQuizScore(updatedScore);
      setCorrectCount((prev) => prev + 1);
      setStreak(nextStreak);
      setMaxStreak((prev) => Math.max(prev, nextStreak));

      if (updatedScore > bestQuizScore) {
        setBestQuizScore(updatedScore);
        try {
          window.localStorage.setItem(QUIZ_BEST_STORAGE_KEY, String(updatedScore));
        } catch {
          // Abaikan error penyimpanan mode privat
        }
      }
    } else {
      setLastPointsEarned(0);
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx + 1 >= quizQuestionsData.length) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOptionIdx(null);
      setLastPointsEarned(0);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOptionIdx(null);
    setLastPointsEarned(0);
    setQuizScore(0);
    setCorrectCount(0);
    setStreak(0);
    setMaxStreak(0);
    setIsQuizFinished(false);
    setCopiedCertificate(false);
  };

  const handleCopyCertificate = () => {
    const shareText = [
      '=== PIAGAM SIDANG KOMISI HINDIA (CULTUURSTELSEL 1830-1870) ===',
      `Pangkat: ${earnedRank.rankTitle}`,
      `Skor Akhir: ${quizScore} Poin (${correctCount}/${quizQuestionsData.length} Benar - ${accuracyPct}%)`,
      `Rekor Beruntun Terpanjang: ${maxStreak}x Jawaban Tepat`,
      `Catatan Komisi: "${earnedRank.satiricalNote}"`,
    ].join('\n');

    navigator.clipboard.writeText(shareText);
    setCopiedCertificate(true);
    setTimeout(() => setCopiedCertificate(false), 2400);
  };

  const quizProgressPct = Math.round(
    ((currentQuestionIdx + (isAnswered ? 1 : 0)) / quizQuestionsData.length) * 100
  );

  return (
    <section id="permainan-sejarah" className="section historical-games-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Bagian VI: Rubrik Hiburan & Asah Otak</span>
          <h2 className="section-title">Suplemen Akhir Pekan Javasche Courant</h2>
          <p className="section-subtitle">
            Rehat sejenak dari angka pajak kolonial! Uji ketajaman ingatan sejarahmu lewat Teka-Teki Silang Batavia dan Kuis Satir Komisi Hindia.
          </p>
          <div className="ornament-divider">
            <div className="ornament-line" />
            <div className="ornament-diamond" />
            <div className="ornament-line" />
          </div>
        </div>

        {/* Masthead Koran Jadul */}
        <div className="gazette-masthead-strip">
          <span className="gazette-edition">EDISI KHUSUS • BATAVIA, 1860</span>
          <span className="gazette-motto">
            <Newspaper size={14} />
            <span>"Bebas Kerja Rodi & Bebas Pungutan Cultuurprocenten"</span>
          </span>
          <span className="gazette-price">HARGA: 0 GULDEN</span>
        </div>

        {/* Dual-Tab Switcher */}
        <div className="dossier-tabs-nav games-tabs-nav" role="tablist" aria-label="Pilih Permainan Sejarah">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'tts'}
            className={`dossier-tab-btn ${activeTab === 'tts' ? 'active' : ''}`}
            onClick={() => setActiveTab('tts')}
            id="tab-btn-tts"
          >
            <Gamepad2 size={17} />
            <span>1. Teka-Teki Silang Batavia</span>
            <span className="games-tab-pill">{solvedWordIds.size}/{crosswordWordsData.length}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'quiz'}
            className={`dossier-tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
            onClick={() => setActiveTab('quiz')}
            id="tab-btn-quiz"
          >
            <ScrollText size={17} />
            <span>2. Kuis Sidang Komisi Hindia</span>
            <span className="games-tab-pill">{quizQuestionsData.length} Soal</span>
          </button>
        </div>

        {/* ==========================================
            TAB 1: TEKA-TEKI SILANG BATAVIA
            ========================================== */}
        {activeTab === 'tts' && (
          <div className="tts-arcade-wrapper parchment-card" role="tabpanel" aria-labelledby="tab-btn-tts">
            {/* Top Status & Action Toolbar */}
            <div className="tts-topbar">
              <div className="tts-progress-group">
                <div className="tts-progress-label-row">
                  <span className="tts-progress-title">
                    <Sparkles size={15} />
                    <span>Progres Silang Kata: <strong>{solvedWordIds.size} dari {crosswordWordsData.length} Kata</strong></span>
                  </span>
                  <span className="tts-progress-pct">{ttsProgressPct}%</span>
                </div>
                <div className="tts-progress-track" aria-hidden="true">
                  <div className="tts-progress-fill" style={{ width: `${ttsProgressPct}%` }} />
                </div>
              </div>

              <div className="tts-actions-row">
                <button
                  type="button"
                  className="tts-action-btn tts-hint-btn"
                  onClick={handleUseHint}
                  disabled={hintsLeft <= 0 || isAllTtsSolved}
                  title="Buka 1 huruf benar pada kotak aktif"
                >
                  <Lightbulb size={15} />
                  <span>Bisikan Residen ({hintsLeft})</span>
                </button>
                <button
                  type="button"
                  className="tts-action-btn"
                  onClick={handleCheckBoard}
                  title="Periksa apakah ada huruf yang keliru"
                >
                  <CheckCircle2 size={15} />
                  <span>Cek Huruf</span>
                </button>
                <button
                  type="button"
                  className="tts-action-btn tts-reset-btn"
                  onClick={handleResetTts}
                  title="Kosongkan dan ulangi papan TTS"
                >
                  <RotateCcw size={15} />
                  <span>Ulangi</span>
                </button>
              </div>
            </div>

            {/* Witty Feedback Toast */}
            {ttsBanner && (
              <div className={`tts-witty-banner tone-${ttsBanner.tone}`} role="status" aria-live="polite">
                <div className="tts-witty-content">
                  <strong>{ttsBanner.title}</strong>
                  <p>{ttsBanner.text}</p>
                </div>
              </div>
            )}

            {/* Complete Celebration Banner */}
            {isAllTtsSolved && (
              <div className="tts-victory-card" role="region" aria-label="Teka-Teki Silang Tamat">
                <div className="tts-victory-badge">
                  <Award size={20} />
                  <span>TAJUK UTAMA: 10/10 KATA TERPECAHKAN!</span>
                </div>
                <h3>Selamat, Kepala Redaksi Kehormatan Batavia!</h3>
                <p>
                  Seluruh sandi sejarah Cultuurstelsel berhasil kamu pecahkan tanpa satu pun sensor pemerintah kolonial. Siap diuji di kursi panas Sidang Komisi Hindia?
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setActiveTab('quiz')}
                >
                  <span>Lanjut ke Kuis Komisi Hindia</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            )}

            {/* Main 2-Column Layout: Board + Typewriter (Left) & Clues (Right) */}
            <div className="tts-main-grid">
              <div className="tts-board-column">
                {/* Active Clue Navigator */}
                <div className="tts-active-clue-bar">
                  <button
                    type="button"
                    className="tts-clue-step-btn"
                    onClick={() => stepActiveClue(-1)}
                    aria-label="Soal TTS sebelumnya"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="tts-active-clue-body" onClick={handleToggleDirection}>
                    <div className="tts-active-clue-meta">
                      <span className="badge badge-crimson">
                        {activeWord.number} {activeWord.direction === 'across' ? 'Mendatar' : 'Menurun'}
                      </span>
                      <span className="tts-word-len">{activeWord.answer.length} Huruf</span>
                    </div>
                    <p className="tts-active-clue-text">{activeWord.clue}</p>
                  </div>
                  <button
                    type="button"
                    className="tts-clue-step-btn"
                    onClick={() => stepActiveClue(1)}
                    aria-label="Soal TTS berikutnya"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* 11 x 12 Newspaper Grid */}
                <div
                  className="tts-grid-board"
                  role="grid"
                  aria-label="Papan Teka-Teki Silang Cultuurstelsel 11 kali 12"
                >
                  {gridMeta.map((row, rIdx) => (
                    <div key={`row-${rIdx}`} className="tts-grid-row" role="row">
                      {row.map((cell, cIdx) => {
                        if (!cell) {
                          return (
                            <div
                              key={`blk-${rIdx}-${cIdx}`}
                              className="tts-cell tts-cell-block"
                              aria-hidden="true"
                            />
                          );
                        }

                        const isSelected = cell.key === activeCellKey;
                        const isInActiveWord = activeWordCellKeys.has(cell.key);
                        const isSolved = solvedCellKeys.has(cell.key);
                        const isWrong = Boolean(wrongCells[cell.key]);
                        const letter = userLetters[cell.key] ?? '';

                        return (
                          <button
                            key={cell.key}
                            ref={(el) => {
                              cellRefs.current[cell.key] = el;
                            }}
                            type="button"
                            role="gridcell"
                            tabIndex={isSelected ? 0 : -1}
                            aria-selected={isSelected}
                            aria-label={`Baris ${rIdx + 1} Kolom ${cIdx + 1}${
                              cell.clueNumber ? `, Nomor ${cell.clueNumber}` : ''
                            }${letter ? `, terisi huruf ${letter}` : ', kosong'}`}
                            className={[
                              'tts-cell',
                              'tts-cell-playable',
                              isInActiveWord ? 'in-word' : '',
                              isSelected ? 'is-focused' : '',
                              isSolved ? 'is-solved' : '',
                              isWrong ? 'is-wrong' : '',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                            onClick={() => handleCellClick(cell.key)}
                            onKeyDown={handleCellKeyDown}
                          >
                            {cell.clueNumber !== undefined && (
                              <span className="tts-cell-number" aria-hidden="true">
                                {cell.clueNumber}
                              </span>
                            )}
                            <span className="tts-cell-letter">{letter}</span>
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* On-Screen Vintage Typewriter Keyboard */}
                <div className="tts-typewriter-deck" aria-label="Papan Ketik Mesin Ketik Antik">
                  <div className="tts-typewriter-caption">
                    <span>Mesin Ketik Saku Batavia (Ketuk tuts di bawah atau ketik langsung di keyboard Laptop)</span>
                  </div>
                  {KEYBOARD_ROWS.map((rowKeys, rowIndex) => (
                    <div key={`kb-row-${rowIndex}`} className="tts-kb-row">
                      {rowIndex === 2 && (
                        <button
                          type="button"
                          className="tts-kb-key tts-kb-key-wide"
                          onClick={handleToggleDirection}
                          aria-label="Putar arah Mendatar atau Menurun"
                          title="Putar arah Mendatar ⇄ Menurun"
                        >
                          <ArrowLeftRight size={14} />
                          <span>Arah</span>
                        </button>
                      )}
                      {rowKeys.map((k) => (
                        <button
                          key={k}
                          type="button"
                          className="tts-kb-key"
                          onClick={() => handleLetterInput(k)}
                        >
                          {k}
                        </button>
                      ))}
                      {rowIndex === 2 && (
                        <button
                          type="button"
                          className="tts-kb-key tts-kb-key-wide tts-kb-key-del"
                          onClick={handleBackspace}
                          aria-label="Hapus huruf"
                          title="Hapus huruf (Backspace)"
                        >
                          <Delete size={15} />
                          <span>Hapus</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Mendatar & Menurun Clue Lists */}
              <div className="tts-clues-column">
                <div className="tts-clue-group">
                  <h3 className="tts-clue-group-title">Mendatar</h3>
                  <div className="tts-clue-list">
                    {acrossWords.map((word) => {
                      const isWordActive = activeWord.id === word.id;
                      const isWordSolved = solvedWordIds.has(word.id);
                      return (
                        <button
                          key={word.id}
                          type="button"
                          className={`tts-clue-item ${isWordActive ? 'active' : ''} ${
                            isWordSolved ? 'solved' : ''
                          }`}
                          onClick={() => selectWord(word)}
                        >
                          <span className="tts-clue-num">{word.number}.</span>
                          <span className="tts-clue-desc">
                            {word.clue}{' '}
                            <em className="tts-clue-len">({word.answer.length})</em>
                          </span>
                          {isWordSolved && (
                            <span className="tts-clue-stamp">SAH</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="tts-clue-group">
                  <h3 className="tts-clue-group-title">Menurun</h3>
                  <div className="tts-clue-list">
                    {downWords.map((word) => {
                      const isWordActive = activeWord.id === word.id;
                      const isWordSolved = solvedWordIds.has(word.id);
                      return (
                        <button
                          key={word.id}
                          type="button"
                          className={`tts-clue-item ${isWordActive ? 'active' : ''} ${
                            isWordSolved ? 'solved' : ''
                          }`}
                          onClick={() => selectWord(word)}
                        >
                          <span className="tts-clue-num">{word.number}.</span>
                          <span className="tts-clue-desc">
                            {word.clue}{' '}
                            <em className="tts-clue-len">({word.answer.length})</em>
                          </span>
                          {isWordSolved && (
                            <span className="tts-clue-stamp">SAH</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==========================================
            TAB 2: KUIS SIDANG KOMISI HINDIA
            ========================================== */}
        {activeTab === 'quiz' && (
          <div className="quiz-arcade-wrapper parchment-card" role="tabpanel" aria-labelledby="tab-btn-quiz">
            {/* Score & Streak HUD */}
            <div className="quiz-hud-bar">
              <div className="quiz-hud-stat">
                <span className="quiz-hud-label">Skor Sidang</span>
                <strong className="quiz-hud-value">{quizScore} Poin</strong>
              </div>

              <div className={`quiz-streak-pill ${streak >= 2 ? 'is-hot' : ''}`}>
                <Flame size={16} />
                <span>
                  {streak >= 2
                    ? `Beruntun x${streak} (+${streak * 25} Bonus!)`
                    : `Beruntun: ${streak}x`}
                </span>
              </div>

              <div className="quiz-hud-stat quiz-hud-right">
                <span className="quiz-hud-label">Rekor Tertinggi</span>
                <strong className="quiz-hud-value">
                  <Trophy size={14} className="quiz-trophy-inline" />
                  <span>{bestQuizScore} Poin</span>
                </strong>
              </div>
            </div>

            {!isQuizFinished ? (
              <div className="quiz-stage-body">
                {/* Progress Track */}
                <div className="quiz-progress-meta">
                  <span>
                    Berkas Perkara <strong>{currentQuestionIdx + 1}</strong> dari{' '}
                    <strong>{quizQuestionsData.length}</strong>
                  </span>
                  <span className="badge badge-gold">{currentQuestion.contextTag}</span>
                </div>
                <div className="tts-progress-track quiz-progress-track" aria-hidden="true">
                  <div className="tts-progress-fill" style={{ width: `${quizProgressPct}%` }} />
                </div>

                {/* Question Card */}
                <div className="quiz-question-box">
                  <div className="quiz-type-kicker">
                    {currentQuestion.type === 'stamp-verdict' ? (
                      <>
                        <Scale size={15} />
                        <span>UJI STEMPEL DOKUMEN: Klaim Kertas atau Realita Desa?</span>
                      </>
                    ) : (
                      <>
                        <FileCheck2 size={15} />
                        <span>INTEROGASI ARSIP: Pilih Satu Jawaban Paling Tepat</span>
                      </>
                    )}
                  </div>
                  <h3 className="quiz-question-text">{currentQuestion.question}</h3>
                </div>

                {/* Options Grid */}
                <div
                  className={
                    currentQuestion.type === 'stamp-verdict'
                      ? 'quiz-options-stamp-grid'
                      : 'quiz-options-mc-list'
                  }
                >
                  {currentQuestion.options.map((optText, idx) => {
                    const isPicked = selectedOptionIdx === idx;
                    const isRightOption = idx === currentQuestion.correctIndex;

                    let stateClass = '';
                    if (isAnswered) {
                      if (isRightOption) stateClass = 'is-correct';
                      else if (isPicked) stateClass = 'is-wrong';
                      else stateClass = 'is-dimmed';
                    }

                    return (
                      <button
                        key={`${currentQuestion.id}-opt-${idx}`}
                        type="button"
                        disabled={isAnswered}
                        className={`quiz-option-btn ${
                          currentQuestion.type === 'stamp-verdict' ? 'stamp-variant' : 'mc-variant'
                        } ${stateClass}`}
                        onClick={() => handleSelectQuizOption(idx)}
                      >
                        {currentQuestion.type === 'stamp-verdict' ? (
                          <span className="quiz-stamp-icon-badge" aria-hidden="true">
                            {idx === 0 ? <ScrollText size={18} /> : <Scale size={18} />}
                          </span>
                        ) : (
                          <span className="quiz-mc-letter" aria-hidden="true">
                            {OPTION_LETTERS[idx]}
                          </span>
                        )}

                        <span className="quiz-option-label">{optText}</span>

                        {isAnswered && isRightOption && (
                          <CheckCircle2 size={19} className="quiz-status-icon icon-right" />
                        )}
                        {isAnswered && isPicked && !isRightOption && (
                          <XCircle size={19} className="quiz-status-icon icon-wrong" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Witty Reaction + Historical Fact */}
                {isAnswered && (
                  <div
                    className={`quiz-feedback-panel ${
                      isSelectedCorrect ? 'feedback-right' : 'feedback-wrong'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    <div className="quiz-reaction-header">
                      <span className="quiz-reaction-badge">
                        {isSelectedCorrect
                          ? `KETUKAN PALU BENAR! +${lastPointsEarned} POIN`
                          : 'KETUKAN PALU MELESET!'}
                      </span>
                    </div>

                    <p className="quiz-witty-remark">
                      {isSelectedCorrect
                        ? currentQuestion.funnyRightReaction
                        : currentQuestion.funnyWrongReaction}
                    </p>

                    <div className="quiz-fact-card">
                      <div className="quiz-fact-title">
                        <BookOpen size={14} />
                        <span>Catatan Sejarawan ({currentQuestion.sourceRef}):</span>
                      </div>
                      <p>{currentQuestion.historicalFact}</p>
                    </div>

                    <div className="quiz-next-row">
                      <button
                        type="button"
                        className="btn btn-primary quiz-next-btn"
                        onClick={handleNextQuestion}
                      >
                        <span>
                          {currentQuestionIdx + 1 >= quizQuestionsData.length
                            ? 'Terbitkan Piagam Pangkat Kolonial'
                            : 'Berkas Perkara Berikutnya'}
                        </span>
                        <ChevronRight size={17} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* FINAL CERTIFICATE / PIAGAM PANGKAT KOLONIAL */
              <div className="quiz-certificate-card" role="region" aria-label="Piagam Hasil Kuis">
                <div className="certificate-double-border">
                  <span className="certificate-kicker">{earnedRank.badgeLabel}</span>
                  <div className="certificate-seal-circle" aria-hidden="true">
                    <Award size={32} />
                  </div>
                  <h3 className="certificate-rank-title">{earnedRank.rankTitle}</h3>
                  <p className="certificate-subtitle">{earnedRank.colonialSubtitle}</p>

                  <div className="certificate-stats-grid">
                    <div className="cert-stat-box">
                      <span className="cert-stat-label">Total Skor</span>
                      <strong className="cert-stat-val">{quizScore} Poin</strong>
                    </div>
                    <div className="cert-stat-box">
                      <span className="cert-stat-label">Ketepatan Audit</span>
                      <strong className="cert-stat-val">
                        {correctCount}/{quizQuestionsData.length} ({accuracyPct}%)
                      </strong>
                    </div>
                    <div className="cert-stat-box">
                      <span className="cert-stat-label">Beruntun Terbaik</span>
                      <strong className="cert-stat-val">{maxStreak}x Tepat</strong>
                    </div>
                  </div>

                  <blockquote className="certificate-satire-quote">
                    "{earnedRank.satiricalNote}"
                  </blockquote>

                  <div className="certificate-actions">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleCopyCertificate}
                    >
                      {copiedCertificate ? (
                        <>
                          <Check size={16} />
                          <span>Piagam Tersalin ke Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          <span>Salin Piagam Skor (Share WA)</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={handleRestartQuiz}
                    >
                      <RotateCcw size={16} />
                      <span>Sidang Ulang (Main Lagi)</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
