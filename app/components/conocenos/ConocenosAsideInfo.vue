<template>
  <section class="relative bg-[#F5F2EE]/60 backdrop-blur-md py-20 md:py-28 overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] mr-[50vw] border-y border-[#27252B]/5 shadow-xs">
    
    <div 
      class="absolute bottom-[-10%] left-[5%] w-[500px] h-[500px] rounded-full bg-[#71B1A5]/4 blur-[120px] pointer-events-none" 
      aria-hidden="true" 
    />
    <div 
      class="absolute top-[-10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#71B1A5]/2 blur-[100px] pointer-events-none" 
      aria-hidden="true" 
    />

    <div class="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
      
      <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-16 md:mb-20">
        <div class="md:col-span-6 lg:col-span-5">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-[#71B1A5]" aria-hidden="true" />
            <p class="text-[#71B1A5] text-[10px] tracking-[0.35em] uppercase font-bold">
              Garantía Clínica
            </p>
          </div>
          <h2 class="text-[#27252B] text-3xl md:text-4xl font-serif italic font-light leading-[1.2]">
            Colegiación y<br />
            <span class="text-[#27252B]/40 not-italic font-sans font-light text-2xl block mt-1">
              Acreditación Oficial
            </span>
          </h2>
        </div>
        
        <div class="md:col-span-6 lg:col-span-7 border-l border-[#27252B]/10 pl-6 md:pl-10">
          <p class="text-[#27252B]/70 text-sm md:text-base leading-[1.8] font-light max-w-xl">
            La práctica profesional de <span class="text-[#27252B] font-normal">{{ perfil.nombreCorto }}</span> está regulada por los organismos oficiales competentes, asegurando un marco clínico seguro, transparente y basado estrictamente en el rigor y la deontología sanitaria.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch group/container">
        
        <div class="lg:col-span-7 space-y-4">
          <div
            v-for="(acred, i) in perfil.acreditaciones"
            :key="i"
            class="relative bg-white/40 border border-[#27252B]/5 p-6 md:p-8 rounded-xl transition-all duration-500 flex items-start gap-5 hover:bg-white hover:border-[#71B1A5]/30 hover:shadow-xs hover:!opacity-100 group-hover/container:opacity-60 group"
          >
            <div class="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#71B1A5]/0 to-transparent group-hover:via-[#71B1A5]/30 transition-all duration-500" />
            
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-[#71B1A5]/10 text-[#71B1A5] shrink-0 mt-0.5 group-hover:bg-[#71B1A5] group-hover:text-white transition-all duration-500">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
            </span>
            
            <div class="space-y-1">
              <span class="text-[9px] tracking-widest text-[#27252B]/30 font-mono uppercase block">
                Garantía 0{{ i + 1 }}
              </span>
              <p class="text-[#27252B]/80 group-hover:text-[#27252B] text-sm md:text-base leading-relaxed font-light transition-colors duration-500" v-html="acred" />
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col justify-between gap-8 bg-white/30 border border-[#27252B]/5 p-6 md:p-8 rounded-xl transition-all duration-500 hover:bg-white/50 hover:border-[#71B1A5]/20 hover:!opacity-100 group-hover/container:opacity-60">
          
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[#71B1A5]" />
              <p class="text-[10px] font-bold tracking-[0.2em] uppercase text-[#27252B]/40 font-sans">
                Áreas y Marcos de Trabajo
              </p>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in perfil.tags"
                :key="tag"
                class="text-[11px] tracking-wide bg-white border border-[#27252B]/5 text-[#27252B]/70 px-3.5 py-1.5 rounded-lg transition-all duration-300 hover:border-[#71B1A5]/40 hover:text-[#71B1A5] hover:bg-[#F5F2EE]/50 cursor-default select-none shadow-3xs"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="pt-6 border-t border-[#27252B]/5">
            <NuxtLink
              to="/contacto"
              class="group/btn relative inline-flex w-full items-center justify-center gap-3 bg-[#71B1A5] text-white text-xs tracking-[0.2em] uppercase font-bold px-6 py-4 rounded-xl transition-all duration-500 shadow-md shadow-[#71B1A5]/10 hover:bg-[#27252B] hover:shadow-xl hover:shadow-[#27252B]/5 hover:-translate-y-0.5 text-center"
              :aria-label="`Solicitar consulta con ${perfil.nombreCorto}`"
            >
              <span>Agendar consulta clínica</span>
              <svg 
                class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300 text-white/90" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </NuxtLink>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  perfil: {
    nombreCorto: string
    acreditaciones: string[]
    tags: string[]
  }
}>()
</script>