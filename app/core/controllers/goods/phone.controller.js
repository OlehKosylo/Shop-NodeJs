const {phonesService} = require('../../services');
const {statusesCode} = require('../../constants');

module.exports = {
    createPhoneModel: async (req, res, next) => {
        try {
            let phoneModel = req.body;

            const phone = await phonesService.setModelPhone(phoneModel);

            res.json(phone.dataValues.id)
        } catch (e) {
            next(e);
        }
    },

    deletePhoneModel: async (req, res, next) => {
        try {
            let id = req.good.id;

            await phonesService.deleteModelPhone(id);

            res.status(statusesCode.OK).end();
        } catch (e) {
            next(e);
        }
    },

    updatePhoneModel: async (req, res, next) => {
        try {
            let PhoneModel = req.body;

            console.log(req.body);

            await phonesService.updatePhoneModel(PhoneModel);

            res.status(statusesCode.OK).end();
        } catch (e) {
            next(e)
        }
    },
};
