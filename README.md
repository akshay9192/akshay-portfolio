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
- Page components and inline icons: `src/App.jsx`
- Component and responsive styling: `src/App.css`
- Global theme and accessibility defaults: `src/index.css`
- Profile image: `src/assets/akshay-avatar.jpg`
- SEO, social metadata and Person JSON-LD: `index.html`
- Favicon and social sharing artwork: `public/`

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
image alternative text and a reduced-motion mode. Colour combinations were
chosen for strong contrast on the dark navy theme.
