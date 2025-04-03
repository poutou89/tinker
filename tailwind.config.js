/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      colors: {
        jaune: '#FBCB5C',
        orangefoncee: '#F69431',
        bleu: '#3DC1CD',
      },
      fontFamily: {
        body: "Montserrat",
        titre: "Raleway",
      },
    },
  },
  plugins: [],
}

