const {dataBaseWords: {NOW, USER_ID}, modelNames: {INVOICES}} = require('../../constants');

module.exports = (sequelize, DataTypes) => {

    const INVOICE = sequelize.define(INVOICES, {
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
            tableName: INVOICES,
            timestamps: false
        });


    const User = sequelize.import('./User.js');

    INVOICE.belongsTo(User, {
        foreignKey: USER_ID
    });

    return INVOICE;

};
