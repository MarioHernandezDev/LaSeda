<script setup lang="ts">
defineProps<{
  descripcion: string
  descripcion2: string
  cita: string
  beneficios: string[]
}>()
</script>

<template>
  <section id="sobre-la-terapia" class="bg-[#FDFBF9] py-20 md:py-28 relative scroll-mt-12">
    <div class="page-container max-w-4xl mx-auto">
      
      <div class="space-y-12">
        
        

        <div class="py-10 my-6 border-t border-b border-[#27252B]/10 relative">
          <blockquote class="text-center max-w-2xl mx-auto">
            <p class="text-[#27252B]/80 font-serif italic text-lg md:text-xl leading-[1.85]">
              “{{ cita }}”
            </p>
          </blockquote>
        </div>

      </div>

    </div>
  </section>
</template>