const Joi = require('joi');

module.exports = Joi.object().keys({
    id: Joi.number().integer().optional(),
    title: Joi.string().trim().min(1).required(),
    description: Joi.string().trim().min(1).required(),
    price: Joi.number().integer().required(),
    imageURL:Joi.string().trim().min(1).required(),
    screen_diagonal: Joi.number().integer().required(),
    camera_mp: Joi.number().integer().required(),
    number_of_cores: Joi.number().integer().required(),
    inner_memory: Joi.number().integer().required(),
    type_of_goods: Joi.string().trim().required(),
});
