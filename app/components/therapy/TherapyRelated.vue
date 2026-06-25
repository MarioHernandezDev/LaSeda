<script setup lang="ts">
const props = defineProps<{
  actualId: string
  todasLasTerapias: Record<string, any>
}>()

// Filtramos las terapias para no mostrar la actual
const terapiasSugeridas = computed(() => {
  return Object.entries(props.todasLasTerapias)
    .filter(([id]) => id !== props.actualId)
    .map(([id, data]) => ({ id, ...data }))
})
</script>

<template>
  <section class="py-24 bg-[#FDFBF9] border-t border-[#27252B]/5">
    <div class="page-container">
      <div class="flex items-center justify-between mb-12">
        <div>
          <p class="section-label mb-2 text-[#71B1A5]">Otras Especialidades</p>
          <h2 class="font-serif italic text-2xl md:text-3xl text-[#27252B]">También puede interesarte</h2>
        </div>
        <NuxtLink to="/terapias" class="hidden md:block text-xs tracking-widest uppercase text-[#27252B]/40 hover:text-[#71B1A5] transition-colors">
          Ver todas →
        </NuxtLink>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink 
          v-for="t in terapiasSugeridas" 
          :key="t.id"
          :to="`/terapias/${t.id}`"
          class="group block bg-white border border-[#27252B]/5 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#27252B]/5"
        >
          <p class="text-[10px] tracking-[0.2em] uppercase text-[#71B1A5] mb-3">{{ t.categoria }}</p>
          <h3 class="font-serif italic text-lg text-[#27252B] group-hover:text-[#71B1A5] transition-colors duration-300 leading-snug">
            {{ t.titulo }} {{ t.tituloItalico }}
          </h3>
          <div class="mt-6 flex items-center justify-between">
            <span class="text-[10px] tracking-widest uppercase text-[#27252B]/30 group-hover:text-[#27252B] transition-colors">Saber más</span>
            <div class="w-8 h-px bg-[#27252B]/10 group-hover:w-12 group-hover:bg-[#71B1A5] transition-all duration-500" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>