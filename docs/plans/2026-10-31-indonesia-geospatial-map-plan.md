# Indonesia Geospatial Map Overhaul Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Mengganti peta SVG sketsa manual di Laboratorium Sejarah dengan Peta Vektor Geospasial Asli Indonesia (Sabang–Merauke + siluet wilayah tetangga berstandar Atlas Resmi) lengkap dengan Kamera Ganda (`Seluruh Nusantara` ↔ `Fokus Jawa & Madura`) dan penempatan titik berbasis koordinat GPS sejarah asli (`lat`, `lon`).

**Architecture:** Mengompilasi poligon garis pantai resolusi tinggi dari dataset publik *Natural Earth 1:10m* menggunakan proyeksi matematis *WGS84 Equirectangular Khatulistiwa* (`94.5°–141.5° BT`, `6.5° LU – 11.5° LS`, `viewBox="0 0 1000 385"`) ke modul mandiri `src/data/indonesiaGeoPaths.ts` tanpa dependensi runtime tambahan (`0 KB` paket baru). Komponen `InteractiveLabSection.tsx` menggunakan sakelar `viewBox` kamera ganda dengan *scale-aware rendering* pada pin, jalur kereta api kolonial, serta tata letak label kota anti-tumpuk.

**Tech Stack:** React 19, TypeScript 6, Pure SVG Geospatial Projection (`WGS84`), Vanilla CSS Custom Properties, Vite 8, Oxlint, Python 3 (skrip kompilasi GeoJSON satu kali di folder scratch).

---

### Task 1: Kompilasi Modul Vektor Geospasial Indonesia Resolusi Tinggi (`indonesiaGeoPaths.ts`)

**Files:**
- Create: `src/data/indonesiaGeoPaths.ts`
- Reference: `@.agent/skills/ui-ux-pro-max/SKILL.md`

**Step 1: Buat skrip verifikasi geometri kepulauan (sebagai tes gagal awal)**

Jalankan pemeriksaan bahwa `src/data/indonesiaGeoPaths.ts` belum ada atau belum memuat konstanta geospasial wajib:

Run:
```powershell
@'
import pathlib, sys
p = pathlib.Path("src/data/indonesiaGeoPaths.ts")
assert p.exists(), "FAIL: src/data/indonesiaGeoPaths.ts belum dibuat"
'@ | python -
```
Expected: FAIL dengan `AssertionError: FAIL: src/data/indonesiaGeoPaths.ts belum dibuat`.

**Step 2: Ekstrak poligon Natural Earth `1:10m` dan kompilasi `src/data/indonesiaGeoPaths.ts`**

Buat skrip Python sementara di direktori scratch untuk mengambil dataset publik Natural Earth `1:10m` (`ne_10m_admin_0_countries.geojson` / `ne_10m_land` + batas negara Asia Tenggara Maritim), melakukan kliping kotak wilayah `94.5° BT – 141.5° BT` dan `6.5° LU – 11.5° LS`, menyederhanakan koordinat dengan algoritma Ramer-Douglas-Peucker terukur:
- **Pulau Jawa & Madura**: toleransi ekstra rapat (`0.012°`) agar Ujung Kulon, Teluk Banten, Teluk Jakarta, Tanjung Indramayu, Semenanjung Muria, Selat Madura, Segara Anakan, dan Semenanjung Blambangan terlihat tajam saat zoom.
- **Kepulauan Nusantara Lainnya** (Sumatera, Bangka, Belitung, Kepri, Nias, Mentawai, Kalimantan Indonesia, Sulawesi, Buton, Muna, Sangihe, Selayar, Bali, Lombok, Sumbawa, Flores, Sumba, Rote, Timor Barat, Halmahera, Ternate, Buru, Seram, Ambon, Banda, Kei, Aru, Tanimbar, Papua, Waigeo, Misool, Biak, Yapen, Dolak): toleransi presisi (`0.028°`).
- **Wilayah Tetangga Kontekstual** (`NEIGHBOR_CONTEXT_PATHS` — Semenanjung Malaya & Singapura, Kalimantan Utara/Malaysia-Brunei, Timor Timur, Papua Nugini Barat): toleransi `0.04°` agar pulau Kalimantan, Timor, dan Papua utuh secara geografis.

