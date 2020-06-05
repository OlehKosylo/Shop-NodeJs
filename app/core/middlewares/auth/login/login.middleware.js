const Joi = require('joi');
const {loginValidatorSchema} = require('../../../validators');
const {userService} = require('../../../services');
const {authHelper: {checkHashPassword}} = require('../../../helpers');
const {
    ErrorHandler,
    statusesErrors: {USER_NOT_FOUND}
} = require('../../../errors');
const {
    statusesCode: {NOT_FOUND, BAD_REQUEST},
} = require('../../../constants');

module.exports = async (req, res, next) => {
    const {error} = Joi.validate(req.body, loginValidatorSchema);

    if (error) {
        return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, 4002))
    }

    const email = req.body.email;
    const password = req.body.password;

    if (email.isEmpty) {
        return next(new ErrorHandler(USER_NOT_FOUND.message, NOT_FOUND, USER_NOT_FOUND.code))
    }

    const user = await userService.getUserByEmail(email);

    if (!user) {
        return next(new ErrorHandler(USER_NOT_FOUND.message, NOT_FOUND, USER_NOT_FOUND.code))
    }


    await checkHashPassword(user.password, password);

    req.user = user;

    next();
};
