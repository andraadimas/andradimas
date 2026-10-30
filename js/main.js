/**
 * ANDRA DIMAS ARYA PUTRA - PORTFOLIO INTERACTION & LOGIC
 * High-performance, zero-dependency Vanilla JavaScript
 * Features: Theme toggle, Bilingual I18n, Mobile Drawer Nav, Expand/Collapse Accordion System
 */

// ==========================================================================
// 1. I18N / BILINGUAL TRANSLATION DATA
// ==========================================================================
const translations = {
  id: {
    // Navigation
    "nav-about": "Tentang",
    "nav-triad": "Sintesis Niche",
    "nav-experience": "Pengalaman",
    "nav-education": "Pendidikan",
    "nav-skills": "Keahlian",
    "nav-contact": "Kontak",
    "btn-connect": "Hubungi Saya",

    // Hero Section
    "hero-badge": "Tersedia untuk Kemitraan Strategis & Moderasi",
    "hero-eyebrow": "BUSINESS DEVELOPMENT @ TRIV • TEOLOGI • FILSAFAT • MUSIK",
    "hero-title-prefix": "Menghubungkan Pemikiran Kritis,",
    "hero-title-serif": "Harmoni Relasional,",
    "hero-title-suffix": "dan Pertumbuhan Bisnis.",
    "hero-bio-short": "Saya <strong>Andra Dimas Arya Putra</strong>, seorang profesional Business Development yang mengintegrasikan ketajaman dialektika filsafat, integritas etika teologi, serta sensitivitas ritme musik untuk membangun kemitraan bernilai tinggi di industri Web3 & teknologi modern.",
    "hero-bio-more": "Sebagai individu antusias dan spiritual di tengah dinamika bisnis kontemporer, saya memadukan keterampilan praktis, kedisiplinan eksekusi, serta kemampuan analisis data yang mendalam untuk terus berkembang dan menciptakan dampak nyata di tempat kerja profesional.",
    "btn-more-bio": "Baca Selengkapnya",
    "btn-less-bio": "Tutup Selengkapnya",
    "btn-explore": "Jelajahi Pengalaman",
    "btn-download-cv": "Unduh / Cetak CV",
    "btn-hero-contact": "Diskusikan Kemitraan",
    "pillar-1-title": "Business Development",
    "pillar-1-sub": "Strategi Kemitraan @ TRIV",
    "pillar-2-title": "Komunikasi Publik",
    "pillar-2-sub": "MC & Moderator Diskusi",
    "pillar-3-title": "Sintesis Pemikiran",
    "pillar-3-sub": "Fondasi Teologi & Filsafat",

    // Expand/Collapse generic labels
    "btn-more-triad": "Pelajari Aplikasi dalam BD",
    "btn-less-triad": "Tutup Aplikasi",
    "btn-more-exp": "Lihat Tanggung Jawab Lengkap",
    "btn-less-exp": "Tutup Tanggung Jawab",

    // Triad / Niche Section
    "triad-label": "The Intellectual Triad",
    "triad-title": "Sintesis Niche: Mengapa Teologi, Filsafat & Musik Mendefinisikan Cara Kerja Saya",
    "triad-desc": "Keunikan pendekatan bisnis saya berakar pada integrasi antara kedalaman reflektif, ketelitian argumentatif, dan kepekaan ritmis.",
    
    "triad-theo-badge": "Pilar I • Hati & Komunitas",
    "triad-theo-title": "Teologi",
    "triad-theo-desc": "Mendalami esensi hasrat manusia, moralitas, makna hidup, dan kesetiaan relasional. Teologi melatih empati mendalam serta komitmen untuk membangun kepercayaan (trust) yang tak tergoyahkan.",
    "triad-theo-app-title": "Aplikasi dalam Business Development:",
    "triad-theo-app-desc": "Membangun hubungan kemitraan institusional dan komunitas Web3 dengan integritas tinggi, bukan sekadar relasi transaksional sesaat.",

    "triad-phil-badge": "Pilar II • Pikiran & Dialektika",
    "triad-phil-title": "Filsafat",
    "triad-phil-desc": "Melatih berpikir dari prinsip pertama (first principles), membedah asumsi tersembunyi, logika retorika, dan memfilter esensi di balik kebisingan tren pasar.",
    "triad-phil-app-title": "Aplikasi dalam Business Development:",
    "triad-phil-app-desc": "Menavigasi negosiasi kompleks, merumuskan penawaran bernilai (value propositions), serta mengurai dinamika pasar kripto secara jernih dan rasional.",

    "triad-mus-badge": "Pilar III • Ritme & Harmoni",
    "triad-mus-title": "Musik",
    "triad-mus-desc": "Mengasah intuisi mendengar secara aktif, membaca tempo situasi, merespons dinamika audiens, dan menyelaraskan berbagai instrumen menjadi satu kesatuan harmoni.",
    "triad-mus-app-title": "Aplikasi dalam Business Development:",
    "triad-mus-app-desc": "Keahlian membaca dinamika ruangan (reading the room), memandu sesi panel/MC dengan transisi mulus, dan menyelaraskan stakeholder bisnis yang beragam.",

    "synthesis-banner-title": "Sinergi Strategis: The Modern Thought Leader",
    "synthesis-banner-desc": "Perpaduan ketiga bidang ini membentuk figur Business Development yang tak hanya cakap dalam mengejar target dan revenue, tetapi juga memiliki kedewasaan intelektual, etika yang teruji, serta kemampuan komunikasi panggung yang memikat.",

    // Interactive Notes Section
    "notes-label": "Perspektif & Catatan Dialektika",
    "notes-title": "Bagaimana Niche Ini Bekerja di Dunia Nyata",
    "notes-desc": "Simak bagaimana konsep teologi, filsafat, dan musik diaplikasikan langsung dalam skenario bisnis dan komunikasi nyata.",
    
    "tab-note-1-topic": "Negosiasi & Deal-Making",
    "tab-note-1-title": "Dialektika Sokratik dalam Kemitraan",
    "pane-note-1-eyebrow": "Filsafat dalam Aksi Bisnis",
    "pane-note-1-title": "Negosiasi Bukan Peperangan, Melainkan Pencarian Titik Temu Rasional",
    "pane-note-1-body": "Dalam filsafat Sokratik, dialog bukanlah upaya untuk mengalahkan lawan bicara, melainkan bersama-sama mencari kebenaran. Dalam Business Development di TRIV, pendekatan ini saya terapkan untuk memahami pain point mitra secara mendalam sebelum menyodorkan solusi kolaborasi.",
    "pane-note-1-takeaway": "Takeaway: Kemitraan terbaik lahir dari pertanyaan yang tepat, bukan argumen yang paling keras.",

    "tab-note-2-topic": "Komunitas & Web3",
    "tab-note-2-title": "Etika Teologis di Tengah Ekosistem Kripto",
    "pane-note-2-eyebrow": "Teologi dalam Industri Masa Depan",
    "pane-note-2-title": "Membangun 'Koinonia' (Komunitas Bernilai) di Ruang Terdesentralisasi",
    "pane-note-2-body": "Ekosistem Web3 kerap dinilai terlalu volatil dan spekulatif. Fondasi teologis mengajarkan bahwa komunitas sejati hanya bertahan jika dibangun di atas transparansi, kejujuran nilai, dan saling menopang. Inilah modal utama saya dalam merawat jaringan partner dan komunitas.",
    "pane-note-2-takeaway": "Takeaway: Di pasar yang bergerak cepat, integritas adalah pembeda kompetitif yang paling langka.",

    "tab-note-3-topic": "Komunikasi & Panggung",
    "tab-note-3-title": "Orkestrasi Ritme Diskusi Publik",
    "pane-note-3-eyebrow": "Musik dalam Public Speaking",
    "pane-note-3-title": "Mengatur Tempo Bicara Seperti Komposisi Simfoni",
    "pane-note-3-body": "Sebagai MC dan moderator, saya memandang sebuah acara sebagai komposisi musik: ada overture pembuka yang hangat, ritme diskusi yang menaik saat perdebatan ide, dan koda penutup yang berkesan. Kepekaan ritme menjaga energi audiens tetap hidup dan fokus.",
    "pane-note-3-takeaway": "Takeaway: Komunikasi yang efektif bukan tentang seberapa cepat berbicara, melainkan seberapa tepat ritme jedanya.",

    // Experience Section
    "exp-label": "Perjalanan Karir",
    "exp-title": "Pengalaman Profesional",
    "exp-desc": "Rekam jejak dalam membangun kemitraan, memfasilitasi dialog publik, dan memimpin eksekusi operasional.",

    "exp-role-triv": "Business Development",
    "exp-company-triv": "PT. Tiga Inti Utama (TRIV Crypto Exchange)",
    "exp-period-triv": "2025 — Sekarang",
    "exp-b1-triv": "Merumuskan dan mengeksekusi strategi pemasaran kemitraan untuk mengakuisisi prospek baru melalui pendekatan branding terarah dan perluasan jaringan strategis.",
    "exp-b2-triv": "Mengelola serta memperkuat hubungan relasional jangka panjang dengan para mitra strategis dan komunitas blockchain/kripto terkemuka di Indonesia.",
    "exp-b3-triv": "Menginisiasi ide-ide kolaborasi inovatif bersama klien dan institusi eksternal untuk melahirkan kampanye collaborative branding berdaya jangkau luas.",

    "exp-role-mc": "Master of Ceremonies (MC) & Panel Moderator",
    "exp-company-mc": "Freelance / Independent",
    "exp-period-mc": "2025 — Sekarang",
    "exp-b1-mc": "Menghubungkan pembicara, audiens, dan komunitas melalui komunikasi panggung yang lugas, percaya diri, dan berenergi dinamis.",
    "exp-b2-mc": "Memandu jalannya diskusi agar tetap fokus pada topik inti, interaktif, dan adaptif merespons situasi tak terduga secara real-time.",
    "exp-b3-mc": "Membangun keterlibatan aktif audiens (audience engagement) serta menjaga antusiasme positif sepanjang acara berlangsung.",

    "exp-role-mixue": "Fulltime Operations & Customer Relations",
    "exp-company-mixue": "Mixue Ice Cream & Tea",
    "exp-period-mixue": "2021 — 2023",
    "exp-b1-mixue": "Mempersiapkan produk sesuai standar ketat perusahaan, menjaga konsistensi cita rasa dan higienitas presentasi.",
    "exp-b2-mixue": "Menangani pertanyaan pelanggan dan menyelesaikan keluhan minor secara profesional, solutif, dan tepat waktu.",
    "exp-b3-mixue": "Mengelola inventaris bahan baku harian, memantau level stok, dan mengoordinasikan restocking guna menjamin efisiensi operasional.",

    // Education Section
    "edu-label": "Fondasi Akademik",
    "edu-title": "Pendidikan & Studi Formal",
    "edu-desc": "Kombinasi antara penyelidikan teologis yang mendalam dan pemikiran analitis sains alam.",

    "edu-title-stt": "Sarjana Teologi (Theology Major)",
    "edu-inst-stt": "Indonesian Bethel Theological Seminary (STT Bethel Indonesia)",
    "edu-period-stt": "2021 — Sekarang",
    "edu-desc-stt": "Fokus pada studi hermeneutika teks, etika moral, sejarah pemikiran, pembinaan komunitas, dan kepemimpinan transformasional.",

    "edu-title-sma": "Jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA)",
    "edu-inst-sma": "Impian Bunda Senior High School",
    "edu-period-sma": "2017 — 2020",
    "edu-desc-sma": "Membangun dasar penalaran kuantitatif, metode ilmiah empiris, observasi sistematis, dan pemecahan masalah analitis.",

    // Skills Section
    "skills-label": "Kompetensi",
    "skills-title": "Keahlian & Alat Kerja",
    "skills-desc": "Kumpulan keterampilan strategis, oratori, teknis, dan interpersonal yang siap dioptimalkan.",

    "skill-cat-1": "Pengembangan Bisnis & Strategi",
    "skill-cat-2": "Komunikasi & Oratori",
    "skill-cat-3": "Teknis & Kreatif",

    // Contact Section
    "contact-label": "Koneksi & Kolaborasi",
    "contact-title": "Mari Berdiskusi & Membangun Kemitraan",
    "contact-desc": "Tertarik untuk berkolaborasi dalam proyek kemitraan, mengundang sebagai moderator/MC, atau mendiskusikan gagasan strategis?",
    "contact-email-lbl": "Email Resmi",
    "contact-wa-lbl": "WhatsApp / Telepon",
    "contact-ig-lbl": "Instagram Pribadi",
    "contact-loc-lbl": "Domisili",
    "form-name-lbl": "Nama Lengkap",
    "form-email-lbl": "Alamat Email",
    "form-topic-lbl": "Tujuan / Topik Diskusi",
    "form-msg-lbl": "Pesan Anda",
    "btn-submit": "Kirim Pesan Sekarang",
    "btn-whatsapp-direct": "Chat via WhatsApp",
    "toast-sent": "Pesan berhasil disiapkan! Mengarahkan ke klien komunikasi...",

    // Modal
    "modal-title": "Curriculum Vitae Snapshot",
    "btn-print-action": "Cetak Halaman Ini (Print to PDF)"
  },

  en: {
    // Navigation
    "nav-about": "About",
    "nav-triad": "Niche Synthesis",
    "nav-experience": "Experience",
    "nav-education": "Education",
    "nav-skills": "Skills",
    "nav-contact": "Contact",
    "btn-connect": "Let's Connect",

    // Hero Section
    "hero-badge": "Available for Strategic Partnerships & Moderation",
    "hero-eyebrow": "BUSINESS DEVELOPMENT @ TRIV • THEOLOGY • PHILOSOPHY • MUSIC",
    "hero-title-prefix": "Bridging Critical Thought,",
    "hero-title-serif": "Relational Harmony,",
    "hero-title-suffix": "and Strategic Growth.",
    "hero-bio-short": "I am <strong>Andra Dimas Arya Putra</strong>, a Business Development professional integrating philosophical dialectics, theological empathy, and musical intuition to drive high-impact partnerships in Web3 & modern tech.",
    "hero-bio-more": "As an enthusiastic, grounded individual in a fast-paced business environment, I blend operational agility, disciplined execution, and rigorous data analytics to continuously grow and create measurable enterprise value.",
    "btn-more-bio": "Read Full Philosophy",
    "btn-less-bio": "Show Less",
    "btn-explore": "Explore Journey",
    "btn-download-cv": "Download / Print CV",
    "btn-hero-contact": "Discuss Partnerships",
    "pillar-1-title": "Business Development",
    "pillar-1-sub": "Strategic Partnerships @ TRIV",
    "pillar-2-title": "Public Speaking",
    "pillar-2-sub": "MC & Panel Facilitation",
    "pillar-3-title": "Intellectual Synthesis",
    "pillar-3-sub": "Theology & Philosophy Roots",

    // Expand/Collapse generic labels
    "btn-more-triad": "Explore BD Application",
    "btn-less-triad": "Hide Application",
    "btn-more-exp": "View Full Responsibilities",
    "btn-less-exp": "Hide Responsibilities",

    // Triad / Niche Section
    "triad-label": "The Intellectual Triad",
    "triad-title": "Niche Synthesis: Why Theology, Philosophy & Music Define How I Drive Growth",
    "triad-desc": "My distinctive business edge stems from uniting reflective depth, argumentative rigor, and rhythmic empathy.",
    
    "triad-theo-badge": "Pillar I • Heart & Community",
    "triad-theo-title": "Theology",
    "triad-theo-desc": "Exploring human purpose, ethical responsibility, relational fidelity, and community building. Theology nurtures deep empathy and an uncompromising commitment to trust.",
    "triad-theo-app-title": "Application in Business Development:",
    "triad-theo-app-desc": "Cultivating institutional alliances and Web3 communities on solid trust, moving far beyond fleeting transactional deals.",

    "triad-phil-badge": "Pillar II • Mind & Dialectics",
    "triad-phil-title": "Philosophy",
    "triad-phil-desc": "Trained in first-principles thinking, questioning default assumptions, rhetorical logic, and isolating signal from market noise.",
    "triad-phil-app-title": "Application in Business Development:",
    "triad-phil-app-desc": "Structuring nuanced negotiations, designing resonant value propositions, and dissecting crypto market dynamics with clarity.",

    "triad-mus-badge": "Pillar III • Rhythm & Harmony",
    "triad-mus-title": "Music",
    "triad-mus-desc": "Honing active listening, pacing situational dialogue, feeling audience sentiment, and conducting diverse elements into one harmonious whole.",
    "triad-mus-app-title": "Application in Business Development:",
    "triad-mus-app-desc": "Reading the room with finesse, orchestrating panels and stages smoothly, and aligning diverse business stakeholders.",

    "synthesis-banner-title": "Strategic Synergy: The Thought-Leader Mindset",
    "synthesis-banner-desc": "The intersection of these disciplines cultivates a Business Development professional who delivers tangible revenue targets backed by intellectual maturity, tested ethics, and compelling public presence.",

    // Interactive Notes Section
    "notes-label": "Perspectives & Dialectical Notes",
    "notes-title": "How This Niche Operates in the Real World",
    "notes-desc": "Examine how theology, philosophy, and music directly translate into actionable business strategy and communication.",
    
    "tab-note-1-topic": "Negotiation & Deal-Making",
    "tab-note-1-title": "Socratic Dialectic in Partnerships",
    "pane-note-1-eyebrow": "Philosophy in Business Action",
    "pane-note-1-title": "Negotiation is Not War, but a Shared Pursuit of Rational Value",
    "pane-note-1-body": "In Socratic philosophy, dialogue is not meant to defeat the opponent, but to uncover universal truth together. In my BD role at TRIV, I apply this by thoroughly investigating partner pain points before proposing synergistic collaboration.",
    "pane-note-1-takeaway": "Takeaway: The strongest partnerships stem from asking the right questions, not shouting the loudest arguments.",

    "tab-note-2-topic": "Community & Web3",
    "tab-note-2-title": "Theological Ethics in Crypto Ecosystems",
    "pane-note-2-eyebrow": "Theology in Frontier Industries",
    "pane-note-2-title": "Cultivating 'Koinonia' (Authentic Community) in Decentralized Spaces",
    "pane-note-2-body": "Web3 is often plagued by hype and fleeting speculation. Theological foundations remind us that durable communities only flourish when anchored in transparency, mutual care, and authentic value. This serves as my compass in managing partners.",
    "pane-note-2-takeaway": "Takeaway: In hyper-fast markets, authentic integrity is the rarest competitive advantage.",

    "tab-note-3-topic": "Communication & Stage",
    "tab-note-3-title": "Orchestrating Public Discourse Rhythm",
    "pane-note-3-eyebrow": "Music in Public Speaking",
    "pane-note-3-title": "Conducting Dialogue Like a Musical Symphony",
    "pane-note-3-body": "As an MC and moderator, I treat every event as a musical movement: an inviting overture, a crescendo during vigorous debate, and a resonant finale. Musical tempo keeps audiences fully engaged and focused on the core message.",
    "pane-note-3-takeaway": "Takeaway: Masterful communication is not about speaking fast, but mastering the rhythm of pauses.",

    // Experience Section
    "exp-label": "Career Journey",
    "exp-title": "Professional Experience",
    "exp-desc": "A proven track record in driving partnerships, moderating thought-leadership dialogues, and leading operations.",

    "exp-role-triv": "Business Development",
    "exp-company-triv": "PT. Tiga Inti Utama (TRIV Crypto Exchange)",
    "exp-period-triv": "2025 — Present",
    "exp-b1-triv": "Formulate and execute partnership marketing strategies to acquire new leads through targeted branding and strategic network expansion.",
    "exp-b2-triv": "Nurture and solidify long-term alliances with key institutional partners and leading blockchain/crypto communities across Indonesia.",
    "exp-b3-triv": "Pioneer creative collaboration initiatives with clients and organizations to deliver high-impact co-branding campaigns.",

    "exp-role-mc": "Master of Ceremonies (MC) & Panel Moderator",
    "exp-company-mc": "Freelance / Independent",
    "exp-period-mc": "2025 — Present",
    "exp-b1-mc": "Connect speakers, diverse audiences, and communities through lucid, poised, and dynamic stage communication.",
    "exp-b2-mc": "Steer discussions to remain focused, highly interactive, and agile in adapting to real-time event shifts.",
    "exp-b3-mc": "Cultivate strong audience engagement while maintaining infectious positive energy throughout the event.",

    "exp-role-mixue": "Fulltime Operations & Customer Relations",
    "exp-company-mixue": "Mixue Ice Cream & Tea",
    "exp-period-mixue": "2021 — 2023",
    "exp-b1-mixue": "Crafted beverages and desserts adhering strictly to corporate standards, upholding consistent taste and presentation quality.",
    "exp-b2-mixue": "Resolved customer inquiries and minor disputes in a timely, empathetic, and professional demeanor.",
    "exp-b3-mixue": "Administered daily raw material inventory, tracked stock levels, and coordinated restocking to maximize operational efficiency.",

    // Education Section
    "edu-label": "Academic Foundation",
    "edu-title": "Formal Education",
    "edu-desc": "A distinctive synthesis of deep theological investigation and empirical scientific discipline.",

    "edu-title-stt": "Bachelor of Theology (Theology Major)",
    "edu-inst-stt": "Indonesian Bethel Theological Seminary (STT Bethel Indonesia)",
    "edu-period-stt": "2021 — Present",
    "edu-desc-stt": "Focused on hermeneutics, moral ethics, history of thought, community building, and servant leadership.",

    "edu-title-sma": "Natural Science Major (MIPA)",
    "edu-inst-sma": "Impian Bunda Senior High School",
    "edu-period-sma": "2017 — 2020",
    "edu-desc-sma": "Established strong analytical reasoning, empirical scientific methodology, systematic observation, and quantitative problem-solving.",

    // Skills Section
    "skills-label": "Competencies",
    "skills-title": "Skills & Toolkit",
    "skills-desc": "Strategic, oratorical, technical, and interpersonal capabilities primed for immediate execution.",

    "skill-cat-1": "Business Development & Strategy",
    "skill-cat-2": "Public Speaking & Oratory",
    "skill-cat-3": "Technical & Creative",

    // Contact Section
    "contact-label": "Network & Collaboration",
    "contact-title": "Let's Connect & Build Meaningful Value",
    "contact-desc": "Interested in exploring strategic partnerships, booking moderation/MC facilitation, or discussing intellectual ideas?",
    "contact-email-lbl": "Official Email",
    "contact-wa-lbl": "WhatsApp / Phone",
    "contact-ig-lbl": "Personal Instagram",
    "contact-loc-lbl": "Location",
    "form-name-lbl": "Full Name",
    "form-email-lbl": "Email Address",
    "form-topic-lbl": "Discussion Subject",
    "form-msg-lbl": "Your Message",
    "btn-submit": "Send Message",
    "btn-whatsapp-direct": "Direct WhatsApp Chat",
    "toast-sent": "Message prepped! Opening communication channel...",

    // Modal
    "modal-title": "Curriculum Vitae Snapshot",
    "btn-print-action": "Print This Page (Print to PDF)"
  }
};

