/* ============================================================
   PROFILE CV CAMBO - CORE APPLICATION ENGINE
   INCLUDES REAL FLAG ICONS, GOOGLE KHMER FONTS, & 6 AVATAR SHAPES
   ============================================================ */

// Application Global State
let cvState = {
  data: JSON.parse(JSON.stringify(SAMPLE_DATA_KHMER)),
  currentTemplateId: "tpl-001",
  layout: "layout-navy-executive",
  theme: "theme-navy",
  fontFamily: "'Kantumruy Pro', 'Battambang', sans-serif",
  zoom: 0.85,
  avatarShape: "diamond",
  skillMode: "bars"
};

// SVG Icons helper
const ICONS = {
  email: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>`,
  location: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initFormBindings();
  initDynamicListHandlers();
  initAppearancePickers();
  initGalleryModal();
  initZoomAndActions();
  
  // Render Initial View
  populateFormFields();
  renderCV();
  renderTemplateGalleryGrid();
  initSelectionFormatting();
  initAvatarFrameControls();
  initAvatarRepositioning();
});

/* ============================================================
   1. TAB SWITCHING & SMOOTH HORIZONTAL SCROLLING
   ============================================================ */
function initTabs() {
  const tabsBar = document.getElementById("editor-tabs-bar");
  const tabs = document.querySelectorAll(".tab-btn");
  const scrollLeftBtn = document.getElementById("tab-scroll-left");
  const scrollRightBtn = document.getElementById("tab-scroll-right");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".editor-section").forEach(s => s.classList.remove("active"));

      tab.classList.add("active");
      const targetId = tab.getAttribute("data-tab");
      const targetSection = document.getElementById(targetId);
      if (targetSection) targetSection.classList.add("active");

      tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
  });

  if (scrollLeftBtn && tabsBar) {
    scrollLeftBtn.addEventListener("click", () => {
      tabsBar.scrollBy({ left: -140, behavior: "smooth" });
    });
  }
  if (scrollRightBtn && tabsBar) {
    scrollRightBtn.addEventListener("click", () => {
      tabsBar.scrollBy({ left: 140, behavior: "smooth" });
    });
  }

  if (tabsBar) {
    tabsBar.addEventListener("wheel", (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        tabsBar.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  }
}

/* ============================================================
   2. FORM POPULATION & TWO-WAY BINDINGS
   ============================================================ */
function populateFormFields() {
  const p = cvState.data.personal;
  document.getElementById("input-fullName").value = p.fullName || "";
  document.getElementById("input-jobTitle").value = p.jobTitle || "";
  document.getElementById("input-email").value = p.email || "";
  document.getElementById("input-phone").value = p.phone || "";
  document.getElementById("input-address").value = p.address || "";
  document.getElementById("input-website").value = p.website || "";
  document.getElementById("input-linkedin").value = p.linkedin || "";
  document.getElementById("input-github").value = p.github || "";
  document.getElementById("input-summary").value = p.summary || "";

  if (p.avatar) {
    document.getElementById("avatar-preview-img").src = p.avatar;
  }

  const interestsInput = document.getElementById("input-interests-tags");
  if (interestsInput) {
    interestsInput.value = (cvState.data.interests || []).join(", ");
  }

  renderExperienceEditorList();
  renderEducationEditorList();
  renderSkillsEditorList();
  renderProjectsEditorList();
  renderLanguagesEditorList();
  renderReferencesEditorList();
  renderCertificationsEditorList();
  syncAvatarFields();
}

function initFormBindings() {
  const fields = ["fullName", "jobTitle", "email", "phone", "address", "website", "linkedin", "github", "summary"];
  fields.forEach(field => {
    const input = document.getElementById(`input-${field}`);
    if (input) {
      input.addEventListener("input", (e) => {
        cvState.data.personal[field] = e.target.value;
        renderCV();
      });
    }
  });

  const avatarUploadInput = document.getElementById("avatar-file-input");
  if (avatarUploadInput) {
    avatarUploadInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          cvState.data.personal.avatar = event.target.result;
          document.getElementById("avatar-preview-img").src = event.target.result;
          renderCV();
          showToast("បានផ្លាស់ប្តូររូបថតជោគជ័យ! (Photo updated)");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  document.querySelectorAll(".btn-preset-avatar").forEach(btn => {
    btn.addEventListener("click", () => {
      const avatarSrc = btn.getAttribute("data-avatar");
      cvState.data.personal.avatar = avatarSrc;
      document.getElementById("avatar-preview-img").src = avatarSrc;
      renderCV();
      showToast("បានជ្រើសរើសរូបតំណាង! (Avatar chosen)");
    });
  });

  // Avatar Shape Dropdown & Quick Shape Buttons
  const shapeSelect = document.getElementById("select-avatar-shape");
  if (shapeSelect) {
    shapeSelect.value = cvState.avatarShape;
    shapeSelect.addEventListener("change", (e) => {
      setAvatarShape(e.target.value);
    });
  }

  // Quick Shape Buttons right in Personal Info tab
  document.querySelectorAll(".btn-shape-quick").forEach(btn => {
    btn.addEventListener("click", () => {
      const shape = btn.getAttribute("data-shape");
      setAvatarShape(shape);
      showToast(`បានប្តូរទម្រង់រូបថតជា: ${btn.textContent.trim()} ✨`);
    });
  });

  // Skill display mode select
  const skillModeSelect = document.getElementById("select-skill-mode");
  if (skillModeSelect) {
    skillModeSelect.value = cvState.skillMode || "bars";
    skillModeSelect.addEventListener("change", (e) => {
      cvState.skillMode = e.target.value;
      renderCV();
    });
  }

  // Interests Input
  const interestsInput = document.getElementById("input-interests-tags");
  if (interestsInput) {
    interestsInput.addEventListener("input", (e) => {
      cvState.data.interests = e.target.value.split(",").map(t => t.trim()).filter(Boolean);
      renderCV();
    });
  }

  // Quick Featured Layout buttons
  document.querySelectorAll(".btn-quick-layout").forEach(btn => {
    btn.addEventListener("click", () => {
      const layout = btn.getAttribute("data-layout");
      const theme = btn.getAttribute("data-theme");
      cvState.layout = layout;
      cvState.theme = theme;
      if (layout === "layout-gold-diamond") cvState.avatarShape = "diamond";
      else cvState.avatarShape = "circle";
      renderCV();
      updateCurrentTemplateIndicator();
      showToast(`បានអនុវត្តម៉ូដ: ${btn.textContent.trim()} 🎉`);
    });
  });
}

function setAvatarShape(shape) {
  cvState.avatarShape = shape;
  cvState.data.personal.avatarShape = shape;
  document.querySelectorAll(".btn-shape-quick").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-shape") === shape);
  });
  const shapeSelect = document.getElementById("select-avatar-shape");
  if (shapeSelect) shapeSelect.value = shape;
  renderCV();
  updateAvatarPreviewBox();
}

function updateAvatarPreviewBox() {
  const previewImg = document.getElementById("avatar-preview-img");
  if (!previewImg) return;
  const p = cvState.data.personal;
  const shape = cvState.avatarShape || p.avatarShape || 'circle';
  const posX = (p.avatarPosX !== undefined && p.avatarPosX !== null) ? p.avatarPosX : 50;
  const posY = (p.avatarPosY !== undefined && p.avatarPosY !== null) ? p.avatarPosY : 50;
  const zoom = (p.avatarZoom !== undefined && p.avatarZoom !== null) ? p.avatarZoom : 1;
  const borderColor = p.avatarBorderColor || '#d4af37';
  const borderWidth = (p.avatarBorderWidth !== undefined && p.avatarBorderWidth !== null) ? p.avatarBorderWidth : 3;

  if (p.avatar) previewImg.src = p.avatar;
  previewImg.style.objectPosition = `${posX}% ${posY}%`;
  previewImg.style.transform = `scale(${zoom})`;
  previewImg.style.borderColor = borderColor === 'transparent' ? 'rgba(255,255,255,0.2)' : borderColor;
  previewImg.style.borderWidth = `${Math.min(4, Math.max(1, borderWidth))}px`;

  if (shape === 'circle') {
    previewImg.style.borderRadius = '50%';
    previewImg.style.clipPath = 'none';
  } else if (shape === 'diamond') {
    previewImg.style.borderRadius = '8px';
    previewImg.style.clipPath = 'none';
  } else if (shape === 'rounded') {
    previewImg.style.borderRadius = '16px';
    previewImg.style.clipPath = 'none';
  } else if (shape === 'square') {
    previewImg.style.borderRadius = '4px';
    previewImg.style.clipPath = 'none';
  } else if (shape === 'arch') {
    previewImg.style.borderRadius = '38px 38px 6px 6px';
    previewImg.style.clipPath = 'none';
  } else if (shape === 'oval') {
    previewImg.style.borderRadius = '50% / 40%';
    previewImg.style.clipPath = 'none';
  } else if (shape === 'hexagon') {
    previewImg.style.borderRadius = '0';
    previewImg.style.clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
  } else {
    previewImg.style.borderRadius = '8px';
    previewImg.style.clipPath = 'none';
  }
}

function syncAvatarStyles() {
  const p = cvState.data.personal;
  const shape = cvState.avatarShape || p.avatarShape || 'circle';
  const posX = (p.avatarPosX !== undefined && p.avatarPosX !== null) ? p.avatarPosX : 50;
  const posY = (p.avatarPosY !== undefined && p.avatarPosY !== null) ? p.avatarPosY : 50;
  const zoom = (p.avatarZoom !== undefined && p.avatarZoom !== null) ? p.avatarZoom : 1;
  const size = (p.avatarSize !== undefined && p.avatarSize !== null) ? p.avatarSize : (shape === 'diamond' ? 95 : 100);
  const borderWidth = (p.avatarBorderWidth !== undefined && p.avatarBorderWidth !== null) ? p.avatarBorderWidth : 3;
  const borderColor = p.avatarBorderColor || (shape === 'diamond' ? '#d4af37' : 'rgba(212, 175, 55, 0.85)');

  // Direct sync on rendered frames
  const frames = document.querySelectorAll(".cv-avatar-frame, .cv-diamond-avatar-wrap");
  frames.forEach(frame => {
    frame.style.width = `${size}px`;
    frame.style.height = `${size}px`;
    if (frame.classList.contains("cv-avatar-hexagon")) {
      frame.style.outline = `${borderWidth}px solid ${borderColor}`;
    } else {
      frame.style.border = `${borderWidth}px solid ${borderColor}`;
    }
  });

  const imgs = document.querySelectorAll(".cv-movable-avatar");
  imgs.forEach(img => {
    img.style.objectPosition = `${posX}% ${posY}%`;
    if (shape === 'diamond') {
      img.style.width = `${Math.round(size * 1.45)}px`;
      img.style.height = `${Math.round(size * 1.45)}px`;
      img.style.transform = `rotate(-45deg) scale(${zoom})`;
    } else {
      img.style.transform = `scale(${zoom})`;
    }
  });

  updateAvatarPreviewBox();
}

function syncAvatarFields() {
  const p = cvState.data.personal;
  const shape = cvState.avatarShape || p.avatarShape || 'circle';
  const posX = (p.avatarPosX !== undefined && p.avatarPosX !== null) ? p.avatarPosX : 50;
  const posY = (p.avatarPosY !== undefined && p.avatarPosY !== null) ? p.avatarPosY : 50;
  const zoom = (p.avatarZoom !== undefined && p.avatarZoom !== null) ? p.avatarZoom : 1;
  const size = (p.avatarSize !== undefined && p.avatarSize !== null) ? p.avatarSize : (shape === 'diamond' ? 95 : 100);
  const borderWidth = (p.avatarBorderWidth !== undefined && p.avatarBorderWidth !== null) ? p.avatarBorderWidth : 3;
  const borderColor = p.avatarBorderColor || (shape === 'diamond' ? '#d4af37' : 'rgba(212, 175, 55, 0.85)');

  const inpX = document.getElementById("input-avatar-pos-x");
  const inpY = document.getElementById("input-avatar-pos-y");
  const inpZoom = document.getElementById("input-avatar-zoom");
  const inpSize = document.getElementById("input-avatar-size");
  const inpBorderWidth = document.getElementById("input-avatar-border-width");
  const inpBorderColor = document.getElementById("input-avatar-border-color");

  const lblX = document.getElementById("val-avatar-pos-x");
  const lblY = document.getElementById("val-avatar-pos-y");
  const lblZoom = document.getElementById("val-avatar-zoom");
  const lblSize = document.getElementById("val-avatar-size");
  const lblBorderWidth = document.getElementById("val-avatar-border-width");

  if (inpX) inpX.value = posX;
  if (inpY) inpY.value = posY;
  if (inpZoom) inpZoom.value = zoom;
  if (inpSize) inpSize.value = size;
  if (inpBorderWidth) inpBorderWidth.value = borderWidth;
  if (inpBorderColor && borderColor !== 'transparent') inpBorderColor.value = borderColor;

  if (lblX) lblX.textContent = `${posX}%`;
  if (lblY) lblY.textContent = `${posY}%`;
  if (lblZoom) lblZoom.textContent = `${Number(zoom).toFixed(2)}x`;
  if (lblSize) lblSize.textContent = `${size}px`;
  if (lblBorderWidth) lblBorderWidth.textContent = `${borderWidth}px`;

  document.querySelectorAll(".btn-shape-quick").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-shape") === shape);
  });
  const shapeSelect = document.getElementById("select-avatar-shape");
  if (shapeSelect) shapeSelect.value = shape;

  document.querySelectorAll(".btn-frame-color").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-color") === borderColor);
  });

  updateAvatarPreviewBox();
}

function initAvatarFrameControls() {
  const p = cvState.data.personal;

  // Toggle drawer button
  const toggleBtn = document.getElementById("btn-toggle-frame-adjust");
  const drawer = document.getElementById("avatar-frame-adjust-drawer");
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      drawer.classList.toggle("collapsed");
      toggleBtn.classList.toggle("active");
    });
  }

  // Sliders
  const inpX = document.getElementById("input-avatar-pos-x");
  const inpY = document.getElementById("input-avatar-pos-y");
  const inpZoom = document.getElementById("input-avatar-zoom");
  const inpSize = document.getElementById("input-avatar-size");
  const inpBorderWidth = document.getElementById("input-avatar-border-width");
  const inpBorderColor = document.getElementById("input-avatar-border-color");

  const lblX = document.getElementById("val-avatar-pos-x");
  const lblY = document.getElementById("val-avatar-pos-y");
  const lblZoom = document.getElementById("val-avatar-zoom");
  const lblSize = document.getElementById("val-avatar-size");
  const lblBorderWidth = document.getElementById("val-avatar-border-width");

  if (inpX) {
    inpX.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      p.avatarPosX = val;
      if (lblX) lblX.textContent = `${val}%`;
      syncAvatarStyles();
    });
  }

  if (inpY) {
    inpY.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      p.avatarPosY = val;
      if (lblY) lblY.textContent = `${val}%`;
      syncAvatarStyles();
    });
  }

  if (inpZoom) {
    inpZoom.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      p.avatarZoom = val;
      if (lblZoom) lblZoom.textContent = `${val.toFixed(2)}x`;
      syncAvatarStyles();
    });
  }

  if (inpSize) {
    inpSize.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      p.avatarSize = val;
      if (lblSize) lblSize.textContent = `${val}px`;
      syncAvatarStyles();
    });
  }

  if (inpBorderWidth) {
    inpBorderWidth.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      p.avatarBorderWidth = val;
      if (lblBorderWidth) lblBorderWidth.textContent = `${val}px`;
      syncAvatarStyles();
    });
  }

  if (inpBorderColor) {
    inpBorderColor.addEventListener("input", (e) => {
      const val = e.target.value;
      p.avatarBorderColor = val;
      document.querySelectorAll(".btn-frame-color").forEach(b => b.classList.toggle("active", b.getAttribute("data-color") === val));
      syncAvatarStyles();
    });
  }

  // Border Color Swatch Buttons
  document.querySelectorAll(".btn-frame-color").forEach(btn => {
    btn.addEventListener("click", () => {
      const col = btn.getAttribute("data-color");
      p.avatarBorderColor = col;
      if (inpBorderColor && col !== "transparent") inpBorderColor.value = col;
      document.querySelectorAll(".btn-frame-color").forEach(b => b.classList.toggle("active", b === btn));
      syncAvatarStyles();
    });
  });

  // Reset button
  const resetBtn = document.getElementById("btn-reset-avatar-alignment");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      p.avatarPosX = 50;
      p.avatarPosY = 50;
      p.avatarZoom = 1;
      p.avatarSize = 100;
      p.avatarBorderWidth = 3;
      p.avatarBorderColor = "#d4af37";
      syncAvatarFields();
      renderCV();
      showToast("បានកំណត់ទីតាំង និងទំហំស៊ុមទៅដើមវិញ! 🔄");
    });
  }
}

function initAvatarRepositioning() {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let startPosX = 50;
  let startPosY = 50;

  function onDragStart(e) {
    const el = e.target;
    if (!el) return;
    const isMovableAvatar = el.classList.contains("cv-movable-avatar") || el.hasAttribute("data-avatar-img") || el.id === "avatar-preview-img" || el.classList.contains("cv-avatar-frame") || el.classList.contains("cv-diamond-avatar-wrap") || el.classList.contains("avatar-preview-wrapper");
    if (!isMovableAvatar) return;

    e.preventDefault();
    isDragging = true;

    document.querySelectorAll(".cv-avatar-frame, .cv-diamond-avatar-wrap, .avatar-preview-wrapper, .cv-movable-avatar").forEach(a => a.classList.add("dragging"));

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startX = clientX;
    startY = clientY;

    const p = cvState.data.personal;
    startPosX = (p.avatarPosX !== undefined && p.avatarPosX !== null) ? p.avatarPosX : 50;
    startPosY = (p.avatarPosY !== undefined && p.avatarPosY !== null) ? p.avatarPosY : 50;

    document.addEventListener("mousemove", onDragMove, { passive: false });
    document.addEventListener("touchmove", onDragMove, { passive: false });
    document.addEventListener("mouseup", onDragEnd);
    document.addEventListener("touchend", onDragEnd);
  }

  function onDragMove(e) {
    if (!isDragging) return;
    if (e.cancelable) e.preventDefault();

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const dx = clientX - startX;
    const dy = clientY - startY;

    // Dragging mouse to the right moves visible frame leftwards -> decreases object-position percentage
    let newX = Math.round(startPosX - (dx * 0.45));
    let newY = Math.round(startPosY - (dy * 0.45));

    newX = Math.max(0, Math.min(100, newX));
    newY = Math.max(0, Math.min(100, newY));

    cvState.data.personal.avatarPosX = newX;
    cvState.data.personal.avatarPosY = newY;

    // Direct DOM update for 60fps smooth pan
    const cvAvatars = document.querySelectorAll(".cv-movable-avatar, #avatar-preview-img");
    cvAvatars.forEach(img => {
      img.style.objectPosition = `${newX}% ${newY}%`;
    });

    // Update labels and sliders
    const inpX = document.getElementById("input-avatar-pos-x");
    const inpY = document.getElementById("input-avatar-pos-y");
    const lblX = document.getElementById("val-avatar-pos-x");
    const lblY = document.getElementById("val-avatar-pos-y");
    if (inpX) inpX.value = newX;
    if (inpY) inpY.value = newY;
    if (lblX) lblX.textContent = `${newX}%`;
    if (lblY) lblY.textContent = `${newY}%`;
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    document.querySelectorAll(".cv-avatar-frame, .cv-diamond-avatar-wrap, .avatar-preview-wrapper, .cv-movable-avatar").forEach(a => a.classList.remove("dragging"));

    document.removeEventListener("mousemove", onDragMove);
    document.removeEventListener("touchmove", onDragMove);
    document.removeEventListener("mouseup", onDragEnd);
    document.removeEventListener("touchend", onDragEnd);
  }

  // Listen on container elements
  const cvSheet = document.getElementById("cv-sheet-wrapper");
  if (cvSheet) {
    cvSheet.addEventListener("mousedown", onDragStart);
    cvSheet.addEventListener("touchstart", onDragStart, { passive: false });
  }
  const previewBox = document.querySelector(".avatar-preview-wrapper") || document.getElementById("avatar-preview-img");
  if (previewBox) {
    previewBox.addEventListener("mousedown", onDragStart);
    previewBox.addEventListener("touchstart", onDragStart, { passive: false });
  }
}

/* ============================================================
   3. DYNAMIC LIST EDITORS
   ============================================================ */
function initDynamicListHandlers() {
  document.getElementById("btn-add-experience").addEventListener("click", () => {
    cvState.data.experience.push({
      id: "exp_" + Date.now(),
      role: "មុខតំណែងថ្មី (Job Title)",
      company: "ឈ្មោះក្រុមហ៊ុន (Company Name)",
      location: "ទីកន្លែង (Location)",
      startDate: "2023",
      endDate: "បច្ចុប្បន្ន",
      isCurrent: true,
      description: "• រៀបរាប់សមិទ្ធផលការងារសំខាន់ៗរបស់អ្នកនៅទីនេះ\n• ប្រើប្រាស់លេខ និងទិន្នន័យជាក់លាក់"
    });
    renderExperienceEditorList();
    renderCV();
  });

  document.getElementById("btn-add-education").addEventListener("click", () => {
    cvState.data.education.push({
      id: "edu_" + Date.now(),
      degree: "ឈ្មោះសញ្ញាបត្រ (Degree Name)",
      school: "សាកលវិទ្យាល័យ / វិទ្យាស្ថាន (University / School)",
      location: "ទីក្រុង (City)",
      year: "2020 - 2024",
      description: "និទ្ទេស / សមិទ្ធផល / កិត្តិយស"
    });
    renderEducationEditorList();
    renderCV();
  });

  document.getElementById("btn-add-skill").addEventListener("click", () => {
    cvState.data.skills.push({
      name: "ជំនាញថ្មី (New Skill)",
      level: 85,
      stars: 4
    });
    renderSkillsEditorList();
    renderCV();
  });

  document.getElementById("btn-add-project").addEventListener("click", () => {
    cvState.data.projects.push({
      id: "proj_" + Date.now(),
      title: "គម្រោងថ្មី (Project Name)",
      role: "តួនាទី (Role)",
      link: "example.com",
      description: "ការពិពណ៌នាសង្ខេបអំពីគម្រោង និងបច្ចេកវិទ្យាដែលបានប្រើប្រាស់"
    });
    renderProjectsEditorList();
    renderCV();
  });

  document.getElementById("btn-add-language").addEventListener("click", () => {
    cvState.data.languages.push({
      name: "ភាសាថ្មី (Language)",
      level: "ស្ទាត់ជំនាញ (Fluent)",
      flag: "kh",
      percent: 85
    });
    renderLanguagesEditorList();
    renderCV();
  });

  document.getElementById("btn-add-reference").addEventListener("click", () => {
    if (!cvState.data.references) cvState.data.references = [];
    cvState.data.references.push({
      name: "ឈ្មោះអ្នកធានា (Name)",
      company: "ក្រុមហ៊ុន (Company)",
      role: "តួនាទី (Role)",
      phone: "+855 12 345 678",
      email: "ref@company.com"
    });
    renderReferencesEditorList();
    renderCV();
  });

  document.getElementById("btn-add-certification").addEventListener("click", () => {
    cvState.data.certifications.push({
      name: "ឈ្មោះវិញ្ញាបនបត្រ (Certification Title)",
      issuer: "ស្ថាប័នចេញ (Issuer)",
      date: "2024"
    });
    renderCertificationsEditorList();
    renderCV();
  });
}

function renderExperienceEditorList() {
  const container = document.getElementById("experience-list-container");
  container.innerHTML = "";
  cvState.data.experience.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "dynamic-item-card";
    card.innerHTML = `
      <div class="card-top-bar">
        <span class="card-item-title">#${index + 1} ${item.role || "Experience"}</span>
        <button class="btn-remove-item" onclick="removeExperienceItem(${index})" title="Delete">✕</button>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">មុខតំណែង (Role / Title)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.role)}" oninput="updateExpField(${index}, 'role', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">ក្រុមហ៊ុន / ស្ថាប័ន (Company)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.company)}" oninput="updateExpField(${index}, 'company', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">ថ្ងៃចាប់ផ្តើម (Start)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.startDate)}" oninput="updateExpField(${index}, 'startDate', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">ថ្ងៃបញ្ចប់ (End)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.endDate)}" oninput="updateExpField(${index}, 'endDate', this.value)">
        </div>
        <div class="form-group form-grid-full">
          <label class="form-label">ទីតាំង (Location)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.location || '')}" oninput="updateExpField(${index}, 'location', this.value)">
        </div>
        <div class="form-group form-grid-full">
          <label class="form-label">ការពិពណ៌នាសមិទ្ធផល (Achievements)</label>
          <textarea class="form-textarea" oninput="updateExpField(${index}, 'description', this.value)">${escapeHtml(item.description)}</textarea>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}
