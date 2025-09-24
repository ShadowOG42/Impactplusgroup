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
        lightBlue: "#3B82F6",     // for Cpu icon
        darkBlue: "#1E40AF",      // for Cloud icon
        silverGrey: "#9CA3AF",    // for Globe icon
      },
    },
  },
  plugins: [],
} satisfies Config;
