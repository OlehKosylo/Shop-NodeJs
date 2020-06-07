const {TVService} = require('../../services');
const {} = require('../../helpers');
const {statusesCode} = require('../../constants');


module.exports = {
    createTVModel: (req, res, next) => {
        try {
            let TVModel = req.body;

            TVService.setTVModel(TVModel);

            res.sendStatus(statusesCode.OK);
        } catch (e) {
            next(e);
        }
    },

};
