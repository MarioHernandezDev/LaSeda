<template>
  <main>

    <!-- ═══════════════════════════════════════════════════════════
         HERO — Efecto Telón Cinematográfico
    ════════════════════════════════════════════════════════════ -->
    <header
      class="hero-root relative overflow-hidden"
      :class="{ 'hero-animated': heroReady }"
    >

      <div class="hero-panel hero-panel-left bg-[#F5F2EE]">

        <div
          class="absolute inset-0 opacity-[0.018] pointer-events-none z-0"
          style="background-image: radial-gradient(circle, #27252B 1px, transparent 1px); background-size: 24px 24px;"
          aria-hidden="true"
        ></div>

        <div
          class="absolute top-[-10%] left-[-20%] w-[480px] h-[480px] rounded-full bg-[#71B1A5]/5 blur-[100px] pointer-events-none z-0"
          aria-hidden="true"
        ></div>

        <div class="hero-left-inner relative z-10 flex flex-col justify-center h-full px-8 md:px-12 lg:px-16 xl:px-20 py-24 md:py-0">

          <div class="hero-text-item flex items-center gap-3 mb-6 lg:mb-8" style="--i:1">
            <span class="w-5 h-px bg-[#71B1A5]" aria-hidden="true"></span>
            <p class="text-[#71B1A5] text-[10px] md:text-[11px] tracking-[0.42em] uppercase font-bold">
              Centro de Psicología · Granada
            </p>
          </div>

          <h1
            class="hero-text-item font-serif italic font-medium leading-[1.12] tracking-tight text-[#27252B] mb-5"
            style="--i:2; font-size: clamp(2.1rem, 3.5vw, 3.8rem);"
          >
            Psicología y<br />Psicoterapia
            <span class="not-italic font-normal text-[#71B1A5] block mt-2 font-sans"
              style="font-size: clamp(1.4rem, 2.4vw, 2.6rem); letter-spacing: 0.04em;">
              en Granada
            </span>
          </h1>

          <p
            class="hero-text-item text-stone-600/85 leading-[1.85] font-light mb-8 lg:mb-10 max-w-md"
            style="--i:3; font-size: clamp(0.85rem, 1.1vw, 1rem);"
          >
            Estamos especializadas en trabajar con
            <strong class="font-medium text-[#27252B] border-b border-[#71B1A5]/30 pb-0.5">las emociones humanas</strong>,
            aliviando el malestar diario para recuperar una vida plena. Para ello, contamos con un
            <strong class="text-[#71B1A5] font-medium">equipo multidisciplinar</strong>
            integrado por profesionales de la salud.
          </p>

          <div class="hero-text-item flex flex-col sm:flex-row gap-3 mb-10 lg:mb-14" style="--i:4">
            <NuxtLink
              to="/contacto"
              class="group inline-flex items-center justify-center gap-3 bg-[#71B1A5] text-white px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-500 shadow-lg shadow-[#71B1A5]/25 hover:bg-[#5a9a8e] hover:shadow-xl hover:shadow-[#71B1A5]/40 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <svg class="w-4 h-4 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Contacto
            </NuxtLink>

            <NuxtLink
              to="/conocenos"
              class="group inline-flex items-center justify-center gap-3 border border-[#27252B]/20 bg-transparent px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-bold text-[#27252B] hover:border-[#71B1A5] hover:text-[#71B1A5] transition-all duration-500 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Conocer al Equipo
              <svg class="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </NuxtLink>
          </div>

          <div
            class="hero-text-item flex items-center gap-6 lg:gap-8 pt-7 border-t border-[#27252B]/10"
            style="--i:5"
            aria-label="Cifras del centro"
          >
            <div>
              <span class="block font-serif italic text-[1.8rem] lg:text-[2.2rem] font-medium text-[#71B1A5] leading-none">+12</span>
              <span class="block text-[9px] opacity-55 tracking-[0.22em] uppercase font-bold mt-1">Años</span>
            </div>
            <div class="w-px h-7 bg-[#27252B]/12" aria-hidden="true"></div>
            <div>
              <span class="block font-serif italic text-[1.8rem] lg:text-[2.2rem] font-medium text-[#71B1A5] leading-none">+800</span>
              <span class="block text-[9px] opacity-55 tracking-[0.22em] uppercase font-bold mt-1">Pacientes</span>
            </div>
            <div class="w-px h-7 bg-[#27252B]/12" aria-hidden="true"></div>
            <div>
              <span class="block font-serif italic text-[1.8rem] lg:text-[2.2rem] font-medium text-[#71B1A5] leading-none">8</span>
              <span class="block text-[9px] opacity-55 tracking-[0.22em] uppercase font-bold mt-1">Psicólogos</span>
            </div>
          </div>

        </div>

        <div
          class="absolute top-8 right-16 md:top-40 md:right-32 z-20 pointer-events-none hero-butterfly"
          aria-hidden="true"
        >
          <div class="absolute w-28 h-28 bg-[#71B1A5]/12 rounded-full blur-2xl -z-10 translate-x-2 -translate-y-2"></div>
          <div class="butterfly-wrapper">
            <div class="butterfly-3d">
              <div class="wing-3d">
                <div class="bit-3d"></div>
                <div class="bit-3d"></div>
              </div>
              <div class="wing-3d">
                <div class="bit-3d"></div>
                <div class="bit-3d"></div>
              </div>
            </div>
            <div class="shadow-3d"></div>
          </div>
        </div>

        <div
          class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[45%] w-px"
          style="background: linear-gradient(to bottom, transparent, rgba(113,177,165,0.35), transparent);"
          aria-hidden="true"
        ></div>

      </div>

      <div class="hero-panel hero-panel-right">
        <NuxtImg
          src="/images/hero-consulta-laseda.jpg"
          alt="Espacio de consulta y bienestar en Granada — Centro La Seda"
          class="w-full h-full object-cover object-center"
          format="webp"
          fetchpriority="high"
          preload
        />
      </div>

    </header>


    <!-- ═══════════════════════════════════════════════════════════
         FILOSOFÍA
    ════════════════════════════════════════════════════════════ -->
    <section aria-labelledby="filosofia-titulo" class="relative py-28 md:py-40 overflow-hidden">
      <div class="absolute inset-0 bg-[#27252B]"></div>
      <div class="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <NuxtImg
          src="/images/fondo-filosofia-psicologia-bienestar-granada.jpg"
          alt=""
          class="w-full h-full object-cover"
          format="webp"
          loading="lazy"
        />
      </div>
      <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle, #71B1A5 1px, transparent 1px); background-size: 40px 40px;" aria-hidden="true"></div>

      <div class="relative z-10 max-w-4xl mx-auto px-8 md:px-16 text-center">
        <div class="flex items-center justify-center gap-6 mb-16" aria-hidden="true">
          <div class="h-px flex-1 max-w-[80px] bg-[#71B1A5]/40"></div>
          <div class="w-8 h-8 border border-[#71B1A5]/40 flex items-center justify-center rotate-45">
            <div class="w-2 h-2 bg-[#71B1A5] rotate-[-45deg]"></div>
          </div>
          <div class="h-px flex-1 max-w-[80px] bg-[#71B1A5]/40"></div>
        </div>

        <h2 id="filosofia-titulo" class="sr-only">Nuestra filosofía</h2>

        <figure class="flex flex-col items-center">
          <blockquote class="font-serif italic font-light text-[1.9rem] md:text-[2.4rem] lg:text-[2.9rem] text-white leading-[1.45] mb-12 tracking-[-0.005em]">
            <p>"Lo que necesita nuestro tiempo son seres más bondadosos, no seres más inteligentes.
            <em class="text-[#71B1A5] not-italic"> La inteligencia sin bondad es una mutación fallida.</em>"</p>
          </blockquote>
          <div class="flex items-center gap-3 mb-4" aria-hidden="true">
            <div class="h-px w-8 bg-[#71B1A5]/50"></div>
            <div class="w-1 h-1 rounded-full bg-[#71B1A5]"></div>
            <div class="h-px w-8 bg-[#71B1A5]/50"></div>
          </div>
          <figcaption>
            <cite class="not-italic">
              <span class="block text-white/90 text-sm tracking-[0.35em] uppercase font-medium">Claudio Naranjo</span>
              <span class="block text-white/55 text-xs tracking-[0.25em] uppercase mt-1.5">Psiquiatra y humanista chileno</span>
            </cite>
          </figcaption>
        </figure>

        <p class="mt-16 text-white/70 text-lg md:text-xl leading-[1.9] max-w-2xl mx-auto font-light">
          En La Seda hacemos nuestra esta visión. La psicología que practicamos no busca
          únicamente aliviar síntomas: busca despertar en cada persona su capacidad innata
          de vivir con mayor autenticidad, conexión y cuidado.
        </p>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         PILARES / SERVICIOS
    ════════════════════════════════════════════════════════════ -->
    <section aria-labelledby="pilares-titulo" class="py-24 md:py-36 px-8 md:px-16">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div class="flex items-center gap-3 mb-5" aria-hidden="true">
              <div class="w-6 h-px bg-[#F5F2EE]"></div>
              <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">Nuestros Servicios</span>
            </div>
            <h2 id="pilares-titulo" class="font-serif italic font-light text-[2rem] md:text-[2.6rem] leading-[1.15] max-w-md">
              Tres pilares para tu
              <span class="not-italic font-normal text-[#71B1A5]"> bienestar integral</span>
            </h2>
          </div>
          <p class="opacity-65 max-w-sm text-base leading-relaxed font-light md:text-right">
            Desde la terapia clínica hasta la formación especializada,
            ofrecemos un ecosistema completo de salud psicológica en Granada.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <article class="group relative overflow-hidden bg-stone-50 border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/12 hover:-translate-y-2">
            <div class="relative h-56 overflow-hidden">
              <NuxtImg src="/images/terapia-psicologica-individual-adultos-granada-la-seda.jpg" alt="Sesión de psicoterapia individual para adultos en el Centro La Seda, Granada" class="w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-700 ease-out" format="webp" loading="lazy" width="560" height="224" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/65 via-transparent to-transparent" aria-hidden="true"></div>
            </div>
            <div class="p-8">
              <h3 class="font-serif italic font-normal text-[1.5rem] mb-3 group-hover:text-[#71B1A5] transition-colors duration-500 tracking-wide">Terapias Psicológicas en Granada</h3>
              <p class="opacity-70 text-base leading-[1.8] mb-6 font-light">Atención psicológica clínica para adultos, infanto-juvenil y terapia de pareja. Abordajes basados en evidencia adaptados a cada persona.</p>
              <ul class="flex flex-wrap gap-2 mb-8" aria-label="Modalidades de terapia">
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Adultos</li>
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Infanto-Juvenil</li>
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Pareja</li>
              </ul>
              <NuxtLink to="/terapias" class="group/link inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium border-b border-[#27252B]/20 pb-1 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-500" aria-label="Ver todos los servicios de terapia psicológica">
                Descubrir
                <svg class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </NuxtLink>
            </div>
          </article>

          <article class="group relative overflow-hidden bg-[#27252B] border border-transparent hover:border-[#71B1A5]/35 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 md:-mt-8 md:mb-8">
            <div class="relative h-56 overflow-hidden">
              <NuxtImg src="/images/talleres-crecimiento-personal-constelaciones-familiares-granada.jpg" alt="Taller grupal de Constelaciones Familiares y crecimiento personal en Granada — Centro La Seda" class="w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-700 ease-out opacity-65" format="webp" loading="lazy" width="560" height="224" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#27252B] via-[#27252B]/20 to-transparent" aria-hidden="true"></div>
              <div class="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#71B1A5] opacity-80" aria-hidden="true"></div>
            </div>
            <div class="p-8">
              <h3 class="font-serif italic font-normal text-[1.5rem] text-white mb-3 group-hover:text-[#71B1A5] transition-colors duration-500 tracking-wide">Talleres de Crecimiento Personal</h3>
              <p class="text-white/70 text-base leading-[1.8] mb-6 font-light">Espacios vivenciales de crecimiento personal. Constelaciones Familiares, trabajo con emociones y grupos de autoconocimiento.</p>
              <ul class="flex flex-wrap gap-2 mb-8" aria-label="Tipos de talleres">
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/20 text-[#71B1A5] px-3 py-1.5 font-medium">Crecimiento Personal</li>
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/20 text-[#71B1A5] px-3 py-1.5 font-medium">Constelaciones</li>
              </ul>
              <NuxtLink to="/talleres" class="inline-flex items-center gap-2 text-xs text-white tracking-[0.2em] uppercase font-medium border-b border-white/20 pb-1 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-500" aria-label="Ver todos los talleres de crecimiento personal">
                Descubrir
                <svg class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </NuxtLink>
            </div>
          </article>

          <article class="group relative overflow-hidden bg-stone-50 border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/12 hover:-translate-y-2">
            <div class="relative h-56 overflow-hidden">
              <NuxtImg src="/images/formacion-psicologos-especializacion-salud-mental-granada.jpg" alt="Formación especializada para psicólogos y profesionales de la salud mental en Granada — Centro La Seda" class="w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-700 ease-out" format="webp" loading="lazy" width="560" height="224" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/65 via-transparent to-transparent" aria-hidden="true"></div>
            </div>
            <div class="p-8">
              <h3 class="font-serif italic font-normal text-[1.5rem] mb-3 group-hover:text-[#71B1A5] transition-colors duration-500 tracking-wide">Formaciones para Profesionales</h3>
              <p class="opacity-70 text-base leading-[1.8] mb-6 font-light">Programas de especialización oficial para profesionales de la salud y la educación que quieren ampliar su competencia clínica.</p>
              <ul class="flex flex-wrap gap-2 mb-8" aria-label="Perfiles de formación">
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Profesionales</li>
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Especialización</li>
              </ul>
              <NuxtLink to="/formaciones" class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium border-b border-[#27252B]/20 pb-1 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-500" aria-label="Ver programas de formación para psicólogos y profesionales">
                Descubrir
                <svg class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         SOBRE EL CENTRO
    ════════════════════════════════════════════════════════════ -->
    <section aria-labelledby="sobre-titulo" class="py-24 md:py-36 bg-stone-100/50">
      <div class="max-w-7xl mx-auto px-8 md:px-16">
        <div class="grid md:grid-cols-2 gap-16 lg:gap-28 items-center">
          <div class="relative order-2 md:order-1">
            <div class="relative overflow-hidden aspect-[4/5] group">
              <NuxtImg src="/images/equipo-psicologo-centro-la-seda-granada-multidisciplinar.jpg" alt="Equipo multidisciplinar de psicólogos colegiados del Centro de Psicología La Seda, Granada" class="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out" format="webp" loading="lazy" width="640" height="800" />
              <div class="absolute -bottom-5 -right-5 w-full h-full border border-[#71B1A5]/25 -z-10 pointer-events-none" aria-hidden="true"></div>
            </div>
            <div class="absolute -top-6 -left-6 bg-white shadow-xl p-5 flex items-center gap-4 max-w-[220px]">
              <div class="w-10 h-10 rounded-full bg-[#71B1A5]/12 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <svg class="w-5 h-5 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
              </div>
              <p class="text-sm opacity-70 leading-snug font-light">Colegiados por el <strong class="font-medium">COP Andalucía</strong></p>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="flex items-center gap-3 mb-6" aria-hidden="true">
              <div class="w-6 h-px bg-[#71B1A5]"></div>
              <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">Sobre el Centro</span>
            </div>
            <h2 id="sobre-titulo" class="font-serif italic font-light text-[2rem] md:text-[2.6rem] leading-[1.15] mb-7">
              Un enfoque multidisciplinar
              <span class="not-italic font-normal text-[#71B1A5]"> que cuida a la persona entera</span>
            </h2>
            <p class="opacity-70 text-lg leading-[1.9] mb-6 font-light">La Seda nació en Granada con una convicción: la salud mental no puede entenderse de forma aislada. Trabajamos en la intersección de la <strong class="opacity-85 font-medium">salud psicológica</strong>, la <strong class="opacity-85 font-medium">educación emocional</strong> y el <strong class="opacity-85 font-medium">crecimiento personal</strong>, porque los seres humanos somos mucho más que nuestros síntomas.</p>
            <p class="opacity-70 text-lg leading-[1.9] mb-12 font-light">Nuestro equipo de psicólogos colegiados integra diferentes tradiciones terapéuticas — cognitivo-conductual, sistémica, humanista y basada en mindfulness — para ofrecerte el abordaje más adecuado a tu momento vital.</p>
            <ul class="grid grid-cols-2 gap-6" aria-label="Valores del centro">
              <li v-for="valor in valores" :key="valor.title" class="flex items-start gap-4 group/valor">
                <div class="w-9 h-9 bg-[#71B1A5]/12 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/valor:bg-[#71B1A5]/25 transition-colors duration-500" aria-hidden="true">
                  <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="valor.icon"></svg>
                </div>
                <div>
                  <h3 class="text-base font-medium mb-1">{{ valor.title }}</h3>
                  <p class="text-sm opacity-65 leading-relaxed font-light">{{ valor.desc }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         GALERÍA DEL LOCAL — 12 fotos full-width, 4 columnas desktop
         Lightbox al hacer clic
    ════════════════════════════════════════════════════════════ -->
    <section aria-labelledby="galeria-titulo" class="py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-8 md:px-16 mb-12 text-center">
        <div class="flex items-center gap-4 mb-6 justify-center" aria-hidden="true">
          <div class="h-px w-8 bg-[#71B1A5]/50"></div>
          <div class="w-1 h-1 rounded-full bg-[#71B1A5]"></div>
          <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">Nuestro Espacio</span>
          <div class="w-1 h-1 rounded-full bg-[#71B1A5]"></div>
          <div class="h-px w-8 bg-[#71B1A5]/50"></div>
        </div>
        <h2 id="galeria-titulo" class="font-serif italic font-light text-[2rem] md:text-[2.6rem] leading-[1.15]">
          Un lugar pensado para
          <span class="not-italic font-normal text-[#71B1A5]"> sentirte en calma</span>
        </h2>
      </div>

      <!-- Grid full-width -->
      <div class="gallery-grid">
        <button
          v-for="(foto, idx) in galeriaFotos"
          :key="foto.src"
          class="gallery-item group"
          type="button"
          :aria-label="`Ver imagen ampliada: ${foto.alt}`"
          @click="abrirLightbox(idx)"
        >
          <NuxtImg
            :src="foto.src"
            :alt="foto.alt"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            format="webp"
            loading="lazy"
            width="480"
            height="360"
          />
          <div class="gallery-overlay" aria-hidden="true">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
            </svg>
          </div>
        </button>
      </div>

      <!-- Lightbox -->
      <Teleport to="body">
        <div
          v-if="lightboxAbierto"
          class="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          :aria-label="`Imagen ${lightboxIdx + 1} de ${galeriaFotos.length}: ${galeriaFotos[lightboxIdx]?.alt}`"
          @click.self="cerrarLightbox"
          @keydown.escape="cerrarLightbox"
          @keydown.arrow-left="lightboxPrev"
          @keydown.arrow-right="lightboxNext"
        >
          <button class="lightbox-close" type="button" aria-label="Cerrar imagen" @click="cerrarLightbox">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <button class="lightbox-nav lightbox-nav--prev" type="button" aria-label="Imagen anterior" @click="lightboxPrev">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <div class="lightbox-img-wrap">
            <NuxtImg
              :src="galeriaFotos[lightboxIdx]?.src"
              :alt="galeriaFotos[lightboxIdx]?.alt"
              class="lightbox-img"
              format="webp"
            />
            <p class="lightbox-caption">{{ galeriaFotos[lightboxIdx]?.caption }}</p>
          </div>

          <button class="lightbox-nav lightbox-nav--next" type="button" aria-label="Imagen siguiente" @click="lightboxNext">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <div class="lightbox-counter" aria-live="polite">
            {{ lightboxIdx + 1 }} / {{ galeriaFotos.length }}
          </div>
        </div>
      </Teleport>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         TESTIMONIOS
    ════════════════════════════════════════════════════════════ -->
    <section aria-labelledby="testimonios-titulo" class="py-28 md:py-40 overflow-hidden bg-[#FDFBF9] relative">
      <div class="absolute inset-0 opacity-[0.025]" style="background-image: radial-gradient(circle, #27252B 1px, transparent 1px); background-size: 32px 32px;" aria-hidden="true"></div>
      <div class="relative z-10">
        <div class="max-w-7xl mx-auto px-8 md:px-16 mb-20 text-center">
          <div class="flex items-center gap-4 mb-8 justify-center" aria-hidden="true">
            <div class="h-px w-8 bg-[#71B1A5]/50"></div>
            <div class="w-1 h-1 rounded-full bg-[#71B1A5]"></div>
            <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">Experiencias</span>
            <div class="w-1 h-1 rounded-full bg-[#71B1A5]"></div>
            <div class="h-px w-8 bg-[#71B1A5]/50"></div>
          </div>
          <h2 id="testimonios-titulo" class="font-serif italic font-light text-[2rem] md:text-[2.6rem] leading-[1.2]">
            Lo que dicen quienes nos
            <span class="not-italic font-normal text-[#71B1A5]"> confían su bienestar</span>
          </h2>
        </div>

        <div class="marquee-wrapper mb-4" style="--duration: 55s;" role="region" aria-label="Testimonios de pacientes, fila 1">
          <div class="marquee-track">
            <template v-for="loop in 2" :key="`loop1-${loop}`">
              <figure v-for="t in testimoniosRow1" :key="`r1-${loop}-${t.id}`" class="testimonial-card group">
                <div class="flex gap-1 mb-4" aria-label="5 estrellas" role="img">
                  <svg v-for="s in 5" :key="s" class="w-3 h-3 text-[#71B1A5]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <span class="testimonial-quote" aria-hidden="true">"</span>
                <blockquote><p class="opacity-72 text-sm leading-[1.85] italic mb-5 font-light relative z-10">{{ t.text }}</p></blockquote>
                <figcaption class="flex items-center gap-3 pt-4 border-t border-[#27252B]/8">
                  <div class="w-8 h-8 rounded-full bg-[#71B1A5]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#71B1A5]/30 transition-colors duration-500" aria-hidden="true">
                    <span class="text-[#71B1A5] text-xs font-semibold">{{ t.initials }}</span>
                  </div>
                  <div>
                    <span class="block text-xs font-semibold">{{ t.name }}</span>
                    <span class="block text-[10px] opacity-45 tracking-[0.2em] uppercase mt-0.5">{{ t.role }}</span>
                  </div>
                </figcaption>
              </figure>
            </template>
          </div>
        </div>

        <div class="marquee-wrapper marquee-reverse" style="--duration: 65s;" role="region" aria-label="Testimonios de pacientes, fila 2">
          <div class="marquee-track">
            <template v-for="loop in 2" :key="`loop2-${loop}`">
              <figure v-for="t in testimoniosRow2" :key="`r2-${loop}-${t.id}`" class="testimonial-card testimonial-card--dark group">
                <div class="flex gap-1 mb-4" aria-label="5 estrellas" role="img">
                  <svg v-for="s in 5" :key="s" class="w-3 h-3 text-[#71B1A5]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <span class="testimonial-quote testimonial-quote--dark" aria-hidden="true">"</span>
                <blockquote><p class="text-white/65 text-sm leading-[1.85] italic mb-5 font-light relative z-10">{{ t.text }}</p></blockquote>
                <figcaption class="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div class="w-8 h-8 rounded-full bg-[#71B1A5]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#71B1A5]/35 transition-colors duration-500" aria-hidden="true">
                    <span class="text-[#71B1A5] text-xs font-semibold">{{ t.initials }}</span>
                  </div>
                  <div>
                    <span class="block text-xs font-semibold text-white/80">{{ t.name }}</span>
                    <span class="block text-[10px] text-white/35 tracking-[0.2em] uppercase mt-0.5">{{ t.role }}</span>
                  </div>
                </figcaption>
              </figure>
            </template>
          </div>
        </div>
      </div>
      <div class="pointer-events-none absolute inset-y-0 left-0 w-32 z-20" style="background: linear-gradient(to right, #FDFBF9, transparent);" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 w-32 z-20" style="background: linear-gradient(to left, #FDFBF9, transparent);" aria-hidden="true"></div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         REDES SOCIALES — Instagram + Facebook unificados
    ════════════════════════════════════════════════════════════ -->
    <section aria-labelledby="redes-titulo" class="py-24 md:py-36 bg-[#27252B] overflow-hidden relative">

      <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle, #71B1A5 1px, transparent 1px); background-size: 36px 36px;" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-8 md:px-16">

        <!-- Cabecera -->
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div class="flex items-center gap-3 mb-5" aria-hidden="true">
              <div class="w-6 h-px bg-[#71B1A5]"></div>
              <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">Comunidad</span>
            </div>
            <h2 id="redes-titulo" class="font-serif italic font-light text-[2rem] md:text-[2.6rem] text-white leading-[1.15]">
              Síguenos y forma parte de
              <span class="not-italic font-normal text-[#71B1A5]"> nuestra comunidad</span>
            </h2>
          </div>
          <div class="flex items-center gap-4 flex-shrink-0">
            <a
              href="https://www.instagram.com/centrolaseda/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-follow-btn"
              aria-label="Seguir a Centro La Seda en Instagram"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/CentroLaSeda/?locale=es_ES"
              target="_blank"
              rel="noopener noreferrer"
              class="social-follow-btn"
              aria-label="Seguir a Centro La Seda en Facebook"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
          </div>
        </div>

        <!-- Tabs -->
        <div class="flex gap-1 mb-10 border-b border-white/10" role="tablist" aria-label="Seleccionar red social">
          <button
            class="social-tab"
            :class="{ 'social-tab--active': redActiva === 'instagram' }"
            role="tab"
            :aria-selected="redActiva === 'instagram'"
            aria-controls="panel-instagram"
            @click="redActiva = 'instagram'"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            Instagram
          </button>
          <button
            class="social-tab"
            :class="{ 'social-tab--active': redActiva === 'facebook' }"
            role="tab"
            :aria-selected="redActiva === 'facebook'"
            aria-controls="panel-facebook"
            @click="redActiva = 'facebook'"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Facebook
          </button>
        </div>

        <!-- Panel Instagram -->
        <div
          v-show="redActiva === 'instagram'"
          id="panel-instagram"
          role="tabpanel"
          aria-label="Publicaciones de Instagram"
        >
          <ul class="grid grid-cols-2 md:grid-cols-4 gap-3 list-none" aria-label="Publicaciones de Instagram del Centro La Seda">
            <li v-for="reel in reelsInstagram" :key="reel.href">
              <a
                :href="reel.href"
                target="_blank"
                rel="noopener noreferrer"
                class="reels-card group"
                :aria-label="`Ver publicación: ${reel.label} en Instagram (@centrolaseda)`"
              >
                <NuxtImg
                  :src="reel.src"
                  :alt="reel.alt"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                  format="webp"
                  loading="lazy"
                  width="360"
                  height="640"
                />
                <div class="reels-overlay" aria-hidden="true">
                  <div class="reels-play">
                    <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <div class="reels-info">
                    <span class="reels-tag">{{ reel.tag }}</span>
                    <span class="reels-handle">@centrolaseda</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <!-- Panel Facebook -->
        <div
          v-show="redActiva === 'facebook'"
          id="panel-facebook"
          role="tabpanel"
          aria-label="Publicaciones de Facebook"
        >
          <ul class="grid md:grid-cols-3 gap-6 list-none" aria-label="Publicaciones de Facebook del Centro La Seda">
            <li v-for="post in postsFacebook" :key="post.href" class="w-full">
              <article class="fb-card group h-full flex flex-col">
                <a
                  :href="post.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block relative overflow-hidden aspect-video flex-shrink-0"
                  :aria-label="`Ver en Facebook: ${post.titulo}`"
                >
                  <NuxtImg
                    :src="post.src"
                    :alt="post.alt"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    format="webp"
                    loading="lazy"
                    width="480"
                    height="270"
                  />
                  <div class="absolute inset-0 bg-[#27252B]/40 group-hover:bg-[#27252B]/55 transition-colors duration-500" aria-hidden="true"></div>
                  <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                    <div class="w-12 h-12 rounded-full bg-white/90 text-[#71B1A5] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                      <svg class="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div class="absolute top-3 left-3" aria-hidden="true">
                    <span class="fb-badge">{{ post.badge }}</span>
                  </div>
                </a>
                <div class="fb-card-body flex-1 flex flex-col">
                  <p class="fb-card-category">{{ post.categoria }}</p>
                  <h3 class="fb-card-title">{{ post.titulo }}</h3>
                  <p class="fb-card-desc flex-1">{{ post.descripcion }}</p>
                  <a
                    :href="post.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="fb-card-link mt-4 inline-flex items-center gap-2 self-start"
                    :aria-label="`Ver publicación completa en Facebook: ${post.titulo}`"
                  >
                    Ver en Facebook
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </a>
                </div>
              </article>
            </li>
          </ul>
        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         CTA FINAL
    ════════════════════════════════════════════════════════════ -->
    <section aria-labelledby="cta-titulo" class="relative py-32 md:py-48 overflow-hidden bg-[#FDFBF9]">
      <div class="absolute inset-0" aria-hidden="true">
        <NuxtImg src="/images/fondo-cta-centro-psicologia-granada-bienestar.jpg" alt="" class="w-full h-full object-cover object-center" format="webp" loading="lazy" width="1920" height="800" />
        <div class="absolute inset-0 bg-[#FDFBF9]/5 backdrop-blur-[2px]"></div>
        <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle at 1px 1px, #27252B 1px, transparent 0); background-size: 36px 36px;"></div>
      </div>
      <div class="relative z-10 max-w-3xl mx-auto px-8 md:px-16 text-center">
        <div class="flex items-center justify-center gap-5 mb-12" aria-hidden="true">
          <div class="h-px w-16 bg-[#71B1A5]/60"></div>
          <div class="w-2 h-2 rounded-full bg-[#71B1A5]"></div>
          <div class="h-px w-16 bg-[#71B1A5]/60"></div>
        </div>
        <h2 id="cta-titulo" class="font-serif italic font-medium text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.15] mb-7 tracking-[-0.01em]">
          Da el primer paso hacia
          <span class="not-italic font-bold text-[#71B1A5] block mt-2">tu bienestar en Granada</span>
        </h2>
        <p class="opacity-85 text-lg md:text-xl leading-[1.85] mb-14 font-medium max-w-2xl mx-auto">
          Una primera consulta sin compromiso para conocernos, escucharte y orientarte hacia el camino terapéutico que mejor se adapta a ti.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/contacto" class="group relative inline-flex items-center gap-3 bg-[#71B1A5] text-white px-10 py-5 text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#5a9a8e] transition-all duration-500 shadow-xl shadow-[#71B1A5]/35 hover:shadow-2xl hover:shadow-[#71B1A5]/50 hover:-translate-y-0.5 w-full sm:w-auto justify-center overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true"></div>
            <svg class="w-4 h-4 flex-shrink-0 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            Pedir Cita
          </NuxtLink>
          <NuxtLink to="/terapias" class="group inline-flex items-center gap-3 border-2 border-[#27252B]/20 px-10 py-5 text-xs tracking-[0.2em] uppercase font-bold hover:border-[#71B1A5] hover:text-[#71B1A5] backdrop-blur-sm bg-white/20 transition-all duration-500 hover:-translate-y-0.5 w-full sm:w-auto justify-center">
            Ver Nuestros Servicios
            <svg class="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </NuxtLink>
        </div>
        <address class="not-italic mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 opacity-75 text-base font-semibold">
          <a href="tel:+34679571977" class="flex items-center gap-2.5 hover:text-[#71B1A5] transition-colors duration-500">
            <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            679 571 977
          </a>
          <span class="hidden sm:block w-px h-4 bg-[#27252B]/15" aria-hidden="true"></span>
          <a href="mailto:hola@laseda.es" class="flex items-center gap-2.5 hover:text-[#71B1A5] transition-colors duration-500">
            <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            hola@laseda.es
          </a>
          <span class="hidden sm:block w-px h-4 bg-[#27252B]/15" aria-hidden="true"></span>
          <span class="flex items-center gap-2.5 opacity-60 font-medium">
            <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Granada, Andalucía
          </span>
        </address>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ─── SEO & Metadatos ─────────────────────────────────────────────────────────
useSeoMeta({
  title: 'Centro de Psicología y Psicoterapia en Granada | La Seda',
  description: 'Psicólogos en Granada especializados en terapia individual, de pareja e infanto-juvenil. Equipo multidisciplinar, más de 12 años de experiencia. Primera consulta sin compromiso.',
  ogTitle: 'La Seda · Centro de Psicología en Granada',
  ogDescription: 'Terapia psicológica, talleres de crecimiento personal y formación especializada en Granada. Más de 800 pacientes atendidos. Pide cita hoy.',
  ogImage: '/images/hero-consulta-laseda.jpg',
  ogType: 'website',
  ogUrl: 'https://www.laseda.es',
  ogLocale: 'es_ES',
  twitterCard: 'summary_large_image',
  twitterTitle: 'La Seda · Psicología y Psicoterapia en Granada',
  twitterDescription: 'Terapia individual, de pareja, infanto-juvenil y talleres de crecimiento personal en Granada. Equipo multidisciplinar colegiado.',
  twitterImage: '/images/hero-consulta-laseda.jpg',
  robots: 'index, follow',
  canonical: 'https://www.laseda.es',
})

useHead({
  htmlAttrs: { lang: 'es' },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: 'La Seda · Psicología y Crecimiento en Granada',
        description: 'Centro de psicología y crecimiento personal en Granada. Terapias clínicas, talleres y formaciones para profesionales.',
        url: 'https://www.laseda.es',
        telephone: '+34-679-571-977',
        email: 'hola@laseda.es',
        medicalSpecialty: 'Psychiatry',
        priceRange: '€€',
        image: 'https://www.laseda.es/images/hero-consulta-laseda.jpg',
        address: { '@type': 'PostalAddress', addressLocality: 'Granada', addressRegion: 'Andalucía', postalCode: '18001', addressCountry: 'ES' },
        geo: { '@type': 'GeoCoordinates', latitude: 37.1773, longitude: -3.5986 },
        openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '20:00' }],
        sameAs: ['https://www.instagram.com/centrolaseda', 'https://www.facebook.com/CentroLaSeda'],
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '10', bestRating: '5', worstRating: '1' },
      }),
    },
  ],
})

