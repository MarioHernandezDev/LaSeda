<script setup>
const route = useRoute()

const talleres = {
  'supervision-casos': {
    id: 'supervision-casos',
    titulo: 'Supervisión de Casos',
    tituloItalico: 'para Terapeutas',
    subtitulo: 'Un espacio de crecimiento profesional donde la mirada del supervisor amplía la tuya.',
    categoria: 'Formación profesional',
    facilitadora: {
      nombre: 'Ana Jiménez',
      rol: 'Psicóloga · Miembro didacta y supervisora AETG',
      bio: 'Ana Jiménez es psicóloga y psicoterapeuta Gestalt, miembro didacta y supervisora acreditada por la Asociación Española de Terapia Gestalt (AETG). Con más de quince años acompañando a otros terapeutas en sus procesos de supervisión, su trabajo se orienta a ampliar la conciencia del terapeuta sobre sí mismo y sobre el vínculo que establece con cada paciente.',
      bio2: 'Su enfoque integra la supervisión clínica con el trabajo personal del terapeuta, partiendo de la convicción de que el principal instrumento de la terapia es el propio terapeuta. Las sesiones que dirige son un espacio de honestidad, apoyo y rigor profesional.',
    },
    descripcion: 'La supervisión para psicólogos y terapeutas es un proceso esencial para el desarrollo profesional y la calidad de la atención que se brinda a los pacientes. Trabajar con el sufrimiento ajeno moviliza inevitablemente el propio mundo emocional del terapeuta. Este espacio ofrece un lugar donde llevar los casos que generan perplejidad, bloqueo o resonancia interna, con la guía de una supervisora con amplia experiencia clínica.',
    descripcion2: 'La supervisión puede ser tanto en sesiones individuales como grupales, en formato presencial en el Centro La Seda de Granada o en modalidad online. Cada sesión permite ampliar la perspectiva terapéutica, revisar los propios puntos ciegos y fortalecer la capacidad de presencia y contacto en consulta. Las horas certificadas cuentan para la formación acreditada en Terapia Gestalt según los criterios de la AETG.',
    beneficios: [
      {
        numero: '01',
        titulo: 'Desarrollo profesional continuo',
        desc: 'Orientación y apoyo para mejorar habilidades, ampliar la comprensión de la terapia Gestalt y mantenerse actualizado con los últimos enfoques terapéuticos.',
      },
      {
        numero: '02',
        titulo: 'Reflexión y autoconciencia',
        desc: 'Explora tus propias reacciones, emociones y patrones de interacción con los clientes. Identifica cómo estos factores pueden estar influyendo en la relación terapéutica.',
      },
      {
        numero: '03',
        titulo: 'Retroalimentación constructiva',
        desc: 'Recibe retroalimentación honesta y objetiva sobre tu trabajo en un espacio de confianza: sugerencias de intervención, gestión de situaciones difíciles y mejora del vínculo terapéutico.',
      },
      {
        numero: '04',
        titulo: 'Apoyo emocional entre colegas',
        desc: 'Comparte la carga que supone el trabajo clínico en un espacio seguro. La supervisión ayuda a prevenir el agotamiento, el desgaste profesional y la fatiga por compasión.',
      },
      {
        numero: '05',
        titulo: 'Rigor ético en la práctica',
        desc: 'Revisa dilemas éticos, límites terapéuticos y situaciones de especial complejidad clínica con el apoyo de una supervisora acreditada.',
      },
      {
        numero: '06',
        titulo: 'Certificación AETG',
        desc: 'Las horas de supervisión con Ana Jiménez, miembro supervisor acreditada por la AETG, son válidas para acreditar la formación en Terapia Gestalt según los criterios de la Asociación.',
      },
    ],
    fechas: [
      { dia: '21', mes: 'Ene', diasemana: 'Miércoles', descripcion: 'Sesión grupal de supervisión — Enero 2026', horario: '17:00 – 20:00 h' },
      { dia: '18', mes: 'Feb', diasemana: 'Miércoles', descripcion: 'Sesión grupal de supervisión — Febrero 2026', horario: '17:00 – 20:00 h' },
      { dia: '18', mes: 'Mar', diasemana: 'Miércoles', descripcion: 'Sesión grupal de supervisión — Marzo 2026', horario: '17:00 – 20:00 h' },
      { dia: '22', mes: 'Abr', diasemana: 'Miércoles', descripcion: 'Sesión grupal de supervisión — Abril 2026', horario: '17:00 – 20:00 h' },
      { dia: '20', mes: 'May', diasemana: 'Miércoles', descripcion: 'Sesión grupal de supervisión — Mayo 2026', horario: '17:00 – 20:00 h' },
      { dia: '17', mes: 'Jun', diasemana: 'Miércoles', descripcion: 'Sesión grupal de supervisión — Junio 2026', horario: '17:00 – 20:00 h' },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto duran las sesiones individuales?',
        respuesta: 'Las sesiones individuales duran 55 minutos, siguiendo el formato estándar de la práctica clínica.',
      },
      {
        pregunta: '¿La supervisión es presencial u online?',
        respuesta: 'Pueden ser tanto online a través de Skype u otro sistema de videoconferencia, como presencial en el Centro La Seda, en calle Horno de Haza 29 Bajo 1, Granada.',
      },
      {
        pregunta: '¿Cómo serán las sesiones?',
        respuesta: 'Trabajaremos con tus dificultades en terapia, tanto con tus bloqueos como con los de tus pacientes. El trabajo parte siempre de lo que tú traes a la sesión.',
      },
      {
        pregunta: 'No tengo pacientes todavía, ¿puedo supervisarme?',
        respuesta: 'Sí. En este caso trabajaremos las dificultades que tienes para iniciar tu camino como psicólogo o terapeuta: miedos, bloqueos, inseguridades o preguntas sobre el encuadre.',
      },
      {
        pregunta: '¿Estas horas cuentan para la certificación en Terapia Gestalt?',
        respuesta: 'Sí. Ana Jiménez es miembro supervisor y didacta de la AETG, de modo que las horas de supervisión que hagas con ella te las puede certificar para que sirvan para tu formación acreditada.',
      },
    ],
  },

  'constelaciones-familiares': {
    id: 'constelaciones-familiares',
    titulo: 'Talleres de Constelaciones',
    tituloItalico: 'Familiares',
    subtitulo: 'Revelar lo invisible para liberarse de lo que no nos pertenece.',
    categoria: 'Espacios vivenciales',
    facilitadora: {
      nombre: 'Leonor Cabrera Torrado',
      rol: 'Especialista en Constelaciones Familiares · Autora',
      bio: 'Leonor Cabrera Torrado está especializada en trabajar la fuerza interior y los bloqueos emocionales a través de las Constelaciones Familiares y de otros medios, como el método Wingwave®, del que es co-formadora acreditada por el Instituto Besser-Siegmund de Hamburgo. Colaboradora del Programa SAT de Claudio Naranjo, con formación en Gestalt y PNL.',
      bio2: 'Es autora del libro "El camino de la fuerza interior". Su trabajo combina el rigor del método sistémico de Bert Hellinger con una mirada profundamente compasiva hacia las cargas que cada persona lleva, muchas veces sin saberlo. Los talleres que facilita son espacios de movimiento real, donde lo que estaba atascado comienza a fluir.',
    },
    descripcion: 'Los talleres de Constelaciones Familiares de La Seda sirven para abordar problemas y dinámicas familiares, así como otros desafíos personales o interpersonales. Esta técnica fue desarrollada por Bert Hellinger en la década de los 90 y se basa en la idea de que las familias tienen patrones y lealtades invisibles que pueden afectar la vida de sus miembros de manera profunda.',
    descripcion2: 'El objetivo principal es revelar y resolver estos patrones para promover el bienestar emocional y las relaciones saludables. Los talleres no requieren experiencia previa ni formación específica. Están abiertos a cualquier persona que sienta el llamado de mirar más hondo en su historia familiar, sanar heridas transgeneracionales o comprender por qué ciertos patrones se repiten una y otra vez en su vida.',
    beneficios: [
      {
        numero: '01',
        titulo: 'Resolver conflictos familiares',
        desc: 'Identifica y resuelve conflictos persistentes dentro de la familia: entre padres e hijos, entre hermanos o conflictos intergeneracionales que se arrastran sin que nadie sepa bien por qué.',
      },
      {
        numero: '02',
        titulo: 'Comprender patrones repetitivos',
        desc: 'Las personas a menudo repiten patrones que se originan en su historia familiar. Las Constelaciones ayudan a identificar esos patrones y a comprender por qué siguen reproduciéndose.',
      },
      {
        numero: '03',
        titulo: 'Liberar cargas transgeneracionales',
        desc: 'Devuelve simbólicamente lo que pertenece a generaciones anteriores y recupera tu propio lugar en el sistema. Lo que no es tuyo no tienes por qué cargarlo.',
      },
      {
        numero: '04',
        titulo: 'Elaborar duelos y pérdidas',
        desc: 'Hay duelos que no pueden ser elaborados y que siguen doliendo a pesar de que pasa el tiempo. Las Constelaciones ofrecen un lugar para que esa pérdida acabe de integrarse.',
      },
      {
        numero: '05',
        titulo: 'Tomar decisiones importantes',
        desc: 'En ocasiones, las personas recurren a las Constelaciones para tomar decisiones sobre trabajo, relaciones o crianza, cuando sienten que hay algo que no les deja ver con claridad.',
      },
      {
        numero: '06',
        titulo: 'Autoconocimiento y dirección vital',
        desc: 'Muchas personas salen de los talleres con una percepción renovada de sí mismas y una mayor capacidad para tomar decisiones desde un lugar más libre y con mayor claridad interior.',
      },
    ],
    fechas: [
      { dia: '28', mes: 'Feb', diasemana: 'Sábado', descripcion: 'Taller Breve de Constelaciones Familiares', horario: '10:00 – 14:00 h' },
      { dia: '18', mes: 'Abr', diasemana: 'Sábado', descripcion: 'Taller Breve de Constelaciones Familiares', horario: '10:00 – 14:00 h' },
      { dia: '16', mes: 'May', diasemana: 'Sábado', descripcion: 'Taller Breve de Constelaciones Familiares', horario: '10:00 – 14:00 h' },
      { dia: '20', mes: 'Jun', diasemana: 'Sábado', descripcion: 'Taller de Constelaciones para la Renovación', horario: 'Consultar horario', especial: 'Solsticio de Verano' },
    ],
    faqs: [
      {
        pregunta: '¿Es necesaria experiencia previa para asistir?',
        respuesta: 'No. Los talleres están abiertos a cualquier persona independientemente de su experiencia con las Constelaciones Familiares o con la terapia en general. El único requisito es venir con disposición a observar y a moverse.',
      },
      {
        pregunta: '¿Cómo funciona el taller? ¿Qué ocurre durante la sesión?',
        respuesta: 'El facilitador elige entre los asistentes a alguien para trabajar su tema y le hace una pequeña entrevista para conocer el problema que quiere trabajar, qué desea conseguir y los hechos importantes de su sistema familiar. A partir de ahí, se seleccionan representantes del grupo que encarnan a los miembros del sistema, y a través de sus movimientos y sensaciones emerge información que guía el proceso hacia una resolución.',
      },
      {
        pregunta: '¿Es seguro que constelaré en el taller?',
        respuesta: 'En este tipo de talleres no podemos asegurar que todos los participantes constelen, porque en ocasiones, por razones terapéuticas, no es adecuado hacer una constelación sino otro tipo de intervención. El trabajo va mucho más allá de constelar: a lo largo del taller los asistentes van recibiendo comprensiones y tomas de conciencia que pueden ser igual o más efectivas. Abrirse a la experiencia de lo que suceda es la actitud más sanadora.',
      },
      {
        pregunta: '¿Puedo participar como representante sin tener una constelación propia?',
        respuesta: 'Sí, y es una experiencia muy valiosa en sí misma. Participar como representante permite vivir en primera persona el campo sistémico y obtener información sobre los propios patrones, incluso sin constelar directamente.',
      },
      {
        pregunta: '¿Cómo reservo plaza en un taller?',
        respuesta: 'Puedes escribirnos a hola@centrolaseda.com o enviar un WhatsApp al 656 431 309 para pedir más información e inscribirte.',
      },
    ],
  },
}

