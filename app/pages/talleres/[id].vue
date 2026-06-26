<script setup lang="ts">
import { computed } from 'vue'
import TherapyHero from '~/components/therapy/TherapyHero.vue'
import WorkshopIntro from '~/components/talleres/WorkshopIntro.vue'
import WorkshopBenefits from '~/components/talleres/WorkshopBenefits.vue'
import WorkshopDates from '~/components/talleres/WorkshopDates.vue'
import WorkshopFaqs from '~/components/talleres/WorkshopFaqs.vue'

const route = useRoute()

const staff: Record<string, any> = {
  'ana-jimenez': {
    nombre: 'Ana Jiménez',
    imagen: '/images/ana-jimenez-psicologa-gestalt-terapia-infanto-juvenil-granada.jpg',
    imagenAlt: 'Ana Jiménez, psicóloga y supervisora clínica acreditada por la AETG'
  },
  'leonor-cabrera': {
    nombre: 'Leonor Cabrera Torrado',
    imagen: '/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg',
    imagenAlt: 'Leonor Cabrera Torrado, especialista y facilitadora de Constelaciones Familiares'
  }
}

const workshops: Record<string, any> = {
  'supervision-casos': {
    titulo: 'Supervisión de Casos',
    tituloItalico: 'para Terapeutas',
    subtitulo: 'Un espacio de crecimiento profesional donde la mirada del supervisor amplía la tuya.',
    categoria: 'Formación profesional',
    imagen: '/images/supervision-casos-clinicos-terapeutas-gestalt-granada.jpg',
    imagenAlt: 'Supervisión de casos clínicos y acompañamiento profesional a terapeutas en Granada',
    facilitadoraId: 'ana-jimenez',
    bio: 'Ana Jiménez es psicóloga y psicoterapeuta Gestalt, miembro didacta y supervisora acreditada por la Asociación Española de Terapia Gestalt (AETG). Con más de <strong>quince años acompañando a otros terapeutas</strong> en sus procesos de supervisión...',
    bio2: 'Su enfoque integra la supervisión clínica con el trabajo personal del terapeuta, partiendo de la convicción de que el <strong>principal instrumento de la terapia es el propio terapeuta</strong>...',
    descripcion: 'La supervisión para psicólogos y terapeutas es un proceso esencial para el desarrollo profesional y la calidad de la atención que se brinda a los pacientes. Trabajar con el sufrimiento ajeno moviliza inevitablemente el propio mundo emocional del terapeuta...',
    descripcion2: 'La supervisión puede ser tanto en sesiones individuales como grupales, en formato presencial en el Centro La Seda de Granada o en modalidad online...',
    beneficiosLabel: 'Beneficios del proceso',
    beneficiosTitulo: 'Lo que ganas como terapeuta',
    beneficios: [
      { numero: '01', titulo: 'Desarrollo profesional continuo', desc: 'Orientación y apoyo para mejorar habilidades, ampliar la comprensión de la terapia Gestalt y mantenerse actualizado con los últimos enfoques terapéuticos.' },
      { numero: '02', titulo: 'Reflexión y autoconciencia', desc: 'Explora tus propias reacciones, emociones y patrones de interacción con los clientes.' },
      { numero: '03', titulo: 'Retroalimentación constructiva', desc: 'Recibe retroalimentación honesta y objetiva sobre tu trabajo en un espacio de confianza.' },
      { numero: '04', titulo: 'Apoyo emocional entre colegas', desc: 'Comparte la carga que supone el trabajo clínico en un espacio seguro.' },
      { numero: '05', titulo: 'Rigor ético en la práctica', desc: 'Revisa dilemas éticos, límites terapéuticos y situaciones de especial complejidad clínica.' },
      { numero: '06', titulo: 'Certificación AETG', desc: 'Las horas de supervisión con Ana Jiménez son válidas para acreditar la formación en Terapia Gestalt.' }
    ],
    fechas: [
      { dia: '21', mes: 'Ene', diasemana: 'Miércoles', descripcion: 'Sesión grupal de supervisión — Enero 2026', horario: '17:00 – 20:00 h' },
      { dia: '18', mes: 'Feb', diasemana: 'Miércoles', descripcion: 'Sesión grupal de supervisión — Febrero 2026', horario: '17:00 – 20:00 h' },
      { dia: '18', mes: 'Mar', diasemana: 'Miércoles', descripcion: 'Sesión grupal de supervisión — Marzo 2026', horario: '17:00 – 20:00 h' },
      { dia: '22', mes: 'Abr', diasemana: 'Miércoles', descripcion: 'Sesión grupal de supervisión — Abril 2026', horario: '17:00 – 20:00 h' },
      { dia: '20', mes: 'May', diasemana: 'Miércoles', descripcion: 'Sesión grupal de supervisión — Mayo 2026', horario: '17:00 – 20:00 h' },
      { dia: '17', mes: 'Jun', diasemana: 'Miércoles', descripcion: 'Sesión grupal de supervisión — Junio 2026', horario: '17:00 – 20:00 h' }
    ],
    faqs: [
      { pregunta: '¿Cuánto duran las sesiones individuales?', respuesta: 'Las sesiones individuales duran 55 minutos, siguiendo el formato estándar de la práctica clínica.' },
      { pregunta: '¿La supervisión es presencial u online?', respuesta: 'Pueden ser tanto online a través de Skype u otro sistema de videoconferencia, como presencial en el Centro La Seda.' },
      { pregunta: '¿Cómo serán las sesiones?', respuesta: 'Trabajaremos con tus dificultades en terapia, tanto con tus bloqueos como con los de tus pacientes.' },
      { pregunta: 'No tengo pacientes todavía, ¿puedo supervisarme?', respuesta: 'Sí. En este caso trabajaremos las dificultades que tienes para iniciar tu camino como psicólogo o terapeuta.' },
      { pregunta: '¿Estas horas cuentan para la certificación en Terapia Gestalt?', respuesta: 'Sí. Ana Jiménez es miembro supervisor y didacta de la AETG, te las puede certificar.' }
    ]
  },
  'constelaciones-familiares': {
    titulo: 'Talleres de Constelaciones',
    tituloItalico: 'Familiares',
    subtitulo: 'Revelar lo invisible para liberarse de lo que no nos pertenece.',
    categoria: 'Espacios vivenciales',
    imagen: '/images/taller-constelaciones-familiares-granada-centro-la-seda.jpg',
    imagenAlt: 'Taller vivencial y grupal de constelaciones familiares en Granada',
    facilitadoraId: 'leonor-cabrera',
    bio: 'Leonor Cabrera Torrado está especializada en trabajar la fuerza interior y los bloqueos emocionales a través de las <strong>Constelaciones Familiares</strong>...',
    bio2: 'Es autora del libro "El camino de la fuerza interior". Su trabajo combina el rigor del método sistémico de Bert Hellinger con una <strong>mirada profundamente compasiva</strong>...',
    descripcion: 'Los talleres de Constelaciones Familiares de La Seda sirven para abordar problemas y dinámicas familiares, así como otros desafíos personales...',
    descripcion2: 'El objetivo principal es revelar y resolver estos patrones para promover el bienestar emocional y las relaciones saludables...',
    beneficiosLabel: 'Qué abordamos',
    beneficiosTitulo: 'Situaciones que este taller puede mover',
    beneficios: [
      { numero: '01', titulo: 'Resolver conflictos familiares', desc: 'Identifica y resuelve conflictos persistententes dentro de la familia: entre padres e hijos, entre hermanos...' },
      { numero: '02', titulo: 'Comprender patrones repetitivos', desc: 'Las personas a menudo repiten patrones que se originan en su historia familiar.' },
      { numero: '03', titulo: 'Liberar cargas transgeneracionales', desc: 'Devuelve simbólicamente lo que pertenece a generaciones anteriores y recupera tu propio lugar.' },
      { numero: '04', titulo: 'Elaborar duelos y pérdidas', desc: 'Hay duelos que no pueden ser elaborados y que siguen doliendo a pesar de que pasa el tiempo.' },
      { numero: '05', titulo: 'Tomar decisiones importantes', desc: 'En ocasiones, las personas recurren a las Constelaciones para tomar decisiones sobre trabajo, relaciones o crianza.' },
      { numero: '06', titulo: 'Autoconocimiento y dirección vital', desc: 'Muchas personas salen de los talleres con una percepción renovada de sí mismas.' }
    ],
    fechas: [
      { dia: '28', mes: 'Feb', diasemana: 'Sábado', descripcion: 'Taller Breve de Constelaciones Familiares', horario: '10:00 – 14:00 h' },
      { dia: '18', mes: 'Abr', diasemana: 'Sábado', descripcion: 'Taller Breve de Constelaciones Familiares', horario: '10:00 – 14:00 h' },
      { dia: '16', mes: 'May', diasemana: 'Sábado', descripcion: 'Taller Breve de Constelaciones Familiares', horario: '10:00 – 14:00 h' },
      { dia: '20', mes: 'Jun', diasemana: 'Sábado', descripcion: 'Taller de Constelaciones para la Renovación', horario: 'Consultar horario', especial: 'Solsticio de Verano' }
    ],
    faqs: [
      { pregunta: '¿Es necesaria experiencia previa para asistir?', respuesta: 'No. Los talleres están abiertos a cualquier persona independientemente de su experiencia.' },
      { pregunta: '¿Cómo funciona el taller? ¿Qué ocurre durante la sesión?', respuesta: 'El facilitador elige entre los asistentes a alguien para trabajar su tema y le hace una pequeña entrevista...' },
      { pregunta: '¿Es seguro que constelaré en el taller?', respuesta: 'En este tipo de talleres no podemos asegurar que todos los participantes constelen por razones terapéuticas...' },
      { pregunta: '¿Puedo participar como representante sin tener una constelación propia?', respuesta: 'Sí, y es una experiencia muy valiosa en sí misma.' },
      { pregunta: '¿Cómo reservo plaza en un taller?', respuesta: 'Puedes escribirnos a hola@centrolaseda.com o enviar un WhatsApp al 656 431 309.' }
    ]
  }
}

