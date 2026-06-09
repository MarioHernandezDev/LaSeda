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
    enfoque: `Aprender a acompañar bien a los niños y niñas es una labor importante y delicada. Saber escuchar e intervenir sobre las heridas emocionales en la infancia y adolescencia también es un gran reto. Esta formación ofrece un recorrido profundo y transformador por los fundamentos de la Terapia Gestalt aplicada a la infancia y la adolescencia.

A lo largo del programa, exploraremos la vivencia del trauma en edades tempranas, la depresión infantil, los efectos de la desestructuración familiar y los mecanismos de defensa que desarrollan los niños y jóvenes. Desde el enfoque gestáltico, la presencia, la actitud y el vincularse son las herramientas más importantes, así como el juego y las técnicas proyectivas.

El trabajo con los menores se complementa siempre con el sistema familiar, abarcando una mirada amplia en la que también están presentes el sistema educativo, las instituciones y el entorno social en el que niños y jóvenes viven.`,
    dirigido: 'Psicólogos/as, educadores/as, maestros/as, terapeutas, médicos y profesionales de la salud que quieran acompañar a niños y adolescentes y también a sus familias. Profesionales de infantojuvenil que necesiten una actualización de sus recursos y aprender a trabajar desde un lugar más humano y sistémico.',
    programa: [
      { numero: 1,  nombre: 'Inicio. Introducción a las teorías evolutivas infantojuveniles',  descripcion: 'Principios básicos de la terapia Gestalt aplicados a la terapia. Encuadre.' },
      { numero: 2,  nombre: 'Metodología en el trabajo infantojuvenil',                        descripcion: 'Supervisión de casos y herramientas de intervención.' },
      { numero: 3,  nombre: 'La creatividad y el juego como herramienta terapéutica I',        descripcion: 'La ludoterapia gestáltica: materiales, encuadre y presencia del terapeuta.' },
      { numero: 4,  nombre: 'La creatividad y el juego como herramienta terapéutica II',       descripcion: 'Uso del dibujo, el cuento, la arcilla y la metáfora en sesión.' },
      { numero: 5,  nombre: 'Self emergente. Desarrollo emocional de la adolescencia',         descripcion: 'Intervención y supervisión de casos en la etapa adolescente.' },
      { numero: 6,  nombre: 'Resistencias y Mecanismos de defensa del terapeuta',             descripcion: 'Supervisión y trabajo sobre la propia historia del terapeuta.' },
      { numero: 7,  nombre: 'Adolescencia y Trastorno de Conducta Alimentaria',               descripcion: 'Detección, comprensión e intervención gestáltica en los TCA.' },
      { numero: 8,  nombre: 'Heridas en la infancia y trauma',                                descripcion: 'Impacto del trauma en la formación de la identidad y los vínculos.' },
      { numero: 9,  nombre: 'Intervención con progenitores',                                  descripcion: 'La figura parental como recurso terapéutico. Límites y alianzas.' },
      { numero: 10, nombre: 'Instituciones, protección y justicia',                           descripcion: 'Marco legal, consentimiento, confidencialidad y dilemas éticos.' },
      { numero: 11, nombre: 'Sistémica aplicada a la Gestalt infantojuvenil',                 descripcion: 'Intervención sistémica y gestáltica en contextos de crisis familiar.' },
      { numero: 12, nombre: 'Apego',                                                          descripcion: 'Construcción del apego y su influencia en el proceso terapéutico.' },
      { numero: 13, nombre: 'Estrés Postraumático infantojuvenil',                            descripcion: 'Herramientas específicas para el trabajo con el trauma complejo.' },
      { numero: 14, nombre: 'Síntomas, Enfermedad y muerte como ciclo de la vida',            descripcion: 'Taller residencial. El ciclo de la experiencia en su dimensión más profunda.' },
      { numero: 15, nombre: 'Cierre. Duelos y pérdidas',                                     descripcion: 'El final del proceso terapéutico: despedidas, integración y cierre sano.' },
    ],
    logistica: {
      horario: 'Viernes 17–21 h · Sábado 10–14 h y 16–20 h · Domingo 10–14 h',
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
        cargo: 'Directora del Programa · Psicóloga General Sanitaria',
        bio: 'Miembro titular, didacta y supervisora acreditada por la AETG. Formada en Eneagrama, Psicoterapia Integrativa y Transpersonal (Programa SAT) y Bioenergética. Especialista en duelo, EMDR Nivel I y Wingwave. Más de quince años de experiencia en terapia infantil y con adolescentes, en la Escuela Sal Gestalt de Jerez y en Qualia Salud Emocional (Granada). Actualmente directora del Centro de Psicología La Seda.',
        imagen: '/images/ana-jimenez-psicologa-gestalt-terapia-infanto-juvenil-granada.jpg',
      },
      {
        nombre: 'Yael Peña García',
        cargo: 'Psicóloga General Sanitaria · Psicoterapeuta (FEAP)',
        bio: 'Miembro titular, didacta y supervisora acreditada por la AETG. Responsable del área infantojuvenil del Instituto de Terapia Gestalt de Valencia. Especializada en perinatalidad, infancia, adolescencia y edad adulta. Formada en duelo infantojuvenil (proceso M.A.R.), PNL, trauma infantil, construcción del apego y autoestima infantil.',
        imagen: '/images/yael-pena-garcia-psicologa-gestalt-infancia-adolescencia-granada.jpg',
      },
      {
        nombre: 'Yolanda Mozota García',
        cargo: 'Terapeuta Gestalt · Miembro Titular y Didacta AETG',
        bio: 'Licenciada en Sociología por la UCM. Cofundadora de los centros ARUNAT Y-LANDA. Posgrados en creatividad y conducción de grupos con Paco Peñarrubia, formación en el Programa SAT de Claudio Naranjo, Bioenergética (IPTG) y psicodrama. Autora de la tesina "Abusos sexuales y maltrato en la infancia" (2007) y creadora de la formación en TEPT por abusos y maltrato.',
        imagen: '/images/yolanda-mozota-garcia-terapeuta-gestalt-didacta-aetg-granada.jpg',
      },
      {
        nombre: 'Maravillas Cano Reguero',
        cargo: 'Psicóloga General Sanitaria · Psicoterapeuta (FEAP)',
        bio: 'Miembro titular de la AETG. Licenciada en Filología, Arte Dramático y Educadora Social. Formada en SAT, Terapia de Pareja, Terapia Corporal Integrativa, Sistémica Familiar, Constelaciones y EMDR. Coautora del programa "Integración Gestáltica". Más de 20 años de experiencia con menores en medio abierto. Equipo psicoterapéutico de Lamar (Escuela Gestalt de Málaga).',
        imagen: '/images/maravillas-cano-reguero-psicologa-gestalt-sistemica-granada.jpg',
      },
      {
        nombre: 'Martín Mindeguía',
        cargo: 'Médico Pediatra · Especialista en Cuidados Paliativos',
        bio: 'Terapeuta Gestalt y docente del Posgrado D.O.L. de Assumpta Mateu. Facilitador de EPEC-Pediatrics. Docente en el Máster Universitario en Cuidados Paliativos Pediátricos (UNIR), en el título de Experto en Acompañamiento Espiritual en Clínica (Universidad Francisco de Vitoria) y en el posgrado del Institut Borja de Bioètica (Universitat Ramon Llull, Barcelona).',
        imagen: '/images/martin-mindeguia-medico-pediatra-cuidados-paliativos-gestalt.jpg',
      },
      {
        nombre: 'Margarita de la Torre Rodríguez',
        cargo: 'Psicóloga General Sanitaria · Psicoterapeuta (FEAP)',
        bio: 'Formadora en Psicodrama Infantil, Terapia de Juego y Terapia Gestalt con niños y adolescentes (UmayQuipae, Madrid). Amplia formación en trastornos alimentarios y drogodependencias. Docente en el Máster de Terapias Humanistas de la Universidad Pontificia de Comillas. Trabaja como psicóloga en la residencia Hogar Villa Paz con menores tutelados.',
        imagen: '/images/margarita-de-la-torre-psicologa-psicodrama-gestalt-infancia.jpg',
      },
      {
        nombre: 'Juan Carlos Calvo',
        cargo: 'Psicólogo Sanitario · Psicoterapeuta (FEAP)',
        bio: 'Máster en Psicoterapia Psicoanalítica (Universidad de Comillas). Miembro didacta y supervisor acreditado por la AETG. Formado en Terapia Familiar y Sistémica. Amplia trayectoria como docente en escuelas de terapia en España y Latinoamérica. Constelador familiar, máster en PNL, formado en Hipnosis Eriksoniana y EMDR.',
        imagen: '/images/juan-carlos-calvo-psicologo-gestalt-terapia-familiar-sistemica.jpg',
      },
      {
        nombre: 'Inmaculada López Espejo',
        cargo: 'Psicóloga General Sanitaria · Terapeuta EMDR',
        bio: 'Máster en Terapias Psicológicas de Tercera Generación. Formada en clínica y diagnóstico diferencial de los TCA (UCM) y especializada en trastornos alimentarios y obesidad. Terapeuta Gestalt (miembro adherente AETG). Docente en la Escuela Andaluza de Salud Pública. Más de diez años en terapia infantojuvenil. Orientadora del Programa de Bienestar Emocional de la Junta de Andalucía.',
        imagen: '/images/inmaculada-lopez-espejo-psicologa-emdr-trastornos-alimentarios-granada.jpg',
      },
    ],
    videos: null,
  },

  'metodo-wingwave': {
    id: 'metodo-wingwave',
    titulo: 'Formación Certificada Oficial en el Método Wingwave®',
    subtitulo: 'Una herramienta de intervención profunda avalada por la ciencia para regular el estrés, procesar traumas y liberar el máximo potencial',
    etiqueta: 'Certificación Oficial',
    enfoque: `El método Wingwave® es una técnica de intervención de alto impacto desarrollada en Alemania y avalada por más de 14 estudios científicos independientes realizados en universidades alemanas. Certificada bajo la norma ISO 29993 y reconocida con 32 créditos de formación continuada por la ICF, esta formación te habilita para trabajar profesionalmente con una herramienta que combina la estimulación bilateral del movimiento ocular, el muscle-testing kinesiológico (test O-Ring) y los principios del coaching emocional.

Su campo de aplicación es amplio y profundo: regulación del estrés agudo y crónico, disolución de fobias y miedos específicos, procesamiento de experiencias traumáticas no resueltas, mejora del rendimiento bajo presión y potenciación de la creatividad y la toma de decisiones. Wingwave® actúa directamente sobre el sistema límbico, facilitando la reprocesación de recuerdos y patrones emocionales bloqueados de forma rápida, no invasiva y con resultados duraderos.`,
    ventajas: [
      { texto: 'Regulación del estrés agudo y crónico en pocas sesiones' },
      { texto: 'Disolución de fobias, miedos y bloqueos emocionales específicos' },
      { texto: 'Procesamiento de traumas no resueltos de forma no intrusiva' },
      { texto: 'Mejora del rendimiento deportivo, académico y profesional bajo presión' },
      { texto: 'Incremento de la creatividad, la fluidez y la capacidad de decisión' },
      { texto: 'Aplicable en bienestar personal, coaching ejecutivo y clínica' },
      { texto: 'Avalado por más de 14 estudios científicos independientes' },
      { texto: 'Certificación reconocida internacionalmente (ISO 29993 · 32 CCE por ICF)' },
    ],
    destinatarios: 'Psicólogos/as, terapeutas, coaches, médicos, educadores, asistentes sociales, artistas, deportistas y en general todos los profesionales del acompañamiento al cambio que deseen obtener más recursos para gestionar el estrés y las emociones con sus clientes. También a toda persona que quiera sanar su pasado, alcanzar sus metas y aumentar su bienestar.',
    incluye: [
      'Formación presencial intensiva de 4 días (32 horas lectivas) con dossier didáctico oficial',
      'Acceso al grupo privado de la comunidad wingwave® con más de 20 h de supervisiones en vídeo',
      'Posibilidad de repetir la formación presencial como asistente de forma gratuita',
      'Derecho de uso de la marca, logo y material divulgativo wingwave® en español',
      '1 día de supervisión presencial con la creadora del método, Cora Besser-Siegmund',
      '1 año de pertenencia al Círculo de Calidad wingwave® con descuentos y acceso al área privada de profesionales',
    ],
    logistica: {
      horario: 'Formación intensiva de 4 días consecutivos',
      horas_total: 32,
      horas_presenciales: 32,
      horas_proyecto: null,
      convocatoria: '9, 10, 11 y 12 de mayo de 2026',
      formato: 'Presencial intensivo · Jueves a domingo',
      lugar: 'Centro de Psicología La Seda · Granada',
      precio: '1.500 € (consultar condiciones especiales para socios AEPNL, ICF, FEAP, AETG y otros)',
      participantes: 'Máximo 12 participantes por formador (máx. 24 con dos formadores)',
    },
    profesorado: [
      {
        nombre: 'Oriol Bellés',
        cargo: 'Formador Oficial Wingwave® · Director de Symbiotik Institut',
        bio: 'Terapeuta wingwave® y formador acreditado por el Besser-Siegmund Institut de Hamburgo (Alemania). Cofundador de Symbiotik Institut. Referente en la formación y difusión del método wingwave® en España y Latinoamérica, ha formado a cientos de profesionales en múltiples países.',
        imagen: '/images/oriol-belles-formador-oficial-wingwave-symbiotik-institut-espana.jpg',
      },
      {
        nombre: 'Leonor Cabrera',
        cargo: 'Terapeuta Wingwave® · Co-directora de La Seda',
        bio: 'Terapeuta wingwave® y co-formadora acreditada por el Besser-Siegmund Institut de Hamburgo (Alemania). Colaboradora del Programa SAT de Claudio Naranjo. Cofundadora de Viventi y co-directora de La Seda.',
        imagen: '/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg',
      },
    ],
    videos: [
      { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', titulo: 'Introducción al Método Wingwave®', descripcion: 'Una visión general del método, su fundamento científico y sus principales aplicaciones.' },
      { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', titulo: 'Wingwave® en la Práctica Clínica', descripcion: 'Demostración del proceso de una sesión y testimonios de profesionales certificados.' },
    ],
  },
}

const formacion  = computed(() => formations[route.params.id] || null)
const esWingwave = computed(() => route.params.id === 'metodo-wingwave')
const esGestalt  = computed(() => route.params.id === 'gestalt-infantil')
</script>

<template>
  <div>

    <!-- ══════════════════════════════════════════
         ESTADO PRINCIPAL · Formación encontrada
    ═══════════════════════════════════════════ -->
    <main v-if="formacion" class="overflow-x-hidden">

      <!-- ─────────────────────────────────────
           SECCIÓN 1 · HERO
      ────────────────────────────────────── -->
      <PageHero
      :label="`${formacion.etiqueta} · Centro de Psicología La Seda`"
      :title-main="formacion.titulo"
      image="/images/centro-psicologia-la-seda-granada-hero.jpg"
      :image-alt="`${formacion.titulo} — Centro de Psicología La Seda Granada`"
      secondary-link="/formaciones"
      secondary-label="Ver todas las formaciones"
    >
      <template #description>{{ formacion.subtitulo }}</template>
    </PageHero>

      <!-- ─────────────────────────────────────
           SECCIÓN 2 · ENFOQUE
      ────────────────────────────────────── -->
      <section class="page-container py-24 md:py-32">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <!-- Columna sticky izquierda -->
          <div class="lg:sticky lg:top-28">
            <div class="section-divider mb-7" />
            <p class="formation-label mb-4">
              {{ esGestalt ? 'Sobre la formación' : 'Qué es el método' }}
            </p>
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.18] mb-10">
              {{ esGestalt
                ? 'Un recorrido profundo por la clínica con menores'
                : 'Una intervención de alta eficacia respaldada por la ciencia' }}
            </h2>

            <div
              v-for="(parrafo, i) in formacion.enfoque.split('\n\n')"
              :key="i"
              class="text-base md:text-lg leading-[1.95] text-[#27252B]/75 mb-7"
            >
              {{ parrafo }}
            </div>

            <div v-if="esGestalt && formacion.dirigido" class="mt-10 border-l-2 border-[#71B1A5]/50 pl-6 py-1">
              <p class="formation-label mb-3">¿A quién va dirigida?</p>
              <p class="text-base leading-[1.9] text-[#27252B]/70">{{ formacion.dirigido }}</p>
            </div>

            <div v-if="esWingwave" class="mt-10 border-l-2 border-[#71B1A5]/50 pl-6 py-1">
              <p class="formation-label mb-3">¿A quién va dirigida?</p>
              <p class="text-base leading-[1.9] text-[#27252B]/70">{{ formacion.destinatarios }}</p>
            </div>

            <div class="mt-12 w-1 h-20 bg-[#71B1A5]/25" />
          </div>

          <!-- Columna derecha -->
          <div>

            <!-- GESTALT: lista de talleres -->
            <div v-if="esGestalt">
              <p class="formation-label mb-7">Programa · 15 talleres</p>
              <!-- ✅ divide-[#27252B]/10 en lugar de /8 (fuera de escala nativa) -->
              <div class="border border-[#27252B]/10 divide-y divide-[#27252B]/10">
                <div
                  v-for="taller in formacion.programa"
                  :key="taller.numero"
                  class="flex items-start gap-5 px-6 py-5 hover:bg-[#71B1A5]/5 transition-colors duration-150"
                >
                  <span class="flex-shrink-0 w-7 h-7 bg-[#71B1A5] text-white text-[0.65rem] font-medium flex items-center justify-center mt-0.5">
                    {{ taller.numero }}
                  </span>
                  <div>
                    <p class="text-sm font-medium text-[#27252B] mb-1.5 leading-snug">{{ taller.nombre }}</p>
                    <p class="text-sm text-[#27252B]/55 font-light leading-relaxed">{{ taller.descripcion }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- WINGWAVE: ventajas + qué incluye -->
            <div v-if="esWingwave" class="space-y-14">

              <div>
                <p class="formation-label mb-7">Beneficios y aplicaciones</p>
                <!-- ✅ divide-[#27252B]/10 en lugar de /8 -->
                <div class="divide-y divide-[#27252B]/10">
                  <div
                    v-for="ventaja in formacion.ventajas"
                    :key="ventaja.texto"
                    class="flex items-start gap-5 py-5"
                  >
                    <div class="w-2 h-2 bg-[#71B1A5] flex-shrink-0 mt-2.5" />
                    <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75">{{ ventaja.texto }}</p>
                  </div>
                </div>
              </div>

              <div>
                <p class="formation-label mb-7">Qué incluye la formación</p>
                <div class="bg-[#27252B] px-8 py-9 space-y-6">
                  <div
                    v-for="item in formacion.incluye"
                    :key="item"
                    class="flex items-start gap-5"
                  >
                    <div class="w-px h-5 bg-[#71B1A5] flex-shrink-0 mt-1" />
                    <p class="text-sm md:text-base leading-[1.8] text-white/80 font-light">{{ item }}</p>
                  </div>
                </div>
              </div>

              <!-- ✅ border-[#27252B]/10 en lugar de /12 (fuera de escala nativa) -->
              <div class="border border-[#27252B]/10 px-7 py-6">
                <p class="formation-label mb-2">Precio</p>
                <p class="font-serif italic text-[#27252B] text-2xl mb-2">{{ formacion.logistica.precio }}</p>
                <p class="text-sm text-[#27252B]/50 font-light leading-relaxed">Descuento por reserva anticipada y facilidades de pago a plazos disponibles.</p>
              </div>

            </div>
          </div>

        </div>
      </section>


      <!-- ─────────────────────────────────────
           SECCIÓN 3 · VÍDEOS (solo Wingwave)
      ────────────────────────────────────── -->
      <section
        v-if="esWingwave && formacion.videos"
        class="bg-[#27252B]/5 py-20 md:py-28"
      >
        <div class="page-container">
          <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-14">
            <div class="md:col-span-5">
              <p class="formation-label mb-4">Recursos audiovisuales</p>
              <h2 class="formation-title-light leading-[1.2]">
                Conoce el método<br />
                <span class="text-[#27252B]/60">en profundidad</span>
              </h2>
            </div>
            <div class="md:col-span-7">
              <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/65">
                Testimonios de profesionales certificados y una demostración real del proceso de sesión.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div
              v-for="video in formacion.videos"
              :key="video.url"
              class="border border-[#27252B]/10 overflow-hidden"
            >
              <div class="aspect-video w-full overflow-hidden">
                <iframe
                  :src="video.url"
                  :title="video.titulo"
                  class="w-full h-full"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
              <div class="px-6 py-6 bg-[#FDFBF9]">
                <div class="section-divider mb-4" />
                <p class="text-sm font-medium text-[#27252B] mb-2">{{ video.titulo }}</p>
                <p class="text-sm text-[#27252B]/55 font-light leading-relaxed">{{ video.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- ─────────────────────────────────────
           SECCIÓN 4 · PROFESORADO
      ────────────────────────────────────── -->
      <section :class="esWingwave ? 'bg-[#FDFBF9]' : 'bg-[#27252B]/5'" class="py-20 md:py-28">
        <div class="page-container">

          <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-14 md:mb-18">
            <div class="md:col-span-5">
              <p class="formation-label mb-4">
                {{ esGestalt ? 'Equipo docente' : 'Facilitadores' }}
              </p>
              <h2 class="formation-title-light leading-[1.2]">
                {{ esGestalt
                  ? 'Profesionales con trayectoria, presencia y compromiso'
                  : 'Voces con autoridad y experiencia en el método' }}
              </h2>
            </div>
            <div class="md:col-span-7">
              <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/65">
                {{ esGestalt
                  ? 'Un equipo de ocho especialistas que combinan rigor clínico y profundidad humana en cada módulo.'
                  : 'Formadores acreditados por el Besser-Siegmund Institut de Hamburgo con décadas de práctica clínica.' }}
              </p>
            </div>
          </div>

          <!-- Gestalt: grid 3 columnas -->
          <div
            v-if="esGestalt"
            class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27252B]/10"
          >
            <div
              v-for="prof in formacion.profesorado"
              :key="prof.nombre"
              class="bg-[#FDFBF9] p-8 flex flex-col gap-5"
            >
              <div class="flex items-center gap-4">
                <div class="prof-avatar-sm">
                  <!-- ✅ width/height añadidos para evitar CLS -->
                  <NuxtImg
                    :src="prof.imagen"
                    :alt="`${prof.nombre} — ${prof.cargo} en el Centro de Psicología La Seda Granada`"
                    format="webp"
                    loading="lazy"
                    width="44"
                    height="44"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p class="prof-name">{{ prof.nombre }}</p>
                  <p class="prof-role">{{ prof.cargo }}</p>
                </div>
              </div>
              <div class="prof-card-body">
                <p class="prof-bio">{{ prof.bio }}</p>
              </div>
            </div>
          </div>

          <!-- Wingwave: 2 tarjetas grandes -->
          <div
            v-if="esWingwave"
            class="grid md:grid-cols-2 gap-8"
          >
            <div
              v-for="prof in formacion.profesorado"
              :key="prof.nombre"
              class="border border-[#27252B]/10 p-10 flex flex-col gap-7 bg-[#FDFBF9]"
            >
              <div class="flex items-center gap-5">
                <div class="prof-avatar-lg">
                  <!-- ✅ width/height añadidos para evitar CLS -->
                  <NuxtImg
                    :src="prof.imagen"
                    :alt="`${prof.nombre} — ${prof.cargo} en el Centro de Psicología La Seda Granada`"
                    format="webp"
                    loading="lazy"
                    width="56"
                    height="56"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p class="text-base font-semibold text-[#27252B] leading-tight">{{ prof.nombre }}</p>
                  <p class="text-xs text-[#71B1A5] mt-1 tracking-wide">{{ prof.cargo }}</p>
                </div>
              </div>
              <!-- ✅ pt-6 como clase utilitaria sobre la base prof-card-body -->
              <div class="prof-card-body pt-6">
                <p class="text-base text-[#27252B]/65 font-light leading-[1.9]">{{ prof.bio }}</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      <!-- ─────────────────────────────────────
           SECCIÓN 5 · LOGÍSTICA Y RESERVA
      ────────────────────────────────────── -->
      <section class="bg-[#27252B] py-20 md:py-28">
        <div class="page-container">
          <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <!-- Columna izquierda: tabla de datos -->
            <div>
              <p class="formation-label mb-4">Información práctica</p>
              <h2 class="formation-title-dark mb-12">
                Próxima convocatoria<br />
                <span class="text-white/50 not-italic font-light text-2xl md:text-3xl">{{ formacion.logistica.convocatoria }}</span>
              </h2>

              <!-- ✅ divide-white/10 en lugar de /8 (fuera de escala nativa) -->
              <div class="border border-white/10 divide-y divide-white/10">
                <div class="logistics-row">
                  <span class="logistics-label">Formato</span>
                  <span class="logistics-value text-right">{{ formacion.logistica.formato }}</span>
                </div>
                <div class="logistics-row">
                  <span class="logistics-label">Horario</span>
                  <span class="logistics-value text-right">{{ formacion.logistica.horario }}</span>
                </div>
                <div class="logistics-row">
                  <span class="logistics-label">Horas totales</span>
                  <span class="logistics-value">{{ formacion.logistica.horas_total }}h</span>
                </div>
                <div v-if="formacion.logistica.horas_presenciales" class="logistics-row">
                  <span class="logistics-label">Horas presenciales</span>
                  <span class="logistics-value">{{ formacion.logistica.horas_presenciales }}h</span>
                </div>
                <div v-if="formacion.logistica.horas_proyecto" class="logistics-row">
                  <span class="logistics-label">Trabajo fin de curso</span>
                  <span class="logistics-value">{{ formacion.logistica.horas_proyecto }}h</span>
                </div>
                <div class="logistics-row">
                  <span class="logistics-label">Lugar</span>
                  <span class="logistics-value text-right">{{ formacion.logistica.lugar }}</span>
                </div>
                <div v-if="formacion.logistica.participantes" class="logistics-row">
                  <span class="logistics-label">Participantes</span>
                  <span class="logistics-value text-right">{{ formacion.logistica.participantes }}</span>
                </div>
                <div class="logistics-row">
                  <span class="logistics-label">Precio</span>
                  <span class="text-sm text-[#71B1A5] font-medium text-right">
                    {{ esWingwave ? formacion.logistica.precio : 'Solicitar dossier de precios' }}
                  </span>
                </div>
              </div>

              <div v-if="esWingwave" class="mt-8 border-l-2 border-[#71B1A5]/40 pl-5 py-1">
                <p class="formation-label mb-2">Requisitos de acceso</p>
                <p class="text-sm text-white/55 font-light leading-relaxed">
                  Nivel mínimo de Practitioner de PNL, formación en psicología, terapia, medicina, Gestalt, constelaciones, coaching u otra formación equiparable. Es necesario acreditar la formación previa mediante fotocopias de títulos o diplomas.
                </p>
              </div>
            </div>

            <!-- Columna derecha: CTA de reserva -->
            <div class="lg:pt-28 flex flex-col items-start gap-9">
              <div class="w-12 h-px bg-[#71B1A5]" />
              <h3 class="formation-title-dark leading-[1.2]">
                ¿Te interesa esta<br />
                <span class="text-white/55">formación?</span>
              </h3>
              <p class="text-lg md:text-xl leading-[1.85] text-white/65">
                Solicita información sin compromiso sobre el dossier completo, el calendario de talleres,
                el proceso de matriculación y las condiciones de pago.
                Puedes escribirnos a
                <a href="mailto:hola@centrolaseda.com" class="text-[#71B1A5] hover:underline transition-all">hola@centrolaseda.com</a>
                o llamarnos al
                <a href="tel:679571977" class="text-[#71B1A5] hover:underline transition-all">679 571 977</a>.
              </p>
              <NuxtLink to="/contacto" class="btn-reserve">
                Solicitar información
                <span class="w-6 h-px bg-[#27252B]/40 inline-block" />
              </NuxtLink>
              <p class="text-sm text-white/30 font-light">También por teléfono o WhatsApp. Respondemos en menos de 24 h.</p>
            </div>

          </div>
        </div>
      </section>


      <!-- ─────────────────────────────────────
           SECCIÓN 6 · NAVEGACIÓN INFERIOR
      ────────────────────────────────────── -->
      <section class="page-container py-16 md:py-20">
        <div class="pt-8 border-t border-[#27252B]/10 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">

          <!-- ✅ Ruta /formaciones — verifica que exista pages/formaciones/index.vue o pages/formaciones.vue -->
          <NuxtLink to="/formaciones" class="nav-link-back group">
            <span class="nav-link-line" />
            <span class="nav-link-text">Todas las formaciones</span>
          </NuxtLink>

          <!-- ✅ Ruta /contacto — verifica que exista pages/contacto.vue -->
          <NuxtLink to="/contacto" class="nav-link-back group">
            <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
              Contactar con el centro
            </span>
            <span class="nav-link-line" />
          </NuxtLink>

        </div>
      </section>

    </main>


    <!-- ══════════════════════════════════════════
         ESTADO 404 · Formación no encontrada
    ═══════════════════════════════════════════ -->
    <main
      v-else
      class="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <p class="formation-label mb-4">Error 404</p>
      <h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl leading-[1.2] mb-6">
        Formación no encontrada
      </h1>
      <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/60 max-w-md mb-12">
        La formación que buscas no existe o la URL no es correcta.
      </p>
      <NuxtLink to="/formaciones" class="btn-primary">
        Ver todas las formaciones
        <span class="w-6 h-px bg-white/60 inline-block" />
      </NuxtLink>
    </main>

  </div>
</template>