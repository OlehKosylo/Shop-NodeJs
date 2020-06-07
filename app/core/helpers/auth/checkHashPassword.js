const bcrypt = require('bcrypt');

module.exports = async (hashedPassword, password) => {
    return await bcrypt.compare(password, hashedPassword);
};
