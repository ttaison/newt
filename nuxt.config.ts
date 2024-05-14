// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      }
    }
  },
  devtools: { enabled: true },
  runtimeConfig: {
    newt: {
      spaceUid: '',
      cdnApiToken: ''
    }
  }
})
