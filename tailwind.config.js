/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0f",
        haze: "#101019",
        brass: "#f5c56b",
        coal: "#1a1a24",
        mist: "#a7a7bb",
        neon: "#37f7d1",
        mag: "#ff4fd8"
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(60% 60% at 20% 10%, rgba(55,247,209,0.15), transparent 60%), radial-gradient(50% 50% at 90% 10%, rgba(255,79,216,0.18), transparent 60%), radial-gradient(60% 80% at 50% 100%, rgba(245,197,107,0.12), transparent 60%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E\")"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.6)",
        neon: "0 0 30px rgba(55,247,209,0.35)"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-110%)" },
          "100%": { transform: "translateY(110%)" }
        },
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        scan: "scan 2.6s linear infinite",
        floaty: "floaty 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
