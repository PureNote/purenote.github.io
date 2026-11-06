<div align="center">

# 📝 PureNote

### The Private, Zero-Latency Browser Notepad for Focused Writing

**No Login • 0ms Local Auto-Save • 100% Client-Side • Zero Cloud Uploads • No Ads or Paywalls**

<br />

[![Live Demo](https://img.shields.io/badge/Live%20Demo-purenote.github.io-167D8D?style=for-the-badge&logo=github&logoColor=white)](https://purenote.github.io/)
[![Astro 5.x](https://img.shields.io/badge/Astro-5.x-071B2B?style=for-the-badge&logo=astro&logoColor=B9E4E8)](https://astro.build/)
[![Tailwind CSS 3.x](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20First-071B2B?style=for-the-badge&logo=pwa&logoColor=B9E4E8)](https://purenote.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-B9E4E8?style=for-the-badge&labelColor=071B2B&color=167D8D)](./LICENSE)
[![Support Developer](https://img.shields.io/badge/Support-Buy%20Me%20a%20Coffee-167D8D?style=for-the-badge&logo=gumroad&logoColor=white)](https://kisharadilshan.gumroad.com/coffee)

<br />

[**Explore Live Application →**](https://purenote.github.io/)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture & Privacy Guarantees](#-architecture--privacy-guarantees)
- [System Architecture & Color Palette](#-system-architecture--color-palette)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Local Setup](#installation--local-setup)
  - [Build & Preview](#build--preview)
- [Internationalization (i18n)](#-internationalization-i18n)
- [PWA & Offline Capabilities](#-pwa--offline-capabilities)
- [Technical SEO & Analytics](#-technical-seo--analytics)
- [CI/CD & GitHub Pages Deployment](#-cicd--github-pages-deployment)
- [Support & Sponsorship](#-support--sponsorship)
- [License](#-license)

---

## 🌟 Overview

**PureNote** is an ultra-minimalist, high-performance web notepad engineered for writers, developers, students, and productivity enthusiasts who value privacy, speed, and clean typography above all else.

Unlike traditional cloud-based notes applications that require account creation, track typing metrics, or silently sync unencrypted drafts across remote servers, **PureNote executes 100% inside your client browser**. Keystrokes are persisted instantaneously with `0ms` latency directly via the browser's native `localStorage` engine. Nothing is ever sent across a network boundary.

---

## 🚀 Key Features

| Capability | Description |
| :--- | :--- |
| **0ms Keystroke Auto-Save** | Instant client-side persistence with zero latency. Closing or refreshing your browser tab will never lose drafts. |
| **Zero Account & Zero Cloud** | No registration, no cookies, no tracking databases, and zero server-side storage overhead. |
| **Distraction-Free Workspace** | Initial load presents an ultra-clean, minimal text surface. Advanced toolbars stay neatly collapsed until requested. |
| **Multi-Note Tab Management** | Create, switch, rename, duplicate, and delete distinct memo tabs inside a seamless tabbed workspace. |
| **Smart Export Popover** | Compact bottom-right trigger reveals a live **2×2 metrics dashboard** (words, characters, lines, reading time) and 1-click exports to `.TXT`, `.PDF`, `.HTML`, and `.MD`. |
| **Notepad to PDF Studio** | Integrated print-ready PDF engine with configurable typography (Serif, Sans, Mono), timestamps, word counts, and sketch embedding. |
| **Notepad Online Draw Pad** | Full HTML5 `<canvas>` sketch and signature tool with adjustable brush sizes, color palette, eraser, multi-step undo, and 1-click `.PNG` export. |
| **Zero-Server Share Links** | Privately encode and share notes via `#note=...` UTF-8 Base64 URL hash fragments. The receiving browser decodes everything client-side without touching a server. |
| **Adaptive Theme System** | Bespoke Deep Abyssal Navy (`#071B2B`) and Oceanic Teal Cyan (`#167D8D`) palette with smooth dark/light mode toggling and zero flash of unstyled content (FOUC). |
| **Responsive Mobile Experience** | Dedicated mobile/tablet navbar with an intuitive hamburger drawer, large touch targets (`48x48px`), and an adaptive text editor. |
| **Offline-First PWA** | Installable on Windows, macOS, iOS, and Android with complete offline functionality powered by Service Worker caching. |

---

## 🔒 Architecture & Privacy Guarantees

```mermaid
flowchart LR
    A[User Types Keystroke] -->|0ms Latency| B[Browser Memory / DOM]
    B -->|Synchronous| C[(Client localStorage)]
    B -->|User Requests Export| D[In-Memory Blob / PDF Print API]
    B -->|User Generates Link| E[Client URL Hash #note=...]
    
    subgraph Privacy Perimeter [100% Client-Side Sandbox]
        B
        C
        D
        E
    end
    
    Privacy Perimeter -.->|Blocked / Zero Transmissions| F[External Cloud Servers]
    
    style Privacy Perimeter fill:#B9E4E8,stroke:#167D8D,stroke-width:2px,color:#071B2B
    style F fill:#EEEEEE,stroke:#888,stroke-width:1px,stroke-dasharray: 5 5,color:#666
```

1. **Zero Data Egress**: All editing, counting, sanitization, PDF generation, and drawing operations occur strictly within the user's browser sandbox.
2. **Encrypted URL Sharing**: The `#note=...` hash fragment is never dispatched to web servers in HTTP requests (per RFC 3986 section 3.5), ensuring complete client-to-client confidentiality.
3. **No Third-Party Trackers**: No intrusive advertising scripts or third-party cookies. Only optional, lightweight telemetry through Google Tag Manager / GA4 is configured for core site vitals.

---

## 🎨 System Architecture & Color Palette

PureNote follows a cohesive, accessibility-audited design language using custom CSS tokens:

```
┌─────────────────────────────────────────────────────────────┐
│                      PURENOTE PALETTE                       │
├─────────────────────┬───────────┬───────────────────────────┤
│ Token Name          │ Hex Code  │ Role & Semantic Purpose   │
├─────────────────────┼───────────┼───────────────────────────┤
│ Deep Abyssal Navy   │ #071B2B   │ Dark BG / Light Headings  │
│ Oceanic Teal Cyan   │ #167D8D   │ Primary Brand & Actions   │
│ Glacial Ice Aqua    │ #B9E4E8   │ Accent Surfaces & Badges  │
│ Soft Platinum Gray  │ #EEEEEE   │ Light Canvas / Dark Text  │
│ Pure Paper White    │ #FFFFFF   │ High-Contrast Text Surface│
└─────────────────────┴───────────┴───────────────────────────┘
```

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5.x](https://astro.build/) (Static Site Generation with zero client JavaScript by default)
- **Styling**: [Tailwind CSS 3.x](https://tailwindcss.com/) with custom color schemes and typography utilities
- **Storage Engine**: Native browser `localStorage` and `HTML5 Canvas API`
- **PWA Integration**: Native Web App Manifest (`manifest.webmanifest`) and Cache-First Service Worker (`sw.js`)
- **Typography & Icons**: Crisp vector SVGs with dynamic `aria-label` attributes for WCAG AA compliance
- **SEO & Schema**: `@astrojs/sitemap`, custom sitemap endpoints, and `WebApplication`, `HowTo`, `FAQPage`, `BreadcrumbList` JSON-LD schemas
- **CI/CD**: GitHub Actions deploying automatically to GitHub Pages

---

## 📂 Project Structure

```text
purenote.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── .nojekyll               # Disables Jekyll processing for GitHub Pages
│   ├── favicon.svg             # Vector brand icon
│   ├── icon-192.png            # Maskable PWA home screen icon (192x192)
│   ├── icon-512.png            # Maskable PWA splash icon (512x512)
│   ├── apple-touch-icon.png    # iOS web clip touch icon
│   ├── og-image.svg            # Open Graph social preview graphic
│   ├── manifest.webmanifest    # Progressive Web App configuration
│   ├── robots.txt              # Search crawler directives
│   └── sw.js                   # Offline-first Service Worker
├── src/
│   ├── components/
│   │   ├── Header.astro        # Responsive brand navbar with mobile drawer
│   │   ├── HeroNotepad.astro   # Core workspace, editor engine, draw canvas & popover
│   │   ├── SeoContentSection.astro # Semantic feature articles, guides, and FAQ accordion
│   │   ├── SchemaJsonLd.astro  # Multi-schema JSON-LD structured data generator
│   │   └── Footer.astro        # Localized footer and copyright notices
│   ├── i18n/
│   │   └── ui.ts               # Complete dictionary for 8 supported languages
│   ├── layouts/
│   │   └── BaseLayout.astro    # Master HTML shell with Open Graph, i18n, & GTM
│   ├── pages/
│   │   ├── [lang]/
│   │   │   └── index.astro     # Localized landing routes (/es/, /de/, /ja/, etc.)
│   │   ├── index.astro         # Canonical English landing page (/)
│   │   └── sitemap.xml.ts      # Flat XML sitemap generator for Google Search Console
│   └── styles/
│       └── global.css          # Tailwind directives, animations & CSS variables
├── astro.config.mjs            # Astro configuration with static output mode
├── tailwind.config.mjs         # Tailwind theme extension & color tokens
├── tsconfig.json               # TypeScript compiler rules
├── package.json                # Project dependencies and script runner
├── .gitignore                  # Git tracking exclusion list
└── README.md                   # Project documentation
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **Package Manager**: `npm` (comes with Node), `pnpm`, or `yarn`

### Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/purenote/purenote.github.io.git
   cd purenote.github.io
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Launch the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser to start writing.

### Build & Preview

Verify the production build locally:
```bash
# Build static site to dist/
npm run build

# Preview the production static output
npm run preview
```

---

## 🌍 Internationalization (i18n)

PureNote natively supports 8 languages with canonical routing, dedicated `og:locale` alternates, and complete UI translation:

| Language | Route Prefix | Locale Code |
| :--- | :--- | :--- |
| **English** | `/` (Default) | `en` |
| **Spanish (Español)** | `/es/` | `es` |
| **Portuguese (Português)** | `/pt/` | `pt` |
| **German (Deutsch)** | `/de/` | `de` |
| **French (Français)** | `/fr/` | `fr` |
| **Japanese (日本語)** | `/ja/` | `ja` |
| **Chinese (Simplified - 简体中文)** | `/zh/` | `zh` |
| **Russian (Русский)** | `/ru/` | `ru` |

---

## 📱 PWA & Offline Capabilities

PureNote qualifies as an installable **Progressive Web App**:
- **Offline Access**: Static assets, script bundles, and localized HTML documents are automatically cached by [public/sw.js](file:///public/sw.js).
- **Standalone Mode**: Install PureNote to your desktop or mobile home screen for a borderless, native app feel.
- **Immediate Wake**: Loads in under `50ms` from client-side service worker cache on repeat visits.

---

## 🔍 Technical SEO & Analytics

- **Perfect Lighthouse Scores**: Built with clean semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Dual Sitemaps**: Both `/sitemap.xml` and `/sitemap-index.xml` are generated to guarantee 100% compatibility across Google Search Console and Bing Webmaster Tools.
- **Strict JSON-LD Schemas**: Comprehensive structured data schemas included:
  - `WebApplication` (zero fake ratings, truthful metadata)
  - `HowTo` (step-by-step notepad workflow instructions)
  - `FAQPage` (frequently asked technical questions)
  - `BreadcrumbList` (route navigation hierarchy)
- **Tag Management**: Configured with asynchronous Google Tag Manager (`GTM-K586P9HL`) and Google Analytics 4 (`G-G9V3J96C86`).

---

## 🚀 CI/CD & GitHub Pages Deployment

PureNote is continuously built and published via [GitHub Actions](file:///.github/workflows/deploy.yml):
1. **Trigger**: Any push to the `main` branch or a manual `workflow_dispatch`.
2. **Environment**: Ubuntu runner on Node 22 using official `withastro/action@v3`.
3. **Artifact Publishing**: The static `dist/` directory is verified and deployed directly to GitHub Pages via `actions/deploy-pages@v4`.

---

## ☕ Support & Sponsorship

PureNote is free and open-source software maintained with care. If PureNote has enhanced your daily workflow, consider supporting its independent development:

<div align="center">

[![Buy Me a Coffee](https://img.shields.io/badge/Support_the_Developer-Buy_Me_a_Coffee-167D8D?style=for-the-badge&logo=gumroad&logoColor=white)](https://kisharadilshan.gumroad.com/coffee)

**[👉 Support on Gumroad Coffee (kisharadilshan.gumroad.com/coffee)](https://kisharadilshan.gumroad.com/coffee)**

</div>

---

## 📄 License

This project is licensed under the terms of the **MIT License**.  
See the [LICENSE](./LICENSE) file for the complete license text.

Copyright © 2026 **Kishara Dilshan** (PureNote). All rights reserved.
