"use client";

import { useState } from "react";
import { Mode } from "./constants";
import { Header } from "@/components/Header";
import { ModeSelector } from "@/components/ModeSelector";
import { FileDropper } from "@/components/FileDropper";
import { PromptDisplay } from "@/components/PromptDisplay";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [mode, setMode] = useState<Mode>("art");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  let hint = "Upload a target image to begin.";
  if (status === "loading") hint = "Jacking the prompt...";
  if (status === "done") hint = "Recipe secured.";
  if (status === "error") hint = "Heist failed.";

  const onFileChange = (selected?: File | null) => {
    if (!selected) return;
    if (!selected.type.startsWith("image/")) {
      setError("Please upload a PNG or JPG image.");
      setStatus("error");
      return;
    }
    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
    setPrompt("");
    setStatus("idle");
    setError(null);
  };

  const handleScan = async () => {
    if (!file) {
      setError("Drop an image to reverse-engineer.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("mode", mode);

      const response = await fetch("/api/reverse-engineer", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Unknown error");
      }

      setPrompt(data.prompt || "");
      setStatus("done");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unexpected error.";
      setError(message);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen px-6 pb-20 pt-12">
      <Header />

      <main className="mx-auto mt-10 grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="flex flex-col gap-6">
          <ModeSelector mode={mode} setMode={setMode} />
          <FileDropper
            status={status}
            previewUrl={previewUrl}
            onFileChange={onFileChange}
            onScan={handleScan}
          />
        </section>

        <section className="flex h-full flex-col gap-6">
          <PromptDisplay prompt={prompt} hint={hint} error={error} />
        </section>
      </main>
    </div>
  );
}
