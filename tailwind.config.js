/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                fade: "fadeIn .5s ease-in-out"
            },
            keyframes: theme => ({
                fadeIn: {
                    "0%": {
                        opacity: "25%",
                        transform: "translateY(1em)"
                    },
                    "100%": {
                        opacity: "100%",
                        transform: "translateY(0em)"
                    }
                }
            }),
            fontFamily: {
                "gilroy": ["Gilroy-Bold"]
            },
            colors: {
                "club-yellow": "#E5A823",
                "club-blue": "#000080",
                "club-blue-light": "#006AB0"
            },
        },
    },
    plugins: [],
};

