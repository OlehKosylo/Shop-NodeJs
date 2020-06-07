const {
    statuses: {
        EMAIL_ALREADY_EXIST,
        TITLE_ALREADY_EXIST,
        WRONG_EMAIL,
        NOT_VALID_TOKEN,
        NOT_TOKEN,
        USER_NOT_FOUND,
        WRONG_ID,
    }
} = require('../constants');

module.exports = {
    // BAD REQUEST
    EMAIL_ALREADY_EXIST: {
        message: EMAIL_ALREADY_EXIST,
        code: 4002
    },

    TITLE_ALREADY_EXIST: {
        message: TITLE_ALREADY_EXIST,
        code: 4002
    },

    NOT_TOKEN: {
        message: NOT_TOKEN,
        code: 4002
    },

    WRONG_ID: {
        message: WRONG_ID,
        code: 4002
    },


    // UNAUTHORIZED
    NOT_VALID_TOKEN: {
        message: NOT_VALID_TOKEN,
        code: 4011
    },

    // FORBIDDEN


    // NOT FOUND
    USER_NOT_FOUND: {
        message: USER_NOT_FOUND,
        code: 4041
    },

    WRONG_EMAIL: {
        message: WRONG_EMAIL,
        code: 4001
    }

};
