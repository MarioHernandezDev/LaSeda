<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()

// 1. BASE DE DATOS DE PROFESORADO / STAFF
const staff: Record<string, any> = {
  'ana-jimenez': {
    id: 'ana-jimenez',
    nombre: 'Ana María Jiménez',
    rol: 'Psicóloga Clínica · Miembro Didacta AETG',
    imagen: '/images/ana-jimenez-psicologa-gestalt-terapia-infanto-juvenil-granada.jpg',
    imagenAlt: 'Ana María Jiménez, directora de la formación Gestalt Infantil en Granada'
  },
  'oriol-belles': {
    id: 'oriol-belles',
    nombre: 'Oriol Bellés',
    rol: 'Symbiotik Institut · Formador Oficial Wingwave®',
    imagen: '/images/oriol-belles-formador-wavewave.jpg',
    imagenAlt: 'Oriol Bellés, formador oficial del método Wingwave'
  },
  'leonor-cabrera': {
    id: 'leonor-cabrera',
    nombre: 'Leonor Cabrera',
    rol: 'Symbiotik Institut · Formadora Oficial Wingwave®',
    imagen: '/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg',
    imagenAlt: 'Leonor Cabrera, formadora certificada Wingwave'
  }
}

// 2. BASE DE DATOS DE FORMACIONES
const formations: Record<string, any> = {
  'gestalt-infantil': {
    titulo: 'Formación en Gestalt aplicada a la',
    tituloItalico: 'Infancia y Adolescencia',
    subtitulo: 'Un programa vivencial diseñado para integrar teoría, práctica clínica y el desarrollo de recursos proyectivos y corporales.',
    categoria: 'Convocatoria 2026 · Granada',
    imagen: '/images/formacion-terapia-gestalt-infancia-adolescencia-granada.jpg',
    imagenAlt: 'Alumnos en formación presencial de Terapia Gestalt Infantil en Centro La Seda',
    descripcion: 'Esta formación especializada ofrece un recorrido profundo por el universo emocional de la infancia y la adolescencia. A través de un enfoque humanista y sistémico, aprenderás a decodificar el lenguaje del niño a través del juego, el dibujo y la expresión corporal, adquiriendo herramientas técnicas sólidas para la práctica clínica real.',
    descripcion2: 'El programa está estructurado en módulos teórico-vivenciales donde el propio crecimiento y madurez del terapeuta es el pilar central. Dirigido a profesionales de la psicología, la salud y la educación que deseen incorporar la mirada amorosa y transformadora de la Gestalt en sus consultas.',
    cita: '"El niño no juega para pasar el tiempo, juega para comprender su mundo y sanar sus heridas a través de la experiencia."',
    terapeutas: ['ana-jimenez'], 
    beneficios: [
      'Adquirir herramientas prácticas y creativas (caja de arena, cuentos, técnicas plásticas).',
      'Aprender metodologías de supervisión clínica de casos reales infanto-juveniles.',
      'Desarrollar la actitud gestáltica: presencia, escucha activa y autorregulación en consulta.',
      'Comprender las dinámicas familiares y el trabajo sistémico con los padres.',
      'Obtener una titulación avalada por un equipo docente con dilatada trayectoria.',
    ],
    motivos: [
      { numero: '288h', titulo: 'Horas Lectivas totales', desc: 'Divididas en 240 horas de formación presencial directa y 48 horas destinadas al desarrollo tutorizado del proyecto final.' },
      { numero: '15', titulo: 'Talleres Monográficos', desc: 'Un fin de semana al mes diseñado para profundizar de manera intensiva en temáticas específicas del desarrollo evolutivo.' },
      { numero: '01', titulo: 'Entrevista de Valoración', desc: 'Garantizamos la cohesión y calidad humana del grupo mediante un encuentro previo gratuito con la dirección del programa.' },
      { numero: 'AETG', titulo: 'Mirada Didáctica', desc: 'Dirección impartida por miembros didactas y especialistas en activo dentro del panorama terapéutico nacional.' },
    ],
    proceso: [
      { paso: '01', texto: 'Solicitud de información y reserva de una entrevista de valoración inicial con la dirección académica del centro.' },
      { paso: '02', texto: 'Formalización de la matrícula y entrega del calendario detallado de los 15 talleres del ciclo 2026.' },
      { paso: '03', texto: 'Asistencia presencial mensual (fines de semana) combinando teoría, dinámicas de grupo y prácticas supervisadas.' },
    ],
    faqs: [
      { pregunta: '¿A quién está dirigida esta especialización?', respuesta: 'Principalmente a profesionales o estudiantes de último año de psicología, pedagogía, educación social y disciplinas de la salud o acompañamiento humanista.' },
      { pregunta: '¿Cuáles son las facilidades de pago?', respuesta: 'El centro dispone de planes de financiación fraccionada por talleres mensuales para facilitar el acceso a la formación sin recargos.' },
      { pregunta: '¿Qué ocurre si falto a un taller?', respuesta: 'Disponemos de protocolos de recuperación de contenido teórico-práctico y tutorías de apoyo para asegurar la continuidad del aprendizaje.' },
    ],
  },
  'metodo-wingwave': {
    titulo: 'Formación Certificada Oficial en el',
    tituloItalico: 'Método Wingwave®',
    subtitulo: 'Certificación internacional en coaching emocional y regulación del estrés respaldada por evidencias científicas.',
    categoria: 'Certificación ISO 29993 · Mayo 2026',
    imagen: '/images/formacion-certificada-metodo-wingwave-coaching-granada.jpg',
    imagenAlt: 'Prácticas del test miostático u O-Ring durante la formación oficial de Wingwave en Granada',
    descripcion: 'El Método Wingwave® es un enfoque de intervención rápida para el desbloqueo emocional y el rendimiento mental. Combina la estimulación bilateral de los hemisferios cerebrales (similar a la fase REM del sueño) con la Programación Neurolingüística (PNL) y el test miostático O-Ring para localizar con precisión los disparadores exactos del estrés.',
    descripcion2: 'Esta formación intensiva te capacita de manera oficial para utilizar una de las herramientas de regulación de ansiedad y superación de traumas más estudiadas y extendidas en Europa. Al finalizar, obtendrás la titulación oficial internacional que te acredita como Coach Wingwave® certificado.',
    cita: '"Una combinación perfecta de precisión muscular, reprogramación neurolingüística y balance cerebral profundo."',
    // CAMBIO AQUÍ: Dejamos únicamente a Leonor Cabrera en el array
    terapeutas: ['leonor-cabrera'],
    beneficios: [
      'Aprender a disolver bloqueos, fobias, miedos escénicos y estrés postraumático en pocas sesiones.',
      'Dominar el test miostático o de resistencia muscular como brújula precisa en tus terapias.',
      'Incorporar protocolos validados científicamente por más de 14 estudios independientes.',
      'Acceso al buscador y red mundial de profesionales acreditados de la marca Besser-Siegmund.',
      'Formación con sello de calidad europeo ISO 29993 orientada a la excelencia formativa.',
    ],
    motivos: [
      { numero: '32h', titulo: 'Horas Académicas', desc: 'Distribuidas de forma intensiva a lo largo de 4 jornadas consecutivas con un enfoque eminentemente práctico.' },
      // Actualizamos también el texto de la cantidad de alumnos por formador para adaptarlo a un único profesor
      { numero: '12', titulo: 'Alumnos por Formadora', desc: 'Plazas estrictamente limitadas para garantizar la supervisión milimétrica de las prácticas individuales en la sala.' },
      { numero: 'ISO', titulo: 'Calidad Europea Certificada', desc: 'Contenidos y metodologías pedagógicas auditadas bajo los más altos estándares internacionales de formación.' },
      { numero: '04', titulo: 'Días de Inmersión Total', desc: 'Convocatoria del 9 al 12 de mayo de 2026 en nuestras instalaciones presenciales de Granada capital.' },
    ],
    proceso: [
      { paso: '01', texto: 'Inscripción online previa para reservar una de las plazas limitadas del grupo intensivo de mayo.' },
      { paso: '02', texto: 'Acceso al material didáctico oficial preparatorio y lecturas recomendadas antes del inicio de las clases.' },
      { paso: '03', texto: 'Entrenamiento intensivo presencial de 4 días y alta en la comunidad internacional de profesionales.' },
    ],
    faqs: [
      { pregunta: '¿Qué titulación se obtiene al finalizar el curso?', respuesta: 'Se expide el diploma oficial internacional expedido de forma conjunta por Symbiotik Institut y el Besser-Siegmund-Institut de Hamburgo, Alemania.' },
      { pregunta: '¿Es necesario ser psicólogo para certificarse?', respuesta: 'Está dirigido a psicólogos, terapeutas, médicos, coaches profesionales, mentores o profesionales de recursos humanos y optimización del rendimiento.' },
      { pregunta: '¿Qué materiales incluye la matrícula?', respuesta: 'Incluye los manuales oficiales de formación de la marca registrada, cuadernos de trabajo y el acceso a la plataforma online de recursos.' },
    ],
  },
}

