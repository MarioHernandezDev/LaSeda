<script setup lang="ts">
const route = useRoute()

// Base de datos de perfiles profesionales
const staff: Record<string, any> = {
  'ana-jimenez': {
    id: 'ana-jimenez',
    nombre: 'Ana Jiménez',
    rol: 'Psicología Clínica y Co-dirección',
    imagen: '/images/ana-jimenez-psicologa-gestalt-terapia-infanto-juvenil-granada.jpg',
    imagenAlt: 'Ana Jiménez, psicóloga sanitaria y co-directora en Granada'
  },
  'leonor-cabrera': {
    id: 'leonor-cabrera',
    nombre: 'Leonor Cabrera',
    rol: 'Coaching Profesional y Co-dirección',
    imagen: '/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg',
    imagenAlt: 'Leonor Cabrera, coach profesional certificada en Granada'
  },
  'cristina-lence': {
    id: 'cristina-lence',
    nombre: 'Cristina Lence',
    rol: 'Educación Social · Infancia y Familias',
    imagen: '/images/cristina-lence-educadora-familiar-gestalt-sistemica-granada.jpg',
    imagenAlt: 'Cristina Lence, educadora social especializada en Gestalt infanto-juvenil'
  },
  'reyes-sanchez': {
    id: 'reyes-sanchez',
    nombre: 'Reyes Sánchez Tallón',
    rol: 'Medicina Pediátrica · Salud Integrativa',
    imagen: '/images/reyes-sanchez-tallon-medica-pediatra-gestalt-terapia-granada.jpg',
    imagenAlt: 'Reyes Sánchez Tallón, médica pediatra y terapeuta'
  },
  'maria-noel-reyes': {
    id: 'maria-noel-reyes',
    nombre: 'María Noel Reyes',
    rol: 'Psicología y Acompañamiento',
    imagen: '/images/maria-noel-reyes-granada.jpg',
    imagenAlt: 'María Noel Reyes, psicóloga en Granada'
  }
}

