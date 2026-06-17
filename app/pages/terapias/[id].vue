<script setup>
const route = useRoute()

const terapias = {
  'adultos': {
    titulo: 'Terapia Gestalt',
    tituloItalico: 'y Acompañamiento Emocional',
    subtitulo: 'Un espacio donde resolver conflictos internos y conectar con los recursos que ya tienes.',
    categoria: 'Para adultos',
    imagen: '/images/terapia-gestalt-adultos-centro-psicologia-la-seda-granada.jpg',
    imagenAlt: 'Sesión de Terapia Gestalt para adultos en el Centro de Psicología La Seda, Granada',
    descripcion: 'Las sesiones de terapia, coaching y acompañamiento emocional sirven para resolver y aprender de aquellos conflictos tanto internos como relacionales que se plantean en la vida, además de ser un lugar en el que conectar con los recursos que cada persona ya tiene, aún sin ser en muchas ocasiones consciente de ello.',
    descripcion2: 'Son también un lugar en el que desvelar los patrones que vamos llevando a hombros a lo largo de la vida y que vamos repitiendo día tras día sin tener conciencia de ello. Nuestra línea de trabajo es humanista, basada en la terapia Gestalt y en la sistémica. La Gestalt nos permite trabajar en profundidad con la persona, mirar qué le sucede, a la vez que es una vía para que quien viene a consulta aprenda a gestionar sus emociones y a tener una comprensión de lo que le está sucediendo.',
    cita: '"La terapia Gestalt no es un conjunto de técnicas sino la transmisión de una actitud, una forma de estar en la vida." — Claudio Naranjo',
    motivos: [
      { numero: '01', titulo: 'Gestalt', desc: 'Trabajamos en profundidad con la persona para comprender qué le sucede y aprender a gestionar las emociones en el momento presente.' },
      { numero: '02', titulo: 'Terapia Sistémica', desc: 'Ponemos al individuo en su contexto relacional para ver los patrones que se repiten y encontrar maneras diferentes de vincularse y de estar en la vida.' },
      { numero: '03', titulo: 'Método Wingwave', desc: 'Especialmente indicado para trabajar con bloqueos, miedos y asuntos pendientes, así como con situaciones traumáticas mediante desensibilización.' },
      { numero: '04', titulo: 'Constelaciones Familiares', desc: 'Para explorar y resolver dinámicas familiares, relaciones interpersonales y conflictos personales de raíz sistémica.' },
    ],
    proceso: [
      { paso: '01', texto: 'Orientación telefónica inicial en la que te escuchamos y valoramos qué tipo de abordaje es el más adecuado para ti.' },
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
    subtitulo: 'Comprender qué le sucede a tu hijo y abrir vías de comunicación es vital para que esta etapa sea un momento de crecimiento.',
    categoria: 'Adolescentes',
    imagen: '/images/terapia-adolescentes-psicologia-granada-la-seda.jpg',
    imagenAlt: 'Sesión de terapia psicológica para adolescentes en el Centro La Seda, Granada',
    descripcion: 'La etapa de la adolescencia es difícil de comprender y de gestionar. La dinámica familiar que había cuando eran niños ya no funciona. La convivencia en familia puede convertirse en una pesadilla por el aislamiento emocional de los adolescentes, el rechazo a los padres y las reacciones abruptas y sin sentido.',
    descripcion2: 'La adolescencia es una montaña rusa en la que sufre toda la familia. Es una etapa de cambios en la que es necesario comprender qué le sucede a los hijos y abrir vías de comunicación para que puedan expresarse, sentirse entendidos y comprendidos. Parte de la eficacia de la terapia va en función de la participación de los padres en el proceso.',
    cita: '"Para acompañar bien a un adolescente primero hay que entender qué le está sucediendo por dentro."',
    motivos: [
      { numero: '01', titulo: 'Aislamiento y tristeza', desc: 'Cuando el adolescente se encierra en su cuarto, pierde el interés por sus actividades o muestra signos de tristeza profunda o bajo estado de ánimo.' },
      { numero: '02', titulo: 'Agresividad e impulsividad', desc: 'La relación con la violencia verbal y el control de los impulsos son aspectos necesarios a trabajar cuando hay un desajuste emocional y una pérdida de límites.' },
      { numero: '03', titulo: 'Duelos y pérdidas', desc: 'Separación de los padres, fallecimiento de un familiar, ruptura sentimental o cambio de ciudad que el adolescente no consigue superar.' },
      { numero: '04', titulo: 'Fracaso escolar', desc: 'El psicólogo ayuda a encontrar una motivación y a buscar estrategias para que el adolescente pueda incorporarse al sistema educativo o formativo.' },
    ],
    proceso: [
      { paso: '01', texto: 'Entrevista inicial con los padres, ya sea juntos o por separado, para explorar el motivo de consulta.' },
      { paso: '02', texto: 'Sesiones 2, 3 y 4 con el adolescente. Sesión 5 de dinámica familiar. Sesión 6 de devolución y pautas para los padres.' },
      { paso: '03', texto: 'Continuación del proceso con el adolescente, incluyendo progresivamente sesiones con los padres según evolucione el trabajo.' },
    ],
    faqs: [
      { pregunta: '¿Cuánto duran las sesiones?', respuesta: '55 minutos.' },
      { pregunta: '¿A partir de qué edad trabajáis con adolescentes?', respuesta: 'A partir de los doce años. Para niños de entre seis y once años, consulta la terapia infantil.' },
      { pregunta: '¿Cuándo veremos resultados?', respuesta: 'La adolescencia es un proceso complejo. Abordar el estado emocional del adolescente como un todo es vital para que los resultados puedan verse en un par de meses de trabajo.' },
    ],
  },

  'pareja-familia': {
    titulo: 'Terapia de',
    tituloItalico: 'Pareja y Familia',
    subtitulo: 'Un espacio seguro para mejorar la comunicación, resolver conflictos y comprenderse mutuamente.',
    categoria: 'Pareja y familia',
    imagen: '/images/terapia-pareja-familia-psicologia-granada-la-seda.jpg',
    imagenAlt: 'Terapia de pareja y familia en el Centro de Psicología La Seda, Granada',
    descripcion: 'La terapia de pareja y de familia es un tipo de tratamiento psicológico diseñado para ayudar a las parejas y a las familias a resolver conflictos y mejorar su relación. Proporciona un espacio seguro para que las parejas y las familias trabajen juntas en la mejora de su comunicación, resolución de problemas y comprensión mutua.',
    descripcion2: 'La primera sesión es una entrevista inicial con la pareja o con la familia en la que exploramos el motivo de consulta y las expectativas. Las siguientes sesiones son de trabajo conjunto y, dependiendo de la evolución del proceso terapéutico, iremos incluyendo sesiones individuales y de dinámica familiar. La periodicidad es de una vez por semana.',
    cita: '"El objetivo no es siempre salvar la relación, sino ayudar a cada persona a tomar decisiones auténticas desde un lugar más claro."',
    motivos: [
      { numero: '01', titulo: 'Conflictos de pareja', desc: 'Abordamos y resolvemos conflictos recurrentes, mejorando la comunicación y enseñando habilidades de resolución de problemas.' },
      { numero: '02', titulo: 'Infidelidad y confianza', desc: 'Proporcionamos un espacio para abordar el dolor, la ira y la reconstrucción de la confianza tras una ruptura de la misma.' },
      { numero: '03', titulo: 'Crianza y co-parentalidad', desc: 'Las diferencias en la crianza de los hijos y la disciplina generan conflictos. Ayudamos a los padres a establecer una co-educación más efectiva.' },
      { numero: '04', titulo: 'Dinámicas familiares', desc: 'Abordamos conflictos intrafamiliares, cambios de vida, duelos colectivos y crisis de convivencia para que el sistema se reorganice de forma más saludable.' },
    ],
    proceso: [
      { paso: '01', texto: 'Entrevista inicial con la pareja o con la familia en la que exploramos el motivo de consulta y las expectativas.' },
      { paso: '02', texto: 'Sesiones de trabajo conjunto, adaptando el encuadre a las necesidades del proceso: sesiones conjuntas, individuales o de dinámica familiar.' },
      { paso: '03', texto: 'Sesión de devolución y pautas, en la que compartimos las observaciones del proceso y los recursos para seguir avanzando.' },
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
    descripcion: 'La infancia es un momento delicado porque el niño construye sus mecanismos de defensa y genera patrones de conducta que pueden perdurar durante toda su vida. El abandono, la soledad y el rechazo son heridas que, si son trabajadas durante la infancia, facilitarán una mejor gestión emocional incluso cuando el niño sea mayor.',
    descripcion2: 'A veces no sabemos cómo ayudar a los niños a enfrentarse a las dificultades de la vida: miedos, bullying, separación de sus padres, pérdidas de seres queridos. Y los padres tampoco sabemos cómo educar bien, poniendo límites sanos y saludables. La terapia infantil ofrece un espacio adaptado a la edad del niño donde puede explorar su mundo interior con herramientas ajustadas a su momento evolutivo.',
    cita: '"La infancia no es solo el principio de la vida, es también el principio de todo lo que vendrá después."',
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
      { pregunta: '¿Qué edades atiendes?', respuesta: 'Entre seis y once años. Para adolescentes a partir de los doce años, consulta la terapia para adolescentes.' },
      { pregunta: '¿Cómo serán las sesiones con el niño?', respuesta: 'Escuchamos el problema que trae el niño, los padres o la familia. Hacemos las preguntas necesarias para ver el problema desde diferentes puntos de vista y mostramos una forma alternativa de abordarlo para que pueda haber más comunicación y comprensión.' },
    ],
  },

  'grupal': {
    titulo: 'Terapia',
    tituloItalico: 'Grupal',
    subtitulo: 'La Gestalt en grupo: un espacio para crecer con otros, desde la experiencia presente.',
    categoria: 'Grupos terapéuticos',
    imagen: '/images/terapia-grupal-gestalt-psicologia-granada-la-seda.jpg',
    imagenAlt: 'Sesión de terapia grupal Gestalt en el Centro de Psicología La Seda, Granada',
    descripcion: 'La terapia grupal que hacemos en La Seda se apoya en los preceptos de la psicología Gestalt, apoyándonos en la percepción, la conciencia y la experiencia en el momento presente. Esta forma de terapia se lleva a cabo en grupos y tiene varios propósitos y beneficios únicos que no ofrece el formato individual.',
    descripcion2: 'Es un grupo de trabajo con compromiso anual, de modo que los participantes puedan vincularse entre ellos y generar el espacio de confianza que este tipo de trabajo requiere. El grupo se reúne un jueves al mes de 17 a 20 horas y trabajamos con lo que traigan los participantes. Un grupo de este tipo se suele abrir con lo que denominamos una "ronda", donde los participantes cuentan en qué están en ese momento, y a partir de ahí se va desarrollando el trabajo.',
    cita: '"El grupo es un espejo extraordinario: en los demás vemos lo que aún no hemos podido ver en nosotros mismos."',
    motivos: [
      { numero: '01', titulo: 'Conciencia personal', desc: 'Exploración de la experiencia presente y desarrollo de la autoconciencia en el contexto del grupo, que actúa como espejo y amplificador.' },
      { numero: '02', titulo: 'Apoyo social y conexión', desc: 'Compartir el proceso con otros reduce el aislamiento, normaliza las dificultades y genera vínculos genuinos de apoyo mutuo.' },
      { numero: '03', titulo: 'Expresión emocional', desc: 'El grupo ofrece un espacio seguro para la experimentación y la expresión emocional, con la contención del grupo y de la facilitadora.' },
      { numero: '04', titulo: 'Habilidades relacionales', desc: 'Exploración de relaciones interpersonales y desarrollo de habilidades sociales a través de la interacción real con el grupo.' },
    ],
    proceso: [
      { paso: '01', texto: 'Entrevista previa individual con la facilitadora para valorar si el formato grupal es adecuado para el momento del proceso de cada persona.' },
      { paso: '02', texto: 'Incorporación al grupo con compromiso de asistencia anual. El grupo se reúne un jueves al mes de 17 a 20 horas.' },
      { paso: '03', texto: 'Precio: 60 € por taller. Para inscribirse, se abona el primer taller. El compromiso de asistencia es anual.' },
    ],
    faqs: [
      { pregunta: '¿Cuánto dura cada sesión grupal?', respuesta: 'Tres horas, de 17:00 a 20:00 h, una vez al mes.' },
      { pregunta: '¿Puedo incorporarme en cualquier momento?', respuesta: 'El grupo trabaja con un compromiso anual para garantizar la confianza y la vinculación entre participantes. La incorporación se realiza al inicio de cada curso.' },
      { pregunta: '¿Cómo me inscribo?', respuesta: 'Escríbenos a hola@centrolaseda.com o mándanos un WhatsApp indicándonos tu interés. Nos pondremos en contacto contigo para hacer una valoración previa.' },
    ],
  },
}

const id = route.params.id
const terapia = computed(() => terapias[id] ?? null)

// SEO canónico por terapia
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

const faqAbierta = ref(null)
const toggleFaq = (i) => {
  faqAbierta.value = faqAbierta.value === i ? null : i
}
</script>

<template>
  <div>

    <!-- ══════════════════════════════════════════
         ESTADO 404
    ═══════════════════════════════════════════ -->
    <main
      v-if="!terapia"
      class="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <p class="formation-label mb-4">Error 404</p>
      <h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl leading-[1.2] mb-6">
        Terapia no encontrada
      </h1>
      <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/60 max-w-md mb-12">
        La página que buscas no existe o la URL no es correcta.
      </p>
      <NuxtLink to="/terapias" class="btn-primary">
        Ver todas las terapias
        <span class="w-6 h-px bg-white/60 inline-block" />
      </NuxtLink>
    </main>


    <!-- ══════════════════════════════════════════
         ESTADO PRINCIPAL · Terapia encontrada
    ═══════════════════════════════════════════ -->
    <main v-else>

      <!-- ─────────────────────────────────────
           SECCIÓN 1 · HERO
      ────────────────────────────────────── -->
      <PageHero
        :label="`${terapia.categoria} · La Seda Granada`"
        :title-main="terapia.titulo"
        :title-accent="terapia.tituloItalico"
        image="/images/hero-contacto-centro-psicologia-granada-la-seda.jpg"
        :image-alt="`${terapia.titulo} ${terapia.tituloItalico} — Centro de Psicología La Seda Granada`"
        secondary-link="/terapias"
        secondary-label="Ver todas las terapias"
      >
        <template #description>{{ terapia.subtitulo }}</template>
      </PageHero>

      <!-- ─────────────────────────────────────
           SECCIÓN 2 · DESCRIPCIÓN + ÁREAS
      ────────────────────────────────────── -->
      <section class="page-container py-24 md:py-32">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <!-- Columna izquierda: descripción -->
          <div class="lg:sticky lg:top-28">
            <div class="section-divider mb-7" />
            <p class="formation-label mb-4">Sobre esta terapia</p>
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.18] mb-10">
              Un espacio para<br />
              <span class="text-[#27252B]/55 not-italic font-light text-2xl md:text-3xl">
                crecer y estar mejor
              </span>
            </h2>

            <p class="text-base md:text-lg leading-[1.95] text-[#27252B]/75 mb-7">
              {{ terapia.descripcion }}
            </p>
            <p class="text-base md:text-lg leading-[1.95] text-[#27252B]/75 mb-10">
              {{ terapia.descripcion2 }}
            </p>

            <blockquote class="border-l-2 border-[#71B1A5]/50 pl-6 py-1">
              <p class="text-sm md:text-base leading-[1.9] text-[#27252B]/55 font-light italic">
                {{ terapia.cita }}
              </p>
            </blockquote>

            <div class="mt-12 w-1 h-20 bg-[#71B1A5]/25" />
          </div>

          <!-- Columna derecha: áreas de trabajo -->
          <div>
            <p class="formation-label mb-7">Áreas de trabajo</p>
            <div class="border border-[#27252B]/10 divide-y divide-[#27252B]/10">
              <div
                v-for="motivo in terapia.motivos"
                :key="motivo.numero"
                class="work-area-row"
              >
                <span class="work-area-number" aria-hidden="true">{{ motivo.numero }}</span>
                <div>
                  <p class="text-sm font-semibold text-[#27252B] mb-2 leading-snug">{{ motivo.titulo }}</p>
                  <p class="text-sm text-[#27252B]/60 font-light leading-[1.85]">{{ motivo.desc }}</p>
                </div>
              </div>
            </div>

            <!-- Imagen específica de cada terapia -->
            <div class="mt-10 overflow-hidden aspect-[16/8]">
              <NuxtImg
                :src="terapia.imagen"
                :alt="terapia.imagenAlt"
                format="webp"
                loading="lazy"
                width="1200"
                height="600"
                class="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>


      <!-- ─────────────────────────────────────
           SECCIÓN 3 · PROCESO
      ────────────────────────────────────── -->
      <section class="bg-[#27252B] py-20 md:py-28">
        <div class="page-container">

          <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-16 md:mb-20">
            <div class="md:col-span-5">
              <p class="formation-label mb-4">El proceso</p>
              <h2 class="formation-title-dark">
                Cómo son las sesiones<br />
                <span class="text-white/45 not-italic font-light text-2xl md:text-3xl">
                  en La Seda
                </span>
              </h2>
            </div>
            <div class="md:col-span-7">
              <p class="text-base md:text-lg leading-[1.85] text-white/55">
                Los procesos terapéuticos y de acompañamiento emocional en La Seda comienzan con una orientación telefónica gratuita en la que te escucharemos y valoraremos qué tipo de abordaje es el más adecuado para ti, así como cuál de nuestros profesionales se adapta mejor a tus necesidades.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-px bg-white/5">
            <div
              v-for="(paso, i) in terapia.proceso"
              :key="i"
              class="benefit-card"
            >
              <span class="process-number" aria-hidden="true">{{ paso.paso }}</span>
              <p class="text-white/65 text-base leading-[1.9] font-light">{{ paso.texto }}</p>
            </div>
          </div>

          <div class="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
            <NuxtLink to="/contacto" class="btn-cta-hero group">
              <span class="btn-shimmer-layer" aria-hidden="true" />
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Pedir orientación gratuita
            </NuxtLink>
            <NuxtLink to="/terapias" class="nav-back-link-dark group">
              <svg
                class="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-1 transition-transform duration-200"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
              Ver todas las terapias
            </NuxtLink>
          </div>

        </div>
      </section>


      <!-- ─────────────────────────────────────
           SECCIÓN 4 · FAQs + CONTACTO
      ────────────────────────────────────── -->
      <section class="bg-[#27252B]/5 py-20 md:py-28">
        <div class="page-container">
          <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">

            <div class="lg:col-span-7">
              <p class="formation-label mb-4">Preguntas frecuentes</p>
              <h2 class="formation-title-light mb-10">Resolvemos tus dudas</h2>

              <!-- FAQ Schema -->
              <div
                class="divide-y divide-[#27252B]/10"
                itemscope
                itemtype="https://schema.org/FAQPage"
              >
                <div
                  v-for="(faq, i) in terapia.faqs"
                  :key="i"
                  class="group"
                  itemscope
                  itemprop="mainEntity"
                  itemtype="https://schema.org/Question"
                >
                  <button
                    class="w-full flex items-start justify-between gap-6 py-6 text-left cursor-pointer"
                    :aria-expanded="faqAbierta === i"
                    @click="toggleFaq(i)"
                  >
                    <span
                      class="text-base md:text-lg font-medium text-[#27252B] leading-snug group-hover:text-[#71B1A5] transition-colors duration-200"
                      :class="{ 'text-[#71B1A5]': faqAbierta === i }"
                      itemprop="name"
                    >
                      {{ faq.pregunta }}
                    </span>
                    <span class="shrink-0 mt-0.5" aria-hidden="true">
                      <svg
                        class="w-5 h-5 text-[#71B1A5] transition-transform duration-300"
                        :class="{ 'rotate-45': faqAbierta === i }"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                      </svg>
                    </span>
                  </button>

                  <div
                    class="overflow-hidden transition-all duration-300"
                    :class="faqAbierta === i ? 'max-h-96 pb-6' : 'max-h-0'"
                    itemscope
                    itemprop="acceptedAnswer"
                    itemtype="https://schema.org/Answer"
                  >
                    <p
                      class="text-base md:text-lg leading-[1.9] text-[#27252B]/70 font-light"
                      itemprop="text"
                    >
                      {{ faq.respuesta }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 space-y-6">

              <div class="cta-box-dark">
                <div class="section-divider mb-7" />
                <h3 class="formation-title-dark mb-6">
                  ¿Listo para dar<br />
                  <span class="text-white/55">el primer paso?</span>
                </h3>
                <p class="text-white/60 text-base leading-[1.9] mb-9 font-light">
                  Comienza con una orientación telefónica gratuita. Te escuchamos y valoramos juntos qué tipo de acompañamiento se adapta mejor a tu momento vital.
                </p>
                <NuxtLink to="/contacto" class="btn-shimmer group">
                  <span class="btn-shimmer-layer" aria-hidden="true" />
                  <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  Reservar cita
                </NuxtLink>
              </div>

              <div class="contact-card">

                <p class="text-xs tracking-[0.3em] uppercase text-[#27252B]/40 font-medium">
                  Contacto directo
                </p>

                <a
                  href="https://wa.me/34679571977"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-4 group/wa"
                >
                  <div class="contact-icon-circle group-hover/wa:bg-[#71B1A5]/20 transition-colors duration-200">
                    <svg class="w-4 h-4 text-[#71B1A5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs tracking-[0.2em] uppercase text-[#27252B]/40 mb-0.5">WhatsApp · La Seda</p>
                    <p class="text-sm font-medium text-[#27252B] group-hover/wa:text-[#71B1A5] transition-colors duration-200">
                      679 571 977
                    </p>
                  </div>
                </a>

                <div class="contact-divider" />

                <a
                  href="mailto:hola@centrolaseda.com"
                  class="flex items-center gap-4 group/email"
                >
                  <div class="contact-icon-circle group-hover/email:bg-[#71B1A5]/20 transition-colors duration-200">
                    <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs tracking-[0.2em] uppercase text-[#27252B]/40 mb-0.5">Email</p>
                    <p class="text-sm font-medium text-[#27252B] group-hover/email:text-[#71B1A5] transition-colors duration-200">
                      hola@centrolaseda.com
                    </p>
                  </div>
                </a>

                <div class="contact-divider" />

                <div class="flex items-start gap-4">
                  <div class="contact-icon-circle mt-0.5">
                    <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs tracking-[0.2em] uppercase text-[#27252B]/40 mb-0.5">Ubicación</p>
                    <p class="text-sm font-medium text-[#27252B]">Calle Horno de Haza 29, Bajo 1</p>
                    <p class="text-xs text-[#27252B]/45 font-light mt-0.5">Granada · Centro La Seda</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      <!-- ─────────────────────────────────────
           SECCIÓN 5 · OTRAS TERAPIAS
      ────────────────────────────────────── -->
      <section class="page-container py-20 md:py-24">

        <div class="flex items-center justify-between mb-12">
          <div>
            <p class="formation-label mb-2">Otras especialidades</p>
            <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl">
              También puede interesarte
            </h3>
          </div>
          <NuxtLink
            to="/terapias"
            class="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B]/50 hover:text-[#71B1A5] transition-colors duration-200 group"
          >
            Ver todas
            <span class="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" aria-hidden="true" />
          </NuxtLink>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <NuxtLink
            v-for="(t, key) in terapias"
            :key="key"
            :to="`/terapias/${key}`"
            v-show="key !== id"
            class="therapy-card group"
          >
            <div class="overflow-hidden aspect-[3/2]">
              <!-- Imagen específica de cada terapia en las cards -->
              <NuxtImg
                :src="t.imagen"
                :alt="`${t.titulo} ${t.tituloItalico} — La Seda Granada`"
                format="webp"
                loading="lazy"
                width="400"
                height="267"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="therapy-card-body">
              <div class="w-4 h-px bg-[#71B1A5] mb-3" />
              <p class="therapy-card-category">{{ t.categoria }}</p>
              <p class="font-serif italic text-[#27252B] text-lg leading-snug">
                {{ t.titulo }}<br />{{ t.tituloItalico }}
              </p>
              <p class="therapy-card-link">
                Ver más
                <span class="w-4 h-px bg-current group-hover:w-6 transition-all duration-300" aria-hidden="true" />
              </p>
            </div>
          </NuxtLink>
        </div>

      </section>


      <!-- ─────────────────────────────────────
           SECCIÓN 6 · NAVEGACIÓN INFERIOR
      ────────────────────────────────────── -->
      <section class="page-container py-10 md:py-14">
        <div class="border-t border-[#27252B]/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <NuxtLink to="/terapias" class="nav-link-back group">
            <span class="nav-link-line" />
            <span class="nav-link-text">Todas las terapias</span>
          </NuxtLink>
          <NuxtLink to="/contacto" class="nav-link-back group">
            <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
              Contactar con el centro
            </span>
            <span class="nav-link-line" />
          </NuxtLink>
        </div>
      </section>

    </main>

  </div>
</template>