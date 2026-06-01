// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // 🌟 Añadimos el módulo de Tailwind
  modules: ['@nuxtjs/tailwindcss']
})