module.exports.loginProcess = require('./auth/login');
module.exports.registrationProcess = require('./auth/registration');
module.exports.isActionTokenExist = require('./auth/isActionTokenExist.middleware');
module.exports.isEmailExistRecover = require('./auth/isEmailExist.middleware');
module.exports.isRecoverTokenExist = require('./auth/recoverPassword/isRecoverTokenExist.middleware');


module.exports.TVMiddlewares = require('./goods/tv');
module.exports.phoneMiddlewares = require('./goods/phones');
module.exports.notebookMiddlewares = require('./goods/notebooks');

module.exports.isTitleExist = require('./goods/common/isTitleExist.middleware');
module.exports.idModelExist = require('./goods/common/idExist.middleware');

module.exports.isUserIdExist = require('./user/isUserIdExist.middleware');
module.exports.isUserModelValid = require('./user/isUserModelValid.middleware');


