const bcrypt = require('bcrypt');

const {ErrorHandler, statusesErrors:{EMAIL_ALREADY_EXIST}} = require('../../errors');
const {statusesCode: {BAD_REQUEST}} = require('../../constants');

module.exports = async (hashedPassword, password) => {
    const isPasswordsEquals = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordsEquals) {
        throw new ErrorHandler(EMAIL_ALREADY_EXIST.message, BAD_REQUEST, EMAIL_ALREADY_EXIST.code);
    }
};
