const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./public/index.html', './src/stories/**/*.{js,jsx}'],
  theme: {
    colors: {
      inherit: 'inherit',
      blue: '#2962ff',
      red: '#d32f2f',
      grey: {
        lightest: '#f2f2f2',
        light: '#e0e0e0',
        DEFAULT: '#828282',
        dark: '#333333',
      },
      white: '#ffffff',
    },
    fontFamily: {
      notosans: ['Noto Sans JP', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      fontSize: {
        '2xs': ['0.75rem', '1rem'],
      },
    },
  },
};
