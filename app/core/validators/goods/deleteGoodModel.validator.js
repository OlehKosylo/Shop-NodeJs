const Joi = require('joi');

module.exports = Joi.object().keys({
    title: Joi.string().trim().min(1).required(),
    type_of_goods: Joi.string().trim().required()
});
