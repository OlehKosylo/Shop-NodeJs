const {authService, userService} = require('../services');
const {
    authHelper: {hashPassword, uuidToken, jwtTokenGenerator, jwtTokenForRecoverPassword, checkUserStatus},
    emailSender,
} = require('../helpers');
const {
    emailWords: {ACTIVATE_ACCOUNT, RECOVER_PASSWORD},
    jwtSecretWords: {AUTHORIZATION},
    statusesCode
} = require('../constants');

module.exports = {
    registerUser: async (req, res, next) => {
        try {
            let user = req.body;

            user.password = await hashPassword(user.password);

            let token = await uuidToken();

            await emailSender(user.email, ACTIVATE_ACCOUNT, token);

            const user_status = await checkUserStatus(user.passwordForStatus);

            await authService.registrationUser({...user, user_status}, token);

            res.sendStatus(statusesCode.CREATED);
        } catch (e) {
            next(e);
        }
    },

    activateAccount: async (req, res, next) => {
        try {
            const user_id = req.user_id;

            await userService.setActivateStatus(user_id);

            res.sendStatus(statusesCode.CREATED);
        } catch (e) {
            next(e)
        }
    },

    login: async (req, res, next) => {
        try {
            // TODO generate token Pair
            const jwtTokens = jwtTokenGenerator();
            await authService.createTokenPair({...jwtTokens, userId: req.user.id});
            res.json(jwtTokens);
        } catch (e) {
            next(e)
        }
    },

    logout: async (req, res, next) => {
        try {
            const access_token = req.get(AUTHORIZATION);
            await authService.deleteTokenByParams({access_token});

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e)
        }
    },

    refresh: async (req, res, next) => {
        try {
            // Must be transaction
            const refresh_token = req.get(AUTHORIZATION);
            await authService.deleteTokenByParams({refresh_token});

            const jwtTokens = jwtTokenGenerator();
            await authService.createTokenPair({...jwtTokens, userId: req.user_id});
            //
            res.json(jwtTokens);
        } catch (e) {
            next(e)
        }
    },

    recoverPassword: async (req, res, next) => {
        try {
            let user = req.user;

            let {token} = await jwtTokenForRecoverPassword();

            await emailSender(user.email, RECOVER_PASSWORD, token);

            await authService.setTokenForRecoverPassword(user, token);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e);
        }
    },

    recoverPasswordSetNew: async (req, res, next) => {
        try {
            let user_id = req.user_id;

            let password = await hashPassword(req.body.password);

            await userService.resetPassword(user_id, password);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e);
        }
    }
};
