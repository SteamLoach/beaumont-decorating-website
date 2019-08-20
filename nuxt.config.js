
export default {
  mode: 'universal',
  generate: {
    dir: 'dist'
  },

  router: {
    base: process.env.DEPLOY_ENV === 'STATIC' ? '/beaumont-decorating-website/' : '/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato|Montserrat&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/globalComponents.js',
    '~plugins/masterResolver.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'kenticocloud-nuxt-module',
    '@nuxtjs/style-resources'
  ],
  kenticocloud: {
    projectId: '2fa7a314-d0bb-001c-d636-065df5831621',
    enableAdvancedLogging: false,
    previewApiKey: ''
  },
  styleResources: {
    scss: ['assets/styles/main.scss']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
