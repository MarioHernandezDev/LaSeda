<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-400 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <div 
      v-if="isOpen" 
      class="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100] bg-[#FDFBF9] border border-[#27252B]/12 rounded-2xl p-6 shadow-xl shadow-[#27252B]/8 backdrop-blur-md"
    >
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#71B1A5]"></span>
          <h3 class="font-serif text-base font-normal text-[#27252B]">
            Aviso de <span class="italic">Cookies</span>
          </h3>
        </div>

        <p class="text-xs md:text-sm text-[#27252B]/75 font-light leading-relaxed">
          Utilizamos cookies propias para recordar sus preferencias y analíticas de terceros (Google Analytics) para comprender cómo interactúa con nuestra web. Puede aceptar todas o leer los detalles en nuestra 
          <NuxtLink to="/cookies" class="text-[#71B1A5] underline hover:text-[#5a9a8e] transition-colors">Política de Cookies</NuxtLink>.
        </p>

        <div class="flex items-center justify-end gap-3 mt-2">
          <button 
            @click="rechazarCookies" 
            class="text-[10px] tracking-[0.15em] uppercase font-bold text-[#27252B]/50 hover:text-[#27252B] transition-colors px-3 py-2"
          >
            Rechazar
          </button>
          
          <button 
            @click="aceptarCookies" 
            class="bg-[#71B1A5] hover:bg-[#5a9a8e] text-white text-[10px] tracking-[0.15em] uppercase font-bold px-5 py-2.5 rounded-lg shadow-md shadow-[#71B1A5]/15 transition-all duration-300 hover:-translate-y-0.5"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isOpen = ref(false)

// Si usas el módulo @nuxt/scripts que configuramos antes, puedes desestructurar la carga aquí:
// const { load } = useScriptGoogleAnalytics({ id: 'G-XXXXXXXXXX', trigger: 'manual' })

onMounted(() => {
  // Comprobamos si el usuario ya ha tomado una decisión previamente
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    // Si no existe registro, mostramos el banner tras un pequeño retardo de 1.5 segundos
    setTimeout(() => {
      isOpen.value = true
    }, 1500)
  } else if (consent === 'accepted') {
    // Si ya las aceptó en el pasado, activamos Analytics directamente
    activarAnalytics()
  }
})

const aceptarCookies = () => {
  localStorage.setItem('cookie-consent', 'accepted')
  isOpen.value = false
  activarAnalytics()
}

const rechazarCookies = () => {
  localStorage.setItem('cookie-consent', 'rejected')
  isOpen.value = false
}

const activarAnalytics = () => {
  // Aquí es donde despierta Google Analytics. 
  // Si usas el módulo de Nuxt Scripts simplemente descomenta la línea de abajo:
  // load()
  
  // Alternativa por si inyectas la etiqueta global clásica de Google (gtag) de forma manual:
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      'analytics_storage': 'granted'
    })
  }
}
</script>