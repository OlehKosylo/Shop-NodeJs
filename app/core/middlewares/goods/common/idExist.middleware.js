const {appSettings} = require('../../../constants');
const Joi = require(appSettings.JOI);

const {commonService} = require('../../../services');
const {ErrorHandler, statusesErrors: {GOOD_NOT_FOUND}} = require('../../../errors');
const {idModelSchema} = require('../../../validators');
const {statusesCode: {BAD_REQUEST},} = require('../../../constants');


module.exports = async (req, res, next) => {
    let id;
    let type_of_goods;

    if (req.body.id) {
        id = req.body.id;
        type_of_goods = req.body.type_of_goods;
    } else {
        id = req.params.id;
        type_of_goods = req.query.type_of_goods;
    }

    const {error} = Joi.validate({id, type_of_goods}, idModelSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    const good = await commonService.getGoodById(id, type_of_goods);

    if (!good) {
        return next(new ErrorHandler(GOOD_NOT_FOUND.message, BAD_REQUEST, GOOD_NOT_FOUND.code))
    }

    req.good = good.dataValues;

    next();
};
