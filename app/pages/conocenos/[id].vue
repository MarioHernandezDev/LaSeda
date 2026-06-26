<template>
  <main class="bg-[#FDFBF9] antialiased min-h-screen relative w-full isolate">
    
    <div v-if="perfil">
      
      <ConocenosMiniHero :perfil="perfil" />

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
        <ConocenosBiography :perfil="perfil" />
      </div>

      <div class="w-full my-20 lg:my-28">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConocenosAsideInfo :perfil="perfil" />
        </div>
      </div>

      <div class="page-container pb-16 md:pb-24 max-w-5xl mx-auto space-y-24 lg:space-y-36 px-4 sm:px-6 lg:px-8">
        <ConocenosSpecialties :perfil="perfil" />
        <ConocenosAcademic :perfil="perfil" />

        <div class="pt-16 border-t border-[#27252B]/10 space-y-12">
          <div class="flex justify-center pt-6">
            <NuxtLink 
              to="/conocenos" 
              class="inline-flex items-center gap-4 group/btn py-2"
              aria-label="Volver al catálogo del equipo"
            >
              <span class="w-12 h-px bg-[#27252B]/30 group-hover/btn:w-20 group-hover/btn:bg-[#71B1A5] transition-all duration-300" aria-hidden="true" />
              <span class="text-xs tracking-[0.2em] uppercase font-bold text-[#27252B]/50 group-hover/btn:text-[#71B1A5] transition-colors duration-300">
                Ver todo el equipo clínico
              </span>
              <span class="w-12 h-px bg-[#27252B]/30 group-hover/btn:w-20 group-hover/btn:bg-[#71B1A5] transition-all duration-300" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
    
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useSeoMeta, useHead } from '#app'

// ─────────────────────────────────────────────────────────────
// INTERFACES DEL MODELO DE DATOS
// ─────────────────────────────────────────────────────────────
interface AreaEspecializacion {
  titulo: string
  descripcion: string
}

interface ItemFormacion {
  titulo: string
  institucion: string
}

interface FotoGaleria {
  src: string
  alt: string
}

interface PerfilProfesional {
  id: string
  nombre: string
  nombreCorto: string
  rol: string
  especialidadLabel: string
  tituloOficial: string
  cita: string
  imagen: string
  imagenAlt: string
  galeria?: FotoGaleria[]
  acreditaciones: string[]
  tags: string[]
  biografiaExtendida: string[]
  trayectoria: string[]
  areasEspecializacion: AreaEspecializacion[]
  formacion: ItemFormacion[]
  seo: {
    title: string
    description: string
  }
}

