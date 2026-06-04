<template>
  <main class="bg-[#FDFBF9] text-[#27252B] font-sans overflow-x-hidden">

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · MINI-HERO (mismo sistema: video + gradientes laterales)
    ════════════════════════════════════════════════ -->
    <section class="relative w-full" style="height: clamp(45vh, 52vh, 55vh);">

      <video
        class="absolute inset-0 w-full h-full object-cover"
        autoplay muted loop playsinline
        poster="/images/caploader.png"
      >
        <source src="/video/minhero.mp4" type="video/mp4" />
        <img src="/images/caploader.png" alt="Centro de Psicología La Seda Granada" class="w-full h-full object-cover" />
      </video>

      <div class="absolute inset-0 bg-gradient-to-r from-[#FDFBF9]/90 via-[#FDFBF9]/60 to-transparent pointer-events-none" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFBF9]/95 pointer-events-none" />

      <div class="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <p class="text-[#71B1A5] text-xs md:text-sm font-medium tracking-[0.35em] uppercase mb-4 md:mb-6">
          Contacto · La Seda Granada
        </p>

        <h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-5 md:mb-7 max-w-2xl">
          Estamos aquí para<br />
          <span class="text-[#27252B]/75">acompañarte</span>
        </h1>

        <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/80 max-w-xl">
          Dar el primer paso requiere valentía. Pero es, precisamente,
          el inicio del cambio.
        </p>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 2 · INTRO (mismo patrón dos columnas sticky)
    ════════════════════════════════════════════════ -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div class="grid md:grid-cols-12 gap-10 md:gap-16 items-start">

        <div class="md:col-span-4 md:sticky md:top-28">
          <div class="w-12 h-px bg-[#71B1A5] mb-6" />
          <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2]">
            Escríbenos o llámanos sin compromiso.
          </h2>
          <div class="mt-8 w-1 h-24 bg-[#71B1A5]/30" />
        </div>

        <div class="md:col-span-8 space-y-7">
          <p class="text-lg md:text-xl leading-[1.9] text-[#27252B]/80">
            En La Seda entendemos que pedir ayuda no siempre es fácil. Por eso
            queremos que el primer contacto sea tan sencillo y cálido como sea posible.
            Puedes escribirnos, llamarnos o rellenar el formulario: te orientaremos
            hacia el camino terapéutico que mejor se adapte a ti.
          </p>
          <p class="text-lg md:text-xl leading-[1.9] text-[#27252B]/80">
            Respondemos a todos los mensajes en menos de 24 horas laborables.
            Ninguna consulta es demasiado pequeña.
          </p>

          <div class="inline-flex items-center gap-3 pt-2">
            <div class="w-2 h-2 bg-[#71B1A5]" />
            <span class="text-sm tracking-[0.2em] uppercase text-[#71B1A5]">Confidencialidad garantizada · Granada</span>
          </div>
        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 3 · CUERPO PRINCIPAL: INFO + FORMULARIO
    ════════════════════════════════════════════════ -->
    <section class="bg-[#27252B]/[0.03] py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div class="grid lg:grid-cols-[1fr_1.4fr] gap-14 xl:gap-20 items-start">

          <!-- ─────────────────────────────────────────────
               COLUMNA IZQUIERDA: Datos de contacto
          ───────────────────────────────────────────── -->
          <div>

            <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-3">
              Información
            </p>
            <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2] mb-12">
              Cómo
              <span class="text-[#27252B]/60"> encontrarnos</span>
            </h2>

            <div class="space-y-9">

              <!-- Dirección -->
              <div class="flex items-start gap-5">
                <div class="w-11 h-11 bg-[#71B1A5]/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-5 h-5 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div class="border-t border-[#27252B]/10 pt-3 flex-1">
                  <h3 class="text-xs font-medium text-[#27252B] mb-2 tracking-[0.18em] uppercase">Dirección</h3>
                  <p class="text-[#27252B]/65 text-sm leading-relaxed font-light">
                    Calle Recogidas, 14 – 2.º A<br>
                    18002 Granada, Andalucía
                  </p>
                  <p class="text-[#27252B]/40 text-xs mt-2 font-light leading-relaxed">
                    Zona centro, a 5 min a pie del Corte Inglés.<br>
                    Aparcamiento público en Plaza del Campillo.
                  </p>
                </div>
              </div>

              <!-- Teléfono + WhatsApp -->
              <div class="flex items-start gap-5">
                <div class="w-11 h-11 bg-[#71B1A5]/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-5 h-5 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div class="border-t border-[#27252B]/10 pt-3 flex-1">
                  <h3 class="text-xs font-medium text-[#27252B] mb-2 tracking-[0.18em] uppercase">Teléfono</h3>
                  <a
                    href="tel:+34958000000"
                    class="text-[#27252B]/65 text-sm font-light hover:text-[#71B1A5] transition-colors duration-300"
                  >
                    +34 958 000 000
                  </a>
                  <a
                    href="https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20vuestros%20servicios."
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-4 inline-flex items-center gap-2.5 bg-[#25D366]/10 text-[#128C4E] border border-[#25D366]/25 px-4 py-2.5 text-xs tracking-[0.12em] uppercase font-medium hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-5">
                <div class="w-11 h-11 bg-[#71B1A5]/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-5 h-5 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div class="border-t border-[#27252B]/10 pt-3 flex-1">
                  <h3 class="text-xs font-medium text-[#27252B] mb-2 tracking-[0.18em] uppercase">Correo electrónico</h3>
                  <a
                    href="mailto:hola@laseda.es"
                    class="text-[#27252B]/65 text-sm font-light hover:text-[#71B1A5] transition-colors duration-300"
                  >
                    hola@laseda.es
                  </a>
                  <p class="text-[#27252B]/40 text-xs mt-1.5 font-light">
                    Respondemos en menos de 24 h laborables.
                  </p>
                </div>
              </div>

              <!-- Horario -->
              <div class="flex items-start gap-5">
                <div class="w-11 h-11 bg-[#71B1A5]/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-5 h-5 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="border-t border-[#27252B]/10 pt-3 flex-1">
                  <h3 class="text-xs font-medium text-[#27252B] mb-3 tracking-[0.18em] uppercase">Horario de atención</h3>
                  <div class="space-y-2">
                    <div class="flex items-center justify-between gap-8">
                      <span class="text-[#27252B]/60 text-sm font-light">Lunes – Viernes</span>
                      <span class="text-[#27252B] text-sm font-medium tabular-nums">09:00 – 20:00</span>
                    </div>
                    <div class="flex items-center justify-between gap-8">
                      <span class="text-[#27252B]/60 text-sm font-light">Sábados</span>
                      <span class="text-[#27252B] text-sm font-medium tabular-nums">10:00 – 14:00</span>
                    </div>
                    <div class="flex items-center justify-between gap-8">
                      <span class="text-[#27252B]/60 text-sm font-light">Domingos</span>
                      <span class="text-[#27252B]/40 text-sm font-light">Cerrado</span>
                    </div>
                  </div>
                  <div class="mt-4 flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-[#71B1A5]"></div>
                    <span class="text-[10px] tracking-widest uppercase text-[#71B1A5] font-medium">Centro abierto ahora</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- Redes sociales -->
            <div class="mt-12 pt-8 border-t border-[#27252B]/10">
              <p class="text-xs text-[#27252B]/40 tracking-widest uppercase mb-4">Síguenos</p>
              <div class="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/lasedagranada"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de La Seda Granada"
                  class="w-9 h-9 border border-[#27252B]/15 flex items-center justify-center text-[#27252B]/40 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-all duration-300"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/lasedagranada"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de La Seda Granada"
                  class="w-9 h-9 border border-[#27252B]/15 flex items-center justify-center text-[#27252B]/40 hover:border-[#71B1A5] hover:text-[#71B1A5] transition-all duration-300"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- ─────────────────────────────────────────────
               COLUMNA DERECHA: Formulario
          ───────────────────────────────────────────── -->
          <div>
            <div class="bg-white border border-[#27252B]/8 p-8 md:p-10 shadow-sm">

              <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-3">
                Formulario de Contacto
              </p>
              <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2] mb-10">
                Cuéntanos cómo<br />
                <span class="text-[#27252B]/60">podemos ayudarte</span>
              </h2>

              <form
                @submit.prevent="handleSubmit"
                novalidate
                class="space-y-6"
                aria-label="Formulario de solicitud de cita"
              >

                <!-- Nombre completo -->
                <div class="space-y-2">
                  <label
                    for="nombre"
                    class="block text-xs font-medium text-[#27252B] tracking-[0.18em] uppercase"
                  >
                    Nombre completo
                    <span class="text-[#71B1A5] ml-0.5" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="nombre"
                    v-model="form.nombre"
                    type="text"
                    name="nombre"
                    autocomplete="name"
                    required
                    placeholder="Tu nombre y apellidos"
                    class="w-full border border-[#27252B]/15 bg-[#FDFBF9] px-5 py-3.5 text-sm text-[#27252B] placeholder-[#27252B]/30 focus:outline-none focus:border-[#71B1A5] transition-colors duration-300 font-light"
                    :class="{ 'border-red-400': errors.nombre }"
                    :aria-describedby="errors.nombre ? 'nombre-error' : undefined"
                  />
                  <p v-if="errors.nombre" id="nombre-error" class="text-xs text-red-500 font-light mt-1">
                    {{ errors.nombre }}
                  </p>
                </div>

                <!-- Teléfono y Email en grid -->
                <div class="grid sm:grid-cols-2 gap-5">

                  <div class="space-y-2">
                    <label
                      for="telefono"
                      class="block text-xs font-medium text-[#27252B] tracking-[0.18em] uppercase"
                    >
                      Teléfono
                      <span class="text-[#71B1A5] ml-0.5" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="telefono"
                      v-model="form.telefono"
                      type="tel"
                      name="telefono"
                      autocomplete="tel"
                      required
                      placeholder="600 000 000"
                      class="w-full border border-[#27252B]/15 bg-[#FDFBF9] px-5 py-3.5 text-sm text-[#27252B] placeholder-[#27252B]/30 focus:outline-none focus:border-[#71B1A5] transition-colors duration-300 font-light"
                      :class="{ 'border-red-400': errors.telefono }"
                    />
                    <p v-if="errors.telefono" class="text-xs text-red-500 font-light">{{ errors.telefono }}</p>
                  </div>

                  <div class="space-y-2">
                    <label
                      for="email"
                      class="block text-xs font-medium text-[#27252B] tracking-[0.18em] uppercase"
                    >
                      Correo electrónico
                      <span class="text-[#71B1A5] ml-0.5" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      name="email"
                      autocomplete="email"
                      required
                      placeholder="tu@email.com"
                      class="w-full border border-[#27252B]/15 bg-[#FDFBF9] px-5 py-3.5 text-sm text-[#27252B] placeholder-[#27252B]/30 focus:outline-none focus:border-[#71B1A5] transition-colors duration-300 font-light"
                      :class="{ 'border-red-400': errors.email }"
                    />
                    <p v-if="errors.email" class="text-xs text-red-500 font-light">{{ errors.email }}</p>
                  </div>
                </div>

                <!-- Tipo de servicio -->
                <div class="space-y-2">
                  <label
                    for="servicio"
                    class="block text-xs font-medium text-[#27252B] tracking-[0.18em] uppercase"
                  >
                    ¿Qué servicio te interesa?
                    <span class="text-[#71B1A5] ml-0.5" aria-hidden="true">*</span>
                  </label>
                  <div class="relative">
                    <select
                      id="servicio"
                      v-model="form.servicio"
                      name="servicio"
                      required
                      class="w-full appearance-none border border-[#27252B]/15 bg-[#FDFBF9] px-5 py-3.5 pr-12 text-sm text-[#27252B] focus:outline-none focus:border-[#71B1A5] transition-colors duration-300 font-light cursor-pointer"
                      :class="{ 'border-red-400': errors.servicio, 'text-[#27252B]/30': !form.servicio }"
                    >
                      <option value="" disabled selected>Selecciona una opción</option>
                      <option value="terapia-individual">Terapia Individual</option>
                      <option value="terapia-pareja">Terapia de Pareja</option>
                      <option value="infanto-juvenil">Psicología Infanto-Juvenil</option>
                      <option value="talleres">Talleres de Crecimiento Personal</option>
                      <option value="formaciones">Formaciones para Profesionales</option>
                      <option value="primera-consulta">Primera consulta (sin decidir aún)</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                      <svg class="w-4 h-4 text-[#27252B]/35" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </div>
                  <p v-if="errors.servicio" class="text-xs text-red-500 font-light">{{ errors.servicio }}</p>
                </div>

                <!-- Mensaje -->
                <div class="space-y-2">
                  <label
                    for="mensaje"
                    class="block text-xs font-medium text-[#27252B] tracking-[0.18em] uppercase"
                  >
                    Mensaje
                    <span class="text-[#27252B]/30 text-[10px] normal-case tracking-normal ml-1">(opcional)</span>
                  </label>
                  <textarea
                    id="mensaje"
                    v-model="form.mensaje"
                    name="mensaje"
                    rows="5"
                    placeholder="Cuéntanos brevemente qué te trae por aquí o en qué momento vital te encuentras. No hay prisa, escribe con calma."
                    class="w-full border border-[#27252B]/15 bg-[#FDFBF9] px-5 py-3.5 text-sm text-[#27252B] placeholder-[#27252B]/30 focus:outline-none focus:border-[#71B1A5] transition-colors duration-300 font-light resize-none leading-relaxed"
                  ></textarea>
                </div>

                <!-- Aviso privacidad -->
                <div class="flex items-start gap-3">
                  <div class="relative flex items-start mt-0.5">
                    <input
                      id="privacidad"
                      v-model="form.privacidad"
                      type="checkbox"
                      required
                      class="w-4 h-4 border border-[#27252B]/25 bg-[#FDFBF9] text-[#71B1A5] focus:ring-[#71B1A5] focus:ring-offset-0 cursor-pointer"
                      :class="{ 'border-red-400': errors.privacidad }"
                    />
                  </div>
                  <label for="privacidad" class="text-xs text-[#27252B]/50 leading-relaxed font-light cursor-pointer">
                    He leído y acepto la
                    <NuxtLink to="/privacidad" class="text-[#71B1A5] underline underline-offset-2 hover:text-[#5a9a8e] transition-colors">
                      Política de Privacidad
                    </NuxtLink>.
                    Tus datos serán tratados con absoluta confidencialidad y no serán cedidos a terceros.
                  </label>
                </div>
                <p v-if="errors.privacidad" class="text-xs text-red-500 font-light -mt-4">{{ errors.privacidad }}</p>

                <!-- Botón de envío -->
                <button
                  type="submit"
                  :disabled="isSubmitting || formSent"
                  class="w-full flex items-center justify-center gap-3 bg-[#71B1A5] text-white px-8 py-[1.125rem] text-sm tracking-[0.22em] uppercase font-medium transition-all duration-300 hover:bg-[#5a9a8e] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <template v-if="isSubmitting">
                    <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"/>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                    </svg>
                    Enviando…
                  </template>
                  <template v-else-if="formSent">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Mensaje enviado
                  </template>
                  <template v-else>
                    Solicitar primera consulta
                    <span class="w-6 h-px bg-white/60 inline-block" />
                  </template>
                </button>

                <!-- Mensaje de éxito -->
                <Transition
                  enter-active-class="transition-all duration-500 ease-out"
                  enter-from-class="opacity-0 translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                >
                  <div
                    v-if="formSent"
                    class="bg-[#71B1A5]/10 border border-[#71B1A5]/30 p-5 flex items-start gap-4"
                    role="alert"
                    aria-live="polite"
                  >
                    <div class="w-8 h-8 bg-[#71B1A5] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm font-medium text-[#27252B] mb-1">¡Mensaje recibido!</p>
                      <p class="text-xs text-[#27252B]/60 font-light leading-relaxed">
                        Gracias por contactar con nosotros. Te responderemos en menos de 24 horas laborables.
                        Recuerda que el primer paso ya está dado.
                      </p>
                    </div>
                  </div>
                </Transition>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 4 · MAPA (mismo fondo claro, mismo patrón de encabezado)
    ════════════════════════════════════════════════ -->
    <section class="py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-3">
          Cómo llegar
        </p>
        <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2] mb-12">
          Nos encontramos en el
          <span class="text-[#27252B]/60"> corazón de Granada</span>
        </h2>

        <!-- Contenedor del mapa -->
        <div class="relative overflow-hidden border border-[#27252B]/10" style="height: 440px;">
          <iframe
            title="Ubicación del Centro de Psicología La Seda en Granada"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.12345!2d-3.5986!3d37.1773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle+Recogidas+14+Granada!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
            width="100%"
            height="100%"
            style="border: 0; filter: saturate(0.85) contrast(0.95);"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <!-- Overlay tarjeta dirección -->
          <div class="absolute top-5 left-5 bg-white/95 backdrop-blur-sm shadow-xl border-l-2 border-[#71B1A5] p-5 max-w-[240px]">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2 h-2 rounded-full bg-[#71B1A5]"></div>
              <span class="text-[10px] tracking-widest uppercase text-[#71B1A5] font-medium">La Seda · Granada</span>
            </div>
            <p class="text-sm font-medium text-[#27252B] mb-0.5">Calle Recogidas, 14 – 2.º A</p>
            <p class="text-xs text-[#27252B]/50 font-light">18002 Granada</p>
            <a
              href="https://maps.google.com/?q=Calle+Recogidas+14+Granada"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-[#71B1A5] font-medium hover:text-[#5a9a8e] transition-colors duration-300"
            >
              Cómo llegar
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Indicaciones de acceso (mismo patrón de tarjetas de valores) -->
        <div class="mt-6 grid sm:grid-cols-3 gap-0 border border-[#27252B]/8">
          <div class="flex items-start gap-4 p-6 border-b sm:border-b-0 sm:border-r border-[#27252B]/8">
            <div class="border-t border-[#71B1A5]/40 pt-4 flex-1">
              <p class="text-xs font-medium text-[#27252B] mb-1.5 tracking-[0.12em] uppercase">A pie</p>
              <p class="text-sm text-[#27252B]/50 font-light leading-relaxed">5 min desde la Gran Vía y el Corte Inglés de Recogidas.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-6 border-b sm:border-b-0 sm:border-r border-[#27252B]/8">
            <div class="border-t border-[#71B1A5]/40 pt-4 flex-1">
              <p class="text-xs font-medium text-[#27252B] mb-1.5 tracking-[0.12em] uppercase">Transporte público</p>
              <p class="text-sm text-[#27252B]/50 font-light leading-relaxed">Líneas C1 y 33 con parada en Recogidas.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-6">
            <div class="border-t border-[#71B1A5]/40 pt-4 flex-1">
              <p class="text-xs font-medium text-[#27252B] mb-1.5 tracking-[0.12em] uppercase">En coche</p>
              <p class="text-sm text-[#27252B]/50 font-light leading-relaxed">Parking público en Plaza del Campillo (3 min a pie).</p>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 5 · CTA FINAL (mismo patrón que quiénes somos §6)
    ════════════════════════════════════════════════ -->
    <section class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">
      <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-10">
        <div class="md:col-span-5">
          <p class="text-[#71B1A5] text-xs font-medium tracking-[0.35em] uppercase mb-4">
            ¿Tienes dudas?
          </p>
          <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-[1.2]">
            No tienes que saberlo<br />
            <span class="text-[#27252B]/55 not-italic font-light text-2xl md:text-3xl">todo de antemano.</span>
          </h2>
        </div>
        <div class="md:col-span-7">
          <p class="text-lg md:text-xl leading-[1.85] text-[#27252B]/65">
            Si no tienes claro qué servicio necesitas, cuéntanoslo. En La Seda te
            orientamos sin compromiso hacia el profesional y el enfoque que mejor
            encajan con lo que estás viviendo.
          </p>
        </div>
      </div>

      <div class="pt-8 border-t border-[#27252B]/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <NuxtLink
          to="/equipo"
          class="inline-flex items-center gap-4 group"
        >
          <span class="text-sm tracking-[0.22em] uppercase text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-200">
            Conocer al equipo
          </span>
          <span class="w-10 h-px bg-[#27252B]/40 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300" />
        </NuxtLink>

        <NuxtLink
          to="/terapias"
          class="inline-flex items-center gap-4 group"
        >
          <span class="text-sm tracking-[0.22em] uppercase text-[#27252B]/50 group-hover:text-[#71B1A5] transition-colors duration-200">
            Ver nuestras terapias
          </span>
          <span class="w-10 h-px bg-[#27252B]/20 group-hover:w-16 group-hover:bg-[#71B1A5] transition-all duration-300" />
        </NuxtLink>
      </div>

    </section>

  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'

// ─────────────────────────────────────────────
// SEO
// ─────────────────────────────────────────────
useSeoMeta({
  title: 'Contacto y Cita Previa en Granada | Centro La Seda',
  description:
    'Reserva tu primera consulta de psicología en Granada de forma sencilla. En La Seda te acompañamos desde el primer momento. Llámanos, escríbenos o rellena el formulario de contacto.',
  ogTitle: 'Contacto · La Seda · Centro de Psicología en Granada',
  ogDescription:
    'Da el primer paso hacia tu bienestar. Contacta con el equipo de psicólogos de La Seda en Granada y reserva tu primera sesión sin compromiso.',
  ogImage: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1200&q=85',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
})

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap',
    },
  ],
  style: [
    {
      innerHTML: `
        .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-sans  { font-family: 'DM Sans', system-ui, sans-serif; }
      `,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contacto · La Seda · Psicología Granada',
        url: 'https://www.laseda.es/contacto',
        mainEntity: {
          '@type': 'MedicalBusiness',
          name: 'La Seda · Psicología y Crecimiento en Granada',
          telephone: '+34-958-000-000',
          email: 'hola@laseda.es',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Calle Recogidas, 14 – 2.º A',
            addressLocality: 'Granada',
            postalCode: '18002',
            addressRegion: 'Andalucía',
            addressCountry: 'ES',
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '20:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday'],
              opens: '10:00',
              closes: '14:00',
            },
          ],
        },
      }),
    },
  ],
})

