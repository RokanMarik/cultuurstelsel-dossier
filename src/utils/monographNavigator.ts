export interface MonographNavigationTarget {
  sectionId: string;
  tabId?: string;
  subTabId?: string;
  elementId?: string;
}

export const MONOGRAPH_NAVIGATE_EVENT = 'monograph:navigate';

/**
 * Menyusun string hash URL yang dapat dibagikan (deep-link) ke bab, tab, dan kartu tertentu.
 */
export function buildMonographHash(target: MonographNavigationTarget): string {
  const params = new URLSearchParams();
  if (target.tabId) params.set('tab', target.tabId);
  if (target.subTabId) params.set('sub', target.subTabId);
  if (target.elementId) params.set('el', target.elementId);
  const query = params.toString();
  return query ? `#${target.sectionId}?${query}` : `#${target.sectionId}`;
}

/**
 * Membaca hash URL saat halaman dibuka (mendukung format #section?tab=...&sub=...&el=... maupun #section biasa).
 */
export function parseHashNavigationTarget(rawHash: string): MonographNavigationTarget | null {
  const cleaned = rawHash.replace(/^#/, '').trim();
  if (!cleaned) return null;

  const [sectionPart, queryPart] = cleaned.split('?');
  if (!sectionPart) return null;

  const params = new URLSearchParams(queryPart ?? '');
  return {
    sectionId: sectionPart,
    tabId: params.get('tab') ?? undefined,
    subTabId: params.get('sub') ?? undefined,
    elementId: params.get('el') ?? undefined,
  };
}

/**
 * Menggulir ke elemen target dan memberikan sorot kuratorial sementara.
 */
function scrollToAndHighlight(sectionId: string, elementId?: string) {
  const targetEl = (elementId ? document.getElementById(elementId) : null) ?? document.getElementById(sectionId);
  if (!targetEl) return false;

  const navHeight = window.innerWidth <= 1160 ? 64 : 74;
  const elementTop = targetEl.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: Math.max(0, elementTop - navHeight - 12),
    behavior: 'smooth',
  });

  if (elementId && targetEl.id === elementId) {
    targetEl.classList.remove('monograph-target-highlight');
    // Paksa reflow agar animasi dapat diputar ulang
    void targetEl.offsetWidth;
    targetEl.classList.add('monograph-target-highlight');
    window.setTimeout(() => {
      targetEl.classList.remove('monograph-target-highlight');
    }, 2000);
  }
  return true;
}

/**
 * Mengirimkan sinyal navigasi lintas-tab ke seluruh bagian monograf, memperbarui URL hash,
 * lalu menggulir ke elemen tujuan setelah tab selesai dirender.
 */
export function navigateToMonographTarget(
  target: MonographNavigationTarget,
  options?: { updateHash?: boolean }
): void {
  const shouldUpdateHash = options?.updateHash ?? true;
  if (shouldUpdateHash && typeof window !== 'undefined') {
    const nextHash = buildMonographHash(target);
    window.history.replaceState(null, '', nextHash);
  }

  window.dispatchEvent(
    new CustomEvent<MonographNavigationTarget>(MONOGRAPH_NAVIGATE_EVENT, {
      detail: target,
    })
  );

  // Beri jeda singkat agar React merender konten tab baru terlebih dahulu
  window.setTimeout(() => {
    const found = scrollToAndHighlight(target.sectionId, target.elementId);
    if (!found) {
      // Cadangan kedua jika section masih dalam proses Suspense lazy-loading
      window.setTimeout(() => {
        scrollToAndHighlight(target.sectionId, target.elementId);
      }, 220);
    }
  }, 60);
}

