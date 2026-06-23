# MediaHive AI

Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion + **Claude (Anthropic)**.

## Commands

- `npm run dev` — site + Claude AI advisor (requires `.env` with `ANTHROPIC_API_KEY`)
- `npm run dev:site` — website only, no Claude chat
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build

## Claude Setup

```bash
cp .env.example .env
# Add your key from https://console.anthropic.com/
npm run dev
```

Chat bubble appears bottom-right on the site.
