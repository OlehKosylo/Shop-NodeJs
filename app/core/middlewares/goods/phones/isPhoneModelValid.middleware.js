const Joi = require('joi');

const {phoneValidatorSchema} = require('../../../validators');
const {ErrorHandler} = require('../../../errors');
const {statusesCode: {BAD_REQUEST}} = require('../../../constants');

module.exports = (req, res, next) => {

    const phoneModel = req.body;
    const {type_of_goods} = req.query;

    const {error} = Joi.validate({...phoneModel,type_of_goods}, phoneValidatorSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    next();
};
