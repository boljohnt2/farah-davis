# farahnicole.com

Farah Nicole's personal site: life coaching for parents, busy professionals and
business owners, plus the cooking show, the podcast and Pivot & Pop PR.

Built as a pixel-faithful Next.js implementation of the design mockup in
`Homepage-html.zip` (`Main.dc.html`). Every color, size, spacing value, radius,
animation and line of copy in `app/globals.css` and `components/` comes straight
from the mockup; the only change is that font families load through `next/font`
(self-hosted, same faces: Bodoni Moda + Outfit).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy on Vercel

The repo is a standard Next.js app at the root, so Vercel detects it with zero
configuration. The production branch is `main`; Vercel builds it automatically
on every push. `npm run build` is the build command.

Two project settings to check in the Vercel dashboard:

1. **Deployment Protection** (Settings → Deployment Protection). If Vercel
   Authentication is on, every visitor hits a "Protected Deployment" login
   wall. For a public site, set it to Disabled (or "Only protect preview
   deployments").
2. **Domains** (Settings → Domains). Use the exact domain Vercel lists there.
   The bare `farah-davis.vercel.app` name is not attached to this project; the
   team-scoped domain works. Add a custom domain (e.g. farahnicole.com) here
   when ready.

Optional environment variables (all have sensible defaults baked in):

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for Open Graph metadata | `http://localhost:3000` |
| `NEXT_PUBLIC_BOOKING_URL` | Target of every "Book my free 15 min" CTA | `https://www.pivotandpoppr.com/let-s-pop` |
| `NEXT_PUBLIC_INTRO_VIDEO_URL` | Hero intro video (mp4/webm in `public/` or any URL) | empty |
| `NEXT_PUBLIC_INTRO_VIDEO_RATIO` | Hero video frame on mobile: `4 / 5`, `16 / 9`, `9 / 16` | `4 / 5` |

## Swapping in real media

- **Hero intro video:** set `NEXT_PUBLIC_INTRO_VIDEO_URL` (e.g. `/assets/farah-intro.mp4`
  after dropping the file in `public/assets/`). While it is empty, the hero shows
  the poster frame with a play button, exactly as the mockup's placeholder state.
- **Cooking clips:** each clip in `lib/site.js` (`cookingClips`) has a `video`
  field. Fill it in and the reel's play button swaps the poster for the playing
  video. Posters are placeholders until then.
- **Testimonials:** the three quotes use `[Client name]` placeholders on purpose.
  Drop in real names and roles when Farah approves them.

## Structure

```
app/
  layout.jsx      # fonts (next/font/local), metadata
  page.jsx        # page composition
  globals.css     # the mockup stylesheet, values kept verbatim
  fonts/          # Bodoni Moda + Outfit woff2 (self-hosted)
components/       # Hero, Ticker, Coaching, About, Quote, Proof, BookCta,
                  # More, Kitchen (client), Footer
lib/site.js       # booking URL, hero video config, cooking clip list
public/assets/    # images from the design
```

`Homepage-html.zip` is the design reference and stays in the repo untouched.
