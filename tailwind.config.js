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
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
    container: {
      screens: {
        lg: '1024px',
        xl: '1024px',
        "2xl": '1022px',
      }
    },
    extend: {},
  },
  plugins: [],
};
