(() => {
  const { COPY, DAY_LABELS, BUSINESS: B, REVIEWS, DEPARTMENTS, GALLERY, PRODUCT_SHOTS, STOCK, STOCK_INTRO, SERVICES } = window.LMM;
  const OTHER = { en: ["pt", "es"], es: ["pt", "en"], pt: ["en", "es"] };
  const SHORT = { en: "EN", es: "ES", pt: "PT" };
  const NAME = { en: "English", es: "Español", pt: "Português" };
  const FLAG = {
    en: '<svg viewBox="0 0 19 10" width="16" height="10" aria-hidden="true"><rect width="19" height="10" fill="#bf0a30"/><rect y="1.1" width="19" height="1.1" fill="#fff"/><rect y="3.3" width="19" height="1.1" fill="#fff"/><rect y="5.5" width="19" height="1.1" fill="#fff"/><rect y="7.7" width="19" height="1.1" fill="#fff"/><rect width="7.6" height="5.4" fill="#002868"/></svg>',
    es: '<svg viewBox="0 0 9 6" width="16" height="10" aria-hidden="true"><rect width="9" height="6" fill="#c60b1e"/><rect y="1.5" width="9" height="3" fill="#ffc400"/></svg>',
    pt: '<svg viewBox="0 0 20 14" width="16" height="10" aria-hidden="true"><rect width="20" height="14" fill="#009b3a"/><polygon points="10,1.4 18.6,7 10,12.6 1.4,7" fill="#fedf00"/><circle cx="10" cy="7" r="2.5" fill="#002776"/></svg>',
  };

  const KEY = "lmm-lang";
  const readLang = () => {
    try {
      const s = localStorage.getItem(KEY);
      if (s === "en" || s === "es" || s === "pt") return s;
    } catch (_) {}
    return "en";
  };
  let lang = readLang();
  let showAll = false;

  function clockLabel(hour) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: true }).format(
      new Date(2020, 0, 1, hour, 0),
    );
  }
  function shopOpen() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: B.timeZone,
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
    }).formatToParts(new Date());
    const now =
      Number(parts.find((p) => p.type === "hour")?.value ?? 0) * 60 +
      Number(parts.find((p) => p.type === "minute")?.value ?? 0);
    return now >= B.openHour * 60 && now < B.closeHour * 60;
  }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem(KEY, next); } catch (_) {}
    document.documentElement.lang = next;
    render();
  }

  function stars() {
    return `<span class="stars" aria-hidden="true">${"★".repeat(5)}</span>`;
  }

  function render() {
    const t = COPY[lang];
    const open = shopOpen();
    const time = clockLabel(open ? B.closeHour : B.openHour);
    const max = Math.max(...B.ratingBreakdown.map((r) => r.count), 1);
    const reviews = showAll ? REVIEWS.slice(1) : REVIEWS.slice(1, 7);
    const featured = REVIEWS[0];

    document.getElementById("status").className = "status" + (open ? "" : " closed");
    document.getElementById("status").innerHTML =
      `<span class="status-dot"></span><span>${open ? t.open : t.closed}</span><span>${open ? t.closesAt : t.opensAt} ${time}</span>`;

    document.getElementById("nav").innerHTML = [
      ["#shop", t.navShop],
      ["#stock", t.navStock],
      ["#photos", t.navPhotos],
      ["#reviews", t.navReviews],
      ["#hours", t.navHours],
      ["#visit", t.navVisit],
    ].map(([href, label]) => `<a href="${href}">${label}</a>`).join("");
    document.getElementById("drawer").innerHTML =
      `<div class="drawer-bar">
        <a href="#top" data-close>${t.navHome}</a>
        <button type="button" data-close>${t.closeMenu}</button>
      </div>` +
      document.getElementById("nav").innerHTML +
      `<div class="drawer-actions">
        <a class="act call" href="tel:${B.phoneTel}">${t.call}</a>
        <a class="act sms" href="sms:${B.phoneTel}">${t.text}</a>
        <a class="act dir" href="${B.mapsDirections}" target="_blank" rel="noreferrer">${t.directions}</a>
      </div>
      <p class="drawer-meta">${B.street}<br>${B.city}, ${B.region} ${B.postalCode}</p>
      <p class="drawer-meta">${t.footerHours}<br>${t.snap} · ${t.cards}</p>`;

    document.getElementById("hero").innerHTML = `
      ${B.femaleOwned ? `<p class="owned-hero">${t.owned}</p>` : ""}
      <div class="sign"><img src="images/sign.webp" alt="${t.signAlt}" width="1200" height="675"></div>
      <p class="kicker">${t.kicker}</p>
      <h1>${t.headline}</h1>
      <p class="lede">${t.lede}</p>
      <a class="g-pill" href="#reviews">
        <img src="data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>')}" alt="" width="24" height="24">
        <b>${B.rating}</b>
        ${stars()}
        <span class="muted">${B.reviewCount} ${t.reviews}</span>
      </a>`;

    document.getElementById("facts").innerHTML = `
      <div class="pay-row">
        <div class="pay-ebt">
          <img src="images/pay/snap.webp" alt="SNAP">
          <img src="images/pay/ebt.svg" alt="EBT">
        </div>
        <ul class="pay-cards" aria-label="${t.cards}">
          <li><img src="images/pay/visa.svg" alt="Visa"></li>
          <li><img src="images/pay/mastercard.svg" alt="Mastercard"></li>
          <li><img src="images/pay/amex.webp" alt="American Express"></li>
          <li><img src="images/pay/discover.svg" alt="Discover"></li>
        </ul>
      </div>`;

    document.getElementById("video-head").innerHTML = `<h2>${t.videoTitle}</h2>`;
    document.getElementById("videos").innerHTML = `
      <figure>
        <video src="videos/entrance-approach.mp4" poster="images/storefront.webp" controls playsinline muted loop autoplay preload="auto"></video>
        <figcaption>${t.videoApproach}</figcaption>
      </figure>
      <figure>
        <video src="videos/entrance-walkin.mp4" poster="images/entrance.webp" controls playsinline muted loop autoplay preload="auto"></video>
        <figcaption>${t.videoWalkin}</figcaption>
      </figure>`;

    document.getElementById("about").innerHTML = `
      <div class="card">
        <p class="kicker" style="color:var(--primary);margin-top:0">${B.name}</p>
        <h2>${t.aboutTitle}</h2>
        <p class="muted" style="margin-top:1rem">${t.aboutBody}</p>
      </div>
      <img class="photo" src="images/storefront.webp" alt="${GALLERY[0].alt[lang]}">`;

    document.getElementById("shop-head").innerHTML = `<h2>${t.deptsTitle}</h2><p class="muted">${t.deptsLede}</p>`;
    document.getElementById("depts").innerHTML = DEPARTMENTS.map((d) => `
      <article class="dept">
        <img src="${d.img}" alt="${d.alt[lang]}">
        <div><h3>${t[d.title]}</h3><p class="muted">${t[d.body]}</p></div>
      </article>`).join("");

    document.getElementById("pantry-head").innerHTML =
      `<h3>${t.pantryShotsTitle}</h3><p class="muted">${t.pantryShotsLede}</p>`;
    document.getElementById("pantry-shots").innerHTML = PRODUCT_SHOTS.map(
      (p) => `<li><img src="${p.src}" alt="${p.alt[lang]}"></li>`,
    ).join("");

    document.getElementById("stock-intro").innerHTML =
      `<h3>${STOCK_INTRO.title[lang]}</h3><p class="muted">${STOCK_INTRO.lede[lang]}</p>`;
    document.getElementById("stock").innerHTML = STOCK.map((cat) => `
      <article class="card">
        <h4>${cat.title[lang]}</h4>
        ${cat.groups.map((g) => `
          ${g.heading[lang] ? `<p class="kicker" style="color:var(--muted);margin:1.1rem 0 .4rem">${g.heading[lang]}</p>` : ""}
          <ul class="pills">${g.items.map((i) => `<li>${i[lang]}</li>`).join("")}</ul>
        `).join("")}
      </article>`).join("");

    document.getElementById("photos-head").innerHTML = `<h2>${t.photosTitle}</h2><p class="muted">${t.photosLede}</p>`;
    document.getElementById("gallery").innerHTML = GALLERY.map(
      (p) => `<li><img src="${p.src}" alt="${p.alt[lang]}"></li>`,
    ).join("");

    document.getElementById("reviews-head").innerHTML =
      `<p class="kicker" style="color:var(--primary);margin:0">${t.reviewsOnGoogle}</p><h2 style="margin-top:.75rem">${t.reviewsTitle}</h2>`;
    document.getElementById("gcard").innerHTML = `
      <p style="font-size:.75rem;font-weight:700;letter-spacing:.28em;text-transform:uppercase;color:var(--muted)">Google</p>
      <p style="font-family:var(--display);font-size:3.5rem;margin:.5rem 0 0">${B.rating}</p>
      ${stars()}
      <p class="muted">${B.reviewCount} ${t.reviews}</p>
      <p style="font-size:1.15rem;margin:1.25rem 0 .5rem">${t.reviewsPeople}</p>
      <p class="muted">“${featured.quote[lang]}”<br><span style="font-size:.7rem;letter-spacing:.16em;text-transform:uppercase">${featured.name} · Google</span></p>
      <div style="margin-top:1.25rem;display:grid;gap:.45rem">
        ${B.ratingBreakdown.map((row) => `<div class="hist"><span>${row.stars}</span><div class="bar"><span style="width:${(row.count / max) * 100}%"></span></div></div>`).join("")}
      </div>
      <a class="write" href="${B.googleWriteReviewUrl}" target="_blank" rel="noreferrer">${t.reviewsWrite}</a>
      <p style="margin:.75rem 0 0;text-align:center"><a href="${B.googleReviewsUrl}" target="_blank" rel="noreferrer">${t.reviewsGoogle}</a></p>`;
    document.getElementById("review-list").innerHTML = reviews.map((r) => `
      <article class="review">
        <strong>${r.name}</strong>
        <span class="muted"> · ${r.when[lang]}</span>
        <p>${r.quote[lang]}</p>
      </article>`).join("");
    document.getElementById("more").textContent = showAll ? t.reviewsLess : t.reviewsMore;

    document.getElementById("hours-card").innerHTML = `
      <h2>${t.hoursLabel}</h2>
      <p class="muted">${t.hoursNote}</p>
      <ol class="hours">${DAY_LABELS[lang].map((d) => `<li><span>${d}</span><span>${t.hoursRange}</span></li>`).join("")}</ol>
      <p class="kicker" style="color:var(--muted);margin:1.5rem 0 .4rem">${t.servicesTitle}</p>
      <ul class="pills">${SERVICES.map((i) => `<li>${i[lang]}</li>`).join("")}</ul>`;
    document.getElementById("visit").innerHTML = `
      <h2>${t.visitTitle}</h2>
      <p class="muted">${t.visitBody}</p>
      <img class="photo" style="margin-top:1.25rem" src="images/street.webp" alt="${GALLERY[1].alt[lang]}">
      <p>${B.street}<br>${B.city}, ${B.region} ${B.postalCode}</p>
      <p><a href="tel:${B.phoneTel}">${B.phoneDisplay}</a></p>
      <p><a href="${B.mapsDirections}" target="_blank" rel="noreferrer">${t.directions}</a></p>
      <iframe class="map" title="${t.mapTitle}" src="https://www.openstreetmap.org/export/embed.html?bbox=-75.5218%2C40.1318%2C-75.5098%2C40.1356&layer=mapnik&marker=40.1336%2C-75.5159"></iframe>`;

    document.getElementById("footer").innerHTML =
      `<p>${t.footerHours}</p><p>${t.copyright}</p>`;

    const langs = OTHER[lang].map(
      (code) => `<button class="circle lang" type="button" data-lang="${code}" aria-label="${NAME[code]}">${FLAG[code]}<span>${SHORT[code]}</span></button>`,
    ).join("");
    document.getElementById("dock").innerHTML = `
      ${langs}
      <a class="circle call" href="tel:${B.phoneTel}" aria-label="${t.call} ${B.phoneDisplay}"><svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>
      <a class="circle sms" href="sms:${B.phoneTel}" aria-label="${t.text} ${B.phoneDisplay}"><svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></a>`;
  }

  document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("drawer").classList.toggle("open");
  });
  document.getElementById("drawer").addEventListener("click", (e) => {
    if (e.target.closest("[data-close]") || (e.target.closest("a") && !e.target.closest(".drawer-bar"))) {
      document.getElementById("drawer").classList.remove("open");
    }
  });
  document.getElementById("more").addEventListener("click", () => {
    showAll = !showAll;
    render();
  });
  document.getElementById("dock").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-lang]");
    if (btn) setLang(btn.getAttribute("data-lang"));
  });

  document.documentElement.lang = lang;
  render();
  setInterval(() => render(), 30000);
})();
