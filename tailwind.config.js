/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"], //content = colocar as pastas e subpastas que utilizarão
    theme: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      extend: {
        backgroundImage: { //Pegando a imagem de fundo da página
          "home": "url('/assets/bg.png')" // usando na tag HEADER por bg-home
        }
      },
    },
    plugins: [],
 }

