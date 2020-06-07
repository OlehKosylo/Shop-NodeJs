const Joi = require('joi');

const {commonService} = require('../../../services');
const {deleteGoodModelSchema} = require('../../../validators');
const {
    ErrorHandler,
    statusesErrors: {NOT_TITLE}
} = require('../../../errors');
const {
    statusesCode: {BAD_REQUEST},
} = require('../../../constants');


module.exports = async (req, res, next) => {
    const {title, type_of_goods} = req.query;

    const {error} = Joi.validate({title, type_of_goods}, deleteGoodModelSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    const good = await commonService.getGoodByTitle(title, type_of_goods);

    if (!good) {
        return next(new ErrorHandler(NOT_TITLE.message, BAD_REQUEST, NOT_TITLE.code))
    }

    next();
};
