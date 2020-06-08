const Joi = require('joi');

module.exports = Joi.object().keys({
    id: Joi.number().integer().optional(),
    title: Joi.string().trim().min(1).required(),
    description: Joi.string().trim().min(1).required(),
    price: Joi.number().integer().required(),
    imageURL:Joi.string().trim().min(1).required(),
    screen_diagonal: Joi.number().integer().required(),
    processor: Joi.string().trim().required(),
    ram: Joi.number().integer().required(),
    storage_capacity: Joi.number().integer().required(),
    graphics_card: Joi.string().trim().required(),
    type_of_goods: Joi.string().trim().required(),
});
