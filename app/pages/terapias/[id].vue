<script setup>
const route = useRoute()

const terapias = {
  'adultos': {
    titulo: 'Psicoterapia',
    tituloItalico: 'para Adultos',
    subtitulo: 'Un espacio donde el malestar encuentra nombre, forma y camino.',
    descripcion: [
      'La vida adulta trae consigo una complejidad que a menudo desborda los recursos emocionales con los que contamos. La ansiedad, la tristeza persistente, las pérdidas, las transiciones vitales o la sensación de no reconocerse a uno mismo son motivos legítimos y frecuentes para iniciar un proceso terapéutico. En La Seda acompañamos cada una de estas experiencias con rigor clínico y una escucha genuinamente humana.',
      'Trabajamos desde un modelo integrativo que nos permite seleccionar las herramientas más adecuadas para cada persona: técnicas cognitivo-conductuales para modificar patrones de pensamiento, enfoques humanistas para reconectar con la propia experiencia, o intervenciones basadas en mindfulness para cultivar una relación más compasiva con uno mismo. El objetivo no es solo aliviar el síntoma, sino fortalecer la capacidad de vivir con mayor autenticidad.',
    ],
    sintomas: [
      'Ansiedad generalizada o episodios de pánico recurrentes',
      'Tristeza prolongada, apatía o síntomas depresivos',
      'Duelos complicados o pérdidas no elaboradas',
      'Baja autoestima, autocrítica excesiva o bloqueo vital',
    ],
    enfoque: 'Desde La Seda abordamos la psicoterapia de adultos combinando evaluación diagnóstica precisa con una relación terapéutica cálida. Cada proceso se diseña de forma individual, con objetivos claros y revisados periódicamente, para asegurarnos de que cada sesión tiene un propósito real en tu vida cotidiana.',
  },
  'pareja': {
    titulo: 'Terapia',
    tituloItalico: 'de Pareja',
    subtitulo: 'Cuando la relación necesita un espacio propio para crecer.',
    descripcion: [
      'Toda relación atraviesa momentos de tensión, distancia o incomprensión. No es señal de fracaso: es parte de la complejidad de compartir la vida con otra persona. La terapia de pareja ofrece un espacio neutral, seguro y estructurado donde ambas personas pueden ser escuchadas, comprendidas y guiadas hacia formas de relacionarse más conscientes y satisfactorias.',
      'En La Seda trabajamos con parejas en distintos momentos del vínculo: desde crisis agudas de comunicación o confianza, hasta procesos de crecimiento conjunto para parejas que funcionan bien pero quieren profundizar. El objetivo no es siempre "salvar" la relación, sino ayudar a cada persona a tomar decisiones auténticas desde un lugar más claro y menos reactivo.',
    ],
    sintomas: [
      'Conflictos repetitivos sin resolución y escalada emocional',
      'Crisis de confianza o infidelidad y reconstrucción del vínculo',
      'Distancia emocional, frialdad o sensación de desconexión',
      'Dificultades en la comunicación o en la gestión de diferencias',
    ],
    enfoque: 'Utilizamos el modelo sistémico-relacional y técnicas de la terapia centrada en las emociones (EFT) para trabajar los patrones de interacción que mantienen el conflicto. El foco no está en quién tiene razón, sino en cómo construir un ciclo de comunicación más seguro y reparador para ambos.',
  },
  'infanto-juvenil': {
    titulo: 'Terapia',
    tituloItalico: 'Infanto-Juvenil',
    subtitulo: 'Acompañar la infancia y la adolescencia con la profundidad que merecen.',
    descripcion: [
      'Los niños y adolescentes no siempre tienen las palabras para expresar lo que les ocurre, pero su comportamiento, sus emociones y su cuerpo lo comunican de múltiples formas. La terapia infanto-juvenil ofrece un espacio adaptado a cada etapa del desarrollo donde el niño o joven puede explorar su mundo interior con herramientas ajustadas a su edad: el juego, la expresión creativa, el diálogo o la narrativa.',
      'En La Seda entendemos que el trabajo con menores es también, inevitablemente, un trabajo con su sistema familiar. Por eso incluimos orientación parental como parte integral del proceso: padres y cuidadores son aliados imprescindibles en cualquier cambio duradero. Nuestro equipo cuenta con formación especializada en apego, trauma infantil y dificultades del neurodesarrollo.',
    ],
    sintomas: [
      'Miedos intensos, fobias escolares o rechazo al entorno social',
      'Dificultades emocionales asociadas a separaciones o cambios familiares',
      'Problemas de conducta, impulsividad o dificultades de regulación',
      'Bajo estado de ánimo, retraimiento o señales de ansiedad en la adolescencia',
    ],
    enfoque: 'Integramos técnicas de terapia de juego, narrativa terapéutica y enfoque sistémico familiar. Cada intervención se diseña teniendo en cuenta la edad y el momento evolutivo del menor, con sesiones específicas de orientación parental para asegurar la transferencia de los cambios al entorno cotidiano.',
  },
  'familiar': {
    titulo: 'Terapia',
    tituloItalico: 'Familiar',
    subtitulo: 'El sistema familiar como fuente de problema y de solución.',
    descripcion: [
      'La familia es el primer contexto en el que aprendemos a relacionarnos, a gestionar emociones y a construir nuestra identidad. Cuando ese sistema atraviesa dificultades —conflictos intergeneracionales, crisis de convivencia, duelos colectivos o momentos de transición— el malestar no pertenece a una sola persona, sino a la dinámica relacional del conjunto.',
      'La terapia familiar sistémica trabaja precisamente con esa dinámica: explora los patrones de comunicación, los roles establecidos, las lealtades implícitas y los recursos propios del grupo familiar. El objetivo es ayudar al sistema a reorganizarse de forma más flexible, funcional y satisfactoria para todos sus miembros, respetando las diferencias generacionales y personales.',
    ],
    sintomas: [
      'Conflictos persistentes entre padres e hijos adolescentes',
      'Crisis de convivencia tras separaciones, recomposiciones familiares o duelos',
      'Dinámicas de triangulación, roles rígidos o comunicación disfuncional',
      'Dificultad para adaptarse a cambios vitales como enfermedades crónicas o pérdidas',
    ],
    enfoque: 'Trabajamos desde el modelo sistémico intergeneracional e incorporamos herramientas de las Constelaciones Familiares cuando la historia transgeneracional resulta relevante. Las sesiones incluyen a los miembros del sistema que sea pertinente en cada momento del proceso, con un enfoque colaborativo y no culpabilizador.',
  },
  'online': {
    titulo: 'Terapia',
    tituloItalico: 'Online',
    subtitulo: 'La misma profundidad clínica, desde cualquier lugar del mundo.',
    descripcion: [
      'La terapia online no es una alternativa de segunda categoría: es un formato igualmente válido y eficaz para la mayoría de los procesos terapéuticos. La evidencia clínica respalda su efectividad en el tratamiento de la ansiedad, la depresión, las dificultades relacionales y muchos otros motivos de consulta. En La Seda hemos incorporado la modalidad online manteniendo exactamente los mismos estándares de calidad, ética y profundidad que en el trabajo presencial.',
      'La sesión online elimina barreras geográficas y de movilidad, permite mayor flexibilidad horaria y ofrece la posibilidad de trabajar desde el propio entorno, lo que para muchas personas resulta más cómodo y menos intimidante. Utilizamos plataformas seguras y confidenciales, con garantías de protección de datos, para que el espacio terapéutico sea privado y libre de interrupciones.',
    ],
    sintomas: [
      'Necesidad de flexibilidad horaria o geográfica para acceder a terapia',
      'Dificultad de desplazamiento por motivos físicos, laborales o familiares',
      'Preferencia por trabajar desde un entorno propio y familiar',
      'Continuidad de un proceso terapéutico iniciado de forma presencial',
    ],
    enfoque: 'Todas nuestras psicólogas ofrecen modalidad online con la misma preparación clínica y el mismo modelo integrativo que en las sesiones presenciales. La primera sesión de valoración puede realizarse igualmente en formato online, de forma que el inicio del proceso sea accesible desde el primer momento.',
  },
}

