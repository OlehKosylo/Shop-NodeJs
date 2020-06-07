const {modelNames: {NOTEBOOKS}} = require('../../constants');

module.exports = (sequelize, DataTypes) => {

    return sequelize.define(NOTEBOOKS, {
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

            processor: {
                type: DataTypes.STRING,
                allowNull: false
            },

            ram: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            storage_capacity: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            graphics_card: {
                type: DataTypes.STRING,
                allowNull: false
            },

        },
        {
            tableName: NOTEBOOKS,
            timestamps: false
        });
};
