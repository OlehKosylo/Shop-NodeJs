const jwt = require('jsonwebtoken');

const {ErrorHandler, statusesErrors:{NOT_VALID_REFRESH_TOKEN}} = require('../../errors');
const {statusesCode: {UNAUTHORIZED}, jwtSecretWords:{JWT_REFRESH_SECRET}} = require('../../constants');

module.exports = async (token) => {

    jwt.verify(token, JWT_REFRESH_SECRET, err => {
        if (err) {
            throw new ErrorHandler(NOT_VALID_REFRESH_TOKEN.message, UNAUTHORIZED, NOT_VALID_REFRESH_TOKEN.code);
        }
    });

};
