const {Router} = require('express');

const {
    idModelExist,
    notebookMiddlewares: {
        isNotebookModelValid
    },
    isTitleExist,
} = require('../../middlewares');
const {notebookController} = require('../../controllers');

const notebookRouter = Router();

notebookRouter.post('/', isNotebookModelValid, isTitleExist, notebookController.createNotebookModel);
notebookRouter.delete('/', idModelExist, notebookController.deleteNotebookModel);
notebookRouter.put('/', isNotebookModelValid, idModelExist, notebookController.updateNotebookModel);

module.exports = notebookRouter;
