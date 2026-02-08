# Scott Jackson Portfolio

A fast, SEO-friendly personal portfolio site built with Next.js 14, TypeScript, and Tailwind CSS. Features MDX-driven case studies, full SEO optimization, and Vercel deployment ready.

## 🚀 Features

- **SEO Optimized**: Complete metadata, Open Graph, Twitter cards, JSON-LD schemas
- **Fast Performance**: Server-side rendering, optimized Core Web Vitals
- **MDX Case Studies**: Easy content management with MDX files
- **Dark Mode**: Lightweight theme toggle with system preference detection
- **Fully Accessible**: Semantic HTML, keyboard navigation, ARIA labels
- **RSS Feed**: Auto-generated RSS feed for case studies
- **Sitemap & Robots**: Automatic sitemap generation and robots.txt
- **Responsive**: Mobile-first design with Tailwind CSS

## 📋 Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn

## 🛠️ Local Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` and update the values:

```env
SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Update Personal Information

Edit `lib/constants.ts` to update:
- Your name
- Contact email
- LinkedIn URL
- Skills and services
- Other personal information

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding a New Case Study

### 1. Create MDX File

Create a new file in `content/case-studies/` with a descriptive slug:

```
content/case-studies/your-case-study-slug.mdx
```

### 2. Add Frontmatter

Start your MDX file with frontmatter:

```mdx
---
title: "Your Case Study Title"
description: "A brief description of the case study (150-160 characters for SEO)"
date: "2024-01-15"
tags: ["Technical SEO", "Analytics", "E-commerce"]
client: "Client Name (or 'Confidential Client')"
industry: "Industry Name"
featured: true
metrics:
  - label: "Metric Name"
    value: "+150%"
  - label: "Another Metric"
    value: "50,000+"
---

## Your Content Here

Write your case study content using markdown...
```

### 3. Write Content

Use standard markdown syntax:

```markdown
## Section Heading

Regular paragraph text.

### Subsection

- Bullet points
- Another point

**Bold text** and *italic text*

[Link text](https://example.com)

\`\`\`python
# Code blocks with syntax highlighting
def example():
    return "Hello"
\`\`\`
```

### 4. Build & Preview

The new case study will automatically appear:
- On the case studies index page at `/case-studies`
- In search/filter functionality
- In the sitemap
- In the RSS feed
- As a featured case study on the home page (if `featured: true`)

## 🚢 Deployment to Vercel (Free Tier)

### 1. Push to GitHub

Initialize a git repository and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

### 3. Set Environment Variables

In Vercel project settings, add environment variables:

```
SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

If using a custom domain:

```
SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 4. Deploy

Click "Deploy" and Vercel will:
- Build your site
- Deploy to production
- Provide a URL (e.g., `your-project.vercel.app`)

### 5. Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed by Vercel
4. Update environment variables with your custom domain

## 📊 SEO Features

### Metadata
- Unique titles and descriptions per page
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- Robots meta tags

### Structured Data (JSON-LD)
- Person schema (site-wide)
- WebSite schema with search action
- Article schema for case studies
- Breadcrumb schema for navigation

### Technical SEO
- `/sitemap.xml` - Automatically generated
- `/robots.txt` - Configured for all crawlers
- `/api/rss` - RSS feed for case studies
- Semantic HTML throughout
- Fast Core Web Vitals
- Mobile-first responsive design

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the primary color:

```typescript
colors: {
  primary: {
    // Update these values
    500: '#0ea5e9',
    600: '#0284c7',
    // etc.
  },
}
```

### Typography

The site uses Inter font from Google Fonts. To change:

Edit `app/layout.tsx`:

```typescript
import { Your_Font } from 'next/font/google'

const yourFont = Your_Font({ subsets: ['latin'] })
```

### Layout

Components are in `components/`:
- `Header.tsx` - Site header with navigation
- `Footer.tsx` - Site footer
- `CaseStudyCard.tsx` - Case study preview cards
- `ContactForm.tsx` - Contact form

## 🧪 Analytics Setup

### Google Analytics 4

Add to `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Then create `components/Analytics.tsx`:

```typescript
'use client'

import Script from 'next/script'

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
}
```

Add to `app/layout.tsx`.

## 📦 Project Structure

```
├── app/                      # Next.js App Router
│   ├── case-studies/        # Case studies routes
│   ├── contact/             # Contact page
│   ├── api/rss/             # RSS feed endpoint
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── sitemap.ts           # Dynamic sitemap
├── components/              # React components
├── content/                 # MDX content files
│   └── case-studies/        # Case study MDX files
├── lib/                     # Utility functions
│   ├── constants.ts         # Site configuration
│   ├── mdx.ts              # MDX processing
│   ├── metadata.ts         # Metadata helpers
│   └── schema.ts           # JSON-LD schemas
├── public/                  # Static files
├── styles/                  # Global styles
├── types/                   # TypeScript types
└── next.config.js          # Next.js configuration
```

## 🔧 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## 📄 License

This is a personal portfolio template. Feel free to use it for your own portfolio, but please update all personal information and content.

## 🤝 Support

For issues or questions:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the code comments
3. Check environment variables are set correctly

## 🚀 Performance Tips

1. **Images**: Add images to `public/` and use Next.js `<Image>` component
2. **Fonts**: System fonts are fastest, but Google Fonts are optimized
3. **JavaScript**: Keep client components minimal for best performance
4. **Case Studies**: Large numbers of case studies (100+) may require pagination

## ✅ Pre-Launch Checklist

Before deploying to production:

- [ ] Update `lib/constants.ts` with your information
- [ ] Replace contact email with your real email
- [ ] Update LinkedIn URL
- [ ] Update Twitter handle (if applicable)
- [ ] Add real case studies (replace samples)
- [ ] Add your photo/headshot if desired
- [ ] Test all forms work correctly
- [ ] Set correct `SITE_URL` environment variable
- [ ] Update robots.txt with your domain
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Verify metadata on all pages
- [ ] Test sitemap at `/sitemap.xml`
- [ ] Test RSS feed at `/api/rss`
- [ ] Submit sitemap to Google Search Console
