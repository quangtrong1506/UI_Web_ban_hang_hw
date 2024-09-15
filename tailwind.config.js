// 8ac400
module.exports = {
    content: ['./src/**/*.{html,js}', './*.{html,js}', '*.{html,js}'],
    theme: {
        extend: {
            colors: {
                main: '#8ac400',
            },
            fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            extend: {
                spacing: {
                    '8xl': '96rem',
                    '9xl': '128rem',
                },
                borderRadius: {
                    '4xl': '2rem',
                },
            },
        },
    },
};
