/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./.eleventy.md.{js,ts}"],
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
      sans: "Inter, sans-serif",
      "sans-heading": '"Bai Jamjuree", sans-serif',
    },
    fontSize: {
      logo: [
        "1.75rem",
        {
          lineHeight: "2.45rem",
          letterSpacing: "0.06em",
          fontWeight: "500",
        },
      ],
      hXL: [
        "3.75rem",
        {
          lineHeight: "1.4em",
          letterSpacing: "0.02em",
          fontWeight: "700",
        },
      ],
      hL: [
        "2rem",
        {
          lineHeight: "1.4em",
          letterSpacing: "0.02em",
          fontWeight: "700",
        },
      ],
      hM: [
        "1.75rem",
        {
          lineHeight: "1.4em",
          letterSpacing: "0.02em",
          fontWeight: "500",
        },
      ],
      hS: [
        "1.5rem",
        {
          lineHeight: "1.4em",
          letterSpacing: "0.02em",
          fontWeight: "500",
        },
      ],
      hXS: [
        "1.25rem",
        {
          lineHeight: "1.4em",
          letterSpacing: "0.02em",
          fontWeight: "500",
        },
      ],
      h2XS: [
        "1.125rem",
        {
          lineHeight: "1.4em",
          letterSpacing: "0.02em",
          fontWeight: "500",
        },
      ],
      element: [
        "1.125rem",
        {
          lineHeight: "1.4em",
          letterSpacing: "0.02em",
          fontWeight: "400",
        },
      ],
      bodyXL: [
        "1.75rem",
        {
          lineHeight: "1.4em",
          fontWeight: "300",
        },
      ],
      bodyL: [
        "1.25rem",
        {
          lineHeight: "1.4em",
          fontWeight: "400",
        },
      ],
      bodyM: [
        "1.125rem",
        {
          lineHeight: "1.4em",
          fontWeight: "400",
        },
      ],
      bodyS: [
        "1rem",
        {
          lineHeight: "1.4em",
          fontWeight: "400",
        },
      ],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      grey0_1: "#FBFAFC",
      grey1: "#EFEFF1",
      grey1_5: "rgba(237, 236, 239, 0.8)",
      grey2: "#DEDEDF",
      grey3: "#A1A1A1",
      grey4: "#7E7E7F",
      grey5: "#5C5C5C",
      grey6: "#141414",
      grey7: "#131313",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "1.5rem",
        lg: "1.5rem",
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
