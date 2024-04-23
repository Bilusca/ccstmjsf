/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "app.vue",
    "modules/**/*.vue",
    "components/**/*.vue",
    "assets/presets/lara/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'base-60': '#F5F6F7',
        'base-30': '#DEA94B',
        'base-10': '#5F0520'
      },
      fontFamily: {
        elmessiri: '"El Messiri", sans-serif',
        'pt-serif': '"PT serif", serif'
      }
    },
  },
  plugins: [],
}

