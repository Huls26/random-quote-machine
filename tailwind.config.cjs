/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'],
    },
    colors: {
      'brown': '#795548',
      'white': colors.white,
      "classicBlue": '#34568B',
      "livingCoral": '#FF6F61',
      "ultraViolet": '#6B5B95',
      "greenery": '#88B04B',
      "roseQuartz": '#F7CAC9',
      "serenity": '#92A8D1',
    },
  },
  plugins: [],
}
