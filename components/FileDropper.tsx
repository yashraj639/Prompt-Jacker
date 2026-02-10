"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ImageIcon } from "lucide-react";

interface FileDropperProps {
  status: "idle" | "loading" | "done" | "error";
  previewUrl: string | null;
  onFileChange: (file: File | null) => void;
  onScan: () => void;
}

export function FileDropper({
  status,
  previewUrl,
  onFileChange,
  onScan,
}: FileDropperProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onPickFile = () => {
    inputRef.current?.click();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const dropped = event.dataTransfer.files?.[0];
    onFileChange(dropped || null);
  };

  return (
    <div
      className="glass relative overflow-hidden rounded-3xl p-6 shadow-glow"
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-mist">
            Target
          </p>
          <h3 className="mt-2 font-display text-xl">
            Drop the reference image
          </h3>
        </div>
        <button
          type="button"
          onClick={onPickFile}
          className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-mist transition hover:border-white/40 hover:text-white"
        >
          Browse
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="relative rounded-2xl border border-dashed border-white/20 bg-black/40 p-5">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Uploaded preview"
              className="h-64 w-full rounded-xl object-cover"
            />
          ) : (
            <div className="flex h-64 flex-col items-center justify-center gap-3 text-mist">
              <ImageIcon className="h-8 w-8" />
              <p className="text-sm">PNG or JPG up to 8MB</p>
            </div>
          )}

          {status === "loading" ? (
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                animate={{ y: ["-120%", "120%"] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          ) : null}
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-mist">
            <p className="font-display text-lg text-white">How it works</p>
            <ul className="mt-3 space-y-2">
              <li>1. Upload a reference image.</li>
              <li>2. Pick Art or UI mode.</li>
              <li>3. We extract the recipe.</li>
            </ul>
          </div>
          <button
            type="button"
            onClick={onScan}
            className="rounded-2xl bg-brass px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:translate-y-[-2px] hover:shadow-neon"
          >
            Start the heist
          </button>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => onFileChange(event.target.files?.[0] || null)}
      />
    </div>
  );
}
