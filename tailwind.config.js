/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '90': '90vw',
      },
      height: {
        '85': '85vh',
      },
      boxShadow: {
        'p': '0 0 0 1px #3f3cbb',
      }

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      "gneon": "#c8ff29",
      "lightpurple": "#c5afff",
      "primary": "#212042"
    },
  },
  plugins: [],
}