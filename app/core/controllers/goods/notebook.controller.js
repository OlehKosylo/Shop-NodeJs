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
            let {title} = req.query;

            await notebookService.deleteNotebookModel(title);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e);
        }
    }

};
