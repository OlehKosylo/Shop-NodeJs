const {appSettings} = require('../../constants');
const Joi = require(appSettings.JOI);

module.exports = Joi.object().keys({
    id: Joi.number().integer().required(),
    type_of_goods: Joi.string().trim().required(),
});
