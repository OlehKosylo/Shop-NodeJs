const {appSettings} = require('../../../constants');
const Joi = require(appSettings.JOI);

const {ErrorHandler} = require('../../../errors');
const {phoneValidatorSchema} = require('../../../validators');
const {statusesCode: {BAD_REQUEST}} = require('../../../constants');

module.exports = (req, res, next) => {

    const phoneModel = req.body;

    const {error} = Joi.validate(phoneModel, phoneValidatorSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    next();
};
