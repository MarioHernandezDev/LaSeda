<template>
  <main>
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

    <SeccionIntro
      id-heading="nosotros-heading"
      titulo="Rigor científico con profundidad humana."
      :parrafos="[
        'La Seda nace para demostrar que la psicología más transformadora une la evidencia científica con una sensibilidad humana real. Nuestro equipo reúne a especialistas de corrientes sólidas —cognitivo-conductual, sistémica, humanista y mindfulness— bajo un mismo fin: consolidar cambios duraderos.',
        'Entendemos el bienestar como un todo integrado que abarca la terapia, la formación y el crecimiento interno. Desplegamos nuestra labor desde un espacio en Granada concebido en detalle para que te sientas en calma y calidez desde el primer paso.'
      ]"
    />

    <section
      class="bg-[#27252B]/[0.02] py-24 md:py-32"
      aria-labelledby="espacio-heading"
    >
      <div class="page-container">
        <div class="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          <div class="relative">
            <div
              class="absolute -top-4 -left-4 w-full h-full border border-[#71B1A5]/30 pointer-events-none z-0"
              aria-hidden="true"
            />
            <div class="relative z-10 overflow-hidden aspect-[3/4] rounded-sm">
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

          <div>
            <p class="section-label mb-4">El centro de psicología</p>
            <h2
              id="espacio-heading"
              class="font-serif italic text-3xl md:text-4xl leading-[1.2] mb-12 text-[#27252B]"
            >
              Un lugar pensado<br />
              <span class="text-[#27252B]/60">para el bienestar en Granada.</span>
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
                  <dt class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">Años de experiencia en Granada</dt>
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
                class="btn-secondary !inline-flex"
                aria-label="Reservar primera cita en el Centro de Psicología La Seda Granada"
              >
                <span>Reservar primera cita</span>
              </NuxtLink>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section
      class="py-24 md:py-36 bg-[#FDFBF9]"
      aria-labelledby="equipo-heading"
    >
      <div class="page-container">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-24 md:mb-32">
          <div>
            <p class="section-label mb-4">Profesionales acreditados</p>
            <h2
              id="equipo-heading"
              class="font-serif italic text-4xl md:text-5xl leading-[1.15] text-[#27252B]"
            >
              Psicólogos y terapeutas<br />
              <span class="text-[#27252B]/50">en Granada.</span>
            </h2>
          </div>
          <p class="text-[#27252B]/60 max-w-sm text-base leading-relaxed font-light md:text-right border-l md:border-l-0 md:border-r border-[#71B1A5]/30 pl-4 md:pl-0 md:pr-4 md:mb-1">
            Un equipo multidisciplinar especializado en psicología clínica, psicoterapia 
            y educación emocional comprometido con tu proceso.
          </p>
        </div>

        <ul
          class="flex flex-col gap-24 md:gap-36 list-none p-0 m-0"
          role="list"
          aria-label="Miembros del equipo de La Seda Granada"
        >
          <li 
            v-for="(miembro, index) in equipo" 
            :key="miembro.id"
            class="block"
          >
            <NuxtLink 
              :to="`/conocenos/${miembro.id}`"
              class="group relative flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24 transition-all duration-500 rounded-sm isolate cursor-pointer decoration-transparent block"
              :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
            >
              <div class="relative w-full md:w-[380px] lg:w-[420px] shrink-0 aspect-[3/4] z-10 overflow-visible">
                <div
                  class="absolute inset-0 border border-[#71B1A5]/20 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"
                  aria-hidden="true"
                />
                
                <div class="relative w-full h-full overflow-hidden bg-[#27252B]/5 z-10 rounded-sm">
                  <NuxtImg
                    :src="miembro.imagen"
                    :alt="miembro.imagenAlt"
                    class="w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                    width="420"
                    height="560"
                    format="webp"
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-[#27252B]/10 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div
                  class="absolute -top-3 left-6 md:-left-3 z-20 text-[10px] font-medium tracking-[0.2em] uppercase bg-[#71B1A5] text-white px-4 py-2 shadow-xs"
                >
                  {{ miembro.rol }}
                </div>
              </div>

              <div class="flex flex-col justify-between flex-1 py-2 w-full z-10">
                <div class="space-y-6">
                  <div>
                    <h3
                      class="font-serif italic text-3xl md:text-4xl text-[#27252B] leading-tight mb-2 group-hover:text-[#71B1A5] transition-colors duration-300"
                    >
                      {{ miembro.nombre }}
                    </h3>
                    <p class="text-xs font-medium tracking-[0.15em] text-[#71B1A5] uppercase">
                      {{ miembro.subtitulo }}
                    </p>
                  </div>

                  <blockquote class="relative pl-6 border-l border-[#71B1A5]/30">
                    <p class="font-serif italic text-[#27252B]/80 text-lg md:text-xl leading-relaxed">
                      “{{ miembro.cita }}”
                    </p>
                  </blockquote>

                  <p class="text-[#27252B]/70 text-base md:text-lg leading-[1.85] font-light max-w-2xl">
                    {{ miembro.biografia }}
                  </p>
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10 pt-6 border-t border-[#27252B]/10 relative z-20">
                  <div class="flex items-center gap-2.5">
                    <svg class="w-4 h-4 text-[#71B1A5]/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"/>
                    </svg>
                    <span class="text-xs text-[#27252B]/50 font-light tracking-wide" v-html="miembro.colegiadoTexto" />
                  </div>

                  <div
                    class="inline-flex items-center gap-4 py-1 text-sm text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200"
                  >
                    <span class="tracking-[0.15em] uppercase text-xs font-medium">
                      Ver perfil
                    </span>
                    <span
                      class="w-8 h-px bg-[#27252B]/40 group-hover:w-14 group-hover:bg-[#71B1A5] transition-all duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>

        <p class="mt-28 md:mt-36 text-center text-xs text-[#27252B]/35 font-light tracking-wider max-w-md mx-auto leading-relaxed">
          Todos los profesionales están debidamente colegiados o acreditados en sus respectivas especialidades y sujetos de forma estricta al código deontológico.
        </p>

      </div>
    </section>

    <section
      class="bg-[#27252B] py-24 md:py-32"
      aria-labelledby="valores-heading"
    >
      <div class="page-container">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 md:mb-20">
          <div>
            <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-3">
              Garantías clínicas
            </p>
            <h2
              id="valores-heading"
              class="font-serif italic text-white text-3xl md:text-4xl leading-[1.2]"
            >
              Los pilares de nuestra práctica
            </h2>
          </div>
          <div class="w-24 h-px bg-white/10 md:mb-2" aria-hidden="true" />
        </div>

        <ol
          class="grid md:grid-cols-3 gap-10 md:gap-16 list-none"
          aria-label="Valores del equipo de La Seda"
        >
          <li class="border-t border-white/10 pt-8">
            <span class="font-serif italic text-[#71B1A5]/30 text-5xl leading-none select-none block mb-6" aria-hidden="true">01</span>
            <h3 class="font-serif italic text-white text-2xl mb-4">Formación continua</h3>
            <p class="text-white/60 text-base leading-relaxed font-light">
              Cada miembro del equipo dedica horas anuales a supervisión clínica, congresos
              y programas de actualización. La excelencia no se declara: se practica.
            </p>
          </li>

          <li class="border-t border-white/10 pt-8">
            <span class="font-serif italic text-[#71B1A5]/30 text-5xl leading-none select-none block mb-6" aria-hidden="true">02</span>
            <h3 class="font-serif italic text-white text-2xl mb-4">Supervisión de casos</h3>
            <p class="text-white/60 text-base leading-relaxed font-light">
              Trabajamos con supervisión grupal regular. Que el terapeuta sea acompañado
              en su práctica es garantía de calidad para quien acude a consulta.
            </p>
          </li>

          <li class="border-t border-white/10 pt-8">
            <span class="font-serif italic text-[#71B1A5]/30 text-5xl leading-none select-none block mb-6" aria-hidden="true">03</span>
            <h3 class="font-serif italic text-white text-2xl mb-4">Derivación responsable</h3>
            <p class="text-white/60 text-base leading-relaxed font-light">
              Si detectamos que otra especialidad puede ayudarte mejor, lo decimos.
              Contamos con una red de profesionales de confianza en Granada para
              acompañarte en ese camino.
            </p>
          </li>
        </ol>

      </div>
    </section>

    <section
      class="page-container py-24 md:py-32"
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
            <span class="text-[#27252B]/55 not-italic font-light text-2xl md:text-3xl">comenzar tu proceso?</span>
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

      <div class="pt-12 border-t border-[#27252B]/10 flex flex-col sm:flex-row justify-center items-center gap-6 w-full">
        <NuxtLink
          to="/contacto"
          class="group btn-primary !inline-flex"
          aria-label="Ir a la página de contacto para reservar primera cita en La Seda"
        >
          <span>Reservar primera cita</span>
          <div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-white pointer-events-none">
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
            <svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </NuxtLink>

        <NuxtLink
          to="/terapias"
          class="btn-secondary !inline-flex"
          aria-label="Ver todos los servicios y terapias del Centro La Seda del Albaicín en Granada"
        >
          <span>Ver nuestras terapias</span>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface MiembroEquipo {
  id: string
  nombre: string
  rol: string
  subtitulo: string
  cita: string
  biografia: string
  imagen: string
  imagenAlt: string
  colegiadoTexto: string
  especialidades: string[] // Añadido para enriquecer el Schema org de forma dinámica
}

const equipo: MiembroEquipo[] = [
  {
    id: 'ana-jimenez',
    nombre: 'Ana Jiménez',
    rol: 'Co-dirección',
    subtitulo: 'Psicología Clínica · Co-directora de La Seda',
    cita: 'Acompañar desde la presencia es permitir que cada persona descubra su propio ritmo para florecer.',
    biografia: 'Psicóloga sanitaria colegiada y terapeuta Gestalt, miembro didacta de la Asociación Española de Terapia Gestalt (AETG). Formada en Psicoterapia Clínica Integrativa junto a Juanjo Albert, sistémica y constelaciones familiares. Cuenta con amplia especialización clínica en el territorio de la infancia, adolescencia y acompañamiento familiar.',
    imagen: '/images/ana-jimenez-psicologa-gestalt-terapia-infanto-juvenil-granada.jpg',
    imagenAlt: 'Ana Jiménez, psicóloga sanitaria colegiada y co-directora del Centro La Seda Granada',
    colegiadoTexto: 'Colegiada <strong class="text-[#27252B]/70 font-medium">Nº AO06843</strong> — Psicóloga Sanitaria',
    especialidades: ['Psicología Sanitaria', 'Terapia Gestalt Infantil', 'Constelaciones Familiares', 'Psicoterapia Integrativa']
  },
  {
    id: 'leonor-cabrera',
    nombre: 'Leonor Cabrera',
    rol: 'Co-dirección',
    subtitulo: 'Terapia Gestalt · Co-directora de La Seda',
    cita: 'Desatar los nudos del pasado nos permite recuperar la fuerza para habitar el presente.',
    biografia: 'Terapeuta Gestalt, transpersonal e integrativa con más de 5.000 horas de experiencia en sesiones individuales. Coach Profesional Certificada por ASESCO. Especializada en trauma, memoria emocional y bloqueos mediante el método Wingwave® (coformadora oficial) y las Constelaciones Familiares. Profesora del Programa SAT de Claudio Naranjo y autora del libro "El camino de la fuerza interior".',
    imagen: '/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg',
    imagenAlt: 'Leonor Cabrera, terapeuta integrativa y co-directora del Centro La Seda en Granada',
    colegiadoTexto: 'Certificación ASESCO <strong class="text-[#27252B]/70 font-medium">Nº 10.457</strong> — Coach Profesional',
    especialidades: ['Terapia Gestalt', 'Método Wingwave', 'Constelaciones Familiares', 'Coaching Profesional']
  },
  {
    id: 'cristina-lence',
    nombre: 'Cristina Lence',
    rol: 'Educación Familiar',
    subtitulo: 'Educación Social · Infancia y Familias',
    cita: 'Ofrecer un espacio seguro a la infancia y a las familias es sembrar raíces fuertes para el mañana.',
    biografia: 'Educadora Social con un enfoque socioemocional que integra las Técnicas Gestálticas para Infancia y Adolescencia (ITG Valencia) con la mirada sistémica familiar. Formada en el Programa SAT de Claudio Naranjo y especializada en acompañamiento de menores en dificultades adaptativas, conductuales y en orientación de parentalidad consciente.',
    imagen: '/images/cristina-lence-educadora-familiar-gestalt-sistemica-granada.jpg',
    imagenAlt: 'Cristina Lence, educadora social especializada en Gestalt infanto-juvenil y sistémica en el Centro La Seda de Granada',
    colegiadoTexto: 'Educadora Social — <strong class="text-[#27252B]/70 font-medium">Habilitada</strong>',
    especialidades: ['Educación Social', 'Técnicas Gestálticas Infancia', 'Acompañamiento Familiar', 'Parentalidad Consciente']
  },
  {
    id: 'reyes-sanchez',
    nombre: 'Reyes Sánchez Tallón',
    rol: 'Medicina',
    subtitulo: 'Medicina · Colaboradora en Salud Integrativa',
    cita: 'Integrar el cuidado del cuerpo y la salud emocional es devolverle la plenitud y el equilibrio al ser.',
    biografia: 'Médica colegiada, licenciada en Medicina y Cirugía (Universidad de Granada) y especialista en Pediatría por la vía MIR. Colaboradora de La Seda formada en terapia Gestalt (equipo Qualia), Terapia Corporal Integrativa, análisis caracterológico psico-corporal, terapia sistémica y herramientas de intervención en trauma y TEPT.',
    imagen: '/images/reyes-sanchez-tallon-medica-pediatra-gestalt-terapia-granada.jpg',
    imagenAlt: 'Reyes Sánchez Tallón, médica colegiada y colaboradora en salud integrativa en el Centro La Seda de Granada',
    colegiadoTexto: 'Médica Colegiada <strong class="text-[#27252B]/70 font-medium">Nº 18-10008273</strong>',
    especialidades: ['Medicina', 'Terapia Gestalt', 'Terapia Corporal Integrativa', 'Trauma y TEPT']
  },
  {
    id: 'maria-noel-reyes',
    nombre: 'María Noel Reyes',
    rol: 'Psicoterapia',
    subtitulo: 'Psicoterapia Integradora-Humanista · Adultos',
    cita: 'Cada persona lleva dentro los recursos para crecer; mi trabajo es acompañarla a encontrarlos.',
    biografia: 'Psicoterapeuta con enfoque integrador-humanista y terapeuta Gestalt, con más de una década de experiencia en el acompañamiento a personas mayores, duelo y final de vida en Barcelona, y dedicada desde 2015 a la psicoterapia privada con adultos: crecimiento personal, gestión emocional y terapia de pareja.',
    imagen: '/images/maria-noel-reyes-granada.jpg',
    imagenAlt: 'María Noel Reyes, psicoterapeuta en el Centro de Psicología La Seda en Granada',
    // NOTA PARA EL EQUIPO: no había número de colegiada en el CV recibido; sustituye este texto en cuanto lo tengáis.
    colegiadoTexto: '<strong class="text-[#27252B]/70 font-medium">Máster en Psicología General Sanitaria</strong> — Universidad de Valencia',
    especialidades: ['Terapia Gestalt', 'Enfoque Integrador-Humanista', 'Duelo y Pérdidas', 'Psicogerontología']
  },
]

// ─── SEO META LOCALIZADO Y TRANSACCIONAL ─────────────────────────────────────
useSeoMeta({
  title: 'Psicólogos en Granada | Nuestro Equipo de Terapeutas | Centro La Seda',
  description: 'Conoce a nuestro equipo de psicólogos colegiados, profesionales sanitarios y terapeutas Gestalt en Granada. Expertos en psicoterapia integrativa y familiar.',
  ogTitle: 'Psicólogos en Granada | Nuestro Equipo de Terapeutas | Centro La Seda',
  ogDescription: 'Especialistas de la psicología clínica, Gestalt y sistémica en Granada. Consulta los perfiles y números de colegiado de nuestro equipo multidisciplinar.',
  ogImage: '/images/centro-psicologia-la-seda-granada-hero.jpg',
  ogType: 'website',
  ogUrl: 'https://www.laseda.es/conocenos',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Equipo de Psicólogos y Terapeutas en Granada · Centro La Seda',
  twitterDescription: 'Acompañamiento psicológico clínico y humanista de confianza. Profesionales acreditados en Terapia Gestalt, EMDR y Constelaciones Familiares.',
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://www.laseda.es/conocenos' }],
})

// ─── JSON-LD SCHEMA AVANZADO (E-E-A-T GOOGLE CORRESPONSAL) ────────────────────
const jsonLdSchema = computed(() => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Equipo de psicólogos colegiados y terapeutas — La Seda Granada',
    description: 'Listado oficial verificado de psicólogos sanitarios, médicos y profesionales de la salud mental del Centro La Seda en Granada.',
    url: 'https://www.laseda.es/conocenos',
    numberOfItems: equipo.length,
    itemListElement: equipo.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Person',
        name: m.nombre,
        jobTitle: m.subtitulo,
        url: `https://www.laseda.es/conocenos/${m.id}`,
        image: `https://www.laseda.es${m.imagen}`,
        knowsAbout: m.especialidades,
        worksFor: {
          '@type': 'MedicalBusiness',
          '@id': 'https://www.laseda.es/#business',
          name: 'La Seda · Centro de Psicología en Granada',
          url: 'https://www.laseda.es'
        }
      },
    })),
  }
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLdSchema.value),
    },
  ],
})
</script>