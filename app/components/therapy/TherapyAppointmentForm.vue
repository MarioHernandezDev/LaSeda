<script setup lang="ts">
const props = withDefaults(defineProps<{
  therapyName?: string
  intro?: string
  nameLabel?: string
  ageLabel?: string
  showRelationship?: boolean
  showModality?: boolean
  modalityLabel?: string
  confirmation?: string
}>(), {
  therapyName: 'Terapia para adolescentes',
  intro: 'Puedes escribirnos tanto si eres la persona adolescente como si formas parte de su familia. Nos pondremos en contacto para orientar el primer paso.',
  nameLabel: 'Nombre y apellidos',
  ageLabel: 'Edad de la persona adolescente',
  showRelationship: false,
  showModality: false,
  modalityLabel: 'Preferencia · Presencial / Online / No lo sé todavía',
  confirmation: 'Gracias. Hemos recibido tu solicitud. Te escribiremos para conocer mejor la situación y acordar los siguientes pasos.'
})

const enviado = ref(false)
const enviando = ref(false)

const form = reactive({
  nombre: '',
  email: '',
  telefono: '',
  edad: '',
  preocupacion: '',
  consulta: '',
  modalidad: '',
  privacidad: false
})

async function enviarSolicitud() {
  enviando.value = true

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '340850fb-0e06-463e-b69b-5cf9a99e5e45',
        subject: `Nueva solicitud · ${props.therapyName}`,
        from_name: 'Formulario La Seda',
        nombre: form.nombre,
        email: form.email,
        telefono: form.telefono,
        edad: form.edad || 'No indicada',
        consulta: form.consulta || 'No indicada',
        modalidad: form.modalidad || 'No indicada',
        preocupacion: form.preocupacion || 'No indicada',
        privacidad: form.privacidad ? 'Aceptada' : 'No aceptada'
      })
    })

    if (!response.ok) throw new Error('No se pudo enviar la solicitud')
    enviado.value = true
  } finally {
    enviando.value = false
  }
}
</script>

<template>
  <section class="bg-[#27252B]/[0.03] py-20 md:py-28" aria-labelledby="cita-heading">
    <div class="page-container">
      <div class="max-w-3xl mx-auto bg-white border border-[#27252B]/10 p-8 md:p-12 shadow-sm">
        <template v-if="!enviado">
          <p class="section-label mb-3">Solicita una cita</p>
          <h2 id="cita-heading" class="font-serif italic text-3xl md:text-4xl leading-[1.2] mb-4">
            Solicita una cita
          </h2>
          <p class="text-[#27252B]/60 font-light text-base leading-relaxed mb-10">
            {{ props.intro }}
          </p>

          <form class="space-y-6" :aria-label="`Solicitud de cita · ${props.therapyName}`" @submit.prevent="enviarSolicitud">
            <div class="form-field">
              <label for="terapia-nombre" class="form-label text-sm text-[#27252B]/85 font-medium">{{ props.nameLabel }}</label>
              <input id="terapia-nombre" v-model="form.nombre" name="nombre" type="text" required autocomplete="name" class="input-field text-base" />
            </div>
            <div class="grid sm:grid-cols-2 gap-5">
              <div class="form-field">
                <label for="terapia-email" class="form-label text-sm text-[#27252B]/85 font-medium">Correo electrónico</label>
                <input id="terapia-email" v-model="form.email" name="email" type="email" required autocomplete="email" class="input-field text-base" />
              </div>
              <div class="form-field">
                <label for="terapia-telefono" class="form-label text-sm text-[#27252B]/85 font-medium">Teléfono</label>
                <input id="terapia-telefono" v-model="form.telefono" name="telefono" type="tel" required autocomplete="tel" class="input-field text-base" />
              </div>
            </div>
            <template v-if="props.showRelationship">
              <div class="form-field">
                <label for="terapia-consulta" class="form-label text-sm text-[#27252B]/85 font-medium">Consulta para · Pareja / Familia</label>
                <select id="terapia-consulta" v-model="form.consulta" name="consulta" required class="input-field text-base">
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="pareja">Pareja</option>
                  <option value="familia">Familia</option>
                </select>
              </div>
              <div class="form-field">
                <label for="terapia-modalidad" class="form-label text-sm text-[#27252B]/85 font-medium">Preferencia · Presencial / Online / No lo sabemos todavía</label>
                <select id="terapia-modalidad" v-model="form.modalidad" name="modalidad" required class="input-field text-base">
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="presencial">Presencial</option>
                  <option value="online">Online</option>
                  <option value="no-lo-sabemos">No lo sabemos todavía</option>
                </select>
              </div>
            </template>
            <div v-if="props.showModality" class="form-field">
              <label for="terapia-modalidad" class="form-label text-sm text-[#27252B]/85 font-medium">{{ props.modalityLabel }}</label>
              <select id="terapia-modalidad" v-model="form.modalidad" name="modalidad" required class="input-field text-base">
                <option value="" disabled>Selecciona una opción</option>
                <option value="presencial">Presencial</option>
                <option value="online">Online</option>
                <option value="no-lo-se">No lo sé todavía</option>
              </select>
            </div>
            <div v-if="!props.showRelationship" class="form-field">
              <label for="terapia-edad" class="form-label text-sm text-[#27252B]/85 font-medium">{{ props.ageLabel }}</label>
              <input id="terapia-edad" v-model="form.edad" name="edad" type="number" min="6" max="18" class="input-field text-base" />
            </div>
            <div class="form-field">
              <label for="terapia-preocupacion" class="form-label text-sm text-[#27252B]/85 font-medium">¿Qué os preocupa en este momento?</label>
              <textarea id="terapia-preocupacion" v-model="form.preocupacion" name="preocupacion" rows="4" class="input-field resize-none leading-relaxed text-base" />
            </div>
            <label class="flex items-start gap-3 text-sm text-[#27252B]/70">
              <input v-model="form.privacidad" type="checkbox" required class="mt-1 accent-[#71B1A5]" />
              <span>He leído y acepto la <NuxtLink to="/privacidad" class="underline hover:text-[#71B1A5]">política de privacidad.</NuxtLink></span>
            </label>
            <button type="submit" :disabled="enviando" class="inline-flex items-center justify-center bg-[#27252B] text-white px-8 py-4 text-[11px] tracking-[0.25em] uppercase font-bold hover:bg-[#71B1A5] transition-colors duration-300 disabled:opacity-50">
              {{ enviando ? 'Enviando...' : 'Enviar solicitud' }}
            </button>
          </form>
        </template>
        <div v-else role="status" class="py-8">
          <p class="section-label mb-3">Solicita una cita</p>
          <h2 id="cita-heading" class="font-serif italic text-3xl md:text-4xl leading-[1.2] mb-4">Gracias. Hemos recibido tu solicitud.</h2>
          <p class="text-[#27252B]/60 font-light text-base leading-relaxed">{{ props.confirmation }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
