/**
 * Created by chasehaddleton on 2017-09-15.
 */

const petHandlers = require('./handlers/petHandlers');

module.exports = [
	{
		method: 'POST',
		path: '/pet',
		handler: petHandlers.newPet
	},
	{
		method: 'PUT',
		path: '/pet',
		handler: (request, reply) => {
			// do something
		}
	},
	{
		method: 'GET',
		path: '/pet/findByStatus',
		handler: (request, reply) => {
			// do something
		}
	},
	{
		method: 'GET',
		path: '/pet/{id}',
		handler: (request, reply) => {
			// do something
		}
	},
	{
		method: 'POST',
		path: '/pet/{id}',
		handler: (request, reply) => {
			// do something
		}
	},
	{
		method: 'DELETE',
		path: '/pet/{id}',
		handler: (request, reply) => {
			// do something
		}
	}
];

