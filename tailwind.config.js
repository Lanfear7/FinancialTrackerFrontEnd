module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        FTblack : "#0f0b26",
        FTgray : "#393E46",
        FTgrayFade : "#393e46a8",
        FTgreen : "#7f3ddb",
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