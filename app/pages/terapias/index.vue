<script setup lang="ts">
// ─── SEO & METADATOS ULTRA-OPTIMIZADOS PARA LA PÁGINA DE TERAPIAS ────────────
useSeoMeta({
  title: 'Terapia infantil, adolescentes, adultos y pareja en Granada y online | Centro La Seda',
  ogTitle: 'Terapia Infantil, Pareja, Adultos y Gestalt en Granada | Centro La Seda',
  description: 'Centro de psicología en Granada especializado en terapia infantil, psicología para adolescentes, terapia de pareja, terapia Gestalt y adultos desde un enfoque integrativo y eficaz.',
  ogDescription: 'Encuentra tu psicólogo en Granada. Especialistas en terapia infantil, terapia de pareja, adultos, adolescentes y enfoque sistémico-humanista en Centro La Seda.',
  ogImage: '/images/psicoterapia-integrativa-adultos-pareja-granada.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Especialidades Clínicas y Psicoterapia en Granada | La Seda',
  twitterDescription: 'Terapia infantil, de pareja, adolescentes y psicoterapia integrativa en Granada. Consulta nuestro equipo de psicólogos colegiados.',
  robots: 'index, follow'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://centrolaseda.com/terapias' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
})
</script>

<template>
  <main>

    <PageHero
      label="Terapias psicológicas y acompañamiento emocional"
      title-main="Comprender y transformar "
      title-accent="lo que estás viviendo"
      image="/images/psicoterapia-integrativa-adultos-pareja-granada.jpg"
      image-alt="Sala de terapia del Centro de Psicología La Seda en Granada"
      secondary-link="/contacto"
      secondary-label="Hablemos"
    >
      <template #description>
        Cada persona llega con una historia diferente. En La Seda entendemos la terapia como un espacio para comprender lo que estás viviendo, reconocer tus recursos y abrir nuevas posibilidades.
      </template>
    </PageHero>


    <section
      class="bg-[#27252B]/[0.03] py-20 md:py-32 overflow-hidden"
      aria-labelledby="especialidades-heading"
    >
      <div class="page-container">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 md:mb-24">
          <div>
            <p class="section-label mb-3">Áreas de atención</p>
            <h2 id="especialidades-heading" class="section-title">
              Una terapia para cada etapa de la vida.
            </h2>
          </div>
          <div class="w-24 h-px bg-[#27252B]/20 md:mb-2" aria-hidden="true" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div class="space-y-12 lg:space-y-32">
            
            <NuxtLink
              to="/terapias/infantil"
              class="training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 block"
              aria-label="Saber más sobre Terapia Infantil en Granada"
            >
              <div class="overflow-hidden aspect-[16/10] relative">
                <div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" />
                <NuxtImg
                  src="/images/terapia-infantil-psicologia-ninos-granada-centro-la-seda.jpg"
                  alt="Terapia infantil y psicología para niños, Centro de Psicología La Seda Granada"
                  width="800"
                  height="500"
                  format="webp"
                  loading="lazy"
                  class="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div class="p-8 md:p-10 flex flex-col flex-1 gap-5">
                <div class="section-divider" aria-hidden="true" />
                <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug">Infancia</h3>
                
                <p class="text-[14px] leading-relaxed text-[#27252B]/70">
Acompañamos a niños y niñas a comprender lo que sienten, expresar lo que necesitan y crecer junto a sus familias desde una mirada humanista e integrativa.                </p>

                <div class="flex flex-wrap gap-2 my-1">
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Miedos</span>
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Acoso escolar (Bullying)</span>
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Separaciones</span>
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Límites</span>
                </div>

                <div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5">
                  Especialistas: <span class="font-normal text-[#27252B]/70">A. Jiménez, C. Lence, M.N. Reyes</span>
                </div>
                <span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300">
                  Saber más
                  <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" />
                </span>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/terapias/adultos"
              class="training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 block"
              aria-label="Saber más sobre Terapia psicológica y acompañamiento emocional para adultos"
            >
              <div class="overflow-hidden aspect-[16/10] relative">
                <div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" />
                <NuxtImg
                  src="/images/terapia-acompanamiento-adulto-psicologia-granada-la-seda.jpg"
                  alt="Terapia individual y acompañamiento psicológico para adultos, Centro La Seda Granada"
                  width="800"
                  height="500"
                  format="webp"
                  loading="lazy"
                  class="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div class="p-8 md:p-10 flex flex-col flex-1 gap-5">
                <div class="section-divider" aria-hidden="true" />
                <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug">Adultos</h3>
                
                <p class="text-[14px] leading-relaxed text-[#27252B]/70">
