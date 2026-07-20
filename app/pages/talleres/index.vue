<script setup lang="ts">
// ─── SEO & METADATOS ULTRA-OPTIMIZADOS PARA LA PÁGINA DE TALLERES ────────────
useSeoMeta({
  title: 'Talleres de Psicología, Terapia Gestalt y Constelaciones Familiares en Granada 2026 | La Seda',
  ogTitle: 'Talleres de Psicología, Terapia Gestalt y Constelaciones Familiares en Granada 2026 | La Seda',
  description: 'Participa en nuestros talleres vivenciales en Granada: Constelaciones Familiares, crecimiento personal y supervisión de casos clínicos acreditada por la AETG.',
  ogDescription: 'Encuentra tu espacio de crecimiento en Granada. Talleres de Constelaciones Familiares, grupos de autoconocimiento y supervisión para psicólogos Gestalt en Centro La Seda.',
  // Nombre de imagen optimizado para la sección de talleres grupales
  ogImage: '/images/talleres-psicologia-constelaciones-familiares-granada.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Talleres de Crecimiento Personal y Supervisión Clínica en Granada',
  twitterDescription: 'Constelaciones Familiares y supervisión de casos clínicos (AETG) en Granada. Grupos reducidos con enfoque humano y riguroso.',
  robots: 'index, follow'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://centrolaseda.com/talleres' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
})
</script>

