import * as server from '../entries/pages/text_add_list/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/text_add_list/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/text_add_list/+page.server.js";
export const imports = ["_app/immutable/nodes/4.68e1a371.js","_app/immutable/chunks/scheduler.ed73829c.js","_app/immutable/chunks/index.974ab56c.js"];
export const stylesheets = ["_app/immutable/assets/4.1d38c036.css"];
export const fonts = [];
