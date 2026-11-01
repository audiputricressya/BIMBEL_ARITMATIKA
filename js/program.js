/* ==========================================================
   program.js — pilihan jenjang, tipe kelas, dan daftar paket.
   Tombol "Pilih Paket" langsung membuka WhatsApp contact person
   dengan pesan otomatis berisi paket yang dipilih.
   Data paket ada di js/data.js
   ========================================================== */
(function () {
  const grid = document.getElementById("priceGrid");
  if (!grid) return;

  const J = window.BA_JENJANG,
    T = window.BA_TIPE,
    P = window.BA_PACKAGES;
  const state = { jenjang: "sd", tipe: "reguler" };

  const rupiah = (n) => "Rp " + n.toLocaleString("id-ID");
  const jenjangBtns = document.querySelectorAll("[data-set-jenjang]");
  const tipeBtns = document.querySelectorAll("[data-set-tipe]");
  const cards = document.querySelectorAll("[data-jenjang-card]");
  const desc = document.getElementById("typeDesc");

  function render() {
    jenjangBtns.forEach((b) =>
      b.classList.toggle("active", b.dataset.setJenjang === state.jenjang)
    );
    tipeBtns.forEach((b) =>
      b.classList.toggle("active", b.dataset.setTipe === state.tipe)
    );
    cards.forEach((c) =>
      c.classList.toggle("is-active", c.dataset.jenjangCard === state.jenjang)
    );
    desc.textContent = T[state.tipe].desc;

    grid.innerHTML = P[state.jenjang][state.tipe]
      .map((pkg) => {
        const priceMessage =
          pkg.price === null
            ? "Mohon info harga dan pendaftarannya."
            : `seharga ${rupiah(pkg.price)} ${pkg.period}. Mohon info pendaftarannya.`;
        const msg = `Halo ${window.BA_CONFIG.brand}, saya tertarik dengan ${pkg.name} (${T[state.tipe].label} - ${J[state.jenjang].full}), ${priceMessage}`;
        const priceLabel =
          pkg.price === null
            ? "Hubungi kami <small>untuk info harga</small>"
            : `${rupiah(pkg.price)} <small>/ ${pkg.period.replace("per ", "")}</small>`;
        return `
        <article class="price-card${pkg.popular ? " popular" : ""}">
          ${pkg.popular ? '<span class="badge-popular">Paling diminati</span>' : ""}
          <h3>${pkg.name}</h3>
          <div class="price-meta">${J[state.jenjang].full} · ${T[state.tipe].label} · ${pkg.meta}</div>
          <div class="price">${priceLabel}</div>
          <ul>${pkg.features.map((f) => `<li>${f}</li>`).join("")}</ul>
          <a class="btn" href="${window.BA_waLink(msg)}" target="_blank" rel="noopener noreferrer">Pilih Paket via WhatsApp ↗</a>
        </article>`;
      })
      .join("");
  }

  jenjangBtns.forEach((b) =>
    b.addEventListener("click", () => {
      state.jenjang = b.dataset.setJenjang;
      render();
    })
  );
  tipeBtns.forEach((b) =>
    b.addEventListener("click", () => {
      state.tipe = b.dataset.setTipe;
      render();
    })
  );

  // Kartu jenjang di atas: klik "Lihat paket" -> pilih jenjang & gulir ke daftar paket
  cards.forEach((card) => {
    card.querySelector("a").addEventListener("click", (e) => {
      e.preventDefault();
      state.jenjang = card.dataset.jenjangCard;
      render();
      document.getElementById("paket").scrollIntoView({ behavior: "smooth" });
    });
  });

  render();
})();
