const {appSettings} = require('../../constants');
const {Router} = require(appSettings.EXPRESS);

const {invoicesController} = require('../../controllers');
const {stripe: {isInvoiceValid, isOrder}} = require('../../middlewares');

const invoicesRouter = Router();

invoicesRouter.get('/', invoicesController.getDoneOrders);
invoicesRouter.get('/completed', invoicesController.getCompletedOrders);
invoicesRouter.get('/all', invoicesController.getAllOrders);

invoicesRouter.post('/purchase', isInvoiceValid, invoicesController.makePurchase);
invoicesRouter.post('/sendGood', isOrder, invoicesController.updateSendStatus);

invoicesRouter.get('/allGoods', invoicesController.getAllGoods);

module.exports = invoicesRouter;
