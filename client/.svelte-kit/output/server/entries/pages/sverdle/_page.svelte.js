import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let input_url = "";
  let result = "";
  (async () => {
    const res = await fetch(`/api`);
    return await res.json();
  })();
  return `${$$result.head += `<!-- HEAD_svelte-6rdflx_START -->${$$result.title = `<title>サンプル：大文字に変換</title>`, ""}<!-- HEAD_svelte-6rdflx_END -->`, ""} <input type="text" placeholder="英訳したいページのURLを入れてね" class="serch-text"${add_attribute("value", input_url, 0)}> <button data-svelte-h="svelte-60j7s3">URLを英訳</button> <div><p>${escape(result)}</p></div>`;
});
export {
  Page as default
};