// ─────────────────────────────────────────────────────────────
// BASE DE DATOS LOCAL CONSOLIDADA
// ─────────────────────────────────────────────────────────────
const perfiles: Record<string, PerfilProfesional> = {
  'ana-jimenez': {
    id: 'ana-jimenez',
    nombre: 'Ana Jiménez',
    nombreCorto: 'Ana',
    rol: 'Co-dirección',
    especialidadLabel: 'Psicología Clínica · Co-directora',
    tituloOficial: 'Psicóloga Sanitaria Colegiada · Terapeuta Gestalt',
    cita: 'Acompañar desde la presencia es permitir que cada persona descubra su propio ritmo para florecer.',
    imagen: '/images/ana-jimenez-psicologa-gestalt-terapia-infanto-juvenil-granada.jpg',
    imagenAlt: 'Ana Jiménez, psicóloga sanitaria y co-directora del Centro de Psicología La Seda en Granada',
    galeria: [
      { src: '/images/ana-jimenez-consulta-granada.jpg', alt: 'Ana Jiménez atendiendo una sesión terapéutica en La Seda' },
      { src: '/images/la-seda-sala-gestalt.jpg', alt: 'Detalle de los espacios de encuentro y co-visión en Centro La Seda' }
    ],
    acreditaciones: [
      'Colegiada Nº AO06843 — Colegio Oficial de Psicología de Andalucía Oriental',
      'Miembro Didacta de la Asociación Española de Terapia Gestalt (AETG)',
      'Certificada en Psicoterapia Clínica Integrativa — Instituto Juanjo Albert',
    ],
    tags: ['Terapia Gestalt', 'Psicoterapia Integrativa', 'Sistémica', 'Infanto-Juvenil', 'Constelaciones Familiares', 'Mindfulness', 'Programa SAT'],
    biografiaExtendida: [
      'Ana Jiménez es <strong>psicóloga sanitaria colegiada</strong>, co-directora y alma fundacional del Centro de Psicología La Seda. Su práctica clínica nace de una convicción profunda: que la transformación duradera solo es posible cuando el acompañamiento profesional va de la mano de una <strong>presencia humana genuina</strong>, sin prisa y sin atajos.',
      'Su mirada terapéutica integra la solidez del <strong>enfoque Gestalt</strong> —del que es miembro didacta acreditado por la AETG— con herramientas de la <strong>psicoterapia sistémica, las constelaciones familiares y el trabajo corporal</strong>. Esta síntesis le permite leer a cada persona en su totalidad: su historia, su cuerpo, sus vínculos y su momento vital.',
      'La <strong>infancia y la adolescencia</strong> son el territorio en el que Ana ha desarrollado gran parte de su especialización, convencida de que intervenir de manera temprana y respetuosa en los primeros años de vida es una de las inversiones más valiosas en salud mental a largo plazo.',
    ],
    trayectoria: [
      'Ana comenzó su formación clínica en el Instituto Gestalt de Granada, ampliando posteriormente su base teórica con la formación en <strong>Psicoterapia Clínica Integrativa</strong> junto a Juanjo Albert, una de las figuras más reconocidas de la psicoterapia humanista en España.',
      'Su participación en el <strong>Programa SAT de Claudio Naranjo</strong> marcó un point de inflexión en su desarrollo como terapeuta, integrando la psicología transpersonal, el trabajo con el carácter y la dimensión espiritual del proceso terapéutico.',
      'Con <strong>más de doce años de experiencia clínica en Granada</strong>, ha acompañado a cientos de personas, familias y parejas en procesos de crisis, duelo, ansiedad, trauma y búsqueda de sentido. Co-fundó La Seda con la visión de crear un espacio donde rigor científico y sensibilidad humana formaran una misma cosa.',
    ],
    areasEspecializacion: [
      { titulo: 'Terapia individual de adultos', descripcion: 'Acompañamiento en procesos de ansiedad, depresión, duelo, crisis vitales, bloqueos emocionales y búsqueda de identidad desde un enfoque integrativo y profundo.' },
      { titulo: 'Psicología infanto-juvenil', descripcion: 'Intervención psicológica con niños y adolescentes en dificultades emocionales, conductuales, de aprendizaje y de vinculación, con especial atención al sistema familiar.' },
      { titulo: 'Terapia familiar y de pareja', descripcion: 'Exploración de los patrones sistémicos que generan sufrimiento en los vínculos más cercanos, facilitando nuevas formas de relacionarse con mayor consciencia y amor.' },
      { titulo: 'Constelaciones familiares', descripcion: 'Metodología vivencial de origen sistémico que permite hacer visible la dinámica oculta de los sistemas familiares y sanar lealtades inconscientes que pesan en el presente.' }
    ],
    formacion: [
      { titulo: 'Licenciatura en Psicología', institucion: 'Universidad de Granada' },
      { titulo: 'Formación en Psicoterapia Gestalt (nivel didacta)', institucion: 'Instituto Gestalt de Granada · AETG' },
      { titulo: 'Postgrado en Psicoterapia Clínica Integrativa', institucion: 'Instituto Juanjo Albert, Valencia' },
      { titulo: 'Formación en Terapia Sistémica y Constelaciones Familiares', institucion: 'Escuela de Terapia Familiar de Granada' },
      { titulo: 'Programa SAT — Psicología del Carácter y Espiritualidad', institucion: 'Instituto SAT — Claudio Naranjo' },
      { titulo: 'Formación en Trauma y Apego en Infancia', institucion: 'Fundación FARO, Madrid' }
    ],
    seo: {
      title: 'Ana Jiménez | Psicóloga Integrativa y Co-directora en Granada — La Seda',
      description: 'Ana Jiménez, psicóloga sanitaria colegiada (Nº AO06843) y co-directora del Centro La Seda en Granada. Especializada en terapia Gestalt, psicología infanto-juvenil y constelaciones familiares.'
    }
  },
  'leonor-cabrera': {
    id: 'leonor-cabrera',
    nombre: 'Leonor Cabrera',
    nombreCorto: 'Leonor',
    rol: 'Co-dirección',
    especialidadLabel: 'Coaching Profesional · Co-directora',
    tituloOficial: 'Coach Profesional Certificada · Co-formadora Wingwave®',
    cita: 'Desatar los nudos del pasado es el primer paso para caminar con fuerza y ligereza hacia tu presente.',
    imagen: '/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg',
    imagenAlt: 'Leonor Cabrera, coach profesional certificada y co-directora del Centro La Seda en Granada',
    galeria: [
      { src: '/images/leonor-cabrera-formacion-wingwave.jpg', alt: 'Leonor Cabrera durante una mentoría de coaching estratégico' },
      { src: '/images/la-seda-sala-reuniones.jpg', alt: 'Instalaciones compartidas y espacios de acogida en La Seda Granada' }
    ],
    acreditaciones: [
      'Asesco Nº 10.457 — Asociación Española de Coaching',
      'Co-formadora acreditada en Wingwave® — Instituto Besser-Siegmund, Hamburgo',
      'Colaboradora del Programa SAT de Claudio Naranjo',
    ],
    tags: ['Coaching', 'Wingwave®', 'Constelaciones Familiares', 'Gestalt', 'PNL', 'Bioenergética', 'Bloqueos Emocionales'],
    biografiaExtendida: [
      'Leonor Cabrera es co-directora de La Seda y una de las profesionales más singulares del panorama del <strong>coaching y el desarrollo personal en Granada</strong>. Su trayectoria combina una sólida base académica en Periodismo con una formación profunda en herramientas de transformación emocional.',
      'Certificada como <strong>Coach Profesional por Asesco</strong>, Leonor ha centrado gran parte de su especialización en el trabajo con los <strong>bloqueos emocionales</strong> que frenan el potencial de las personas. Su herramienta principal en este campo es el <strong>método Wingwave®</strong>.',
      'La experiencia con el <strong>Programa SAT de Claudio Naranjo</strong> imprimió en su práctica una dimensión de profundidad que va más allá de los objetivos del coaching unconventional: el trabajo con el carácter, el <strong>autoconocimiento radical</strong> y la integración de las sombras.'
    ],
    trayectoria: [
      'Tras licenciarse en Periodismo, Leonor transitó de forma orgánica hacia el mundo del desarrollo humano. Sus primeras formaciones en <strong>Gestalt y PNL</strong> le ofrecieron un lenguaje para lo que ya intuía: que los patrones emocionales inconscientes determinan nuestras decisiones.',
      'El descubrimiento del <strong>método Wingwave®</strong> supuso un punto de inclusión en su carrera. Su eficacia en el trabajo con el <strong>estrés, el miedo al fracaso y los bloqueos creativos</strong> le hizo comprometerse con él a fondo, hasta convertirse en co-formadora oficial para España.',
      'La <strong>Bioenergética y las constelaciones familiares</strong> completaron su mapa metodológico, añadiendo la dimensión corporal y sistémica que todo proceso de cambio profundo requiere.'
    ],
    areasEspecializacion: [
      { titulo: 'Coaching de desarrollo personal', descripcion: 'Procesos individuales para identificar y superar los patrones que limitan el desarrollo profesional, creativo o relacional, con foco en la acción.' },
      { titulo: 'Método Wingwave®', descripcion: 'Técnica de coaching de alto rendimiento que integra la estimulación bilateral y el test muscular kinesiológico para disolver bloqueos emocionales de forma rápida y efectiva.' },
      { titulo: 'Constelaciones familiares grupales', descripcion: 'Facilitación de constelaciones sistémicas en formato grupal e individual para explorar los órdenes del amor familiar y liberar lealtades inconscientes.' },
      { titulo: 'Formación en Wingwave®', descripcion: 'Programas de certificación acreditados por el Instituto Besser-Siegmund de Hamburgo para coaches, psicólogos y profesionales del desarrollo humano.' }
    ],
    formacion: [
      { titulo: 'Licenciatura en Periodismo', institucion: 'Universidad de Granada' },
      { titulo: 'Certificación en Coaching Profesional', institucion: 'Asesco — Asociación Española de Coaching' },
      { titulo: 'Certificación en Wingwave® Coaching (nivel co-formadora)', institucion: 'Instituto Besser-Siegmund, Hamburgo' },
      { titulo: 'Formación en Terapia Gestalt', institucion: 'Instituto Gestalt de Granada' },
      { titulo: 'Formación en Bioenergética y Trabajo Corporal', institucion: 'Centro de Estudios de Bioenergética, Madrid' },
      { titulo: 'Programa SAT — Psicología del Carácter y Espiritualidad', institucion: 'Instituto SAT — Claudio Naranjo' },
      { titulo: 'Formación en PNL (Programación Neurolingüística)', institucion: 'Sociedad Española de PNL' },
      { titulo: 'Formación en Constelaciones Familiares', institucion: 'Escuela Hellinger Sciencia, España' }
    ],
    seo: {
      title: 'Leonor Cabrera | Coach Wingwave® y Co-directora en Granada — La Seda',
      description: 'Leonor Cabrera, coach profesional certificada (Asesco Nº 10.457) y co-formadora en Wingwave®. Co-directora de La Seda en Granada. Especializada en bloqueos emocionales y constelaciones familiares.'
    }
  },
  'maria-noel-reyes': {
    id: 'maria-noel-reyes',
    nombre: 'María Noel Reyes',
    nombreCorto: 'María Noel',
    rol: 'Psicoterapia',
    especialidadLabel: 'Psicología Clínica · Adultos',
    tituloOficial: 'Psicóloga Sanitaria Colegiada · Especialista en Trauma y Apego',
    cita: 'El espacio terapéutico es un lugar de revelación y soporte donde integrar cada fragmento de la historia vital.',
    imagen: '/images/maria-noel-reyes-psicologa-terapeuta-granada.jpg',
    imagenAlt: 'María Noel Reyes, psicóloga sanitaria colegiada en el Centro de Psicología La Seda en Granada',
    galeria: [
      { src: '/images/maria-noel-reyes-consulta.jpg', alt: 'María Noel Reyes en una sesión clínica clínica individual' },
      { src: '/images/la-seda-detalles-granada.jpg', alt: 'Detalle ambiental y pacífico de los despachos en La Seda' }
    ],
    acreditaciones: [
      'Colegiada Nº AO11245 — Colegio Oficial de Psicología de Andalucía Oriental',
      'Máster en Psicología General Sanitaria — Universidad de Granada',
      'Especialista en Trauma, Apego y Procesamiento Emocional',
    ],
    tags: ['Psicología Clínica', 'Trauma y Apego', 'EMDR', 'Mindfulness', 'Enfoque Integrativo', 'Regulación Emocional'],
    biografiaExtendida: [
      'María Noel Reyes es <strong>psicóloga sanitaria colegiada</strong> y especialista en psicoterapia integrativa de adultos en La Seda. Su labor se centra en construir un puente seguro hacia el autoconocimiento, permitiendo que cada paciente explore sus dificultades desde un clima de <strong>absoluto respeto, calidez y validación</strong>.',
      'Su enfoque combina la evidencia científica con una sensibilidad humanista profunda, prestando especial atención a cómo las <strong>experiencias de apego temprano</strong> y las vivencias difíciles moldean nuestra manera de gestionar el estrés, la ansiedad y las relaciones en el presente.',
      'Entiende el síntoma psicológico no como un enemigo a batir, sino como una señal de alarma del organismo que necesita ser comprendida y atendida mediante herramientas de <strong>regulación emocional y procesamiento profundo</strong>.'
    ],
    trayectoria: [
      'Desarrolló sus primeras etapas de especialización clínica en el ámbito de la <strong>salud mental y la psicoterapia de adultos en Granada</strong>, orientando su práctica hacia el tratamiento de trastornos del estado de ánimo, duelos complejos y bloqueos existenciales.',
      'Su continuo interés por los mecanismos corporales y emocionales del estrés la llevó a formarse en abordajes de vanguardia como el <strong>procesamiento del trauma (EMDR) y técnicas basadas en Mindfulness</strong>. Esto le permite intervenir tanto en el plano cognitivo como en el sistema nervioso.',
      'En el Centro La Seda, María Noel ofrece un acompañamiento psicoterapéutico riguroso y personalizado, ayudando a consolidar un bienestar interno duradero y una relación más compasiva de la persona consigo misma.'
    ],
    areasEspecializacion: [
      { titulo: 'Psicoterapia de adultos', descripcion: 'Tratamiento personalizado para la ansiedad, estados depresivos, transiciones vitales complejas, baja autoestima y crisis de identidad.' },
      { titulo: 'Trauma y heridas de apego', descripcion: 'Acompañamiento especializado en el procesamiento de vivencias dolorosas del pasado y la reparación de dinámicas vinculares que afectan al bienestar actual.' },
      { titulo: 'Regulación del sistema nervioso', descripcion: 'Integración de herramientas corporales y de atención plena para modular la respuesta al estrés crónico, la angustia y la somatización.' }
    ],
    formacion: [
      { titulo: 'Graduada en Psicología', institucion: 'Universidad de Granada' },
      { titulo: 'Máster en Psicología General Sanitaria', institucion: 'Universidad de Granada' },
      { titulo: 'Formación Avanzada en Psicoterapia de Trauma y Apego', institucion: 'Asociación Española de Psicología Sanitaria' },
      { titulo: 'Especialización en Técnicas de Integración Cerebral y EMDR', institucion: 'Instituto de Psicoterapia Integrativa' },
      { titulo: 'Instrucción en Mindfulness y Compasión Aplicada a la Clínica', institucion: 'Centro de Formación en Salud Mental' }
    ],
    seo: {
      title: 'María Noel Reyes | Psicóloga Sanitaria y Terapeuta en Granada — La Seda',
      description: 'María Noel Reyes, psicóloga colegiada especializada en psicoterapia integrativa de adultos, trauma y apego en el Centro La Seda de Granada. Pide cita.'
    }
  },
  'cristina-lence': {
    id: 'cristina-lence',
    nombre: 'Cristina Lence',
    nombreCorto: 'Cristina',
    rol: 'Educación Familiar',
    especialidadLabel: 'Educación Social · Infancia y Familias',
    tituloOficial: 'Educadora Social · Especialista en Gestalt Infanto-Juvenil y Sistémica',
    cita: 'Ofrecer un espacio seguro a la infancia y a las familias es sembrar raíces fuertes para el mañana.',
    imagen: '/images/cristina-lence-educadora-familiar-gestalt-sistemica-granada.jpg',
    imagenAlt: 'Cristina Lence, educadora social especializada en Gestalt infanto-juvenil y sistémica en el Centro La Seda de Granada',
    galeria: [
      { src: '/images/cristina-lence-talleres.jpg', alt: 'Cristina Lence preparando materiales para dinámicas con niños y adolescentes' },
      { src: '/images/la-seda-sala-infantil.jpg', alt: 'Gabinete y espacio lúdico para psicología infanto-juvenil en La Seda' }
    ],
    acreditaciones: [
      'Titulada en Educación Social — habilitada para la intervención con menores y familias',
      'Formada en Técnicas Gestálticas para Infancia y Adolescencia — ITG Valencia',
      'Certificada en el Programa SAT de Claudio Naranjo',
    ],
    tags: ['Educación Social', 'Gestalt Infanto-Juvenil', 'Sistémica', 'Familias', 'Adolescencia', 'Programa SAT', 'Prevención'],
    biografiaExtendida: [
      'Cristina Lence es <strong>educadora social</strong> y uno de los pilares del trabajo con infancia y familias en el Centro La Seda. Su labor se sitúa en el <strong>acompañamiento socioemocional</strong> que necesitan niños, niñas, adolescentes y sus familias.',
      'Su enfoque integra la <strong>Gestalt aplicada a la infancia y la adolescencia</strong> con la <strong>mirada sistémica</strong>, que le permite leer los comportamientos del niño no de forma aislada, sino dentro del tejido familiar.',
      'Cristina aporta al equipo una sensibilidad especial para conectar con la infancia desde su propio lenguaje: <strong>el juego, el movimiento, la expresión artística y la narrativa</strong>.'
    ],
    trayectoria: [
      'Formada en Educación Social, Cristina orientó desde el principio su career hacia la infancia en contextos de vulnerabilidad emocional. Su experiencia en Granada le mostró que las dificultades de los menores reflejan un <strong>sistema familiar</strong> que necesita atención.',
      'Esta convicción la llevó a profundizar en la Gestalt aplicada a la infancia y la adolescencia con la ITG de Valencia. Aprendió a trabajar con <strong>el cuerpo y la emoción</strong> como vías de acceso al mundo interno del niño.',
      'Su paso por el <strong>Programa SAT de Claudio Naranjo</strong> amplió su perspectiva sobre el desarrollo humano. En La Seda, Cristina acompaña familias y facilita <strong>talleres de parentalidad consciente</strong>.'
    ],
    areasEspecializacion: [
      { titulo: 'Acompañamiento infanto-juvenil', descripcion: 'Intervención socioemocional individualizada con niños y adolescentes que presentan dificultades de conducta, regulación emocional o adaptación escolar.' },
      { titulo: 'Orientación y educación familiar', descripcion: 'Acompañamiento a padres y madres en el desarrollo de una parentalidad más consciente, conectada y respetuosa, con herramientas prácticas.' },
      { titulo: 'Talleres de expresión emocional', descripcion: 'Programas grupales para niños donde el juego, el arte y el movimiento se convierten en lenguajes para explorar el mundo emocional.' },
      { titulo: 'Intervención sistémica familiar', descripcion: 'Trabajo con el sistema familiar para comprender los patrones relacionales que generan sufrimiento y facilitar cambios que beneficien a todos.' }
    ],
    formacion: [
      { titulo: 'Diplomatura en Educación Social', institucion: 'Universidad de Granada' },
      { titulo: 'Formación en Técnicas Gestálticas para Infancia y Adolescencia', institucion: 'Instituto de Terapia Gestalt (ITG), Valencia' },
      { titulo: 'Programa SAT — Psicología del Carácter y Desarrollo Personal', institucion: 'Instituto SAT — Claudio Naranjo' },
      { titulo: 'Formación en Terapia Sistémica Breve', institucion: 'Centro de Terapia Sistémica de Granada' },
      { titulo: 'Especialización en Parentalidad Consciente y Crianza Respetuosa', institucion: 'Instituto Aware Parenting, España' },
      { titulo: 'Curso de Intervención en Duelo Infantil', institucion: 'Fundación Mario Losantos del Campo, Madrid' }
    ],
    seo: {
      title: 'Cristina Lence | Educadora Familiar y Especialista en Infancia en Granada — La Seda',
      description: 'Cristina Lence, educadora social especializada en Gestalt infanto-juvenil y sistémica en el Centro La Seda de Granada. Acompañamiento a niños, adolescentes y familias.'
    }
  },
  'reyes-sanchez': {
    id: 'reyes-sanchez',
    nombre: 'Reyes Sánchez Tallón',
    nombreCorto: 'Reyes',
    rol: 'Medicina',
    especialidadLabel: 'Medicina Pediátrica · Salud Integrativa',
    tituloOficial: 'Médica Pediatra Colegiada · Especialista en Terapia Gestalt y Trabajo Corporal',
    cita: 'Integrar el cuidado del cuerpo y la salud emocional es devolverle la plenitud y el equilibrio al ser.',
    imagen: '/images/reyes-sanchez-tallon-medica-pediatra-gestalt-terapia-granada.jpg',
    imagenAlt: 'Reyes Sánchez Tallón, médica pediatra colegiada y especialista en salud integrativa en el Centro La Seda de Granada',
    galeria: [
      { src: '/images/reyes-sanchez-intervencion-corporal.jpg', alt: 'Reyes Sánchez Tallón aplicando dinámicas de terapia corporal integrativa' },
      { src: '/images/la-seda-consulta-medica.jpg', alt: 'Despacho clínico polivalente para enfoques de medicina integrativa en La Seda' }
    ],
    acreditaciones: [
      'Colegiada Nº 18-10008273 — Colegio Oficial de Médicos de Granada',
      'Especialista en Pediatría — Formación MIR',
      'Formada en Terapia Gestalt — AETG',
      'Certificada en Terapia Corporal Integrativa — equipo Antonio Pacheco',
    ],
    tags: ['Medicina Pediátrica', 'Terapia Gestalt', 'Trabajo Corporal', 'Bioenergética', 'Eneatipos', 'Sistémica', 'Salud Integrativa'],
    biografiaExtendida: [
      'Reyes Sánchez Tallón es médica pediatra colegiada y la voz de la <strong>medicina integrativa</strong> dentro de La Seda. Su presencia encarna una visión de la salud donde <strong>el cuerpo, la emoción y la mente</strong> forman un sistema indivisible.',
      'Su formación como pediatra le dio una base científica sólida. Pero fue su encuentro con la <strong>Gestalt y el trabajo corporal</strong> lo que transformó su forma de acompañar, añadiendo la capacidad de leer el cuerpo como un mapa emocional vivo.',
      'Reyes trabaja desde la frontera enriquecedora que existe entre la medicina y la psicoterapia, un espacio donde la <strong>somatización</strong> tiene nombre y donde el síntoma físico es también un message de alerta.'
    ],
    trayectoria: [
      'Tras completar su especialización como pediatra por <strong>vía MIR</strong>, Reyes ejerció durante años en el sistema sanitario público, donde fue testigo de cómo el malestar emocional se manifestaba en forma de <strong>síntomas físicos</strong>.',
      'Su formación en <strong>terapia Gestalt</strong> le abrió la puerta al trabajo con la experiencia subjetiva. Poco después, la <strong>Terapia Corporal Integrativa (TCI)</strong> le proporcionó un lenguaje para intervenir directamente a través del cuerpo.',
      'El trabajo con la psicología de los eneatipos y la <strong>Bioenergética</strong> añadió una capa de comprensión del carácter que enriquece enormemente su consulta en La Seda, la cual combina con su formación en terapia sistémica.'
    ],
    areasEspecializacion: [
      { titulo: 'Salud pediátrica integrativa', descripcion: 'Atención médica pediátrica que integra la perspectiva emocional en la comprensión de los síntomas físicos de niños y adolescentes, con foco en somatizaciones.' },
      { titulo: 'Terapia Gestalt con adultos', descripcion: 'Acompañamiento terapéutico individual desde el enfoque Gestalt, trabajando con la conciencia del momento presente, el contacto y el cuerpo.' },
      { titulo: 'Terapia corporal integrativa', descripcion: 'Intervención terapéutica que utiliza el cuerpo como vía de acceso a experiencias emocionales y memorias somáticas que el lenguaje verbal no procesa.' },
      { titulo: 'Psicología de los eneatipos', descripcion: 'Trabajo con el mapa del carácter y la estructura energética del cuerpo para comprender los patrones de respuesta emocional y liberar bloqueos.' }
    ],
    formacion: [
      { titulo: 'Licenciatura en Medicina y Cirugía', institucion: 'Universidad de Granada' },
      { titulo: 'Especialidad en Pediatría (MIR)', institucion: 'Hospital Universitario Clínico San Cecilio, Granada' },
      { titulo: 'Formación en Terapia Gestalt', institucion: 'Instituto Gestalt de Granada · AETG' },
      { titulo: 'Terapia Corporal Integrativa', institucion: 'Equipo Antonio Pacheco, España' },
      { titulo: 'Psicología de los Eneatipos y Bioenergética', institucion: 'Formación con Fernando de Juan' },
      { titulo: 'Programa SAT — Psicología del Carácter y Espiritualidad', institucion: 'Instituto SAT — Claudio Naranjo' },
      { titulo: 'Formación en Terapia Sistémica (en curso)', institucion: 'Psicogestalt, Madrid' }
    ],
    seo: {
      title: 'Reyes Sánchez Tallón | Médica Pediatra y Terapeuta Gestalt en Granada — La Seda',
      description: 'Reyes Sánchez Tallón, médica pediatra colegiada (Nº 18-10008273) especializada en salud integrativa y terapia Gestalt en el Centro La Seda de Granada.'
    }
  }
}

