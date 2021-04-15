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
      },
      screens: {
        'mobile': {'max': '500px'}
      }
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 5px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, .6)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
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
      'mint-green':'#bae9d0'
     })
  },
  variants: {
    textColor: ['responsive', 'hover'],
    extend: {},
  },
  
  plugins: [],
}