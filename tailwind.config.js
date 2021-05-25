const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    fontFamily: {
      bebasNeue: ["Bebas Neue", "cursive"],
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      screens: {
        print: { raw: "print" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {};
