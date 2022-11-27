const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss/types/config').PluginCreator} */
const projectPlugin = ({ addBase }) => {
  
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    projectPlugin
  ],
}


