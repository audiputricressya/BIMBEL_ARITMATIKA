/* ==========================================================
   config.js — PENGATURAN UTAMA SITUS
   Ubah data kontak di sini, otomatis berubah di seluruh situs
   (bagian Hubungi dan semua tombol WhatsApp).
   ========================================================== */
window.BA_CONFIG = {
  brand: "Bimbel Sains Aritmatika",
  brandLogo: "photo/logo.png",
  tagline: "Belajar matematika, tumbuh percaya diri",

  // Nomor WhatsApp resmi bimbel: format kode negara tanpa tanda + atau 0 di depan
  whatsappNumber: "6285384809499",
  whatsappDisplay: "0853-8480-9499",

  address: "Pasar Senin RT 4 RW 2, Negararatu, Sungkai Utara, Lampung Utara",

  defaultWaMessage:
    "Halo Bimbel Sains Aritmatika, saya ingin bertanya tentang program bimbingan matematika.",
};

/* Membuat link WhatsApp dengan pesan otomatis */
window.BA_waLink = function (message) {
  const c = window.BA_CONFIG;
  return (
    "https://wa.me/" +
    c.whatsappNumber +
    "?text=" +
    encodeURIComponent(message || c.defaultWaMessage)
  );
};
