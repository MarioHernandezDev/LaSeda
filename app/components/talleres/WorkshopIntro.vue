<script setup lang="ts">
interface Facilitadora {
  nombre: string
  imagen: string
  imagenAlt: string
}

defineProps<{
  descripcion: string
  descripcion2: string
  imagen: string
  imagenAlt: string
  bio: string
  bio2: string
  facilitadoraId: string
  facilitadora: Facilitadora | null
}>()
</script>

<template>
  <section id="sobre-la-terapia" class="page-container py-24 md:py-32">
    <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      
      <div class="lg:sticky lg:top-28">
        <div class="overflow-hidden aspect-[3/4] mb-10 relative">
          <NuxtImg
            v-if="facilitadora"
            :src="facilitadora.imagen"
            :alt="facilitadora.imagenAlt"
            format="webp"
            loading="lazy"
            width="600"
            height="800"
            class="w-full h-full object-cover grayscale-[15%]"
          />
          <div class="absolute -bottom-3 -right-3 w-full h-full border border-[#71B1A5]/30 pointer-events-none z-[-1]" />
          <div class="absolute bottom-5 left-0 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3">
            <p class="text-[10px] tracking-[0.2em] uppercase text-[#27252B]/40 font-bold">Facilitadora</p>
            <p class="font-serif italic text-[#27252B] text-sm mt-0.5">{{ facilitadora?.nombre }}</p>
          </div>
        </div>

        <div class="w-12 h-px bg-[#71B1A5] mb-6" />
        <h2 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-[1.2] mb-7">
          Sobre la facilitadora
        </h2>
        
        <div class="space-y-6 text-base md:text-lg leading-[1.95] text-[#27252B]/70 [&_strong]:font-semibold [&_strong]:text-[#27252B] mb-10">
          <p v-html="bio" />
          <p v-html="bio2" />
        </div>

        <NuxtLink
          v-if="facilitadora"
          :to="`/conocenos/${facilitadoraId}`"
          class="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#71B1A5] text-[#FDFBF9] hover:bg-[#27252B] transition-colors duration-300 ease-out group/btn text-xs font-medium tracking-[0.2em] uppercase shadow-sm"
          :aria-label="`Ver perfil clínico completo de ${facilitadora.nombre}`"
        >
          <span>Ver perfil</span>
          <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </NuxtLink>
      </div>

      <div class="space-y-10 lg:pt-4">
        <div>
          <p class="text-[#71B1A5] text-[10px] tracking-[0.3em] uppercase font-bold mb-5">El taller</p>
          <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2] mb-8">
            ¿Qué es y para quién es<br />
            <span class="text-[#27252B]/50 not-italic font-light text-2xl md:text-3xl">este espacio?</span>
          </h2>
        </div>

        <p class="text-base md:text-lg leading-[1.95] text-[#27252B]/75 font-light">
          {{ descripcion }}
        </p>
        <p class="text-base md:text-lg leading-[1.95] text-[#27252B]/75 font-light">
          {{ descripcion2 }}
        </p>

        <div class="overflow-hidden aspect-[16/10] border border-[#27252B]/5 rounded-sm mt-4">
          <NuxtImg
            :src="imagen"
            :alt="imagenAlt"
            format="webp"
            loading="lazy"
            width="1200"
            height="750"
            class="w-full h-full object-cover grayscale-[10%] hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      </div>

    </div>
  </section>
</template>