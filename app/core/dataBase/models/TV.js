const {modelNames: {TV}} = require('../../constants');

module.exports = (sequelize, DataTypes) => {

    return sequelize.define(TV, {
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

            smart_tv_support: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            smart_platform: {
                type: DataTypes.STRING,
                allowNull: false
            },

            hdr: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            type_of_goods: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: TV,
            timestamps: false
        });
};
