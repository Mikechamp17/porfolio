"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "What do you build?",
  "What's your stack?",
  "How do you approach AI?",
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
    <div className="flex flex-col">
      {messages.length > 0 && (
        <div className="mb-6 flex max-h-80 flex-col gap-5 overflow-y-auto text-sm leading-relaxed">
          {messages.map((m, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
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
        className="flex items-center gap-2 border-t border-line pt-4 font-mono focus-within:border-accent"
      >
        <span className="text-[13px] text-muted" aria-hidden>
          &gt;
        </span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything"
          aria-label="Ask a question"
          maxLength={1000}
          disabled={busy}
          className="min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-muted sm:text-[13px]"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="text-[13px] text-ink-soft hover:text-accent disabled:text-muted"
        >
          {busy ? "…" : "Send"}
        </button>
      </form>

      {error && <p className="mt-3 font-mono text-xs text-accent">{error}</p>}

      {messages.length === 0 && (
        <div className="mt-2 flex flex-col items-start sm:mt-4 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-1">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => send(s)}
              className="py-1.5 font-mono text-[11px] text-muted hover:text-accent sm:py-2"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
