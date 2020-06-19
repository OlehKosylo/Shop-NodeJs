const {appSettings} = require('../../constants');
const {Router} = require(appSettings.EXPRESS);

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
phoneRouter.put('/', isPhoneModelValid, idModelExist, phoneController.updatePhoneModel);

phoneRouter.delete('/:id', idModelExist, phoneController.deletePhoneModel);
phoneRouter.get('/:id', idModelExist, commonController.getGood);

phoneRouter.get('/sort/:type', commonController.getAllGoodsBySort);

module.exports = phoneRouter;
