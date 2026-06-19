<template>
  <main class="bg-[#FDFBF9] antialiased">

    <div class="page-container pt-12 pb-0">
      <NuxtLink
        to="/conocenos"
        class="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#27252B]/40 hover:text-[#71B1A5] transition-colors duration-300 group"
        aria-label="Volver al listado del equipo"
      >      </NuxtLink>
    </div>


    <section
      v-if="perfil"
      class="page-container py-16 md:py-28"
      :aria-labelledby="`h1-${perfil.id}`"
    >
      <div class="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">

        <aside class="md:col-span-4 md:sticky md:top-28 flex flex-col gap-10">

          <div class="relative group/photo">
            <div
              class="absolute -top-4 -left-4 w-full h-full border border-[#71B1A5]/20 group-hover/photo:-translate-x-1 group-hover/photo:-translate-y-1 transition-transform duration-500 pointer-events-none z-0"
              aria-hidden="true"
            />
            <div class="relative z-10 overflow-hidden bg-[#27252B]/5 aspect-[3/4]">
              <NuxtImg
                :src="perfil.imagen"
                :alt="perfil.imagenAlt"
                class="w-full h-full object-cover object-top grayscale-[15%] group-hover/photo:grayscale-0 group-hover/photo:scale-102 transition-all duration-700 ease-out"
                width="480"
                height="640"
                format="webp"
                loading="eager"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#27252B]/10 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
            
            <div
              class="absolute -top-2 left-6 z-20 text-[10px] font-medium tracking-[0.2em] uppercase bg-[#71B1A5] text-white px-4 py-2 shadow-sm"
              :aria-label="`Rol: ${perfil.rol}`"
            >
              {{ perfil.rol }}
            </div>
          </div>

          <div class="bg-white border border-[#27252B]/5 p-8 space-y-5 shadow-sm shadow-[#27252B]/1">
            <p class="section-label text-[#71B1A5]">Acreditación Oficial</p>
            <ul class="space-y-4 list-none p-0 m-0">
              <li
                v-for="(acred, i) in perfil.acreditaciones"
                :key="i"
                class="flex items-start gap-3.5 pb-3 border-b border-[#27252B]/5 last:border-none last:pb-0"
              >
                <svg class="w-4 h-4 text-[#71B1A5]/70 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
                <span class="text-xs text-[#27252B]/60 font-light leading-relaxed tracking-wide" v-html="acred" />
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <p class="section-label">Especialidades y Enfoques</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in perfil.tags"
                :key="tag"
                class="text-[10px] tracking-[0.15em] uppercase font-medium bg-white border border-[#27252B]/8 text-[#27252B]/70 px-3 py-1.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-300"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <NuxtLink
            to="/contacto"
            class="inline-flex w-full items-center justify-center bg-[#71B1A5] text-white py-4 text-xs font-medium uppercase tracking-[0.2em] hover:bg-[#27252B] transition-colors duration-300 shadow-md shadow-[#71B1A5]/10"
            :aria-label="`Solicitar cita con ${perfil.nombreCorto}`"
          >
            Solicitar consulta con {{ perfil.nombreCorto }}
          </NuxtLink>

        </aside>


        <div class="md:col-span-8 space-y-16 lg:space-y-20">

          <header class="space-y-4 border-b border-[#27252B]/8 pb-10">
            <p class="section-label text-[#71B1A5] font-medium tracking-[0.25em]">{{ perfil.especialidadLabel }}</p>
            <h1
              :id="`h1-${perfil.id}`"
              class="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-[#27252B] leading-[1.1]"
            >
              {{ perfil.nombre }}
            </h1>
            <p class="text-xs md:text-sm font-medium tracking-[0.18em] text-[#27252B]/50 uppercase">
              {{ perfil.tituloOficial }}
            </p>
          </header>

          <figure class="relative pl-10 md:pl-16 py-2" aria-label="Filosofía terapéutica">
            <span
              class="font-serif italic text-[#71B1A5]/15 text-[9rem] md:text-[11rem] leading-none absolute -top-12 -left-2 select-none pointer-events-none font-light"
              aria-hidden="true"
            >“</span>
            <blockquote class="relative z-10">
              <p class="font-serif italic text-[#27252B]/90 text-xl md:text-2xl lg:text-3xl leading-[1.5] max-w-2xl">
                {{ perfil.cita }}
              </p>
            </blockquote>
          </figure>

          <div class="space-y-6">
            <p class="section-label">Trayectoria y Enfoque Humano</p>
            <div class="space-y-6 text-[#27252B]/75 text-base md:text-[18px] leading-[1.9] font-light max-w-3xl">
              <p 
                v-for="(parrafo, i) in perfil.biografiaExtendida" 
                :key="i"
                :class="{'first-letter:text-5xl first-letter:font-serif first-letter:italic first-letter:mr-3 first-letter:float-left first-letter:text-[#71B1A5] first-letter:leading-none': i === 0}"
                v-html="parrafo"
              />
            </div>
          </div>

          <div class="space-y-6">
            <p class="section-label">Recorrido Clínico</p>
            <div class="space-y-6 text-[#27252B]/75 text-base md:text-[18px] leading-[1.9] font-light max-w-3xl">
              <p 
                v-for="(parrafo, i) in perfil.trayectoria" 
                :key="i"
                v-html="parrafo"
              />
            </div>
          </div>

          <div class="space-y-8 pt-4">
            <p class="section-label">Áreas de Especialización Clínica</p>
            <ul class="grid sm:grid-cols-2 gap-6 lg:gap-8 list-none p-0 m-0" aria-label="Áreas de especialización">
              <li
                v-for="(area, i) in perfil.areasEspecializacion"
                :key="i"
                class="bg-white border border-[#27252B]/5 p-6 lg:p-8 space-y-2 border-l-2 border-l-[#71B1A5] shadow-sm shadow-[#27252B]/1"
              >
                <p class="font-serif italic text-lg text-[#27252B]">{{ area.titulo }}</p>
                <p class="text-sm leading-relaxed font-light text-[#27252B]/65">{{ area.descripcion }}</p>
              </li>
            </ul>
          </div>

          <div class="space-y-6">
            <p class="section-label">Formación Académica Destacada</p>
            <ol class="space-y-0 list-none p-0 m-0 border-t border-[#27252B]/8">
              <li
                v-for="(item, i) in perfil.formacion"
                :key="i"
                class="flex items-start gap-6 py-5 border-b border-[#27252B]/8 group/item"
              >
                <span
                  class="font-serif italic text-[#71B1A5]/40 group-hover/item:text-[#71B1A5] text-2xl leading-none select-none shrink-0 w-8 transition-colors duration-300 mt-0.5"
                  aria-hidden="true"
                >
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <div class="flex-1">
                  <p class="font-medium text-[#27252B] text-sm md:text-base leading-snug mb-0.5">{{ item.titulo }}</p>
                  <p class="text-xs md:text-sm text-[#27252B]/50 font-light tracking-wide">{{ item.institucion }}</p>
                </div>
              </li>
            </ol>
          </div>

          <div class="pt-10 border-t border-[#27252B]/10 flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-12">
            <NuxtLink
              to="/contacto"
              class="inline-flex items-center gap-4 group/btn py-1"
              :aria-label="`Reservar cita con ${perfil.nombreCorto}`"
            >
              <span class="text-xs tracking-[0.2em] uppercase font-medium text-[#27252B] group-hover/btn:text-[#71B1A5] transition-colors duration-300">
                Reservar consulta
              </span>
              <span
                class="w-12 h-px bg-[#27252B]/30 group-hover/btn:w-20 group-hover/btn:bg-[#71B1A5] transition-all duration-300"
                aria-hidden="true"
              />
            </NuxtLink>

            <NuxtLink
              to="/conocenos"
              class="inline-flex items-center gap-4 group/btn py-1"
              aria-label="Conocer al resto del equipo"
            >
              <span class="text-xs tracking-[0.2em] uppercase font-medium text-[#27252B]/50 group-hover/btn:text-[#71B1A5] transition-colors duration-300">
                Ver todo el equipo
              </span>
              <span
                class="w-12 h-px bg-[#27252B]/20 group-hover/btn:w-20 group-hover/btn:bg-[#71B1A5] transition-all duration-300"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>

        </div>
      </div>
    </section>


    <section
      v-else
      class="page-container py-36 text-center max-w-xl mx-auto"
    >
      <p class="section-label mb-4 text-[#71B1A5]">Aviso</p>
      <h1 class="font-serif italic text-3xl md:text-4xl text-[#27252B] mb-8 leading-relaxed">
        El perfil profesional que buscas no se encuentra en el equipo de La Seda.
      </h1>
      <NuxtLink
        to="/conocenos"
        class="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#27252B]/60 hover:text-[#71B1A5] transition-colors duration-300 group"
      >
        <span>← Volver al equipo</span>
      </NuxtLink>
    </section>

  </main>