Hasilkan file `src/data/indonesiaGeoPaths.ts` yang mengekspor:
```typescript
export interface GeoBounds {
  minLon: number;
  maxLon: number;
  minLat: number;
  maxLat: number;
  width: number;
  height: number;
}

export interface GeoIslandFeature {
  id: string;
  name: string;
  group: 'jawa-madura' | 'nusantara-outer' | 'neighbor-context';
  pathD: string;
}

export interface MapSeaLabel {
  id: string;
  text: string;
  lon: number;
  lat: number;
  rotate?: number;
  view: 'both' | 'nusantara' | 'jawa';
}

export interface MapIslandLabel {
  id: string;
  text: string;
  subText?: string;
  lon: number;
  lat: number;
}

export const MAP_BOUNDS: GeoBounds = {
  minLon: 94.5,
  maxLon: 141.5,
  minLat: -11.5,
  maxLat: 6.5,
  width: 1000,
  height: 385,
};

export function projectLon(lon: number): number {
  return Number((((lon - MAP_BOUNDS.minLon) / (MAP_BOUNDS.maxLon - MAP_BOUNDS.minLon)) * MAP_BOUNDS.width).toFixed(2));
}

export function projectLat(lat: number): number {
  return Number((((MAP_BOUNDS.maxLat - lat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)) * MAP_BOUNDS.height).toFixed(2));
}

export const NUSANTARA_VIEWBOX = '0 0 1000 385';
// Fokus Jawa & Madura: 104.8°–115.2° BT, -4.95° s/d -8.95° LS
export const JAVA_FOCUS_RECT = {
  x: projectLon(104.8),
  y: projectLat(-4.95),
  width: Number((projectLon(115.2) - projectLon(104.8)).toFixed(2)),
  height: Number((projectLat(-8.95) - projectLat(-4.95)).toFixed(2)),
};
export const JAVA_VIEWBOX = `${JAVA_FOCUS_RECT.x} ${JAVA_FOCUS_RECT.y} ${JAVA_FOCUS_RECT.width} ${JAVA_FOCUS_RECT.height}`;
```
serta array `NEIGHBOR_CONTEXT_PATHS`, `INDONESIA_OUTER_PATHS`, `JAVA_MADURA_PATHS`, `LAND_BORDER_PATHS`, `SEA_LABELS`, `ISLAND_LABELS`, dan `JAVA_VOLCANIC_SPINE_COORDS`.

**Step 3: Verifikasi kelengkapan pulau & kompilasi TypeScript**

Run:
```powershell
@'
import pathlib, re
txt = pathlib.Path("src/data/indonesiaGeoPaths.ts").read_text(encoding="utf-8")
for token in ["JAVA_MADURA_PATHS", "INDONESIA_OUTER_PATHS", "NEIGHBOR_CONTEXT_PATHS", "projectLon", "projectLat", "NUSANTARA_VIEWBOX", "JAVA_VIEWBOX"]:
    assert token in txt, f"Missing {token}"
path_count = len(re.findall(r'pathD:\s*"M\s', txt))
print(f"OK: {path_count} polygon paths generated, size={len(txt)/1024:.1f} KB")
assert path_count >= 25, "Expected >= 25 island/context polygons across Nusantara"
'@ | python -
npx tsc --noEmit
npm run lint
```
Expected: PASS (`>= 25` poligon kepulauan asli, `tsc` & `oxlint` 0 error).

**Step 4: Commit**

```powershell
git add src/data/indonesiaGeoPaths.ts
git commit -m "feat(map): add real Natural Earth 1:10m Indonesia & Java geospatial vector paths"
```

