/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    // menimpa
    container:{
      center: true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary: '#14b8a6',
        secondary: '#71717a',
        dark: '#0f172a'
      },
      screens:{
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}

