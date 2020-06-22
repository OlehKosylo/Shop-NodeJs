const {ErrorHandler, statusesErrors: {REQUEST_IS_EMPTY}} = require('../../errors');
const {statusesCode: {BAD_REQUEST}} = require('../../constants');
module.exports = (req, res, next) => {
    let arrayGoods = [];

    const objSize = (obj) => {
        let size = 0;
        for (value in obj) {
            size++;
        }
        return size;
    };

    let size = objSize(req.body);

    if (Object.keys(req.body).length === 0) {
        return next(new ErrorHandler(REQUEST_IS_EMPTY.message, BAD_REQUEST, REQUEST_IS_EMPTY.code))
    }

    for (let i = 0; i < size - 2; i++) {
        req.body[i].sending_status = 0;
        arrayGoods.push(req.body[i])
    }

    req.arrayGoods = arrayGoods;

    next();
};
