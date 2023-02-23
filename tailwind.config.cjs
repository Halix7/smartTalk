/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [

        './public/index.html',
        './src/**/*.{html,js,jsx}',

    ],
    theme: {
        extend: {
            backgroundImage: {
                'headerback': "url('./src/Assets/world-1')",
            }
        },
    },
    plugins: [],
}