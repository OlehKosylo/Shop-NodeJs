const db = require('../../dataBase').getInstance();
const {modelNames: {PHONES, TV, NOTEBOOKS}} = require('../../constants');

module.exports = {
    getGoodByTitle: (title, typeOfGoods) => {
        const model = getDataBaseModel(typeOfGoods);

        return model.findOne({
            where: {title}
        })
    },

    getGoodById: (id, typeOfGoods) => {
        const model = getDataBaseModel(typeOfGoods);

        return model.findOne({
            where: {id}
        })
    },

};

function getDataBaseModel(typeOfGoods) {
    let model = null;

    switch (typeOfGoods) {
        case 'Phone':
            model = db.getModel(PHONES);
            break;
        case 'TV':
            model = db.getModel(TV);
            break;
        case 'Notebook':
            model = db.getModel(NOTEBOOKS);
            break;
    }

    return model;
}
