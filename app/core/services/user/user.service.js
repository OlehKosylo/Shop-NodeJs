const db = require('../../dataBase').getInstance();
const {modelNames: {ACTION_TOKENS, USER}} = require('../../constants');

module.exports = {
    getUserByEmail: async (email) => {
        const UserModel = db.getModel(USER);

        return UserModel.findOne({
            where: {email}
        })
    },

    getUserByToken: async (token) => {
        const UserModel = db.getModel(ACTION_TOKENS);
        return UserModel.findOne({
            where: {token}
        })

    },

    setActivateStatus: async (user_id) => {
        const UserModel = db.getModel(ACTION_TOKENS);

        return UserModel.update(
            {token: 'Activated'},
            {where: {user_id}}
        )
    }

};
