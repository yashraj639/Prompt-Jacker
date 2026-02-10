import { Zap, Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl flex-col gap-4">
      <div className="tag w-fit">
        <Zap className="h-3.5 w-3.5" />
        Reverse-Engineering Lab
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Prompt-Jacker
          </h1>
          <p className="text-lg text-mist">
            Don&apos;t just admire the view. Steal the recipe.
          </p>
        </div>
        <div className="glass flex items-center gap-3 rounded-full px-4 py-3 text-sm text-mist shadow-glow">
          <Sparkles className="h-4 w-4 text-brass" />
          The inspect element for visuals
        </div>
      </div>
    </header>
  );
}
