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
        'custom': '0 0 8px 1px rgba(0, 0, 0, 1)',
        custom: "0 4px 8px 0 rgba(0, 0, 0, 0.25)",
        custom2: "3px 3pxpx 6px 0 rgba(0, 0, 0, 0.2)",
        custom3: "0 0 8px 0 rgba(0, 0, 0, 0.2)",
      },
      dropShadow: {
        '3xl': '0 0 5px rgba(0, 0, 0, 0.15)'

      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'icon': "url('./icons/checkmark-circle.svg')",
        praise: "#264ab9, url('./images/Rectangle 142.png') ",
      }

    },
    screens: {
      '393px': '393px',
      '394px': '394px',
      453: "453px",
      '445px': '445px',
      468: "468px",
      475: "475px",
      '515px': '515px',
      535: "535px",
      585: "585px",
      618: "618px",
      '618px': '618px',
      644: "644px",
      'sm': '640px',
      '641px': '641px',
      694: "694px",
      'md': '768px',
      '780px': '780px',
      '788px': '788px',
      '834px': "834px",
      '857px': '857px',
      '874px': '874px',
      890: "890px",
      926: "926px",
      999: "999px",
      '932px': '932px',
      'lg': '1024px',
      1091: "1091px",
      1100: "1100px",
      '1180px': '1180px',
      1200: "1200px",
      'xl': '1280px',
      1300: "1300px",
      '1375px': '1375px',
      '1408px': "1408px",
      '1450px': '1450px',
      1457: "1457px",
      1466: "1466px",
      '1500px': '1500px',
      '1748px': '1748px',
      '2xl': '1536px',
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
      'transparent': 'transparent',
      'custext2': '#00355D',
      'Zinc-400': '#a1a1aa',
      'linearcus1': '#00B8C4',
      'linearcus2': '#2AD8CD',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]

}