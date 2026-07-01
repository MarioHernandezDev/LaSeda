<template>
  <div class="space-y-24 md:space-y-36">
    
    <div class="space-y-10">
      <div class="flex items-center gap-3">
        <span class="w-1 h-1 rounded-full bg-[#71B1A5]" aria-hidden="true" />
        <p class="text-[10px] font-bold tracking-[0.3em] uppercase text-[#27252B]/40 font-sans">
          Trayectoria y Enfoque Humano
        </p>
      </div>
      
      <div class="space-y-8 text-[#27252B]/75 text-base md:text-lg leading-[1.95] font-light font-sans tracking-wide">
        <p 
          v-for="(parrafo, i) in perfil.biografiaExtendida" 
          :key="i"
          :class="{'first-letter:text-7xl first-letter:font-serif first-letter:italic first-letter:font-normal first-letter:mr-4 first-letter:float-left first-letter:text-[#71B1A5] first-letter:leading-none first-letter:pt-2': i === 0}"
          v-html="parrafo"
        />
      </div>

      <div v-if="perfil.galeria && perfil.galeria[0]" class="relative pt-4">
        <div class="overflow-hidden w-full bg-[#27252B]/5 border-y border-[#27252B]/5">
          <NuxtImg
            :src="perfil.galeria[0].src"
            :alt="perfil.galeria[0].alt"
            class="w-full h-auto object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-1000 ease-out"
            sizes="(max-width: 1024px) 100vw, 1024px"
            format="webp"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div class="space-y-10">
      <div class="flex items-center gap-3">
        <span class="w-1 h-1 rounded-full bg-[#71B1A5]" aria-hidden="true" />
        <p class="text-[10px] font-bold tracking-[0.3em] uppercase text-[#27252B]/40 font-sans">
          Recorrido!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <div :class="[perfil.galeria && perfil.galeria[1] ? 'lg:col-span-7' : 'lg:col-span-12', 'space-y-8 text-[#27252B]/75 text-base md:text-lg leading-[1.95] font-light font-sans tracking-wide']">
          <p 
            v-for="(parrafo, i) in perfil.trayectoria" 
            :key="i"
            v-html="parrafo"
          />
        </div>

        <div v-if="perfil.galeria && perfil.galeria[1]" class="lg:col-span-5 w-full">
          <div class="overflow-hidden w-full bg-[#27252B]/5 border-y lg:border-y-0 lg:border-l border-[#27252B]/5">
            <NuxtImg
              :src="perfil.galeria[1].src"
              :alt="perfil.galeria[1].alt"
              class="w-full h-auto object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-1000 ease-out"
              sizes="(max-width: 1024px) 100vw, 450px"
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