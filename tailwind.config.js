/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html','./src/index.css'],
    theme: {
        extend: {
            fontFamily: {
                generalsans: ['General Sans', 'sans-serif'],
              },
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                black: {
                    DEFAULT: '#000',
                    100: '#010103',
                    200: '#0E0E10',
                    300: '#1C1C21',
                    500: '#3A3A49',
                    600: '#1A1A1A',
                  },
                  white: {
                    DEFAULT: '#FFFFFF',
                    800: '#E4E4E6',
                    700: '#D6D9E9',
                    600: '#AFB0B6',
                    500: '#62646C',
                  },
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
    plugins: [require('daisyui'),
        
    ],
    daisyui: {
        themes: [
           
        ],
    },
};