// ─────────────────────────────────────────────
// Estado del formulario
// ─────────────────────────────────────────────
const form = reactive({
  nombre: '',
  telefono: '',
  email: '',
  servicio: '',
  mensaje: '',
  privacidad: false,
})

const errors = reactive({
  nombre: '',
  telefono: '',
  email: '',
  servicio: '',
  privacidad: '',
})

const isSubmitting = ref(false)
const formSent = ref(false)

// ─────────────────────────────────────────────
// Validación
// ─────────────────────────────────────────────
function validate() {
  let valid = true

  errors.nombre = ''
  errors.telefono = ''
  errors.email = ''
  errors.servicio = ''
  errors.privacidad = ''

  if (!form.nombre.trim() || form.nombre.trim().length < 3) {
    errors.nombre = 'Por favor, introduce tu nombre completo.'
    valid = false
  }

  if (!form.telefono.trim() || !/^[+\d\s\-()]{7,}$/.test(form.telefono.trim())) {
    errors.telefono = 'Introduce un teléfono válido.'
    valid = false
  }

  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Introduce un email válido.'
    valid = false
  }

  if (!form.servicio) {
    errors.servicio = 'Selecciona el servicio que te interesa.'
    valid = false
  }

  if (!form.privacidad) {
    errors.privacidad = 'Debes aceptar la política de privacidad para continuar.'
    valid = false
  }

  return valid
}

// ─────────────────────────────────────────────
// Envío del formulario
// ─────────────────────────────────────────────
async function handleSubmit() {
  if (!validate()) return

  isSubmitting.value = true

  // Simulación de llamada al servidor
  // Sustituir por $fetch('/api/contacto', { method: 'POST', body: form }) en producción
  await new Promise((resolve) => setTimeout(resolve, 1800))

  isSubmitting.value = false
  formSent.value = true

  // Reset del formulario tras 8 segundos
  setTimeout(() => {
    form.nombre = ''
    form.telefono = ''
    form.email = ''
    form.servicio = ''
    form.mensaje = ''
    form.privacidad = false
    formSent.value = false
  }, 8000)
}
</script>