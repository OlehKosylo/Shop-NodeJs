const {TVService} = require('../../services');
const {} = require('../../helpers');
const {statusesCode} = require('../../constants');


module.exports = {
    createTVModel: async (req, res, next) => {
        try {
            let TVModel = req.body;

            await TVService.setTVModel(TVModel);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e);
        }
    },

    deleteTVModel: async (req, res, next) => {
        try {
            let {title} = req.query;

            await TVService.deleteTVModel(title);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e);
        }
    }

};
