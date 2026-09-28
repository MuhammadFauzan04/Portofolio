// Bilingual content tree. Each top-level key under `content` is a full
// language variant (id/en) with the exact same shape, so components can
// simply do `const { hero } = useContent()` and get back whichever
// language is currently active — no scattered `field.id` / `field.en`
// lookups sprinkled through the JSX.

// Link prototype tiap project (Figma / Maze / dll). Isi URL di sini —
// otomatis dipakai di versi Indonesia & Inggris. Kosongkan ("") kalau belum
// ada; jika kosong, tombol di popup tampil nonaktif ("segera hadir").
export const prototypeLinks = {
  "medilink": "",
  "cbr-dent": "",
  "yalla": "",
  "belibis": "", // Belibis App + Website
  "project-placeholder-1": "", // Sinergi-Ji App
  "project-placeholder-2": "", // Pusaka Bugis Web
  "teazzi": "",
};

export const content = {
  id: {
    nav: {
      brand: "Fauzan",
      links: [
        { label: "Beranda", href: "#hero" },
        { label: "Tentang", href: "#about" },
        { label: "Skill & Proses", href: "#skills" },
        { label: "Karya", href: "#projects" },
        { label: "Pengalaman", href: "#experience" },
        { label: "Kontak", href: "#contact" },
      ],
    },

    hero: {
      eyebrow: "Sistem Informasi · UI/UX Design",
      titleLine1: "Merancang Antarmuka",
      titleLineGrad: "yang Berpusat pada Manusia",
      accentWord: "Berpusat",
      subtitle:
        "Saya Fauzan — mahasiswa Sistem Informasi yang fokus pada UI/UX design dengan pendekatan User-Centered Design.",
      ctaPrimary: { label: "Lihat Karya Saya →", href: "#projects" },
      ctaGhost: { label: "Diskusi Project", href: "#contact" },
      ctaCv: { label: "Unduh CV", href: "/cv-fauzan.pdf" },
      roles: [
        "UI/UX Designer",
        "Sistem Informasi",
        "User-Centered Design",
        "Frontend Enthusiast",
      ],
      focusLabel: "Fokus saat ini:",
      cityLabel: "Makassar, Indonesia",
      localTimeSuffix: "WITA — waktu setempat",
      scrollLabel: "SCROLL",
      cardLabel: "Lihat proyek ini",
      dragHint: "Tarik & lepas kartunya 👆",
    },

    about: {
      sectionLabel: "Tentang",
      sectionTitle: "Desain yang lahir dari riset, bukan tebakan.",
      photo: "/profile.png",
      photoAlt: "Foto profil",
      author: "Muhammad Fauzan — UI/UX Designer",
      statLabels: { projects: "Proyek\nDikerjakan", internships: "Pengalaman\nMagang", organizations: "Organisasi\nDiikuti" },
      badges: ["UI/UX Designer", "User-Centered Design", "Sistem Informasi"],
      description:
        "Saya adalah UI/UX Designer dengan latar belakang Sistem Informasi di Universitas Hasanuddin. Saya memiliki ketertarikan dalam merancang produk digital yang tidak hanya menarik secara visual, tetapi juga mampu memberikan pengalaman pengguna yang intuitif dan efektif.",
      academic:
        "Saya percaya bahwa desain yang baik lahir dari pemahaman yang mendalam terhadap kebutuhan pengguna, bukan sekadar mengikuti tren. Oleh karena itu, saya selalu mengutamakan proses riset, analisis, dan pemecahan masalah dalam setiap proyek yang saya kerjakan.",
      secondary:
        "Proses kreatif saya digerakkan oleh riset mendalam, pengujian ketergunaan, dan penerapan prinsip tata letak yang presisi. Saya berfokus pada penyusunan user journey yang mulus, alur kerja yang terstruktur, serta visual yang adaptif terhadap berbagai kebutuhan pengguna.   Dengan pemahaman teknis mengenai struktur frontend dan kolaborasi tim, saya mampu mengawal ide produk dari tahap konsep awal hingga siap dieksekusi oleh tim developer. Saya siap berkontribusi dalam membangun solusi digital yang berorientasi pada hasil dan pengalaman pengguna terbaik.",
    },

    skills: {
      sectionLabel: "Kemampuan",
      sectionTitle: "Skill yang saya kuasai",
      processLabel: "Pendekatan",
      processTitle: "Proses kerja saya",
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
          image: "/discover.jpg",
        },
        {
          num: "02",
          title: "Design",
          desc: "Menerjemahkan temuan riset menjadi wireframe, alur pengguna, dan desain antarmuka yang konsisten.",
          image: "/design.jpg",
        },
        {
          num: "03",
          title: "Test",
          desc: "Menguji prototipe menggunakan metode seperti Maze dan System Usability Scale untuk memvalidasi keputusan desain secara terukur.",
          image: "/test.jpg",
        },
        {
          num: "04",
          title: "Deliver",
          desc: "Menyempurnakan desain berdasarkan hasil pengujian dan menyiapkan dokumentasi yang siap diimplementasikan.",
          image: "/deliver.jpg",
        },
      ],
    },

    experience: {
      sectionLabel: "Pengalaman",
      sectionTitle: "Perjalanan magang dan organisasi",
      prevLabel: "Sebelumnya",
      nextLabel: "Selanjutnya",
      viewCertificateLabel: "Lihat Sertifikat",
      tabs: [
        { key: "internships", label: "Magang & Kerja" },
        { key: "certifications", label: "Sertifikasi & Pelatihan" },
        { key: "organizations", label: "Organisasi" },
      ],
      internships: [
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
      ],
      certifications: [
        {
          id: "cert-dibimbing-dsf54",
          role: "DSF 54.0 - Design Graphic & UI/UX",
          org: "Dibimbing",
          period: "September 2026",
          points: [
            "Mengikuti Design Sprint Festival (DSF) 54.0 bertema Graphic Design & UI/UX pada 14–18 September 2026.",
            "Memperdalam praktik desain grafis dan UI/UX melalui sesi pelatihan intensif bersama praktisi Dibimbing.",
          ],
          certificates: [
            {
              label: "Sertifikat Partisipasi",
              image: "/certificates/dibimbing-dsf54.jpg",
            },
          ],
        },
        {
          id: "cert-myskill-ux-research",
          role: "Introduction to UX Research",
          org: "MySkill",
          period: "September 2026",
          points: [
            "Menyelesaikan Short Class UI/UX Research and Design yang diselenggarakan oleh MySkill.",
            "Mempelajari dasar-dasar riset pengguna (UX Research) sebagai bagian dari proses perancangan produk digital.",
          ],
          certificates: [
            {
              label: "Sertifikat Partisipasi",
              image: "/certificates/myskill-ux-research.jpg",
            },
          ],
        },
        {
          id: "cert-dibimbing",
          role: "Event Online - Graphic Design & UI/UX Series",
          org: "Dibimbing",
          period: "Agustus 2026",
          points: [
            "Hari pertama membahas hierarki desain (design hierarchy) dalam UI, mencakup prinsip penataan elemen visual agar antarmuka lebih terstruktur dan mudah dipahami pengguna.",
            "Hari kedua membahas UX melalui pendekatan Design Thinking, mulai dari memahami permasalahan pengguna hingga merancang solusi yang berpusat pada kebutuhan mereka.",
          ],
          certificates: [
            {
              label: "Sertifikat Partisipasi",
              image: "/certificates/dibimbing-cert.jpg",
            },
          ],
        },
        {
          id: "cert-placeholder-2",
          role: "Design Thinking for Beginners",
          org: "Simplilearn SkillUp",
          period: "Agustus 2026",
          points: [
            "Mempelajari fondasi metodologi Design Thinking untuk perancangan produk dan pemecahan masalah yang berpusat pada pengguna (user-centric).",
            "Memahami tahapan inti perancangan mulai dari empathy, define problem, ideation, hingga validasi solusi desain.",
            "Mendapatkan sertifikasi terverifikasi dengan kode kredensial resmi: 10634858.",
          ],
          certificates: [
            {
              label: "Sertifikat Partisipasi",
              image: "/certificates/cert-simplilearn-design-thinking.jpg",
            },
          ],
        },
        {
          id: "cert-rakamin-uiux",
          role: "Kickstart UI UX Design Journey",
          org: "Rakamin Academy",
          period: "Agustus 2026",
          points: [
            "Mengikuti program Flexible Kickstart UI UX Design Journey untuk mempelajari dasar-dasar proses dan alur kerja UI/UX Design secara terstruktur.",
            "Menyelesaikan program dengan meraih predikat Excellent Grade.",
          ],
          certificates: [
            {
              label: "Sertifikat Partisipasi",
              image: "/certificates/rakamin-uiux-participation.jpg",
            },
            {
              label: "Sertifikat Pencapaian",
              image: "/certificates/rakamin-uiux-achievement.jpg",
            },
          ],
        },
      ],
      organizations: [
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
        {
          id: "org-hmi",
          org: "Himpunan Mahasiswa Islam (HMI)",
          periods: [
            {
              role: "Sekretaris Umum",
              period: "Januari 2026",
              points: [
                "Mengelola administrasi dan kesekretariatan organisasi secara menyeluruh.",
                "Mendukung koordinasi program kerja antar bidang di kepengurusan.",
              ],
            },
            {
              role: "Sekretaris Bidang PTKP",
              org: "Komisariat MIPA Unhas",
              period: "September 2024 — Desember 2025",
              points: [
                "Mengelola administrasi dan dokumentasi kegiatan Bidang PTKP secara berkala.",
                "Mendukung koordinasi dan pelaksanaan program kerja Bidang PTKP bersama pengurus lainnya.",
              ],
            },
          ],
        },
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
      ],
    },

    projects: {
      sectionLabel: "Karya Pilihan",
      sectionTitle: "Studi kasus",
      viewCaseStudyLabel: "Lihat detail studi kasus",
      viewDetailLabel: "Lihat detail",
      filterAllLabel: "Semua",
      list: [
        {
          id: "medilink",
          featured: true,
          tag: "STUDI KASUS UTAMA",
          category: "Website",
          kind: "web",
          title: "MediLink — Sistem Informasi Manajemen Rumah Sakit",
          summary:
            "Perancangan prototipe UI/UX untuk sistem manajemen rumah sakit, studi kasus RSUD Wakatobi.",
          description:
            "Perancangan prototipe UI/UX untuk sistem manajemen rumah sakit, studi kasus RSUD Wakatobi. Dirancang menggunakan pendekatan User-Centered Design, divalidasi melalui Maze usability testing, System Usability Scale, dan User Acceptance Test. Project ini mencakup riset kebutuhan pengguna, penyusunan wireframe, desain antarmuka, hingga pengujian usability untuk memastikan sistem mudah digunakan oleh staf rumah sakit.",
          meta: ["UCD", "Figma", "Usability Testing", "Skripsi", "CV. Choice Indonesia", "Project Magang"],
          painPoints: [
            {
              problem:
                "Proses manajemen rumah sakit di RSUD Wakatobi sebelumnya masih berjalan manual, mulai dari pencatatan data pasien hingga koordinasi antar staf, sehingga rawan human error dan memperlambat pelayanan.",
              solution:
                "Merancang alur kerja digital yang tersentralisasi dengan pendekatan User-Centered Design, sehingga staf punya satu sistem yang jelas untuk mencatat dan mengakses data tanpa proses manual berulang.",
            },
            {
              problem:
                "Sistem informasi yang tersedia sebelumnya memiliki tampilan antarmuka yang kompleks dan kurang menarik, membuat staf rumah sakit kesulitan dan enggan beradaptasi saat menggunakannya.",
              solution:
                "Menyederhanakan hierarki visual dan alur navigasi lewat wireframe hingga high-fidelity design, lalu memvalidasinya melalui Maze usability testing, System Usability Scale, dan User Acceptance Test agar terbukti lebih mudah dipakai.",
            },
          ],
          accent: "blue",
          images: ["/medilink-1.png", "/medilink-2.png", "/medilink-3.png"],
          logo: "/medilink-logo.png",
        },
        {
          id: "cbr-dent",
          featured: false,
          tag: "PROJECT",
          category: "Website",
          kind: "web",
          title: "CBR-Dent — Sistem Manajemen Klinik Gigi",
          summary:
            "Sistem manajemen klinik gigi berbasis Case-Based Reasoning (CBR) untuk rekomendasi desain obturator secara otomatis.",
          description:
            "CBR-Dent adalah sistem manajemen klinik gigi yang membantu dokter mengelola data pasien, riwayat konsultasi, dan administrasi klinik dalam satu platform. Fitur utamanya adalah modul analisis CBR (Case-Based Reasoning) yang menganalisis parameter klinis pasien untuk merekomendasikan desain obturator yang paling sesuai, lengkap dengan skor akurasi dan riwayat kasus serupa sebagai referensi.",
          meta: ["UI/UX", "Figma", "Website", "Case-Based Reasoning", "Project Freelance"],
          painPoints: [
            {
              problem:
                "Data pasien, riwayat konsultasi, dan administrasi klinik gigi sebelumnya dikelola manual dan terpisah-pisah, membuat pencarian riwayat kasus lama memakan waktu.",
              solution:
                "Menyatukan seluruh data pasien dan administrasi klinik dalam satu platform, sehingga dokter bisa mengakses riwayat kasus tanpa berpindah-pindah catatan.",
            },
            {
              problem:
                "Penentuan desain obturator sebelumnya mengandalkan pertimbangan manual dokter berdasarkan pengalaman pribadi, tanpa referensi kasus serupa yang terstruktur.",
              solution:
                "Membangun modul Case-Based Reasoning yang menganalisis parameter klinis pasien dan merekomendasikan desain obturator secara otomatis, lengkap dengan skor akurasi dan riwayat kasus serupa sebagai pembanding.",
            },
          ],
          accent: "teal",
          images: ["/cbr-dent-1.png", "/cbr-dent-2.png", "/cbr-dent-3.png"],
          logo: "/cbr-dent-logo.png",
        },
        {
          id: "yalla",
          featured: false,
          tag: "PROJECT",
          category: "Aplikasi Mobile",
          kind: "mobile",
          title: "Yalla App",
          summary:
            "Aplikasi travel penerbangan umrah yang menghubungkan berbagai penyelenggara travel dalam satu platform.",
          description:
            "Yalla App merupakan aplikasi travel penerbangan umrah yang menghubungkan berbagai penyelenggara travel dalam satu platform. Aplikasi ini memudahkan pengelolaan jadwal penerbangan, data jamaah, reservasi, pembayaran, serta pemantauan proses keberangkatan secara terintegrasi sehingga operasional travel menjadi lebih efisien.",
          meta: ["UI/UX", "Figma", "Mobile App", "Project Freelance"],
          painPoints: [
            {
              problem:
                "Setiap penyelenggara travel umrah sebelumnya mengelola jadwal penerbangan, data jamaah, dan reservasi secara manual dan terpisah, sehingga sulit dipantau secara terpusat.",
              solution:
                "Merancang satu platform yang menghubungkan berbagai penyelenggara travel, mencakup jadwal penerbangan, data jamaah, reservasi, pembayaran, hingga pemantauan keberangkatan secara terintegrasi.",
            },
          ],
          accent: "cyan",
          images: ["/yalla_slide1.png", "/yalla_slide2.png", "/yalla_slide3.png"],
          logo: "/yalla-logo.jpg",
        },
        {
          id: "belibis",
          featured: false,
          tag: "PROJECT",
          category: "Aplikasi Mobile & Website",
          categories: ["Aplikasi Mobile", "Website"],
          kind: "mobile",
          title: "Belibis — Aplikasi & Website Tiket Kapal",
          summary:
            "Ekosistem pemesanan tiket kapal antar pulau di wilayah Sorong: aplikasi mobile untuk penumpang dan website khusus untuk petugas loket.",
          description:
            "Belibis adalah ekosistem pemesanan tiket kapal online untuk memudahkan perjalanan antar pulau di wilayah Sorong. Aplikasi mobile memungkinkan penumpang mencari jadwal kapal, memilih kursi, memesan dan membayar, serta mengakses informasi perjalanan. Sementara itu, website khusus petugas loket digunakan untuk mencatat pembelian tiket secara offline dan memproses check-in penumpang langsung di lokasi, sehingga seluruh transaksi terpusat di satu sistem.",
          meta: ["UI/UX", "Figma", "Mobile App", "Website", "Belbis Group", "Project Freelance"],
          painPoints: [
            {
              problem:
                "Aplikasi — Pemesanan tiket kapal antar pulau di wilayah Sorong sebelumnya harus dilakukan manual langsung ke loket, tanpa bisa mengecek jadwal atau ketersediaan kursi dari jarak jauh.",
              solution:
                "Merancang aplikasi mobile yang memungkinkan pengguna mencari jadwal, memilih kursi, memesan, membayar, dan mengakses info perjalanan langsung dari ponsel.",
            },
            {
              problem:
                "Website Loket — Transaksi tiket offline dan verifikasi kehadiran penumpang di loket sebelumnya dicatat manual, rawan selisih pencatatan atau kehilangan data saat kondisi ramai.",
              solution:
                "Membuat website khusus loket untuk mencatat transaksi dan memproses check-in penumpang secara terpusat dalam satu platform, menggantikan pencatatan manual.",
            },
          ],
          accent: "indigo",
          logo: "/belibis-logo.png",
          // Cover: 1 laptop + 1 handphone (galeri di popup tetap memakai semua images)
          cover: { laptop: "/web-belibis-1.png", phone: "/belibis_slide1.png" },
          images: ["/belibis_slide1.png", "/belibis_slide2.png", "/belibis_slide3.png", "/web-belibis-1.png", "/web-belibis-2.png", "/web-belibis-3.png", "/web-belibis-4.png"],
        },
        {
          id: "project-placeholder-1",
          featured: false,
          tag: "PROJECT",
          category: "Aplikasi Mobile",
          kind: "mobile",
          title: "Sinergi - Ji App",
          summary:
            "SINERGI-JI Aplikasi pelaporan dan pemantauan gangguan jaringan internet untuk instansi pemerintah di Kota Makassar.",
          description:
            "SINERGI-JI (Sinergi Jaringan Intra Pemerintah) memudahkan setiap kantor kedinasan di Kota Makassar melaporkan gangguan jaringan internet secara cepat dan terstruktur, menggantikan pelaporan manual via telepon. Laporan bisa dipantau statusnya secara real-time hingga ditangani tim teknis.",
          painPoints: [
            {
              problem:
                "Pelaporan gangguan jaringan internet antar kantor kedinasan di Kota Makassar sebelumnya dilakukan manual lewat telepon, tanpa pencatatan atau status penanganan yang jelas.",
              solution:
                "Membangun aplikasi mobile untuk melaporkan gangguan secara terstruktur dan memantau status penanganannya secara real-time hingga selesai ditangani tim teknis.",
            },
          ],
          meta: [
            "UI/UX",
            "Figma",
            "Flutter",
            "Frontend",
            "Mobile App",
            "Dinas Komunikasi dan Informatika Kota Makassar",
            "Project Magang",
          ],
          accent: "violet",
          logo: "/sinergiji-logo.png",
          images: ["/sinergiji-2.png", "/sinergiji-3.png", "/sinergiji-1.png"],
        },
        {
          id: "project-placeholder-2",
          featured: false,
          tag: "PROJECT",
          category: "Website",
          kind: "web",
          title: "Pusaka Bugis Web",
          summary:
            "Website eksplorasi budaya keris Bugis di Kabupaten Bone, dilengkapi fitur scan pamor keris",
          description:
            "Pusaka Bugis adalah website yang menampilkan nilai-nilai dan sejarah budaya keris khas Kabupaten Bone, memperkenalkan makna filosofis di balik setiap pusaka kepada masyarakat luas. Website ini juga dilengkapi fitur scan pamor, memungkinkan pengguna mengecek dan mengenali jenis pamor pada keris yang mereka miliki secara mudah",
          meta: ["UI/UX", "Figma", "Website", "LPDP", "Project Freelance"],
          painPoints: [
            {
              problem:
                "Informasi sejarah dan nilai filosofis keris Bugis Bone sebelumnya tersebar dan sulit diakses masyarakat luas, sementara mengenali jenis pamor pada keris membutuhkan keahlian khusus.",
              solution:
                "Merancang website edukasi terpusat yang dilengkapi fitur scan pamor, sehingga siapa pun bisa mempelajari sejarah keris sekaligus mengenali jenis pamor keris mereka sendiri secara mandiri.",
            },
          ],
          accent: "amber",
          logo: "/pusakabugis-logo.png",
          images: ["/pusakabugis-1.png", "/pusakabugis-2.png", "/pusakabugis-3.png"],
        },
        {
          id: "teazzi",
          featured: false,
          tag: "PROJECT",
          category: "Aplikasi Mobile",
          kind: "mobile",
          title: "Teazzi — Aplikasi Pemesanan Minuman Teh",
          summary:
            "Aplikasi pemesanan teh dan minuman kekinian dengan fitur promo, kategori menu, dan pelacakan status pesanan.",
          description:
            "Teazzi adalah aplikasi mobile untuk pemesanan minuman teh (tea shop) yang dirancang sebagai eksplorasi UI/UX pribadi. Aplikasi ini mencakup splash screen dengan identitas brand, halaman beranda dengan promo dan kategori menu, rekomendasi produk, hingga halaman pesanan yang menampilkan status pesanan aktif secara real-time dan riwayat transaksi.",
          meta: ["UI/UX", "Figma", "Mobile App", "Project Pribadi"],
          painPoints: [
            {
              problem:
                "Pemesanan minuman kekinian di gerai fisik biasanya mengharuskan pelanggan antre langsung dan tidak bisa memantau status pesanannya sendiri.",
              solution:
                "Merancang aplikasi mobile dengan kategori menu, promo, rekomendasi produk, dan pelacakan status pesanan secara real-time agar pelanggan bisa pesan tanpa antre.",
            },
          ],
          accent: "teal",
          logo: "/teazzi-logo.png",
          images: ["/teazzi-1.png", "/teazzi-2.png", "/teazzi-3.png", "/teazzi-4.png"],
        },
      ],
    },

    contact: {
      title: "Punya project yang ingin didiskusikan?",
      desc: "Terbuka untuk kolaborasi, magang, atau sekadar berdiskusi soal UI/UX dan riset pengguna.",
      email: "muh.fauzan0804@gmail.com",
      sendEmailLabel: "Kirim Email →",
      socials: [
        { label: "LinkedIn", href: "https://linkedin.com/in/muhammad-fauzan-93a3bb349/", key: "linkedin" },
        { label: "Instagram", href: "https://instagram.com/faauuuzan", key: "instagram" },
        { label: "GitHub", href: "https://github.com/MuhammadFauzan04", key: "github" },
      ],
    },

    footer: {
      text: "© 2026 Fauzan. Merancang pengalaman digital yang bermakna",
    },

    ui: {
      contactCta: "Hubungi Saya",
      contactCtaArrow: "Hubungi Saya →",
      closeMenu: "Tutup menu",
      openMenu: "Buka menu",
      close: "Tutup",
      prevCertificate: "Sertifikat sebelumnya",
      nextCertificate: "Sertifikat berikutnya",
      openInNewTab: "Buka di tab baru ↗",
      defaultCertificateLabel: "Sertifikat",
      certificateUnavailablePrefix: "Sertifikat belum tersedia. Tambahkan file gambar ke folder",
      certificateUnavailableSuffix: "dengan nama",
      certificateOf: (role, org) => `Sertifikat ${role} di ${org}`,
      backToTop: "Kembali ke atas",
      preparingExperience: "Menyiapkan pengalaman",
      loadingPage: (progress) => `Memuat halaman, ${progress}%`,
      languageToggleLabel: "Ganti ke Bahasa Inggris",
      previewLabel: "Pratinjau",
      prototypeLabel: "Lihat Prototype",
      prototypeSoonLabel: "Prototype segera hadir",
      slideLabel: "Slide",
      challengeLabel: "Pain Point",
      solutionLabel: "Solusi",
    },
  },

  en: {
    nav: {
      brand: "Fauzan",
      links: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Skills & Process", href: "#skills" },
        { label: "Work", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
      ],
    },

    hero: {
      eyebrow: "Information Systems · UI/UX Design",
      titleLine1: "Designing Interfaces",
      titleLineGrad: "Centered Around People",
      accentWord: "Centered",
      subtitle:
        "I'm Fauzan — an Information Systems student focused on UI/UX design with a User-Centered Design approach.",
      ctaPrimary: { label: "View My Work →", href: "#projects" },
      ctaCv: { label: "Download CV", href: "/cv-fauzan.pdf" },
      ctaGhost: { label: "Discuss a Project", href: "#contact" },
      roles: [
        "UI/UX Designer",
        "Information Systems",
        "User-Centered Design",
        "Frontend Enthusiast",
      ],
      focusLabel: "Currently focused on:",
      cityLabel: "Makassar, Indonesia",
      localTimeSuffix: "WITA — local time",
      scrollLabel: "SCROLL",
      cardLabel: "See about this project",
      dragHint: "Drag & drop the card 👆",
    },

    about: {
      sectionLabel: "About",
      sectionTitle: "Design born from research, not guesswork.",
      photo: "/profile.png",
      photoAlt: "Profile photo",
      author: "Muhammad Fauzan — UI/UX Designer",
      statLabels: { projects: "Projects\nDelivered", internships: "Internship\nExperiences", organizations: "Organizations\nJoined" },
      badges: ["UI/UX Designer", "User-Centered Design", "Information Systems"],
      description:
        "I'm a UI/UX Designer with an Information Systems background from Universitas Hasanuddin. I'm interested in designing digital products that are not only visually appealing, but also deliver an intuitive and effective user experience.",
      academic:
        "I believe good design comes from a deep understanding of user needs, not just following trends. That's why I always prioritize research, analysis, and problem-solving in every project I work on.",
      secondary:
        "Besides actively developing my UI/UX skills, I also enjoy learning new technologies and collaborating with different people to turn ideas into useful digital solutions.",
    },

    skills: {
      sectionLabel: "Skills",
      sectionTitle: "What I bring to the table",
      processLabel: "Approach",
      processTitle: "My working process",
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
          desc: "Understanding user context, mapping needs, and identifying real problems through interviews and observation.",
          image: "/discover.jpg",
        },
        {
          num: "02",
          title: "Design",
          desc: "Translating research findings into wireframes, user flows, and consistent interface designs.",
          image: "/design.jpg",
        },
        {
          num: "03",
          title: "Test",
          desc: "Testing prototypes using methods like Maze and the System Usability Scale to validate design decisions with real data.",
          image: "/test.jpg",
        },
        {
          num: "04",
          title: "Deliver",
          desc: "Refining the design based on testing results and preparing documentation ready for implementation.",
          image: "/deliver.jpg",
        },
      ],
    },

    experience: {
      sectionLabel: "Experience",
      sectionTitle: "Internship & organizational journey",
      prevLabel: "Previous",
      nextLabel: "Next",
      viewCertificateLabel: "View Certificate",
      tabs: [
        { key: "internships", label: "Internships & Work" },
        { key: "certifications", label: "Certifications & Training" },
        { key: "organizations", label: "Organizations" },
      ],
      internships: [
        {
          id: "intern-choice",
          role: "UI/UX Designer",
          org: "CV. Choice Indonesia",
          period: "November 2025 — February 2026",
          points: [
            "Designed the UI/UX for a Hospital Management Information System (MediLink) for RSUD Wakatobi, from user needs analysis and wireframing to interface design in Figma.",
            "Monitored and mentored internship (PKL) participants throughout the project, providing direction to keep the work on track with the required standards and targets.",
          ],
          certificate: "/sertifikat-choice.jpg",
        },
        {
          id: "intern-diskominfo",
          role: "UI/UX Designer & Frontend Developer",
          org: "Communication and Informatics Agency of Makassar City (Diskominfo)",
          period: "January 2025 — June 2025",
          points: [
            "Designed UI/UX for various digital systems and services for the Makassar City Government, from user flow and wireframes through to prototypes.",
            "Developed responsive frontends and contributed to 6 digital projects, including SINERGI-JI, the MARVEC Dashboard, the DISKOMINFO Guest Book website, the Kelurahan Cantik Dashboard, the AI CCTV website, and the Lorong CCTV Analysis Dashboard.",
          ],
          certificate: "/sertifikat-diskominfo.jpg",
        },
      ],
      certifications: [
        {
          id: "cert-dibimbing-dsf54",
          role: "DSF 54.0 - Design Graphic & UI/UX",
          org: "Dibimbing",
          period: "September 2026",
          points: [
            "Took part in Design Sprint Festival (DSF) 54.0 on Graphic Design & UI/UX, held 14–18 September 2026.",
            "Deepened graphic design and UI/UX practice through an intensive training track led by Dibimbing practitioners.",
          ],
          certificates: [
            {
              label: "Participation Certificate",
              image: "/certificates/dibimbing-dsf54.jpg",
            },
          ],
        },
        {
          id: "cert-myskill-ux-research",
          role: "Introduction to UX Research",
          org: "MySkill",
          period: "September 2026",
          points: [
            "Completed the UI/UX Research and Design Short Class held by MySkill.",
            "Learned the fundamentals of UX Research as part of the digital product design process.",
          ],
          certificates: [
            {
              label: "Participation Certificate",
              image: "/certificates/myskill-ux-research.jpg",
            },
          ],
        },
        {
          id: "cert-dibimbing",
          role: "Online Event - Graphic Design & UI/UX Series",
          org: "Dibimbing",
          period: "August 2026",
          points: [
            "Day one covered UI design hierarchy, including the principles of arranging visual elements for a clearer, more structured interface.",
            "Day two covered UX through the Design Thinking approach, from understanding user problems to designing solutions centered on their needs.",
          ],
          certificates: [
            {
              label: "Participation Certificate",
              image: "/certificates/dibimbing-cert.jpg",
            },
          ],
        },
        {
          id: "cert-placeholder-2",
          role: "Design Thinking for Beginners",
          org: "Simplilearn SkillUp",
          period: "August 2026",
          points: [
            "Learned the fundamentals of the Design Thinking methodology for user-centric product design and problem-solving.",
            "Understood the core design stages, from empathy and defining the problem through to ideation and validating design solutions.",
            "Earned a verified certification with official credential code: 10634858.",
          ],
          certificates: [
            {
              label: "Participation Certificate",
              image: "/certificates/cert-simplilearn-design-thinking.jpg",
            },
          ],
        },
        {
          id: "cert-rakamin-uiux",
          role: "Kickstart UI UX Design Journey",
          org: "Rakamin Academy",
          period: "August 2026",
          points: [
            "Completed the Flexible Kickstart UI UX Design Journey program to learn the fundamentals of the UI/UX design process and workflow in a structured way.",
            "Finished the program with an Excellent Grade.",
          ],
          certificates: [
            {
              label: "Participation Certificate",
              image: "/certificates/rakamin-uiux-participation.jpg",
            },
            {
              label: "Achievement Certificate",
              image: "/certificates/rakamin-uiux-achievement.jpg",
            },
          ],
        },
      ],
      organizations: [
        {
          id: "org-ltmi",
          role: "Deputy of Educational Technology and Human Resource Development",
          org: "Muslim Student Technology Institute",
          period: "April 2025 — July 2026",
          points: [
            "Developed programs related to educational technology and human resource development.",
            "Designed initiatives to strengthen members' capacity in the field of technology.",
          ],
        },
        {
          id: "org-hmi",
          org: "Muslim Student Association (HMI)",
          periods: [
            {
              role: "Secretary General",
              period: "January 2026",
              points: [
                "Managed the organization's overall administration and secretariat functions.",
                "Supported cross-divisional coordination of work programs within the board.",
              ],
            },
            {
              role: "Secretary of the PTKP Division",
              org: "MIPA Unhas Chapter",
              period: "September 2024 — December 2025",
              points: [
                "Managed the administration and documentation of the PTKP Division's activities on a regular basis.",
                "Supported the coordination and execution of the PTKP Division's work programs together with fellow board members.",
              ],
            },
          ],
        },
        {
          id: "org-himatika",
          role: "External Relations Member",
          org: "Mathematics Student Association (HIMATIKA), FMIPA Unhas",
          period: "September 2024 — July 2025",
          points: [
            "Built relationships and partnerships with external parties on behalf of the association.",
            "Contributed to work programs in the external relations division.",
          ],
        },
      ],
    },

    projects: {
      sectionLabel: "Selected Work",
      sectionTitle: "Case Studies",
      viewCaseStudyLabel: "View case study",
      viewDetailLabel: "View details",
      filterAllLabel: "All",
      list: [
        {
          id: "medilink",
          featured: true,
          tag: "MAIN CASE STUDY",
          category: "Website",
          kind: "web",
          title: "MediLink — Hospital Management Information System",
          summary:
            "UI/UX prototype design for a hospital management system, case study of RSUD Wakatobi.",
          description:
            "UI/UX prototype design for a hospital management system, case study of RSUD Wakatobi. Designed using a User-Centered Design approach and validated through Maze usability testing, the System Usability Scale, and User Acceptance Testing. The project covered user needs research, wireframing, and interface design through to usability testing, ensuring the system is easy for hospital staff to use.",
          meta: ["UCD", "Figma", "Usability Testing", "Thesis", "CV. Choice Indonesia", "Internship Project"],
          painPoints: [
            {
              problem:
                "Hospital management at RSUD Wakatobi previously ran on manual processes, from patient data entry to staff coordination, which was error-prone and slowed down service.",
              solution:
                "Designed a centralized digital workflow using a User-Centered Design approach, giving staff one clear system to record and access data instead of repeated manual steps.",
            },
            {
              problem:
                "The existing information system had a complex, unappealing interface, making it hard for hospital staff to adapt to and discouraging them from using it.",
              solution:
                "Simplified the visual hierarchy and navigation flow from wireframes to high-fidelity design, then validated it through Maze usability testing, the System Usability Scale, and User Acceptance Testing to prove it was easier to use.",
            },
          ],
          accent: "blue",
          images: ["/medilink-1.png", "/medilink-2.png", "/medilink-3.png"],
          logo: "/medilink-logo.png",
        },
        {
          id: "cbr-dent",
          featured: false,
          tag: "PROJECT",
          category: "Website",
          kind: "web",
          title: "CBR-Dent — Dental Clinic Management System",
          summary:
            "A Case-Based Reasoning (CBR) dental clinic management system for automatic obturator design recommendations.",
          description:
            "CBR-Dent is a dental clinic management system that helps dentists manage patient data, consultation history, and clinic administration in one platform. Its core feature is a Case-Based Reasoning (CBR) analysis module that evaluates a patient's clinical parameters to recommend the most suitable obturator design, complete with an accuracy score and similar past cases for reference.",
          meta: ["UI/UX", "Figma", "Web App", "Case-Based Reasoning", "Project Freelance"],
          painPoints: [
            {
              problem:
                "Patient data, consultation history, and clinic administration were previously handled manually and kept in separate records, making it slow to look up past cases.",
              solution:
                "Brought patient data and clinic administration together in one platform, so dentists can pull up case history without switching between separate records.",
            },
            {
              problem:
                "Obturator design decisions relied on each dentist's manual judgment and personal experience, with no structured reference to similar past cases.",
              solution:
                "Built a Case-Based Reasoning module that analyzes a patient's clinical parameters and automatically recommends an obturator design, complete with an accuracy score and similar past cases for comparison.",
            },
          ],
          accent: "teal",
          images: ["/cbr-dent-1.png", "/cbr-dent-2.png", "/cbr-dent-3.png"],
          logo: "/cbr-dent-logo.png",
        },
        {
          id: "yalla",
          featured: false,
          tag: "PROJECT",
          category: "Mobile App",
          kind: "mobile",
          title: "Yalla App",
          summary:
            "An Umrah flight travel app that connects multiple travel agencies on a single platform.",
          description:
            "Yalla App is an Umrah flight travel app that connects multiple travel agencies on a single platform. It simplifies flight scheduling, pilgrim data management, reservations, payments, and departure tracking in one integrated system, making travel operations more efficient.",
          meta: ["UI/UX", "Figma", "Mobile App", "Freelance Project"],
          painPoints: [
            {
              problem:
                "Each Umrah travel agency previously managed flight schedules, pilgrim data, and reservations manually and separately, making it hard to track everything in one place.",
              solution:
                "Designed a single platform connecting multiple travel agencies, covering flight scheduling, pilgrim data, reservations, payments, and departure tracking in one integrated system.",
            },
          ],
          accent: "cyan",
          images: ["/yalla_slide1.png", "/yalla_slide2.png", "/yalla_slide3.png"],
          logo: "/yalla-logo.jpg",
        },
        {
          id: "belibis",
          featured: false,
          tag: "PROJECT",
          category: "Mobile App & Website",
          categories: ["Mobile App", "Website"],
          kind: "mobile",
          title: "Belibis — Ferry Ticketing App & Website",
          summary:
            "An inter-island ferry ticketing ecosystem for the Sorong region: a mobile app for passengers and a dedicated website for counter staff.",
          description:
            "Belibis is an online ferry ticketing ecosystem that makes inter-island travel in the Sorong region easier. The mobile app lets passengers search ferry schedules, pick seats, book and pay, and access trip information. A dedicated website for counter staff records offline ticket purchases and processes passenger check-in on site, keeping every transaction in one centralized system.",
          meta: ["UI/UX", "Figma", "Mobile App", "Website", "Belbis Group", "Project Freelance"],
          painPoints: [
            {
              problem:
                "App — Booking inter-island ferry tickets in the Sorong region previously meant going in person to a ticket counter, with no way to check schedules or seat availability remotely.",
              solution:
                "Designed a mobile app that lets users search schedules, pick seats, book, pay, and access trip information directly from their phone.",
            },
            {
              problem:
                "Counter Website — Offline ticket transactions and passenger check-in at the counter were previously logged by hand, risking mismatched records or lost data during busy periods.",
              solution:
                "Built a dedicated counter-staff website to log transactions and process passenger check-in from one centralized platform, replacing manual record-keeping.",
            },
          ],
          accent: "indigo",
          logo: "/belibis-logo.png",
          // Cover: 1 laptop + 1 handphone (galeri di popup tetap memakai semua images)
          cover: { laptop: "/web-belibis-1.png", phone: "/belibis_slide1.png" },
          images: ["/belibis_slide1.png", "/belibis_slide2.png", "/belibis_slide3.png", "/web-belibis-1.png", "/web-belibis-2.png", "/web-belibis-3.png", "/web-belibis-4.png"],
        },
        {
          id: "project-placeholder-1",
          featured: false,
          tag: "PROJECT",
          category: "Mobile App",
          kind: "mobile",
          title: "Sinergi - Ji App",
          summary:
            "SINERGI-JI is an app for reporting and monitoring internet network disruptions for government agencies in Makassar City.",
          description:
            "SINERGI-JI (Government Intra-Network Synergy) makes it easy for every government office in Makassar City to report internet network disruptions quickly and in a structured way, replacing manual phone-based reporting. Reports can be tracked in real time until they're resolved by the technical team.",
          painPoints: [
            {
              problem:
                "Reporting internet network disruptions across government offices in Makassar City previously happened over the phone, with no structured record or clear status of the fix.",
              solution:
                "Built a mobile app for structured disruption reporting, with real-time status tracking until the technical team resolves it.",
            },
          ],
          meta: [
            "UI/UX",
            "Figma",
            "Flutter",
            "Frontend",
            "Mobile App",
            "Communication and Informatics Agency of Makassar City",
            "Project Internship",
          ],
          accent: "violet",
          logo: "/sinergiji-logo.png",
          images: ["/sinergiji-2.png", "/sinergiji-3.png", "/sinergiji-1.png"],
        },
        {
          id: "project-placeholder-2",
          featured: false,
          tag: "PROJECT",
          category: "Website",
          kind: "web",
          title: "Pusaka Bugis Web",
          summary:
            "A website exploring Bugis keris (dagger) culture in Bone Regency, featuring a keris pamor pattern scanner.",
          description:
            "Pusaka Bugis is a website showcasing the values and history of the traditional keris culture of Bone Regency, introducing the philosophical meaning behind each heirloom to a wider audience. The site also includes a pamor-scanning feature, letting users easily check and identify the pamor pattern on their own keris.",
          meta: ["UI/UX", "Figma", "Website", "LPDP", "Project Freelance"],
          painPoints: [
            {
              problem:
                "Historical and philosophical knowledge about Bone's Bugis keris was scattered and hard for the public to access, and identifying a keris's pamor pattern required specialist expertise.",
              solution:
                "Designed a centralized educational website with a pamor-scanning feature, so anyone can learn keris history and identify their own keris's pamor pattern independently.",
            },
          ],
          accent: "amber",
          logo: "/pusakabugis-logo.png",
          images: ["/pusakabugis-1.png", "/pusakabugis-2.png", "/pusakabugis-3.png"],
        },
        {
          id: "teazzi",
          featured: false,
          tag: "PROJECT",
          category: "Mobile App",
          kind: "mobile",
          title: "Teazzi — Tea Ordering App",
          summary:
            "A tea and specialty drink ordering app featuring promos, menu categories, and real-time order tracking.",
          description:
            "Teazzi is a mobile app for ordering tea, designed as a personal UI/UX exploration. It includes a branded splash screen, a home page with promos and menu categories, product recommendations, and an orders page showing real-time active order status alongside transaction history.",
          meta: ["UI/UX", "Figma", "Mobile App", "Personal Project"],
          painPoints: [
            {
              problem:
                "Ordering trendy drinks at a physical store usually means queuing in person, with no way for customers to track their order status.",
              solution:
                "Designed a mobile app with menu categories, promos, product recommendations, and real-time order tracking so customers can order without queuing.",
            },
          ],
          accent: "teal",
          logo: "/teazzi-logo.png",
          images: ["/teazzi-1.png", "/teazzi-2.png", "/teazzi-3.png", "/teazzi-4.png"],
        },
      ],
    },

    contact: {
      title: "Have a project you'd like to discuss?",
      desc: "Open to collaboration, internships, or just chatting about UI/UX and user research.",
      email: "muh.fauzan0804@gmail.com",
      sendEmailLabel: "Send Email →",
      socials: [
        { label: "LinkedIn", href: "https://linkedin.com/in/muhammad-fauzan-93a3bb349/", key: "linkedin" },
        { label: "Instagram", href: "https://instagram.com/faauuuzan", key: "instagram" },
        { label: "GitHub", href: "https://github.com/MuhammadFauzan04", key: "github" },
      ],
    },

    footer: {
      text: "© 2026 Fauzan. Designing meaningful digital experiences",
    },

    ui: {
      contactCta: "Contact Me",
      contactCtaArrow: "Contact Me →",
      closeMenu: "Close menu",
      openMenu: "Open menu",
      close: "Close",
      prevCertificate: "Previous certificate",
      nextCertificate: "Next certificate",
      openInNewTab: "Open in new tab ↗",
      defaultCertificateLabel: "Certificate",
      certificateUnavailablePrefix: "This certificate isn't available yet. Add an image file to the",
      certificateUnavailableSuffix: "folder named",
      certificateOf: (role, org) => `${role} certificate at ${org}`,
      backToTop: "Back to top",
      preparingExperience: "Preparing your experience",
      loadingPage: (progress) => `Loading page, ${progress}%`,
      languageToggleLabel: "Switch to Indonesian",
      previewLabel: "Preview",
      prototypeLabel: "View Prototype",
      prototypeSoonLabel: "Prototype coming soon",
      slideLabel: "Slide",
      challengeLabel: "Pain Point",
      solutionLabel: "Solution",
    },
  },
};

// Gabungkan prototypeLinks ke tiap project (id & en).
Object.values(content).forEach((lang) => {
  lang.projects.list.forEach((proj) => {
    proj.prototypeUrl = prototypeLinks[proj.id] || "";
  });
});
