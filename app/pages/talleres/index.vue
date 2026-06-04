<template>
  <main class="bg-[#FDFBF9] text-[#27252B] font-sans overflow-x-hidden">

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · HERO EDITORIAL
    ════════════════════════════════════════════════ -->
    <section
      class="relative w-full flex flex-col justify-end overflow-hidden"
      style="height: clamp(45vh, 52vh, 58vh);"
    >
      <!-- Imagen de fondo -->
      <img
        src="/images/default.jpg"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover rounded-none"
      />

      <!-- Capas de gradiente -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#27252B]/85 via-[#27252B]/60 to-[#27252B]/20 pointer-events-none" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#FDFBF9] via-transparent to-transparent pointer-events-none" />

      <!-- Contenido -->
      <div class="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 pb-14 md:pb-20">

        <!-- Etiqueta superior -->
        <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-6">
          Talleres y Espacios de Formación
        </p>

        <!-- Cita Claudio Naranjo -->
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

        <!-- Título de sección -->
        <h1 class="font-sans font-light text-[#27252B] text-lg md:text-xl tracking-[0.15em] uppercase">
          Nuestros Talleres y Espacios de Formación
        </h1>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 2 · CATÁLOGO DE TALLERES
    ════════════════════════════════════════════════ -->
    <section class="py-20 md:py-28">

      <!-- ── Bloque 1: Supervisión de Casos · imagen izquierda ── -->
      <article class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-0">
        <div class="grid md:grid-cols-2 gap-0 items-stretch">

          <!-- Imagen -->
          <div class="overflow-hidden rounded-none aspect-[4/3] md:aspect-auto">
            <img
              src="/images/default.jpg"
              alt="Supervisión de Casos Clínicos en La Seda"
              class="w-full h-full object-cover rounded-none hover:scale-[1.03] transition-transform duration-700"
            />
          </div>

          <!-- Contenido -->
          <div class="bg-white border border-[#27252B]/8 border-l-0 flex flex-col justify-center px-10 md:px-14 py-12 md:py-16">

            <p class="text-[#71B1A5] text-xs tracking-[0.35em] uppercase font-medium mb-5">
              Para profesionales
            </p>

            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.15] mb-6">
              Supervisión de Casos<br />
              <span class="not-italic font-light text-[#27252B]/60 text-2xl md:text-3xl">
                para Terapeutas
              </span>
            </h2>

            <div class="w-10 h-px bg-[#71B1A5] mb-6" />

            <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/75 mb-10">
              Un proceso esencial guiado por
              <strong class="text-[#27252B] font-medium">Ana Jiménez</strong>
              (miembro didacta y supervisor de la AETG) para superar bloqueos
              en consulta, ampliar la mirada sobre el paciente y certificar
              horas de formación Gestalt.
            </p>

            <!-- Etiquetas -->
            <div class="flex flex-wrap gap-2 mb-10">
              <span class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium rounded-none">
                Gestalt
              </span>
              <span class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium rounded-none">
                Certificación AETG
              </span>
              <span class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium rounded-none">
                Presencial
              </span>
            </div>

            <NuxtLink
              to="/talleres/supervision-casos"
              class="self-start inline-flex items-center gap-3 group"
            >
              <span class="text-sm tracking-[0.2em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-colors duration-200">
                Saber más y Ver Fechas
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

      <!-- ── Bloque 2: Constelaciones Familiares · imagen derecha ── -->
      <article class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div class="grid md:grid-cols-2 gap-0 items-stretch">

          <!-- Contenido -->
          <div class="bg-[#27252B] flex flex-col justify-center px-10 md:px-14 py-12 md:py-16 order-2 md:order-1">

            <p class="text-[#71B1A5] text-xs tracking-[0.35em] uppercase font-medium mb-5">
              Espacios vivenciales
            </p>

            <h2 class="font-serif italic text-white text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.15] mb-6">
              Talleres de Constelaciones<br />
              <span class="not-italic font-light text-white/50 text-2xl md:text-3xl">
                Familiares
              </span>
            </h2>

            <div class="w-10 h-px bg-[#71B1A5] mb-6" />

            <p class="text-lg md:text-xl leading-[1.85] text-white/70 mb-10">
              Espacios vivenciales dirigidos por
              <strong class="text-white font-medium">Leonor Cabrera Torrado</strong>
              para revelar y resolver dinámicas invisibles, liberar cargas
              transgeneracionales, elaborar duelos latentes y recuperar
              la fuerza interior.
            </p>

            <!-- Etiquetas -->
            <div class="flex flex-wrap gap-2 mb-10">
              <span class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/20 text-[#71B1A5] px-3 py-1.5 font-medium rounded-none">
                Transgeneracional
              </span>
              <span class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/20 text-[#71B1A5] px-3 py-1.5 font-medium rounded-none">
                Duelo y pérdida
              </span>
              <span class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/20 text-[#71B1A5] px-3 py-1.5 font-medium rounded-none">
                Grupo presencial
              </span>
            </div>

            <NuxtLink
              to="/talleres/constelaciones-familiares"
              class="self-start inline-flex items-center gap-3 group"
            >
              <span class="text-sm tracking-[0.2em] uppercase text-white border-b border-white/30 pb-0.5 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-colors duration-200">
                Ver Próximos Talleres
              </span>
              <span class="w-6 h-px bg-white/30 group-hover:w-10 group-hover:bg-[#71B1A5] transition-all duration-300" />
            </NuxtLink>

          </div>

          <!-- Imagen -->
          <div class="overflow-hidden rounded-none aspect-[4/3] md:aspect-auto order-1 md:order-2">
            <img
              src="/images/default.jpg"
              alt="Talleres de Constelaciones Familiares en La Seda Granada"
              class="w-full h-full object-cover rounded-none hover:scale-[1.03] transition-transform duration-700"
            />
          </div>

        </div>
      </article>

    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 3 · AGENDA 2026
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
              Próximos encuentros<br />
              <span class="text-[#27252B]/55 not-italic font-light text-2xl md:text-3xl">
                Agenda 2026
              </span>
            </h2>
          </div>
          <div class="md:col-span-7">
            <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/65">
              Reserva tu plaza con antelación. Las plazas son limitadas para
              garantizar la profundidad y el cuidado de cada espacio grupal.
              Consulta disponibilidad o escríbenos para más información.
            </p>
          </div>
        </div>

        <!-- Lista de eventos -->
        <div class="divide-y divide-[#27252B]/8">

          <!-- Evento 1 -->
          <div class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-white transition-colors duration-200 px-0 md:-mx-6 md:px-6 rounded-none">

            <!-- Fecha bloque -->
            <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
              <span class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">28</span>
              <div class="md:hidden w-px h-6 bg-[#27252B]/15" />
              <div>
                <span class="block text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium">Feb</span>
                <span class="block text-xs tracking-[0.2em] text-[#27252B]/40">2026</span>
              </div>
            </div>

            <!-- Día semana -->
            <div class="hidden md:block md:col-span-1">
              <span class="text-xs tracking-[0.25em] uppercase text-[#27252B]/40 font-medium">Sábado</span>
            </div>

            <!-- Título y descripción -->
            <div class="md:col-span-6">
              <h3 class="font-serif italic text-[#27252B] text-xl md:text-2xl leading-snug mb-1 group-hover:text-[#71B1A5] transition-colors duration-200">
                Taller Breve de Constelaciones Familiares
              </h3>
              <p class="text-sm text-[#27252B]/55 font-light">
                Dirigido por Leonor Cabrera Torrado · Grupo reducido
              </p>
            </div>

            <!-- Horario -->
            <div class="md:col-span-2 flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm text-[#27252B]/60 font-light">10:00h – 14:00h</span>
            </div>

            <!-- CTA -->
            <div class="md:col-span-1 flex justify-end">
              <NuxtLink
                to="/talleres/constelaciones-familiares"
                class="text-xs tracking-[0.2em] uppercase text-[#71B1A5] border-b border-[#71B1A5]/30 pb-0.5 hover:border-[#71B1A5] transition-colors duration-200 whitespace-nowrap"
              >
                Inscribirme
              </NuxtLink>
            </div>

          </div>

          <!-- Evento 2 -->
          <div class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-white transition-colors duration-200 px-0 md:-mx-6 md:px-6 rounded-none">

            <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
              <span class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">18</span>
              <div class="md:hidden w-px h-6 bg-[#27252B]/15" />
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
              <p class="text-sm text-[#27252B]/55 font-light">
                Dirigido por Leonor Cabrera Torrado · Grupo reducido
              </p>
            </div>

            <div class="md:col-span-2 flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm text-[#27252B]/60 font-light">10:00h – 14:00h</span>
            </div>

            <div class="md:col-span-1 flex justify-end">
              <NuxtLink
                to="/talleres/constelaciones-familiares"
                class="text-xs tracking-[0.2em] uppercase text-[#71B1A5] border-b border-[#71B1A5]/30 pb-0.5 hover:border-[#71B1A5] transition-colors duration-200 whitespace-nowrap"
              >
                Inscribirme
              </NuxtLink>
            </div>

          </div>

          <!-- Evento 3 -->
          <div class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-white transition-colors duration-200 px-0 md:-mx-6 md:px-6 rounded-none">

            <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
              <span class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">16</span>
              <div class="md:hidden w-px h-6 bg-[#27252B]/15" />
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
              <p class="text-sm text-[#27252B]/55 font-light">
                Dirigido por Leonor Cabrera Torrado · Grupo reducido
              </p>
            </div>

            <div class="md:col-span-2 flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm text-[#27252B]/60 font-light">10:00h – 14:00h</span>
            </div>

            <div class="md:col-span-1 flex justify-end">
              <NuxtLink
                to="/talleres/constelaciones-familiares"
                class="text-xs tracking-[0.2em] uppercase text-[#71B1A5] border-b border-[#71B1A5]/30 pb-0.5 hover:border-[#71B1A5] transition-colors duration-200 whitespace-nowrap"
              >
                Inscribirme
              </NuxtLink>
            </div>

          </div>

          <!-- Evento 4 — Especial Solsticio -->
          <div class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-white transition-colors duration-200 px-0 md:-mx-6 md:px-6 rounded-none">

            <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
              <span class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">20</span>
              <div class="md:hidden w-px h-6 bg-[#27252B]/15" />
              <div>
                <span class="block text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium">Jun</span>
                <span class="block text-xs tracking-[0.2em] text-[#27252B]/40">2026</span>
              </div>
            </div>

            <div class="hidden md:block md:col-span-1">
              <span class="text-xs tracking-[0.25em] uppercase text-[#27252B]/40 font-medium">Sábado</span>
            </div>

            <div class="md:col-span-6">
              <div class="flex items-center gap-3 mb-1">
                <h3 class="font-serif italic text-[#27252B] text-xl md:text-2xl leading-snug group-hover:text-[#71B1A5] transition-colors duration-200">
                  Taller de Constelaciones para la Renovación
                </h3>
                <!-- Badge especial -->
                <span class="hidden md:inline-block text-[10px] tracking-[0.2em] uppercase bg-[#71B1A5]/15 text-[#71B1A5] px-2.5 py-1 font-medium rounded-none shrink-0">
                  Solsticio de Verano
                </span>
              </div>
              <p class="text-sm text-[#27252B]/55 font-light">
                Dirigido por Leonor Cabrera Torrado · Edición especial
              </p>
              <!-- Badge especial mobile -->
              <span class="md:hidden inline-block mt-2 text-[10px] tracking-[0.2em] uppercase bg-[#71B1A5]/15 text-[#71B1A5] px-2.5 py-1 font-medium rounded-none">
                Solsticio de Verano
              </span>
            </div>

            <div class="md:col-span-2 flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm text-[#27252B]/60 font-light">Consultar horario</span>
            </div>

            <div class="md:col-span-1 flex justify-end">
              <NuxtLink
                to="/talleres/constelaciones-familiares"
                class="text-xs tracking-[0.2em] uppercase text-[#71B1A5] border-b border-[#71B1A5]/30 pb-0.5 hover:border-[#71B1A5] transition-colors duration-200 whitespace-nowrap"
              >
                Inscribirme
              </NuxtLink>
            </div>

          </div>

        </div>

        <!-- CTA agenda -->
        <div class="mt-12 pt-10 border-t border-[#27252B]/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p class="text-base text-[#27252B]/55 font-light max-w-md">
            ¿Tienes dudas sobre qué taller se adapta mejor a tu momento?
            Escríbenos y te orientamos sin compromiso.
          </p>
          <NuxtLink
            to="/contacto"
            class="inline-flex items-center gap-3 group shrink-0"
          >
            <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
              Contactar con el centro
            </span>
            <span class="w-10 h-px bg-[#27252B]/30 group-hover:w-14 group-hover:bg-[#71B1A5] transition-all duration-300" />
          </NuxtLink>
        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 4 · BANNER CIERRE
    ════════════════════════════════════════════════ -->
    <section class="relative overflow-hidden py-24 md:py-32">

      <!-- Fondo imagen oscurecido -->
      <div class="absolute inset-0">
        <img
          src="/images/default.jpg"
          alt=""
          aria-hidden="true"
          class="w-full h-full object-cover rounded-none"
        />
        <div class="absolute inset-0 bg-[#FDFBF9]/92" />
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div class="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          <!-- Texto -->
          <div>
            <div class="w-10 h-px bg-[#71B1A5] mb-6" />
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2] mb-6">
              Un espacio para crecer,<br />
              <span class="text-[#71B1A5]">no solo para aprender.</span>
            </h2>
            <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/70">
              Nuestros talleres son espacios vivenciales donde la teoría y la
              experiencia se integran. Cada encuentro está diseñado para generar
              movimiento real, no solo conocimiento intelectual.
            </p>
          </div>

          <!-- Stats o datos clave -->
          <div class="grid grid-cols-2 gap-6">

            <div class="border border-[#27252B]/10 rounded-none p-7 hover:border-[#71B1A5]/40 transition-colors duration-300">
              <span class="font-serif italic text-[#71B1A5] text-4xl md:text-5xl leading-none block mb-3">+10</span>
              <p class="text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium mb-1">Años</p>
              <p class="text-sm text-[#27252B]/60 leading-relaxed font-light">de talleres vivenciales en Granada</p>
            </div>

            <div class="border border-[#27252B]/10 rounded-none p-7 hover:border-[#71B1A5]/40 transition-colors duration-300">
              <span class="font-serif italic text-[#71B1A5] text-4xl md:text-5xl leading-none block mb-3">12</span>
              <p class="text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium mb-1">Plazas máx.</p>
              <p class="text-sm text-[#27252B]/60 leading-relaxed font-light">para garantizar la profundidad del grupo</p>
            </div>

            <div class="border border-[#27252B]/10 rounded-none p-7 hover:border-[#71B1A5]/40 transition-colors duration-300 col-span-2">
              <span class="font-serif italic text-[#71B1A5] text-4xl md:text-5xl leading-none block mb-3">2</span>
              <p class="text-xs tracking-[0.25em] uppercase text-[#27252B]/50 font-medium mb-1">Facilitadoras especializadas</p>
              <p class="text-sm text-[#27252B]/60 leading-relaxed font-light">
                Ana Jiménez (AETG) y Leonor Cabrera Torrado · Formación acreditada y supervisada
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>

  </main>
</template>