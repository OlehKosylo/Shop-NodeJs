const {authService} = require('../../../services');
const {ErrorHandler} = require('../../../errors');
const {
    authHelper:
        {jwtTokenVerificator}
} = require('../../../helpers');
const {
    statusesCode: {UNAUTHORIZED},
} = require('../../../constants');
const {statuses:{NOT_VALID_TOKEN}} = require('../../../constants');

module.exports = async (req, res, next) => {
    const token = req.body.token;

    try {
        await jwtTokenVerificator(token);
    } catch (e) {
        next(e)
    }

    const {dataValues:{user_id}} = await authService.getActionTokensByParams({token: token});

    if (!user_id) {
        return next(new ErrorHandler(NOT_VALID_TOKEN.message, UNAUTHORIZED, NOT_VALID_TOKEN.code));
    }

    req.user_id = user_id;

    next();
};
