const {appSettings} = require('../../constants');
const {Op} = require(appSettings.SEQUELIZE);
const db = require('../../dataBase').getInstance();

const {dataBaseWords: {PRICE, ASC, DESC, ID, TITLE, IMAGE_URL, DESCRIPTION, TYPE_OF_GOODS}} = require('../../constants')
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

    getGoodsByType: (typeOfGoods) => {
        const model = getDataBaseModel(typeOfGoods);

        return model.findAll({
            attributes: [ID, TITLE, IMAGE_URL, DESCRIPTION, TYPE_OF_GOODS],
            type_of_goods: typeOfGoods
        })
    },

    getGoodsBySortASC: (typeOfGoods) => {
        const model = getDataBaseModel(typeOfGoods);

        return model.findAll({
            attributes: [ID, TITLE, IMAGE_URL, DESCRIPTION, TYPE_OF_GOODS],
            order: [[PRICE, ASC]]
        })
    },

    getGoodsBySortDESC: (typeOfGoods) => {
        const model = getDataBaseModel(typeOfGoods);

        return model.findAll({
            attributes: [ID, TITLE, IMAGE_URL, DESCRIPTION, TYPE_OF_GOODS],
            order: [[PRICE, DESC]],
        })
    },

    getGoodsByPrice: (typeOfGoods, price) => {
        const model = getDataBaseModel(typeOfGoods);

        return model.findAll({
                attributes: [ID, TITLE, IMAGE_URL, DESCRIPTION, TYPE_OF_GOODS],
                where: {
                    price: {[Op.lt]: price}
                },
            }
        )
    },

};

function getDataBaseModel(typeOfGoods) {
    let model = null;

    switch (typeOfGoods) {
        case PHONES:
            model = db.getModel(PHONES);
            break;
        case TV:
            model = db.getModel(TV);
            break;
        case NOTEBOOKS:
            model = db.getModel(NOTEBOOKS);
            break;
    }

    return model;
}
