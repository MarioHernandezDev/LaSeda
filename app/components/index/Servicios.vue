<template>
  <section aria-labelledby="pilares-titulo" class="py-24 md:py-36 px-8 md:px-16">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <div class="flex items-center gap-3 mb-5" aria-hidden="true">
            <div class="w-6 h-px bg-[#F5F2ED]"></div>
            <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">Nuestros Servicios</span>
          </div>
          <h2 id="pilares-titulo" class="font-serif italic font-light text-[2rem] md:text-[2.6rem] leading-[1.15] max-w-md">
            Tres pilares para tu
            <span class="not-italic font-normal text-[#71B1A5]"> bienestar integral</span>
          </h2>
        </div>
        <p class="opacity-65 max-w-sm text-base leading-relaxed font-light md:text-right">
          Desde la terapia clínica hasta la formación especializada,
          ofrecemos un ecosistema completo de salud psicológica en Granada.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
        
        <article class="group relative overflow-hidden bg-stone-50 border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/12 hover:-translate-y-2">
          <div class="relative h-56 overflow-hidden">
            <NuxtImg src="/images/terapia-psicologica-individual-adultos-granada-la-seda.jpg" alt="Sesión de psicoterapia individual para adultos en el Centro La Seda, Granada" class="w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-700 ease-out" format="webp" loading="lazy" width="560" height="224" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/65 via-transparent to-transparent" aria-hidden="true"></div>
          </div>
          <div class="p-8">
            <h3 class="font-serif italic font-normal text-[1.5rem] mb-3 group-hover:text-[#71B1A5] transition-colors duration-500 tracking-wide">Terapias Psicológicas en Granada</h3>
            <p class="opacity-70 text-base leading-[1.8] mb-6 font-light">Atención psicológica clínica para adultos, infanto-juvenil y terapia de pareja. Abordajes basados en evidencia adaptados a cada persona.</p>
            <ul class="flex flex-wrap gap-2 mb-8 relative z-10" aria-label="Modalidades de terapia">
              <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Adultos</li>
              <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Infanto-Juvenil</li>
              <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Pareja</li>
            </ul>
            <NuxtLink to="/terapias" class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium border-b border-[#27252B]/20 pb-1 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-500 after:absolute after:inset-0" aria-label="Ver todos los servicios de terapia psicológica">
              Descubrir
              <svg class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </NuxtLink>
          </div>
        </article>

        <article class="group relative overflow-hidden bg-[#27252B] border border-transparent hover:border-[#71B1A5]/35 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 md:-mt-8 md:mb-8">
          <div class="relative h-56 overflow-hidden">
            <NuxtImg src="/images/talleres-crecimiento-personal-constelaciones-familiares-granada.jpg" alt="Taller grupal de Constelaciones Familiares y crecimiento personal en Granada — Centro La Seda" class="w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-700 ease-out opacity-65" format="webp" loading="lazy" width="560" height="224" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#27252B] via-[#27252B]/20 to-transparent" aria-hidden="true"></div>
            <div class="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#71B1A5] opacity-80" aria-hidden="true"></div>
          </div>
          <div class="p-8">
            <h3 class="font-serif italic font-normal text-[1.5rem] text-white mb-3 group-hover:text-[#71B1A5] transition-colors duration-500 tracking-wide">Talleres de Crecimiento Personal</h3>
            <p class="text-white/70 text-base leading-[1.8] mb-6 font-light">Espacios vivenciales de crecimiento personal. Constelaciones Familiares, trabajo con emociones y grupos de autoconocimiento.</p>
            <ul class="flex flex-wrap gap-2 mb-8 relative z-10" aria-label="Tipos de talleres">
              <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/20 text-[#71B1A5] px-3 py-1.5 font-medium">Crecimiento Personal</li>
              <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/20 text-[#71B1A5] px-3 py-1.5 font-medium">Constelaciones</li>
            </ul>
            <NuxtLink to="/talleres" class="inline-flex items-center gap-2 text-xs text-white tracking-[0.2em] uppercase font-medium border-b border-white/20 pb-1 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-500 after:absolute after:inset-0" aria-label="Ver todos los talleres de crecimiento personal">
              Descubrir
              <svg class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </NuxtLink>
          </div>
        </article>

        <article class="group relative overflow-hidden bg-stone-50 border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/12 hover:-translate-y-2">
          <div class="relative h-56 overflow-hidden">
            <NuxtImg src="/images/formacion-psicologos-especializacion-salud-mental-granada.jpg" alt="Formación especializada para psicólogos y profesionales de la salud mental en Granada — Centro La Seda" class="w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-700 ease-out" format="webp" loading="lazy" width="560" height="224" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/65 via-transparent to-transparent" aria-hidden="true"></div>
          </div>
          <div class="p-8">
            <h3 class="font-serif italic font-normal text-[1.5rem] mb-3 group-hover:text-[#71B1A5] transition-colors duration-500 tracking-wide">Formaciones para Profesionales</h3>
            <p class="opacity-70 text-base leading-[1.8] mb-6 font-light">Programas de especialización oficial para profesionales de la salud y la educación que quieren ampliar su competencia clínica.</p>
            <ul class="flex flex-wrap gap-2 mb-8 relative z-10" aria-label="Perfiles de formación">
              <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Profesionales</li>
              <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Especialización</li>
            </ul>
            <NuxtLink to="/formaciones" class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium border-b border-[#27252B]/20 pb-1 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-500 after:absolute after:inset-0" aria-label="Ver programas de formación para psicólogos y profesionales">
              Descubrir
              <svg class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </NuxtLink>
          </div>
        </article>
        
      </div>
    </div>
  </section>
</template>