import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefinSlab: ['"Josefin Slab"', 'serif'],
        voltaire: ["'Voltaire'", "sans-serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
        georgia: ["Georgia", "serif"],
        frangela: ["'Frangela'", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        impactBlue: "#1e7dba",
        plusBlue: "#293c83",
        lightBlue: "#3B82F6",
        darkBlue: "#1E40AF",
        silverGrey: "#9CA3AF",
      },
    },
  },
  plugins: [],
} satisfies Config;
