const Joi = require('joi');

const {ErrorHandler} = require('../../../errors');
const {statusesCode: {BAD_REQUEST}} = require('../../../constants');
const {TVValidatorSchema} = require('../../../validators');

module.exports = (req, res, next) => {

    const TVModel = req.body;

    const {error} = Joi.validate(TVModel, TVValidatorSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    next();
};
