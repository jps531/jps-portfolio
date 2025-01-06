import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import animated from "tailwindcss-animated";

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
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animated, animate],
} satisfies Config;
