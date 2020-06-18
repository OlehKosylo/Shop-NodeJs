const {invoiceService: {setInvoice, getDoneOrders, getAllOrders, getCompletedOrders, updateSendStatus, getAllGoods}} = require('../services');
const {makePurchase} = require('../helpers');
const {statusesCode} = require('../constants');

module.exports = {
    makePurchase: async (req, res, next) => {
        try {
            console.log(req.body);
            const {stripeTokenId, price} = req.body;
            await makePurchase(stripeTokenId, price);

            await setInvoice(req.body);

            // res.sendStatus(statusesCode.OK)
            res.status(statusesCode.OK).end();
        } catch (e) {
            next(e)
        }
    },

    getDoneOrders: async (req, res, next) => {
        const orders = await getDoneOrders();

        res.json(orders);
    },

    getCompletedOrders: async (req, res, next) => {
        const orders = await getCompletedOrders();

        res.json(orders);
    },

    getAllOrders: async (req, res, next) => {
        const orders = await getAllOrders();

        res.json(orders);
    },

    getAllGoods: async (req, res, next) => {
        const goods = await getAllGoods();

        res.json(goods);
    },

    updateSendStatus: async (req, res, next) => {
        await updateSendStatus(req.order);

        // res.sendStatus(statusesCode.OK);
        res.status(statusesCode.OK).end();
    }
};
