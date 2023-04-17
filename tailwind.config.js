/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'purple':{
          '500': '#302895'
        },
        'pink':{
          '500': '#C82179',
          '600': '#A61662',
        }
      },
      fontFamily: { 'inter': ['Inter', 'Helvetica', 'Arial', 'sans-serif'] }
    },
  },
  plugins: [
    plugin(function({ addUtilities }){
      const utilities = {
        ".bg-hero-first": {
          "background-image": "url(/bg-hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat"
        },
      };

      addUtilities(utilities);
    })
  ],
}