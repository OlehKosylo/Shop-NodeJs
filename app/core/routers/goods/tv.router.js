const {Router} = require('express');

const {TVController} = require('../../controllers');
const {
    idModelExist,
    TVMiddlewares: {
        isTVModelValid
    },
    isTitleExist
} = require('../../middlewares');

const TVRouter = Router();

TVRouter.post('/', isTVModelValid, isTitleExist, TVController.createTVModel);
TVRouter.delete('/', idModelExist, TVController.deleteTVModel);
TVRouter.put('/', isTVModelValid, idModelExist, TVController.updateTVModel);

module.exports = TVRouter;
