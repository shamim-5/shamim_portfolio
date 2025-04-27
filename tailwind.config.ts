// import type { Config } from "tailwindcss";

const config = {
  content: ["./src/app/**/*.{jsx,tsx}", "./src/components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#C0BCCA",
        dark: "#0F0E11",
      },
      fontFamily: {
        jetBrains: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],

  corePlugins: {
    preflight: true,
  },
  important: true,
};
export default config;