// Base de datos de Terapias
const terapias: Record<string, any> = {
  'adultos': {
    titulo: 'Terapia Psicológica',
    tituloItalico: 'y Acompañamiento Emocional',
    subtitulo: 'Un espacio para comprender lo que te ocurre, reconocer tus emociones y conectar con los recursos que ya tienes.',
    categoria: 'Para adultos',
    imagen: '/images/terapia-gestalt-adultos-centro-psicologia-la-seda-granada.jpg',
    imagenAlt: 'Sesión de Terapia Gestalt para adultos en el Centro de Psicología La Seda, Granada',
    descripcion: 'La terapia psicológica y el acompañamiento emocional son un espacio para comprender y resolver conflictos personales o relacionales. Desde un enfoque humanista, Gestalt y sistémico, trabajamos para que puedas reconocer las emociones que se mueven en ti, descubrir los patrones que repites sin darte cuenta y conectar con tus propios recursos.',
    descripcion2: 'El proceso puede incorporar también Wingwave y constelaciones familiares, según las necesidades de cada persona. La Gestalt nos permite trabajar en profundidad con quien viene a consulta, poniendo el foco en el momento presente y en la experiencia real, mientras que la sistémica sitúa al individuo dentro de su contexto relacional para comprender qué dinámicas le influyen y cómo puede relacionarse de otra manera.',
    cita: '"La terapia Gestalt no es un conjunto de técnicas sino la transmisión de una actitud, una forma de estar en la vida." — Claudio Naranjo',
    terapeutas: ['ana-jimenez', 'leonor-cabrera', 'cristina-lence', 'reyes-sanchez', 'maria-noel-reyes'],
    beneficios: [
      'Aumentar el autoconocimiento y la comprensión de lo que te ocurre.',
      'Gestionar mejor las emociones y fortalecer tu autoestima.',
      'Afrontar bloqueos, miedos, ansiedad, estrés o experiencias traumáticas.',
      'Mejorar tus relaciones, tu comunicación y tu capacidad para tomar decisiones.',
      'Encontrar nuevas formas de vivir con mayor presencia, equilibrio y coherencia personal.',
    ],
    motivos: [
      { numero: '01', titulo: 'Gestalt', desc: 'Trabajamos en profundidad con la persona para comprender qué le sucede y aprender a gestionar las emociones en el momento presente.' },
      { numero: '02', titulo: 'Terapia Sistémica', desc: 'Ponemos al individuo en su contexto relacional para ver los patrones que se repiten y encontrar maneras diferentes de vincularse y de estar en la vida.' },
      { numero: '03', titulo: 'Método Wingwave', desc: 'Especialmente indicado para trabajar con bloqueos, miedos y asuntos pendientes, así como con situaciones traumáticas mediante desensibilización.' },
      { numero: '04', titulo: 'Constelaciones Familiares', desc: 'Para explorar y resolver dinámicas familiares, relaciones interpersonales y conflictos personales de raíz sistémica.' },
    ],
    proceso: [
      { paso: '01', texto: 'Orientación telefónica inicial gratuita en la que te escuchamos y valoramos qué tipo de abordaje y qué profesional se adapta mejor a ti.' },
      { paso: '02', texto: 'Primera sesión presencial u online en la que exploramos el motivo de consulta y establecemos los objetivos del proceso.' },
      { paso: '03', texto: 'Sesiones semanales de 55 minutos, adaptadas a tu ritmo y a las necesidades del proceso terapéutico.' },
    ],
    faqs: [
      { pregunta: '¿Cuánto duran las sesiones?', respuesta: '55 minutos.' },
      { pregunta: '¿Cómo serán las sesiones?', respuesta: 'Pueden ser tanto online a través de Skype u otro sistema de videoconferencia, como presencial en el Centro La Seda de Granada.' },
      { pregunta: '¿Cómo empiezo?', respuesta: 'Los procesos comienzan con una orientación telefónica gratuita en la que te escuchamos y valoramos qué tipo de abordaje y qué profesional se adapta mejor a tus necesidades.' },
    ],
  },
  'adolescentes': {
    titulo: 'Terapia para',
    tituloItalico: 'Adolescentes',
    subtitulo: 'Un espacio seguro y confidencial donde el joven puede expresar lo que siente, comprender lo que le ocurre y desarrollar recursos para esta etapa.',
    categoria: 'Adolescentes',
    imagen: '/images/terapia-adolescentes-psicologia-granada-la-seda.jpg',
    imagenAlt: 'Sesión de terapia psicológica para adolescentes en el Centro La Seda, Granada',
    descripcion: 'La adolescencia es una etapa de cambios profundos en la que el joven necesita un espacio propio donde pueda expresar lo que siente sin ser juzgado. La terapia para adolescentes ofrece ese entorno seguro y confidencial donde explorar lo que le ocurre, gestionar sus emociones y desarrollar recursos para afrontar las dificultades propias de este momento vital.',
    descripcion2: 'La eficacia del proceso depende también de la implicación de los padres. Por eso, a lo largo del trabajo incluimos sesiones con la familia que permiten mejorar la comunicación, reducir los enfrentamientos y ofrecer al adolescente un entorno con mayor seguridad y comprensión. Entender qué le está pasando por dentro es el primer paso para acompañarle bien.',
    cita: '"Para acompañar bien a un adolescente primero hay que entender qué le está sucediendo por dentro."',
    terapeutas: ['ana-jimenez', 'cristina-lence', 'maria-noel-reyes'],
    beneficios: [
      'Gestionar mejor sus emociones y fortalecer su autoestima.',
      'Mejorar sus relaciones con la familia y el entorno.',
      'Afrontar situaciones como ansiedad, aislamiento o dificultades académicas.',
      'Reducir conductas de riesgo e impulsividad.',
      'Que los padres comprendan mejor a su hijo y mejoren la comunicación.',
    ],
    motivos: [
      { numero: '01', titulo: 'Aislamiento y tristeza', desc: 'Cuando el adolescente se encierra en su cuarto, pierde el interés por sus actividades o muestra signos de tristeza profunda o bajo estado de ánimo.' },
      { numero: '02', titulo: 'Agresividad e impulsividad', desc: 'La violencia verbal y la pérdida de límites son señales de un desajuste emocional que necesita atención específica y un espacio de contención.' },
      { numero: '03', titulo: 'Duelos y pérdidas', desc: 'Separación de los padres, fallecimiento de un familiar, ruptura sentimental o cambio de ciudad que el adolescente no consigue superar.' },
      { numero: '04', titulo: 'Fracaso escolar', desc: 'La terapia ayuda a encontrar motivación y estrategias para que el adolescente pueda reincorporarse al sistema educativo o formativo.' },
    ],
    proceso: [
      { paso: '01', texto: 'Entrevista inicial con los padres, ya sea juntos o por separado, para explorar el motivo de consulta.' },
      { paso: '02', texto: 'Sesiones 2, 3 y 4 con el adolescente. Sesión 5 de dinámica familiar. Sesión 6 de devolución y pautas para los padres.' },
      { paso: '03', texto: 'Continuación del proceso con el adolescente, incluyendo progresivamente sesiones con los padres según evolucione el trabajo.' },
    ],
    faqs: [
      { pregunta: '¿Cuánto duran las sesiones?', respuesta: '55 minutos.' },
      { pregunta: '¿A partir de qué edad trabajáis con adolescentes?', respuesta: 'A partir de los doce años. Para niños de entre seis y once años, consulta la terapia infantil.' },
      { pregunta: '¿Cuándo veremos resultados?', respuesta: 'La adolescencia es un proceso complejo. Abordar el estado emocional del adolescente como un todo es fundamental para que los resultados puedan verse en un par de meses de trabajo.' },
    ],
  },
  'pareja-familia': {
    titulo: 'Terapia de',
    tituloItalico: 'Pareja y Familia',
    subtitulo: 'Un espacio seguro para mejorar la comunicación, resolver conflictos y comprenderse mutuamente.',
    categoria: 'Pareja y familia',
    imagen: '/images/terapia-pareja-familia-psicologia-granada-la-seda.jpg',
    imagenAlt: 'Terapia de pareja y familia en el Centro de Psicología La Seda, Granada',
    descripcion: 'La terapia de pareja y de familia es un espacio terapéutico para quienes necesitan abordar conflictos, dificultades de comunicación o momentos de cambio. Ofrece un entorno seguro en el que los miembros pueden comprender mejor lo que está ocurriendo, expresar sus necesidades y buscar conjuntamente nuevas formas de relacionarse.',
    descripcion2: 'Tanto para parejas como para familias, el trabajo terapéutico permite abordar tensiones, comprender las causas de determinados comportamientos y establecer dinámicas más saludables. También acompaña procesos de separación, duelos o transiciones importantes, facilitando la adaptación y una comunicación más respetuosa entre todos los implicados.',
    cita: '"El objetivo no es siempre salvar la relación, sino ayudar a cada persona a tomar decisiones auténticas desde un lugar más claro."',
    terapeutas: ['leonor-cabrera', 'reyes-sanchez'],
    beneficios: [
      'Mejorar la comunicación y expresar necesidades y deseos con mayor claridad.',
      'Resolver conflictos recurrentes de forma más efectiva.',
      'Acompañar procesos de infidelidad, pérdida de confianza o crisis de pareja.',
      'Establecer pautas de crianza más coherentes y colaborativas.',
      'Facilitar la adaptación ante separaciones, duelos o cambios importantes.',
    ],
    motivos: [
      { numero: '01', titulo: 'Conflictos de pareja', desc: 'Abordamos y resolvemos conflictos recurrentes, mejorando la comunicación y enseñando habilidades de resolución de problemas.' },
      { numero: '02', titulo: 'Infidelidad y confianza', desc: 'Proporcionamos un espacio para abordar el dolor, la ira y la reconstrucción de la confianza tras una ruptura de la misma.' },
      { numero: '03', titulo: 'Crianza y co-parentalidad', desc: 'Las diferencias en la crianza generan conflictos. Ayudamos a los padres a establecer una co-educación más efectiva y coherente.' },
      { numero: '04', titulo: 'Dinámicas familiares', desc: 'Abordamos conflictos intrafamiliares, cambios de vida, duelos colectivos y crisis de convivencia para que el sistema se reorganice de forma más saludable.' },
    ],
    proceso: [
      { paso: '01', texto: 'Entrevista inicial con la pareja o con la familia en la que exploramos el motivo de consulta y las expectativas.' },
      { paso: '02', texto: 'Sesiones de trabajo conjunto, adaptando el encuadre según el proceso: sesiones conjuntas, individuales o de dinámica familiar.' },
      { paso: '03', texto: 'Sesión de devolución y pautas, en la que compartimos las observaciones del proceso y los recursos para continuar avanzando.' },
    ],
    faqs: [
      { pregunta: '¿Cuánto duran las sesiones?', respuesta: '55 minutos.' },
      { pregunta: '¿Cómo serán las sesiones?', respuesta: 'Pueden ser tanto online a través de Skype u otro sistema de videoconferencia, como presencial en el Centro La Seda de Granada.' },
      { pregunta: '¿Tienen que venir los dos miembros de la pareja?', respuesta: 'La terapia de pareja requiere la participación de ambos para ser efectiva. En el caso de terapia familiar, acordamos qué miembros del sistema deben estar presentes en cada sesión según el momento del proceso.' },
    ],
  },
  'infantil': {
    titulo: 'Terapia',
    tituloItalico: 'Infantil',
    subtitulo: 'Ayudar a tu hijo a estar bien es también ayudarte a ti. La infancia es el momento en que todo empieza.',
    categoria: 'Niños de 6 a 11 años',
    imagen: '/images/terapia-infantil-ninos-psicologia-granada-la-seda.jpg',
    imagenAlt: 'Terapia psicológica infantil para niños de 6 a 11 años en el Centro La Seda, Granada',
    descripcion: 'La infancia es el momento en que el niño construye sus mecanismos de defensa y genera patrones de conducta que pueden perdurar toda la vida. La terapia infantil ofrece un espacio adaptado a la edad del niño donde puede explorar su mundo interior con herramientas ajustadas a su momento evolutivo, aprender a gestionar sus emociones y comprender qué le preocupa o le frustra.',
    descripcion2: 'Los padres también son parte del proceso. La terapia les ayuda a comunicarse mejor con sus hijos, a comprender qué les sucede y a adoptar medidas adaptadas a cada situación. Porque a veces no sabemos cómo poner límites sanos, cómo hablar de las pérdidas o cómo acompañar el miedo sin amplificarlo. Y eso también tiene solución.',
    cita: '"La infancia no es solo el principio de la vida, es también el principio de todo lo que vendrá después."',
    terapeutas: ['ana-jimenez', 'cristina-lence', 'maria-noel-reyes'],
    beneficios: [
      'Reducir el síntoma que le genera malestar: ansiedad, miedos, tristeza.',
      'Aprender a identificar y gestionar sus emociones.',
      'Mejorar la comunicación con la familia y el entorno.',
      'Desarrollar mejores herramientas para relacionarse con amigos y familia.',
      'Que los padres comprendan qué patrones familiares se repiten y cómo resolverlos.',
    ],
    motivos: [
      { numero: '01', titulo: 'Miedos y ansiedad', desc: 'Miedo a la noche, al colegio o a la muerte. Trabajamos con el niño para que tome conciencia de qué le da miedo y potencie sus recursos para afrontarlo.' },
      { numero: '02', titulo: 'Problemas de conducta', desc: 'Agresividad, dificultad para aceptar límites o control de impulsos. Trabajamos la regulación emocional y la contención en un espacio seguro.' },
      { numero: '03', titulo: 'Dificultades relacionales', desc: 'Cuando el niño tiene problemas para relacionarse, no lo invitan a cumpleaños o sufre rechazo o acoso en el entorno escolar.' },
      { numero: '04', titulo: 'Cambios y pérdidas', desc: 'Separación de los padres, fallecimiento de un familiar o cambio de ciudad que el niño no consigue integrar y que bloquea su desarrollo.' },
    ],
    proceso: [
      { paso: '01', texto: 'Entrevista inicial con los padres, ya sea juntos o por separado, para explorar el motivo de consulta.' },
      { paso: '02', texto: 'Sesiones 2, 3 y 4 con el niño. Sesión 5 de dinámica familiar. Sesión 6 de devolución y pautas para los padres.' },
      { paso: '03', texto: 'Continuación del proceso con el niño, incluyendo progresivamente sesiones con los padres y de dinámica familiar.' },
    ],
    faqs: [
      { pregunta: '¿Cuánto duran las sesiones?', respuesta: '55 minutos.' },
      { pregunta: '¿Qué edades atendéis?', respuesta: 'Entre seis y once años. Para adolescentes a partir de los doce años, consulta la terapia para adolescentes.' },
      { pregunta: '¿Cómo serán las sesiones con el niño?', respuesta: 'Escuchamos el problema que trae el niño, los padres o la familia. Hacemos las preguntas necesarias para ver el problema desde diferentes puntos de vista y mostramos una forma alternativa de abordarlo para que pueda haber más comunicación y comprensión.' },
    ],
  },
}

