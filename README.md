# Akshay Harwalkar — Creative Developer Portfolio

A production-ready single-page portfolio for Akshay Harwalkar, a Master of Computer Science student at the University of Sydney. The site presents responsible AI, data, machine-learning and full-stack projects through a clear dark editorial interface.

## Technology stack

- React 19 and Vite 8
- Three.js, lazily loaded for the decorative hero Signal Core
- Hash-based project and homepage-section routes for static hosting
- Locally hosted Manrope and DM Sans fonts
- Locally hosted responsive WebP project artwork
- CSS/SVG fallbacks for mobile, reduced motion and unavailable WebGL

The site has no backend, analytics, runtime third-party scripts, browser-side API calls or application secrets.

## Local development

```bash
npm install
npm run dev
```

Quality and production checks:

```bash
npm.cmd run lint
npm.cmd run build
npm.cmd audit --omit=dev
npm.cmd run preview
```

## Experience architecture

- `#/` — homepage hero
- `#/work` — selected work section
- `#/about` — profile, education and technology section
- `#/contact` — contact section
- `#/project/sentinel-llm`
- `#/project/world-cup-prediction`
- `#/project/soup-queue-chaos`
- `#/project/foot-ulcer-detection`

The legacy `#/profile` route is normalised to `#/about`. The existing `#/contact` link now opens the homepage contact section. Detailed case studies remain separate routes, and browser Back returns to the previous homepage section.

## Signal Core

The Signal Core is the site's single signature visual. It is decorative and appears only in the hero. The renderer:

- runs only on non-mobile, fine-pointer devices;
- uses slow, restrained movement and subtle pointer response;
- caps device pixel ratio at 2;
- pauses outside the viewport and while the document is hidden;
- disables WebGL under reduced motion;
- uses a static CSS fallback on mobile and without WebGL;
- disposes geometry, materials, the renderer and WebGL context on unmount.

All project content remains semantic HTML and never depends on WebGL.

## Content and artwork

- Verified project/profile data: `src/data/portfolio.js`
- Homepage composition: `src/views/HomeView.jsx`
- Case studies: `src/views/CaseStudyView.jsx`
- Responsive styling: `src/App.css`, `src/index.css`
- Optimised generated artwork: `public/images/`
- Preserved generated PNG sources: `docs/art-sources/`
- Artwork prompts and policy: `docs/art-direction.md`
- SEO and Person JSON-LD: `index.html`

Generated images are explicitly identified as conceptual artwork rather than application screenshots. They contain no project metrics, product UI, official FIFA marks, medical claims or legal claims.

## Medium portrait source

The portrait was retrieved from the public RSS author image for `https://medium.com/@akshay.harwalkar183`, whose channel identifies the author as Akshay Harwalkar. The RSS image ID exposed a 1200 × 1600 JPEG source through Medium's public image CDN.

- Metadata-stripped source: `public/images/akshay-portrait-source.jpeg`
- Responsive formats: 320 px, 640 px and 960 px AVIF/WebP
- Native fallback dimensions: 1200 × 1600

The source orientation is corrected and EXIF/location metadata is removed. The portrait is not generated or cosmetically altered; presentation uses only conservative colour treatment and responsive cropping.

## Deployment compatibility

The default Vite build uses `/akshay-portfolio/` for GitHub Pages:

`https://akshay9192.github.io/akshay-portfolio/`

The included GitHub Actions workflow lints, builds and deploys `dist` on pushes to `main`. `netlify.toml` overrides the build base to `/` for Netlify. No source change is needed between hosts.

## Accessibility and motion

The site includes a skip link, semantic landmarks, logical headings, visible focus, 44 px touch targets, direct project links, an accessible mobile menu with Escape handling and focus restoration, browser Back support, safe external links and reduced-motion/forced-colours modes.

There is no scroll-jacking, wheel interception, forced horizontal scrolling, artificial loading delay or hover-only project information.

## Security

This is a static public portfolio with no authentication, database, form submission or sensitive-data collection. External new-tab links use `rel="noopener noreferrer"`; contact actions use verified `mailto:` and `tel:` targets.

Netlify applies the response headers in `public/_headers`, including CSP, HSTS, anti-framing, MIME-sniffing, referrer, permissions and opener policies. GitHub Pages cannot apply repository-defined response headers, so `index.html` carries the supported CSP subset as a meta policy. Scripts, fonts and runtime images are self-hosted; `unsafe-eval`, mixed content and external runtime scripts are not allowed. Production source maps are not emitted.
