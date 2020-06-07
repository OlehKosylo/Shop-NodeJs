const {Router} = require('express');

const {phoneController} = require('../../controllers');
const {
    phoneMiddlewares: {
        isPhoneModelValid
    },
    isTitleExist
} = require('../../middlewares');

const phoneRouter = Router();

phoneRouter.post('/', isPhoneModelValid, isTitleExist, phoneController.createPhoneModel);

module.exports = phoneRouter;
