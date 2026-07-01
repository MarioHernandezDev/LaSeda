<template>
  <main>

    <!-- ═══════════════════════════════════════════════
         SECCIÓN 1 · MINI-HERO
    ════════════════════════════════════════════════ -->
    <PageHero
      label="Contacto · La Seda Granada"
      title-main="Estamos aquí para"
      title-accent="acompañarte"
      image="/images/hero-contacto-centro-psicologia-granada-la-seda.jpg"
      image-alt="Interior del Centro de Psicología La Seda en Granada, ambiente cálido y acogedor"
      secondary-link="/conocenos"
      secondary-label="Conocer al equipo"
    >
      <template #description>
        Dar el primer paso requiere valentía. Pero es, precisamente,
        el inicio del cambio.
      </template>
    </PageHero>


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 2 · INTRO
    ════════════════════════════════════════════════ -->
    <SeccionIntro
      id-heading="contacto-heading"
      titulo="Escríbenos o llámanos sin compromiso."
      :parrafos="[
        'En La Seda sabemos que dar el paso de pedir ayuda requiere valor. Por ello, resolvemos tu primer contacto con la máxima sencillez. Escríbenos, llámanos o completa el formulario: analizaremos tu caso con cercanía para orientarte hacia el proceso terapéutico óptimo.',
        'Respondemos a cada consulta en menos de 24 horas laborables. Recuerda que ninguna duda es insignificante cuando se trata de tu tranquilidad.'
      ]"
    />


    <!-- ═══════════════════════════════════════════════
         SECCIÓN 3 · CUERPO PRINCIPAL: INFO + FORMULARIO
    ════════════════════════════════════════════════ -->
    <section
      class="bg-[#27252B]/[0.03] py-20 md:py-28"
      aria-label="Información de contacto y formulario de cita"
    >
      <div class="page-container">
        <div class="grid lg:grid-cols-[1fr_1.4fr] gap-14 xl:gap-20 items-start">

          <!-- ── COLUMNA IZQUIERDA: DATOS DE CONTACTO ── -->
          <address class="not-italic">

            <p class="section-label mb-3">Información</p>
            <h2
              id="contact-info-heading"
              class="font-serif italic text-3xl md:text-4xl leading-[1.2] mb-12"
            >
              Cómo
              <span class="text-[#27252B]/70"> encontrarnos</span>
            </h2>

            <div class="space-y-9">

              <!-- Dirección -->
              <div class="flex items-start gap-5">
                <div class="contact-icon-wrap flex-shrink-0 mt-1" aria-hidden="true">
                  <svg class="w-5 h-5 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div class="border-t border-[#27252B]/15 pt-3 flex-1">
                  <h3 class="contact-item-label mb-1">Dirección</h3>
                  <p class="text-[#27252B]/85 text-base leading-relaxed font-normal">
                    C/ Horno de Haza, 29, Bajo 1<br />
                    18002 Granada, Andalucía
                  </p>
                  <p class="text-[#27252B]/70 text-sm mt-2.5 font-normal leading-relaxed">
                    Zona centro, próximo a Gran Vía.<br />
                    Aparcamiento público en Plaza del Campillo.
                  </p>
                </div>
              </div>

              <!-- Teléfono -->
              <div class="flex items-start gap-5">
                <div class="contact-icon-wrap flex-shrink-0 mt-1" aria-hidden="true">
                  <svg class="w-5 h-5 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div class="border-t border-[#27252B]/15 pt-3 flex-1">
                  <h3 class="contact-item-label mb-1">Teléfono</h3>
                  <a
                    href="tel:+34679571977"
                    class="block text-[#27252B]/85 text-base font-medium hover:text-[#71B1A5] transition-colors duration-300"
                    aria-label="Llamar al Centro de Psicología La Seda: +34 679 571 977"
                  >
                    +34 679 571 977
                  </a>
                  <a
                    href="https://wa.me/34679571977?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20vuestros%20servicios."
                    target="_blank"
                    rel="noopener noreferrer"
                    class="whatsapp-btn mt-4 inline-flex items-center"
                    aria-label="Contactar con La Seda Granada por WhatsApp"
                  >
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-5">
                <div class="contact-icon-wrap flex-shrink-0 mt-1" aria-hidden="true">
                  <svg class="w-5 h-5 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div class="border-t border-[#27252B]/15 pt-3 flex-1">
                  <h3 class="contact-item-label mb-1">Correo electrónico</h3>
                  <a
                    href="mailto:centrolaseda@gmail.com"
                    class="block text-[#27252B]/85 text-base font-medium hover:text-[#71B1A5] transition-colors duration-300"
                    aria-label="Enviar correo electrónico a La Seda: centrolaseda@gmail.com"
                  >
                    centrolaseda@gmail.com
                  </a>
                  <p class="text-[#27252B]/60 text-sm mt-1.5 font-normal">
                    Respondemos en menos de 24 h laborables.
                  </p>
                </div>
              </div>

              <!-- Horario -->
              <div class="flex items-start gap-5">
                <div class="contact-icon-wrap flex-shrink-0 mt-1" aria-hidden="true">
                  <svg class="w-5 h-5 text-[#71B1A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="border-t border-[#27252B]/15 pt-3 flex-1">
                  <h3 class="contact-item-label mb-4">Horario de atención</h3>
                  <dl class="space-y-2.5 max-w-xs">
                    <div class="flex items-center justify-between gap-8">
                      <dt class="text-[#27252B]/80 text-base font-normal">Lunes – Viernes</dt>
                      <dd class="text-[#27252B] text-base font-semibold tabular-nums">
                        <time>09:00</time> – <time>20:00</time>
                      </dd>
                    </div>
                    <div class="flex items-center justify-between gap-8">
                      <dt class="text-[#27252B]/80 text-base font-normal">Sábados</dt>
                      <dd class="text-[#27252B] text-base font-semibold tabular-nums">
                        <time>10:00</time> – <time>14:00</time>
                      </dd>
                    </div>
                    <div class="flex items-center justify-between gap-8">
                      <dt class="text-[#27252B]/80 text-base font-normal">Domingos</dt>
                      <dd class="text-[#27252B]/50 text-base font-normal italic">Cerrado</dd>
                    </div>
                  </dl>
                  <div
                    class="mt-5 flex items-center gap-2"
                    role="status"
                    aria-label="Estado actual: centro abierto"
                  >
                    <div class="w-2 h-2 rounded-full bg-[#71B1A5]" aria-hidden="true" />
                    <span class="text-sm font-medium text-[#27252B]/80 uppercase tracking-wider">Centro abierto ahora</span>
                  </div>
                </div>
              </div>

              <!-- Google Maps link -->
              <div class="pt-2">
                <a
                  href="https://maps.google.com/?q=Calle+Horno+de+Haza+29+Granada"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-base font-medium text-[#71B1A5] hover:underline"
                  aria-label="Ver ubicación en Google Maps (abre en nueva pestaña)"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Ver en Google Maps
                </a>
              </div>

            </div>

            <!-- Redes sociales -->
            <nav
              class="mt-12 pt-8 border-t border-[#27252B]/15"
              aria-label="Redes sociales de La Seda Granada"
            >
              <p class="text-xs text-[#27252B]/50 tracking-widest uppercase mb-4 font-medium">Síguenos</p>
              <ul class="flex items-center gap-3" role="list">
                <li>
                  <a
                    href="https://www.instagram.com/centrolaseda/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Perfil de Instagram del Centro de Psicología La Seda Granada (abre en nueva pestaña)"
                    class="social-icon-btn"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/CentroLaSeda/?locale=es_ES"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Página de Facebook del Centro de Psicología La Seda Granada (abre en nueva pestaña)"
                    class="social-icon-btn"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>

          </address>


          <!-- ── COLUMNA DERECHA: FORMULARIO ── -->
          <div>
            <div class="bg-white border border-[#27252B]/10 p-8 md:p-10 shadow-sm">

              <p class="section-label mb-3">Formulario de Contacto</p>
              <h2 class="font-serif italic text-3xl md:text-4xl leading-[1.2] mb-10">
                Cuéntanos cómo<br />
                <span class="text-[#27252B]/70">podemos ayudarte</span>
              </h2>

              <form
                @submit.prevent="handleSubmit"
                novalidate
                class="space-y-6"
                aria-label="Formulario de solicitud de primera consulta psicológica en La Seda Granada"
                id="contact-form"
              >

                <!-- Nombre -->
                <div class="form-field">
                  <label for="nombre" class="form-label text-sm text-[#27252B]/85 font-medium">
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
                    aria-required="true"
                    placeholder="Tu nombre y apellidos"
                    class="input-field placeholder-[#27252B]/40 text-base"
                    :class="{ '!border-red-400': errors.nombre }"
                    :aria-describedby="errors.nombre ? 'nombre-error' : undefined"
                    :aria-invalid="errors.nombre ? 'true' : undefined"
                  />
                  <p
                    v-if="errors.nombre"
                    id="nombre-error"
                    class="form-error text-red-500 font-medium"
                    role="alert"
                  >
                    {{ errors.nombre }}
                  </p>
                </div>

                <!-- Teléfono + Email -->
                <div class="grid sm:grid-cols-2 gap-5">

                  <div class="form-field">
                    <label for="telefono" class="form-label text-sm text-[#27252B]/85 font-medium">
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
                      aria-required="true"
                      placeholder="600 000 000"
                      class="input-field placeholder-[#27252B]/40 text-base"
                      :class="{ '!border-red-400': errors.telefono }"
                      :aria-describedby="errors.telefono ? 'telefono-error' : undefined"
                      :aria-invalid="errors.telefono ? 'true' : undefined"
                    />
                    <p
                      v-if="errors.telefono"
                      id="telefono-error"
                      class="form-error text-red-500 font-medium"
                      role="alert"
                    >
                      {{ errors.telefono }}
                    </p>
                  </div>

                  <div class="form-field">
                    <label for="email" class="form-label text-sm text-[#27252B]/85 font-medium">
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
                      aria-required="true"
                      placeholder="tu@email.com"
                      class="input-field placeholder-[#27252B]/40 text-base"
                      :class="{ '!border-red-400': errors.email }"
                      :aria-describedby="errors.email ? 'email-error' : undefined"
                      :aria-invalid="errors.email ? 'true' : undefined"
                    />
                    <p
                      v-if="errors.email"
                      id="email-error"
                      class="form-error text-red-500 font-medium"
                      role="alert"
                    >
                      {{ errors.email }}
                    </p>
                  </div>

                </div>

                <!-- Servicio -->
                <div class="form-field">
                  <label for="servicio" class="form-label text-sm text-[#27252B]/85 font-medium">
                    ¿Qué servicio te interesa?
                    <span class="text-[#71B1A5] ml-0.5" aria-hidden="true">*</span>
                  </label>
                  <div class="relative">
                    <select
                      id="servicio"
                      v-model="form.servicio"
                      name="servicio"
                      required
                      aria-required="true"
                      class="input-field appearance-none pr-12 cursor-pointer text-base"
                      :class="{
                        '!border-red-400': errors.servicio,
                        'text-[#27252B]/50': !form.servicio
                      }"
                      :aria-describedby="errors.servicio ? 'servicio-error' : undefined"
                      :aria-invalid="errors.servicio ? 'true' : undefined"
                    >
                      <option value="" disabled selected>Selecciona una opción</option>

                      <optgroup label="Terapias">
                        <option value="terapia-adultos">Terapia de Adultos</option>
                        <option value="terapia-infantil">Psicología Infantil</option>
                        <option value="terapia-adolescente">Psicología de la Adolescencia</option>
                        <option value="terapia-pareja">Terapia de Pareja</option>
                        <option value="acompanamiento-socioemocional">Acompañamiento Socioemocional</option>
                      </optgroup>

                      <optgroup label="Talleres y Supervisión">
                        <option value="taller-constelaciones">Talleres de Constelaciones Familiares</option>
                        <option value="supervision-casos">Supervisión de Casos Clínicos</option>
                      </optgroup>

                      <optgroup label="Formaciones Especializadas">
                        <option value="formacion-gestalt-infantil">Formación en Gestalt Infantil y Adolescente</option>
                        <option value="formacion-wingwave">Formación en Método Wingwave®</option>
                      </optgroup>

                      <optgroup label="Contactar con una profesional">
                        <option value="contacto-ana-jimenez">Ana Jiménez (Co-dirección / Gestalt)</option>
                        <option value="contacto-leonor-cabrera">Leonor Cabrera (Co-dirección / Coaching)</option>
                        <option value="contacto-maria-noel">María Noel Reyes (Psicología Clínica)</option>
                        <option value="contacto-cristina-lence">Cristina Lence (Educación Familiar)</option>
                        <option value="contacto-reyes-sanchez">Reyes Sánchez (Medicina Integrativa)</option>
                      </optgroup>

                      <optgroup label="Otros motivos">
                        <option value="primera-consulta">Primera consulta (Sin decidir servicio aún)</option>
                        <option value="otro-motivo">Otro motivo de consulta</option>
                      </optgroup>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4"
                      aria-hidden="true"
                    >
                      <svg class="w-4 h-4 text-[#27252B]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </div>
                  <p
                    v-if="errors.servicio"
                    id="servicio-error"
                    class="form-error text-red-500 font-medium"
                    role="alert"
                  >
                    {{ errors.servicio }}
                  </p>
                </div>

                <!-- Mensaje -->
                <div class="form-field">
                  <label for="mensaje" class="form-label text-sm text-[#27252B]/85 font-medium">
                    Mensaje
                    <span class="text-[#27252B]/50 text-xs normal-case tracking-normal ml-1">(opcional)</span>
                  </label>
                  <textarea
                    id="mensaje"
                    v-model="form.mensaje"
                    name="mensaje"
                    rows="5"
                    placeholder="Cuéntanos brevemente qué te trae por aquí o en qué momento vital te encuentras. No hay prisa, escribe con calma."
                    class="input-field resize-none leading-relaxed text-base placeholder-[#27252B]/40"
                  ></textarea>
                </div>

                <!-- ── CONSENTIMIENTO RGPD / LOPDGDD ── -->
                <!--
                  Tratamiento: CONTACTO WEB
                  Responsable: ANA MARIA JIMENEZ RODRIGUEZ · NIF 74643857W
                  Base jurídica: consentimiento explícito (art. 6.1.a RGPD)
                  Finalidad: gestión de contacto a través de la página web de la clínica
                -->
                <div>
                  <div class="flex items-start gap-3">
                    <input
                      id="privacidad"
                      v-model="form.privacidad"
                      type="checkbox"
                      required
                      aria-required="true"
                      class="mt-1 w-4 h-4 border border-[#27252B]/35 bg-[#FDFBF9] text-[#71B1A5] focus:ring-[#71B1A5] focus:ring-offset-0 cursor-pointer flex-shrink-0"
                      :class="{ '!border-red-400': errors.privacidad }"
                      :aria-describedby="errors.privacidad ? 'privacidad-error' : 'privacidad-hint'"
                      :aria-invalid="errors.privacidad ? 'true' : undefined"
                    />
                    <label
                      for="privacidad"
                      id="privacidad-hint"
                      class="text-xs text-[#27252B]/70 leading-relaxed font-normal cursor-pointer"
                    >
                      Consiento el tratamiento de mis datos con la finalidad de gestión de contacto
                      recogidos a través de la página web de la clínica, de conformidad explícita
                      con lo dispuesto en el RGPD y lo detallado en la
                      <NuxtLink
                        to="/privacidad"
                        class="text-[#71B1A5] font-medium underline underline-offset-2 hover:text-[#5a9a8e] transition-colors"
                      >
                        Política de Privacidad</NuxtLink>.
                    </label>
                  </div>
                  <p
                    v-if="errors.privacidad"
                    id="privacidad-error"
                    class="form-error mt-2 text-red-500 font-medium"
                    role="alert"
                  >
                    {{ errors.privacidad }}
                  </p>
                </div>

                <!-- Botón de envío -->
                <button
                  type="submit"
                  :disabled="isSubmitting || formSent"
                  class="btn-primary w-full justify-center py-[1.125rem] disabled:opacity-60 disabled:cursor-not-allowed text-base font-medium"
                  :aria-busy="isSubmitting"
                  aria-label="Enviar solicitud de primera consulta psicológica en La Seda Granada"
                >
                  <template v-if="isSubmitting">
                    <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"/>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                    </svg>
                    <span>Enviando…</span>
                  </template>
                  <template v-else-if="formSent">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Mensaje enviado</span>
                  </template>
                  <template v-else>
                    Solicitar primera consulta
                    <span class="w-6 h-px bg-white/60 inline-block" aria-hidden="true" />
                  </template>
                </button>

                <!-- Confirmación de envío -->
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
                    aria-atomic="true"
                  >
                    <div
                      class="w-8 h-8 bg-[#71B1A5] flex items-center justify-center flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm font-semibold text-[#27252B] mb-1">¡Mensaje recibido!</p>
                      <p class="text-xs text-[#27252B]/75 font-normal leading-relaxed">
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
         SECCIÓN 5 · MAPA
    ════════════════════════════════════════════════ -->
    <section
      class="bg-[#27252B]/[0.03] py-20 md:py-28"
      aria-labelledby="mapa-heading"
    >
      <div class="page-container">

        <p class="section-label mb-3">Cómo llegar</p>
        <h2
          id="mapa-heading"
          class="font-serif italic text-3xl md:text-4xl leading-[1.2] mb-12"
        >
          Nos encontramos en el
          <span class="text-[#27252B]/60"> corazón de Granada</span>
        </h2>

        <div
          class="relative overflow-hidden border border-[#27252B]/10"
          style="height: 440px;"
          role="region"
          aria-label="Mapa de localización del Centro de Psicología La Seda en Granada"
        >
          <iframe
            title="Ubicación del Centro de Psicología La Seda — C/ Horno de Haza 29, Granada"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.12345!2d-3.5986!3d37.1773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle+Horno+de+Haza+29+Granada!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
            width="100%"
            height="100%"
            style="border: 0; filter: saturate(0.85) contrast(0.95);"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div
            class="absolute top-5 left-5 bg-white/95 backdrop-blur-sm shadow-xl border-l-2 border-[#71B1A5] p-5 max-w-[240px]"
            aria-hidden="true"
          >
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2 h-2 rounded-full bg-[#71B1A5]" />
              <span class="section-label">La Seda · Granada</span>
            </div>
            <p class="text-sm font-medium text-[#27252B] mb-0.5">C/ Horno de Haza, 29, Bajo 1</p>
            <p class="text-sm text-[#27252B]/50 font-light">18002 Granada</p>
            <a
              href="https://maps.google.com/?q=Calle+Horno+de+Haza+29+Granada"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir indicaciones hacia el Centro La Seda en Google Maps (abre en nueva pestaña)"
              class="mt-3 inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-[#71B1A5] font-medium hover:text-[#5a9a8e] transition-colors duration-300"
            >
              Cómo llegar
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>

        <div
          class="mt-6 grid sm:grid-cols-3 gap-0 border border-[#27252B]/8"
          role="list"
          aria-label="Opciones de acceso al centro"
        >
          <div class="flex items-start gap-4 p-6 border-b sm:border-b-0 sm:border-r border-[#27252B]/8" role="listitem">
            <div class="border-t border-[#71B1A5]/40 pt-4 flex-1">
              <p class="text-xs font-medium text-[#27252B] mb-1.5 tracking-[0.12em] uppercase">A pie</p>
              <p class="text-sm text-[#27252B]/60 font-light leading-relaxed">5 min desde la Gran Vía y el Corte Inglés de Recogidas.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-6 border-b sm:border-b-0 sm:border-r border-[#27252B]/8" role="listitem">
            <div class="border-t border-[#71B1A5]/40 pt-4 flex-1">
              <p class="text-xs font-medium text-[#27252B] mb-1.5 tracking-[0.12em] uppercase">Transporte público</p>
              <p class="text-sm text-[#27252B]/60 font-light leading-relaxed">Líneas C1 y 33 con parada en Recogidas.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-6" role="listitem">
            <div class="border-t border-[#71B1A5]/40 pt-4 flex-1">
              <p class="text-xs font-medium text-[#27252B] mb-1.5 tracking-[0.12em] uppercase">En coche</p>
              <p class="text-sm text-[#27252B]/60 font-light leading-relaxed">Parking público en Plaza del Campillo (3 min a pie).</p>
            </div>
          </div>
        </div>

      </div>
    </section>

<section
      class="page-container py-20 md:py-24"
      aria-labelledby="cta-heading"
    >
      <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-10">
        <div class="md:col-span-5">
          <p class="section-label mb-4">¿Tienes dudas?</p>
          <h2
            id="cta-heading"
            class="font-serif italic text-3xl md:text-4xl leading-[1.2]"
          >
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

      <div class="pt-8 border-t border-[#27252B]/10 flex flex-col sm:flex-row justify-center items-center gap-4">
        
        <NuxtLink
          to="/conocenos"
          class="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#27252B] text-white border border-[#27252B] rounded-full group hover:bg-[#71B1A5] hover:border-[#71B1A5] transition-all duration-300 shadow-sm w-full sm:w-auto text-center"
          aria-label="Ir a la página del equipo de psicólogos de La Seda"
        >
          <span class="text-xs tracking-[0.22em] uppercase font-medium">
            Conocer al equipo
          </span>
          <span
            class="w-6 h-px bg-white/40 group-hover:w-9 transition-all duration-300"
            aria-hidden="true"
          />
        </NuxtLink>

        <NuxtLink
          to="/terapias"
          class="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-transparent text-[#27252B] border border-[#27252B]/20 rounded-full group hover:border-[#71B1A5] hover:text-[#71B1A5] transition-all duration-300 w-full sm:w-auto text-center"
          aria-label="Ver todos los servicios y terapias del Centro La Seda en Granada"
        >
          <span class="text-xs tracking-[0.22em] uppercase font-medium">
            Ver nuestras terapias
          </span>
          <span
            class="w-6 h-px bg-[#27252B]/20 group-hover:w-9 group-hover:bg-[#71B1A5] transition-all duration-300"
            aria-hidden="true"
          />
        </NuxtLink>

      </div>

    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// ─── SEO & structured data ───────────────────────────────────────────────────

useSeoMeta({
  title: 'Cita Previa en Granada | Centro de Psicología La Seda',
  description:
    'Pide tu primera consulta de psicología en Granada sin compromiso. Terapia individual, de pareja e infanto-juvenil. Respuesta en menos de 24 h. La Seda, C/ Horno de Haza, 29.',
  ogTitle: 'Contacto y Cita Previa · La Seda · Psicología en Granada',
  ogDescription:
    'Da el primer paso hacia tu bienestar. Contacta con el equipo de La Seda en Granada y reserva tu primera sesión de psicología. Confidencialidad garantizada.',
  ogImage: '/images/hero-contacto-centro-psicologia-granada-la-seda.jpg',
  ogType: 'website',
  ogUrl: 'https://www.laseda.es/contacto',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Cita Previa · Centro de Psicología La Seda · Granada',
  twitterDescription:
    'Reserva tu primera sesión de psicología en Granada. Terapia individual, pareja e infanto-juvenil. La Seda, centro de referencia en el corazón de Granada.',
  robots: 'index, follow',
  canonical: 'https://www.laseda.es/contacto',
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
      children: `
        .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-sans  { font-family: 'DM Sans', system-ui, sans-serif; }
      `,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contacto y Cita Previa · La Seda · Psicología Granada',
          url: 'https://www.laseda.es/contacto',
          description:
            'Solicita tu primera consulta de psicología en Granada en el Centro La Seda. Terapia individual, de pareja e infanto-juvenil.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.laseda.es' },
              { '@type': 'ListItem', position: 2, name: 'Contacto', item: 'https://www.laseda.es/contacto' },
            ],
          },
          mainEntity: {
            '@type': 'MedicalBusiness',
            '@id': 'https://www.laseda.es/#business',
            name: 'La Seda · Psicología y Crecimiento en Granada',
            url: 'https://www.laseda.es',
            telephone: '+34-679-571-977',
            email: 'centrolaseda@gmail.com',
            image: 'https://www.laseda.es/images/hero-contacto-centro-psicologia-granada-la-seda.jpg',
            priceRange: '€€',
            medicalSpecialty: 'Psychiatry',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'C/ Horno de Haza, 29, Bajo 1',
              addressLocality: 'Granada',
              postalCode: '18002',
              addressRegion: 'Andalucía',
              addressCountry: 'ES',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 37.1773,
              longitude: -3.5986,
            },
            sameAs: [
              'https://www.instagram.com/centrolaseda',
              'https://www.facebook.com/CentroLaSeda',
            ],
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
        },
      ]),
    },
  ],
})

