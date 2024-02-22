import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        "360": "360deg",
      },
      colors: {
        c0: "#101010",
        c1: "#131313",
        c2: "#202329",
        c3: "#8B8D93",
        c4: "#6b8afd",
        c5: "#2E343D",
        accent: "#FF1717",
        primary: "#17181e",
        red: "#E51C30",
        btnred: "#d21b1c",
        paratext: "#D2DAE0",
        text: "#B4B6A2",
        xgray: "#B4B6C1",
        gold: "#D49302",
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, "sans-serif"],
        sora: [`var(--font-sora)`, "sans-serif"],
        rubik: [`var(--font-rubik)`, "sans-serif"],
        nunito: ["Nunito sans", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        rubik1: ["Rubik", "sans-serif"],
        rubikmono: ["Rubik Mono One", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        krona: ["var(--font-krona)"],
        quicksand: ["var(--font-quicksand)"],
      },
      screens: {
        xs: "440px",
      },
      boxShadow: {
        "3xl": "0 0 7px 3px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
  variants: {},
};
export default config;
