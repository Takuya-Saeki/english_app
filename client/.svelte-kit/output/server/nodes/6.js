import * as server from '../entries/pages/words_book/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/words_book/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/words_book/+page.server.js";
export const imports = ["_app/immutable/nodes/6.a0ea8a72.js","_app/immutable/chunks/scheduler.ed73829c.js","_app/immutable/chunks/index.974ab56c.js"];
export const stylesheets = ["_app/immutable/assets/6.a4f7f151.css"];
export const fonts = [];
