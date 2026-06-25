<script setup lang="ts">
defineProps<{
  proceso: Array<{
    paso: string
    texto: string
  }>
}>()
</script>

<template>
  <section class="bg-[#27252B] py-24 md:py-32 relative overflow-hidden">
    <div 
      class="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#71B1A5]/5 blur-[130px] pointer-events-none" 
      aria-hidden="true" 
    />

    <div class="page-container relative z-10">
      
      <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-20 md:mb-24">
        <div class="md:col-span-6 lg:col-span-5">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-2 h-2 rounded-full bg-[#71B1A5]" aria-hidden="true" />
            <p class="text-[#71B1A5] text-[10px] tracking-[0.35em] uppercase font-bold">
              Itinerario de Admisión
            </p>
          </div>
          <h2 class="text-white text-3xl md:text-4xl lg:text-5xl font-serif italic font-light leading-[1.15]">
            Tu acceso al programa<br />
            <span class="text-white/40 not-italic font-sans font-light text-2xl md:text-3xl block mt-2">
              paso a paso
            </span>
          </h2>
        </div>
        
        <div class="md:col-span-6 lg:col-span-7 border-l border-white/10 pl-6 md:pl-10">
          <p class="text-white/60 text-base md:text-[17px] leading-[1.85] font-light max-w-xl">
            Para garantizar la máxima calidad y cohesión pedagógica del grupo, coordinamos un proceso de matriculación ágil respaldado por una
            <strong class="text-[#71B1A5] font-medium font-sans tracking-wide uppercase text-xs ml-1 bg-[#71B1A5]/10 px-2 py-0.5 rounded">
              valoración de perfil inicial
            </strong> 
            con la dirección del centro antes del inicio lectivo.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 group/container">
        <div
          v-for="(paso, i) in proceso"
          :key="i"
          class="relative bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-xl transition-all duration-500 flex flex-col justify-between min-h-[260px] hover:bg-white/[0.04] hover:border-[#71B1A5]/30 hover:!opacity-100 group-hover/container:opacity-60 hover:-translate-y-1 group"
        >
          <div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#71B1A5]/0 to-transparent group-hover:via-[#71B1A5]/40 transition-all duration-500" />

          <div class="flex justify-between items-start">
            <span class="font-serif italic text-4xl lg:text-5xl text-[#71B1A5]/40 group-hover:text-[#71B1A5] transition-colors duration-500">
              {{ paso.paso }}
            </span>
            <span class="text-[9px] tracking-widest text-white/20 font-mono uppercase pt-2">
              Etapa 0{{ i + 1 }}
            </span>
          </div>

          <p class="text-white/70 group-hover:text-white/85 text-base leading-[1.85] font-light transition-colors duration-500 mt-8">
            {{ paso.texto }}
          </p>
        </div>
      </div>

      <div class="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 border-t border-white/5 pt-12">
        <NuxtLink to="/contacto" class="group inline-flex items-center justify-center gap-3 bg-[#71B1A5] text-white px-8 py-4 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-500 shadow-lg shadow-[#71B1A5]/10 hover:bg-[#5a9a8e] hover:shadow-xl hover:shadow-[#71B1A5]/20 hover:-translate-y-0.5 w-full sm:w-auto">
          <svg class="w-4 h-4 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          Solicitar plaza o dosier completo
        </NuxtLink>

        <NuxtLink to="/formaciones" class="group inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-semibold text-white/60 hover:text-white transition-colors duration-300 py-3">
          <svg class="w-4 h-4 rotate-180 transform group-hover:-translate-x-1 transition-transform duration-300 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
          Ver otros programas formativos
        </NuxtLink>
      </div>

    </div>
  </section>
</template>