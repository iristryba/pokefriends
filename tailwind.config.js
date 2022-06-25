/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hex-pattern': "url('/src/hex-pattern.png')",
        'hex-pattern2': "https://www.toptal.com/designers/subtlepatterns/uploads/what-the-hex.png",
        'cute-blue-pokemon': "url('/src/cute-blue-pokemon_katrinavt .jpg')"
      }
    },
  },
  plugins: [],
}
