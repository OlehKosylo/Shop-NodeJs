const {appSettings} = require('../../constants');
const stripe = require(appSettings.STRIPE)(process.env.STRIPE_SEECRET_KEY ||
    'sk_test_eL13nvKqdoSOSKp87jAcPXFI007qcoFUWg');

const {ErrorHandler} = require('../../errors');
const {statusesCode: {BAD_REQUEST}} = require('../../constants');

module.exports = (token, price) => {

    return stripe.charges.create({
        amount: price,
        source: token,
        currency: appSettings.USD
    }).catch(function (error) {
        throw new ErrorHandler(error.message, BAD_REQUEST, 4000);
    })
};
