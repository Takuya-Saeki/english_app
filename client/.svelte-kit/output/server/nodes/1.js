

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5b59b07d.js","_app/immutable/chunks/scheduler.ed73829c.js","_app/immutable/chunks/index.974ab56c.js","_app/immutable/chunks/stores.bcf4cbc3.js","_app/immutable/chunks/singletons.e36539c7.js"];
export const stylesheets = [];
export const fonts = [];
