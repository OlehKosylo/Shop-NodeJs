const db = require('../../dataBase').getInstance();
const {modelNames: {INVOICES, PHONES, NOTEBOOKS, TV}} = require('../../constants');

module.exports = {
    setInvoice: async (invoice) => {
        const InvoiceModel = db.getModel(INVOICES);

        await InvoiceModel.create({...invoice, sending_status: 0})
    },

    setInvoiceOfBasket: async (invoice) => {
        const InvoiceModel = db.getModel(INVOICES);


        await InvoiceModel.bulkCreate(invoice)
    },

    getCompletedOrders: () => {
        const InvoiceModel = db.getModel(INVOICES);

        return InvoiceModel.findAll({
            where: {sending_status: 1}
        })
    },

    getDoesntDoneOrders: () => {
        const InvoiceModel = db.getModel(INVOICES);

        return InvoiceModel.findAll({
            where: {sending_status: 0}
        })
    },

    getAllOrders: () => {
        const InvoiceModel = db.getModel(INVOICES);

        return InvoiceModel.findAll({})
    },

    getOrderById: (id) => {
        const InvoiceModel = db.getModel(INVOICES);

        return InvoiceModel.findOne({
            where:{id}
        })
    },

    updateSendStatus: async (order) => {
        const InvoiceModel = db.getModel(INVOICES);

        await InvoiceModel.update(
            {sending_status: 1},
            {where: {...order}}
        )
    },

    getAllGoods: async () => {
        const phonesModel = db.getModel(PHONES);
        const notebooksModel = db.getModel(NOTEBOOKS);
        const TVsModel = db.getModel(TV);

        const phones = await phonesModel.findAll();
        const notebook = await notebooksModel.findAll();
        const tvs = await TVsModel.findAll();

        return {phones, notebook, tvs}
    }
};
