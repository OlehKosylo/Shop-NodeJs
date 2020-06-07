const {Router} = require('express');

const {TVController} = require('../../controllers');
const {
    TVMiddlewares: {
        isTVModelValid
    },
    isTitleExist
} = require('../../middlewares');

const phoneRouter = Router();

phoneRouter.post('/', isTVModelValid, isTitleExist, TVController.createTVModel);

module.exports = phoneRouter;
