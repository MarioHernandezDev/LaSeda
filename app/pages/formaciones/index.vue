<script setup lang="ts">
import { useSeoMeta, useHead } from '#app'

// ─── SEO & METADATOS ULTRA-OPTIMIZADOS ───────────────────────────────────────
useSeoMeta({
  title: 'Formación para Psicólogos y Terapia Gestalt Infantil en Granada 2026 | La Seda',
  ogTitle: 'Formación para Psicólogos y Terapia Gestalt Infantil en Granada 2026 | La Seda',
  description: 'Cursos y formaciones de psicología en Granada. Especialización en Terapia Gestalt infantil y juvenil, y certificación oficial del Método Wingwave® en Centro La Seda.',
  ogDescription: 'Impulsa tu práctica clínica con nuestras formaciones presenciales en Granada. Especialización profesional en Terapia Gestalt Infantil y Certificación Internacional Wingwave®.',
  ogImage: '/images/formacion-psicologia-presencial-granada-la-seda.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Formación en Psicología Clinical y Especialización en Granada',
  twitterDescription: 'Programas presenciales 2026 para profesionales de la salud mental y educación. Gestalt infantil y certificación internacional Wingwave®.',
  robots: 'index, follow'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://centrolaseda.com/formaciones' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
})

// Función de seguridad para garantizar el scroll superior instantáneo
const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}
</script>

