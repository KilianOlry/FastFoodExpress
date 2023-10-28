/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./assets/pages/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/assets/images/bg-burger.jpg')",
      },
      colors: {
        'bg-green': '#e5ffcc',
        'bg-yellow': '#fff1ae',
        'bg-purple': '#e9beff',
        'bg-orange': '#ff6013',
      },
    },
  },
  plugins: [],
}

