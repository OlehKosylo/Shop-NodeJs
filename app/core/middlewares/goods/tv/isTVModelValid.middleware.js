const Joi = require('joi');

const {TVValidatorSchema} = require('../../../validators');
const {ErrorHandler} = require('../../../errors');
const {statusesCode: {BAD_REQUEST}} = require('../../../constants');

module.exports = (req, res, next) => {

    const TVModel = req.body;
    const {type_of_goods} = req.query;

    const {error} = Joi.validate({...TVModel,type_of_goods}, TVValidatorSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    next();
};
