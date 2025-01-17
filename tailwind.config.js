/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'bgray' :'#d5d5d5',
        'headertext' :'#a18a4d',
        'ptext': '#212529'
      }
    },
  },
  plugins: [],
}

