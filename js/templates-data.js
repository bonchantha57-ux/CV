/* ============================================================
   CV PRO MASTER - 100+ CURATED TEMPLATES REGISTRY (180 Total)
   INCLUDES THE 5 NEW HIGH-DEMAND STYLES FROM USER SAMPLES!
   ============================================================ */

const CV_LAYOUTS = [
  // 5 NEW ICONIC STYLES REQUESTED BY USER
  {
    id: "layout-navy-executive",
    name: "Navy Classic Executive",
    category: "Executive & Finance",
    desc: "ជ្រុងឆ្វេង Navy ខៀវចាស់, ប្លង់ស្តង់ដារ Richard Sanchez, មានកន្លែង Reference"
  },
  {
    id: "layout-peach-capsule",
    name: "Peach Capsule Creative",
    category: "Creative & Design",
    desc: "Header កាតមូលពណ៌ Peach, ជ្រុងមូលទន់ភ្លន់, Tech Skill Progress Bar ដូច Christine Smith"
  },
  {
    id: "layout-minimal-divider",
    name: "Minimalist Grey Divider",
    category: "Minimalist",
    desc: "បន្ទាត់ពុះកណ្តាលស្អាតប្លែក, អក្សរធំទាក់ទាញ, ប្លង់ Ryley Harber, 4-Reference Cards"
  },
  {
    id: "layout-gold-diamond",
    name: "Gold Diamond Prestige",
    category: "Executive & Finance",
    desc: "ស៊ុមរូបថតរាងពេជ្រ Diamond 45°, ពណ៌មាសប្រណិត Gold & Charcoal, Timeline មាស John James Doe"
  },
  {
    id: "layout-arch-capsule",
    name: "Arch Dome Modern Ribbon",
    category: "Tech & Developer",
    desc: "កំពូល Arch Capsule មូលកោង, Gold Pill Badges, Skill ផ្កាយ 5, Language Bars, Morgan Maxwell"
  },

  // PREVIOUS CORE STYLES
  { id: "layout-modern-sidebar", name: "Modern Sidebar", category: "Professional", desc: "Two-column with colored left sidebar" },
  { id: "layout-executive-classic", name: "Executive Classic", category: "Executive & Finance", desc: "Top header banner with balanced columns" },
  { id: "layout-minimal-clean", name: "Minimalist Clean", category: "Minimalist", desc: "Sleek single-column, high typography impact" },
  { id: "layout-tech-developer", name: "Tech Developer", category: "Tech & Developer", desc: "Terminal badges and code accents" },
  { id: "layout-creative-split", name: "Creative Split", category: "Creative & Design", desc: "Asymmetrical columns with creative flair" },
  { id: "layout-swiss-grid", name: "Swiss Grid", category: "Professional", desc: "Modern Swiss geometric modular structure" },
  { id: "layout-timeline-pro", name: "Timeline Narrative", category: "Creative & Design", desc: "Connected vertical timeline nodes" },
  { id: "layout-compact-corporate", name: "Compact Corporate", category: "Executive & Finance", desc: "High density layout for deep careers" },
  { id: "layout-bordered-luxury", name: "Bordered Luxury", category: "Academic & Classic", desc: "Prestige double framed border with serif" },
  { id: "layout-gradient-banner", name: "Gradient Banner", category: "Creative & Design", desc: "Vibrant gradient hero header" }
];

const CV_THEMES = [
  { id: "theme-navy", name: "Navy & Sapphire", primary: "#0f2b5c", accent: "#3b82f6", bg: "#0f172a" },
  { id: "theme-gold-black", name: "Luxury Gold & Onyx", primary: "#d4af37", accent: "#ca8a04", bg: "#18181b" },
  { id: "theme-peach-coral", name: "Warm Peach & Coral", primary: "#f97316", accent: "#fb923c", bg: "#fff7ed" },
  { id: "theme-emerald", name: "Emerald & Mint", primary: "#064e3b", accent: "#10b981", bg: "#064e3b" },
  { id: "theme-indigo", name: "Royal Indigo", primary: "#312e81", accent: "#6366f1", bg: "#1e1b4b" },
  { id: "theme-crimson", name: "Crimson & Rose", primary: "#881337", accent: "#e11d48", bg: "#4c0519" },
  { id: "theme-monochrome", name: "Pure Monochrome", primary: "#09090b", accent: "#52525b", bg: "#18181b" },
  { id: "theme-cyan", name: "Cyber Teal", primary: "#155e75", accent: "#06b6d4", bg: "#083344" },
  { id: "theme-violet", name: "Velvet Violet", primary: "#581c87", accent: "#9333ea", bg: "#3b0764" },
  { id: "theme-amber", name: "Warm Bronze", primary: "#78350f", accent: "#d97706", bg: "#451a03" },
  { id: "theme-slate", name: "Titanium Slate", primary: "#1e293b", accent: "#475569", bg: "#0f172a" },
  { id: "theme-forest", name: "Forest & Gold", primary: "#14532d", accent: "#ca8a04", bg: "#052e16" }
];

// Curated naming generator
const TEMPLATE_NAME_MODIFIERS = [
  "Standard", "Prime", "Ultra", "Elite", "Pro", "Executive", "Signature", "Apex", "Vanguard", "Nexus", "Studio", "Master"
];

const TEMPLATE_BADGES = [
  "⭐ Popular", "🔥 Top ATS", "✨ Modern", "💼 Executive", "🚀 Tech Pick", "🎨 Creative", "🏆 Standard", "💎 Diamond Luxury"
];

function generate100PlusTemplates() {
  const templates = [];
  let counter = 1;

  CV_LAYOUTS.forEach((layout, lIdx) => {
    CV_THEMES.forEach((theme, tIdx) => {
      const idNum = String(counter).padStart(3, '0');
      const modifier = TEMPLATE_NAME_MODIFIERS[tIdx % TEMPLATE_NAME_MODIFIERS.length];
      
      let badge = TEMPLATE_BADGES[(lIdx * 3 + tIdx) % TEMPLATE_BADGES.length];
      if (layout.id.startsWith("layout-navy-executive") && tIdx === 0) badge = "🔥 Canva Top Pick";
      if (layout.id.startsWith("layout-peach-capsule") && theme.id === "theme-peach-coral") badge = "✨ Featured Soft UI";
      if (layout.id.startsWith("layout-gold-diamond")) badge = "💎 Gold Diamond";
      if (layout.id.startsWith("layout-arch-capsule")) badge = "🚀 Arch Modern 2026";
      if (layout.id.startsWith("layout-minimal-divider")) badge = "⭐ Clean Divider";

      let cat = layout.category;

      let avatarShape = "circle";
      if (layout.id === "layout-gold-diamond") avatarShape = "diamond";
      else if (layout.id === "layout-arch-capsule") avatarShape = "circle";
      else if (lIdx % 3 === 1) avatarShape = "rounded";

      templates.push({
        id: `tpl-${idNum}`,
        code: `TPL-${idNum}`,
        name: `${theme.name.split(' ')[0]} ${layout.name.split(' ')[0]} ${modifier}`,
        fullName: `${layout.name} – ${theme.name} Edition (#${idNum})`,
        layout: layout.id,
        theme: theme.id,
        category: cat,
        badge: badge,
        primaryColor: theme.primary,
        accentColor: theme.accent,
        sidebarBg: theme.bg,
        avatarShape: avatarShape,
        recommendedFor: `${cat} / Global Standard`
      });

      counter++;
    });
  });

  return templates;
}

const ALL_TEMPLATES = generate100PlusTemplates();
console.log(`Generated ${ALL_TEMPLATES.length} CV Templates successfully.`);
