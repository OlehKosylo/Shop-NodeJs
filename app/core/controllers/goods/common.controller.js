const {commonService} = require('../../services');
const {dataBaseWords: {ASC, DESC, PRICE}} = require('../../constants');

module.exports = {
    getAllGoods: async (req, res, next) => {
        try {
            const allNotebooks = await commonService.getGoodsByType(req.query.type_of_goods);

            res.json(allNotebooks)
        } catch (e) {
            next(e)
        }
    },

    getGood: async (req, res, next) => {
        try {
            res.json(req.good)
        } catch (e) {
            next(e)
        }
    },

    getAllGoodsBySort: async (req, res, next) => {
        try {
            let allNotebooks;

            switch (req.params.type) {
                case ASC.toLocaleLowerCase():
                    allNotebooks = await commonService.getGoodsBySortASC(req.query.type_of_goods);
                    break;
                case DESC.toLocaleLowerCase():
                    allNotebooks = await commonService.getGoodsBySortDESC(req.query.type_of_goods);
                    break;
                case PRICE.toLocaleLowerCase():
                    allNotebooks = await commonService.getGoodsByPrice(req.query.type_of_goods, +req.query.price);
                    break;
            }

            res.json(allNotebooks)
        } catch (e) {
            next(e)
        }
    },
};