// Control de Ruta de Nuxt
const id = route.params.id as string
const terapia = computed(() => terapias[id] ?? null)

// Mapeo seguro de Terapeutas Activos resolviendo el desfase asíncrono
const terapeutasActivos = computed(() => {
  if (!terapia.value || !terapia.value.terapeutas) return []
  return terapia.value.terapeutas
    .map((idRef: string) => ({ id: idRef, ...staff[idRef] }))
    .filter((t: any) => t.nombre)
})

// Reactividad de SEO Avanzado
const seoTitle = computed(() =>
  terapia.value
    ? `${terapia.value.titulo} ${terapia.value.tituloItalico} en Granada · La Seda`
    : 'Terapia no encontrada · La Seda'
)
const seoDescription = computed(() =>
  terapia.value
    ? `${terapia.value.subtitulo} Centro de Psicología La Seda, Granada. Primera orientación gratuita.`
    : ''
)
const seoImage = computed(() =>
  terapia.value?.imagen
    ? `https://www.laseda.es${terapia.value.imagen}`
    : 'https://www.laseda.es/images/hero-consulta-laseda.jpg'
)
const seoUrl = computed(() =>
  terapia.value ? `https://www.laseda.es/terapias/${id}` : 'https://www.laseda.es/terapias'
)

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
  twitterTitle: seoTitle,
  twitterDescription: seoDescription,
  twitterImage: seoImage,
  robots: 'index, follow',
  canonical: seoUrl,
})

