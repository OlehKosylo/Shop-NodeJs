const {
    invoiceService: {
        setInvoice, setInvoiceOfBasket, getDoesntDoneOrders, getAllOrders,
        getCompletedOrders, updateSendStatus, getAllGoods,
    }
} = require('../services');
const {makePurchase} = require('../helpers');
const {statusesCode} = require('../constants');

module.exports = {
    makePurchase: async (req, res, next) => {
        try {
            const {stripeTokenId, price} = req.body;
            await makePurchase(stripeTokenId, price);

            await setInvoice(req.body);

            // res.sendStatus(statusesCode.OK)
            res.status(statusesCode.OK).end();
        } catch (e) {
            next(e)
        }
    },

    makePurchaseOfBasket: async (req, res, next) => {
        try {
            const arrayGoods = req.arrayGoods;
            const {stripeTokenId, price} = req.body;
            await makePurchase(stripeTokenId, price);
            await setInvoiceOfBasket(arrayGoods);

            // res.sendStatus(statusesCode.OK)
            res.status(statusesCode.OK).end();
        } catch (e) {
            next(e)
        }
    },

    getDoesntDoneOrders: async (req, res, next) => {
        const orders = await getDoesntDoneOrders();

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
