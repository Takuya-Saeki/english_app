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
		client: {"start":"_app/immutable/entry/start.fee1b617.js","app":"_app/immutable/entry/app.01378489.js","imports":["_app/immutable/entry/start.fee1b617.js","_app/immutable/chunks/scheduler.ed73829c.js","_app/immutable/chunks/singletons.58cab2c6.js","_app/immutable/entry/app.01378489.js","_app/immutable/chunks/scheduler.ed73829c.js","_app/immutable/chunks/index.974ab56c.js"],"stylesheets":[],"fonts":[]},
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
