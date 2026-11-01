/* ==========================================================
   main.js — fungsi umum di semua halaman:
   menu mobile, menu aktif saat scroll, tombol WhatsApp, dan data kontak
   ========================================================== */
(function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    };
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "×" : "☰";
    });
    navLinks
      .querySelectorAll("a")
      .forEach((link) => link.addEventListener("click", closeMenu));
  }

  // Tombol/link WhatsApp: <a data-wa data-wa-text="pesan opsional">
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.href = window.BA_waLink(el.dataset.waText);
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  // Data kontak otomatis dari config.js: <span data-cfg="address">
  document.querySelectorAll("[data-cfg]").forEach((el) => {
    const value = window.BA_CONFIG[el.dataset.cfg];
    if (value) el.textContent = value;
  });

  // Link ke Google Maps: <a data-maps>
  document.querySelectorAll("[data-maps]").forEach((el) => {
    el.href =
      "https://maps.app.goo.gl/hqjSpJ2M3EdgSbe88" +
      encodeURIComponent(window.BA_CONFIG.address);
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  // Menu aktif mengikuti bagian yang sedang dilihat: <section data-nav="id-menu">
  const navItems = document.querySelectorAll("[data-nav-link]");
  const sections = document.querySelectorAll("main [data-nav]");
  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navItems.forEach((a) => {
            const on = a.dataset.navLink === entry.target.dataset.nav;
            a.classList.toggle("active", on);
            if (on) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }
})();
