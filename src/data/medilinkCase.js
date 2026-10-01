// Konten studi kasus MediLink — bersumber dari skripsi:
// "Perancangan Prototipe UI/UX SIMRS MediLink Menggunakan Metode User Centered
// Design dan Analisis Kebutuhan Pengguna (Studi Kasus: RSUD Wakatobi)".
// Semua angka (Maze, SUS, UAT) diambil dari Bab III. Edit di sini, tampilan ikut berubah.
const img = (n) => `/medilink/${n}.webp`;

export const medilink = {
  title: "MediLink",
  subtitle:
    "Prototipe UI/UX Sistem Informasi Manajemen Rumah Sakit untuk RSUD Wakatobi, dirancang dengan metode User-Centered Design.",
  facts: [
    ["Peran", "UI/UX Designer & Peneliti"],
    ["Studi kasus", "RSUD Wakatobi (Instansi Mitra Magang)"],
    ["Periode", "November 2025 — Februari 2026"],
    ["Metode", "User-Centered Design"],
    ["Alat", "Figma, Maze, Draw.io, Google Form"],
  ],
  hero: "/medilink-1.png",
  stats: [
    { v: "86", l: "Skor SUS", s: "Grade A, Best Imaginable" },
    { v: "89", l: "Rata-rata MAUS", s: "Kategori Tinggi" },
    { v: "100%", l: "Task success", s: "18 skenario, 5 partisipan" },
    { v: "6/6", l: "Skenario UAT", s: "Berhasil" },
  ],

  context: {
    lead: "RSUD Wakatobi memakai SIMRS Kanza berbasis open source. Fungsinya memenuhi kebutuhan dasar, tetapi antarmukanya kurang intuitif sehingga sistem tidak dipakai secara optimal. Sebagai pusat kesehatan wilayah kepulauan, kendala antarmuka langsung memperlambat penanganan pasien.",
    problems: [
      "Menu sulit ditemukan karena navigasi tidak intuitif.",
      "Tampilan terlalu padat (cluttered) dan terkesan lawas.",
      "Alur kerja kompleks, padahal sistem dipakai saat jam sibuk dan situasi darurat.",
    ],
    informants: {
      note: "3 informan kunci dipilih dengan purposive sampling:",
      list: [
        ["1", "Tim teknis pendamping", "Memahami proses bisnis SIMRS end-to-end."],
        ["1", "Dokter", "Perwakilan pengguna akhir."],
        ["1", "Perawat", "Perwakilan pengguna akhir."],
      ],
    },
    actors: [
      "Admin", "Resepsionis", "Dokter", "Perawat",
      "Petugas Laboratorium", "Petugas Radiologi", "Petugas Kamar Operasi", "Apoteker",
    ],
    interviews: [
      { q: "Peran dan tanggung jawab", a: "Bervariasi, dari tenaga medis sampai staf administrasi pengelola data pasien." },
      { q: "Seberapa sering memakai sistem", a: "Rutin dan intensif setiap hari." },
      { q: "Fitur yang paling sering dipakai", a: "Pencatatan data pasien, pencarian rekam medis, administrasi layanan." },
      { q: "Kendala yang paling sering", a: "Menu sulit ditemukan, tampilan padat, alur kerja kompleks." },
      { q: "Kondisi saat memakai sistem", a: "Jam aktivitas tinggi dan situasi darurat yang butuh akses data cepat." },
    ],
  },

  needs: {
    lead: "Data wawancara terstruktur diklasifikasikan menjadi kebutuhan fungsional dan non-fungsional, lalu menjadi acuan desain.",
    insights: [
      { finding: "Penempatan menu tidak terorganisir, visual sistem dinilai lawas.", need: "Navigasi terorganisir menurut fungsi kerja, tanpa pindah halaman berlebihan." },
      { finding: "Data pasien dan status penunjang harus cepat diakses tanpa banyak klik.", need: "Pencarian data medis cepat dan penampilan ringkasan (summary data)." },
      { finding: "Antarmuka yang nyaman: bersih, modern, tidak padat, hierarki jelas.", need: "Antarmuka clean dengan hierarki informasi yang jelas." },
      { finding: "Pengguna ingin input data fleksibel lewat keyboard atau mouse.", need: "Optimasi pengisian formulir dengan shortcut dan tabbing." },
      { finding: "Perubahan yang diharapkan: desain lebih minimalis.", need: "Palet warna konsisten dan nyaman (biru dan hijau kontras)." },
    ],
    functional: [
      "Pengelolaan data pasien dan kunjungan (tambah, ubah, hapus, lihat rincian) untuk Resepsionis.",
      "Pencarian data medis cepat dan pengajuan penunjang untuk Dokter dan Perawat.",
      "Ringkasan data dan validasi hasil pemeriksaan untuk Laboratorium dan Radiologi.",
      "Pemindahan pasien antar ruangan dan dokumentasi intra-operatif untuk Kamar Operasi.",
      "Validasi resep masuk, resep luar, dan pengecekan ketersediaan obat untuk Farmasi.",
      "Pembatasan akses berdasarkan peran (Role-Based Access Control).",
    ],
    nonFunctional: [
      "Antarmuka bersih, modern, tidak padat, hierarki informasi jelas.",
      "Struktur navigasi terorganisir berdasarkan fungsi kerja.",
      "Pengisian formulir fleksibel lewat shortcut keyboard atau tabbing.",
      "Palet warna konsisten dan nyaman dipandang.",
      "Keamanan lewat login, autentikasi akun, dan proteksi data sensitif.",
    ],
  },

  design: {
    lead: "Kebutuhan diterjemahkan ke pemodelan sistem, design system, lalu prototipe high-fidelity di Figma.",
    modeling: [
      { t: "Use case diagram", d: "8 aktor dengan hak akses berbasis peran (RBAC). Relasi include untuk ketergantungan wajib, extend untuk layanan penunjang yang hanya berjalan atas instruksi dokter." },
      { t: "Activity diagram", d: "8 modul: manajemen pengguna, kunjungan harian, rawat inap, rawat jalan, laboratorium, radiologi, kamar operasi, dan farmasi." },
    ],
    logo: { src: img("ds-logo"), note: "Caduceus dan dua huruf M melambangkan Medical dan Management. Ikon hati menegaskan kepedulian pada pengalaman pengguna, dan garis melengkung melambangkan konektivitas data (Link)." },
    palette: {
      src: img("ds-palet"),
      main: [
        { name: "Primary", hex: "#0C2B4E", use: "Biru tua: profesional, stabil, tepercaya" },
        { name: "Secondary", hex: "#8595A6", use: "Abu kebiruan untuk elemen pendukung" },
      ],
      extra: [
        ["#C6DCC7", "#66CB6C", "#1A7320"],
        ["#FF383C", "#CF0B0B", "#970000"],
        ["#547792", "#4A70A9", "#1C63B4"],
      ],
      extraLabels: ["Hijau, status berhasil", "Merah, status gagal", "Biru, aksi dan info"],
    },
    type: {
      family: "Montserrat",
      note: "Sans-serif geometris dengan keterbacaan tinggi di berbagai ukuran layar. Hierarki dibangun lewat dua bobot (Regular dan Bold) pada tiga ukuran.",
      scale: [
        { role: "Judul halaman", weight: 700, size: 24, sample: "Ringkasan Dashboard" },
        { role: "Judul kartu", weight: 700, size: 16, sample: "Tren Kunjungan Pasien" },
        { role: "Label dan tombol", weight: 700, size: 12, sample: "Simpan Data Pasien" },
        { role: "Teks isi", weight: 400, size: 16, sample: "Menampilkan daftar pasien yang terdaftar dan menjalani pemeriksaan hari ini." },
        { role: "Teks bantu", weight: 400, size: 12, sample: "Status antrean real-time per unit layanan" },
      ],
    },
    components: {
      note: "Pustaka komponen reusable yang dipakai di semua modul agar pola interaksi konsisten dan kesalahan klik berkurang.",
    },
    screens: [
      { name: "Halaman masuk", src: img("ui-login"), d: "Autentikasi dengan nama pengguna dan kata sandi." },
      { name: "Dashboard", src: img("ui-dashboard"), d: "Ringkasan operasional dan akses cepat." },
      { name: "Data pengguna", src: img("ui-pengguna"), d: "Admin mengelola akun dan hak akses." },
      { name: "Kunjungan harian", src: img("ui-kunjungan"), d: "Pencatatan kunjungan pasien lama dan baru." },
      { name: "Rawat jalan", src: img("ui-rawat-jalan"), d: "Pemeriksaan, resep, penunjang, dan rujukan internal." },
      { name: "Rawat inap", src: img("ui-rawat-inap"), d: "Pemantauan pasien terintegrasi dengan unit penunjang." },
      { name: "Laboratorium", src: img("ui-lab"), d: "Antrean permintaan, input hasil, dan tarif." },
      { name: "Radiologi", src: img("ui-radiologi"), d: "Alur kerja disamakan dengan laboratorium agar cepat dikenali." },
      { name: "Kamar operasi", src: img("ui-kamar-operasi"), d: "Jadwal dan dokumentasi pra, intra, dan pasca operasi." },
      { name: "Farmasi", src: img("ui-farmasi"), d: "Validasi resep masuk dan penanganan resep luar." },
    ],
  },

  testing: {
    lead: "Tiga metode dipakai bersama. Perbedaan jumlah dan jenis responden disengaja, mengikuti tujuan tiap metode.",
    maze: {
      why: "Maze bersifat unmoderated, jadi penguji adalah 5 partisipan expert dari tim teknis mitra yang sudah memahami alur SIMRS. Jika mereka masih salah klik atau tersesat, itu indikator cacat desain.",
      maus: [
        ["Admin", 86], ["Resepsionis", 92], ["Dokter / Perawat", 88],
        ["Lab / Radiologi", 88], ["Petugas K.O", 93], ["Farmasi", 87],
      ],
      mausAvg: 89,
      roles: [
        { role: "Admin", tasks: [["Login ke sistem", 6.2, 64.3], ["Menambahkan pengguna", 10.1, 16.7], ["Menghapus pengguna", 10, 0]] },
        { role: "Resepsionis", tasks: [["Login ke sistem", 19.4, 0], ["Registrasi pasien baru", 49.9, 18.8], ["Registrasi pasien lama", 15.5, 5.6]] },
        { role: "Dokter / Perawat", tasks: [["Login ke sistem", 4.4, 58.3], ["Pencatatan pemeriksaan", 17.1, 0], ["Pengajuan penunjang (lab, rad)", 13.5, 25], ["Penjadwalan operasi", 5.5, 0], ["Pemberian resep obat", 23.6, 10.5]] },
        { role: "Lab / Radiologi", tasks: [["Login ke sistem", 4, 54.5], ["Input dan validasi hasil", 5.2, 0], ["Memperbarui tarif", 10.9, 0]] },
        { role: "Petugas K.O", tasks: [["Login ke sistem", 3.3, 44.4], ["Memperbarui status operasi", 5.7, 0], ["Memindahkan pasien ke rawat inap", 10.8, 0], ["Pengajuan penunjang (lab)", 13.5, 0], ["Dokumentasi intra-operatif", 7.7, 0]] },
        { role: "Farmasi", tasks: [["Login ke sistem", 8, 54.5], ["Validasi resep masuk", 9, 6.3], ["Proses tindakan lanjutan resep", 16.1, 40], ["Mencetak dokumen resep", 5.6, 0]] },
      ],
      findings: [
        "Seluruh 18 skenario selesai dengan jalur langsung (direct path) oleh kelima partisipan, success rate 100%.",
        "Misclick tinggi pada tugas login (44% sampai 64%) berasal dari klik pada field input yang terbaca sebagai misclick oleh Maze, bukan kebingungan navigasi.",
        "Satu tugas ditandai untuk ditinjau: pemberian resep obat (23,6 detik, misclick 10,5%) karena pengguna lebih lama menentukan jenis obat dan jenis resep.",
      ],
    },
    sus: {
      participants: 15,
      score: 86,
      grade: "Grade A, Best Imaginable",
      accept: "Acceptable",
      note: "Responden adalah pengguna akhir: tim teknis dan tenaga medis RSUD Wakatobi. Batas kelayakan SUS adalah 68.",
      scores: [80, 77.5, 80, 82.5, 95, 92.5, 95, 85, 87.5, 85, 87.5, 85, 82.5, 87.5, 85],
    },
    uat: {
      note: "Dilakukan bersama pihak pengembang di instansi mitra dengan teknik black box untuk memvalidasi kesesuaian fungsi terhadap kebutuhan.",
      rows: [
        { who: "Admin", scenario: "Menambah dan menghapus akun pengguna", expect: "Pop-up sukses dan akun muncul di daftar." },
        { who: "Resepsionis", scenario: "Registrasi kunjungan pasien baru dan lama", expect: "Pop-up sukses setelah tombol Simpan." },
        { who: "Dokter / Perawat", scenario: "Pemeriksaan rutin, pengajuan penunjang, jadwal operasi", expect: "Indikator permintaan telah diajukan." },
        { who: "Lab / Radiologi", scenario: "Validasi hasil dan update tarif", expect: "Status berubah menjadi Tervalidasi dan tarif terbarui." },
        { who: "Petugas K.O", scenario: "Pindah pasien, lab, dokumentasi intra-operatif", expect: "Pindah tab formulir lancar dan data terisi." },
        { who: "Farmasi", scenario: "Validasi resep, resep luar, cetak resep", expect: "Obat berpindah ke kategori Resep Luar." },
      ],
    },
  },

  iteration: {
    lead: "Menurut ISO 9241-210, iterasi diulang sampai hasil yang diinginkan tercapai. Karena target usability sudah terpenuhi di siklus pertama, tidak diperlukan iterasi kedua.",
    points: [
      "Skor SUS 86 melampaui ambang 68 dan tidak ditemukan usability catastrophe.",
      "Seluruh skenario Maze selesai lewat direct path dan seluruh skenario UAT berhasil.",
      "Satu catatan untuk pengembangan lanjutan: formulir resep obat (jenis obat dan jenis resep) paling lama dikerjakan, sehingga layak disederhanakan.",
    ],
    next: "Saran: merealisasikan rancangan ke sistem fungsional, lalu mengukur dampak jangka panjangnya terhadap durasi pelayanan dan penurunan kesalahan entri data medis.",
  },
};
