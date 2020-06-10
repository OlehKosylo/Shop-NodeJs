const {appSettings} = require('../../constants');
const {Router} = require(appSettings.EXPRESS);

const {userController} = require('../../controllers');
const {
    isUserIdExist,
    isUserModelValid
} = require('../../middlewares');

const userRouter = Router();

userRouter.get('/', isUserIdExist, userController.getUser);
userRouter.put('/', isUserModelValid, isUserIdExist, userController.updateUser);

module.exports = userRouter;
