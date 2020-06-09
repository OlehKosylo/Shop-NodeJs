const {commonService} = require('../../services');

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
                case 'asc':
                    allNotebooks = await commonService.getGoodsBySortASC(req.query.type_of_goods);
                    break;
                case 'desc':
                    allNotebooks = await commonService.getGoodsBySortDESC(req.query.type_of_goods);
                    break;
                case 'price':
                    allNotebooks = await commonService.getGoodsByPrice(req.query.type_of_goods, +req.query.price);
                    break;
            }

            res.json(allNotebooks)
        } catch (e) {
            next(e)
        }
    },

};
