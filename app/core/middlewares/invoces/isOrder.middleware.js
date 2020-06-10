const {appSettings} = require('../../constants');
const Joi = require(appSettings.JOI);

const {ErrorHandler,  statusesErrors: {ORDER_NOT_FOUND}} = require('../../errors');
const {statusesCode: {NOT_FOUND, BAD_REQUEST}} = require('../../constants');
const {idOrderSchema} = require('../../validators');
const {invoiceService: {getOrderById}} = require('../../services');


module.exports = async (req, res, next) => {
    const {id} = req.body;

    const {error} = Joi.validate(req.body, idOrderSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    const order = await getOrderById(id);

    if(!order) {
        return next(new ErrorHandler(ORDER_NOT_FOUND.message, NOT_FOUND, ORDER_NOT_FOUND.code))
    }

    req.order = order.dataValues;

    next();
};
