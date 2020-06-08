const {notebookService} = require('../../services');
const {} = require('../../helpers');
const {statusesCode} = require('../../constants');


module.exports = {
    createNotebookModel: async (req, res, next) => {
        try {
            let notebookModel = req.body;

            await notebookService.setNotebookModel(notebookModel);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e);
        }
    },

    deleteNotebookModel: async (req, res, next) => {
        try {
            let {id} = req.id;

            await notebookService.deleteNotebookModel(id);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e);
        }
    },

    updateNotebookModel: async (req, res, next) => {
        try {
            let Notebook = req.body;

            await notebookService.updateNotebookModel(Notebook);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e)
        }
    }
};
