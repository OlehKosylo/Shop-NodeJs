const {Router} = require('express');

const {authController} = require('../../controllers');
const {
    registrationProcess: {
        isUserValid,
        isEmailExist
    },
    activateAccount,
    loginProcess: {
        loginMiddleware,
        checkAccessToken,
        checkRefreshToken
    }
} = require('../../middlewares');

const authRouter = Router();

authRouter.post('/registration', isUserValid, isEmailExist, authController.registerUser);

authRouter.get('/activateAccount/:token', activateAccount, authController.activateAccount);

authRouter.post('/login', loginMiddleware, authController.login);
authRouter.post('/logout', checkAccessToken, authController.logout);
authRouter.post('/refresh', checkRefreshToken, authController.refresh);


module.exports = authRouter;
