/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hero': [' Sriracha, cursive'], // Corrected this line
      },
    },
  },
  plugins: [],

}
