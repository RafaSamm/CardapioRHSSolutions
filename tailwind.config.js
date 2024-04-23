/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"], //content = colocar as pastas e subpastas que utilizarão o
    theme: {
      extend: {
        backgroundImage: { //Pegando a imagem de fundo da página
          "home": "url('/assets/bg.png')" // usando na tag HEADER por bg-home
        }
      },
    },
    plugins: [],
 }