// ─── Animación hero ───────────────────────────────────────────────────────────
const heroReady = ref(false)

onMounted(() => {
  document.body.style.overflow = 'hidden'
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      heroReady.value = true
      setTimeout(() => { document.body.style.overflow = '' }, 1550)
    })
  })
})

onUnmounted(() => {
  document.body.style.overflow = ''
})

// ─── Valores ─────────────────────────────────────────────────────────────────
const valores = [
  {
    title: 'Trato Humano',
    desc: 'Sin prisas, con escucha genuina y profunda.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>',
  },
  {
    title: 'Basado en Evidencia',
    desc: 'Métodos con respaldo científico actualizado.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>',
  },
  {
    title: 'Confidencialidad',
    desc: 'Tu privacidad, protegida en todo momento.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  },
  {
    title: 'Equipo Experto',
    desc: 'Psicólogos colegiados y en formación continua.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>',
  },
]

// ─── Testimonios ─────────────────────────────────────────────────────────────
const testimoniosRow1 = [
  { id: 1, text: 'Encontrar La Seda fue un punto de inflexión. Por fin un lugar en Granada donde te escuchan de verdad, sin prisas y con una profundidad que no había encontrado antes.', initials: 'M.L.', name: 'M. L.', role: 'Terapia Individual' },
  { id: 2, text: 'Como psicóloga, la formación de especialización ha sido la más completa que he realizado. Contenidos rigurosos, supervisión real y un enfoque humano que se nota en cada clase.', initials: 'C.M.', name: 'C. M.', role: 'Formación Profesional' },
  { id: 3, text: 'La atención infanto-juvenil que recibió mi hijo fue transformadora. Nos dieron herramientas como familia y vimos cambios reales en pocas semanas.', initials: 'P.G.', name: 'P. G.', role: 'Terapia Infanto-Juvenil' },
  { id: 4, text: 'Vine con mucho escepticismo y me fui con una perspectiva completamente nueva. El trabajo terapéutico es serio, cálido y muy profesional a la vez.', initials: 'J.V.', name: 'J. V.', role: 'Terapia Individual' },
  { id: 5, text: 'Después de años buscando apoyo, La Seda fue el primer centro donde sentí que realmente entendían lo que me pasaba. Un equipo extraordinario.', initials: 'R.B.', name: 'R. B.', role: 'Terapia de Pareja' },
]

const testimoniosRow2 = [
  { id: 6, text: 'El taller de Constelaciones Familiares me ayudó a comprender patrones que arrastraba desde la infancia. Una experiencia transformadora que recomiendo a cualquier persona.', initials: 'A.R.', name: 'A. R.', role: 'Talleres Vivenciales' },
  { id: 7, text: 'El espacio en sí mismo transmite calma. Desde el momento en que entras notas que es un lugar concebido para el bienestar. Eso también cura.', initials: 'L.F.', name: 'L. F.', role: 'Terapia Individual' },
  { id: 8, text: 'Gracias al trabajo con mi psicóloga de La Seda pude gestionar la ansiedad que me paralizaba. Ahora entiendo mis emociones en lugar de temerlos.', initials: 'S.P.', name: 'S. P.', role: 'Terapia Individual' },
  { id: 9, text: 'La terapia de pareja nos ayudó a comunicarnos de forma completamente diferente. Aprendimos a escucharnos de verdad por primera vez en años.', initials: 'E.T.', name: 'E. T.', role: 'Terapia de Pareja' },
  { id: 10, text: 'Asistí a la formación en mindfulness y cambió mi práctica clínica por completo. Los profesores son referencias reales en sus campos.', initials: 'N.O.', name: 'N. O.', role: 'Formación Profesional' },
]

// ─── Galería ─────────────────────────────────────────────────────────────────
const galeriaFotos = [
  { src: '/images/galeria-sala-espera-centro-psicologia-la-seda-granada.jpg',       alt: 'Sala de espera acogedora del Centro de Psicología La Seda en Granada',                      caption: 'Sala de espera' },
  { src: '/images/galeria-consulta-terapia-individual-la-seda-granada.jpg',         alt: 'Consulta de terapia individual del Centro La Seda Granada',                                caption: 'Consulta individual' },
  { src: '/images/galeria-sala-talleres-grupales-psicologia-granada-la-seda.jpg',   alt: 'Sala de talleres grupales y terapia grupal en el Centro La Seda Granada',                  caption: 'Sala de talleres' },
  { src: '/images/galeria-zona-recepcion-centro-la-seda-granada.jpg',               alt: 'Recepción y zona de bienvenida del Centro de Psicología La Seda Granada',                  caption: 'Recepción' },
  { src: '/images/galeria-despacho-psicologia-clinica-granada-la-seda.jpg',         alt: 'Despacho de psicología clínica en el Centro La Seda Granada',                              caption: 'Despacho clínico' },
  { src: '/images/galeria-espacio-bienestar-relajacion-centro-la-seda-granada.jpg', alt: 'Espacio de bienestar y relajación en el Centro La Seda Granada',                          caption: 'Espacio de bienestar' },
  { src: '/images/galeria-sala-formacion-profesionales-psicologia-granada.jpg',     alt: 'Sala de formación para profesionales de psicología en el Centro La Seda Granada',         caption: 'Sala de formación' },
  { src: '/images/galeria-ambiente-consulta-psicoterapia-granada-la-seda.jpg',      alt: 'Ambiente cálido de consulta de psicoterapia en Granada — Centro La Seda',                 caption: 'Ambiente consulta' },
  { src: '/images/galeria-detalle-decoracion-centro-psicologia-la-seda.jpg',        alt: 'Detalle de decoración y diseño interior del Centro La Seda Granada',                      caption: 'Detalle interior' },
  { src: '/images/galeria-iluminacion-natural-consulta-granada-la-seda.jpg',        alt: 'Iluminación natural en consulta del Centro de Psicología La Seda Granada',               caption: 'Luz natural' },
  { src: '/images/galeria-pasillo-centro-psicologia-la-seda-granada.jpg',           alt: 'Pasillo interior del Centro de Psicología La Seda en Granada',                           caption: 'Accesos interiores' },
  { src: '/images/galeria-exterior-fachada-centro-la-seda-granada.jpg',             alt: 'Fachada exterior del Centro de Psicología La Seda en Granada',                           caption: 'Fachada del centro' },
]

// ─── Lightbox ─────────────────────────────────────────────────────────────────
const lightboxAbierto = ref(false)
const lightboxIdx = ref(0)

function abrirLightbox(idx) {
  lightboxIdx.value = idx
  lightboxAbierto.value = true
  document.body.style.overflow = 'hidden'
}

function cerrarLightbox() {
  lightboxAbierto.value = false
  document.body.style.overflow = ''
}

function lightboxNext() {
  lightboxIdx.value = (lightboxIdx.value + 1) % galeriaFotos.length
}

function lightboxPrev() {
  lightboxIdx.value = (lightboxIdx.value - 1 + galeriaFotos.length) % galeriaFotos.length
}

// ─── Redes sociales ───────────────────────────────────────────────────────────
const redActiva = ref('instagram')

const reelsInstagram = [
  { href: 'https://www.instagram.com/p/DY5X41qsHzp/', src: '/images/instagram-reel-bienestar-emocional-psicologia-granada.jpg',        alt: 'Reel de Instagram del Centro La Seda Granada sobre bienestar emocional y psicología',              tag: 'Bienestar',      label: 'reel de bienestar emocional' },
  { href: 'https://www.instagram.com/p/DY27DAOM5xG/', src: '/images/instagram-reel-gestion-ansiedad-tecnicas-psicologia-granada.jpg',  alt: 'Reel de Instagram del Centro La Seda sobre técnicas de gestión de ansiedad en Granada',           tag: 'Ansiedad',       label: 'reel sobre gestión de ansiedad' },
  { href: 'https://www.instagram.com/p/DY1xml3MfsZ/', src: '/images/instagram-reel-psicoeducacion-herramientas-dia-a-dia-granada.jpg', alt: 'Reel de Instagram del Centro La Seda Granada con herramientas de psicoeducación para el día a día', tag: 'Psicoeducación', label: 'reel de psicoeducación' },
  { href: 'https://www.instagram.com/p/DYzN9_KMTn8/', src: '/images/instagram-equipo-psicologos-centro-la-seda-granada.jpg',           alt: 'Equipo de psicólogos del Centro La Seda Granada en Instagram',                                    tag: 'Equipo',         label: 'publicación del equipo La Seda' },
]

const postsFacebook = [
  {
    href: 'https://www.facebook.com/reel/1685798236098339?locale=es_ES',
    src: '/images/facebook-taller-infancia-adolescencia-psicologia-granada.jpg',
    alt: 'Taller de psicología para infancia y adolescencia organizado por el Centro La Seda en Granada',
    badge: 'Junio · Talleres',
    categoria: 'Talleres presenciales',
    titulo: 'Talleres de Infancia y Adolescencia',
    descripcion: 'Volvemos cargadas de nuevos talleres. Aprenderemos a crear el genograma, analizar técnicas proyectivas, duelos y trauma infantil.',
  },
  {
    href: 'https://www.facebook.com/reel/1643758276877244?locale=es_ES',
    src: '/images/facebook-formacion-nino-interior-trauma-infantil-granada.jpg',
    alt: 'Formación experiencial sobre niño interior y trauma infantil en Granada — Centro La Seda',
    badge: 'Formación',
    categoria: 'Formación experiencial',
    titulo: '¿Quieres saber más de tu infancia?',
    descripcion: 'Un viaje a tu niñez para indagar en tu historia y acompañar a otros. 15 talleres experienciales con recursos para la vida diaria.',
  },
  {
    href: 'https://www.facebook.com/photo?fbid=1661999792264507&set=a.616850166779480&locale=es_ES',
    src: '/images/facebook-jornadas-gratuitas-cuidado-emocional-infancia-granada.jpg',
    alt: 'Jornadas gratuitas de cuidado emocional para infancia y adolescencia — Centro La Seda Granada',
    badge: 'Inscripción Abierta',
    categoria: 'Jornadas gratuitas',
    titulo: 'Jornadas de Cuidado Emocional',
    descripcion: 'Jornadas gratuitas en el Centro La Seda para el cuidado emocional de la infancia y la adolescencia. Revisa el programa e inscríbete.',
  },
]
</script>

<style scoped>
/* ════════════════════════════════════════════════════════════
   HERO — Layout bipartito + Efecto Telón
   ════════════════════════════════════════════════════════════ */
.hero-root {
  display: flex;
  flex-direction: column;
  min-height: 100svh;
}

@media (min-width: 768px) {
  .hero-root {
    flex-direction: row;
    height: 100vh;
    min-height: 640px;
    max-height: 100vh;
  }
}

.hero-panel {
  position: relative;
  overflow: hidden;
}

.hero-panel-left {
  width: 100%;
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .hero-panel-left {
    width: 50%;
    height: 100%;
  }
}

.hero-panel-right {
  width: 100%;
  height: 280px;
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .hero-panel-right {
    width: 50%;
    height: 100%;
  }
}

/* --- ESTADOS INICIALES (Antes de la animación) --- */
@media (min-width: 768px) {
  .hero-panel-left  { transform: translateX(-100%); }
  .hero-panel-right { transform: translateX(100%); }

  .hero-text-item,
  .hero-scroll-hint {
    opacity: 0;
    transform: translateY(16px);
  }

  /* Mariposa en Desktop: inicial oculta, girada y escala base */
  .hero-butterfly {
    opacity: 0;
    transform: translateY(16px) scale(0.65) rotate(-8deg);
    will-change: transform, opacity;
  }
}

@media (max-width: 767px) {
  .hero-panel-left  { opacity: 0; transform: translateY(20px); }
  .hero-panel-right { opacity: 0; }

  .hero-text-item,
  .hero-scroll-hint { opacity: 0; }

  /* Mariposa en Móvil: inicial muy compacta */
  .hero-butterfly {
    opacity: 0;
    transform: translateY(10px) scale(0.4) rotate(-8deg);
    will-change: transform, opacity;
  }
}

/* --- ESTADOS ACTIVOS (Durante/Después de la animación) --- */
@media (min-width: 768px) {
  .hero-animated .hero-panel-left {
    transform: translateX(0);
    transition: transform 1.15s cubic-bezier(0.76, 0, 0.24, 1);
  }

  .hero-animated .hero-panel-right {
    transform: translateX(0);
    transition: transform 1.15s cubic-bezier(0.76, 0, 0.24, 1);
  }

  .hero-animated .hero-text-item {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: calc(0.85s + var(--i, 1) * 0.1s);
  }

  /* Mariposa activa en Desktop: vuela a su posición con escala 0.85 */
  .hero-animated .hero-butterfly {
    opacity: 1;
    transform: translateY(0) scale(0.85) rotate(0deg);
    transition: opacity 0.7s ease-out 1.3s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 1.3s;
  }

  .hero-animated .hero-scroll-hint {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease-out 1.5s;
  }
}

@media (max-width: 767px) {
  .hero-animated .hero-panel-left {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .hero-animated .hero-panel-right {
    opacity: 1;
    transition: opacity 0.8s ease-out 0.5s;
  }

  .hero-animated .hero-text-item {
    opacity: 1;
    transition: opacity 0.55s ease-out, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: calc(0.2s + var(--i, 1) * 0.08s);
  }

  /* Mariposa activa en Móvil: escala fija al 0.55 para equilibrar el espacio */
  .hero-animated .hero-butterfly {
    opacity: 1;
    transform: translateY(0) scale(0.55) rotate(0deg);
    transition: opacity 0.6s ease-out 0.7s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.7s;
  }
}

.hero-left-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-scroll-hint { opacity: 0; }

@media (prefers-reduced-motion: reduce) {
  .hero-panel-left,
  .hero-panel-right,
  .hero-text-item,
  .hero-butterfly,
  .hero-scroll-hint {
    transform: none !important;
    opacity: 1 !important;
    transition: none !important;
  }
}

/* ════════════════════════════════════════════════════════════
   GALERÍA DEL LOCAL
   ════════════════════════════════════════════════════════════ */
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}

@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.gallery-item {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  cursor: zoom-in;
  display: block;
  border: none;
  padding: 0;
  background: #27252B;
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(39, 37, 43, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.4s ease;
}

.gallery-item:hover .gallery-overlay {
  background: rgba(39, 37, 43, 0.45);
}

.gallery-overlay svg {
  opacity: 0;
  transform: scale(0.85);
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.gallery-item:hover .gallery-overlay svg {
  opacity: 1;
  transform: scale(1);
}

/* ════════════════════════════════════════════════════════════
   LIGHTBOX
   ════════════════════════════════════════════════════════════ */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(13, 12, 15, 0.96);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: fadeIn 0.25s ease;
}

.lightbox-img-wrap {
  max-width: min(90vw, 1100px);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.lightbox-img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 2px;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.7);
}

.lightbox-caption {
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 500;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 24px;
  color: rgba(255, 255, 255, 0.6);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  transition: color 0.2s;
  z-index: 10;
}

.lightbox-close:hover { color: #fff; }

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 14px;
  transition: background 0.2s, color 0.2s;
  z-index: 10;
}

.lightbox-nav:hover {
  background: rgba(113, 177, 165, 0.25);
  color: #fff;
}

.lightbox-nav--prev { left: 20px; }
.lightbox-nav--next { right: 20px; }

.lightbox-counter {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.70rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

/* ════════════════════════════════════════════════════════════
   REDES SOCIALES
   ════════════════════════════════════════════════════════════ */
.social-follow-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(113, 177, 165, 0.35);
  color: rgba(255, 255, 255, 0.65);
  padding: 10px 20px;
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.35s ease;
  text-decoration: none;
}

.social-follow-btn:hover {
  border-color: #71B1A5;
  color: #71B1A5;
  background: rgba(113, 177, 165, 0.06);
}

.social-tab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.35);
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: all 0.3s ease;
}

