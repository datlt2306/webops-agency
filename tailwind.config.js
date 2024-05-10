/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      clipPath: {
        customPolygon: 'polygon(48% 0, 100% 0, 100% 100%, 0% 100%)',
      },
      boxShadow: {
        'normal': '0 0 6px 2px rgb(0 0 0 / 0.1)',
      }
    },
    fontFamily: {
      Nunito: ['Nunito', 'sans-serif']
    },
    colors: {
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'tahiti': '#00355D',
      light: '#F0F7FF',
      lightbold: '#E2EBF6',
      blk: '#00355D',
      cus1: '#3B82F6',
      cus2: '#1E40AF',
      custext: '#14b8a6',
      textname: '#00355D'
    },
  },
  plugins: [],
}