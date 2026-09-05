import { a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as useHead } from './composables-BO5wdsw-.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Área Privada (Próximamente) · Centro de Psicología La Seda",
      meta: [
        { name: "robots", content: "noindex, nofollow" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-[#FDFBF9]" }, _attrs))}><div class="w-12 h-px bg-[#71B1A5] mb-8"></div><p class="formation-label mb-4">Espacio Digital La Seda</p><h1 class="font-serif italic text-[#27252B] text-4xl md:text-5xl leading-[1.2] max-w-2xl mb-6"> El área privada para pacientes y profesionales está en camino </h1><p class="text-base md:text-lg leading-[1.85] text-[#27252B]/65 max-w-xl mb-12 font-light"> Estamos construyendo una plataforma web segura y confidencial. Desde ella, nuestro equipo clínico podrá gestionar expedientes y las personas usuarias tendrán acceso directo a sus citas, un entorno de mensajería protegido y materiales exclusivos de nuestras formaciones. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Volver al inicio <span class="w-6 h-px bg-white/60 inline-block"${_scopeId}></span>`);
          } else {
            return [
              createTextVNode(" Volver al inicio "),
              createVNode("span", { class: "w-6 h-px bg-white/60 inline-block" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-CDbCdl0d.mjs.map
