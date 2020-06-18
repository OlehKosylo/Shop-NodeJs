const {authHelper: {checkHashPassword}} = require('../../../helpers');
const {
    ErrorHandler,
    statusesErrors: {USER_NOT_FOUND}
} = require('../../../errors');
const {
    statusesCode: {NOT_FOUND},
} = require('../../../constants');

module.exports = async (req, res, next) => {
    const user = req.user.dataValues;

    let password;
    if (req.body.oldPassword) {
        password = req.body.oldPassword;
    } else {
        password = req.body.password;
    }

    const isPasswordsEquals = await checkHashPassword(user.password, password);

    if (!isPasswordsEquals) {
        return next (new ErrorHandler(USER_NOT_FOUND.message, NOT_FOUND, USER_NOT_FOUND.code));
    }

    req.user = user;

    next();
};
