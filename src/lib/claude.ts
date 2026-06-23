export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function sendToClaude(messages: ChatMessage[]): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed to reach Claude");
  }

  return data.reply;
}

export const CLAUDE_STARTERS = [
  "What can MediaHive build for my business?",
  "Teach me how to start an AI marketing agency",
  "Can you build a custom CRM for us?",
  "We need a website redesign",
];
