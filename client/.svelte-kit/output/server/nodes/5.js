import * as server from '../entries/pages/translate/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/translate/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/translate/+page.server.js";
export const imports = ["_app/immutable/nodes/5.c07b133f.js","_app/immutable/chunks/scheduler.ed73829c.js","_app/immutable/chunks/index.974ab56c.js"];
export const stylesheets = [];
export const fonts = [];
