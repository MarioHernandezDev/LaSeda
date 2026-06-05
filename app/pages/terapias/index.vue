<template>
  <main class="bg-[#FDFBF9] text-[#27252B] font-sans overflow-x-hidden">

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · MINI-HERO
    ════════════════════════════════════════════════ -->
    <section class="relative w-full" style="height: clamp(45vh, 52vh, 55vh);">

      <video
        class="absolute inset-0 w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
        poster="/images/centro-psicologia-la-seda-granada-hero.jpg"
      >
        <source src="/video/minhero.mp4" type="video/mp4" />
        <!-- Fallback above the fold → preload + fetchpriority high -->
        <NuxtImg
          src="/images/centro-psicologia-la-seda-granada-hero.jpg"
          alt="Centro de Psicología La Seda Granada — procesos de psicoterapia y cuidado psicológico"
          format="webp"
          preload
          fetchpriority="high"
          class="w-full h-full object-cover"
        />
      </video>

      <div class="absolute inset-0 bg-gradient-to-r from-[#FDFBF9]/90 via-[#FDFBF9]/60 to-transparent pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFBF9]/95 pointer-events-none"></div>

      <div class="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <p class="text-[#71B1A5] text-xs md:text-sm font-medium tracking-[0.35em] uppercase mb-4 md:mb-6">
          Especialidades Clínicas
        </p>

        <h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-5 md:mb-7 max-w-2xl">
          Procesos de Psicoterapia<br />
          <span class="text-[#27252B]/75">y Cuidado Psicológico</span>
        </h1>

        <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/80 max-w-xl">
          Acompañamos cada etapa vital desde un espacio de escucha activa,
          rigor clínico y profundo respeto por la singularidad de cada persona.
        </p>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 2 · INTRODUCCIÓN AL ENFOQUE
    ════════════════════════════════════════════════ -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-start">

        <div class="md:col-span-4 md:sticky md:top-28">
          <div class="w-12 h-px bg-[#71B1A5] mb-6"></div>
          <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2]">
            Terapia integrativa adaptada a tu momento vital.
          </h2>
          <div class="mt-8 w-1 h-24 bg-[#71B1A5]/30"></div>
        </div>

        <div class="md:col-span-8 space-y-7">
          <p class="text-lg md:text-xl leading-[1.9] text-[#27252B]/80">
            En La Seda trabajamos desde la psicología integrativa, un modelo que
            nos permite seleccionar y combinar las herramientas más adecuadas de
            diferentes corrientes para cada persona. No existe una única forma de
            sanar: nuestro compromiso es encontrar el camino que mejor resuene
            con tu historia, tu carácter y tus necesidades actuales.
          </p>
          <p class="text-lg md:text-xl leading-[1.9] text-[#27252B]/80">
            La terapia cognitivo-conductual, el enfoque humanista, la perspectiva
            sistémica y el protocolo EMDR conviven en nuestra práctica cotidiana.
            Esta pluralidad nos permite ofrecer un acompañamiento verdaderamente
            personalizado, con evidencia científica y con la calidez que merece
            cada proceso de cambio.
          </p>
          <div class="inline-flex items-center gap-3 pt-2">
            <div class="w-2 h-2 bg-[#71B1A5]"></div>
            <span class="text-sm tracking-[0.2em] uppercase text-[#71B1A5]">Centro acreditado · Granada</span>
          </div>
        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 3 · REJILLA DE TERAPIAS
    ════════════════════════════════════════════════ -->
    <section class="bg-[#27252B]/[0.03] py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-16">
          <div>
            <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-3">
              Nuestras Especialidades
            </p>
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2]">
              Áreas de intervención
            </h2>
          </div>
          <div class="w-24 h-px bg-[#27252B]/20 md:mb-2"></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <!-- ── Tarjeta 1: Terapia y Acompañamiento Adulto ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-colors duration-300">
            <div class="overflow-hidden aspect-[4/3]">
              <!-- Below the fold → loading lazy -->
              <NuxtImg
                src="/images/terapia-acompanamiento-adulto-psicologia-granada-la-seda.jpg"
                alt="Terapia individual y acompañamiento para adultos en el Centro de Psicología La Seda, Granada"
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover rounded-none grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-7 flex flex-col flex-1 gap-4">
              <div class="w-6 h-px bg-[#71B1A5]"></div>
              <h3 class="font-serif italic text-[#27252B] text-2xl leading-snug">
                Terapia y Acompañamiento Adulto
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                Un espacio para resolver conflictos internos y relacionales,
                conectar con tus emociones y avanzar hacia una vida más plena.
                Trabajamos con sesiones de terapia, coaching y acompañamiento
                emocional adaptadas a tu momento.
              </p>
              <NuxtLink
                to="/terapias/adultos"
                class="self-start text-sm tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200"
              >
                Saber más
              </NuxtLink>
            </div>
          </article>

          <!-- ── Tarjeta 2: Terapia Adolescentes ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-colors duration-300">
            <div class="overflow-hidden aspect-[4/3]">
              <!-- Below the fold → loading lazy -->
              <NuxtImg
                src="/images/terapia-psicologica-adolescentes-granada-centro-la-seda.jpg"
                alt="Terapia psicológica para adolescentes en Granada — Centro de Psicología La Seda"
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover rounded-none grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-7 flex flex-col flex-1 gap-4">
              <div class="w-6 h-px bg-[#71B1A5]"></div>
              <h3 class="font-serif italic text-[#27252B] text-2xl leading-snug">
                Terapia Adolescentes
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                ¿Tu hijo adolescente parece distante, se salta las normas y
                sientes que no logras conectar con él o con ella? Acompañamos
                a jóvenes y familias para encontrar nuevas formas de
                comunicación y entendimiento.
              </p>
              <NuxtLink
                to="/terapias/adolescentes"
                class="self-start text-sm tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200"
              >
                Saber más
              </NuxtLink>
            </div>
          </article>

          <!-- ── Tarjeta 3: Terapia de Pareja y Familia ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-colors duration-300">
            <div class="overflow-hidden aspect-[4/3]">
              <!-- Below the fold → loading lazy -->
              <NuxtImg
                src="/images/terapia-pareja-familia-sistemica-granada-centro-la-seda.jpg"
                alt="Terapia de pareja y familia con enfoque sistémico en el Centro de Psicología La Seda, Granada"
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover rounded-none grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-7 flex flex-col flex-1 gap-4">
              <div class="w-6 h-px bg-[#71B1A5]"></div>
              <h3 class="font-serif italic text-[#27252B] text-2xl leading-snug">
                Terapia de Pareja y Familia
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                Exploramos los objetivos, beneficios y dinámica de la terapia
                de pareja y familiar: un espacio para mejorar la comunicación,
                gestionar conflictos y fortalecer los vínculos desde
                un enfoque sistémico.
              </p>
              <NuxtLink
                to="/terapias/pareja-familia"
                class="self-start text-sm tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200"
              >
                Saber más
              </NuxtLink>
            </div>
          </article>

          <!-- ── Tarjeta 4: Terapia Infantil ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-colors duration-300">
            <div class="overflow-hidden aspect-[4/3]">
              <!-- Below the fold → loading lazy -->
              <NuxtImg
                src="/images/terapia-infantil-psicologia-ninos-granada-centro-la-seda.jpg"
                alt="Terapia infantil y psicología para niños en el Centro de Psicología La Seda, Granada"
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover rounded-none grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-7 flex flex-col flex-1 gap-4">
              <div class="w-6 h-px bg-[#71B1A5]"></div>
              <h3 class="font-serif italic text-[#27252B] text-2xl leading-snug">
                Terapia Infantil
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                Estamos especializadas en trabajar con las emociones humanas,
                especialmente aquellas que generan malestar en el día a día
                de los más pequeños y que les impiden desarrollarse con
                plenitud y seguridad.
              </p>
              <NuxtLink
                to="/terapias/infantil"
                class="self-start text-sm tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200"
              >
                Saber más
              </NuxtLink>
            </div>
          </article>

          <!-- ── Tarjeta 5: Terapia Grupal ── -->
          <article class="group bg-[#FDFBF9] rounded-none overflow-hidden flex flex-col border border-[#27252B]/8 hover:border-[#71B1A5]/50 transition-colors duration-300">
            <div class="overflow-hidden aspect-[4/3]">
              <!-- Below the fold → loading lazy -->
              <NuxtImg
                src="/images/terapia-grupal-psicologia-grupo-granada-centro-la-seda.jpg"
                alt="Terapia grupal y psicología de grupo en el Centro de Psicología La Seda, Granada"
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover rounded-none grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-7 flex flex-col flex-1 gap-4">
              <div class="w-6 h-px bg-[#71B1A5]"></div>
              <h3 class="font-serif italic text-[#27252B] text-2xl leading-snug">
                Terapia Grupal
              </h3>
              <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/75 flex-1">
                La terapia grupal en La Seda se apoya en el encuentro con
                otros como fuente de aprendizaje y sostén. Un espacio donde
                compartir, escuchar y crecer en compañía, guiados por
                principios terapéuticos sólidos.
              </p>
              <NuxtLink
                to="/terapias/grupal"
                class="self-start text-sm tracking-[0.18em] uppercase text-[#27252B] border-b border-[#27252B]/30 pb-0.5 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-colors duration-200"
              >
                Saber más
              </NuxtLink>
            </div>
          </article>

          <!-- ── Tarjeta decorativa CTA ── -->
          <article class="bg-[#71B1A5] rounded-none flex flex-col justify-between p-7 min-h-[360px]">
            <div class="w-6 h-px bg-[#FDFBF9]/60"></div>
            <div class="space-y-5">
              <h3 class="font-serif italic text-[#FDFBF9] text-2xl leading-snug">
                ¿No encuentras lo que buscas?
              </h3>
              <p class="text-base leading-[1.85] text-[#FDFBF9]/80">
                Cuéntanos tu situación. Valoraremos juntos el tipo de
                acompañamiento que mejor se adapta a lo que estás viviendo.
              </p>
              <NuxtLink
                to="/contacto"
                class="inline-block text-sm tracking-[0.18em] uppercase text-[#FDFBF9] border-b border-[#FDFBF9]/50 pb-0.5 hover:border-[#FDFBF9] transition-colors duration-200"
              >
                Escríbenos
              </NuxtLink>
            </div>
            <div class="text-[#FDFBF9]/20 font-serif italic text-7xl leading-none select-none text-right">
              &amp;
            </div>
          </article>

        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 4 · CÓMO TRABAJAMOS
    ════════════════════════════════════════════════ -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
      <div class="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

        <!-- Columna imagen con marco desfasado -->
        <div class="relative order-2 md:order-1">
          <div class="absolute -top-4 -left-4 w-full h-full border border-[#71B1A5]/40 pointer-events-none z-0"></div>
          <div class="relative z-10 overflow-hidden aspect-[3/4]">
            <!-- Below the fold → loading lazy -->
            <NuxtImg
              src="/images/espacio-formacion-presencial-psicologia-la-seda-granada.jpg"
              alt="Sesión terapéutica con psicóloga en el Centro de Psicología La Seda, Granada"
              format="webp"
              loading="lazy"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-[#27252B]/5 pointer-events-none"></div>
          </div>
          <div class="absolute bottom-6 -right-5 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3 z-20 hidden md:block">
            <p class="text-xs tracking-[0.2em] uppercase text-[#71B1A5]">Centro de Psicología</p>
            <p class="font-serif italic text-[#27252B] text-sm mt-0.5">La Seda · Granada</p>
          </div>
        </div>

        <!-- Columna de contenido -->
        <div class="order-1 md:order-2">
          <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-4">
            Metodología
          </p>
          <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2] mb-12">
            Cómo trabajamos<br />
            <span class="text-[#27252B]/60">en La Seda</span>
          </h2>

          <div class="space-y-10">

            <div class="flex gap-6 items-start">
              <div class="shrink-0">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">01</span>
              </div>
              <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Primera Valoración
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  Analizamos juntos el motivo de consulta, tu historia personal
                  y el contexto en el que se enmarca lo que traes. Sin prisas,
                  con total confidencialidad.
                </p>
              </div>
            </div>

            <div class="w-full h-px bg-[#27252B]/8"></div>

            <div class="flex gap-6 items-start">
              <div class="shrink-0">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">02</span>
              </div>
              <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Propuesta Terapéutica
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  Establecemos objetivos claros y acordados, eligiendo el
                  enfoque o la combinación de enfoques más adecuados para
                  tu proceso específico.
                </p>
              </div>
            </div>

            <div class="w-full h-px bg-[#27252B]/8"></div>

            <div class="flex gap-6 items-start">
              <div class="shrink-0">
                <span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">03</span>
              </div>
              <div class="pt-2 border-t border-[#27252B]/10 flex-1">
                <h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide">
                  Sesiones de Acompañamiento
                </h3>
                <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70">
                  Un espacio de trabajo activo donde adquieres herramientas
                  reales, revisas tus patrones y avanzas hacia los cambios
                  que deseas a tu propio ritmo.
                </p>
              </div>
            </div>

          </div>

          <div class="mt-12 pt-8 border-t border-[#27252B]/10">
            <NuxtLink to="/contacto" class="inline-flex items-center gap-4 group">
              <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
                Comenzar el proceso
              </span>
              <span class="w-10 h-px bg-[#27252B]/40 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300"></span>
            </NuxtLink>
          </div>
        </div>

      </div>
    </section>

  </main>
</template>