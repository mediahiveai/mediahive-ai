import { CONTACT_EMAIL } from "./contact";

const FALLBACK_DEFAULT =
  `Thanks for your question. MediaHive AI builds websites, web apps, custom CRM systems, and AI automation for enterprise clients including HSBC, NHS England, Tower Hamlets, and Fitness First. Enterprise programmes start from £50k. Email us at ${CONTACT_EMAIL} or use the contact form for a detailed reply within one business day.`;

type Rule = { match: RegExp; reply: string };

const rules: Rule[] = [
  {
    match: /crm|pipeline|hubspot|salesforce/i,
    reply:
      "We build bespoke CRM platforms — custom pipelines, contact management, automations, and client portals. We can also integrate with HubSpot or Salesforce. Typical CRM builds run 8–14 weeks. Book a call via the contact form and we'll scope it to your process.",
  },
  {
    match: /website|web design|landing page|redesign|framer|react/i,
    reply:
      "Website design and build is core work for us — corporate sites, landing pages, and full redesigns on React, TypeScript, and Framer Motion. Typical delivery is 4–8 weeks including UX, development, CMS setup, and launch.",
  },
  {
    match: /app|portal|dashboard|booking|member/i,
    reply:
      "We build web applications — client portals, booking systems, member apps, and admin dashboards — integrated with your CRM and existing tools. Projects are scoped to what your team will actually use, usually 8–14 weeks.",
  },
  {
    match: /automation|workflow|n8n|make|zapier|agent|ai/i,
    reply:
      "Our AI and automation work connects your website, CRM, email, and ops using n8n, Make, or custom code — including AI agents for support and lead follow-up. We map your process first, then automate what saves real time.",
  },
  {
    match: /agency|marketing agency|multi.?client|white.?label/i,
    reply:
      "We build marketing agency infrastructure — multi-client campaign pages, content workflows, social scheduling, and white-label reporting. Agencies use us to scale delivery without hiring a full in-house dev team.",
  },
  {
    match: /seo|search|organic|traffic|content strategy/i,
    reply:
      "We deliver technical SEO, site speed improvements, schema markup, and content strategy aligned with your business goals — sustainable organic growth, not shortcuts.",
  },
  {
    match: /cost|price|pricing|budget|£|how much/i,
    reply:
      "Enterprise programmes start at £50,000. Website builds typically range from £15k–£40k. Web apps and CRM systems are quoted after discovery based on complexity. We're transparent about pricing upfront.",
  },
  {
    match: /how long|timeline|weeks|delivery|take/i,
    reply:
      "Landing pages: 2–4 weeks. Full websites: 4–8 weeks. Web apps and CRM: 8–14 weeks. Full-stack engagements: 3–6 months. We give you a clear timeline after the discovery phase.",
  },
  {
    match: /hsbc|nhs|tower hamlets|fitness first|client|who do you work/i,
    reply:
      "We work with enterprise organisations including HSBC, NHS England, Tower Hamlets London Borough Council, Fitness First, Transport for London, and Canary Wharf Group — across finance, healthcare, public sector, and fitness.",
  },
  {
    match: /team|amino|omar|hussain|who (are|is) you/i,
    reply:
      "MediaHive AI is led by Amino (AI Strategic Advisor), Omar (AI Consultant), and Hussain (Project Manager) — covering strategy, consulting, and project delivery across websites, CRM, and automation.",
  },
  {
    match: /contact|email|call|speak|reach|hello|enquir/i,
    reply: `The best way to reach us is the contact form on this page or email ${CONTACT_EMAIL}. We respond within one business day.`,
  },
  {
    match: /what (can|do) you build|services|offer/i,
    reply:
      "We build websites, web applications, custom CRM systems, marketing agency infrastructure, AI workflow automation, SEO, and brand redesigns — for corporate teams and enterprise organisations.",
  },
  {
    match: /enterprise|£50|50k|large org/i,
    reply:
      "Our enterprise engagements start from £50,000 — full-stack programmes including bespoke CRM, compliance-ready automation, and digital transformation for finance, public sector, and healthcare.",
  },
];

export type FallbackMessage = { role: "user" | "assistant"; content: string };

export function getFallbackReply(messages: FallbackMessage[]): string {
  const last = messages.filter((m) => m.role === "user").pop()?.content ?? "";
  for (const rule of rules) {
    if (rule.match.test(last)) return rule.reply;
  }
  return FALLBACK_DEFAULT;
}
