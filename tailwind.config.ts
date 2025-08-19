// tailwind.config.ts (Tailwind v4)
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

export default {
  // keep the class strategy
  darkMode: "class",

  // v4 does not use `content:` (the engine auto-scans)
  // remove theme colors/radius here — they live in CSS @theme now

  theme: {
    // You can still extend non-color things if you want:
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  // use ESM imports for plugins (many CJS requires break in v4)
  plugins: [typography(), animate],
} satisfies Config;
