/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        card: "#121212",
        border: "#27272A",
        brand: {
          DEFAULT: "#E60000",
          hover: "#FF1A1A",
          active: "#CC0000",
          muted: "rgba(230,0,0,0.1)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
          muted: "#71717A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Outfit", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        "red-glow": "0 0 25px rgba(230,0,0,0.28)",
        "red-glow-lg": "0 0 40px rgba(230,0,0,0.22)",
        card: "0 10px 35px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "viteauto-hero": "radial-gradient(circle at 75% 35%, rgba(230,0,0,0.35), transparent 26%), radial-gradient(circle at 25% 75%, rgba(230,0,0,0.16), transparent 24%), linear-gradient(to bottom, #050505, rgba(10,10,10,0.95))",
      },
      transitionProperty: {
        colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
        transform: "transform",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};