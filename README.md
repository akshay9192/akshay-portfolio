# Akshay Harwalkar — Personal Portfolio

A responsive personal portfolio for Akshay Harwalkar, a Master of Computer
Science student at the University of Sydney. The site presents selected
projects, technical focus areas, skills, education and public contact links in
an accessible editorial/technical design.

## Technology stack

- React 19
- Vite 8
- Modern CSS (Grid, Flexbox, custom properties and responsive layouts)
- Locally packaged Manrope and DM Sans webfonts
- Inline SVG icons
- Netlify-ready static configuration

No backend, browser-side API calls, API keys or third-party statistics services
are used.

## Local development

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

Run quality checks:

```bash
npm run lint
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Content and assets

- Profile, navigation, project and skills data:
  `src/data/portfolio.js`
- Page composition: `src/App.jsx`
- Reusable navigation, hero, project, skills and editorial components:
  `src/components/`
- Pointer and magnetic interaction hooks: `src/hooks/useMotion.js`
- Component and responsive styling: `src/App.css`
- Global theme and accessibility defaults: `src/index.css`
- Existing pixel emblem: `src/assets/akshay-emblem.png`
- SEO, social metadata and Person JSON-LD: `index.html`
- Favicon and social sharing artwork: `public/`

The site uses the packaged abstract emblem automatically and does not present
it as a portrait. A verified personal portrait can be art-directed separately
in a future pass. Optional project artwork is
currently missing, so the project studies use deliberate CSS/SVG compositions
and make no failing image requests. Future verified artwork can be wired into
responsive `<picture>` elements at:

```text
public/images/project-komply.webp
public/images/project-fifa.webp
public/images/project-soup.webp
public/images/project-foot-ulcer.webp
public/images/technology-constellation.webp
```

Keep the current CSS studies as loading/failure fallbacks, and provide AVIF and
WebP sources at several useful widths with explicit dimensions and meaningful
alternative text.

### Adding the résumé

Place the public PDF at:

```text
public/Akshay_Harwalkar_Resume.pdf
```

Then update the clearly marked résumé block in `src/App.jsx`: replace the
disabled button with an anchor whose `href` is
`${import.meta.env.BASE_URL}Akshay_Harwalkar_Resume.pdf`. This avoids shipping
a broken download link before the file is available and keeps the path correct
under the GitHub Pages project subdirectory.

## GitHub Pages deployment

The Vite build uses `/akshay-portfolio/` as its production base path for:

`https://akshay9192.github.io/akshay-portfolio/`

The included GitHub Actions workflow lints, builds and publishes `dist`
whenever it is run manually or changes are pushed to `main`.

In the repository’s **Settings → Pages**, select **GitHub Actions** as the
source. No API keys or repository secrets are required.

## Accessibility

The site includes semantic landmarks and headings, a skip link, visible focus
styles, accessible navigation state, keyboard-operable controls, descriptive
image alternative text and a reduced-motion mode. Colour combinations use a
warm editorial palette with high-contrast dark project and contact sections.
Motion is progressively enhanced with IntersectionObserver, pointer input and
CSS, and reduces to a static layout when `prefers-reduced-motion` is enabled.

## Security

### Threat model

This is a static, public portfolio. It has no backend, authentication, account
state, database, analytics, form submission or sensitive-data collection. The
main risks are compromised dependencies or deployment credentials, unsafe
external navigation, accidental publication of private content, and browser
injection if future third-party code is added.

All external links opened in a new tab use `rel="noopener noreferrer"`. The
contact action is a direct `mailto:` link and does not pretend to submit or
store a message. Public profile links and the contact email are intentional;
no street address, private phone number, API key or client secret belongs in
the repository or built bundle.

### Headers and hosting limitations

Netlify reads `public/_headers` from the build output and can enforce the CSP,
HSTS, clickjacking, MIME-sniffing, referrer, permissions and opener policies
defined there. Hashed assets receive long immutable caching; HTML remains
conservatively cached. `netlify.toml` builds the site at `/`, while the default
Vite build retains the `/akshay-portfolio/` base required by GitHub Pages.

GitHub Pages does **not** support arbitrary project-defined response headers
and does not consume `_headers`. The CSP meta element in `index.html` provides
the supported CSP subset on GitHub Pages, but cannot provide HSTS,
`X-Content-Type-Options`, `X-Frame-Options`, `Permissions-Policy`, COOP, or the
CSP `frame-ancestors` directive. Netlify is therefore the stronger of the two
preserved deployment paths when enforceable response headers are required.

The CSP keeps scripts self-hosted and does not allow `unsafe-eval`. Inline
styles remain allowed because the fine-pointer magnetic and evidence-field
interactions update CSS custom properties through element style attributes;
this exception is limited to `style-src` and does not weaken `script-src`.
All fonts, scripts and runtime images are local, and the site makes no intended
runtime network requests.

### Dependency maintenance and reporting

Use `npm audit --omit=dev` to distinguish production exposure, then run
`npm audit`, `npm outdated`, `npm run lint` and `npm run build` before accepting
updates. Prefer reviewed, lockfile-preserving compatible upgrades; do not use
`npm audit fix --force` without separately reviewing breaking changes.

To report a portfolio-specific vulnerability, email
`akshay.harwalkar183@gmail.com` with a concise reproduction and avoid including
sensitive data. There is no security bounty or private disclosure backend.
