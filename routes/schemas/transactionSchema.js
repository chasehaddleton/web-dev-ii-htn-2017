/**
 * Created by chasehaddleton on 2017-09-15.
 */

const Joi = require('joi');

const createTransaction = Joi.object({
	value: Joi.number().required()
});

module.exports = createTransaction;