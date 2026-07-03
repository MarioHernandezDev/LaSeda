<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform-gpu will-change-transform backface-hidden"
    :class="scrolled
      ? 'bg-[#FDFBF9]/90 backdrop-blur-md shadow-lg shadow-[#27252B]/4 border-b border-[#27252B]/5 py-2'
      : 'bg-transparent py-4 md:py-6'"
  >
    <div class="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <nav class="flex items-center justify-between h-14 md:h-16" aria-label="Navegación principal">

        <ul class="hidden md:flex flex-1 items-center justify-end gap-6 lg:gap-10 pr-12 lg:pr-16" role="list">
          <li v-for="link in leftNavLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="relative px-2 py-2 text-[11px] tracking-[0.25em] uppercase font-semibold text-[#27252B]/70 hover:text-[#27252B] transition-colors duration-300 group"
              :class="{ '!text-[#27252B] font-bold': currentPath === link.to }"
              :aria-current="currentPath === link.to ? 'page' : undefined"
            >
              {{ link.label }}
              <span
                class="absolute bottom-0 left-2 right-2 h-px bg-[#71B1A5] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"
                :class="{ 'scale-x-100': currentPath === link.to }"
              ></span>
            </NuxtLink>
          </li>
        </ul>

        <div class="flex-shrink-0 flex items-center justify-center z-10">
          <NuxtLink to="/" class="group block" aria-label="Ir a inicio">
            <NuxtImg
              src="/images/logo-centro-la-seda-psicologia-granada.png"
              alt="Logo Centro La Seda — Psicología y Talleres en Granada"
              format="webp"
              fetchpriority="high"
              class="h-9 md:h-11 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </NuxtLink>
        </div>

        <div class="hidden md:flex flex-1 items-center justify-start gap-8 lg:gap-12 pl-12 lg:pl-16">
          <ul class="flex items-center gap-6 lg:gap-10" role="list">
            <li v-for="link in rightNavLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="relative px-2 py-2 text-[11px] tracking-[0.25em] uppercase font-semibold text-[#27252B]/70 hover:text-[#27252B] transition-colors duration-300 group"
                :class="{ '!text-[#27252B] font-bold': currentPath === link.to }"
                :aria-current="currentPath === link.to ? 'page' : undefined"
              >
                {{ link.label }}
                <span
                  class="absolute bottom-0 left-2 right-2 h-px bg-[#71B1A5] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"
                  :class="{ 'scale-x-100': currentPath === link.to }"
                ></span>
              </NuxtLink>
            </li>
          </ul>

          <NuxtLink
            to="/contacto"
            class="inline-flex items-center justify-center bg-[#71B1A5] text-white text-[10px] tracking-[0.22em] uppercase font-bold px-6 py-2.5 rounded-full hover:bg-[#5a9a8e] transition-all duration-500 shadow-lg shadow-[#71B1A5]/10 hover:shadow-xl hover:shadow-[#71B1A5]/30 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Contacto
          </NuxtLink>
        </div>

        <button
          class="md:hidden flex flex-col justify-center items-center w-11 h-11 rounded-full border border-[#27252B]/5 bg-[#FDFBF9]/60 backdrop-blur-sm ml-auto gap-1.5 transition-all duration-300 active:scale-[0.95] focus:outline-none z-50 relative"
          @click="$emit('toggleMenu')"
          :aria-expanded="mobileMenuOpen"
          aria-label="Abrir menú de navegación"
        >
          <span class="block w-5 h-px bg-[#27252B] transition-all duration-300 origin-center" :class="mobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''"></span>
          <span class="block w-3 h-px bg-[#27252B] transition-all duration-300" :class="mobileMenuOpen ? 'opacity-0 w-0' : ''"></span>
          <span class="block w-5 h-px bg-[#27252B] transition-all duration-300 origin-center" :class="mobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''"></span>
        </button>

      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({
  scrolled: Boolean,
  currentPath: String,
  mobileMenuOpen: Boolean
})
defineEmits(['toggleMenu'])

const navLinks = [
  { label: 'Terapias',    to: '/terapias'    },
  { label: 'Talleres',    to: '/talleres'    },
  { label: 'Formaciones', to: '/formaciones' },
  { label: 'Conócenos',   to: '/conocenos'   },
]

const leftNavLinks  = navLinks.slice(0, 2)
const rightNavLinks = navLinks.slice(2)
</script>

<style scoped>
header {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
}
.backdrop-blur-md {
  -webkit-backdrop-filter: blur(12px) !important;
  backdrop-filter: blur(12px) !important;
}
</style>