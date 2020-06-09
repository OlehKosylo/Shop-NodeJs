const {dataBaseWords: {NOW}, modelNames: {INVOICES}} = require('../../constants');

module.exports = (sequelize, DataTypes) => {

    const INVOICES = sequelize.define('Invoices', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            good_type: {
                type: DataTypes.STRING,
                allowNull: false
            },

            good_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            count: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            where_send: {
                type: DataTypes.STRING,
                allowNull: false
            },

            sending_status: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            orderedAt: {
                type: DataTypes.STRING,
                defaultValue: sequelize.fn(NOW)
            }
        },
        {
            tableName: "Invoices",
            timestamps: false
        });


    const User = sequelize.import('./User.js');

    INVOICES.belongsTo(User, {
        foreignKey: 'user_id'
    });

    return INVOICES;

};
