module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "'Roboto', Arial, sans-serif",
    },
    //       colors: {
    //         'accent-1': '#FAFAFA',
    //         'accent-2': '#EAEAEA',
    //         'accent-7': '#333',
    //         success: '#0070f3',
    //         cyan: '#79FFE1',
    //       },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
