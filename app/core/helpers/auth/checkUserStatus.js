const {checkHashPassword} = require('./index');
const {userStatus: {PASSWORD_FOR_USER_STATUS, USER, ADMIN}} = require('../../constants');

module.exports = async (passwordForStatus) => {
    const status = await checkHashPassword(PASSWORD_FOR_USER_STATUS, passwordForStatus);

    let statusUser;

    if (status) {
        statusUser = ADMIN;
    } else {
        statusUser = USER;
    }

    return statusUser;
};
