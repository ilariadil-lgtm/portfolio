import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        // ─── Ombre nette del tema editorial ───────────────────────────────
        // Erano 67 valori arbitrari sparsi: dentro un valore arbitrario un
        // token di colore non si puo usare, quindi diventano voci di tema.
        "brutal-2": "2px 2px 0px #c0392b",
        "brutal-4": "4px 4px 0px #3d0f1a",
        "brutal-6": "6px 6px 0px #c0392b",
        "brutal-8": "8px 8px 0px #c0392b",
        "brutal-10": "10px 10px 0px #c0392b",
        "brutal-10-ink": "10px 10px 0px #3d0f1a",
        "brutal-15": "15px 15px 0px #c0392b",
        "soft-6": "6px 6px 0px rgba(61,15,26,0.05)",
        "soft-8": "8px 8px 0px rgba(61,15,26,0.05)",
        "soft-10": "10px 10px 0px rgba(61,15,26,0.05)",
        "soft-15": "15px 15px 0px rgba(61,15,26,0.05)",
      },
      colors: {
        // ─── Token di marca ────────────────────────────────────────────────
        // Erano 1.313 valori scritti a mano in 68 file. I valori qui sotto
        // sono identici a quelli precedenti: questo passaggio non cambia un
        // pixel, rende solo modificabile in un punto solo cio che prima
        // andava cercato ovunque.
        ink: "#3d0f1a",      // editorial — testo, tratti, bordi
        cream: "#F7F4EC",    // editorial — superfici (allineato a palette.json)
        crimson: "#c0392b",  // editorial — accento
        gold: "#d4af37",     // nebula — accento
        night: "#080808",    // nebula — fondo

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        display: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        bricolage: ["Bricolage Grotesque Variable", "system-ui", "sans-serif"],
        fraunces: ["Fraunces Variable", "Georgia", "serif"],
        outfit: ["Bricolage Grotesque Variable", "system-ui", "sans-serif"], // legacy alias → punta su bricolage
        space: ["Bricolage Grotesque Variable", "system-ui", "sans-serif"],  // legacy alias
        inter: ["Inter Variable", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono Variable", "ui-monospace", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 1s cubic-bezier(0.16,1,0.3,1) forwards",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
