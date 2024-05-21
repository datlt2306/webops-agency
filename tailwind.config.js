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
        },
        boxShadow: {
            'custom': '0 0 8px 1px rgba(0, 0, 0, 1)',
        }
    },
    plugins: [],
}