// ==========================================================================
// 2. CORE APP CONTROLLER
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initLanguageSwitcher();
  initMobileNav();
  initExpandCollapse();
  initDialecticalTabs();
  initContactForm();
  initCVModal();
  initScrollSpy();
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

  // Update expand/collapse button labels dynamically
  updateExpandButtonsText();
}

function updateExpandButtonsText() {
  const toggles = document.querySelectorAll(".btn-more-toggle");
  toggles.forEach((btn) => {
    const isExpanded = btn.classList.contains("expanded");
    const textSpan = btn.querySelector(".btn-more-text");
    const moreKey = btn.getAttribute("data-i18n-more");
    const lessKey = btn.getAttribute("data-i18n-less");

    if (textSpan && moreKey && lessKey) {
      if (isExpanded) {
        textSpan.textContent = translations[currentLang][lessKey] || "Tutup";
      } else {
        textSpan.textContent = translations[currentLang][moreKey] || "Selengkapnya";
      }
    }
  });
}

// --- Expand / Collapse Accordion System ("Button More") ---
function initExpandCollapse() {
  const toggles = document.querySelectorAll(".btn-more-toggle");

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetWrapper = document.getElementById(targetId);

      if (!targetWrapper) return;

      const isExpanded = btn.classList.contains("expanded");
      const textSpan = btn.querySelector(".btn-more-text");
      const arrowIcon = btn.querySelector(".btn-more-icon");
      const moreKey = btn.getAttribute("data-i18n-more");
      const lessKey = btn.getAttribute("data-i18n-less");

      if (isExpanded) {
        // Collapse
        targetWrapper.classList.remove("show");
        btn.classList.remove("expanded");
        if (textSpan && moreKey) {
          textSpan.textContent = translations[currentLang][moreKey] || "Selengkapnya";
        }
        if (arrowIcon) arrowIcon.textContent = "↓";
      } else {
        // Expand
        targetWrapper.classList.add("show");
        btn.classList.add("expanded");
        if (textSpan && lessKey) {
          textSpan.textContent = translations[currentLang][lessKey] || "Tutup";
        }
        if (arrowIcon) arrowIcon.textContent = "↑";
      }
    });
  });
}

