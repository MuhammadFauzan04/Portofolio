// Konten studi kasus Teazzi. Sumber riset: wawancara mendalam dengan pelanggan Teazzi
// (jumlah informan diatur di research.informants). Kutipan adalah kata-kata informan
// dengan perapian ejaan. Edit di sini, tampilan ikut berubah.
export const teazzi = {
  title: "Teazzi",
  subtitle:
    "Aplikasi pemesanan minuman teh yang dirancang dari pengalaman nyata pelanggan: antre di gerai kecil, menunggu tanpa kepastian, dan kartu stamp kertas yang mudah hilang.",
  facts: [
    ["Peran", "UI/UX Designer & Peneliti"],
    ["Jenis", "Proyek pribadi"],
    ["Platform", "Aplikasi mobile"],
    ["Riset", "In-depth interview"],
    ["Alat", "Figma"],
  ],
  phones: ["/teazzi-1.png", "/teazzi-2.png", "/teazzi-3.png", "/teazzi-4.png"],
  logo: "/teazzi-logo.png",

  research: {
    // Tambah angka ini setiap ada informan baru; teks halaman ikut berubah.
    informants: 2,
    lead: "Riset berfokus pada pemahaman masalah dan solusi lewat wawancara mendalam (in-depth interview) dengan pelanggan Teazzi, karena yang dicari adalah cerita pengalaman dan alasan di balik perilaku, bukan angka.",
    topics: [
      "Cerita pembelian terakhir",
      "Cara memesan",
      "Bagian yang paling menyebalkan",
      "Cara memilih minuman",
      "Saat menunggu pesanan",
      "Pengalaman buruk",
      "Aplikasi pemesanan lain",
      "Aplikasi Teazzi yang ideal",
    ],
    limits: "Jumlah informan masih terbatas dan akan terus bertambah. Salah satunya adalah perancang aplikasi sendiri sehingga ada potensi bias. Temuan diperlakukan sebagai hipotesis awal yang perlu divalidasi dengan lebih banyak pelanggan.",
  },

  journey: [
    {
      stage: "Niat membeli",
      does: "Merasa haus. Memilih Teazzi karena rekomendasi dari orang terdekat.",
      pain: "Tidak ada. Rekomendasi dari orang terdekat menjadi pemicu pembelian.",
      chance: "Rekomendasi yang dipercaya perlu hadir juga di dalam aplikasi.",
    },
    {
      stage: "Tiba di gerai",
      does: "Datang langsung ke gerai di mal.",
      pain: "Gerai kecil membuat jalan di depannya ramai.",
      chance: "Kurangi jumlah orang yang harus berkumpul di titik pemesanan.",
    },
    {
      stage: "Antre dan memilih",
      does: "Mengantre, melihat menu, mempertimbangkan harga dan promo.",
      pain: "Antrean banyak. Pelanggan baru bertanya rekomendasi di kasir. Ada informan yang sering bingung memilih menu.",
      chance: "Pindahkan proses memilih ke sebelum tiba di kasir.",
    },
    {
      stage: "Menunggu",
      does: "Menunggu minuman selesai.",
      pain: "Waktu tunggu lama, tanpa tempat duduk, tanpa tahu estimasi dan status pesanan.",
      chance: "Beri estimasi dan status agar waktu tunggu bisa dipakai untuk hal lain.",
    },
    {
      stage: "Menerima dan loyalitas",
      does: "Mengambil minuman. Pelanggan setia mengumpulkan stamp di kartu kertas (10 stamp, gratis 1 minuman).",
      pain: "Kartu dan voucher kertas mudah tercecer atau lupa dibawa.",
      chance: "Pindahkan reward ke bentuk digital yang selalu terbawa.",
    },
  ],

  problems: [
    {
      n: "01",
      title: "Antrean panjang di gerai yang sempit",
      quote: "Antrian yang banyak, tidak ada tempat menunggu, gerai yang kecil membuat jalan menjadi ramai.",
      impact: "Waktu pelanggan tersita bahkan sebelum memesan, dan area di depan gerai padat sehingga mengganggu pengunjung mal lain.",
      cause: "Seluruh pemesanan terjadi di satu titik fisik pada saat yang sama. Kanal jarak jauh yang dipakai informan adalah platform pihak ketiga (GoFood dan GrabFood).",
    },
    {
      n: "02",
      title: "Menunggu lama tanpa kepastian dan tanpa tempat menunggu",
      quote: "Estimasi waktu dan status sangat penting untuk diketahui agar waktu dapat digunakan hal yang lain.",
      impact: "Pelanggan terikat di sekitar gerai karena tidak tahu kapan minumannya siap. Pengalaman terburuk informan adalah antre lama, lalu menunggu lama tanpa tempat duduk.",
      cause: "Tidak ada informasi status atau estimasi yang bisa dipantau dari jauh, dan gerai tidak menyediakan area tunggu.",
    },
    {
      n: "03",
      title: "Kebingungan memilih menu memperlambat antrean",
      quote: "Pelanggan baru masih bertanya-tanya yang recommended untuk diminum. Saya sendiri cukup sering bingung dengan menu.",
      impact: "Percakapan memilih menu terjadi di depan kasir, sehingga setiap orang yang bingung memperpanjang waktu tunggu semua orang di belakangnya.",
      cause: "Panduan memilih baru didapat saat sudah berada di kasir. Tidak ada tempat untuk menjelajah menu dengan tenang sebelum memesan.",
    },
    {
      n: "04",
      title: "Harga dan promo menentukan keputusan membeli",
      quote: "Harga dan promo merupakan hal yang menjadi pertimbangan.",
      impact: "Informasi yang menentukan keputusan harus terlihat sebelum pelanggan berkomitmen, bukan ditemukan setelah memilih.",
      cause: "Ini kebutuhan yang disampaikan informan, bukan keluhan. Karena itu tergolong hipotesis desain: promo dan harga perlu tampil di awal alur.",
    },
    {
      n: "05",
      title: "Kartu stamp kertas tidak lagi relevan",
      quote: "Teazzi masih memakai kertas dengan stamp 10x untuk claim free 1 minuman. Voucher suka tercecer, lupa dibawa, dan lain-lain.",
      impact: "Manfaat program loyalitas hilang saat kartu tidak ada di tangan pada waktu pembelian.",
      cause: "Reward disimpan di media fisik yang harus selalu dibawa dan dijaga pelanggan.",
    },
  ],

  hmw: [
    "Bagaimana kita membantu pelanggan memesan tanpa harus berdiri mengantre di gerai yang sempit?",
    "Bagaimana kita membuat pelanggan tahu kapan minumannya siap, agar waktu tunggu bisa dipakai untuk hal lain?",
    "Bagaimana kita membantu pelanggan memilih minuman dengan percaya diri, tanpa bertanya panjang di kasir?",
    "Bagaimana kita menampilkan harga dan promo lebih awal, serta mengganti kartu stamp kertas yang mudah hilang?",
  ],

  ideal: {
    lead: "Saat ditanya tiga hal terpenting dari aplikasi Teazzi yang ideal, informan menyebut:",
    items: [
      ["Pemesanan online", "online"],
      ["Estimasi waktu pesanan jadi", "estimasi"],
      ["Pembayaran", "bayar"],
      ["Voucher dan promo", "voucher"],
    ],
  },

  solutions: [
    {
      for: "Masalah 01",
      title: "Pesan dari mana saja, ambil saat siap",
      what: "Pelanggan memilih gerai, menentukan menu, ukuran, dan jumlah, lalu menambahkannya ke keranjang tanpa harus berada di depan kasir.",
      why: "Pemilih gerai diletakkan paling atas di beranda dan detail produk karena pesanan harus tahu diambil di gerai mana. Tombol keranjang menampilkan total harga sehingga keputusan akhir transparan.",
      screens: "Beranda, Detail produk",
    },
    {
      for: "Masalah 02",
      title: "Estimasi waktu dan status pesanan",
      what: "Tab Pesanan menampilkan Pesanan Aktif di paling atas, lengkap dengan rentang estimasi waktu (contoh 22.00 sampai 22.20) dan tiga tahap: Diterima, Dibuat, Siap Diambil.",
      why: "Pesanan aktif diletakkan di atas riwayat karena itu yang paling dibutuhkan saat menunggu. Rentang waktu dipilih daripada satu angka pasti agar ekspektasi lebih jujur. Tiga tahap dibuat sesedikit mungkin agar langsung terbaca.",
      screens: "Pesanan",
    },
    {
      for: "Masalah 03",
      title: "Jelajah dan pilih menu sebelum tiba",
      what: "Beranda menyediakan pencarian rasa, empat kategori (Signature, Fruit Tea, Soft Milk Tea, Honey Series), dan bagian Rekomendasi Untukmu. Detail produk memuat deskripsi rasa dan pilihan ukuran.",
      why: "Pertanyaan yang sekarang diajukan di kasir dijawab di aplikasi. Rekomendasi dipakai karena rekomendasi orang terdekat terbukti menjadi pemicu pembelian informan.",
      screens: "Beranda, Detail produk",
    },
    {
      for: "Masalah 04",
      title: "Promo dan harga di awal alur",
      what: "Banner promo (contoh Pembelian Pertama, Diskon 40% dan Gratis Pajak) berada tepat di bawah pemilih gerai, dengan tombol Beli Sekarang. Harga tampil di setiap pilihan ukuran dan di tombol keranjang.",
      why: "Karena harga dan promo menjadi pertimbangan utama, keduanya ditempatkan di area yang terlihat pertama kali tanpa perlu menggulir.",
      screens: "Beranda, Detail produk",
    },
  ],

  // status dihitung otomatis: "Sudah didesain" bila layar `screen` sudah punya src.
  coverage: [
    { need: "Pemesanan online", screen: "detail", note: "Pilih gerai dan menu di beranda, atur ukuran dan jumlah di detail produk." },
    { need: "Estimasi waktu dan status pesanan", screen: "pesanan", note: "Layar Pesanan Aktif." },
    { need: "Promo", screen: "beranda", note: "Banner promo di beranda." },
    { need: "Voucher dan stamp digital", screen: "voucher", note: "Belum didesain. Pengganti kartu stamp kertas.", doneNote: "Stamp dan voucher digital menggantikan kartu kertas." },
    { need: "Pembayaran", screen: "pembayaran", note: "Belum didesain. Layar setelah keranjang.", doneNote: "Layar pembayaran setelah keranjang." },
  ],

  design: {
    lead: "Identitas visual dibawa dari brand Teazzi: biru tua yang tenang dan aksen hijau daun yang segar. Prinsip desain diturunkan langsung dari masalah yang ditemukan.",
    principles: [
      { t: "Tahu statusnya", d: "Estimasi dan status pesanan selalu terlihat jelas.", from: "Masalah 02" },
      { t: "Pilih tanpa bingung", d: "Kategori, rekomendasi, dan deskripsi rasa membantu memutuskan.", from: "Masalah 03" },
      { t: "Harga terbuka", d: "Harga dan promo tampil sebelum pelanggan berkomitmen.", from: "Masalah 04" },
      { t: "Segar dan ringan", d: "Biru tua, hijau daun, ruang putih lega, kartu membulat.", from: "Identitas brand" },
    ],
    colors: [
      { name: "Navy", hex: "#00205D", use: "Banner, tombol utama, teks aksen" },
      { name: "Royal blue", hex: "#00297C", use: "Ikon aktif, label jumlah" },
      { name: "Cyan", hex: "#05A9DD", use: "Awal gradien tombol promo" },
      { name: "Leaf green", hex: "#47AE59", use: "Akhir gradien, aksen segar" },
    ],
    neutrals: [
      { name: "Ink", hex: "#111111" },
      { name: "Slate", hex: "#8C8C8C" },
      { name: "Line", hex: "#EDEDED" },
      { name: "Surface", hex: "#FFFFFF" },
    ],
    gradients: [
      { name: "Promo", css: "linear-gradient(90deg,#05A9DD,#47AE59)", use: "Tombol Beli Sekarang" },
      { name: "Kuantitas", css: "linear-gradient(90deg,#012B7C,#246868 55%,#4BAC51)", use: "Bar Total Kuantitas" },
      { name: "Produk", css: "linear-gradient(180deg,#00205D 30%,#8FD19A)", use: "Latar foto produk" },
    ],
    type: {
      family: "Poppins",
      note: "Sans-serif geometris yang bersahabat dan mudah dibaca di layar kecil. Dua bobot utama: Bold untuk judul dan harga, Regular untuk deskripsi dan teks bantu.",
      scale: [
        { role: "Judul seksi", weight: 700, size: 16, sample: "Rekomendasi Untukmu" },
        { role: "Judul kartu dan harga", weight: 700, size: 14, sample: "Deep Roast Oolong Milk Tea" },
        { role: "Tombol", weight: 500, size: 14, sample: "Tambahkan ke keranjang" },
        { role: "Teks isi", weight: 400, size: 12, sample: "Large, Normal Ice, Gula 10%, Grass Jelly" },
        { role: "Teks bantu", weight: 400, size: 12, sample: "Ini rekomendasi teh untuk harimu yang lebih indah" },
      ],
    },
  },

  screens: [
    {
      id: "splash",
      n: "01",
      name: "Splash screen",
      src: "/teazzi-1.png",
      solves: "Identitas brand",
      d: "Layar pembuka memperkenalkan logo dan gelas khas Teazzi di atas latar biru tua dengan aksen daun hijau.",
      decisions: ["Biru tua dan hijau daun diperkenalkan sejak layar pertama.", "Gelas produk menjadi elemen visual utama."],
    },
    {
      id: "beranda",
      n: "02",
      name: "Beranda",
      src: "/teazzi-2.png",
      solves: "Masalah 01, 03, 04",
      d: "Pusat pemesanan: pilih gerai, lihat promo, cari rasa, jelajah kategori, dan lihat rekomendasi.",
      decisions: [
        "Pemilih gerai paling atas karena pesanan harus tahu diambil di mana.",
        "Banner promo dengan tombol Beli Sekarang di area yang terlihat tanpa menggulir.",
        "Pencarian rasa, empat kategori, dan Rekomendasi Untukmu menggantikan pertanyaan di kasir.",
        "Navigasi bawah dengan empat tujuan: Beranda, Menu, Pesanan, Profil.",
      ],
    },
    {
      id: "pesanan",
      n: "03",
      name: "Pesanan",
      src: "/teazzi-3.png",
      solves: "Masalah 02",
      d: "Pesanan Aktif menampilkan estimasi waktu dan tahap pesanan, diikuti riwayat pemesanan.",
      decisions: [
        "Pesanan Aktif berada di atas riwayat karena itu yang dicari saat menunggu.",
        "Rentang estimasi waktu ditampilkan jelas di dalam kartu bergradien biru.",
        "Tiga tahap: Diterima, Dibuat, Siap Diambil.",
        "Ringkasan pesanan memuat ukuran, es, gula, dan topping agar mudah dicek.",
      ],
    },
    {
      id: "detail",
      n: "04",
      name: "Detail produk",
      src: "/teazzi-4.png",
      solves: "Masalah 01, 03, 04",
      d: "Pelanggan membaca deskripsi rasa, memilih ukuran, mengatur jumlah, lalu menambahkan ke keranjang.",
      decisions: [
        "Deskripsi rasa membantu memilih tanpa bertanya.",
        "Ukuran wajib dipilih (ditandai bintang merah) dan setiap opsi menampilkan harganya.",
        "Bar Total Kuantitas dan tombol keranjang tetap terlihat di bawah dengan total harga.",
      ],
    },
    // ---- SLOT GAMBAR: isi `src` (mis. "/teazzi-5.png") setelah file diletakkan di /public.
    // Selama src kosong, slot hanya tampil saat `npm run dev` dan disembunyikan di situs publik.
    {
      id: "menu",
      n: "05",
      name: "Menu",
      src: "",
      solves: "Masalah 03",
      d: "Daftar lengkap menu untuk dijelajah sebelum memesan.",
      decisions: [],
    },
    {
      id: "keranjang",
      n: "06",
      name: "Keranjang",
      src: "",
      solves: "Masalah 01",
      d: "Ringkasan pesanan sebelum dibayar.",
      decisions: [],
    },
    {
      id: "pembayaran",
      n: "07",
      name: "Pembayaran",
      src: "",
      solves: "Masalah 01",
      d: "Memilih metode dan menyelesaikan pembayaran.",
      decisions: [],
    },
    {
      id: "voucher",
      n: "08",
      name: "Voucher dan stamp digital",
      src: "",
      solves: "Masalah 05",
      d: "Pengganti kartu stamp kertas: stamp dan voucher tersimpan di aplikasi.",
      decisions: [],
    },
  ],

  next: [
    { t: "Mendesain layar voucher dan stamp digital sebagai pengganti kartu kertas.", screen: "voucher" },
    { t: "Mendesain alur pembayaran setelah keranjang.", screen: "pembayaran" },
    { t: "Menguji prototipe dengan pelanggan lain, dan memvalidasi temuan wawancara dengan lebih banyak informan." },
  ],
};
