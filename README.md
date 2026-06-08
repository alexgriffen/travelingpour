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

The contact form delivers booking inquiries by email via [Resend](https://resend.com) and a Next.js Server Action (`app/contact/actions.ts`). Copy `.env.example` to `.env.local` and fill in:

```
RESEND_API_KEY=re_...
INQUIRY_TO_EMAIL=hello@travelingpour.com
INQUIRY_FROM_EMAIL=Traveling Pour Bar <inquiries@travelingpour.com>
```

### Setting up Resend

1. Create a free account at [resend.com](https://resend.com) and grab an **API key**.
2. **Verify your domain:** Resend dashboard → Domains → Add `travelingpour.com`. Resend gives you a set of DNS records (SPF, DKIM, and a return-path). Add them at your domain registrar's DNS settings, then click Verify.
3. Set `INQUIRY_FROM_EMAIL` to an address on the verified domain (e.g. `inquiries@travelingpour.com`).
4. Add all three variables in **Vercel → Project → Settings → Environment Variables**, then redeploy.

**Before the domain is verified** you can test immediately by setting `INQUIRY_FROM_EMAIL="Traveling Pour Bar <onboarding@resend.dev>"` — note Resend's test sender can only deliver to the email address that owns the Resend account.

The recipient inbox (`INQUIRY_TO_EMAIL`) can be any address you check — it doesn't need to be on the verified domain.
