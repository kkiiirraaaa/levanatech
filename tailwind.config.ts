import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      border: {
        t: {
          w: "30px",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#0E51AC",
          dark: "#217FFF",
          light: "#F5F5F5",
        },
        dark: {
          DEFAULT: "#1E1E1E",
          lighter: "#28292A",
          card: "#2D2D2D",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
