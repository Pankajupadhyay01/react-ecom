/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        midnight: "#121063",
      },
    },
  },
  plugins: [], 
 
}