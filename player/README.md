# Patient Concierge Player

Live Remotion player that renders the Patient Concierge composition in the
browser. Designed to be embedded in Webflow via an `<iframe>`.

## Why a separate app?

The composition under `../src` is authored for Remotion Studio (WYSIWYG + MP4
rendering). This folder wraps the same composition with `@remotion/player` and
builds a tiny static site you can host anywhere. Any edits to the composition
automatically propagate — this app imports it directly from `../src`.

## Local dev

```sh
npm install
npm run dev
```

Opens `http://localhost:5173` with transparent background.

## Build

```sh
npm run build
```

Outputs `dist/` — a static bundle (index.html + ~140 KB gzipped JS).
Deploy this folder to any static host.

## Deploy to Cloudflare Pages (recommended — free, commercial use OK)

1. Push this repo to your company GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Pick the repo.
4. Build settings:
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `player`
5. Deploy. You'll get `https://your-project.pages.dev`.

## Deploy to Vercel (alternative)

1. Push to GitHub.
2. [vercel.com/new](https://vercel.com/new) → import the repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Root directory:** `player`
4. Deploy.

> Note: Vercel's free Hobby tier is for non-commercial use. Upgrade to Pro
> ($20/user/month) for commercial sites, or use Cloudflare Pages.

## Embed in Webflow

Drop an **Embed** element into your hero section:

```html
<iframe
  src="https://your-project.pages.dev"
  style="border: 0; width: 100%; height: 100%; background: transparent;"
  allow="autoplay"
  loading="lazy"
  title="Patient Concierge demo"
></iframe>
```

The iframe size drives how large the player renders — the composition is
820×900 native but scales to any container.

## Aspect ratio reminder

The composition is 820×900 (roughly square, portrait-leaning). To preserve the
aspect ratio in Webflow, wrap the iframe in a box with `aspect-ratio: 820/900`
or set explicit width/height.
