const {notebookService} = require('../../services');
const {statusesCode} = require('../../constants');

module.exports = {
    createNotebookModel: async (req, res, next) => {
        try {
            let notebookModel = req.body;

            const notebook = await notebookService.setNotebookModel(notebookModel);

            res.json(notebook.dataValues.id)
        } catch (e) {
            next(e);
        }
    },

    deleteNotebookModel: async (req, res, next) => {
        try {
            let id = req.good.id;

            await notebookService.deleteNotebookModel(id);

            res.status(statusesCode.OK).end();
        } catch (e) {
            next(e);
        }
    },

    updateNotebookModel: async (req, res, next) => {
        try {
            let Notebook = req.body;

            await notebookService.updateNotebookModel(Notebook);

            res.status(statusesCode.OK).end();
        } catch (e) {
            next(e)
        }
    },

};
