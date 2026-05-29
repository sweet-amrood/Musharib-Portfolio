# Portfolio

A pixel-close clone of [gutierrez-cv.vercel.app](https://gutierrez-cv.vercel.app), built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Design match

- Dark sticky header with gradient dot + smooth scroll nav
- Hero: 3-column layout, character illustration, highlighted tagline, resume modal
- Purple → orange → yellow gradient accents (`#B265FF` → `#FF4400` → `#FFA100`)
- Toolbox: category pills, skill chips, side decorations
- Experience: gradient-bordered white cards with company logos
- Education: animated timeline with gradient line
- GitHub: gradient-bordered repo grid
- About: orange circle portrait, highlighted bio text
- Manrope typography, white page background

## Customize

Edit **`src/data/portfolio.ts`** for your name, links, skills, jobs, and education.

Replace images in **`public/images/`** (used site-wide via `src/lib/images.ts`):

- `profile.png` — hero backdrop + about portrait
- `corpo.png` — hero character overlay
- `compass.png`, `infonacci.png`, `vdv.png` — experience logos

Add **`public/resume.pdf`** for the download button.

Set `githubUsername` for live repo cards.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Push to GitHub and import on [Vercel](https://vercel.com/new). Optional: `GITHUB_TOKEN` in env for higher API limits.