function updateExpField(index, field, value) {
  cvState.data.experience[index][field] = value;
  renderCV();
}
window.updateExpField = updateExpField;

function removeExperienceItem(index) {
  cvState.data.experience.splice(index, 1);
  renderExperienceEditorList();
  renderCV();
}
window.removeExperienceItem = removeExperienceItem;

function renderEducationEditorList() {
  const container = document.getElementById("education-list-container");
  container.innerHTML = "";
  cvState.data.education.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "dynamic-item-card";
    card.innerHTML = `
      <div class="card-top-bar">
        <span class="card-item-title">#${index + 1} ${item.degree || "Education"}</span>
        <button class="btn-remove-item" onclick="removeEducationItem(${index})" title="Delete">✕</button>
      </div>
      <div class="form-grid form-grid-full">
        <div class="form-group">
          <label class="form-label">កម្រិត / ជំនាញ (Degree / Major)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.degree)}" oninput="updateEduField(${index}, 'degree', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">សាលា / សាកលវិទ្យាល័យ (Institution)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.school)}" oninput="updateEduField(${index}, 'school', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">ឆ្នាំសិក្សា (Year)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.year)}" oninput="updateEduField(${index}, 'year', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">ព័ត៌មានលម្អិត / និទ្ទេស (Details)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.description || '')}" oninput="updateEduField(${index}, 'description', this.value)">
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}
function updateEduField(index, field, value) {
  cvState.data.education[index][field] = value;
  renderCV();
}
window.updateEduField = updateEduField;

function removeEducationItem(index) {
  cvState.data.education.splice(index, 1);
  renderEducationEditorList();
  renderCV();
}
window.removeEducationItem = removeEducationItem;

function renderSkillsEditorList() {
  const container = document.getElementById("skills-list-container");
  container.innerHTML = "";
  cvState.data.skills.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "dynamic-item-card";
    card.style.padding = "10px";
    card.innerHTML = `
      <div style="display:flex; gap:8px; align-items:center;">
        <input type="text" class="form-input" style="flex:2;" value="${escapeHtml(item.name)}" placeholder="Skill name" oninput="updateSkillField(${index}, 'name', this.value)">
        <input type="number" min="10" max="100" class="form-input" style="width:70px;" value="${item.level || 80}" placeholder="%" title="Level %" oninput="updateSkillField(${index}, 'level', this.value)">
        <select class="form-select" style="width:80px; padding:6px;" title="Stars Rating" onchange="updateSkillField(${index}, 'stars', this.value)">
          <option value="5" ${item.stars === 5 ? 'selected' : ''}>★★★★★</option>
          <option value="4" ${item.stars === 4 ? 'selected' : ''}>★★★★</option>
          <option value="3" ${item.stars === 3 ? 'selected' : ''}>★★★</option>
          <option value="2" ${item.stars === 2 ? 'selected' : ''}>★★</option>
          <option value="1" ${item.stars === 1 ? 'selected' : ''}>★</option>
        </select>
        <button class="btn-remove-item" onclick="removeSkillItem(${index})">✕</button>
      </div>
    `;
    container.appendChild(card);
  });
}
function updateSkillField(index, field, value) {
  if (field === 'level') cvState.data.skills[index][field] = parseInt(value) || 80;
  else if (field === 'stars') cvState.data.skills[index][field] = parseInt(value) || 5;
  else cvState.data.skills[index][field] = value;
  renderCV();
}
window.updateSkillField = updateSkillField;

function removeSkillItem(index) {
  cvState.data.skills.splice(index, 1);
  renderSkillsEditorList();
  renderCV();
}
window.removeSkillItem = removeSkillItem;

function renderProjectsEditorList() {
  const container = document.getElementById("projects-list-container");
  container.innerHTML = "";
  cvState.data.projects.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "dynamic-item-card";
    card.innerHTML = `
      <div class="card-top-bar">
        <span class="card-item-title">#${index + 1} ${item.title || "Project"}</span>
        <button class="btn-remove-item" onclick="removeProjectItem(${index})">✕</button>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">ឈ្មោះគម្រោង (Title)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.title)}" oninput="updateProjectField(${index}, 'title', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">តួនាទី / Tech</label>
          <input type="text" class="form-input" value="${escapeHtml(item.role || '')}" oninput="updateProjectField(${index}, 'role', this.value)">
        </div>
        <div class="form-group form-grid-full">
          <label class="form-label">Link</label>
          <input type="text" class="form-input" value="${escapeHtml(item.link || '')}" oninput="updateProjectField(${index}, 'link', this.value)">
        </div>
        <div class="form-group form-grid-full">
          <label class="form-label">ពិពណ៌នា</label>
          <textarea class="form-textarea" oninput="updateProjectField(${index}, 'description', this.value)">${escapeHtml(item.description)}</textarea>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}
