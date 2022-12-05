const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss/types/config').PluginCreator} */
const projectPlugin = ({ addBase }) => {};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        beige: "#eff0ec",
        green: "#888f70",
        "light-green": "#d4ddb7",
        "dark-green": "#3f4726",
      },

      container: {
        center: true,
        padding: "2rem",
      },
      flex: {
        2: "2 1 0%",
      },
    },
  },
  plugins: [projectPlugin],
};
