const {
    authHelper: {
        hashPassword,
        jwtTokenForRecoverPassword
    },
    emailSender, userWithoutPassword,
} = require('../helpers');
const {userService} = require('../services');
const {emailAction: {CHANGE_USER_PASSWORD}, statusesCode} = require('../constants');


module.exports = {

    getUser: async (req, res, next) => {
        const user = userWithoutPassword(req.user);

        res.json(user);
    },

    updateUser: async (req, res, next) => {
        try {
            await userService.updateUser(req.body);

            // res.sendStatus(statusesCode.OK);
            res.status(statusesCode.OK).end();
        } catch (e) {
            next(e)
        }
    },

    changePassword: async (req, res, next) => {
        try {
            let {password} = req.body;
            const user = req.user;

            const changePasswordField = await hashPassword(password);

            let {token} = await jwtTokenForRecoverPassword();

            await userService.setTokenForChangePassword(user, token);

            await userService.updateUser({...user, changePasswordField});

            await emailSender(user.email, CHANGE_USER_PASSWORD, {token, userName: user.name});

            res.status(statusesCode.OK).end();
        } catch (e) {
            next(e);
        }
    },

    setChangedPassword: async (req, res, next) => {
        try {
            let user = await userService.getUserById(req.user_id);


            user = {...user.dataValues, password: user.changePasswordField, changePasswordField: ''};

            userService.updateUser(user);

            res.status(statusesCode.OK).end();
        } catch (e) {
            next(e)
        }
    }
};