La vida nos enfrenta a momentos de dificultad, cambio e incertidumbre. Acompañamos a cada persona a comprender lo que está viviendo, elaborar aquello que genera sufrimiento y descubrir nuevas formas de relacionarse consigo misma y con los demás.                </p>

                <div class="flex flex-wrap gap-2 my-1">
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Ansiedad y estrés</span>
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Trauma</span>
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Autoconocimiento</span>
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Crisis vitales</span>
                </div>

                <div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5">
                  Especialistas: <span class="font-normal text-[#27252B]/70">A. Jiménez, M.N. Reyes, C. Lence, L. Cabrera...</span>
                </div>
                <span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300">
                  Saber más
                  <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" />
                </span>
              </div>
            </NuxtLink>

          </div>

          <div class="space-y-12 lg:space-y-32 lg:mt-32">

            <NuxtLink
              to="/terapias/adolescentes"
              class="training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 block"
              aria-label="Saber más sobre Terapia Psicológica para Adolescentes"
            >
              <div class="overflow-hidden aspect-[16/10] relative">
                <div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" />
                <NuxtImg
                  src="/images/terapia-psicologica-adolescentes-granada-centro-la-seda.jpg"
                  alt="Terapia psicológica para adolescentes en Granada, Centro de Psicología La Seda"
                  width="800"
                  height="500"
                  format="webp"
                  loading="lazy"
                  class="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div class="p-8 md:p-10 flex flex-col flex-1 gap-5">
                <div class="section-divider" aria-hidden="true" />
                <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug">Adolescencia</h3>
                
                <p class="text-[14px] leading-relaxed text-[#27252B]/70">
La adolescencia es una etapa de cambios, búsqueda y construcción de la identidad. Acompañamos a adolescentes a comprender lo que están viviendo, fortalecer la confianza en sí mismos y desarrollar los recursos necesarios para afrontar esta etapa, contando también con sus familias.                </p>

                <div class="flex flex-wrap gap-2 my-1">
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Ansiedad</span>
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Autoestima</span>
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Relaciones familiares</span>
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Gestión emocional</span>
                </div>

                <div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5">
                  Especialistas: <span class="font-normal text-[#27252B]/70">A. Jiménez, C. Lence, M.N. Reyes</span>
                </div>
                <span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300">
                  Saber más
                  <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" />
                </span>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/terapias/pareja-familia"
              class="training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 block"
              aria-label="Saber más sobre Terapia de Pareja y Familia"
            >
              <div class="overflow-hidden aspect-[16/10] relative">
                <div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" />
                <NuxtImg
                  src="/images/terapia-pareja-familia-sistemica-granada-centro-la-seda.jpg"
                  alt="Terapia de pareja y familia con enfoque sistémico, Centro de Psicología La Seda Granada"
                  width="800"
                  height="500"
                  format="webp"
                  loading="lazy"
                  class="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div class="p-8 md:p-10 flex flex-col flex-1 gap-5">
                <div class="section-divider" aria-hidden="true" />
                <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug">Pareja y Familia</h3>
                
                <p class="text-[14px] leading-relaxed text-[#27252B]/70">
