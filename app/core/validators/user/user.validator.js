const {appSettings} = require('../../constants');
const Joi = require(appSettings.JOI);

module.exports = Joi.object().keys({
    id:Joi.number().integer().required(),
    name: Joi.string().trim().min(1).required(),
    surname: Joi.string().trim().min(1).required(),
    age: Joi.number().integer().min(16).max(120).required(),
});
