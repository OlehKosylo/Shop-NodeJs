const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const {dataBaseWords:{SHOP, ROOT, LOCALHOST, MYSQL}} = require('../constants');

module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize(
            process.env.DB_NAME || SHOP,
            process.env.DB_USER || ROOT,
            process.env.DB_PASSWORD || ROOT, {
                host: process.env.DB_HOST || LOCALHOST,
                dialect: MYSQL
            });

        let models = {};

        function getModels() {
            const modelsPath = path.join(process.cwd(),'core', 'dataBase', 'models');
            fs.readdir(modelsPath, (err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    models[modelName] = client.import(path.join(modelsPath, modelName));
                })
            })
        }

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        }

    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }

            return instance;
        }
    }
})();