<template>
  <main>

    <PageHero
      label="Talleres y Espacios de Formación"
      title-main="Encuentros para Crecer"
      title-accent="y Transformarse"
      image="/images/talleres-psicologia-constelaciones-familiares-granada.jpg"
      image-alt="Taller grupal de crecimiento personal en el Centro La Seda Granada"
      secondary-link="/contacto"
      secondary-label="Reservar plaza"
    >
      <template #description>
        Espacios vivenciales donde la teoría y la experiencia se integran,
        diseñados para generar movimiento real en quien los habita.
      </template>
    </PageHero>


    <section
      class="bg-[#27252B]/[0.03] py-20 md:py-32 overflow-hidden"
      aria-labelledby="talleres-heading"
    >
      <div class="page-container">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 md:mb-24">
          <div>
            <p class="section-label mb-3">Nuestros Espacios</p>
            <h2 id="talleres-heading" class="section-title">
              Convocatorias y Encuentros 2026
            </h2>
          </div>
          <div class="w-24 h-px bg-[#27252B]/20 md:mb-2" aria-hidden="true" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div class="space-y-12 lg:space-y-32">
            
            <NuxtLink
              to="/talleres/constelaciones-familiares"
              class="training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 block"
              aria-label="Ver detalles del Taller de Constelaciones Familiares"
            >
              <div class="overflow-hidden aspect-[16/10] relative">
                <div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" />
                <NuxtImg
                  src="/images/taller-constelaciones-familiares-granada-centro-la-seda.jpg"
                  alt="Talleres vivenciales de constelaciones familiares en Granada, Centro de Psicología La Seda"
                  width="800"
                  height="500"
                  format="webp"
                  loading="lazy"
                  class="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div class="p-8 md:p-10 flex flex-col flex-1 gap-5">
                <div class="section-divider" aria-hidden="true" />
                <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug">Taller de Constelaciones Familiares</h3>
                <p class="text-base leading-[1.85] text-[#27252B]/75 flex-1">
                  Espacios grupales de exploration y acompañamiento para observar patrones, vínculos y lealtades familiares inconscientes. Una oportunidad de liberar cargas y obtener una mirada amplia sobre dinámicas relacionales o duelos.
                </p>
                <div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1">
                  <span>Enfoque: <span class="font-normal text-[#27252B]/70">Grupal Vivencial</span></span>
                  <span class="text-[#27252B]/20">•</span>
                  <span>Imparte: <span class="font-normal text-[#27252B]/70">Leonor Cabrera</span></span>
                </div>
                <span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300">
                  Ver Detalles y Fechas
                  <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" />
                </span>
              </div>
            </NuxtLink>

          </div>

          <div class="space-y-12 lg:space-y-32 lg:mt-32">

            <NuxtLink
              to="/talleres/supervision-casos"
              class="training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 block"
              aria-label="Saber más sobre el espacio de Supervisión de Casos Clínicos"
            >
              <div class="overflow-hidden aspect-[16/10] relative">
                <div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" />
                <NuxtImg
                  src="/images/supervision-casos-clinicos-terapeutas-gestalt-granada.jpg"
                  alt="Supervisión de casos clínicos para terapeutas y psicólogos Gestalt, Centro La Seda Granada"
                  width="800"
                  height="500"
                  format="webp"
                  loading="lazy"
                  class="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div class="p-8 md:p-10 flex flex-col flex-1 gap-5">
                <div class="section-divider" aria-hidden="true" />
                <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug">Supervisión de Casos</h3>
                <p class="text-base leading-[1.85] text-[#27252B]/75 flex-1">
                  Espacio de acompañamiento profesional para revisar la práctica clínica, superar bloqueos y proteger la relación terapéutica. Horas certificables para la formación en Terapia Gestalt por la AETG.
                </p>
                <div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1">
                  <span>Acreditación: <span class="font-normal text-[#27252B]/70">Horas AETG Gestalt</span></span>
                  <span class="text-[#27252B]/20">•</span>
                  <span>Formatos: <span class="font-normal text-[#27252B]/70">Presencial / Online</span></span>
                </div>
                <span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300">
                  Saber más y metodologías
                  <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" />
                </span>
              </div>
            </NuxtLink>

          </div>
        </div>

        <div class="mt-20 lg:mt-32 max-w-3xl mx-auto">
          <NuxtLink
            to="/contacto"
            class="training-card group relative flex flex-col items-center justify-center text-center bg-[#71B1A5] rounded-sm p-10 md:p-16 min-h-[380px] transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/20 block overflow-hidden"
            aria-label="Escríbenos para orientación sobre qué taller elegir"
          >
            <div class="absolute -bottom-10 font-serif italic text-[18rem] text-[#FDFBF9]/5 leading-none select-none pointer-events-none z-0">
              &
            </div>
            
            <div class="relative z-10 space-y-6 max-w-xl flex flex-col items-center">
              <div class="w-12 h-px bg-[#FDFBF9]/60" />
              <h3 class="font-serif italic text-[#FDFBF9] text-3xl md:text-4xl leading-tight">
                ¿Tienes dudas sobre qué taller es para ti?
              </h3>
              <p class="text-base md:text-lg text-[#FDFBF9]/90 font-light leading-relaxed">
                Cuéntanos tu momento vital o tu perfil como profesional de la salud. Te orientamos sin compromiso hacia el espacio que mejor responda a tus necesidades actuales.
              </p>
            </div>

            <div class="relative z-10 pt-8">
              <span class="btn-secondary !bg-white/95 !border-transparent hover:!bg-white text-[#27252B] hover:scale-105 shadow-xl transition-transform">
                Escríbenos ahora
              </span>
            </div>
          </NuxtLink>
        </div>

      </div>
    </section>

    <section
      class="page-container py-20 md:py-32"
      aria-labelledby="metodologia-heading"
    >
      <div class="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

        <div class="relative order-2 md:order-1">
          <div class="absolute -top-4 -left-4 w-full h-full border border-[#71B1A5]/40 pointer-events-none z-0" aria-hidden="true" />
          <div class="relative z-10 overflow-hidden aspect-[3/4]">
            <NuxtImg
              src="/images/espacio-terapeutico-centro-psicologia-la-seda-granada.jpg"
              alt="Taller vivencial de psicología y crecimiento personal en el Centro La Seda, Granada"
              width="600"
              height="800"
              format="webp"
              loading="lazy"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-[#27252B]/5 pointer-events-none" aria-hidden="true" />
          </div>
          <div class="absolute bottom-6 -right-5 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3 z-20 hidden md:block" aria-hidden="true">
            <p class="text-xs tracking-[0.2em] uppercase text-[#71B1A5]">Talleres y Formación</p>
            <p class="font-serif italic text-[#27252B] text-sm mt-0.5">La Seda · Granada</p>
          </div>
        </div>

        <div class="order-1 md:order-2">
          <p class="section-label mb-4">Metodología</p>
          <h2 id="metodologia-heading" class="section-title mb-12">
            Un espacio para crecer,<br />
            <span class="text-[#27252B]/60">no solo para aprender</span>
          </h2>

          <ol class="space-y-10" aria-label="Valores de los encuentros vivenciales">

            <li class="flex gap-6 items-start">
              <div class="shrink-0" aria-hidden="true">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">+10</span>
              </div>
              <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Años de Experiencia Vivencial
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  Desarrollando talleres dinámicos en Granada, acompañando de manera honesta y cercana a cientos de personas en sus procesos de cambio y autoconocimiento.
                </p>
              </div>
            </li>

            <li>
              <div class="w-full h-px bg-[#27252B]/8" aria-hidden="true" />
            </li>

            <li class="flex gap-6 items-start">
              <div class="shrink-0" aria-hidden="true">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">12</span>
              </div>
              <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Plazas Máximas por Grupo
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  Mantenemos los grupos reducidos para salvaguardar el cuidado, el respeto clínico, la intimidad y la profundidad que requiere cada historia compartida.
                </p>
              </div>
            </li>

            <li>
              <div class="w-full h-px bg-[#27252B]/8" aria-hidden="true" />
            </li>

            <li class="flex gap-6 items-start">
              <div class="shrink-0" aria-hidden="true">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">2</span>
              </div>
              <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Facilitadoras Especializadas
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  Aprende y transita dinámicas con el respaldo clínico de Ana Jiménez (Miembro Didacta AETG) y Leonor Cabrera, bajo un marco ético, riguroso y transparente.
                </p>
              </div>
            </li>

          </ol>
        </div>

      </div>

      <div class="mt-16 md:mt-24 pt-12 border-t border-[#27252B]/10 flex justify-center w-full">
        <NuxtLink
          to="/contacto"
          class="group btn-primary !inline-flex"
          aria-label="Ir a contacto para solicitar reserva de plaza"
        >
          <span>Reservar mi plaza</span>
          <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-white pointer-events-none">
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </NuxtLink>
      </div>
    </section>

  </main>
</template>