const id = route.params.id as string
const taller = computed(() => workshops[id] ?? null)
const facilitadoraActiva = computed(() => taller.value ? staff[taller.value.facilitadoraId] : null)

// Metatags SEO
const seoTitle = computed(() => taller.value ? `${taller.value.titulo} ${taller.value.tituloItalico} · Granada 2026` : 'Taller no encontrado')
const seoDescription = computed(() => taller.value ? `${taller.value.subtitulo}` : '')

useSeoMeta({
  title: seoTitle,
  description: seoDescription
})
</script>

<template>
  <div class="bg-[#FDFBF9] antialiased">
    <main v-if="!taller" class="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 class="font-serif italic text-3xl mb-4">Taller no encontrado</h1>
      <NuxtLink to="/talleres" class="text-xs uppercase tracking-widest border border-[#27252B] px-6 py-3">Ver todos</NuxtLink>
    </main>

    <main v-else>
      <TherapyHero
        :categoria="taller.categoria"
        :titulo="taller.titulo"
        :tituloItalico="taller.tituloItalico"
        :subtitulo="taller.subtitulo"
      />

      <WorkshopIntro
        :descripcion="taller.descripcion"
        :descripcion2="taller.descripcion2"
        :imagen="taller.imagen"
        :imagenAlt="taller.imagenAlt"
        :bio="taller.bio"
        :bio2="taller.bio2"
        :facilitadoraId="taller.facilitadoraId"
        :facilitadora="facilitadoraActiva"
      />

      <WorkshopBenefits
        :label="taller.beneficiosLabel"
        :titulo="taller.beneficiosTitulo"
        :beneficios="taller.beneficios"
      />

      <WorkshopDates :fechas="taller.fechas" />

      <WorkshopFaqs :faqs="taller.faqs" />
    </main>
  </div>
</template>