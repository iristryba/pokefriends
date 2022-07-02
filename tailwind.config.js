/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'hex-pattern': "url('/src/hex-pattern.png')",
        'cute-blue-pokemon': "url('/src/cute-blue-pokemon_katrinavt .jpg')",
        'cute-dark-pokemon': "url('/src/cute-dark-pokemon.png')",
        'cracked': "url('/src/cracked-glass.png')",
      }
    },
  },
  plugins: [],
}
