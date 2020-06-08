const Joi = require('joi');

const {userValidatorSchema} = require('../../validators');
const {ErrorHandler} = require('../../errors');
const {statusesCode: {BAD_REQUEST}} = require('../../constants');

module.exports = (req, res, next) => {

    const userModel = req.body;

    const {error} = Joi.validate(userModel, userValidatorSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    next();
};
