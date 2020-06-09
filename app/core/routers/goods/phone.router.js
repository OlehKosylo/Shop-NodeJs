const {Router} = require('express');

const {phoneController} = require('../../controllers');
const {
    idModelExist,
    phoneMiddlewares: {
        isPhoneModelValid,
    },
    isTitleExist
} = require('../../middlewares');

const phoneRouter = Router();

phoneRouter.post('/', isPhoneModelValid, isTitleExist, phoneController.createPhoneModel);
phoneRouter.delete('/', idModelExist, phoneController.deletePhoneModel);
phoneRouter.put('/', isPhoneModelValid, idModelExist, phoneController.updatePhoneModel);

module.exports = phoneRouter;
