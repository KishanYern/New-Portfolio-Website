/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            animation: {
                blob: 'blob 10s infinite',
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(-200px, 150px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(90px, -20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                },
            },
        },
        fontFamily: {
            signature: ['Great Vibes'],
        },
    },
    plugins: [],
};
