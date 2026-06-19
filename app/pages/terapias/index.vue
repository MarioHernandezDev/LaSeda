<script setup lang="ts">
useSeoMeta({
  title: 'Psicoterapia y Especialidades Clínicas en Granada | Centro La Seda',
  ogTitle: 'Psicoterapia y Especialidades Clínicas en Granada | Centro La Seda',
  description: 'Terapia individual, infantil, de pareja, adolescentes y grupal en Granada. Enfoque integrativo con EMDR, Gestalt y sistémica. Pide cita en Centro La Seda.',
  ogDescription: 'Terapia individual, infantil, de pareja, adolescentes y grupal en Granada. Enfoque integrativo con EMDR, Gestalt y sistémica. Pide cita en Centro La Seda.',
  ogImage: '/images/centro-psicologia-la-seda-granada-hero.jpg',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://centrolaseda.com/terapias' }
  ]
})
</script>

<template>
  <main>

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · MINI-HERO
    ════════════════════════════════════════════════ -->
    <PageHero
      label="Especialidades Clínicas"
      title-main="Procesos de Psicoterapia"
      title-accent="y Cuidado Psicológico"
      image="/images/centro-psicologia-la-seda-granada-hero.jpg"
      image-alt="Sala de terapia del Centro de Psicología La Seda en Granada"
      secondary-link="/contacto"
      secondary-label="Pedir primera cita"
    >
      <template #description>
        Acompañamos cada etapa vital desde un espacio de escucha activa,
        rigor clínico y profundo respeto por la singularidad de cada persona.
      </template>
    </PageHero>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 2 · INTRODUCCIÓN AL ENFOQUE
    ════════════════════════════════════════════════ -->
    <SeccionIntro
      id-heading="terapia-heading"
      titulo="Terapia integrativa adaptada a tu momento vital."
      :parrafos="[
        'En La Seda trabajamos desde la psicología integrativa, combinando las herramientas más adecuadas de diferentes corrientes para cada persona. No existe una única forma de sanar: nuestro compromiso es encontrar el camino que mejor resuene con tu historia y tus necesidades actuales.',
        'El enfoque cognitivo-conductual, el humanista, la perspectiva sistémica y el protocolo EMDR guían nuestra práctica cotidiana. Esta pluralidad nos permite ofrecer un acompañamiento personalizado, respaldado por evidencia científica y con una profunda calidez humana.'
      ]"
    />


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 3 · REJILLA DE TERAPIAS
    ════════════════════════════════════════════════ -->
    <section
      class="bg-[#27252B]/[0.03] py-20 md:py-28"
      aria-labelledby="especialidades-heading"
    >
      <div class="page-container">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-16">
          <div>
            <p class="section-label mb-3">Nuestras Especialidades</p>
            <h2 id="especialidades-heading" class="section-title">
              Áreas de intervención
            </h2>
          </div>
          <div class="w-24 h-px bg-[#27252B]/20 md:mb-2" aria-hidden="true" />
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <!-- Tarjeta 1: Terapia Adulto -->
          <article class="training-card group" aria-label="Especialidad: Terapia y Acompañamiento Adulto">
            <div class="overflow-hidden aspect-[4/3]">
              <NuxtImg
                src="/images/terapia-acompanamiento-adulto-psicologia-granada-la-seda.jpg"
                alt="Terapia individual y acompañamiento psicológico para adultos, Centro La Seda Granada"
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
                Terapia y Acompañamiento Adulto
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                Un espacio para resolver conflictos internos y relacionales,
                conectar con tus emociones y avanzar hacia una vida más plena.
                Trabajamos con sesiones de terapia, coaching y acompañamiento
                emocional adaptadas a tu momento.
              </p>
              <NuxtLink
                to="/terapias/adultos"
                class="team-card-link self-start"
                aria-label="Saber más sobre terapia y acompañamiento para adultos"
              >
                Saber más
              </NuxtLink>
            </div>
          </article>

          <!-- Tarjeta 2: Terapia Adolescentes -->
          <article class="training-card group" aria-label="Especialidad: Terapia Psicológica para Adolescentes">
            <div class="overflow-hidden aspect-[4/3]">
              <NuxtImg
                src="/images/terapia-psicologica-adolescentes-granada-centro-la-seda.jpg"
                alt="Terapia psicológica para adolescentes en Granada, Centro de Psicología La Seda"
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
                Terapia Adolescentes
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                ¿Tu hijo adolescente parece distante, se salta las normas y
                sientes que no logras conectar con él o con ella? Acompañamos
                a jóvenes y familias para encontrar nuevas formas de
                comunicación y entendimiento.
              </p>
              <NuxtLink
                to="/terapias/adolescentes"
                class="team-card-link self-start"
                aria-label="Saber más sobre terapia psicológica para adolescentes"
              >
                Saber más
              </NuxtLink>
            </div>
          </article>

          <!-- Tarjeta 3: Terapia de Pareja y Familia -->
          <article class="training-card group" aria-label="Especialidad: Terapia de Pareja y Familia">
            <div class="overflow-hidden aspect-[4/3]">
              <NuxtImg
                src="/images/terapia-pareja-familia-sistemica-granada-centro-la-seda.jpg"
                alt="Terapia de pareja y familia con enfoque sistémico, Centro de Psicología La Seda Granada"
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
                Terapia de Pareja y Familia
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                Exploramos los objetivos, beneficios y dinámica de la terapia
                de pareja y familiar: un espacio para mejorar la comunicación,
                gestionar conflictos y fortalecer los vínculos desde
                un enfoque sistémico.
              </p>
              <NuxtLink
                to="/terapias/pareja-familia"
                class="team-card-link self-start"
                aria-label="Saber más sobre terapia de pareja y familia sistémica"
              >
                Saber más
              </NuxtLink>
            </div>
          </article>

          <!-- Tarjeta 4: Terapia Infantil -->
          <article class="training-card group" aria-label="Especialidad: Terapia Infantil">
            <div class="overflow-hidden aspect-[4/3]">
              <NuxtImg
                src="/images/terapia-infantil-psicologia-ninos-granada-centro-la-seda.jpg"
                alt="Terapia infantil y psicología para niños, Centro de Psicología La Seda Granada"
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
                Terapia Infantil
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                Estamos especializadas en trabajar con las emociones humanas,
                especialmente aquellas que generan malestar en el día a día
                de los más pequeños y que les impiden desarrollarse con
                plenitud y seguridad.
              </p>
              <NuxtLink
                to="/terapias/infantil"
                class="team-card-link self-start"
                aria-label="Saber más sobre terapia infantil y psicología para niños"
              >
                Saber más
              </NuxtLink>
            </div>
          </article>

          <!-- Tarjeta 5: Terapia Grupal -->
          <article class="training-card group" aria-label="Especialidad: Terapia Grupal">
            <div class="overflow-hidden aspect-[4/3]">
              <NuxtImg
                src="/images/terapia-grupal-psicologia-grupo-granada-centro-la-seda.jpg"
                alt="Terapia grupal y psicología de grupo, Centro de Psicología La Seda Granada"
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
                Terapia Grupal
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                La terapia grupal en La Seda se apoya en el encuentro con
                otros como fuente de aprendizaje y sostén. Un espacio donde
                compartir, escuchar y crecer en compañía, guiados por
                principios terapéuticos sólidos.
              </p>
              <NuxtLink
                to="/terapias/grupal"
                class="team-card-link self-start"
                aria-label="Saber más sobre terapia grupal en Granada"
              >
                Saber más
              </NuxtLink>
            </div>
          </article>

          <!-- Tarjeta CTA decorativa -->
          <article class="bg-[#71B1A5] flex flex-col justify-between p-7 min-h-[360px]" aria-label="¿No encuentras lo que buscas? Contáctanos">
            <div class="w-6 h-px bg-[#FDFBF9]/60" aria-hidden="true" />
            <div class="space-y-5">
              <h3 class="font-serif italic text-[#FDFBF9] text-2xl leading-snug">
                ¿No encuentras lo que buscas?
              </h3>
              <p class="text-base leading-[1.85] text-[#FDFBF9]/80">
                Cuéntanos tu situación. Valoraremos juntos el tipo de
                acompañamiento que mejor se adapta a lo que estás viviendo.
              </p>
              <NuxtLink
                to="/contacto"
                class="inline-block text-sm tracking-[0.18em] uppercase text-[#FDFBF9] border-b border-[#FDFBF9]/50 pb-0.5 hover:border-[#FDFBF9] transition-colors duration-200"
                aria-label="Escríbenos para orientación sobre qué terapia elegir"
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
         SECCIÓN 4 · CÓMO TRABAJAMOS
    ════════════════════════════════════════════════ -->
    <section
      class="page-container py-20 md:py-32"
      aria-labelledby="metodologia-heading"
    >
      <div class="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

        <!-- Imagen con marco desfasado -->
        <div class="relative order-2 md:order-1">
          <div class="absolute -top-4 -left-4 w-full h-full border border-[#71B1A5]/40 pointer-events-none z-0" aria-hidden="true" />
          <div class="relative z-10 overflow-hidden aspect-[3/4]">
            <NuxtImg
              src="/images/espacio-formacion-presencial-psicologia-la-seda-granada.jpg"
              alt="Sesión de psicoterapia individual en el Centro de Psicología La Seda, Granada"
              width="600"
              height="800"
              format="webp"
              loading="lazy"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-[#27252B]/5 pointer-events-none" aria-hidden="true" />
          </div>
          <div class="absolute bottom-6 -right-5 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3 z-20 hidden md:block" aria-hidden="true">
            <p class="text-xs tracking-[0.2em] uppercase text-[#71B1A5]">Centro de Psicología</p>
            <p class="font-serif italic text-[#27252B] text-sm mt-0.5">La Seda · Granada</p>
          </div>
        </div>

        <!-- Columna de contenido -->
        <div class="order-1 md:order-2">
          <p class="section-label mb-4">Metodología</p>
          <h2 id="metodologia-heading" class="section-title mb-12">
            Cómo trabajamos<br />
            <span class="text-[#27252B]/60">en La Seda</span>
          </h2>

          <ol class="space-y-10" aria-label="Pasos del proceso terapéutico">

            <li class="flex gap-6 items-start">
              <div class="shrink-0" aria-hidden="true">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">01</span>
              </div>
              <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Primera Valoración
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  Analizamos juntos el motivo de consulta, tu historia personal
                  y el contexto en el que se enmarca lo que traes. Sin prisas,
                  con total confidencialidad.
                </p>
              </div>
            </li>

            <li>
              <div class="w-full h-px bg-[#27252B]/8" aria-hidden="true" />
            </li>

            <li class="flex gap-6 items-start">
              <div class="shrink-0" aria-hidden="true">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">02</span>
              </div>
              <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Propuesta Terapéutica
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  Establecemos objetivos claros y acordados, eligiendo el
                  enfoque o la combinación de enfoques más adecuados para
                  tu proceso específico.
                </p>
              </div>
            </li>

            <li>
              <div class="w-full h-px bg-[#27252B]/8" aria-hidden="true" />
            </li>

            <li class="flex gap-6 items-start">
              <div class="shrink-0" aria-hidden="true">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">03</span>
              </div>
              <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Sesiones de Acompañamiento
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  Un espacio de trabajo activo donde adquieres herramientas
                  reales, revisas tus patrones y avanzas hacia los cambios
                  que deseas a tu propio ritmo.
                </p>
              </div>
            </li>

          </ol>

          <div class="mt-12 pt-8 border-t border-[#27252B]/10">
            <NuxtLink
              to="/contacto"
              class="inline-flex items-center gap-4 group"
              aria-label="Ir a contacto para comenzar el proceso terapéutico"
            >
              <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
                Comenzar el proceso
              </span>
              <span class="w-10 h-px bg-[#27252B]/40 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>

      </div>
    </section>

  </main>
</template>