import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import animated from "tailwindcss-animated";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "jps-cream": "#F3EBE1",
        "jps-green": "#006D52",
        "jps-blue": "#006FF4",
        "camgian-green": "#00AD50",
        "adtran-blue": "#049ccd",
        "adtran-green": "#88cb6c",
        "adtran-purple": "#4262f2",
        "adtran-pink": "#c56ca2",
        "msstate-maroon": "#3e1a24",
        "taylorsville-gold": "#ffa800",
        "taylorsville-green": "#068b48",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        dark: {
          css: {
            "ul > li::marker": {
              color: "#F3EBE1",
            },
          },
        },
        DEFAULT: {
          css: {
            "ul > li::marker": {
              color: "#000000",
            },
          },
        },
      },
    },
  },
  plugins: [animated, animate, typography],
} satisfies Config;
