/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}"
    ],
    theme: {
        container: {
            // screens: {
            //     'sm': '348px',
            //     'md': '696px',
            //     'lg': '1296px',
            // },
            padding: {
                DEFAULT: '1rem',
                sm: '16px',
            },
            center: true,
        },
        extend: {
            container:{
              screens:{
                  'lg': '1296px'
              }
            },
            screens: {
              'lg': '1296px'
            },
            colors: {
                'red': '#AA0601'
            }
        },
    },
    plugins: [],
}

