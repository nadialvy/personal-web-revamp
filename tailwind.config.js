/** @type {import('tailwindcss').Config} */
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
          '500': '#C82179'
        }
      },
      fontFamily: { 'inter': ['Inter', 'Helvetica', 'Arial', 'sans-serif'] }
    },
  },
  plugins: [],
}