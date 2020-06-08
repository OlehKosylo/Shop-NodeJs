const {userService} = require('../services');
const {statusesCode} = require('../constants');

module.exports = {

    getUser: async (req,res,next) =>  {
        res.json(req.user);
    },

    updateUser: async (req, res, next) => {
        await userService.updateUser(req.body);

        res.sendStatus(statusesCode.OK);
    }
};
