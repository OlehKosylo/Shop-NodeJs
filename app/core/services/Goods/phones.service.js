const db = require('../../dataBase').getInstance();
const {modelNames: {PHONES}} = require('../../constants');

module.exports = {
    setModelPhone:  (modelPhone) => {
        const PhonesModel = db.getModel(PHONES);

        return PhonesModel.create(modelPhone);
    },

    deleteModelPhone: async (id) => {
        const PhonesModel = db.getModel(PHONES);

        await PhonesModel.destroy({
            where:{id}
        })
    },

    updatePhoneModel: async (model) => {
        const PhoneModel = db.getModel(PHONES);

        const {id} = model;

        await PhoneModel.update(
            {...model},
            {where: {id}}
        )
    },
};
