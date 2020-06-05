const {authService} = require('../../../services');
const {authHelper: {jwtRefreshTokenVerificator}} = require('../../../helpers');
const {
    ErrorHandler,
    statusesErrors: {NOT_VALID_TOKEN, NOT_TOKEN}
} = require('../../../errors');
const {
    statusesCode: {UNAUTHORIZED, BAD_REQUEST},
    jwtSecretWords: {AUTHORIZATION},
} = require('../../../constants');

module.exports = async (req, res, next) => {
    try {

        const token = req.get(AUTHORIZATION);

        if (!token) {
            return next(new ErrorHandler(NOT_TOKEN.message, BAD_REQUEST, NOT_TOKEN.code));
        }

        await jwtRefreshTokenVerificator(token);

        const tokenFromDB = await authService.getTokensByParams({refresh_token: token});

        if (!tokenFromDB) {
            return next(new ErrorHandler(NOT_VALID_TOKEN.message, UNAUTHORIZED, NOT_VALID_TOKEN.code));
        }

        req.user_id = tokenFromDB.userId;

        next();
    } catch (e) {
        next(e)
    }
};
