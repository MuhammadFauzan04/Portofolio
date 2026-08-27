// Bilingual content tree. Each top-level key under `content` is a full
// language variant (id/en) with the exact same shape, so components can
// simply do `const { hero } = useContent()` and get back whichever
// language is currently active — no scattered `field.id` / `field.en`
// lookups sprinkled through the JSX.

export const content = {
  id: {
    nav: {
      brand: "Fauzan",
      links: [
        { label: "Tentang", href: "#about" },
        { label: "Skill & Proses", href: "#skills" },
        { label: "Pengalaman", href: "#experience" },
        { label: "Karya", href: "#projects" },
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
      dragHint: "Tarik & lepas kartunya 👆",
    },

    about: {
      sectionLabel: "Tentang",
      sectionTitle: "Desain yang lahir dari riset, bukan tebakan.",
      photo: "/profile.png",
      photoAlt: "Foto profil",
      badges: ["UI/UX Designer", "User-Centered Design", "Sistem Informasi"],
      description:
        "Saya adalah UI/UX Designer dengan latar belakang Sistem Informasi di Universitas Hasanuddin. Saya memiliki ketertarikan dalam merancang produk digital yang tidak hanya menarik secara visual, tetapi juga mampu memberikan pengalaman pengguna yang intuitif dan efektif.",
      academic:
        "Saya percaya bahwa desain yang baik lahir dari pemahaman yang mendalam terhadap kebutuhan pengguna, bukan sekadar mengikuti tren. Oleh karena itu, saya selalu mengutamakan proses riset, analisis, dan pemecahan masalah dalam setiap proyek yang saya kerjakan.",
      secondary:
        "Selain aktif mengembangkan kemampuan di bidang UI/UX, saya juga senang mempelajari teknologi baru dan berkolaborasi dengan berbagai pihak untuk mengubah ide menjadi solusi digital yang bermanfaat.",
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
      certifications: [
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
          id: "org-hmi-mipa",
          role: "Sekretaris Bidang PTKP",
          org: "Himpunan Mahasiswa Islam (HMI) Komisariat MIPA Unhas",
          period: "September 2024 — Desember 2025",
          points: [
            "Mengelola administrasi dan dokumentasi kegiatan Bidang PTKP secara berkala.",
            "Mendukung koordinasi dan pelaksanaan program kerja Bidang PTKP bersama pengurus lainnya.",
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
          title: "MediLink — Sistem Informasi Manajemen Rumah Sakit",
          summary:
            "Perancangan prototipe UI/UX untuk sistem manajemen rumah sakit, studi kasus RSUD Wakatobi.",
          description:
            "Perancangan prototipe UI/UX untuk sistem manajemen rumah sakit, studi kasus RSUD Wakatobi. Dirancang menggunakan pendekatan User-Centered Design, divalidasi melalui Maze usability testing, System Usability Scale, dan User Acceptance Test. Project ini mencakup riset kebutuhan pengguna, penyusunan wireframe, desain antarmuka, hingga pengujian usability untuk memastikan sistem mudah digunakan oleh staf rumah sakit.",
          meta: ["UCD", "Figma", "Usability Testing", "Skripsi", "CV. Choice Indonesia", "Project Magang"],
          accent: "blue",
          images: ["/medilink-1.png", "/medilink-2.png", "/medilink-3.png"],
          logo: "/medilink-logo.png",
        },
        {
          id: "cbr-dent",
          featured: false,
          tag: "PROJECT",
          category: "Website",
          title: "CBR-Dent — Sistem Manajemen Klinik Gigi",
          summary:
            "Sistem manajemen klinik gigi berbasis Case-Based Reasoning (CBR) untuk rekomendasi desain obturator secara otomatis.",
          description:
            "CBR-Dent adalah sistem manajemen klinik gigi yang membantu dokter mengelola data pasien, riwayat konsultasi, dan administrasi klinik dalam satu platform. Fitur utamanya adalah modul analisis CBR (Case-Based Reasoning) yang menganalisis parameter klinis pasien untuk merekomendasikan desain obturator yang paling sesuai, lengkap dengan skor akurasi dan riwayat kasus serupa sebagai referensi.",
          meta: ["UI/UX", "Figma", "Website", "Case-Based Reasoning", "Project Freelance"],
          accent: "teal",
          images: ["/cbr-dent-1.png", "/cbr-dent-2.png", "/cbr-dent-3.png"],
          logo: "/cbr-dent-logo.png",
        },
        {
          id: "yalla",
          featured: false,
          tag: "PROJECT",
          category: "Aplikasi Mobile",
          title: "Yalla App",
          summary:
            "Aplikasi travel penerbangan umrah yang menghubungkan berbagai penyelenggara travel dalam satu platform.",
          description:
            "Yalla App merupakan aplikasi travel penerbangan umrah yang menghubungkan berbagai penyelenggara travel dalam satu platform. Aplikasi ini memudahkan pengelolaan jadwal penerbangan, data jamaah, reservasi, pembayaran, serta pemantauan proses keberangkatan secara terintegrasi sehingga operasional travel menjadi lebih efisien.",
          meta: ["UI/UX", "Figma", "Mobile App", "Project Freelance"],
          accent: "cyan",
          images: ["/yalla_slide1.png", "/yalla_slide2.png", "/yalla_slide3.png"],
          logo: "/yalla-logo.jpg",
        },
        {
          id: "belibis",
          featured: false,
          tag: "PROJECT",
          category: "Aplikasi Mobile",
          title: "Belibis App",
          summary:
            "Aplikasi pemesanan tiket kapal online untuk memudahkan perjalanan antar pulau di wilayah Sorong.",
          description:
            "Belibis App adalah aplikasi pemesanan tiket kapal online yang dirancang untuk memudahkan perjalanan antar pulau di wilayah Sorong. Aplikasi ini memungkinkan pengguna mencari jadwal kapal, memilih kursi, melakukan pemesanan dan pembayaran, serta mengakses informasi perjalanan secara praktis melalui satu platform yang terintegrasi.",
          meta: ["UI/UX", "Figma", "Mobile App", "Belbis Group", "Project Freelance"],
          accent: "indigo",
          logo: "/belibis-logo.png",
          images: ["/belibis_slide1.png", "/belibis_slide2.png", "/belibis_slide3.png"],
        },
        {
          id: "project-placeholder-1",
          featured: false,
          tag: "PROJECT",
          category: "Aplikasi Mobile",
          title: "Sinergi - Ji App",
          summary:
            "SINERGI-JI Aplikasi pelaporan dan pemantauan gangguan jaringan internet untuk instansi pemerintah di Kota Makassar.",
          description:
            "SINERGI-JI (Sinergi Jaringan Intra Pemerintah) memudahkan setiap kantor kedinasan di Kota Makassar melaporkan gangguan jaringan internet secara cepat dan terstruktur, menggantikan pelaporan manual via telepon. Laporan bisa dipantau statusnya secara real-time hingga ditangani tim teknis.",
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
          images: ["/sinergiji-1.png", "/sinergiji-2.png", "/sinergiji-3.png"],
        },
        {
          id: "project-placeholder-2",
          featured: false,
          tag: "PROJECT",
          category: "Website",
          title: "Pusaka Bugis Web",
          summary:
            "Website eksplorasi budaya keris Bugis di Kabupaten Bone, dilengkapi fitur scan pamor keris",
          description:
            "Pusaka Bugis adalah website yang menampilkan nilai-nilai dan sejarah budaya keris khas Kabupaten Bone, memperkenalkan makna filosofis di balik setiap pusaka kepada masyarakat luas. Website ini juga dilengkapi fitur scan pamor, memungkinkan pengguna mengecek dan mengenali jenis pamor pada keris yang mereka miliki secara mudah",
          meta: ["UI/UX", "Figma", "Website", "LPDP", "Project Freelance"],
          accent: "amber",
          logo: "/pusakabugis-logo.png",
          images: ["/pusakabugis-1.png", "/pusakabugis-2.png", "/pusakabugis-3.png"],
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
      slideLabel: "Slide",
    },
  },

  en: {
    nav: {
      brand: "Fauzan",
      links: [
        { label: "About", href: "#about" },
        { label: "Skills & Process", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Work", href: "#projects" },
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
      dragHint: "Drag & drop the card 👆",
    },

    about: {
      sectionLabel: "About",
      sectionTitle: "Design born from research, not guesswork.",
      photo: "/profile.png",
      photoAlt: "Profile photo",
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
        },
        {
          num: "02",
          title: "Design",
          desc: "Translating research findings into wireframes, user flows, and consistent interface designs.",
        },
        {
          num: "03",
          title: "Test",
          desc: "Testing prototypes using methods like Maze and the System Usability Scale to validate design decisions with real data.",
        },
        {
          num: "04",
          title: "Deliver",
          desc: "Refining the design based on testing results and preparing documentation ready for implementation.",
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
      ],
      certifications: [
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
              image: "/certificates/dibimbing.pdf",
            },
          ],
        },
      ],
      organizations: [
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
        {
          id: "org-hmi-mipa",
          role: "Secretary of the PTKP Division",
          org: "Muslim Student Association (HMI), MIPA Unhas Chapter",
          period: "September 2024 — December 2025",
          points: [
            "Managed the administration and documentation of the PTKP Division's activities on a regular basis.",
            "Supported the coordination and execution of the PTKP Division's work programs together with fellow board members.",
          ],
        },
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
          role: "Secretary General",
          org: "Muslim Student Association (HMI)",
          period: "January 2026",
          points: [
            "Managed the organization's overall administration and secretariat functions.",
            "Supported cross-divisional coordination of work programs within the board.",
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
          title: "MediLink — Hospital Management Information System",
          summary:
            "UI/UX prototype design for a hospital management system, case study of RSUD Wakatobi.",
          description:
            "UI/UX prototype design for a hospital management system, case study of RSUD Wakatobi. Designed using a User-Centered Design approach and validated through Maze usability testing, the System Usability Scale, and User Acceptance Testing. The project covered user needs research, wireframing, and interface design through to usability testing, ensuring the system is easy for hospital staff to use.",
          meta: ["UCD", "Figma", "Usability Testing", "Thesis", "CV. Choice Indonesia", "Internship Project"],
          accent: "blue",
          images: ["/medilink-1.png", "/medilink-2.png", "/medilink-3.png"],
          logo: "/medilink-logo.png",
        },
        {
          id: "cbr-dent",
          featured: false,
          tag: "PROJECT",
          category: "Website",
          title: "CBR-Dent — Dental Clinic Management System",
          summary:
            "A Case-Based Reasoning (CBR) dental clinic management system for automatic obturator design recommendations.",
          description:
            "CBR-Dent is a dental clinic management system that helps dentists manage patient data, consultation history, and clinic administration in one platform. Its core feature is a Case-Based Reasoning (CBR) analysis module that evaluates a patient's clinical parameters to recommend the most suitable obturator design, complete with an accuracy score and similar past cases for reference.",
          meta: ["UI/UX", "Figma", "Web App", "Case-Based Reasoning", "Project Freelance"],
          accent: "teal",
          images: ["/cbr-dent-1.png", "/cbr-dent-2.png", "/cbr-dent-3.png"],
          logo: "/cbr-dent-logo.png",
        },
        {
          id: "yalla",
          featured: false,
          tag: "PROJECT",
          category: "Mobile App",
          title: "Yalla App",
          summary:
            "An Umrah flight travel app that connects multiple travel agencies on a single platform.",
          description:
            "Yalla App is an Umrah flight travel app that connects multiple travel agencies on a single platform. It simplifies flight scheduling, pilgrim data management, reservations, payments, and departure tracking in one integrated system, making travel operations more efficient.",
          meta: ["UI/UX", "Figma", "Mobile App", "Freelance Project"],
          accent: "cyan",
          images: ["/yalla_slide1.png", "/yalla_slide2.png", "/yalla_slide3.png"],
          logo: "/yalla-logo.jpg",
        },
        {
          id: "belibis",
          featured: false,
          tag: "PROJECT",
          category: "Mobile App",
          title: "Belibis App",
          summary:
            "An online ferry ticket booking app that makes inter-island travel in the Sorong region easier.",
          description:
            "Belibis App is an online ferry ticket booking app designed to make inter-island travel in the Sorong region easier. It lets users search ferry schedules, pick seats, book and pay, and access trip information conveniently through one integrated platform.",
          meta: ["UI/UX", "Figma", "Mobile App", "Belbis Group", "Project Freelance"],
          accent: "indigo",
          logo: "/belibis-logo.png",
          images: ["/belibis_slide1.png", "/belibis_slide2.png", "/belibis_slide3.png"],
        },
        {
          id: "project-placeholder-1",
          featured: false,
          tag: "PROJECT",
          category: "Mobile App",
          title: "Sinergi - Ji App",
          summary:
            "SINERGI-JI is an app for reporting and monitoring internet network disruptions for government agencies in Makassar City.",
          description:
            "SINERGI-JI (Government Intra-Network Synergy) makes it easy for every government office in Makassar City to report internet network disruptions quickly and in a structured way, replacing manual phone-based reporting. Reports can be tracked in real time until they're resolved by the technical team.",
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
          images: ["/sinergiji-1.png", "/sinergiji-2.png", "/sinergiji-3.png"],
        },
        {
          id: "project-placeholder-2",
          featured: false,
          tag: "PROJECT",
          category: "Website",
          title: "Pusaka Bugis Web",
          summary:
            "A website exploring Bugis keris (dagger) culture in Bone Regency, featuring a keris pamor pattern scanner.",
          description:
            "Pusaka Bugis is a website showcasing the values and history of the traditional keris culture of Bone Regency, introducing the philosophical meaning behind each heirloom to a wider audience. The site also includes a pamor-scanning feature, letting users easily check and identify the pamor pattern on their own keris.",
          meta: ["UI/UX", "Figma", "Website", "LPDP", "Project Freelance"],
          accent: "amber",
          logo: "/pusakabugis-logo.png",
          images: ["/pusakabugis-1.png", "/pusakabugis-2.png", "/pusakabugis-3.png"],
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
      slideLabel: "Slide",
    },
  },
};
