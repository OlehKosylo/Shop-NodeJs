const {Router} = require('express');

const {notebookController} = require('../../controllers');
const {
    notebookMiddlewares: {
        isNotebookModelValid
    },
    isTitleExist,
    idModelExist
} = require('../../middlewares');

const notebookRouter = Router();

notebookRouter.post('/', isNotebookModelValid, isTitleExist, notebookController.createNotebookModel);
notebookRouter.delete('/', idModelExist, notebookController.deleteNotebookModel);
notebookRouter.put('/', isNotebookModelValid, idModelExist, notebookController.updateNotebookModel);

module.exports = notebookRouter;
