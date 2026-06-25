import { getFallbackReply } from "./chat-fallback";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function sendToClaude(messages: ChatMessage[]): Promise<string> {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });

    const data = (await res.json()) as { reply?: string; error?: string };

    if (res.ok && data.reply) {
      return data.reply;
    }
  } catch {
    // API unavailable — use local fallback
  }

  return getFallbackReply(messages);
}

export const CLAUDE_STARTERS = [
  "What can MediaHive build for my business?",
  "Can you build a custom CRM for us?",
  "Who are your enterprise clients?",
  "How much does a typical project cost?",
];
