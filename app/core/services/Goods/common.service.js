const {Op} = require("sequelize");
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

    getGoodsByType: (typeOfGoods) => {
        const model = getDataBaseModel(typeOfGoods);

        return model.findAll({
            type_of_goods: typeOfGoods
        })
    },

    getGoodsBySortASC: (typeOfGoods) => {
        const model = getDataBaseModel(typeOfGoods);

        return model.findAll({
            order: [['price', 'ASC']]
        })
    },

    getGoodsBySortDESC: (typeOfGoods) => {
        const model = getDataBaseModel(typeOfGoods);

        return model.findAll({
            order: [['price', 'DESC']],
        })
    },

    getGoodsByPrice: (typeOfGoods, price) => {
        const model = getDataBaseModel(typeOfGoods);

        return model.findAll({
                where: {
                    price: {
                        $lt: price
                    }
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
