module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        FTblack : "#232931",
        FTgray : "#393E46",
        FTgrayFade : "#393e46a8",
        FTgreen : "#4ECCA3",
        FTwhite : "#EAEAEA"
      }
    },
    screens: {
      'sm': '576px',

      'md': '960px',

      'lg': '1440px',

      'xl': '1600px'
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
],
}