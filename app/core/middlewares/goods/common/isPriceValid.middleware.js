const Joi = require('joi');

const {ErrorHandler} = require('../../../errors');
const {priceValidatorSchema} = require('../../../validators');
const {statusesCode: {BAD_REQUEST},} = require('../../../constants');


module.exports = async (req, res, next) => {

    const {error} = Joi.validate(req.query.params,priceValidatorSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    next();
};
