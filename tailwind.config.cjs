/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0E7C66", // green-teal primary
          primaryDark: "#0A5D4D",
          accent: "#F59E0B", // warm accent (amber)
          surface: "#FFFFFF",
          muted: "#EFE7D3", // light sand
          bgTop: "#F5EEDC", // beige gradient top
          bgBottom: "#EDE3CF", // beige gradient bottom
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
