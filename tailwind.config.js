/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Nunito: ["Nunito", "sans - serif"],
            }
        },
        screens: {
            '394px': '394px',
            'sm': '393px',
            453: "453px",
            475: "475px",
            535: "535px",
            585: "585px",
            618: "618px",
            644: "644px",
            694: "694px",
            'md': '768px',
            'lg': '1024px',
            1200: "1200px",
            'xl': '1408px',
            1466: "1466px",
            '2xl': '1536px',
        },
        boxShadow: {
            'custom': '0 0 8px 1px rgba(0, 0, 0, 1)',
        }
    },
    plugins: [],
}