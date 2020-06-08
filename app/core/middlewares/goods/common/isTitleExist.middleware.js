const {commonService} = require('../../../services');
const {
    ErrorHandler,
    statusesErrors: {TITLE_ALREADY_EXIST}
} = require('../../../errors');
const {
    statusesCode: {BAD_REQUEST},
} = require('../../../constants');

module.exports = async (req, res, next) => {
    const {title, type_of_goods} = req.body;

    const good = await commonService.getGoodByTitle(title, type_of_goods);

    if (good) {
        return next(new ErrorHandler(TITLE_ALREADY_EXIST.message, BAD_REQUEST, TITLE_ALREADY_EXIST.code))
    }

    next();
};
