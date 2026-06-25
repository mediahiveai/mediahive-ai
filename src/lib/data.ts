export const navLinks = [
  { label: "Corporate", href: "#corporate" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#deployments" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const divisions = [
  {
    id: "digital",
    title: "MediaHive Digital",
    cta: "Build With Us",
    href: "#corporate",
    desc: "Your entire digital presence, run by one team who understands how it all connects. Websites, web apps, SEO, landing pages, and CMS builds that convert visitors into customers.",
    approach: "We start with strategy, not aesthetics. Every design decision is made with one goal: making your business impossible to ignore.",
  },
  {
    id: "ai",
    title: "MediaHive AI",
    cta: "Automate Now",
    href: "#enterprise",
    desc: "Custom workflows, AI agents, and platform integrations connecting your website, CRM, email, and ops — so leads are captured, followed up, and reported without manual handoffs.",
    approach: "We connect your tools into one joined-up system so every process works harder and every result compounds over time.",
  },
  {
    id: "creative",
    title: "MediaHive Creative",
    cta: "Elevate Brand",
    href: "#corporate",
    desc: "Brand refreshes, campaign creative, social content systems, and AI-assisted visuals — bold identities and assets that cut through the noise and make your business unforgettable.",
    approach: "From concept to delivery, we mix creativity with strategy to tell your story clearly and focus on impact, consistency, and results.",
  },
  {
    id: "enterprise",
    title: "MediaHive Enterprise",
    cta: "Partner With Us",
    href: "#enterprise",
    desc: "Bespoke CRM systems, multi-location platforms, compliance-ready automation, and full-stack digital transformation for finance, public sector, and global organisations.",
    approach: "We combine technology, creative, and strategy to bring next-generation thinking to enterprise engagements from £50k.",
  },
];

export const corporateServices = [
  {
    title: "Website Design & Build",
    tag: "How We Make It Happen",
    desc: "Corporate marketing sites, landing pages, and full redesigns — React, TypeScript, Framer Motion. UX, development, CMS setup, and launch in 4–8 weeks.",
    href: "#services",
  },
  {
    title: "Web Applications",
    tag: "Rewards for You",
    desc: "Client portals, booking systems, member apps, and admin dashboards — lean applications wired into your CRM and workflows. More visibility, better engagement, stronger conversions.",
    href: "#services",
  },
  {
    title: "Marketing Agency Systems",
    tag: "Why It Works",
    desc: "Multi-client campaign infrastructure, content workflows, social scheduling, and white-label reporting — the technology agencies need to scale delivery.",
    href: "#services",
  },
  {
    title: "SEO, Rebrand & Creative",
    tag: "Click Magnet",
    desc: "Technical SEO, brand identity, on-page content strategy, and campaign visuals — integrated with your site so everything compounds over time.",
    href: "#services",
  },
];

export const enterpriseHighlights = [
  {
    title: "Custom CRM Systems",
    desc: "Bespoke pipelines, contact management, automations, and client portals — integrated with HubSpot, Salesforce, or built standalone.",
    stat: "85% processes automated",
  },
  {
    title: "AI & Workflow Automation",
    desc: "n8n, Make, and custom middleware connecting web, CRM, email, and ops — compliance-ready for finance and public sector.",
    stat: "8-week avg. ROI",
  },
  {
    title: "Enterprise Deployments",
    desc: "Full-stack programmes for HSBC, NHS England, Tower Hamlets, and Fitness First — websites, CRM, agents, and analytics at scale.",
    stat: "£50k+ programmes",
  },
  {
    title: "1:1 Strategy & Coaching",
    desc: "Private AI roadmaps, stack audits, and executive guidance for leadership teams running complex digital transformation.",
    stat: "Global delivery",
  },
];

export const testimonials = [
  {
    quote: "Clear communication, fast turnaround, and results that actually match what they promised. Refreshing.",
    name: "Sarah Mitchell",
    role: "Head of Digital, Professional Services",
  },
  {
    quote: "We wasted months with our previous agency. MediaHive achieved more in the first 90 days than they did in a year.",
    name: "James Okonkwo",
    role: "Chief Operating Officer",
  },
  {
    quote: "They still treat our account like it is their most important one. The CRM and automation stack runs itself now.",
    name: "Helen Whitfield",
    role: "Director of Operations",
  },
  {
    quote: "Within 60 days the investment had paid for itself twice over. I wish we had done it sooner.",
    name: "David Chen",
    role: "Practice Manager",
  },
];

export const industryTags = [
  "Finance & Banking",
  "Public Sector",
  "Fitness & Leisure",
  "Healthcare",
  "Professional Services",
  "Marketing Agencies",
  "Enterprise Retail",
  "Insurance",
];

export const clientLogos = [
  { name: "HSBC", logo: "/logos/hsbc.svg", subtitle: "Global Finance" },
  { name: "NHS England", logo: "/logos/nhs.svg", subtitle: "Healthcare" },
  { name: "Tower Hamlets", logo: "/logos/tower-hamlets.svg", subtitle: "London Borough" },
  { name: "Fitness First", logo: "/logos/fitness-first.svg", subtitle: "Fitness & Leisure" },
  { name: "Transport for London", logo: "/logos/tfl.svg", subtitle: "Public Transport" },
  { name: "Canary Wharf", logo: "/logos/canary-wharf.svg", subtitle: "Group · London" },
  { name: "British Airways", logo: "/logos/british-airways.svg", subtitle: "Aviation" },
  { name: "Unilever", logo: "/logos/unilever.svg", subtitle: "Consumer Goods" },
  { name: "Santander", logo: "/logos/santander.svg", subtitle: "Banking" },
];

/** @deprecated use clientLogos */
export const enterpriseLogos = clientLogos.map((c) => c.name);

export const socialPlatforms = [
  { name: "Instagram", desc: "Reels, Stories, carousels — AI-generated and scheduled to grow your reach." },
  { name: "TikTok", desc: "Trend-matched short-form content that drives discovery and viral engagement." },
  { name: "LinkedIn", desc: "Authority-building posts, thought leadership, and B2B lead generation." },
  { name: "YouTube", desc: "Long-form scripts, thumbnails, and Shorts optimised for search and watch time." },
  { name: "Facebook", desc: "Community management, ad creative, and automated posting at scale." },
  { name: "X / Twitter", desc: "Real-time content, thread automation, and audience engagement workflows." },
];

export const growthServices = [
  {
    title: "Websites & Redesigns",
    desc: "Framer Motion sites, landing pages, and full website redesigns — cinematic experiences built to convert and elevate your brand.",
    icon: "globe",
  },
  {
    title: "Custom CRM Systems",
    desc: "Bespoke CRM platforms tailored to how you sell and retain — pipelines, automations, and client portals, only if you need them.",
    icon: "workflow",
  },
  {
    title: "AI & Automation",
    desc: "Custom workflows, AI agents, and platform integrations that connect your entire stack — CRM, web, social, and ops.",
    icon: "share",
  },
  {
    title: "Learn & Grow",
    desc: "We teach you how to grow your business and launch your own AI marketing agency — training, playbooks, and 1:1 coaching.",
    icon: "sparkles",
  },
];

/** Realistic service pillars — what MediaHive actually delivers */
export const servicePillars = [
  {
    id: "websites",
    title: "Website Design & Build",
    tag: "4–8 week delivery",
    image: "/images/showcase-web.jpg",
    desc: "Corporate marketing sites, landing pages, and full redesigns — built with React, TypeScript, and Framer Motion. We handle UX, development, CMS setup, and launch.",
    deliverables: [
      "Corporate & marketing websites",
      "Campaign landing pages",
      "UX redesigns & refreshes",
      "CMS integration (Sanity, Contentful)",
    ],
  },
  {
    id: "apps",
    title: "Web Applications",
    tag: "Scoped to your needs",
    image: "/images/showcase-crm.jpg",
    desc: "Client portals, booking systems, member apps, and internal dashboards — lean applications wired into your CRM and workflows. No bloated builds, only what your team will use.",
    deliverables: [
      "Client & member portals",
      "Booking & scheduling systems",
      "Admin dashboards",
      "Third-party API integrations",
    ],
  },
  {
    id: "marketing-agency",
    title: "Marketing Agency Delivery",
    tag: "Full-stack or modular",
    image: "/images/showcase-agency.jpg",
    desc: "We operate as your marketing technology partner — campaign sites, content systems, social workflows, reporting, and the infrastructure agencies need to deliver for clients at scale.",
    deliverables: [
      "Multi-client campaign infrastructure",
      "Content & creative workflows",
      "Social media automation",
      "Client reporting dashboards",
    ],
  },
  {
    id: "crm",
    title: "Custom CRM Systems",
    tag: "Built around your process",
    image: "/images/showcase-crm.jpg",
    desc: "Pipelines, contact management, automations, and client portals tailored to how you sell and retain — integrated with HubSpot, Salesforce, or built standalone when off-the-shelf doesn't fit.",
    deliverables: [
      "Custom sales pipelines",
      "Lead tracking & follow-ups",
      "Client onboarding portals",
      "Automated reporting",
    ],
  },
  {
    id: "automation",
    title: "AI & Workflow Automation",
    tag: "n8n · Make · custom",
    image: "/images/showcase-automation.jpg",
    desc: "Connect your website, CRM, email, and ops tools with automated workflows and AI agents — so leads are captured, followed up, and reported without manual handoffs.",
    deliverables: [
      "Lead capture & routing",
      "Email & notification sequences",
      "CRM sync & data pipelines",
      "AI agents for support & ops",
    ],
  },
  {
    id: "seo-brand",
    title: "SEO, Rebrand & Creative",
    tag: "Growth & identity",
    image: "/images/showcase-rebrand.jpg",
    desc: "Technical SEO, content strategy, brand refreshes, and AI-assisted creative — integrated with your site and marketing stack so everything compounds over time.",
    deliverables: [
      "Technical SEO audits",
      "Brand identity & messaging",
      "On-page content strategy",
      "Ad & social creative assets",
    ],
  },
];

/** Showcase of what MediaHive builds — websites, apps, AI, SEO, rebrand */
export const whatWeBuild = [
  {
    id: "websites",
    title: "Website Design & Build",
    tag: "Web · UX · Launch",
    desc: "From single landing pages to full corporate sites — we design, build, and launch on modern stacks (React, Vite, Framer Motion). Includes mobile-first UX, performance optimisation, analytics setup, and handover documentation for your team.",
    image: "/images/showcase-web.jpg",
    highlights: ["React & TypeScript", "Framer Motion", "4–8 Week Delivery", "CMS Ready"],
  },
  {
    id: "applications",
    title: "Web Applications",
    tag: "Apps · Portals · Dashboards",
    desc: "Booking platforms, member portals, client dashboards, and internal tools — scoped and built to integrate with your existing CRM, payment, and auth systems. Typical projects run 8–14 weeks depending on complexity.",
    image: "/images/showcase-crm.jpg",
    highlights: ["Client Portals", "Booking Systems", "Dashboards", "API Integrations"],
  },
  {
    id: "agency",
    title: "Marketing Agency Systems",
    tag: "Agency · Clients · Scale",
    desc: "Infrastructure for agencies managing multiple clients — campaign landing pages, automated content pipelines, social scheduling, white-label reporting, and onboarding workflows. We build the tech so your team focuses on strategy and creative.",
    image: "/images/showcase-agency.jpg",
    highlights: ["Multi-Client Setup", "Campaign Pages", "Content Workflows", "Client Reporting"],
  },
  {
    id: "crm",
    title: "Custom CRM Systems",
    tag: "Sales · Ops · Retention",
    desc: "When HubSpot or Salesforce doesn't fit your process, we build bespoke CRM platforms — custom pipelines, contact management, automations, and client-facing portals. Can also extend existing CRMs with custom integrations.",
    image: "/images/showcase-crm.jpg",
    highlights: ["Custom Pipelines", "Client Portals", "Automations", "CRM Integrations"],
  },
  {
    id: "workflows",
    title: "AI & Automation",
    tag: "Workflows · Agents · Integrations",
    desc: "Practical automation using n8n, Make, Zapier, or custom code — lead routing, follow-up sequences, CRM sync, reporting, and AI agents for repetitive tasks. We map your current process first, then automate what saves real time.",
    image: "/images/showcase-automation.jpg",
    highlights: ["n8n & Make", "Lead Automation", "AI Agents", "Stack Integration"],
  },
  {
    id: "social-workflows",
    title: "Social & Content Systems",
    tag: "Instagram · LinkedIn · TikTok",
    desc: "Automated content pipelines for brands and agencies — scheduling, multi-platform posting, and workflow-driven production. Not vanity metrics — systems that support your marketing team and reduce manual posting.",
    image: "/images/showcase-fitness.jpg",
    highlights: ["Content Scheduling", "Multi-Platform", "Agency Workflows", "Brand Consistency"],
  },
  {
    id: "redesign",
    title: "Website & Brand Redesign",
    tag: "UX · Identity · Refresh",
    desc: "Outdated site or brand? We audit what you have, redesign UX and visual identity, rebuild on a modern stack, and manage the launch — without losing SEO equity or breaking existing integrations.",
    image: "/images/showcase-rebrand.jpg",
    highlights: ["UX Audit", "Visual Refresh", "Modern Rebuild", "SEO Preservation"],
  },
  {
    id: "seo",
    title: "SEO & Organic Growth",
    tag: "Search · Content · Traffic",
    desc: "Technical SEO fixes, site speed, schema markup, and content strategy aligned with your business goals. We work alongside your marketing team — not black-hat shortcuts, but sustainable organic growth.",
    image: "/images/showcase-healthcare.jpg",
    highlights: ["Technical SEO", "Site Speed", "Content Strategy", "Analytics Setup"],
  },
  {
    id: "ai-visuals",
    title: "Creative & Visual Assets",
    tag: "Ads · Social · Campaign",
    desc: "On-brand ad creative, social assets, and campaign visuals — produced with AI-assisted workflows to speed up delivery without sacrificing quality. Useful for agencies and in-house teams scaling output.",
    image: "/images/showcase-workflows.jpg",
    highlights: ["Ad Creative", "Social Assets", "Campaign Visuals", "Brand Templates"],
  },
];

/** Education & growth programs — agency training, business growth */
export const learnPrograms = [
  {
    id: "agency",
    title: "Start Your AI Marketing Agency",
    tag: "Agency · Launch · Scale",
    desc: "Step-by-step training on launching and scaling an AI-powered marketing agency — client acquisition, service delivery, pricing, workflows, and the systems that let you grow without burning out.",
    icon: "rocket",
    cta: "#ebook",
    ctaLabel: "Get the Playbook — $199",
    highlights: ["Agency Setup", "Pricing Tiers", "Client Delivery", "90-Day Launch Plan"],
  },
  {
    id: "growth",
    title: "Business Growth Frameworks",
    tag: "Grow · Scale · Compound",
    desc: "We teach founders and teams how to grow online — social systems, SEO, conversion funnels, and automation loops that compound traffic, leads, and revenue over time.",
    icon: "trending",
    cta: "#contact",
    ctaLabel: "Book a Strategy Call",
    highlights: ["Growth Strategy", "Funnel Design", "Social Systems", "Revenue Loops"],
  },
  {
    id: "workflows",
    title: "Workflow & Automation Training",
    tag: "n8n · Make · AI Agents",
    desc: "Hands-on guidance on building the automations that run your business — lead capture, CRM sync, content pipelines, and AI agents wired to your exact tools and processes.",
    icon: "workflow",
    cta: "#contact",
    ctaLabel: "Discuss Training",
    highlights: ["Workflow Design", "Tool Integration", "AI Agents", "Templates Included"],
  },
  {
    id: "social",
    title: "Social Growth Masterclasses",
    tag: "Instagram · TikTok · LinkedIn",
    desc: "Learn how to build automated social systems that grow your brand — content strategy, AI production, scheduling workflows, and platform-specific growth tactics.",
    icon: "share",
    cta: "#social",
    ctaLabel: "Explore Social Systems",
    highlights: ["Content Strategy", "AI Production", "Scheduling", "Platform Growth"],
  },
  {
    id: "redesign",
    title: "Redesign & Brand Elevation",
    tag: "Identity · UX · Launch",
    desc: "Training and done-for-you programmes on transforming your digital presence — from outdated sites to premium brands with new identity, redesign, and launch campaigns.",
    icon: "sparkles",
    cta: "#build",
    ctaLabel: "See Redesign Work",
    highlights: ["Brand Strategy", "UX Redesign", "Launch Planning", "Full Rollout"],
  },
  {
    id: "enterprise",
    title: "1:1 Enterprise Coaching",
    tag: "Strategy · Leadership · ROI",
    desc: "Private strategy sessions for leadership teams — AI roadmaps, stack audits, transformation planning, and executive guidance for £50k+ engagements.",
    icon: "users",
    cta: "#contact",
    ctaLabel: "Contact Us",
    highlights: ["AI Roadmap", "Stack Audit", "Executive Coaching", "ROI Planning"],
  },
];

/** Higgsfield-style layered product field breakdown */
export const intelligenceField = [
  {
    id: "signal",
    layer: "01",
    name: "Signal Layer",
    tagline: "Ingest. Normalise. Understand.",
    description:
      "We connect your social accounts, website analytics, CRM, and customer data into one intelligence layer — so every decision is informed by real signals, not guesswork.",
    color: "#0066ff",
    nodes: ["Social APIs", "Web Analytics", "CRM Sync", "Customer Data"],
    products: ["AI Integration", "Social Pulse"],
  },
  {
    id: "cognition",
    layer: "02",
    name: "Cognition Layer",
    tagline: "Reason. Predict. Generate.",
    description:
      "AI models trained on your brand, audience, and industry generate content, forecast trends, and personalise every touchpoint across social and web.",
    color: "#6366f1",
    nodes: ["Content AI", "Trend Analysis", "Audience Models", "Brand Voice"],
    products: ["Generative AI", "Cortex Analytics"],
  },
  {
    id: "action",
    layer: "03",
    name: "Action Layer",
    tagline: "Execute. Automate. Orchestrate.",
    description:
      "Autonomous agents publish posts, respond to leads, update your website, and run workflows — 24/7, across every channel your business needs.",
    color: "#9333ea",
    nodes: ["Auto Publishing", "Lead Bots", "Site Updates", "Workflow Triggers"],
    products: ["Hive Agents", "Flow Engine"],
  },
  {
    id: "impact",
    layer: "04",
    name: "Impact Layer",
    tagline: "Measure. Optimise. Compound.",
    description:
      "Track followers, conversions, revenue, and ROI across Instagram, TikTok, your website, and every automated workflow — then optimise what works.",
    color: "#a855f7",
    nodes: ["Social ROI", "Conversion Tracking", "A/B Testing", "Growth Reports"],
    products: ["Cortex Analytics", "AI Consulting"],
  },
];

export const productVideos = [
  {
    id: "social-pulse",
    title: "Social Pulse",
    subtitle: "Instagram, TikTok & social growth",
    preset: "SOCIAL",
    image: "/images/showcase-agency.jpg",
    description:
      "Expand your brand on Instagram, TikTok, LinkedIn, and more — with content scheduling and growth workflows built for your business.",
  },
  {
    id: "hive-agents",
    title: "Hive Agents",
    subtitle: "Autonomous business workers",
    preset: "AGENTS",
    image: "/images/showcase-automation.jpg",
    description:
      "AI agents that handle lead follow-ups, customer support, content publishing, and ops — tailored to your exact processes.",
  },
  {
    id: "flow-engine",
    title: "Flow Engine",
    subtitle: "Custom workflow automation",
    preset: "WORKFLOWS",
    image: "/images/showcase-workflows.jpg",
    description:
      "Automated workflows connecting your website, social channels, CRM, and email — designed around how your business actually runs.",
  },
  {
    id: "signal-core",
    title: "Signal Core",
    subtitle: "Unified business intelligence",
    preset: "DATA",
    image: "/images/showcase-finance.jpg",
    description:
      "Pull data from social platforms, your website, and internal tools into one live dashboard your team can act on.",
  },
  {
    id: "cortex-analytics",
    title: "Cortex Analytics",
    subtitle: "Growth & performance intelligence",
    preset: "ANALYTICS",
    image: "/images/showcase-finance.jpg",
    description:
      "Track social growth, website conversions, and campaign ROI in real time — with insights that show what's working.",
  },
  {
    id: "genesis-studio",
    title: "Genesis Studio",
    subtitle: "Websites & landing pages",
    preset: "WEB BUILD",
    image: "/images/showcase-web.jpg",
    description:
      "Corporate websites and landing pages that convert — connected to your social channels, CRM, and automated follow-up workflows.",
  },
];

export const capabilities = [
  { title: "Website Design & Build", desc: "Corporate sites, landing pages, and redesigns — React, Framer Motion, 4–8 week typical delivery." },
  { title: "Web Applications", desc: "Portals, booking systems, dashboards, and SaaS tools integrated with your stack." },
  { title: "Marketing Agency Systems", desc: "Multi-client infrastructure, campaign pages, content workflows, and reporting." },
  { title: "Custom CRM Systems", desc: "Bespoke pipelines and client management — standalone or integrated with existing CRMs." },
  { title: "AI & Workflow Automation", desc: "n8n, Make, and custom automations connecting web, CRM, email, and ops." },
  { title: "SEO, Rebrand & Creative", desc: "Technical SEO, brand refreshes, and campaign creative for sustained growth." },
];

export const enterpriseStats = [
  { value: "40+", label: "Enterprise projects delivered" },
  { value: "8 wks", label: "Avg. website build time" },
  { value: "85%", label: "Client processes automated" },
  { value: "50k+", label: "Programmes from (£)" },
];

export const industries = [
  { name: "Finance & Banking", icon: "landmark", stat: "HSBC · Santander", desc: "Compliant AI automation, client onboarding, and enterprise CRM systems." },
  { name: "Public Sector", icon: "briefcase", stat: "Tower Hamlets · TfL", desc: "London borough digital services, citizen workflows, and secure infrastructure." },
  { name: "Fitness & Leisure", icon: "heart", stat: "Fitness First", desc: "Member CRM, engagement platforms, and multi-location operations." },
  { name: "Healthcare", icon: "heart", stat: "NHS England", desc: "Patient portals, appointment systems, and secure automation." },
  { name: "Professional Services", icon: "briefcase", stat: "Client portal builds", desc: "Websites, CRM, and automated client delivery pipelines." },
  { name: "Enterprise Retail", icon: "store", stat: "Omnichannel delivery", desc: "E-commerce sites, inventory workflows, and customer-facing apps." },
];

export const deployments = [
  {
    org: "HSBC",
    logo: "/logos/hsbc.svg",
    vertical: "Finance",
    system: "Signal Core + Flow Engine",
    headline: "Enterprise AI automation across global operations",
    result: "£2.4M annual savings",
    metric: "85% faster processing",
    timeline: "6 months to full ROI",
    poster: "/images/showcase-finance.jpg",
  },
  {
    org: "Tower Hamlets",
    logo: "/logos/tower-hamlets.svg",
    vertical: "London Borough",
    system: "Genesis Studio + Hive Agents",
    headline: "Digital citizen services for a London borough council",
    result: "47% wait time reduction",
    metric: "£890k operational savings",
    timeline: "90-day measurable impact",
    poster: "/images/showcase-crm.jpg",
  },
  {
    org: "Fitness First",
    logo: "/logos/fitness-first.svg",
    vertical: "Fitness & Leisure",
    system: "Custom CRM + Cortex Analytics",
    headline: "Member portal and CRM across 500+ UK locations",
    result: "28% retention improvement",
    metric: "8-week full rollout",
    timeline: "Full stack live in 8 weeks",
    poster: "/images/showcase-fitness.jpg",
  },
  {
    org: "NHS England",
    logo: "/logos/nhs.svg",
    vertical: "Healthcare",
    system: "Hive Agents + Flow Engine",
    headline: "Patient workflow automation and secure digital services",
    result: "52% admin time saved",
    metric: "6-week pilot rollout",
    timeline: "Live across 3 trusts",
    poster: "/images/showcase-healthcare.jpg",
  },
];

export const metrics = [
  { value: 40, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: " wks", label: "Avg. Build Time" },
  { value: 85, suffix: "%", label: "Processes Automated" },
  { value: 5, suffix: "+", label: "Years Expertise" },
];

export const platformNodes = [
  { id: "social", label: "Social Channels", x: 8, y: 30 },
  { id: "web", label: "Your Website", x: 8, y: 70 },
  { id: "content", label: "Content AI", x: 30, y: 50 },
  { id: "agent", label: "Agent Core", x: 52, y: 50 },
  { id: "workflow", label: "Workflows", x: 72, y: 30 },
  { id: "analytics", label: "Analytics", x: 72, y: 70 },
  { id: "output", label: "Growth & Revenue", x: 92, y: 50 },
];

export const faqs = [
  {
    q: "What do you actually build?",
    a: "Websites, web applications, custom CRM systems, marketing agency infrastructure, workflow automation, SEO, and brand redesigns. A typical engagement might be a new corporate site (4–8 weeks), a client portal app (8–14 weeks), or automation connecting your website to your CRM — or all of the above as a full stack.",
  },
  {
    q: "Can you build websites and web applications?",
    a: "Yes — that's core work for us. We build marketing sites and landing pages on React and Framer Motion, plus web apps like booking systems, member portals, admin dashboards, and client-facing tools. Everything is scoped to your requirements and integrated with your existing tools where needed.",
  },
  {
    q: "Do you work with marketing agencies?",
    a: "Yes. We build the technology behind agency delivery — campaign landing pages, multi-client content workflows, social scheduling systems, white-label reporting, and onboarding automation. Agencies use us to scale delivery without hiring a full in-house dev team.",
  },
  {
    q: "Can you build a custom CRM for our business?",
    a: "Yes. We build bespoke CRM platforms when off-the-shelf tools don't fit — custom pipelines, contact management, automations, and client portals. We can also integrate with HubSpot, Salesforce, or Pipedrive if you want to extend what you already have.",
  },
  {
    q: "How long do projects take?",
    a: "Landing pages and simple sites: 2–4 weeks. Full website builds: 4–8 weeks. Web applications and CRM systems: 8–14 weeks. Full-stack engagements with multiple systems: 3–6 months. We give you a clear timeline after the discovery phase.",
  },
  {
    q: "What does a typical engagement cost?",
    a: "Full-stack enterprise programmes start at £50,000. Website builds typically range from £15k–£40k depending on scope. Web apps and CRM systems are quoted based on complexity after discovery. We're transparent about pricing upfront.",
  },
  {
    q: "Do you only work with large enterprises?",
    a: "We work with enterprise organisations and established businesses — finance, public sector, fitness, professional services, and marketing agencies. If you need production-quality websites, apps, or automation, we can scope a project to fit.",
  },
  {
    q: "How do you integrate with our existing tools?",
    a: "We map your current stack first — CRM, email, analytics, payment, auth — then build integrations using APIs, n8n, Make, or custom middleware. Nothing is rip-and-replace unless you want it to be.",
  },
];

export const leadership = [
  {
    name: "Amino",
    role: "AI Strategic Advisor",
    bio: "Guides enterprise AI strategy, architecture roadmaps, and scalable intelligence platforms.",
  },
  {
    name: "Omar",
    role: "AI Consultant",
    bio: "Advises organisations on AI strategy, automation roadmaps, and digital transformation.",
  },
  {
    name: "Hussain",
    role: "Project Manager",
    bio: "Leads delivery across websites, CRM builds, and automation programmes on time and on scope.",
  },
];
