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
    screens: {
      sm: "393px",
      md: "768px",
      lg: "1024px",
      xl: "1408px",
      "2xl": "1536px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
