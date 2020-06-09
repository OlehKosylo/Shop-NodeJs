const {
    ErrorHandler,
    statusesErrors: {WRONG_EMAIL, EMAIL_ALREADY_EXIST}
} = require('../../../errors');
const {
    statusesCode: {NOT_FOUND, BAD_REQUEST},
} = require('../../../constants');
const {userService} = require('../../../services');

module.exports = async (req, res, next) => {
    const email = req.body.email;

    if (email.isEmpty) {
        return next(new ErrorHandler(WRONG_EMAIL.message, NOT_FOUND, WRONG_EMAIL.code))
    }

    const user = await userService.getUserByEmail(email);

    if (user) {
        return next(new ErrorHandler(EMAIL_ALREADY_EXIST.message, BAD_REQUEST, EMAIL_ALREADY_EXIST.code))
    }

    next();
};
