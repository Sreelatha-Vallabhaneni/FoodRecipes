/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        regularBrown: "#996B4D",
        blackBrown: "#1C120D",
        orange: "#ED7D2B",
        creamWhite: "#F2EDE8",
      },
      fontFamily: {
        'serif': ['Libre Baskerville', 'serif'],
        'sans': ["AvenirLTPro-Book", 'sans-serif'],
        'sans-b': ['AvenirLTPro-BookOblique', 'AvenirLTPro-Book', 'sans-serif'],
        'com': ['commuters-sans', 'helvetica', 'sans-serif']
      },
    },
  },
  plugins: [],
}

