<template>
  <main>

    <!-- ============================================================
         1. HERO — Cabecera principal above the fold
    ============================================================ -->
    <header class="relative min-h-screen flex flex-col overflow-hidden">

      <div class="absolute inset-0 z-0" aria-hidden="true">
        <video
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          class="absolute inset-0 w-full h-full object-cover object-center scale-105"
        >
          <source src="/video/hero-calma2.mp4" type="video/mp4" />
          <NuxtImg
            src="/images/hero-portada-centro-psicologia-granada-la-seda.jpg"
            alt=""
            class="absolute inset-0 w-full h-full object-cover"
            format="webp"
            preload
            fetchpriority="high"
          />
        </video>

        <div class="absolute inset-0 bg-gradient-to-r from-[#FDFBF9]/85 via-[#FDFBF9]/90 via-50% to-transparent z-[1]"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#FDFBF9] via-transparent to-transparent opacity-90 z-[2]"></div>
      </div>

      <div class="relative z-10 flex-1 flex items-center">
        <div class="w-full max-w-7xl mx-auto px-5 md:px-16 lg:px-24 py-24 md:py-0 grid md:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div class="md:col-span-7 lg:col-span-6 hero-content min-w-0">

            <div class="flex items-center gap-3 mb-8 hero-item" style="animation-delay: 0.1s;">
              <div class="w-8 h-px bg-[#71B1A5] stroke-[2px]" aria-hidden="true"></div>
              <p class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-bold">
                Centro de Psicología · Granada
              </p>
            </div>

            <h1
              class="font-serif italic font-medium text-[2rem] md:text-[3.6rem] lg:text-[4.2rem] leading-[1.15] mb-6 tracking-[-0.01em] hero-item break-words"
              style="animation-delay: 0.25s;"
            >
              Psicología y Psicoterapia
              <span class="not-italic font-normal text-[2rem] md:text-[2.7rem] lg:text-[3.2rem] text-[#71B1A5] tracking-wide block mt-2">
                en Granada
              </span>
            </h1>

            <p
              class="hidden md:block text-base md:text-xl leading-[1.85] mb-10 font-normal max-w-full md:max-w-xl break-words hero-item opacity-80"
              style="animation-delay: 0.4s;"
            >
              Estamos especializadas en trabajar con <strong class="font-bold border-b-2 border-[#71B1A5]/20 pb-0.5">las emociones humanas</strong>,
              en especial con aquellas que nos causan malestar en el día a día y que nos impiden llevar una vida plena.
              Para ello, contamos con un <strong class="text-[#71B1A5] font-bold">equipo multidisciplinar</strong>, integrado por diferentes profesionales de la psicología, la salud, la educación y la comunicación humana.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 hero-item mt-6 md:mt-0" style="animation-delay: 0.55s;">
              <NuxtLink
                to="/contacto"
                class="group inline-flex items-center justify-center gap-3 bg-[#71B1A5] text-white px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-500 shadow-lg shadow-[#71B1A5]/25 hover:bg-[#5a9a8e] hover:shadow-xl hover:shadow-[#71B1A5]/40 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <svg class="w-4 h-4 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Contacto
              </NuxtLink>

              <NuxtLink
                to="/conocenos"
                class="group inline-flex items-center justify-center gap-3 border border-[#27252B]/40 px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:border-[#71B1A5] hover:text-[#71B1A5] transition-all duration-500 hover:-translate-y-0.5 backdrop-blur-sm bg-white/40 w-full sm:w-auto"
              >
                Conocer al Equipo
                <svg class="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </NuxtLink>
            </div>

            <div class="flex items-center gap-4 sm:gap-8 mt-16 pt-8 border-t-2 border-[#27252B]/10 hero-item" style="animation-delay: 0.7s;" aria-label="Cifras del centro">
              <div class="text-center">
                <span class="block font-serif italic text-2xl md:text-4xl font-semibold text-[#71B1A5]">+12</span>
                <span class="block text-[10px] md:text-xs opacity-70 tracking-[0.25em] md:tracking-[0.3em] uppercase font-bold mt-1">Años</span>
              </div>
              <div class="w-px h-12 bg-[#27252B]/15" aria-hidden="true"></div>
              <div class="text-center">
                <span class="block font-serif italic text-2xl md:text-4xl font-semibold text-[#71B1A5]">+800</span>
                <span class="block text-[10px] md:text-xs opacity-70 tracking-[0.25em] md:tracking-[0.3em] uppercase font-bold mt-1">Pacientes</span>
              </div>
              <div class="w-px h-12 bg-[#27252B]/15" aria-hidden="true"></div>
              <div class="text-center">
                <span class="block font-serif italic text-2xl md:text-4xl font-semibold text-[#71B1A5]">8</span>
                <span class="block text-[10px] md:text-xs opacity-70 tracking-[0.25em] md:tracking-[0.3em] uppercase font-bold mt-1">Psicólogos</span>
              </div>
            </div>
          </div>

          <!-- Panel flotante decorativo — no semántico, oculto a lectores de pantalla -->
          <div class="hidden md:flex md:col-span-5 lg:col-span-6 items-center justify-end hero-item" style="animation-delay: 0.8s;" aria-hidden="true">
            <div class="relative w-full max-w-sm lg:max-w-md">
              <div class="bg-[#FDFBF9]/70 backdrop-blur-xl p-8 lg:p-10 shadow-2xl border border-white/50 rounded-3xl relative z-10 flex flex-col gap-6">
                <div class="flex items-center justify-between">
                  <span class="text-xs tracking-[0.25em] uppercase font-bold text-[#71B1A5] bg-[#71B1A5]/15 px-3 py-1 rounded-full">
                    Perspectiva Integrativa
                  </span>
                  <div class="w-2 h-2 rounded-full bg-[#71B1A5]"></div>
                </div>
                <div class="space-y-3">
                  <p class="font-serif italic font-medium text-2xl lg:text-3xl leading-snug">
                    Un espacio seguro para abrazar tu
                    <span class="not-italic font-semibold text-[#71B1A5] block">salud emocional.</span>
                  </p>
                  <div class="w-12 h-0.5 bg-[#27252B]/15 my-4"></div>
                </div>
                <p class="font-serif italic opacity-70 text-sm md:text-base pt-4 border-t border-[#27252B]/10 leading-relaxed font-medium">
                  "El camino hacia el bienestar comienza con una conversación."
                </p>
              </div>
              <div class="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#71B1A5]/8 blur-xl pointer-events-none"></div>
              <div class="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-[#27252B]/3 blur-lg pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>

      <div class="relative z-10 pb-10 flex-col items-center gap-2 hidden md:flex" aria-hidden="true">
        <div class="scroll-line w-px h-12 bg-gradient-to-b from-[#71B1A5] to-transparent"></div>
        <span class="text-xs tracking-[0.4em] uppercase opacity-50 mt-1">Descubrir</span>
      </div>
    </header>

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

    <!-- ============================================================
         3. SECCIÓN PILARES — 3 Servicios Principales
    ============================================================ -->
    <section aria-labelledby="pilares-titulo" class="py-24 md:py-36 px-8 md:px-16">

      <div class="max-w-7xl mx-auto">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div class="flex items-center gap-3 mb-5" aria-hidden="true">
              <div class="w-6 h-px bg-[#71B1A5]"></div>
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

          <!-- Card 1: Terapias -->
          <article class="group relative overflow-hidden bg-stone-50 border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/12 hover:-translate-y-2">
            <div class="relative h-56 overflow-hidden">
              <NuxtImg
                src="/images/terapia-psicologica-individual-adultos-granada-la-seda.jpg"
                alt="Sesión de psicoterapia individual para adultos en el Centro La Seda, Granada"
                class="w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                format="webp"
                loading="lazy"
                width="560"
                height="224"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/65 via-transparent to-transparent" aria-hidden="true"></div>
            </div>

            <div class="p-8">
              <h3 class="font-serif italic font-normal text-[1.5rem] mb-3 group-hover:text-[#71B1A5] transition-colors duration-500 tracking-wide">
                Terapias Psicológicas en Granada
              </h3>
              <p class="opacity-70 text-base leading-[1.8] mb-6 font-light">
                Atención psicológica clínica para adultos, infanto-juvenil y terapia de pareja.
                Abordajes basados en evidencia adaptados a cada persona.
              </p>

              <ul class="flex flex-wrap gap-2 mb-8" aria-label="Modalidades de terapia">
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Adultos</li>
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Infanto-Juvenil</li>
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Pareja</li>
              </ul>

              <NuxtLink
                to="/terapias"
                class="group/link inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium border-b border-[#27252B]/20 pb-1 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-500"
                aria-label="Ver todos los servicios de terapia psicológica"
              >
                Descubrir
                <svg class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </NuxtLink>
            </div>
          </article>

          <!-- Card 2: Talleres (destacada) -->
          <article class="group relative overflow-hidden bg-[#27252B] border border-transparent hover:border-[#71B1A5]/35 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 md:-mt-8 md:mb-8">
            <div class="relative h-56 overflow-hidden">
              <NuxtImg
                src="/images/talleres-crecimiento-personal-constelaciones-familiares-granada.jpg"
                alt="Taller grupal de Constelaciones Familiares y crecimiento personal en Granada — Centro La Seda"
                class="w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-700 ease-out opacity-65"
                format="webp"
                loading="lazy"
                width="560"
                height="224"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#27252B] via-[#27252B]/20 to-transparent" aria-hidden="true"></div>
              <div class="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#71B1A5] opacity-80" aria-hidden="true"></div>
            </div>

            <div class="p-8">
              <h3 class="font-serif italic font-normal text-[1.5rem] text-white mb-3 group-hover:text-[#71B1A5] transition-colors duration-500 tracking-wide">
                Talleres de Crecimiento Personal
              </h3>
              <p class="text-white/70 text-base leading-[1.8] mb-6 font-light">
                Espacios vivenciales de crecimiento personal. Constelaciones Familiares,
                trabajo con emociones y grupos de autoconocimiento.
              </p>

              <ul class="flex flex-wrap gap-2 mb-8" aria-label="Tipos de talleres">
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/20 text-[#71B1A5] px-3 py-1.5 font-medium">Crecimiento Personal</li>
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/20 text-[#71B1A5] px-3 py-1.5 font-medium">Constelaciones</li>
              </ul>

              <NuxtLink
                to="/talleres"
                class="inline-flex items-center gap-2 text-xs text-white tracking-[0.2em] uppercase font-medium border-b border-white/20 pb-1 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-500"
                aria-label="Ver todos los talleres de crecimiento personal"
              >
                Descubrir
                <svg class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </NuxtLink>
            </div>
          </article>

          <!-- Card 3: Formaciones -->
          <article class="group relative overflow-hidden bg-stone-50 border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/12 hover:-translate-y-2">
            <div class="relative h-56 overflow-hidden">
              <NuxtImg
                src="/images/formacion-psicologos-especializacion-salud-mental-granada.jpg"
                alt="Formación especializada para psicólogos y profesionales de la salud mental en Granada — Centro La Seda"
                class="w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                format="webp"
                loading="lazy"
                width="560"
                height="224"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/65 via-transparent to-transparent" aria-hidden="true"></div>
            </div>

            <div class="p-8">
              <h3 class="font-serif italic font-normal text-[1.5rem] mb-3 group-hover:text-[#71B1A5] transition-colors duration-500 tracking-wide">
                Formaciones para Profesionales
              </h3>
              <p class="opacity-70 text-base leading-[1.8] mb-6 font-light">
                Programas de especialización oficial para profesionales de la salud y
                la educación que quieren ampliar su competencia clínica.
              </p>

              <ul class="flex flex-wrap gap-2 mb-8" aria-label="Perfiles de formación">
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Profesionales</li>
                <li class="text-xs tracking-[0.2em] uppercase bg-[#71B1A5]/10 text-[#71B1A5] px-3 py-1.5 font-medium">Especialización</li>
              </ul>

              <NuxtLink
                to="/formaciones"
                class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium border-b border-[#27252B]/20 pb-1 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-500"
                aria-label="Ver programas de formación para psicólogos y profesionales"
              >
                Descubrir
                <svg class="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </NuxtLink>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- ============================================================
         4. SECCIÓN CONFIANZA / SOBRE EL CENTRO
    ============================================================ -->
    <section aria-labelledby="sobre-titulo" class="py-24 md:py-36 bg-stone-100/50">
      <div class="max-w-7xl mx-auto px-8 md:px-16">

        <div class="grid md:grid-cols-2 gap-16 lg:gap-28 items-center">

          <div class="relative order-2 md:order-1">
            <div class="relative overflow-hidden aspect-[4/5] group">
              <NuxtImg
                src="/images/equipo-psicologo-centro-la-seda-granada-multidisciplinar.jpg"
                alt="Equipo multidisciplinar de psicólogos colegiados del Centro de Psicología La Seda, Granada"
                class="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                format="webp"
                loading="lazy"
                width="640"
                height="800"
              />
              <div class="absolute -bottom-5 -right-5 w-full h-full border border-[#71B1A5]/25 -z-10 pointer-events-none" aria-hidden="true"></div>
            </div>

            <!-- Badge de confianza -->
            <div class="absolute -top-6 -left-6 bg-white shadow-xl p-5 flex items-center gap-4 max-w-[220px]">
              <div class="w-10 h-10 rounded-full bg-[#71B1A5]/12 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <svg class="w-5 h-5 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <p class="text-sm opacity-70 leading-snug font-light">
                Colegiados por el
                <strong class="font-medium">COP Andalucía</strong>
              </p>
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

            <p class="opacity-70 text-lg leading-[1.9] mb-6 font-light">
              La Seda nació en Granada con una convicción: la salud mental no puede entenderse
              de forma aislada. Trabajamos en la intersección de la <strong class="opacity-85 font-medium">salud psicológica</strong>,
              la <strong class="opacity-85 font-medium">educación emocional</strong> y el
              <strong class="opacity-85 font-medium">crecimiento personal</strong>,
              porque los seres humanos somos mucho más que nuestros síntomas.
            </p>

            <p class="opacity-70 text-lg leading-[1.9] mb-12 font-light">
              Nuestro equipo de psicólogos colegiados integra diferentes tradiciones terapéuticas
              — cognitivo-conductual, sistémica, humanista y basada en mindfulness — para
              ofrecerte el abordaje más adecuado a tu momento vital.
            </p>

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

    <!-- ============================================================
         5. SECCIÓN TESTIMONIOS — Carrusel infinito marquee
    ============================================================ -->
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

        <!-- Fila 1: izquierda → derecha -->
        <!-- role="region" + aria-label para que usuarios de lectores de pantalla puedan saltar el carrusel -->
        <div class="marquee-wrapper mb-4" style="--duration: 55s;" role="region" aria-label="Testimonios de pacientes, fila 1">
          <div class="marquee-track">
            <template v-for="loop in 2" :key="`loop1-${loop}`">
              <figure v-for="t in testimoniosRow1" :key="`r1-${loop}-${t.id}`" class="testimonial-card group">
                <div class="flex gap-1 mb-4" aria-label="5 estrellas" role="img">
                  <svg v-for="s in 5" :key="s" class="w-3 h-3 text-[#71B1A5]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span class="testimonial-quote" aria-hidden="true">"</span>
                <blockquote>
                  <p class="opacity-72 text-sm leading-[1.85] italic mb-5 font-light relative z-10">{{ t.text }}</p>
                </blockquote>
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

        <!-- Fila 2: derecha → izquierda -->
        <div class="marquee-wrapper marquee-reverse" style="--duration: 65s;" role="region" aria-label="Testimonios de pacientes, fila 2">
          <div class="marquee-track">
            <template v-for="loop in 2" :key="`loop2-${loop}`">
              <figure v-for="t in testimoniosRow2" :key="`r2-${loop}-${t.id}`" class="testimonial-card testimonial-card--dark group">
                <div class="flex gap-1 mb-4" aria-label="5 estrellas" role="img">
                  <svg v-for="s in 5" :key="s" class="w-3 h-3 text-[#71B1A5]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span class="testimonial-quote testimonial-quote--dark" aria-hidden="true">"</span>
                <blockquote>
                  <p class="text-white/65 text-sm leading-[1.85] italic mb-5 font-light relative z-10">{{ t.text }}</p>
                </blockquote>
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

      <!-- Fades laterales -->
      <div class="pointer-events-none absolute inset-y-0 left-0 w-32 z-20" style="background: linear-gradient(to right, #FDFBF9, transparent);" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 w-32 z-20" style="background: linear-gradient(to left, #FDFBF9, transparent);" aria-hidden="true"></div>

    </section>

    <!-- ============================================================
         6. SECCIÓN COMUNIDAD / REDES SOCIALES — Instagram
    ============================================================ -->
    <section aria-labelledby="reels-titulo" class="py-24 md:py-32 px-8 md:px-16 bg-white">
      <div class="max-w-7xl mx-auto">

        <div class="text-center mb-16">
          <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-bold block mb-4">Comunidad</span>
          <h2 id="reels-titulo" class="font-serif italic font-medium text-[2.4rem] md:text-[3rem] leading-[1.2]">
            Nuestro espacio en <span class="not-italic font-bold text-[#71B1A5]">redes sociales</span>
          </h2>
          <p class="opacity-75 text-base md:text-lg mt-4 max-w-xl mx-auto font-medium">
            Compartimos pequeñas reflexiones, herramientas diarias y píldoras de psicología para acompañarte en tu día a día.
          </p>
        </div>

        <ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 justify-items-center list-none" aria-label="Reels de Instagram del Centro La Seda">

          <li>
            <a
              href="https://www.instagram.com/p/DY5X41qsHzp/"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative w-full max-w-[280px] aspect-[9/16] bg-stone-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 border border-[#27252B]/5 flex"
              aria-label="Ver reel de bienestar emocional en Instagram (@centrolaseda)"
            >
              <NuxtImg
                src="/images/instagram-reel-bienestar-emocional-psicologia-granada.jpg"
                alt="Reel de Instagram del Centro La Seda Granada sobre bienestar emocional y psicología"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                format="webp"
                loading="lazy"
                width="280"
                height="498"
              />
              <div class="absolute inset-0 bg-[#27252B]/15 group-hover:bg-[#27252B]/35 transition-colors duration-500" aria-hidden="true"></div>
              <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div class="w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm text-[#71B1A5] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                  <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <div class="absolute bottom-4 left-4 right-4 z-10 flex flex-col items-start gap-1.5" aria-hidden="true">
                <span class="text-[9px] font-bold text-white tracking-widest bg-[#71B1A5]/90 backdrop-blur-sm px-2.5 py-1 rounded-md uppercase">Bienestar</span>
                <span class="text-[11px] font-bold text-white tracking-wide bg-[#27252B]/40 backdrop-blur-sm px-3 py-1 rounded-full">@centrolaseda</span>
              </div>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/p/DY27DAOM5xG/"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative w-full max-w-[280px] aspect-[9/16] bg-stone-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 border border-[#27252B]/5 flex"
              aria-label="Ver reel sobre gestión de ansiedad en Instagram (@centrolaseda)"
            >
              <NuxtImg
                src="/images/instagram-reel-gestion-ansiedad-tecnicas-psicologia-granada.jpg"
                alt="Reel de Instagram del Centro La Seda sobre técnicas de gestión de ansiedad en Granada"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                format="webp"
                loading="lazy"
                width="280"
                height="498"
              />
              <div class="absolute inset-0 bg-[#27252B]/15 group-hover:bg-[#27252B]/35 transition-colors duration-500" aria-hidden="true"></div>
              <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div class="w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm text-[#71B1A5] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                  <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <div class="absolute bottom-4 left-4 right-4 z-10 flex flex-col items-start gap-1.5" aria-hidden="true">
                <span class="text-[9px] font-bold text-white tracking-widest bg-[#71B1A5]/90 backdrop-blur-sm px-2.5 py-1 rounded-md uppercase">Gestión Ansiedad</span>
                <span class="text-[11px] font-bold text-white tracking-wide bg-[#27252B]/40 backdrop-blur-sm px-3 py-1 rounded-full">@centrolaseda</span>
              </div>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/p/DY1xml3MfsZ/"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative w-full max-w-[280px] aspect-[9/16] bg-stone-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 border border-[#27252B]/5 flex"
              aria-label="Ver reel de psicoeducación en Instagram (@centrolaseda)"
            >
              <NuxtImg
                src="/images/instagram-reel-psicoeducacion-herramientas-dia-a-dia-granada.jpg"
                alt="Reel de Instagram del Centro La Seda Granada con herramientas de psicoeducación para el día a día"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                format="webp"
                loading="lazy"
                width="280"
                height="498"
              />
              <div class="absolute inset-0 bg-[#27252B]/15 group-hover:bg-[#27252B]/35 transition-colors duration-500" aria-hidden="true"></div>
              <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div class="w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm text-[#71B1A5] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                  <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <div class="absolute bottom-4 left-4 right-4 z-10 flex flex-col items-start gap-1.5" aria-hidden="true">
                <span class="text-[9px] font-bold text-white tracking-widest bg-[#71B1A5]/90 backdrop-blur-sm px-2.5 py-1 rounded-md uppercase">Psicoeducación</span>
                <span class="text-[11px] font-bold text-white tracking-wide bg-[#27252B]/40 backdrop-blur-sm px-3 py-1 rounded-full">@centrolaseda</span>
              </div>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/p/DYzN9_KMTn8/"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative w-full max-w-[280px] aspect-[9/16] bg-stone-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 border border-[#27252B]/5 flex"
              aria-label="Ver publicación del equipo de La Seda en Instagram (@centrolaseda)"
            >
              <NuxtImg
                src="/images/instagram-equipo-psicologos-centro-la-seda-granada.jpg"
                alt="Equipo de psicólogos del Centro La Seda Granada en Instagram"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                format="webp"
                loading="lazy"
                width="280"
                height="498"
              />
              <div class="absolute inset-0 bg-[#27252B]/15 group-hover:bg-[#27252B]/35 transition-colors duration-500" aria-hidden="true"></div>
              <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div class="w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm text-[#71B1A5] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                  <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <div class="absolute bottom-4 left-4 right-4 z-10 flex flex-col items-start gap-1.5" aria-hidden="true">
                <span class="text-[9px] font-bold text-white tracking-widest bg-[#71B1A5]/90 backdrop-blur-sm px-2.5 py-1 rounded-md uppercase">Equipo La Seda</span>
                <span class="text-[11px] font-bold text-white tracking-wide bg-[#27252B]/40 backdrop-blur-sm px-3 py-1 rounded-full">@centrolaseda</span>
              </div>
            </a>
          </li>

        </ul>

        <div class="text-center mt-16">
          <a
            href="https://www.instagram.com/centrolaseda/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 border-2 border-[#27252B]/10 px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:border-[#71B1A5] hover:text-[#71B1A5] transition-all duration-500"
          >
            Seguir en Instagram
          </a>
        </div>

      </div>
    </section>

    <!-- ============================================================
         6b. SECCIÓN COMUNIDAD / REDES SOCIALES — Facebook
    ============================================================ -->
    <section aria-labelledby="facebook-titulo" class="py-24 md:py-32 px-8 md:px-16 bg-[#FDFBF9]">
      <div class="max-w-7xl mx-auto">

        <div class="text-center mb-16">
          <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-bold block mb-4">Facebook</span>
          <h2 id="facebook-titulo" class="font-serif italic font-medium text-[2.4rem] md:text-[3rem] leading-[1.2]">
            Espacio de <span class="not-italic font-bold text-[#71B1A5]">formación y encuentro</span>
          </h2>
          <p class="opacity-75 text-base md:text-lg mt-4 max-w-xl mx-auto font-medium">
            Compartimos novedades sobre nuestros talleres presenciales, jornadas gratuitas y formaciones especializadas en Granada.
          </p>
        </div>

        <ul class="grid md:grid-cols-3 gap-8 justify-items-center list-none" aria-label="Publicaciones de Facebook del Centro La Seda">

          <li class="w-full max-w-sm">
            <article class="group relative bg-white rounded-2xl overflow-hidden border border-[#27252B]/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full">
              <a
                href="https://www.facebook.com/reel/1685798236098339?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                class="relative aspect-video w-full overflow-hidden bg-stone-100 block"
                aria-label="Ver vídeo sobre talleres de infancia y adolescencia en Facebook"
              >
                <NuxtImg
                  src="/images/facebook-taller-infancia-adolescencia-psicologia-granada.jpg"
                  alt="Taller de psicología para infancia y adolescencia organizado por el Centro La Seda en Granada"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  format="webp"
                  loading="lazy"
                  width="384"
                  height="216"
                />
                <div class="absolute inset-0 bg-[#27252B]/15 group-hover:bg-[#27252B]/35 transition-colors duration-500" aria-hidden="true"></div>
                <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <div class="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm text-[#71B1A5] flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-500">
                    <svg class="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </a>
              <div class="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white">
                <div class="mb-6">
                  <span class="text-[10px] uppercase font-bold tracking-widest text-[#71B1A5] block mb-3">Junio · Talleres</span>
                  <h3 class="font-serif italic text-xl font-medium mb-3 leading-snug">Talleres de Infancia y Adolescencia</h3>
                  <p class="text-sm md:text-base opacity-80 font-normal leading-relaxed">
                    Volvemos cargadas de nuevos talleres. Aprenderemos a crear el genograma, analizar técnicas proyectivas, duelos y trauma infantil. ¡Llama al 679571977 e infórmate!
                  </p>
                </div>
                <a
                  href="https://www.facebook.com/reel/1685798236098339?locale=es_ES"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-xs font-bold text-[#71B1A5] uppercase tracking-wider group-hover:text-[#5a9a8e] transition-colors mt-auto"
                  aria-label="Ver vídeo sobre talleres de infancia en Facebook"
                >
                  Ver vídeo en Facebook
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </article>
          </li>

          <li class="w-full max-w-sm">
            <article class="group relative bg-white rounded-2xl overflow-hidden border border-[#27252B]/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full">
              <a
                href="https://www.facebook.com/reel/1643758276877244?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                class="relative aspect-video w-full overflow-hidden bg-stone-100 block"
                aria-label="Ver vídeo sobre niño interior y trauma infantil en Facebook"
              >
                <NuxtImg
                  src="/images/facebook-formacion-nino-interior-trauma-infantil-granada.jpg"
                  alt="Formación experiencial sobre niño interior y trauma infantil en Granada — Centro La Seda"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  format="webp"
                  loading="lazy"
                  width="384"
                  height="216"
                />
                <div class="absolute inset-0 bg-[#27252B]/15 group-hover:bg-[#27252B]/35 transition-colors duration-500" aria-hidden="true"></div>
                <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <div class="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm text-[#71B1A5] flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-500">
                    <svg class="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </a>
              <div class="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white">
                <div class="mb-6">
                  <span class="text-[10px] uppercase font-bold tracking-widest text-[#71B1A5] block mb-3">Formación Experiencial</span>
                  <h3 class="font-serif italic text-xl font-medium mb-3 leading-snug">¿Quieres saber más de tu infancia?</h3>
                  <p class="text-sm md:text-base opacity-80 font-normal leading-relaxed mb-3">
                    Un viaje a tu niñez y por el niño interior que fuiste para indagar en tu historia y acompañar a otros. 15 talleres experienciales con recursos teóricos para tu vida diaria.
                  </p>
                  <span class="text-[11px] text-[#71B1A5] font-medium block">#infancia #niñointerior #terapiainfantil</span>
                </div>
                <a
                  href="https://www.facebook.com/reel/1643758276877244?locale=es_ES"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-xs font-bold text-[#71B1A5] uppercase tracking-wider group-hover:text-[#5a9a8e] transition-colors mt-auto"
                  aria-label="Ver formación sobre niño interior en Facebook"
                >
                  Ver vídeo en Facebook
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </article>
          </li>

          <li class="w-full max-w-sm">
            <article class="group relative bg-white rounded-2xl overflow-hidden border border-[#27252B]/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full">
              <a
                href="https://www.facebook.com/photo?fbid=1661999792264507&set=a.616850166779480&locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                class="relative aspect-video w-full overflow-hidden bg-stone-100 block"
                aria-label="Ver jornadas gratuitas de cuidado emocional en Facebook"
              >
                <NuxtImg
                  src="/images/facebook-jornadas-gratuitas-cuidado-emocional-infancia-granada.jpg"
                  alt="Jornadas gratuitas de cuidado emocional para infancia y adolescencia organizadas por el Centro La Seda en Granada"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  format="webp"
                  loading="lazy"
                  width="384"
                  height="216"
                />
                <div class="absolute inset-0 bg-[#27252B]/15 group-hover:bg-[#27252B]/35 transition-colors duration-500" aria-hidden="true"></div>
                <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <div class="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm text-[#71B1A5] flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-500">
                    <svg class="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </a>
              <div class="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white">
                <div class="mb-6">
                  <span class="text-[10px] uppercase font-bold tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-3">Inscripción Abierta</span>
                  <h3 class="font-serif italic text-xl font-medium mb-3 leading-snug">Jornadas Gratuitas de Cuidado Emocional</h3>
                  <p class="text-sm md:text-base opacity-80 font-normal leading-relaxed mb-4">
                    Hacemos unas jornadas gratuitas en el Centro La Seda de Granada para el cuidado emocional de la infancia y de la adolescencia. Revisa el programa detallado e inscríbete.
                  </p>
                </div>
                <a
                  href="https://www.facebook.com/photo?fbid=1661999792264507&set=a.616850166779480&locale=es_ES"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-xs font-bold text-[#71B1A5] uppercase tracking-wider group-hover:text-[#5a9a8e] transition-colors mt-auto"
                  aria-label="Ver publicación de jornadas gratuitas en Facebook"
                >
                  Ver post en Facebook
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </article>
          </li>

        </ul>

        <div class="text-center mt-16">
          <a
            href="https://www.facebook.com/CentroLaSeda/?locale=es_ES"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 border-2 border-[#27252B]/10 px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:border-[#71B1A5] hover:text-[#71B1A5] transition-all duration-500"
          >
            Seguir en Facebook
          </a>
        </div>

      </div>
    </section>

    <!-- ============================================================
         7. CTA FINAL
    ============================================================ -->
    <section aria-labelledby="cta-titulo" class="relative py-32 md:py-48 overflow-hidden bg-[#FDFBF9]">

      <div class="absolute inset-0" aria-hidden="true">
        <NuxtImg
          src="/images/fondo-cta-centro-psicologia-granada-bienestar.jpg"
          alt=""
          class="w-full h-full object-cover object-center"
          format="webp"
          loading="lazy"
          width="1920"
          height="800"
        />
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
          Una primera consulta sin compromiso para conocernos, escucharte y
          orientarte hacia el camino terapéutico que mejor se adapta a ti.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            to="/contacto"
            class="group relative inline-flex items-center gap-3 bg-[#71B1A5] text-white px-10 py-5 text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#5a9a8e] transition-all duration-500 shadow-xl shadow-[#71B1A5]/35 hover:shadow-2xl hover:shadow-[#71B1A5]/50 hover:-translate-y-0.5 w-full sm:w-auto justify-center overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true"></div>
            <svg class="w-4 h-4 flex-shrink-0 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Pedir Cita
          </NuxtLink>

          <NuxtLink
            to="/terapias"
            class="group inline-flex items-center gap-3 border-2 border-[#27252B]/20 px-10 py-5 text-xs tracking-[0.2em] uppercase font-bold hover:border-[#71B1A5] hover:text-[#71B1A5] backdrop-blur-sm bg-white/20 transition-all duration-500 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            Ver Nuestros Servicios
            <svg class="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>

        <!-- Datos de contacto estructurados -->
        <address class="not-italic mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 opacity-75 text-base font-semibold">
          <a href="tel:+34679571977" class="flex items-center gap-2.5 hover:text-[#71B1A5] transition-colors duration-500">
            <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            679 571 977
          </a>
          <span class="hidden sm:block w-px h-4 bg-[#27252B]/15" aria-hidden="true"></span>
          <a href="mailto:hola@laseda.es" class="flex items-center gap-2.5 hover:text-[#71B1A5] transition-colors duration-500">
            <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            hola@laseda.es
          </a>
          <span class="hidden sm:block w-px h-4 bg-[#27252B]/15" aria-hidden="true"></span>
          <span class="flex items-center gap-2.5 opacity-60 font-medium">
            <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Granada, Andalucía
          </span>
        </address>
      </div>
    </section>

  </main>
</template>

<script setup>
// ─── SEO & Metadatos ────────────────────────────────────
useSeoMeta({
  title: 'Centro de Psicología y Psicoterapia en Granada | La Seda',
  description:
    'Psicólogos en Granada especializados en terapia individual, de pareja e infanto-juvenil. Equipo multidisciplinar, más de 12 años de experiencia. Primera consulta sin compromiso.',
  ogTitle: 'La Seda · Centro de Psicología en Granada',
  ogDescription:
    'Terapia psicológica, talleres de crecimiento personal y formación especializada en Granada. Más de 800 pacientes atendidos. Pide cita hoy.',
  ogImage: '/images/hero-portada-centro-psicologia-granada-la-seda.jpg',
  ogType: 'website',
  ogUrl: 'https://www.laseda.es',
  ogLocale: 'es_ES',
  twitterCard: 'summary_large_image',
  twitterTitle: 'La Seda · Psicología y Psicoterapia en Granada',
  twitterDescription: 'Terapia individual, de pareja, infanto-juvenil y talleres de crecimiento personal en Granada. Equipo multidisciplinar colegiado.',
  twitterImage: '/images/hero-portada-centro-psicologia-granada-la-seda.jpg',
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
  style: [
    {
      innerHTML: `
        .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-sans  { font-family: 'DM Sans', system-ui, sans-serif; }

        /* ── Hero ── */
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-item {
          opacity: 0;
          animation: heroFadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* ── Scroll pulse ── */
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%       { opacity: 0.9; transform: scaleY(1.1); }
        }
        .scroll-line {
          animation: scrollPulse 2s ease-in-out infinite;
          transform-origin: top center;
        }

        /* ── Marquee ── */
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
        }
        .marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: marquee-ltr var(--duration, 55s) linear infinite;
        }
        .marquee-reverse .marquee-track {
          animation-name: marquee-rtl;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee-ltr {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* ── Testimonial card ── */
        .testimonial-card {
          position: relative;
          flex-shrink: 0;
          width: 300px;
          background: #fff;
          border: 1px solid rgba(39, 37, 43, 0.07);
          border-top: 2px solid #71B1A5;
          padding: 28px 28px 24px;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          overflow: hidden;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(113, 177, 165, 0.12);
        }
        .testimonial-card--dark {
          background: #27252B;
          border-color: transparent;
          border-top-color: #71B1A5;
        }
        .testimonial-card--dark:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }
        .testimonial-quote {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-style: italic;
          color: rgba(113, 177, 165, 0.20);
          font-size: 5rem;
          line-height: 1;
          position: absolute;
          top: -4px;
          left: 20px;
          user-select: none;
          pointer-events: none;
        }
        .testimonial-quote--dark {
          color: rgba(113, 177, 165, 0.12);
        }

        /* ── Respeto prefers-reduced-motion ── */
        @media (prefers-reduced-motion: reduce) {
          .hero-item {
            animation: none;
            opacity: 1;
          }
          .scroll-line {
            animation: none;
          }
          .marquee-track {
            animation-play-state: paused;
          }
        }
      `,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: 'La Seda · Psicología y Crecimiento en Granada',
        description:
          'Centro de psicología y crecimiento personal en Granada. Terapias clínicas, talleres y formaciones para profesionales.',
        url: 'https://www.laseda.es',
        telephone: '+34-679-571-977',
        email: 'hola@laseda.es',
        medicalSpecialty: 'Psychiatry',
        priceRange: '€€',
        image: 'https://www.laseda.es/images/hero-portada-centro-psicologia-granada-la-seda.jpg',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Granada',
          addressRegion: 'Andalucía',
          postalCode: '18001',
          addressCountry: 'ES',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 37.1773,
          longitude: -3.5986,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '20:00',
          },
        ],
        sameAs: [
          'https://www.instagram.com/centrolaseda',
          'https://www.facebook.com/CentroLaSeda',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '10',
          bestRating: '5',
          worstRating: '1',
        },
      }),
    },
  ],
})

// ─── Valores ─────────────────────────────────────────────
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

// ─── Testimonios fila 1 (tarjetas blancas) ───────────────
const testimoniosRow1 = [
  {
    id: 1,
    text: 'Encontrar La Seda fue un punto de inflexión. Por fin un lugar en Granada donde te escuchan de verdad, sin prisas y con una profundidad que no había encontrado antes.',
    initials: 'M.L.',
    name: 'M. L.',
    role: 'Terapia Individual',
  },
  {
    id: 2,
    text: 'Como psicóloga, la formación de especialización ha sido la más completa que he realizado. Contenidos rigurosos, supervisión real y un enfoque humano que se nota en cada clase.',
    initials: 'C.M.',
    name: 'C. M.',
    role: 'Formación Profesional',
  },
  {
    id: 3,
    text: 'La atención infanto-juvenil que recibió mi hijo fue transformadora. Nos dieron herramientas como familia y vimos cambios reales en pocas semanas.',
    initials: 'P.G.',
    name: 'P. G.',
    role: 'Terapia Infanto-Juvenil',
  },
  {
    id: 4,
    text: 'Vine con mucho escepticismo y me fui con una perspectiva completamente nueva. El trabajo terapéutico es serio, cálido y muy profesional a la vez.',
    initials: 'J.V.',
    name: 'J. V.',
    role: 'Terapia Individual',
  },
  {
    id: 5,
    text: 'Después de años buscando apoyo, La Seda fue el primer centro donde sentí que realmente entendían lo que me pasaba. Un equipo extraordinario.',
    initials: 'R.B.',
    name: 'R. B.',
    role: 'Terapia de Pareja',
  },
]

// ─── Testimonios fila 2 (tarjetas oscuras) ───────────────
const testimoniosRow2 = [
  {
    id: 6,
    text: 'El taller de Constelaciones Familiares me ayudó a comprender patrones que arrastraba desde la infancia. Una experiencia transformadora que recomiendo a cualquier persona.',
    initials: 'A.R.',
    name: 'A. R.',
    role: 'Talleres Vivenciales',
  },
  {
    id: 7,
    text: 'El espacio en sí mismo transmite calma. Desde el momento en que entras notas que es un lugar concebido para el bienestar. Eso también cura.',
    initials: 'L.F.',
    name: 'L. F.',
    role: 'Terapia Individual',
  },
  {
    id: 8,
    text: 'Gracias al trabajo con mi psicóloga de La Seda pude gestionar la ansiedad que me paralizaba. Ahora entiendo mis emociones en lugar de temerlas.',
    initials: 'S.P.',
    name: 'S. P.',
    role: 'Terapia Individual',
  },
  {
    id: 9,
    text: 'La terapia de pareja nos ayudó a comunicarnos de forma completamente diferente. Aprendimos a escucharnos de verdad por primera vez en años.',
    initials: 'E.T.',
    name: 'E. T.',
    role: 'Terapia de Pareja',
  },
  {
    id: 10,
    text: 'Asistí a la formación en mindfulness y cambió mi práctica clínica por completo. Los profesores son referencias reales en sus campos.',
    initials: 'N.O.',
    name: 'N. O.',
    role: 'Formación Profesional',
  },
]
</script>