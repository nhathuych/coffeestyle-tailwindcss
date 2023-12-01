/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee': '#c89f94',
        'coffee': {
          50:  '#ecd2ca',
          200: '#c89f94',
          400: '#a25f4b',
          600: '#6b4234',
        }
      },
      backgroundImage: {
        'header-pic': 'url("./img/header-pic.jpeg")'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown .3s ease-in-out',
      },
    },
  },
  plugins: [],
}
