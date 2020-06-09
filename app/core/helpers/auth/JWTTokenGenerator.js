const jwt = require('jsonwebtoken');

const {jwtSecretWords: {JWT_SECRET, JWT_REFRESH_SECRET}} = require('../../constants');

module.exports = () => {
    const access_token = jwt.sign({}, JWT_SECRET, {expiresIn: '15m'});
    const refresh_token = jwt.sign({}, JWT_REFRESH_SECRET, {expiresIn: '6h'});

    return {
        access_token,
        refresh_token
    }
};
