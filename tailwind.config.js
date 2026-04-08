/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f7fce8",
          100: "#ecf7c8",
          200: "#dcf095",
          300: "#c7e65b",
          400: "#bde51b", // primary lime
          500: "#98b815", // hover lime
          600: "#7c9812",
          700: "#5e7510",
          800: "#455310",
          900: "#364211"
        },
        charles: {
          dark: "#363636",
          darker: "#1d1d1d",
          black: "#000000",
          lime: "#bde51b",
          limeHover: "#98b815",
          light: "#cccccc"
        }
      },
      fontFamily: {
        heading: ["'DM Sans'", "sans-serif"],
        body: ["'Roboto'", "sans-serif"],
      }
    },
  },
  plugins: [],
};
