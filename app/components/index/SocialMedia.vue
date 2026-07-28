<template>
  <section aria-labelledby="redes-titulo" class="py-20 md:py-28 bg-[#F5F2ED] overflow-hidden relative">
    
    <div class="absolute inset-0 opacity-[0.4]" style="background-image: radial-gradient(circle, #E6E1DA 1px, transparent 1px); background-size: 36px 36px;" aria-hidden="true"></div>

    <div class="relative z-10 flex flex-col items-center">
      
      <div class="max-w-4xl mx-auto px-8 md:px-16 text-center flex flex-col items-center">
        <div class="flex items-center gap-3 mb-6" aria-hidden="true">
          <div class="w-6 h-px bg-[#71B1A5]"></div>
          <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">Comunidad</span>
          <div class="w-6 h-px bg-[#71B1A5]"></div>
        </div>

        <h2 id="redes-titulo" class="font-serif italic font-light text-[2.2rem] md:text-[3rem] leading-[1.15] text-[#27252B] mb-8">
          Seguimos <span class="not-italic font-normal text-[#71B1A5]">en contacto</span>
        </h2>

        <p class="text-base md:text-lg leading-relaxed md:leading-loose font-light text-[#27252B]/85 max-w-2xl mb-12">
          Compartimos contenidos para comprender mejor la salud psicológica, seguir aprendiendo y conocer el día a día de La Seda. Elige el canal que mejor encaje contigo.
        </p>
      </div>

      <div class="w-full mb-12 h-[600px] sm:h-[800px] md:h-[1300px] overflow-hidden">
        <video 
          autoplay 
          loop 
          muted 
          playsinline
          preload="metadata"
          class="w-full h-full object-cover"
        >
          <source src="/video/recorrido-edificio.webm" type="video/webm" />
          Tu navegador no soporta el formato de vídeo.
        </video>
      </div>

      <div class="max-w-4xl mx-auto px-8 md:px-16 text-center">
        <div class="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          
          <a 
            href="https://www.instagram.com/centrolaseda" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 px-6 py-3 bg-[#EBE7E0] border border-[#27252B]/10 hover:border-[#71B1A5] text-[#27252B] hover:text-[#71B1A5] transition-all duration-300 text-sm font-medium tracking-wide group"
          >
            <svg class="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram</span>
            <span class="text-xs group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <a 
            href="https://www.tiktok.com/@centro.la.seda" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 px-6 py-3 bg-[#EBE7E0] border border-[#27252B]/10 hover:border-[#71B1A5] text-[#27252B] hover:text-[#71B1A5] transition-all duration-300 text-sm font-medium tracking-wide group"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31.01 2.61-.01 3.91.02.08 1.53.63 3.02 1.62 4.18 1.23 1.33 2.97 2.16 4.79 2.25v3.91c-1.5-.07-2.98-.55-4.26-1.37-.88-.58-1.61-1.35-2.14-2.26v7.41c0 1.22-.24 2.41-.75 3.51-.79 1.63-2.19 2.92-3.88 3.54-1.42.53-2.97.64-4.44.3-1.83-.4-3.46-1.51-4.52-3.09-1.2-1.77-1.6-4.01-1.12-6.13.43-1.99 1.67-3.75 3.44-4.75 1.4-.81 3.03-1.17 4.65-1.01v3.95c-.93-.16-1.92.05-2.73.57-.96.61-1.57 1.67-1.63 2.8-.09 1.53.89 2.99 2.37 3.39.86.24 1.79.16 2.59-.25.86-.44 1.45-1.28 1.6-2.23.06-.41.05-.83.05-1.24V0z"/>
            </svg>
            <span>TikTok</span>
            <span class="text-xs group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

          <a 
            href="https://www.facebook.com/centrolaseda" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 px-6 py-3 bg-[#EBE7E0] border border-[#27252B]/10 hover:border-[#71B1A5] text-[#27252B] hover:text-[#71B1A5] transition-all duration-300 text-sm font-medium tracking-wide group"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
            </svg>
            <span>Facebook</span>
            <span class="text-xs group-hover:translate-x-0.5 transition-transform">→</span>
          </a>

        </div>
      </div>

    </div>
  </section>
</template>