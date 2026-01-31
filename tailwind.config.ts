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
        // Industrial color palette extracted from logo
        industrial: {
          red: {
            DEFAULT: "#B91C1C", // Primary red from logo
            dark: "#7F1D1D",
            light: "#DC2626",
          },
          black: "#0A0A0A",
          gray: {
            900: "#111827",
            800: "#1F2937",
            700: "#374151",
            600: "#4B5563",
            500: "#6B7280",
            400: "#9CA3AF",
            300: "#D1D5DB",
            200: "#E5E7EB",
            100: "#F3F4F6",
            50: "#F9FAFB",
          },
          steel: {
            900: "#18181B",
            800: "#27272A",
            700: "#3F3F46",
            600: "#52525B",
            500: "#71717A",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        "metal-texture": "url('/images/metal-texture.jpg')",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
      boxShadow: {
        "industrial": "0 10px 40px rgba(0, 0, 0, 0.4)",
        "industrial-lg": "0 20px 60px rgba(0, 0, 0, 0.5)",
        "red-glow": "0 0 30px rgba(185, 28, 28, 0.3)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
