export const nav = {
  brand: "Fauzan",
  links: [
    { label: "Tentang", href: "#about" },
    { label: "Skill & Proses", href: "#skills" },
    { label: "Pengalaman", href: "#experience" },
    { label: "Karya", href: "#projects" },
    { label: "Kontak", href: "#contact" },
  ],
};

export const hero = {
  eyebrow: "Sistem Informasi · UI/UX Design",
  titleLine1: "Merancang Antarmuka",
  titleLineGrad: "yang Berpusat pada Manusia",
  subtitle:
    "Saya Fauzan — mahasiswa Sistem Informasi yang fokus pada UI/UX design dengan pendekatan User-Centered Design.",
  ctaPrimary: { label: "Lihat Karya Saya →", href: "#projects" },
  ctaGhost: { label: "Diskusi Project", href: "#contact" },
};

export const about = {
  photo: "/profile.png",
  description:
    "Saya adalah UI/UX Designer dengan latar belakang Sistem Informasi di Universitas Hasanuddin. Saya memiliki ketertarikan dalam merancang produk digital yang tidak hanya menarik secara visual, tetapi juga mampu memberikan pengalaman pengguna yang intuitif dan efektif.",
  academic:
  "Saya percaya bahwa desain yang baik lahir dari pemahaman yang mendalam terhadap kebutuhan pengguna, bukan sekadar mengikuti tren. Oleh karena itu, saya selalu mengutamakan proses riset, analisis, dan pemecahan masalah dalam setiap proyek yang saya kerjakan.",
  secondary:
    "Selain aktif mengembangkan kemampuan di bidang UI/UX, saya juga senang mempelajari teknologi baru dan berkolaborasi dengan berbagai pihak untuk mengubah ide menjadi solusi digital yang bermanfaat.",
};

export const skills = {
  items: [
    "User-Centered Design",
    "Figma",
    "Usability Testing",
    "Wireframing",
    "Design System",
    "User Research",
    "Prototyping",
    "Information Architecture",
  ],
  process: [
    {
      num: "01",
      title: "Discover",
      desc: "Memahami konteks pengguna, memetakan kebutuhan, dan mengidentifikasi masalah nyata melalui wawancara dan observasi.",
    },
    {
      num: "02",
      title: "Design",
      desc: "Menerjemahkan temuan riset menjadi wireframe, alur pengguna, dan desain antarmuka yang konsisten.",
    },
    {
      num: "03",
      title: "Test",
      desc: "Menguji prototipe menggunakan metode seperti Maze dan System Usability Scale untuk memvalidasi keputusan desain secara terukur.",
    },
    {
      num: "04",
      title: "Deliver",
      desc: "Menyempurnakan desain berdasarkan hasil pengujian dan menyiapkan dokumentasi yang siap diimplementasikan.",
    },
  ],
};

export const experience = {
  internships: [
    {
      id: "intern-diskominfo",
      role: "UI/UX Designer & Frontend Developer",
      org: "Dinas Komunikasi dan Informatika Kota Makassar",
      period: "Januari 2025 — Juni 2025",
      points: [
        "Merancang UI/UX untuk berbagai sistem dan layanan digital Pemerintah Kota Makassar, mulai dari user flow, wireframe, hingga prototype..",
        "Mengembangkan frontend yang responsif serta berkontribusi pada 6 proyek digital, termasuk SINERGI-JI, MARVEC Dashboard, Website Buku Tamu DISKOMINFO, Dashboard Kelurahan Cantik, Website AI CCTV, dan Dashboard Analisis CCTV Lorong.",
      ],
      certificate: "/sertifikat-diskominfo.jpg",
    },
    {
      id: "intern-choice",
      role: "UI/UX Designer",
      org: "CV. Choice Indonesia",
      period: "November 2025 — Februari 2026",
      points: [
        "Merancang UI/UX Sistem Informasi Manajemen Rumah Sakit (MediLink) untuk RSUD Wakatobi, mulai dari analisis kebutuhan pengguna, pembuatan wireframe, hingga desain antarmuka menggunakan Figma.",
        "Melakukan monitoring, pendampingan, dan memberikan arahan kepada peserta Praktik Kerja Lapangan (PKL) selama pelaksanaan proyek untuk memastikan pekerjaan berjalan sesuai standar dan target.",
      ],
      certificate: "/sertifikat-choice.jpg",
    },
  ],
  organizations: [
    {
      id: "org-himatika",
      role: "Anggota Eksternal",
      org: "Himpunan Mahasiswa Matematika (HIMATIKA) FMIPA Unhas",
      period: "September 2024 — Juli 2025",
      points: [
        "Menjalin hubungan dan kerja sama dengan pihak eksternal himpunan.",
        "Berkontribusi dalam program kerja bidang hubungan eksternal.",
      ],
    },
    {
      id: "org-hmi",
      role: "Sekretaris Umum",
      org: "Himpunan Mahasiswa Islam (HMI)",
      period: "Januari 2026",
      points: [
        "Mengelola administrasi dan kesekretariatan organisasi secara menyeluruh.",
        "Mendukung koordinasi program kerja antar bidang di kepengurusan.",
      ],
    },
    {
      id: "org-ltmi",
      role: "Deputi Teknologi Pendidikan dan Pemberdayaan SDM",
      org: "Lembaga Teknologi Mahasiswa Islam",
      period: "April 2025 — Juli 2026",
      points: [
        "Mengembangkan program terkait teknologi pendidikan dan pemberdayaan sumber daya manusia.",
        "Merancang inisiatif untuk meningkatkan kapasitas anggota di bidang teknologi.",
      ],
    },
  ],
};

