/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      scale: {
        110: "1.10",
      },
      transitionDuration: {
        1000: "1000ms",
      },
    },
  },
  // daisyui: {
  //   themes: [],
  // },
  daisyui: {
    themes: ["light", "dark"],
  },
  // plugins: [
  //   require('daisyui'),
  //   require('preline/plugin'),
  // ],
  plugins: [require("daisyui")],
}

