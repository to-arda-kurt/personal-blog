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
      },
      zIndex: {
        '-10': '-10',
      },
      fontSize: {
        '7rem': '7rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
