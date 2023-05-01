/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        carveat: ['Caveat', 'cursive']
      },
      backgroundImage: {
        '1': "url('src/assets/bg/bg.svg')"
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}