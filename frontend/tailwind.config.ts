import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        cyber: {
          blue: "#00d4ff",
          violet: "#a855f7",
          pink: "#ec4899",
        },
      },
      backgroundImage: {
        "gradient-cyber":
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        "gradient-accent": "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)",
        "gradient-text": "linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #ec4899 100%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(0, 212, 255, 0.5)" },
          "50%": { textShadow: "0 0 20px rgba(0, 212, 255, 0.8)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