// --- Mobile Navigation Drawer & Backdrop ---
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Create or get backdrop element
  let backdrop = document.querySelector(".nav-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "nav-backdrop";
    document.body.appendChild(backdrop);
  }

  function closeMenu() {
    if (navMenu) navMenu.classList.remove("open");
    if (backdrop) backdrop.classList.remove("active");
    if (toggleBtn) toggleBtn.innerHTML = "☰";
    document.body.style.overflow = "";
  }

  function openMenu() {
    if (navMenu) navMenu.classList.add("open");
    if (backdrop) backdrop.classList.add("active");
    if (toggleBtn) toggleBtn.innerHTML = "✕";
  }

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close when clicking outside on backdrop
    backdrop.addEventListener("click", closeMenu);

    // Close when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        closeMenu();
      }
    });
  }
}

// --- Dialectical Notes / Interactive Thought Tabs ---
function initDialecticalTabs() {
  const tabs = document.querySelectorAll(".note-tab");
  const panes = document.querySelectorAll(".note-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-target");

      tabs.forEach((t) => t.classList.remove("active"));
      panes.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");
      const activePane = document.getElementById(targetId);
      if (activePane) {
        activePane.classList.add("active");
      }
    });
  });
}

// --- ScrollSpy Active Links ---
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 100;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

