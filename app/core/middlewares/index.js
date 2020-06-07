module.exports.registrationProcess = require('./auth/registration');
module.exports.isActionTokenExist = require('./auth/isActionTokenExist.middleware');
module.exports.loginProcess = require('./auth/login');
module.exports.isEmailExistRecover = require('./auth/isEmailExist.middleware');
module.exports.isRecoverTokenExist = require('./auth/recoverPassword/isRecoverTokenExist.middleware');
