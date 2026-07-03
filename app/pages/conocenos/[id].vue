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
                Ver todo el equipo
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
    especialidadLabel: 'Terapia Gestalt, Transpersonal e Integrativa · Co-directora',
    tituloOficial: 'Terapeuta Gestalt, Transpersonal e Integrativa · Coach Profesional Certificada',
    cita: 'Desatar los nudos del pasado nos permite recuperar la fuerza para habitar el presente.',
    imagen: '/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg',
    imagenAlt: 'Leonor Cabrera, terapeuta Gestalt, transpersonal e integrativa y co-directora del Centro La Seda en Granada',
    galeria: [
      { src: '/images/leonor-cabrera-formacion-wingwave.jpg', alt: 'Leonor Cabrera durante una formación de Coaching Wingwave®' },
      { src: '/images/la-seda-sala-reuniones.jpg', alt: 'Instalaciones compartidas y espacios de acogida en La Seda Granada' }
    ],
    acreditaciones: [
      'Coach Profesional Certificada por Asesco — Nº 10.457',
      'Co-formadora acreditada en Coaching Wingwave® — Instituto Besser-Siegmund, Hamburgo',
      'Profesora y colaboradora del Programa SAT de Claudio Naranjo',
    ],
    tags: ['Terapia Gestalt', 'Trauma y memoria emocional', 'Eneagrama', 'Constelaciones Familiares', 'Coaching Wingwave®', 'PNL', 'Bioenergética', 'Formación de profesionales', 'Desarrollo personal'],
    biografiaExtendida: [
      'Leonor Cabrera es <strong>terapeuta Gestalt, transpersonal e integrativa</strong>, con formación en trauma, trabajo corporal, constelaciones familiares y sistémicas, Eneagrama, PNL y coaching Wingwave®. Desde 2013 acompaña a personas que atraviesan crisis vitales, bloqueos emocionales, dificultades en sus relaciones, duelos, cambios importantes o momentos de pérdida de sentido, acumulando <strong>más de 5.000 horas de experiencia en sesiones individuales</strong>.',
      'Su forma de trabajar integra la escucha terapéutica, el cuerpo, la comprensión del carácter, la memoria emocional y la mirada sistémica. No se centra únicamente en aquello que una persona quiere cambiar, sino también en los <strong>patrones emocionales, corporales y relacionales</strong> que siguen influyendo en su vida, adaptando el acompañamiento al ritmo y a los recursos de cada persona.',
      'Junto al trabajo individual, una parte importante de su trayectoria está vinculada a la <strong>formación de profesionales del desarrollo personal</strong>: ha sido formadora de coaches, co-formadora acreditada en Wingwave® y profesora y colaboradora del Programa SAT de Claudio Naranjo.'
    ],
    trayectoria: [
      'Es <strong>licenciada en Periodismo por la Universidad de Málaga</strong> y actualmente cursa el <strong>Grado en Psicología en la Universidad Internacional de La Rioja (UNIR)</strong>. Antes de dedicarse plenamente al acompañamiento terapéutico, ejerció durante quince años como periodista en medios como <strong>El Mundo y Europa Press</strong>, y colaboró con elmundo.es y la Cadena SER divulgando contenidos de desarrollo personal y bienestar emocional.',
      'En 2013 fundó <strong>Viventi</strong>, una escuela de desarrollo personal y comunicación en Benalmádena (Málaga). En 2022 cofundó en Granada <strong>La Seda</strong> junto a Ana Jiménez, centro sanitario autorizado con una unidad asistencial de Psicología, donde conviven la atención psicológica sanitaria y otros servicios de acompañamiento, terapia Gestalt, coaching, formación y desarrollo personal.',
      'Es autora del libro <strong>El camino de la fuerza interior</strong>, centrado en el autoconocimiento, la memoria emocional y la recuperación de los propios recursos internos. El cuerpo, la disciplina y la presencia forman parte de su recorrido: practica <strong>aikido</strong> y fue atleta de competición nacional e internacional, proclamándose en varias ocasiones <strong>campeona de España</strong>.'
    ],
    areasEspecializacion: [
      { titulo: 'Terapia individual y transformación personal', descripcion: 'Acompañamiento en crisis vitales, bloqueos emocionales, baja autoestima, dificultades relacionales, duelos, cambios personales y repetición de patrones, para comprender qué los sostiene y recuperar los recursos internos necesarios.' },
      { titulo: 'Trauma y memoria emocional', descripcion: 'Comprensión e integración de experiencias del pasado que continúan manifestándose en el cuerpo, las emociones, las decisiones o las relaciones presentes, desde una mirada Gestalt, corporal e integrativa.' },
      { titulo: 'Eneagrama y Psicología de los Eneatipos', descripcion: 'Trabajo con la comprensión del carácter, los automatismos y las estrategias de adaptación y protección, entendiendo el Eneagrama como una herramienta dinámica de conciencia y transformación.' },
      { titulo: 'Constelaciones Familiares y Sistémicas', descripcion: 'Acompañamiento en sesión individual y en talleres grupales para explorar vínculos, dinámicas familiares, repeticiones, lealtades invisibles y patrones que siguen influyendo en la vida presente.' },
      { titulo: 'Coaching Wingwave®', descripcion: 'Método orientado al trabajo con estrés, bloqueos emocionales, inseguridad, dificultades de rendimiento y objetivos personales o profesionales, como coach y co-formadora acreditada.' }
    ],
    formacion: [
      { titulo: 'Grado en Psicología (en curso)', institucion: 'Universidad Internacional de La Rioja, UNIR' },
      { titulo: 'Licenciatura en Periodismo', institucion: 'Universidad de Málaga' },
      { titulo: 'Psicoterapia Gestalt, Bioenergética y Crecimiento Personal — 520 h (2011-2014)', institucion: 'Centro de Psicología Humanista de Málaga' },
      { titulo: 'Introducción al Trauma y su Tratamiento (Modelo Aleceia) — 72 h (2021-2022)', institucion: 'Instituto Aleces de Psicoterapia del Trauma · Cert. AETG' },
      { titulo: 'Formación en Constelaciones Familiares — 250 h (2018)', institucion: 'ECOS, Escuela de Constelaciones Sistémicas' },
      { titulo: 'Profundización en Constelaciones Familiares aplicadas a la pareja — 36,5 h (2019)', institucion: 'Institut Gestalt de Barcelona (con Joan Garriga)' },
      { titulo: 'Experta en Coaching Profesional Certificado — 210 h (2012)', institucion: 'COANCO, centro acreditado por Asesco' },
      { titulo: 'Coach Profesional Certificada por Asesco — Nº 10.457', institucion: 'Asesco' },
      { titulo: 'Coach y co-formadora acreditada en Wingwave®', institucion: 'Instituto Besser-Siegmund, Hamburgo' },
      { titulo: 'Máster Practitioner en PNL — 90 h (2017)', institucion: 'Institut Gestalt de Barcelona' },
      { titulo: 'Practitioner en PNL — 90 h (2013)', institucion: 'Institut Integratiu de Barcelona' },
      { titulo: 'Profesora y colaboradora del Programa SAT', institucion: 'Instituto SAT — Claudio Naranjo' },
      { titulo: 'Curso básico de Terapia de Vidas Pasadas — 20 h (2024)', institucion: 'Impartido por José Luis Cabouli' }
    ],
    seo: {
      title: 'Leonor Cabrera | Terapeuta Gestalt y Coach Wingwave® en Granada — La Seda',
      description: 'Leonor Cabrera, terapeuta Gestalt, transpersonal e integrativa y coach profesional certificada (Asesco Nº 10.457). Co-directora de La Seda en Granada. Más de 5.000 horas de experiencia.'
    }
  },
  'maria-noel-reyes': {
    id: 'maria-noel-reyes',
    nombre: 'María Noel Reyes',
    nombreCorto: 'María Noel',
    rol: 'Psicoterapia',
    especialidadLabel: 'Psicoterapia Integradora-Humanista · Adultos',
    // NOTA PARA EL EQUIPO: en el CV recibido no figura número de colegiada.
    // Añádelo aquí en "tituloOficial" / "acreditaciones" en cuanto lo tengáis, para mantener la coherencia con el resto de perfiles.
    tituloOficial: 'Psicóloga General Sanitaria · Terapeuta Gestalt',
    cita: 'Cada persona lleva dentro los recursos para crecer; mi trabajo es acompañarla a encontrarlos.',
    imagen: '/images/leonor-cabrera-coach-wingwave-constelaciones-familiares-granada.jpg',
    imagenAlt: 'María Noel Reyes, psicoterapeuta en el Centro de Psicología La Seda en Granada',
    galeria: [
      { src: '/images/leonor-cabrera-formacion-wingwave.jpg', alt: 'María Noel Reyes en una sesión terapéutica en La Seda' },
      { src: '/images/la-seda-sala-reuniones.jpg', alt: 'Espacios de acompañamiento y encuentro en el Centro La Seda' }
    ],
    acreditaciones: [
      'Máster en Psicología General Sanitaria — Universidad de Valencia',
      'Terapeuta Gestalt — Institut Gestalt, Barcelona',
      'Postgrado en Acompañamiento al Duelo y Pérdidas — Asociación Aves, Barcelona',
    ],
    tags: ['Terapia Gestalt', 'Enfoque Integrador-Humanista', 'Duelo y Pérdidas', 'Psicogerontología', 'Terapia de Pareja', 'Arte-terapia', 'Teatro Terapia Gestalt'],
    biografiaExtendida: [
      'María Noel Reyes es <strong>psicoterapeuta de vocación</strong>, con una curiosidad natural que la mantiene en constante formación y aprendizaje, tanto a nivel profesional como personal. Su línea de trabajo parte de un <strong>enfoque integrador-humanista</strong>, que le permite acompañar a cada persona desde una concepción holística y positiva del ser humano.',
      'Desde 2015 desarrolla su práctica privada de <strong>psicoterapia con adultos</strong>, trabajando tanto a nivel individual como grupal y de pareja: crecimiento personal, autoconocimiento y autoestima, gestión emocional —ansiedad, fobias, pánico— y acompañamiento en momentos de crisis y cambio vital.',
      'Antes de dedicarse a la práctica privada, acumuló más de una década de experiencia en el <strong>acompañamiento psicológico a personas mayores</strong> y a sus familias, un recorrido que ha dejado una huella profunda en su forma de entender el vínculo, el cuidado y el final de la vida.'
    ],
    trayectoria: [
      'Entre 2011 y 2022, María Noel trabajó en asociaciones, centros de día y diversas residencias de <strong>Barcelona</strong>, ofreciendo apoyo psicológico a personas mayores en procesos de vejez y demencia, así como a sus familias. Su último puesto en este ámbito fue en la <strong>Residencia Rubí (Grup Mutuam), Barcelona, entre 2017 y 2022</strong>.',
      'En ese entorno acompañó a personas mayores en <strong>duelos, procesos de demencia —a través de la metodología de la validación— y situaciones de final de vida</strong>, además de asesorar a familias y cuidadores e impartir talleres formativos. También ofreció apoyo psicológico individual y grupal a los propios trabajadores de los centros.',
      'Desarrolló este trabajo desde el <strong>enfoque centrado en la persona (ACP)</strong> y dentro de un equipo multidisciplinar, promoviendo el comité de ética y la supervisión de casos, formándose de manera continua en ACP y cuidados, y participando en conferencias e investigación. Desde 2015 compagina —y desde 2022 centra— su actividad en la <strong>psicoterapia privada con adultos</strong>.'
    ],
    areasEspecializacion: [
      { titulo: 'Psicoterapia individual de adultos', descripcion: 'Acompañamiento en procesos de crecimiento personal, autoconocimiento y autoestima, gestión emocional de la ansiedad, las fobias y el pánico, y desarrollo del potencial humano ante crisis y cambios vitales.' },
      { titulo: 'Terapia grupal y arte-terapia', descripcion: 'Espacios grupales de feminidad consciente, arte-terapia y entrenamiento en habilidades sociales, como vías complementarias de exploración y expresión emocional.' },
      { titulo: 'Terapia de pareja', descripcion: 'Acompañamiento a parejas en la comprensión de sus dinámicas relacionales, facilitando una comunicación más consciente y un vínculo más saludable.' },
      { titulo: 'Acompañamiento a personas mayores y familias', descripcion: 'Apoyo psicológico en procesos de vejez y demencia, duelo y final de vida, con más de una década de experiencia trabajando junto a familias y equipos multidisciplinares en Barcelona.' }
    ],
    formacion: [
      { titulo: 'Licenciatura en Psicología (2004-2009)', institucion: 'Universidad de Granada' },
      { titulo: 'Terapeuta Gestalt (2010-2014)', institucion: 'Institut Gestalt, Barcelona' },
      { titulo: 'Postgrado en Acompañamiento al Duelo y Pérdidas (2018-2020)', institucion: 'Asociación Aves, Barcelona' },
      { titulo: 'Máster en Escuela Española de Teatro Terapia Gestalt (2023-2025)', institucion: 'Madrid' },
      { titulo: 'Máster en Psicología General Sanitaria (2023-2025)', institucion: 'Universidad de Valencia' },
      { titulo: 'Postgrado en Terapia Gestalt Infanto-Juvenil (2024-2025)', institucion: 'Granada' }
    ],
    seo: {
      title: 'María Noel Reyes | Psicoterapeuta Gestalt en Granada — La Seda',
      description: 'María Noel Reyes, psicoterapeuta con enfoque integrador-humanista, especializada en terapia Gestalt, duelo y acompañamiento a personas mayores. Centro La Seda, Granada.'
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
    especialidadLabel: 'Medicina · Colaboradora en Salud Integrativa',
    tituloOficial: 'Médica Colegiada · Especialista en Pediatría · Terapia Gestalt y Trabajo Corporal',
    cita: 'Integrar el cuidado del cuerpo y la salud emocional es devolverle la plenitud y el equilibrio al ser.',
    imagen: '/images/reyes-sanchez-tallon-medica-pediatra-gestalt-terapia-granada.jpg',
    imagenAlt: 'Reyes Sánchez Tallón, médica colegiada y colaboradora en salud integrativa en el Centro La Seda de Granada',
    galeria: [
      { src: '/images/reyes-sanchez-intervencion-corporal.jpg', alt: 'Reyes Sánchez Tallón aplicando dinámicas de terapia corporal integrativa' },
      { src: '/images/la-seda-consulta-medica.jpg', alt: 'Despacho clínico polivalente para enfoques de medicina integrativa en La Seda' }
    ],
    acreditaciones: [
      'Colegiada Nº 18-10008273 — Licenciada en Medicina y Cirugía, Universidad de Granada',
      'Especialista en Pediatría y sus áreas específicas — Formación MIR',
      'Formada en Terapia Gestalt — Equipo Qualia, Granada',
      'Formada en Terapia Corporal Integrativa — Equipo Antonio Pacheco',
    ],
    tags: ['Medicina Pediátrica', 'Terapia Gestalt', 'Terapia Corporal Integrativa', 'Análisis Caracterológico', 'Terapia Sistémica', 'Trauma y TEPT', 'Salud Integrativa'],
    biografiaExtendida: [
      'Reyes Sánchez Tallón es <strong>médica colegiada</strong>, licenciada en Medicina y Cirugía por la Universidad de Granada y especialista en Pediatría por la vía MIR. Colabora con el Centro La Seda aportando una mirada de <strong>salud integrativa</strong>, en la que el cuerpo y la emoción se entienden como parte de un mismo sistema.',
      'Su formación médica se ha ampliado con la <strong>terapia Gestalt</strong> —con el equipo de Qualia, en Granada— y con la <strong>Terapia Corporal Integrativa</strong> junto al equipo de Antonio Pacheco, herramientas que le permiten trabajar con el cuerpo como vía de acceso a la experiencia emocional.',
      'Ha profundizado también en el <strong>análisis caracterológico psico-corporal</strong> con Fernando de Juan, en <strong>terapia sistémica</strong> en la escuela de Psicogestalt de Madrid junto a Juan Carlos Calvo, y en herramientas de intervención en <strong>TEPT y trauma</strong> de abuso sexual y maltrato a través del Centro Landa, con Yolanda Mozota.'
    ],
    trayectoria: [
      'Tras licenciarse en Medicina y Cirugía por la Universidad de Granada, Reyes completó su especialización en <strong>Pediatría</strong> por la vía MIR, adquiriendo una base clínica sólida en el trabajo con la infancia y sus áreas específicas.',
      'Su interés por comprender la salud desde una perspectiva más amplia la llevó a formarse en <strong>terapia Gestalt</strong> con el equipo de Qualia en Granada, y posteriormente en <strong>Terapia Corporal Integrativa</strong> con el equipo de Antonio Pacheco, así como en el <strong>Programa SAT de Claudio Naranjo</strong>.',
      'En los últimos años ha continuado ampliando su formación en el <strong>análisis caracterológico psico-corporal</strong> (Fernando de Juan), en <strong>terapia sistémica</strong> (Escuela de Psicogestalt, Juan Carlos Calvo, Madrid) y en el abordaje del trauma y el TEPT (Centro Landa, Yolanda Mozota). Actualmente se encuentra <strong>en formación en el modelo Aleceia</strong> de integración y reprocesamiento del trauma.'
    ],
    areasEspecializacion: [
      { titulo: 'Salud integrativa', descripcion: 'Mirada de la salud que integra la perspectiva médica y emocional, entendiendo el cuerpo y la mente como un sistema en constante diálogo.' },
      { titulo: 'Terapia Gestalt', descripcion: 'Acompañamiento terapéutico desde el enfoque Gestalt, trabajando con la conciencia del momento presente, el contacto y el cuerpo.' },
      { titulo: 'Terapia corporal integrativa', descripcion: 'Intervención terapéutica que utiliza el cuerpo como vía de acceso a experiencias emocionales y memorias somáticas que el lenguaje verbal no procesa.' },
      { titulo: 'Trauma y TEPT', descripcion: 'Herramientas de intervención en trastorno de estrés postraumático, abuso sexual y maltrato, en formación continua a través de distintos modelos especializados.' }
    ],
    formacion: [
      { titulo: 'Licenciatura en Medicina y Cirugía', institucion: 'Universidad de Granada' },
      { titulo: 'Especialidad en Pediatría y áreas específicas (MIR)', institucion: 'Formación MIR' },
      { titulo: 'Formación en Terapia Gestalt', institucion: 'Equipo Qualia, Granada' },
      { titulo: 'Terapia Corporal Integrativa', institucion: 'Equipo Antonio Pacheco' },
      { titulo: 'Programa SAT — Psicología del Carácter y Espiritualidad', institucion: 'Instituto SAT — Claudio Naranjo' },
      { titulo: 'El carácter en el cuerpo — Análisis caracterológico psico-corporal', institucion: 'Fernando de Juan, Granada' },
      { titulo: 'Formación en Terapia Sistémica', institucion: 'Escuela de Psicogestalt — Juan Carlos Calvo, Madrid' },
      { titulo: 'Herramientas de intervención en TEPT y trauma de abuso sexual y maltrato', institucion: 'Centro Landa — Yolanda Mozota' },
      { titulo: 'Psicoterapia de Integración y Reprocesamiento del Trauma — Modelo Aleceia (en formación)', institucion: 'Modelo Aleceia' }
    ],
    seo: {
      title: 'Reyes Sánchez Tallón | Médica y Terapeuta Gestalt en Granada — La Seda',
      description: 'Reyes Sánchez Tallón, médica colegiada (Nº 18-10008273), especialista en Pediatría y colaboradora en salud integrativa, terapia Gestalt y trabajo corporal en el Centro La Seda de Granada.'
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