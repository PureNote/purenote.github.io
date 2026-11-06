# PureNote — Free Online Notepad (No Login, Auto-Save & Zero Upload)

[![Live Demo](https://img.shields.io/badge/Live_Demo-purenote.github.io-167D8D?style=for-the-badge&logo=github)](https://purenote.github.io/)
[![Astro 5.x](https://img.shields.io/badge/Astro-5.x-071B2B?style=for-the-badge&logo=astro&logoColor=B9E4E8)](https://astro.build/)
[![License: MIT](https://img.shields.io/badge/License-MIT-B9E4E8?style=for-the-badge&labelColor=071B2B)](./LICENSE)
[![Support the Developer](https://img.shields.io/badge/Support_Developer-Buy_Me_a_Coffee-167D8D?style=for-the-badge&logo=gumroad&logoColor=white)](https://kisharadilshan.gumroad.com/coffee)

**PureNote** ([https://purenote.github.io/](https://purenote.github.io/)) is a **100% Client-Side Online Notepad** engineered with **0ms Local Auto-Save, Live Word Counter, Multi-Note Tabs, HTML5 Draw/Sketch Pad, and 1-Click TXT / HTML / Markdown / PDF Export — Zero Ads, Zero Login, and Zero Cloud Upload**.

Every keystroke stays strictly inside your browser's local storage (`localStorage`), delivering instant startup, complete offline capability via Progressive Web App (PWA) caching, and uncompromising user privacy.

---

## Key Features

- **Zero Cloud Uploads (100% Local Browser Auto-Save)**: Every keystroke is persisted with `0ms` latency directly in `localStorage`. No accounts, no databases, and zero server transmission.
- **Multi-Tab Note Management**: Create, rename, duplicate, switch, and organize multiple concurrent notes inside a distraction-free `100dvh` first-fold workspace.
- **1-Click TXT / HTML / MD / PDF Export**: Download clean `.TXT`, `.HTML`, or `.MD` files immediately, or launch the built-in **Notepad to PDF Studio** with custom typography, line numbers, timestamps, and attached sketches.
- **Live Word & Character Counter + Text Tools**: Real-time word, character, line, and reading time counters paired with 1-click case conversion (`UPPERCASE`, `lowercase`, `Title Case`, `Sentence case`), line sorting, deduplication, and Find & Replace.
- **Quick Sketch / Notepad Online Draw Pad**: Integrated HTML5 `<canvas>` drawing pad with pen, eraser, color swatches, adjustable brush size, multi-step undo, local auto-save, and `.PNG` export.
- **Zero-Server `#note=...` Link Sharing**: Share notes privately via UTF-8 URL-safe Base64 hash fragments (`#note=...`) decoded entirely in the recipient's browser.
- **8-Language Internationalization (i18n)**: Complete native localization across English (`/`), Spanish (`/es/`), Portuguese (`/pt/`), German (`/de/`), French (`/fr/`), Japanese (`/ja/`), Chinese (`/zh/`), and Russian (`/ru/`).
- **Adaptive Light & Dark Theme**: High-contrast Deep Abyssal Navy (`#071B2B`) and Oceanic Teal Cyan (`#167D8D`) theme system with zero-FOUC initialization and an ultra-minimal icon-only mobile navbar (`48x48px` touch targets).
- **Offline-Ready PWA**: Installable via `manifest.webmanifest` and offline-first `sw.js` Service Worker caching.

---

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Astro 5.x](https://astro.build/) (`output: 'static'`) | Zero-JS-by-default static HTML generation & Islands Architecture |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Variables | Semantic Light/Dark palette tokens & responsive `100dvh` first-fold layout |
| **Client Storage & Engine** | `localStorage`, HTML5 `<canvas>`, `Blob` & Print APIs | 0ms multi-tab auto-save, sketch pad, and client-side `.TXT`/`.HTML`/`.MD`/`PDF` generation |
| **Offline & PWA** | Web App Manifest + Service Worker (`/sw.js`) | Offline-first caching for all 8 localized routes and static assets |
| **SEO & Sitemaps** | Custom `/sitemap.xml` API route + `@astrojs/sitemap` + JSON-LD | Dual GSC sitemap compatibility (`sitemap.xml` & `sitemap-index.xml`) + `WebApplication`, `HowTo`, `FAQPage`, `BreadcrumbList` schemas |
| **Analytics** | Google Tag Manager (`GTM-K586P9HL`) + GA4 (`G-G9V3J96C86`) | Lightweight asynchronous telemetry inside `<head>` |
| **CI/CD** | GitHub Actions (`withastro/action@v3` + `actions/deploy-pages@v4`) | Automated Node 22 build and deployment to GitHub Pages |

---

## Color Palette Specification

| Token Name | Hex Code | Role in Light Mode (Default) | Role in Dark Mode |
| :--- | :--- | :--- | :--- |
| **Deep Abyssal Navy** | `#071B2B` | Primary Text, Hover States & Brand Contrast | Primary Page Background (`--bg-primary`) |
| **Oceanic Teal Cyan** | `#167D8D` | Primary Action Buttons, Borders & Secondary Text | Secondary Accent Surface, Badges & Borders |
| **Glacial Ice Aqua** | `#B9E4E8` | Surface Cards, Mode Pills & Focus Glow | Primary Action Buttons & Secondary Text |
| **Soft Platinum Gray** | `#EEEEEE` | Primary Page Background (`--bg-primary`) | Primary Text (`--text-primary`) |
| **Pure Paper White** | `#FFFFFF` | Interactive Notepad Box Div Background | High-Contrast Button Text & Canvas Surface |

---

## Quick Start & Deployment

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/purenote/purenote.github.io.git
cd purenote.github.io
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

Open `http://localhost:4321/` in your browser to test the interactive notepad, multi-tab storage, sketch pad, and all 8 language routes (`/es/`, `/pt/`, `/de/`, `/fr/`, `/ja/`, `/zh/`, `/ru/`).

### 3. Build for Production

```bash
npm run build
npm run preview
```

This generates the static production bundle inside `dist/`, including both `dist/sitemap.xml` and `dist/sitemap-index.xml`, `dist/sw.js`, `dist/manifest.webmanifest`, and `dist/.nojekyll`.

### 4. Automated GitHub Pages Deployment

Pushing to the `main` branch automatically triggers [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml):
1. Checks out the repository and ensures `public/.nojekyll` is present.
2. Runs `withastro/action@v3` on Node 22 to build the static `dist/` output.
3. Publishes the artifact to GitHub Pages via `actions/deploy-pages@v4`.

---

## Support the Developer

If **PureNote** saves you time and helps you write distraction-free, consider supporting its ongoing open-source development:

**[☕ Support the Developer on Gumroad Coffee](https://kisharadilshan.gumroad.com/coffee)**

---

## License

Released under the **MIT License**. See the [LICENSE](./LICENSE) file for full details.
Copyright © 2026 Kishara Dilshan (PureNote).