// Control de Ruta de Nuxt
const id = route.params.id as string
const formacion = computed(() => formations[id] ?? null)

// Mapeo seguro del Profesorado Activo utilizando el componente visual de equipo
const profesoresActivos = computed(() => {
  if (!formacion.value || !formacion.value.terapeutas) return []
  return formacion.value.terapeutas
    .map((idRef: string) => ({ id: idRef, ...staff[idRef] }))
    .filter((p: any) => p.nombre)
})

// Reactividad de SEO Avanzado Dinámico
const seoTitle = computed(() =>
  formacion.value
    ? `${formacion.value.titulo} ${formacion.value.tituloItalico} · Granada 2026`
    : 'Formación no encontrada · Centro La Seda'
)
const seoDescription = computed(() =>
  formacion.value ? `${formacion.value.subtitulo} Convocatoria abierta 2026.` : ''
)
const seoImage = computed(() =>
  formacion.value?.imagen
    ? `https://centrolaseda.com${formacion.value.imagen}`
    : 'https://centrolaseda.com/images/centro-psicologia-la-seda-granada-hero.jpg'
)
const seoUrl = computed(() => `https://centrolaseda.com/formaciones/${id}`)

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  ogImage: seoImage,
  ogType: 'website',
  ogUrl: seoUrl,
  ogLocale: 'es_ES',
  twitterCard: 'summary_large_image',
  canonical: seoUrl,
})
</script>

