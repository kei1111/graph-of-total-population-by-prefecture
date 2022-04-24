const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    letterSpacing: {
      tight: "-.015em",
    },

    extend: {
      height: {
        "half-screen": "50vh",
      },
    },
  },
  plugins: [],
};
