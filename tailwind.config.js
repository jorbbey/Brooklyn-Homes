/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/assets/estate-1.jpg')",
      },
      colors: {
        primary: "#bc963f",
      },
      fontFamily: {
        "gothic-condensed": ["SpecialGothicCondensedOne-Regular", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
