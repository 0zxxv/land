import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        "navy-light": "#1e293b",
        cream: "#fefce8",
        "off-white": "#f8fafc",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        newsreader: ["Newsreader", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
