const Joi = require('joi');

const {notebookValidatorSchema} = require('../../../validators');
const {ErrorHandler} = require('../../../errors');
const {statusesCode: {BAD_REQUEST}} = require('../../../constants');

module.exports = (req, res, next) => {

    const notebookModel = req.body;

    const {error} = Joi.validate(notebookModel, notebookValidatorSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    next();
};
