/**
 * Local dev proxy for Claude API.
 * Run: ANTHROPIC_API_KEY=sk-... node server/claude-proxy.mjs
 * Vite proxies /api/chat → http://localhost:3001
 */

import http from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

// Load .env.local then .env for local dev (Vite uses .env.local; proxy must too)
function loadEnv() {
  for (const name of [".env.local", ".env"]) {
    const envPath = resolve(process.cwd(), name);
    if (!existsSync(envPath)) continue;
    for (const line of readFileSync(envPath, "utf8").split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const val = trimmed.slice(eq + 1).trim();
      if (!process.env[key]) process.env[key] = val;
    }
  }
}
loadEnv();

const PORT = 3001;
const API_KEY = process.env.ANTHROPIC_API_KEY;
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

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      try {
        resolve(JSON.parse(data || "{}"));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url !== "/api/chat" || req.method !== "POST") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  if (!API_KEY) {
    res.writeHead(503, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        error: "Claude API not configured. Set ANTHROPIC_API_KEY in your .env file.",
      })
    );
    return;
  }

  try {
    const { messages } = await readBody(req);

    if (!messages?.length) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Messages required" }));
      return;
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      res.writeHead(response.status, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: data.error?.message || "Claude API error" }));
      return;
    }

    const text = data.content?.[0]?.text || "No response generated.";
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ reply: text }));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: err.message || "Server error" }));
  }
});

server.listen(PORT, () => {
  console.log(`Claude proxy running → http://localhost:${PORT}/api/chat`);
  if (!API_KEY) console.warn("⚠  ANTHROPIC_API_KEY not set — chat will return 503");
});
