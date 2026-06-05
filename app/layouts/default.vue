<template>
  <div class="flex flex-col min-h-screen bg-[#FDFBF9] font-sans text-[#27252B]">

    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
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
                :class="{ '!text-[#27252B] font-bold': $route.path === link.to }"
                :aria-current="$route.path === link.to ? 'page' : undefined"
              >
                {{ link.label }}
                <span
                  class="absolute bottom-0 left-2 right-2 h-px bg-[#71B1A5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                  :class="{ 'scale-x-100': $route.path === link.to }"
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
                  :class="{ '!text-[#27252B] font-bold': $route.path === link.to }"
                  :aria-current="$route.path === link.to ? 'page' : undefined"
                >
                  {{ link.label }}
                  <span
                    class="absolute bottom-0 left-2 right-2 h-px bg-[#71B1A5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                    :class="{ 'scale-x-100': $route.path === link.to }"
                  ></span>
                </NuxtLink>
              </li>
            </ul>

            <NuxtLink
              to="/contacto"
              class="inline-flex items-center justify-center bg-[#71B1A5] text-white text-[10px] tracking-[0.22em] uppercase font-semibold px-6 py-2.5 rounded-full hover:bg-[#5a9a8e] transition-all duration-300 shadow-sm shadow-[#71B1A5]/10 hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap"
            >
              Contacto
            </NuxtLink>
          </div>

          <button
            class="md:hidden flex flex-col justify-center items-center w-11 h-11 rounded-full border border-[#27252B]/5 bg-[#FDFBF9]/40 backdrop-blur-sm ml-auto gap-1.5 transition-colors duration-300 active:bg-stone-100 focus:outline-none"
            @click="mobileMenuOpen = !mobileMenuOpen"
            :aria-expanded="mobileMenuOpen"
            aria-label="Abrir menú de navegación"
          >
            <span
              class="block w-5 h-px bg-[#27252B] transition-all duration-300 origin-center"
              :class="mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''"
            ></span>
            <span
              class="block w-3 h-px bg-[#27252B] transition-all duration-300"
              :class="mobileMenuOpen ? 'opacity-0 w-0' : ''"
            ></span>
            <span
              class="block w-5 h-px bg-[#27252B] transition-all duration-300 origin-center"
              :class="mobileMenuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''"
            ></span>
          </button>

        </nav>
      </div>

      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-4 scale-95"
      >
        <div
          v-if="mobileMenuOpen"
          class="md:hidden mx-6 mt-3 bg-[#FDFBF9]/95 backdrop-blur-lg rounded-2xl border border-[#27252B]/8 shadow-2xl overflow-hidden"
        >
          <nav aria-label="Navegación móvil" class="px-6 py-6 flex flex-col gap-1.5">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="flex items-center justify-between px-4 py-4 text-xs tracking-[0.18em] uppercase font-semibold text-[#27252B]/70 hover:text-[#27252B] hover:bg-stone-100/50 rounded-xl transition-all duration-200"
              :class="{ 'text-[#71B1A5] bg-[#71B1A5]/5 font-bold': $route.path === link.to }"
              :aria-current="$route.path === link.to ? 'page' : undefined"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
              <svg class="w-4 h-4 text-[#71B1A5]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>

            <NuxtLink
              to="/contacto"
              class="mt-4 inline-flex items-center justify-center gap-2 bg-[#71B1A5] text-white text-xs tracking-[0.2em] uppercase font-semibold px-6 py-4 rounded-xl hover:bg-[#5a9a8e] transition-all duration-300 shadow-md shadow-[#71B1A5]/15 active:scale-[0.98]"
              @click="mobileMenuOpen = false"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Contacto
            </NuxtLink>
          </nav>
        </div>
      </Transition>
    </header>

    <main class="flex-grow pt-24 md:pt-28">
      <slot />
    </main>

    <CustomCursor />

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-90"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-90"
    >
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        aria-label="Volver al inicio de la página"
        class="fixed bottom-8 right-8 z-50 w-11 h-11 flex items-center justify-center bg-[#FDFBF9] border border-[#27252B]/12 rounded-full shadow-lg shadow-[#27252B]/8 hover:shadow-xl hover:shadow-[#27252B]/12 hover:-translate-y-1 hover:border-[#71B1A5]/50 transition-all duration-300 group"
      >
        <svg
          class="w-4 h-4 text-[#27252B]/50 group-hover:text-[#71B1A5] transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </Transition>

    <footer class="bg-[#1e1c21] text-white/40" aria-label="Pie de página">

      <div class="h-px bg-gradient-to-r from-transparent via-[#71B1A5]/40 to-transparent"></div>

      <div class="max-w-7xl mx-auto px-8 md:px-16 pt-16 md:pt-20 pb-14">
        <div class="grid md:grid-cols-12 gap-12 md:gap-10">

          <div class="md:col-span-4">
            <NuxtLink to="/" class="inline-flex items-center gap-3 group mb-6" aria-label="Ir a inicio">
              <NuxtImg
                src="/images/logo-centro-la-seda-psicologia-granada.png"
                alt="Logo Centro La Seda — Psicología y Talleres en Granada"
                format="webp"
                loading="lazy"
                class="h-9 w-auto opacity-60 group-hover:opacity-90 transition-opacity duration-300 brightness-0 invert"
              />
            </NuxtLink>

            <p class="text-sm leading-relaxed max-w-xs font-light mb-8">
              Centro de Psicología y Crecimiento Personal en Granada. Un espacio
              onde la ciencia se encuentra con la bondad.
            </p>

            <div class="border-l border-[#71B1A5]/40 pl-4">
              <p class="font-serif text-sm italic text-white/35 leading-relaxed">
                "Crecer no es un privilegio.<br/>Es un derecho que acompañamos."
              </p>
            </div>

            <div class="flex items-center gap-3 mt-8">
              <a 
                href="https://www.instagram.com/centrolaseda/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-white/40 hover:text-[#71B1A5] transition-colors duration-300"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a> 
              <a 
                href="https://www.facebook.com/CentroLaSeda/?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white/40 hover:text-[#71B1A5] transition-colors duration-300"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3l.5-3H13V6c0-.5.5-1 1-1h2V1H13a5 5 0 00-5 5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="md:col-span-3 md:col-start-6">
            <h3 class="text-white text-[10px] tracking-[0.3em] uppercase mb-6 font-medium">Explora</h3>
            <ul class="space-y-3" role="list">
              <li v-for="link in footerNavLinks" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="group inline-flex items-center gap-2 text-sm font-light hover:text-[#71B1A5] transition-colors duration-300"
                >
                  <span class="w-0 group-hover:w-3 h-px bg-[#71B1A5] transition-all duration-300 overflow-hidden"></span>
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="md:col-span-3 md:col-start-10">
            <h3 class="text-white text-[10px] tracking-[0.3em] uppercase mb-6 font-medium">Contacto</h3>

            <address class="not-italic space-y-4">
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-[#71B1A5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <p class="text-sm font-light leading-relaxed">
                    Calle Ejemplo, 12, 1º<br/>
                    18001 Granada, Andalucía
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-[#71B1A5] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+34958000000" class="text-sm font-light hover:text-[#71B1A5] transition-colors duration-300">
                  +34 958 000 000
                </a>
              </div>

              <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-[#71B1A5] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:hola@laseda.es" class="text-sm font-light hover:text-[#71B1A5] transition-colors duration-300">
                  hola@laseda.es
                </a>
              </div>
            </address>

            <div class="mt-8 flex items-start gap-3 p-4 border border-white/5 bg-white/[0.01]">
              <svg class="w-5 h-5 text-[#71B1A5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"/>
              </svg>
              <p class="text-xs text-white/40 leading-relaxed font-light">
                Psicólogos colegiados por el
                <strong class="text-white/60 font-medium block">Colegio Oficial de Psicólogos de Andalucía Oriental</strong>
              </p>
            </div>
          </div>

        </div>
      </div>

      <div class="max-w-7xl mx-auto px-8 md:px-16">
        <div class="h-px bg-white/5"></div>
      </div>

      <div class="max-w-7xl mx-auto px-8 md:px-16 py-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-widest uppercase">
          <p class="text-white/25">
            © {{ currentYear }} Centro La Seda · Psicología y Crecimiento en Granada
          </p>
          <nav aria-label="Navegación legal" class="flex items-center gap-6">
            <NuxtLink to="/aviso-legal" class="text-white/25 hover:text-[#71B1A5] transition-colors duration-300">
              Aviso Legal
            </NuxtLink>
            <span class="w-px h-3 bg-white/10"></span>
            <NuxtLink to="/privacidad" class="text-white/25 hover:text-[#71B1A5] transition-colors duration-300">
              Política de Privacidad
            </NuxtLink>
            <span class="w-px h-3 bg-white/10"></span>
            <NuxtLink to="/cookies" class="text-white/25 hover:text-[#71B1A5] transition-colors duration-300">
              Cookies
            </NuxtLink>
          </nav>
        </div>
      </div>

    </footer>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// ── Estado del menú móvil
const mobileMenuOpen = ref(false)

// ── Visibilidad del botón "volver arriba" + efecto scroll del navbar
const scrolled      = ref(false)
const showScrollTop = ref(false)

const handleScroll = () => {
  const y = window.scrollY
  scrolled.value      = y > 30
  showScrollTop.value = y > 400
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

// ── Acción del botón
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

// ── Cerrar menú móvil al redimensionar a escritorio
const handleResize = () => {
  if (window.innerWidth >= 768) mobileMenuOpen.value = false
}
onMounted(() => window.addEventListener('resize', handleResize, { passive: true }))
onUnmounted(() => window.removeEventListener('resize', handleResize))

// ── Año actual para el copyright
const currentYear = new Date().getFullYear()

// ── Definición centralizada de enlaces
const navLinks = [
  { label: 'Terapias',    to: '/terapias'    },
  { label: 'Talleres',    to: '/talleres'    },
  { label: 'Formaciones', to: '/formaciones' },
  { label: 'Conócenos',   to: '/conocenos'   },
]

const leftNavLinks  = computed(() => navLinks.slice(0, 2))
const rightNavLinks = computed(() => navLinks.slice(2))

const footerNavLinks = [
  { label: 'Inicio',               to: '/'            },
  { label: 'Terapias Clínicas',    to: '/terapias'    },
  { label: 'Talleres Vivenciales', to: '/talleres'    },
  { label: 'Formaciones',          to: '/formaciones' },
  { label: 'Conócenos',            to: '/conocenos'   },
  { label: 'Contacto',             to: '/contacto'    },
]
</script>

<style>
/* ── Ocultar cursor predeterminado del sistema en PC ── */
@media (min-width: 1024px) {
  body, 
  a, 
  button, 
  [role="button"],
  .group {
    cursor: none !important;
  }
}
</style>