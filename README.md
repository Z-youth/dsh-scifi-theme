# dsh-scifi-theme

**Sci-Fi Glass holographic theme for the [DeepSeek Harness](https://deepseek.com/harness) web UI.**
给 DeepSeek Harness (dsh) Web 界面的"科幻·全息玻璃"主题插件。

[![License: MIT](https://img.shields.io/badge/License-MIT-00fff9.svg)](LICENSE)

## What it does 效果

A single client-only plugin transforms the entire dsh web GUI into a holographic sci-fi console — no host state, no remotes, no config files:

- **Near-black deep-space base** (`#010308`) with full-saturation neon cyan (`#00fff9`) / magenta (`#ff2bd6`)
- **All 162 `--dsw-*` design tokens overridden** — alias layer, surface-specific tokens (sidebar / composer / message bubbles / menus / tooltips), and the static color scale that components bind directly
- **Terminal-grade typography**: Orbitron (display) + Rajdhani (body latin) + ZCOOL QingKe HuangYou (CJK), loaded on demand from CDN with full offline fallback (Cascadia / Consolas / YaHei)
- **Blueprint atmosphere**: two-layer engineering grid (84 px major + 21 px fine) + drifting dual-aurora with slow hue rotation
- **Total angular conversion**: every corner squared, buttons clipped into chamfered HUD shapes
- **Living borders**: rotating conic-gradient light beams around panels, pulsing HUD corner brackets, glowing hairline dividers, breathing badges, glitch-flicker titles
- **Bloom shadows** (`--dsw-shadow-lv1/2/3`) tinted cyan/magenta; neon state colors for success/warn/error
- **One-click toggle**: a floating `◈` HUD button on every page — no settings trip needed

纯客户端插件：零宿主状态、零远程调用。重启 dsh 后界面即变；右下角悬浮按钮一键开关，偏好按浏览器持久化。

## Install 安装

Requires a dsh web profile (dsh `0.1.0-rc.6`-era plugin architecture). From a checkout of this repo:

```bash
dsh plugin --profile web add "link:<path-to>/dsh-scifi-theme"
```

Then add `dsh-scifi-theme` to `dsh.profile.bundles` in `~/.dsh/profiles/web/package.json`, and restart `dsh web`. Or install from GitHub directly once published:

```bash
dsh plugin --profile web add "https://github.com/<you>/dsh-scifi-theme"
```

(If your shell splits paths containing spaces, run pnpm yourself: `pnpm --dir "%USERPROFILE%\.dsh\profiles\web" add "link:D:/path/dsh-scifi-theme"`.)

## Compatibility 兼容性

- Token overrides target the `--dsw-alias-*` / `--dsw-specific-*` / `--dsw-static-*` scales (dsh `0.1.0-rc.x`). A few hardcoded colors inside future dsh versions may escape the theme.
- Effects (conic running light, `@property` angle animation) need a Chromium-based browser.
- Theme preference is stored per browser under the localStorage key `gamespace-ui-theme` (kept for seamless migration from the theme's origin inside dsh-gamespace).

## License

[MIT](LICENSE)
