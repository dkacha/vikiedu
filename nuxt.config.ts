// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', 'assets/styles/main.scss'],
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          'http-equiv': 'Cache-Control',
          content: 'no-cache, no-store, must-revalidate',
        },
      ],
    },
  },
});
