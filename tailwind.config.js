/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {},
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

