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
      minWidth:{
        '80': '340px',
      },
      height: {
        '85': '85vh',
      },
      boxShadow: {
        'p': '0 0 0 1px #3f3cbb',
        'glass': "0 3px 10px 0 #1f26875e",
      },
      minHeight: {
        '80': '80vh',
      },

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#0d1b2a',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      "gneon": "#c8ff29",
      "lightpurple": "#c5afff",
      "primary": "#212042",
      "glass": "#3f3cbb40",
      'green': "#00873E",
    },
  },
  plugins: [],
}