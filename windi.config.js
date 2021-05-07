import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class',

  extract: {
    include: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue'],
    exclude: ['node_modules/**/*', '.git/**/*'],
  },

  theme: {
    fontFamily: {
      sans: ['Inter'],
      serif: ['Merriweather'],
    },

    extend: {
      colors: {
        violet: colors.violet,
        gray: colors.coolGray,
      },
    },
  },
})
