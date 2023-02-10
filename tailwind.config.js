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
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
],
}