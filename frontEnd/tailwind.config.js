/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        todo: {
          primary: "#5fa8d3",
          secondary: "#051923",
          accent: "#750513",
          success: "#4BB543",
          warning: "#EED202",
          error: "#cc0202",
        },
      },
    ],
  },
}