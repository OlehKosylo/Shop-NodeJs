const jwt = require('jsonwebtoken');

const {jwtSecretWords: {JWT_SECRET}} = require('../../constants');

module.exports = () => {
    const token = jwt.sign({}, JWT_SECRET, {expiresIn: '30m'});

    return {token}
};
