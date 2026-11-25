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
          cyan: "#00f0ff",
          teal: "#00ffcc",
          dark: "#0a0e27",
        },
        tech: {
          primary: "#0066ff",
          secondary: "#00d4ff",
          accent: "#a855f7",
          dark: "#0a0e27",
          light: "#00ffcc",
        },
      },
      backgroundImage: {
        "gradient-cyber":
          "linear-gradient(135deg, #0a0e27 0%, #1e293b 50%, #0a0e27 100%)",
        "gradient-accent": "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)",
        "gradient-text": "linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #ec4899 100%)",
        "gradient-tech": "linear-gradient(135deg, #0066ff 0%, #00d4ff 50%, #a855f7 100%)",
        "gradient-glow": "radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, rgba(10, 14, 39, 0) 70%)",
        "grid-pattern": "linear-gradient(0deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.05) 75%, rgba(0, 212, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.05) 75%, rgba(0, 212, 255, 0.05) 76%, transparent 77%, transparent)",
      },
      backgroundSize: {
        "grid": "50px 50px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "scan": "scan 8s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "orbit": "orbit 20s linear infinite",
        "float-up": "float-up 4s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "cyber-pulse": "cyber-pulse 3s ease-in-out infinite",
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
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(0, 212, 255, 0.8)",
          },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "float-up": {
          "0%": { transform: "translateY(0px)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(-20px)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "cyber-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "cyber": "0 0 20px rgba(0, 212, 255, 0.5)",
        "cyber-lg": "0 0 40px rgba(0, 212, 255, 0.8)",
        "tech": "0 0 30px rgba(0, 102, 255, 0.4)",
        "neon": "0 0 20px rgba(255, 0, 100, 0.5)",
        "glow": "inset 0 0 20px rgba(0, 212, 255, 0.1)",
      },
      border: {
        "cyber": "1px solid rgba(0, 212, 255, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