const id = route.params.id
const terapia = computed(() => terapias[id] ?? terapias['adultos'])

useSeoMeta({
  title: () => `${terapia.value.titulo} ${terapia.value.tituloItalico} · La Seda Granada`,
  description: () => terapia.value.subtitulo,
})
</script>

<template>
  <main class="bg-[#FDFBF9] text-[#27252B] font-sans overflow-x-hidden">

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · MINI-HERO DINÁMICO
    ════════════════════════════════════════════════ -->
    <section
      class="relative w-full overflow-hidden"
      style="height: clamp(40vh, 45vh, 50vh);"
    >
      <!-- Imagen de fondo -->
      <img
        src="/images/default.jpg"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover rounded-none"
      />

      <!-- Gradiente horizontal -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#FDFBF9]/95 via-[#FDFBF9]/75 to-[#FDFBF9]/20 pointer-events-none" />
      <!-- Gradiente vertical hacia abajo -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFBF9] pointer-events-none" />

      <!-- Contenido -->
      <div class="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 mb-6" aria-label="Ruta de navegación">
          <NuxtLink
            to="/terapias"
            class="text-xs tracking-[0.25em] uppercase text-[#27252B]/50 hover:text-[#71B1A5] transition-colors duration-200"
          >
            Terapias
          </NuxtLink>
          <span class="text-[#27252B]/30 text-xs">·</span>
          <span class="text-xs tracking-[0.25em] uppercase text-[#71B1A5]">
            {{ terapia.titulo }} {{ terapia.tituloItalico }}
          </span>
        </nav>

        <!-- Título dinámico -->
        <h1 class="text-[#27252B] text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4 max-w-2xl">
          <span class="font-sans font-light tracking-tight">{{ terapia.titulo }}</span>
          <span class="font-serif italic block md:inline md:ml-3">{{ terapia.tituloItalico }}</span>
        </h1>

        <!-- Subtítulo clínico -->
        <p class="text-[#71B1A5] text-base md:text-lg leading-[1.7] max-w-xl font-light tracking-wide">
          {{ terapia.subtitulo }}
        </p>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 2 · CONTENIDO EDITORIAL DOS COLUMNAS
    ════════════════════════════════════════════════ -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-start">

        <!-- Columna izquierda: descripción en profundidad (col 7) -->
        <div class="md:col-span-7 space-y-6">

          <div class="w-10 h-px bg-[#71B1A5]" />

          <p
            v-for="(parrafo, i) in terapia.descripcion"
            :key="i"
            class="text-lg md:text-xl leading-[1.9] text-[#27252B]/80"
          >
            {{ parrafo }}
          </p>

          <!-- Imagen ilustrativa -->
          <div class="mt-8 overflow-hidden rounded-none aspect-[16/7]">
            <img
              src="/images/default.jpg"
              :alt="`Sesión de ${terapia.titulo} ${terapia.tituloItalico} en La Seda`"
              class="w-full h-full object-cover rounded-none"
            />
          </div>

        </div>

        <!-- Columna derecha: tarjeta de síntomas/motivos (col 5) -->
        <div class="md:col-span-5 md:sticky md:top-28">
          <div class="bg-white border border-[#27252B]/8 rounded-none p-8 md:p-10">

            <!-- Cabecera tarjeta -->
            <div class="flex items-center gap-3 mb-8">
              <div class="w-1 h-12 bg-[#71B1A5]" />
              <div>
                <p class="text-[10px] tracking-[0.3em] uppercase text-[#71B1A5] font-medium mb-1">
                  Motivos frecuentes
                </p>
                <h2 class="font-serif italic text-[#27252B] text-xl leading-snug">
                  ¿Por qué se acude<br />a esta consulta?
                </h2>
              </div>
            </div>

            <!-- Lista de síntomas -->
            <ul class="space-y-5" role="list">
              <li
                v-for="(sintoma, i) in terapia.sintomas"
                :key="i"
                class="flex items-start gap-4 group"
              >
                <!-- Número -->
                <span class="font-serif italic text-[#71B1A5]/60 text-2xl leading-none select-none mt-0.5 shrink-0 w-6">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <!-- Texto -->
                <p class="text-base leading-[1.75] text-[#27252B]/75 pt-0.5">
                  {{ sintoma }}
                </p>
              </li>
            </ul>

            <!-- Separador -->
            <div class="mt-8 pt-8 border-t border-[#27252B]/8">
              <p class="text-xs tracking-[0.2em] uppercase text-[#27252B]/40 mb-3">
                Centro acreditado · Granada
              </p>
              <NuxtLink
                to="/contacto"
                class="inline-flex items-center gap-3 group"
              >
                <span class="text-sm tracking-[0.2em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
                  Pedir cita
                </span>
                <span class="w-8 h-px bg-[#27252B]/30 group-hover:w-12 group-hover:bg-[#71B1A5] transition-all duration-300" />
              </NuxtLink>
            </div>

          </div>
        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 3 · ENFOQUE METODOLÓGICO + CTA
    ════════════════════════════════════════════════ -->
    <section class="relative overflow-hidden">

      <!-- Fondo imagen difuminado -->
      <div class="absolute inset-0">
        <img
          src="/images/default.jpg"
          alt=""
          aria-hidden="true"
          class="w-full h-full object-cover rounded-none"
        />
        <div class="absolute inset-0 bg-[#27252B]/88" />
      </div>

      <!-- Patrón de puntos decorativo -->
      <div
        class="absolute inset-0 opacity-[0.04] pointer-events-none"
        style="background-image: radial-gradient(circle, #71B1A5 1px, transparent 1px); background-size: 36px 36px;"
      />

      <!-- Contenido -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div class="max-w-3xl mx-auto text-center">

          <!-- Decoración -->
          <div class="flex items-center justify-center gap-5 mb-10">
            <div class="h-px w-12 bg-[#71B1A5]/50" />
            <div class="w-2 h-2 bg-[#71B1A5] rotate-45" />
            <div class="h-px w-12 bg-[#71B1A5]/50" />
          </div>

          <!-- Etiqueta -->
          <p class="text-[#71B1A5] text-xs tracking-[0.35em] uppercase font-medium mb-5">
            Nuestro enfoque
          </p>

          <!-- Título -->
          <h2 class="font-serif italic text-white text-3xl md:text-4xl lg:text-5xl leading-[1.2] mb-8">
            Cómo trabajamos<br />
            <span class="not-italic font-light text-white/60 text-2xl md:text-3xl">
              este proceso contigo
            </span>
          </h2>

          <!-- Texto del enfoque dinámico -->
          <p class="text-lg md:text-xl leading-[1.9] text-white/70 mb-14 font-light">
            {{ terapia.enfoque }}
          </p>

          <!-- Separador -->
          <div class="w-16 h-px bg-[#71B1A5]/40 mx-auto mb-14" />

          <!-- CTA principal -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink
              to="/contacto"
              class="group relative inline-flex items-center justify-center gap-3 bg-[#71B1A5] text-white px-10 py-5 text-xs tracking-[0.25em] uppercase font-semibold rounded-none hover:bg-[#5a9a8e] transition-all duration-400 shadow-xl shadow-[#71B1A5]/30 hover:shadow-2xl hover:shadow-[#71B1A5]/50 hover:-translate-y-0.5 overflow-hidden w-full sm:w-auto"
            >
              <!-- Shimmer hover -->
              <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Reservar una sesión de valoración
            </NuxtLink>

            <!-- Enlace secundario -->
            <NuxtLink
              to="/terapias"
              class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-200 group"
            >
              <svg
                class="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-1 transition-transform duration-200"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
              Ver todas las terapias
            </NuxtLink>
          </div>

        </div>
      </div>

    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 4 · OTRAS ESPECIALIDADES
    ════════════════════════════════════════════════ -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">

      <div class="flex items-center justify-between mb-12">
        <div>
          <p class="text-[#71B1A5] text-xs tracking-[0.35em] uppercase font-medium mb-2">
            Otras especialidades
          </p>
          <h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl">
            También puede interesarte
          </h3>
        </div>
        <NuxtLink
          to="/terapias"
          class="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B]/50 hover:text-[#71B1A5] transition-colors duration-200 group"
        >
          Ver todas
          <span class="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
        </NuxtLink>
      </div>

      <!-- Grid de otras terapias filtradas -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink
          v-for="(t, key) in terapias"
          :key="key"
          :to="`/terapias/${key}`"
          v-show="key !== id"
          class="group block bg-white border border-[#27252B]/8 rounded-none overflow-hidden hover:border-[#71B1A5]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#71B1A5]/8"
        >
          <!-- Imagen -->
          <div class="overflow-hidden aspect-[3/2]">
            <img
              src="/images/default.jpg"
              :alt="t.titulo + ' ' + t.tituloItalico"
              class="w-full h-full object-cover rounded-none group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <!-- Contenido -->
          <div class="p-5">
            <div class="w-4 h-px bg-[#71B1A5] mb-3" />
            <p class="text-sm font-light text-[#27252B]">{{ t.titulo }}</p>
            <p class="font-serif italic text-[#27252B] text-lg leading-snug">{{ t.tituloItalico }}</p>
            <p class="text-xs tracking-[0.15em] uppercase text-[#71B1A5] mt-3 group-hover:gap-3 flex items-center gap-2 transition-all duration-200">
              Ver más
              <span class="w-4 h-px bg-[#71B1A5] group-hover:w-6 transition-all duration-300" />
            </p>
          </div>
        </NuxtLink>
      </div>

    </section>

  </main>
</template>