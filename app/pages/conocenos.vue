<template>
  <main class="bg-[#FDFBF9] text-[#27252B] font-sans overflow-x-hidden">

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · MINI-HERO (mismo sistema: video + gradientes laterales)
    ════════════════════════════════════════════════ -->
    <section class="relative w-full" style="height: clamp(45vh, 52vh, 55vh);">

      <video
        class="absolute inset-0 w-full h-full object-cover"
        autoplay muted loop playsinline
        poster="/images/centro-psicologia-la-seda-granada-hero.jpg"
      >
        <source src="/video/minhero.mp4" type="video/mp4" />
        <!-- Imagen de fallback del video — above the fold → preload + fetchpriority high -->
        <NuxtImg
          src="/images/centro-psicologia-la-seda-granada-hero.jpg"
          alt="Centro de Psicología La Seda Granada — sala de terapia y espacio de bienestar"
          format="webp"
          preload
          fetchpriority="high"
          class="w-full h-full object-cover"
        />
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

          <!-- Imagen con marco desfasado — below the fold → loading lazy -->
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-full h-full border border-[#71B1A5]/40 rounded-none pointer-events-none z-0" />
            <div class="relative z-10 overflow-hidden rounded-none aspect-[3/4]">
              <NuxtImg
                src="/images/espacio-terapeutico-centro-psicologia-la-seda-granada.jpg"
                alt="Sala de consulta terapéutica del Centro de Psicología La Seda en Granada — espacio cálido con materiales orgánicos"
                format="webp"
                loading="lazy"
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
         SECCIÓN 4 · EL EQUIPO
    ════════════════════════════════════════════════ -->
    <section class="py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <!-- Encabezado -->
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-18">
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
            Un equipo multidisciplinar especializado en psicología, coaching
            y educación emocional.
          </p>
        </div>

        <!-- Grid 2+2 en desktop, 1 columna en móvil -->
        <div class="grid sm:grid-cols-2 gap-6 lg:gap-8">

          <!-- ── Ana Jiménez ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col sm:flex-row border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#71B1A5]/8">

            <!-- Imagen — below the fold → loading lazy -->
            <div class="relative overflow-hidden sm:w-52 lg:w-60 shrink-0 aspect-[3/4] sm:aspect-auto">
              <NuxtImg
                src="/images/ana-jimenez-psicologa-gestalt-terapia-infanto-juvenil-granada.jpg"
                alt="Ana Jiménez — Psicóloga colegiada, terapeuta Gestalt y Co-directora del Centro La Seda Granada, especializada en infancia, adolescencia y familia"
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover object-top grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#FDFBF9]/20" />
              <div class="absolute top-4 left-4 bg-[#71B1A5] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
                Co-dirección
              </div>
            </div>

            <!-- Contenido -->
            <div class="p-7 flex flex-col flex-1 gap-4">
              <div>
                <div class="w-6 h-px bg-[#71B1A5] mb-4" />
                <h3 class="font-serif italic text-[#27252B] text-2xl leading-tight mb-1">
                  Ana Jiménez
                </h3>
                <p class="text-[#71B1A5] text-[10px] tracking-[0.22em] uppercase font-medium">
                  Psicóloga · Co-directora de La Seda
                </p>
              </div>

              <p class="text-[#27252B]/65 text-sm leading-[1.85] font-light flex-1">
                Psicóloga colegiada y terapeuta Gestalt, miembro didacta de la Asociación Española
                de Terapia Gestalt. Formada en Psicoterapia Clínica Integrativa con Juanjo Albert,
                sistémica y constelaciones familiares. Formada en el Programa SAT de Claudio Naranjo.
                Especializada en el trabajo con niños, adolescentes y familias.
              </p>

              <div class="space-y-2 pt-2 border-t border-[#27252B]/8">
                <div class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                  <span class="text-[10px] text-[#27252B]/40 font-light tracking-wider">
                    Colegiada <strong class="text-[#27252B]/60 font-medium">Nº AO06843</strong>
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <NuxtLink
                    to="https://anajimenezpsicologa.es/"
                    external
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200"
                  >
                    Ver especialidad
                  </NuxtLink>
                </div>
              </div>
            </div>
          </article>

          <!-- ── Leonor Cabrera ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col sm:flex-row border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#71B1A5]/8 sm:mt-10 lg:mt-12">

            <div class="relative overflow-hidden sm:w-52 lg:w-60 shrink-0 aspect-[3/4] sm:aspect-auto">
              <NuxtImg
                src="/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg"
                alt="Leonor Cabrera — Coach Profesional Certificada Asesco, especialista en método Wingwave y Co-directora del Centro La Seda Granada"
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover object-top grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#FDFBF9]/20" />
              <div class="absolute top-4 left-4 bg-[#27252B] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
                Co-dirección
              </div>
            </div>

            <div class="p-7 flex flex-col flex-1 gap-4">
              <div>
                <div class="w-6 h-px bg-[#71B1A5] mb-4" />
                <h3 class="font-serif italic text-[#27252B] text-2xl leading-tight mb-1">
                  Leonor Cabrera
                </h3>
                <p class="text-[#71B1A5] text-[10px] tracking-[0.22em] uppercase font-medium">
                  Coach · Co-directora de La Seda
                </p>
              </div>

              <p class="text-[#27252B]/65 text-sm leading-[1.85] font-light flex-1">
                Coach Profesional Certificada (Asesco Nº 10.457). Especializada en fuerza interior
                y bloqueos emocionales a través del método Wingwave®, del que es co-formadora
                acreditada por el Instituto Besser-Siegmund de Hamburgo. Colaboradora del Programa
                SAT de Claudio Naranjo. Formada en Gestalt, Bioenergética, PNL, coaching y
                constelaciones familiares. Licenciada en Periodismo.
              </p>

              <div class="space-y-2 pt-2 border-t border-[#27252B]/8">
                <div class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                  <span class="text-[10px] text-[#27252B]/40 font-light tracking-wider">
                    Asesco <strong class="text-[#27252B]/60 font-medium">Nº 10.457</strong>
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <NuxtLink
                    to="https://leonorcabrera.com/"
                    external
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200"
                  >
                    Ver especialidad
                  </NuxtLink>
                </div>
              </div>
            </div>
          </article>

          <!-- ── Cristina Lence ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col sm:flex-row border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#71B1A5]/8">

            <div class="relative overflow-hidden sm:w-52 lg:w-60 shrink-0 aspect-[3/4] sm:aspect-auto">
              <NuxtImg
                src="/images/cristina-lence-educadora-familiar-gestalt-sistemica-granada.jpg"
                alt="Cristina Lence — Educadora Social, especialista en Gestalt y Sistémica aplicadas a infancia, adolescencia y familias en Granada"
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover object-top grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#FDFBF9]/20" />
              <div class="absolute top-4 left-4 bg-[#71B1A5] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
                Educación Familiar
              </div>
            </div>

            <div class="p-7 flex flex-col flex-1 gap-4">
              <div>
                <div class="w-6 h-px bg-[#71B1A5] mb-4" />
                <h3 class="font-serif italic text-[#27252B] text-2xl leading-tight mb-1">
                  Cristina Lence
                </h3>
                <p class="text-[#71B1A5] text-[10px] tracking-[0.22em] uppercase font-medium">
                  Educadora Familiar
                </p>
              </div>

              <p class="text-[#27252B]/65 text-sm leading-[1.85] font-light flex-1">
                Educadora Social con formación en Gestalt y Sistémica. Formada en Técnicas
                Gestálticas aplicadas a la infancia y a la adolescencia con la ITG de Valencia
                y en el Programa SAT de Claudio Naranjo. Especializada en el trabajo con
                niños y niñas, adolescentes y familias.
              </p>

              <div class="space-y-2 pt-2 border-t border-[#27252B]/8">
                <div class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                  <span class="text-[10px] text-[#27252B]/40 font-light tracking-wider">
                    Educadora Social · Gestalt y Sistémica
                  </span>
                </div>
                <NuxtLink
                  to="https://aetg.es/users/cristina-lence-dopico"
                  external
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200"
                >
                  Ver especialidad
                </NuxtLink>
              </div>
            </div>
          </article>

          <!-- ── Reyes Sánchez Tallón ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col sm:flex-row border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#71B1A5]/8 sm:mt-10 lg:mt-12">

            <div class="relative overflow-hidden sm:w-52 lg:w-60 shrink-0 aspect-[3/4] sm:aspect-auto">
              <NuxtImg
                src="/images/reyes-sanchez-tallon-medica-pediatra-gestalt-terapia-granada.jpg"
                alt="Reyes Sánchez Tallón — Médica Pediatra colegiada, formada en terapia Gestalt, Terapia Corporal Integrativa y Sistémica en el Centro La Seda Granada"
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover object-top grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#FDFBF9]/20" />
              <div class="absolute top-4 left-4 bg-[#27252B] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
                Medicina
              </div>
            </div>

            <div class="p-7 flex flex-col flex-1 gap-4">
              <div>
                <div class="w-6 h-px bg-[#71B1A5] mb-4" />
                <h3 class="font-serif italic text-[#27252B] text-2xl leading-tight mb-1">
                  Reyes Sánchez Tallón
                </h3>
                <p class="text-[#71B1A5] text-[10px] tracking-[0.22em] uppercase font-medium">
                  Médica Pediatra
                </p>
              </div>

              <p class="text-[#27252B]/65 text-sm leading-[1.85] font-light flex-1">
                Médica pediatra colegiada. Formada en terapia Gestalt, Terapia Corporal Integrativa
                con el equipo Antonio Pacheco, y en psicología de los eneatipos y Bioenergética con
                Fernando de Juan. Actualmente en formación en el Programa SAT de Claudio Naranjo
                y en terapia sistémica en Psicogestalt de Madrid.
              </p>

              <div class="space-y-2 pt-2 border-t border-[#27252B]/8">
                <div class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                  <span class="text-[10px] text-[#27252B]/40 font-light tracking-wider">
                    Colegiada <strong class="text-[#27252B]/60 font-medium">Nº 18-10008273</strong>
                  </span>
                </div>
                <NuxtLink
                  to="https://aetg.es/users/reyes-sanchez-tallon"
                  external
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200"
                >
                  Ver especialidad
                </NuxtLink>
              </div>
            </div>
          </article>

        </div>

        <p class="mt-12 text-center text-xs text-[#27252B]/35 font-light tracking-wider">
          Todos los profesionales están colegiados o acreditados en sus respectivas especialidades
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
              name: 'Ana Jiménez',
              jobTitle: 'Psicóloga Sanitaria · Co-directora',
              worksFor: { '@type': 'Organization', name: 'La Seda · Psicología y Crecimiento en Granada' },
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Person',
              name: 'Leonor Cabrera',
              jobTitle: 'Coach Profesional Certificada · Co-directora',
              worksFor: { '@type': 'Organization', name: 'La Seda · Psicología y Crecimiento en Granada' },
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'Person',
              name: 'Cristina Lence',
              jobTitle: 'Educadora Familiar · Gestalt y Sistémica',
              worksFor: { '@type': 'Organization', name: 'La Seda · Psicología y Crecimiento en Granada' },
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'Person',
              name: 'Reyes Sánchez Tallón',
              jobTitle: 'Médica Pediatra',
              worksFor: { '@type': 'Organization', name: 'La Seda · Psicología y Crecimiento en Granada' },
            },
          },
        ],
      }),
    },
  ],
})
</script>