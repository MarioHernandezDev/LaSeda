<template>
  <section aria-labelledby="redes-titulo" class="py-24 md:py-36 px-8 md:px-16 bg-[#F5F2ED] overflow-hidden relative">
    
    <div class="absolute inset-0 opacity-[0.4]" style="background-image: radial-gradient(circle, #E6E1DA 1px, transparent 1px); background-size: 36px 36px;" aria-hidden="true"></div>

    <div class="relative z-10 max-w-7xl mx-auto">
      
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <div class="flex items-center gap-3 mb-5" aria-hidden="true">
            <div class="w-6 h-px bg-[#71B1A5]"></div>
            <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">Comunidad</span>
          </div>
          <h2 id="redes-titulo" class="font-serif italic font-light text-[2rem] md:text-[2.6rem] leading-[1.15] text-[#27252B] max-w-md">
            Síguenos y forma parte de
            <span class="not-italic font-normal text-[#71B1A5]"> nuestra comunidad</span>
          </h2>
        </div>
        <p class="opacity-65 max-w-sm text-base leading-relaxed font-light md:text-right text-[#27252B]">
          Conéctate con nosotros a través de las redes sociales y accede a contenido diario sobre bienestar, psicología y crecimiento.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
        
        <a 
          href="https://www.instagram.com/centrolaseda" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group relative flex flex-col justify-between overflow-hidden bg-[#EBE7E0]/60 border border-[#27252B]/5 hover:border-[#71B1A5]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 focus:outline-none rounded-sm"
        >
          <div>
            <div class="relative aspect-square overflow-hidden bg-[#EBE7E0]">
              <NuxtImg 
                src="/images/instagram-reel-bienestar-emocional-psicologia-granada.jpg" 
                alt="Portada de Instagram Centro La Seda" 
                class="w-full h-full object-cover grayscale-[10%] group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                format="webp" 
                loading="lazy" 
              />
              <div class="absolute inset-0 bg-[#27252B]/5 pointer-events-none" aria-hidden="true"></div>
            </div>
            <div class="p-6 lg:p-8">
              <span class="block text-[10px] tracking-[0.25em] uppercase font-bold text-[#71B1A5] mb-2">@centrolaseda</span>
              <h3 class="font-serif italic font-normal text-[1.5rem] text-[#27252B] mb-3 group-hover:text-[#71B1A5] transition-colors duration-300 flex items-center gap-2.5">
                <svg class="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </h3>
              <p class="opacity-75 text-sm leading-relaxed font-light text-[#27252B]">
                Compartimos píldoras diarias de <strong class="font-medium text-[#27252B]">psicoeducación</strong>, reflexiones cotidianas y el día a día de nuestro centro.
              </p>
            </div>
          </div>
          <div class="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
            <span class="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium border-b border-[#27252B]/15 pb-0.5 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-300">
              Ver perfil
              <span class="not-italic font-sans group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </div>
        </a>

        <a 
          href="https://www.tiktok.com/@centro.la.seda" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group relative flex flex-col justify-between overflow-hidden bg-[#EBE7E0]/60 border border-[#27252B]/5 hover:border-[#71B1A5]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 focus:outline-none rounded-sm"
        >
          <div>
            <div class="relative aspect-square overflow-hidden bg-[#EBE7E0]">
              <NuxtImg 
                src="/images/tiktok-video-divulgacion-psicologia.jpg" 
                alt="Portada de TikTok Centro La Seda" 
                class="w-full h-full object-cover grayscale-[10%] group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                format="webp" 
                loading="lazy" 
              />
              <div class="absolute inset-0 bg-[#27252B]/5 pointer-events-none" aria-hidden="true"></div>
            </div>
            <div class="p-6 lg:p-8">
              <span class="block text-[10px] tracking-[0.25em] uppercase font-bold text-[#71B1A5] mb-2">@centro.la.seda</span>
              <h3 class="font-serif italic font-normal text-[1.5rem] text-[#27252B] mb-3 group-hover:text-[#71B1A5] transition-colors duration-300 flex items-center gap-2.5">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31.01 2.61-.01 3.91.02.08 1.53.63 3.02 1.62 4.18 1.23 1.33 2.97 2.16 4.79 2.25v3.91c-1.5-.07-2.98-.55-4.26-1.37-.88-.58-1.61-1.35-2.14-2.26v7.41c0 1.22-.24 2.41-.75 3.51-.79 1.63-2.19 2.92-3.88 3.54-1.42.53-2.97.64-4.44.3-1.83-.4-3.46-1.51-4.52-3.09-1.2-1.77-1.6-4.01-1.12-6.13.43-1.99 1.67-3.75 3.44-4.75 1.4-.81 3.03-1.17 4.65-1.01v3.95c-.93-.16-1.92.05-2.73.57-.96.61-1.57 1.67-1.63 2.8-.09 1.53.89 2.99 2.37 3.39.86.24 1.79.16 2.59-.25.86-.44 1.45-1.28 1.6-2.23.06-.41.05-.83.05-1.24V0z"/>
                </svg>
                TikTok
              </h3>
              <p class="opacity-75 text-sm leading-relaxed font-light text-[#27252B]">
                <strong class="font-medium text-[#27252B]">Divulgación rigurosa</strong> adaptada a nuevos formatos. Herramientas útiles para la gestión emocional.
              </p>
            </div>
          </div>
          <div class="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
            <span class="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium border-b border-[#27252B]/15 pb-0.5 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-300">
              Ver perfil
              <span class="not-italic font-sans group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </div>
        </a>

        <a 
          href="https://www.facebook.com/centrolaseda" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group relative flex flex-col justify-between overflow-hidden bg-[#EBE7E0]/60 border border-[#27252B]/5 hover:border-[#71B1A5]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 focus:outline-none rounded-sm"
        >
          <div>
            <div class="relative aspect-square overflow-hidden bg-[#EBE7E0]">
              <NuxtImg 
                src="/images/facebook-taller-infancia-adolescencia-psicologia-granada.jpg" 
                alt="Portada de Facebook Centro La Seda" 
                class="w-full h-full object-cover grayscale-[10%] group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                format="webp" 
                loading="lazy" 
              />
              <div class="absolute inset-0 bg-[#27252B]/5 pointer-events-none" aria-hidden="true"></div>
            </div>
            <div class="p-6 lg:p-8">
              <span class="block text-[10px] tracking-[0.25em] uppercase font-bold text-[#71B1A5] mb-2">Centro La Seda</span>
              <h3 class="font-serif italic font-normal text-[1.5rem] text-[#27252B] mb-3 group-hover:text-[#71B1A5] transition-colors duration-300 flex items-center gap-2.5">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
                Facebook
              </h3>
              <p class="opacity-75 text-sm leading-relaxed font-light text-[#27252B]">
                Espacio para <strong class="font-medium text-[#27252B]">lecturas pausadas</strong>, convocatorias a próximos talleres y artículos de divulgación clínica.
              </p>
            </div>
          </div>
          <div class="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
            <span class="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium border-b border-[#27252B]/15 pb-0.5 group-hover:border-[#71B1A5] group-hover:text-[#71B1A5] transition-all duration-300">
              Ver perfil
              <span class="not-italic font-sans group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </div>
        </a>

      </div>

    </div>
  </section>
</template>