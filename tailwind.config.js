/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}"
    ],
    theme: {
        container: {
            screens: {
                'sm': '348px',
                'lg': '1296px',
            },
            center: true,
        },
        extend: {
            colors: {
                'red': '#AA0601'
            }
        },
    },
    plugins: [],
}

