const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize(
            process.env.DB_NAME || 'shop',
            process.env.DB_USER || 'root',
            process.env.DB_PASSWORD || 'root', {
                host: process.env.DB_HOST || 'localhost',
                dialect: 'mysql'
            });

        let models = {};

        function getModels() {
            const modelsPath = path.join(process.cwd(), 'app', 'core', 'dataBase', 'models');
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