---

### Task 2: Pembaruan Schema & Dataset Koordinat GPS Asli (`historyContent.ts`)

**Files:**
- Modify: `src/data/historyContent.ts:2270-2532`

**Step 1: Tulis pemeriksaan gagal untuk koordinat GPS `lat`/`lon`**

Run:
```powershell
@'
import pathlib
txt = pathlib.Path("src/data/historyContent.ts").read_text(encoding="utf-8")
assert "regionGroup:" in txt and "coordinates:" in txt, "FAIL: SpatialMarker & RailwayLine belum memakai koordinat GPS lat/lon"
'@ | python -
```
Expected: FAIL.

**Step 2: Perbarui interface `SpatialMarker` & `RailwayLine` beserta 12 simpul sejarah & 3 jalur rel GPS asli**

Di `src/data/historyContent.ts`:
1. Perbarui `SpatialMarker`:
   - Ganti `cx: number; cy: number;` menjadi:
     ```typescript
     lat: number;
     lon: number;
     regionGroup: 'jawa' | 'luar-jawa';
     labelPos?: 'top' | 'bottom' | 'left' | 'right';
     showLabelInNusantara?: boolean;
     ```
2. Perbarui `RailwayLine`:
   - Ganti `pathD: string;` menjadi `coordinates: [number, number][];` (`[lon, lat]` tiap stasiun).
3. Pasang koordinat GPS akurat pada 12 simpul `spatialMarkersData`:
   - `Batavia (Sunda Kelapa)`: `lat: -6.13, lon: 106.81, regionGroup: 'jawa', labelPos: 'top', showLabelInNusantara: true`
   - `Priangan (Preanger)`: `lat: -6.92, lon: 107.61, regionGroup: 'jawa', labelPos: 'bottom'`
   - `Cirebon`: `lat: -6.71, lon: 108.56, regionGroup: 'jawa', labelPos: 'top'`
   - `Pekalongan`: `lat: -6.89, lon: 109.68, regionGroup: 'jawa', labelPos: 'top'`
   - `Kedu`: `lat: -7.48, lon: 110.22, regionGroup: 'jawa', labelPos: 'bottom'`
   - `Demak & Grobogan`: `lat: -6.98, lon: 110.65, regionGroup: 'jawa', labelPos: 'top'`
   - `Pasuruan`: `lat: -7.65, lon: 112.91, regionGroup: 'jawa', labelPos: 'bottom', showLabelInNusantara: true`
   - `Minangkabau (Sumatera Barat)`: `lat: -0.30, lon: 100.37, regionGroup: 'luar-jawa', labelPos: 'left', showLabelInNusantara: true`
   - `Lampung & Palembang`: `lat: -5.43, lon: 105.26, regionGroup: 'luar-jawa', labelPos: 'left', showLabelInNusantara: true` (Sentra Lada Wajib Sumatera Bagian Selatan merujuk `exploitationData.outerIslands`)
   - `Bangka`: `lat: -2.13, lon: 106.11, regionGroup: 'luar-jawa', labelPos: 'right', showLabelInNusantara: true` (Eksploitasi Tambang Timah Kolonial merujuk `exploitationData.outerIslands`)
   - `Minahasa (Sulawesi Utara)`: `lat: 1.48, lon: 124.84, regionGroup: 'luar-jawa', labelPos: 'top', showLabelInNusantara: true`
   - `Maluku (Ambon & Banda)`: `lat: -3.70, lon: 128.18, regionGroup: 'luar-jawa', labelPos: 'bottom', showLabelInNusantara: true`
4. Pasang koordinat GPS stasiun asli pada `railwayLinesData`:
   - `rail-ss-west` (*Batavia–Buitenzorg*): `[[106.81, -6.13], [106.83, -6.39], [106.80, -6.60]]`
   - `rail-nis-central` (*Semarang–Solo–Yogyakarta*): `[[110.42, -6.96], [110.63, -7.17], [110.82, -7.56], [110.37, -7.79]]`
   - `rail-ss-east` (*Surabaya–Pasuruan–Probolinggo*): `[[112.74, -7.25], [112.78, -7.60], [112.91, -7.65], [113.22, -7.75]]`

