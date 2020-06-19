const {statusesCode} = require('../../constants');
const {TVService} = require('../../services');

module.exports = {
    createTVModel: async (req, res, next) => {
        try {
            let TVModel = req.body;

            const tv = await TVService.setTVModel(TVModel);

            res.json(tv.dataValues.id)
        } catch (e) {
            next(e);
        }
    },

    deleteTVModel: async (req, res, next) => {
        try {
            let id = req.good.id;

            await TVService.deleteTVModel(id);

            res.status(statusesCode.OK).end();
        } catch (e) {
            next(e);
        }
    },

    updateTVModel: async (req, res, next) => {
        try {
            let TVModel = req.body;

            await TVService.updateTVModel(TVModel);

            res.status(statusesCode.OK).end();
        } catch (e) {
            next(e)
        }
    },
};
