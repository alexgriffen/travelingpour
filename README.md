# Traveling Pour Bar — Website

Marketing website for Traveling Pour Bar, a mobile bar trailer rental business in the San Francisco Bay Area.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Icons:** Lucide React
- **Gallery Lightbox:** yet-another-react-lightbox
- **Deployment:** Vercel

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, testimonials, how it works, gallery, Instagram |
| `/our-story` | About the business |
| `/packages` | Package tiers and pricing |
| `/gallery` | Full photo gallery with lightbox |
| `/faq` | Accordion FAQ |
| `/contact` | Booking inquiry form |

## Content

All copy, testimonials, amenities, packages, and FAQ answers live in `lib/content.ts`. Edit that file to update any text without touching components.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no configuration needed
4. Set the custom domain `travelingpour.com` in Vercel's domain settings

## Environment Variables

No environment variables are required for v1. The contact form is frontend-only (shows a success message on submit but doesn't send data anywhere).

If you later wire the form to an email service, create `.env.local` and add:

```
# Formspree
NEXT_PUBLIC_FORMSPREE_ID=your_id_here

# or EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```
