<template>
  <section aria-labelledby="redes-titulo" class="py-24 md:py-40 bg-[#F5F2ED] overflow-hidden relative">

    <div class="absolute inset-0 opacity-[0.4]" style="background-image: radial-gradient(circle, #E6E1DA 1px, transparent 1px); background-size: 36px 36px;" aria-hidden="true"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-8 md:px-16">

      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
        <div>
          <div class="flex items-center gap-3 mb-5" aria-hidden="true">
            <div class="w-6 h-px bg-[#71B1A5]"></div>
            <span class="text-[#71B1A5] text-xs tracking-[0.4em] uppercase font-medium">Comunidad</span>
          </div>
          <h2 id="redes-titulo" class="font-serif italic font-light text-[2.2rem] md:text-[3rem] text-[#27252B] leading-[1.15]">
            Síguenos y forma parte de
            <span class="not-italic font-normal text-[#71B1A5]"> nuestra comunidad</span>
          </h2>
        </div>
        
        <div class="flex items-center gap-6 self-start md:self-end bg-white/60 backdrop-blur-sm border border-[#27252B]/5 p-2 rounded-full shadow-sm">
          <button 
            @click="navegarRed('prev')" 
            class="nav-arrow-btn"
            aria-label="Anterior red social"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          </button>

          <div class="text-center min-w-[100px]">
            <span class="block text-[10px] tracking-[0.25em] uppercase font-bold text-[#71B1A5] mb-0.5">Explorar</span>
            <span class="block text-xs tracking-[0.15em] uppercase font-semibold text-[#27252B] capitalize">
              {{ redActiva }}
            </span>
          </div>

          <button 
            @click="navegarRed('next')" 
            class="nav-arrow-btn"
            aria-label="Siguiente red social"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      <div class="transition-all duration-500 ease-in-out">
        
        <div v-show="redActiva === 'instagram'" id="panel-instagram" role="tabpanel" class="animate-fade-in">
          <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-none">
            <li v-for="reel in reelsInstagram" :key="reel.href">
              <a :href="reel.href" target="_blank" rel="noopener noreferrer" class="vertical-media-card group shadow-md shadow-[#27252B]/5" :aria-label="`Ver reel de Instagram: ${reel.label}`">
                <NuxtImg :src="reel.src" :alt="reel.alt" class="media-img" format="webp" loading="lazy" width="480" height="850" />
                <div class="media-overlay" aria-hidden="true">
                  <div class="media-play-icon">
                    <svg class="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <div class="media-metadata">
                    <span class="media-tag">{{ reel.tag }}</span>
                    <span class="media-handle">@centrolaseda</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div v-show="redActiva === 'tiktok'" id="panel-tiktok" role="tabpanel" class="animate-fade-in">
          <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-none">
            <li v-for="video in videosTiktok" :key="video.href">
              <a :href="video.href" target="_blank" rel="noopener noreferrer" class="vertical-media-card group shadow-md shadow-[#27252B]/5" :aria-label="`Ver vídeo de TikTok: ${video.label}`">
                <NuxtImg :src="video.src" :alt="video.alt" class="media-img" format="webp" loading="lazy" width="480" height="850" />
                <div class="media-overlay" aria-hidden="true">
                  <div class="media-play-icon">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2v14a4 4 0 1 1-4-4v4a2 2 0 1 0 2 2V2h4v4h-4z"/></svg>
                  </div>
                  <div class="media-metadata">
                    <span class="media-tag bg-[#27252B] text-white">{{ video.tag }}</span>
                    <span class="media-handle">@centro.la.seda</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div v-show="redActiva === 'facebook'" id="panel-facebook" role="tabpanel" class="animate-fade-in">
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-8 list-none max-w-6xl mx-auto">
            <li v-for="post in postsFacebook" :key="post.href" class="w-full">
              <article class="fb-card group h-full flex flex-col bg-white border border-[#27252B]/5 shadow-sm shadow-[#27252B]/2">
                <a :href="post.href" target="_blank" rel="noopener noreferrer" class="block relative overflow-hidden aspect-[16/10] flex-shrink-0" :aria-label="`Ver en Facebook: ${post.titulo}`">
                  <NuxtImg :src="post.src" :alt="post.alt" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" format="webp" loading="lazy" width="600" height="375" />
                  <div class="absolute inset-0 bg-[#27252B]/10 group-hover:bg-[#27252B]/25 transition-colors duration-500" aria-hidden="true"></div>
                  <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                    <div class="w-14 h-14 rounded-full bg-[#27252B] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                      <svg class="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div class="absolute top-4 left-4" aria-hidden="true">
                    <span class="fb-badge">{{ post.badge }}</span>
                  </div>
                </a>
                <div class="fb-card-body flex-1 flex flex-col justify-between p-8 md:p-10">
                  <div>
                    <p class="fb-card-category mb-3 text-xs tracking-[0.25em] font-bold uppercase text-[#71B1A5]">{{ post.categoria }}</p>
                    <h3 class="fb-card-title text-2xl mb-4 font-serif italic text-[#27252B]">{{ post.titulo }}</h3>
                    <p class="fb-card-desc text-sm text-[#27252B]/65 leading-relaxed font-light">{{ post.descripcion }}</p>
                  </div>
                  <a :href="post.href" target="_blank" rel="noopener noreferrer" class="fb-card-link mt-8 inline-flex items-center gap-2 self-start group/link">
                    Ver publicación completa
                    <svg class="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </a>
                </div>
              </article>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const redes = ['instagram', 'tiktok', 'facebook']
