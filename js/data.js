/* ==========================================================
   data.js — DATA PAKET / PRICELIST (dipakai halaman Program)
   ========================================================== */
window.BA_JENJANG = {
  sd: { label: "SD", full: "Kelas SD" },
  smp: { label: "SMP", full: "Kelas SMP" },
  sma: { label: "SMA", full: "Kelas SMA" },
};

window.BA_TIPE = {
  reguler: {
    label: "Reguler",
    desc: "Belajar matematika dalam kelompok, dua kali seminggu. Siswa memahami konsep, membahas contoh soal, dan berlatih sesuai jenjang. Harga berlaku per bulan.",
  },
  private: {
    label: "Private",
    desc: "Bimbingan matematika satu pengajar untuk satu siswa. Materi dan latihan disesuaikan dengan kebutuhan, dengan biaya Rp75.000 per jam untuk semua jenjang.",
  },
};

const regularPackage = (name, price) => ({
  name,
  meta: "2 pertemuan / minggu",
  price,
  period: "per bulan",
  features: [
    "Memahami konsep matematika sesuai jenjang",
    "Latihan soal dan pembahasan langkah demi langkah",
  ],
});

const privatePackage = {
  name: "Private",
  meta: "1 pengajar untuk 1 siswa",
  price: 75000,
  period: "per jam",
  features: [
    "Pembahasan materi sesuai kebutuhan siswa",
    "Latihan dan strategi penyelesaian soal",
  ],
};

window.BA_PACKAGES = {
  sd: {
    reguler: [regularPackage("Kelas SD", null)],
    private: [privatePackage],
  },
  smp: {
    reguler: [regularPackage("Kelas SMP VII–IX", 120000)],
    private: [privatePackage],
  },
  sma: {
    reguler: [
      regularPackage("Kelas SMA X", 120000),
      regularPackage("Kelas SMA XI", 150000),
      regularPackage("Kelas SMA XII", 150000),
    ],
    private: [privatePackage],
  },
};
