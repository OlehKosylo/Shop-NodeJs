const {notebookService} = require('../../services');
const {} = require('../../helpers');
const {statusesCode} = require('../../constants');


module.exports = {
    createNotebookModel: (req, res, next) => {
        try {
            let notebookModel = req.body;

            notebookService.setNotebookModel(notebookModel);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e);
        }
    },

};
