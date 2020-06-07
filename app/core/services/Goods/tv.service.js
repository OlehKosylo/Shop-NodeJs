const db = require('../../dataBase').getInstance();
const {modelNames: {TV}} = require('../../constants');

module.exports = {
    setTVModel: async (modelTV) => {
        const TVModel = db.getModel(TV);

        await TVModel.create(modelTV);
    },

    deleteTVModel: async (title) => {
        const TVModel = db.getModel(TV);

        await TVModel.destroy({
            where: {title}
        });
    },
};
