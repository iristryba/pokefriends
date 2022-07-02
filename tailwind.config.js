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
      
      colors: {
        normal: '#A8A77A',
        fighting: '#C22E28',
        flying: '#A98FF3',
        poison: '#A33EA1',
        ground: '#E2BF65',
        rock: '#B6A136',
        bug: '#A6B91A',
        ghost: '#735797',
        steel: '#B7B7CE',
        fire: '#EE8130',
        water: '#6390F0',
        grass : '#7AC74C',
        electric: '#F7D02C',
        psychic: '#F95587',
        ice: '#96D9D6',
        dragon: '#6F35FC',
        dark: '#705746',
        fairy: '#D685AD',
        unknown: 'teal-200',
        shadow: 'teal-600',
      },
      
      backgroundImage: {
        'hex-pattern': "url('/src/hex-pattern.png')",
        'cute-blue-pokemon': "url('/src/cute-blue-pokemon_katrinavt .jpg')",
        'cute-dark-pokemon': "url('/src/cute-dark-pokemon.png')",
        'cracked': "url('/src/cracked-glass.png')",
      },
    },
  },
}