// ─── Tipos ───────────────────────────────────────────────────────────────────

interface ContactForm {
  nombre: string
  telefono: string
  email: string
  servicio: string
  mensaje: string
  privacidad: boolean
}

interface ContactErrors {
  nombre: string
  telefono: string
  email: string
  servicio: string
  privacidad: string
}

// ─── Estado reactivo ─────────────────────────────────────────────────────────

const form = reactive<ContactForm>({
  nombre: '',
  telefono: '',
  email: '',
  servicio: '',
  mensaje: '',
  privacidad: false,
})

const errors = reactive<ContactErrors>({
  nombre: '',
  telefono: '',
  email: '',
  servicio: '',
  privacidad: '',
})

const isSubmitting = ref<boolean>(false)
const formSent = ref<boolean>(false)

// ─── Validación ──────────────────────────────────────────────────────────────

function resetErrors(): void {
  errors.nombre = ''
  errors.telefono = ''
  errors.email = ''
  errors.servicio = ''
  errors.privacidad = ''
}

function validate(): boolean {
  resetErrors()
  let valid = true

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

  // Consentimiento RGPD obligatorio (art. 6.1.a RGPD / LOPDGDD)
  if (!form.privacidad) {
    errors.privacidad = 'Debes aceptar el tratamiento de tus datos para continuar.'
    valid = false
  }

  return valid
}

// ─── Envío ───────────────────────────────────────────────────────────────────

function resetForm(): void {
  form.nombre = ''
  form.telefono = ''
  form.email = ''
  form.servicio = ''
  form.mensaje = ''
  form.privacidad = false
}

async function handleSubmit(): Promise<void> {
  if (!validate()) return

  isSubmitting.value = true

  try {
    // TODO: reemplazar con la llamada real a tu endpoint o servicio de formularios
    await new Promise<void>((resolve) => setTimeout(resolve, 1800))
    formSent.value = true

    setTimeout(() => {
      formSent.value = false
      resetForm()
    }, 8000)
  } catch (error) {
    // TODO: manejar errores de red / servidor con un mensaje al usuario
    console.error('[ContactoPage] Error al enviar el formulario:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>