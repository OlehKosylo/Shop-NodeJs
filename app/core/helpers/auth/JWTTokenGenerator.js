const jwt = require('jsonwebtoken');

const {jwtSecretWords: {JWT_SECRET, JWT_REFRESH_SECRET, M15, H6}} = require('../../constants');

module.exports = () => {
    const access_token = jwt.sign({}, JWT_SECRET, {expiresIn: M15});
    const refresh_token = jwt.sign({}, JWT_REFRESH_SECRET, {expiresIn: H6});

    return {
        access_token,
        refresh_token
    }
};
