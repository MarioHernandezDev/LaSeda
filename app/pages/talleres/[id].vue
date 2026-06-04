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
      rol: 'Psicoterapeuta Gestalt · Miembro supervisor AETG',
      bio: 'Ana Jiménez es psicoterapeuta Gestalt con formación acreditada y miembro supervisor de la Asociación Española de Terapia Gestalt (AETG). Con más de quince años acompañando a otros terapeutas en sus procesos de supervisión, su trabajo se orienta a ampliar la conciencia del terapeuta sobre sí mismo y sobre el vínculo que establece con cada paciente.',
      bio2: 'Su enfoque integra la supervisión clínica con el trabajo personal del terapeuta, partiendo de la convicción de que el principal instrumento de la terapia es el propio terapeuta. Las sesiones que dirige son un espacio de honestidad, apoyo y rigor profesional.',
    },
    descripcion: 'La supervisión clínica no es un lujo ni un trámite: es una necesidad ética y profesional. Trabajar con el sufrimiento ajeno moviliza inevitablemente el propio mundo emocional del terapeuta. Este espacio ofrece un lugar donde llevar los casos que generan perplejidad, bloqueo o resonancia interna, con la guía de una supervisora experimentada.',
    descripcion2: 'Cada sesión permite ampliar la perspectiva terapéutica, revisar los propios puntos ciegos y fortalecer la capacidad de presencia y contacto en consulta. Además, las horas certificadas cuentan para la formación acreditada en Terapia Gestalt según los criterios de la AETG.',
    beneficios: [
      {
        numero: '01',
        titulo: 'Desarrollo profesional continuo',
        desc: 'Amplía tu mirada clínica y accede a nuevos ángulos de comprensión sobre tus pacientes y tu forma de intervenir.',
      },
      {
        numero: '02',
        titulo: 'Autoconciencia del terapeuta',
        desc: 'Identifica tus propias resonancias, contratransferencias y puntos ciegos que pueden estar afectando la relación terapéutica.',
      },
      {
        numero: '03',
        titulo: 'Feedback constructivo y seguro',
        desc: 'Recibe retroalimentación honesta en un espacio de confianza, sin juicio y orientado al crecimiento.',
      },
      {
        numero: '04',
        titulo: 'Apoyo emocional entre colegas',
        desc: 'Comparte la carga que supone el trabajo clínico y reduce el riesgo de desgaste profesional o fatiga por compasión.',
      },
      {
        numero: '05',
        titulo: 'Rigor ético en la práctica',
        desc: 'Revisa dilemas éticos, límites terapéuticos y situaciones de especial complejidad clínica.',
      },
      {
        numero: '06',
        titulo: 'Certificación AETG',
        desc: 'Las horas de supervisión son válidas para acreditar formación en Terapia Gestalt según los criterios de la Asociación Española de Terapia Gestalt.',
      },
    ],
    fechas: [
      { dia: '21', mes: 'Ene', diasemana: 'Miércoles', descripcion: 'Sesión de supervisión — Enero 2026', horario: 'Consultar horario' },
      { dia: '18', mes: 'Feb', diasemana: 'Miércoles', descripcion: 'Sesión de supervisión — Febrero 2026', horario: 'Consultar horario' },
      { dia: '18', mes: 'Mar', diasemana: 'Miércoles', descripcion: 'Sesión de supervisión — Marzo 2026', horario: 'Consultar horario' },
      { dia: '22', mes: 'Abr', diasemana: 'Miércoles', descripcion: 'Sesión de supervisión — Abril 2026', horario: 'Consultar horario' },
      { dia: '20', mes: 'May', diasemana: 'Miércoles', descripcion: 'Sesión de supervisión — Mayo 2026', horario: 'Consultar horario' },
      { dia: '17', mes: 'Jun', diasemana: 'Miércoles', descripcion: 'Sesión de supervisión — Junio 2026', horario: 'Consultar horario' },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto dura cada sesión de supervisión?',
        respuesta: 'Cada sesión tiene una duración de 55 minutos, siguiendo el formato estándar de la práctica clínica. Esto permite trabajar en profundidad un caso o una temática sin sobrepasar el tiempo necesario para la integración.',
      },
      {
        pregunta: '¿La supervisión es presencial u online?',
        respuesta: 'Ofrecemos ambas modalidades. Las sesiones pueden realizarse de forma presencial en nuestro centro en Granada o en formato online a través de plataforma segura y confidencial, sin diferencia en la calidad del acompañamiento.',
      },
      {
        pregunta: '¿Estas horas cuentan para la certificación en Terapia Gestalt?',
        respuesta: 'Sí. Las horas de supervisión con Ana Jiménez, miembro supervisor acreditada por la AETG, son válidas para computar las horas de supervisión requeridas en los programas de formación en Terapia Gestalt según los criterios de la Asociación Española de Terapia Gestalt.',
      },
      {
        pregunta: '¿Es necesario ser terapeuta Gestalt para participar?',
        respuesta: 'No es imprescindible. La supervisión está abierta a terapeutas de distintas orientaciones que deseen revisar su práctica clínica desde una mirada integrativa. No obstante, el enfoque y el lenguaje de las sesiones es principalmente gestáltico.',
      },
      {
        pregunta: '¿Puedo traer cualquier tipo de caso?',
        respuesta: 'Sí. Puedes traer el caso que más te preocupe, que te genere bloqueo, que te resuene emocionalmente o sobre el que tengas dudas éticas. No hay casos "demasiado simples" ni "demasiado complejos" para la supervisión.',
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
      bio: 'Leonor Cabrera Torrado es especialista en Constelaciones Familiares y en el trabajo con la fuerza interior. Es autora del libro "El camino de la fuerza interior", una obra de referencia para quienes desean comprender y transformar los patrones que heredamos de nuestros sistemas familiares.',
      bio2: 'Su trabajo combina el rigor del método sistémico de Bert Hellinger con una mirada profundamente compasiva hacia las cargas que cada persona lleva sin saberlo. Los talleres que facilita son espacios de movimiento real, donde lo que estaba atascado comienza a fluir.',
    },
    descripcion: 'Las Constelaciones Familiares son una herramienta terapéutica de profundo alcance que permite hacer visible lo que permanece oculto en los sistemas familiares. A través de un trabajo grupal con representantes, emergen las dinámicas inconscientes que pueden estar condicionando nuestra vida emocional, nuestras relaciones y nuestros patrones de comportamiento.',
    descripcion2: 'Estos talleres no requieren experiencia previa ni formación específica. Están abiertos a cualquier persona que sienta el llamado de mirar más hondo en su historia familiar, sanar heridas transgeneracionales o simplemente comprender por qué ciertos patrones se repiten una y otra vez en su vida.',
    beneficios: [
      {
        numero: '01',
        titulo: 'Resolución de conflictos familiares',
        desc: 'Comprende las raíces sistémicas de los conflictos y encuentra movimientos de resolución que van más allá del nivel racional.',
      },
      {
        numero: '02',
        titulo: 'Patrones de comportamiento repetitivos',
        desc: 'Identifica y transforma los patrones inconscientes que se repiten en tus relaciones, tu trabajo o tu historia de vida.',
      },
      {
        numero: '03',
        titulo: 'Liberación de cargas transgeneracionales',
        desc: 'Devuelve simbólicamente lo que pertenece a generaciones anteriores y recupera tu propio lugar en el sistema familiar.',
      },
      {
        numero: '04',
        titulo: 'Elaboración de duelos latentes',
        desc: 'Da un lugar en el corazón a las pérdidas no lloradas —propias o heredadas— para que el sistema pueda moverse hacia adelante.',
      },
      {
        numero: '05',
        titulo: 'Recuperar la fuerza interior',
        desc: 'Reconecta con tus propios recursos vitales cuando la energía se ha quedado atrapada en lealtades o deudas familiares invisibles.',
      },
      {
        numero: '06',
        titulo: 'Mayor claridad y dirección vital',
        desc: 'Muchas personas salen de los talleres con una percepción renovada de sí mismas y con mayor capacidad para tomar decisiones desde un lugar más libre.',
      },
    ],
    fechas: [
      { dia: '28', mes: 'Feb', diasemana: 'Sábado', descripcion: 'Taller Breve de Constelaciones Familiares', horario: '10:00h – 14:00h' },
      { dia: '18', mes: 'Abr', diasemana: 'Sábado', descripcion: 'Taller Breve de Constelaciones Familiares', horario: '10:00h – 14:00h' },
      { dia: '16', mes: 'May', diasemana: 'Sábado', descripcion: 'Taller Breve de Constelaciones Familiares', horario: '10:00h – 14:00h' },
      { dia: '20', mes: 'Jun', diasemana: 'Sábado', descripcion: 'Taller de Constelaciones para la Renovación', horario: 'Consultar horario', especial: 'Solsticio de Verano' },
    ],
    faqs: [
      {
        pregunta: '¿Es necesaria experiencia previa para asistir?',
        respuesta: 'No. Los talleres están abiertos a cualquier persona independientemente de su experiencia con las Constelaciones Familiares o con la terapia en general. El único requisito es venir con disposición a observar y a moverse.',
      },
      {
        pregunta: '¿Cómo funciona el taller? ¿Qué ocurre durante la sesión?',
        respuesta: 'Antes del taller se realiza una breve entrevista con Leonor para conocer la temática que cada persona desea trabajar. Durante el taller, se seleccionan representantes del grupo para encarnar a los miembros del sistema familiar. A través de sus movimientos y sensaciones emerge información que el sistema quiere mostrar, y la facilitadora guía el proceso hacia un movimiento de resolución.',
      },
      {
        pregunta: '¿Puedo participar como representante sin tener una constelación propia?',
        respuesta: 'Sí, y es una experiencia muy valiosa en sí misma. Participar como representante permite vivir en primera persona el campo sistémico y obtener información sobre los propios patrones, incluso sin constelarse directamente.',
      },
      {
        pregunta: '¿Cuántas personas hay en cada taller?',
        respuesta: 'Los talleres son de grupo reducido, con un máximo de 12 participantes, para garantizar la profundidad del trabajo y el cuidado de cada persona presente.',
      },
      {
        pregunta: '¿Qué debo llevar o cómo debo prepararme?',
        respuesta: 'No es necesaria ninguna preparación especial. Se recomienda venir con ropa cómoda, algo de agua y, si lo deseas, haber pensado brevemente en la situación o pregunta que quieres llevar. El resto lo guía Leonor en el propio espacio.',
      },
    ],
  },
}

