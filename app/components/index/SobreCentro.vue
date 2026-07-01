<template>
  <section aria-labelledby="sobre-titulo" class="py-24 md:py-36 bg-stone-100/50">
    <div class="max-w-7xl mx-auto px-8 md:px-16">
      <div class="grid md:grid-cols-2 gap-16 lg:gap-28 items-center">
        <div class="relative order-2 md:order-1">
          <div class="relative overflow-hidden aspect-[4/5] group">
            <NuxtImg src="/images/equipo-psicologo-centro-la-seda-granada-multidisciplinar.jpg" alt="Equipo multidisciplinar de psicólogos colegiados del Centro de Psicología La Seda, Granada" class="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out" format="webp" loading="lazy" width="640" height="800" />
            <div class="absolute -bottom-5 -right-5 w-full h-full border border-[#71B1A5]/25 -z-10 pointer-events-none" aria-hidden="true"></div>
          </div>
          <div class="absolute -top-6 -left-6 bg-white shadow-xl p-5 flex items-center gap-4 max-w-[220px]">
            <div class="w-10 h-10 rounded-full bg-[#71B1A5]/12 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <svg class="w-5 h-5 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
            </div>
            <p class="text-sm opacity-70 leading-snug font-light">Colegiados por el <strong class="font-medium">COP Andalucía</strong></p>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <div class="flex items-center gap-3 mb-6" aria-hidden="true">
            <div class="w-6 h-px bg-[#71B1A5]"></div>
            <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">Sobre el Centro</span>
          </div>
          <h2 id="sobre-titulo" class="font-serif italic font-light text-[2rem] md:text-[2.6rem] leading-[1.15] mb-7">
            Un enfoque multidisciplinar
            <span class="not-italic font-normal text-[#71B1A5]"> que cuida a la persona entera</span>
          </h2>
          <p class="opacity-70 text-lg leading-[1.9] mb-6 font-light">La Seda nació en Granada con una convicción: la salud mental no puede entenderse de forma aislada. Trabajamos en la intersección de la <strong class="opacity-85 font-medium">salud psicológica</strong>, la <strong class="opacity-85 font-medium">educación emocional</strong> y el <strong class="opacity-85 font-medium">crecimiento personal</strong>, porque los seres humanos somos mucho más que nuestros síntomas.</p>
          <p class="opacity-70 text-lg leading-[1.9] mb-12 font-light">Nuestro equipo de psicólogos colegiados integra diferentes tradiciones terapéuticas — cognitivo-conductual, sistémica, humanista y basada en mindfulness — para ofrecerte el abordaje más adecuado a tu momento vital.</p>
          <ul class="grid grid-cols-2 gap-6" aria-label="Valores del centro">
            <li v-for="valor in valores" :key="valor.title" class="flex items-start gap-4 group/valor">
              <div class="w-9 h-9 bg-[#71B1A5]/12 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/valor:bg-[#71B1A5]/25 transition-colors duration-500" aria-hidden="true">
                <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="valor.icon"></svg>
              </div>
              <div>
                <h3 class="text-base font-medium mb-1">{{ valor.title }}</h3>
                <p class="text-sm opacity-65 leading-relaxed font-light">{{ valor.desc }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const valores = [
  {
    title: 'Trato Humano',
    desc: 'Sin prisas, con escucha genuina y profunda.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>',
  },
  {
    title: 'Basado en Evidencia',
    desc: 'Métodos con respaldo científico actualizado.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>',
  },
  {
    title: 'Confidencialidad',
    desc: 'Tu privacidad, protegida en todo momento.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  },
  {
    title: 'Equipo Experto',
    desc: 'Psicólogos colegiados y en formación continua.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>',
  },
]
</script>