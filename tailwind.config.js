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
            'md': '768px',
            'lg': '1024px',
            'xl': '1408px',
            '2xl': '1536px',
        }
    },
    plugins: [],
}