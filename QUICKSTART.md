# Quick Start Guide

Get your portfolio site running in 5 minutes.

## 1. Install Dependencies

```bash
npm install
```

This will install all required packages (~2-3 minutes).

## 2. Configure Your Info

Open `lib/constants.ts` and update:

```typescript
export const SITE_NAME = 'Your Name'
export const CONTACT_EMAIL = 'your@email.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/yourprofile'
```

## 3. Create .env.local

```bash
cp .env.example .env.local
```

The default `localhost:3000` values work for development.

## 4. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 5. View Your Site

Your site is now running with:
- ✅ Home page with your info
- ✅ 3 sample case studies
- ✅ Contact form
- ✅ Dark mode toggle
- ✅ Fully SEO optimized

## Next Steps

1. **Customize Content**: Edit `lib/constants.ts` to update services, skills, and proof points
2. **Add Case Studies**: Create `.mdx` files in `content/case-studies/`
3. **Customize Design**: Edit `tailwind.config.ts` for colors and styling
4. **Deploy**: Push to GitHub and deploy via Vercel (see README.md)

## Common Commands

```bash
npm run dev        # Development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Check code quality
```

## Need Help?

- Read the full [README.md](./README.md) for detailed documentation
- Check [Next.js docs](https://nextjs.org/docs) for framework questions
- Review sample case studies in `content/case-studies/` for MDX examples

## File You'll Edit Most

- `lib/constants.ts` - Your personal info, skills, services
- `content/case-studies/*.mdx` - Your case studies
- `components/ContactForm.tsx` - Contact form behavior
- `styles/globals.css` - Custom styling
- `tailwind.config.ts` - Design tokens

That's it! You're ready to build your portfolio. 🚀
