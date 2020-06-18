const {appSettings} = require('../../constants');
const {Router} = require(appSettings.EXPRESS);

const {userController} = require('../../controllers');
const {
    isActionTokenExist,
    isUserIdExist,
    isUserModelValid,
    isUserRecoverPasswordModelValid,
    loginProcess: {checkPasswordMiddleware},
} = require('../../middlewares');

const userRouter = Router();

userRouter.get('/', isUserIdExist, userController.getUser);
userRouter.put('/', isUserModelValid, isUserIdExist, userController.updateUser);
userRouter.get('/password', isActionTokenExist,  userController.setChangedPassword);
userRouter.put('/password', isUserRecoverPasswordModelValid, isUserIdExist, checkPasswordMiddleware, userController.changePassword);

module.exports = userRouter;
