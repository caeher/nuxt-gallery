import { defineNuxtConfig } from 'nuxt/config'
import MyModule from '..'

export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      imgix: 'https://api.imgix.com/'
    }
  },
  modules: [
    MyModule,
    '@nuxtjs/tailwindcss'
  ],
  myModule: {
    addPlugin: true
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
    // config: {
    //   content: ''
    // }
  }
})
