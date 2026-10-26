# Integrasi Aset Gambar & Arsip Sejarah Cultuurstelsel Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Mengintegrasikan aset arsip gambar sejarah otentik (*Public Domain*) ke dalam website Cultuurstelsel dengan skema data terpusat, tata letak seragam minimalis, dan komponen interaktif ImageLightboxModal.

**Architecture:** Mengunduh aset arsip ke `public/images/`, menambahkan antarmuka `HistoricalImage` dan metadata arsip di `src/data/historyContent.ts`, membuat komponen modal `ImageLightboxModal.tsx` & `ImageLightboxModal.css`, memperbarui `ExploitationSection.tsx`, `ImpactSection.tsx`, dan `App.tsx` dengan penyeragaman rasio aspek dan penanganan error fallback.

**Tech Stack:** React 19, TypeScript, Vite, Vanilla CSS, Lucide React.

---

### Task 1: Pengadaan Aset Gambar Arsip Sejarah ke `public/images/`

**Files:**
- Create: `public/images/van-den-bosch.jpg`
- Create: `public/images/multatuli.jpg`
- Create: `public/images/baron-van-hoevell.jpg`
- Create: `public/images/fransen-van-de-putte.jpg`
- Create: `public/images/van-hogendorp.jpg`
- Create: `public/images/komoditas-nila.jpg`
- Create: `public/images/komoditas-tebu.jpg`
- Create: `public/images/komoditas-kopi.jpg`
- Create: `public/images/komoditas-tembakau.jpg`
- Create: `public/images/perang-diponegoro.jpg`
- Create: `public/images/staatsblad-1834.jpg`

**Step 1: Unduh / Ambil file arsip sejarah Public Domain dari Wikimedia Commons**
Unduh file gambar beresolusi optimal menggunakan script PowerShell / fetch langsung ke target file di `public/images/`.

**Step 2: Verifikasi Integritas File**
Jalankan pemeriksaan ukuran file di terminal:
```powershell
Get-ChildItem -Path "public/images" | Select-Object Name, Length
```
Ekspektasi: Seluruh file ada dengan ukuran > 0 bytes.

---

### Task 2: Pembaruan Skema Data & Entitas Gambar di `src/data/historyContent.ts`

**Files:**
- Modify: `src/data/historyContent.ts`

**Step 1: Tambahkan antarmuka `HistoricalImage`**
```typescript
export interface HistoricalImage {
  src: string;
  alt: string;
  caption: string;
  archiveSource: string;
}
```

**Step 2: Tambahkan field `image?: HistoricalImage` pada tipe data**
Tambahkan properti opsional `image?: HistoricalImage;` pada interface `Commodity`, `HistoricalCritic`, `WarCrisis`, dan `TimelineEvent`.

**Step 3: Isi metadata gambar pada dataset**
Masukkan data gambar untuk 4 komoditas, 5 tokoh pengkritik, Perang Diponegoro, dan Staatsblad 1834.

**Step 4: Verifikasi kompilasi TypeScript**
Jalankan:
```powershell
npx tsc --noEmit
```
Ekspektasi: Exit code 0 tanpa galat tipe.

---

### Task 3: Pembuatan Komponen Modal `ImageLightboxModal.tsx` & `ImageLightboxModal.css`

**Files:**
- Create: `src/components/ImageLightboxModal.tsx`
- Create: `src/components/ImageLightboxModal.css`

**Step 1: Tulis komponen `ImageLightboxModal.tsx`**
Implementasikan modal dengan:
- Properti: `image: HistoricalImage | null`, `isOpen: boolean`, `onClose: () => void`.
- Keyboard listener untuk tombol `Escape`.
- Klik latar belakang (*backdrop*) untuk menutup modal.
- Render gambar utuh dengan `object-fit: contain` dan panel informasi sumber sitasi.

**Step 2: Tulis CSS `ImageLightboxModal.css`**
- Efek *backdrop-filter: blur(8px)*.
- Animasi *fade-in* dan *scale-up* lembut.
- Tombol close responsif dan tipografi yang elegan.

**Step 3: Verifikasi build komponen**
Jalankan `npx tsc --noEmit` untuk memastikan tidak ada kesalahan impor atau sintaksis.

---

### Task 4: Integrasi Gambar Seragam pada Kartu Komoditas di `ExploitationSection.tsx` & `.css`

**Files:**
- Modify: `src/components/ExploitationSection.tsx`
- Modify: `src/components/ExploitationSection.css`

**Step 1: Pasang wadah gambar pada kartu komoditas**
Tambahkan banner gambar di bagian atas setiap kartu komoditas dengan rasio `16:9`, `object-fit: cover`, tombol klik pembesar, serta atribut aksesibilitas.

**Step 2: Tambahkan styling CSS aspect-ratio seragam**
Kunci tinggi wadah gambar dan atur transisi *hover zoom* halus (1.03x). Pastikan semua kartu dalam baris grid sejajar.

**Step 3: Uji fungsionalitas klik untuk membuka lightbox**
Pastikan klik pada gambar komoditas memicu modal lightbox dengan data yang tepat.

---

### Task 5: Integrasi Gambar Seragam pada Kartu Tokoh Oposisi di `ImpactSection.tsx` & `.css`

**Files:**
- Modify: `src/components/ImpactSection.tsx`
- Modify: `src/components/ImpactSection.css`

**Step 1: Pasang thumbnail potret tokoh pada kartu pengkritik**
Tambahkan elemen gambar potret tokoh (84x84px atau rasio 1:1) dengan bingkai tipis minimalis di sebelah nama tokoh.

**Step 2: Tambahkan penanganan fallback gambar**
Jika gambar gagal dimuat, sistem menampilkan kembali inisial / lencana ikon tanpa merusak tata letak kartu.

**Step 3: Sambungkan ke event modal lightbox**
Mengklik foto tokoh akan memunculkan modal lightbox beresolusi penuh beserta sitasi arsipnya.

---

### Task 6: Hubungkan State Global Lightbox di `App.tsx` & Aksesori Visual Hero

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/BackgroundSection.tsx`

**Step 1: Integrasikan modal lightbox universal di `App.tsx`**
Atur *state* aktif gambar sehingga komponen mana pun dapat memicu pembesaran arsip secara mulus.

**Step 2: Tambahkan visual arsip di bagian Latar Belakang / Krisis**
Tambahkan gambar Perang Diponegoro pada kartu krisis keuangan.

---

### Task 7: Verifikasi Menyeluruh & Uji Kualitas

**Files:**
- Modify: `docs/plans/task.md`

**Step 1: Jalankan linter oxlint**
```powershell
npx oxlint
```
Ekspektasi: 0 errors, 0 warnings.

**Step 2: Jalankan proses build produksi**
```powershell
npm run build
```
Ekspektasi: Vite build sukses dengan exit code 0.

**Step 3: Periksa tampilan langsung di browser**
Buka browser dev server `http://localhost:5173/`, verifikasi keseragaman gambar, responsivitas di desktop dan mobile, serta interaksi klik lightbox.

**Step 4: Perbarui tabel pelacak `docs/plans/task.md`**
Catat tugas yang selesai dan buktinya secara lengkap.
