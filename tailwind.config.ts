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
        cream: "#EFEEE5",
        teal: "#274546",
        charcoal: "#333333",
        gold: "#F2A541",
      },
    },
  },
  plugins: [],
};
export default config;
