<template>
  <header
    class="hero-root relative min-h-screen bg-[#FDFBF9] overflow-hidden flex flex-col justify-between pt-24 md:pt-28"
    :class="{ 'hero-animated': ready }"
  >
    <div class="absolute inset-0 z-0 pointer-events-none select-none">
      <div class="absolute inset-0 md:left-1/3 lg:left-1/2 transition-all duration-[2000ms] ease-out scale-105 hero-bg-image">
        <NuxtImg
          src="/images/hero-consulta-laseda.jpg"
          alt="Espacio de consulta y bienestar en Granada — Centro La Seda"
          class="w-full h-full object-cover object-center filter grayscale-[10%] contrast-[102%] brightness-[102%]"
          format="webp"
          fetchpriority="high"
          preload
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#FDFBF9] via-[#FDFBF9]/90 sm:via-[#FDFBF9]/60 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#FDFBF9] via-transparent to-transparent"></div>
      </div>
      
      <div class="absolute inset-0 opacity-[0.015]" style="background-image: radial-gradient(#27252B 1px, transparent 1px); background-size: 40px 40px;" aria-hidden="true"></div>
      <div class="absolute top-12 right-12 w-[40vw] h-[40vw] rounded-full bg-[#71B1A5]/6 blur-[120px]" aria-hidden="true"></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 my-auto py-16 md:py-24">
      <div class="max-w-3xl lg:max-w-4xl">
        
        <div class="hero-text-item flex items-center gap-4 mb-6 md:mb-8" style="--i:1">
          <span class="w-12 h-px bg-[#71B1A5]/60"></span>
          <p class="text-[#71B1A5] text-[10px] md:text-[11px] tracking-[0.45em] uppercase font-bold">
            Granada · Psicoterapia e Integración
          </p>
        </div>

        <h1 
          class="hero-text-item text-[#27252B] tracking-tight mb-8" 
          style="--i:2;"
        >
          <span class="block font-serif italic font-light text-[3rem] sm:text-[4.5rem] lg:text-[5.6rem] leading-[1.05]">
            Psicología, terapia Gestalt
          </span>
          <span class="block font-sans font-light text-[#71B1A5] text-[1.2rem] sm:text-[1.6rem] lg:text-[2rem] mt-5 uppercase tracking-[0.16em] leading-none">
            y formación para profesionales
          </span>
        </h1>

        <p 
          class="hero-text-item text-stone-600/90 font-light text-base md:text-lg leading-[1.85] max-w-2xl mb-12"
          style="--i:3"
        >
          Acompañamos a adultos, niños, adolescentes y familias en procesos de cambio, crisis y crecimiento, desde un enfoque integrativo, humano y cercano.
        </p>

        <div class="hero-text-item flex flex-col sm:flex-row gap-5 items-center justify-start mt-4 w-full" style="--i:4">
          
          <NuxtLink
            to="/contacto"
            class="group relative inline-flex items-center justify-center gap-3 bg-[#27252B] text-white px-8 py-4 md:min-w-[210px] text-[10.5px] tracking-[0.28em] uppercase font-bold rounded-full transition-all duration-500 hover:bg-[#71B1A5] w-full sm:w-auto shadow-lg shadow-[#27252B]/5 hover:shadow-xl hover:shadow-[#71B1A5]/20 transform hover:-translate-y-0.5 overflow-hidden border border-transparent"
          >
            <span>Contactar</span>
            <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center">
              <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
              <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/conocenos"
            class="group relative inline-flex items-center justify-center gap-3 border border-[#27252B]/30 bg-[#FDFBF9]/60 backdrop-blur-md text-[#27252B] px-8 py-4 md:min-w-[210px] text-[10.5px] tracking-[0.28em] uppercase font-bold rounded-full transition-all duration-500 hover:border-[#71B1A5] hover:text-[#71B1A5] hover:bg-white/90 w-full sm:w-auto shadow-sm hover:shadow-xl hover:shadow-[#71B1A5]/10 transform hover:-translate-y-0.5 overflow-hidden"
          >
            <span>Conocer Equipo</span>
            <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-[#71B1A5]">
              <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
              <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
          </NuxtLink>

        </div>

      </div>
    </div>

    <div class="relative z-10 w-full bg-[#FDFBF9]/40 border-t border-[#27252B]/5 backdrop-blur-md pb-16 md:pb-24 mt-12">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div class="hero-text-item lg:col-span-9 text-stone-600/85 text-[13px] md:text-[14px] leading-[1.85] font-light space-y-3" style="--i:5">
          <p>
            En <span class="font-medium text-[#27252B] tracking-wide">La Seda</span> somos un equipo multidisciplinar que integra psicología sanitaria, terapia Gestalt y otras disciplinas de acompañamiento, ofreciendo una atención adaptada a cada historia y momento vital.
          </p>
          <p class="opacity-80">
            Contamos con un recorrido profundo en el trabajo clínico con infancia y adolescencia, además de guiar a profesionales que buscan especializarse desde la mirada gestáltica.
          </p>
        </div>

        <div 
          class="hero-text-item lg:col-span-3 flex justify-center lg:justify-end border-t lg:border-t-0 pt-6 lg:pt-0 border-[#27252B]/5"
          style="--i:6"
        >
          <div class="relative w-48 h-48 bg-[#F5F2EE]/90 rounded-full border border-[#27252B]/8 shadow-sm group/butterfly overflow-hidden">
            <div class="absolute inset-0 m-auto w-16 h-16 bg-[#71B1A5]/20 rounded-full blur-xl transition-transform duration-700 group-hover/butterfly:scale-150 pointer-events-none"></div>
            
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center butterfly-floating-animation">
              <div class="butterfly-wrapper !static !p-0 !m-0 !inset-auto transform scale-[0.75] flex items-center justify-center">
                <div class="butterfly-3d">
                  <div class="wing-3d"><div class="bit-3d"></div><div class="bit-3d"></div></div>
                  <div class="wing-3d"><div class="bit-3d"></div><div class="bit-3d"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  ready: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
/* Animaciones Fluidas Modernas */
.hero-text-item {
  opacity: 0;
  transform: translateY(30px);
  will-change: transform, opacity;
}

.hero-bg-image {
  opacity: 0;
  transform: scale(1.06);
  transition: transform 2.2s cubic-bezier(0.215, 0.610, 0.355, 1), opacity 1.6s ease-out;
}

/* Disparador de animaciones */
.hero-animated .hero-text-item {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1.2s cubic-bezier(0.215, 0.610, 0.355, 1), transform 1.2s cubic-bezier(0.215, 0.610, 0.355, 1);
  transition-delay: calc(0.15s + var(--i, 1) * 0.12s);
}

.hero-animated .hero-bg-image {
  opacity: 1;
  transform: scale(1.01);
}

/* Animación de flotado sobre el centro absoluto */
.butterfly-floating-animation {
  animation: organicFloat 4.5s ease-in-out infinite;
  will-change: transform;
}

@keyframes organicFloat {
  0%, 100% {
    transform: translate(-50%, -50%) translateY(0) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-4px) rotate(3deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-text-item, .hero-bg-image, .butterfly-floating-animation {
    transform: none !important;
    opacity: 1 !important;
    transition: none !important;
    animation: none !important;
  }
}
</style>