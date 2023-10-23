/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-profil': "url('./assets/images/profil.jpg')",
        'bg-burger': "url('./assets/images/burger.jpg')",
        'bg-burger': "url('./assets/images/burger-card-1.jpg')",
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

