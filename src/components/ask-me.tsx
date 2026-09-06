"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "What has Mike built?",
  "How did he get into development?",
  "What's his infrastructure experience?",
];

export function AskMe() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest" });
  }, [messages]);

  useEffect(() => () => abortRef.current?.abort(), []);

  async function send(text: string) {
    const question = text.trim();
    if (!question || busy) return;

    const history: Message[] = [...messages, { role: "user", content: question }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setError(null);
    setBusy(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: answer }]);
      }
      if (!answer.trim()) throw new Error("No answer came back. Try again.");
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setMessages(history);
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {messages.length > 0 && (
        <div className="flex max-h-80 flex-col gap-3 overflow-y-auto rounded-md border border-line bg-paper-raised p-4 text-sm leading-relaxed">
          {messages.map((m, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                {m.role === "user" ? "You" : "Assistant"}
              </span>
              <p className="whitespace-pre-wrap text-ink-soft">
                {m.content}
                {m.role === "assistant" && busy && i === messages.length - 1 && (
                  <span className="caret">▌</span>
                )}
              </p>
            </div>
          ))}
          <div ref={endRef} />
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 rounded-md border border-line bg-paper-raised px-3 py-2 font-mono text-sm focus-within:border-accent"
      >
        <span className="text-accent" aria-hidden>
          &gt;
        </span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything"
          aria-label="Ask a question"
          maxLength={1000}
          disabled={busy}
          className="min-w-0 flex-1 bg-transparent text-ink outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="text-accent hover:text-ink disabled:text-muted"
        >
          {busy ? "…" : "Send"}
        </button>
      </form>

      {error && <p className="font-mono text-xs text-accent">{error}</p>}

      {messages.length === 0 && (
        <div className="flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => send(s)}
              className="rounded border border-line bg-paper-raised px-2.5 py-1 font-mono text-xs text-ink-soft hover:border-accent hover:text-accent"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
