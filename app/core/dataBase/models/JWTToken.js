const {dataBaseWords: {NOW}, modelNames: {JWT_TOKEN}} = require('../../constants');

module.exports = (sequelize, DataTypes) => {

    const JWTToken = sequelize.define(JWT_TOKEN, {

            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            access_token: {
                type: DataTypes.STRING,
                allowNull: false
            },

            refresh_token: {
                type: DataTypes.STRING,
                allowNull: false
            },

            createAt: {
                type: DataTypes.STRING,
                defaultValue: sequelize.fn(NOW)
            }
        },
        {
            tableName: JWT_TOKEN,
            timestamps: false
        });

    //Звязки
    const User = sequelize.import('./User.js');

    JWTToken.belongsTo(User, {
        foreignKey: 'userId'
    });

    return JWTToken;

};
