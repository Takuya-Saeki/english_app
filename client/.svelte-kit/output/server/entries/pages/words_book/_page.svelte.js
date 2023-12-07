import { c as create_ssr_component, f as each, e as escape } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".word.svelte-1im47yl{cursor:pointer;margin:5px;padding:5px;border:1px solid #ccc;display:inline-block}.selected.svelte-1im47yl{background-color:lightblue}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let words = ["apple", "banana", "orange", "grape", "melon"];
  let selectedWords = [];
  $$result.css.add(css);
  return `<div><h2 data-svelte-h="svelte-14h1qwm">Available Words:</h2> ${each(words, (word) => {
    return `<span class="word svelte-1im47yl">${escape(word)}</span>`;
  })}</div> <div><h2 data-svelte-h="svelte-k87frs">Selected Words:</h2> ${each(selectedWords, (word) => {
    return `<span class="word selected svelte-1im47yl">${escape(word)}</span>`;
  })} </div>`;
});
export {
  Page as default
};
