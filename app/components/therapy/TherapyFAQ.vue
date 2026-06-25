<script setup lang="ts">
interface FAQ {
  pregunta: string
  respuesta: string
}

defineProps<{
  faqs: FAQ[]
}>()

const faqAbierta = ref<number | null>(null)
const toggleFaq = (i: number) => {
  faqAbierta.value = faqAbierta.value === i ? null : i
}
</script>

<template>
  <section class="py-24 md:py-32 bg-[#FDFBF9]">
    <div class="page-container">
      <div class="grid lg:grid-cols-12 gap-16 lg:gap-20">
        
        <div class="lg:col-span-7">
          <p class="section-label mb-4 text-[#71B1A5]">Dudas comunes</p>
          <h2 class="font-serif italic text-3xl md:text-4xl text-[#27252B] mb-12">Resolvemos tus preguntas</h2>

          <div class="divide-y divide-[#27252B]/10 border-t border-[#27252B]/10">
            <div v-for="(faq, i) in faqs" :key="i" class="py-2">
              <button 
                @click="toggleFaq(i)"
                class="w-full flex items-center justify-between py-6 text-left group"
                :aria-expanded="faqAbierta === i"
              >
                <span class="text-base md:text-lg font-medium text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-300">
                  {{ faq.pregunta }}
                </span>
                <span class="relative w-5 h-5 shrink-0 ml-4">
                  <span class="absolute inset-0 w-px h-5 bg-[#71B1A5] mx-auto transition-transform duration-500" :class="faqAbierta === i ? 'rotate-90' : 'rotate-0'" />
                  <span class="absolute inset-0 h-px w-5 bg-[#71B1A5] my-auto" />
                </span>
              </button>
              
              <div 
                class="overflow-hidden transition-all duration-500 ease-in-out"
                :style="{ maxHeight: faqAbierta === i ? '300px' : '0px' }"
              >
                <p class="pb-8 text-[#27252B]/60 font-light leading-relaxed">
                  {{ faq.respuesta }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="bg-[#27252B] p-10 md:p-12 text-white sticky top-28">
            <div class="w-10 h-px bg-[#71B1A5] mb-8" />
            <h3 class="font-serif italic text-2xl md:text-3xl mb-6">¿Prefieres que hablemos directamente?</h3>
            <p class="text-white/60 font-light mb-10 leading-relaxed">
              Estamos aquí para escucharte. La primera orientación telefónica es gratuita y sin compromiso.
            </p>
            
            <div class="space-y-6">
              <NuxtLink to="/contacto" class="flex items-center gap-4 group">
                <div class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#71B1A5] group-hover:border-[#71B1A5] transition-all duration-300">
                  <i class="fa-solid fa-calendar-check text-xs"></i>
                </div>
                <span class="text-xs tracking-widest uppercase font-semibold">Reservar Cita</span>
              </NuxtLink>
              <a href="tel:+34679571977" class="flex items-center gap-4 group">
                <div class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#71B1A5] group-hover:border-[#71B1A5] transition-all duration-300">
                  <i class="fa-solid fa-phone text-xs"></i>
                </div>
                <span class="text-xs tracking-widest uppercase font-semibold">679 571 977</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>