Las relaciones atraviesan momentos de dificultad, cambio y crecimiento. Acompañamos a parejas y familias a comprender las dinámicas que generan sufrimiento, fortalecer la comunicación y construir nuevas formas de encontrarse y cuidarse.                </p>

                <div class="flex flex-wrap gap-2 my-1">
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Comunicación</span>
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Conflictos familiares</span>
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Crianza</span>
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Separaciones</span>
                  <span class="text-[11px] bg-[#27252B]/5 text-[#27252B]/80 px-3 py-1 rounded-full font-medium">Duelo</span>
                </div>

                <div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5">
                  Especialistas: <span class="font-normal text-[#27252B]/70">L. Cabrera, R. Sánchez-Tallón</span>
                </div>
                <span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300">
                  Saber más
                  <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" />
                </span>
              </div>
            </NuxtLink>

          </div>
        </div>

        <div class="mt-20 lg:mt-32 max-w-3xl mx-auto">
          <NuxtLink
            to="/contacto"
            class="training-card group relative flex flex-col items-center justify-center text-center bg-[#71B1A5] rounded-sm p-10 md:p-16 min-h-[380px] transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/20 block overflow-hidden"
            aria-label="Escríbenos para orientación sobre qué terapia elegir"
          >
            <div class="absolute -bottom-10 font-serif italic text-[18rem] text-[#FDFBF9]/5 leading-none select-none pointer-events-none z-0">
              &
            </div>
            
            <div class="relative z-10 space-y-6 max-w-xl flex flex-col items-center">
              <div class="w-12 h-px bg-[#FDFBF9]/60" />
              <h3 class="font-serif italic text-[#FDFBF9] text-3xl md:text-4xl leading-tight">
                ¿No sabes qué tipo de terapia puede ayudarte?
              </h3>
              <p class="text-base md:text-lg text-[#FDFBF9]/90 font-light leading-relaxed">
Cada proceso es diferente. Cuéntanos qué estás viviendo y te orientaremos para encontrar el acompañamiento que mejor se adapte a tu situación.              </p>
            </div>

            <div class="relative z-10 pt-8">
              <span class="btn-secondary !bg-white/95 !border-transparent hover:!bg-white text-[#27252B] hover:scale-105 shadow-xl transition-transform">
                Hablemos
              </span>
            </div>
          </NuxtLink>
        </div>

      </div>
    </section>

    <section
      class="page-container py-20 md:py-32"
      aria-labelledby="metodologia-heading"
    >
      <div class="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

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

        <div class="order-1 md:order-2">
          <p class="section-label mb-4">Así lo hacemos</p>
          <h2 id="metodologia-heading" class="section-title mb-12">
            Nuestro modo <br />
            <span class="text-[#27252B]/60">de acompañar</span>
          </h2>

          <ol class="space-y-10" aria-label="Pasos del proceso terapéutico">

            <li class="flex gap-6 items-start">
              <div class="shrink-0" aria-hidden="true">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">01</span>
              </div>
              <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Primera encuentro
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  Nos tomamos el tiempo necesario para conocerte, comprender qué estás viviendo y escuchar tu historia. Cada proceso comienza desde el respeto, la confianza y una mirada atenta a tu realidad.
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
                  Un trabajo a tu medida
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  No existen soluciones iguales para todas las personas. Definimos juntos el camino a seguir, integrando el enfoque terapéutico que mejor responda a tus necesidades y al momento vital en el que te encuentras.
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
                  El proceso terapéutico
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  La terapia es un espacio para comprender, elaborar y experimentar nuevas formas de relacionarte contigo, con los demás y con aquello que estás viviendo. Cada proceso avanza a su propio ritmo.
                </p>
              </div>
            </li>

          </ol>
        </div>

      </div>

      <div class="mt-16 md:mt-24 pt-12 border-t border-[#27252B]/10 flex justify-center w-full">
        <NuxtLink
          to="/contacto"
          class="group btn-primary !inline-flex"
          aria-label="Ir a contacto para comenzar el proceso terapéutico"
        >
          <span>Comenzar el proceso</span>
          <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-white pointer-events-none">
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </NuxtLink>
      </div>
    </section>

  </main>
</template>

<style scoped>
@media (min-width: 768px) {
  .page-hero-root {
    display: flex;
  }
  .page-hero-panel,
  .page-hero-panel-right {
    width: 50%;
    flex-shrink: 0;
  }
}
</style>