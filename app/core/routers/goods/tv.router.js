const {appSettings} = require('../../constants');
const {Router} = require(appSettings.EXPRESS);

const {TVController, commonController} = require('../../controllers');
const {
    idModelExist,
    TVMiddlewares: {isTVModelValid},
    isTitleExist,
} = require('../../middlewares');

const TVRouter = Router();

TVRouter.get('/', commonController.getAllGoods);
TVRouter.post('/', isTVModelValid, isTitleExist, TVController.createTVModel);
TVRouter.put('/', isTVModelValid, idModelExist, TVController.updateTVModel);

TVRouter.delete('/:id', idModelExist, TVController.deleteTVModel);
TVRouter.get('/:id', idModelExist, commonController.getGood);

TVRouter.get('/sort/:type', commonController.getAllGoodsBySort);

module.exports = TVRouter;
