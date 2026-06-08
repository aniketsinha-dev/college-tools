/* Shared partials: navbar, footer, icons, helpers */

const ICONS = {
  graduationCap:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  heart:
    '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  sparkles:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
  arrowRight:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  calculator:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>',
  barChart3:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
  bookOpen:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  trash:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  refresh:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>',
  sigma:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  chevron:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
};

function navHTML(active) {
  const link = (href, label) => {
    const a = href === active ? ' class="active"' : "";
    return `<a href="${href}"${a}>${label}</a>`;
  };
  return `
    <header class="navbar">
      <div class="nav-inner">
        <a href="index.html" class="brand">
          <span class="brand-icon" style="width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;">
            <span style="width:20px;height:20px;display:inline-flex;">${ICONS.graduationCap}</span>
          </span>
          <span class="brand-name">College<span class="text-gradient">Tools</span></span>
        </a>
        <nav class="nav-links">
          ${link("index.html", "Home")}
          ${link("sgpa-calculator.html", "SGPA Calculator")}
          ${link("cgpa-calculator.html", "CGPA Calculator")}
        </nav>
        <div class="nav-cta">
          <a class="btn btn-hero btn-sm" href="sgpa-calculator.html">Get Started</a>
        </div>
        <button class="nav-burger" id="navBurger" aria-label="Toggle menu">
          <span id="burgerIcon" style="width:20px;height:20px;display:inline-flex;">${ICONS.menu}</span>
        </button>
      </div>
      <div class="nav-mobile" id="navMobile">
        <div class="links">
          ${link("index.html", "Home")}
          ${link("sgpa-calculator.html", "SGPA Calculator")}
          ${link("cgpa-calculator.html", "CGPA Calculator")}
        </div>
      </div>
    </header>
  `;
}

function footerHTML() {
  return `
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-top">
          <div>
            <div class="brand">
              <span class="brand-icon" style="width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;">
                <span style="width:20px;height:20px;display:inline-flex;">${ICONS.graduationCap}</span>
              </span>
              <span class="brand-name">College<span class="text-gradient">Tools</span></span>
            </div>
            <p class="footer-tag">Free, fast and accurate SGPA and CGPA calculators for students everywhere.</p>
          </div>
          <nav>
            <a href="index.html">Home</a>
            <a href="sgpa-calculator.html">SGPA Calculator</a>
            <a href="cgpa-calculator.html">CGPA Calculator</a>
            <a href="index.html#faq">FAQ</a>
          </nav>
        </div>
        <div class="footer-bottom">
          <p>
            Made with <span style="width:14px;height:14px;display:inline-flex;">${ICONS.heart}</span>
            by <a href="https://www.linkedin.com/in/aniketsinha-dev" target="_blank" rel="noopener noreferrer">Aniket Kumar Sinha</a>
          </p>
          <p class="copy">© 2026 CollegeTools. Built for students.</p>
        </div>
      </div>
    </footer>
  `;
}

function mountLayout(active) {
  const nav = document.getElementById("site-nav");
  const foot = document.getElementById("site-footer");
  if (nav) nav.innerHTML = navHTML(active);
  if (foot) foot.innerHTML = footerHTML();
  const burger = document.getElementById("navBurger");
  const mobile = document.getElementById("navMobile");
  const burgerIcon = document.getElementById("burgerIcon");
  if (burger) {
    burger.addEventListener("click", () => {
      const open = mobile.classList.toggle("open");
      burgerIcon.innerHTML = open ? ICONS.x : ICONS.menu;
    });
  }
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function circularScoreHTML(id) {
  const size = 200,
    stroke = 14;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return `
    <div class="circ" id="${id}">
      <svg width="${size}" height="${size}">
        <defs>
          <linearGradient id="${id}-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="oklch(0.55 0.21 270)"/>
            <stop offset="100%" stop-color="oklch(0.7 0.19 295)"/>
          </linearGradient>
        </defs>
        <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="oklch(0.92 0.015 260)" stroke-width="${stroke}" fill="none"/>
        <circle class="prog" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="url(#${id}-grad)" stroke-width="${stroke}" stroke-linecap="round" fill="none"
          stroke-dasharray="${c}" stroke-dashoffset="${c}" style="transition: stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1);"/>
      </svg>
      <div class="inner">
        <span class="val text-gradient">0.00</span>
        <span class="label">SCORE / 10</span>
      </div>
    </div>
  `;
}

function setCircularScore(rootId, value, label, max = 10) {
  const root = document.getElementById(rootId);
  if (!root) return;
  const safe = isFinite(value) ? Math.max(0, Math.min(value, max)) : 0;
  const pct = safe / max;
  const prog = root.querySelector(".prog");
  const c = 2 * Math.PI * ((200 - 14) / 2);
  prog.setAttribute("stroke-dashoffset", String(c * (1 - pct)));
  root.querySelector(".val").textContent = safe.toFixed(2);
  root.querySelector(".label").textContent = `${label} / ${max}`;
}