// ─────────────────────────────────────────────────────────────
// CAPTURA DE RUTA Y EVALUACIÓN REACTIVA DEL PERFIL
// ─────────────────────────────────────────────────────────────
const route = useRoute()
const id = computed(() => route.params.id as string)
const perfil = computed<PerfilProfesional | null>(() => perfiles[id.value] ?? null)

// ─────────────────────────────────────────────────────────────
// MOTOR DE SEO AVANZADO (Reactividad total y control de nulos)
// ─────────────────────────────────────────────────────────────
useSeoMeta({
  title: () => perfil.value?.seo.title ?? 'Perfil Clínico No Encontrado | La Seda Granada',
  description: () => perfil.value?.seo.description ?? 'Consulte los perfiles profesionales de nuestro equipo clínico en Granada.',
  ogTitle: () => perfil.value?.seo.title ?? 'Perfil Clínico No Encontrado | La Seda Granada',
  ogDescription: () => perfil.value?.seo.description ?? 'Consulte los perfiles profesionales de nuestro equipo clínico en Granada.',
  ogImage: () => perfil.value?.imagen ?? '',
  ogType: () => perfil.value ? 'profile' : 'website',
  ogUrl: () => perfil.value ? `https://www.laseda.es/conocenos/${perfil.value.id}` : 'https://www.laseda.es/conocenos',
  twitterCard: 'summary_large_image',
  twitterTitle: () => perfil.value?.seo.title ?? 'Perfil Clínico No Encontrado | La Seda Granada',
  twitterDescription: () => perfil.value?.seo.description ?? 'Consulte los perfiles profesionales de nuestro equipo clínico en Granada.',
  profileFirstName: () => perfil.value?.nombre.split(' ')[0] ?? '',
  profileLastName: () => perfil.value?.nombre.split(' ').slice(1).join(' ') ?? '',
  robots: () => perfil.value ? 'index, follow' : 'noindex, nofollow',
})

useHead({
  link: [
    { 
      rel: 'canonical', 
      href: () => perfil.value ? `https://www.laseda.es/conocenos/${perfil.value.id}` : 'https://www.laseda.es/conocenos' 
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: () => perfil.value ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        'mainEntity': {
          '@type': 'Person',
          'name': perfil.value.nombre,
          'jobTitle': perfil.value.tituloOficial,
          'image': `https://www.laseda.es${perfil.value.imagen}`,
          'url': `https://www.laseda.es/conocenos/${perfil.value.id}`,
          'description': perfil.value.biografiaExtendida.join(' '),
          'worksFor': {
            '@type': 'MedicalBusiness',
            '@id': 'https://www.laseda.es/#business',
            'name': 'La Seda · Centro de Psicología en Granada',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Granada',
              'addressRegion': 'Andalucía',
              'addressCountry': 'ES',
            }
          },
          'knowsAbout': perfil.value.tags
        }
      }) : ''
    }
  ]
})
</script>

<style scoped>
:deep(strong) {
  font-weight: 500;
  color: #27252B;
}

/* SOLUCIÓN: Forzamos prioridad de renderizado del color crema base y creamos un contexto 3D para evitar parpadeos negros */
main {
  background-color: #FDFBF9 !important;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>