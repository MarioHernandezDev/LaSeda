<template>
  <div class="bg-transparent">
    
    <div class="max-w-5xl mx-auto px-6 md:px-8 pt-12 pb-24 md:pb-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
        
        <div class="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-6 h-px bg-[#71B1A5]" aria-hidden="true" />
            <p class="text-xs font-bold tracking-[0.3em] uppercase text-[#71B1A5]">
              Filosofía
            </p>
          </div>
          <h3 class="font-serif italic text-3xl md:text-4xl text-[#27252B] font-normal leading-[1.15] tracking-tight">
            Trayectoria y<br />Enfoque Humano
          </h3>
        </div>

        <div class="lg:col-span-8 space-y-10 text-stone-600/90 text-base md:text-[18px] leading-[2] font-light font-sans tracking-wide">
          <p 
            v-for="(parrafo, i) in perfil.biografiaExtendida" 
            :key="i"
            :class="{'first-letter:text-7xl first-letter:font-serif first-letter:italic first-letter:font-normal first-letter:mr-4 first-letter:float-left first-letter:text-[#71B1A5] first-letter:leading-none first-letter:pt-2': i === 0}"
            v-html="parrafo"
          />
        </div>
      </div>

      <div v-if="perfil.galeria && perfil.galeria[0]" class="-mx-6 md:mx-0">
        <div class="overflow-hidden w-full">
          <NuxtImg
            :src="perfil.galeria[0].src"
            :alt="perfil.galeria[0].alt"
            class="w-full h-[260px] sm:h-[360px] md:h-auto md:max-h-[520px] object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-[1400ms] ease-out"
            sizes="(max-width: 1024px) 100vw, 1024px"
            format="webp"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div class="w-screen relative left-1/2 right-1/2 -ml-[50vw] mr-[50vw] bg-transparent pb-20 lg:pb-28 overflow-x-clip">
      <div class="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        <div :class="[perfil.galeria && perfil.galeria[1] ? 'lg:col-span-7' : 'lg:col-span-12', 'space-y-14 px-6 sm:px-8 lg:pl-0 relative z-10 max-w-2xl lg:max-w-none w-full']">
          
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="w-6 h-px bg-[#71B1A5]" aria-hidden="true" />
              <p class="text-xs font-bold tracking-[0.3em] uppercase text-[#71B1A5]">
                Evolución Integrativa
              </p>
            </div>
            <h3 class="font-serif italic text-3xl text-[#27252B] font-normal tracking-tight">
              El tejido de una identity profesional
            </h3>
          </div>

          <div class="space-y-14 text-stone-600/90 text-base md:text-[17px] leading-[1.95] font-light font-sans tracking-wide">
            <div 
              v-for="(parrafo, i) in perfil.trayectoria" 
              :key="i"
              class="relative group/text transition-colors duration-500 py-2"
            >
              <div class="absolute -left-4 top-0 bottom-0 w-px bg-stone-300/40 group-hover/text:bg-[#71B1A5] transition-colors duration-500 hidden md:block" />
              <div class="group-hover/text:text-[#27252B] transition-colors duration-500" v-html="parrafo" />
            </div>
          </div>

        </div>

        <div v-if="perfil.galeria && perfil.galeria[1]" class="lg:col-span-5 w-full flex justify-center lg:justify-end relative self-end order-last lg:order-first px-6 lg:px-0">
          <div class="overflow-hidden h-[450px] sm:h-[550px] lg:h-[720px] group/portrait w-full max-w-md lg:max-w-none
             lg:absolute lg:left-0 lg:w-[calc(50vw-40px)] xl:w-[450px] 2xl:w-[480px] lg:bottom-0">
            <NuxtImg
              :src="perfil.galeria[1].src"
              :alt="perfil.galeria[1].alt"
              class="w-full h-full object-cover object-top grayscale-[10%] hover:grayscale-0 transition-all duration-[1400ms] ease-out group-hover/portrait:scale-102"
              sizes="(max-width: 1024px) 100vw, 600px"
              format="webp"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
interface FotoGaleria {
  src: string
  alt: string
}

defineProps<{
  perfil: {
    biografiaExtendida: string[]
    trayectoria: string[]
    galeria?: FotoGaleria[]
  }
}>()
</script>

<style scoped>
:deep(strong) {
  font-weight: 500;
  color: #27252B;
}
</style>