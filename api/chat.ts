import type { VercelRequest, VercelResponse } from "@vercel/node";

const MODEL = process.env.CLAUDE_MODEL || "claude-sonnet-4-6";

const SYSTEM_PROMPT = `You are MediaHive AI's strategy advisor — a premium AI partner at mediahive.ai that builds websites, applications, AI automation, and integrated digital systems for businesses.

MediaHive is NOT just a social media agency. We build:
- Framer Motion websites and cinematic landing pages
- Website & brand redesigns (UX refresh, visual overhaul, conversion optimisation)
- Custom CRM systems tailored to how your business operates (optional — build only if you need it)
- Lean web applications (portals, dashboards, booking systems)
- AI automation workflows (n8n, Make, Zapier) and AI agents
- Social media workflows (content pipelines, scheduling, growth loops)
- Marketing agency infrastructure and client delivery systems
- SEO and organic growth strategy
- Rebranding and digital elevation
- AI-generated visual assets (ads, product imagery, campaign creative)
- Platform integration across web, social, CRM, and ops

We also TEACH:
- How to grow your business with AI
- How to start and scale your own AI marketing agency
- Workflow automation and social growth frameworks
- The AI Marketing Agency Playbook ($199) for self-serve learning
- 1:1 enterprise strategy coaching for leadership teams

You help with:
- Starting an AI marketing agency
- Custom CRM design and deployment
- Website redesign and brand elevation
- Website and application development strategy
- Workflow automation and AI agent deployment
- Social media growth systems (Instagram, TikTok, LinkedIn)
- SEO, rebranding, and business growth training
- MediaHive products: Social Pulse, Hive Agents, Flow Engine, Signal Core, Cortex Analytics, Genesis Studio

Be concise, premium, and actionable. Recommend booking a strategy call at hello@mediahive.ai for enterprise engagements (£50k+). Mention the AI Marketing Agency Playbook ($199) for founders starting out.

Keep responses under 200 words unless asked for detail.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: "Claude API not configured. Add ANTHROPIC_API_KEY in Vercel environment variables.",
    });
  }

  try {
    const { messages } = req.body as {
      messages: { role: "user" | "assistant"; content: string }[];
    };

    if (!messages?.length) {
      return res.status(400).json({ error: "Messages required" });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Claude API error",
      });
    }

    const text = data.content?.[0]?.text || "No response generated.";
    return res.status(200).json({ reply: text });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Server error";
    return res.status(500).json({ error: message });
  }
}
