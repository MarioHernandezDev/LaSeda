<template>
  <main class="bg-[#FDFBF9] text-[#27252B] font-sans overflow-x-hidden">

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · MINI-HERO (estilo terapias: video/imagen + gradientes laterales)
    ════════════════════════════════════════════════ -->
    <section class="relative w-full" style="height: clamp(45vh, 52vh, 55vh);">

      <!-- Imagen de fondo -->
      <video
        class="absolute inset-0 w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
        poster="/images/caploader.png"
      >
        <source src="/video/minhero.mp4" type="video/mp4" />
        <img src="/images/caploader.png" alt="Centro de Psicología La Seda" class="w-full h-full object-cover" />
      </video>

      <!-- Capa de gradiente: izquierda (igual que terapias) -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#FDFBF9]/90 via-[#FDFBF9]/60 to-transparent pointer-events-none" />
      <!-- Capa de gradiente: abajo -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFBF9]/95 pointer-events-none" />

      <!-- Contenido del hero -->
      <div class="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <p class="text-[#71B1A5] text-xs md:text-sm font-medium tracking-[0.35em] uppercase mb-4 md:mb-6">
          Talleres y Espacios de Formación
        </p>

        <h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-5 md:mb-7 max-w-2xl">
          Encuentros para Crecer<br />
          <span class="text-[#27252B]/75">y Transformarse</span>
        </h1>

        <!-- Cita Naranjo reubicada como párrafo introductorio -->
        <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/80 max-w-xl">
          Espacios vivenciales donde la teoría y la experiencia se integran,
          diseñados para generar movimiento real en quien los habita.
        </p>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 2 · INTRODUCCIÓN AL ENFOQUE (igual estructura que terapias §2)
    ════════════════════════════════════════════════ -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-start">

        <!-- Columna izquierda sticky -->
        <div class="md:col-span-4 md:sticky md:top-28">
          <div class="w-12 h-px bg-[#71B1A5] mb-6" />
          <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2]">
            Talleres que no solo enseñan: transforman.
          </h2>
          <div class="mt-8 w-1 h-24 bg-[#71B1A5]/30" />
        </div>

        <!-- Columna derecha -->
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

          <!-- Cita Naranjo integrada como bloque editorial -->
          <blockquote class="border-l-2 border-[#71B1A5]/50 pl-6 py-1">
            <p class="font-serif italic text-[#27252B]/70 text-lg md:text-xl leading-[1.75]">
              "Lo que necesita nuestro tiempo son seres más bondadosos,
              no seres más inteligentes."
            </p>
            <footer class="mt-3 flex items-center gap-3">
              <div class="w-6 h-px bg-[#71B1A5]/50" />
              <cite class="not-italic text-xs tracking-[0.25em] uppercase text-[#71B1A5]">
                Claudio Naranjo · Psiquiatra y humanista
              </cite>
            </footer>
          </blockquote>

          <div class="inline-flex items-center gap-3 pt-2">
            <div class="w-2 h-2 bg-[#71B1A5]" />
            <span class="text-sm tracking-[0.2em] uppercase text-[#71B1A5]">Centro acreditado · Granada</span>
          </div>
        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 3 · CATÁLOGO DE TALLERES (cuadrícula como terapias §3)
    ════════════════════════════════════════════════ -->
    <section class="bg-[#27252B]/[0.03] py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <!-- Encabezado de sección -->
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-16">
          <div>
            <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-3">
              Nuestros Programas
            </p>
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2]">
              Talleres y espacios de formación
            </h2>
          </div>
          <div class="w-24 h-px bg-[#27252B]/20 md:mb-2" />
        </div>

        <!-- Cuadrícula de tarjetas (mismo patrón que terapias) -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <!-- ── Tarjeta 1: Supervisión de Casos ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-colors duration-300">
            <div class="overflow-hidden aspect-[4/3]">
              <img
                src="/images/casos.png"
                alt="Supervisión de Casos Clínicos"
                class="w-full h-full object-cover rounded-none grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-7 flex flex-col flex-1 gap-4">
              <div class="w-6 h-px bg-[#71B1A5]" />
              <h3 class="font-serif italic text-[#27252B] text-2xl leading-snug">
                Supervisión de&nbsp;Casos
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                Un proceso esencial para terapeutas: supera bloqueos en consulta,
                amplía la mirada sobre el paciente y certifica horas de
                formación Gestalt con la AETG.
              </p>
              <!-- Etiquetas de especialidad -->
              <div class="flex flex-wrap gap-2">
                <span class="text-[10px] tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-2.5 py-1 font-medium">Gestalt</span>
                <span class="text-[10px] tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-2.5 py-1 font-medium">AETG</span>
                <span class="text-[10px] tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-2.5 py-1 font-medium">Presencial</span>
              </div>
              <NuxtLink
                to="/talleres/supervision-casos"
                class="self-start text-sm tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200"
              >
                Saber más
              </NuxtLink>
            </div>
          </article>

          <!-- ── Tarjeta 2: Constelaciones Familiares ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-colors duration-300">
            <div class="overflow-hidden aspect-[4/3]">
              <img
                src="/images/constelaciones.png"
                alt="Talleres de Constelaciones Familiares"
                class="w-full h-full object-cover rounded-none grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-7 flex flex-col flex-1 gap-4">
              <div class="w-6 h-px bg-[#71B1A5]" />
              <h3 class="font-serif italic text-[#27252B] text-2xl leading-snug">
                Constelaciones&nbsp;Familiares
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                Espacios vivenciales para revelar dinámicas invisibles, liberar
                cargas transgeneracionales, elaborar duelos latentes y recuperar
                la fuerza interior.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="text-[10px] tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-2.5 py-1 font-medium">Transgeneracional</span>
                <span class="text-[10px] tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-2.5 py-1 font-medium">Grupo presencial</span>
              </div>
              <NuxtLink
                to="/talleres/constelaciones-familiares"
                class="self-start text-sm tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200"
              >
                Saber más y Ver Fechas
              </NuxtLink>
            </div>
          </article>

          <!-- ── Tarjeta decorativa de cierre (CTA) ── igual que en terapias -->
          <article class="bg-[#71B1A5] rounded-none flex flex-col justify-between p-7 min-h-[360px]">
            <div class="w-6 h-px bg-[#FDFBF9]/60" />
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
              >
                Escríbenos
              </NuxtLink>
            </div>
            <div class="text-[#FDFBF9]/20 font-serif italic text-7xl leading-none select-none text-right">
              &amp;
            </div>
          </article>

        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 4 · AGENDA 2026 (fondo neutro, misma lógica que "Cómo trabajamos")
    ════════════════════════════════════════════════ -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">

      <!-- Encabezado con misma estructura de dos columnas -->
      <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-14 md:mb-16">
        <div class="md:col-span-5">
          <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-4">
            Calendario
          </p>
          <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2]">
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

      <!-- Lista de eventos -->
      <div class="divide-y divide-[#27252B]/8">

        <!-- Evento 1 -->
        <div class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-[#27252B]/[0.02] transition-colors duration-200 rounded-none">
          <div class="md:col-span-2 flex md:flex-col items-center md:items-start gap-3 md:gap-1">
            <span class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">28</span>
            <div class="md:hidden w-px h-6 bg-[#27252B]/15" />
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
            <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm text-[#27252B]/60 font-light">10:00h – 14:00h</span>
          </div>
          <div class="md:col-span-1 flex justify-end">
            <NuxtLink to="/talleres/constelaciones-familiares" class="text-xs tracking-[0.2em] uppercase text-[#71B1A5] border-b border-[#71B1A5]/30 pb-0.5 hover:border-[#71B1A5] transition-colors duration-200 whitespace-nowrap">
              Inscribirme
            </NuxtLink>
          </div>
        </div>

        <!-- Evento 2 -->
        <div class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-[#27252B]/[0.02] transition-colors duration-200 rounded-none">
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
            <p class="text-sm text-[#27252B]/55 font-light">Dirigido por Leonor Cabrera Torrado · Grupo reducido</p>
          </div>
          <div class="md:col-span-2 flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm text-[#27252B]/60 font-light">10:00h – 14:00h</span>
          </div>
          <div class="md:col-span-1 flex justify-end">
            <NuxtLink to="/talleres/constelaciones-familiares" class="text-xs tracking-[0.2em] uppercase text-[#71B1A5] border-b border-[#71B1A5]/30 pb-0.5 hover:border-[#71B1A5] transition-colors duration-200 whitespace-nowrap">
              Inscribirme
            </NuxtLink>
          </div>
        </div>

        <!-- Evento 3 -->
        <div class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-[#27252B]/[0.02] transition-colors duration-200 rounded-none">
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
            <p class="text-sm text-[#27252B]/55 font-light">Dirigido por Leonor Cabrera Torrado · Grupo reducido</p>
          </div>
          <div class="md:col-span-2 flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm text-[#27252B]/60 font-light">10:00h – 14:00h</span>
          </div>
          <div class="md:col-span-1 flex justify-end">
            <NuxtLink to="/talleres/constelaciones-familiares" class="text-xs tracking-[0.2em] uppercase text-[#71B1A5] border-b border-[#71B1A5]/30 pb-0.5 hover:border-[#71B1A5] transition-colors duration-200 whitespace-nowrap">
              Inscribirme
            </NuxtLink>
          </div>
        </div>

        <!-- Evento 4 · Especial Solsticio -->
        <div class="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 hover:bg-[#27252B]/[0.02] transition-colors duration-200 rounded-none">
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
            <div class="flex items-start gap-3 mb-1 flex-wrap">
              <h3 class="font-serif italic text-[#27252B] text-xl md:text-2xl leading-snug group-hover:text-[#71B1A5] transition-colors duration-200">
                Taller de Constelaciones para la Renovación
              </h3>
              <span class="text-[10px] tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-2.5 py-1 font-medium shrink-0 self-center">
                Solsticio de Verano
              </span>
            </div>
            <p class="text-sm text-[#27252B]/55 font-light">Dirigido por Leonor Cabrera Torrado · Edición especial</p>
          </div>
          <div class="md:col-span-2 flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm text-[#27252B]/60 font-light">Consultar horario</span>
          </div>
          <div class="md:col-span-1 flex justify-end">
            <NuxtLink to="/talleres/constelaciones-familiares" class="text-xs tracking-[0.2em] uppercase text-[#71B1A5] border-b border-[#71B1A5]/30 pb-0.5 hover:border-[#71B1A5] transition-colors duration-200 whitespace-nowrap">
              Inscribirme
            </NuxtLink>
          </div>
        </div>

      </div>

      <!-- CTA agenda (igual que CTA final de "Cómo trabajamos") -->
      <div class="mt-12 pt-8 border-t border-[#27252B]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p class="text-base text-[#27252B]/55 font-light max-w-md">
          ¿Tienes dudas sobre qué taller se adapta mejor a tu momento?
          Escríbenos y te orientamos sin compromiso.
        </p>
        <NuxtLink to="/contacto" class="inline-flex items-center gap-4 group shrink-0">
          <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
            Contactar con el centro
          </span>
          <span class="w-10 h-px bg-[#27252B]/40 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300" />
        </NuxtLink>
      </div>

    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 5 · DATOS CLAVE (mismo patrón que §4 de terapias: imagen + contenido)
    ════════════════════════════════════════════════ -->
    <section class="bg-[#27252B]/[0.03] py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div class="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          <!-- Columna imagen con marco desfasado (igual que terapias) -->
          <div class="relative order-2 md:order-1">
            <div class="absolute -top-4 -left-4 w-full h-full border border-[#71B1A5]/40 rounded-none pointer-events-none z-0" />
            <div class="relative z-10 overflow-hidden rounded-none aspect-[3/4]">
              <img
                src="/images/mariposa.png"
                alt="Taller vivencial en La Seda"
                class="w-full h-full object-cover rounded-none"
              />
              <div class="absolute inset-0 bg-[#27252B]/5 pointer-events-none" />
            </div>
            <div class="absolute bottom-6 -right-5 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3 z-20 hidden md:block">
              <p class="text-xs tracking-[0.2em] uppercase text-[#71B1A5]">Talleres y Formación</p>
              <p class="font-serif italic text-[#27252B] text-sm mt-0.5">La Seda · Granada</p>
            </div>
          </div>

          <!-- Columna de datos -->
          <div class="order-1 md:order-2">
            <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-4">
              Por qué elegirnos
            </p>
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2] mb-12">
              Un espacio para crecer,<br />
              <span class="text-[#27252B]/60">no solo para aprender.</span>
            </h2>

            <!-- Stats como pasos numerados (mismo estilo que 01/02/03) -->
            <div class="space-y-10">

              <div class="flex gap-6 items-start">
                <div class="shrink-0">
                  <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">+10</span>
                </div>
                <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                  <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Años de experiencia</h3>
                  <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                    De talleres vivenciales en Granada, con cientos de personas
                    acompañadas en sus procesos de cambio.
                  </p>
                </div>
              </div>

              <div class="w-full h-px bg-[#27252B]/8" />

              <div class="flex gap-6 items-start">
                <div class="shrink-0">
                  <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">12</span>
                </div>
                <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                  <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Plazas máximas por grupo</h3>
                  <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                    Para garantizar la profundidad y el cuidado que merece
                    cada proceso grupal.
                  </p>
                </div>
              </div>

              <div class="w-full h-px bg-[#27252B]/8" />

              <div class="flex gap-6 items-start">
                <div class="shrink-0">
                  <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">2</span>
                </div>
                <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                  <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Facilitadoras especializadas</h3>
                  <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                    Ana Jiménez (miembro didacta AETG) y Leonor Cabrera Torrado,
                    con formación acreditada y supervisada.
                  </p>
                </div>
              </div>

            </div>

            <!-- CTA final igual que terapias -->
            <div class="mt-12 pt-8 border-t border-[#27252B]/10">
              <NuxtLink to="/contacto" class="inline-flex items-center gap-4 group">
                <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
                  Reservar mi plaza
                </span>
                <span class="w-10 h-px bg-[#27252B]/40 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300" />
              </NuxtLink>
            </div>

          </div>

        </div>
      </div>
    </section>

  </main>
</template>