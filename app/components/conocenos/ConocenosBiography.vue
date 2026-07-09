<template>
  <div class="w-full text-[#27252B] font-sans pt-12 md:pt-16 space-y-24 lg:space-y-36">
    
    <section class="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[50vh] lg:min-h-[650px] gap-8 lg:gap-0">
      
      <div 
        v-if="fotoUno" 
        class="w-full min-h-[350px] sm:min-h-[450px] lg:min-h-full h-full overflow-hidden bg-stone-100 rounded-2xl lg:rounded-none relative"
      >
        <img
          :src="fotoUno.src"
          :alt="fotoUno.alt"
          class="absolute inset-0 w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-[1200ms] ease-out scale-100 hover:scale-102"
          loading="lazy"
        />
      </div>

      <div class="px-6 sm:px-16 md:px-24 py-8 lg:py-24 w-full flex flex-col justify-center items-start lg:max-w-[90%] xl:max-w-[85%] justify-self-start">
        <div class="space-y-6 w-full">
          <div class="flex items-center gap-3">
            <span class="w-6 h-px bg-[#71B1A5]" aria-hidden="true" />
            <p class="text-xs font-bold tracking-[0.3em] uppercase text-[#71B1A5]">
              Filosofía
            </p>
          </div>
          <h3 class="font-serif italic text-3xl md:text-4xl lg:text-[40px] text-[#27252B] font-normal leading-tight tracking-tight">
            Trayectoria y Enfoque Humano
          </h3>
          <div class="space-y-6 text-stone-600/90 text-sm md:text-base leading-relaxed md:leading-loose font-light tracking-wide pt-2">
            <p 
              v-for="(parrafo, i) in perfil.biografiaExtendida" 
              :key="i"
              :class="{'biografia-capitular': i === 0}"
              v-html="parrafo"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[50vh] lg:min-h-[650px] gap-8 lg:gap-0">
      
      <div class="px-6 sm:px-16 md:px-24 py-8 lg:py-24 w-full flex flex-col justify-center items-end lg:max-w-[90%] xl:max-w-[85%] justify-self-end order-2 lg:order-1">
        <div class="space-y-6 w-full">
          <div class="flex items-center gap-3">
            <span class="w-6 h-px bg-[#71B1A5]" aria-hidden="true" />
            <p class="text-xs font-bold tracking-[0.3em] uppercase text-[#71B1A5]">
              Evolución Integrativa
            </p>
          </div>
          <h3 class="font-serif italic text-3xl md:text-4xl lg:text-[40px] text-[#27252B] font-normal tracking-tight leading-tight">
            El tejido de una identidad profesional
          </h3>
          
          <div class="space-y-8 text-stone-600/90 text-sm md:text-base leading-relaxed md:leading-loose font-light tracking-wide pt-2 pl-1">
            <div 
              v-for="(parrafo, i) in perfil.trayectoria" 
              :key="i"
              class="relative group/text transition-colors duration-500 py-1"
            >
              <div class="absolute -left-5 top-0 bottom-0 w-px bg-stone-100 group-hover/text:bg-[#71B1A5] transition-colors duration-500 hidden md:block" />
              <div class="group-hover/text:text-[#27252B] transition-colors duration-500" v-html="parrafo" />
            </div>
          </div>
        </div>
      </div>

      <div 
        v-if="fotoDos" 
        class="w-full min-h-[350px] sm:min-h-[450px] lg:min-h-full h-full overflow-hidden bg-stone-100 rounded-2xl lg:rounded-none relative order-1 lg:order-2"
      >
        <img
          :src="fotoDos.src"
          :alt="fotoDos.alt"
          class="absolute inset-0 w-full h-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-[1200ms] ease-out scale-100 hover:scale-102"
          loading="lazy"
        />
      </div>

    </section>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface FotoGaleria {
  src: string
  alt: string
}

const props = defineProps<{
  perfil: {
    biografiaExtendida: string[]
    trayectoria: string[]
    galeria?: FotoGaleria[]
  }
}>()

// Extracción limpia y controlada de las propiedades dinámicas de la galería
const fotoUno = computed(() => {
  return props.perfil?.galeria && props.perfil.galeria.length > 0 ? props.perfil.galeria[0] : null
})

const fotoDos = computed(() => {
  return props.perfil?.galeria && props.perfil.galeria.length > 1 ? props.perfil.galeria[1] : null
})
</script>

<style scoped>
:deep(strong) {
  font-weight: 500;
  color: #27252B;
}

.biografia-capitular::first-letter {
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-style: italic;
  font-weight: 300;
  font-size: 4.25rem;
  line-height: 0.85;
  float: left;
  margin-right: 0.75rem;
  padding-top: 0.3rem;
  color: #71B1A5;
}
</style>