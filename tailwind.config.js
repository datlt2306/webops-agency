/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 8px 0 rgba(0, 0, 0, 0.25)",
        custom2: "3px 3pxpx 6px 0 rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    plugins: [require("flowbite/plugin")],
  },
  plugins: [],
};
