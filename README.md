# Akshay Harwalkar — Creative Developer Portfolio

An immersive, accessible portfolio for Akshay Harwalkar, a Master of Computer Science student at the University of Sydney. The experience is organised around the concept **“Signals beneath the surface”**: visible interfaces sit above deeper evidence, data, decisions and human review.

## Technology stack

- React 19 and Vite 8
- Three.js, loaded through a lazy route chunk for the Signal Core only
- Hash-based route views compatible with static hosts and browser Back
- Modern CSS with native scrolling and responsive art direction
- Locally packaged Manrope and DM Sans webfonts
- Locally hosted responsive WebP project artwork
- SVG/CSS code-native icons, grids, signal lines, noise and social artwork

The site has no backend, analytics, runtime third-party scripts, browser-side API calls or application secrets.

## Local development

```bash
npm install
npm run dev
```

Quality and production checks:

```bash
npm run lint
npm run build
npm audit --omit=dev
npm run preview
```

## Experience architecture

- `#/` — immersive home and interactive project index
- `#/project/komply-risk-monitor`
- `#/project/world-cup-prediction`
- `#/project/soup-queue-chaos`
- `#/project/foot-ulcer-detection`
- `#/profile` — identity, education and technical index
- `#/contact` — verified contact channels and copy-email action

Hash routes allow every view to load directly on GitHub Pages and Netlify without server rewrites. All important project information exists as semantic HTML outside WebGL.

## Signal Core

The home view lazily imports a restrained Three.js experience. It uses a deforming low-density icosahedral surface, evidence points and a project-change pulse. Generated artwork appears behind the translucent surface while shader pattern and colour balance respond to project selection.

The renderer:

- clamps device pixel ratio to 2;
- reduces geometry on small screens;
- pauses offscreen and while the document is hidden;
- responds only to normal pointer input;
- has no post-processing or runtime textures;
- disposes geometry, materials, renderer and context on unmount;
- falls back to a CSS signal form when WebGL is unavailable;
- renders a static form for reduced motion.

## Content and assets

- Verified project/profile data: `src/data/portfolio.js`
- Route composition: `src/App.jsx`, `src/views/`
- Signal Core and interaction components: `src/components/`
- Responsive/system styling: `src/App.css`, `src/index.css`
- Optimised generated artwork: `public/images/`
- Preserved generated PNG sources: `docs/art-sources/`
- Exact final artwork prompts and asset policy: `docs/art-direction.md`
- SEO, social metadata and Person JSON-LD: `index.html`

Generated images are explicitly identified as conceptual artwork rather than application screenshots. They contain no project metrics, product UI, official FIFA marks, medical claims or legal claims.

## Portrait workflow

The profile uses Akshay's original public profile photograph. The untouched source is preserved at `public/images/akshay-portrait-source.jpg`; responsive 480 px, 800 px and 1200 px WebP derivatives are served through a native `picture` element. Styling is limited to restrained browser-side colour treatment and cropping. No generative face alteration is used.

## Deployment compatibility

The default Vite build uses `/akshay-portfolio/` for GitHub Pages:

`https://akshay9192.github.io/akshay-portfolio/`

The included workflow lints, builds and deploys `dist` on pushes to `main`. `netlify.toml` overrides the build base to `/` for Netlify. No source change is needed between hosts.

## Accessibility and motion

The site includes a skip link, semantic landmarks, logical headings, visible focus, 44 px touch targets, keyboard project navigation, touch-specific two-step selection, Escape handling, browser Back support, safe external links, descriptive image alternatives and static project content outside WebGL. Reduced motion removes route animation, loader motion and WebGL deformation.

Native scrolling is preserved; there is no scroll-jacking or endless accessibility-tree duplication.

## Security

This is a static public portfolio with no authentication, database, form submission or sensitive-data collection. External new-tab links use `rel="noopener noreferrer"`; contact actions use the verified `mailto:` and `tel:` targets.

Netlify applies the response headers in `public/_headers`, including CSP, HSTS, anti-framing, MIME-sniffing, referrer, permissions and opener policies. GitHub Pages cannot apply repository-defined response headers, so `index.html` carries the CSP subset supported by a meta policy. Scripts, fonts and runtime images are self-hosted; `unsafe-eval`, mixed content and external runtime scripts are not allowed.

The inline-style exception supports project-specific CSS custom properties only. No untrusted HTML is injected. Production source maps are not emitted.
