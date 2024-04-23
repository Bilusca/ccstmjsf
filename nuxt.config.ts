// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts"],
  fonts: {
    families: [
      { name: 'El Messiri', provider: 'google' },
      { name: 'Pt Serif', provider: 'google', }
    ],
    assets: {
      prefix: '/fonts'
    }
  }
})
