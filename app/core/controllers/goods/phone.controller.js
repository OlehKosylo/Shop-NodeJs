const {phonesService} = require('../../services');
const {statusesCode} = require('../../constants');

module.exports = {
    createPhoneModel: async (req, res, next) => {
        try {
            let phoneModel = req.body;

            await phonesService.setModelPhone(phoneModel);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e);
        }
    },

    deletePhoneModel: async (req, res, next) => {
        try {
            let {id} = req.body;

            await phonesService.deleteModelPhone(id);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e);
        }
    },

    updatePhoneModel: async (req, res, next) => {
        try {
            let PhoneModel = req.body;

            await phonesService.updatePhoneModel(PhoneModel);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e)
        }
    },
};
