module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'banner': "url('images/shands-background3.jpeg')",
       }),
       colors:{
        'teal': '#85cef1',
        'dark-teal': '#0d2f2f',
        'peach':'#ffb9a7',
        'light-peach':'#ffe0cf',
        'mint-green':'#bae9d0'
      }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '12rem',

     },
     
     backgroundColor: theme => ({
      ...theme('colors'),
      'teal': '#85cef1',
      'dark-teal': '#0d2f2f',
      'peach':'#ffb9a7',
      'light-peach':'#ffe0cf',
      'very-light-peach':'#fef1ed',
      'mint-green':'#bae9d0'
     })
  },
  variants: {
    textColor: ['responsive', 'hover'],
    extend: {},
  },
  plugins: [],
}