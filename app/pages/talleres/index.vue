<script setup lang="ts">
useSeoMeta({
  title: 'Talleres de Psicología y Constelaciones Familiares · Granada 2026 | La Seda',
  ogTitle: 'Talleres de Psicología y Constelaciones Familiares · Granada 2026 | La Seda',
  description: 'Talleres vivenciales de constelaciones familiares y supervisión clínica en Granada. Grupos reducidos, facilitadoras acreditadas. Agenda 2026 Centro La Seda.',
  ogDescription: 'Talleres vivenciales de constelaciones familiares y supervisión clínica en Granada. Grupos reducidos, facilitadoras acreditadas. Agenda 2026 Centro La Seda.',
  ogImage: '/images/centro-psicologia-la-seda-granada-hero.jpg',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://centrolaseda.com/talleres' }
  ]
})
</script>

<template>
  <main>

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · MINI-HERO
    ════════════════════════════════════════════════ -->
    <PageHero
      label="Talleres y Espacios de Formación"
      title-main="Encuentros para Crecer"
      title-accent="y Transformarse"
      image="/images/centro-psicologia-la-seda-granada-hero.jpg"
      image-alt="Taller grupal de crecimiento personal en el Centro La Seda Granada"
      secondary-link="/contacto"
      secondary-label="Reservar plaza"
    >
      <template #description>
        Espacios vivenciales donde la teoría y la experiencia se integran,
        diseñados para generar movimiento real en quien los habita.
      </template>
    </PageHero>


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
            Talleres que no solo enseñan: transforman.
          </h2>
          <div class="mt-8 w-1 h-24 bg-[#71B1A5]/30" aria-hidden="true" />
        </div>

        <div class="md:col-span-8 space-y-7">
          <p class="text-lg md:text-xl leading-[1.9] text-[#27252B]/80">
            Nuestros talleres nacen de la convicción de que el conocimiento
            intelectual solo se integra cuando va acompañado de experiencia
            vivida. Por eso diseñamos espacios donde el cuerpo, la emoción y
            la mente trabajan juntos, en grupo y con la guía de profesionales
            de contrastada trayectoria.
          </p>
          <p class="text-lg md:text-xl leading-[1.9] text-[#27252B]/80">
            Tanto si eres terapeuta que busca ampliar su mirada clínica, como
            si simplemente sientes que algo en ti quiere moverse, aquí
            encontrarás un espacio cuidado, seguro y profundamente humano.
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
         SECCIÓN 3 · CATÁLOGO DE TALLERES
    ════════════════════════════════════════════════ -->
    <section
      class="bg-[#27252B]/[0.03] py-20 md:py-28"
      aria-labelledby="talleres-heading"
    >
      <div class="page-container">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-16">
          <div>
            <p class="section-label mb-3">Nuestros Programas</p>
            <h2 id="talleres-heading" class="section-title">
              Talleres y espacios de formación
            </h2>
          </div>
          <div class="w-24 h-px bg-[#27252B]/20 md:mb-2" aria-hidden="true" />
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <!-- Tarjeta 1: Supervisión de Casos -->
          <article class="training-card group" aria-label="Taller: Supervisión de Casos Clínicos">
            <div class="overflow-hidden aspect-[4/3]">
              <NuxtImg
                src="/images/supervision-casos-clinicos-terapeutas-gestalt-granada.jpg"
                alt="Supervisión de casos clínicos para terapeutas y psicólogos Gestalt, Centro La Seda Granada"
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
                Supervisión de&nbsp;Casos
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                Un proceso esencial para terapeutas: supera bloqueos en consulta,
                amplía la mirada sobre el paciente y certifica horas de
                formación Gestalt con la AETG.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="training-tag">Gestalt</span>
                <span class="training-tag">AETG</span>
                <span class="training-tag">Presencial</span>
              </div>
              <NuxtLink
                to="/talleres/supervision-casos"
                class="team-card-link self-start"
                aria-label="Saber más sobre el taller de Supervisión de Casos Clínicos"
              >
                Saber más
              </NuxtLink>
            </div>
          </article>

          <!-- Tarjeta 2: Constelaciones Familiares -->
          <article class="training-card group" aria-label="Taller: Constelaciones Familiares">
            <div class="overflow-hidden aspect-[4/3]">
              <NuxtImg
                src="/images/taller-constelaciones-familiares-granada-centro-la-seda.jpg"
                alt="Talleres vivenciales de constelaciones familiares en Granada, Centro de Psicología La Seda"
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
                Constelaciones&nbsp;Familiares
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                Espacios vivenciales para revelar dinámicas invisibles, liberar
                cargas transgeneracionales, elaborar duelos latentes y recuperar
                la fuerza interior.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="training-tag">Transgeneracional</span>
                <span class="training-tag">Grupo presencial</span>
              </div>
              <NuxtLink
                to="/talleres/constelaciones-familiares"
                class="team-card-link self-start"
                aria-label="Saber más y ver fechas del taller de Constelaciones Familiares"
              >
                Saber más y Ver Fechas
              </NuxtLink>
            </div>
          </article>

          <!-- Tarjeta CTA decorativa -->
          <article class="bg-[#71B1A5] flex flex-col justify-between p-7 min-h-[360px]" aria-label="¿Tienes dudas? Contáctanos para orientación sobre talleres">
            <div class="w-6 h-px bg-[#FDFBF9]/60" aria-hidden="true" />
            <div class="space-y-5">
              <h3 class="font-serif italic text-[#FDFBF9] text-2xl leading-snug">
                ¿Tienes dudas sobre qué taller es para ti?
              </h3>
              <p class="text-base leading-[1.85] text-[#FDFBF9]/80">
                Cuéntanos tu momento vital. Te orientamos sin compromiso sobre
                el espacio que mejor resuene con lo que estás viviendo.
              </p>
              <NuxtLink
                to="/contacto"
                class="inline-block text-sm tracking-[0.18em] uppercase text-[#FDFBF9] border-b border-[#FDFBF9]/50 pb-0.5 hover:border-[#FDFBF9] transition-colors duration-200"
                aria-label="Escríbenos para orientación sobre qué taller elegir"
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
         SECCIÓN 4 · AGENDA 2026
    ════════════════════════════════════════════════ -->
    <section
      class="page-container py-20 md:py-32"
      aria-labelledby="agenda-heading"
    >
      <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-14 md:mb-16">
        <div class="md:col-span-5">
          <p class="section-label mb-4">Calendario</p>
          <h2 id="agenda-heading" class="section-title">
            Próximos encuentros<br />
            <span class="text-[#27252B]/55 not-italic font-light text-2xl md:text-3xl">Agenda 2026</span>
          </h2>
        </div>
        <div class="md:col-span-7">
          <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/65">
            Reserva tu plaza con antelación. Los grupos son reducidos para
            garantizar la profundidad y el cuidado de cada espacio grupal.
          </p>
        </div>
      </div>

      <ol class="divide-y divide-[#27252B]/8" aria-label="Calendario de talleres 2026">

        <!-- Evento 1 -->
        <li class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-[#27252B]/[0.02] transition-colors duration-200">
          <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
            <time datetime="2026-02-28" class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">28</time>
            <div class="md:hidden w-px h-6 bg-[#27252B]/15" aria-hidden="true" />
            <div>
              <span class="block text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium">Feb</span>
              <span class="block text-xs tracking-[0.2em] text-[#27252B]/40">2026</span>
            </div>
          </div>
          <div class="hidden md:block md:col-span-1">
            <span class="text-xs tracking-[0.25em] uppercase text-[#27252B]/40 font-medium">Sábado</span>
          </div>
          <div class="md:col-span-6">
            <h3 class="font-serif italic text-[#27252B] text-xl md:text-2xl leading-snug mb-1 group-hover:text-[#71B1A5] transition-colors duration-200">
              Taller Breve de Constelaciones Familiares
            </h3>
            <p class="text-sm text-[#27252B]/55 font-light">Dirigido por Leonor Cabrera Torrado · Grupo reducido</p>
          </div>
          <div class="md:col-span-2 flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm text-[#27252B]/60 font-light">10:00h – 14:00h</span>
          </div>
          <div class="md:col-span-1 flex justify-end">
            <NuxtLink
              to="/talleres/constelaciones-familiares"
              class="team-card-link whitespace-nowrap"
              aria-label="Inscribirme en el taller de Constelaciones Familiares del 28 de febrero"
            >
              Inscribirme
            </NuxtLink>
          </div>
        </li>

        <!-- Evento 2 -->
        <li class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-[#27252B]/[0.02] transition-colors duration-200">
          <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
            <time datetime="2026-04-18" class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">18</time>
            <div class="md:hidden w-px h-6 bg-[#27252B]/15" aria-hidden="true" />
            <div>
              <span class="block text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium">Abr</span>
              <span class="block text-xs tracking-[0.2em] text-[#27252B]/40">2026</span>
            </div>
          </div>
          <div class="hidden md:block md:col-span-1">
            <span class="text-xs tracking-[0.25em] uppercase text-[#27252B]/40 font-medium">Sábado</span>
          </div>
          <div class="md:col-span-6">
            <h3 class="font-serif italic text-[#27252B] text-xl md:text-2xl leading-snug mb-1 group-hover:text-[#71B1A5] transition-colors duration-200">
              Taller Breve de Constelaciones Familiares
            </h3>
            <p class="text-sm text-[#27252B]/55 font-light">Dirigido por Leonor Cabrera Torrado · Grupo reducido</p>
          </div>
          <div class="md:col-span-2 flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm text-[#27252B]/60 font-light">10:00h – 14:00h</span>
          </div>
          <div class="md:col-span-1 flex justify-end">
            <NuxtLink
              to="/talleres/constelaciones-familiares"
              class="team-card-link whitespace-nowrap"
              aria-label="Inscribirme en el taller de Constelaciones Familiares del 18 de abril"
            >
              Inscribirme
            </NuxtLink>
          </div>
        </li>

        <!-- Evento 3 -->
        <li class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-[#27252B]/[0.02] transition-colors duration-200">
          <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
            <time datetime="2026-05-16" class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">16</time>
            <div class="md:hidden w-px h-6 bg-[#27252B]/15" aria-hidden="true" />
            <div>
              <span class="block text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium">May</span>
              <span class="block text-xs tracking-[0.2em] text-[#27252B]/40">2026</span>
            </div>
          </div>
          <div class="hidden md:block md:col-span-1">
            <span class="text-xs tracking-[0.25em] uppercase text-[#27252B]/40 font-medium">Sábado</span>
          </div>
          <div class="md:col-span-6">
            <h3 class="font-serif italic text-[#27252B] text-xl md:text-2xl leading-snug mb-1 group-hover:text-[#71B1A5] transition-colors duration-200">
              Taller Breve de Constelaciones Familiares
            </h3>
            <p class="text-sm text-[#27252B]/55 font-light">Dirigido por Leonor Cabrera Torrado · Grupo reducido</p>
          </div>
          <div class="md:col-span-2 flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm text-[#27252B]/60 font-light">10:00h – 14:00h</span>
          </div>
          <div class="md:col-span-1 flex justify-end">
            <NuxtLink
              to="/talleres/constelaciones-familiares"
              class="team-card-link whitespace-nowrap"
              aria-label="Inscribirme en el taller de Constelaciones Familiares del 16 de mayo"
            >
              Inscribirme
            </NuxtLink>
          </div>
        </li>

        <!-- Evento 4 · Especial Solsticio -->
        <li class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-[#27252B]/[0.02] transition-colors duration-200">
          <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
            <time datetime="2026-06-20" class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">20</time>
            <div class="md:hidden w-px h-6 bg-[#27252B]/15" aria-hidden="true" />
            <div>
              <span class="block text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium">Jun</span>
              <span class="block text-xs tracking-[0.2em] text-[#27252B]/40">2026</span>
            </div>
          </div>
          <div class="hidden md:block md:col-span-1">
            <span class="text-xs tracking-[0.25em] uppercase text-[#27252B]/40 font-medium">Sábado</span>
          </div>
          <div class="md:col-span-6">
            <div class="flex items-start gap-3 mb-1 flex-wrap">
              <h3 class="font-serif italic text-[#27252B] text-xl md:text-2xl leading-snug group-hover:text-[#71B1A5] transition-colors duration-200">
                Taller de Constelaciones para la Renovación
              </h3>
              <span class="training-tag shrink-0 self-center">Solsticio de Verano</span>
            </div>
            <p class="text-sm text-[#27252B]/55 font-light">Dirigido por Leonor Cabrera Torrado · Edición especial</p>
          </div>
          <div class="md:col-span-2 flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm text-[#27252B]/60 font-light">Consultar horario</span>
          </div>
          <div class="md:col-span-1 flex justify-end">
            <NuxtLink
              to="/talleres/constelaciones-familiares"
              class="team-card-link whitespace-nowrap"
              aria-label="Inscribirme en el taller especial de Constelaciones del Solsticio de Verano, 20 de junio"
            >
              Inscribirme
            </NuxtLink>
          </div>
        </li>

      </ol>

      <div class="mt-12 pt-8 border-t border-[#27252B]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p class="text-base text-[#27252B]/55 font-light max-w-md">
          ¿Tienes dudas sobre qué taller se adapta mejor a tu momento?
          Escríbenos y te orientamos sin compromiso.
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

          <!-- Imagen con marco desfasado -->
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

          <!-- Columna de datos -->
          <div class="order-1 md:order-2">
            <p class="section-label mb-4">Por qué elegirnos</p>
            <h2 id="datos-heading" class="section-title mb-12">
              Un espacio para crecer,<br />
              <span class="text-[#27252B]/60">no solo para aprender.</span>
            </h2>

            <dl class="space-y-10">

              <div class="flex gap-6 items-start">
                <div class="shrink-0" aria-hidden="true">
                  <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">+10</span>
                </div>
                <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                  <dt class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Años de experiencia</dt>
                  <dd class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                    De talleres vivenciales en Granada, con cientos de personas
                    acompañadas en sus procesos de cambio.
                  </dd>
                </div>
              </div>

              <div class="w-full h-px bg-[#27252B]/8" aria-hidden="true" />

              <div class="flex gap-6 items-start">
                <div class="shrink-0" aria-hidden="true">
                  <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">12</span>
                </div>
                <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                  <dt class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Plazas máximas por grupo</dt>
                  <dd class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                    Para garantizar la profundidad y el cuidado que merece
                    cada proceso grupal.
                  </dd>
                </div>
              </div>

              <div class="w-full h-px bg-[#27252B]/8" aria-hidden="true" />

              <div class="flex gap-6 items-start">
                <div class="shrink-0" aria-hidden="true">
                  <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">2</span>
                </div>
                <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                  <dt class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Facilitadoras especializadas</dt>
                  <dd class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                    Ana Jiménez (miembro didacta AETG) y Leonor Cabrera Torrado,
                    con formación acreditada y supervisada.
                  </dd>
                </div>
              </div>

            </dl>

            <div class="mt-12 pt-8 border-t border-[#27252B]/10">
              <NuxtLink
                to="/contacto"
                class="inline-flex items-center gap-4 group"
                aria-label="Contactar para reservar plaza en los talleres"
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