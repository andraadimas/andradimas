/**
 * ANDRA DIMAS ARYA PUTRA - PORTFOLIO LOGIC
 * Clean UX, Zero Dependencies, Production-Ready
 */

// ==========================================================================
// 1. BILINGUAL TRANSLATION DATA (SIMPLIFIED & UX-OPTIMIZED)
// ==========================================================================
const translations = {
  id: {
    // Navigation
    "nav-about": "Tentang",
    "nav-triad": "Filosofi",
    "nav-experience": "Pengalaman",
    "nav-education": "Pendidikan",
    "nav-skills": "Keahlian",
    "nav-contact": "Kontak",
    "menu-text": "Menu",

    // Hero Section
    "hero-badge": "Terbuka untuk Kemitraan & Moderasi",
    "hero-eyebrow": "BUSINESS DEVELOPMENT • STRATEGIC THINKER",
    "hero-title-prefix": "Menghubungkan Pemikiran Kritis,",
    "hero-title-serif": "Harmoni Komunikasi,",
    "hero-title-suffix": "dan Pertumbuhan Bisnis.",
    "hero-bio": "Profesional Business Development di PT. Tiga Inti Utama (TRIV Crypto Exchange). Mengintegrasikan ketajaman logika filsafat, etika relasional teologi, dan ritme komunikasi musikal untuk membangun kemitraan bernilai tinggi.",
    "btn-contact-hero": "Diskusikan Kemitraan",
    "btn-cv-hero": "Unduh / Cetak CV",
    "pillar-1-title": "Business Development",
    "pillar-1-sub": "Strategi Kemitraan @ TRIV",
    "pillar-2-title": "Komunikasi Panggung",
    "pillar-2-sub": "MC & Moderator Diskusi",
    "pillar-3-title": "Fondasi Pemikiran",
    "pillar-3-sub": "Studi Teologi & Filsafat",

    // Triad / Niche Section
    "triad-label": "FILOSOFI KERJA",
    "triad-title": "Tiga Fondasi dalam Pendekatan Bisnis Saya",
    "triad-desc": "Bagaimana integrasi teologi, filsafat, dan musik mendukung eksekusi Business Development yang berdampak nyata:",
    "triad-theo-title": "Teologi — Nilai & Kepercayaan",
    "triad-theo-desc": "Membangun kemitraan atas dasar empati, transparansi, dan integritas moral. Fokus pada pembentukan kepercayaan dan relasi jangka panjang.",
    "triad-phil-title": "Filsafat — Logika & Negosiasi",
    "triad-phil-desc": "Menganalisis masalah dari prinsip dasar (first principles), menyaring kebisingan pasar, serta merumuskan deal win-win yang rasional.",
    "triad-mus-title": "Musik — Ritme & Empati Panggung",
    "triad-mus-desc": "Kepekaan membaca situasi (room awareness), penguasaan tempo sebagai MC/Moderator, dan menyelaraskan berbagai pemangku kepentingan.",

    // Experience Section
    "exp-label": "REKAM JEJAK",
    "exp-title": "Pengalaman Kerja",
    "exp-desc": "Fokus pada pertumbuhan kemitraan strategis, komunikasi publik, dan kedisiplinan operasional.",
    "exp-role-triv": "Business Development",
    "exp-company-triv": "PT. Tiga Inti Utama (TRIV Crypto Exchange)",
    "exp-period-triv": "2025 — Sekarang",
    "exp-b1-triv": "Mengembangkan strategi akuisisi prospek (leads) baru melalui branding terarah dan ekspansi jejaring.",
    "exp-b2-triv": "Membina hubungan strategis jangka panjang dengan mitra institusi dan komunitas Web3/kripto.",
    "exp-b3-triv": "Menginisiasi kampanye kolaborasi dan collaborative branding untuk memperluas penetrasi pasar.",

    "exp-role-mc": "MC & Panel Moderator",
    "exp-company-mc": "Freelance / Independent",
    "exp-period-mc": "2025 — Sekarang",
    "exp-b1-mc": "Memandu seminar, talkshow, dan diskusi panel publik secara interaktif, lugas, dan tepat waktu.",
    "exp-b2-mc": "Menjaga keterlibatan audiens dan menciptakan atmosfer acara yang positif serta profesional.",

    "exp-role-mixue": "Operational Staff",
    "exp-company-mixue": "Mixue Ice Cream & Tea",
    "exp-period-mixue": "2021 — 2023",
    "exp-b1-mixue": "Mengelola stok bahan baku harian dan menjaga efisiensi rantai pasok gerai.",
    "exp-b2-mixue": "Menjalankan standar operasional ketat dan menangani komunikasi pelanggan secara solutif.",

    // Education Section
    "edu-label": "LATAR BELAKANG",
    "edu-title": "Pendidikan",
    "edu-desc": "Fondasi pemikiran sistematis, analitis, dan kepemimpinan.",
    "edu-title-stt": "Sarjana Teologi (Theology Major)",
    "edu-inst-stt": "Indonesian Bethel Theological Seminary (STT Bethel Indonesia)",
    "edu-period-stt": "2021 — Sekarang",
    "edu-desc-stt": "Mendalami etika terapan, hermeneutika, kepemimpinan transformasional, dan dinamika komunitas.",

    "edu-title-sma": "Jurusan Ilmu Pengetahuan Alam (MIPA)",
    "edu-inst-sma": "Impian Bunda Senior High School",
    "edu-period-sma": "2017 — 2020",
    "edu-desc-sma": "Membangun penalaran kuantitatif, metodologi ilmiah empiris, dan pemecahan masalah logis.",

    // Skills Section
    "skills-label": "KOMPETENSI",
    "skills-title": "Keahlian Utama",
    "skills-desc": "Alat kerja dan keterampilan praktis yang siap diaplikasikan.",
    "skill-cat-1": "Pengembangan Bisnis & Strategi",
    "skill-cat-2": "Komunikasi & Panggung",
    "skill-cat-3": "Aplikasi & Teknis",

    // Contact Section
    "contact-label": "HUBUNGI SAYA",
    "contact-title": "Mari Berdiskusi & Membangun Kemitraan",
    "contact-desc": "Terbuka untuk kolaborasi kemitraan bisnis, undangan sebagai moderator/MC, atau diskusi gagasan strategis.",
    "contact-wa-btn": "Buka WhatsApp",
    "contact-email-btn": "Kirim Email",
    "contact-ig-btn": "Lihat Instagram",

    // Modal
    "modal-title": "Curriculum Vitae Snapshot",
    "btn-print-action": "Cetak / Simpan PDF"
  },

  en: {
    // Navigation
    "nav-about": "About",
    "nav-triad": "Philosophy",
    "nav-experience": "Experience",
    "nav-education": "Education",
    "nav-skills": "Skills",
    "nav-contact": "Contact",
    "menu-text": "Menu",

    // Hero Section
    "hero-badge": "Available for Partnerships & Moderation",
    "hero-eyebrow": "BUSINESS DEVELOPMENT • STRATEGIC THINKER",
    "hero-title-prefix": "Bridging Critical Thought,",
    "hero-title-serif": "Communication Harmony,",
    "hero-title-suffix": "and Business Growth.",
    "hero-bio": "Business Development professional at PT. Tiga Inti Utama (TRIV Crypto Exchange). Integrating philosophical logic, theological relational ethics, and musical communication tempo to drive high-impact alliances.",
    "btn-contact-hero": "Discuss Partnerships",
    "btn-cv-hero": "Download / Print CV",
    "pillar-1-title": "Business Development",
    "pillar-1-sub": "Partnership Strategy @ TRIV",
    "pillar-2-title": "Public Speaking",
    "pillar-2-sub": "MC & Panel Facilitation",
    "pillar-3-title": "Thought Foundation",
    "pillar-3-sub": "Theology & Philosophy Roots",

    // Triad / Niche Section
    "triad-label": "WORK PHILOSOPHY",
    "triad-title": "Three Pillars Behind My Business Approach",
    "triad-desc": "How theology, philosophy, and music directly empower real-world business execution:",
    "triad-theo-title": "Theology — Value & Trust",
    "triad-theo-desc": "Forging partnerships on genuine empathy, transparency, and ethical integrity. Focusing on durable trust and long-term relationships.",
    "triad-phil-title": "Philosophy — Logic & Negotiation",
    "triad-phil-desc": "Deconstructing issues from first principles, cutting through noise, and engineering rational win-win deals.",
    "triad-mus-title": "Music — Rhythm & Stage Empathy",
    "triad-mus-desc": "Intuitive room awareness, pacing dialogue smoothly as an MC/Moderator, and harmonizing multi-stakeholder alignments.",

    // Experience Section
    "exp-label": "TRACK RECORD",
    "exp-title": "Professional Experience",
    "exp-desc": "Driving partnership growth, public communication, and operational excellence.",
    "exp-role-triv": "Business Development",
    "exp-company-triv": "PT. Tiga Inti Utama (TRIV Crypto Exchange)",
    "exp-period-triv": "2025 — Present",
    "exp-b1-triv": "Formulate new lead acquisition strategies through targeted brand positioning and network expansion.",
    "exp-b2-triv": "Cultivate strategic long-term alliances with institutional partners and crypto/Web3 communities.",
    "exp-b3-triv": "Pioneer collaborative branding campaigns to expand company market footprint.",

    "exp-role-mc": "MC & Panel Moderator",
    "exp-company-mc": "Freelance / Independent",
    "exp-period-mc": "2025 — Present",
    "exp-b1-mc": "Facilitate public seminars, conferences, and panel talks interactively, clearly, and on schedule.",
    "exp-b2-mc": "Sustain high audience engagement and foster an energizing, professional atmosphere.",

    "exp-role-mixue": "Operational Staff",
    "exp-company-mixue": "Mixue Ice Cream & Tea",
    "exp-period-mixue": "2021 — 2023",
    "exp-b1-mixue": "Administered daily raw material inventory and ensured efficient store supply logistics.",
    "exp-b2-mixue": "Maintained strict operational consistency and managed customer service with high professionalism.",

    // Education Section
    "edu-label": "BACKGROUND",
    "edu-title": "Education",
    "edu-desc": "Systematic, analytical, and leadership foundation.",
    "edu-title-stt": "Bachelor of Theology (Theology Major)",
    "edu-inst-stt": "Indonesian Bethel Theological Seminary (STT Bethel Indonesia)",
    "edu-period-stt": "2021 — Present",
    "edu-desc-stt": "Studies in applied ethics, hermeneutics, servant leadership, and community dynamics.",

    "edu-title-sma": "Natural Science Major (MIPA)",
    "edu-inst-sma": "Impian Bunda Senior High School",
    "edu-period-sma": "2017 — 2020",
    "edu-desc-sma": "Built rigorous quantitative reasoning, empirical scientific methods, and logical analysis.",

    // Skills Section
    "skills-label": "COMPETENCIES",
    "skills-title": "Key Skills",
    "skills-desc": "Actionable toolkit ready for immediate execution.",
    "skill-cat-1": "Business Development & Strategy",
    "skill-cat-2": "Communication & Stage",
    "skill-cat-3": "Tools & Execution",

    // Contact Section
    "contact-label": "CONTACT ME",
    "contact-title": "Let's Connect & Build Value",
    "contact-desc": "Open for strategic partnerships, moderation/MC bookings, or discussing forward-looking ideas.",
    "contact-wa-btn": "Open WhatsApp",
    "contact-email-btn": "Send Email",
    "contact-ig-btn": "View Instagram",

    // Modal
    "modal-title": "Curriculum Vitae Snapshot",
    "btn-print-action": "Print / Save PDF"
  }
};

