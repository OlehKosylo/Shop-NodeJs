const {dataBaseWords: {NOW, USER_ID}, modelNames: {ACTION_TOKENS}} = require('../../constants');

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
                defaultValue: sequelize.fn(NOW)
            }

        },
        {
            tableName: ACTION_TOKENS,
            timestamps: false
        });

    ActionTokens.associate = models => {
        ActionTokens.belongsTo(models.User, {
            foreignKey: USER_ID,
        })
    };


    return ActionTokens;
};
