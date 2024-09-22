import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
      },
      colors: {
        foreground: "hsl(240, 26%, 92%)",
        muted: "hsl(240, 2%, 63%)",
        background: "hsl(240, 2%, 11%)",
        card: "hsl(240, 2%, 16%)",
        border: "hsl(240, 2%, 25%)",
        input: "hsl(240, 2%, 18%)",
        primary: "hsl(93, 57%, 45%)",
        secondary: "hsl(240, 54%, 33%)",
        accent: "hsl(95, 42%, 57%)",
      },
      backgroundImage: {
        "gradient-play-button":
          "linear-gradient(to right, #57CF47, #8EC987)",
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
