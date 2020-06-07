const db = require('../../dataBase').getInstance();
const {modelNames: {USER, ACTION_TOKENS, JWT_TOKEN}} = require('../../constants');

module.exports = {
    registrationUser: async (user, token) => {
        const UserModel = db.getModel(USER);
        const ActionTokens = db.getModel(ACTION_TOKENS);

        const createdUser = await UserModel.create({...user, userStatus: null});

        await ActionTokens.create({action_id: 1, user_id: createdUser.id, token});
    },

    getTokensByParams: (params) => {
        const TokenModel = db.getModel(JWT_TOKEN);

        return TokenModel.findOne({
            where: params
        })
    },

    getActionTokensByParams: (params) => {
        const TokenModel = db.getModel(ACTION_TOKENS);

        return TokenModel.findOne({
            where: params
        })
    },

    deleteTokenByParams: (params) => {
        const TokenModel = db.getModel(JWT_TOKEN);

        return TokenModel.destroy({
            where: params
        })
    },

    createTokenPair: (token) => {
        const TokenModel = db.getModel(JWT_TOKEN);

        return TokenModel.create(token);
    },

    setTokenForRecoverPassword: async (user, token) => {
        const ActionTokens = db.getModel(ACTION_TOKENS);

        await ActionTokens.create({action_id: 2, user_id: user.id, token});
    },




};
