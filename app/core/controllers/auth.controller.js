const {authService, userService} = require('../services');
const {authHelper: { hashPassword, uuidToken,jwtTokenGenerator} , emailSender} = require('../helpers');
const {statusesCode, jwtSecretWords: {AUTHORIZATION}} = require('../constants');


module.exports = {
    registerUser: async (req, res) => {
        try {
            let user = req.body;

            user.password = await hashPassword(user.password);

            let token = await uuidToken();

            await emailSender(user.email, 'Activate your account', token);

            await authService.registrationUser(user, token);

            res.sendStatus(statusesCode.CREATED);
        } catch (e) {
            next(e);
        }
    },

    activateAccount: async (req, res) => {
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
        const access_token = req.get(AUTHORIZATION);
        await authService.deleteTokenByParams({access_token});

        res.sendStatus(200);
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
    };
