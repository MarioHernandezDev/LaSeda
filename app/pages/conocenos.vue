<template>

  <main>

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · MINI-HERO
    ════════════════════════════════════════════════ -->
    <PageHero
      label="Quiénes somos · Granada"
      title-main="El equipo detrás de"
      title-accent="La Seda"
      image="/images/centro-psicologia-la-seda-granada-hero.jpg"
      image-alt="Equipo del Centro de Psicología La Seda en Granada"
      secondary-link="/terapias"
      secondary-label="Ver nuestras terapias"
    >
      <template #description>
        Un grupo de profesionales comprometidos con la salud psicológica,
        la educación emocional y el crecimiento personal en Granada.
      </template>
    </PageHero>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 2 · INTRODUCCIÓN
    ════════════════════════════════════════════════ -->
    <section
      class="page-container py-20 md:py-28"
      aria-labelledby="intro-heading"
    >
      <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-start">

        <div class="md:col-span-4 md:sticky md:top-28">
          <div class="section-divider mb-6" aria-hidden="true" />
          <h2
            id="intro-heading"
            class="section-title"
          >
            Rigor científico con profundidad humana.
          </h2>
          <div class="mt-8 w-1 h-24 bg-[#71B1A5]/30" aria-hidden="true" />
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
            <div class="w-2 h-2 bg-[#71B1A5]" aria-hidden="true" />
            <span class="section-label">Centro acreditado · Granada</span>
          </div>
        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 3 · NUESTRO ESPACIO
    ════════════════════════════════════════════════ -->
    <section
      class="bg-[#27252B]/[0.03] py-20 md:py-28"
      aria-labelledby="espacio-heading"
    >
      <div class="page-container">
        <div class="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          <!-- Imagen con marco desfasado -->
          <div class="relative">
            <div
              class="absolute -top-4 -left-4 w-full h-full border border-[#71B1A5]/40 pointer-events-none z-0"
              aria-hidden="true"
            />
            <div class="relative z-10 overflow-hidden aspect-[3/4]">
              <NuxtImg
                src="/images/espacio-terapeutico-centro-psicologia-la-seda-granada.jpg"
                alt="Sala de consulta terapéutica del Centro de Psicología La Seda en Granada, con materiales orgánicos y ambiente de calma"
                class="w-full h-full object-cover"
                width="600"
                height="800"
                format="webp"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-[#27252B]/5 pointer-events-none"
                aria-hidden="true"
              />
            </div>
            <div
              class="absolute bottom-6 -right-5 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3 z-20 hidden md:block"
              aria-hidden="true"
            >
              <p class="section-label">Nuestro espacio</p>
              <p class="font-serif italic text-[#27252B] text-sm mt-0.5">La Seda · Granada</p>
            </div>
          </div>

          <!-- Texto y detalles -->
          <div>
            <p class="section-label mb-4">El espacio</p>
            <h2
              id="espacio-heading"
              class="font-serif italic text-3xl md:text-4xl leading-[1.2] mb-12"
            >
              Un lugar pensado<br />
              <span class="text-[#27252B]/60">para el bienestar.</span>
            </h2>

            <dl class="space-y-10" aria-label="Datos del espacio terapéutico">

              <div class="flex gap-6 items-start">
                <div class="shrink-0" aria-hidden="true">
                  <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">5</span>
                </div>
                <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                  <dt class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Salas independientes</dt>
                  <dd class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                    Consultas individuales, grupales y sala de talleres. Acústica que protege
                    la intimidad y materiales orgánicos que invitan a la calma.
                  </dd>
                </div>
              </div>

              <div class="w-full h-px bg-[#27252B]/8" aria-hidden="true" />

              <div class="flex gap-6 items-start">
                <div class="shrink-0" aria-hidden="true">
                  <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">+12</span>
                </div>
                <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                  <dt class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Años en Granada</dt>
                  <dd class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                    En el corazón de Granada, accesible en transporte público y con
                    aparcamiento próximo. Sesiones online disponibles para quienes no
                    puedan desplazarse.
                  </dd>
                </div>
              </div>

            </dl>

            <div class="mt-12 pt-8 border-t border-[#27252B]/10">
              <NuxtLink
                to="/contacto"
                class="inline-flex items-center gap-4 group"
                aria-label="Reservar primera cita en el Centro de Psicología La Seda Granada"
              >
                <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
                  Reservar primera cita
                </span>
                <span
                  class="w-10 h-px bg-[#27252B]/40 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300"
                  aria-hidden="true"
                />
              </NuxtLink>
            </div>

          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 4 · EL EQUIPO
    ════════════════════════════════════════════════ -->
    <section
      class="py-20 md:py-28"
      aria-labelledby="equipo-heading"
    >
      <div class="page-container">

        <!-- Encabezado -->
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-18">
          <div>
            <p class="section-label mb-3">Profesionales</p>
            <h2
              id="equipo-heading"
              class="font-serif italic text-3xl md:text-4xl leading-[1.2]"
            >
              Personas que cuidan<br />
              <span class="text-[#27252B]/60">a personas.</span>
            </h2>
          </div>
          <p class="text-[#27252B]/50 max-w-xs text-sm leading-relaxed font-light md:text-right md:mb-2">
            Un equipo multidisciplinar especializado en psicología, coaching
            y educación emocional.
          </p>
        </div>

        <!-- Grid de tarjetas — lista semántica de miembros del equipo -->
        <ul
          class="grid sm:grid-cols-2 gap-6 lg:gap-8 list-none"
          role="list"
          aria-label="Miembros del equipo de La Seda Granada"
        >

          <!-- ── Ana Jiménez ── -->
          <li>
            <article
              class="team-card group"
              aria-labelledby="nombre-ana"
            >
              <div class="relative overflow-hidden sm:w-52 lg:w-60 shrink-0 aspect-[3/4] sm:aspect-auto">
                <NuxtImg
                  src="/images/ana-jimenez-psicologa-gestalt-terapia-infanto-juvenil-granada.jpg"
                  alt="Ana Jiménez, psicóloga colegiada y co-directora del Centro La Seda Granada, especializada en terapia Gestalt e infancia"
                  class="w-full h-full object-cover object-top grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
                  width="240"
                  height="320"
                  format="webp"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-[#27252B]/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#FDFBF9]/20"
                  aria-hidden="true"
                />
                <div class="team-card-badge bg-[#71B1A5]" aria-label="Rol: Co-dirección">
                  Co-dirección
                </div>
              </div>

              <div class="p-7 flex flex-col flex-1 gap-4">
                <div>
                  <div class="section-divider mb-4" aria-hidden="true" />
                  <h3
                    id="nombre-ana"
                    class="font-serif italic text-2xl leading-tight mb-1"
                  >
                    Ana Jiménez
                  </h3>
                  <p class="team-card-role">Psicóloga · Co-directora de La Seda</p>
                </div>

                <p class="text-[#27252B]/65 text-sm leading-[1.85] font-light flex-1">
                  Psicóloga colegiada y terapeuta Gestalt, miembro didacta de la Asociación Española
                  de Terapia Gestalt. Formada en Psicoterapia Clínica Integrativa con Juanjo Albert,
                  sistémica y constelaciones familiares. Formada en el Programa SAT de Claudio Naranjo.
                  Especializada en el trabajo con niños, adolescentes y familias.
                </p>

                <div class="space-y-2 pt-2 border-t border-[#27252B]/8">
                  <div class="flex items-center gap-2">
                    <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                    <span class="text-[10px] text-[#27252B]/40 font-light tracking-wider">
                      Colegiada <strong class="text-[#27252B]/60 font-medium">Nº AO06843</strong>
                    </span>
                  </div>
                  <a
                    href="https://anajimenezpsicologa.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="team-card-link"
                    aria-label="Ver especialidad de Ana Jiménez en su web personal (abre en nueva pestaña)"
                  >
                    Ver especialidad
                  </a>
                </div>
              </div>
            </article>
          </li>

          <!-- ── Leonor Cabrera ── -->
          <li class="sm:mt-10 lg:mt-12">
            <article
              class="team-card group"
              aria-labelledby="nombre-leonor"
            >
              <div class="relative overflow-hidden sm:w-52 lg:w-60 shrink-0 aspect-[3/4] sm:aspect-auto">
                <NuxtImg
                  src="/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg"
                  alt="Leonor Cabrera, coach profesional certificada y co-directora de La Seda Granada, especialista en Wingwave y constelaciones familiares"
                  class="w-full h-full object-cover object-top grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
                  width="240"
                  height="320"
                  format="webp"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-[#27252B]/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#FDFBF9]/20"
                  aria-hidden="true"
                />
                <div class="team-card-badge bg-[#27252B]" aria-label="Rol: Co-dirección">
                  Co-dirección
                </div>
              </div>

              <div class="p-7 flex flex-col flex-1 gap-4">
                <div>
                  <div class="section-divider mb-4" aria-hidden="true" />
                  <h3
                    id="nombre-leonor"
                    class="font-serif italic text-2xl leading-tight mb-1"
                  >
                    Leonor Cabrera
                  </h3>
                  <p class="team-card-role">Coach · Co-directora de La Seda</p>
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
                    <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                    <span class="text-[10px] text-[#27252B]/40 font-light tracking-wider">
                      Asesco <strong class="text-[#27252B]/60 font-medium">Nº 10.457</strong>
                    </span>
                  </div>
                  <a
                    href="https://leonorcabrera.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="team-card-link"
                    aria-label="Ver especialidad de Leonor Cabrera en su web personal (abre en nueva pestaña)"
                  >
                    Ver especialidad
                  </a>
                </div>
              </div>
            </article>
          </li>

          <!-- ── Cristina Lence ── -->
          <li>
            <article
              class="team-card group"
              aria-labelledby="nombre-cristina"
            >
              <div class="relative overflow-hidden sm:w-52 lg:w-60 shrink-0 aspect-[3/4] sm:aspect-auto">
                <NuxtImg
                  src="/images/cristina-lence-educadora-familiar-gestalt-sistemica-granada.jpg"
                  alt="Cristina Lence, educadora social especializada en Gestalt y Sistémica aplicadas a infancia, adolescencia y familias en Granada"
                  class="w-full h-full object-cover object-top grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
                  width="240"
                  height="320"
                  format="webp"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-[#27252B]/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#FDFBF9]/20"
                  aria-hidden="true"
                />
                <div class="team-card-badge bg-[#71B1A5]" aria-label="Rol: Educación Familiar">
                  Educación Familiar
                </div>
              </div>

              <div class="p-7 flex flex-col flex-1 gap-4">
                <div>
                  <div class="section-divider mb-4" aria-hidden="true" />
                  <h3
                    id="nombre-cristina"
                    class="font-serif italic text-2xl leading-tight mb-1"
                  >
                    Cristina Lence
                  </h3>
                  <p class="team-card-role">Educadora Familiar</p>
                </div>

                <p class="text-[#27252B]/65 text-sm leading-[1.85] font-light flex-1">
                  Educadora Social con formación en Gestalt y Sistémica. Formada en Técnicas
                  Gestálticas aplicadas a la infancia y a la adolescencia con la ITG de Valencia
                  y en el Programa SAT de Claudio Naranjo. Especializada en el trabajo con
                  niños y niñas, adolescentes y familias.
                </p>

                <div class="space-y-2 pt-2 border-t border-[#27252B]/8">
                  <div class="flex items-center gap-2">
                    <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    <span class="text-[10px] text-[#27252B]/40 font-light tracking-wider">
                      Educadora Social · Gestalt y Sistémica
                    </span>
                  </div>
                  <a
                    href="https://aetg.es/users/cristina-lence-dopico"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="team-card-link"
                    aria-label="Ver especialidad de Cristina Lence en AETG (abre en nueva pestaña)"
                  >
                    Ver especialidad
                  </a>
                </div>
              </div>
            </article>
          </li>

          <!-- ── Reyes Sánchez Tallón ── -->
          <li class="sm:mt-10 lg:mt-12">
            <article
              class="team-card group"
              aria-labelledby="nombre-reyes"
            >
              <div class="relative overflow-hidden sm:w-52 lg:w-60 shrink-0 aspect-[3/4] sm:aspect-auto">
                <NuxtImg
                  src="/images/reyes-sanchez-tallon-medica-pediatra-gestalt-terapia-granada.jpg"
                  alt="Reyes Sánchez Tallón, médica pediatra colegiada con formación en terapia Gestalt, Terapia Corporal Integrativa y Sistémica en La Seda Granada"
                  class="w-full h-full object-cover object-top grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
                  width="240"
                  height="320"
                  format="webp"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-[#27252B]/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#FDFBF9]/20"
                  aria-hidden="true"
                />
                <div class="team-card-badge bg-[#27252B]" aria-label="Rol: Medicina">
                  Medicina
                </div>
              </div>

              <div class="p-7 flex flex-col flex-1 gap-4">
                <div>
                  <div class="section-divider mb-4" aria-hidden="true" />
                  <h3
                    id="nombre-reyes"
                    class="font-serif italic text-2xl leading-tight mb-1"
                  >
                    Reyes Sánchez Tallón
                  </h3>
                  <p class="team-card-role">Médica Pediatra</p>
                </div>

                <p class="text-[#27252B]/65 text-sm leading-[1.85] font-light flex-1">
                  Médica pediatra colegiada. Formada en terapia Gestalt, Terapia Corporal Integrativa
                  con el equipo Antonio Pacheco, y en psicología de los eneatipos y Bioenergética con
                  Fernando de Juan. Actualmente en formación en el Programa SAT de Claudio Naranjo
                  y en terapia sistémica en Psicogestalt de Madrid.
                </p>

                <div class="space-y-2 pt-2 border-t border-[#27252B]/8">
                  <div class="flex items-center gap-2">
                    <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                    <span class="text-[10px] text-[#27252B]/40 font-light tracking-wider">
                      Colegiada <strong class="text-[#27252B]/60 font-medium">Nº 18-10008273</strong>
                    </span>
                  </div>
                  <a
                    href="https://aetg.es/users/reyes-sanchez-tallon"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="team-card-link"
                    aria-label="Ver especialidad de Reyes Sánchez Tallón en AETG (abre en nueva pestaña)"
                  >
                    Ver especialidad
                  </a>
                </div>
              </div>
            </article>
          </li>

        </ul>

        <p class="mt-12 text-center text-xs text-[#27252B]/35 font-light tracking-wider">
          Todos los profesionales están colegiados o acreditados en sus respectivas especialidades
          y sujetos al código deontológico de la profesión.
        </p>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 5 · VALORES (bloque oscuro)
    ════════════════════════════════════════════════ -->
    <section
      class="bg-[#27252B] py-20 md:py-28"
      aria-labelledby="valores-heading"
    >
      <div class="page-container">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-16">
          <div>
            <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-3">
              Nuestra forma de trabajar
            </p>
            <h2
              id="valores-heading"
              class="font-serif italic text-white text-3xl md:text-4xl leading-[1.2]"
            >
              Los valores que nos guían
            </h2>
          </div>
          <div class="w-24 h-px bg-white/10 md:mb-2" aria-hidden="true" />
        </div>

        <ol
          class="grid md:grid-cols-3 gap-10 md:gap-16 list-none"
          aria-label="Valores del equipo de La Seda"
        >
          <li class="border-t border-white/10 pt-8">
            <span
              class="font-serif italic text-[#71B1A5]/30 text-5xl leading-none select-none block mb-6"
              aria-hidden="true"
            >01</span>
            <h3 class="font-serif italic text-white text-2xl mb-4">Formación continua</h3>
            <p class="text-white/45 text-sm leading-relaxed font-light">
              Cada miembro del equipo dedica horas anuales a supervisión clínica, congresos
              y programas de actualización. La excelencia no se declara: se practica.
            </p>
          </li>

          <li class="border-t border-white/10 pt-8">
            <span
              class="font-serif italic text-[#71B1A5]/30 text-5xl leading-none select-none block mb-6"
              aria-hidden="true"
            >02</span>
            <h3 class="font-serif italic text-white text-2xl mb-4">Supervisión de casos</h3>
            <p class="text-white/45 text-sm leading-relaxed font-light">
              Trabajamos con supervisión grupal regular. Que el terapeuta sea acompañado
              en su práctica es garantía de calidad para quien acude a consulta.
            </p>
          </li>

          <li class="border-t border-white/10 pt-8">
            <span
              class="font-serif italic text-[#71B1A5]/30 text-5xl leading-none select-none block mb-6"
              aria-hidden="true"
            >03</span>
            <h3 class="font-serif italic text-white text-2xl mb-4">Derivación responsable</h3>
            <p class="text-white/45 text-sm leading-relaxed font-light">
              Si detectamos que otra especialidad puede ayudarte mejor, lo decimos.
              Contamos con una red de profesionales de confianza en Granada para
              acompañarte en ese camino.
            </p>
          </li>
        </ol>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 6 · CTA FINAL
    ════════════════════════════════════════════════ -->
    <section
      class="page-container py-20 md:py-24"
      aria-labelledby="cta-heading"
    >
      <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-10">
        <div class="md:col-span-5">
          <p class="section-label mb-4">Contacto</p>
          <h2
            id="cta-heading"
            class="font-serif italic text-3xl md:text-4xl leading-[1.2]"
          >
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
          aria-label="Ir a la página de contacto para reservar primera cita en La Seda"
        >
          <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
            Reservar primera cita
          </span>
          <span
            class="w-10 h-px bg-[#27252B]/40 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300"
            aria-hidden="true"
          />
        </NuxtLink>

        <NuxtLink
          to="/terapias"
          class="inline-flex items-center gap-4 group"
          aria-label="Ver todos los servicios y terapias del Centro La Seda en Granada"
        >
          <span class="text-sm tracking-[0.22em] uppercase text-[#27252B]/50 group-hover:text-[#71B1A5] transition-colors duration-200">
            Ver nuestras terapias
          </span>
          <span
            class="w-10 h-px bg-[#27252B]/20 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

    </section>

  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Equipo de Psicólogos en Granada | Centro La Seda',
  description:
    'Conoce a los psicólogos colegiados de La Seda en Granada. Especialistas en terapia individual, infanto-juvenil, de pareja, Gestalt y constelaciones familiares. Pide cita hoy.',
  ogTitle: 'El equipo de La Seda · Psicólogos colegiados en Granada',
  ogDescription:
    'Profesionales colegiados, espacio terapéutico cuidado y enfoque multidisciplinar para tu bienestar. Centro de Psicología La Seda, Granada.',
  ogImage: '/images/centro-psicologia-la-seda-granada-hero.jpg',
  ogType: 'website',
  ogUrl: 'https://www.laseda.es/equipo',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Equipo de psicólogos · La Seda · Granada',
  twitterDescription: 'Psicólogos colegiados especializados en terapia Gestalt, sistémica, infanto-juvenil y coaching en Granada. Centro La Seda.',
  robots: 'index, follow',
  canonical: 'https://www.laseda.es/equipo',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Equipo de psicólogos — La Seda Granada',
          url: 'https://www.laseda.es/equipo',
          numberOfItems: 4,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@type': 'Person',
                name: 'Ana Jiménez',
                jobTitle: 'Psicóloga Sanitaria · Co-directora',
                url: 'https://anajimenezpsicologa.es/',
                worksFor: {
                  '@type': 'MedicalBusiness',
                  '@id': 'https://www.laseda.es/#business',
                  name: 'La Seda · Psicología y Crecimiento en Granada',
                },
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@type': 'Person',
                name: 'Leonor Cabrera',
                jobTitle: 'Coach Profesional Certificada · Co-directora',
                url: 'https://leonorcabrera.com/',
                worksFor: {
                  '@type': 'MedicalBusiness',
                  '@id': 'https://www.laseda.es/#business',
                  name: 'La Seda · Psicología y Crecimiento en Granada',
                },
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@type': 'Person',
                name: 'Cristina Lence',
                jobTitle: 'Educadora Familiar · Gestalt y Sistémica',
                url: 'https://aetg.es/users/cristina-lence-dopico',
                worksFor: {
                  '@type': 'MedicalBusiness',
                  '@id': 'https://www.laseda.es/#business',
                  name: 'La Seda · Psicología y Crecimiento en Granada',
                },
              },
            },
            {
              '@type': 'ListItem',
              position: 4,
              item: {
                '@type': 'Person',
                name: 'Reyes Sánchez Tallón',
                jobTitle: 'Médica Pediatra',
                url: 'https://aetg.es/users/reyes-sanchez-tallon',
                worksFor: {
                  '@type': 'MedicalBusiness',
                  '@id': 'https://www.laseda.es/#business',
                  name: 'La Seda · Psicología y Crecimiento en Granada',
                },
              },
            },
          ],
        },
      ]),
    },
  ],
})
</script>