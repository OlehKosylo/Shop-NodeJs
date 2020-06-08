const {modelNames: {PHONES}} = require('../../constants');

module.exports = (sequelize, DataTypes) => {

    return sequelize.define(PHONES, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },

            description: {
                type: DataTypes.STRING,
                allowNull: false
            },

            price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            imageURL: {
                type: DataTypes.STRING
            },

            screen_diagonal: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            camera_mp: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            number_of_cores: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            inner_memory: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            type_of_goods: {
                type: DataTypes.STRING,
                allowNull: false
            }

        },
        {
            tableName: PHONES,
            timestamps: false
        });
};
