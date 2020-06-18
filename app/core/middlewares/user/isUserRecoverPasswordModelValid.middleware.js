const {appSettings} = require('../../constants');
const Joi = require(appSettings.JOI);

const {ErrorHandler} = require('../../errors');
const {statusesCode: { BAD_REQUEST}} = require('../../constants');
const {userRecoverPassword} = require('../../validators');


module.exports = async (req, res, next) => {
    const passwordsModel = req.body;

    const {error} = Joi.validate(passwordsModel, userRecoverPassword);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    next();
};
