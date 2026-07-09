# Mtech Cube — Website

A Next.js 14 (App Router) marketing site for Mtech Cube — built on a
black-and-white foundation with a single gold accent, following the brand
strategy in `mtech-cube-brand-strategy.md`.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — custom design tokens (see `tailwind.config.ts`)
- **lucide-react** — icon set
- Fonts loaded via `next/font/google`: Space Grotesk (display), Inter (body), IBM Plex Mono (labels/data)

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx             Homepage
  services/
    page.tsx           Services hub
    [slug]/page.tsx     Individual service pages (5, data-driven)
  work/
    page.tsx           Case study grid
    [slug]/page.tsx     Individual case studies (3, data-driven)
  about/page.tsx
  contact/page.tsx
  privacy/page.tsx      Placeholder — replace before launch
  terms/page.tsx        Placeholder — replace before launch
  sitemap.ts / robots.ts
  icon.tsx              Generated favicon
components/             Nav, Footer, Cube (signature element), section components
lib/data.ts             All content: services, case studies, testimonials, process steps
```

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying to Vercel

**Option A — via GitHub (recommended):**
1. Push this project to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. You'll get a free `*.vercel.app` subdomain immediately; add a custom domain later under **Project Settings → Domains**.

**Option B — via Vercel CLI:**
```bash
npm install -g vercel
vercel
```
Follow the prompts. Running `vercel --prod` deploys to production.

## Before going live — checklist

- [ ] Replace placeholder content in `app/privacy/page.tsx` and `app/terms/page.tsx` with real, legally-reviewed policies
- [ ] Replace placeholder email/phone in `components/Footer.tsx` and `app/contact/page.tsx` with real contact details
- [ ] Wire the contact form (`app/contact/page.tsx`) to a real submission handler — e.g. a Next.js API route, Formspree, or Resend — it currently renders but does not submit anywhere
- [ ] Replace case studies and testimonials in `lib/data.ts` with real, permissioned client content
- [ ] Set `metadataBase` in `app/layout.tsx` and URLs in `app/sitemap.ts` / `app/robots.ts` to your real production domain
- [ ] Add real Open Graph image (`app/opengraph-image.tsx` or a static asset)
- [ ] Connect an analytics tool if desired (Vercel Analytics is a one-click add from the Vercel dashboard)

## Editing content

Nearly all copy — services, case studies, testimonials, process steps,
differentiators — lives in a single file: **`lib/data.ts`**. Edit that file
to update site content without touching page layout code.
