<template>
  <main class="bg-[#FDFBF9] text-[#27252B] font-sans overflow-x-hidden">

    <!-- ============================================================
         1. HERO DE TALLERES
    ============================================================ -->
    <header class="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">

      <!-- Fondo atmosférico -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop"
          alt="Espacio vivencial y de crecimiento personal — Talleres La Seda Granada"
          class="w-full h-full object-cover object-center"
          loading="eager"
          fetchpriority="high"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#27252B] via-[#27252B]/70 to-[#27252B]/20"></div>
      </div>

      <!-- Contenido hero -->
      <div class="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-20 md:pb-28 pt-32 w-full">

        <!-- Etiqueta -->
        <div class="flex items-center gap-3 mb-8">
          <div class="w-8 h-px bg-[#71B1A5]"></div>
          <span class="text-[#71B1A5] text-xs tracking-[0.35em] uppercase font-light">
            Centro de Psicología · Granada
          </span>
        </div>

        <!-- H1 -->
        <h1 class="font-serif text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] text-white mb-0 max-w-3xl">
          Talleres y Espacios
          <span class="block italic text-[#71B1A5]">Vivenciales</span>
        </h1>

        <!-- Separador editorial -->
        <div class="flex items-start gap-10 mt-14 md:mt-20 flex-col md:flex-row">

          <!-- Cita de Naranjo — bloque editorial destacado -->
          <div class="relative max-w-2xl">

            <!-- Comillas decorativas grandes -->
            <svg
              class="absolute -top-6 -left-4 w-16 h-16 text-[#71B1A5] opacity-40 select-none"
              viewBox="0 0 60 50" fill="currentColor"
              aria-hidden="true"
            >
              <path d="M0 50V28.6C0 15.8 6 6.4 18 0l4.8 6.4C16.2 9.4 12.4 14 11.6 20H24V50H0zm36 0V28.6C36 15.8 42 6.4 54 0l4.8 6.4C52.2 9.4 48.4 14 47.6 20H60V50H36z"/>
            </svg>

            <blockquote class="pl-10 border-l-2 border-[#71B1A5]/50">
              <p class="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-[1.45] tracking-[-0.01em]">
                Lo que necesita nuestro tiempo son seres más bondadosos,
                <em class="text-[#71B1A5] not-italic"> no seres más inteligentes.</em>
                La inteligencia sin bondad
                <em class="text-[#71B1A5] not-italic"> es una mutación fallida.</em>
              </p>
              <footer class="mt-6 flex items-center gap-4 not-italic">
                <div class="w-8 h-px bg-[#71B1A5]/60"></div>
                <cite>
                  <span class="block text-white/80 text-xs tracking-[0.25em] uppercase font-medium">Claudio Naranjo</span>
                  <span class="block text-white/35 text-[10px] tracking-widest uppercase mt-0.5">Psiquiatra y Humanista Chileno</span>
                </cite>
              </footer>
            </blockquote>
          </div>

          <!-- Descripción breve a la derecha -->
          <div class="md:ml-auto md:max-w-xs xl:max-w-sm md:self-end pb-1">
            <p class="text-white/45 text-sm leading-relaxed font-light">
              En La Seda creamos espacios de encuentro donde la transformación
              ocurre desde la experiencia vivida, el cuerpo y las relaciones.
              Grupos íntimos, metodología profunda.
            </p>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-6 right-10 hidden md:flex flex-col items-center gap-2">
        <span class="text-[10px] tracking-[0.3em] uppercase text-white/25 [writing-mode:vertical-rl]">Explorar Talleres</span>
        <div class="w-px h-12 bg-gradient-to-b from-[#71B1A5]/50 to-transparent mt-2"></div>
      </div>
    </header>

    <!-- ============================================================
         2. INTRO — Contextualización de la propuesta
    ============================================================ -->
    <section aria-label="Propuesta de talleres" class="py-20 md:py-24 px-8 md:px-16 bg-[#FDFBF9]">
      <div class="max-w-4xl mx-auto text-center">
        <p class="font-serif text-xl md:text-2xl text-[#27252B]/70 leading-[1.6] font-light">
          Nuestros talleres están diseñados para quienes buscan ir más allá del conocimiento intelectual.
          Son espacios donde la teoría se encarna, las emociones se integran y el cambio
          ocurre desde adentro hacia afuera.
        </p>
        <div class="flex items-center justify-center gap-4 mt-10">
          <div class="h-px w-16 bg-[#71B1A5]/50"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-[#71B1A5]"></div>
          <div class="h-px w-16 bg-[#71B1A5]/50"></div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         3. CATÁLOGO DE TALLERES
    ============================================================ -->
    <section aria-labelledby="talleres-titulo" class="pb-28 md:pb-40 px-8 md:px-16">
      <div class="max-w-7xl mx-auto">

        <div class="flex items-center gap-3 mb-16 md:mb-20">
          <div class="w-6 h-px bg-[#71B1A5]"></div>
          <h2 id="talleres-titulo" class="text-[#71B1A5] text-xs tracking-[0.3em] uppercase">Nuestros Talleres</h2>
        </div>

        <!-- ─── TALLER 1: Supervisión de Casos ─── -->
        <article
          aria-labelledby="taller-supervision-titulo"
          class="group grid md:grid-cols-2 gap-0 mb-20 md:mb-28 border border-[#27252B]/8 overflow-hidden hover:border-[#71B1A5]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/5"
        >
          <!-- Imagen -->
          <div class="relative h-72 md:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&q=85&auto=format&fit=crop"
              alt="Supervisión clínica grupal para terapeutas — Taller La Seda Granada"
              class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-transparent to-[#FDFBF9]/10 mix-blend-multiply"></div>

            <!-- Número editorial -->
            <div class="absolute top-6 left-6 flex items-center gap-3">
              <span class="font-serif text-white/25 text-6xl leading-none select-none">01</span>
            </div>

            <!-- Badge de modalidad -->
            <div class="absolute bottom-6 left-6 flex gap-2 flex-wrap">
              <span class="bg-[#27252B]/70 backdrop-blur-sm text-white/80 text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">Presencial</span>
              <span class="bg-[#71B1A5]/80 backdrop-blur-sm text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">Grupal</span>
            </div>
          </div>

          <!-- Contenido -->
          <div class="bg-stone-50 p-10 md:p-14 flex flex-col justify-center">

            <div class="flex items-center gap-3 mb-5">
              <div class="w-4 h-px bg-[#71B1A5]"></div>
              <span class="text-[#71B1A5] text-[10px] tracking-[0.3em] uppercase">Para Profesionales</span>
            </div>

            <h2
              id="taller-supervision-titulo"
              class="font-serif text-2xl md:text-3xl lg:text-4xl text-[#27252B] leading-[1.2] mb-5"
            >
              Supervisión de Casos:<br/>
              <span class="italic text-[#71B1A5]">Supera tus dificultades como Terapeuta</span>
            </h2>

            <p class="text-[#27252B]/60 text-sm leading-relaxed mb-8 font-light max-w-md">
              La supervisión clínica es el proceso esencial que separa a un terapeuta en formación
              de un profesional que opera con seguridad y criterio. En este espacio grupal,
              psicólogos y terapeutas exponen sus casos con dificultad, reciben retroalimentación
              rigurosa y amplían su mirada clínica en un entorno de confianza y confidencialidad.
              Trabajamos los bloqueos relacionales, los impasses terapéuticos y los límites
              personales que interfieren en la calidad de la atención.
            </p>

            <!-- Puntos clave -->
            <ul class="space-y-3 mb-10" role="list">
              <li class="flex items-start gap-3">
                <div class="w-1 h-1 rounded-full bg-[#71B1A5] mt-2 flex-shrink-0"></div>
                <span class="text-[#27252B]/65 text-sm font-light">Exposición y análisis de casos clínicos reales en grupo</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-1 h-1 rounded-full bg-[#71B1A5] mt-2 flex-shrink-0"></div>
                <span class="text-[#27252B]/65 text-sm font-light">Identificación de contratransferencia y sesgos del terapeuta</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-1 h-1 rounded-full bg-[#71B1A5] mt-2 flex-shrink-0"></div>
                <span class="text-[#27252B]/65 text-sm font-light">Ampliación del repertorio de intervenciones y técnicas</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-1 h-1 rounded-full bg-[#71B1A5] mt-2 flex-shrink-0"></div>
                <span class="text-[#27252B]/65 text-sm font-light">Grupos reducidos para garantizar profundidad y confidencialidad</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-1 h-1 rounded-full bg-[#71B1A5] mt-2 flex-shrink-0"></div>
                <span class="text-[#27252B]/65 text-sm font-light">Supervisión con enfoque integrador y orientación humanista</span>
              </li>
            </ul>

            <!-- CTA -->
            <NuxtLink
              to="/contacto"
              class="inline-flex items-center justify-center gap-3 bg-[#27252B] text-white px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#71B1A5] transition-all duration-300 shadow-lg shadow-[#27252B]/15 w-full sm:w-auto"
            >
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Solicitar Información o Plaza
            </NuxtLink>
          </div>
        </article>

        <!-- ─── TALLER 2: Constelaciones Familiares ─── -->
        <article
          aria-labelledby="taller-constelaciones-titulo"
          class="group grid md:grid-cols-2 gap-0 border border-[#27252B]/8 overflow-hidden hover:border-[#71B1A5]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/5"
        >
          <!-- Contenido — invertido (texto a la izquierda) -->
          <div class="bg-[#27252B] p-10 md:p-14 flex flex-col justify-center order-2 md:order-1">

            <div class="flex items-center gap-3 mb-5">
              <div class="w-4 h-px bg-[#71B1A5]"></div>
              <span class="text-[#71B1A5] text-[10px] tracking-[0.3em] uppercase">Crecimiento Personal y Familiar</span>
            </div>

            <h2
              id="taller-constelaciones-titulo"
              class="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-[1.2] mb-5"
            >
              Talleres de
              <span class="italic text-[#71B1A5] block mt-1">Constelaciones Familiares</span>
            </h2>

            <p class="text-white/55 text-sm leading-relaxed mb-8 font-light max-w-md">
              Las Constelaciones Familiares son un método terapéutico vivencial desarrollado
              por Bert Hellinger que permite explorar los patrones invisibles que se transmiten
              a través de los sistemas familiares. A través de representaciones grupales,
              emergen dinámicas ocultas que explican conflictos actuales, heridas de la infancia
              y lealtades inconscientes. Un trabajo profundo, a menudo sorprendente,
              que abre nuevas posibilidades donde el pensamiento racional ya no alcanza.
            </p>

            <!-- Puntos clave -->
            <ul class="space-y-3 mb-10" role="list">
              <li class="flex items-start gap-3">
                <div class="w-1 h-1 rounded-full bg-[#71B1A5] mt-2 flex-shrink-0"></div>
                <span class="text-white/55 text-sm font-light">Abordaje de patrones heredados y lealtades inconscientes</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-1 h-1 rounded-full bg-[#71B1A5] mt-2 flex-shrink-0"></div>
                <span class="text-white/55 text-sm font-light">Sanación de heridas de la infancia y vínculos primarios</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-1 h-1 rounded-full bg-[#71B1A5] mt-2 flex-shrink-0"></div>
                <span class="text-white/55 text-sm font-light">Trabajo con conflictos relacionales, de pareja y de identidad</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-1 h-1 rounded-full bg-[#71B1A5] mt-2 flex-shrink-0"></div>
                <span class="text-white/55 text-sm font-light">Liberación de duelos, traumas y exclusiones familiares</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-1 h-1 rounded-full bg-[#71B1A5] mt-2 flex-shrink-0"></div>
                <span class="text-white/55 text-sm font-light">Sesiones en grupo en formato intensivo de un día completo</span>
              </li>
            </ul>

            <!-- CTA -->
            <NuxtLink
              to="/contacto"
              class="inline-flex items-center justify-center gap-3 bg-[#71B1A5] text-white px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#5a9a8e] transition-all duration-300 shadow-lg shadow-[#71B1A5]/20 w-full sm:w-auto"
            >
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Solicitar Información o Plaza
            </NuxtLink>
          </div>

          <!-- Imagen -->
          <div class="relative h-72 md:h-auto overflow-hidden order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=900&q=85&auto=format&fit=crop"
              alt="Dinámica grupal de Constelaciones Familiares — La Seda Granada"
              class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-l from-transparent to-[#27252B]/15 mix-blend-multiply"></div>

            <!-- Número editorial -->
            <div class="absolute top-6 right-6">
              <span class="font-serif text-white/20 text-6xl leading-none select-none">02</span>
            </div>

            <!-- Badges -->
            <div class="absolute bottom-6 right-6 flex gap-2 flex-wrap justify-end">
              <span class="bg-[#27252B]/70 backdrop-blur-sm text-white/80 text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">Presencial</span>
              <span class="bg-[#71B1A5]/80 backdrop-blur-sm text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">Intensivo</span>
            </div>
          </div>
        </article>

      </div>
    </section>

    <!-- ============================================================
         4. FRANJA TESTIMONIAL / CIERRE
    ============================================================ -->
    <section aria-label="Invitación a los talleres" class="relative py-24 md:py-32 overflow-hidden bg-stone-100/70">
      <div class="max-w-4xl mx-auto px-8 md:px-16 text-center">

        <div class="flex items-center justify-center gap-4 mb-10">
          <div class="h-px w-10 bg-[#71B1A5]/50"></div>
          <div class="w-1 h-1 rounded-full bg-[#71B1A5]"></div>
          <div class="h-px w-10 bg-[#71B1A5]/50"></div>
        </div>

        <h2 class="font-serif text-3xl md:text-4xl text-[#27252B] leading-tight mb-6">
          El cambio más profundo sucede
          <span class="italic text-[#71B1A5] block mt-1">en compañía de otros</span>
        </h2>

        <p class="text-[#27252B]/55 text-base md:text-lg leading-relaxed mb-12 font-light max-w-2xl mx-auto">
          Los grupos que facilitamos en La Seda son espacios de encuentro genuino.
          Reducidos, cuidados y conducidos por profesionales con larga experiencia en trabajo vivencial.
          Si sientes la llamada, da el primer paso.
        </p>

        <NuxtLink
          to="/contacto"
          class="inline-flex items-center gap-3 bg-[#71B1A5] text-white px-10 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#5a9a8e] transition-all duration-300 shadow-xl shadow-[#71B1A5]/20"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          Reservar Plaza o Consultar Fechas
        </NuxtLink>

        <!-- Contacto directo -->
        <p class="mt-8 text-[#27252B]/35 text-xs tracking-widest uppercase">
          o escríbenos a
          <a href="mailto:hola@laseda.es" class="text-[#71B1A5] hover:underline transition-all">hola@laseda.es</a>
        </p>
      </div>
    </section>

  </main>
</template>

<script setup>
// ─────────────────────────────────────────────
// SEO: Metadatos para la página de talleres
// ─────────────────────────────────────────────
useSeoMeta({
  title: 'Talleres de Crecimiento y Constelaciones en Granada | La Seda',
  description:
    'Talleres vivenciales de crecimiento personal en Granada. Supervisión de casos clínicos para terapeutas y Constelaciones Familiares. Espacios grupales seguros y profundos en el Centro La Seda.',
  ogTitle: 'Talleres Vivenciales — La Seda · Granada',
  ogDescription:
    'Supervisión clínica para terapeutas y Constelaciones Familiares en Granada. Grupos reducidos, metodología profunda y acompañamiento experto en el Centro La Seda.',
  ogImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
})

// JSON-LD: Schema para los talleres
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Talleres de Crecimiento Personal — La Seda Granada',
        description: 'Talleres vivenciales de psicología y crecimiento personal en Granada',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Event',
              name: 'Supervisión de Casos: Supera tus dificultades como Terapeuta',
              description:
                'Proceso esencial de supervisión clínica grupal para psicólogos y terapeutas en formación. Mejora la calidad de tu atención clínica en un espacio de confianza.',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              eventStatus: 'https://schema.org/EventScheduled',
              location: {
                '@type': 'Place',
                name: 'Centro La Seda',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Granada',
                  addressRegion: 'Andalucía',
                  addressCountry: 'ES',
                },
              },
              organizer: {
                '@type': 'Organization',
                name: 'La Seda · Psicología y Crecimiento en Granada',
                url: 'https://www.laseda.es',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Event',
              name: 'Talleres de Constelaciones Familiares',
              description:
                'Talleres vivenciales de Constelaciones Familiares en Granada para abordar patrones inconscientes, heridas de la infancia y dinámicas del sistema familiar.',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              eventStatus: 'https://schema.org/EventScheduled',
              location: {
                '@type': 'Place',
                name: 'Centro La Seda',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Granada',
                  addressRegion: 'Andalucía',
                  addressCountry: 'ES',
                },
              },
              organizer: {
                '@type': 'Organization',
                name: 'La Seda · Psicología y Crecimiento en Granada',
                url: 'https://www.laseda.es',
              },
            },
          },
        ],
      }),
    },
  ],
})
</script>