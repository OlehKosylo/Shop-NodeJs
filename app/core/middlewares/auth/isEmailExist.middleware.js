const {userService} = require('../../services');
const {
    ErrorHandler,
    statusesErrors: {WRONG_EMAIL}
} = require('../../errors');
const {
    statusesCode: {NOT_FOUND},
} = require('../../constants');

module.exports = async (req, res, next) => {
    const email = req.body.email;

    if (email.isEmpty) {
        return next(new ErrorHandler(WRONG_EMAIL.message, NOT_FOUND, WRONG_EMAIL.code))
    }

    const user = await userService.getUserByEmail(email);

    if (!user) {
        return next(new ErrorHandler(WRONG_EMAIL.message, NOT_FOUND, WRONG_EMAIL.code))
    }

    req.user = user;

    next();
};
