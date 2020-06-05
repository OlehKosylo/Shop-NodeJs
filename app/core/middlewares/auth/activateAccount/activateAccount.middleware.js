const {userService} = require('../../../services');
const {
    ErrorHandler,
    statusesErrors: {NOT_TOKEN, USER_NOT_FOUND}
} = require('../../../errors');
const {
    statusesCode: {BAD_REQUEST, NOT_FOUND},
} = require('../../../constants');

module.exports = async (req, res, next) => {
    const token = req.params.token;

    if (token.isEmpty) {
        return next(new ErrorHandler(NOT_TOKEN.message, BAD_REQUEST, NOT_TOKEN.code))
    }

    const user_id = await userService.getUserByToken(token);

    if (!user_id) {
        return next(new ErrorHandler(USER_NOT_FOUND.message, NOT_FOUND, USER_NOT_FOUND.code))
    }

    req.user_id = user_id.dataValues.user_id;

    next();

};
