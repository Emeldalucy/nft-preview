/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "VDBMain": "hsl(217, 54%, 11%)",
        "VDBCard": "hsl(216, 50%, 16%)",
        "VDBLine": "hsl(215, 32%, 27%)",
        "softBlue" : "hsl(215, 51%, 70%)",
        "cyan" : "hsl(178, 100%, 50%)"
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}

