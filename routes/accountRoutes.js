/**
 * Created by chasehaddleton on 2017-09-15.
 */

const accountHandlers = require('./handlers/accountHandlers');
const createTransactionSchema = require('./schemas/transactionSchema');

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
		handler: accountHandlers.newTransaction,
		config: {
			validate: {
				payload: createTransactionSchema
			}
		}
	}
];