function updateProjectField(index, field, value) {
  cvState.data.projects[index][field] = value;
  renderCV();
}
window.updateProjectField = updateProjectField;

function removeProjectItem(index) {
  cvState.data.projects.splice(index, 1);
  renderProjectsEditorList();
  renderCV();
}
window.removeProjectItem = removeProjectItem;

// Languages Editor List with REAL Graphic Flag Preview
function renderLanguagesEditorList() {
  const container = document.getElementById("languages-list-container");
  container.innerHTML = "";
  cvState.data.languages.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "dynamic-item-card";
    card.style.padding = "10px";

    const currentFlag = (item.flag || 'kh').toLowerCase();

    const flagOptionsHtml = POPULAR_FLAGS.map(f => `
      <option value="${f.code}" ${currentFlag === f.code ? 'selected' : ''}>${f.name}</option>
    `).join('');

    card.innerHTML = `
      <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
        <img id="flag-preview-${index}" src="assets/icons/flags/${currentFlag}.png" class="cv-flag-img" style="width:24px; height:16px;" alt="flag">
        <select class="form-select" style="width:140px; font-size:12px;" onchange="updateLanguageFlag(${index}, this.value)">
          ${flagOptionsHtml}
        </select>
        <input type="text" class="form-input" style="flex:2; min-width:120px;" value="${escapeHtml(item.name)}" placeholder="Language" oninput="updateLanguageField(${index}, 'name', this.value)">
        <input type="text" class="form-input" style="flex:1; min-width:100px;" value="${escapeHtml(item.level)}" placeholder="Level (Native, Fluent)" oninput="updateLanguageField(${index}, 'level', this.value)">
        <input type="number" min="10" max="100" class="form-input" style="width:65px;" value="${item.percent || 80}" placeholder="%" title="Proficiency %" oninput="updateLanguageField(${index}, 'percent', this.value)">
        <button class="btn-remove-item" onclick="removeLanguageItem(${index})">✕</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function updateLanguageFlag(index, value) {
  cvState.data.languages[index].flag = value;
  const img = document.getElementById(`flag-preview-${index}`);
  if (img) img.src = `assets/icons/flags/${value}.png`;
  renderCV();
}
window.updateLanguageFlag = updateLanguageFlag;

function updateLanguageField(index, field, value) {
  if (field === 'percent') cvState.data.languages[index][field] = parseInt(value) || 80;
  else cvState.data.languages[index][field] = value;
  renderCV();
}
window.updateLanguageField = updateLanguageField;

function removeLanguageItem(index) {
  cvState.data.languages.splice(index, 1);
  renderLanguagesEditorList();
  renderCV();
}
window.removeLanguageItem = removeLanguageItem;

function renderReferencesEditorList() {
  const container = document.getElementById("references-list-container");
  container.innerHTML = "";
  if (!cvState.data.references) cvState.data.references = [];
  cvState.data.references.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "dynamic-item-card";
    card.innerHTML = `
      <div class="card-top-bar">
        <span class="card-item-title">#${index + 1} ${item.name || "Reference"}</span>
        <button class="btn-remove-item" onclick="removeReferenceItem(${index})" title="Delete">✕</button>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">ឈ្មោះអ្នកធានា (Full Name)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.name)}" oninput="updateRefField(${index}, 'name', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">ក្រុមហ៊ុន / ស្ថាប័ន (Company)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.company)}" oninput="updateRefField(${index}, 'company', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">តួនាទី (Role / Title)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.role)}" oninput="updateRefField(${index}, 'role', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">លេខទូរស័ព្ទ (Phone)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.phone || '')}" oninput="updateRefField(${index}, 'phone', this.value)">
        </div>
        <div class="form-group form-grid-full">
          <label class="form-label">អ៊ីមែល (Email)</label>
          <input type="email" class="form-input" value="${escapeHtml(item.email || '')}" oninput="updateRefField(${index}, 'email', this.value)">
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}
function updateRefField(index, field, value) {
  cvState.data.references[index][field] = value;
  renderCV();
}
window.updateRefField = updateRefField;

function removeReferenceItem(index) {
  cvState.data.references.splice(index, 1);
  renderReferencesEditorList();
  renderCV();
}
window.removeReferenceItem = removeReferenceItem;

