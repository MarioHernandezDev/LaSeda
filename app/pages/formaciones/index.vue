<template>
  <main class="bg-[#FDFBF9] text-[#27252B] font-sans overflow-x-hidden">

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · HERO EDITORIAL
    ════════════════════════════════════════════════ -->
    <section
      class="relative w-full flex flex-col justify-end overflow-hidden"
      style="height: clamp(45vh, 52vh, 58vh);"
    >
      <img
        src="/images/default.jpg"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover rounded-none"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#27252B]/85 via-[#27252B]/60 to-[#27252B]/20 pointer-events-none" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#FDFBF9] via-transparent to-transparent pointer-events-none" />

      <div class="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 pb-14 md:pb-20">

        <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-6">
          Programas de Especialización y Formación
        </p>

        <blockquote class="max-w-3xl mb-8">
          <p class="font-serif italic text-white text-2xl md:text-3xl lg:text-4xl leading-[1.35] mb-4">
            "Lo que necesita nuestro tiempo son seres más bondadosos,
            no seres más inteligentes.
            <em class="not-italic text-[#71B1A5]"> La inteligencia sin bondad
            es una mutación fallida.</em>"
          </p>
          <footer class="flex items-center gap-3">
            <div class="w-8 h-px bg-[#71B1A5]/60" />
            <cite class="not-italic text-white/55 text-xs tracking-[0.25em] uppercase">
              Claudio Naranjo · Psiquiatra y humanista chileno
            </cite>
          </footer>
        </blockquote>

        <h1 class="font-sans font-light text-[#27252B] text-lg md:text-xl tracking-[0.15em] uppercase">
          Descubre nuestras
          <span class="font-serif italic text-[#71B1A5]"> Formaciones</span>
        </h1>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         FRANJA DE CONTEXTO
    ════════════════════════════════════════════════ -->
    <div class="w-full py-5 px-6 md:px-12 bg-[#27252B]">
      <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
        <p class="font-sans text-xs uppercase tracking-[0.2em] text-white/35">
          Dos programas · Formación presencial · Granada
        </p>
        <div class="flex items-center gap-6">
          <span class="font-sans text-xs text-white/25">▸ Convocatoria 2026</span>
          <span class="font-sans text-xs uppercase tracking-widest px-3 py-1 rounded-none bg-[#71B1A5] text-[#27252B] font-semibold">
            Plazas limitadas
          </span>
        </div>
      </div>
    </div>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 2 · CATÁLOGO DE FORMACIONES
    ════════════════════════════════════════════════ -->
    <section class="py-20 md:py-28">

      <!-- ── Bloque 1: Gestalt Infantil · imagen izquierda ── -->
      <article class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-0">
        <div class="grid md:grid-cols-2 gap-0 items-stretch">

          <!-- Imagen -->
          <div class="overflow-hidden rounded-none aspect-[4/3] md:aspect-auto relative">
            <img
              src="/images/default.jpg"
              alt="Formación en Terapia Gestalt aplicada a la infancia y adolescencia"
              class="w-full h-full object-cover rounded-none hover:scale-[1.03] transition-transform duration-700"
            />
            <div class="absolute bottom-0 left-0 p-5 z-10">
              <span class="font-sans text-xs uppercase tracking-[0.2em] px-3 py-2 rounded-none inline-block bg-[#27252B] text-[#71B1A5]">
                288h · 15 talleres · 2026
              </span>
            </div>
          </div>

          <!-- Contenido -->
          <div class="bg-white border border-[#27252B]/8 border-l-0 flex flex-col justify-center px-10 md:px-14 py-12 md:py-16">

            <p class="text-[#71B1A5] text-xs tracking-[0.35em] uppercase font-medium mb-5">
              Formación 01 · Especialización clínica
            </p>

            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.15] mb-6">
              Terapia Gestalt Aplicada<br />
              <span class="not-italic font-light text-[#27252B]/60 text-2xl md:text-3xl">
                a la Infancia y Adolescencia
              </span>
            </h2>

            <div class="w-10 h-px bg-[#71B1A5] mb-6" />

            <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/75 mb-10">
              Aprender a acompañar bien a los niños y niñas es una labor importante y delicada.
              Saber escuchar e intervenir sobre las heridas emocionales en la infancia y adolescencia
              también es un gran reto. Esta formación es un paseo por ambas etapas, desde la
              comprensión teórica hasta la práctica clínica más humana y sistémica.
            </p>

            <!-- Etiquetas -->
            <div class="flex flex-wrap gap-2 mb-10">
              <span class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium rounded-none">
                Terapia Gestalt
              </span>
              <span class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium rounded-none">
                Trauma e infancia
              </span>
              <span class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium rounded-none">
                Presencial · Granada
              </span>
            </div>

            <NuxtLink
              to="/formaciones/gestalt-infantil"
              class="self-start inline-flex items-center gap-3 group"
            >
              <span class="text-sm tracking-[0.2em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-colors duration-200">
                Ver Programa Completo y Profesorado
              </span>
              <span class="w-6 h-px bg-[#27252B]/30 group-hover:w-10 group-hover:bg-[#71B1A5] transition-all duration-300" />
            </NuxtLink>

          </div>
        </div>
      </article>

      <!-- Separador entre bloques -->
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 my-12 md:my-16">
        <div class="h-px bg-[#27252B]/8" />
      </div>

      <!-- ── Bloque 2: Wingwave · imagen derecha ── -->
      <article class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div class="grid md:grid-cols-2 gap-0 items-stretch">

          <!-- Contenido oscuro -->
          <div class="bg-[#27252B] flex flex-col justify-center px-10 md:px-14 py-12 md:py-16 order-2 md:order-1">

            <p class="text-[#71B1A5] text-xs tracking-[0.35em] uppercase font-medium mb-5">
              Formación 02 · Certificación oficial ISO 29993
            </p>

            <h2 class="font-serif italic text-white text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.15] mb-6">
              Método Wingwave<span class="not-italic text-[0.55em] align-super">®</span><br />
              <span class="not-italic font-light text-white/50 text-2xl md:text-3xl">
                Formación Certificada Oficial
              </span>
            </h2>

            <div class="w-10 h-px bg-[#71B1A5] mb-6" />

            <p class="text-lg md:text-xl leading-[1.85] text-white/70 mb-10">
              Formación para coaches, terapeutas, psicólogos y todas las personas que quieran
              incorporar una herramienta efectiva, práctica y profunda para trabajar miedos,
              bloqueos y situaciones traumáticas. Avalada por más de
              <strong class="text-white font-medium">14 estudios científicos</strong>
              y certificada con sello ISO 29993.
            </p>

            <!-- Etiquetas -->
            <div class="flex flex-wrap gap-2 mb-10">
              <span class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/20 text-[#71B1A5] px-3 py-1.5 font-medium rounded-none">
                ISO 29993
              </span>
              <span class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/20 text-[#71B1A5] px-3 py-1.5 font-medium rounded-none">
                14 estudios científicos
              </span>
              <span class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/20 text-[#71B1A5] px-3 py-1.5 font-medium rounded-none">
                32h · 4 días intensivos
              </span>
            </div>

            <NuxtLink
              to="/formaciones/metodo-wingwave"
              class="self-start inline-flex items-center gap-3 group"
            >
              <span class="text-sm tracking-[0.2em] uppercase text-white border-b border-white/30 pb-0.5 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-colors duration-200">
                Saber más y Ver Contenidos
              </span>
              <span class="w-6 h-px bg-white/30 group-hover:w-10 group-hover:bg-[#71B1A5] transition-all duration-300" />
            </NuxtLink>

          </div>

          <!-- Imagen -->
          <div class="overflow-hidden rounded-none aspect-[4/3] md:aspect-auto order-1 md:order-2 relative">
            <img
              src="/images/default.jpg"
              alt="Formación certificada en el Método Wingwave"
              class="w-full h-full object-cover rounded-none hover:scale-[1.03] transition-transform duration-700"
              style="filter: saturate(0.7);"
            />
            <div class="absolute bottom-0 right-0 p-5 z-10">
              <span class="font-sans text-xs uppercase tracking-[0.2em] px-3 py-2 rounded-none inline-block bg-[#71B1A5] text-[#27252B] font-semibold">
                Mayo 2026 · Próxima convocatoria
              </span>
            </div>
            <div class="absolute top-6 right-6 z-10 font-sans font-bold text-white/15 select-none" style="font-size: 3.5rem; line-height: 1;">
              ISO
            </div>
          </div>

        </div>
      </article>

    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 3 · AGENDA DE CONVOCATORIAS 2026
    ════════════════════════════════════════════════ -->
    <section class="bg-[#27252B]/[0.03] py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <!-- Cabecera -->
        <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-14 md:mb-16">
          <div class="md:col-span-5">
            <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-4">
              Calendario
            </p>
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2]">
              Próximas convocatorias<br />
              <span class="text-[#27252B]/55 not-italic font-light text-2xl md:text-3xl">
                Agenda 2026
              </span>
            </h2>
          </div>
          <div class="md:col-span-7">
            <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/65">
              Reserva tu plaza con antelación. Las plazas son limitadas para
              garantizar la profundidad y el acompañamiento de cada proceso formativo.
              Para el calendario detallado escríbenos a
              <a href="mailto:hola@centrolaseda.com" class="text-[#71B1A5] hover:underline transition-all">hola@centrolaseda.com</a>.
            </p>
          </div>
        </div>

        <!-- Lista de eventos -->
        <div class="divide-y divide-[#27252B]/8">

          <!-- Evento 1: Wingwave Mayo -->
          <div class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-white transition-colors duration-200 px-0 md:-mx-6 md:px-6 rounded-none">
            <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
              <span class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">9–12</span>
              <div class="md:hidden w-px h-6 bg-[#27252B]/15" />
              <div>
                <span class="block text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium">May</span>
                <span class="block text-xs tracking-[0.2em] text-[#27252B]/40">2026</span>
              </div>
            </div>
            <div class="hidden md:block md:col-span-1">
              <span class="text-xs tracking-[0.25em] uppercase text-[#27252B]/40 font-medium">Jue–Dom</span>
            </div>
            <div class="md:col-span-6">
              <div class="flex items-center gap-3 mb-1 flex-wrap">
                <h3 class="font-serif italic text-[#27252B] text-xl md:text-2xl leading-snug group-hover:text-[#71B1A5] transition-colors duration-200">
                  Formación Certificada Oficial en el Método Wingwave®
                </h3>
                <span class="hidden md:inline-block text-[10px] tracking-[0.2em] uppercase bg-[#71B1A5]/15 text-[#71B1A5] px-2.5 py-1 font-medium rounded-none shrink-0">
                  ISO 29993
                </span>
              </div>
              <p class="text-sm text-[#27252B]/55 font-light">
                Oriol Bellés y Leonor Cabrera (Symbiotik Institut) · Máx. 12 participantes por formador
              </p>
              <span class="md:hidden inline-block mt-2 text-[10px] tracking-[0.2em] uppercase bg-[#71B1A5]/15 text-[#71B1A5] px-2.5 py-1 font-medium rounded-none">
                ISO 29993
              </span>
            </div>
            <div class="md:col-span-2 flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm text-[#27252B]/60 font-light">32h · 4 días</span>
            </div>
            <div class="md:col-span-1 flex justify-end">
              <NuxtLink to="/formaciones/metodo-wingwave" class="text-xs tracking-[0.2em] uppercase text-[#71B1A5] border-b border-[#71B1A5]/30 pb-0.5 hover:border-[#71B1A5] transition-colors duration-200 whitespace-nowrap">
                Solicitar plaza
              </NuxtLink>
            </div>
          </div>

          <!-- Evento 2: Sesión informativa Gestalt -->
          <div class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-white transition-colors duration-200 px-0 md:-mx-6 md:px-6 rounded-none">
            <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
              <span class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">2026</span>
              <div class="md:hidden w-px h-6 bg-[#27252B]/15" />
              <div>
                <span class="block text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium">Por confirmar</span>
              </div>
            </div>
            <div class="hidden md:block md:col-span-1">
              <span class="text-xs tracking-[0.25em] uppercase text-[#27252B]/40 font-medium">—</span>
            </div>
            <div class="md:col-span-6">
              <div class="flex items-center gap-3 mb-1 flex-wrap">
                <h3 class="font-serif italic text-[#27252B] text-xl md:text-2xl leading-snug group-hover:text-[#71B1A5] transition-colors duration-200">
                  Sesión Informativa · Formación Gestalt Infantil y Adolescente
                </h3>
                <span class="hidden md:inline-block text-[10px] tracking-[0.2em] uppercase bg-[#27252B]/8 text-[#27252B]/50 px-2.5 py-1 font-medium rounded-none shrink-0">
                  Gratuita
                </span>
              </div>
              <p class="text-sm text-[#27252B]/55 font-light">
                Presentación del programa, equipo docente y proceso de matriculación · Presencial en La Seda
              </p>
              <span class="md:hidden inline-block mt-2 text-[10px] tracking-[0.2em] uppercase bg-[#27252B]/8 text-[#27252B]/50 px-2.5 py-1 font-medium rounded-none">
                Gratuita
              </span>
            </div>
            <div class="md:col-span-2 flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm text-[#27252B]/60 font-light">Consultar fecha</span>
            </div>
            <div class="md:col-span-1 flex justify-end">
              <NuxtLink to="/contacto" class="text-xs tracking-[0.2em] uppercase text-[#71B1A5] border-b border-[#71B1A5]/30 pb-0.5 hover:border-[#71B1A5] transition-colors duration-200 whitespace-nowrap">
                Inscribirme
              </NuxtLink>
            </div>
          </div>

          <!-- Evento 3: Inicio Gestalt -->
          <div class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-white transition-colors duration-200 px-0 md:-mx-6 md:px-6 rounded-none">
            <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
              <span class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">2026</span>
              <div class="md:hidden w-px h-6 bg-[#27252B]/15" />
              <div>
                <span class="block text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium">Por confirmar</span>
                <span class="block text-xs tracking-[0.2em] text-[#27252B]/40">Apertura</span>
              </div>
            </div>
            <div class="hidden md:block md:col-span-1">
              <span class="text-xs tracking-[0.25em] uppercase text-[#27252B]/40 font-medium">Viernes</span>
            </div>
            <div class="md:col-span-6">
              <div class="flex items-center gap-3 mb-1 flex-wrap">
                <h3 class="font-serif italic text-[#27252B] text-xl md:text-2xl leading-snug group-hover:text-[#71B1A5] transition-colors duration-200">
                  Inicio · Formación en Terapia Gestalt Infantil y Adolescente
                </h3>
                <span class="hidden md:inline-block text-[10px] tracking-[0.2em] uppercase bg-[#71B1A5]/15 text-[#71B1A5] px-2.5 py-1 font-medium rounded-none shrink-0">
                  288h · 15 talleres
                </span>
              </div>
              <p class="text-sm text-[#27252B]/55 font-light">
                Dirección: Ana María Jiménez (miembro didacta AETG) · Equipo de 8 docentes especializados
              </p>
              <span class="md:hidden inline-block mt-2 text-[10px] tracking-[0.2em] uppercase bg-[#71B1A5]/15 text-[#71B1A5] px-2.5 py-1 font-medium rounded-none">
                288h · 15 talleres
              </span>
            </div>
            <div class="md:col-span-2 flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm text-[#27252B]/60 font-light">Viernes 17–21h</span>
            </div>
            <div class="md:col-span-1 flex justify-end">
              <NuxtLink to="/formaciones/gestalt-infantil" class="text-xs tracking-[0.2em] uppercase text-[#71B1A5] border-b border-[#71B1A5]/30 pb-0.5 hover:border-[#71B1A5] transition-colors duration-200 whitespace-nowrap">
                Ver programa
              </NuxtLink>
            </div>
          </div>

        </div>

        <!-- CTA agenda -->
        <div class="mt-12 pt-10 border-t border-[#27252B]/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p class="text-base text-[#27252B]/55 font-light max-w-md">
            ¿Quieres recibir el dossier completo con el calendario detallado y las condiciones económicas?
            Escríbenos a <a href="mailto:hola@centrolaseda.com" class="text-[#71B1A5] hover:underline">hola@centrolaseda.com</a>
            o llámanos al <a href="tel:679571977" class="text-[#71B1A5] hover:underline">679 571 977</a>.
          </p>
          <NuxtLink to="/contacto" class="inline-flex items-center gap-3 group shrink-0">
            <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
              Contactar con el centro
            </span>
            <span class="w-10 h-px bg-[#27252B]/30 group-hover:w-14 group-hover:bg-[#71B1A5] transition-all duration-300" />
          </NuxtLink>
        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 4 · BANNER CIERRE CON ESTADÍSTICAS
    ════════════════════════════════════════════════ -->
    <section class="relative overflow-hidden py-24 md:py-32">

      <div class="absolute inset-0">
        <img src="/images/default.jpg" alt="" aria-hidden="true" class="w-full h-full object-cover rounded-none" />
        <div class="absolute inset-0 bg-[#FDFBF9]/92" />
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div class="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          <div>
            <div class="w-10 h-px bg-[#71B1A5] mb-6" />
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2] mb-6">
              Formarse es también<br />
              <span class="text-[#71B1A5]">un acto de cuidado propio.</span>
            </h2>
            <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/70">
              Nuestros programas integran teoría, práctica clínica y supervisión. Cada formación
              está diseñada para que el aprendizaje sea también una experiencia de crecimiento
              personal y profesional genuino.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-6">

            <div class="border border-[#27252B]/10 rounded-none p-7 hover:border-[#71B1A5]/40 transition-colors duration-300">
              <span class="font-serif italic text-[#71B1A5] text-4xl md:text-5xl leading-none block mb-3">288</span>
              <p class="text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium mb-1">Horas</p>
              <p class="text-sm text-[#27252B]/60 leading-relaxed font-light">de formación presencial en Gestalt Infantil (240h presenciales + 48h proyecto)</p>
            </div>

            <div class="border border-[#27252B]/10 rounded-none p-7 hover:border-[#71B1A5]/40 transition-colors duration-300">
              <span class="font-serif italic text-[#71B1A5] text-4xl md:text-5xl leading-none block mb-3">14+</span>
              <p class="text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium mb-1">Estudios</p>
              <p class="text-sm text-[#27252B]/60 leading-relaxed font-light">científicos universitarios que avalan el método Wingwave®</p>
            </div>

            <div class="border border-[#27252B]/10 rounded-none p-7 hover:border-[#71B1A5]/40 transition-colors duration-300 col-span-2">
              <span class="font-serif italic text-[#71B1A5] text-4xl md:text-5xl leading-none block mb-3">10</span>
              <p class="text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium mb-1">Docentes especializados</p>
              <p class="text-sm text-[#27252B]/60 leading-relaxed font-light">
                Ana María Jiménez, Yael Peña, Yolanda Mozota, Maravillas Cano, Martín Mindeguía, Margarita de la Torre,
                Juan Carlos Calvo, Inmaculada López, Oriol Bellés y Leonor Cabrera
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>

  </main>
</template>