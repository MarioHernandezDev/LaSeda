import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './NuxtImg-DCBPdNwS.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const defaultImage = "/images/centro-clinico-clinica-salud-bienestar-minimalista-recepcion-jardin.jpg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TherapyHero",
  __ssrInlineRender: true,
  props: {
    categoria: {},
    titulo: {},
    tituloItalico: {},
    subtitulo: {},
    categoriaSufijo: { default: "LA SEDA GRANADA" },
    aviso: {},
    botonPrincipal: { default: "Pedir Orientación" },
    botonPrincipalUrl: { default: "/contacto" },
    botonSecundario: { default: "Explorar Especialidad" },
    botonSecundarioUrl: { default: "#sobre-la-terapia" },
    imagenAlt: { default: "Interior minimalista, cálido y acogedor de las consultas del Centro de Psicología La Seda en Granada" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "page-hero-root relative overflow-hidden h-[500px] md:h-[calc(580px+6rem)] lg:h-[calc(640px+6rem)] md:pt-24 border-b border-[#27252B]/5" }, _attrs))} data-v-492a74cf><div class="page-hero-panel bg-[#F5F2EE] max-md:!absolute max-md:inset-0 max-md:!w-full max-md:!h-full max-md:z-20 max-md:!bg-transparent flex flex-col justify-center" data-v-492a74cf><div class="absolute inset-0 opacity-[0.018] pointer-events-none z-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle, #27252B 1px, transparent 1px)", "background-size": "24px 24px" })}" aria-hidden="true" data-v-492a74cf></div><div class="absolute top-[-10%] left-[-20%] w-[480px] h-[480px] rounded-full bg-[#71B1A5]/5 blur-[100px] pointer-events-none z-0" aria-hidden="true" data-v-492a74cf></div><div class="w-full relative z-10 px-0 md:px-12 lg:px-16 xl:px-20" data-v-492a74cf><div class="max-md:bg-[#F5F2EE]/85 max-md:backdrop-blur-md max-md:py-10 max-md:px-8 max-md:w-full" data-v-492a74cf><div class="flex items-center gap-3 mb-6 lg:mb-8" data-v-492a74cf><span class="w-5 h-px bg-[#71B1A5]" aria-hidden="true" data-v-492a74cf></span><p class="text-[#71B1A5] text-[10px] md:text-[11px] tracking-[0.42em] uppercase font-bold" data-v-492a74cf>${ssrInterpolate(__props.categoria)}`);
      if (__props.categoriaSufijo) {
        _push(`<span data-v-492a74cf> · ${ssrInterpolate(__props.categoriaSufijo)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div><h1 class="font-serif italic font-medium leading-[1.12] tracking-tight text-[#27252B] mb-8 relative flex items-start md:items-center" style="${ssrRenderStyle({ "font-size": "clamp(2.1rem, 3.5vw, 3.8rem)" })}" data-v-492a74cf><div class="relative z-10" data-v-492a74cf>${ssrInterpolate(__props.titulo)} `);
      if (__props.tituloItalico) {
        _push(`<span class="not-italic font-normal text-[#71B1A5] block mt-2 font-sans" style="${ssrRenderStyle({ "font-size": "clamp(1.4rem, 2.4vw, 2.6rem)", "letter-spacing": "0.04em" })}" data-v-492a74cf>${ssrInterpolate(__props.tituloItalico)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></h1><div class="flex flex-col sm:flex-row items-center gap-5 w-full" data-v-492a74cf>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.botonPrincipalUrl,
        class: "group relative inline-flex items-center justify-center gap-3 bg-[#27252B] text-white px-8 py-4 md:min-w-[210px] text-[10.5px] tracking-[0.28em] uppercase font-bold rounded-full transition-all duration-500 hover:bg-[#71B1A5] w-full sm:w-auto shadow-lg shadow-[#27252B]/5 hover:shadow-xl hover:shadow-[#71B1A5]/20 transform hover:-translate-y-0.5 overflow-hidden border border-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-492a74cf${_scopeId}>${ssrInterpolate(__props.botonPrincipal)}</span><div class="relative w-4 h-3 overflow-hidden flex items-center justify-center" data-v-492a74cf${_scopeId}><svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-492a74cf${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-492a74cf${_scopeId}></path></svg><svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-492a74cf${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-492a74cf${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(__props.botonPrincipal), 1),
              createVNode("div", { class: "relative w-4 h-3 overflow-hidden flex items-center justify-center" }, [
                (openBlock(), createBlock("svg", {
                  class: "w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2.5",
                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                  })
                ])),
                (openBlock(), createBlock("svg", {
                  class: "w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2.5",
                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.botonSecundarioUrl,
        class: "group relative inline-flex items-center justify-center gap-3 border border-[#27252B]/30 bg-[#F5F2EE]/60 backdrop-blur-md text-[#27252B] px-8 py-4 md:min-w-[210px] text-[10.5px] tracking-[0.28em] uppercase font-bold rounded-full transition-all duration-500 hover:border-[#71B1A5] hover:text-[#71B1A5] hover:bg-white/90 w-full sm:w-auto shadow-sm hover:shadow-xl hover:shadow-[#71B1A5]/10 transform hover:-translate-y-0.5 overflow-hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-492a74cf${_scopeId}>${ssrInterpolate(__props.botonSecundario)}</span><div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-[#71B1A5]" data-v-492a74cf${_scopeId}><svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-492a74cf${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-492a74cf${_scopeId}></path></svg><svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-492a74cf${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-492a74cf${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(__props.botonSecundario), 1),
              createVNode("div", { class: "relative w-4 h-3 overflow-hidden flex items-center justify-center text-[#71B1A5]" }, [
                (openBlock(), createBlock("svg", {
                  class: "w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2.5",
                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                  })
                ])),
                (openBlock(), createBlock("svg", {
                  class: "w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2.5",
                    d: "M14 5l7 7m0 0l-7 7m7-7H3"
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><p class="text-stone-600/85 leading-[1.85] font-light mb-8 lg:mb-10 max-w-md hidden md:block mt-6 px-4 md:px-0" style="${ssrRenderStyle({ "font-size": "clamp(0.85rem, 1.1vw, 1rem)" })}" data-v-492a74cf>${ssrInterpolate(__props.aviso || __props.subtitulo)}</p></div><div class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[45%] w-px" style="${ssrRenderStyle({ "background": "linear-gradient(to bottom, transparent, rgba(113,177,165,0.35), transparent)" })}" aria-hidden="true" data-v-492a74cf></div></div><div class="page-hero-panel-right max-md:!absolute max-md:inset-0 max-md:!w-full max-md:!h-full max-md:z-10" data-v-492a74cf>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: defaultImage,
        alt: __props.imagenAlt,
        class: "w-full h-full object-cover object-center",
        format: "webp",
        fetchpriority: "high",
        preload: ""
      }, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/therapy/TherapyHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-492a74cf"]]), { __name: "TherapyHero" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=TherapyHero-BzbVQC21.mjs.map
