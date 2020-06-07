const {phonesService} = require('../../services');
const {} = require('../../helpers');
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
            let {title} = req.query;

            await phonesService.deleteModelPhone(title);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e);
        }
    },

};
