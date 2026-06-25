<script setup lang="ts">
import { computed, ref } from 'vue'

const route = useRoute()

// 1. BASE DE DATOS DE PROFESORADO / FACILITADORAS
const staff: Record<string, any> = {
  'ana-jimenez': {
    id: 'ana-jimenez',
    nombre: 'Ana Jiménez',
    rol: 'Psicóloga · Miembro didacta y supervisora AETG',
    imagen: '/images/ana-jimenez-psicologa-gestalt-terapia-infanto-juvenil-granada.jpg',
    imagenAlt: 'Ana Jiménez, psicóloga y supervisora clínica acreditada por la AETG'
  },
  'leonor-cabrera': {
    id: 'leonor-cabrera',
    nombre: 'Leonor Cabrera Torrado',
    rol: 'Especialista en Constelaciones Familiares · Autora',
    imagen: '/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg',
    imagenAlt: 'Leonor Cabrera Torrado, especialista y facilitadora de Constelaciones Familiares'
  }
}

// 2. BASE DE DATOS DE TALLERES (Estructura espejo alineada con formaciones)
const workshops: Record<string, any> = {
  'supervision-casos': {
    titulo: 'Supervisión de Casos',
    tituloItalico: 'para Terapeutas',
    subtitulo: 'Un espacio de crecimiento profesional donde la mirada del supervisor amplía la tuya.',
    categoria: 'Formación profesional',
    imagen: '/images/supervision-casos-clinicos-terapeutas-gestalt-granada.jpg',
    imagenAlt: 'Supervisión de casos clínicos y acompañamiento profesional a terapeutas en Granada',
    facilitadoraId: 'ana-jimenez',
    bio: 'Ana Jiménez es psicóloga y psicoterapeuta Gestalt, miembro didacta y supervisora acreditada por la Asociación Española de Terapia Gestalt (AETG). Con más de <strong>quince años acompañando a otros terapeutas</strong> en sus procesos de supervisión, su trabajo se orienta a ampliar la conciencia del terapeuta sobre sí mismo y sobre el vínculo que establece con cada paciente.',
    bio2: 'Su enfoque integra la supervisión clínica con el trabajo personal del terapeuta, partiendo de la convicción de que el <strong>principal instrumento de la terapia es el propio terapeuta</strong>. Las sesiones que dirige son un espacio de honestidad, apoyo y rigor profesional.',
    descripcion: 'La supervisión para psicólogos y terapeutas es un proceso esencial para el desarrollo profesional y la calidad de la atención que se brinda a los pacientes. Trabajar con el sufrimiento ajeno moviliza inevitablemente el propio mundo emocional del terapeuta. Este espacio ofrece un lugar donde llevar los casos que generan perplejidad, bloqueo o resonancia interna, con la guía de una supervisora con amplia experiencia clínica.',
    descripcion2: 'La supervisión puede ser tanto en sesiones individuales como grupales, en formato presencial en el Centro La Seda de Granada o en modalidad online. Cada sesión permite ampliar la perspectiva terapéutica, revisar los propios puntos ciegos y fortalecer la capacidad de presencia y contacto en consulta. Las horas certificadas cuentan para la formación acreditada en Terapia Gestalt según los criterios de la AETG.',
    beneficiosLabel: 'Beneficios del proceso',
    beneficiosTitulo: 'Lo que ganas como terapeuta',
    beneficios: [
      { numero: '01', titulo: 'Desarrollo profesional continuo', desc: 'Orientación y apoyo para mejorar habilidades, ampliar la comprensión de la terapia Gestalt y mantenerse actualizado con los últimos enfoques terapéuticos.' },
      { numero: '02', titulo: 'Reflexión y autoconciencia', desc: 'Explora tus propias reacciones, emociones y patrones de interacción con los clientes. Identifica cómo estos factores pueden estar influyendo en la relación terapéutica.' },
      { numero: '03', titulo: 'Retroalimentación constructiva', desc: 'Recibe retroalimentación honesta y objetiva sobre tu trabajo en un espacio de confianza: sugerencias de intervención, gestión de situaciones difíciles y mejora del vínculo terapéutico.' },
      { numero: '04', titulo: 'Apoyo emocional entre colegas', desc: 'Comparte la carga que supone el trabajo clínico en un espacio seguro. La supervisión ayuda a prevenir el agotamiento, el desgaste profesional y la fatiga por compasión.' },
      { numero: '05', titulo: 'Rigor ético en la práctica', desc: 'Revisa dilemas éticos, límites terapéuticos y situaciones de especial complejidad clínica con el apoyo de una supervisora acreditada.' },
      { numero: '06', titulo: 'Certificación AETG', desc: 'Las horas de supervisión con Ana Jiménez, miembro supervisor acreditada por la AETG, son válidas para acreditar la formación en Terapia Gestalt según los criterios de la Asociación.' },
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
      { pregunta: '¿Cuánto duran las sesiones individuales?', respuesta: 'Las sesiones individuales duran 55 minutos, siguiendo el formato estándar de la práctica clínica.' },
      { pregunta: '¿La supervisión es presencial u online?', respuesta: 'Pueden ser tanto online a través de Skype u otro sistema de videoconferencia, como presencial en el Centro La Seda, en calle Horno de Haza 29 Bajo 1, Granada.' },
      { pregunta: '¿Cómo serán las sesiones?', respuesta: 'Trabajaremos con tus dificultades en terapia, tanto con tus bloqueos como con los de tus pacientes. El trabajo parte siempre de lo que tú traes a la sesión.' },
      { pregunta: 'No tengo pacientes todavía, ¿puedo supervisarme?', respuesta: 'Sí. En este caso trabajaremos las dificultades que tienes para iniciar tu camino como psicólogo o terapeuta: miedos, bloqueos, inseguridades o preguntas sobre el encuadre.' },
      { pregunta: '¿Estas horas cuentan para la certificación en Terapia Gestalt?', respuesta: 'Sí. Ana Jiménez es miembro supervisor y didacta de la AETG, de modo que las horas de supervisión que hagas con ella te las puede certificar para que sirvan para tu formación acreditada.' },
    ],
  },
  'constelaciones-familiares': {
    titulo: 'Talleres de Constelaciones',
    tituloItalico: 'Familiares',
    subtitulo: 'Revelar lo invisible para liberarse de lo que no nos pertenece.',
    categoria: 'Espacios vivenciales',
    imagen: '/images/taller-constelaciones-familiares-granada-centro-la-seda.jpg',
    imagenAlt: 'Taller vivencial y grupal de constelaciones familiares en Granada',
    facilitadoraId: 'leonor-cabrera',
    bio: 'Leonor Cabrera Torrado está especializada en trabajar la fuerza interior y los bloqueos emocionales a través de las <strong>Constelaciones Familiares</strong> y de otros medios, como el método Wingwave®, del que es co-formadora acreditada por el Instituto Besser-Siegmund de Hamburgo. Colaboradora del Programa SAT de Claudio Naranjo.',
    bio2: 'Es autora del libro "El camino de la fuerza interior". Su trabajo combina el rigor del método sistémico de Bert Hellinger con una <strong>mirada profundamente compasiva</strong> hacia las cargas que cada persona lleva. Los talleres que facilita son espacios de movimiento real, donde lo que estaba atascado comienza a fluir.',
    descripcion: 'Los talleres de Constelaciones Familiares de La Seda sirven para abordar problemas y dinámicas familiares, así como otros desafíos personales o interpersonales. Esta técnica fue desarrollada por Bert Hellinger en la década de los 90 y se basa en la idea de que las familias tienen patrones y lealtades invisibles que pueden afectar la vida de sus miembros de manera profunda.',
    descripcion2: 'El objetivo principal es revelar y resolver estos patrones para promover el bienestar emocional y las relaciones saludables. Los talleres no requieren experiencia previa ni formación específica. Están abiertos a cualquier persona que sienta el llamado de mirar más hondo en su historia familiar, sanar heridas transgeneracionales o comprender por qué ciertos patrones se repiten una y otra vez en su vida.',
    beneficiosLabel: 'Qué abordamos',
    beneficiosTitulo: 'Situaciones que este taller puede mover',
    beneficios: [
      { numero: '01', titulo: 'Resolver conflictos familiares', desc: 'Identifica y resuelve conflictos persistententes dentro de la familia: entre padres e hijos, entre hermanos o conflictos intergeneracionales que se arrastran sin que nadie sepa bien por qué.' },
      { numero: '02', titulo: 'Comprender patrones repetitivos', desc: 'Las personas a menudo repiten patrones que se originan en su historia familiar. Las Constelaciones ayudan a identificar esos patrones y a comprender por qué siguen reproduciéndose.' },
      { numero: '03', titulo: 'Liberar cargas transgeneracionales', desc: 'Devuelve simbólicamente lo que pertenece a generaciones anteriores y recupera tu propio lugar en el sistema. Lo que no es tuyo no tienes por qué cargarlo.' },
      { numero: '04', titulo: 'Elaborar duelos y pérdidas', desc: 'Hay duelos que no pueden ser elaborados y que siguen doliendo a pesar de que pasa el tiempo. Las Constelaciones ofrecen un lugar para que esa pérdida acabe de integrarse.' },
      { numero: '05', titulo: 'Tomar decisiones importantes', desc: 'En ocasiones, las personas recurren a las Constelaciones para tomar decisiones sobre trabajo, relaciones o crianza, cuando sienten que hay algo que no les deja ver con claridad.' },
      { numero: '06', titulo: 'Autoconocimiento y dirección vital', desc: 'Muchas personas salen de los talleres con una percepción renovada de sí mismas y una mayor capacidad para tomar decisiones desde un lugar más libre y con mayor claridad interior.' },
    ],
    fechas: [
      { dia: '28', mes: 'Feb', diasemana: 'Sábado', descripcion: 'Taller Breve de Constelaciones Familiares', horario: '10:00 – 14:00 h' },
      { dia: '18', mes: 'Abr', diasemana: 'Sábado', descripcion: 'Taller Breve de Constelaciones Familiares', horario: '10:00 – 14:00 h' },
      { dia: '16', mes: 'May', diasemana: 'Sábado', descripcion: 'Taller Breve de Constelaciones Familiares', horario: '10:00 – 14:00 h' },
      { dia: '20', mes: 'Jun', diasemana: 'Sábado', descripcion: 'Taller de Constelaciones para la Renovación', horario: 'Consultar horario', especial: 'Solsticio de Verano' },
    ],
    faqs: [
      { pregunta: '¿Es necesaria experiencia previa para asistir?', respuesta: 'No. Los talleres están abiertos a cualquier persona independientemente de su experiencia con las Constelaciones Familiares o con la terapia en general. El único requisito es venir con disposición a observar y a moverse.' },
      { pregunta: '¿Cómo funciona el taller? ¿Qué ocurre durante la sesión?', respuesta: 'El facilitador elige entre los asistentes a alguien para trabajar su tema y le hace una pequeña entrevista para conocer el problema que quiere trabajar, qué desea conseguir y los hechos importantes de su sistema familiar. A partir de ahí, se seleccionan representantes del grupo que encarnan a los miembros del sistema, y a través de sus movimientos y sensaciones emerge información que guía el proceso hacia una resolución.' },
      { pregunta: '¿Es seguro que constelaré en el taller?', respuesta: 'En este tipo de talleres no podemos asegurar que todos los participantes constelen, porque en ocasiones, por razones terapéuticas, no es adecuado hacer una constelación sino otro tipo de intervención. El trabajo va mucho más allá de constelar: a lo largo del taller los asistentes van recibiendo comprensiones y tomas de conciencia que pueden ser igual o más efectivas. Abrirse a la experiencia de lo que suceda es la actitud más sanadora.' },
      { pregunta: '¿Puedo participar como representante sin tener una constelación propia?', respuesta: 'Sí, y es una experiencia muy valiosa en sí misma. Participar como representante permite vivir en primera persona el campo sistémico y obtener información sobre los propios patrones, incluso sin constelar directamente.' },
      { pregunta: '¿Cómo reservo plaza en un taller?', respuesta: 'Puedes escribirnos a hola@centrolaseda.com o enviar un WhatsApp al 656 431 309 para pedir más información e inscribirte.' },
    ],
  },
}

