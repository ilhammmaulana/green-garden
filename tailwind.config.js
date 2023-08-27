import colors from 'tailwindcss/colors'


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        'green-theme': '#31BE6C',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
      },
      height: {
        'section-sm': '50rem'
      }
    },

  },
  plugins: [],
  corePlugins: {
  },
}
