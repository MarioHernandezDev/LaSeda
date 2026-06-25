<script setup lang="ts">
interface Motivo {
  numero: string
  titulo: string
  desc: string
}

defineProps<{
  motivos: Motivo[]
  imagen: string
  imagenAlt: string
}>()
</script>

<template>
  <section class="py-24 md:py-32 bg-[#FDFBF9]">
    <div class="page-container">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div class="relative group">
          <div class="absolute -inset-4 border border-[#71B1A5]/10 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
          <div class="relative overflow-hidden aspect-[4/5] bg-[#27252B]/5">
            <NuxtImg 
              :src="imagen" 
              :alt="imagenAlt"
              class="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </div>
        </div>

        <div class="space-y-12">
          <div>
            <p class="section-label mb-4">¿Cuándo acudir?</p>
            <h2 class="font-serif italic text-3xl md:text-4xl text-[#27252B]">Motivos de consulta comunes</h2>
          </div>

          <div class="divide-y divide-[#27252B]/10">
            <div v-for="motivo in motivos" :key="motivo.numero" class="py-6 flex gap-6">
              <span class="font-serif italic text-2xl text-[#71B1A5]/40">{{ motivo.numero }}</span>
              <div class="space-y-1">
                <h3 class="font-medium text-[#27252B] tracking-tight">{{ motivo.titulo }}</h3>
                <p class="text-sm text-[#27252B]/60 font-light leading-relaxed">{{ motivo.desc }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>