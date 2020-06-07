const {Router} = require('express');

const {notebookController} = require('../../controllers');
const {
    notebookMiddlewares: {
        isNotebookModelValid
    },
    isTitleExist
} = require('../../middlewares');

const notebookRouter = Router();

notebookRouter.post('/', isNotebookModelValid, isTitleExist, notebookController.createNotebookModel);

module.exports = notebookRouter;
