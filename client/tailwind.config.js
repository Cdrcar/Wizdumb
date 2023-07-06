/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      background: "#fefefb",
      lightblue: "#34b2d8",
      darkblue: "#227498",
      accent: "#ec354f",
    },
    extend: {},
  },
  plugins: [],
};