<template>
  <div class="bg-[#FDFBF9] antialiased">
    
    <main
      v-if="!formacion"
      class="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <p class="section-label mb-4 text-[#71B1A5]">Error 404</p>
      <h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl mb-6">
        Formación no encontrada
      </h1>
      <p class="text-lg md:text-xl text-[#27252B]/60 max-w-md mb-12">
        El programa de especialización que buscas no pertenece a la convocatoria 2026.
      </p>
      <NuxtLink to="/formaciones" class="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase border border-[#27252B] px-6 py-3.5 hover:bg-[#27252B] hover:text-white transition-all duration-300">
        Ver todos los programas
      </NuxtLink>
    </main>

    <main v-else>
      
      <TherapyHero 
        :categoria="formacion.categoria"
        :titulo="formacion.titulo"
        :tituloItalico="formacion.tituloItalico"
        :subtitulo="formacion.subtitulo"
      />

      <FormationOverview 
        :descripcion="formacion.descripcion"
        :descripcion2="formacion.descripcion2"
        :cita="formacion.cita"
        :beneficios="formacion.beneficios"
      />

      <FormationTeam :profesores="profesoresActivos" />

      <FormationEstructure 
        :motivos="formacion.motivos"
        :imagen="formacion.imagen"
        :imagenAlt="formacion.imagenAlt"
      />

      <FormationProcess 
        :proceso="formacion.proceso"
      />

      <TherapyFAQ 
        :faqs="formacion.faqs"
      />

      <FormationRelated 
        :actualId="id"
        :todasLasFormaciones="formations"
      />

    </main>
  </div>
</template>