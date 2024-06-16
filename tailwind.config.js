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
      618: "618px",
      md: "834px",
      lg: "1024px",
      xl: "1408px",
      "2xl": "1536px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
