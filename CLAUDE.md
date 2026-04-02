# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start dev server
pnpm build     # Production build
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

There are no tests in this project.

## Architecture

This is a Next.js 14 personal portfolio site. All personal data is centralized in **`src/data/resume.tsx`** — this is the single config file for name, bio, work, education, projects, skills, and social links. Updating content means editing this file.

**Pages:**
- `/` — Main portfolio page (`src/app/page.tsx`): renders sections (hero, about, education, work, skills, projects) by mapping over `DATA` from `resume.tsx`
- `/blog` — Lists all posts from `content/*.mdx`
- `/blog/[slug]` — Renders a single MDX post

**Blog system:** MDX files live in `content/` at the repo root. `src/data/blog.ts` reads them via `gray-matter` (frontmatter) and processes them with `unified` + `rehype-pretty-code` for syntax highlighting. Required frontmatter fields: `title`, `publishedAt`, `summary`. Optional: `image`.

**Components:**
- `src/components/ui/` — shadcn/ui primitives (avatar, badge, button, card, separator, tooltip)
- `src/components/magicui/` — Animation components: `BlurFade` and `BlurFadeText` (Framer Motion wrappers), `Dock`
- `src/components/navbar.tsx` — Bottom dock nav built with the `Dock` magicui component; links from `DATA.navbar` and `DATA.contact.social`

**Styling:** TailwindCSS with `tailwindcss-animate` and `@tailwindcss/typography`. Dark mode via `next-themes` with `class` strategy (defaultTheme: `"light"`).

**Path alias:** `@/` maps to `src/`.

**Deployment:** Self-hosted on Oracle Cloud (gojo server) behind nginx reverse proxy. Live at `https://about.zahmed.net`. The `DATA.url` field in `resume.tsx` must match the deployed URL as it's used for OpenGraph and structured data metadata.