useHead({
  script: computed(() => terapia.value ? [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: `${terapia.value.titulo} ${terapia.value.tituloItalico} — Centro La Seda Granada`,
        description: terapia.value.subtitulo,
        url: seoUrl.value,
        image: seoImage.value,
        telephone: '+34-679-571-977',
        email: 'hola@centrolaseda.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calle Horno de Haza 29, Bajo 1',
          addressLocality: 'Granada',
          addressRegion: 'Andalucía',
          postalCode: '18001',
          addressCountry: 'ES',
        },
        parentOrganization: {
          '@type': 'MedicalBusiness',
          name: 'La Seda · Psicología y Crecimiento en Granada',
          url: 'https://www.laseda.es',
        },
      }),
    },
  ] : [])
})
</script>

<template>
  <div class="bg-[#FDFBF9] antialiased">
    
    <main
      v-if="!terapia"
      class="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <p class="section-label mb-4 text-[#71B1A5]">Error 404</p>
      <h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl leading-[1.2] mb-6">
        Terapia no encontrada
      </h1>
      <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/60 max-w-md mb-12">
        La especialidad clínica que buscas no existe o ha cambiado de dirección.
      </p>
      <NuxtLink to="/terapias" class="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase border border-[#27252B] px-6 py-3.5 hover:bg-[#27252B] hover:text-white transition-all duration-300">
        Ver todas las terapias
      </NuxtLink>
    </main>

    <main v-else>
      
      <TherapyHero 
        :categoria="terapia.categoria"
        :titulo="terapia.titulo"
        :tituloItalico="terapia.tituloItalico"
        :subtitulo="terapia.subtitulo"
      />

      <TherapyOverview 
        :descripcion="terapia.descripcion"
        :descripcion2="terapia.descripcion2"
        :cita="terapia.cita"
        :beneficios="terapia.beneficios"
      />

      <TherapyTeam 
        :terapeutas="terapeutasActivos"
      />

      <TherapyWorkAreas 
        :motivos="terapia.motivos"
        :imagen="terapia.imagen"
        :imagenAlt="terapia.imagenAlt"
      />

      <TherapyProcess 
        :proceso="terapia.proceso"
        :therapyId="id"
      />

      <TherapyFAQ 
        :faqs="terapia.faqs"
      />

      <TherapyRelated 
        :actualId="id"
        :todasLasTerapias="terapias"
      />

    </main>
  </div>
</template>