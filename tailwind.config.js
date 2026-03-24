/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#E60000",
          hover: "#FF1A1A",
          soft: "rgba(230,0,0,0.12)"
        }
      },
      boxShadow: {
        "red-glow": "0 0 26px rgba(230,0,0,0.24)",
        "red-glow-lg": "0 0 40px rgba(230,0,0,0.20)",
        "panel": "0 20px 50px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        "hero-viteauto": "radial-gradient(circle at 72% 32%, rgba(255,0,0,0.22), transparent 18%), radial-gradient(circle at 28% 70%, rgba(255,0,0,0.08), transparent 22%), linear-gradient(180deg,#050505 0%, #090909 100%)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
