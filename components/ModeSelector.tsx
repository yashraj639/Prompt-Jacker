import { MODE_META, MODES, Mode } from "../app/constants";

interface ModeSelectorProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export function ModeSelector({ mode, setMode }: ModeSelectorProps) {
  const meta = MODE_META[mode];

  return (
    <div className="glass rounded-3xl p-6 shadow-glow">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-mist">
            Intent
          </p>
          <h2 className="mt-2 font-display text-2xl">Choose your heist mode</h2>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 p-1">
          {MODES.map((key) => {
            const Icon = MODE_META[key].icon;
            const active = key === mode;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setMode(key)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-white text-black shadow-md"
                    : "text-mist hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {MODE_META[key].label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-mist">
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em]">
          {meta.badge}
        </span>
        <span>{meta.tone}</span>
      </div>
    </div>
  );
}
