import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "border-walk": {
          "0%": { top: "0%", left: "0%", width: "8px", height: "8px" },
          "16.6%": { top: "0%", left: "50%", width: "108px", height: "4px" },
          "33.3%": { top: "0%", left: "100%", width: "8px", height: "8px" },
          "49.9%": { top: "100%", left: "100%", width: "8px", height: "8px" },
          "66.6%": { top: "100%", left: "50%", width: "108px", height: "4px" },
          "83.3%": { top: "100%", left: "0%", width: "8px", height: "8px" },
          "100%": { top: "0%", left: "0%", width: "8px", height: "8px" },
        },
        "pulse-flower": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.4)" }, // hiệu ứng tách ra
        },
      },
      animation: {
        "border-walk": "border-walk 6s ease infinite",
        "spin-slow": "spin 10s linear infinite",
        "pulse-flower": "pulse-flower 2s ease-in-out infinite",
      },

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "main-background": "#E6EEFF",
      },
      container: {
        padding: {
          "1440px": "8px",
        },
        center: true,
        screens: {
          "1140px": "1140px",
          "1440px": "1440px",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
