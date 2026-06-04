<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const formations = {
  'gestalt-infantil': {
    id: 'gestalt-infantil',
    titulo: 'Formación en Terapia Gestalt Aplicada a la Infancia y Adolescencia',
    subtitulo: 'Una formación transformadora para acompañar a los más jóvenes desde la presencia y el contacto auténtico',
    etiqueta: 'Formación Especializada',
    enfoque: `Esta formación ofrece un recorrido profundo y transformador por los fundamentos de la Terapia Gestalt aplicada a la infancia y la adolescencia. A lo largo del programa, exploraremos la vivencia del trauma en edades tempranas, las manifestaciones de la depresión infantil, los efectos de la desestructuración familiar y los mecanismos de defensa que desarrollan los niños y jóvenes para protegerse del dolor.

El trabajo terapéutico con menores exige una presencia especial: aprender a estar, a esperar, a sostener el caos y la emoción desbordada. Por ello, el programa hace hincapié en el uso de técnicas proyectivas, el juego como lenguaje genuino del niño, el dibujo, la metáfora y la narración. Aprenderás a construir una alianza terapéutica sólida y ética con la familia, sin perder de vista el bienestar del menor como eje central de toda intervención.`,
    programa: [
      { numero: 1, nombre: 'Inicio y teorías evolutivas del desarrollo', descripcion: 'Fundamentos del desarrollo psicológico infantil y marcos teóricos en Gestalt.' },
      { numero: 2, nombre: 'El ciclo de la experiencia en niños', descripcion: 'Adaptación del ciclo gestáltico a las particularidades de la infancia.' },
      { numero: 3, nombre: 'Trauma temprano y apego', descripcion: 'Impacto del trauma en la formación de la identidad y los vínculos.' },
      { numero: 4, nombre: 'Mecanismos de defensa y resistencias', descripcion: 'Comprensión funcional de las resistencias en el trabajo con menores.' },
      { numero: 5, nombre: 'El juego como lenguaje terapéutico', descripcion: 'La ludoterapia gestáltica: materiales, encuadre y presencia del terapeuta.' },
      { numero: 6, nombre: 'Técnicas proyectivas y creativas', descripcion: 'Uso del dibujo, el cuento, la arcilla y la metáfora en sesión.' },
      { numero: 7, nombre: 'Depresión y estados emocionales en la infancia', descripcion: 'Detección, acompañamiento y trabajo gestáltico con la tristeza profunda.' },
      { numero: 8, nombre: 'Ansiedad y miedos en la adolescencia', descripcion: 'Herramientas específicas para el trabajo con la angustia adolescente.' },
      { numero: 9, nombre: 'Desestructuración familiar y su impacto', descripcion: 'Intervención sistémica y gestáltica en contextos de crisis familiar.' },
      { numero: 10, nombre: 'Trabajo con los padres y cuidadores', descripcion: 'La figura parental como recurso terapéutico. Límites y alianzas.' },
      { numero: 11, nombre: 'Adolescencia: identidad, cuerpo y grupo', descripcion: 'Particularidades del proceso terapéutico con jóvenes.' },
      { numero: 12, nombre: 'Casos complejos: TDA, TEA y neuroatipicidades', descripcion: 'Adaptaciones y recursos del enfoque gestáltico.' },
      { numero: 13, nombre: 'Ética y encuadre en terapia infantil', descripcion: 'Marco legal, consentimiento, confidencialidad y dilemas éticos.' },
      { numero: 14, nombre: 'Supervisión y autocuidado del terapeuta', descripcion: 'Herramientas para sostener la práctica clínica desde el bienestar propio.' },
      { numero: 15, nombre: 'Cierre, duelos y pérdidas', descripcion: 'El final del proceso terapéutico: despedidas, integración y cierre sano.' },
    ],
    logistica: {
      horario: 'Viernes tarde · Sábado completo · Domingo mañana',
      horas_total: 288,
      horas_presenciales: 240,
      horas_proyecto: 48,
      convocatoria: '2026',
      formato: 'Presencial intensivo de fin de semana',
      lugar: 'Centro de Psicología La Seda · Granada',
    },
    profesorado: [
      {
        nombre: 'Ana María Jiménez',
        cargo: 'Directora del Programa · Psicoterapeuta Gestalt',
        bio: 'Especialista en terapia infantil y adolescente con más de veinte años de experiencia clínica. Formada en Gestalt, EMDR y trabajo sistémico. Ha dirigido múltiples programas de formación en España y Latinoamérica.',
      },
      {
        nombre: 'Yael Peña García',
        cargo: 'Psicóloga Clínica · Especialista en Trauma',
        bio: 'Experta en trauma temprano y apego. Combina la Gestalt con el modelo de desarrollo somático y el trabajo corporal. Colabora habitualmente con equipos de protección de menores.',
      },
      {
        nombre: 'Yolanda Mozota García',
        cargo: 'Terapeuta Gestalt · Especialista en Neuropsicología Infantil',
        bio: 'Con formación en neurociencias aplicadas a la infancia, Yolanda aporta una perspectiva integradora que une el trabajo emocional gestáltico con los procesos cognitivos del desarrollo.',
      },
      {
        nombre: 'Maravillas Cano Reguero',
        cargo: 'Psicoterapeuta · Ludoterapeuta Certificada',
        bio: 'Referente en el uso del juego como herramienta terapéutica en España. Ha diseñado protocolos de intervención mediante el juego simbólico en contextos de duelo y separación.',
      },
      {
        nombre: 'Martín Mindeguía',
        cargo: 'Psicólogo · Especialista en Adolescencia y Grupo',
        bio: 'Psicólogo con amplia trayectoria en el acompañamiento grupal de adolescentes. Investiga los procesos de construcción identitaria en la adolescencia tardía desde un enfoque gestáltico y fenomenológico.',
      },
      {
        nombre: 'Margarita de la Torre',
        cargo: 'Trabajadora Social · Terapeuta Familiar',
        bio: 'Especialista en intervención familiar en contextos de vulnerabilidad. Aporta al programa una perspectiva social y sistémica imprescindible para comprender el entorno del menor.',
      },
      {
        nombre: 'Juan Carlos Calvo',
        cargo: 'Psicólogo Clínico · Supervisor de Casos',
        bio: 'Más de quince años como supervisor clínico de terapeutas en formación. Su trabajo en el programa se centra en los módulos de ética, encuadre terapéutico y autocuidado del profesional.',
      },
      {
        nombre: 'Inmaculada López Espejo',
        cargo: 'Psicoterapeuta · Especialista en Duelo Infantil',
        bio: 'Autora de publicaciones sobre el duelo en la infancia y la adolescencia. Coordina el módulo final del programa, dedicado al cierre terapéutico, los duelos y las pérdidas significativas.',
      },
    ],
    videos: null,
  },

  'metodo-wingwave': {
    id: 'metodo-wingwave',
    titulo: 'Formación Certificada Oficial en el Método Wingwave®',
    subtitulo: 'Una herramienta de intervención profunda avalada por la ciencia para regular el estrés, procesar traumas y liberar el máximo potencial',
    etiqueta: 'Certificación Oficial',
    enfoque: `El método Wingwave® es una técnica de intervención de alto impacto desarrollada en Alemania y avalada por 14 estudios científicos independientes. Certificada bajo la norma ISO 29993, esta formación te habilita para trabajar profesionalmente con una herramienta que combina la estimulación bilateral del movimiento ocular, el muscle-testing kinesiológico y los principios del coaching emocional.

Su campo de aplicación es amplio y profundo: regulación del estrés agudo y crónico, disolución de fobias y miedos específicos, procesamiento de experiencias traumáticas no resueltas, mejora del rendimiento bajo presión y potenciación de la creatividad y la toma de decisiones. Wingwave® actúa directamente sobre el sistema límbico, facilitando la reprocesación de recuerdos y patrones emocionales bloqueados de forma rápida, no invasiva y con resultados duraderos.`,
    ventajas: [
      { icono: '◈', texto: 'Regulación del estrés agudo y crónico en pocas sesiones' },
      { icono: '◈', texto: 'Disolución de fobias, miedos y bloqueos emocionales específicos' },
      { icono: '◈', texto: 'Procesamiento de traumas no resueltos de forma no intrusiva' },
      { icono: '◈', texto: 'Mejora del rendimiento deportivo, académico y profesional bajo presión' },
      { icono: '◈', texto: 'Incremento de la creatividad, la fluidez y la capacidad de decisión' },
      { icono: '◈', texto: 'Aplicable en entornos de bienestar personal, coaching ejecutivo y clínica' },
      { icono: '◈', texto: 'Avalado por 14 estudios científicos independientes' },
      { icono: '◈', texto: 'Certificación oficial reconocida internacionalmente (ISO 29993)' },
    ],
    destinatarios: 'Coaches, psicólogos, terapeutas, counselors, médicos y profesionales del acompañamiento humano que deseen incorporar una herramienta de alta eficacia a su práctica.',
    incluye: [
      'Formación presencial intensiva de 4 días (32 horas lectivas)',
      'Dossier oficial de materiales del método Wingwave®',
      'Certificado oficial emitido por Symbiotik Institut',
      'Acceso al grupo privado de practicantes',
      'Sesiones de prácticas guiadas sin coste adicional',
      '1 año de permanencia en el Círculo de Calidad Wingwave®',
    ],
    logistica: {
      horario: 'Formación intensiva de 4 días consecutivos',
      horas_total: 32,
      horas_presenciales: 32,
      horas_proyecto: null,
      convocatoria: 'Mayo 2026',
      formato: 'Presencial intensivo',
      lugar: 'Centro de Psicología La Seda · Granada',
    },
    profesorado: [
      {
        nombre: 'Oriol Bellés',
        cargo: 'Formador Oficial Wingwave® · Director de Symbiotik Institut',
        bio: 'Referente internacional en la formación y difusión del método Wingwave® en España y Latinoamérica. Director del Symbiotik Institut, ha formado a cientos de profesionales en más de quince países. Combina su labor como formador con la práctica clínica y el coaching ejecutivo de alto rendimiento.',
      },
      {
        nombre: 'Leonor Cabrera',
        cargo: 'Terapeuta · Autora de "El camino de la fuerza interior"',
        bio: 'Psicoterapeuta y escritora especializada en el desarrollo del potencial humano y la resiliencia emocional. Autora del libro "El camino de la fuerza interior", una obra de referencia en el campo del crecimiento personal. Su enfoque integra el método Wingwave® con técnicas de mindfulness y trabajo narrativo.',
      },
    ],
    videos: [
      {
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        titulo: 'Introducción al Método Wingwave®',
        descripcion: 'Una visión general del método, su fundamento científico y sus principales aplicaciones.',
      },
      {
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        titulo: 'Wingwave® en la Práctica Clínica',
        descripcion: 'Demostración del proceso de una sesión y testimonios de profesionales certificados.',
      },
    ],
  },
}

