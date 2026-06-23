# MediaHive AI — How Everything Works

> Practical guide: what works today, what needs setup, and how to go live.

---

## 1. Run the Website Locally (Works Now)

### First time setup
```bash
cd /Users/omar/Desktop/MEDIAHIVE
npm install
npm run dev
```
Open **http://localhost:5173** in your browser.

### Other commands
```bash
npm run dev        # Site + Claude AI advisor (needs .env)
npm run dev:site   # Website only, no Claude
npm run build      # Build for production → creates /dist folder
npm run preview    # Preview the production build locally
```

### What works out of the box
| Feature | Status | Notes |
|---------|--------|-------|
| Full website UI | ✅ Works | All sections, animations, mobile layout |
| Product videos | ✅ Works | Videos in `public/videos/` |
| PDF playbook download | ✅ Works | After "purchase" — file at `public/downloads/` |
| Ebook popup | ✅ Works | Shows after 1.8 seconds on first visit |
| $199 countdown timer | ✅ Works | 24hr timer stored in browser |
| Contact form UI | ✅ Works | Shows success message — **does NOT send email yet** |
| Ebook purchase | ⚠️ Simulated | Email entered → instant access — **no real payment yet** |
| Claude AI advisor | ✅ Works | Needs `ANTHROPIC_API_KEY` in `.env` — chat bubble bottom-right |

---

## 2. How Each Part of the Business Works

```
┌─────────────────────────────────────────────────────────────┐
│                    MEDIAHIVE AI BUSINESS                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  TRAFFIC → Website (mediahive.ai)                           │
│     │                                                        │
│     ├── Enterprise leads (£50k+)                            │
│     │      Contact form → You get email → Strategy call     │
│     │                                                        │
│     └── Digital product ($199)                              │
│            Playbook purchase → Stripe → PDF download        │
│                                                              │
│  DELIVERY → What you actually do for clients                │
│     ├── Social Pulse → Instagram/TikTok content + scheduling│
│     ├── Genesis Studio → Build their website                │
│     ├── Flow Engine → Automate their workflows (n8n, etc.)  │
│     ├── Hive Agents → AI chatbots, lead bots                │
│     └── Cortex Analytics → Track their ROI                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Edit Website Content

All text, products, case studies, and FAQs live in **one file**:

```
src/lib/data.ts
```

| To change... | Edit in data.ts |
|--------------|-----------------|
| Company names on hero | `enterpriseLogos` |
| Social platforms | `socialPlatforms` |
| Products & videos | `productVideos` |
| Case studies | `deployments` |
| FAQs | `faqs` |
| Pricing mentions | `faqs` + `EbookOffer.tsx` |
| Industries | `industries` |

After editing, save and the dev server hot-reloads automatically.

### Regenerate the PDF playbook
```bash
python3 scripts/generate-ebook.py
```
Output: `public/downloads/ai-marketing-agency-playbook.pdf`

---

## 4. Make the Contact Form Actually Work

**Right now:** Form shows "Request received" but nothing is sent.

**Option A — Formspree (easiest, free tier)**
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a form → copy your form ID (e.g. `xyzabc123`)
3. In `src/components/Contact.tsx`, change the form to:

```tsx
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  className="space-y-4"
>
```

**Option B — Resend (professional emails)**
1. Sign up at [resend.com](https://resend.com)
2. Add a small backend API (Vercel serverless function) to send emails
3. Form submits to your API → email lands at hello@mediahive.ai

**Option C — Quick fix (works immediately)**
Change the submit button to open email:
```tsx
<a href="mailto:hello@mediahive.ai?subject=MediaHive Inquiry">
  Email Us Directly
</a>
```

---

## 5. Make the $199 Playbook Payment Real

**Right now:** User enters email → gets PDF free (simulated purchase).

**Option A — Stripe Payment Link (fastest)**
1. Create account at [stripe.com](https://stripe.com)
2. Products → Create product "AI Marketing Agency Playbook" → $199
3. Create a **Payment Link** → copy the URL
4. In `src/components/EbookOffer.tsx`, replace the buy button:

```tsx
<a
  href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
  className="flex min-h-[48px] w-full items-center justify-center ..."
