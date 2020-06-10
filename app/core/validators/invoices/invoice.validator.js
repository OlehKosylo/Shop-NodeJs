const {appSettings} = require('../../constants');
const Joi = require(appSettings.JOI);

module.exports = Joi.object().keys({
    user_id:Joi.number().integer().required(),
    good_type: Joi.string().trim().min(1).required(),
    good_id:Joi.number().integer().required(),
    count:Joi.number().integer().required(),
    price:Joi.number().integer().required(),
    where_send: Joi.string().trim().min(1).required(),
    stripeTokenId: Joi.string().trim().min(1).required()
});

