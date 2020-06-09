const db = require('../../dataBase').getInstance();
const {modelNames: {INVOICES}} = require('../../constants');

module.exports = {
    setInvoice: async (invoice) => {
        const InvoiceModel = db.getModel(INVOICES);

        await InvoiceModel.create({...invoice, sending_status: 0})
    },

    getCompletedOrders: () => {
        const InvoiceModel = db.getModel(INVOICES);

        return InvoiceModel.findAll({
            where: {sending_status: 1}
        })
    },

    getDoneOrders: () => {
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
    }
};
