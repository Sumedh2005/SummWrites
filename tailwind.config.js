/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        or1: "#EB7100",   // Orange 1
        or2: "#F3892C",   // Orange 2
        p1: "#978df9",    // Purple 1
        p2: "#E2DFFF",    // Purple 2
        
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"], // Added Ubuntu font
      },
    },
  },
  plugins: [],
  darkMode : "class",
};