**Step 3: Verifikasi rentang geografis 12 simpul**

Run:
```powershell
@'
import pathlib, re
txt = pathlib.Path("src/data/historyContent.ts").read_text(encoding="utf-8")
lats = [float(x) for x in re.findall(r"\blat:\s*(-?\d+\.\d+)", txt)]
lons = [float(x) for x in re.findall(r"\blon:\s*(\d+\.\d+)", txt)]
assert len(lats) == 12 and len(lons) == 12, f"Expected 12 markers, got {len(lats)}"
for lat, lon in zip(lats, lons):
    assert -11.0 <= lat <= 6.0 and 95.0 <= lon <= 141.0, f"Out of Indonesia bounds: {lat}, {lon}"
print("OK: 12 historical GPS markers verified inside Nusantara bounds")
'@ | python -
```
Expected: PASS (`OK: 12 historical GPS markers verified inside Nusantara bounds`).

*(Catatan: `tsc` akan hijau penuh bersama Task 3 setelah `InteractiveLabSection.tsx` diperbarui memakai `lat/lon`.)*

---

### Task 3: Implementasi UI Atlas Resmi, Kamera Ganda (`Nusantara` ↔ `Jawa & Madura`), & Pin Proporsional (`InteractiveLabSection.tsx` & `.css`)

**Files:**
- Modify: `src/components/InteractiveLabSection.tsx:1-500`
- Modify: `src/components/InteractiveLabSection.css:200-460`
- Reference: `@.agent/skills/ui-ux-pro-max/SKILL.md`

**Step 1: Perbarui `InteractiveLabSection.tsx` dengan Kamera Ganda & Proyeksi Geospasial**

Implementasikan pada Tab 1 (`InteractiveLabSection.tsx`):
1. State baru `const [mapRegionView, setMapRegionView] = useState<'nusantara' | 'jawa'>('nusantara');`.
2. Fungsi `handleSelectMarker(marker: SpatialMarker)`:
   - Mengubah `selectedMarkerId` ke `marker.id`.
   - Jika `mapRegionView === 'jawa'` dan `marker.regionGroup === 'luar-jawa'`, otomatis pindahkan `setMapRegionView('nusantara')` agar titik Luar Jawa langsung tampak.
3. Sakelar Kamera Wilayah di header peta (`map-region-switcher`):
   - Tombol **`Seluruh Nusantara (Sabang–Merauke)`**
   - Tombol **`Fokus Detail Jawa & Madura`**
   - Petunjuk interaktif singkat saat di mode Nusantara: mengeklik Pulau Jawa langsung mengaktifkan `Fokus Detail Jawa & Madura`.
4. Kanvas SVG Geospasial (`viewBox={mapRegionView === 'nusantara' ? NUSANTARA_VIEWBOX : JAVA_VIEWBOX}`):
   - Faktor skala dinamis `const k = mapRegionView === 'nusantara' ? 1 : 0.225;` untuk menjaga ketebalan garis, radius pin (`r = (isSelected ? 8.5 : 5.8) * k`), ring sentuh (`18 * k`), dan ukuran font (`fontSize = (isSelected ? 10.5 : 9) * k`) tetap tajam proporsional!
   - Urutan lapisan kartografi:
     1. Latar gradien laut dalam vintages & jaring derajat lintang (`5° LU`, `0° Khatulistiwa`, `5° LS`, `10° LS`) + bujur (`100°–140° BT`, serta grid tiap `2°` saat mode Jawa).
     2. `NEIGHBOR_CONTEXT_PATHS` (siluet redup Malaya, Kalimantan Utara, Timor Timur, Papua Nugini) + garis batas darat putus-putus.
     3. Efek *Coastal Glow* + `INDONESIA_OUTER_PATHS` (Sumatera, Kalimantan, Sulawesi, Bali-NT, Maluku, Papua, Bangka-Belitung, dll.).
     4. `JAVA_MADURA_PATHS` (klik di mode Nusantara memicu `setMapRegionView('jawa')`, disertai bingkai sorot tipis keemasan di mode Nusantara).
     5. Sabuk pegunungan Jawa, label laut bersejarah (`SEA_LABELS`), dan label nama kepulauan (`ISLAND_LABELS`).
     6. `railwayLinesData` yang dikonversi dari `coordinates` via `projectLon`/`projectLat`.
     7. Pin simpul sejarah (`filteredMarkers`) dengan posisi teks anti-tumpuk berdasarkan `labelPos` dan aturan kebersihan label di mode Nusantara vs Jawa.
     8. Mawar Kompas & Skala Bar Kilometer (`0 — 250 — 500 km` di mode Nusantara; `0 — 50 — 100 km` di mode Jawa).

