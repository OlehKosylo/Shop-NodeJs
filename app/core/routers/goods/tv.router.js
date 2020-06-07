const {Router} = require('express');

const {TVController} = require('../../controllers');
const {
    TVMiddlewares: {
        isTVModelValid
    },
    isTitleExist,
    isTitleExistForDelete
} = require('../../middlewares');

const TVRouter = Router();

TVRouter.post('/', isTVModelValid, isTitleExist, TVController.createTVModel);
TVRouter.get('/delete', isTitleExistForDelete, TVController.deleteTVModel);

module.exports = TVRouter;