<template>
  <main>

    <PageHero
      label="Programas de Especialización y Formación"
      title-main="Formarse es también"
      title-accent="un acto de cuidado propio."
      image="/images/formacion-psicologia-presencial-granada-la-seda.jpg"
      image-alt="Alumnos en el aula presencial del Centro La Seda durante una formación de psicología y terapia integrativa en Granada"
      secondary-link="/contacto"
      secondary-label="Reservar"
    >
      <template #description>
        Programas presenciales diseñados para integrar teoría, práctica
        y crecimiento personal genuino. Convocatoria 2026 · Granada.
      </template>
    </PageHero>

    <SeccionIntro
      id-heading="formaciones-heading"
      titulo="Formaciones que no solo enseñan: transforman."
      :parrafos="[
        'Nuestros programas nacen de la convicción de que el conocimiento profesional de calidad solo se asimila cuando va acompañado de vivencia clínica. Teoría, práctica y supervisión se entrelazan en cada formación para impulsar tanto tu destreza técnica como tu madurez personal.',
        'Si buscas ampliar tu especialización o incorporar herramientas avaladas científicamente a tu consulta, aquí encontrarás un entorno riguroso, cercano y comprometido con la excelencia.'
      ]"
      cita="Lo que necesita nuestro tiempo son seres más bondadosos, no seres más inteligentes."
      cita-autor="Claudio Naranjo · Psiquiatra y humanista"
    />

    <section
      class="bg-[#27252B]/[0.03] py-20 md:py-32 overflow-hidden"
      aria-labelledby="programas-heading"
    >
      <div class="page-container">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 md:mb-24">
          <div>
            <p class="section-label mb-3">Nuestros Programas</p>
            <h2 id="programas-heading" class="section-title">
              Convocatorias Abiertas 2026
            </h2>
          </div>
          <div class="w-24 h-px bg-[#27252B]/20 md:mb-2" aria-hidden="true" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div class="space-y-12 lg:space-y-32">
            <NuxtLink
              to="/formaciones/gestalt-infantil"
              @click="scrollToTop"
              class="training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5"
              aria-label="Ver programa de Terapia Gestalt Infantil y Adolescente"
            >
              <div class="overflow-hidden aspect-[16/10] relative">
                <div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" />
                <NuxtImg
                  src="/images/formacion-terapia-gestalt-infancia-adolescencia-granada.jpg"
                  alt="Formación presencial en Terapia Gestalt aplicada a infancia y adolescencia, Centro La Seda Granada"
                  width="800"
                  height="500"
                  format="webp"
                  loading="lazy"
                  class="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div class="p-8 md:p-10 flex flex-col flex-1 gap-5">
                <div class="section-divider" aria-hidden="true" />
                <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug">Terapia Gestalt Infantil y Adolescente</h3>
                <p class="text-base leading-[1.85] text-[#27252B]/75 flex-1">
                  Un paseo por la infancia y la adolescencia desde la comprensión teórica hasta la práctica clínica más humana y sistémica. Recursos prácticos como juego, creatividad, técnicas proyectivas y supervisión de la mano de profesionales de referencia.
                </p>
                <div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1">
                  <span>Módulos: <span class="font-normal text-[#27252B]/70">288h · 15 talleres</span></span>
                  <span class="text-[#27252B]/20">•</span>
                  <span>Imparte: <span class="font-normal text-[#27252B]/70">Ana Mª Jiménez y colabs.</span></span>
                </div>
                <span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300">
                  Ver Programa Completo
                  <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" />
                </span>
              </div>
            </NuxtLink>
          </div>

          <div class="space-y-12 lg:space-y-32 lg:mt-32">
            <NuxtLink
              to="/formaciones/metodo-wingwave"
              @click="scrollToTop"
              class="training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5"
              aria-label="Saber más sobre la Formación Certificada Oficial en Método Wingwave"
            >
              <div class="overflow-hidden aspect-[16/10] relative">
                <div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" />
                <NuxtImg
                  src="/images/formacion-certificada-metodo-wingwave-coaching-granada.jpg"
                  alt="Formación certificada oficial en el Método Wingwave, técnica avalada científicamente, Centro La Seda Granada"
                  width="800"
                  height="500"
                  format="webp"
                  loading="lazy"
                  class="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div class="p-8 md:p-10 flex flex-col flex-1 gap-5">
                <div class="section-divider" aria-hidden="true" />
                <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug">Método Wingwave® Certificación</h3>
                <p class="text-base leading-[1.85] text-[#27252B]/75 flex-1">
                  Herramienta efectiva para regular el estrés emocional, procesar bloqueos y fobias de forma rápida. Metodología estructurada mediante estimulación bilateral y test O-Ring. Con Acreditación Internacional.
                </p>
                <div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1">
                  <span>Formato: <span class="font-normal text-[#27252B]/70">32h · 4 días intensivos</span></span>
                  <span class="text-[#27252B]/20">•</span>
                  <span>Garantía: <span class="font-normal text-[#27252B]/70">Sello ISO 29993</span></span>
                </div>
                <span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300">
                  Saber más y contenidos
                  <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" />
                </span>
              </div>
            </NuxtLink>
          </div>

        </div>

        <div class="mt-20 lg:mt-32 max-w-3xl mx-auto">
          <NuxtLink
            to="/contacto"
            @click="scrollToTop"
            class="training-card group relative flex flex-col items-center justify-center text-center bg-[#71B1A5] rounded-sm p-10 md:p-16 min-h-[380px] transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/20 overflow-hidden"
            aria-label="Escríbenos para orientación formativa"
          >
            <div class="absolute -bottom-10 font-serif italic text-[18rem] text-[#FDFBF9]/5 leading-none select-none pointer-events-none z-0">
              &
            </div>
            
            <div class="relative z-10 space-y-6 max-w-xl flex flex-col items-center">
              <div class="w-12 h-px bg-[#FDFBF9]/60" />
              <h3 class="font-serif italic text-[#FDFBF9] text-3xl md:text-4xl leading-tight">
                ¿Tienes dudas sobre qué programa se adapta a tu perfil?
              </h3>
              <p class="text-base md:text-lg text-[#FDFBF9]/90 font-light leading-relaxed">
                Cuéntanos tu formación previa y tus objetivos profesionales. Te orientaremos de manera personalizada y te enviaremos los dossiers informativos con planes de financiación.
              </p>
            </div>

            <div class="relative z-10 pt-8">
              <div class="btn-secondary inline-block !bg-white/95 !border-transparent hover:!bg-white text-[#27252B] hover:scale-105 shadow-xl transition-transform">
                Escríbenos ahora
              </div>
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
              alt="Sala de formación presencial del Centro de Psicología La Seda Granada"
              width="600"
              height="800"
              format="webp"
              loading="lazy"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-[#27252B]/5 pointer-events-none" aria-hidden="true" />
          </div>
          <div class="absolute bottom-6 -right-5 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3 z-20 hidden md:block" aria-hidden="true">
            <p class="text-xs tracking-[0.2em] uppercase text-[#71B1A5]">Formación Avanzada</p>
            <p class="font-serif italic text-[#27252B] text-sm mt-0.5">La Seda · Granada</p>
          </div>
        </div>

        <div class="order-1 md:order-2">
          <p class="section-label mb-4">Metodología</p>
          <h2 id="metodologia-heading" class="section-title mb-12">
            Un espacio para crecer,<br />
            <span class="text-[#27252B]/60">no solo para aprender</span>
          </h2>

          <ol class="space-y-10" aria-label="Valores del centro formativo">
            <li class="flex gap-6 items-start pb-8 border-b border-[#27252B]/8">
              <div class="shrink-0" aria-hidden="true">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">288</span>
              </div>
              <div class="pt-2 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Horas Avaladas en Especialidad Gestalt
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  240 horas de docencia directa presencial sumadas a 48 horas de desarrollo de proyecto práctico clínico, repartidas en 15 talleres monográficos.
                </p>
              </div>
            </li>

            <li class="flex gap-6 items-start pb-8 border-b border-[#27252B]/8">
              <div class="shrink-0" aria-hidden="true">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">14+</span>
              </div>
              <div class="pt-2 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Estudios Universitarios Científicos
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  La validez del método Wingwave® está sólidamente respaldada por más de 14 investigaciones independientes y auditada bajo la norma educativa ISO 29993.
                </p>
              </div>
            </li>

            <li class="flex gap-6 items-start">
              <div class="shrink-0" aria-hidden="true">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">10</span>
              </div>
              <div class="pt-2 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Docentes de Máximo Nivel Clínico
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  Aprende de un claustro interdisciplinar integrado por Ana Mª Jiménez, Leonor Cabrera, Oriol Bellés y reconocidos colaboradores activos de la psicología nacional.
                </p>
              </div>
            </li>
          </ol>
        </div>

      </div>

      <div class="mt-16 md:mt-24 pt-12 border-t border-[#27252B]/10 flex justify-center w-full">
        <NuxtLink
          to="/contacto"
          @click="scrollToTop"
          class="group btn-primary !inline-flex"
          aria-label="Ir a contacto para solicitar reserva de plaza"
        >
          <span>Reservar mi plaza</span>
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