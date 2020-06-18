const {appSettings} = require('../../constants');
const Joi = require(appSettings.JOI);

module.exports = Joi.object().keys({
    id:Joi.number().integer().required(),
    password: Joi.string().trim().min(1).required(),
    oldPassword: Joi.string().trim().min(1).required()
});
