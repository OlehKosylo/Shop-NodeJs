const Joi = require('joi');

const {commonService} = require('../../../services');
const {idModelSchema} = require('../../../validators');
const {
    ErrorHandler,
    statusesErrors: {NOT_TITLE}
} = require('../../../errors');
const {
    statusesCode: {BAD_REQUEST},
} = require('../../../constants');


module.exports = async (req, res, next) => {
    const {id, type_of_goods} = req.body;

    const {error} = Joi.validate({id, type_of_goods}, idModelSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    const good = await commonService.getGoodById(id , type_of_goods);

    if (!good) {
        return next(new ErrorHandler(NOT_TITLE.message, BAD_REQUEST, NOT_TITLE.code))
    }

    next();
};
