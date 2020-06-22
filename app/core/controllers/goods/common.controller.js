const {commonService} = require('../../services');
const {dataBaseWords: {ASC, DESC, PRICE}} = require('../../constants');

module.exports = {
    getAllGoods: async (req, res, next) => {
        try {
            const allGoods = await commonService.getGoodsByType(req.query.type_of_goods);

            res.json(allGoods)
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
            let allGoods;

            switch (req.params.type) {
                case ASC:
                    allGoods = await commonService.getGoodsBySortASC(req.query.type_of_goods);
                    break;
                case DESC:
                    allGoods = await commonService.getGoodsBySortDESC(req.query.type_of_goods);
                    break;
                case PRICE:
                    allGoods = await commonService.getGoodsByPrice(req.query.type_of_goods, +req.query.price);
                    break;
            }

            res.json(allGoods)
        } catch (e) {
            next(e)
        }
    },

};
