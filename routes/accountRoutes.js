/**
 * Created by chasehaddleton on 2017-09-15.
 */

const accountHandlers = require('./handlers/accountHandlers');

module.exports = [
	{
		method: 'GET',
		path: '/account/{id}',
		handler: accountHandlers.getAccount
	},
	{
		method: 'POST',
		path: '/account',
		handler: accountHandlers.newAccount
	},
	{
		method: 'PUT',
		path: '/account/{id}/transaction',
		handler: accountHandlers.newTransaction
	}
];

