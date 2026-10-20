# Localrankly-vercel

React + Vite LocalRankly website migration.

## 🎯 PROJECT OVERVIEW

Build a production-ready, multi-page SEO agency website for **LocalRankly** — a Local SEO agency serving small businesses in Dhaka, Bangladesh.

**Primary Goals:**
1. Rank on Google for keywords like "local SEO agency Dhaka", "Google Maps SEO Bangladesh"
2. Generate leads via free SEO audit popup and contact form
3. Monetize traffic via Google AdSense, Adsterra, and Monetag ad networks
4. Provide free tools that attract organic traffic and backlinks

---

## 🚀 Setup

```bash
npm install
npm run dev
```

## 📦 Build

```bash
npm run build
```

---

## 🌐 TECH REQUIREMENTS

- **Framework:** Plain HTML/CSS/JS (or Next.js for SSR/SEO benefits)
- **Hosting:** Hostinger (WordPress or static HTML)
- **Performance:** Lighthouse score 90+ on all metrics
- **Mobile:** Fully responsive (mobile-first design)
- **Page Speed:** Target < 2.5s LCP, < 0.1 CLS, < 200ms FID
- **Fonts:** Google Fonts via preconnect (not blocking render)
- **Images:** WebP format, lazy-loaded, with explicit width/height attributes
- **Core Web Vitals:** Fully optimized for Google's Page Experience signals

---

## 📄 REQUIRED PAGES

### 1. Homepage (`/`)
**SEO Meta Title:** `LocalRankly — Local SEO Expert for Small Business in Dhaka, Bangladesh`
**Meta Description:** `LocalRankly is Dhaka's #1 Local SEO agency helping small businesses rank on Google Maps and local search. Get a free SEO audit today.`

**Sections (in order):**
- **Hero** — H1 tag: *"Local SEO Expert for Small Business in Dhaka, Bangladesh"*; subheading; 2 CTAs: "Get Free Audit" + "View Case Studies"; social proof (100+ clients, 4.9★)
- **Services Overview** — 6 service cards with icons, titles, descriptions
- **Pricing Plans** — 3 cards: Starter ($99), Growth ($199), Pro ($349); feature lists; CTA: "Get Free Audit"
- **Case Studies** — 3 featured case studies with before/after Google Maps rankings
- **Free Tools Preview** — 3 tool cards linking to Tools page
- **Testimonials** — 3 verified client testimonials with star ratings
- **FAQ Section** — 5 questions; structured with FAQ schema markup
- **CTA Banner** — Full-width gradient; "Get Free Audit" button

### 2. Services Page (`/services`)
**SEO Meta Title:** `Local SEO Services & Pricing — LocalRankly Dhaka`
**Meta Description:** `Affordable Local SEO packages from $99/month. Google Business Profile optimization, citations, reviews & more for Dhaka businesses.`

**Sections:**
- Hero with headline and dual CTA
- 4-step process diagram
- Full pricing table (Starter/Growth/Pro) with detailed feature lists
- Service deep-dives: GBP Optimization, Citations, Reviews, Content, Link Building, Technical SEO
- Bottom CTA section

### 3. Portfolio (`/portfolio`)
**SEO Meta Title:** `Local SEO Case Studies & Results — LocalRankly`
**Meta Description:** `See how we helped 100+ Dhaka businesses rank #1 on Google Maps. Before & after results across restaurants, clinics, law firms, and more.`

