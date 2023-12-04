import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/3.6ec7fedf.js","_app/immutable/chunks/scheduler.81fe3219.js","_app/immutable/chunks/index.69393c5a.js"];
export const stylesheets = [];
export const fonts = [];
