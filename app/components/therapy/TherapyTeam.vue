<script setup lang="ts">
interface Terapeuta {
  id: string
  nombre: string
  rol: string
  imagen: string
  imagenAlt?: string
}

defineProps<{
  terapeutas: Terapeuta[]
}>()
</script>

<template>
  <section 
    v-if="terapeutas.length > 0" 
    class="py-24 md:py-32 bg-[#F5F2EE]/40 border-b border-[#27252B]/5 relative overflow-hidden"
  >
    <div 
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#71B1A5]/3 blur-[140px] pointer-events-none" 
      aria-hidden="true" 
    />

    <div class="page-container relative z-10">
      
      <div class="grid md:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
        <div class="md:col-span-7 lg:col-span-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-[#71B1A5]" aria-hidden="true" />
            <p class="text-[#71B1A5] text-[10px] tracking-[0.35em] uppercase font-bold">
              Acompañamiento Humano
            </p>
          </div>
          <h2 class="font-serif italic text-3xl md:text-4xl lg:text-5xl text-[#27252B] leading-[1.15]">
            Especialistas a tu lado<br>
            <span class="text-[#27252B]/40 not-italic font-sans font-light text-2xl md:text-3xl block mt-1">
              en este proceso
            </span>
          </h2>
        </div>

        <div class="md:col-span-5 lg:col-span-6 flex md:justify-end items-center gap-4 border-l md:border-l-0 md:border-r border-[#27252B]/10 pl-6 md:pl-0 md:pr-8 h-fit">
          <div class="text-left md:text-right">
            <span class="font-serif italic text-2xl text-[#71B1A5]">
              0{{ terapeutas.length }}
            </span>
            <p class="text-[10px] tracking-widest text-[#27252B]/50 uppercase font-medium mt-0.5">
              {{ terapeutas.length === 1 ? 'Profesional especializado' : 'Profesionales disponibles' }}
            </p>
          </div>
        </div>
      </div>

      <div 
        class="grid gap-8 md:gap-10 lg:gap-12 group/container justify-center"
        :class="{
          'grid-cols-1 max-w-sm mx-auto': terapeutas.length === 1,
          'sm:grid-cols-2 max-w-3xl mx-auto': terapeutas.length === 2,
          'sm:grid-cols-2 lg:grid-cols-3 w-full': terapeutas.length >= 3
        }"
      >
        <div
          v-for="terapeuta in terapeutas"
          :key="terapeuta.id"
          class="transition-all duration-500 hover:!opacity-100 group-hover/container:opacity-50 hover:-translate-y-1.5"
        >
          <TeamCard :terapeuta="terapeuta" />
        </div>
      </div>

    </div>
  </section>
</template>