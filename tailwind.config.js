/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}/"],
  theme: {
    extend: {
      spacing:{
        // untuk mencuztomize harus di dalam extend
        13:'3.25rem',
      }
    },
  },
  plugins: [],
}

