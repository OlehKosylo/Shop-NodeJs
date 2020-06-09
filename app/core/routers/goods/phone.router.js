const {Router} = require('express');

const {phoneController, commonController} = require('../../controllers');
const {
    idModelExist,
    phoneMiddlewares: {
        isPhoneModelValid,
    },
    isTitleExist
} = require('../../middlewares');

const phoneRouter = Router();

phoneRouter.get('/',commonController.getAllGoods);
phoneRouter.post('/', isPhoneModelValid, isTitleExist, phoneController.createPhoneModel);
phoneRouter.delete('/', idModelExist, phoneController.deletePhoneModel);
phoneRouter.put('/', isPhoneModelValid, idModelExist, phoneController.updatePhoneModel);

phoneRouter.get('/:id', idModelExist, commonController.getGood);

phoneRouter.get('/sort/:type', commonController.getAllGoodsBySort);

module.exports = phoneRouter;
