// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(240, 38%, 20%)",
        GrayishBlue: "hsl(240, 18%, 77%)",
      },
      backgroundImage: {
        Curve: "url('./images/pattern-curve.svg')",
      },
    },
    fontFamily: {
      Inter: ["Inter, sans-serif"],
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
