import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages-components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_green: "#17b978",
        primary_pink: "#b91758",
        primary_orange: "#b92717",
        primary_purple: "#7817b9",
        primary_blue: "#17a9b9",
      },
    },
  },
  plugins: [],
};
export default config;
