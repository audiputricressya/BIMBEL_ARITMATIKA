/* ==========================================================
   components.js — topbar, navbar, dan footer yang dipakai
   bersama di semua halaman. Edit menu / footer cukup di sini.
   Menu aktif mengikuti posisi scroll (lihat js/main.js)
   ========================================================== */
(function () {
  const c = window.BA_CONFIG;
  const brandMark = c.brandLogo
    ? `<span class="brand-mark"><img src="${c.brandLogo}" alt="" /></span>`
    : '<span class="brand-mark" aria-hidden="true"></span>';

  const menu = [
    { id: "home", href: "#home", label: "Beranda" },
    { id: "owner", href: "#owner", label: "Owner" },
    { id: "tentang", href: "#tentang", label: "Tentang" },
    { id: "program", href: "#program", label: "Program" },
    { id: "dokumentasi", href: "#dokumentasi", label: "Dokumentasi" },
    { id: "hubungi", href: "#kontak", label: "Hubungi" },
  ];

  const navLinks = menu
    .map((m) => `<a href="${m.href}" data-nav-link="${m.id}">${m.label}</a>`)
    .join("");

  const headerHTML = `
    <header class="navbar">
      <div class="container nav-inner">
        <a class="brand" href="#home" aria-label="${c.brand}, beranda">
          ${brandMark}
          <span>${c.brand}<small>Bimbingan Matematika</small></span>
        </a>
        <nav class="nav-links" id="navLinks" aria-label="Navigasi utama">${navLinks}</nav>
        <a class="btn nav-cta" href="#kontak">Hubungi Kami ↗</a>
        <button class="menu-toggle" id="menuToggle" aria-label="Buka menu" aria-expanded="false">☰</button>
      </div>
    </header>`;

  const footerHTML = `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-about">
            <a class="brand" href="#home">${brandMark}<span>${c.brand}<small>Bimbingan Matematika</small></span></a>
            <p>Bimbingan matematika yang hangat dan terarah untuk membantu siswa memahami konsep, berlatih soal, dan tumbuh percaya diri.</p>
          </div>
          <div class="footer-col">
            <h4>Jelajahi</h4>
            <a href="#owner">Owner</a>
            <a href="#tentang">Tentang Kami</a>
            <a href="#program">Program Matematika</a>
            <a href="#dokumentasi">Dokumentasi</a>
          </div>
          <div class="footer-col">
            <h4>Hubungi</h4>
            <a href="${window.BA_waLink()}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div class="copyright"><span>© 2026 ${c.brand}. Seluruh hak cipta dilindungi.</span><span>Dibuat dengan sepenuh hati untuk pendidikan.</span></div>
      </div>
    </footer>`;

  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.innerHTML = headerHTML;
  if (f) f.innerHTML = footerHTML;
})();
