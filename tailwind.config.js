const primary = "#25252e";
const primaryAlt = "#363640";
const secondary = "#ff26e2";

const primaryText = "#faf3f3";
const secondaryText = "#827e7e";

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "primary": primary,
      "raised-primary": primaryAlt,
      "secondary": secondary,
      "text-primary": primaryText,
      "text-secondary": secondaryText
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
