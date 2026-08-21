<template>
  <section aria-labelledby="redes-titulo" class="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-[#F5F2ED] overflow-hidden relative">
    
    <!-- Trama de fondo sutil -->
    <div class="absolute inset-0 opacity-[0.4]" style="background-image: radial-gradient(circle, #E6E1DA 1px, transparent 1px); background-size: 36px 36px;" aria-hidden="true"></div>

    <div class="relative z-10 max-w-7xl mx-auto">
      
      <!-- Layout Principal en Grid (2 columnas en escritorio) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- COLUMNA VÍDEO (5 de 12 columnas) -->
        <div class="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center">
          <div class="relative w-full aspect-[9/16] max-w-[380px] sm:max-w-[420px] lg:max-w-none rounded-2xl overflow-hidden bg-[#EBE7E0] shadow-xl shadow-[#27252B]/5 border border-[#27252B]/10 group">
            
            <!-- Etiqueta sobre el vídeo -->
            <div class="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FDFBF9]/80 backdrop-blur-md text-[#27252B] text-[11px] tracking-wider uppercase font-medium shadow-sm">
              <span class="w-2 h-2 rounded-full bg-[#71B1A5] animate-pulse"></span>
              <span>Conoce nuestro centro</span>
            </div>

            <!-- Vídeo refinado y proporcionado -->
            <video 
              autoplay 
              loop 
              muted 
              playsinline
              preload="metadata"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            >
              <source src="/video/recorrido-edificio.webm" type="video/webm" />
              Tu navegador no soporta el formato de vídeo.
            </video>

            <div class="absolute inset-0 bg-gradient-to-t from-[#27252B]/30 via-transparent to-transparent pointer-events-none" aria-hidden="true"></div>
          </div>
          
        </div>

        <!-- COLUMNA CONTENIDO Y CARDS (7 de 12 columnas) -->
        <div class="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
          
          <!-- Encabezado -->
          <div class="mb-10 text-left">
            <div class="flex items-center gap-3 mb-4" aria-hidden="true">
              <div class="w-6 h-px bg-[#71B1A5]"></div>
              <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">Comunidad</span>
            </div>

            <h2 id="redes-titulo" class="font-serif italic font-light text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.15] text-[#27252B] mb-5">
              Seguimos <span class="not-italic font-normal text-[#71B1A5]">en contacto</span>
            </h2>

            <p class="text-base md:text-lg leading-relaxed font-light text-[#27252B]/80 max-w-xl">
              Compartimos contenidos para comprender mejor la salud psicológica, seguir aprendiendo y conocer el día a día de La Seda. Elige el canal que mejor encaje contigo.
            </p>
          </div>

          <!-- Cards de Redes Sociales -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            <!-- Card Instagram -->
            <a 
              href="https://www.instagram.com/centrolaseda" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group relative flex flex-col justify-between p-7 min-h-[220px] sm:min-h-[240px] bg-[#EBE7E0]/70 hover:bg-[#FDFBF9] border border-[#27252B]/5 hover:border-[#71B1A5]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 rounded-2xl"
            >
              <div>
                <div class="w-12 h-12 rounded-full bg-[#71B1A5]/10 flex items-center justify-center text-[#71B1A5] group-hover:bg-[#71B1A5] group-hover:text-white transition-colors duration-300 mb-6">
                  <svg class="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <span class="block text-[11px] tracking-[0.2em] uppercase font-bold text-[#71B1A5] mb-1">@centrolaseda</span>
                <h3 class="font-serif italic font-normal text-2xl text-[#27252B]">Instagram</h3>
              </div>

              <div class="pt-4 border-t border-[#27252B]/10 flex items-center justify-between text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-[#27252B] group-hover:text-[#71B1A5] transition-colors">
                <span>Seguir</span>
                <span class="not-italic font-sans text-base transition-transform group-hover:translate-x-1.5">→</span>
              </div>
            </a>

            <!-- Card TikTok -->
            <a 
              href="https://www.tiktok.com/@centro.la.seda" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group relative flex flex-col justify-between p-7 min-h-[220px] sm:min-h-[240px] bg-[#EBE7E0]/70 hover:bg-[#FDFBF9] border border-[#27252B]/5 hover:border-[#71B1A5]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 rounded-2xl"
            >
              <div>
                <div class="w-12 h-12 rounded-full bg-[#71B1A5]/10 flex items-center justify-center text-[#71B1A5] group-hover:bg-[#71B1A5] group-hover:text-white transition-colors duration-300 mb-6">
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31.01 2.61-.01 3.91.02.08 1.53.63 3.02 1.62 4.18 1.23 1.33 2.97 2.16 4.79 2.25v3.91c-1.5-.07-2.98-.55-4.26-1.37-.88-.58-1.61-1.35-2.14-2.26v7.41c0 1.22-.24 2.41-.75 3.51-.79 1.63-2.19 2.92-3.88 3.54-1.42.53-2.97.64-4.44.3-1.83-.4-3.46-1.51-4.52-3.09-1.2-1.77-1.6-4.01-1.12-6.13.43-1.99 1.67-3.75 3.44-4.75 1.4-.81 3.03-1.17 4.65-1.01v3.95c-.93-.16-1.92.05-2.73.57-.96.61-1.57 1.67-1.63 2.8-.09 1.53.89 2.99 2.37 3.39.86.24 1.79.16 2.59-.25.86-.44 1.45-1.28 1.6-2.23.06-.41.05-.83.05-1.24V0z"/>
                  </svg>
                </div>
                <span class="block text-[11px] tracking-[0.2em] uppercase font-bold text-[#71B1A5] mb-1">@centro.la.seda</span>
                <h3 class="font-serif italic font-normal text-2xl text-[#27252B]">TikTok</h3>
              </div>

              <div class="pt-4 border-t border-[#27252B]/10 flex items-center justify-between text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-[#27252B] group-hover:text-[#71B1A5] transition-colors">
                <span>Seguir</span>
                <span class="not-italic font-sans text-base transition-transform group-hover:translate-x-1.5">→</span>
              </div>
            </a>

            <!-- Card Facebook -->
            <a 
              href="https://www.facebook.com/centrolaseda" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group relative flex flex-col justify-between p-7 min-h-[220px] sm:min-h-[240px] bg-[#EBE7E0]/70 hover:bg-[#FDFBF9] border border-[#27252B]/5 hover:border-[#71B1A5]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 rounded-2xl"
            >
              <div>
                <div class="w-12 h-12 rounded-full bg-[#71B1A5]/10 flex items-center justify-center text-[#71B1A5] group-hover:bg-[#71B1A5] group-hover:text-white transition-colors duration-300 mb-6">
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                  </svg>
                </div>
                <span class="block text-[11px] tracking-[0.2em] uppercase font-bold text-[#71B1A5] mb-1">Centro La Seda</span>
                <h3 class="font-serif italic font-normal text-2xl text-[#27252B]">Facebook</h3>
              </div>

              <div class="pt-4 border-t border-[#27252B]/10 flex items-center justify-between text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-[#27252B] group-hover:text-[#71B1A5] transition-colors">
                <span>Seguir</span>
                <span class="not-italic font-sans text-base transition-transform group-hover:translate-x-1.5">→</span>
              </div>
            </a>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>