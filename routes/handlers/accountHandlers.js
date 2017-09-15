/**
 * Created by chasehaddleton on 2017-09-15.
 */

const Account = require('../models/Account').model;
const uuid = require('uuid/v4');

function newAccount(request, reply) {
	let acc = new Account({
		accountId: uuid()
	});

	acc.save(err => {
		if (err) {
			console.error(err);

			return reply({
				status: 500,
				error: "Error saving"
			})
		}

		reply({
			successful: true,
			accountId: acc.accountId
		})
	});
}

function getAccount(request, reply) {
	Account.findOne({"accountId": request.params.id})
		.lean()
		.exec()
		.then(acc => {
			if (acc) {
				reply(acc);
			} else {
				// Not found
				reply({
					status: 404,
					error: "Account not found"
				});
			}
		});
}

function newTransaction(request, reply) {
	Account.findOne({"accountId": request.params.id})
		.exec()
		.then(acc => {
			if (acc) {
				acc.transaction.push({
					value: request.payload.value
				});

				acc.save(err => {
					if (err) {
						return reply({
							status: 500,
							error: "Error saving"
						})
					}

					reply({
						successful: true
					})
				})
			} else {
				// Not found
				reply({
					status: 404,
					error: "Account not found"
				});
			}
		});
}

module.exports = {
	newAccount,
	newTransaction,
	getAccount
};