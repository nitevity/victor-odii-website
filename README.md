# Victor C. Odii — Personal Website

Professional positioning website for Victor C. Odii, built with Next.js 15, Tailwind CSS, Framer Motion, and deployed to Cloudflare Pages.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 1. How to Add Photos

Photos are stored in `/public/images/`. Until you add them, the site shows an elegant "VO" placeholder that looks intentional.

**Steps:**

1. Navigate to the `public/images/` folder in this project
2. Drop in your photos using these exact filenames:

| Photo | Filename | Dimensions | Used on |
|---|---|---|---|
| Homepage hero | `victor-hero.jpg` | 600 x 800px (portrait) | Homepage hero section |
| About page | `victor-about.jpg` | 800 x 600px | About page, left column |
| Blog author | `victor-blog.jpg` | 400 x 400px (square) | Blog post author block |

3. Refresh the browser — photos appear automatically. No code changes needed.

**Format note:** JPG is recommended. PNG and WebP also work, but update the filename extension in `config/photos.ts` if you use a different format.

---

## 2. How to Replace the CV Download

The CV download button links to `/public/downloads/Victor_Odii_CV_2026.pdf`.

**Steps:**

1. Export your CV as a PDF
2. Rename the file to exactly: `Victor_Odii_CV_2026.pdf`
3. Place it in the `public/downloads/` folder
4. The download button on the About page will work immediately

To use a different filename, update the `href` in `app/about/page.tsx` (search for `Victor_Odii_CV_2026.pdf`).

---

## 3. How to Add a New Blog Post

Blog posts are MDX files stored in `/content/blog/`.

**Steps:**

1. Create a new file in `content/blog/` with a URL-friendly name, e.g.:
   `content/blog/my-post-title.mdx`

2. Copy and fill in this frontmatter at the top of the file:

```
---
title: "Your Post Title Here"
date: "2026-03-15"
excerpt: "A 1-2 sentence summary that appears in post cards and meta tags."
tags: ["EU Programmes", "Development Finance", "PMO & Governance", "Field Notes"]
readingTime: "5 min read"
---

Your post content starts here. Use standard Markdown formatting.

## Section heading

Normal paragraph text here.

> Blockquote for emphasis

- Bullet list item
- Another item
```

3. Save the file. The post appears immediately in development mode.
   After deployment it will appear on the live site automatically.

**Available filter tags:** `EU Programmes` | `Development Finance` | `PMO & Governance` | `Field Notes`

---

## 4. How to Deploy to Cloudflare Pages

This site is configured for Cloudflare Pages deployment. Since victorodii.com is already on Cloudflare, domain connection is automatic.

### One-time setup via Cloudflare Dashboard

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/victor-odii-website.git
   git push -u origin main
   ```

2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Pages** → **Create a project**

3. Connect your GitHub repository

4. Set the build configuration:
   | Setting | Value |
   |---|---|
   | Framework preset | None (do not select Next.js) |
   | Build command | `npx @cloudflare/next-on-pages` |
   | Build output directory | `.vercel/output/static` |

5. Add environment variables under **Settings → Environment Variables**:
   | Variable | Value | Environment |
   |---|---|---|
   | `NODE_VERSION` | `20` | Production + Preview |
   | `NEXT_PUBLIC_SITE_URL` | `https://victorodii.com` | Production |
   | `NEXT_PUBLIC_FORMSPREE_ID` | `your_formspree_id` | Production + Preview |

6. Click **Deploy**

7. Go to **Pages → Custom Domains → Add `victorodii.com`** — Cloudflare detects your domain automatically and configures DNS.

### Automatic deployments

Every `git push` to `main` triggers a new deployment automatically. Every PR gets its own preview URL at `https://abc123.victor-odii-website.pages.dev`.

### GitHub Actions (optional alternative)

If you prefer GitHub Actions over the Cloudflare dashboard integration, a workflow is preconfigured at `.github/workflows/deploy.yml`. Add these secrets to your GitHub repository:
- `CLOUDFLARE_API_TOKEN` — create at dash.cloudflare.com → My Profile → API Tokens
- `CLOUDFLARE_ACCOUNT_ID` — found at dash.cloudflare.com → right sidebar

---

## 5. How to Set Up the Contact Form

The contact form uses [Formspree](https://formspree.io) — free, no backend required.

**Steps:**

1. Create a free account at [formspree.io](https://formspree.io)
2. Click **"New Form"** and complete the setup (takes 2 minutes)
3. Copy your Form ID — it looks like `xrgvkpqd`
4. Open `app/contact/ContactForm.tsx` and find line 6:
   ```ts
   const FORMSPREE_ID = 'YOUR_FORM_ID'
   ```
   Replace `YOUR_FORM_ID` with your actual Form ID:
   ```ts
   const FORMSPREE_ID = 'xrgvkpqd'
   ```
5. Save and redeploy (push to GitHub → Cloudflare deploys automatically)

**Without Formspree:** The form automatically falls back to opening the user's email client with a pre-filled message. This works with zero setup.

---

## Project Structure

```
app/                    Pages (Next.js App Router)
  page.tsx              Homepage
  about/                About page
  experience/           Career timeline
  projects/             Case studies
  blog/                 Blog index + individual posts
  contact/              Contact page with form

components/
  layout/               Navbar, Footer
  ui/                   Reusable UI components
  sections/             Homepage sections
  blog/                 Blog-specific components

content/blog/           MDX blog posts (add posts here)
config/photos.ts        Image path configuration
lib/blog.ts             Blog utilities (runs at build time)
lib/utils.ts            Shared utility functions
public/
  images/               Add photos here
  downloads/            Add CV PDF here
wrangler.toml           Cloudflare Pages configuration
next.config.js          Next.js + Cloudflare adapter config
```

---

## Tech Stack

- **Next.js 15** (App Router, TypeScript, Edge Runtime)
- **Cloudflare Pages** (deployment, edge runtime via `@cloudflare/next-on-pages`)
- **Tailwind CSS** (fully custom — no component libraries)
- **Framer Motion** (subtle professional animations)
- **MDX** via `next-mdx-remote` (blog posts, parsed at build time)
- **Lucide React** (icons)
- **Google Fonts** — Inter (body) + Playfair Display (headings)
- **Formspree** (contact form, free tier)

---

## Color Reference

| Name | Hex | Usage |
|---|---|---|
| Navy | `#0A2342` | Hero, nav, footer, headings |
| Gold | `#C9A84C` | CTAs, accents, highlights |
| Ivory | `#F8F6F1` | Alternating section backgrounds |
| Mid Grey | `#6B7280` | Body text, secondary content |
| Light Grey | `#E5E7EB` | Borders, dividers |
| Success Green | `#1A6B4A` | Availability signals |
