<template>
  <Transition
    enter-active-class="transition-all duration-700 ease-out"
    enter-from-class="opacity-0 translate-y-10 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-400 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <div 
      v-if="isOpen" 
      class="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-2xl z-[100] bg-[#FDFBF9] border border-[#27252B]/12 rounded-2xl shadow-xl shadow-[#27252B]/8 backdrop-blur-md group overflow-hidden"
    >
      <div class="grid grid-cols-1 md:grid-cols-[180px_1fr] items-stretch">
        
        <div class="relative min-h-[120px] md:min-h-full flex items-center justify-center overflow-hidden">
          <div class="absolute w-32 h-32 rounded-full blur-xl "></div>
          
          <NuxtImg 
            src="/images/cookienaje.png" 
            alt="Monstruo de las galletas" 
            class="w-auto h-28 md:h-36 object-contain relative z-10 "
          />
        </div>

        <div class="p-6 md:p-8 flex flex-col gap-4 text-center md:text-left">
          
          <h3 class="font-serif text-lg md:text-xl font-normal text-[#27252B] tracking-wide">
            Aviso de <span class="italic">Cookies</span>
          </h3>

          <p class="text-xs md:text-sm text-[#27252B]/75 font-light leading-relaxed md:leading-relaxed pr-2">
            Utilizamos cookies propias para recordar sus preferencias y analíticas de terceros (Google Analytics) para comprender cómo interactúa con nuestra web. Puede aceptar todas o leer los detalles en nuestra 
            <NuxtLink to="/cookies" class="text-[#71B1A5] font-medium underline underline-offset-2 hover:text-[#5a9a8e] transition-colors">
              Política de Cookies
            </NuxtLink>.
          </p>

          <div class="flex items-center justify-center md:justify-end gap-5 mt-2">
            <button 
              @click="rechazarCookies" 
              class="text-[11px] tracking-[0.2em] uppercase font-bold text-[#27252B]/50 hover:text-[#27252B] transition-colors py-2"
            >
              Rechazar
            </button>
            
            <button 
              @click="aceptarCookies" 
              class="bg-[#71B1A5] hover:bg-[#5a9a8e] text-white text-[11px] tracking-[0.2em] uppercase font-bold px-6 py-3 rounded-xl shadow-md shadow-[#71B1A5]/15 transition-all duration-300 hover:-translate-y-0.5"
            >
              Aceptar todas
            </button>
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isOpen = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    setTimeout(() => {
      isOpen.value = true
    }, 1500)
  } else if (consent === 'accepted') {
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
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      'analytics_storage': 'granted'
    })
  }
}
</script>