// ==========================================================================
// 2. CORE APP CONTROLLER
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initLanguageSwitcher();
  initMenuDropdown();
  initCVModal();
});

// --- Theme Toggle (Monochrome Dark / Light) ---
function initThemeToggle() {
  const themeBtn = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("theme") || "dark";

  applyTheme(storedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    const iconSpan = themeBtn.querySelector(".theme-icon");
    const textSpan = themeBtn.querySelector(".theme-text");
    if (theme === "light") {
      if (iconSpan) iconSpan.textContent = "☾";
      if (textSpan) textSpan.textContent = "Dark";
    } else {
      if (iconSpan) iconSpan.textContent = "☼";
      if (textSpan) textSpan.textContent = "Light";
    }
  }
}

// --- Bilingual Language Switcher ---
let currentLang = "id";

function initLanguageSwitcher() {
  const langBtn = document.getElementById("lang-toggle");
  const storedLang = localStorage.getItem("lang") || "id";

  setLanguage(storedLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const nextLang = currentLang === "id" ? "en" : "id";
      setLanguage(nextLang);
      localStorage.setItem("lang", nextLang);
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = lang === "id" ? "EN" : "ID";
  }

  // Update elements with data-i18n attributes
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// --- Clean "Menu / More" Dropdown Controller ---
function initMenuDropdown() {
  const toggleBtn = document.getElementById("menu-toggle");
  const dropdown = document.getElementById("nav-dropdown");
  const backdrop = document.getElementById("nav-backdrop");
  const links = document.querySelectorAll(".nav-dropdown-item");

  function closeMenu() {
    if (dropdown) dropdown.classList.remove("open");
    if (backdrop) backdrop.classList.remove("active");
  }

  function openMenu() {
    if (dropdown) dropdown.classList.add("open");
    if (backdrop) backdrop.classList.add("active");
  }

  if (toggleBtn && dropdown) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains("open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (backdrop) {
      backdrop.addEventListener("click", closeMenu);
    }

    links.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && dropdown.classList.contains("open")) {
        closeMenu();
      }
    });
  }
}

// --- CV Modal & Quick Print ---
function initCVModal() {
  const modal = document.getElementById("cv-modal");
  const openBtns = document.querySelectorAll(".btn-open-cv");
  const closeBtn = document.getElementById("modal-close");
  const printBtn = document.getElementById("btn-modal-print");

  openBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (modal) modal.classList.add("active");
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });
}
