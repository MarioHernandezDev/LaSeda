<script setup lang="ts">
interface Fecha {
  dia: string
  mes: string
  diasemana: string
  descripcion: string
  horario: string
  especial?: string
}

defineProps<{
  fechas: Fecha[]
}>()
</script>

<template>
  <section class="py-20 md:py-32">
    <div class="page-container">

      <div class="grid md:grid-cols-12 gap-8 md:gap-16 items-end mb-16 md:mb-20">
        <div class="md:col-span-5">
          <p class="text-[#71B1A5] text-[10px] tracking-[0.3em] uppercase font-bold mb-4">Calendario 2026</p>
          <h2 class="font-serif italic text-[#27252B] text-3xl md:text-4xl leading-tight">Próximas fechas</h2>
        </div>
        <div class="md:col-span-7">
          <p class="text-base md:text-lg leading-[1.85] text-[#27252B]/65">
            Las plazas son limitadas para preservar el cuidado e intimidad clínica del grupo. Recomendamos formalizar la reserva con suficiente antelación.
          </p>
        </div>
      </div>

      <div class="border border-[#27252B]/5 rounded-sm overflow-hidden divide-y divide-[#27252B]/10">
        <div
          v-for="(fecha, i) in fechas"
          :key="i"
          class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center p-6 md:p-8 bg-[#FDFBF9] hover:bg-[#27252B]/[0.01] transition-colors duration-200"
        >
          <div class="md:col-span-1 flex md:block items-center gap-3">
            <span class="font-serif italic text-[#71B1A5] text-3xl md:text-4xl leading-none">{{ fecha.dia }}</span>
          </div>

          <div class="md:col-span-2">
            <span class="block text-xs tracking-[0.2em] uppercase text-[#27252B]/50 font-medium">
              {{ fecha.diasemana }}
            </span>
            <span class="block text-xs tracking-[0.15em] uppercase text-[#71B1A5] font-semibold">
              {{ fecha.mes }} · 2026
            </span>
          </div>

          <div class="md:col-span-5">
            <h3 class="font-serif italic text-[#27252B] text-lg md:text-xl leading-snug">
              {{ fecha.descripcion }}
            </h3>
            <span
              v-if="fecha.especial"
              class="inline-block mt-2 text-[10px] tracking-wider uppercase text-[#71B1A5] font-medium bg-[#71B1A5]/10 px-2 py-0.5 rounded-sm"
            >
              {{ fecha.especial }}
            </span>
          </div>

          <div class="md:col-span-2 flex items-center gap-2 text-[#27252B]/60">
            <svg class="w-4 h-4 text-[#71B1A5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm font-light">{{ fecha.horario }}</span>
          </div>

          <div class="md:col-span-2 flex md:justify-end">
            <NuxtLink to="/contacto" class="inline-flex items-center gap-1 group/cta">
              <span class="text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium border-b border-[#27252B]/20 pb-0.5 group-hover/cta:border-[#71B1A5] group-hover/cta:text-[#71B1A5] transition-all duration-200 whitespace-nowrap">
                Reservar plaza
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>