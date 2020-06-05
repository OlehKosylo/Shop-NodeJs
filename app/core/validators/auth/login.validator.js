const Joi = require('joi');

const {regex: {EMAIL}} = require('../../constants');

module.exports = Joi.object().keys({
    email: Joi.string().regex(RegExp(EMAIL)).required(),
    password: Joi.string().trim().min(8).required(),
});
