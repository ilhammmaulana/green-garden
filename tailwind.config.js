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
        'green-theme': {
          500: '#31BE6C',
          600: '#2eaa62'
        },
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
      },
      height: {
        'section-sm': '46.75rem'
      },
      fontFamily: {
        poppins: 'Poppins',
        signpainter: 'signpainter'
      }
    },

  },
  plugins: [],
  corePlugins: {
  },
}
