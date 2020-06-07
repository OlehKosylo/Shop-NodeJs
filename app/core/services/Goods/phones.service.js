const db = require('../../dataBase').getInstance();
const {modelNames: {PHONES}} = require('../../constants');

module.exports = {
    setModelPhone: async (modelPhone) => {
        const PhonesModel = db.getModel(PHONES);

        await PhonesModel.create(modelPhone);
    },

};
