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
    }
  },
  plugins: [],
}