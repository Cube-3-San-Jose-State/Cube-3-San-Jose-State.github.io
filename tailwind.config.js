/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "gilroy": ["Gilroy-Bold"]
            },
            colors: {
                "club-yellow": "#E5A823"
            },
        },
    },
    plugins: [],
};

