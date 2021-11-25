module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "'Roboto', Arial, sans-serif",
      serif: 'sans-serif',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#2A2F4D',
        secondary: '#00698A',
        background: '#F1F8F9',
      },
      scale: {
        200: '2',
        300: '3',
        400: '4',
        500: '5',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
      textOpacity: ['active'],
    },
  },
  plugins: [],
};
