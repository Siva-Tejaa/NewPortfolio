/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#474BFF",
        darkprimary: "#878AEF",
        darkheader: "#E1E1E1",
        darknormal: "#DDDBDB",
        darkblack: "#3C4042",
        background1: "#F1F2FB",
        background2: "#E9EBF9",
        background3: "#F8F9FB",
      },
    },
    screens: {
      tablet: "481px",
      laptop: "768px",
      desktop: "1024px",
    },
  },
  plugins: [],
  darkMode: "class",
};