function renderCertificationsEditorList() {
  const container = document.getElementById("certifications-list-container");
  container.innerHTML = "";
  cvState.data.certifications.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "dynamic-item-card";
    card.innerHTML = `
      <div class="card-top-bar">
        <span class="card-item-title">#${index + 1} ${item.name || "Certification"}</span>
        <button class="btn-remove-item" onclick="removeCertItem(${index})" title="Delete">✕</button>
      </div>
      <div class="form-grid form-grid-full">
        <div class="form-group">
          <label class="form-label">ឈ្មោះវិញ្ញាបនបត្រ (Title)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.name)}" oninput="updateCertField(${index}, 'name', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">ស្ថាប័នផ្តល់ (Issuer)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.issuer)}" oninput="updateCertField(${index}, 'issuer', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">ឆ្នាំទទួលបាន (Year)</label>
          <input type="text" class="form-input" value="${escapeHtml(item.date)}" oninput="updateCertField(${index}, 'date', this.value)">
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}
function updateCertField(index, field, value) {
  cvState.data.certifications[index][field] = value;
  renderCV();
}
window.updateCertField = updateCertField;

function removeCertItem(index) {
  cvState.data.certifications.splice(index, 1);
  renderCertificationsEditorList();
  renderCV();
}
window.removeCertItem = removeCertItem;

/* ============================================================
   4. APPEARANCE & CUSTOMIZER PICKERS WITH FONT SELECTORS
   ============================================================ */
function initAppearancePickers() {
  const paletteContainer = document.getElementById("color-palette-container");
  if (paletteContainer) {
    paletteContainer.innerHTML = "";
    CV_THEMES.forEach(t => {
      const swatch = document.createElement("div");
      swatch.className = `color-swatch ${t.id === cvState.theme ? "active" : ""}`;
      swatch.style.background = `linear-gradient(135deg, ${t.primary} 0%, ${t.accent} 100%)`;
      swatch.title = t.name;
      swatch.addEventListener("click", () => {
        document.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("active"));
        swatch.classList.add("active");
        cvState.theme = t.id;
        renderCV();
        updateCurrentTemplateIndicator();
      });
      paletteContainer.appendChild(swatch);
    });
  }

  const layoutContainer = document.getElementById("layout-picker-container");
  if (layoutContainer) {
    layoutContainer.innerHTML = "";
    CV_LAYOUTS.forEach(l => {
      const card = document.createElement("div");
      card.className = `layout-card ${l.id === cvState.layout ? "active" : ""}`;
      card.innerHTML = `
        <div class="layout-card-name">${l.name}</div>
        <div class="layout-card-desc">${l.desc}</div>
      `;
      card.addEventListener("click", () => {
        document.querySelectorAll(".layout-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        cvState.layout = l.id;
        if (l.id === "layout-gold-diamond") cvState.avatarShape = "diamond";
        renderCV();
        updateCurrentTemplateIndicator();
      });
      layoutContainer.appendChild(card);
    });
  }

  // Synchronized Font Pickers (Settings tab & Quick Toolbar)
  const fontSelect = document.getElementById("select-font-family");
  const quickFontSelect = document.getElementById("quick-font-select");

  function onFontChange(newFont) {
    cvState.fontFamily = newFont;
    if (fontSelect) fontSelect.value = newFont;
    if (quickFontSelect) quickFontSelect.value = newFont;
    renderCV();
    showToast(`បានប្តូរពុម្ពអក្សរជោគជ័យ! 🔤`);
  }

  if (fontSelect) {
    fontSelect.value = cvState.fontFamily;
    fontSelect.addEventListener("change", (e) => onFontChange(e.target.value));
  }
  if (quickFontSelect) {
    quickFontSelect.value = cvState.fontFamily;
    quickFontSelect.addEventListener("change", (e) => onFontChange(e.target.value));
  }
}

/* ============================================================
   5. REALISTIC TEMPLATE GALLERY
   ============================================================ */
let activeGalleryFilter = "all";
let gallerySearchQuery = "";

function initGalleryModal() {
  const modal = document.getElementById("template-gallery-modal");
  const openBtn = document.getElementById("btn-open-gallery");
  const closeBtn = document.getElementById("btn-close-gallery");

  openBtn.addEventListener("click", () => modal.classList.add("active"));
  closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  document.querySelectorAll(".filter-tag-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-tag-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeGalleryFilter = btn.getAttribute("data-category");
      renderTemplateGalleryGrid();
    });
  });

  const searchInput = document.getElementById("input-search-templates");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      gallerySearchQuery = e.target.value.toLowerCase();
      renderTemplateGalleryGrid();
    });
  }
}

function generateRealisticMiniCVHtml(tpl) {
  const isNavySanchez = tpl.layout === "layout-navy-executive";
  const isPeachSmith = tpl.layout === "layout-peach-capsule";
  const isMinimalHarber = tpl.layout === "layout-minimal-divider";
  const isGoldDoe = tpl.layout === "layout-gold-diamond";
  const isArchMaxwell = tpl.layout === "layout-arch-capsule";

  const pColor = tpl.primaryColor || "#0f2b5c";
  const aColor = tpl.accentColor || "#3b82f6";
  const sBg = tpl.sidebarBg || "#112a46";

  if (isNavySanchez) {
    return `
      <div class="mini-cv-sheet" style="display:flex;">
        <div style="width:38%; background:#112a46; padding:8px 6px; display:flex; flex-direction:column; gap:5px;">
          <div style="width:28px; height:28px; border-radius:50%; border:1.5px solid white; background:#fff url('assets/images/avatar_male.jpg') center/cover; margin:0 auto 2px;"></div>
          <div style="font-size:5px; font-weight:800; color:#fff; border-bottom:1px solid rgba(255,255,255,0.4); padding-bottom:1px;">CONTACT</div>
          <div style="width:80%; height:2px; background:rgba(255,255,255,0.7); border-radius:1px;"></div>
          <div style="width:65%; height:2px; background:rgba(255,255,255,0.5); border-radius:1px;"></div>
          <div style="font-size:5px; font-weight:800; color:#fff; border-bottom:1px solid rgba(255,255,255,0.4); padding-bottom:1px; margin-top:2px;">EDUCATION</div>
          <div style="width:75%; height:2px; background:rgba(255,255,255,0.8); border-radius:1px;"></div>
          <div style="width:50%; height:2px; background:rgba(255,255,255,0.5); border-radius:1px;"></div>
          <div style="font-size:5px; font-weight:800; color:#fff; border-bottom:1px solid rgba(255,255,255,0.4); padding-bottom:1px; margin-top:2px;">SKILLS</div>
          <div style="width:85%; height:2px; background:rgba(255,255,255,0.7); border-radius:1px;"></div>
        </div>
        <div style="flex:1; padding:8px 8px; display:flex; flex-direction:column; gap:4px; background:#fff;">
          <div>
            <div style="font-size:7px; font-weight:900; color:#1e293b; letter-spacing:0.04em;">RICHARD SANCHEZ</div>
            <div style="font-size:4.5px; font-weight:700; color:#64748b; letter-spacing:0.06em;">MARKETING MANAGER</div>
            <div style="width:100%; height:1.5px; background:#1e293b; margin-top:2px;"></div>
          </div>
          <div style="font-size:4.5px; font-weight:800; color:#1e293b; margin-top:2px;">WORK EXPERIENCE</div>
          <div style="border-left:1px solid #112a46; padding-left:4px; display:flex; flex-direction:column; gap:2px;">
            <div style="width:85%; height:2.5px; background:#112a46; border-radius:1px;"></div>
            <div style="width:95%; height:2px; background:#94a3b8; border-radius:1px;"></div>
            <div style="width:75%; height:2px; background:#cbd5e1; border-radius:1px;"></div>
          </div>
          <div style="font-size:4.5px; font-weight:800; color:#1e293b; margin-top:2px;">REFERENCE</div>
          <div style="display:flex; gap:4px;">
            <div style="flex:1; background:#f8fafc; border:0.5px solid #e2e8f0; padding:2px; border-radius:2px;">
              <div style="width:80%; height:2px; background:#112a46;"></div>
              <div style="width:60%; height:1.5px; background:#94a3b8; margin-top:1px;"></div>
            </div>
            <div style="flex:1; background:#f8fafc; border:0.5px solid #e2e8f0; padding:2px; border-radius:2px;">
              <div style="width:80%; height:2px; background:#112a46;"></div>
              <div style="width:60%; height:1.5px; background:#94a3b8; margin-top:1px;"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (isPeachSmith) {
    return `
      <div class="mini-cv-sheet" style="display:flex; flex-direction:column; padding:6px; background:#fff; gap:5px;">
        <div style="display:flex; gap:6px; align-items:center;">
          <div style="width:30px; height:30px; border-radius:50%; background:#fff url('assets/images/avatar_female.jpg') center/cover; border:1px solid #fed7aa; flex-shrink:0;"></div>
          <div style="flex:1; background:#fca574; border-radius:8px; padding:4px 6px;">
            <div style="font-size:6.5px; font-weight:900; color:#0f172a;">CHRISTINE SMITH</div>
            <div style="font-size:4px; font-weight:600; color:#334155;">+1 970 333 3833 • mail@cool.com</div>
          </div>
        </div>
        <div style="flex:1; display:flex; gap:6px;">
          <div style="width:40%; background:#f1f3f5; border-radius:0 10px 10px 0; padding:5px 4px; display:flex; flex-direction:column; gap:3px;">
            <div style="font-size:4.5px; font-weight:800; color:#0f172a;">Summary</div>
            <div style="width:90%; height:2px; background:#cbd5e1;"></div>
            <div style="font-size:4.5px; font-weight:800; color:#0f172a; margin-top:2px;">Tech Skills</div>
            <div style="width:100%; height:3px; background:#ea580c; border-radius:1px;"></div>
            <div style="width:85%; height:3px; background:#ea580c; border-radius:1px;"></div>
            <div style="width:70%; height:3px; background:#ea580c; border-radius:1px;"></div>
          </div>
          <div style="flex:1; display:flex; flex-direction:column; gap:3px; padding-top:2px;">
            <div style="font-size:5px; font-weight:800; color:#0f172a; border-bottom:1px solid #0f172a;">Experience</div>
            <div style="width:85%; height:2.5px; background:#0f172a;"></div>
            <div style="width:95%; height:2px; background:#94a3b8;"></div>
            <div style="width:80%; height:2px; background:#cbd5e1;"></div>
            <div style="font-size:5px; font-weight:800; color:#0f172a; border-bottom:1px solid #0f172a; margin-top:2px;">Education</div>
            <div style="width:75%; height:2px; background:#64748b;"></div>
          </div>
        </div>
      </div>
    `;
  }

  if (isMinimalHarber) {
    return `
      <div class="mini-cv-sheet" style="display:flex; padding:6px; background:#fff; position:relative;">
        <div style="position:absolute; top:6px; bottom:6px; left:38%; width:1px; background:#cbd5e1;"></div>
        <div style="width:36%; padding-right:4px; display:flex; flex-direction:column; gap:4px;">
          <div style="width:26px; height:26px; border-radius:50%; background:#fff url('assets/images/avatar_female.jpg') center/cover; border:1px solid #cbd5e1;"></div>
          <div style="font-size:4.5px; font-weight:800; color:#1e293b;">CONTACT</div>
          <div style="width:75%; height:2px; background:#64748b;"></div>
          <div style="font-size:4.5px; font-weight:800; color:#1e293b; margin-top:2px;">EDUCATION</div>
          <div style="width:85%; height:2px; background:#94a3b8;"></div>
          <div style="font-size:4.5px; font-weight:800; color:#1e293b; margin-top:2px;">SKILLS</div>
          <div style="width:70%; height:2px; background:#94a3b8;"></div>
        </div>
        <div style="flex:1; padding-left:6px; display:flex; flex-direction:column; gap:3px;">
          <div style="font-size:8px; font-weight:900; color:#1e293b;">Ryley Harber</div>
          <div style="font-size:4px; color:#64748b;">Professional Simple CV</div>
          <div style="font-size:4.5px; font-weight:800; color:#1e293b; margin-top:2px;">WORK EXPERIENCE</div>
          <div style="width:90%; height:2px; background:#1e293b;"></div>
          <div style="width:80%; height:1.5px; background:#94a3b8;"></div>
          <div style="font-size:4.5px; font-weight:800; color:#1e293b; margin-top:2px;">REFERENCES</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:2px;">
            <div style="background:#f8fafc; padding:1.5px;"><div style="width:70%; height:1.5px; background:#1e293b;"></div></div>
            <div style="background:#f8fafc; padding:1.5px;"><div style="width:70%; height:1.5px; background:#1e293b;"></div></div>
          </div>
        </div>
      </div>
    `;
  }

  if (isGoldDoe) {
    return `
      <div class="mini-cv-sheet" style="display:flex;">
        <div style="width:38%; background:#18181b; border-right:1.5px solid #d4af37; padding:8px 5px; display:flex; flex-direction:column; align-items:center; gap:4px;">
          <div style="width:20px; height:20px; transform:rotate(45deg); border:1.5px solid #d4af37; background:#000 url('assets/images/avatar_male.jpg') center/cover; margin:4px 0 6px;"></div>
          <div style="font-size:4.5px; font-weight:800; color:#d4af37; border-bottom:1px solid rgba(212,175,55,0.4); width:100%; text-align:center;">SKILLS</div>
          <div style="width:85%; height:2.5px; background:#d4af37; border-radius:1px;"></div>
          <div style="width:70%; height:2.5px; background:#d4af37; border-radius:1px;"></div>
          <div style="font-size:4.5px; font-weight:800; color:#d4af37; border-bottom:1px solid rgba(212,175,55,0.4); width:100%; text-align:center; margin-top:4px;">CONTACT</div>
          <div style="width:80%; height:2px; background:rgba(255,255,255,0.6);"></div>
        </div>
        <div style="flex:1; padding:8px; display:flex; flex-direction:column; gap:4px; background:#fff;">
          <div>
            <div style="font-size:7px; font-weight:900; color:#18181b;">JOHN JAMES DOE</div>
            <div style="font-size:4px; font-weight:700; color:#71717a; text-transform:uppercase;">BRANDING & MEDIA</div>
          </div>
          <div style="font-size:4.5px; font-weight:800; color:#b45309; border-bottom:1px solid #fed7aa;">EXPERIENCE</div>
          <div style="border-left:1px solid #d4af37; padding-left:4px; display:flex; flex-direction:column; gap:2px;">
            <div style="width:90%; height:2px; background:#18181b;"></div>
            <div style="width:75%; height:1.5px; background:#71717a;"></div>
          </div>
          <div style="font-size:4.5px; font-weight:800; color:#b45309; border-bottom:1px solid #fed7aa; margin-top:2px;">EDUCATION</div>
          <div style="border-left:1px solid #d4af37; padding-left:4px;">
            <div style="width:80%; height:2px; background:#18181b;"></div>
          </div>
        </div>
      </div>
    `;
  }

  if (isArchMaxwell) {
    return `
      <div class="mini-cv-sheet" style="display:flex; background:#fff; position:relative; overflow:hidden;">
        <div style="position:absolute; top:0; right:0; width:22px; height:12px; background:repeating-linear-gradient(45deg, #0284c7, #0284c7 2px, transparent 2px, transparent 4px);"></div>
        <div style="width:40%; background:#090d16; margin:4px 0 4px 4px; border-radius:24px 24px 6px 6px; padding:6px 4px; display:flex; flex-direction:column; align-items:center; text-align:center; gap:3px;">
          <div style="width:24px; height:24px; border-radius:50%; border:1.5px solid #38bdf8; background:#fff url('assets/images/avatar_male.jpg') center/cover;"></div>
          <div style="font-size:5.5px; font-weight:900; color:#fff;">MORGAN M.</div>
          <div style="font-size:3.5px; color:#94a3b8;">Fresh Graduate</div>
          <div style="font-size:4px; color:#fbbf24; letter-spacing:1px; margin-top:2px;">★★★★★</div>
          <div style="width:80%; height:1.5px; background:rgba(255,255,255,0.4); margin-top:2px;"></div>
        </div>
        <div style="flex:1; padding:6px; display:flex; flex-direction:column; gap:3px;">
          <div style="background:linear-gradient(90deg,#78350f,#d97706); color:#fff; font-size:4px; font-weight:800; padding:1px 6px; border-radius:10px; width:fit-content;">EDUCATION</div>
          <div style="width:85%; height:2px; background:#1e293b;"></div>
          <div style="background:linear-gradient(90deg,#78350f,#d97706); color:#fff; font-size:4px; font-weight:800; padding:1px 6px; border-radius:10px; width:fit-content; margin-top:2px;">LANGUAGE</div>
          <div style="width:90%; height:2.5px; background:#0284c7; border-radius:2px;"></div>
          <div style="border:1px solid #ca8a04; border-radius:4px; padding:2px; background:#fffbeb; margin-top:2px;">
            <div style="font-size:3.5px; color:#78350f; font-weight:700;">INTEREST: Sports, Reading</div>
          </div>
        </div>
      </div>
    `;
  }

  // Colorful two-column
  if (tpl.layout.includes("sidebar") || tpl.layout.includes("creative")) {
    return `
      <div class="mini-cv-sheet" style="display:flex;">
        <div style="width:36%; background:${sBg}; padding:6px; display:flex; flex-direction:column; gap:4px; align-items:center;">
          <div style="width:24px; height:24px; border-radius:50%; background:#fff url('assets/images/avatar_male.jpg') center/cover; border:1px solid rgba(255,255,255,0.8);"></div>
          <div style="width:80%; height:2px; background:rgba(255,255,255,0.8); border-radius:1px;"></div>
          <div style="width:60%; height:2px; background:rgba(255,255,255,0.5); border-radius:1px;"></div>
          <div style="width:90%; height:1.5px; background:${aColor}; margin-top:2px;"></div>
          <div style="width:75%; height:2px; background:rgba(255,255,255,0.7); border-radius:1px;"></div>
        </div>
        <div style="flex:1; padding:8px 6px; display:flex; flex-direction:column; gap:3px; background:#fff;">
          <div style="font-size:6.5px; font-weight:800; color:${pColor};">${tpl.name.split(' ')[0]} PRO</div>
          <div style="font-size:4px; font-weight:600; color:${aColor};">${tpl.category}</div>
          <div style="width:100%; height:1px; background:#e2e8f0; margin:1px 0;"></div>
          <div style="width:85%; height:2.5px; background:#64748b; border-radius:1px;"></div>
          <div style="width:95%; height:2px; background:#cbd5e1; border-radius:1px;"></div>
          <div style="width:75%; height:2px; background:#cbd5e1; border-radius:1px;"></div>
          <div style="font-size:4.5px; font-weight:800; color:${pColor}; margin-top:2px;">EXPERIENCE</div>
          <div style="width:90%; height:2px; background:#94a3b8; border-radius:1px;"></div>
        </div>
      </div>
    `;
  }

  // Clean grid/banner
  return `
    <div class="mini-cv-sheet" style="display:flex; flex-direction:column; padding:8px; background:#fff; gap:4px;">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px solid ${pColor}; padding-bottom:3px;">
        <div>
          <div style="font-size:6.5px; font-weight:800; color:${pColor};">${tpl.name.split(' ')[0]}</div>
          <div style="font-size:4px; color:${aColor};">${tpl.category}</div>
        </div>
        <div style="width:20px; height:20px; border-radius:4px; background:#fff url('assets/images/avatar_female.jpg') center/cover;"></div>
      </div>
      <div style="width:100%; height:2.5px; background:#64748b; border-radius:1px;"></div>
      <div style="width:85%; height:2px; background:#cbd5e1; border-radius:1px;"></div>
      <div style="font-size:4.5px; font-weight:800; color:${pColor}; margin-top:2px;">PROFESSIONAL EXPERIENCE</div>
      <div style="width:90%; height:2px; background:#94a3b8; border-radius:1px;"></div>
      <div style="width:75%; height:2px; background:#cbd5e1; border-radius:1px;"></div>
    </div>
  `;
}

function renderTemplateGalleryGrid() {
  const grid = document.getElementById("gallery-templates-grid");
  if (!grid) return;

  const filtered = ALL_TEMPLATES.filter(tpl => {
    const matchCategory = (activeGalleryFilter === "all") || (tpl.category === activeGalleryFilter);
    const matchQuery = !gallerySearchQuery || 
      tpl.name.toLowerCase().includes(gallerySearchQuery) || 
      tpl.code.toLowerCase().includes(gallerySearchQuery) || 
      tpl.category.toLowerCase().includes(gallerySearchQuery);
    return matchCategory && matchQuery;
  });

  grid.innerHTML = "";
  document.getElementById("gallery-count-badge").textContent = `${filtered.length} / 180 Templates`;

  filtered.forEach(tpl => {
    const card = document.createElement("div");
    card.className = `template-card-item ${tpl.id === cvState.currentTemplateId ? "selected" : ""}`;
    
    const miniGraphic = generateRealisticMiniCVHtml(tpl);

    card.innerHTML = `
      <div class="template-card-thumbnail">
        ${miniGraphic}
      </div>
      <div class="template-card-info">
        <div class="template-card-title">
          <span>${tpl.name}</span>
          <span class="template-card-badge">${tpl.badge}</span>
        </div>
        <div class="template-card-category">${tpl.fullName}</div>
      </div>
    `;

    card.addEventListener("click", () => {
      applyTemplate(tpl);
      document.getElementById("template-gallery-modal").classList.remove("active");
    });

    grid.appendChild(card);
  });
}

function applyTemplate(tpl) {
  cvState.currentTemplateId = tpl.id;
  cvState.layout = tpl.layout;
  cvState.theme = tpl.theme;
  if (tpl.avatarShape) cvState.avatarShape = tpl.avatarShape;

  document.querySelectorAll(".color-swatch").forEach(s => {
    s.classList.toggle("active", s.title === CV_THEMES.find(t => t.id === tpl.theme)?.name);
  });
  document.querySelectorAll(".layout-card").forEach(c => {
    c.classList.toggle("active", c.querySelector(".layout-card-name").textContent === CV_LAYOUTS.find(l => l.id === tpl.layout)?.name);
  });

  renderCV();
  updateCurrentTemplateIndicator();
  showToast(`បានអនុវត្ត Template: ${tpl.name} 🎉`);
}

function updateCurrentTemplateIndicator() {
  const current = ALL_TEMPLATES.find(t => t.id === cvState.currentTemplateId) || {
    name: "Custom Preset",
    code: "CUSTOM"
  };
  const badge = document.getElementById("current-template-indicator");
  if (badge) {
    badge.innerHTML = `<span>✨ Template:</span> <strong>${current.name}</strong>`;
  }
}

