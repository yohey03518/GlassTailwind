/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}"
    ],
    corePlugins: {
        container: false
    },
    theme: {
        extend: {
            colors: {
                'red': '#AA0601'
            }
        },
    },
    plugins: [ function ({ addComponents }) {
        addComponents({
            '.container': {
                margin: '0 auto',
                maxWidth: '100%',
                padding: '0 1rem',
                '@screen md': {
                    maxWidth: '1368px',
                    padding: '0 36px'
                }
            }
        })
    }

    ],
}

