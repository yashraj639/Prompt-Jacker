"use client";

import { useState } from "react";
import { Copy, RotateCcw } from "lucide-react";

interface PromptDisplayProps {
  prompt: string;
  hint: string;
  error: string | null;
}

export function PromptDisplay({ prompt, hint, error }: PromptDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass flex h-full flex-col rounded-3xl p-6 shadow-glow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-mist">
            Output
          </p>
          <h3 className="mt-2 font-display text-2xl">The stolen prompt</h3>
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-mist">
          {hint}
        </span>
      </div>

      <div className="mt-4 flex-1 rounded-2xl border border-white/10 bg-black/40 p-5">
        <p className="whitespace-pre-wrap font-mono text-sm text-white/90">
          {prompt ||
            "Cinematic lighting, 35mm lens, hyper-detailed portrait, teal shadows, golden rim light, Unreal Engine render, glossy reflections..."}
        </p>
      </div>

      {error ? <p className="mt-3 text-sm text-mag">{error}</p> : null}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-mist transition hover:border-white/40 hover:text-white"
        >
          <Copy className="h-4 w-4" />
          {copied ? "Copied" : "Copy"}
        </button>
        <button
          type="button"
          disabled
          className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-mist/60"
        >
          <RotateCcw className="h-4 w-4" />
          Remix (Soon)
        </button>
      </div>
    </div>
  );
}
