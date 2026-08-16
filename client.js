window.__ModuleLoader__.load({ id: 'dsh-scifi-theme', factory: (require) => {
  var module = { exports: {} }; var exports = module.exports
  // localStorage key carried over from the theme's origin inside dsh-gamespace,
  // so existing preferences keep working.
  const THEME_KEY = 'gamespace-ui-theme'
  // ---- UI theme (sci-fi glass) -----------------------------------------------
  // Modern sci-fi reads as HOLOGRAPHIC GLASS, not CRT: frosted translucent
  // surfaces, electric cyan + violet light, a faint dot grid, HUD corner
  // brackets, micro-interactions. No scanlines, no vignette — those are retro
  // by definition. Alias tokens carry !important because the theme presenter
  // applies some aliases inline on body; effects live on a dedicated div so
  // body pseudo-elements stay untouched.
  const CYBER_CSS = [
  /* ===== v4 FULL POWER — near-black base, neon bloom, angular cuts, visible grid ===== */
  'body, body[data-ds-dark-theme] {',
  '  --dsw-alias-bg-base: #010308 !important; --dsw-alias-bg-layer-1: #02040c !important; --dsw-alias-bg-layer-2: #04081a !important; --dsw-alias-bg-layer-3: #060d24 !important;',
  '  --dsw-alias-bg-module-platform: #04081a !important; --dsw-alias-bg-multi-select: #071228 !important; --dsw-alias-bg-overlay: rgba(4,8,20,0.88) !important; --dsw-alias-bg-skeleton: rgba(0,255,249,0.07) !important;',
  '  --dsw-alias-border-l1: rgba(0,255,249,0.25) !important; --dsw-alias-border-l2: rgba(0,255,249,0.42) !important; --dsw-alias-border-l3: rgba(0,255,249,0.58) !important; --dsw-alias-border-l4: rgba(0,255,249,0.75) !important;',
  '  --dsw-alias-label-primary: #bcd3da !important; --dsw-alias-label-primary-dimmed: #95bcc4 !important; --dsw-alias-label-primary-foreground: #c8dade !important; --dsw-alias-label-primary-inverted: #001318 !important; --dsw-alias-label-primary-bluish: #6dbcc7 !important;',
  '  --dsw-alias-label-secondary: #78b0c2 !important; --dsw-alias-label-tertiary: #5293ad !important; --dsw-alias-label-caption: #40709b !important; --dsw-alias-label-dimmed: #3a6ea6 !important;',
  '  --dsw-alias-brand-primary: #00fff9 !important; --dsw-alias-brand-text: #4dffff !important; --dsw-alias-brand-primary-invert: #001318 !important; --dsw-alias-brand-primary-new-colorprimary-new-color: #00fff9 !important;',
  '  --dsw-alias-button-primary-fill: #00e0d5 !important; --dsw-alias-button-primary-hover: #33fff7 !important; --dsw-alias-button-primary-dimmed: #063b40 !important;',
  '  --dsw-alias-button-info-fill: #00e0d5 !important; --dsw-alias-button-info-hover: #33fff7 !important; --dsw-alias-button-contrast-fill: #07303f !important; --dsw-alias-button-elevated-fill: #061030 !important; --dsw-alias-button-floating-fill: #061030 !important; --dsw-alias-button-floating-hover: #0b1c4a !important;',
  '  --dsw-alias-button-ghost-active-border: #00fff9 !important; --dsw-alias-button-ghost-active-fill: rgba(0,255,249,0.16) !important; --dsw-alias-button-ghost-active-hover: rgba(0,255,249,0.26) !important;',
  '  --dsw-alias-interactive-bg-hover: rgba(0,255,249,0.10) !important; --dsw-alias-interactive-bg-hover-accent: rgba(0,255,249,0.22) !important; --dsw-alias-interactive-bg-hover-danger: rgba(255,43,214,0.14) !important; --dsw-alias-interactive-bg-hover-solid: #0a1638 !important; --dsw-alias-interactive-bg-active: rgba(255,43,214,0.18) !important;',
  '  --dsw-alias-markdown-code-block: #01040e !important; --dsw-alias-markdown-code-block-banner: #041028 !important; --dsw-alias-markdown-citation: #0a2a45 !important;',
  '  --dsw-alias-separator-primary: rgba(0,255,249,0.35) !important;',
  '  --dsw-alias-scrollbar-bg-l1: transparent !important; --dsw-alias-scrollbar-bg-l2: transparent !important; --dsw-alias-scrollbar-hover-l1: rgba(0,255,249,0.6) !important; --dsw-alias-scrollbar-hover-l2: rgba(0,255,249,0.6) !important;',
  '  --dsh-scrollbar-thumb: rgba(0,255,249,0.45) !important; --dsh-scrollbar-thumb-hover: rgba(0,255,249,0.8) !important;',
  /* big surfaces */
  '  --dsw-specific-sidebar-fill: #030616 !important;',
  '  --dsw-specific-sidebar-nav-item-active: rgba(0,255,249,0.18) !important;',
  '  --dsw-specific-sidebar-nav-item-active-accent: #00fff9 !important;',
  '  --dsw-specific-sidebar-nav-item-hover: rgba(0,255,249,0.09) !important;',
  '  --dsw-specific-input-major: rgba(2,6,18,0.92) !important;',
  '  --dsw-specific-bubble: rgba(4,10,28,0.72) !important;',
  '  --dsw-specific-bubble-highlight: rgba(0,255,249,0.14) !important;',
  '  --dsw-specific-menu: rgba(3,7,20,0.95) !important;',
  '  --dsw-specific-selector: rgba(6,16,48,0.9) !important;',
  '  --dsw-specific-tip: rgba(10,20,52,0.96) !important;',
  '  --dsw-alias-state-success-primary: #2dffb3 !important; --dsw-alias-state-success-secondary: rgba(45,255,179,0.16) !important;',
  '  --dsw-alias-state-warn-primary: #ffc233 !important; --dsw-alias-state-warn-secondary: rgba(255,194,51,0.16) !important; --dsw-alias-state-warn-label: #ffd970 !important;',
  '  --dsw-alias-state-error-primary: #ff5c8a !important; --dsw-alias-state-error-secondary: rgba(255,92,138,0.16) !important;',
  '  --dsw-alias-state-business-primary: #37c8ff !important; --dsw-alias-state-business-tertiary: rgba(55,200,255,0.12) !important;',
  '  --dsw-static-blue-450: #00fff9 !important; --dsw-static-neutral-bluish-400: #8fb8e8 !important;',
  '  --dsw-alias-border-l2-darkmode-thin: rgba(0,255,249,0.30) !important; --dsw-alias-border-inverted: rgba(0,255,249,0.35) !important; --dsw-alias-border-inverted2: rgba(0,255,249,0.22) !important;',
  '  --dsw-alias-button-tool-bar-fill: rgba(6,16,48,0.75) !important; --dsw-alias-button-tool-bar-fill-invisible: rgba(6,16,48,0.4) !important; --dsw-alias-button-tool-bar-hover: rgba(0,255,249,0.16) !important;',
  '  --dsw-alias-tooltip-bg: #061030 !important; --dsw-alias-toast-bg: rgba(4,8,20,0.95) !important;',
  '  --dsw-alias-markdown-inline-code: #041028 !important; --dsw-alias-markdown-placeholder: #3a6ea6 !important; --dsw-alias-markdown-tag: #0a2a45 !important;',
  '  --dsw-alias-markdown-code-segment-selected: #071228 !important; --dsw-alias-markdown-code-segment-unselected: #04081a !important;',
  '  --dsw-alias-state-success-tertiary: rgba(45,255,179,0.10) !important; --dsw-alias-state-warn-tertiary: rgba(255,194,51,0.10) !important;',
  '  --dsw-specific-login-input: rgba(2,6,18,0.92) !important;',
  '  --dsw-alias-bg-mask-1: rgba(0,2,8,0.45) !important; --dsw-alias-bg-mask-2: rgba(0,2,8,0.25) !important; --dsw-alias-bg-mask-3: rgba(0,2,8,0.62) !important; --dsw-alias-bg-mask-photo: rgba(0,1,4,0.9) !important; --dsw-alias-bg-mask-drop: rgba(1,3,10,0.7) !important;',
  '  --dsw-static-neutral-bluish-00: #02040c !important; --dsw-static-neutral-bluish-1000: #000205 !important; --dsw-static-neutral-bluish-50: #030616 !important; --dsw-static-neutral-bluish-60: #04081a !important; --dsw-static-neutral-bluish-75: #060d24 !important;',
  '  --dsw-static-neutral-bluish-100: #0a1428 !important; --dsw-static-neutral-bluish-150: #0c1a30 !important; --dsw-static-neutral-bluish-200: #12233f !important; --dsw-static-neutral-bluish-300: #1b3152 !important; --dsw-static-neutral-bluish-500: #2a4a75 !important; --dsw-static-neutral-bluish-600: #3a6ea6 !important; --dsw-static-neutral-bluish-700: #5590c8 !important; --dsw-static-neutral-bluish-750: #0a1428 !important; --dsw-static-neutral-bluish-800: #04081a !important; --dsw-static-neutral-bluish-850: #030616 !important; --dsw-static-neutral-bluish-875: #02040c !important; --dsw-static-neutral-bluish-900: #010308 !important; --dsw-static-neutral-bluish-950: #000205 !important;',
  '  --dsw-static-neutral-00: #02040c !important; --dsw-static-neutral-50: #030616 !important; --dsw-static-neutral-100: #04081a !important; --dsw-static-neutral-150: #060d24 !important; --dsw-static-neutral-200: #0a1428 !important; --dsw-static-neutral-250: #0c1a30 !important; --dsw-static-neutral-300: #12233f !important; --dsw-static-neutral-400: #1b3152 !important; --dsw-static-neutral-500: #2a4a75 !important; --dsw-static-neutral-550: #3a6ea6 !important; --dsw-static-neutral-600: #5590c8 !important; --dsw-static-neutral-700: #8fd8f5 !important; --dsw-static-neutral-800: #04081a !important; --dsw-static-neutral-850: #030616 !important; --dsw-static-neutral-900: #010308 !important; --dsw-static-neutral-1000: #000205 !important;',
  '  --dsw-static-deepseek-50: #030a18 !important; --dsw-static-deepseek-100: rgba(0,255,249,0.14) !important; --dsw-static-deepseek-200: rgba(0,255,249,0.24) !important; --dsw-static-deepseek-300: #00d9cf !important; --dsw-static-deepseek-400: #00e5da !important; --dsw-static-deepseek-450: #00fff9 !important; --dsw-static-deepseek-500: #00d9cf !important; --dsw-static-deepseek-600: #00a89f !important; --dsw-static-deepseek-700-delete: #0a4a45 !important; --dsw-static-deepseek-800: #07303f !important; --dsw-static-deepseek-900: #04202e !important;',
  '  --dsw-static-blue-50: #030a18 !important; --dsw-static-blue-75: #041028 !important; --dsw-static-blue-100: rgba(0,255,249,0.14) !important; --dsw-static-blue-300: #37c8ff !important; --dsw-static-blue-400: #00fff9 !important; --dsw-static-blue-500: #00d9cf !important; --dsw-static-blue-50p: #030a18 !important; --dsw-static-blue-600: #00a89f !important; --dsw-static-blue-800: #07303f !important; --dsw-static-blue-900: #04202e !important; --dsw-static-blue-950: #021018 !important;',
  '  --dsw-static-green-50: #03180f !important; --dsw-static-green-100: rgba(45,255,179,0.16) !important; --dsw-static-green-400: #2dffb3 !important; --dsw-static-green-500: #10e69a !important; --dsw-static-green-900: #05301e !important;',
  '  --dsw-static-amber-100: rgba(255,194,51,0.16) !important; --dsw-static-amber-400: #ffc233 !important; --dsw-static-amber-500: #ffb800 !important; --dsw-static-amber-600: #d99a00 !important; --dsw-static-amber-900: #33230a !important;',
  '  --dsw-static-red-50: rgba(255,92,138,0.10) !important; --dsw-static-red-100: rgba(255,92,138,0.18) !important; --dsw-static-red-400: #ff5c8a !important; --dsw-static-red-500: #ff2b6b !important; --dsw-static-red-600: #e6165c !important; --dsw-static-red-900: #3d0a1c !important;',
  '}',
  /* bloom shadows + terminal font */
  'body, body[data-ds-dark-theme], :root {',
  '  --dsw-shadow-lv1: 0 0 10px rgba(0,255,249,0.18), 0 2px 8px rgba(0,0,0,0.6) !important;',
  '  --dsw-shadow-lv2: 0 0 22px rgba(0,255,249,0.22), 0 4px 18px rgba(0,0,0,0.65) !important;',
  '  --dsw-shadow-lv3: 0 0 40px rgba(0,255,249,0.28), 0 0 90px rgba(255,43,214,0.10), 0 8px 34px rgba(0,0,0,0.7) !important;',
  "  --dsw-font-family: 'Cascadia Code', 'Cascadia Mono', 'JetBrains Mono', Consolas, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif !important;",
  '}',
  /* deep-space base + visible grid + twin aurora */
  'body { background: radial-gradient(1000px 620px at 82% -8%, rgba(0,255,249,0.13), transparent 55%), radial-gradient(900px 560px at 10% 108%, rgba(255,43,214,0.11), transparent 58%), linear-gradient(180deg, #02040c, #010308) !important; }',
  "body { font-family: 'Rajdhani', 'ZCOOL QingKe HuangYou', 'Cascadia Code', Consolas, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif !important; }",
  "body *:not(.katex):not(.katex *) { font-family: 'Rajdhani', 'ZCOOL QingKe HuangYou', 'Cascadia Code', Consolas, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif !important; }",
  '@font-face { font-family: "Orbitron"; font-style: normal; font-weight: 500 900; font-display: swap; src: url(https://cdn.jsdelivr.net/fontsource/fonts/orbitron@latest/latin-variable-normal.woff2) format("woff2"); }',
  '@font-face { font-family: "Rajdhani"; font-style: normal; font-weight: 400 700; font-display: swap; src: url(https://cdn.jsdelivr.net/fontsource/fonts/rajdhani@latest/latin-500-normal.woff2), url(https://cdn.jsdelivr.net/fontsource/fonts/rajdhani@latest/latin-600-normal.woff2), url(https://cdn.jsdelivr.net/fontsource/fonts/rajdhani@latest/latin-700-normal.woff2); }',
  ".gamespace-header h2, .gamespace-panel h3, .gamespace-primary, .gamespace-count { font-family: 'Orbitron', 'ZCOOL QingKe HuangYou', 'Rajdhani', 'Cascadia Code', 'Microsoft YaHei', sans-serif !important; text-transform: uppercase; letter-spacing: 0.10em; }",
  /* total angular conversion */
  '* { border-radius: 0 !important; }',
  'button { clip-path: polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 9px 100%, 0 calc(100% - 9px)); transition: box-shadow 0.16s ease, background-color 0.16s ease, border-color 0.16s ease, color 0.16s ease !important; }',
  'button:hover { box-shadow: 0 0 18px rgba(0,255,249,0.45), 0 0 40px rgba(0,255,249,0.18) !important; }',
  'input, textarea, select { clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%); }',
  'input:focus, textarea:focus, select:focus { outline: none !important; border-color: #00fff9 !important; box-shadow: 0 0 0 2px rgba(0,255,249,0.35), 0 0 24px rgba(0,255,249,0.30) !important; }',
  'a { color: #4dffff !important; }',
  'a:hover { text-shadow: 0 0 12px rgba(77,255,255,0.8); }',
  '::selection { background: rgba(255,43,214,0.55) !important; }',
  ':focus-visible { outline-color: #00fff9 !important; }',
  '::-webkit-scrollbar { width: 9px; height: 9px; }',
  '::-webkit-scrollbar-thumb { background: rgba(0,255,249,0.35); }',
  '::-webkit-scrollbar-thumb:hover { background: rgba(0,255,249,0.7); }',
  '::-webkit-scrollbar-corner { background: transparent; }',
  /* glass overlays with neon frame */
  '[class*="modal"], [class*="Modal"], [class*="dialog"], [class*="Dialog"], [class*="popover"], [class*="Popover"], [class*="dropdown"], [class*="Dropdown"], [class*="overlay" i][role], [class*="menu" i][role] {',
  '  -webkit-backdrop-filter: blur(18px) saturate(1.5) !important; backdrop-filter: blur(18px) saturate(1.5) !important;',
  '  background: linear-gradient(160deg, rgba(0,255,249,0.05), rgba(4,8,20,0.82) 30%) !important; border: 1px solid rgba(0,255,249,0.38) !important;',
  '  box-shadow: 0 0 28px rgba(0,255,249,0.22), 0 10px 46px rgba(0,0,0,0.6) !important;',
  '}',
  /* fx layer: glowing blueprint grid + pulsing twin aurora */
  '#scifi-fx { position: fixed; inset: 0; z-index: 2147483646; pointer-events: none; }',
  '#scifi-fx::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(0,255,249,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,249,0.10) 1px, transparent 1px), linear-gradient(rgba(0,255,249,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,249,0.035) 1px, transparent 1px); background-size: 84px 84px, 84px 84px, 21px 21px, 21px 21px; }',
  '#scifi-fx::after { content: ""; position: absolute; inset: -60px; background: radial-gradient(58% 42% at 84% 4%, rgba(0,255,249,0.26), transparent 68%), radial-gradient(52% 38% at 6% 96%, rgba(255,43,214,0.22), transparent 68%); animation: scifi-aurora 4s ease-in-out infinite alternate; will-change: transform, opacity, filter; filter: hue-rotate(0deg); }',
  '@keyframes scifi-aurora { from { opacity: 0.7; transform: translateY(0); filter: hue-rotate(0deg); } to { opacity: 1; transform: translateY(-40px); filter: hue-rotate(28deg); } }',
  /* studio panels: neon frame + HUD brackets + glitch title */
  '.gamespace-panel { position: relative; border: 1px solid transparent !important; background: linear-gradient(160deg, rgba(0,255,249,0.05), rgba(3,8,22,0.92) 34%) padding-box, conic-gradient(from var(--gs-angle, 0deg), rgba(0,255,249,0.95), rgba(0,255,249,0.12) 22%, rgba(255,43,214,0.85) 50%, rgba(0,255,249,0.12) 78%, rgba(0,255,249,0.95)) border-box !important; -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); animation: gs-spin 5s linear infinite; box-shadow: 0 0 22px rgba(0,255,249,0.20) !important; }',
  '@property --gs-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }',
  '@keyframes gs-spin { to { --gs-angle: 360deg; } }',
  '.gamespace-panel::before, .gamespace-panel::after { animation: gs-bracket-pulse 2.6s ease-in-out infinite; content: ""; position: absolute; width: 18px; height: 18px; border: 2px solid #00fff9; pointer-events: none; filter: drop-shadow(0 0 5px rgba(0,255,249,0.9)); }',
  '.gamespace-panel::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }',
  '.gamespace-panel::after { bottom: -1px; right: -1px; border-left: none; border-top: none; }',
  '@keyframes gs-bracket-pulse { 0%, 100% { opacity: 0.65; filter: drop-shadow(0 0 4px rgba(0,255,249,0.7)); } 50% { opacity: 1; filter: drop-shadow(0 0 10px rgba(0,255,249,1)); } }',
  '.gamespace-page button { background: linear-gradient(180deg, rgba(10,28,66,0.95), rgba(4,12,36,0.95)) !important; border: 1px solid rgba(0,255,249,0.5) !important; color: #c9fbff !important; }',
  '.gamespace-page button:hover:not(:disabled) { border-color: #00fff9 !important; color: #fff !important; box-shadow: 0 0 18px rgba(0,255,249,0.5), 0 0 42px rgba(0,255,249,0.2) !important; }',
  '.gamespace-primary { background: linear-gradient(135deg, #00d9cf 0%, #7c3aed 55%, #ff2bd6 100%) !important; color: #001318 !important; border: none !important; box-shadow: 0 0 22px rgba(0,255,249,0.55) !important; }',
  '.gamespace-page input, .gamespace-page select, .gamespace-page textarea { background: rgba(1,4,14,0.92) !important; border: 1px solid rgba(0,255,249,0.4) !important; color: #e8fdff !important; }',
  '.gamespace-badge-high { border-color: #ff2bd6 !important; color: #ff8ae4 !important; box-shadow: 0 0 12px rgba(255,43,214,0.55); background: rgba(255,43,214,0.08); }',
  '.gamespace-badge-low { border-color: #00fff9 !important; color: #8efcff !important; box-shadow: 0 0 12px rgba(0,255,249,0.5); background: rgba(0,255,249,0.07); }',
  '.gamespace-header h2 { color: #00fff9; letter-spacing: 0.09em; text-shadow: 0 0 8px rgba(0,255,249,0.9), 0 0 26px rgba(0,255,249,0.5), -2px 0 0 rgba(255,43,214,0.55), 2px 0 0 rgba(0,255,249,0.55); animation: scifi-glitch 6s infinite; }',
  '@keyframes scifi-glitch { 0%, 93%, 100% { transform: none; } 94% { transform: translateX(2px) skewX(4deg); } 96% { transform: translateX(-2px); } 98% { transform: translateX(1px) skewX(-3deg); } }',
  'hr { border: none !important; height: 1px !important; background: linear-gradient(90deg, transparent, rgba(0,255,249,0.65), transparent) !important; box-shadow: 0 0 10px rgba(0,255,249,0.5); }',
  '.gamespace-badge-high, .gamespace-badge-low { animation: gs-badge-pulse 3s ease-in-out infinite; }',
  '@keyframes gs-badge-pulse { 0%, 100% { box-shadow: 0 0 6px rgba(0,255,249,0.30); } 50% { box-shadow: 0 0 14px rgba(0,255,249,0.65); } }',
  '.gamespace-count { color: #00fff9 !important; text-shadow: 0 0 10px rgba(0,255,249,0.8); font-weight: 700; }',
  '.gamespace-page code { color: #7df9ff; text-shadow: 0 0 8px rgba(125,249,255,0.4); }',
  '.gamespace-note pre, .gamespace-proposal-body pre, .gamespace-compare pre { background: #01040e !important; border: 1px solid rgba(0,255,249,0.35) !important; box-shadow: inset 0 0 24px rgba(0,255,249,0.05); }',
  '.gamespace-tree details { border: 1px solid rgba(0,255,249,0.3) !important; }',
  '.gamespace-file { background: rgba(6,16,48,0.85) !important; }',
].join('\n')

  const CJK_FONT_CSS = 'https://cdn.jsdelivr.net/fontsource/css/zcool-qingke-huangyou@latest/index.css'
  function applyUiTheme(mode) {
    const style = document.getElementById('scifi-ui-theme')
    const fx = document.getElementById('scifi-fx')
    const fontLink = document.getElementById('scifi-cjk-font')
    if (mode !== 'cyber') {
      if (style) style.remove()
      if (fx) fx.remove()
      if (fontLink) fontLink.remove()
    } else {
      const el = style ?? (() => { const created = document.createElement('style'); created.id = 'scifi-ui-theme'; document.head.appendChild(created); return created })()
      el.textContent = CYBER_CSS
      if (!fx) { const created = document.createElement('div'); created.id = 'scifi-fx'; document.body.appendChild(created) }
      if (!fontLink) { const created = document.createElement('link'); created.id = 'scifi-cjk-font'; created.rel = 'stylesheet'; created.href = CJK_FONT_CSS; document.head.appendChild(created) }
    }
    try { localStorage.setItem(THEME_KEY, mode) } catch { /* private mode */ }
  }

  // Floating HUD toggle: one-click theme switch from anywhere. Self-styled so
  // it reads well in both the default and the sci-fi theme.
  function ensureToggle() {
    if (document.getElementById('scifi-theme-toggle')) return
    const button = document.createElement('button')
    button.id = 'scifi-theme-toggle'
    button.title = 'Sci-Fi 主题开关'
    const render = () => {
      const on = localStorage.getItem(THEME_KEY) === 'cyber'
      button.textContent = on ? '\u25C8 ON' : '\u25C7 OFF'
      button.style.borderColor = on ? '#00fff9' : 'rgba(120,140,170,0.6)'
      button.style.color = on ? '#00fff9' : 'inherit'
      button.style.boxShadow = on ? '0 0 14px rgba(0,255,249,0.45)' : 'none'
    }
    Object.assign(button.style, {
      position: 'fixed', right: '14px', bottom: '14px', zIndex: '2147483647',
      height: '30px', padding: '0 12px', font: '600 11px Consolas, monospace',
      letterSpacing: '0.08em', cursor: 'pointer',
      background: 'rgba(8,14,28,0.72)', color: 'inherit',
      border: '1px solid rgba(120,140,170,0.6)', borderRadius: '4px',
      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
    })
    button.addEventListener('click', () => {
      const on = localStorage.getItem(THEME_KEY) === 'cyber'
      applyUiTheme(on ? 'off' : 'cyber')
      render()
    })
    document.body.appendChild(button)
    render()
  }

  module.exports.inject = []
  module.exports.apply = function(ctx) {
    try { if (localStorage.getItem(THEME_KEY) === 'cyber') applyUiTheme('cyber') } catch { /* localStorage unavailable */ }
    if (document.body) ensureToggle()
    else document.addEventListener('DOMContentLoaded', ensureToggle, { once: true })
  }
  return module.exports
} });
