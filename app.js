/**
 * Created by chasehaddleton on 2017-09-15.
 */

const Hapi = require('hapi');
const glob = require('glob');
const path = require('path');

const server = new Hapi.Server({
	debug: {
		request: ['error']
	}
});

server.connection({
	port: process.env.PORT || 8080,
	routes: {
		cors: true
	}
});

glob.sync('route/*.js', {
	root: __dirname
}).forEach(file => {
	const route = require(path.join(__dirname, file));
	if (route.constructor === Array) {
		route.forEach(r => {
			server.route(r);
		});
	} else {
		server.route(route);
	}
});

server.start(err => {
	if (err) {
		console.error(err);
		throw err;
	}
});

