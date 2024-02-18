/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./src/marked/**/*.{js,jsx,ts,tsx}",
  ],
  // see https://tailwindcss.com/docs/adding-custom-styles#customizing-your-theme
  theme: {
    screens: {
      md: "744px",
      lg: "1248px",
    },
    // fontSize: {
    //   sm: '0.8rem',
    //   base: '1rem',
    //   xl: '1.25rem',
    //   '2xl': '1.563rem',
    //   '3xl': '1.953rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.052rem',
    // },
    fontFamily: {
      'sans': '"Bai Jamjuree", sans-serif',
    },
    fontSize: {
      'logo': ['1.75rem', {
        lineHeight: '2.45rem',
        letterSpacing: '0.06em',
        fontWeight: '500',
      }],
      'body1': ['1.75rem', {
        lineHeight: '2.45rem',
        // letterSpacing: '-0.01em',
        fontWeight: '300',
      }],
      'body2': ['1.25rem', {
        lineHeight: '1.75rem',
        fontWeight: '300',
      }],
      'body3': ['1.125rem', {
        lineHeight: '1.575rem',
        fontWeight: '400',
      }],
      'h1': ['3.75rem', {
        lineHeight: '5.25rem',
        fontWeight: '700',
      }],
      'h2': ['2rem', {
        lineHeight: '2.8rem',
        letterSpacing: '0.02em',
        fontWeight: '700',
      }],
      'h3': ['1.875rem', {
        lineHeight: '2.625rem',
        letterSpacing: '0.02em',
        fontWeight: '500',
      }],
      'h4': ['1.125rem', {
        lineHeight: '1.575rem',
        letterSpacing: '0.02em',
        fontWeight: '400',
      }],
      // '3xl': ['1.875rem', {
      //   lineHeight: '2.25rem',
      //   letterSpacing: '-0.02em',
      //   fontWeight: '700',
      // }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      grey6: '#333333',
      grey5: '#5C5C5C',
      grey1: '#EFEFF1'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '1.5rem',
        lg: '1.5rem',
      },
      // screens: {
      //   md: '744px',
      //   lg: '1248px',
      // }
    },
    extend: {},
  },
  plugins: [],
};
