# SVADURA — Premium D2C Website

A luxury, production-ready D2C website for SVADURA, a premium wellness food
brand, built with Next.js 15 (App Router), React 19, TypeScript and
Tailwind CSS.

## Tech Stack

- Next.js 15 / React 19 / TypeScript
- Tailwind CSS
- Framer Motion (reveals, page micro-interactions, magnetic buttons)
- Lenis (smooth scroll — loaded dynamically, degrades gracefully)
- React Hook Form + Zod (contact form validation)
- Lucide Icons

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project Structure

```
app/
  page.tsx                 Home
  about/page.tsx            About
  products/page.tsx         Product listing (with collection filters)
  products/[slug]/page.tsx  Dynamic product detail page
  investor/page.tsx         Investor relations
  contact/page.tsx          Contact (form, WhatsApp, email, map placeholder)
  privacy-policy/page.tsx
  terms/page.tsx
  return-refund/page.tsx
  thank-you/page.tsx
  not-found.tsx              Custom 404
  sitemap.ts                 Dynamic sitemap
  robots.ts                  robots.txt
  globals.css

components/
  Header.tsx                Sticky glass header, mega menu, search, mobile drawer
  Footer.tsx                Luxury footer with newsletter
  WhatsAppButton.tsx        Floating WhatsApp CTA
  ChatbotWidget.tsx         Floating lead-capture chatbot (localStorage-backed)
  BackToTop.tsx
  ProductGallery.tsx        Hover magnifier + fullscreen viewer + thumbnails
  ContactForm.tsx           Zod-validated contact form
  ProductDetailClient.tsx   Full product page UI
  ProductsPageClient.tsx    Filterable product grid
  LegalLayout.tsx           Shared layout for policy pages
  MagneticButton.tsx
  Reveal.tsx                Scroll-reveal wrapper
  home/                     Homepage sections (hero, showcase, collections, etc.)

data/
  products.ts               All product content — transcribed verbatim from
                             the uploaded packaging (fronts & backs).
```

## Content Source

All product names, taglines, descriptions, nutrition tables, ingredients,
allergens and FSSAI details in `data/products.ts` were transcribed directly
from the uploaded packet front/back images — nothing was invented or
shortened.

## Missing Assets

The following were referenced in the brief but not included in the uploads,
so they were not fabricated:

- A standalone logo file (the SVADURA wordmark is currently rendered as
  styled text in the header/footer — drop a logo file into `/public/images/`
  and swap it in `components/Header.tsx` / `Footer.tsx` once available).
- Lifestyle photography (people/context shots). The hero and section
  backgrounds currently use the product packaging itself plus a generated
  floral line-pattern echoing the packaging's own artwork.
- Written About/Investor/policy copy — the current copy is placeholder-free
  but brand-authored draft text; swap in official copy when ready.

## Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Import the repo at https://vercel.com/new.
3. Framework preset: Next.js (auto-detected). No environment variables are
   required for the current feature set.
4. Deploy — Vercel will build and host automatically on every push.

To connect the contact form and chatbot to a real backend, replace the
marked integration points in `components/ContactForm.tsx` and
`components/ChatbotWidget.tsx` with API calls to your endpoint of choice
(e.g. a Vercel serverless function, Formspree, or your CRM's API).
