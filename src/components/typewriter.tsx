"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  text,
  speedMs = 45,
  className,
}: {
  text: string;
  speedMs?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= text.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), speedMs);
    return () => clearTimeout(id);
  }, [count, text, speedMs]);

  return (
    <span className={className}>
      <span aria-hidden>
        {text.slice(0, count)}
        <span className="caret">▌</span>
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
