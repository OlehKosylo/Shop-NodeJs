const db = require('../../dataBase').getInstance();
const {modelNames: {NOTEBOOKS}} = require('../../constants');

module.exports = {
    setNotebookModel: async (notebookModel) => {
        const NotebookModel = db.getModel(NOTEBOOKS);

        await NotebookModel.create(notebookModel);
    },

};
