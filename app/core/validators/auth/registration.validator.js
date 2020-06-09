const Joi = require('joi');
const {regex: {EMAIL}} = require('../../constants');

module.exports = Joi.object().keys({
    email: Joi.string().regex(RegExp(EMAIL)).required(),
    password: Joi.string().trim().min(8).required(),
    name: Joi.string().trim().min(1).required(),
    surname: Joi.string().trim().min(1).required(),
    age: Joi.number().integer().min(16).max(120).required(),
    passwordForStatus: Joi.string().trim().min(8).required()
});
