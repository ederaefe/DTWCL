# Static Web Engineering Blueprint (Master Development Checklist)

This document is a comprehensive, step-by-step master checklist and template outlining the complete lifecycle for building a premium, high-performance, and search-optimized static web application. Use this blueprint as a template whenever creating similar modern web platforms.

---

## 📋 Phase 1: Pre-Development, Planning & Design Handoff
- [ ] **Define Project Specifications & Requirements (PRD):**
  - [ ] Write a Product Requirements Document (PRD) detailing scope, features, target demographics, and success metrics.
  - [ ] Set up user personas and map user flows (e.g., from search click -> landing page -> form intake).
- [ ] **Establish UI/UX Design System:**
  - [ ] Review high-fidelity wireframes and mockups (Figma, Adobe XD, Sketch).
  - [ ] Audit design assets for color accessibility (ensuring high contrast ratios) and typography consistency.
  - [ ] Define the component library interface inventory (buttons, cards, inputs, navigation, overlays).
- [ ] **Conduct Content & SEO Architecture Scoping:**
  - [ ] Plan page hierarchy, navigation menu groupings, and directory structures.
  - [ ] Create an organic keyword strategy document containing high-volume, low-competition search phrases.
  - [ ] Draft high-quality page copywriting focusing on user-engagement hooks and clarity.

---

## 🛠️ Phase 2: Project Initialization, Repository Setup & Coding Standards
- [ ] **Configure Git Repository & Branching Strategy:**
  - [ ] Initialize git tracking (`git init`) and map branch tracking (`main`).
  - [ ] Set up repository branching models (Git-Flow: `main` for production, `develop` for integration, `feature/` for tasks, `hotfix/` for live patches).
  - [ ] Configure a detailed `.gitignore` file to prevent committing local secrets, packages, node modules, and system files.
