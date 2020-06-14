const {authService} = require('../../../services');
const {authHelper: {jwtRefreshTokenVerificator}} = require('../../../helpers');
const {
    ErrorHandler,
    statusesErrors: {NOT_VALID_REFRESH_TOKEN, NOT_TOKEN}
} = require('../../../errors');
const {
    statusesCode: {UNAUTHORIZED, BAD_REQUEST},
} = require('../../../constants');

module.exports = async (req, res, next) => {
    try {
        const {refresh_token} = req.body;

        if (!refresh_token) {
            return next(new ErrorHandler(NOT_TOKEN.message, BAD_REQUEST, NOT_TOKEN.code));
        }

        await jwtRefreshTokenVerificator(refresh_token);

        const tokenFromDB = await authService.getTokensByParams({refresh_token});

        if (!tokenFromDB) {
            return next(new ErrorHandler(NOT_VALID_REFRESH_TOKEN.message, UNAUTHORIZED, NOT_VALID_REFRESH_TOKEN.code));
        }

        req.user_id = tokenFromDB.userId;

        next();
    } catch (e) {
        next(e)
    }
};