export const projects = {
  list: [
    {
      id: "medilink",
      featured: true,
      tag: "STUDI KASUS UTAMA",
      title: "MediLink — Sistem Informasi Manajemen Rumah Sakit",
      summary:
        "Perancangan prototipe UI/UX untuk sistem manajemen rumah sakit, studi kasus RSUD Wakatobi.",
      description:
        "Perancangan prototipe UI/UX untuk sistem manajemen rumah sakit, studi kasus RSUD Wakatobi. Dirancang menggunakan pendekatan User-Centered Design, divalidasi melalui Maze usability testing, System Usability Scale, dan User Acceptance Test. Project ini mencakup riset kebutuhan pengguna, penyusunan wireframe, desain antarmuka, hingga pengujian usability untuk memastikan sistem mudah digunakan oleh staf rumah sakit.",
      meta: ["UCD", "Figma", "Usability Testing", "Skripsi"],
      accent: "blue",
      images: ["/medilink-1.png", "/medilink-2.png", "/medilink-3.png"],
      logo: "/medilink-logo.png",
    },
    {
      id: "yalla",
      featured: false,
      tag: "PROJECT",
      title: "Yalla App",
      summary:
        "Aplikasi travel penerbangan umrah yang menghubungkan berbagai penyelenggara travel dalam satu platform.",
      description:
        "Yalla App merupakan aplikasi travel penerbangan umrah yang menghubungkan berbagai penyelenggara travel dalam satu platform. Aplikasi ini memudahkan pengelolaan jadwal penerbangan, data jamaah, reservasi, pembayaran, serta pemantauan proses keberangkatan secara terintegrasi sehingga operasional travel menjadi lebih efisien.",
      meta: ["UI/UX", "Figma", "Mobile App"],
      accent: "cyan",
      images: ["/yalla_slide1.png", "/yalla_slide2.png", "/yalla_slide3.png"],
      logo: "/yalla-logo.jpg",
    },
    {
      id: "belibis",
      featured: false,
      tag: "PROJECT",
      title: "Belibis App",
      summary:
        "Aplikasi pemesanan tiket kapal online untuk memudahkan perjalanan antar pulau di wilayah Sorong.",
      description:
        "Belibis App adalah aplikasi pemesanan tiket kapal online yang dirancang untuk memudahkan perjalanan antar pulau di wilayah Sorong. Aplikasi ini memungkinkan pengguna mencari jadwal kapal, memilih kursi, melakukan pemesanan dan pembayaran, serta mengakses informasi perjalanan secara praktis melalui satu platform yang terintegrasi.",
      meta: ["UI/UX", "Figma", "Mobile App"],
      accent: "indigo",
      logo: "/belibis-logo.png",
      images: ["/belibis_slide1.png", "/belibis_slide2.png", "/belibis_slide3.png"],
    },
  ],
};

export const contact = {
  title: "Punya project yang ingin didiskusikan?",
  desc: "Terbuka untuk kolaborasi, magang, atau sekadar berdiskusi soal UI/UX dan riset pengguna.",
  email: "muh.fauzan0804@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/muhammad-fauzan-93a3bb349/", key: "linkedin" },
    { label: "Instagram", href: "https://instagram.com/faauuuzan", key: "instagram" },
    { label: "GitHub", href: "https://github.com/MuhammadFauzan04", key: "github" },
  ],
};

export const footer = {
  text: "© 2026 Fauzan. Merancang pengalaman digital yang bermakna",
};
