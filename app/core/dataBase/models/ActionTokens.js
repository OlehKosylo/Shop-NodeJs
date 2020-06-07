const {modelNames: {ACTION_TOKENS}} = require('../../constants');

module.exports = (sequelize, DataTypes) => {

    const ActionTokens = sequelize.define(ACTION_TOKENS, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            action_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            token: {
                type: DataTypes.STRING,
                allowNull: false
            },

            createAt: {
                type: DataTypes.STRING,
                defaultValue: sequelize.fn('now')
            }

        },
        {
            tableName: 'actiontokens',
            timestamps: false
        });


    const User = sequelize.import('./User.js');

    ActionTokens.belongsTo(User, {
        foreignKey: 'user_id'
    });

    return ActionTokens;
};
