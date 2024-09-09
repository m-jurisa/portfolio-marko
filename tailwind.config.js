/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html','./src/index.css'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
            },
            screens: {
                xxl: '1921px', // Custom breakpoint for large screens (1920px and above)
            },
            order: {
                13: '13',
                14: '14',
                15: '15',
                16: '16',
                17: '17',
                18: '18',
                19: '19',
                20: '20',
                21: '21',
                22: '22',
                23: '23',
                24: '24',
                22: '22',
                23: '23',
                24: '24',   
                25: '25',
                26: '26',
                27: '27',
                28: '28',
                29: '29',
                30: '30',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                mytheme: {
                    'primary': '#34d399',
                    'secondary': '#fbbf24',
                    'accent': '#1fb2a6',
                    'neutral': '#191D24',
                    'base-100': '#FFFFFF',
                    'info': '#3ABFF8',
                    'success': '#36D399',
                    'warning': '#FBBD23',
                    'error': '#F87272',
                },
            },
        ],
    },
};
