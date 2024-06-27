/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 8px 0 rgba(0, 0, 0, 0.25)",
        custom2: "3px 3pxpx 6px 0 rgba(0, 0, 0, 0.2)",
        custom3: "0 0 8px 0 rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        praise: "#264ab9, url('./images/Rectangle 142.png') ",
      },
    },
    screens: {
      sm: "393px",
      418: "418px",
      453: "453px",
      468: "468px",
      475: "475px",
      535: "535px",
      585: "585px",
      618: "618px",
      644: "644px",
      694: "694px",
      md: "834px",
      890: "890px",
      926: "926px",
      999: "999px",
      lg: "1024px",
      1091: "1091px",
      1100: "1100px",
      1200: "1200px",
      1300: "1300px",
      xl: "1408px",
      1457: "1457px",
      1466: "1466px",
      "2xl": "1536px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
