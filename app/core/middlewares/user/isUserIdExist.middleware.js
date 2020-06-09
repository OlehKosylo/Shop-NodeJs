const {ErrorHandler, statusesErrors: {USER_NOT_FOUND}} = require('../../errors');
const {statusesCode: {NOT_FOUND, BAD_REQUEST},} = require('../../constants');
const {userService} = require('../../services');

module.exports = async (req, res, next) => {
    const userId = req.query.userId;

    if (userId.isEmpty) {
        return next(new ErrorHandler(USER_NOT_FOUND.message, NOT_FOUND, USER_NOT_FOUND.code))
    }

    const user = await userService.getUserById(userId);

    if (!user) {
        return next(new ErrorHandler(USER_NOT_FOUND.message, BAD_REQUEST, USER_NOT_FOUND.code))
    }

    req.user = {
        id: user.id,
        email: user.email,
        age: user.age,
        name: user.name,
        surname: user.surname
    };

    next();
};
