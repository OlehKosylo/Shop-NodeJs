const {appSettings} = require('../../constants');
const {Router} = require(appSettings.EXPRESS);

const {authController} = require('../../controllers');
const {
    isActionTokenExist,
    isEmailExistRecover,
    isRecoverTokenExist,
    loginProcess: {
        checkPasswordMiddleware,
        checkAccessToken,
        checkRefreshToken,
        isLoginModelValid
    },
    registrationProcess: {
        isUserValid,
        isEmailExist
    },
} = require('../../middlewares');

const authRouter = Router();

authRouter.post('/registration', isUserValid, isEmailExist, authController.registerUser);

authRouter.post('/recoverPassword', isEmailExistRecover, authController.recoverPassword);
authRouter.post('/recoverPassword/setNew', isRecoverTokenExist, authController.recoverPasswordSetNew);

authRouter.get('/activateAccount/:token', isActionTokenExist, authController.activateAccount);

authRouter.post('/login', isLoginModelValid, isEmailExistRecover, checkPasswordMiddleware, authController.login);
authRouter.post('/logout', checkAccessToken, authController.logout);
authRouter.post('/refresh', checkRefreshToken, authController.refresh);


module.exports = authRouter;
