const {emailAction : {ACTIVATE_USER_ACCOUNT, RECOVER_USER_PASSWORD, CHANGE_USER_PASSWORD}} = require('../constants');

module.exports = {
    [ACTIVATE_USER_ACCOUNT]: {
        subject: '[SHOP] Activate your account.',
        templateFileName: 'activateAccount'
    },

    [RECOVER_USER_PASSWORD]: {
        subject: '[SHOP] Recover your password.',
        templateFileName: 'recoverPassword'
    },

    [CHANGE_USER_PASSWORD]: {
        subject: '[SHOP] Change your password.',
        templateFileName: 'changePassword'
    },
};
