const {phonesService} = require('../../services');
const {} = require('../../helpers');
const {statusesCode} = require('../../constants');


module.exports = {
    createPhoneModel: (req, res, next) => {
        try {
            let phoneModel = req.body;

            phonesService.setModelPhone(phoneModel);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e);
        }
    },

};