/* ============================================================
   6. ZOOM & ACTIONS & A4 PDF DOWNLOAD ENGINE
   ============================================================ */
function initZoomAndActions() {
  const zoomInBtn = document.getElementById("btn-zoom-in");
  const zoomOutBtn = document.getElementById("btn-zoom-out");
  const zoomResetBtn = document.getElementById("btn-zoom-reset");
  const zoom100Btn = document.getElementById("btn-zoom-100");
  const zoomText = document.getElementById("zoom-level-indicator");

  function updateZoom(newZoom) {
    cvState.zoom = Math.min(Math.max(newZoom, 0.32), 1.6);
    const wrapper = document.getElementById("cv-sheet-wrapper");
    if (wrapper) wrapper.style.transform = `scale(${cvState.zoom})`;
    if (zoomText) zoomText.textContent = `${Math.round(cvState.zoom * 100)}%`;
  }

  function autoFitPreview(showNotify = false) {
    const viewport = document.querySelector(".preview-viewport");
    if (!viewport) return;
    const vWidth = viewport.clientWidth;
    if (vWidth <= 0) return;
    const pad = vWidth < 500 ? 16 : (vWidth < 800 ? 28 : 60);
    const availW = Math.max(vWidth - pad, 260);
    const targetZoom = Math.min(Math.max(availW / 794, 0.32), 1.05);
    updateZoom(targetZoom);
    if (showNotify) showToast("បានបង្រួម/ពង្រីកសមស្របនឹងអេក្រង់ (Fit Screen) 📱");
  }

  if (zoomInBtn) zoomInBtn.addEventListener("click", () => updateZoom(cvState.zoom + 0.08));
  if (zoomOutBtn) zoomOutBtn.addEventListener("click", () => updateZoom(cvState.zoom - 0.08));
  if (zoomResetBtn) zoomResetBtn.addEventListener("click", () => autoFitPreview(true));
  if (zoom100Btn) zoom100Btn.addEventListener("click", () => {
    updateZoom(1.0);
    showToast("Zoom: 100% (ទំហំដើម A4)");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 900) {
      autoFitPreview(false);
    }
  });

  // PDF Export Modal & Actions
  const directPdfBtn = document.getElementById("btn-download-pdf-direct");
  const pdfModal = document.getElementById("pdf-export-modal");
  const closePdfModalBtn = document.getElementById("btn-close-pdf-modal");
  const modalPrintBtn = document.getElementById("btn-modal-print-native");
  const modalImageBtn = document.getElementById("btn-modal-export-image");

  if (directPdfBtn) {
    directPdfBtn.addEventListener("click", () => {
      if (pdfModal) {
        updatePdfStatusBanner();
        pdfModal.classList.add("active");
      } else {
        downloadA4PDFDirect("auto");
      }
    });
  }

  if (closePdfModalBtn && pdfModal) {
    closePdfModalBtn.addEventListener("click", () => {
      pdfModal.classList.remove("active");
    });
  }

  document.querySelectorAll(".btn-export-choice").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const mode = e.currentTarget.getAttribute("data-mode") || "auto";
      downloadA4PDFDirect(mode);
    });
  });

  if (modalPrintBtn) {
    modalPrintBtn.addEventListener("click", () => {
      if (pdfModal) pdfModal.classList.remove("active");
      const printGuideModal = document.getElementById("print-guide-modal");
      if (printGuideModal) printGuideModal.classList.add("active");
      else window.print();
    });
  }

  if (modalImageBtn) {
    modalImageBtn.addEventListener("click", () => {
      if (pdfModal) pdfModal.classList.remove("active");
      downloadCVAsImage();
    });
  }

  const imageBtn = document.getElementById("btn-download-image-hd");
  if (imageBtn) {
    imageBtn.addEventListener("click", downloadCVAsImage);
  }

  const printBtn = document.getElementById("btn-print-cv");
  const printGuideModal = document.getElementById("print-guide-modal");
  const closePrintGuideBtn = document.getElementById("btn-close-print-guide");
  const proceedPrintBtn = document.getElementById("btn-proceed-print");

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      if (printGuideModal) {
        printGuideModal.classList.add("active");
      } else {
        window.print();
      }
    });
  }

  if (closePrintGuideBtn && printGuideModal) {
    closePrintGuideBtn.addEventListener("click", () => {
      printGuideModal.classList.remove("active");
    });
  }

  if (proceedPrintBtn && printGuideModal) {
    proceedPrintBtn.addEventListener("click", () => {
      printGuideModal.classList.remove("active");
      setTimeout(() => window.print(), 150);
    });
  }

  document.getElementById("btn-load-khmer-demo").addEventListener("click", () => {
    cvState.data = JSON.parse(JSON.stringify(SAMPLE_DATA_KHMER));
    populateFormFields();
    renderCV();
    showToast("បានបញ្ចូលទិន្នន័យគំរូជាភាសាខ្មែរជោគជ័យ! 🇰🇭");
  });

  document.getElementById("btn-load-english-demo").addEventListener("click", () => {
    cvState.data = JSON.parse(JSON.stringify(SAMPLE_DATA_ENGLISH));
    populateFormFields();
    renderCV();
    showToast("Loaded English Demo Profile successfully! 🌐");
  });

  document.getElementById("btn-clear-form").addEventListener("click", () => {
    if (confirm("តើអ្នកពិតជាចង់លុបទិន្នន័យទាំងអស់ដើម្បីបំពេញថ្មីមែនទេ? (Are you sure you want to clear?)")) {
      cvState.data = {
        personal: { fullName: "", jobTitle: "", email: "", phone: "", address: "", summary: "", avatar: "assets/images/avatar_male.jpg" },
        experience: [],
        education: [],
        skills: [],
        projects: [],
        languages: [],
        references: [],
        interests: [],
        certifications: []
      };
      populateFormFields();
      renderCV();
      showToast("ទិន្នន័យត្រូវបានសម្អាត! (Form cleared)");
    }
  });

  document.getElementById("btn-export-json").addEventListener("click", () => {
    const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cvState, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", jsonStr);
    downloadAnchor.setAttribute("download", `CV_${(cvState.data.personal.fullName || 'Profile').replace(/\s+/g, '_')}_CAMBO.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("បានទាញយកទិន្នន័យ JSON រួចរាល់! 💾");
  });

  const importInput = document.getElementById("input-import-json");
  document.getElementById("btn-import-json").addEventListener("click", () => {
    importInput.click();
  });
  importInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (imported.data) cvState = { ...cvState, ...imported };
          else cvState.data = imported;
          populateFormFields();
          renderCV();
          showToast("បានបើកទិន្នន័យ CV ជោគជ័យ! ✅");
        } catch (err) {
          alert("ឯកសារមិនត្រឹមត្រូវ (Invalid JSON file)");
        }
      };
      reader.readAsText(file);
    }
  });

  const mobileToggle = document.getElementById("btn-mobile-toggle-editor");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      const editorPanel = document.querySelector(".editor-panel");
      editorPanel.classList.toggle("mobile-hidden");
      const isPreview = editorPanel.classList.contains("mobile-hidden");
      mobileToggle.textContent = isPreview ? "📝 កែសម្រួល (Edit)" : "👁️ មើល CV (Preview)";
      if (isPreview) {
        setTimeout(() => autoFitPreview(false), 50);
      }
    });
  }

  // Initial auto-fit if on mobile
  setTimeout(() => {
    if (window.innerWidth <= 900) {
      autoFitPreview(false);
    }
  }, 100);
}

/* ============================================================
   STATUS BANNER & A4 BOUNDARY INDICATOR
   ============================================================ */
function updatePdfStatusBanner() {
  const wrapper = document.getElementById("cv-sheet-wrapper");
  const titleEl = document.getElementById("pdf-status-title");
  const descEl = document.getElementById("pdf-status-desc");
  const badgeIcon = document.querySelector(".pdf-status-icon");
  if (!wrapper || !titleEl) return;

  const h = wrapper.scrollHeight;
  if (h > 1135) {
    const approxPages = Math.ceil(h / 1123);
    if (badgeIcon) badgeIcon.textContent = "📑";
    titleEl.textContent = `CV របស់អ្នកមានទិន្នន័យច្រើន (ប្រហែល ${approxPages} ទំព័រ A4)`;
    if (descEl) descEl.textContent = `ទិន្នន័យវែងសមស្របជាមួយជម្រើស Smart Auto ឬ Multi-Page A4 — ធានាថាមិនបាត់បង់ទិន្នន័យទាល់តែសោះ!`;
  } else {
    if (badgeIcon) badgeIcon.textContent = "📄";
    titleEl.textContent = "CV របស់អ្នកស្ថិតក្នុងទម្រង់ ១ ទំព័រ A4 ស្តង់ដារ";
    if (descEl) descEl.textContent = "សមស្របឥតខ្ចោះសម្រាប់ការដាក់ពាក្យការងារទូទៅ (Single-Page A4) — កម្រិតច្បាស់ HD គ្មានបាត់ទិន្នន័យ";
  }
}

function updatePageSplitIndicator() {
  const container = document.getElementById("cv-sheet-wrapper");
  if (!container) return;
  const h = container.scrollHeight;
  let split = container.querySelector(".cv-page-split-line");
  if (h > 1135) {
    if (!split) {
      split = document.createElement("div");
      split.className = "cv-page-split-line";
      split.setAttribute("contenteditable", "false");
      split.innerHTML = `<span>✂️ ចុងបញ្ចប់ទំព័រទី ១ (A4 Page 1 End) — ចាប់ផ្តើមទំព័រទី ២ (Page 2)</span>`;
      container.appendChild(split);
    }
    split.style.top = "1123px";
  } else if (split) {
    split.remove();
  }
}

/* ============================================================
   PERFECT HIGH-DEFINITION A4 PDF EXPORT ENGINE (AUTO & MULTI-PAGE)
   ============================================================ */
let isExportingPdf = false;

async function downloadA4PDFDirect(exportMode = "auto") {
  if (isExportingPdf) return;
  const source = document.getElementById("cv-sheet-wrapper");
  if (!source) return;

  isExportingPdf = true;

  const progressBox = document.getElementById("pdf-progress-indicator");
  const progressTitle = document.getElementById("pdf-progress-title");
  const progressSub = document.getElementById("pdf-progress-sub");
  const directBtn = document.getElementById("btn-download-pdf-direct");
  const origBtnText = directBtn ? directBtn.innerHTML : "";

  if (progressBox) {
    progressBox.style.display = "flex";
    if (progressTitle) progressTitle.textContent = "⏳ កំពុងដំណើរការបង្កើត PDF A4...";
    if (progressSub) progressSub.textContent = "សូមរង់ចាំបន្តិច ប្រព័ន្ធកំពុង Render ក្រាហ្វិក និងពុម្ពអក្សរខ្មែរ...";
  }
  if (directBtn) {
    directBtn.innerHTML = `⏳ កំពុងបង្កើត PDF...`;
    directBtn.disabled = true;
  }

  showToast("កំពុងរៀបចំទាញយក PDF A4 ពេញស្អាតស្តង់ដារ... 📄");

  const A4_WIDTH_PX = 794;
  const A4_HEIGHT_PX = 1123;
  const A4_WIDTH_MM = 210;
  const A4_HEIGHT_MM = 297;

  // Create isolated off-screen sandbox with full overflow visibility
  const sandbox = document.createElement("div");
  sandbox.id = "pdf-sandbox-container";
  sandbox.style.cssText = `
    position: fixed;
    top: 0;
    left: -9999px;
    width: ${A4_WIDTH_PX}px;
    min-height: ${A4_HEIGHT_PX}px;
    height: auto;
    margin: 0;
    padding: 0;
    background: #ffffff;
    box-sizing: border-box;
    overflow: visible;
    z-index: -99999;
    opacity: 1;
    pointer-events: none;
  `;

  // Deep clone the CV element into the sandbox
  const clone = source.cloneNode(true);
  clone.id = "cv-sheet-clone";
  clone.style.transform = "none";
  clone.style.width = `${A4_WIDTH_PX}px`;
  clone.style.minHeight = `${A4_HEIGHT_PX}px`;
  clone.style.height = "auto";
  clone.style.maxHeight = "none";
  clone.style.boxShadow = "none";
  clone.style.margin = "0";
  clone.style.boxSizing = "border-box";
  clone.style.overflow = "visible";
  clone.removeAttribute("contenteditable");
  clone.querySelectorAll("[contenteditable]").forEach(el => el.removeAttribute("contenteditable"));

  // Remove interactive UI elements from clone
  clone.querySelectorAll(".cv-page-split-line, .cv-floating-toolbar, .selection-formatting-bar").forEach(el => el.remove());

  // Remove any layout fixed height / overflow: hidden
  clone.style.setProperty("max-height", "none", "important");
  clone.style.setProperty("overflow", "visible", "important");
  clone.querySelectorAll(".cv-sidebar, .cv-main, .cv-left-col, .cv-right-col, .cv-document").forEach(el => {
    el.style.setProperty("overflow", "visible", "important");
    el.style.setProperty("max-height", "none", "important");
  });

  sandbox.appendChild(clone);
  document.body.appendChild(sandbox);

  try {
    // 1. Ensure all Google Web Fonts are rasterized
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    // 2. Ensure all images are loaded
    const images = Array.from(clone.querySelectorAll("img"));
    await Promise.all(
      images.map(img => {
        if (img.complete && img.naturalHeight !== 0) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
          setTimeout(resolve, 800);
        });
      })
    );

    // Minor tick for DOM layout stability
    await new Promise(r => setTimeout(r, 150));

    // Measure actual total height
    const totalHeightPx = Math.max(clone.scrollHeight, clone.offsetHeight, A4_HEIGHT_PX);

    // Handle fit1page mode
    let isFit1Page = (exportMode === "fit1page");
    if (exportMode === "auto" && totalHeightPx <= A4_HEIGHT_PX + 40) {
      isFit1Page = true;
    }

    let renderHeight = totalHeightPx;

    if (isFit1Page && totalHeightPx > A4_HEIGHT_PX) {
      const scaleFit = A4_HEIGHT_PX / totalHeightPx;
      clone.style.transform = `scale(${scaleFit})`;
      clone.style.transformOrigin = "top center";
      clone.style.height = `${A4_HEIGHT_PX}px`;
      clone.style.maxHeight = `${A4_HEIGHT_PX}px`;
      clone.style.overflow = "hidden";
      renderHeight = A4_HEIGHT_PX;
      await new Promise(r => setTimeout(r, 80));
    } else if (!isFit1Page) {
      // Smart break avoidance: push items straddling the 1123px break lines
      const pageBreaks = [A4_HEIGHT_PX, A4_HEIGHT_PX * 2, A4_HEIGHT_PX * 3];
      const breakCandidates = clone.querySelectorAll(".cv-timeline-item, .cv-section, .cv-ref-card, .cv-education-item");
      const cloneTop = clone.getBoundingClientRect().top;

      breakCandidates.forEach(el => {
        const rect = el.getBoundingClientRect();
        const elTop = rect.top - cloneTop;
        const elBottom = rect.bottom - cloneTop;

        pageBreaks.forEach(breakY => {
          if (elTop < breakY && elBottom > breakY && (breakY - elTop) < 130) {
            const pushDown = (breakY - elTop) + 16;
            el.style.marginTop = `${pushDown}px`;
          }
        });
      });
      await new Promise(r => setTimeout(r, 60));
      renderHeight = Math.max(clone.scrollHeight, clone.offsetHeight, A4_HEIGHT_PX);
    }

    const pName = (cvState.data.personal.fullName || "PROFILE").trim().replace(/[\/\\:*?"<>|]/g, "_").replace(/\s+/g, "_");
    const pdfFileName = `CV_${pName}_CAMBO.pdf`;

    // 3. Render pixel-perfect high-DPI canvas via html2canvas
    const canvasScale = 2.6; // ~250-280 DPI crisp print quality
    const canvas = await html2canvas(clone, {
      scale: canvasScale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      width: A4_WIDTH_PX,
      height: renderHeight,
      windowWidth: A4_WIDTH_PX,
      windowHeight: renderHeight,
      scrollX: 0,
      scrollY: 0,
      logging: false
    });

    if (window.jspdf && window.jspdf.jsPDF) {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true
      });

      const pageCanvasWidth = Math.round(A4_WIDTH_PX * canvasScale);
      const pageCanvasHeight = Math.round(A4_HEIGHT_PX * canvasScale);

      if (isFit1Page || canvas.height <= pageCanvasHeight + 25) {
        // Single Page A4
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 0, 0, A4_WIDTH_MM, A4_HEIGHT_MM, undefined, "FAST");
      } else {
        // Multi-Page A4 cleanly sliced without losing anything
        const totalPages = Math.ceil(canvas.height / pageCanvasHeight);
        if (progressSub) progressSub.textContent = `កំពុងរៀបចំ ${totalPages} ទំព័រ A4 ពេញលេញ...`;

        for (let p = 0; p < totalPages; p++) {
          const pageCanvas = document.createElement("canvas");
          pageCanvas.width = pageCanvasWidth;
          pageCanvas.height = pageCanvasHeight;
          const pctx = pageCanvas.getContext("2d");

          // Fill page background with pure white
          pctx.fillStyle = "#ffffff";
          pctx.fillRect(0, 0, pageCanvasWidth, pageCanvasHeight);

          const srcY = p * pageCanvasHeight;
          const srcH = Math.min(pageCanvasHeight, canvas.height - srcY);

          pctx.drawImage(
            canvas,
            0, srcY, pageCanvasWidth, srcH,
            0, 0, pageCanvasWidth, srcH
          );

          if (p > 0) {
            pdf.addPage("a4", "portrait");
          }

          const pageImg = pageCanvas.toDataURL("image/png");
          pdf.addImage(pageImg, "PNG", 0, 0, A4_WIDTH_MM, A4_HEIGHT_MM, undefined, "FAST");
        }
      }

      pdf.save(pdfFileName);
      showToast("បានទាញយក PDF ជាទំហំ A4 ពេញស្អាតជោគជ័យ! 🎉");

      // Close export modal if open
      const pdfModal = document.getElementById("pdf-export-modal");
      if (pdfModal) pdfModal.classList.remove("active");

    } else if (typeof html2pdf !== "undefined") {
      // Fallback via html2pdf using clone element
      const opt = {
        margin: 0,
        filename: pdfFileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2.2, useCORS: true, logging: false, scrollX: 0, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      await html2pdf().set(opt).from(clone).save();
      showToast("បានទាញយក PDF ជាទំហំ A4 ពេញស្អាតជោគជ័យ! 🎉");
      const pdfModal = document.getElementById("pdf-export-modal");
      if (pdfModal) pdfModal.classList.remove("active");
    } else {
      window.print();
    }
  } catch (err) {
    console.error("Direct PDF generation error:", err);
    showToast("មានបញ្ហាក្នុងការទាញយក PDF ដោយផ្ទាល់ កំពុងបើកផ្ទាំង Print... ⚠️");
    window.print();
  } finally {
    if (sandbox && sandbox.parentNode) {
      sandbox.parentNode.removeChild(sandbox);
    }
    if (directBtn) {
      directBtn.innerHTML = origBtnText;
      directBtn.disabled = false;
    }
    if (progressBox) {
      progressBox.style.display = "none";
    }
    isExportingPdf = false;
  }
}

/* ============================================================
   HD IMAGE EXPORT ENGINE (PNG FORMAT - FULL HEIGHT)
   ============================================================ */
async function downloadCVAsImage() {
  const source = document.getElementById("cv-sheet-wrapper");
  if (!source) return;

  const btn = document.getElementById("btn-download-image-hd");
  const origText = btn ? btn.innerHTML : "";
  if (btn) {
    btn.innerHTML = `⏳ កំពុងបង្កើតរូប...`;
    btn.disabled = true;
  }
  showToast("កំពុងរៀបចំទាញយកជារូបភាព HD (PNG)... 🖼️");

  const A4_WIDTH_PX = 794;
  const A4_HEIGHT_PX = 1123;

  const sandbox = document.createElement("div");
  sandbox.id = "img-sandbox-container";
  sandbox.style.cssText = `
    position: fixed;
    top: 0;
    left: -9999px;
    width: ${A4_WIDTH_PX}px;
    min-height: ${A4_HEIGHT_PX}px;
    height: auto;
    margin: 0;
    padding: 0;
    background: #ffffff;
    box-sizing: border-box;
    overflow: visible;
    z-index: -99999;
  `;

  const clone = source.cloneNode(true);
  clone.style.transform = "none";
  clone.style.width = `${A4_WIDTH_PX}px`;
  clone.style.minHeight = `${A4_HEIGHT_PX}px`;
  clone.style.height = "auto";
  clone.style.maxHeight = "none";
  clone.style.boxShadow = "none";
  clone.style.margin = "0";
  clone.style.overflow = "visible";
  clone.removeAttribute("contenteditable");
  clone.querySelectorAll("[contenteditable]").forEach(el => el.removeAttribute("contenteditable"));
  clone.querySelectorAll(".cv-page-split-line, .cv-floating-toolbar, .selection-formatting-bar").forEach(el => el.remove());

  clone.querySelectorAll(".cv-sidebar, .cv-main, .cv-left-col, .cv-right-col, .cv-document").forEach(el => {
    el.style.setProperty("overflow", "visible", "important");
    el.style.setProperty("max-height", "none", "important");
  });

  sandbox.appendChild(clone);
  document.body.appendChild(sandbox);

  try {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    const images = Array.from(clone.querySelectorAll("img"));
    await Promise.all(
      images.map(img => {
        if (img.complete && img.naturalHeight !== 0) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
          setTimeout(resolve, 800);
        });
      })
    );
    await new Promise(r => setTimeout(r, 120));

    const totalHeight = Math.max(clone.scrollHeight, clone.offsetHeight, A4_HEIGHT_PX);

    if (typeof html2canvas !== "undefined") {
      const canvas = await html2canvas(clone, {
        scale: 2.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        width: A4_WIDTH_PX,
        height: totalHeight,
        windowWidth: A4_WIDTH_PX,
        windowHeight: totalHeight,
        scrollX: 0,
        scrollY: 0,
        logging: false
      });

      const pName = (cvState.data.personal.fullName || "PROFILE").trim().replace(/[\/\\:*?"<>|]/g, "_").replace(/\s+/g, "_");
      const link = document.createElement("a");
      link.download = `CV_${pName}_CAMBO_HD.png`;
      link.href = canvas.toDataURL("image/png");
      document.body.appendChild(link);
      link.click();
      link.remove();
      showToast("បានទាញយករូបភាព HD (PNG) ពេញលេញជោគជ័យ! 🎉");
    } else {
      showToast("បណ្ណាល័យបង្កើតរូបភាពមិនទាន់រួចរាល់ សូមប្រើ Download PDF ជំនួស! ⚠️");
    }
  } catch (err) {
    console.error("Image generation error:", err);
    showToast("មានបញ្ហាក្នុងការបង្កើតរូបភាព សូមសាកល្បង Download PDF វិញ! ⚠️");
  } finally {
    if (sandbox && sandbox.parentNode) sandbox.parentNode.removeChild(sandbox);
    if (btn) {
      btn.innerHTML = origText;
      btn.disabled = false;
    }
  }
}

/* ============================================================
   7. CV RENDERING ENGINE (BEAUTIFUL KHMER FONTS & GRAPHIC FLAGS)
   ============================================================ */
function renderCV() {
  const container = document.getElementById("cv-sheet-wrapper");
  if (!container) return;

  const d = cvState.data;
  const p = d.personal;
  const shape = cvState.avatarShape || p.avatarShape || 'circle';

  container.className = `cv-sheet-wrapper cv-document ${cvState.layout} ${cvState.theme}`;
  container.style.fontFamily = cvState.fontFamily;

  let contactHtml = '';
  if (p.phone) contactHtml += `<div class="cv-contact-item">${ICONS.phone} <span>${escapeHtml(p.phone)}</span></div>`;
  if (p.email) contactHtml += `<div class="cv-contact-item">${ICONS.email} <span>${escapeHtml(p.email)}</span></div>`;
  if (p.address) contactHtml += `<div class="cv-contact-item">${ICONS.location} <span>${escapeHtml(p.address)}</span></div>`;
  if (p.website) contactHtml += `<div class="cv-contact-item">${ICONS.globe} <span>${escapeHtml(p.website)}</span></div>`;
  if (p.linkedin) contactHtml += `<div class="cv-contact-item">${ICONS.linkedin} <span>${escapeHtml(p.linkedin)}</span></div>`;
  if (p.github) contactHtml += `<div class="cv-contact-item">${ICONS.github} <span>${escapeHtml(p.github)}</span></div>`;

  // Avatar HTML supporting customizable shapes, sizes, borders & interactive repositioning
  let avatarHtml = '';
  const posX = (p.avatarPosX !== undefined && p.avatarPosX !== null) ? p.avatarPosX : 50;
  const posY = (p.avatarPosY !== undefined && p.avatarPosY !== null) ? p.avatarPosY : 50;
  const zoom = (p.avatarZoom !== undefined && p.avatarZoom !== null) ? p.avatarZoom : 1;
  const size = (p.avatarSize !== undefined && p.avatarSize !== null) ? p.avatarSize : (shape === 'diamond' ? 95 : 100);
  const borderWidth = (p.avatarBorderWidth !== undefined && p.avatarBorderWidth !== null) ? p.avatarBorderWidth : 3;
  const borderColor = p.avatarBorderColor || (shape === 'diamond' ? '#d4af37' : 'rgba(212, 175, 55, 0.85)');

  if (p.avatar && shape !== 'hidden') {
    if (shape === 'diamond') {
      avatarHtml = `
        <div class="cv-diamond-avatar-wrap cv-avatar-frame" style="width:${size}px; height:${size}px; border:${borderWidth}px solid ${borderColor};" title="🖐️ ចុចអូសដើម្បីរំកិលរូប (Drag to pan)">
          <img src="${p.avatar}" class="cv-movable-avatar" data-avatar-img="true" style="width:${Math.round(size * 1.45)}px; height:${Math.round(size * 1.45)}px; max-width:none; object-position:${posX}% ${posY}%; transform:rotate(-45deg) scale(${zoom});" alt="${escapeHtml(p.fullName)}">
        </div>
      `;
    } else if (shape === 'hexagon') {
      avatarHtml = `
        <div class="cv-avatar-container">
          <div class="cv-avatar-frame cv-avatar-hexagon" style="width:${size}px; height:${size}px; outline:${borderWidth}px solid ${borderColor};" title="🖐️ ចុចអូសដើម្បីរំកិលរូប (Drag to pan)">
            <img src="${p.avatar}" class="cv-avatar-img cv-movable-avatar" data-avatar-img="true" style="object-position:${posX}% ${posY}%; transform:scale(${zoom});" alt="${escapeHtml(p.fullName)}">
          </div>
        </div>
      `;
    } else {
      avatarHtml = `
        <div class="cv-avatar-container">
          <div class="cv-avatar-frame cv-avatar-${shape}" style="width:${size}px; height:${size}px; border:${borderWidth}px solid ${borderColor};" title="🖐️ ចុចអូសដើម្បីរំកិលរូប (Drag to pan)">
            <img src="${p.avatar}" class="cv-avatar-img cv-movable-avatar" data-avatar-img="true" style="object-position:${posX}% ${posY}%; transform:scale(${zoom});" alt="${escapeHtml(p.fullName)}">
          </div>
        </div>
      `;
    }
  }

  // Skills HTML
  let skillsHtml = '';
  if (d.skills && d.skills.length > 0) {
    let skillItems = '';
    if (cvState.skillMode === 'stars') {
      skillItems = d.skills.map(s => {
        const starCount = s.stars || Math.round((s.level || 80) / 20) || 4;
        const starStr = '★'.repeat(starCount) + '☆'.repeat(5 - starCount);
        return `
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px; font-size:9pt;">
            <span>${escapeHtml(s.name)}</span>
            <span class="star-rating">${starStr}</span>
          </div>
        `;
      }).join('');
    } else if (cvState.skillMode === 'badges') {
      skillItems = `<div class="cv-skills-list">${d.skills.map(s => `<span class="cv-skill-badge">${escapeHtml(s.name)}</span>`).join('')}</div>`;
    } else {
      skillItems = d.skills.map(s => `
        <div style="margin-bottom:7px; font-size:8.5pt;">
          <div style="display:flex; justify-content:space-between;">
            <span>${escapeHtml(s.name)}</span>
            <span style="opacity:0.8;">${s.level || 80}%</span>
          </div>
          <div class="cv-progress-bar-wrap">
            <div class="cv-progress-bar-fill ${cvState.layout.includes('peach') ? 'cv-progress-bar-peach' : (cvState.layout.includes('gold') ? 'cv-progress-bar-gold' : '')}" style="width:${s.level || 80}%;"></div>
          </div>
        </div>
      `).join('');
    }

    skillsHtml = `
      <div class="cv-section">
        <h3 class="cv-section-title">ជំនាញវិជ្ជាជីវៈ (SKILLS)</h3>
        ${skillItems}
      </div>
    `;
  }

  // Languages HTML with REAL Graphic Country Flags
  let languagesHtml = '';
  if (d.languages && d.languages.length > 0) {
    languagesHtml = `
      <div class="cv-section">
        <h3 class="cv-section-title">ភាសា (LANGUAGES)</h3>
        <div style="display:flex; flex-direction:column; gap:6px;">
          ${d.languages.map(l => {
            const flagCode = (l.flag || 'kh').toLowerCase().trim();
            const flagSrc = `assets/icons/flags/${flagCode}.png`;
            return `
              <div class="cv-lang-item">
                <div class="cv-lang-left">
                  <img src="${flagSrc}" class="cv-flag-img" alt="${flagCode}" onerror="this.onerror=null; this.src='https://flagcdn.com/w40/${flagCode}.png';">
                  <strong>${escapeHtml(l.name)}</strong>
                </div>
                <span class="cv-item-date">${escapeHtml(l.level)}</span>
              </div>
              ${l.percent ? `
                <div class="cv-progress-bar-wrap" style="height:4px; margin-top:-2px; margin-bottom:4px;">
                  <div class="cv-progress-bar-fill" style="width:${l.percent}%;"></div>
                </div>
              ` : ''}
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  let referencesHtml = '';
  if (d.references && d.references.length > 0) {
    referencesHtml = `
      <div class="cv-section">
        <h3 class="cv-section-title">អ្នកធានា (REFERENCES)</h3>
        <div class="cv-references-grid">
          ${d.references.map(r => `
            <div class="cv-ref-card">
              <div class="cv-ref-name">${escapeHtml(r.name)}</div>
              <div class="cv-ref-role">${escapeHtml(r.role)} – ${escapeHtml(r.company)}</div>
              ${r.phone ? `<div class="cv-ref-contact">Phone: ${escapeHtml(r.phone)}</div>` : ''}
              ${r.email ? `<div class="cv-ref-contact">Email: ${escapeHtml(r.email)}</div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  let interestsHtml = '';
  if (d.interests && d.interests.length > 0) {
    interestsHtml = `
      <div class="cv-section">
        <h3 class="cv-section-title">ចំណាប់អារម្មណ៍ (INTERESTS)</h3>
        <div class="cv-interests-grid">
          ${d.interests.map(i => `<span class="cv-interest-badge">${escapeHtml(i)}</span>`).join('')}
        </div>
      </div>
    `;
  }

  let educationHtml = '';
  if (d.education && d.education.length > 0) {
    educationHtml = `
      <div class="cv-section">
        <h3 class="cv-section-title">ការអប់រំ (EDUCATION)</h3>
        ${d.education.map(edu => `
          <div class="cv-timeline-item">
            <div class="cv-item-header">
              <span class="cv-item-title">${escapeHtml(edu.degree)}</span>
              <span class="cv-item-date">${escapeHtml(edu.year)}</span>
            </div>
            <div class="cv-item-subtitle">${escapeHtml(edu.school)} ${edu.location ? `• ${escapeHtml(edu.location)}` : ''}</div>
            ${edu.description ? `<div class="cv-item-desc">${escapeHtml(edu.description)}</div>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  let experienceHtml = '';
  if (d.experience && d.experience.length > 0) {
    experienceHtml = `
      <div class="cv-section">
        <h3 class="cv-section-title">បទពិសោធន៍ការងារ (WORK EXPERIENCE)</h3>
        ${d.experience.map(exp => `
          <div class="cv-timeline-item">
            <div class="cv-item-header">
              <span class="cv-item-title">${escapeHtml(exp.role)}</span>
              <span class="cv-item-date">${escapeHtml(exp.startDate)} – ${escapeHtml(exp.endDate)}</span>
            </div>
            <div class="cv-item-subtitle">${escapeHtml(exp.company)} ${exp.location ? `• ${escapeHtml(exp.location)}` : ''}</div>
            <div class="cv-item-desc">${escapeHtml(exp.description)}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  let projectsHtml = '';
  if (d.projects && d.projects.length > 0) {
    projectsHtml = `
      <div class="cv-section">
        <h3 class="cv-section-title">គម្រោងសំខាន់ៗ (PROJECTS)</h3>
        ${d.projects.map(proj => `
          <div class="cv-timeline-item">
            <div class="cv-item-header">
              <span class="cv-item-title">${escapeHtml(proj.title)}</span>
              ${proj.link ? `<span class="cv-item-date">${escapeHtml(proj.link)}</span>` : ''}
            </div>
            ${proj.role ? `<div class="cv-item-subtitle">${escapeHtml(proj.role)}</div>` : ''}
            <div class="cv-item-desc">${escapeHtml(proj.description)}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  let certsHtml = '';
  if (d.certifications && d.certifications.length > 0) {
    certsHtml = `
      <div class="cv-section">
        <h3 class="cv-section-title">វិញ្ញាបនបត្រ (CERTIFICATIONS)</h3>
        ${d.certifications.map(c => `
          <div class="cv-timeline-item">
            <div class="cv-item-header">
              <span class="cv-item-title">${escapeHtml(c.name)}</span>
              <span class="cv-item-date">${escapeHtml(c.date || '')}</span>
            </div>
            <div class="cv-item-subtitle">${escapeHtml(c.issuer || '')}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  let summaryHtml = '';
  if (p.summary) {
    summaryHtml = `
      <div class="cv-section">
        <h3 class="cv-section-title">អំពីខ្លួនខ្ញុំ (PROFILE SUMMARY)</h3>
        <p class="cv-item-desc" style="font-size: 9.5pt;">${escapeHtml(p.summary)}</p>
      </div>
    `;
  }

  // Layout 1: Navy Classic Executive
  if (cvState.layout === "layout-navy-executive") {
    container.innerHTML = `
      <aside class="cv-sidebar">
        ${avatarHtml}
        <div class="cv-section">
          <h3 class="cv-section-title">CONTACT</h3>
          <div class="cv-contact-list">
            ${contactHtml}
          </div>
        </div>
        ${educationHtml}
        ${skillsHtml}
        ${languagesHtml}
      </aside>
      <main class="cv-main">
        <header class="cv-header">
          <h1 class="cv-name">${escapeHtml(p.fullName || "RICHARD SANCHEZ")}</h1>
          <div class="cv-role">${escapeHtml(p.jobTitle || "MARKETING MANAGER")}</div>
          <div class="cv-header-divider"></div>
        </header>
        ${summaryHtml}
        ${experienceHtml}
        ${projectsHtml}
        ${referencesHtml}
      </main>
    `;
  }

  // Layout 2: Peach Capsule Creative
  else if (cvState.layout === "layout-peach-capsule") {
    container.innerHTML = `
      <div class="cv-top-hero">
        <div>
          ${avatarHtml}
        </div>
        <div class="cv-peach-card">
          <h1 class="cv-name">${escapeHtml(p.fullName || "CHRISTINE SMITH")}</h1>
          <div style="font-size:11pt; font-weight:600; color:#1e293b; margin-top:2px;">${escapeHtml(p.jobTitle || "Web & Graphic Designer")}</div>
          <div class="cv-contact-list" style="flex-direction:row; flex-wrap:wrap; gap:12px; margin-top:6px;">
            ${contactHtml}
          </div>
        </div>
      </div>
      <div class="cv-body-grid">
        <aside class="cv-left-pill-col">
          ${summaryHtml}
          ${skillsHtml}
          ${languagesHtml}
          ${interestsHtml}
        </aside>
        <main class="cv-right-col">
          ${experienceHtml}
          ${educationHtml}
          ${projectsHtml}
          ${referencesHtml}
        </main>
      </div>
    `;
  }

  // Layout 3: Minimalist Grey Divider
  else if (cvState.layout === "layout-minimal-divider") {
    container.innerHTML = `
      <aside class="cv-left-col">
        ${avatarHtml}
        <div class="cv-section">
          <h3 class="cv-section-title">CONTACT</h3>
          <div class="cv-contact-list">
            ${contactHtml}
          </div>
        </div>
        ${educationHtml}
        ${skillsHtml}
        ${languagesHtml}
      </aside>
      <main class="cv-right-col">
        <header class="cv-header">
          <h1 class="cv-name">${escapeHtml(p.fullName || "Ryley Harber")}</h1>
          <div class="cv-role">${escapeHtml(p.jobTitle || "Professional Simple CV")}</div>
        </header>
        ${summaryHtml}
        ${experienceHtml}
        ${projectsHtml}
        ${referencesHtml}
      </main>
    `;
  }

  // Layout 4: Gold Diamond Prestige
  else if (cvState.layout === "layout-gold-diamond") {
    container.innerHTML = `
      <aside class="cv-sidebar">
        ${avatarHtml}
        ${skillsHtml}
        ${languagesHtml}
        <div class="cv-section" style="margin-top:auto;">
          <h3 class="cv-section-title">CONTACT</h3>
          <div class="cv-contact-list">
            ${contactHtml}
          </div>
        </div>
      </aside>
      <main class="cv-main">
        <header class="cv-header">
          <h1 class="cv-name">${escapeHtml(p.fullName || "JOHN JAMES DOE")}</h1>
          <div class="cv-role">${escapeHtml(p.jobTitle || "BRANDING & MEDIA SPECIALIST")}</div>
        </header>
        ${summaryHtml}
        ${experienceHtml}
        ${educationHtml}
        ${projectsHtml}
        ${referencesHtml}
      </main>
    `;
  }

  // Layout 5: Arch Dome Modern Ribbon
  else if (cvState.layout === "layout-arch-capsule") {
    container.innerHTML = `
      <aside class="cv-sidebar">
        ${avatarHtml}
        <h1 class="cv-name">${escapeHtml(p.fullName || "MORGAN MAXWELL")}</h1>
        <div class="cv-role">${escapeHtml(p.jobTitle || "Fresh Graduate")}</div>
        <p style="font-size:8.5pt; opacity:0.85; line-height:1.4;">${escapeHtml(p.summary || '')}</p>
        <div class="cv-section" style="width:100%; margin-top:8px;">
          <h3 class="cv-section-title">CONTACT</h3>
          <div class="cv-contact-list" style="font-size:8.5pt;">
            ${contactHtml}
          </div>
        </div>
        <div class="cv-section" style="width:100%;">
          ${skillsHtml}
        </div>
      </aside>
      <main class="cv-main">
        <div>
          <span class="cv-gold-pill-title">EDUCATION</span>
          ${educationHtml}
        </div>
        <div>
          <span class="cv-gold-pill-title">AWARDS & CERTS</span>
          ${certsHtml}
        </div>
        <div>
          <span class="cv-gold-pill-title">LANGUAGE</span>
          ${languagesHtml}
        </div>
        ${d.interests && d.interests.length > 0 ? `
          <div class="cv-interest-box">
            <span class="cv-gold-pill-title" style="margin-bottom:6px;">INTEREST</span>
            <div class="cv-interests-grid">
              ${d.interests.map(i => `<span class="cv-interest-badge" style="background:rgba(202,138,4,0.15); color:#78350f;">• ${escapeHtml(i)}</span>`).join('')}
            </div>
          </div>
        ` : ''}
        ${referencesHtml}
      </main>
    `;
  }

  // Fallback Standard
  else if (cvState.layout === "layout-gradient-banner") {
    container.innerHTML = `
      <div class="cv-banner">
        <div>
          <h1 class="cv-name">${escapeHtml(p.fullName || "YOUR FULL NAME")}</h1>
          <div class="cv-role">${escapeHtml(p.jobTitle || "Your Professional Title")}</div>
          <div class="cv-contact-list" style="flex-direction:row; flex-wrap:wrap; gap:14px; margin-top:10px;">
            ${contactHtml}
          </div>
        </div>
        <div>${avatarHtml}</div>
      </div>
      <div class="cv-content-wrap">
        <div>
          ${summaryHtml}
          ${experienceHtml}
          ${projectsHtml}
          ${referencesHtml}
        </div>
        <div>
          ${educationHtml}
          ${skillsHtml}
          ${languagesHtml}
          ${interestsHtml}
          ${certsHtml}
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <aside class="cv-sidebar">
        ${avatarHtml}
        <div class="cv-section">
          <h3 class="cv-section-title">ទំនាក់ទំនង (Contact)</h3>
          <div class="cv-contact-list">
            ${contactHtml}
          </div>
        </div>
        ${skillsHtml}
        ${languagesHtml}
        ${interestsHtml}
        ${certsHtml}
      </aside>
      <main class="cv-main">
        <header class="cv-header">
          <h1 class="cv-name">${escapeHtml(p.fullName || "YOUR FULL NAME")}</h1>
          <div class="cv-role">${escapeHtml(p.jobTitle || "Your Professional Title")}</div>
        </header>
        ${summaryHtml}
        ${experienceHtml}
        ${educationHtml}
        ${projectsHtml}
        ${referencesHtml}
      </main>
    `;
  }

  // Enable rich inline editing & selection styling directly on the CV canvas
  container.setAttribute("contenteditable", "true");
  container.setAttribute("spellcheck", "false");
  container.querySelectorAll(".cv-avatar-container, .cv-diamond-avatar-wrap, .cv-flag-img, svg, .cv-progress-bar-wrap, .star-rating").forEach(el => {
    el.setAttribute("contenteditable", "false");
  });

  // Update live A4 Page Boundary indicator if content exceeds 1135px
  setTimeout(() => {
    updatePageSplitIndicator();
    updateAvatarPreviewBox();
  }, 60);
}

// Helpers
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✨</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(40px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/* ============================================================
   8. RICH TEXT SELECTION FORMATTING (FONT & COLOR PER SELECTION)
   ============================================================ */
let savedSelectionRange = null;

function getActiveCvSelection() {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return null;
  const range = sel.getRangeAt(0);
  const cvSheet = document.getElementById("cv-sheet-wrapper");
  if (!cvSheet || !cvSheet.contains(range.commonAncestorContainer)) return null;

  // If selection is collapsed (user just clicked inside text without dragging)
  // Per user request: DO NOT auto-select word; let user place caret or select text themselves!
  if (sel.isCollapsed) {
    return null;
  }

  const text = sel.toString().trim();
  if (!text) return null;
  return { sel, range, text };
}

function saveCurrentSelection() {
  const active = getActiveCvSelection();
  if (active) {
    savedSelectionRange = active.range.cloneRange();
    return true;
  }
  return false;
}

function restoreSavedSelection() {
  if (!savedSelectionRange) return false;
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(savedSelectionRange.cloneRange());
  return true;
}

function updateFloatingToolbar() {
  const floatingToolbar = document.getElementById("cv-floating-format-toolbar");
  const topBar = document.getElementById("selection-formatting-bar");
  const infoText = document.getElementById("sel-info-text");

  // Keep floating toolbar suppressed so it never covers the user's text
  if (floatingToolbar) {
    floatingToolbar.classList.remove("active");
  }

  const active = getActiveCvSelection();
  if (!active) {
    if (topBar) topBar.classList.remove("has-selection");
    if (infoText) {
      infoText.innerHTML = `✨ <strong>Select អក្សរលើ CV</strong> ដើម្បីប្តូរពណ៌ &amp; Font តាមចិត្ត:`;
    }
    return;
  }

  savedSelectionRange = active.range.cloneRange();

  // Highlight and update top bar indicator directly above canvas
  if (topBar) topBar.classList.add("has-selection");
  if (infoText) {
    const preview = active.text.length > 22 ? active.text.substring(0, 20) + '...' : active.text;
    infoText.innerHTML = `✅ បាន Select: <strong style="color:#fbbf24;">"${escapeHtml(preview)}"</strong> — រើសពណ៌ &amp; Font លើរបារខាងលើនេះ:`;
  }
}

function applyStyleToSelection(styles) {
  restoreSavedSelection();
  const active = getActiveCvSelection();
  if (!active) {
    showToast("💡 សូម Select (អូសម៉ៅស៍លើ) អក្សរនៅលើសន្លឹក CV ជាមុនសិន! ✍️");
    return;
  }

  const { sel, range } = active;
  const cvSheet = document.getElementById("cv-sheet-wrapper");

  // Check if selection is already inside an existing custom-styled span
  let parentSpan = range.commonAncestorContainer;
  if (parentSpan && parentSpan.nodeType === Node.TEXT_NODE) parentSpan = parentSpan.parentElement;

  if (parentSpan && parentSpan !== cvSheet && parentSpan.tagName === "SPAN" && parentSpan.classList.contains("cv-custom-styled")) {
    if (styles.color) parentSpan.style.setProperty("color", styles.color, "important");
    if (styles.fontFamily) parentSpan.style.setProperty("font-family", styles.fontFamily, "important");
    if (styles.fontSize) parentSpan.style.setProperty("font-size", styles.fontSize, "important");
    savedSelectionRange = range.cloneRange();
    updateFloatingToolbar();
    return;
  }

  try {
    const span = document.createElement("span");
    span.className = "cv-custom-styled";
    if (styles.color) span.style.setProperty("color", styles.color, "important");
    if (styles.fontFamily) span.style.setProperty("font-family", styles.fontFamily, "important");
    if (styles.fontSize) span.style.setProperty("font-size", styles.fontSize, "important");

    const fragment = range.extractContents();

    // Clean up any nested custom-styled spans inside fragment so previous colors don't conflict
    const innerSpans = fragment.querySelectorAll(".cv-custom-styled");
    innerSpans.forEach(inner => {
      if (styles.color) inner.style.removeProperty("color");
      if (styles.fontFamily) inner.style.removeProperty("font-family");
      if (styles.fontSize) inner.style.removeProperty("font-size");
      if (!inner.getAttribute("style") || inner.getAttribute("style").trim() === "") {
        const p = inner.parentNode;
        if (p) {
          while (inner.firstChild) p.insertBefore(inner.firstChild, inner);
          p.removeChild(inner);
        }
      }
    });

    span.appendChild(fragment);
    range.insertNode(span);

    // Force all child elements inside the styled span to inherit the custom color and font
    span.querySelectorAll("*").forEach(child => {
      if (styles.color) child.style.setProperty("color", "inherit", "important");
      if (styles.fontFamily) child.style.setProperty("font-family", "inherit", "important");
    });

    // Reselect
    sel.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(span);
    sel.addRange(newRange);
    savedSelectionRange = newRange.cloneRange();
  } catch (err) {
    document.execCommand("styleWithCSS", false, true);
    if (styles.color) document.execCommand("foreColor", false, styles.color);
    if (styles.fontFamily) document.execCommand("fontName", false, styles.fontFamily);
    if (sel.rangeCount > 0) savedSelectionRange = sel.getRangeAt(0).cloneRange();
  }

  updateFloatingToolbar();
}

function applySelectionColor(color) {
  applyStyleToSelection({ color });
  const topColorInput = document.getElementById("sel-custom-color-input");
  const floatColorInput = document.getElementById("float-custom-color-input");
  if (topColorInput && color.startsWith("#")) topColorInput.value = color;
  if (floatColorInput && color.startsWith("#")) floatColorInput.value = color;
  showToast(`បានប្តូរពណ៌អក្សរជោគជ័យ! 🎨`);
}

function applySelectionFont(fontFamily) {
  if (!fontFamily) return;
  applyStyleToSelection({ fontFamily });
  const topFontSelect = document.getElementById("sel-font-select");
  const floatFontSelect = document.getElementById("float-font-family");
  if (topFontSelect) topFontSelect.value = fontFamily;
  if (floatFontSelect) floatFontSelect.value = fontFamily;
  const fontLabel = fontFamily.split(',')[0].replace(/['"]/g, '');
  showToast(`បានប្តូរ Font ទៅជា ${fontLabel} ជោគជ័យ! 🔤`);
}

function changeSelectionFontSize(delta) {
  restoreSavedSelection();
  const active = getActiveCvSelection();
  if (!active) return;
  let node = active.sel.anchorNode;
  if (node && node.nodeType === Node.TEXT_NODE) node = node.parentElement;
  let currentSize = 13;
  if (node) {
    currentSize = parseFloat(window.getComputedStyle(node).fontSize) || 13;
  }
  const newSize = Math.max(9, Math.min(64, Math.round(currentSize + delta)));
  applyStyleToSelection({ fontSize: `${newSize}px` });
}

function toggleSelectionFormat(cmd) {
  restoreSavedSelection();
  document.execCommand(cmd, false, null);
  saveCurrentSelection();
  updateFloatingToolbar();
}

function clearSelectionFormatting() {
  restoreSavedSelection();
  const active = getActiveCvSelection();
  if (!active) return;
  const { range } = active;
  let node = range.commonAncestorContainer;
  if (node && node.nodeType === Node.TEXT_NODE) node = node.parentElement;

  const cvSheet = document.getElementById("cv-sheet-wrapper");
  if (cvSheet) {
    const styledSpans = cvSheet.querySelectorAll(".cv-custom-styled");
    styledSpans.forEach(span => {
      if (range.intersectsNode(span)) {
        span.removeAttribute("style");
        const parent = span.parentNode;
        if (parent) {
          while (span.firstChild) parent.insertBefore(span.firstChild, span);
          parent.removeChild(span);
        }
      }
    });
  }
  document.execCommand("removeFormat", false, null);
  showToast("បានសម្អាតពណ៌ &amp; Font ទៅដើមវិញ! 🧹");
  saveCurrentSelection();
  updateFloatingToolbar();
}

function initSelectionFormatting() {
  const floatingToolbar = document.getElementById("cv-floating-format-toolbar");
  const topBar = document.getElementById("selection-formatting-bar");
  const cvSheet = document.getElementById("cv-sheet-wrapper");

  // Prevent losing text selection on toolbar clicks, but allow inputs/selects/labels to work
  [floatingToolbar, topBar].forEach(bar => {
    if (!bar) return;
    bar.addEventListener("mousedown", (e) => {
      const tag = e.target.tagName.toLowerCase();
      if (tag === "select" || tag === "input" || e.target.closest("label") || e.target.closest(".sel-custom-color-picker") || e.target.closest(".float-picker-label")) {
        return;
      }
      e.preventDefault();
    });
  });

  // Color Swatches in Top Bar & Floating Toolbar
  document.querySelectorAll(".sel-swatch-btn, .float-color-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const color = btn.getAttribute("data-color");
      if (color) applySelectionColor(color);
    });
  });

  // Native Custom Color Pickers
  const topColorInput = document.getElementById("sel-custom-color-input");
  if (topColorInput) {
    topColorInput.addEventListener("input", (e) => applySelectionColor(e.target.value));
    topColorInput.addEventListener("change", (e) => applySelectionColor(e.target.value));
  }
  const floatColorInput = document.getElementById("float-custom-color-input");
  if (floatColorInput) {
    floatColorInput.addEventListener("input", (e) => applySelectionColor(e.target.value));
    floatColorInput.addEventListener("change", (e) => applySelectionColor(e.target.value));
  }

  // Trigger click on color input when label wrapper is clicked
  document.querySelectorAll(".sel-custom-color-picker, .float-picker-label").forEach(wrap => {
    wrap.addEventListener("click", (e) => {
      const input = wrap.querySelector("input[type='color']");
      if (input && e.target !== input) {
        input.click();
      }
    });
  });

  // Font Selectors in Top Bar & Floating Toolbar
  const topFontSelect = document.getElementById("sel-font-select");
  if (topFontSelect) {
    topFontSelect.addEventListener("change", (e) => {
      if (e.target.value) applySelectionFont(e.target.value);
    });
  }
  const floatFontSelect = document.getElementById("float-font-family");
  if (floatFontSelect) {
    floatFontSelect.addEventListener("change", (e) => {
      if (e.target.value) applySelectionFont(e.target.value);
    });
  }

  // Formatting Buttons (Bold, Italic, Underline, Size, Clear)
  const boldBtns = [document.getElementById("sel-btn-bold"), document.getElementById("float-btn-bold")];
  boldBtns.forEach(b => b && b.addEventListener("click", () => toggleSelectionFormat("bold")));

  const italicBtns = [document.getElementById("sel-btn-italic"), document.getElementById("float-btn-italic")];
  italicBtns.forEach(b => b && b.addEventListener("click", () => toggleSelectionFormat("italic")));

  const underlineBtns = [document.getElementById("sel-btn-underline"), document.getElementById("float-btn-underline")];
  underlineBtns.forEach(b => b && b.addEventListener("click", () => toggleSelectionFormat("underline")));

  const sizeDownBtns = [document.getElementById("sel-btn-size-down"), document.getElementById("float-btn-size-down")];
  sizeDownBtns.forEach(b => b && b.addEventListener("click", () => changeSelectionFontSize(-1.5)));

  const sizeUpBtns = [document.getElementById("sel-btn-size-up"), document.getElementById("float-btn-size-up")];
  sizeUpBtns.forEach(b => b && b.addEventListener("click", () => changeSelectionFontSize(1.5)));

  const clearBtns = [document.getElementById("sel-btn-clear"), document.getElementById("float-btn-clear")];
  clearBtns.forEach(b => b && b.addEventListener("click", clearSelectionFormatting));

  // Selection Change Event Listeners with Debounce
  let selectionTimeout = null;
  const onSelectionUpdate = () => {
    clearTimeout(selectionTimeout);
    selectionTimeout = setTimeout(updateFloatingToolbar, 60);
  };

  document.addEventListener("selectionchange", onSelectionUpdate);
  if (cvSheet) {
    cvSheet.addEventListener("mouseup", onSelectionUpdate);
    cvSheet.addEventListener("keyup", onSelectionUpdate);

    // Two-way sync: when user edits name or role directly on the CV, update left inputs
    cvSheet.addEventListener("input", (e) => {
      const target = e.target;
      if (target.classList.contains("cv-name")) {
        const val = target.innerText.trim();
        cvState.data.personal.fullName = val;
        const inp = document.getElementById("input-fullName");
        if (inp) inp.value = val;
      } else if (target.classList.contains("cv-role")) {
        const val = target.innerText.trim();
        cvState.data.personal.jobTitle = val;
        const inp = document.getElementById("input-jobTitle");
        if (inp) inp.value = val;
      }
    });

    // Keyboard shortcuts inside CV sheet
    cvSheet.addEventListener("keydown", (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'b' || e.key === 'B') {
          e.preventDefault();
          toggleSelectionFormat("bold");
        } else if (e.key === 'i' || e.key === 'I') {
          e.preventDefault();
          toggleSelectionFormat("italic");
        } else if (e.key === 'u' || e.key === 'U') {
          e.preventDefault();
          toggleSelectionFormat("underline");
        }
      }
    });
  }

  // Viewport scroll & window resize
  const viewport = document.querySelector(".preview-viewport");
  if (viewport) {
    viewport.addEventListener("scroll", onSelectionUpdate, { passive: true });
  }
  window.addEventListener("resize", onSelectionUpdate, { passive: true });

  // Dismiss floating toolbar when clicking outside
  document.addEventListener("mousedown", (e) => {
    if (!floatingToolbar) return;
    if (!floatingToolbar.contains(e.target) && (!cvSheet || !cvSheet.contains(e.target)) && (!topBar || !topBar.contains(e.target))) {
      floatingToolbar.classList.remove("active");
    }
  });
}

