const {Router} = require('express');

const {authController} = require('../../controllers');
const {
    registrationProcess: {
        isUserValid,
        isEmailExist
    },
    isActionTokenExist,
    isEmailExistRecover,
    isRecoverTokenExist,
    loginProcess: {
        loginMiddleware,
        checkAccessToken,
        checkRefreshToken,
    },
} = require('../../middlewares');

const authRouter = Router();

authRouter.post('/registration', isUserValid, isEmailExist, authController.registerUser);

authRouter.post('/recoverPassword', isEmailExistRecover, authController.recoverPassword);
authRouter.post('/recoverPassword/:token', isRecoverTokenExist, authController.recoverPasswordSetNew);

authRouter.get('/activateAccount/:token', isActionTokenExist, authController.activateAccount);

authRouter.post('/login', loginMiddleware, authController.login);
authRouter.post('/logout', checkAccessToken, authController.logout);
authRouter.post('/refresh', checkRefreshToken, authController.refresh);


module.exports = authRouter;
