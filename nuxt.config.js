export default {
  ssr: false,
  components: true,
  generate: {
    interval: 2000,
  },

  head: {
    title: 'Her',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~assets/css/app.css'],

  plugins: [],

  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/composition-api/module',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/svg'],

  googleFonts: {
    families: {
      Inter: true,
      Merriweather: true,
    },
    display: 'swap',
    subsets: '',
    prefetch: true,
    preload: true,
  },

  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
}