- [ ] **Establish Developer Tooling & Linting:**
  - [ ] Initialize `package.json` for managing dev dependencies and automated scripts.
  - [ ] Configure code style rules with **ESLint** (JS parsing syntax) and **Prettier** (formatting rules).
  - [ ] Set up **Husky** and **lint-staged** to run pre-commit hooks (validating formatting and syntax before allowing commits).
  - [ ] Adopt **Conventional Commits** formatting standards (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`).
- [ ] **Structure Directories & Baseline Files:**
  - [ ] Create baseline assets folders: `/assets` (video, images, svg, icons), `/api` (for serverless hooks), `/data` (local databases).
  - [ ] Create baseline document anchors: `index.html`, `about.html`, `services.html`, `contact.html`, `updates.html`, `updater.html`.

---

## 🎨 Phase 3: Master Design System & Typography (Vanilla CSS)
- [ ] **Define Global Design System Tokens (`:root`):**
  - [ ] Set up a curated brand color palette: Primary (brand color), Secondary (accent gold), Neutral (onyx, ash, graphite).
  - [ ] Declare semantic color mappings for theme consistency: text, background, cards, boundaries, and highlights.
  - [ ] Set global border rules: strict geometric corners (`border-radius: 0px` for brutalist styling, or rounded variables for components).
  - [ ] Define shadow layers (`--shadow-sm`, `--shadow-md`, `--shadow-lg`) representing depth elevation.
  - [ ] Calibrate micro-transition speeds: fast (`0.2s`), normal (`0.35s`), and slow (`0.6s`) with customized cubic-bezier ease curves.
- [ ] **Setup Global Typography & Resets:**
  - [ ] Import premium, modern web fonts (e.g., Space Grotesk, Gravitas One, Inter, Outfit) using Google Fonts `@import`.
  - [ ] Define standard font families, line heights, and letter spacing across headings (`h1` through `h6`) and body elements.
  - [ ] Apply a global layout reset (`box-sizing: border-box`, `margin: 0`, `padding: 0`).
  - [ ] Configure a smooth scrolling behavior (`scroll-behavior: smooth`).

---

## 🏗️ Phase 4: Page Layouts & Component Development
- [ ] **Design Header & Global Navigation:**
  - [ ] Set up a fixed top header layout with a transparent glassmorphism blur backdrop (`backdrop-filter: blur(12px)`).
  - [ ] Create a responsive navigation bar including logo vector integration and text anchors.
  - [ ] Develop a mobile drawer overlay (hamburger menu button and sliding panel).
- [ ] **Design Hero Section (Background Media & Text Layering):**
  - [ ] Implement a full-screen or section-fit absolute hero video background.
  - [ ] Layer text headings, descriptive copy, and call-to-action (CTA) buttons on top of the media.
- [ ] **Structure Content Layouts & Cards:**
  - [ ] Design feature cards with subtle grid outlines and hover scaling micro-animations.
  - [ ] Set up split layouts (alternating text and image sections) with rigid alignment.
  - [ ] Design a structured FAQ accordion with expandable answer heights (`max-height` CSS transitions).
- [ ] **Develop Global Footer:**
  - [ ] Layout brand columns, contact detail anchors, and social link symbols.
  - [ ] Include copyright notices and intake status badges.

---

## 🔄 Phase 5: Single-Page Application (SPA) Routing Engine
- [ ] **Build the JavaScript Router (`script.js`):**
  - [ ] Cache primary HTML layouts in local variables or separate files on initial load.
  - [ ] Set up an interceptor mapping on `document.body` click events to capture anchor `href` navigations.
  - [ ] Parse target routes dynamically and execute an asynchronous transitions system (`navigate(route, pushState)`).
  - [ ] Replace active content in the main wrapper (`#app-content`) without reloading the page.
- [ ] **Implement Browser History Tracking:**
  - [ ] Push state parameters (`history.pushState`) to browser history for seamless Back/Forward navigations.
  - [ ] Add event listeners to window popstate events (`window.addEventListener('popstate')`) to re-trigger routing animations.
  - [ ] Resolve direct link visits and path queries (converting `/services` queries to SPA-rendered states).
- [ ] **Establish Route Synchronization hooks:**
  - [ ] Synchronize active navigation link highlights during page navigation.
  - [ ] Synchronize document title parameters (`document.title`) dynamically per route.
  - [ ] Automatically re-execute page-specific scripts (FAQs, video playback controls, slider init hooks) when routing occurs.

---

## ⚡ Phase 6: Scroll Reveal Animations & Micro-Interactivity
- [ ] **Implement Scroll-Observer Animations:**
  - [ ] Write CSS animation entry classes (`.animate`, `.fade-in`, `.fade-left`, `.fade-right`).
  - [ ] Set up initial hidden offsets: `opacity: 0`, `transform: translateY(20px)` or translations for left/right directions.
  - [ ] Create a global JavaScript Scroll Reveal engine using `IntersectionObserver` configurations.
  - [ ] Programmatically add active visible states (`.visible`) when sections intersect the viewport.
- [ ] **Develop Interactive Components:**
  - [ ] Code custom select/dropdown menus to override raw HTML `<select>` fields with branded spans, custom option listings, and smooth slide-down containers.
  - [ ] Bind "click outside" listeners to close active custom menus automatically.
  - [ ] Add subtle scale transforms (`transform: scale(1.02)`) and light glow effects to CTA buttons on user hover.

---

## 🎬 Phase 7: Multimedia Assets & Video Player Debugging
- [ ] **Configure HTML5 Video Settings:**
  - [ ] Define core attributes: `autoplay`, `muted`, `loop`, `playsinline`.
  - [ ] Avoid fake/renamed asset containers (e.g. renaming `.mp4` to `.webm` without transcoding) to prevent browser decoder crashes.
  - [ ] Provide clear fallback sources within `<video>` tags: relative source (`assets/hero.mp4`) + high-speed CDN source (e.g. `cdn.jsdelivr.net/gh/...`).
  - [ ] Strip out absolute paths (`/assets/hero.mp4`) that resolve to the hard drive root when testing locally.
  - [ ] Remove broken Git LFS URLs if LFS is not set up in the repository attributes.
- [ ] **Setup Local Testing Server:**
  - [ ] Avoid testing media folders via direct double-click (`file://` protocol) to bypass Chrome CORS and `net::ERR_CACHE_OPERATION_NOT_SUPPORTED` restrictions.
  - [ ] Run a local HTTP dev server (`npx serve`, Python `http.server`, or Live Server) to support HTTP range headers required for video buffering.

---

## 🔍 Phase 8: Advanced SEO Metadata & Dublin Core Rules
- [ ] **Implement Page Header Descriptions & Keywords:**
  - [ ] Create a unique, descriptive page title (`<title>`) mapping core brand adjectives.
  - [ ] Write a search description meta tag containing key local regions and primary services (under 160 characters).
  - [ ] Compile a comprehensive search keyword index targeting organic candidate search habits.
- [ ] **Integrate Dublin Core Standards (Scholarly Search Optimization):**
  - [ ] Add `dcterms.title` and `dcterms.creator` tags.
  - [ ] Add `dcterms.description` and `dcterms.subject` tags.
  - [ ] Add `dcterms.publisher` and `dcterms.type` tags.
  - [ ] Add `dcterms.language` (e.g., `en`) and `dcterms.coverage` (location settings).
- [ ] **Integrate Business Classification & Search Queries:**
  - [ ] Add `classification`, `category`, and `industry` tags mapping business focus.
  - [ ] Add `target` and `rating` meta elements.
  - [ ] Add `search-terms` and `search-phrases` tags containing long-tail organic search strings.
- [ ] **Integrate OpenGraph & Twitter/X Social Cards:**
  - [ ] Declare OpenGraph namespace tags (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`).
  - [ ] Declare Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
  - [ ] Add structured labels and data values (`twitter:label1`, `twitter:data1`) indicating status metrics.

---

## 📊 Phase 9: Structured Schema Markup (JSON-LD)
- [ ] **Author the Parent Entity Schema Graph:**
  - [ ] Create a `<script type="application/ld+json">` tag containing a structured `@graph`.
  - [ ] Define the organization entity (`@type: "Organization"`, `@id: ".../#parent-org"`).
  - [ ] Map brand details: name, URL, logo image, business descriptions.
  - [ ] Add a `"slogan"` string and `"award"` array representing key corporate recognitions.
  - [ ] Declare a `"sameAs"` array linking all verified social media profiles (YouTube, Facebook, Twitter, LinkedIn).
  - [ ] Structure address metrics (`@type: "PostalAddress"`) containing street, city, state, postal code, and country code.
  - [ ] Add spatial coordinates (`@type: "GeoCoordinates"`) containing latitude and longitude.

---

## 🤖 Phase 10: AI Crawler Directives (robots.txt & llms.txt)
- [ ] **Establish Crawl Permissions (`robots.txt`):**
  - [ ] Declare standard directives (`User-agent: *`, `Allow: /`, `Disallow: /api/`).
  - [ ] Add specific mapping and permission sets for modern AI crawlers: `OAI-SearchBot`, `Applebot-Extended`, `Claude-Web`, `Meta-ExternalAgent`.
  - [ ] Link the XML sitemap (`Sitemap: https://yourdomain.com/sitemap.xml`).
- [ ] **Establish AI LLM plain-text database (`llms.txt`):**
  - [ ] Define the file structure: H1 header, H2 primary sections, and bullet points.
  - [ ] Write a high-level summary of the business, its prominent attributes, and target audience.
  - [ ] Detail core operational metrics: placements, subscribers, and software downloads.
  - [ ] Detail services, operational locations, pedagogical philosophy, and academic equivalencies.
  - [ ] Provide explicit permissions instructions for RAG systems and scraping agents.
  - [ ] Remove promotional terms ("No. 1", "prestigious") to maintain dry factual tone for LLMs.

---

## ♿ Phase 11: Web Accessibility Compliance (a11y - WCAG 2.1 AA)
- [ ] **Setup Semantic Landmarks:**
  - [ ] Wrap page structures in semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<aside>`.
  - [ ] Ensure only a single `<h1>` tag exists on the page representing the core page topic.
- [ ] **Implement Keyboard Navigability & Visual Focus:**
  - [ ] Verify tab indices: All interactive elements must be focusable using keyboard `TAB` cycles.
  - [ ] Apply clear focus indicators using CSS `:focus-visible` outlines (never completely suppress focus outlines without a visible alternative).
- [ ] **Add ARIA States & Alternate Descriptions:**
  - [ ] Provide `alt` text parameters on all `<img>` assets; use empty alt tags (`alt=""`) on decorative-only icons.
  - [ ] Bind ARIA descriptors to custom dropdown controls and navigation triggers (`aria-expanded`, `aria-label`, `aria-controls`).
  - [ ] Configure screen reader accessibility helpers (`aria-live="polite"`) on form success messages and dynamic updates.

---

## 📈 Phase 12: Performance Auditing & Asset Optimization
- [ ] **Optimize Asset Media Compression:**
  - [ ] Compress SVG vectors (remove unnecessary paths and editor metadata using **SVGO**).
  - [ ] Optimize images to modern formats (WebP, AVIF) and compress them using tools like Squoosh or TinyPNG.
  - [ ] Run video compression passes on backgrounds using **FFmpeg** to minimize file sizes (ensuring backgrounds stay below 2MB).
- [ ] **Optimize Core Web Vitals:**
  - [ ] Add explicit width and height dimensions to all images and video tags to prevent **Cumulative Layout Shift (CLS)**.
  - [ ] Configure CSS loading fonts with `font-display: swap` to bypass FOIT (Flash of Invisible Text) blocks.
  - [ ] Minify CSS styles and Javascript scripts.
- [ ] **Perform Lighthouse Audits:**
  - [ ] Execute Google Lighthouse audits under simulated mobile viewport constraints.
  - [ ] Verify scores achieve **90+** targets across all parameters: Performance, Accessibility, Best Practices, and SEO.

---

## 🛡️ Phase 13: Security Best Practices & Web Headers
- [ ] **Configure Host Security Headers (`vercel.json` or server config):**
  - [ ] Set X-Frame-Options (`DENY` or `SAMEORIGIN`) to block clickjacking attacks.
  - [ ] Configure X-Content-Type-Options (`nosniff`) to block MIME sniffing exploits.
  - [ ] Define X-XSS-Protection rules.
  - [ ] Implement a strict **Referrer-Policy** (e.g. `strict-origin-when-cross-origin`).
- [ ] **Secure SSL Certificates & Canonical Redirects:**
  - [ ] Enforce automated HTTPS redirection.
  - [ ] Configure domain canonical mapping (redirecting all non-www inquiries to www domains, or vice versa, to eliminate split search equity).
  - [ ] Implement Subresource Integrity (SRI) hashes on all external CSS frameworks or scripts fetched via third-party CDNs.

---

## 💬 Phase 14: Chatbot-Style Pre-Registration Widget
- [ ] **Build Widget HTML & CSS:**
  - [ ] Insert widget containers at the bottom of the body.
  - [ ] Design the floating button as a circle (`border-radius: 50%`) with a brand background and custom SVG icon.
  - [ ] Add a micro-pulse keyframe ring animation (`::after` element) that scales out continuously.
  - [ ] Create a popup text bubble with a white background (`#ffffff`), dark text, a gold border, and overlapping arrow pointer.
- [ ] **Write Interaction Scripting:**
  - [ ] Set up a delayed popup transition (sliding/fading the speech bubble into view after 2.5 seconds).
  - [ ] Add automatic close animation timeout to auto-hide the prompt bubble after 7 seconds.
  - [ ] Implement manual close button (`×`) click listener that clears the auto-close timeout.
  - [ ] Save interaction state in `sessionStorage` to prevent repeating popups in the same user session.

---

## 📨 Phase 15: Multi-Channel Form Submission & Resilience
- [ ] **Configure Parallel AJAX Submission Engine:**
  - [ ] Intercept form submissions via Javascript `e.preventDefault()`.
  - [ ] Package input data to a JSON object payload.
  - [ ] Create concurrent `fetch` requests targeting primary and backup endpoints:
    - [ ] Endpoint 1: Primary Formspree API.
    - [ ] Endpoint 2: Backup FormSubmit AJAX API for Gmail Account 1.
    - [ ] Endpoint 3: Backup FormSubmit AJAX API for Gmail Account 2.
  - [ ] Resolve all requests in parallel using `Promise.all`.
- [ ] **Establish Error Boundaries:**
  - [ ] Wrap backup endpoint promises in local `.catch()` handlers that log warnings to console.
  - [ ] Ensure that failures, activation flags, or rate limits on backup endpoints do not block primary form success.
- [ ] **Form Activation Flow:**
  - [ ] Submit a test payload on initial setup to trigger FormSubmit verification emails.
  - [ ] Log in to both Gmail accounts and click "Activate Form" links to authorize email delivery.

---

## 📊 Phase 16: GDPR/Consent Management & Analytics Hookups
- [ ] **Implement Cookie Consent Banner:**
  - [ ] Design a subtle, non-intrusive cookie consent banner mapping GDPR and CCPA guidelines.
  - [ ] Allow users to explicitly accept or reject non-essential cookies (analytics and advertising tracking).
  - [ ] Store user preferences in `localStorage` to prevent reappearance of banner on subsequent pages.
- [ ] **Hook Up Analytics Platforms:**
  - [ ] Configure **Google Analytics (GA4)** global site tags using Google Tag Manager hooks.
  - [ ] Set up **Microsoft Clarity** tracking keys for session recording heatmaps.
  - [ ] Programmatically wrap analytics tracking setups in checks that wait for cookie consent approval (respecting user privacy selections).

---

## 🚀 Phase 17: Release Pipeline, CI/CD, & Long-Term Maintenance
- [ ] **Setup Automated Deployment Pipelines:**
  - [ ] Connect the GitHub repository to the hosting platform (Vercel, Netlify, or AWS Amplify).
  - [ ] Configure CI/CD automated triggers (generating preview builds for every pull request branch and deploying to main production on merge).
  - [ ] Configure custom domain routing.
- [ ] **Run Code Verification Scripts:**
  - [ ] Write a validation script (`validate.js`) to parse files and test assertions.
  - [ ] Assert JSON-LD schema parsing, structural keys, sameAs arrays, and links.
  - [ ] Verify document title synchronization between scripts and HTML files.
  - [ ] Validate sitemap structure and robots.txt bot rules.
- [ ] **Implement Search Console & Webmaster Verifications:**
  - [ ] Add `google-site-verification` meta tags in `index.html`.
  - [ ] Add `msvalidate.01` meta tags for Bing Webmaster Tools in `index.html`.
  - [ ] Save Google Search Console/Workspace DNS validation records as a reference file `dns_verification_records.txt`.
  - [ ] Log in to the domain registrar DNS zone editor and configure the verification CNAME:
    *   **Type:** `CNAME`
    *   **Host/Label:** `<verification-code>`
    *   **Destination:** `gv-....dv.googlehosted.com`
- [ ] **Conduct Long-Term Maintenance:**
  - [ ] Schedule monthly automated dependency audits (`npm audit` or Dependabot configurations) to scan for vulnerabilities.
  - [ ] Monitor analytics dashboards for indexing errors, crawl blockages, and conversion drops.
  - [ ] Periodically execute visual regression checks to verify layout integrity across browser upgrades.
