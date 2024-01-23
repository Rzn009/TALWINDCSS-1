/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Membuat custom Spacing
      spacing:{
        '13': '3.25rem'
      }
    },
    fontFamily:{
      'Poppins' : ['poppins']
    },
    transformOrigin: {
      'top-left-1/3-3/4': '33% 75%',
    }
  },
  plugins: [],
}