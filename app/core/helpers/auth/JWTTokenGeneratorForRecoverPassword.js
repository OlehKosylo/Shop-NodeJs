const jwt = require('jsonwebtoken');

const {jwtSecretWords: {JWT_SECRET, M30}} = require('../../constants');

module.exports = () => {
    const token = jwt.sign({}, JWT_SECRET, {expiresIn: M30});

    return {token}
};
