/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        banner: ['Lexend Deca', 'sans-serif'],
        main: ['Roboto', 'sans-serif'],
        anton: ['Anton', 'sans-serif']
      }
    },
  },
  plugins: [],
}
