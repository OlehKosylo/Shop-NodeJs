const db = require('../../dataBase').getInstance();
const {modelNames: {TV}} = require('../../constants');

module.exports = {
    setTVModel: async (modelTV) => {
        const TVModel = db.getModel(TV);

        await TVModel.create(modelTV);
    },

    deleteTVModel: async (id) => {
        const TVModel = db.getModel(TV);

        await TVModel.destroy({
            where: {id}
        });
    },

    updateTVModel: async (model) => {
        const TVModel = db.getModel(TV);

        const {id} = model;

        await TVModel.update(
            {...model},
            {where: {id}}
        )
    },
};