>
  Get Instant Access — $199
</a>
```

5. In Stripe → Settings → Customer emails → enable receipt with link to PDF
6. Or use Stripe webhooks to email the PDF after payment

**Option B — Gumroad (no code)**
1. Upload PDF to [gumroad.com](https://gumroad.com)
2. Set price $199
3. Link the buy button to your Gumroad product URL

**Option C — Lemon Squeezy**
Similar to Gumroad — handles tax, payments, digital delivery.

---

## 6. Deploy the Website Live

### Vercel (recommended — free)
```bash
# Install Vercel CLI
npm i -g vercel

# From project folder
cd /Users/omar/Desktop/MEDIAHIVE
vercel
```
Follow prompts → you get a live URL like `mediahive-ai.vercel.app`

**Or via GitHub:**
1. Push project to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Vercel auto-detects Vite → deploys on every push

### Connect your domain (mediahive.ai)
1. Buy domain from Namecheap, GoDaddy, or Cloudflare
2. In Vercel → Project → Settings → Domains → add `mediahive.ai`
3. Update DNS records as Vercel instructs
4. SSL certificate is automatic

### Build settings for Vercel
| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |

---

## 7. Deliver Services to Real Clients

When someone fills the contact form or books a call, here's the delivery workflow:

### Phase 1 — Discovery (Week 1)
- Audit their social, website, competitors
- Map their current tools (CRM, email, scheduling)
- Define goals: followers, leads, revenue

### Phase 2 — Build (Weeks 2–6)
| Client need | MediaHive product | Tools you can use |
|-------------|-------------------|-------------------|
| Instagram/TikTok growth | Social Pulse | ChatGPT, Canva, Buffer/Later, CapCut |
| Website | Genesis Studio | Webflow, Framer, or custom Next.js |
| Lead automation | Flow Engine | n8n, Make.com, Zapier |
| AI support/sales | Hive Agents | Custom GPT, Voiceflow, or build with OpenAI API |
| Reporting | Cortex Analytics | Google Analytics, Meta Business Suite |

### Phase 3 — Launch & Optimise (Ongoing)
- Publish content on schedule
- Monitor analytics weekly
- A/B test posts and landing pages
- Monthly ROI report to client

### Pricing to charge clients
| Tier | Price | Includes |
|------|-------|----------|
| Starter | £1,500/mo | 12 posts + 4 Reels + scheduling |
| Growth | £3,500/mo | 20 posts + 8 Reels + website + workflows |
| Scale | £7,500/mo | Full stack + ads + AI agents |
| Enterprise | £15,000+/mo | Custom AI systems |

---

## 8. Tools Stack (What You Actually Need)

### AI Engine — Claude (Anthropic) ✅ Integrated
MediaHive uses **Claude** as the core AI engine for:
- **Website chat advisor** — floating "MediaHive Advisor" powered by Claude
- **Client content generation** — posts, scripts, ad copy
- **Workflow design** — automation planning
- **Strategy consulting** — brand transformation advice

**Setup Claude (5 minutes):**
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an API key
3. Copy `.env.example` → `.env`:
   ```bash
   cp .env.example .env
   ```
4. Paste your key:
   ```
   ANTHROPIC_API_KEY=sk-ant-your-key-here
   ```
5. Run the site with Claude enabled:
   ```bash
   npm run dev
   ```
6. Click the **chat bubble** (bottom-right) → ask anything about AI, social, workflows

**Production (Vercel):**
- Vercel Dashboard → Project → Settings → Environment Variables
- Add `ANTHROPIC_API_KEY` = your key
- Redeploy — `/api/chat` runs automatically

**Files:**
- `src/components/ClaudeAssistant.tsx` — chat UI
- `src/lib/claude.ts` — API client
- `server/claude-proxy.mjs` — local dev backend
- `api/chat.ts` — production serverless function

### Free to start
- **Website hosting:** Vercel (free)
- **Domain:** ~£10/year
- **Content AI:** ChatGPT free tier or Claude
- **Scheduling:** Buffer free plan
- **Forms:** Formspree free tier
- **Email:** Gmail or Zoho free
- **Video:** CapCut (free), Pexels/Mixkit stock footage
- **Workflows:** n8n self-hosted (free) or Make.com free tier
- **CRM:** Notion or HubSpot free

### When you have paying clients
- **Claude API (Anthropic)** — content, strategy, agents (primary AI engine)
- **Stripe** — payments
- **Cal.com** — booking strategy calls
- **Resend** — professional email delivery
- **Runway/Pika** — AI video generation
- **OpenAI API** — custom agents

---

## 9. Daily Operations Checklist

### Website
- [ ] Site deployed and live on custom domain
- [ ] Contact form sends to your email
- [ ] Stripe/Gumroad connected for $199 playbook
- [ ] Google Analytics installed (optional)
- [ ] Test on mobile

### Sales
- [ ] Respond to contact form within 24 hours
- [ ] Book discovery call (Cal.com link in email reply)
- [ ] Send proposal within 48 hours of call
- [ ] Follow up if no reply in 3 days

### Content (your own marketing)
- [ ] Post 3–5x/week on Instagram/TikTok/LinkedIn
- [ ] Share case study results
- [ ] Run the $199 playbook offer in posts/stories

---

## 10. File Map (Where Everything Lives)

```
MEDIAHIVE/
├── COMPANY.md              ← What the company IS (strategy)
├── GETTING-STARTED.md      ← This file (how to RUN it)
├── AGENTS.md               ← Dev commands
│
├── src/
│   ├── lib/data.ts         ← ALL website copy & data
│   ├── App.tsx             ← Page section order
│   └── components/         ← Each website section
│       ├── HeroVideo.tsx
│       ├── SocialExpansion.tsx
│       ├── ProductField.tsx
│       ├── ProductBreakdown.tsx
│       ├── VideoShowcase.tsx
│       ├── EbookOffer.tsx  ← $199 popup + section
│       ├── Contact.tsx     ← Lead form
│       └── ...
│
├── public/
│   ├── videos/             ← All MP4 product videos
│   ├── downloads/          ← PDF playbook
│   └── logo-mark.png
│
└── scripts/
    └── generate-ebook.py   ← Regenerate PDF
