import type { Metadata } from "next";
import { Space_Grotesk, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Prompt-Jacker",
  description: "Don't just admire the view. Steal the recipe."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen">
        <div className="fixed inset-0 -z-10 bg-hero-glow" />
        <div className="fixed inset-0 -z-10 noise-layer" />
        {children}
      </body>
    </html>
  );
}