// Control de Rutas de Nuxt
const id = route.params.id as string
const taller = computed(() => workshops[id] ?? null)

// Mapeo seguro de la Facilitadora desde el Staff global
const facilitadoraActiva = computed(() => {
  if (!taller.value || !taller.value.facilitadoraId) return null
  return staff[taller.value.facilitadoraId] ?? null
})

// Estado de acordeón reactivo para las FAQs
const faqAbierta = ref<number | null>(null)
const toggleFaq = (i: number) => {
  faqAbierta.value = faqAbierta.value === i ? null : i
}

// Reactividad de SEO Avanzado Dinámico para los Talleres
const seoTitle = computed(() =>
  taller.value
    ? `${taller.value.titulo} ${taller.value.tituloItalico} · Granada 2026`
    : 'Taller no encontrado · Centro La Seda'
)
const seoDescription = computed(() =>
  taller.value ? `${taller.value.subtitulo} Calendario de encuentros 2026.` : ''
)
const seoImage = computed(() =>
  taller.value?.imagen
    ? `https://centrolaseda.com${taller.value.imagen}`
    : 'https://centrolaseda.com/images/centro-psicologia-la-seda-granada-hero.jpg'
)
const seoUrl = computed(() => `https://centrolaseda.com/talleres/${id}`)

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
      v-if="!taller"
      class="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <p class="section-label mb-4 text-[#71B1A5]">Error 404</p>
      <h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl mb-6">
        Taller no encontrado
      </h1>
      <p class="text-lg md:text-xl text-[#27252B]/60 max-w-md mb-12">
        La convocatoria o espacio vivencial que buscas no está programado para el ciclo actual 2026.
      </p>
      <NuxtLink to="/talleres" class="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase border border-[#27252B] px-6 py-3.5 hover:bg-[#27252B] hover:text-white transition-all duration-300">
        Ver todos los talleres
      </NuxtLink>
    </main>

    <main v-else>

      <PageHero
        :label="`${taller.categoria} · ${facilitadoraActiva?.nombre}`"
        :title-main="taller.titulo"
        :title-accent="taller.tituloItalico"
        image="/images/centro-psicologia-la-seda-granada-hero.jpg"
        :image-alt="`${taller.titulo} ${taller.tituloItalico} — Centro de Psicología La Seda Granada`"
        secondary-link="/talleres"
        secondary-label="Ver todos los talleres"
      >
        <template #description>{{ taller.subtitulo }}</template>
      </PageHero>


      <section class="page-container py-24 md:py-32">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div class="lg:sticky lg:top-28">
            <div class="overflow-hidden aspect-[3/4] mb-10 relative">
              <NuxtImg
                v-if="facilitadoraActiva"
                :src="facilitadoraActiva.imagen"
                :alt="facilitadoraActiva.imagenAlt"
                format="webp"
                loading="lazy"
                width="600"
                height="800"
                class="w-full h-full object-cover grayscale-[15%]"
              />
              <div class="absolute -bottom-3 -right-3 w-full h-full border border-[#71B1A5]/30 pointer-events-none z-[-1]" />
              <div class="absolute bottom-5 left-0 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3">
                <p class="section-label text-[10px]">Facilitadora</p>
                <p class="font-serif italic text-[#27252B] text-sm mt-0.5">{{ facilitadoraActiva?.nombre }}</p>
              </div>
            </div>

            <div class="section-divider mb-6" />
            <h2 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-[1.2] mb-7">
              Sobre la facilitadora
            </h2>
            
            <div class="space-y-6 text-base md:text-lg leading-[1.95] text-[#27252B]/70 [&_strong]:font-semibold [&_strong]:text-[#27252B] mb-10">
              <p v-html="taller.bio" />
              <p v-html="taller.bio2" />
            </div>

            <NuxtLink
              v-if="facilitadoraActiva"
              :to="`/conocenos/${taller.facilitadoraId}`"
              class="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#71B1A5] text-[#FDFBF9] hover:bg-[#27252B] transition-colors duration-300 ease-out group/btn text-xs font-medium tracking-[0.2em] uppercase shadow-sm"
              :aria-label="`Ver perfil clínico completo de ${facilitadoraActiva.nombre}`"
            >
              <span>Ver perfil clínico</span>
              <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>

          <div class="space-y-10 lg:pt-4">
            <div>
              <p class="section-label mb-5">El taller</p>
              <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2] mb-8">
                ¿Qué es y para quién es<br />
                <span class="text-[#27252B]/50 not-italic font-light text-2xl md:text-3xl">este espacio?</span>
              </h2>
            </div>

            <p class="text-base md:text-lg leading-[1.95] text-[#27252B]/75 font-light">
              {{ taller.descripcion }}
            </p>
            <p class="text-base md:text-lg leading-[1.95] text-[#27252B]/75 font-light">
              {{ taller.descripcion2 }}
            </p>

            <div class="overflow-hidden aspect-[16/10] border border-[#27252B]/5 rounded-sm mt-4">
              <NuxtImg
                :src="taller.imagen"
                :alt="taller.imagenAlt"
                format="webp"
                loading="lazy"
                width="1200"
                height="750"
                class="w-full h-full object-cover grayscale-[10%] hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>


      <section class="bg-[#27252B] py-20 md:py-32">
        <div class="page-container">

          <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
            <div>
              <p class="section-label text-[#71B1A5] mb-4">{{ taller.beneficiosLabel }}</p>
              <h2 class="font-serif italic text-[#FDFBF9] text-3xl md:text-4xl leading-tight">
                {{ taller.beneficiosTitulo }}
              </h2>
            </div>
            <div class="w-24 h-px bg-[#71B1A5]/30 md:mb-2 shrink-0" aria-hidden="true" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/5 rounded-sm overflow-hidden">
            <div
              v-for="(b, i) in taller.beneficios"
              :key="i"
              class="bg-[#27252B] p-8 md:p-10 flex flex-col gap-4 transition-all duration-300 hover:bg-white/[0.02]"
            >
              <span class="font-serif italic text-[#71B1A5]/40 text-4xl leading-none" aria-hidden="true">
                {{ b.numero }}
              </span>
              <h3 class="text-[#FDFBF9] font-medium text-lg tracking-wide pt-2 border-t border-white/5">
                {{ b.titulo }}
              </h3>
              <p class="text-white/60 text-sm leading-relaxed font-light">
                {{ b.desc }}
              </p>
            </div>
          </div>

        </div>
      </section>


      <section class="py-20 md:py-32">
        <div class="page-container">

          <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-16 md:mb-20">
            <div class="md:col-span-5">
              <p class="section-label mb-4">Calendario 2026</p>
              <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-tight">Próximas fechas</h2>
            </div>
            <div class="md:col-span-7">
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/65">
                Las plazas son limitadas para preservar el cuidado e intimidad clínica del grupo. Recomendamos formalizar la reserva con suficiente antelación.
              </p>
            </div>
          </div>

          <div class="border border-[#27252B]/5 rounded-sm overflow-hidden divide-y divide-[#27252B]/10">
            <div
              v-for="(fecha, i) in taller.fechas"
              :key="i"
              class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center p-6 md:p-8 bg-[#FDFBF9] hover:bg-[#27252B]/[0.01] transition-colors duration-200"
            >
              <div class="md:col-span-1 flex md:block items-center gap-3">
                <span class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">{{ fecha.dia }}</span>
              </div>

              <div class="md:col-span-2">
                <span class="block text-xs tracking-[0.2em] uppercase text-[#27252B]/50 font-medium">
                  {{ fecha.diasemana }}
                </span>
                <span class="block text-xs tracking-[0.15em] uppercase text-[#71B1A5] font-semibold">
                  {{ fecha.mes }} · 2026
                </span>
              </div>

              <div class="md:col-span-5">
                <h3 class="font-serif italic text-[#27252B] text-lg md:text-xl leading-snug">
                  {{ fecha.descripcion }}
                </h3>
                <span
                  v-if="fecha.especial"
                  class="inline-block mt-2 text-[10px] tracking-wider uppercase text-[#71B1A5] font-medium bg-[#71B1A5]/10 px-2 py-0.5 rounded-sm"
                >
                  {{ fecha.especial }}
                </span>
              </div>

              <div class="md:col-span-2 flex items-center gap-2 text-[#27252B]/60">
                <svg class="w-4 h-4 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm font-light">{{ fecha.horario }}</span>
              </div>

              <div class="md:col-span-2 flex md:justify-end">
                <NuxtLink to="/contacto" class="inline-flex items-center gap-1 group/cta">
                  <span class="text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium border-b border-[#27252B]/20 pb-0.5 group-hover/cta:border-[#71B1A5] group-hover/cta:text-[#71B1A5] transition-all duration-200 whitespace-nowrap">
                    Reservar plaza
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section class="bg-[#27252B]/[0.02] border-t border-[#27252B]/5 py-20 md:py-32">
        <div class="page-container">
          <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">

            <div class="lg:col-span-7">
              <p class="section-label mb-4">Preguntas frecuentes</p>
              <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-tight mb-12">Resolvemos tus dudas</h2>

              <div class="divide-y divide-[#27252B]/10 border-b border-[#27252B]/10">
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

            <div class="lg:col-span-5 space-y-6">

              <div class="bg-[#27252B] p-8 md:p-10 rounded-sm shadow-xl relative overflow-hidden">
                <div class="w-12 h-px bg-[#71B1A5] mb-6" aria-hidden="true" />
                <h3 class="font-serif italic text-white text-2xl md:text-3xl leading-snug mb-4">
                  ¿Listo para reservar<br />
                  <span class="text-white/55 font-light not-italic text-xl md:text-2xl">tu espacio?</span>
                </h3>
                <p class="text-white/60 text-sm leading-relaxed mb-8 font-light">
                  Contáctanos para formalizar tu inscripción, solicitar detalles del encuadre o resolver cualquier duda sobre los grupos.
                </p>
                <NuxtLink 
                  to="/contacto" 
                  class="inline-flex w-full items-center justify-center gap-3 bg-[#71B1A5] text-white hover:bg-white hover:text-[#27252B] font-medium tracking-widest text-xs uppercase py-4 rounded-sm shadow-lg transition-all duration-300"
                >
                  <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  Solicitar Reserva
                </NuxtLink>
              </div>

              <div class="bg-white border border-[#27252B]/5 p-6 md:p-8 rounded-sm space-y-6">
                <p class="text-[10px] tracking-[0.3em] uppercase text-[#27252B]/40 font-bold">
                  Atención Inmediata
                </p>

                <a 
                  href="https://wa.me/34656431309"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-4 group/wa"
                >
                  <div class="w-9 h-9 rounded-full bg-[#71B1A5]/10 flex items-center justify-center group-hover/wa:bg-[#71B1A5]/20 transition-colors duration-200 shrink-0">
                    <svg class="w-4 h-4 text-[#71B1A5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-[10px] tracking-[0.15em] uppercase text-[#27252B]/40 mb-0.5">WhatsApp Directo</p>
                    <p class="text-sm font-semibold text-[#27252B] group-hover/wa:text-[#71B1A5] transition-colors duration-200">
                      656 431 309
                    </p>
                  </div>
                </a>

                <div class="h-px bg-[#27252B]/5" aria-hidden="true" />

                <a 
                  href="mailto:hola@centrolaseda.com"
                  class="flex items-center gap-4 group/email"
                >
                  <div class="w-9 h-9 rounded-full bg-[#71B1A5]/10 flex items-center justify-center group-hover/email:bg-[#71B1A5]/20 transition-colors duration-200 shrink-0">
                    <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-[10px] tracking-[0.15em] uppercase text-[#27252B]/40 mb-0.5">Correo Electrónico</p>
                    <p class="text-sm font-semibold text-[#27252B] group-hover/email:text-[#71B1A5] transition-colors duration-200">
                      hola@centrolaseda.com
                    </p>
                  </div>
                </a>

                <div class="h-px bg-[#27252B]/5" aria-hidden="true" />

                <div class="flex items-start gap-4">
                  <div class="w-9 h-9 rounded-full bg-[#71B1A5]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-4 h-4 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-[10px] tracking-[0.15em] uppercase text-[#27252B]/40 mb-0.5">Sede Presencial</p>
                    <p class="text-sm font-semibold text-[#27252B]">Calle Horno de Haza 29, Bajo 1</p>
                    <p class="text-xs text-[#27252B]/50 font-light mt-0.5">Granada Capital · Centro La Seda</p>
                  </div>
                </div>
              </div>

              <div class="pt-4">
                <NuxtLink to="/talleres" class="inline-flex items-center gap-3 group text-xs font-semibold tracking-wider uppercase text-[#27252B]/60 hover:text-[#71B1A5] transition-colors duration-200">
                  <svg class="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  Volver a Talleres
                </NuxtLink>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>