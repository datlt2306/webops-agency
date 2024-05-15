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
    screens: {
      '394px': '394px',
      '1444px': '1444px',
      '1500px': '1500px',
      '1600px': '1600px',
      '1686px': '1686px',
      '1748px': '1748px',
      '1800px': '1800px',
      '1818px': '1818px',
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
      'light': '#F0F7FF',
      'lightbold': '#E2EBF6',
      'blk': '#00355D',
      'cus1': '#3B82F6',
      'cus2': '#1E40AF',
      'custext': '#14b8a6',
      'custext1': '#00355D',
      'textname': '#00355D',
      'Teal-400': '#2dd4bf',
      'bluebold': '#264AB9',
      'lightblue': '#6B92FF',
      'border1': '#C2C2BF',
      'transparent': 'transparent'

    },
  },
  plugins: [
    require('flowbite/plugin')
  ]

}