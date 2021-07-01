module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mainFont: ['Sanchez', 'serif'],
    },
    extend: {
      colors: {
        mainColor: '#FFF1E5',
        subColor: '#131313',
      },
      zIndex: {
        '-10': '-10',
      },
      fontSize: {
        '7rem': '7rem',
      },
      height: {
        105: '36rem',
      },
      width: {
        100: '30rem',
        105: '36rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
