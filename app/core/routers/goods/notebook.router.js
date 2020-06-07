const {Router} = require('express');

const {notebookController} = require('../../controllers');
const {
    notebookMiddlewares: {
        isNotebookModelValid
    },
    isTitleExist,
    isTitleExistForDelete
} = require('../../middlewares');

const notebookRouter = Router();

notebookRouter.post('/', isNotebookModelValid, isTitleExist, notebookController.createNotebookModel);
notebookRouter.get('/delete', isTitleExistForDelete, notebookController.deleteNotebookModel);


module.exports = notebookRouter;