const redActiva = ref('instagram')

const navegarRed = (direccion) => {
  const currentIndex = redes.indexOf(redActiva.value)
  if (direccion === 'next') {
    const nextIndex = (currentIndex + 1) % redes.length
    redActiva.value = redes[nextIndex]
  } else {
    const prevIndex = (currentIndex - 1 + redes.length) % redes.length
    redActiva.value = redes[prevIndex]
  }
}

const reelsInstagram = [
  { href: 'https://www.instagram.com/p/DY5X41qsHzp/', src: '/images/instagram-reel-bienestar-emocional-psicologia-granada.jpg', alt: 'Reel bienestar emocional', tag: 'Destacado', label: 'bienestar emocional' },
  { href: 'https://www.instagram.com/p/DY27DAOM5xG/', src: '/images/instagram-reel-gestion-ansiedad-tecnicas-psicologia-granada.jpg', alt: 'Reel gestión ansiedad', tag: 'Ansiedad', label: 'gestión de ansiedad' },
  { href: 'https://www.instagram.com/p/DY1xml3MfsZ/', src: '/images/instagram-reel-psicoeducacion-herramientas-dia-a-dia-granada.jpg', alt: 'Reel herramientas psicoeducación', tag: 'Psicoeducación', label: 'psicoeducación' }
]

const videosTiktok = [
  { href: 'https://www.tiktok.com/@centro.la.seda', src: '/images/tiktok-video-divulgacion-psicologia.jpg', alt: 'TikTok Salud Mental', tag: 'Novedad', label: 'salud mental' },
  { href: 'https://www.tiktok.com/@centro.la.seda', src: '/images/tiktok-video-terapia-gestalt.jpg', alt: 'TikTok Gestalt', tag: 'Gestalt', label: 'terapia Gestalt' },
  { href: 'https://www.tiktok.com/@centro.la.seda', src: '/images/tiktok-video-autoestima.jpg', alt: 'TikTok Autoestima', tag: 'Autoestima', label: 'autoestima' }
]

const postsFacebook = [
  { href: 'https://www.facebook.com/reel/1685798236098339?locale=es_ES', src: '/images/facebook-taller-infancia-adolescencia-psicologia-granada.jpg', alt: 'Taller infancia', badge: 'Junio · Talleres', categoria: 'Talleres presenciales', titulo: 'Talleres de Infancia y Adolescencia', descripcion: 'Volvemos cargadas de nuevos talleres. Aprenderemos a crear el genograma, analizar técnicas proyectivas, duelos y trauma infantil.' },
  { href: 'https://www.facebook.com/reel/1643758276877244?locale=es_ES', src: '/images/facebook-formacion-nino-interior-trauma-infantil-granada.jpg', alt: 'Formación niño interior', badge: 'Formación', categoria: 'Formación experiencial', titulo: '¿Quieres saber más de tu infancia?', descripcion: 'Un viaje a tu niñez para indagar en tu historia y acompañar a otros. 15 talleres experienciales con recursos para la vida diaria.' }
]
</script>

<style scoped>
.nav-arrow-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #27252B;
  background: transparent;
  border: 1px solid rgba(39, 37, 43, 0.1);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
.nav-arrow-btn:hover {
  background: #27252B;
  color: #FFFFFF;
  border-color: #27252B;
}

.vertical-media-card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #EBE7E0;
  aspect-ratio: 9 / 16;
}
.media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}
.vertical-media-card:hover .media-img {
  transform: scale(1.03);
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(39, 37, 43, 0.85) 0%, rgba(39, 37, 43, 0.1) 60%, transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
}
.vertical-media-card:hover .media-overlay { opacity: 1; }

.media-play-icon {
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #FFFFFF;
  color: #27252B;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.85);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
.vertical-media-card:hover .media-play-icon { transform: scale(1); }

.media-metadata {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.media-tag {
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
  color: #FFFFFF;
  background: #71B1A5;
  padding: 4px 10px;
  align-self: flex-start;
}
.media-handle {
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.7);
}

.fb-card {
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}
.fb-card:hover {
  border-color: rgba(113, 177, 165, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(39, 37, 43, 0.06);
}
.fb-badge {
  font-size: 0.55rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 700;
  color: #FFFFFF;
  background: #27252B;
  padding: 5px 12px;
}
.fb-card-title {
  font-weight: 400;
  line-height: 1.3;
}
.fb-card-link {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 700;
  color: #27252B;
  border-bottom: 1px solid rgba(39, 37, 43, 0.15);
  padding-bottom: 2px;
  transition: all 0.3s ease;
  text-decoration: none;
}
.fb-card-link:hover {
  color: #71B1A5;
  border-color: #71B1A5;
}

.animate-fade-in {
  animation: fadeIn 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>