const formacion = computed(() => formations[route.params.id] || null)
const esWingwave = computed(() => route.params.id === 'metodo-wingwave')
const esGestalt = computed(() => route.params.id === 'gestalt-infantil')
</script>

<template>
  <div
    v-if="formacion"
    class="min-h-screen"
    style="background-color: #FDFBF9; color: #27252B; font-family: 'Georgia', serif;"
  >

    <!-- ══════════════════════════════════════════════════════
         SECCIÓN 1 · HERO
    ══════════════════════════════════════════════════════ -->
    <section
      class="relative overflow-hidden"
      style="min-height: 55vh; display: flex; align-items: flex-end;"
    >
      <!-- Imagen de fondo -->
      <div class="absolute inset-0 rounded-none">
        <img
          src="/images/default.jpg"
          alt=""
          class="w-full h-full object-cover rounded-none"
          style="filter: saturate(0.7) brightness(0.55);"
        />
        <!-- Capa de fusión cromática con el acento verde -->
        <div
          class="absolute inset-0 rounded-none"
          style="background: linear-gradient(160deg, rgba(113,177,165,0.35) 0%, rgba(39,37,43,0.7) 65%, rgba(39,37,43,0.88) 100%);"
        ></div>
      </div>

      <!-- Contenido del hero -->
      <div class="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pb-16 pt-32">
        <p
          class="uppercase tracking-[0.22em] text-sm mb-5 font-sans font-medium"
          style="color: #71B1A5; letter-spacing: 0.22em;"
        >
          {{ formacion.etiqueta }} · Centro de Psicología La Seda
        </p>

        <h1
          class="font-serif italic text-white leading-tight mb-6"
          style="font-size: clamp(2rem, 5vw, 3.6rem); max-width: 820px; text-shadow: 0 2px 24px rgba(0,0,0,0.18);"
        >
          {{ formacion.titulo }}
        </h1>

        <p
          class="font-sans leading-relaxed text-white/80"
          style="font-size: clamp(1rem, 2vw, 1.2rem); max-width: 640px;"
        >
          {{ formacion.subtitulo }}
        </p>

        <!-- Franja decorativa -->
        <div
          class="mt-10 h-px w-24 rounded-none"
          style="background-color: #71B1A5;"
        ></div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════
         SECCIÓN 2 · INTRODUCCIÓN Y PROGRAMA / VENTAJAS
    ══════════════════════════════════════════════════════ -->
    <section class="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-start">

        <!-- Columna izquierda: texto largo -->
        <div>
          <p
            class="uppercase tracking-[0.18em] text-xs mb-6 font-sans font-medium"
            style="color: #71B1A5;"
          >
            {{ esGestalt ? 'Sobre la formación' : 'Qué es el método' }}
          </p>

          <h2
            class="font-serif italic mb-8"
            style="font-size: clamp(1.5rem, 3.5vw, 2.4rem); color: #27252B; line-height: 1.25;"
          >
            {{ esGestalt ? 'Un recorrido profundo por la clínica con menores' : 'Una intervención de alta eficacia respaldada por la ciencia' }}
          </h2>

          <div
            v-for="(parrafo, i) in formacion.enfoque.split('\n\n')"
            :key="i"
            class="font-sans mb-6"
            style="font-size: 1.125rem; line-height: 1.9; color: #27252B;"
          >
            {{ parrafo }}
          </div>

          <!-- Para Wingwave: destinatarios -->
          <div
            v-if="esWingwave"
            class="mt-10 p-6 border-l-4 rounded-none"
            style="border-color: #71B1A5; background-color: #f4f9f8;"
          >
            <p class="uppercase tracking-widest text-xs font-sans font-medium mb-3" style="color: #71B1A5;">
              ¿A quién va dirigida?
            </p>
            <p class="font-sans" style="font-size: 1.05rem; line-height: 1.8; color: #27252B;">
              {{ formacion.destinatarios }}
            </p>
          </div>
        </div>

        <!-- Columna derecha: programa o ventajas -->
        <div>
          <!-- GESTALT: lista de talleres -->
          <div v-if="esGestalt">
            <p
              class="uppercase tracking-[0.18em] text-xs mb-6 font-sans font-medium"
              style="color: #71B1A5;"
            >
              Programa · 15 talleres
            </p>
            <div class="space-y-0 rounded-none" style="border: 1px solid #e5e0d8;">
              <div
                v-for="taller in formacion.programa"
                :key="taller.numero"
                class="group flex items-start gap-4 px-5 py-4 rounded-none transition-colors duration-150"
                style="border-bottom: 1px solid #e5e0d8; cursor: default;"
                :style="{ backgroundColor: 'transparent' }"
                @mouseenter="e => e.currentTarget.style.backgroundColor = '#f4f9f8'"
                @mouseleave="e => e.currentTarget.style.backgroundColor = 'transparent'"
              >
                <span
                  class="flex-shrink-0 font-sans font-bold text-xs w-6 h-6 flex items-center justify-center rounded-none"
                  style="background-color: #71B1A5; color: white; font-size: 0.65rem; margin-top: 2px;"
                >
                  {{ taller.numero }}
                </span>
                <div>
                  <p class="font-sans font-semibold text-sm mb-0.5" style="color: #27252B;">
                    {{ taller.nombre }}
                  </p>
                  <p class="font-sans text-xs leading-relaxed" style="color: #7a7679;">
                    {{ taller.descripcion }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- WINGWAVE: ventajas + qué incluye -->
          <div v-if="esWingwave">
            <p
              class="uppercase tracking-[0.18em] text-xs mb-6 font-sans font-medium"
              style="color: #71B1A5;"
            >
              Beneficios y aplicaciones
            </p>
            <ul class="space-y-3 mb-10">
              <li
                v-for="ventaja in formacion.ventajas"
                :key="ventaja.texto"
                class="flex items-start gap-3 font-sans"
                style="font-size: 1rem; line-height: 1.7; color: #27252B;"
              >
                <span class="flex-shrink-0 mt-1 font-bold text-xs" style="color: #71B1A5;">
                  {{ ventaja.icono }}
                </span>
                {{ ventaja.texto }}
              </li>
            </ul>

            <!-- Qué incluye -->
            <p
              class="uppercase tracking-[0.18em] text-xs mb-5 font-sans font-medium"
              style="color: #71B1A5;"
            >
              Qué incluye la formación
            </p>
            <div class="rounded-none p-5" style="background-color: #27252B;">
              <ul class="space-y-2.5">
                <li
                  v-for="item in formacion.incluye"
                  :key="item"
                  class="flex items-start gap-3 font-sans text-sm"
                  style="color: rgba(255,255,255,0.85); line-height: 1.65;"
                >
                  <span class="flex-shrink-0 mt-1" style="color: #71B1A5; font-size: 0.65rem;">▪</span>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════
         SECCIÓN 3 · VÍDEOS (solo Wingwave)
    ══════════════════════════════════════════════════════ -->
    <section
      v-if="esWingwave && formacion.videos"
      class="py-20 md:py-24 px-6 md:px-12"
      style="background-color: #f4f1ed;"
    >
      <div class="max-w-6xl mx-auto">
        <p
          class="uppercase tracking-[0.18em] text-xs mb-4 font-sans font-medium"
          style="color: #71B1A5;"
        >
          Recursos audiovisuales
        </p>
        <h2
          class="font-serif italic mb-12"
          style="font-size: clamp(1.5rem, 3vw, 2.2rem); color: #27252B;"
        >
          Conoce el método en profundidad
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="video in formacion.videos"
            :key="video.url"
            class="rounded-none overflow-hidden"
            style="border: 1px solid #ddd8d0;"
          >
            <!-- Contenedor panorámico 16:9 con esquinas rectas -->
            <div class="aspect-video w-full rounded-none overflow-hidden">
              <iframe
                :src="video.url"
                :title="video.titulo"
                class="w-full h-full rounded-none"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style="border-radius: 0 !important;"
              ></iframe>
            </div>
            <div class="px-5 py-4" style="background-color: #FDFBF9;">
              <p class="font-sans font-semibold text-sm mb-1" style="color: #27252B;">
                {{ video.titulo }}
              </p>
              <p class="font-sans text-xs leading-relaxed" style="color: #7a7679;">
                {{ video.descripcion }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════
         SECCIÓN 4 · PROFESORADO
    ══════════════════════════════════════════════════════ -->
    <section
      class="py-20 md:py-28 px-6 md:px-12"
      :style="{ backgroundColor: esWingwave ? '#FDFBF9' : '#f4f1ed' }"
    >
      <div class="max-w-6xl mx-auto">
        <div class="mb-14">
          <p
            class="uppercase tracking-[0.18em] text-xs mb-4 font-sans font-medium"
            style="color: #71B1A5;"
          >
            {{ esGestalt ? 'Equipo docente' : 'Facilitadores' }}
          </p>
          <h2
            class="font-serif italic"
            style="font-size: clamp(1.5rem, 3vw, 2.4rem); color: #27252B; max-width: 560px; line-height: 1.25;"
          >
            {{ esGestalt ? 'Profesionales con trayectoria, presencia y compromiso' : 'Voces con autoridad y experiencia en el método' }}
          </h2>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-none"
          style="border: 1px solid #ddd8d0;"
        >
          <div
            v-for="(prof, idx) in formacion.profesorado"
            :key="prof.nombre"
            class="rounded-none p-8 flex flex-col gap-4"
            :style="{
              borderBottom: idx < formacion.profesorado.length - 2 ? '1px solid #ddd8d0' : 'none',
              borderRight: idx % 2 === 0 ? '1px solid #ddd8d0' : 'none',
              backgroundColor: '#FDFBF9'
            }"
          >
            <!-- Avatar placeholder -->
            <div class="flex items-center gap-4">
              <div
                class="flex-shrink-0 w-12 h-12 rounded-none overflow-hidden"
                style="background-color: #e8eeec;"
              >
                <img
                  src="/images/default.jpg"
                  alt=""
                  class="w-full h-full object-cover rounded-none"
                />
              </div>
              <div>
                <p class="font-sans font-bold text-base leading-tight" style="color: #27252B;">
                  {{ prof.nombre }}
                </p>
                <p class="font-sans text-xs mt-0.5" style="color: #71B1A5;">
                  {{ prof.cargo }}
                </p>
              </div>
            </div>
            <p class="font-sans text-sm leading-relaxed" style="color: #5a5660; line-height: 1.75;">
              {{ prof.bio }}
            </p>
          </div>
        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════
         SECCIÓN 5 · LOGÍSTICA Y RESERVA
    ══════════════════════════════════════════════════════ -->
    <section
      class="py-20 md:py-28 px-6 md:px-12"
      style="background-color: #27252B;"
    >
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <!-- Datos logísticos -->
          <div>
            <p
              class="uppercase tracking-[0.18em] text-xs mb-5 font-sans font-medium"
              style="color: #71B1A5;"
            >
              Información práctica
            </p>
            <h2
              class="font-serif italic text-white mb-10"
              style="font-size: clamp(1.4rem, 3vw, 2.2rem); line-height: 1.25;"
            >
              Próxima convocatoria · {{ formacion.logistica.convocatoria }}
            </h2>

            <div class="space-y-0 rounded-none" style="border: 1px solid rgba(255,255,255,0.1);">
              <div class="flex justify-between items-center px-5 py-4 rounded-none" style="border-bottom: 1px solid rgba(255,255,255,0.08);">
                <span class="font-sans text-sm" style="color: rgba(255,255,255,0.55);">Formato</span>
                <span class="font-sans text-sm font-medium text-white">{{ formacion.logistica.formato }}</span>
              </div>
              <div class="flex justify-between items-center px-5 py-4 rounded-none" style="border-bottom: 1px solid rgba(255,255,255,0.08);">
                <span class="font-sans text-sm" style="color: rgba(255,255,255,0.55);">Horario</span>
                <span class="font-sans text-sm font-medium text-white text-right ml-4">{{ formacion.logistica.horario }}</span>
              </div>
              <div class="flex justify-between items-center px-5 py-4 rounded-none" style="border-bottom: 1px solid rgba(255,255,255,0.08);">
                <span class="font-sans text-sm" style="color: rgba(255,255,255,0.55);">Horas totales</span>
                <span class="font-sans text-sm font-medium text-white">{{ formacion.logistica.horas_total }}h</span>
              </div>
              <div v-if="formacion.logistica.horas_proyecto" class="flex justify-between items-center px-5 py-4 rounded-none" style="border-bottom: 1px solid rgba(255,255,255,0.08);">
                <span class="font-sans text-sm" style="color: rgba(255,255,255,0.55);">Proyecto final</span>
                <span class="font-sans text-sm font-medium text-white">{{ formacion.logistica.horas_proyecto }}h</span>
              </div>
              <div class="flex justify-between items-center px-5 py-4 rounded-none" style="border-bottom: 1px solid rgba(255,255,255,0.08);">
                <span class="font-sans text-sm" style="color: rgba(255,255,255,0.55);">Lugar</span>
                <span class="font-sans text-sm font-medium text-white text-right ml-4">{{ formacion.logistica.lugar }}</span>
              </div>
              <div class="flex justify-between items-center px-5 py-4 rounded-none">
                <span class="font-sans text-sm" style="color: rgba(255,255,255,0.55);">Precio</span>
                <span class="font-sans text-sm font-medium" style="color: #71B1A5;">Contáctanos para dossier de precios</span>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-col items-start gap-8">
            <div
              class="w-10 h-px rounded-none"
              style="background-color: #71B1A5;"
            ></div>
            <h3
              class="font-serif italic text-white"
              style="font-size: clamp(1.4rem, 3vw, 2rem); line-height: 1.3;"
            >
              ¿Te interesa esta formación?
            </h3>
            <p class="font-sans leading-relaxed" style="color: rgba(255,255,255,0.65); font-size: 1.05rem; line-height: 1.8;">
              Solicita información sin compromiso sobre el dossier completo, el calendario de talleres, el proceso de matriculación y las condiciones de pago.
            </p>
            <a
              href="/contacto"
              class="inline-block rounded-none font-sans font-semibold uppercase tracking-[0.16em] text-sm px-10 py-4 transition-all duration-200"
              style="background-color: #71B1A5; color: #27252B; letter-spacing: 0.16em; text-decoration: none;"
              onmouseenter="this.style.backgroundColor='#5a9e92'"
              onmouseleave="this.style.backgroundColor='#71B1A5'"
            >
              Solicitar información
            </a>
            <p class="font-sans text-xs" style="color: rgba(255,255,255,0.35);">
              También puedes contactarnos por teléfono o WhatsApp. Respondemos en menos de 24h.
            </p>
          </div>

        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════
         PIE INTERNO
    ══════════════════════════════════════════════════════ -->
    <div
      class="py-6 px-6 md:px-12"
      style="background-color: #1f1d22; border-top: 1px solid rgba(255,255,255,0.04);"
    >
      <div class="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <p class="font-sans text-xs" style="color: rgba(255,255,255,0.3);">
          © Centro de Psicología La Seda · Granada
        </p>
        <a
          href="/formaciones"
          class="font-sans text-xs uppercase tracking-widest transition-colors"
          style="color: rgba(255,255,255,0.35); text-decoration: none;"
          onmouseenter="this.style.color='#71B1A5'"
          onmouseleave="this.style.color='rgba(255,255,255,0.35)'"
        >
          ← Todas las formaciones
        </a>
      </div>
    </div>

  </div>

  <!-- Estado 404: formación no encontrada -->
  <div
    v-else
    class="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    style="background-color: #FDFBF9; color: #27252B;"
  >
    <p class="uppercase tracking-[0.2em] text-xs font-sans font-medium mb-4" style="color: #71B1A5;">
      Error 404
    </p>
    <h1 class="font-serif italic mb-6" style="font-size: 2.2rem; color: #27252B;">
      Formación no encontrada
    </h1>
    <p class="font-sans mb-10" style="font-size: 1.1rem; color: #7a7679; max-width: 440px; line-height: 1.8;">
      La formación que buscas no existe o la URL no es correcta.
    </p>
    <a
      href="/formaciones"
      class="inline-block rounded-none font-sans font-semibold uppercase tracking-[0.16em] text-sm px-8 py-4"
      style="background-color: #71B1A5; color: #27252B; text-decoration: none;"
    >
      Ver todas las formaciones
    </a>
  </div>
</template>