</template>

<script setup lang="ts">

// ─────────────────────────────────────────────────────────────
// TIPOS
// ─────────────────────────────────────────────────────────────
interface AreaEspecializacion {
  titulo: string
  descripcion: string
}

interface ItemFormacion {
  titulo: string
  institucion: string
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
// BASE DE DATOS DE PERFILES (CON PALABRAS CLAVE REMARCADAS EN <strong>)
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
      'Ana comenzó su formación clínica en el Instituto Gestalt de Granada, ampliando posteriormente su base teórica con la formación en <strong>Psicoterapia Clínica Integrativa</strong> junto a Juanjo Albert, una de las figuras más reconocidas de la psicoterapia humanista en España. Esta etapa le aportó una comprensión profunda de cómo los diferentes modelos terapéuticos pueden dialogar en un marco coherente y flexible.',
      'Su participación en el <strong>Programa SAT de Claudio Naranjo</strong> marcó un punto de inflexión en su desarrollo como terapeuta, integrando la psicología transpersonal, el trabajo con el carácter y la dimensión espiritual del proceso terapéutico. Desde entonces, este trabajo continúa siendo un pilar vivo en su práctica.',
      'Con <strong>más de doce años de experiencia clínica en Granada</strong>, ha acompañado a cientos de personas, familias y parejas en procesos de crisis, duelo, ansiedad, trauma y búsqueda de sentido. Co-fundó La Seda con la visión de crear un espacio donde rigor científico y sensibilidad humana formaran una misma cosa.',
    ],
    areasEspecializacion: [
      {
        titulo: 'Terapia individual de adultos',
        descripcion: 'Acompañamiento en procesos de ansiedad, depresión, duelo, crisis vitales, bloqueos emocionales y búsqueda de identidad desde un enfoque integrativo y profundo.',
      },
      {
        titulo: 'Psicología infanto-juvenil',
        descripcion: 'Intervención psicológica con niños y adolescentes en dificultades emocionales, conductuales, de aprendizaje y de vinculación, con especial atención al sistema familiar.',
      },
      {
        titulo: 'Terapia familiar y de pareja',
        descripcion: 'Exploración de los patrones sistémicos que generan sufrimiento en los vínculos más cercanos, facilitando nuevas formas de relacionarse con mayor consciencia y amor.',
      },
      {
        titulo: 'Constelaciones familiares',
        descripcion: 'Metodología vivencial de origen sistémico que permite hacer visible la dinámica oculta de los sistemas familiares y sanar lealtades inconscientes que pesan en el presente.',
      },
    ],
    formacion: [
      { titulo: 'Licenciatura en Psicología', institucion: 'Universidad de Granada' },
      { titulo: 'Formación en Psicoterapia Gestalt (nivel didacta)', institucion: 'Instituto Gestalt de Granada · AETG' },
      { titulo: 'Postgrado en Psicoterapia Clínica Integrativa', institucion: 'Instituto Juanjo Albert, Valencia' },
      { titulo: 'Formación en Terapia Sistémica y Constelaciones Familiares', institucion: 'Escuela de Terapia Familiar de Granada' },
      { titulo: 'Programa SAT — Psicología del Carácter y Espiritualidad', institucion: 'Instituto SAT — Claudio Naranjo' },
      { titulo: 'Formación en Trauma y Apego en Infancia', institucion: 'Fundación FARO, Madrid' },
    ],
    seo: {
      title: 'Ana Jiménez | Psicóloga Integrativa y Co-directora en Granada — La Seda',
      description: 'Ana Jiménez, psicóloga sanitaria colegiada (Nº AO06843) y co-directora del Centro La Seda en Granada. Especializada en terapia Gestalt, psicología infanto-juvenil y constelaciones familiares.',
    },
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
    acreditaciones: [
      'Asesco Nº 10.457 — Asociación Española de Coaching',
      'Co-formadora acreditada en Wingwave® — Instituto Besser-Siegmund, Hamburgo',
      'Colaboradora del Programa SAT de Claudio Naranjo',
    ],
    tags: ['Coaching', 'Wingwave®', 'Constelaciones Familiares', 'Gestalt', 'PNL', 'Bioenergética', 'Bloqueos Emocionales'],
    biografiaExtendida: [
      'Leonor Cabrera es co-directora de La Seda y una de las profesionales más singulares del panorama del <strong>coaching y el desarrollo personal en Granada</strong>. Su trayectoria combina una sólida base académica en Periodismo con una formación profunda en herramientas de transformación emocional, configurando una mirada que entiende el lenguaje como puente entre el mundo interior y la vida que se quiere construir.',
      'Certificada como <strong>Coach Profesional por Asesco</strong>, Leonor ha centrado gran parte de su especialización en el trabajo con los <strong>bloqueos emocionales</strong> que frenan el potencial de las personas. Su herramienta principal en este campo es el <strong>método Wingwave®</strong>, del que no solo es practicante certificada sino co-formadora acreditada por el prestigioso Instituto Besser-Siegmund de Hamburgo.',
      'La experiencia con el <strong>Programa SAT de Claudio Naranjo</strong> imprimió en su práctica una dimensión de profundidad que va más allá de los objetivos del coaching convencional: el trabajo con el carácter, el <strong>autoconocimiento radical</strong> y la integración de las sombras como camino hacia una vida más auténtica.',
    ],
    trayectoria: [
      'Tras licenciarse en Periodismo, Leonor transitó de forma orgánica hacia el mundo del desarrollo humano, atraída por la pregunta de qué es lo que realmente mueve y paraliza a las personas. Sus primeras formaciones en <strong>Gestalt y PNL</strong> le ofrecieron un lenguaje para lo que ya intuía: que los patrones emocionales inconscientes determinan gran parte de nuestras decisiones.',
      'El descubrimiento del <strong>método Wingwave®</strong> supuso un punto de inflexión en su carrera. Su eficacia en el trabajo con el <strong>estrés, el miedo al fracaso, los traumas de rendimiento y los bloqueos creativos</strong> le hizo comprometerse con él a fondo, hasta convertirse en co-formadora oficial para España. Hoy imparte formaciones a otros profesionales.',
      'La <strong>Bioenergética y las constelaciones familiares</strong> completaron su mapa metodológico, añadiendo la dimensión corporal y sistémica que todo proceso de cambio profundo requiere. En La Seda, Leonor trabaja con individuos, parejas y grupos, y co-dirige los programas de formación del centro.',
    ],
    areasEspecializacion: [
      {
        titulo: 'Coaching de desarrollo personal',
        descripcion: 'Procesos individuales para identificar y superar los patrones que limitan el desarrollo profesional, creativo o relacional, con foco en la acción y los resultados sostenibles.',
      },
      {
        titulo: 'Método Wingwave®',
        descripcion: 'Técnica de coaching de alto rendimiento que integra la estimulación bilateral y el test muscular kinesiológico para disolver bloqueos emocionales, miedos y traumas de rendimiento de forma rápida y efectiva.',
      },
      {
        titulo: 'Constelaciones familiares grupales',
        descripcion: 'Facilitación de constelaciones sistémicas en formato grupal e individual para explorar los órdenes del amor familiar y liberar lealtades inconscientes que pesan en el presente.',
      },
      {
        titulo: 'Formación en Wingwave® para profesionales',
        descripcion: 'Programas de certificación acreditados por el Instituto Besser-Siegmund de Hamburgo para coaches, psicólogos y profesionales del desarrollo humano.',
      },
    ],
    formacion: [
      { titulo: 'Licenciatura en Periodismo', institucion: 'Universidad de Granada' },
      { titulo: 'Certificación en Coaching Profesional', institucion: 'Asesco — Asociación Española de Coaching' },
      { titulo: 'Certificación en Wingwave® Coaching (nivel co-formadora)', institucion: 'Instituto Besser-Siegmund, Hamburgo' },
      { titulo: 'Formación en Terapia Gestalt', institucion: 'Instituto Gestalt de Granada' },
      { titulo: 'Formación en Bioenergética y Trabajo Corporal', institucion: 'Centro de Estudios de Bioenergética, Madrid' },
      { titulo: 'Programa SAT — Psicología del Carácter y Espiritualidad', institucion: 'Instituto SAT — Claudio Naranjo' },
      { titulo: 'Formación en PNL (Programación Neurolingüística)', institucion: 'Sociedad Española de PNL' },
      { titulo: 'Formación en Constelaciones Familiares', institucion: 'Escuela Hellinger Sciencia, España' },
    ],
    seo: {
      title: 'Leonor Cabrera | Coach Wingwave® y Co-directora en Granada — La Seda',
      description: 'Leonor Cabrera, coach profesional certificada (Asesco Nº 10.457) y co-formadora en Wingwave®. Co-directora de La Seda en Granada. Especializada en bloqueos emocionales y constelaciones familiares.',
    },
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
    acreditaciones: [
      'Titulada en Educación Social — habilitada para la intervención con menores y familias',
      'Formada en Técnicas Gestálticas para Infancia y Adolescencia — ITG Valencia',
      'Certificada en el Programa SAT de Claudio Naranjo',
    ],
    tags: ['Educación Social', 'Gestalt Infanto-Juvenil', 'Sistémica', 'Familias', 'Adolescencia', 'Programa SAT', 'Prevención'],
    biografiaExtendida: [
      'Cristina Lence es <strong>educadora social</strong> y uno de los pilares del trabajo con infancia y familias en el Centro La Seda. Su labor se sitúa en ese espacio tan necesario: el <strong>acompañamiento socioemocional</strong> que necesitan niños, niñas, adolescentes y sus familias para crecer con raíces sanas.',
      'Su enfoque integra la <strong>Gestalt aplicada a la infancia y la adolescencia</strong> —aprendida en profundidad con la ITG de Valencia— con la <strong>mirada sistémica</strong>, que le permite leer los comportamientos del niño no de forma aislada, sino dentro del tejido familiar. Esto transforma radicalmente la intervención: se trabaja con el sistema entero.',
      'Cristina aporta al equipo una sensibilidad especial para conectar con la infancia desde su propio lenguaje: <strong>el juego, el movimiento, la expresión artística y la narrativa</strong>. Su trabajo crea puentes de comunicación fundamentales entre niños y adultos.',
    ],
    trayectoria: [
      'Formada en Educación Social, Cristina orientó desde el principio su carrera hacia la infancia en contextos de vulnerabilidad emocional. Su experiencia en proyectos socioeducativos en Granada le mostró que las dificultades de los menores son siempre el reflejo de un <strong>sistema familiar y escolar</strong> que necesita atención.',
      'Esta convicción la llevó a profundizar en la Gestalt aplicada a la infancia y la adolescencia con la ITG de Valencia. Aprendió a trabajar con <strong>el cuerpo, la emoción y el contacto</strong> como vías de acceso al mundo interno del niño, respetando siempre su ritmo natural.',
      'Su paso por el <strong>Programa SAT de Claudio Naranjo</strong> amplió su perspectiva sobre el desarrollo humano. En La Seda, Cristina acompaña familias, facilita <strong>talleres de parentalidad consciente</strong> y co-diseña los programas educativos del centro.',
    ],
    areasEspecializacion: [
      {
        titulo: 'Acompañamiento infanto-juvenil',
        descripcion: 'Intervención socioemocional individualizada con niños y adolescentes que presentan dificultades de conducta, regulación emocional, autoestima o adaptación escolar y social.',
      },
      {
        titulo: 'Orientación y educación familiar',
        descripcion: 'Acompañamiento a padres y madres en el desarrollo de una parentalidad más consciente, conectada y respetuosa, con herramientas prácticas para el día a día familiar.',
      },
      {
        titulo: 'Talleres de expresión emocional para infancia',
        descripcion: 'Programas grupales para niños y adolescentes donde el juego, el arte y el movimiento se convierten en lenguajes para explorar, nombrar y gestionar el mundo emocional.',
      },
      {
        titulo: 'Intervención sistémica familiar',
        descripcion: 'Trabajo con el sistema familiar para comprender los patrones relacionales que generan sufrimiento y facilitar cambios que beneficien a todos sus miembros, especialmente a los más pequeños.',
      },
    ],
    formacion: [
      { titulo: 'Diplomatura en Educación Social', institucion: 'Universidad de Granada' },
      { titulo: 'Formación en Técnicas Gestálticas para Infancia y Adolescencia', institucion: 'Instituto de Terapia Gestalt (ITG), Valencia' },
      { titulo: 'Programa SAT — Psicología del Carácter y Desarrollo Personal', institucion: 'Instituto SAT — Claudio Naranjo' },
      { titulo: 'Formación en Terapia Sistémica Breve', institucion: 'Centro de Terapia Sistémica de Granada' },
      { titulo: 'Especialización en Parentalidad Consciente y Crianza Respetuosa', institucion: 'Instituto Aware Parenting, España' },
      { titulo: 'Curso de Intervención en Duelo Infantil', institucion: 'Fundación Mario Losantos del Campo, Madrid' },
    ],
    seo: {
      title: 'Cristina Lence | Educadora Familiar y Especialista en Infancia en Granada — La Seda',
      description: 'Cristina Lence, educadora social especializada en Gestalt infanto-juvenil y sistémica en el Centro La Seda de Granada. Acompañamiento a niños, adolescentes y familias.',
    },
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
    acreditaciones: [
      'Colegiada Nº 18-10008273 — Colegio Oficial de Médicos de Granada',
      'Especialista en Pediatría — Formación MIR',
      'Formada en Terapia Gestalt — AETG',
      'Certificada en Terapia Corporal Integrativa — equipo Antonio Pacheco',
    ],
    tags: ['Medicina Pediátrica', 'Terapia Gestalt', 'Trabajo Corporal', 'Bioenergética', 'Eneatipos', 'Sistémica', 'Salud Integrativa'],
    biografiaExtendida: [
      'Reyes Sánchez Tallón es médica pediatra colegiada y la voz de la <strong>medicina integrativa</strong> dentro del equipo de La Seda. Su presencia encarna una visión de la salud donde <strong>el cuerpo, la emoción y la mente</strong> forman un sistema indivisible que merece ser escuchado en su totalidad.',
      'Su formación como pediatra le dio una base científica sólida. Pero fue su encuentro con la <strong>Gestalt, el trabajo corporal y la psicología de los eneatipos</strong> lo que transformó su forma de acompañar, añadiendo a su mirada médica la capacidad de leer el cuerpo como un mapa emocional vivo.',
      'Reyes trabaja desde la frontera enriquecedora que existe entre la medicina y la psicoterapia, un espacio donde la <strong>somatización</strong> tiene nombre, donde el síntoma físico es también un mensaje y donde se cuida la salud emocional de todo el núcleo familiar.',
    ],
    trayectoria: [
      'Tras completar su especialización como pediatra por <strong>vía MIR</strong>, Reyes ejerció durante años en el sistema sanitario público, donde fue testigo de cómo el malestar emocional se manifestaba en forma de <strong>síntomas físicos en niños y adultos</strong>. Esto detonó su búsqueda de herramientas más amplias.',
      'Su formación en <strong>terapia Gestalt</strong> le abrió la puerta al trabajo con la experiencia subjetiva. Poco después, la <strong>Terapia Corporal Integrativa (TCI)</strong> le proporcionó un lenguaje para intervenir directamente a través del cuerpo, integrando la dimensión somática que la medicina convencional suele dejar fuera.',
      'El trabajo con la psicología de los eneatipos y la <strong>Bioenergética</strong> añadió una capa de comprensión del carácter que enriquece enormemente su consulta en La Seda, la cual combina con su formación continua en terapia sistémica y el Programa SAT.',
    ],
    areasEspecializacion: [
      {
        titulo: 'Salud pediátrica integrativa',
        descripcion: 'Atención médica pediátrica que integra la perspectiva emocional y familiar en la comprensión de los síntomas físicos de niños y adolescentes, con especial atención a las somatizaciones.',
      },
      {
        titulo: 'Terapia Gestalt con adultos',
        descripcion: 'Acompañamiento terapéutico individual desde el enfoque Gestalt, trabajando con la conciencia del momento presente, el contacto, la emoción y el cuerpo como fuentes de autoconocimiento y cambio.',
      },
      {
        titulo: 'Terapia corporal integrativa',
        descripcion: 'Intervención terapéutica que utiliza el cuerpo como vía de acceso a experiencias emocionales y memorias somáticas, facilitando la integración de vivencias que el lenguaje verbal no alcanza a procesar.',
      },
      {
        titulo: 'Psicología de los eneatipos y Bioenergética',
        descripcion: 'Trabajo con el mapa del carácter y la estructura energética del cuerpo para comprender los patrones de respuesta emocional y liberar bloqueos que limitan la vitalidad y el desarrollo personal.',
      },
    ],
    formacion: [
      { titulo: 'Licenciatura en Medicina y Cirugía', institucion: 'Universidad de Granada' },
      { titulo: 'Especialidad en Pediatría (MIR)', institucion: 'Hospital Universitario Clínico San Cecilio, Granada' },
      { titulo: 'Formación en Terapia Gestalt', institucion: 'Instituto Gestalt de Granada · AETG' },
      { titulo: 'Terapia Corporal Integrativa', institucion: 'Equipo Antonio Pacheco, España' },
      { titulo: 'Psicología de los Eneatipos y Bioenergética', institucion: 'Formación con Fernando de Juan' },
      { titulo: 'Programa SAT — Psicología del Carácter y Espiritualidad', institucion: 'Instituto SAT — Claudio Naranjo' },
      { titulo: 'Formación en Terapia Sistémica (en curso)', institucion: 'Psicogestalt, Madrid' },
    ],
    seo: {
      title: 'Reyes Sánchez Tallón | Médica Pediatra y Terapeuta Gestalt en Granada — La Seda',
      description: 'Reyes Sánchez Tallón, médica pediatra colegiada (Nº 18-10008273) especializada en salud integrativa y terapia Gestalt en el Centro La Seda de Granada.',
    },
  },
}

