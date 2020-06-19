const {appSettings} = require('../../constants');
const {Router} = require(appSettings.EXPRESS);

const {
    idModelExist,
    notebookMiddlewares: {
        isNotebookModelValid
    },
    isTitleExist,
} = require('../../middlewares');
const {notebookController, commonController} = require('../../controllers');

const notebookRouter = Router();

notebookRouter.get('/', commonController.getAllGoods);
notebookRouter.post('/', isNotebookModelValid, isTitleExist, notebookController.createNotebookModel);
notebookRouter.put('/', isNotebookModelValid, idModelExist, notebookController.updateNotebookModel);

notebookRouter.get('/:id', idModelExist, commonController.getGood);
notebookRouter.delete('/:id', idModelExist, notebookController.deleteNotebookModel);

notebookRouter.get('/sort/:type', commonController.getAllGoodsBySort);


module.exports = notebookRouter;
