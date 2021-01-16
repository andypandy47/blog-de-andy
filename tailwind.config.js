const primary = "#25252e";
const primaryAlt = "#363640";
const secondary = "#ff26e2";

const primaryText = "#faf3f3";
const secondaryText = "#827e7e";

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or "media" or "class"
  theme: {
    colors: {
      "primary": primary,
      "raised-primary": primaryAlt,
      "secondary": secondary,
      "text-primary": primaryText,
      "text-secondary": secondaryText
    },
    minWidth: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "full": "100%",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
