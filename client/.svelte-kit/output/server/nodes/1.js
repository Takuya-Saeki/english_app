

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f372760b.js","_app/immutable/chunks/scheduler.81fe3219.js","_app/immutable/chunks/index.69393c5a.js","_app/immutable/chunks/stores.edf5b013.js","_app/immutable/chunks/singletons.ae89dc16.js"];
export const stylesheets = [];
export const fonts = [];
