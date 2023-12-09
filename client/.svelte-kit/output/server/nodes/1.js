

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2bff8dd6.js","_app/immutable/chunks/scheduler.ed73829c.js","_app/immutable/chunks/index.974ab56c.js","_app/immutable/chunks/stores.701c3cce.js","_app/immutable/chunks/singletons.58cab2c6.js"];
export const stylesheets = [];
export const fonts = [];
