import { c as create_ssr_component, i as is_promise, n as noop, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ans = (async () => {
    const res = await fetch(`/api`);
    return await res.json();
  })();
  return `<h1 data-svelte-h="svelte-yyjjjs">Welcome to SvelteKit</h1> <p data-svelte-h="svelte-1vc1ga9">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> <hr> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p data-svelte-h="svelte-1mgc8zq">...loading</p> `;
    }
    return function(data) {
      return ` <h3>${escape(data.message)}</h3> <h3>${escape(data.status)}</h3> `;
    }(__value);
  }(ans)} ${$$result.head += `<!-- HEAD_svelte-6rdflx_START -->${$$result.title = `<title>サンプル：大文字に変換</title>`, ""}<!-- HEAD_svelte-6rdflx_END -->`, ""}`;
});
export {
  Page as default
};
