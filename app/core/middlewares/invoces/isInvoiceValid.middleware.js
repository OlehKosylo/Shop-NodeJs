const Joi = require('joi');

const {ErrorHandler} = require('../../errors');
const {statusesCode: {BAD_REQUEST}} = require('../../constants');
const {invoiceValidorSchema} = require('../../validators');


module.exports = (req, res, next) => {

    const invoice = req.body;

    const {error} = Joi.validate(invoice, invoiceValidorSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    next();
};
