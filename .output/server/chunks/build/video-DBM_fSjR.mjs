import { _ as __nuxt_component_2 } from './CustomCursor-CGcgpRZy.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { useRouter } from 'vue-router';
import { u as useSeoMeta } from './composables-Bkq6dBM1.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _imports_0 = publicAssetsURL("/video/recorrido-edificio.webm");
const _sfc_main = {
  __name: "video",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useSeoMeta({
      title: "Recorrido virtual | Centro La Seda",
      description: "Conoce las instalaciones del Centro La Seda mediante un recorrido virtual.",
      ogTitle: "Recorrido virtual por Centro La Seda",
      ogDescription: "Conoce las instalaciones del Centro La Seda.",
      ogType: "video.other"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomCursor = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#27252B] flex items-center justify-center p-4 sm:p-8 md:p-12 !cursor-default" }, _attrs))} data-v-64f98635><button type="button" aria-label="Volver a la página anterior" class="fixed top-5 left-5 sm:top-8 sm:left-8 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#FDFBF9]/90 text-[#27252B] shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71B1A5]" data-v-64f98635><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-64f98635><path d="M19 12H5" data-v-64f98635></path><path d="m12 19-7-7 7-7" data-v-64f98635></path></svg></button><video autoplay loop muted playsinline preload="metadata" controls aria-label="Recorrido virtual por el centro La Seda" class="w-full max-w-5xl lg:max-w-7xl max-h-[calc(100vh-3rem)] sm:max-h-[calc(100vh-5rem)] rounded-2xl object-contain shadow-2xl shadow-black/30 !cursor-default" data-v-64f98635><source${ssrRenderAttr("src", _imports_0)} type="video/webm" data-v-64f98635> Tu navegador no soporta el formato de vídeo. </video>`);
      _push(ssrRenderComponent(_component_CustomCursor, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/video.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const video = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-64f98635"]]);

export { video as default };
//# sourceMappingURL=video-DBM_fSjR.mjs.map