// --- Contact Form & Direct WhatsApp Handler ---
function initContactForm() {
  const form = document.getElementById("contact-form");
  const waBtn = document.getElementById("btn-wa-direct");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("form-name").value.trim();
      const email = document.getElementById("form-email").value.trim();
      const topic = document.getElementById("form-topic").value.trim();
      const message = document.getElementById("form-message").value.trim();

      if (!name || !email || !message) {
        showToast("Mohon lengkapi semua bidang yang diperlukan.");
        return;
      }

      // Prepare mailto link
      const mailtoSubject = encodeURIComponent(`[Inquiry Portofolio] ${topic || "Kemitraan & Diskusi"} - Dari ${name}`);
      const mailtoBody = encodeURIComponent(
        `Halo Andra Dimas,\n\nNama: ${name}\nEmail: ${email}\nTopik: ${topic}\n\nPesan:\n${message}\n\n---\nDikirim via website portofolio andradimas.com`
      );

      const mailtoUrl = `mailto:Andradimas322@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      showToast(translations[currentLang]["toast-sent"]);

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);
    });
  }

  if (waBtn) {
    waBtn.addEventListener("click", () => {
      const name = document.getElementById("form-name") ? document.getElementById("form-name").value.trim() : "";
      const topic = document.getElementById("form-topic") ? document.getElementById("form-topic").value.trim() : "";
      
      let waText = "Halo Andra Dimas, saya ingin berdiskusi mengenai kemitraan strategis.";
      if (name) {
        waText = `Halo Andra Dimas, saya ${name}. Ingin mendiskusikan peluang kolaborasi terkait ${topic || "Business Development"}.`;
      }
      
      const waUrl = `https://wa.me/6281311825055?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, "_blank");
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

  // Handle direct escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });
}

// --- Toast Feedback Helper ---
function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
