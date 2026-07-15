# DTW Consult — Strategic Educational & Career Portal

A high-performance, mobile-first, zero-dependency static website for **DTW Consult** (Destined To Win). 

---

## 1. Design & Performance Philosophy

This site is built as a clean-sheet static multi-page project. By removing all compilation environments (Node.js, React, Vite, TypeScript), the site loads instantaneously on mobile devices and avoids the thread-blocking lag common in Single Page Applications (SPAs).

- **Performance**: Zero dependencies. Clean vanilla HTML5, CSS3, and ES6 JavaScript.
- **Aesthetic**: Mitered, geometric, and sharp layout profiles (strict `0px` border-radiuses).
- **Typography**: Fluid `clamp()` headers utilizing Google Fonts' *Inter* and *Space Grotesk*.
- **Animations**: 20 fast, lightweight CSS-only micro-animations. No JavaScript physics engines.
- **Mobile-First**: Fully responsive down to `375px` screens.

---

## 2. File Architecture

```
dtw-consult-landing-page/
├── index.html          # Home portal (overview, services preview, journey, FAQ)
├── about.html          # About page (hero video slot, history, values, leadership)
├── services.html       # Services page (8 primary service modules + equivalency table)
├── contact.html        # Contact desk (directories, map, Formspree intake)
├── style.css           # Central stylesheet (layouts, custom variables, animations)
├── script.js           # Interactive script (mobile nav, scroll reveals, FAQ toggles)
├── favicon.svg         # Minimalist premium "D" monogram logo
├── robots.txt          # Explicit AI scraper and search crawler directions
├── sitemap.xml         # XML sitemap for search engines
├── llms.txt            # Plain-text site summary for AI system context ingestion
└── assets/
    ├── hero.mp4        # About page hero background video (Pending upload)
    ├── CEO.jpg         # Blessing Seun Chukwuka profile image (Active)
    ├── HOA.jpg         # David Imoisili profile image (Pending upload)
    ├── COO.jpg         # Chidi Stephen Praise profile image (Pending upload)
    └── CMO.jpg         # Toyin Adewunmi profile image (Pending upload)
```

---

## 3. Core Integrations & Analytics

The site has the following production hooks configured:
- **Intake Form**: Formspree endpoint `mzdnzael` integrated on `contact.html` (intercepted by `script.js` for an in-place success animation).
- **Session Recording**: Microsoft Clarity (`xmgo4l74yr`) loaded via `<head>` tracking blocks.
- **Traffic Analytics**: Google Analytics 4 (`G-CRPPHLYPBS`) loaded via `<head>`.
- **Search Metadata**: Full Schema.org JSON-LD structural graphs integrated on `index.html` headers mapping all 8 services and 4 leadership profiles.

---

## 4. Visual Keyframes & Micro-Animations

The design includes 20 specific micro-animations that can be applied to elements:
- `.animate`: Base class for scroll reveals. Adds a viewport entry fade-up transition.
- `.animate.fade-left` / `.animate.fade-right`: Views entry slides from left or right.
- `.visible`: Applied dynamically by JavaScript's `IntersectionObserver` when elements enter the screen.
- `.nav-link`: Triggers slide-in underline animations on hover.
- `.service-card`: Triggers a lift transform and transitions the service number to goldenrod on hover.
- `.team-card`: Triggers a border-color shift and scales the profile image inside by `1.04` on hover.
- `.whatsapp-float`: Features an infinite pulsing ripple ring animation to encourage user engagement.

---

## 5. Deployment Guidelines

Because this is a pure static site, there is no build step or package installation required.

### Option A: GitHub Pages
1. Push the code to your GitHub repository: `https://github.com/ederaefe/DTWCL`.
2. Go to **Settings** > **Pages** in your repository.
3. Set the build source to **Deploy from a branch** and select `main` (root `/`).
4. Save. Your site will be live at your custom domain or GitHub Pages subdomain.

### Option B: Netlify / Vercel
- Connect the GitHub repository directly. Leave the "Build command" and "Output directory" fields empty. The platforms will detect the static HTML files and serve them instantly.
