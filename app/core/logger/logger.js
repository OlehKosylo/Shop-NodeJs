const {appSettings} = require('../constants');

const {createLogger, transports, format} = require(appSettings.WINSTON);

const logger = createLogger({
  transports: [
      new transports.File({
          filename:'Error.log',
          level: 'error',
          format: format.combine(format.timestamp(), format.json())
      })
  ]
});

module.exports = logger;