const id = route.params.id
const taller = computed(() => talleres[id] ?? talleres['constelaciones-familiares'])

// Acordeón FAQs
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
  <main class="bg-[#FDFBF9] text-[#27252B] font-sans overflow-x-hidden">

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · HERO DETALLE
    ════════════════════════════════════════════════ -->
    <section
      class="relative w-full flex flex-col justify-end overflow-hidden"
      style="height: clamp(50vh, 55vh, 60vh);"
    >
      <!-- Imagen de fondo -->
      <img
        src="/images/default.jpg"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover rounded-none"
      />

      <!-- Gradiente oscuro de izquierda -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#27252B]/90 via-[#27252B]/65 to-[#27252B]/20 pointer-events-none" />
      <!-- Gradiente hacia abajo (transición al fondo) -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#FDFBF9] via-[#FDFBF9]/10 to-transparent pointer-events-none" />

      <!-- Contenido -->
      <div class="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-20">

        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 mb-7" aria-label="Ruta de navegación">
          <NuxtLink
            to="/talleres"
            class="text-xs tracking-[0.25em] uppercase text-white/50 hover:text-[#71B1A5] transition-colors duration-200"
          >
            Talleres
          </NuxtLink>
          <span class="text-white/25 text-xs">·</span>
          <span class="text-xs tracking-[0.25em] uppercase text-[#71B1A5]">
            {{ taller.categoria }}
          </span>
        </nav>

        <!-- Facilitadora -->
        <p class="text-[#71B1A5] text-xs md:text-sm tracking-[0.4em] uppercase font-medium mb-5">
          {{ taller.facilitadora.nombre }} &nbsp;·&nbsp; {{ taller.facilitadora.rol }}
        </p>

        <!-- Título dinámico -->
        <h1 class="text-white leading-[1.1] mb-5 max-w-2xl">
          <span class="block font-sans font-light text-4xl md:text-5xl lg:text-6xl tracking-tight">
            {{ taller.titulo }}
          </span>
          <span class="block font-serif italic text-4xl md:text-5xl lg:text-6xl mt-1">
            {{ taller.tituloItalico }}
          </span>
        </h1>

        <!-- Subtítulo -->
        <p class="text-white/65 text-lg md:text-xl leading-[1.75] max-w-xl font-light">
          {{ taller.subtitulo }}
        </p>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 2 · PRESENTACIÓN EDITORIAL
    ════════════════════════════════════════════════ -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-start">

        <!-- Columna izquierda: bio facilitadora (col 5) -->
        <div class="md:col-span-5 md:sticky md:top-28">

          <!-- Imagen facilitadora -->
          <div class="overflow-hidden rounded-none aspect-[3/4] mb-8 relative">
            <img
              src="/images/default.jpg"
              :alt="taller.facilitadora.nombre"
              class="w-full h-full object-cover rounded-none"
            />
            <!-- Marco decorativo desfasado -->
            <div class="absolute -bottom-3 -right-3 w-full h-full border border-[#71B1A5]/30 rounded-none pointer-events-none z-[-1]" />
            <!-- Etiqueta flotante -->
            <div class="absolute bottom-5 left-0 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3">
              <p class="text-xs tracking-[0.2em] uppercase text-[#71B1A5] font-medium">Facilitadora</p>
              <p class="font-serif italic text-[#27252B] text-sm mt-0.5">{{ taller.facilitadora.nombre }}</p>
            </div>
          </div>

          <div class="w-8 h-px bg-[#71B1A5] mb-5" />
          <h2 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-[1.2] mb-6">
            Sobre la facilitadora
          </h2>
          <p class="text-lg leading-[1.9] text-[#27252B]/75 mb-5">
            {{ taller.facilitadora.bio }}
          </p>
          <p class="text-lg leading-[1.9] text-[#27252B]/75">
            {{ taller.facilitadora.bio2 }}
          </p>

        </div>

        <!-- Columna derecha: propósito del taller (col 7) -->
        <div class="md:col-span-7 space-y-8">

          <div>
            <p class="text-[#71B1A5] text-xs tracking-[0.35em] uppercase font-medium mb-4">
              El taller
            </p>
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2] mb-7">
              ¿Qué es y para quién es<br />
              <span class="text-[#27252B]/55 not-italic font-light text-2xl md:text-3xl">
                este espacio?
              </span>
            </h2>
          </div>

          <p class="text-lg md:text-xl leading-[1.9] text-[#27252B]/80">
            {{ taller.descripcion }}
          </p>
          <p class="text-lg md:text-xl leading-[1.9] text-[#27252B]/80">
            {{ taller.descripcion2 }}
          </p>

          <!-- Imagen secundaria -->
          <div class="overflow-hidden rounded-none aspect-[16/8] mt-6">
            <img
              src="/images/default.jpg"
              :alt="`${taller.titulo} ${taller.tituloItalico} en La Seda Granada`"
              class="w-full h-full object-cover rounded-none hover:scale-[1.03] transition-transform duration-700"
            />
          </div>

        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 3 · BENEFICIOS / PROBLEMAS QUE ABORDAMOS
    ════════════════════════════════════════════════ -->
    <section class="bg-[#27252B] py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <!-- Cabecera -->
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div>
            <p class="text-[#71B1A5] text-xs tracking-[0.35em] uppercase font-medium mb-4">
              {{ taller.id === 'supervision-casos' ? 'Beneficios del proceso' : 'Qué abordamos' }}
            </p>
            <h2 class="font-serif italic text-white text-3xl md:text-4xl leading-[1.2]">
              {{ taller.id === 'supervision-casos'
                ? 'Lo que ganas como terapeuta'
                : 'Situaciones que este taller puede mover'
              }}
            </h2>
          </div>
          <div class="w-20 h-px bg-[#71B1A5]/30 md:mb-2" />
        </div>

        <!-- Grid de beneficios -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y divide-white/5 md:divide-y-0 md:divide-x-0">
          <div
            v-for="(b, i) in taller.beneficios"
            :key="i"
            class="group p-8 border border-white/5 hover:bg-white/[0.03] transition-colors duration-300"
          >
            <!-- Número grande -->
            <span class="font-serif italic text-[#71B1A5]/30 text-6xl leading-none block mb-4 select-none group-hover:text-[#71B1A5]/50 transition-colors duration-300">
              {{ b.numero }}
            </span>
            <h3 class="text-white font-medium text-base md:text-lg mb-3 leading-snug">
              {{ b.titulo }}
            </h3>
            <p class="text-white/55 text-base leading-[1.85] font-light">
              {{ b.desc }}
            </p>
          </div>
        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 4 · FECHAS Y LOGÍSTICA
    ════════════════════════════════════════════════ -->
    <section class="py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <!-- Cabecera -->
        <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-14">
          <div class="md:col-span-5">
            <p class="text-[#71B1A5] text-xs tracking-[0.35em] uppercase font-medium mb-4">
              Calendario 2026
            </p>
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2]">
              Próximas fechas
            </h2>
          </div>
          <div class="md:col-span-7">
            <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/65">
              Las plazas son limitadas. Te recomendamos reservar con antelación
              contactando directamente con el centro para confirmar disponibilidad.
            </p>
          </div>
        </div>

        <!-- Lista de fechas -->
        <div class="bg-[#27252B]/[0.03] divide-y divide-[#27252B]/8">

          <div
            v-for="(fecha, i) in taller.fechas"
            :key="i"
            class="group grid md:grid-cols-12 gap-4 md:gap-6 items-center px-6 md:px-8 py-7 md:py-8 hover:bg-white transition-colors duration-200"
          >

            <!-- Número día -->
            <div class="md:col-span-1 flex md:block items-center gap-3">
              <span class="font-serif italic text-[#71B1A5] text-4xl md:text-5xl leading-none">
                {{ fecha.dia }}
              </span>
            </div>

            <!-- Mes y día semana -->
            <div class="md:col-span-2">
              <span class="block text-sm tracking-[0.2em] uppercase text-[#27252B]/50 font-medium">
                {{ fecha.diasemana }}
              </span>
              <span class="block text-xs tracking-[0.2em] uppercase text-[#71B1A5]">
                {{ fecha.mes }} · 2026
              </span>
            </div>

            <!-- Descripción -->
            <div class="md:col-span-5">
              <h3 class="font-serif italic text-[#27252B] text-lg md:text-xl leading-snug group-hover:text-[#71B1A5] transition-colors duration-200">
                {{ fecha.descripcion }}
              </h3>
              <span
                v-if="fecha.especial"
                class="inline-block mt-2 text-[10px] tracking-[0.2em] uppercase bg-[#71B1A5]/15 text-[#71B1A5] px-2.5 py-1 font-medium rounded-none"
              >
                {{ fecha.especial }}
              </span>
            </div>

            <!-- Horario -->
            <div class="md:col-span-2 flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm text-[#27252B]/55 font-light">{{ fecha.horario }}</span>
            </div>

            <!-- CTA -->
            <div class="md:col-span-2 flex md:justify-end">
              <NuxtLink
                to="/contacto"
                class="inline-flex items-center gap-2 group/cta"
              >
                <span class="text-xs tracking-[0.2em] uppercase text-[#27252B] border-b border-[#27252B]/25 pb-0.5 group-hover/cta:border-[#71B1A5] group-hover/cta:text-[#71B1A5] transition-colors duration-200 whitespace-nowrap">
                  Reservar plaza
                </span>
              </NuxtLink>
            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 5 · FAQS + CONTACTO
    ════════════════════════════════════════════════ -->
    <section class="bg-[#27252B]/[0.03] py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <div class="grid md:grid-cols-12 gap-12 md:gap-20">

          <!-- FAQs (col 7) -->
          <div class="md:col-span-7">

            <p class="text-[#71B1A5] text-xs tracking-[0.35em] uppercase font-medium mb-4">
              Preguntas frecuentes
            </p>
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2] mb-10">
              Resolvemos tus dudas
            </h2>

            <!-- Acordeón -->
            <div class="divide-y divide-[#27252B]/10">
              <div
                v-for="(faq, i) in taller.faqs"
                :key="i"
                class="group"
              >
                <button
                  class="w-full flex items-start justify-between gap-6 py-6 text-left cursor-pointer"
                  @click="toggleFaq(i)"
                  :aria-expanded="faqAbierta === i"
                >
                  <span
                    class="text-base md:text-lg font-medium text-[#27252B] leading-snug group-hover:text-[#71B1A5] transition-colors duration-200"
                    :class="{ 'text-[#71B1A5]': faqAbierta === i }"
                  >
                    {{ faq.pregunta }}
                  </span>
                  <!-- Icono +/– -->
                  <span class="shrink-0 mt-0.5">
                    <svg
                      class="w-5 h-5 text-[#71B1A5] transition-transform duration-300"
                      :class="{ 'rotate-45': faqAbierta === i }"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                  </span>
                </button>

                <!-- Respuesta con transición -->
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
          <div class="md:col-span-5">

            <!-- Tarjeta CTA principal -->
            <div class="bg-[#27252B] rounded-none p-9 md:p-10 mb-6">
              <div class="w-8 h-px bg-[#71B1A5] mb-6" />
              <h3 class="font-serif italic text-white text-2xl md:text-3xl leading-[1.2] mb-5">
                ¿Listo para reservar<br />tu plaza?
              </h3>
              <p class="text-white/60 text-base leading-[1.85] mb-8 font-light">
                Escríbenos para confirmar disponibilidad, resolver cualquier duda o
                reservar tu lugar en el próximo taller.
              </p>

              <NuxtLink
                to="/contacto"
                class="group relative w-full inline-flex items-center justify-center gap-3 bg-[#71B1A5] text-white px-8 py-4 text-xs tracking-[0.25em] uppercase font-semibold rounded-none hover:bg-[#5a9a8e] transition-all duration-300 shadow-lg shadow-[#71B1A5]/25 hover:-translate-y-0.5 overflow-hidden"
              >
                <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Reservar Plaza
              </NuxtLink>
            </div>

            <!-- Datos de contacto directo -->
            <div class="bg-white border border-[#27252B]/8 rounded-none p-8 space-y-5">

              <p class="text-xs tracking-[0.3em] uppercase text-[#27252B]/40 font-medium mb-2">
                Contacto directo
              </p>

              <a
                href="https://wa.me/34679571977"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 group/wa"
              >
                <div class="w-9 h-9 bg-[#71B1A5]/10 flex items-center justify-center rounded-none shrink-0 group-hover/wa:bg-[#71B1A5]/20 transition-colors duration-200">
                  <svg class="w-4 h-4 text-[#71B1A5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                </div>
                <div>
                  <p class="text-xs tracking-[0.2em] uppercase text-[#27252B]/40 mb-0.5">WhatsApp</p>
                  <p class="text-sm font-medium text-[#27252B] group-hover/wa:text-[#71B1A5] transition-colors duration-200">
                    679 571 977
                  </p>
                </div>
              </a>

              <div class="h-px bg-[#27252B]/8" />

              <a
                href="mailto:hola@laseda.es"
                class="flex items-center gap-4 group/email"
              >
                <div class="w-9 h-9 bg-[#71B1A5]/10 flex items-center justify-center rounded-none shrink-0 group-hover/email:bg-[#71B1A5]/20 transition-colors duration-200">
                  <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-xs tracking-[0.2em] uppercase text-[#27252B]/40 mb-0.5">Email</p>
                  <p class="text-sm font-medium text-[#27252B] group-hover/email:text-[#71B1A5] transition-colors duration-200">
                    hola@laseda.es
                  </p>
                </div>
              </a>

              <div class="h-px bg-[#27252B]/8" />

              <div class="flex items-start gap-4">
                <div class="w-9 h-9 bg-[#71B1A5]/10 flex items-center justify-center rounded-none shrink-0">
                  <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-xs tracking-[0.2em] uppercase text-[#27252B]/40 mb-0.5">Ubicación</p>
                  <p class="text-sm font-medium text-[#27252B]">Granada, Andalucía</p>
                  <p class="text-xs text-[#27252B]/45 font-light mt-0.5">Centro La Seda</p>
                </div>
              </div>

            </div>

            <!-- Enlace volver -->
            <div class="mt-6">
              <NuxtLink
                to="/talleres"
                class="inline-flex items-center gap-2 group text-sm tracking-[0.2em] uppercase text-[#27252B]/50 hover:text-[#71B1A5] transition-colors duration-200"
              >
                <svg
                  class="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-1 transition-transform duration-200"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
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