// ─────────────────────────────────────────────────────────────
// LÓGICA DE RUTA Y COMPUTED
// ─────────────────────────────────────────────────────────────
const route = useRoute()
const id = route.params.id as string
const perfil = computed<PerfilProfesional | null>(() => perfiles[id] ?? null)

// ─────────────────────────────────────────────────────────────
// SEO DINÁMICO Y METADATOS PREMIUM (JSON-LD)
// ─────────────────────────────────────────────────────────────
if (perfil.value) {
  useSeoMeta({
    title: perfil.value.seo.title,
    description: perfil.value.seo.description,
    ogTitle: perfil.value.seo.title,
    ogDescription: perfil.value.seo.description,
    ogImage: perfil.value.imagen,
    ogType: 'profile',
    ogUrl: `https://www.laseda.es/conocenos/${perfil.value.id}`,
    twitterCard: 'summary_large_image',
    twitterTitle: perfil.value.seo.title,
    twitterDescription: perfil.value.seo.description,
    robots: 'index, follow',
  })

  useHead({
    link: [{ rel: 'canonical', href: `https://www.laseda.es/conocenos/${perfil.value.id}` }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': perfil.value.nombre,
          'jobTitle': perfil.value.tituloOficial,
          'image': `https://www.laseda.es${perfil.value.imagen}`,
          'url': `https://www.laseda.es/conocenos/${perfil.value.id}`,
          'worksFor': {
            '@type': 'MedicalBusiness',
            '@id': 'https://www.laseda.es/#business',
            'name': 'La Seda · Psicología y Crecimiento en Granada',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Granada',
              'addressRegion': 'Andalucía',
              'addressCountry': 'ES',
            },
          },
          'knowsAbout': perfil.value.tags,
        }),
      },
    ],
  })
} else {
  useSeoMeta({
    title: 'Perfil no encontrado | La Seda Granada',
    robots: 'noindex, nofollow',
  })
}
</script><style scoped>
/* Controla el grosor exacto de las negritas en los textos editoriales */
:deep(strong) {
  font-weight: 500; /* Prueba con 600 (semi-bold), 700 (bold) o 800 (extra-bold) */
  color: #27252B;   /* Le da el color oscuro completo para que resalte más */
}
</style>