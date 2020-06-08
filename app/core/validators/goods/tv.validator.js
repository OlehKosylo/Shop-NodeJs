const Joi = require('joi');

module.exports = Joi.object().keys({
    id: Joi.number().integer(),
    title: Joi.string().trim().min(1).required(),
    description: Joi.string().trim().min(1).required(),
    price: Joi.number().integer().required(),
    imageURL:Joi.string().trim().min(1).required(),
    screen_diagonal: Joi.number().integer().required(),
    smart_tv_support: Joi.number().integer().required(),
    smart_platform: Joi.string().trim().required(),
    hdr: Joi.number().integer().required(),
    type_of_goods: Joi.string().trim().required(),
});
