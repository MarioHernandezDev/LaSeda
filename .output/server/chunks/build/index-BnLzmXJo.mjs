import { _ as _sfc_main$1 } from './PageHero-J1FenkWy.mjs';
import { a as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_1 } from './NuxtImg-BPQsK4wb.mjs';
import { defineComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta, a as useHead } from './composables-Bkq6dBM1.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Formación en psicología y terapia Gestalt infantil en Granada | Escuela La Seda",
      ogTitle: "Formación en psicología y terapia Gestalt infantil en Granada | Escuela La Seda",
      description: "Formaciones en psicología, terapia Gestalt infantil y juvenil, método Wingwave® y supervisión de casos en Granada.",
      ogDescription: "Formaciones en psicología, terapia Gestalt infantil y juvenil, método Wingwave® y supervisión de casos en Granada.",
      ogImage: "/images/formacion-psicologia-presencial-granada-la-seda.jpg",
      twitterCard: "summary_large_image",
      twitterTitle: "Formación en Psicología Clínica y Especialización en Granada",
      twitterDescription: "Formaciones en psicología, terapia Gestalt infantil y juvenil, método Wingwave® y supervisión de casos en Granada.",
      robots: "index, follow"
    });
    useHead({
      link: [
        { rel: "canonical", href: "https://centrolaseda.com/formaciones" }
      ],
      htmlAttrs: {
        lang: "es"
      }
    });
    const scrollToTop = () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        label: "ESCUELA LA SEDA",
        "title-main": "Formarse también es",
        "title-accent": "un acto de cuidado propio",
        image: "/images/formacion-psicologia-presencial-granada-la-seda.jpg",
        "image-alt": "Grupo participante en una formación experiencial de la Escuela La Seda.",
        "secondary-link": "#programas",
        "secondary-label": "Conocer la escuela"
      }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nuestra escuela reúne programas para quienes desean profundizar en su práctica, crecer profesionalmente y desarrollar una presencia más consciente y humana. `);
          } else {
            return [
              createTextVNode(" Nuestra escuela reúne programas para quienes desean profundizar en su práctica, crecer profesionalmente y desarrollar una presencia más consciente y humana. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="page-container py-20 md:py-28 border-b border-[#27252B]/10"><div class="max-w-4xl mx-auto text-center space-y-6 mb-16"><p class="section-label">ESCUELA LA SEDA</p><h2 class="section-title">Una comunidad de aprendizaje</h2><p class="text-base md:text-lg leading-relaxed text-[#27252B]/80 font-light max-w-3xl mx-auto"> La Escuela La Seda nace del deseo de cultivar una comprensión más amplia del ser humano. Aprender no consiste solo en adquirir conocimientos: implica desarrollar presencia y construir una práctica profesional coherente con quien queremos ser. </p></div><div class="grid md:grid-cols-3 gap-8 md:gap-12"><div class="space-y-3 p-6 bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm"><h3 class="font-serif italic text-xl text-[#27252B]">Crecimiento personal</h3><p class="text-sm leading-relaxed text-[#27252B]/70"> La formación comienza en la propia experiencia. Los programas invitan a reconocer lo vivido y convertirlo en recurso profesional. </p></div><div class="space-y-3 p-6 bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm"><h3 class="font-serif italic text-xl text-[#27252B]">Rigor profesional</h3><p class="text-sm leading-relaxed text-[#27252B]/70"> Contenidos sólidos, práctica y supervisión al servicio de un ejercicio responsable. </p></div><div class="space-y-3 p-6 bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm"><h3 class="font-serif italic text-xl text-[#27252B]">Comunidad</h3><p class="text-sm leading-relaxed text-[#27252B]/70"> Aprendemos junto a personas que comparten el interés por explorar la experiencia humana desde el respeto y la sensibilidad. </p></div></div></section><section id="programas" class="bg-[#27252B]/[0.03] py-20 md:py-32 overflow-hidden" aria-labelledby="programas-heading"><div class="page-container"><div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 md:mb-24"><div><p class="section-label mb-3">Nuestras formaciones</p><h2 id="programas-heading" class="section-title"> Una invitación a seguir creciendo </h2><p class="text-base text-[#27252B]/70 mt-3 max-w-xl"> Los programas responden a necesidades diferentes y comparten una misma idea: el conocimiento cobra sentido cuando dialoga con la experiencia y el trabajo personal. </p></div><div class="w-24 h-px bg-[#27252B]/20 md:mb-2" aria-hidden="true"></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"><div class="space-y-12 lg:space-y-32">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/formaciones/gestalt-infantil",
        onClick: scrollToTop,
        class: "training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 block",
        "aria-label": "Ver programa de Terapia Gestalt Infantil y Adolescente"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-hidden aspect-[16/10] relative"${_scopeId}><div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/formacion-terapia-gestalt-infancia-adolescencia-granada.jpg",
              alt: "Formación en terapia Gestalt infantil y adolescente",
              width: "800",
              height: "500",
              format: "webp",
              loading: "lazy",
              class: "w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-8 md:p-10 flex flex-col flex-1 gap-5"${_scopeId}><div class="section-divider" aria-hidden="true"${_scopeId}></div><h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug"${_scopeId}>Formación en terapia Gestalt infantil y adolescente</h3><p class="text-base leading-[1.85] text-[#27252B]/75 flex-1"${_scopeId}> Una formación experiencial para acercarse a la infancia y la adolescencia desde la perspectiva gestáltica, combinando fundamentos sólidos, práctica clínica y trabajo personal. </p><div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1"${_scopeId}><span${_scopeId}>Imparte: <span class="font-normal text-[#27252B]/70"${_scopeId}>Ana M.ª Jiménez y equipo colaborador</span></span></div><span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300"${_scopeId}> Ver programa <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300"${_scopeId}></span></span></div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-hidden aspect-[16/10] relative" }, [
                createVNode("div", { class: "absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" }),
                createVNode(_component_NuxtImg, {
                  src: "/images/formacion-terapia-gestalt-infancia-adolescencia-granada.jpg",
                  alt: "Formación en terapia Gestalt infantil y adolescente",
                  width: "800",
                  height: "500",
                  format: "webp",
                  loading: "lazy",
                  class: "w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                })
              ]),
              createVNode("div", { class: "p-8 md:p-10 flex flex-col flex-1 gap-5" }, [
                createVNode("div", {
                  class: "section-divider",
                  "aria-hidden": "true"
                }),
                createVNode("h3", { class: "font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug" }, "Formación en terapia Gestalt infantil y adolescente"),
                createVNode("p", { class: "text-base leading-[1.85] text-[#27252B]/75 flex-1" }, " Una formación experiencial para acercarse a la infancia y la adolescencia desde la perspectiva gestáltica, combinando fundamentos sólidos, práctica clínica y trabajo personal. "),
                createVNode("div", { class: "text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1" }, [
                  createVNode("span", null, [
                    createTextVNode("Imparte: "),
                    createVNode("span", { class: "font-normal text-[#27252B]/70" }, "Ana M.ª Jiménez y equipo colaborador")
                  ])
                ]),
                createVNode("span", { class: "inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300" }, [
                  createTextVNode(" Ver programa "),
                  createVNode("span", { class: "w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/formaciones/supervision-casos",
        onClick: scrollToTop,
        class: "training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 block",
        "aria-label": "Ver detalles de Supervisión de Casos"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-hidden aspect-[16/10] relative"${_scopeId}><div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/supervision-casos-clinicos-terapeutas-gestalt-granada.jpg",
              alt: "Supervisión de casos para profesionales de la psicología",
              width: "800",
              height: "500",
              format: "webp",
              loading: "lazy",
              class: "w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-8 md:p-10 flex flex-col flex-1 gap-5"${_scopeId}><div class="section-divider" aria-hidden="true"${_scopeId}></div><h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug"${_scopeId}>Supervisión de casos</h3><p class="text-base leading-[1.85] text-[#27252B]/75 flex-1"${_scopeId}> Un espacio para revisar la experiencia clínica, abordar dificultades y seguir creciendo profesionalmente en un entorno de confianza. </p><div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1"${_scopeId}><span${_scopeId}>Acreditación: <span class="font-normal text-[#27252B]/70"${_scopeId}>Horas avaladas por la AETG</span></span><span class="text-[#27252B]/20"${_scopeId}>•</span><span${_scopeId}>Supervisora: <span class="font-normal text-[#27252B]/70"${_scopeId}>Ana Jiménez</span></span></div><span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300"${_scopeId}> Ver programa <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300"${_scopeId}></span></span></div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-hidden aspect-[16/10] relative" }, [
                createVNode("div", { class: "absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" }),
                createVNode(_component_NuxtImg, {
                  src: "/images/supervision-casos-clinicos-terapeutas-gestalt-granada.jpg",
                  alt: "Supervisión de casos para profesionales de la psicología",
                  width: "800",
                  height: "500",
                  format: "webp",
                  loading: "lazy",
                  class: "w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                })
              ]),
              createVNode("div", { class: "p-8 md:p-10 flex flex-col flex-1 gap-5" }, [
                createVNode("div", {
                  class: "section-divider",
                  "aria-hidden": "true"
                }),
                createVNode("h3", { class: "font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug" }, "Supervisión de casos"),
                createVNode("p", { class: "text-base leading-[1.85] text-[#27252B]/75 flex-1" }, " Un espacio para revisar la experiencia clínica, abordar dificultades y seguir creciendo profesionalmente en un entorno de confianza. "),
                createVNode("div", { class: "text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1" }, [
                  createVNode("span", null, [
                    createTextVNode("Acreditación: "),
                    createVNode("span", { class: "font-normal text-[#27252B]/70" }, "Horas avaladas por la AETG")
                  ]),
                  createVNode("span", { class: "text-[#27252B]/20" }, "•"),
                  createVNode("span", null, [
                    createTextVNode("Supervisora: "),
                    createVNode("span", { class: "font-normal text-[#27252B]/70" }, "Ana Jiménez")
                  ])
                ]),
                createVNode("span", { class: "inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300" }, [
                  createTextVNode(" Ver programa "),
                  createVNode("span", { class: "w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-12 lg:space-y-32 lg:mt-32">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/formaciones/metodo-wingwave",
        onClick: scrollToTop,
        class: "training-card group flex flex-col bg-[#FDFBF9] border border-[#27252B]/5 rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#27252B]/5 block",
        "aria-label": "Saber más sobre la Formación Certificada en el método Wingwave"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-hidden aspect-[16/10] relative"${_scopeId}><div class="absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/images/formacion-certificada-metodo-wingwave-coaching-granada.jpg",
              alt: "Formación certificada en el método Wingwave®",
              width: "800",
              height: "500",
              format: "webp",
              loading: "lazy",
              class: "w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-8 md:p-10 flex flex-col flex-1 gap-5"${_scopeId}><div class="section-divider" aria-hidden="true"${_scopeId}></div><h3 class="font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug"${_scopeId}>Formación certificada en el método Wingwave®</h3><p class="text-base leading-[1.85] text-[#27252B]/75 flex-1"${_scopeId}> Una formación oficial para incorporar el método Wingwave® con rigor, práctica guiada y una comprensión amplia de la persona y del proceso terapéutico. </p><div class="text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1"${_scopeId}><span${_scopeId}>Garantía: <span class="font-normal text-[#27252B]/70"${_scopeId}>Sello ISO 29993</span></span></div><span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300"${_scopeId}> Ver programa <span class="w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300"${_scopeId}></span></span></div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-hidden aspect-[16/10] relative" }, [
                createVNode("div", { class: "absolute inset-0 bg-[#27252B]/0 group-hover:bg-[#27252B]/5 transition-colors duration-500 z-10" }),
                createVNode(_component_NuxtImg, {
                  src: "/images/formacion-certificada-metodo-wingwave-coaching-granada.jpg",
                  alt: "Formación certificada en el método Wingwave®",
                  width: "800",
                  height: "500",
                  format: "webp",
                  loading: "lazy",
                  class: "w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700"
                })
              ]),
              createVNode("div", { class: "p-8 md:p-10 flex flex-col flex-1 gap-5" }, [
                createVNode("div", {
                  class: "section-divider",
                  "aria-hidden": "true"
                }),
                createVNode("h3", { class: "font-serif italic text-[#27252B] text-2xl md:text-3xl leading-snug" }, "Formación certificada en el método Wingwave®"),
                createVNode("p", { class: "text-base leading-[1.85] text-[#27252B]/75 flex-1" }, " Una formación oficial para incorporar el método Wingwave® con rigor, práctica guiada y una comprensión amplia de la persona y del proceso terapéutico. "),
                createVNode("div", { class: "text-xs tracking-wider uppercase text-[#27252B]/50 font-light pt-2 border-t border-[#27252B]/5 flex flex-wrap gap-x-4 gap-y-1" }, [
                  createVNode("span", null, [
                    createTextVNode("Garantía: "),
                    createVNode("span", { class: "font-normal text-[#27252B]/70" }, "Sello ISO 29993")
                  ])
                ]),
                createVNode("span", { class: "inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#27252B] font-medium mt-2 group-hover:text-[#71B1A5] transition-colors duration-300" }, [
                  createTextVNode(" Ver programa "),
                  createVNode("span", { class: "w-4 group-hover:w-8 h-px bg-[#27252B] group-hover:bg-[#71B1A5] transition-all duration-300" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-20 lg:mt-32 max-w-3xl mx-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacto",
        onClick: scrollToTop,
        class: "training-card group relative flex flex-col items-center justify-center text-center bg-[#71B1A5] rounded-sm p-10 md:p-16 min-h-[380px] transition-all duration-500 hover:shadow-2xl hover:shadow-[#71B1A5]/20 overflow-hidden block",
        "aria-label": "Escríbenos para orientación formativa"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute -bottom-10 font-serif italic text-[18rem] text-[#FDFBF9]/5 leading-none select-none pointer-events-none z-0"${_scopeId}> &amp; </div><div class="relative z-10 space-y-6 max-w-xl flex flex-col items-center"${_scopeId}><div class="w-12 h-px bg-[#FDFBF9]/60"${_scopeId}></div><h3 class="font-serif italic text-[#FDFBF9] text-3xl md:text-4xl leading-tight"${_scopeId}> ¿Tienes dudas sobre qué formación es para ti? </h3><p class="text-base md:text-lg text-[#FDFBF9]/90 font-light leading-relaxed"${_scopeId}> Cuéntanos qué te interesa y te orientaremos sobre la propuesta que mejor se adapte a tu recorrido. </p></div><div class="relative z-10 pt-8"${_scopeId}><div class="btn-secondary inline-block !bg-white/95 !border-transparent hover:!bg-white text-[#27252B] hover:scale-105 shadow-xl transition-transform"${_scopeId}> Solicitar información </div></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute -bottom-10 font-serif italic text-[18rem] text-[#FDFBF9]/5 leading-none select-none pointer-events-none z-0" }, " & "),
              createVNode("div", { class: "relative z-10 space-y-6 max-w-xl flex flex-col items-center" }, [
                createVNode("div", { class: "w-12 h-px bg-[#FDFBF9]/60" }),
                createVNode("h3", { class: "font-serif italic text-[#FDFBF9] text-3xl md:text-4xl leading-tight" }, " ¿Tienes dudas sobre qué formación es para ti? "),
                createVNode("p", { class: "text-base md:text-lg text-[#FDFBF9]/90 font-light leading-relaxed" }, " Cuéntanos qué te interesa y te orientaremos sobre la propuesta que mejor se adapte a tu recorrido. ")
              ]),
              createVNode("div", { class: "relative z-10 pt-8" }, [
                createVNode("div", { class: "btn-secondary inline-block !bg-white/95 !border-transparent hover:!bg-white text-[#27252B] hover:scale-105 shadow-xl transition-transform" }, " Solicitar información ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="page-container py-20 md:py-32" aria-labelledby="metodologia-heading"><div class="grid md:grid-cols-2 gap-14 md:gap-20 items-center"><div class="relative order-2 md:order-1"><div class="absolute -top-4 -left-4 w-full h-full border border-[#71B1A5]/40 pointer-events-none z-0" aria-hidden="true"></div><div class="relative z-10 overflow-hidden aspect-[3/4]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/espacio-formacion-presencial-psicologia-la-seda-granada.jpg",
        alt: "Participantes en una formación experiencial de la Escuela La Seda.",
        width: "600",
        height: "800",
        format: "webp",
        loading: "lazy",
        class: "w-full h-full object-cover"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-[#27252B]/5 pointer-events-none" aria-hidden="true"></div></div><div class="absolute bottom-6 -right-5 bg-[#FDFBF9] border border-[#27252B]/10 px-5 py-3 z-20 hidden md:block" aria-hidden="true"><p class="text-xs tracking-[0.2em] uppercase text-[#71B1A5]">Formación Avanzada</p><p class="font-serif italic text-[#27252B] text-sm mt-0.5">La Seda · Granada</p></div></div><div class="order-1 md:order-2"><p class="section-label mb-4">Metodología</p><h2 id="metodologia-heading" class="section-title mb-8"> Cómo entendemos la formación </h2><p class="text-base md:text-lg text-[#27252B]/80 font-light leading-relaxed mb-12"> En la Escuela La Seda, aprender va más allá de adquirir conocimientos. La experiencia, la práctica supervisada y el trabajo personal se ponen en diálogo para construir una práctica profesional consciente y coherente. </p><ol class="space-y-10" aria-label="Valores del centro formativo"><li class="flex gap-6 items-start pb-8 border-b border-[#27252B]/8"><div class="shrink-0" aria-hidden="true"><span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">01</span></div><div class="pt-2 flex-1"><h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide"> Presencia </h3><p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70"> La presencia se cultiva. Nuestras formaciones invitan a reconocer la propia historia como parte del recorrido personal y profesional. </p></div></li><li class="flex gap-6 items-start pb-8 border-b border-[#27252B]/8"><div class="shrink-0" aria-hidden="true"><span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">02</span></div><div class="pt-2 flex-1"><h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide"> Vivencia </h3><p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70"> La teoría cobra sentido cuando puede vivirse. La práctica y la supervisión ayudan a convertir el conocimiento en un recurso real para el trabajo profesional. </p></div></li><li class="flex gap-6 items-start"><div class="shrink-0" aria-hidden="true"><span class="font-serif italic text-[#71B1A5] text-5xl md:text-6xl leading-none select-none">03</span></div><div class="pt-2 flex-1"><h3 class="text-[#27252B] font-medium text-base md:text-lg mb-2 tracking-wide"> Comunidad </h3><p class="text-base md:text-lg leading-[1.85] text-[#27252B]/70"> Los grupos reducidos crean un espacio de confianza donde compartir experiencias, sostener el aprendizaje y crecer junto a otras personas. </p></div></li></ol></div></div><div class="mt-16 md:mt-24 pt-12 border-t border-[#27252B]/10 flex justify-center w-full">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacto",
        onClick: scrollToTop,
        class: "group btn-primary !inline-flex",
        "aria-label": "Ir a contacto para solicitar información"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Solicitar información</span><div class="relative w-4 h-3 overflow-hidden flex items-center justify-center text-white pointer-events-none"${_scopeId}><svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform group-hover:translate-x-5 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg><svg class="w-3.5 h-3.5 transition-transform duration-500 ease-out transform -translate-x-5 group-hover:translate-x-0 absolute text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("span", null, "Solicitar información"),
              createVNode("div", { class: "relative w-4 h-3 overflow-hidden flex items-center justify-center text-white pointer-events-none" }, [
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
      _push(`</div></section><section class="bg-[#27252B]/[0.02] py-20 md:py-32 border-t border-[#27252B]/10"><div class="page-container"><div class="max-w-3xl mx-auto text-center space-y-4 mb-16"><p class="section-label">Personas que ya se han formado en la Escuela La Seda</p><h2 class="section-title">Lo que cuentan quienes ya lo han vivido</h2><p class="text-base md:text-lg text-[#27252B]/75 leading-relaxed font-light"> Cada promoción deja una huella diferente. Estas son algunas voces de quienes han formado parte de la Escuela La Seda y hoy llevan lo aprendido a su vida personal y profesional. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-[#FDFBF9] p-6 border border-[#27252B]/5 rounded-sm flex flex-col justify-between space-y-6"><p class="text-sm italic text-[#27252B]/80 leading-relaxed"> &quot;Una experiencia transformadora donde la vivencia y la práctica se integran con un respeto profundo.&quot; </p><a href="https://www.instagram.com/reel/DRUdz7njMSb/?utm_source=ig_web_copy_link&amp;igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" class="text-xs tracking-wider uppercase text-[#71B1A5] font-medium hover:underline inline-flex items-center gap-1"> Ver testimonio en Instagram → </a></div><div class="bg-[#FDFBF9] p-6 border border-[#27252B]/5 rounded-sm flex flex-col justify-between space-y-6"><p class="text-sm italic text-[#27252B]/80 leading-relaxed"> &quot;El enfoque humano y riguroso marca la diferencia para llevar lo aprendido a la consulta real.&quot; </p><a href="https://www.instagram.com/reel/DQwh6cNDIyo/?utm_source=ig_web_copy_link&amp;igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" class="text-xs tracking-wider uppercase text-[#71B1A5] font-medium hover:underline inline-flex items-center gap-1"> Ver testimonio en Instagram → </a></div><div class="bg-[#FDFBF9] p-6 border border-[#27252B]/5 rounded-sm flex flex-col justify-between space-y-6"><p class="text-sm italic text-[#27252B]/80 leading-relaxed"> &quot;El trabajo en grupo y el cuidado del espacio hacen que la formación vaya mucho más allá de lo teórico.&quot; </p><a href="https://www.instagram.com/reel/DQmu4dxjGr0/?utm_source=ig_web_copy_link&amp;igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" class="text-xs tracking-wider uppercase text-[#71B1A5] font-medium hover:underline inline-flex items-center gap-1"> Ver testimonio en Instagram → </a></div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/formaciones/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BnLzmXJo.mjs.map
