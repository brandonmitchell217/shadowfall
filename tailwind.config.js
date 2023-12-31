/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      container: {
        center: true,
      },
      fontFamily: {
        michroma: ["Michroma", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      colors: {
        darkBlue: "#3040D3",
        grey: "#B1B5BB",
      },
    },
  },
  plugins: [],
};