```

---

## 11. Priority Order — Do This Next

| # | Task | Time | Impact |
|---|------|------|--------|
| 1 | Deploy to Vercel | 15 min | Site is live on the internet |
| 2 | Connect Formspree to contact form | 10 min | Leads actually reach you |
| 3 | Create Stripe payment link for $199 | 20 min | Playbook generates revenue |
| 4 | Buy domain mediahive.ai | 10 min | Professional brand |
| 5 | Set up Cal.com for strategy calls | 15 min | Easy booking for enterprise leads |
| 6 | Post on LinkedIn/Instagram about launch | 30 min | First traffic |

---

## 12. Quick Troubleshooting

| Problem | Fix |
|---------|-----|
| `npm run dev` fails | Run `npm install` first |
| Videos not playing | Check files exist in `public/videos/` |
| Ebook popup won't show again | Clear browser sessionStorage or use incognito |
| Build fails | Run `npm run build` and read the error — usually a TypeScript issue in a component |
| Site blank after deploy | Ensure Vercel output directory is `dist` |
| PDF won't download | Check `public/downloads/ai-marketing-agency-playbook.pdf` exists |

---

## Summary

**What you have:** A complete, premium marketing website with product showcase, case studies, ebook offer, and contact form.

**What works today:** Everything visual — videos, animations, PDF download (simulated purchase), mobile layout.

**What needs 1–2 hours to go live:** Deploy to Vercel + Formspree + Stripe payment link.

**What makes money:** Enterprise clients (£50k+) via contact form + $199 playbook via Stripe.

**Reference docs:** `COMPANY.md` (strategy) + this file (operations).

---

*Last updated: June 2026*
