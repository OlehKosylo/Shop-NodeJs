const {Router} = require('express');

const {phoneController} = require('../../controllers');
const {
    phoneMiddlewares: {
        isPhoneModelValid,
    },
    isTitleExist,
    isTitleExistForDelete
} = require('../../middlewares');

const phoneRouter = Router();

phoneRouter.post('/', isPhoneModelValid, isTitleExist, phoneController.createPhoneModel);
phoneRouter.get('/delete', isTitleExistForDelete, phoneController.deletePhoneModel);


module.exports = phoneRouter;
