const Joi = require('joi');

const {notebookValidatorSchema} = require('../../../validators');
const {ErrorHandler} = require('../../../errors');
const {statusesCode: {BAD_REQUEST}} = require('../../../constants');

module.exports = (req, res, next) => {

    const notebookModel = req.body;
    const {type_of_goods} = req.query;

    const {error} = Joi.validate({...notebookModel,type_of_goods}, notebookValidatorSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    next();
};
