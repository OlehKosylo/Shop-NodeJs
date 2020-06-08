const db = require('../../dataBase').getInstance();
const {modelNames: {ACTION_TOKENS, USER}} = require('../../constants');

module.exports = {
    getUserByEmail: (email) => {
        const UserModel = db.getModel(USER);

        return UserModel.findOne({
            where: {email}
        })
    },

    getUserByToken: (token) => {
        const UserModel = db.getModel(ACTION_TOKENS);

        return UserModel.findOne({
            where: {token}
        })
    },

    getUserById: (id) => {
        const UserModel = db.getModel(USER);

        return  UserModel.findOne({
            where: {id}
        });
    },

    updateUser: (user) => {
        const UserModel = db.getModel(USER);

        return  UserModel.update(
            {...user},
            {where: {id: user.id}}
        );
    },

    setActivateStatus: async (user_id) => {
        const UserModel = db.getModel(ACTION_TOKENS);

        await UserModel.update(
            {token: 'Activated'},
            {where: {user_id}}
        )
    },

    resetPassword: async (user_id, password) => {
        const ActionTokens = db.getModel(ACTION_TOKENS);
        const UserModel = db.getModel(USER);

        await UserModel.update(
            {password},
            {where: {id: user_id}}
        );

        await ActionTokens.update(
            {token: 'Recovered'},
            {where: {user_id, action_id: 2}}
        )
    }

};
