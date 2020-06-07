const db = require('../../dataBase').getInstance();
const {modelNames: {PHONES, TV, NOTEBOOKS}} = require('../../constants');

module.exports = {
    getGoodByTitle: (title, typeOfGoods) => {
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

        const findOne = model.findOne({
            where: {title}
        });
        console.log(findOne);

        return model.findOne({
            where: {title}
        })
    },

};
