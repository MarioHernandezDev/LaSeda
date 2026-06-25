<script setup lang="ts">
defineProps<{
  categoria: string
  titulo: string
  tituloItalico: string
  subtitulo: string
}>()

// Imagen fija para dotar de consistencia visual premium al hero de todas las terapias
const defaultImage = '/images/centro-clinico-clinica-salud-bienestar-minimalista-recepcion-jardin.jpg'
</script>

<template>
  <header class="page-hero-root relative overflow-hidden h-[500px] md:h-[580px] lg:h-[640px] border-b border-[#27252B]/5">

    <div class="page-hero-panel bg-[#F5F2EE] max-md:!absolute max-md:inset-0 max-md:!w-full max-md:!h-full max-md:z-20 max-md:!bg-transparent flex flex-col justify-center">
      
      <div
        class="absolute inset-0 opacity-[0.018] pointer-events-none z-0"
        style="background-image: radial-gradient(circle, #27252B 1px, transparent 1px); background-size: 24px 24px;"
        aria-hidden="true"
      />
      <div
        class="absolute top-[-10%] left-[-20%] w-[480px] h-[480px] rounded-full bg-[#71B1A5]/5 blur-[100px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div class="w-full relative z-10 px-0 md:px-12 lg:px-16 xl:px-20">
        <div class="max-md:bg-[#F5F2EE]/85 max-md:backdrop-blur-md max-md:py-10 max-md:px-8 max-md:w-full">

          <div class="flex items-center gap-3 mb-6 lg:mb-8">
            <span class="w-5 h-px bg-[#71B1A5]" aria-hidden="true"></span>
            <p class="text-[#71B1A5] text-[10px] md:text-[11px] tracking-[0.42em] uppercase font-bold">
              {{ categoria }} · LA SEDA GRANADA
            </p>
          </div>

          <h1
            class="font-serif italic font-medium leading-[1.12] tracking-tight text-[#27252B] mb-5 relative flex items-start md:items-center"
            style="font-size: clamp(2.1rem, 3.5vw, 3.8rem);"
          >
            <div class="relative z-10">
              {{ titulo }}
              <span 
                v-if="tituloItalico"
                class="not-italic font-normal text-[#71B1A5] block mt-2 font-sans"
                style="font-size: clamp(1.4rem, 2.4vw, 2.6rem); letter-spacing: 0.04em;"
              >
                {{ tituloItalico }}
              </span>
            </div>

            
          </h1>

          <div class="flex flex-col sm:flex-row gap-3">
            <NuxtLink
              to="/contacto"
              class="group inline-flex items-center justify-center gap-3 bg-[#71B1A5] text-white px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-500 shadow-lg shadow-[#71B1A5]/25 hover:bg-[#5a9a8e] hover:shadow-xl hover:shadow-[#71B1A5]/40 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <svg class="w-4 h-4 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Pedir Orientación
            </NuxtLink>

            <a
              href="#sobre-la-terapia"
              class="group inline-flex items-center justify-center gap-3 border border-[#27252B]/20 bg-transparent px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-bold text-[#27252B] hover:border-[#71B1A5] hover:text-[#71B1A5] transition-all duration-500 hover:-translate-y-0.5 w-full sm:w-auto max-md:bg-white/40 max-md:backdrop-blur-sm"
            >
              Explorar Especialidad
              <svg class="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

        </div>

        <p
          class="text-stone-600/85 leading-[1.85] font-light mb-8 lg:mb-10 max-w-md hidden md:block mt-6 px-4 md:px-0"
          style="font-size: clamp(0.85rem, 1.1vw, 1rem);"
        >
          {{ subtitulo }}
        </p>

      </div>

      <div
        class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[45%] w-px"
        style="background: linear-gradient(to bottom, transparent, rgba(113,177,165,0.35), transparent);"
        aria-hidden="true"
      ></div>

    </div>

    <div class="page-hero-panel-right max-md:!absolute max-md:inset-0 max-md:!w-full max-md:!h-full max-md:z-10">
      <NuxtImg
        :src="defaultImage"
        alt="Interior minimalista, cálido y acogedor de las consultas del Centro de Psicología La Seda en Granada"
        class="w-full h-full object-cover object-center"
        format="webp"
        fetchpriority="high"
        preload
      />
    </div>

  </header>
</template>

<style scoped>
@media (min-width: 768px) {
  .page-hero-root {
    display: flex;
  }
  .page-hero-panel,
  .page-hero-panel-right {
    width: 50%;
    flex-shrink: 0;
  }
}
</style>