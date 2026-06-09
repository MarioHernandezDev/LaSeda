<!-- components/PageHero.vue -->
<template>
  <header class="page-hero-root relative overflow-hidden">

    <!-- Panel izquierdo: texto -->
    <div class="page-hero-panel-left bg-[#F5F2EE]">

      <div
        class="absolute inset-0 opacity-[0.018] pointer-events-none z-0"
        style="background-image: radial-gradient(circle, #27252B 1px, transparent 1px); background-size: 24px 24px;"
        aria-hidden="true"
      />
      <div
        class="absolute top-[-10%] left-[-20%] w-[480px] h-[480px] rounded-full bg-[#71B1A5]/5 blur-[100px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div class="page-hero-inner relative z-10 px-8 md:px-12 lg:px-16 xl:px-20 py-24 md:py-0">

        <div class="flex items-center gap-3 mb-6 lg:mb-8">
          <span class="w-5 h-px bg-[#71B1A5]" aria-hidden="true" />
          <p class="text-[#71B1A5] text-[10px] md:text-[11px] tracking-[0.42em] uppercase font-bold">
            {{ label }}
          </p>
        </div>

        <h1
          class="font-serif italic font-medium leading-[1.12] tracking-tight text-[#27252B] mb-5"
          style="font-size: clamp(2.1rem, 3.5vw, 3.8rem);"
        >
          {{ titleMain }}
          <span
            v-if="titleAccent"
            class="not-italic font-normal text-[#71B1A5] block mt-2 font-sans"
            style="font-size: clamp(1.4rem, 2.4vw, 2.6rem); letter-spacing: 0.04em;"
          >
            {{ titleAccent }}
          </span>
        </h1>

        <p
          class="text-stone-600/85 leading-[1.85] font-light mb-8 lg:mb-10 max-w-md"
          style="font-size: clamp(0.85rem, 1.1vw, 1rem);"
        >
          <slot name="description" />
        </p>

        <div class="flex flex-col sm:flex-row gap-3">
          <NuxtLink
            to="/contacto"
            class="group inline-flex items-center justify-center gap-3 bg-[#71B1A5] text-white px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-500 shadow-lg shadow-[#71B1A5]/25 hover:bg-[#5a9a8e] hover:shadow-xl hover:shadow-[#71B1A5]/40 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <svg class="w-4 h-4 transition-transform duration-500 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Contacto
          </NuxtLink>

          <NuxtLink
            v-if="secondaryLink && secondaryLabel"
            :to="secondaryLink"
            class="group inline-flex items-center justify-center gap-3 border border-[#27252B]/20 bg-transparent px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-bold text-[#27252B] hover:border-[#71B1A5] hover:text-[#71B1A5] transition-all duration-500 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            {{ secondaryLabel }}
            <svg class="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>

      </div>

      <!-- Mariposa -->
      <div
        class="page-hero-butterfly absolute z-20 pointer-events-none"
        aria-hidden="true"
      >
        <div class="absolute w-28 h-28 bg-[#71B1A5]/12 rounded-full blur-2xl -z-10 translate-x-2 -translate-y-2" />
        <div class="butterfly-wrapper">
          <div class="butterfly-3d">
            <div class="wing-3d"><div class="bit-3d" /><div class="bit-3d" /></div>
            <div class="wing-3d"><div class="bit-3d" /><div class="bit-3d" /></div>
          </div>
          <div class="shadow-3d" />
        </div>
      </div>

      <!-- Línea separadora vertical decorativa -->
      <div
        class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[45%] w-px"
        style="background: linear-gradient(to bottom, transparent, rgba(113,177,165,0.35), transparent);"
        aria-hidden="true"
      />

    </div>

    <!-- Panel derecho: imagen -->
    <div class="page-hero-panel-right">
      <NuxtImg
        :src="image"
        :alt="imageAlt"
        class="w-full h-full object-cover object-center"
        format="webp"
        fetchpriority="high"
        preload
      />
    </div>

  </header>
</template>

<script setup>
defineProps({
  label:          { type: String, required: true },
  titleMain:      { type: String, required: true },
  titleAccent:    { type: String, default: '' },
  image:          { type: String, required: true },
  imageAlt:       { type: String, required: true },
  secondaryLink:  { type: String, default: '' },
  secondaryLabel: { type: String, default: '' },
})
</script>