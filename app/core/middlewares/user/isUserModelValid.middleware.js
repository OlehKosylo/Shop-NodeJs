const {appSettings} = require('../../constants');
const Joi = require(appSettings.JOI);

const {ErrorHandler} = require('../../errors');
const {statusesCode: {BAD_REQUEST}} = require('../../constants');
const {userValidatorSchema} = require('../../validators');

module.exports = (req, res, next) => {

    const userModel = req.body;

    const {error} = Joi.validate(userModel, userValidatorSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    next();
};
