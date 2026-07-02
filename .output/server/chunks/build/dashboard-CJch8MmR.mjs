import { defineComponent, ref, computed, isRef, unref, useModel, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_0$2 } from './nuxt-link-Bwq3qhg5.mjs';
import { a as useRoute, t as tables } from './server.mjs';
import { useSpacetimeDB, useTable } from 'spacetimedb/vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'vue-router';
import '@iconify/vue';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwindcss/colors';
import 'spacetimedb';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DashboardTopbar",
  __ssrInlineRender: true,
  props: {
    "modelValue": { default: "" },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const search = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex h-14 shrink-0 items-center border-b border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-gray-950" }, _attrs))}><input${ssrRenderAttr("value", search.value)} type="search" placeholder="Search documents…" class="h-8 w-64 rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-900 placeholder-gray-400 focus:border-mint-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/DashboardTopbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$3, { __name: "DashboardTopbar" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DashboardDocCard",
  __ssrInlineRender: true,
  props: {
    doc: {}
  },
  setup(__props) {
    const props = __props;
    const relativeTime = computed(() => {
      const ms = Number(props.doc.updatedAt.microsSinceUnixEpoch / 1000n);
      const diff = Date.now() - ms;
      const mins = Math.floor(diff / 6e4);
      if (mins < 1) return "just now";
      if (mins < 60) return `${mins}m ago`;
      const hrs = Math.floor(mins / 60);
      if (hrs < 24) return `${hrs}h ago`;
      return `${Math.floor(hrs / 24)}d ago`;
    });
    const containerRef = ref(null);
    const previewHtml = ref(null);
    const scale = ref(0.25);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/doc/${__props.doc.id}`,
        class: "group flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-sm transition-all hover:border-mint-500/60 hover:shadow-md dark:border-gray-700 dark:hover:border-mint-500/40"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-hidden bg-white" style="${ssrRenderStyle({ "aspect-ratio": "1 / 1.4142" })}"${_scopeId}><div class="pointer-events-none absolute left-0 top-0 origin-top-left select-none" style="${ssrRenderStyle({ width: "794px", transform: `scale(${unref(scale)})` })}"${_scopeId}>`);
            if (unref(previewHtml)) {
              _push2(`<div class="doc-content doc-card-preview-content"${_scopeId}>${unref(previewHtml) ?? ""}</div>`);
            } else {
              _push2(`<div class="doc-card-preview-skeleton"${_scopeId}>`);
              if (__props.doc.title) {
                _push2(`<div class="doc-card-preview-skeleton-title"${_scopeId}>${ssrInterpolate(__props.doc.title)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="doc-card-preview-skeleton-lines"${_scopeId}><div${_scopeId}></div><div style="${ssrRenderStyle({ "width": "78%" })}"${_scopeId}></div><div${_scopeId}></div><div style="${ssrRenderStyle({ "width": "62%" })}"${_scopeId}></div><div${_scopeId}></div><div style="${ssrRenderStyle({ "width": "88%" })}"${_scopeId}></div><div${_scopeId}></div><div style="${ssrRenderStyle({ "width": "71%" })}"${_scopeId}></div></div></div>`);
            }
            _push2(`</div></div><div class="flex flex-col gap-0.5 border-t border-gray-100 bg-white px-3 py-2.5 dark:border-gray-800 dark:bg-gray-900"${_scopeId}><span class="line-clamp-1 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(__props.doc.title || "Untitled")}</span><span class="text-xs text-gray-400"${_scopeId}>${ssrInterpolate(unref(relativeTime))}</span></div>`);
          } else {
            return [
              createVNode("div", {
                ref_key: "containerRef",
                ref: containerRef,
                class: "relative overflow-hidden bg-white",
                style: { "aspect-ratio": "1 / 1.4142" }
              }, [
                createVNode("div", {
                  class: "pointer-events-none absolute left-0 top-0 origin-top-left select-none",
                  style: { width: "794px", transform: `scale(${unref(scale)})` }
                }, [
                  unref(previewHtml) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "doc-content doc-card-preview-content",
                    innerHTML: unref(previewHtml)
                  }, null, 8, ["innerHTML"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "doc-card-preview-skeleton"
                  }, [
                    __props.doc.title ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "doc-card-preview-skeleton-title"
                    }, toDisplayString(__props.doc.title), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "doc-card-preview-skeleton-lines" }, [
                      createVNode("div"),
                      createVNode("div", { style: { "width": "78%" } }),
                      createVNode("div"),
                      createVNode("div", { style: { "width": "62%" } }),
                      createVNode("div"),
                      createVNode("div", { style: { "width": "88%" } }),
                      createVNode("div"),
                      createVNode("div", { style: { "width": "71%" } })
                    ])
                  ]))
                ], 4)
              ], 512),
              createVNode("div", { class: "flex flex-col gap-0.5 border-t border-gray-100 bg-white px-3 py-2.5 dark:border-gray-800 dark:bg-gray-900" }, [
                createVNode("span", { class: "line-clamp-1 text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(__props.doc.title || "Untitled"), 1),
                createVNode("span", { class: "text-xs text-gray-400" }, toDisplayString(unref(relativeTime)), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/DashboardDocCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "DashboardDocCard" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DashboardDocGrid",
  __ssrInlineRender: true,
  props: {
    docs: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardDocCard = __nuxt_component_0;
      if (__props.docs.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, _attrs))}><!--[-->`);
        ssrRenderList(__props.docs, (doc) => {
          _push(ssrRenderComponent(_component_DashboardDocCard, {
            key: doc.id,
            doc
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-48 flex-col items-center justify-center gap-2 text-center" }, _attrs))}><p class="text-sm text-gray-500">No documents yet.</p><p class="text-xs text-gray-400">Create one to get started.</p></div>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/DashboardDocGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "DashboardDocGrid" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const stdb = useSpacetimeDB();
    const [docs, docsReady] = useTable(tables.document);
    const search = ref("");
    const filter = computed(() => route.query.filter);
    const heading = computed(() => {
      if (filter.value === "pinned") return "Pinned";
      if (filter.value === "shared") return "Shared with me";
      if (filter.value === "trash") return "Trash";
      return "My documents";
    });
    const displayed = computed(() => {
      if (!docsReady.value || !stdb.identity) return [];
      const myId = stdb.identity.toHexString();
      let result = docs.value.filter((d) => d.ownerId.toHexString() === myId);
      if (filter.value === "pinned") result = result.filter((d) => d.isPinned);
      else if (filter.value === "shared") result = result.filter((d) => d.linkShareEnabled);
      const q = search.value.trim().toLowerCase();
      return q ? result.filter((d) => d.title.toLowerCase().includes(q)) : result;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardTopbar = __nuxt_component_0$1;
      const _component_DashboardDocGrid = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_DashboardTopbar, {
        modelValue: unref(search),
        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null
      }, null, _parent));
      _push(`<div class="flex-1 overflow-y-auto p-6"><h1 class="mb-6 text-xl font-semibold text-gray-900 dark:text-white">${ssrInterpolate(unref(heading))}</h1>`);
      _push(ssrRenderComponent(_component_DashboardDocGrid, { docs: unref(displayed) }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-CJch8MmR.mjs.map
