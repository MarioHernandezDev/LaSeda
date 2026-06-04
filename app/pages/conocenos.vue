<template>
  <main class="bg-[#FDFBF9] text-[#27252B] font-sans overflow-x-hidden">

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · MINI-HERO (mismo sistema: video + gradientes laterales)
    ════════════════════════════════════════════════ -->
    <section class="relative w-full" style="height: clamp(45vh, 52vh, 55vh);">

      <video
        class="absolute inset-0 w-full h-full object-cover"
        autoplay muted loop playsinline
        poster="/images/caploader.png"
      >
        <source src="/video/minhero.mp4" type="video/mp4" />
        <img src="/images/caploader.png" alt="Centro de Psicología La Seda Granada" class="w-full h-full object-cover" />
      </video>

      <div class="absolute inset-0 bg-gradient-to-r from-[#FDFBF9]/90 via-[#FDFBF9]/60 to-transparent pointer-events-none" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFBF9]/95 pointer-events-none" />

      <div class="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <p class="text-[#71B1A5] text-xs md:text-sm font-medium tracking-[0.35em] uppercase mb-4 md:mb-6">
          Quiénes somos
        </p>

        <h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-5 md:mb-7 max-w-2xl">
          El equipo detrás de<br />
          <span class="text-[#27252B]/75">La Seda</span>
        </h1>

        <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/80 max-w-xl">
          Un grupo de profesionales comprometidos con la salud psicológica,
          la educación emocional y el crecimiento personal en Granada.
        </p>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 2 · INTRODUCCIÓN (mismo patrón dos columnas sticky)
    ════════════════════════════════════════════════ -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-start">

        <div class="md:col-span-4 md:sticky md:top-28">
          <div class="w-12 h-px bg-[#71B1A5] mb-6" />
          <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2]">
            Rigor científico con profundidad humana.
          </h2>
          <div class="mt-8 w-1 h-24 bg-[#71B1A5]/30" />
        </div>

        <div class="md:col-span-8 space-y-7">
          <p class="text-lg md:text-xl leading-[1.9] text-[#27252B]/80">
            La Seda nació de la convicción de que la psicología más transformadora es aquella
            que integra rigor científico con profundidad humana. Nuestro equipo reúne especialistas
            formados en las corrientes más sólidas —cognitivo-conductual, sistémica,
            humanista-existencial y mindfulness-based— con una misión compartida:
            acompañar procesos de cambio real.
          </p>
          <p class="text-lg md:text-xl leading-[1.9] text-[#27252B]/80">
            Más allá de la clínica, entendemos el bienestar como un territorio que abarca
            la educación, las relaciones y el sentido de vida. Por eso nuestro trabajo se
            despliega en tres áreas complementarias: terapia, formación y crecimiento personal,
            desde un espacio en Granada diseñado para que cada persona se sienta
            recibida desde el primer momento.
          </p>

          <div class="inline-flex items-center gap-3 pt-2">
            <div class="w-2 h-2 bg-[#71B1A5]" />
            <span class="text-sm tracking-[0.2em] uppercase text-[#71B1A5]">Centro acreditado · Granada</span>
          </div>
        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 3 · NUESTRO ESPACIO (imagen + texto, mismo patrón §5 talleres)
    ════════════════════════════════════════════════ -->
    <section class="bg-[#27252B]/[0.03] py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div class="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          <!-- Imagen con marco desfasado -->
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-full h-full border border-[#71B1A5]/40 rounded-none pointer-events-none z-0" />
            <div class="relative z-10 overflow-hidden rounded-none aspect-[3/4]">
              <img
                src="/images/mariposa.png"
                alt="Sala de consulta terapéutica del Centro La Seda en Granada"
                class="w-full h-full object-cover rounded-none"
              />
              <div class="absolute inset-0 bg-[#27252B]/5 pointer-events-none" />
            </div>
            <div class="absolute bottom-6 -right-5 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3 z-20 hidden md:block">
              <p class="text-xs tracking-[0.2em] uppercase text-[#71B1A5]">Nuestro espacio</p>
              <p class="font-serif italic text-[#27252B] text-sm mt-0.5">La Seda · Granada</p>
            </div>
          </div>

          <!-- Texto y detalles -->
          <div>
            <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-4">
              El espacio
            </p>
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2] mb-12">
              Un lugar pensado<br />
              <span class="text-[#27252B]/60">para el bienestar.</span>
            </h2>

            <div class="space-y-10">

              <div class="flex gap-6 items-start">
                <div class="shrink-0">
                  <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">5</span>
                </div>
                <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                  <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Salas independientes</h3>
                  <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                    Consultas individuales, grupales y sala de talleres. Acústica que protege
                    la intimidad y materiales orgánicos que invitan a la calma.
                  </p>
                </div>
              </div>

              <div class="w-full h-px bg-[#27252B]/8" />

              <div class="flex gap-6 items-start">
                <div class="shrink-0">
                  <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">+12</span>
                </div>
                <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                  <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Años en Granada</h3>
                  <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                    En el corazón de Granada, accesible en transporte público y con
                    aparcamiento próximo. Sesiones online disponibles para quienes no
                    puedan desplazarse.
                  </p>
                </div>
              </div>

            </div>

            <div class="mt-12 pt-8 border-t border-[#27252B]/10">
              <NuxtLink to="/contacto" class="inline-flex items-center gap-4 group">
                <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
                  Reservar primera cita
                </span>
                <span class="w-10 h-px bg-[#27252B]/40 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300" />
              </NuxtLink>
            </div>

          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 4 · EL EQUIPO (cuadrícula de tarjetas)
    ════════════════════════════════════════════════ -->
    <section class="py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <!-- Encabezado -->
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-16">
          <div>
            <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-3">
              Profesionales
            </p>
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2]">
              Personas que cuidan<br />
              <span class="text-[#27252B]/60">a personas.</span>
            </h2>
          </div>
          <p class="text-[#27252B]/50 max-w-xs text-sm leading-relaxed font-light md:text-right md:mb-2">
            Todo nuestro equipo está colegiado por el COP Andalucía y en formación
            continua.
          </p>
        </div>

        <!-- Grid de tarjetas -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">

          <!-- ── Profesional 1 ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#71B1A5]/8">
            <div class="relative overflow-hidden aspect-[3/4]">
              <img
                src="/images/ana.png"
                alt="Elena Ruiz Molina — Directora y Psicóloga Sanitaria en La Seda Granada"
                class="w-full h-full object-cover object-top grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div class="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#FDFBF9] via-[#FDFBF9]/40 to-transparent" />
              <div class="absolute top-4 left-4 bg-[#71B1A5] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
                Dirección
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1 gap-3">
              <div class="w-6 h-px bg-[#71B1A5]" />
              <h3 class="font-serif italic text-[#27252B] text-xl leading-tight">
                Ana Jimenez
              </h3>
              <p class="text-[#71B1A5] text-[10px] tracking-[0.22em] uppercase font-medium">
                Psicóloga Sanitaria · Directora
              </p>
              <p class="text-[#27252B]/55 text-xs leading-relaxed font-light flex-1">
                Especialista en trauma complejo y terapia EMDR. Más de 15 años acompañando
                procesos terapéuticos en adultos. Formadora acreditada en mindfulness clínico.
              </p>
              <div class="flex items-center gap-2 py-3 border-y border-[#27252B]/8">
                <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
                <span class="text-[10px] text-[#27252B]/40 font-light tracking-wider">
                  COP Andalucía · <strong class="text-[#27252B]/60 font-medium">Nº AN-04821</strong>
                </span>
              </div>
              <NuxtLink to="/terapias" class="self-start text-xs tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200">
                Ver especialidad
              </NuxtLink>
            </div>
          </article>

          <!-- ── Profesional 2 ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#71B1A5]/8 sm:mt-8 lg:mt-8">
            <div class="relative overflow-hidden aspect-[3/4]">
              <img
                src="/images/leonor.png"
                alt="Pablo Serrano Vega — Psicólogo Especialista Infanto-Juvenil en Granada"
                class="w-full h-full object-cover object-top grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div class="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#FDFBF9] via-[#FDFBF9]/40 to-transparent" />
              <div class="absolute top-4 left-4 bg-[#27252B] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
                Infanto-Juvenil
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1 gap-3">
              <div class="w-6 h-px bg-[#71B1A5]" />
              <h3 class="font-serif italic text-[#27252B] text-xl leading-tight">
                Leonor Cabrera
              </h3>
              <p class="text-[#71B1A5] text-[10px] tracking-[0.22em] uppercase font-medium">
                Especialista Infanto-Juvenil
              </p>
              <p class="text-[#27252B]/55 text-xs leading-relaxed font-light flex-1">
                Psicólogo clínico especializado en niños, adolescentes y familias. Experto en
                TDAH, ansiedad escolar y dificultades del neurodesarrollo. Colaborador habitual
                con centros educativos de Granada.
              </p>
              <div class="flex items-center gap-2 py-3 border-y border-[#27252B]/8">
                <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
                <span class="text-[10px] text-[#27252B]/40 font-light tracking-wider">
                  COP Andalucía · <strong class="text-[#27252B]/60 font-medium">Nº AN-07154</strong>
                </span>
              </div>
              <NuxtLink to="/terapias" class="self-start text-xs tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200">
                Ver especialidad
              </NuxtLink>
            </div>
          </article>

          <!-- ── Profesional 3 ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#71B1A5]/8">
            <div class="relative overflow-hidden aspect-[3/4]">
              <img
                src="/images/cristina.png"
                alt="Lucía Montero Alarcón — Psicóloga Especialista en Terapia de Pareja Granada"
                class="w-full h-full object-cover object-top grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div class="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#FDFBF9] via-[#FDFBF9]/40 to-transparent" />
              <div class="absolute top-4 left-4 bg-[#71B1A5] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
                Parejas
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1 gap-3">
              <div class="w-6 h-px bg-[#71B1A5]" />
              <h3 class="font-serif italic text-[#27252B] text-xl leading-tight">
                Cristina Lence
              </h3>
              <p class="text-[#71B1A5] text-[10px] tracking-[0.22em] uppercase font-medium">
                Terapia de Pareja y Familia
              </p>
              <p class="text-[#27252B]/55 text-xs leading-relaxed font-light flex-1">
                Especialista en terapia sistémica y de pareja. Facilitadora certificada de
                Constelaciones Familiares. Combina el enfoque narrativo con técnicas de
                regulación emocional para familias en conflicto.
              </p>
              <div class="flex items-center gap-2 py-3 border-y border-[#27252B]/8">
                <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
                <span class="text-[10px] text-[#27252B]/40 font-light tracking-wider">
                  COP Andalucía · <strong class="text-[#27252B]/60 font-medium">Nº AN-09307</strong>
                </span>
              </div>
              <NuxtLink to="/talleres" class="self-start text-xs tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200">
                Ver especialidad
              </NuxtLink>
            </div>
          </article>

          <!-- ── Profesional 4 ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#71B1A5]/8 sm:mt-8 lg:mt-8">
            <div class="relative overflow-hidden aspect-[3/4]">
              <img
                src="/images/reyes.png"
                alt="Andrés Quesada Torres — Psicólogo Formador y Supervisor Clínico en Granada"
                class="w-full h-full object-cover object-top grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div class="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#FDFBF9] via-[#FDFBF9]/40 to-transparent" />
              <div class="absolute top-4 left-4 bg-[#27252B] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
                Formación
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1 gap-3">
              <div class="w-6 h-px bg-[#71B1A5]" />
              <h3 class="font-serif italic text-[#27252B] text-xl leading-tight">
                Reyes Sánchez Tallón
              </h3>
              <p class="text-[#71B1A5] text-[10px] tracking-[0.22em] uppercase font-medium">
                Formador y Supervisor Clínico
              </p>
              <p class="text-[#27252B]/55 text-xs leading-relaxed font-light flex-1">
                Psicólogo clínico y docente universitario. Responsable del área de formaciones
                para profesionales. Especializado en psicología humanista y supervisión grupal
                de casos.
              </p>
              <div class="flex items-center gap-2 py-3 border-y border-[#27252B]/8">
                <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
                <span class="text-[10px] text-[#27252B]/40 font-light tracking-wider">
                  COP Andalucía · <strong class="text-[#27252B]/60 font-medium">Nº AN-05639</strong>
                </span>
              </div>
              <NuxtLink to="/formaciones" class="self-start text-xs tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200">
                Ver especialidad
              </NuxtLink>
            </div>
          </article>

        </div>

        <p class="mt-10 text-center text-xs text-[#27252B]/35 font-light tracking-wider">
          Todos los profesionales están colegiados por el
          <strong class="text-[#27252B]/50 font-medium">Colegio Oficial de Psicólogos de Andalucía Oriental</strong>
          y sujetos al código deontológico de la profesión.
        </p>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 5 · VALORES (bloque oscuro, mismo patrón 01/02/03)
    ════════════════════════════════════════════════ -->
    <section class="bg-[#27252B] py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-16">
          <div>
            <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-3">
              Nuestra forma de trabajar
            </p>
            <h2 class="font-serif italic text-white text-3xl md:text-4xl leading-[1.2]">
              Los valores que nos guían
            </h2>
          </div>
          <div class="w-24 h-px bg-white/10 md:mb-2" />
        </div>

        <div class="grid md:grid-cols-3 gap-10 md:gap-16">

          <div class="border-t border-white/10 pt-8">
            <span class="font-serif italic text-[#71B1A5]/30 text-5xl leading-none select-none block mb-6">01</span>
            <h3 class="font-serif italic text-white text-2xl mb-4">Formación continua</h3>
            <p class="text-white/45 text-sm leading-relaxed font-light">
              Cada miembro del equipo dedica horas anuales a supervisión clínica, congresos
              y programas de actualización. La excelencia no se declara: se practica.
            </p>
          </div>

          <div class="border-t border-white/10 pt-8">
            <span class="font-serif italic text-[#71B1A5]/30 text-5xl leading-none select-none block mb-6">02</span>
            <h3 class="font-serif italic text-white text-2xl mb-4">Supervisión de casos</h3>
            <p class="text-white/45 text-sm leading-relaxed font-light">
              Trabajamos con supervisión grupal regular. Que el terapeuta sea acompañado
              en su práctica es garantía de calidad para quien acude a consulta.
            </p>
          </div>

          <div class="border-t border-white/10 pt-8">
            <span class="font-serif italic text-[#71B1A5]/30 text-5xl leading-none select-none block mb-6">03</span>
            <h3 class="font-serif italic text-white text-2xl mb-4">Derivación responsable</h3>
            <p class="text-white/45 text-sm leading-relaxed font-light">
              Si detectamos que otra especialidad puede ayudarte mejor, lo decimos.
              Contamos con una red de profesionales de confianza en Granada para
              acompañarte en ese camino.
            </p>
          </div>

        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 6 · CTA FINAL
    ════════════════════════════════════════════════ -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">
      <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-10">
        <div class="md:col-span-5">
          <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-4">
            Contacto
          </p>
          <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2]">
            ¿Con quién te gustaría<br />
            <span class="text-[#27252B]/55 not-italic font-light text-2xl md:text-3xl">comenzar?</span>
          </h2>
        </div>
        <div class="md:col-span-7">
          <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/65">
            Si no sabes a qué profesional acudir, escríbenos. En La Seda te orientamos
            sin compromiso hacia la persona y el enfoque que mejor encajan con lo que
            estás viviendo.
          </p>
        </div>
      </div>

      <div class="pt-8 border-t border-[#27252B]/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <NuxtLink
          to="/contacto"
          class="inline-flex items-center gap-4 group"
        >
          <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
            Reservar primera cita
          </span>
          <span class="w-10 h-px bg-[#27252B]/40 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300" />
        </NuxtLink>

        <NuxtLink
          to="/terapias"
          class="inline-flex items-center gap-4 group"
        >
          <span class="text-sm tracking-[0.22em] uppercase text-[#27252B]/50 group-hover:text-[#71B1A5] transition-colors duration-200">
            Ver nuestras terapias
          </span>
          <span class="w-10 h-px bg-[#27252B]/20 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300" />
        </NuxtLink>
      </div>

    </section>

  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Equipo y Centro Psicológico en Granada | La Seda',
  description:
    'Conoce al equipo de psicólogos colegiados de La Seda en Granada. Especialistas en terapia individual, infanto-juvenil, de pareja, constelaciones familiares y formación para profesionales.',
  ogTitle: 'El equipo de La Seda · Psicólogos en Granada',
  ogDescription:
    'Profesionales colegiados, espacio terapéutico cuidado y un enfoque multidisciplinar para tu bienestar. Centro de Psicología La Seda, Granada.',
  ogImage: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1200&q=85',
  ogType: 'website',
  robots: 'index, follow',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Equipo de psicólogos — La Seda Granada',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Person',
              name: 'Elena Ruiz Molina',
              jobTitle: 'Psicóloga Sanitaria · Directora',
              worksFor: { '@type': 'Organization', name: 'La Seda · Psicología y Crecimiento en Granada' },
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Person',
              name: 'Pablo Serrano Vega',
              jobTitle: 'Especialista Infanto-Juvenil',
              worksFor: { '@type': 'Organization', name: 'La Seda · Psicología y Crecimiento en Granada' },
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'Person',
              name: 'Lucía Montero Alarcón',
              jobTitle: 'Terapia de Pareja y Familia',
              worksFor: { '@type': 'Organization', name: 'La Seda · Psicología y Crecimiento en Granada' },
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'Person',
              name: 'Andrés Quesada Torres',
              jobTitle: 'Formador y Supervisor Clínico',
              worksFor: { '@type': 'Organization', name: 'La Seda · Psicología y Crecimiento en Granada' },
            },
          },
        ],
      }),
    },
  ],
})
</script>