const {dataBaseWords: {USER_ID, ID}, modelNames: {USER}} = require('../../constants');

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define(USER, {
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
            },

            changePasswordField: {
                type: DataTypes.STRING,
                allowNull: true
            }

        },
        {
            tableName: USER,
            timestamps: false
        });

    User.associate = models => {
        User.hasMany(models.ActionTokens, {
         onDelete: "cascade",
     });
   };

    return User;
};
