/**
 * Created by chasehaddleton on 2017-09-15.
 */

const mongoose = require('mongoose');
const uuid = require('uuid/v4');
let transactionSchema = new mongoose.Schema({
	amount: Number,
	date: {
		type: Date,
		default: Date.now()
	}
});

let accountSchema = new mongoose.Schema({
	accountId: {
		type: String,
		default: uuid()
	},
	balance: {
		type: Number,
		default: 0,
		set: setBalance
	},
	transactions: [transactionSchema],
	currency: {
		type: String,
		enum: ['CAD', 'USD'],
		default: "CAD"
	}
});

function setBalance(val) {
	return parseFloat(val.toFixed(2));
}

module.exports.model = mongoose.model("Account", accountSchema);
module.exports.schema = accountSchema;