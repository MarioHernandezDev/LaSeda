export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // 🌟 Registramos tu archivo de estilos aquí:
  css: [
    '@/assets/css/main.css' 
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  tailwindcss: {
    exposeConfig: true,
    viewer: false,
    config: {
      content: [
        "./app/**/*.{vue,js,ts,jsx,tsx}",
        "./app.vue"
      ]
    }
  },
  
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})