**Step 2: Perkaya styling kartografi di `InteractiveLabSection.css`**

Di `src/components/InteractiveLabSection.css`:
- Tambahkan styling `.map-region-switcher`, `.map-region-btn` (`min-height: 38px`, kontras tinggi emas-merah marun kolonial), `.map-neighbor-land`, `.map-archipelago-land`, `.map-java-interactive`, `.map-equator-line`, `.map-sea-label`, `.map-island-title`, `.map-java-focus-frame`, dan `.map-scale-bar-overlay`.
- Pastikan menggunakan variabel CSS resmi yang sudah ada di `:root` (`index.css`), mendukung `prefers-reduced-motion`, dan responsif di layar `360px`–`1440px`.

**Step 3: Jalankan verifikasi TypeScript & Oxlint**

Run:
```powershell
npx tsc --noEmit
npm run lint
```
Expected: PASS (`0 warnings and 0 errors`).

**Step 4: Commit Task 2 & Task 3**

```powershell
git add src/data/historyContent.ts src/components/InteractiveLabSection.tsx src/components/InteractiveLabSection.css
git commit -m "feat(map): overhaul interactive map with dual Nusantara/Java camera and GPS coordinates"
```

---

### Task 4: Verifikasi Akhir Menyeluruh (Audit CSS, Geospatial Check, Build Produksi, & Tracker)

**Files:**
- Modify: `docs/plans/task.md`
- Reference: `@.agent/skills/verification-before-completion/SKILL.md`, `@.agent/skills/finishing-a-development-branch/SKILL.md`

**Step 1: Jalankan audit komprehensif (CSS variables, TypeScript, Oxlint, Vite Production Build)**

Run:
```powershell
@'
import pathlib, re
root_css = pathlib.Path("src/index.css").read_text(encoding="utf-8")
defined = set(re.findall(r"(--[\w-]+)\s*:", root_css))
missing = set()
for css_file in pathlib.Path("src").rglob("*.css"):
    txt = css_file.read_text(encoding="utf-8")
    local_defs = set(re.findall(r"(--[\w-]+)\s*:", txt))
    for used in re.findall(r"var\((--[\w-]+)", txt):
        if used not in defined and used not in local_defs:
            missing.add((css_file.name, used))
assert not missing, f"Missing CSS vars: {missing}"
print("CSS Token Audit: 0 missing variables")
'@ | python -
npx tsc --noEmit
npm run lint
npm run build
```
Expected:
- `CSS Token Audit: 0 missing variables`
- `oxlint`: `Found 0 warnings and 0 errors`
- `npm run build`: `exit code 0` tanpa chunk warning.

**Step 2: Perbarui `docs/plans/task.md` dan selesaikan branch pengembangan**

Catat seluruh bukti verifikasi ke `docs/plans/task.md`, lakukan commit, dan jalankan alur `.agent/skills/finishing-a-development-branch/SKILL.md`.
