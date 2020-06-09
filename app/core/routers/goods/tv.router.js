const {Router} = require('express');

const {TVController, commonController} = require('../../controllers');
const {
    idModelExist,
    TVMiddlewares: {
        isTVModelValid
    },
    isTitleExist
} = require('../../middlewares');

const TVRouter = Router();

TVRouter.get('/',commonController.getAllGoods);
TVRouter.post('/', isTVModelValid, isTitleExist, TVController.createTVModel);
TVRouter.delete('/', idModelExist, TVController.deleteTVModel);
TVRouter.put('/', isTVModelValid, idModelExist, TVController.updateTVModel);

TVRouter.get('/:id', idModelExist, commonController.getGood);

TVRouter.get('/sort/:type', commonController.getAllGoodsBySort);

module.exports = TVRouter;
