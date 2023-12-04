export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.1e4d3411.js","app":"_app/immutable/entry/app.a08cc566.js","imports":["_app/immutable/entry/start.1e4d3411.js","_app/immutable/chunks/scheduler.81fe3219.js","_app/immutable/chunks/singletons.ae89dc16.js","_app/immutable/entry/app.a08cc566.js","_app/immutable/chunks/scheduler.81fe3219.js","_app/immutable/chunks/index.69393c5a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
