# Update log

## Revisi: scrollbar popup disembunyikan
- `.modal-card` (dipakai popup proyek & sertifikat) tetap bisa di-scroll, tapi scrollbar-nya disembunyikan di semua browser (`scrollbar-width: none` untuk Firefox, `::-webkit-scrollbar { display: none }` untuk Chrome/Safari, `-ms-overflow-style: none` untuk Edge lama).

## Revisi: popup detail proyek + transisi tema
- **Popup proyek/sertifikat dirombak** (`ProjectModal.jsx`, `CertificateModal.jsx`, `ProjectCarousel.jsx`): banner cover lebar di atas (pakai `ProjectCover` varian baru `modal`), badge logo + tombol tutup melayang di atasnya, body dengan judul/deskripsi/tag rapi, lalu galeri screenshot dengan tombol panah kiri-kanan + dot progres + counter "01 / 03" — bukan cuma titik seperti sebelumnya. Carousel sekarang manual sepenuhnya (tidak lagi auto-geser sendiri).
- **Animasi transisi gelap/terang dihapus total** (`context/ThemeContext.jsx`): efek "tetesan cair" (liquid drip) yang menutupi layar tiap ganti tema sudah dibuang beserta CSS-nya (`.theme-liquid*`). Ganti tema sekarang cuma crossfade warna biasa (0.4s), tanpa overlay apa pun.

## Redesign: gaya "Nexform" (hitam, hairline grid, tile warna)
- `src/index.css` ditulis ulang dari nol (versi lama ada di riwayat git). Tema default sekarang **gelap**; mode terang = layout yang sama, warna dibalik.
- Urutan section mengikuti referensi: Navbar (logo di tengah) → Hero → About (misi + statistik) → Skills (daftar proses, accordion) → Projects → Quote + strip tile warna → Experience → Contact → Footer.
- Komponen baru: `ProjectCover.jsx` (mockup di atas warna solid), `Quote.jsx`, `Icons.jsx`, `lib/thumb.js`.
- Dihapus: `HeroIdCard`, `CornerStickers`, `ProjectVisual` (diganti desain baru).
- Aset: `public/thumbs/*.webp` (salinan ringan screenshot proyek, ±64 MB → ±1,3 MB) dan `public/profile-cutout.webp`. File asli tidak diubah.
- Data: field `kind` ("web"/"mobile") di tiap proyek; link "Beranda" di nav; `hero.cardLabel`, `about.author`, `about.statLabels` (id + en).
- Font: Inter Tight (Google Fonts) menggantikan Poppins/Fraunces/WindSong.

## Cara menjalankan
```
npm install
npm run dev       # development
npm run build     # build produksi ke folder dist/
```

## 1. Scroll animation (GSAP + ScrollTrigger)
- Library baru: `gsap` (lihat `src/lib/gsap.js`, registrasi ScrollTrigger sekali di sini).
- `AnimateOnScroll.jsx` dirombak dari IntersectionObserver polos → GSAP, dengan varian
  `up` (default), `down`, `scale`, `left`, `right`, `clip`. Dipakai lewat prop
  `variant="scale"` dsb pada tiap section.
- `SplitReveal.jsx` (baru): judul section (`About`, `Skills`, `Experience`, `Projects`)
  sekarang muncul per-kata dengan efek wipe/mask, bukan judul yang langsung nongol utuh.
- Skills section: garis penghubung antar step proses (SVG) sekarang **digambar mengikuti
  scroll** (scrub) dan titik-titik endpoint muncul pop satu per satu.
- Projects: kartu genap/ganjil slide dari kiri/kanan bergantian; studi kasus utama
  (MediLink) scale-in.
- Hero: parallax baru berbasis **posisi scroll** (bukan cuma mouse) — orb & starfield
  bergerak dengan kecepatan berbeda saat hero discroll keluar, memberi efek depth.
- `App.jsx` memanggil `ScrollTrigger.refresh()` setelah semua gambar/font selesai
  dimuat, supaya posisi trigger tidak meleset akibat pergeseran layout dari gambar
  yang telat load.
- Semua animasi menghormati `prefers-reduced-motion` (langsung tampil tanpa animasi).

## 2. Navbar: scrollspy + menu mobile
- Link nav aktif sekarang otomatis ter-highlight sesuai section yang sedang dilihat
  (scrollspy via IntersectionObserver).
- **Perbaikan bug**: sebelumnya di layar <700px, link navigasi hilang total tanpa
  pengganti apapun. Sekarang ada tombol hamburger yang membuka panel menu full-screen
  (linknya muncul dengan animasi stagger GSAP), lengkap dengan tombol "Hubungi Saya".

## 3. SEO & metadata (sebelumnya tidak ada sama sekali)
- `index.html`: meta description, keywords, theme-color, canonical, Open Graph
  (title/description/image), Twitter card, dan JSON-LD `Person` schema.
- Favicon lengkap: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`,
  `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` — di-crop otomatis dari
  `profile.png`.
- `og-image.jpg` (1200×630) — kartu share untuk WhatsApp/LinkedIn/Twitter, dibuat
  otomatis dengan foto profil + judul, warna sesuai tema biru situs.
- `site.webmanifest`, `robots.txt`, `sitemap.xml` baru.

**Penting**: ganti `https://fauzan-portfolio.example.com` di `index.html`,
`robots.txt`, dan `sitemap.xml` dengan domain asli setelah situs di-deploy —
saat ini masih placeholder karena saya belum tahu URL production-nya.

## Yang masih bisa dikembangkan lagi (belum dikerjakan)
- Smooth-scroll library (mis. Lenis) untuk feel "buttery" — sengaja dilewati dulu
  karena situs sudah pakai `scroll-behavior: smooth` native dan banyak animasi
  custom lain yang bergantung pada `window.scrollY` apa adanya; menambah Lenis
  butuh testing lebih hati-hati agar tidak bentrok.
- Kompresi gambar: beberapa file di `public/` (terutama `profile.png`, ~10MB) belum
  dioptimasi/di-resize untuk web — cukup besar dibanding ukuran tampil akhirnya.
- Form kontak saat ini masih mailto link, belum backend form (Formspree/Resend/dll).
