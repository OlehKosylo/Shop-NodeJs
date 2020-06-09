const {modelNames: {USER}} = require('../../constants');

module.exports = (sequelize, DataTypes) => {

    return sequelize.define(USER, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false
            },

            age: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false
            },

            surname: {
                type: DataTypes.STRING,
                allowNull: false
            },

            user_status: {
                type: DataTypes.STRING,
                allowNull: false
            }

        },
        {
            tableName: USER,
            timestamps: false
        });
};
