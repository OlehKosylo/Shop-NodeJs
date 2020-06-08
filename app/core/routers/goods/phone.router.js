const {Router} = require('express');

const {phoneController} = require('../../controllers');
const {
    phoneMiddlewares: {
        isPhoneModelValid,
    },
    isTitleExist,
    idModelExist
} = require('../../middlewares');

const phoneRouter = Router();

phoneRouter.post('/', isPhoneModelValid, isTitleExist, phoneController.createPhoneModel);
phoneRouter.delete('/', idModelExist, phoneController.deletePhoneModel);
phoneRouter.put('/', isPhoneModelValid, idModelExist, phoneController.updatePhoneModel);

module.exports = phoneRouter;
