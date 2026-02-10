import { MODE_META, Mode } from "../app/constants";

interface EngineInfoProps {
  mode: Mode;
}

export function EngineInfo({ mode }: EngineInfoProps) {
  const meta = MODE_META[mode];
  const MetaIcon = meta.icon;

  return (
    <div className="glass rounded-3xl p-6 shadow-glow">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
          <MetaIcon className="h-6 w-6 text-brass" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-mist">
            Selected Engine
          </p>
          <p className="font-display text-lg text-white">{meta.label}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-mist">
        {mode === "art"
          ? "Expect camera metadata, lighting, rendering engines, and dense style tags."
          : "Expect layout primitives, UI component language, typography stacks, and palette hierarchy."}
      </p>
    </div>
  );
}