.social-tab:hover { color: rgba(255, 255, 255, 0.7); }

.social-tab--active {
  color: #71B1A5;
  border-bottom-color: #71B1A5;
}

/* ── Reels Instagram ────────────────────────────────────── */
.reels-card {
  position: relative;
  display: block;
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background: #1a1820;
  text-decoration: none;
}

.reels-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(39, 37, 43, 0.85) 0%, transparent 45%);
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
}

.reels-card:hover .reels-overlay { opacity: 1; }

.reels-play {
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #71B1A5;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.85);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.reels-card:hover .reels-play { transform: scale(1); }

.reels-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.reels-tag {
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  background: rgba(113, 177, 165, 0.85);
  padding: 3px 8px;
  align-self: flex-start;
}

.reels-handle {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

/* ── Cards Facebook ─────────────────────────────────────── */
.fb-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}

.fb-card:hover {
  border-color: rgba(113, 177, 165, 0.35);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
}

.fb-card-body {
  padding: 24px 28px 28px;
}

.fb-badge {
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
  color: #71B1A5;
  background: rgba(113, 177, 165, 0.15);
  padding: 4px 10px;
}

.fb-card-category {
  font-size: 0.65rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(113, 177, 165, 0.7);
  margin-bottom: 8px;
}

.fb-card-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-style: italic;
  font-size: 1.25rem;
  font-weight: 400;
  color: #fff;
  line-height: 1.3;
  margin-bottom: 10px;
}

.fb-card-desc {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.75;
  font-weight: 300;
}

.fb-card-link {
  font-size: 0.65rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 700;
  color: #71B1A5;
  text-decoration: none;
  border-bottom: 1px solid rgba(113, 177, 165, 0.3);
  padding-bottom: 2px;
  transition: border-color 0.3s ease, color 0.3s ease;
}

.fb-card-link:hover {
  color: #8ec4bc;
  border-color: #8ec4bc;
}

/* ════════════════════════════════════════════════════════════
   Reduced motion
   ════════════════════════════════════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  .gallery-item img,
  .reels-card img,
  .fb-card,
  .lightbox-backdrop {
    transition: none !important;
    animation: none !important;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
</style>