**Content:** 4–6 case study cards, each including:
- Business type, location, industry
- Before/after Google Maps position (e.g., Page 8 → #1)
- Key results: % visibility increase, X× lead growth, review count
- Timeline (months to achieve results)

### 4. Tools Page (`/tools`)
**SEO Meta Title:** `Free SEO Tools — Link Shortener & QR Code Generator — LocalRankly`
**Meta Description:** `Free link shortener with custom alias, QR code generator, and click tracking. Built for marketers and local businesses in Bangladesh.`

**Tab 1 — Link Shortener + QR Code Generator:**
- URL input with validation
- Custom alias field
- Campaign tag field
- Shorten button → generates short URL (format: `lrkly.co/alias`)
- Result card with: short URL, copy button, QR code generator, share button
- QR Code: display 160×160px QR code via QRCode.js library
- Link dashboard table: Short URL | Original URL | Date | Clicks | Delete
- Stats row: Total Links Created | Total Clicks | Created Today

**Tab 2 — Free SEO Audit:**
- Form to request a manual audit
- Triggers popup/lead capture

**Tab 3 — Rank Checker:**
- Form to check keyword rankings
- Triggers popup/lead capture

**⚠️ Ad Compliance Note for Tools Page:**
- Place 1 display ad unit (300×250 or 728×90) above the tool fold
- Place 1 in-content ad unit between the tool and dashboard table
- Do NOT place ads inside the tool interface itself (violates policy)
- Label all ad containers with `<!-- Ad Unit: [position] -->`

### 5. Blog (`/blog`)
**SEO Meta Title:** `Local SEO Blog for Bangladesh Businesses — Tips, Guides & News`
**Meta Description:** `Actionable local SEO tips, Google Maps ranking guides, and case studies written by Dhaka's top SEO experts at LocalRankly.`

**Layout:**
- Blog listing: featured post + 6-card grid (2 columns)
- Sidebar: Table of Contents, Recent Posts, Tag Cloud, Audit CTA widget
- Individual post layout includes:
  - Featured image (1200×630px, WebP)
  - H1 title, author, date, read time
  - Table of contents (sticky on desktop)
  - Article body with H2/H3 hierarchy
  - FAQ section at bottom (with FAQ schema)
  - Internal links to at least 3 related posts
  - Bottom CTA for free audit

**Blog Post SEO Rules:**
- Every post must have unique meta title (under 60 chars) and description (under 160 chars)
- Use Article schema markup on all posts
- Add breadcrumb schema
- Include 1 target keyword in title, first 100 words, one H2, and meta description
- Image alt text must describe the image + include keyword where natural

**⚠️ Ad Compliance for Blog:**
- Maximum 3 ad units per page (AdSense policy)
- Place ads: (1) below header, (2) in-content after 3rd paragraph, (3) before footer
- NO ads in the first scroll viewport on mobile
- Use `data-ad-format="auto"` responsive ads

### 6. About Page (`/about`)
**SEO Meta Title:** `About LocalRankly — Dhaka's #1 Local SEO Agency`

**Sections:** Hero, Mission/Story, Team grid (3 members), Stats bar (100+ clients, 93% avg. boost, 4.9★ rating), Values

### 7. Contact Page (`/contact`)
**SEO Meta Title:** `Contact LocalRankly — Free SEO Consultation in Dhaka`

**Elements:**
- Contact info (address, phone/WhatsApp, email, hours)
- Lead capture form: Name, Phone, Email, Business Name, Service dropdown, Message
- Success message on submit
- WhatsApp CTA button (green)
- Google Maps embed (optional)

---

## 🎨 DESIGN SYSTEM

### Colors
```
Primary Blue:     #1D6FF2
Dark Blue:        #1455C5
Light Blue (bg):  #EBF1FF
Mid Blue:         #4D8FF5
Body Text:        #0F1628
Secondary Text:   #6B7593
Border/Line:      #E2E6F0
Background Alt:   #F8F9FC
White:            #FFFFFF
Success Green:    #12B76A
Warning Amber:    #F79009
Error Red:        #F04438
```

### Typography
```
Headings:  Plus Jakarta Sans (800, 700)
Body:      Plus Jakarta Sans (400, 500, 600)
Accent:    Instrument Serif (italic, for stylistic em elements)
```

### Spacing
- Section padding: 80px top/bottom
- Container max-width: 1160px
- Card border-radius: 12px (md), 20px (lg)
- Mobile section padding: 48px top/bottom

### Components
- **Cards:** white bg, 1.5px solid #E2E6F0 border, 12px radius, hover: translateY(-3px) + shadow
- **Buttons:** Primary (blue fill), Ghost (white + border), sizes: sm/md/lg/xl
- **Badges:** Pill shape, 100px radius, uppercase, bold
- **Inputs:** 1.5px border, focus ring: 3px rgba(29,111,242,.12)

---

## 🔍 ON-PAGE SEO REQUIREMENTS

### Every Page Must Have:
- [ ] Unique `<title>` tag (max 60 characters)
- [ ] Unique `<meta name="description">` (max 160 characters)
- [ ] `<meta name="robots" content="index, follow">`
- [ ] `<link rel="canonical">` pointing to the page's canonical URL
- [ ] Open Graph tags: `og:title`, `og:description`, `og:type`, `og:url`, `og:image`
- [ ] Twitter Card meta tags
- [ ] One H1 tag per page (contains primary keyword)
- [ ] Logical H2 → H3 → H4 hierarchy
- [ ] Internal links to at least 2 other pages
- [ ] Alt text on every image
- [ ] Fast-loading (no render-blocking JS in `<head>`)
- [ ] Deferred or async non-critical scripts

### Schema Markup (JSON-LD):
- **Homepage:** `LocalBusiness` schema with name, address, phone, coordinates, hours, priceRange
- **Blog Posts:** `Article` schema with headline, author, datePublished, image
- **FAQ Sections:** `FAQPage` schema for all Q&A sections
- **Breadcrumbs:** `BreadcrumbList` schema on all inner pages
- **Services:** `Service` schema on Services page

### Target Keywords:
```
Primary:    local SEO Dhaka, local SEO agency Bangladesh
Secondary:  Google Maps SEO Dhaka, Google Business Profile Bangladesh
           rank on Google Maps Dhaka, local SEO services Bangladesh
Long-tail:  how to rank on Google Maps in Dhaka
           best local SEO company in Bangladesh
           Google Maps ranking improvement Dhaka
```

### URL Structure:
```
/                     Homepage
/services             Services & Pricing
/portfolio            Case Studies
/tools                Free Tools
/blog                 Blog Index
/blog/[slug]          Individual Blog Post
/about                About
/contact              Contact
/sitemap.xml          XML Sitemap (auto-generated)
/robots.txt           Robots file
```

---

## 💰 AD NETWORK COMPLIANCE

### Google AdSense Requirements:
- [ ] All content is original, valuable, and human-readable
- [ ] Privacy Policy page exists and is linked in footer
- [ ] Site has sufficient content (minimum 20 pages including blog posts)
- [ ] No misleading navigation or deceptive layout
- [ ] Ads clearly separated from content (never labeled as "content")
- [ ] Maximum 3 display ad units per page
- [ ] No ads on pages with minimal content (thank you pages, 404s)
- [ ] Do NOT place ads next to images in a way that could be confused as image ads
- [ ] All images are copyright-free or originally created

### Adsterra Requirements:
- [ ] Site must be active for 30+ days before applying
- [ ] Traffic source must be legitimate (no paid traffic for application)
- [ ] Content must not include adult, gambling, or hate content
- [ ] No cloaking or hidden pages
- [ ] Minimum 1,000 monthly visitors recommended for approval
- [ ] Pop-under ads: use Adsterra's native script only, 1 per session max
- [ ] Social Bar ads: place in non-obstructive positions (bottom of screen)

### Monetag Requirements:
- [ ] Clean, navigable website with real content
- [ ] No malware, no misleading download buttons
- [ ] Push notification code: add to `<head>` only (do not modify)
- [ ] Interstitial/pop ads: maximum frequency of 1 per 2 page views

### Universal Ad Placement Rules (All Networks):
```
Allowed positions:
✅ Above content header (728×90 leaderboard)
✅ In-content after 3rd paragraph
✅ Right sidebar (300×600 or 300×250)
✅ Before footer (728×90 or 320×50 mobile)

Prohibited:
❌ Ads in navigation bar or header
❌ Ads overlapping content
❌ Ads labeled as "Recommended" or "Sponsored" without network disclosure
❌ More than 3 display ads per page
❌ Ads that auto-play audio
❌ Ads in popup/modal overlays
❌ Ads within 100px of another ad unit
```

### Privacy & Legal Pages Required:
- `/privacy-policy` — GDPR/cookie policy, ad disclosure, data usage
- `/terms-of-service` — Service terms, disclaimers
- Cookie consent banner (required for EU traffic and AdSense)
- Ad disclosure in footer: *"This site contains advertising"*

---

## 🛠️ FUNCTIONAL FEATURES

### Lead Generation System:
1. **Exit-intent / Timed Popup:**
   - Trigger: 8 seconds after page load (or exit intent)
   - Offer: "Get Your Free Local SEO Audit"
   - Fields: Business Name, Name, WhatsApp, Website
   - Success: confirmation alert + close popup
   - Cookie: set `auditPopupShown=true` for 7 days after dismiss

2. **Contact Form:**
   - Fields: Name*, Phone/WhatsApp*, Email*, Business Name, Service dropdown, Message
   - Validation: required field check before submit
   - Success state: inline green confirmation message
   - Integration: connect to EmailJS, Formspree, or WhatsApp API

3. **WhatsApp Floating Button:**
   - Fixed bottom-right position (bottom: 28px, right: 28px)
   - Green (#25D366), 56×56px circle, white WhatsApp SVG icon
   - Pre-filled message: "Hi, I need help with Local SEO for my business in Dhaka."
   - Link: `https://wa.me/[YOUR_NUMBER]?text=[encoded_message]`

### Link Shortener Tool:
- URL validation (must start with https://)
- Custom alias input (alphanumeric, max 30 chars)
- Short URL format: `https://lrkly.co/[alias]`
- QR code generation via QRCode.js CDN library
- Copy-to-clipboard with visual confirmation toast
- Link dashboard with localStorage persistence
- Click counter (simulated UI; real tracking requires backend)
- Delete link functionality

---

## 📱 MOBILE OPTIMIZATION

- Hamburger menu replacing nav links below 860px
- Touch targets minimum 44×44px
- Tap-friendly buttons with adequate spacing
- Grid layouts collapse: 3-col → 2-col → 1-col
- Font sizes use `clamp()` for fluid scaling
- No horizontal scroll on any page
- Images use `loading="lazy"` and `srcset` for responsive sizes
- Viewport meta: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

---

## ⚡ PERFORMANCE CHECKLIST

- [ ] Minify CSS and JS in production
- [ ] Use WebP images with JPEG/PNG fallback
- [ ] Implement lazy loading for below-fold images
- [ ] Preconnect to Google Fonts: `<link rel="preconnect" href="https://fonts.googleapis.com">`
- [ ] Defer non-critical JavaScript
- [ ] Use CSS animations instead of JS where possible
- [ ] Enable Gzip/Brotli compression on server
- [ ] Set Cache-Control headers for static assets
- [ ] Inline critical CSS for above-fold content
- [ ] Use system fonts as fallback while custom fonts load

---

## 📁 RECOMMENDED FILE STRUCTURE

```
localrankly.com/
├── index.html              (or WordPress pages)
├── services/index.html
├── portfolio/index.html
├── tools/index.html
├── blog/
│   ├── index.html
│   └── [post-slug]/index.html
├── about/index.html
├── contact/index.html
├── privacy-policy/index.html
├── terms-of-service/index.html
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── css/style.min.css
│   ├── js/main.min.js
│   └── images/ (WebP format)
└── .htaccess (for redirects and compression)
```

---

## 🚀 LAUNCH CHECKLIST

### Before Launch:
- [ ] All pages have unique meta titles and descriptions
- [ ] Schema markup validated at schema.org/validator
- [ ] Privacy Policy and Terms pages live
- [ ] Cookie consent banner active
- [ ] Contact form tested and delivering emails
- [ ] WhatsApp button links to correct number
- [ ] All internal links working (no 404s)
- [ ] Images have alt text
- [ ] Google Search Console verified
- [ ] Google Analytics 4 installed
- [ ] XML Sitemap submitted to Google Search Console
- [ ] robots.txt allows Googlebot

### After Launch:
- [ ] Submit to Google Search Console
- [ ] Create Google Business Profile for LocalRankly
- [ ] Build citations on top 20 Bangladesh directories
- [ ] Publish first 5 blog posts (keyword-targeted)
- [ ] Apply for AdSense after 30 days of consistent content
- [ ] Apply for Adsterra after reaching 1,000 monthly visitors
- [ ] Set up Monetag push notifications
- [ ] Begin outreach for local backlinks

---

## 📊 SUCCESS METRICS

| KPI | Target (Month 3) | Target (Month 6) |
|---|---|---|
| Monthly Organic Traffic | 500 visitors | 2,000 visitors |
| Google Search Console Impressions | 10,000/mo | 50,000/mo |
| Average Position (target keywords) | Top 20 | Top 10 |
| Monthly Lead Form Submissions | 10 | 30 |
| Monthly Ad Revenue (AdSense/Adsterra) | $20 | $100 |
| Blog Posts Published | 10 | 25 |

---

*Last updated: 2025 · LocalRankly · localrankly.com*

