# Adilzhan Kadyrgazhy · Portfolio

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion.

## Run locally
```bash
npm install
npm run dev   # http://localhost:3000
```

## Deploy
```bash
bash deploy.sh
```
Creates `github.com/adekaa11/portfolio`, pushes, links Vercel and deploys to production.
After that, every `git push` redeploys automatically.

## Edit content
All text, projects, timeline and stack live in `lib/data.ts`.

## Structure
```
app/            layout (fonts, metadata), page, globals.css
components/ui/  cursor, magnetic, text-loop, text-generate, border-trail,
                spotlight, card-3d (+ Pin), dialog, badge, shift-card, icons
components/sections/  nav, hero, projects, timeline, stack, soft-skills, contact, footer
lib/            data.ts (content), utils.ts (cn)
```
