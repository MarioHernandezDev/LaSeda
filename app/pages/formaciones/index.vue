<script setup lang="ts">
useSeoMeta({
  title: 'Formaciones en Psicología · Granada 2026 | Centro La Seda',
  ogTitle: 'Formaciones en Psicología · Granada 2026 | Centro La Seda',
  description: 'Programas presenciales de especialización en Terapia Gestalt infantil y Método Wingwave® en Granada. Convocatoria 2026. Centro acreditado.',
  ogDescription: 'Programas presenciales de especialización en Terapia Gestalt infantil y Método Wingwave® en Granada. Convocatoria 2026. Centro acreditado.',
  ogImage: '/images/centro-psicologia-la-seda-granada-hero.jpg',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://centrolaseda.com/formaciones' }
  ]
})
</script>

<template>
  <main>

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · MINI-HERO
    ════════════════════════════════════════════════ -->
    <section
      class="relative w-full"
      style="height: clamp(45vh, 52vh, 55vh);"
      aria-label="Cabecera — Programas de Formación en Psicología"
    >
      <video
        class="absolute inset-0 w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
        poster="/images/centro-psicologia-la-seda-granada-hero.jpg"
        aria-hidden="true"
      >
        <source src="/video/minhero.mp4" type="video/mp4" />
        <NuxtImg
          src="/images/centro-psicologia-la-seda-granada-hero.jpg"
          alt=""
          width="1920"
          height="1080"
          format="webp"
          preload
          fetchpriority="high"
          class="w-full h-full object-cover"
          aria-hidden="true"
        />
      </video>

      <div class="absolute inset-0 bg-gradient-to-r from-[#FDFBF9]/90 via-[#FDFBF9]/60 to-transparent pointer-events-none" aria-hidden="true" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFBF9]/95 pointer-events-none" aria-hidden="true" />

      <div class="relative z-10 flex flex-col justify-center h-full page-container">
        <p class="section-label mb-4 md:mb-6">
          Programas de Especialización y Formación
        </p>
        <h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-5 md:mb-7 max-w-2xl">
          Formarse es también<br />
          <span class="text-[#27252B]/75">un acto de cuidado propio.</span>
        </h1>
        <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/80 max-w-xl">
          Programas presenciales diseñados para integrar teoría, práctica clínica
          y crecimiento personal genuino. Convocatoria 2026 · Granada.
        </p>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 2 · INTRODUCCIÓN AL ENFOQUE
    ════════════════════════════════════════════════ -->
    <section
      class="page-container py-20 md:py-28"
      aria-labelledby="intro-heading"
    >
      <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-start">

        <div class="md:col-span-4 md:sticky md:top-28">
          <div class="section-divider mb-6" aria-hidden="true" />
          <h2 id="intro-heading" class="section-title">
            Formaciones que no solo enseñan: transforman.
          </h2>
          <div class="mt-8 w-1 h-24 bg-[#71B1A5]/30" aria-hidden="true" />
        </div>

        <div class="md:col-span-8 space-y-7">
          <p class="text-lg md:text-xl leading-[1.9] text-[#27252B]/80">
            Nuestros programas nacen de la convicción de que el conocimiento
            profesional solo se integra cuando va acompañado de experiencia vivida.
            Teoría, práctica clínica y supervisión se entrelazan en cada formación
            para que el aprendizaje sea también un proceso de crecimiento personal.
          </p>
          <p class="text-lg md:text-xl leading-[1.9] text-[#27252B]/80">
            Tanto si eres terapeuta que busca ampliar su especialización clínica,
            como si quieres incorporar una herramienta avalada científicamente a tu
            práctica, aquí encontrarás un espacio riguroso, cercano y profundamente humano.
          </p>

          <blockquote class="border-l-2 border-[#71B1A5]/50 pl-6 py-1">
            <p class="font-serif italic text-[#27252B]/70 text-lg md:text-xl leading-[1.75]">
              "Lo que necesita nuestro tiempo son seres más bondadosos,
              no seres más inteligentes."
            </p>
            <footer class="mt-3 flex items-center gap-3">
              <div class="section-divider" aria-hidden="true" />
              <cite class="not-italic text-xs tracking-[0.25em] uppercase text-[#71B1A5]">
                Claudio Naranjo · Psiquiatra y humanista
              </cite>
            </footer>
          </blockquote>

          <div class="inline-flex items-center gap-3 pt-2">
            <div class="w-2 h-2 bg-[#71B1A5]" aria-hidden="true" />
            <span class="text-sm tracking-[0.2em] uppercase text-[#71B1A5]">Centro acreditado · Granada</span>
          </div>
        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 3 · CATÁLOGO DE FORMACIONES
    ════════════════════════════════════════════════ -->
    <section
      class="bg-[#27252B]/[0.03] py-20 md:py-28"
      aria-labelledby="programas-heading"
    >
      <div class="page-container">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-16">
          <div>
            <p class="section-label mb-3">Nuestros Programas</p>
            <h2 id="programas-heading" class="section-title">
              Dos formaciones presenciales
            </h2>
          </div>
          <div class="w-24 h-px bg-[#27252B]/20 md:mb-2" aria-hidden="true" />
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <!-- Tarjeta 1: Gestalt Infantil -->
          <article class="training-card group" aria-label="Formación: Terapia Gestalt Aplicada a la Infancia y Adolescencia">
            <div class="overflow-hidden aspect-[4/3]">
              <NuxtImg
                src="/images/formacion-terapia-gestalt-infancia-adolescencia-granada.jpg"
                alt="Formación presencial en Terapia Gestalt aplicada a infancia y adolescencia, Centro La Seda Granada"
                width="640"
                height="480"
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-7 flex flex-col flex-1 gap-4">
              <div class="section-divider" aria-hidden="true" />
              <h3 class="font-serif italic text-[#27252B] text-2xl leading-snug">
                Terapia Gestalt Aplicada<br />a la Infancia y Adolescencia
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                Un paseo por la infancia y la adolescencia desde la comprensión teórica
                hasta la práctica clínica más humana y sistémica. 288 horas en 15 talleres,
                dirigida por Ana María Jiménez (miembro didacta AETG).
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="training-tag">Terapia Gestalt</span>
                <span class="training-tag">288h · 15 talleres</span>
                <span class="training-tag">Presencial · Granada</span>
              </div>
              <NuxtLink
                to="/formaciones/gestalt-infantil"
                class="team-card-link self-start"
                aria-label="Ver programa completo de Terapia Gestalt Infantil y Adolescente"
              >
                Ver Programa Completo
              </NuxtLink>
            </div>
          </article>

          <!-- Tarjeta 2: Wingwave -->
          <article class="training-card group" aria-label="Formación: Método Wingwave certificada oficial">
            <div class="overflow-hidden aspect-[4/3]">
              <NuxtImg
                src="/images/formacion-certificada-metodo-wingwave-coaching-granada.jpg"
                alt="Formación certificada oficial en el Método Wingwave, técnica avalada científicamente, Centro La Seda Granada"
                width="640"
                height="480"
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-7 flex flex-col flex-1 gap-4">
              <div class="section-divider" aria-hidden="true" />
              <h3 class="font-serif italic text-[#27252B] text-2xl leading-snug">
                Método Wingwave<span class="not-italic text-[0.6em] align-super" aria-label="marca registrada">®</span><br />Formación Certificada Oficial
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                Herramienta efectiva para trabajar miedos, bloqueos y situaciones
                traumáticas. Avalada por más de 14 estudios científicos y certificada
                con sello ISO 29993. 32 horas en 4 días intensivos.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="training-tag">ISO 29993</span>
                <span class="training-tag">32h · 4 días</span>
                <span class="training-tag">Mayo 2026</span>
              </div>
              <NuxtLink
                to="/formaciones/metodo-wingwave"
                class="team-card-link self-start"
                aria-label="Saber más y ver contenidos de la formación Wingwave"
              >
                Saber más y Ver Contenidos
              </NuxtLink>
            </div>
          </article>

          <!-- Tarjeta CTA decorativa -->
          <article class="bg-[#71B1A5] flex flex-col justify-between p-7 min-h-[360px]" aria-label="¿Tienes dudas? Contáctanos para orientación formativa">
            <div class="w-6 h-px bg-[#FDFBF9]/60" aria-hidden="true" />
            <div class="space-y-5">
              <h3 class="font-serif italic text-[#FDFBF9] text-2xl leading-snug">
                ¿Tienes dudas sobre qué formación es para ti?
              </h3>
              <p class="text-base leading-[1.85] text-[#FDFBF9]/80">
                Cuéntanos tu perfil y tus objetivos profesionales. Te orientamos
                sin compromiso sobre el programa que mejor se adapta a tu momento.
              </p>
              <NuxtLink
                to="/contacto"
                class="inline-block text-sm tracking-[0.18em] uppercase text-[#FDFBF9] border-b border-[#FDFBF9]/50 pb-0.5 hover:border-[#FDFBF9] transition-colors duration-200"
                aria-label="Escríbenos para orientación sobre formaciones"
              >
                Escríbenos
              </NuxtLink>
            </div>
            <div class="text-[#FDFBF9]/20 font-serif italic text-7xl leading-none select-none text-right" aria-hidden="true">&amp;</div>
          </article>

        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 4 · AGENDA DE CONVOCATORIAS 2026
    ════════════════════════════════════════════════ -->
    <section
      class="page-container py-20 md:py-32"
      aria-labelledby="agenda-heading"
    >
      <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-14 md:mb-16">
        <div class="md:col-span-5">
          <p class="section-label mb-4">Calendario</p>
          <h2 id="agenda-heading" class="section-title">
            Próximas convocatorias<br />
            <span class="text-[#27252B]/55 not-italic font-light text-2xl md:text-3xl">Agenda 2026</span>
          </h2>
        </div>
        <div class="md:col-span-7">
          <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/65">
            Reserva tu plaza con antelación. Las plazas son limitadas para garantizar
            la profundidad y el acompañamiento de cada proceso formativo.
            Para el calendario detallado escríbenos a
            <a href="mailto:hola@centrolaseda.com" class="text-[#71B1A5] hover:underline transition-all">hola@centrolaseda.com</a>.
          </p>
        </div>
      </div>

      <!-- Listado de convocatorias como lista semántica -->
      <ol class="divide-y divide-[#27252B]/8" aria-label="Calendario de convocatorias 2026">

        <li class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-[#27252B]/[0.02] transition-colors duration-200">
          <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
            <time datetime="2026-05-09" class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">9–12</time>
            <div class="md:hidden w-px h-6 bg-[#27252B]/15" aria-hidden="true" />
            <div>
              <span class="block text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium">May</span>
              <span class="block text-xs tracking-[0.2em] text-[#27252B]/40">2026</span>
            </div>
          </div>
          <div class="hidden md:block md:col-span-1">
            <span class="text-xs tracking-[0.25em] uppercase text-[#27252B]/40 font-medium">Jue–Dom</span>
          </div>
          <div class="md:col-span-6">
            <div class="flex items-start gap-3 mb-1 flex-wrap">
              <h3 class="font-serif italic text-[#27252B] text-xl md:text-2xl leading-snug group-hover:text-[#71B1A5] transition-colors duration-200">
                Formación Certificada Oficial en el Método Wingwave<span class="not-italic text-[0.6em] align-super" aria-label="marca registrada">®</span>
              </h3>
              <span class="training-tag shrink-0 self-center">ISO 29993</span>
            </div>
            <p class="text-sm text-[#27252B]/55 font-light">Oriol Bellés y Leonor Cabrera (Symbiotik Institut) · Máx. 12 participantes por formador</p>
          </div>
          <div class="md:col-span-2 flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm text-[#27252B]/60 font-light">32h · 4 días</span>
          </div>
          <div class="md:col-span-1 flex justify-end">
            <NuxtLink
              to="/formaciones/metodo-wingwave"
              class="team-card-link whitespace-nowrap"
              aria-label="Solicitar plaza en Formación Wingwave, 9 al 12 de mayo 2026"
            >
              Solicitar plaza
            </NuxtLink>
          </div>
        </li>

        <li class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-[#27252B]/[0.02] transition-colors duration-200">
          <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
            <time datetime="2026" class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">2026</time>
            <div class="md:hidden w-px h-6 bg-[#27252B]/15" aria-hidden="true" />
            <div>
              <span class="block text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium">Por confirmar</span>
            </div>
          </div>
          <div class="hidden md:block md:col-span-1">
            <span class="text-xs tracking-[0.25em] uppercase text-[#27252B]/40 font-medium" aria-hidden="true">—</span>
          </div>
          <div class="md:col-span-6">
            <div class="flex items-start gap-3 mb-1 flex-wrap">
              <h3 class="font-serif italic text-[#27252B] text-xl md:text-2xl leading-snug group-hover:text-[#71B1A5] transition-colors duration-200">
                Sesión Informativa · Formación Gestalt Infantil y Adolescente
              </h3>
              <span class="text-[10px] tracking-[0.2em] uppercase bg-[#27252B]/8 text-[#27252B]/50 px-2.5 py-1 font-medium shrink-0 self-center">Gratuita</span>
            </div>
            <p class="text-sm text-[#27252B]/55 font-light">Presentación del programa, equipo docente y proceso de matriculación · Presencial en La Seda</p>
          </div>
          <div class="md:col-span-2 flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm text-[#27252B]/60 font-light">Consultar fecha</span>
          </div>
          <div class="md:col-span-1 flex justify-end">
            <NuxtLink
              to="/contacto"
              class="team-card-link whitespace-nowrap"
              aria-label="Inscribirme en la sesión informativa gratuita de Gestalt Infantil"
            >
              Inscribirme
            </NuxtLink>
          </div>
        </li>

        <li class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-[#27252B]/[0.02] transition-colors duration-200">
          <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
            <time datetime="2026" class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">2026</time>
            <div class="md:hidden w-px h-6 bg-[#27252B]/15" aria-hidden="true" />
            <div>
              <span class="block text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium">Por confirmar</span>
              <span class="block text-xs tracking-[0.2em] text-[#27252B]/40">Apertura</span>
            </div>
          </div>
          <div class="hidden md:block md:col-span-1">
            <span class="text-xs tracking-[0.25em] uppercase text-[#27252B]/40 font-medium">Viernes</span>
          </div>
          <div class="md:col-span-6">
            <div class="flex items-start gap-3 mb-1 flex-wrap">
              <h3 class="font-serif italic text-[#27252B] text-xl md:text-2xl leading-snug group-hover:text-[#71B1A5] transition-colors duration-200">
                Inicio · Formación en Terapia Gestalt Infantil y Adolescente
              </h3>
              <span class="training-tag shrink-0 self-center">288h · 15 talleres</span>
            </div>
            <p class="text-sm text-[#27252B]/55 font-light">Dirección: Ana María Jiménez (miembro didacta AETG) · Equipo de 8 docentes especializados</p>
          </div>
          <div class="md:col-span-2 flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm text-[#27252B]/60 font-light">Viernes 17–21h</span>
          </div>
          <div class="md:col-span-1 flex justify-end">
            <NuxtLink
              to="/formaciones/gestalt-infantil"
              class="team-card-link whitespace-nowrap"
              aria-label="Ver programa completo de Formación Gestalt Infantil y Adolescente 2026"
            >
              Ver programa
            </NuxtLink>
          </div>
        </li>

      </ol>

      <div class="mt-12 pt-8 border-t border-[#27252B]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p class="text-base text-[#27252B]/55 font-light max-w-md">
          ¿Quieres recibir el dossier completo con el calendario detallado y las condiciones económicas?
          Escríbenos a <a href="mailto:hola@centrolaseda.com" class="text-[#71B1A5] hover:underline">hola@centrolaseda.com</a>
          o llámanos al <a href="tel:+34679571977" class="text-[#71B1A5] hover:underline">679 571 977</a>.
        </p>
        <NuxtLink
          to="/contacto"
          class="inline-flex items-center gap-4 group shrink-0"
          aria-label="Ir a la página de contacto del centro"
        >
          <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
            Contactar con el centro
          </span>
          <span class="w-10 h-px bg-[#27252B]/40 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300" aria-hidden="true" />
        </NuxtLink>
      </div>

    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 5 · DATOS CLAVE
    ════════════════════════════════════════════════ -->
    <section
      class="bg-[#27252B]/[0.03] py-20 md:py-28"
      aria-labelledby="datos-heading"
    >
      <div class="page-container">
        <div class="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          <!-- Imagen -->
          <div class="relative order-2 md:order-1">
            <div class="absolute -top-4 -left-4 w-full h-full border border-[#71B1A5]/40 pointer-events-none z-0" aria-hidden="true" />
            <div class="relative z-10 overflow-hidden aspect-[3/4]">
              <NuxtImg
                src="/images/espacio-formacion-presencial-psicologia-la-seda-granada.jpg"
                alt="Sala de formación presencial del Centro de Psicología La Seda Granada, espacio para talleres de especialización en psicología"
                width="600"
                height="800"
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-[#27252B]/5 pointer-events-none" aria-hidden="true" />
            </div>
            <div class="absolute bottom-6 -right-5 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3 z-20 hidden md:block" aria-hidden="true">
              <p class="text-xs tracking-[0.2em] uppercase text-[#71B1A5]">Formación y Especialización</p>
              <p class="font-serif italic text-[#27252B] text-sm mt-0.5">La Seda · Granada</p>
            </div>
          </div>

          <div class="order-1 md:order-2">
            <p class="section-label mb-4">Por qué elegirnos</p>
            <h2 id="datos-heading" class="section-title mb-12">
              Un espacio para crecer,<br />
              <span class="text-[#27252B]/60">no solo para aprender.</span>
            </h2>

            <dl class="space-y-10">

              <div class="flex gap-6 items-start">
                <div class="shrink-0" aria-hidden="true">
                  <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">288</span>
                </div>
                <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                  <dt class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Horas de formación Gestalt</dt>
                  <dd class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                    240 horas presenciales más 48 horas de proyecto, distribuidas
                    en 15 talleres a lo largo de la convocatoria 2026.
                  </dd>
                </div>
              </div>

              <div class="w-full h-px bg-[#27252B]/8" aria-hidden="true" />

              <div class="flex gap-6 items-start">
                <div class="shrink-0" aria-hidden="true">
                  <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">14+</span>
                </div>
                <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                  <dt class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Estudios científicos – Wingwave®</dt>
                  <dd class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                    La formación en Wingwave® está certificada ISO 29993 y avalada
                    por más de 14 estudios universitarios independientes.
                  </dd>
                </div>
              </div>

              <div class="w-full h-px bg-[#27252B]/8" aria-hidden="true" />

              <div class="flex gap-6 items-start">
                <div class="shrink-0" aria-hidden="true">
                  <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">10</span>
                </div>
                <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                  <dt class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Docentes especializados</dt>
                  <dd class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                    Ana María Jiménez, Yael Peña, Yolanda Mozota, Maravillas Cano,
                    Martín Mindeguía, Margarita de la Torre, Juan Carlos Calvo,
                    Inmaculada López, Oriol Bellés y Leonor Cabrera.
                  </dd>
                </div>
              </div>

            </dl>

            <div class="mt-12 pt-8 border-t border-[#27252B]/10">
              <NuxtLink
                to="/contacto"
                class="inline-flex items-center gap-4 group"
                aria-label="Contactar para reservar plaza en las formaciones"
              >
                <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
                  Reservar mi plaza
                </span>
                <span class="w-10 h-px bg-[#27252B]/40 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300" aria-hidden="true" />
              </NuxtLink>
            </div>

          </div>

        </div>
      </div>
    </section>

  </main>
</template>