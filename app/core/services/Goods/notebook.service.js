const db = require('../../dataBase').getInstance();
const {modelNames: {NOTEBOOKS}} = require('../../constants');

module.exports = {
    setNotebookModel: async (notebookModel) => {
        const NotebookModel = db.getModel(NOTEBOOKS);

        await NotebookModel.create(notebookModel);
    },

    deleteNotebookModel: async (id) => {
        const NotebookModel = db.getModel(NOTEBOOKS);

        await NotebookModel.destroy({
            where: {id}
        });
    },

    updateNotebookModel: async (model) => {
        const NotebookModel = db.getModel(NOTEBOOKS);

        const {id} = model;

        await NotebookModel.update(
            {...model},
            {where: {id}}
        )
    },
};