const id = route.params.id
const taller = computed(() => talleres[id] ?? talleres['constelaciones-familiares'])

const faqAbierta = ref(null)
const toggleFaq = (i) => {
  faqAbierta.value = faqAbierta.value === i ? null : i
}

useSeoMeta({
  title: () => `${taller.value.titulo} ${taller.value.tituloItalico} · La Seda Granada`,
  description: () => taller.value.subtitulo,
})
</script>

<template>
  <main>

    <!-- ─────────────────────────────────────
         SECCIÓN 1 · HERO
    ────────────────────────────────────── -->
    <PageHero
      :label="`${taller.categoria} · ${taller.facilitadora.nombre}`"
      :title-main="taller.titulo"
      :title-accent="taller.tituloItalico"
      image="/images/hero-contacto-centro-psicologia-granada-la-seda.jpg"
      :image-alt="`${taller.titulo} ${taller.tituloItalico} — Centro de Psicología La Seda Granada`"
      secondary-link="/talleres"
      secondary-label="Ver todos los talleres"
    >
      <template #description>{{ taller.subtitulo }}</template>
    </PageHero>


    <!-- ─────────────────────────────────────
         SECCIÓN 2 · PRESENTACIÓN EDITORIAL
    ────────────────────────────────────── -->
    <section class="page-container py-24 md:py-32">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        <!-- Columna izquierda: bio facilitadora -->
        <div class="lg:sticky lg:top-28">

          <div class="overflow-hidden aspect-[3/4] mb-10 relative">
            <!-- ✅ NuxtImg con atributos SEO correctos; below-the-fold → lazy -->
            <NuxtImg
              src="/images/default.jpg"
              :alt="`${taller.facilitadora.nombre} — facilitadora en Centro de Psicología La Seda Granada`"
              format="webp"
              loading="lazy"
              width="600"
              height="800"
              class="w-full h-full object-cover"
            />
            <div class="absolute -bottom-3 -right-3 w-full h-full border border-[#71B1A5]/30 pointer-events-none z-[-1]" />
            <div class="absolute bottom-5 left-0 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3">
              <p class="formation-label">Facilitadora</p>
              <p class="font-serif italic text-[#27252B] text-sm mt-0.5">{{ taller.facilitadora.nombre }}</p>
            </div>
          </div>

          <div class="section-divider mb-6" />
          <h2 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-[1.2] mb-7">
            Sobre la facilitadora
          </h2>
          <p class="text-base md:text-lg leading-[1.95] text-[#27252B]/70 mb-6">
            {{ taller.facilitadora.bio }}
          </p>
          <p class="text-base md:text-lg leading-[1.95] text-[#27252B]/70">
            {{ taller.facilitadora.bio2 }}
          </p>

        </div>

        <!-- Columna derecha: propósito del taller -->
        <div class="space-y-10">

          <div>
            <p class="formation-label mb-5">El taller</p>
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2] mb-8">
              ¿Qué es y para quién es<br />
              <span class="text-[#27252B]/50 not-italic font-light text-2xl md:text-3xl">
                este espacio?
              </span>
            </h2>
          </div>

          <p class="text-base md:text-lg leading-[1.95] text-[#27252B]/75">
            {{ taller.descripcion }}
          </p>
          <p class="text-base md:text-lg leading-[1.95] text-[#27252B]/75">
            {{ taller.descripcion2 }}
          </p>

          <!-- ✅ NuxtImg con atributos SEO correctos; below-the-fold → lazy -->
          <div class="overflow-hidden aspect-[16/8] mt-2">
            <NuxtImg
              src="/images/default.jpg"
              :alt="`${taller.titulo} ${taller.tituloItalico} — Centro de Psicología La Seda Granada`"
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
         SECCIÓN 3 · BENEFICIOS
    ────────────────────────────────────── -->
    <section class="bg-[#27252B] py-20 md:py-28">
      <div class="page-container">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-18">
          <div>
            <p class="formation-label mb-4">
              {{ taller.id === 'supervision-casos' ? 'Beneficios del proceso' : 'Qué abordamos' }}
            </p>
            <h2 class="formation-title-dark">
              {{ taller.id === 'supervision-casos'
                ? 'Lo que ganas como terapeuta'
                : 'Situaciones que este taller puede mover' }}
            </h2>
          </div>
          <div class="w-20 h-px bg-[#71B1A5]/30 md:mb-2 shrink-0" />
        </div>

        <!-- ✅ gap-px + bg-white/5 en lugar de bg-white/[0.05] -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          <div
            v-for="(b, i) in taller.beneficios"
            :key="i"
            class="benefit-card group"
          >
            <span class="benefit-number" aria-hidden="true">{{ b.numero }}</span>
            <h3 class="benefit-title">{{ b.titulo }}</h3>
            <p class="benefit-desc">{{ b.desc }}</p>
          </div>
        </div>

      </div>
    </section>


    <!-- ─────────────────────────────────────
         SECCIÓN 4 · FECHAS Y LOGÍSTICA
    ────────────────────────────────────── -->
    <section class="py-20 md:py-28">
      <div class="page-container">

        <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-14 md:mb-16">
          <div class="md:col-span-5">
            <p class="formation-label mb-4">Calendario 2026</p>
            <h2 class="formation-title-light">Próximas fechas</h2>
          </div>
          <div class="md:col-span-7">
            <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/65">
              Las plazas son limitadas. Te recomendamos reservar con antelación
              contactando directamente con el centro para confirmar disponibilidad.
            </p>
          </div>
        </div>

        <!-- ✅ bg-[#27252B]/5 y divide-[#27252B]/10 en lugar de /[0.03] y /8 -->
        <div class="bg-[#27252B]/5 divide-y divide-[#27252B]/10">
          <div
            v-for="(fecha, i) in taller.fechas"
            :key="i"
            class="date-row group"
          >
            <div class="md:col-span-1 flex md:block items-center gap-3">
              <span class="date-day">{{ fecha.dia }}</span>
            </div>

            <div class="md:col-span-2">
              <span class="block text-sm tracking-[0.2em] uppercase text-[#27252B]/50 font-medium">
                {{ fecha.diasemana }}
              </span>
              <span class="block text-xs tracking-[0.2em] uppercase text-[#71B1A5]">
                {{ fecha.mes }} · 2026
              </span>
            </div>

            <div class="md:col-span-5">
              <h3 class="font-serif italic text-[#27252B] text-lg md:text-xl leading-snug group-hover:text-[#71B1A5] transition-colors duration-200">
                {{ fecha.descripcion }}
              </h3>
              <!-- ✅ training-tag ya definida en el CSS global -->
              <span
                v-if="fecha.especial"
                class="training-tag inline-block mt-2"
              >
                {{ fecha.especial }}
              </span>
            </div>

            <div class="md:col-span-2 flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm text-[#27252B]/55 font-light">{{ fecha.horario }}</span>
            </div>

            <div class="md:col-span-2 flex md:justify-end">
              <!-- ✅ /contacto — verifica pages/contacto.vue -->
              <NuxtLink to="/contacto" class="inline-flex items-center gap-2 group/cta">
                <span class="text-xs tracking-[0.2em] uppercase text-[#27252B] border-b border-[#27252B]/25 pb-0.5 group-hover/cta:border-[#71B1A5] group-hover/cta:text-[#71B1A5] transition-colors duration-200 whitespace-nowrap">
                  Reservar plaza
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- ─────────────────────────────────────
         SECCIÓN 5 · FAQS + CONTACTO
    ────────────────────────────────────── -->
    <!-- ✅ bg-[#27252B]/5 en lugar de bg-[#27252B]/[0.03] -->
    <section class="bg-[#27252B]/5 py-20 md:py-28">
      <div class="page-container">

        <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">

          <!-- FAQs (col 7) -->
          <div class="lg:col-span-7">
            <p class="formation-label mb-4">Preguntas frecuentes</p>
            <h2 class="formation-title-light mb-10">Resolvemos tus dudas</h2>

            <div class="divide-y divide-[#27252B]/10">
              <div
                v-for="(faq, i) in taller.faqs"
                :key="i"
                class="group"
              >
                <button
                  class="w-full flex items-start justify-between gap-6 py-6 text-left cursor-pointer"
                  :aria-expanded="faqAbierta === i"
                  @click="toggleFaq(i)"
                >
                  <span
                    class="text-base md:text-lg font-medium text-[#27252B] leading-snug group-hover:text-[#71B1A5] transition-colors duration-200"
                    :class="{ 'text-[#71B1A5]': faqAbierta === i }"
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
                >
                  <p class="text-base md:text-lg leading-[1.9] text-[#27252B]/70 font-light">
                    {{ faq.respuesta }}
                  </p>
                </div>
              </div>
            </div>

          </div>

          <!-- Contacto + CTA (col 5) -->
          <div class="lg:col-span-5 space-y-6">

            <div class="cta-box-dark">
              <div class="section-divider mb-7" />
              <h3 class="formation-title-dark mb-6">
                ¿Listo para reservar<br />
                <span class="text-white/55">tu plaza?</span>
              </h3>
              <p class="text-white/60 text-base leading-[1.9] mb-9 font-light">
                Escríbenos para confirmar disponibilidad, resolver cualquier duda o
                reservar tu lugar en el próximo taller.
              </p>
              <NuxtLink to="/contacto" class="btn-shimmer group">
                <span class="btn-shimmer-layer" aria-hidden="true" />
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Reservar Plaza
              </NuxtLink>
            </div>

            <div class="contact-card">

              <p class="text-xs tracking-[0.3em] uppercase text-[#27252B]/40 font-medium">
                Contacto directo
              </p>

              <a 
                href="https://wa.me/34656431309"
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
                  <p class="text-xs tracking-[0.2em] uppercase text-[#27252B]/40 mb-0.5">WhatsApp · Constelaciones</p>
                  <p class="text-sm font-medium text-[#27252B] group-hover/wa:text-[#71B1A5] transition-colors duration-200">
                    656 431 309
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

            <div class="pt-2">
              <NuxtLink to="/talleres" class="nav-back-link group">
                <svg
                  class="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-1 transition-transform duration-200"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
                Ver todos los talleres
              </NuxtLink>
            </div>

          </div>

        </div>

      </div>
    </section>

  </main>
</template>